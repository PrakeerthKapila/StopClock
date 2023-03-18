let hr=min=sec=ms="0"+0,//Initializing hours sec millisecs
    startTimer;//Declaring StartingTimer
let startButton=document.querySelector(".start");//Getting prop of start
    stopButton = document.querySelector(".stop");
   resetButton = document.querySelector(".reset");
   startButton.addEventListener("click", start);
   stopButton.addEventListener("click", stop);
   resetButton.addEventListener("click", reset);
function start() {
    startButton.classList.add("active");
    stopButton.classList.remove("stopActive");
    startTimer = setInterval(()=>{
      ms++
      ms=ms<10?"0"+ms:ms;
      if(ms==100){
        sec++;
        sec=sec<10?"0"+sec:sec;
        ms = "0" + 0;}
      if(sec==60){
        min++;
        min=min<10?"0"+min:min;
        sec="0"+0;}
      if(min==60){
        hr++;
        hr=hr<10?"0"+hr:hr;
        min="0"+0;}
      putValue();
    },10);
}
function stop() {
    startButton.classList.remove("active");
    stopButton.classList.add("stopActive");
    clearInterval(startTimer);
}
function reset() {
    startButton.classList.remove("active");
    stopButton.classList.remove("stopActive");
    clearInterval(startTimer);
    hr=min=sec=ms="0"+0;
    putValue();
}
function putValue() {
    document.querySelector(".millisecond").innerText = ms;
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
    document.querySelector(".hour").innerText = hr;
}