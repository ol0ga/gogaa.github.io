const clock = document.querySelector("h2#clock");

function getClock() {
//    console.log("hello");
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; 
    //`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock()
//setInterval(sayHello,5000);
setInterval(getClock, 1000);
