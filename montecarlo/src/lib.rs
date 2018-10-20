extern crate cfg_if;
extern crate rand;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use rand::distributions::{Normal, StandardNormal};
use rand::prelude::*;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub fn render_path() -> Vec<f64> {
    vec![1.0, 1.3, 1.2, 1.1]
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, montecarlo!");
}

#[wasm_bindgen]
pub struct Process {
    pub vol: f64,
    pub rate: f64,
    pub initial_value: f64,
}

#[wasm_bindgen]
impl Process {
    #[wasm_bindgen(constructor)]
    pub fn new(vol: f64, rate: f64, initial_value: f64) -> Process {
        Process {
            vol,
            rate,
            initial_value,
        }
    }

    fn calc_incr(&self, initial_value: f64, dt: f64) -> f64 {
        let adj_drift = self.rate - 0.5 * self.vol * self.vol;
        let dw = thread_rng().sample(StandardNormal);
        initial_value * (f64::exp(adj_drift * dt + self.vol * f64::sqrt(dt) * dw))
    }

    fn calc_path_mut(&self, path_slice: &mut [f64], dt: f64, nbr_of_pts: i32) {
        let mut curr_value = self.initial_value;
        path_slice[0] = curr_value;
        for i in 1..nbr_of_pts {
            curr_value = self.calc_incr(curr_value, dt);
            path_slice[i as usize] = curr_value;
        }
    }

    #[wasm_bindgen]
    pub fn calc_paths(&self, tau: f64, nbr_of_steps: i32, nbr_of_paths: i32) -> Vec<f64> {
        let dt = tau / (nbr_of_steps as f64);
        let nbr_of_pts = nbr_of_steps + 1; /* include starting point */
        let mut paths: Vec<f64> = vec![0.0; (nbr_of_paths * nbr_of_pts) as usize];
        for _i in 0..nbr_of_paths {
            let start_idx = (_i * nbr_of_pts) as usize;
            let end_idx = start_idx + nbr_of_pts as usize;
            self.calc_path_mut(&mut paths[start_idx..end_idx], dt, nbr_of_pts);
        }
        paths
    }
}

#[test]
fn test_calc_paths() {
    let pr = Process::new(0.15, 0.01, 15.0);
    let paths = pr.calc_paths(2.0, 1, 2000);
    assert_eq!(paths.len(), 4000);
}
