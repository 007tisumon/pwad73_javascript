const mcqInput = document.querySelector(".mcq");
const desInput = document.querySelector(".des");
const evdInput = document.querySelector(".evd");
const formBtn = document.querySelector(".btn");

const show = document.querySelector(".show");

// console.log(mcqInput, desInput, evdInput);
formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const mcq = Number(mcqInput.value) || 0;
  const des = Number(desInput.value) || 0;
  const evd = Number(evdInput.value) || 0;

  show.textContent = mcq >= 80 && des >= 60 && evd >= 60 ? "passed" : "failed";
});

const factBtn = document.querySelector(".factSub");
const factShow = document.querySelector(".factShow");
const factNum = document.querySelector(".fact");

factBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const num = Number(factNum.value) || 1;

  function getFatc(num) {
    if (num < 0) return;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  factShow.textContent = getFatc(num);
});

const obj = {
  name: "Sumon",
  fn: function () {
    console.log("fn funtion");
  },
};

const arr = new Array([1,2,3])

console.log('arr', arr[0][0])

console.log(typeof(obj.fn));