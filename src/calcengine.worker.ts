const ctx = self as never as Worker;
import('montecarlo').then(module => {
    ctx.postMessage({
        hej: "bajs"
    });
    console.log("hi from worker");
});
