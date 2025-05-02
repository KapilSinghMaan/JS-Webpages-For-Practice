// Callback in javascript

start(stop);

function start(Callback) {
    console.log(`Hello`);
    Callback();
}

function stop() {
    console.log(`GoodBye`);
}