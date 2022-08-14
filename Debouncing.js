let ctr = 0;

function getData() {
    console.log("Fetching data: " + ctr++);
}

function myDebounce(callback, delay) {
    let timer;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback();
        }, delay);
    }
}

const BetterFunction =  myDebounce(getData, 5000);