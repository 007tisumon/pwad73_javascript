setTimeout(() => {
  disPlayMessage("Joy Bangla");
}, 3000);

function disPlayMessage(msg) {
  document.getElementById("demo").innerText = msg;
}


let timer;

const startTimer =()=>{
  clearInterval(timer)
  let count = 1;
  displayCount(count)
  timer = setInterval(()=>{
    count++;
    displayCount(count)
  }, 1000)
}  
const stopTimer =()=>{
    clearInterval(timer);
    // document.getElementById("timer").innerHTML = "Timer stopped.";
}

const displayCount=(count)=>{
    document.getElementById("timer").innerHTML = `Timer: ${count} seconds`;
}