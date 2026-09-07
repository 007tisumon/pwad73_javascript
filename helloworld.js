// alert("joy Bangla")

// document.write("<h1>hello world</h1>")
//   document.getElementById("demoids").innerText = "Hello worlds"

// console.log(document)


const myFunc = (ban ,name) => {
  const output = "Hello world " + ban 
  const showName=(name)=>{
    let nam = prompt("Enter your Name ")
    console.log(nam)
    alert(`Welcome ${nam}`)
  }
  const oddEven=()=>{
    const number = parseInt(prompt("Enter A Number: "))
    if(number % 2 === 0){
      return "your number is even" + number
    }else{
      return "your number is odd " + number;
    }
  }
  return {output,showName, oddEven}
};
