// Callback in javascript

start(stop);

function start(Callback) {
    console.log(`Hello`);
    console.log(`start function`);
    Callback();
}

function stop() {
    console.log(`GoodBye`);
    console.log(`stop function`);
}