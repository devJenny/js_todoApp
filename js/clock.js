const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `🎁YOUR PRESENT🎁<br>${year}/${month}/${days} <br> ${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000)