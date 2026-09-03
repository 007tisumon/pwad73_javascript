// const myArr = ["Hello", "World", "This", "Is", "A", "Test"];

// myArr.push("New Element");
// myArr.pop(1);

// console.log(myArr)
// alert("Hello World");
// let x = new String("John"); // x is an object
// let y = new String("John"); // y is an object
// let text = document.getElementsByClassName("card")[0]
// let text2 = document.getElementsByClassName("card")[0].children[1]
// console.log(text);
// console.log("text: ", text2);

const marks = parseInt(prompt("Enter a number Marks: "));



const show = document.getElementById("show")
if (isNaN(marks) || marks < 0 || marks > 100) {
   show.innerText = "Please enter a valid number between 0 and 100";
} else {
    if (marks >= 80) {
      show.innerText = "You got an A+";
    } else if (marks >= 70) {
      show.innerText = "You got an A";
    } else if (marks >= 60) {
      show.innerText = "You got a B";
    } else {
      show.innerText = "You Joy Bangla";
    }
}



