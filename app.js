//  let count = 0;
//  let increase = document.getElementById("increase");
//  let decrease = document.getElementById("decrease");
//  let reset = document.getElementById("reset");
//  let span = document.getElementsByTagName("span")[0];

//  let button = document.querySelectorAll(".btn");

//  button.forEach((btn) => {
//    btn.addEventListener("click", (e) => {
//      let current = e.currentTarget.classList;
//      if (current.contains("increase")) {
//        count++;
//      } else if (current.contains("decrease")) {
//        count--;
//      } else {
//        count = 0;
//      }

//      count < 0
//        ? (span.style.color = "red")
//        : count > 0
//        ? (span.style.color = "green")
//        : (span.style.color = "black");
//      span.textContent = count;
//    });
//  });


const increase =document.querySelector(".increase")
const reset =document.querySelector(".reset")
const decrease=document.querySelector(".decrease")
const ird =document.querySelector(".ird")
const number=document.querySelector(".number")
let counter=0;
number.textContent=counter


ird.addEventListener("click",(e)=>{
console.log(e.target);
if(e.target.classList.contains("increase")){
  counter++
}else if(e.target.classList.contains("decrease")){
  counter--;
}else if(e.target.classList.contains("reset")){
  counter=0
}

if (counter ===0) {
  number.style.color = "black";
} else if (counter < 0) {
  number.style.color = "yellow";
} else {
  number.style.color = "red";
}

number.textContent = counter;
});

