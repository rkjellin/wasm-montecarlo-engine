# wasm-montecarlo-engine

Simple experiment on integrating an asynchronous calculation engine running as a background service in a web application.
The frontend is written in typescript with react and mobx. The calculation engine is written as rust wasm library wrapped in a typescript web worker. The web worker is exposed to frontend as an asynchronous service.
1) The frontend communicates calculation requests via messages to the background worker. 
2) The worker in turn call into the wasm-engine for the actual calculation (trivial path simulations of geometric brownian motion). 
3) The results are reassembled into a userfriendly structure and passed back to the frontend and stored in the mobx-store.
