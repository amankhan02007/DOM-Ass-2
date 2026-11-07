//Task 1
const heading = document.getElementById("heading");
console.log(heading);
heading.textContent = "DOM Element Selected By ID";

//Task 2
const para = document.getElementsByTagName("#p");
console.log(p);
p[0].textContent = "First Paragraph is Updated ";

//Task 3
const btn = document.getElementsByClassName("btn");
console.log(btn);
btn[1].textContent = "Click Me";

//Task 4
const heading2 = document.querySelector("#hed2")
console.log(heading2)
heading2.style.color = "blue";

//Task 5
const li = document.querySelectorAll("li");
console.log(li);
li.forEach(el => {
    el.style.color = "green";
});

//Task 6
const last = document.querySelector(".last");
console.log(last);
last.style.fontSize = "50px";
last.style.color = "red";
last.style.backgroundColor = "yellow";