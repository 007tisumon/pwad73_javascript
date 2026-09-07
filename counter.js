// const counterShow = document.querySelector("#counter");
// const incBtn = document.querySelector(".incBtn");
// const decBtn = document.querySelector(".decBtn");

// const state = {
//     count : 0,
// }

// function render(){
//     counterShow.textContent = state.count;
// }

// function incrementCount(){
//     state.count += 1
//     render()
// }

// function decreamentCount(){
//     state.count -=1
//     render()
// }

// incBtn.addEventListener('click',incrementCount)
// decBtn.addEventListener('click',decreamentCount)

// render()


// var number = 10;
// let num = 10;

// function check() {
//  var number = 12
//  let num = 13
//   console.log("local var number", number);
//   console.log("local let num:", num);
// }
// check();
// console.log(number)
// console.log(num)



const num = parseInt(prompt("input a number"))

function oddEven(){
    const num = parseInt(prompt("input a number"));
    if(num % 2 == 0){
        document.write(`${num} is even number`)
    }else{
        document.write(`${num} is even number`);
    }
    return true
}