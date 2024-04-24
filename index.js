function showTime() {
    let curentDate = new Date();
    let hours = curentDate.getHours();
    let minutes = (curentDate.getMinutes() + 1);
    let seconds = (curentDate.getSeconds() + 1);
    var newDate = new Date().toDateString();
    console.log(newDate);
    console.log(hours + ":" + minutes + ":" + seconds);
    let currentTime = `${hours}:${minutes}:${seconds}`;
    let clock_container = document.getElementsByTagName("span");
    setTimeout(showTime, 1000);
    clock_container[0].innerText = currentTime;

    var dateContainer = document.getElementsByTagName("p");
    dateContainer[0].innerText = newDate;
}




