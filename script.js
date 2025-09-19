// const button = document.querySelector("button");
// const body = document.body;
// const container = document.querySelector(".container");

// body.addEventListener("click", () => {
//   console.log("body");
// });

// container.addEventListener("click", (event) => {
//   console.log("container");
// });

// button.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("button");
// });

// Event Delegation

// const el1 = document.querySelector(".el-1");
// const el2 = document.querySelector(".el-2");
// const el3 = document.querySelector(".el-3");

// el1.addEventListener("click", () => {
//   console.log("el1");
// });

// el2.addEventListener("click", () => {
//   console.log("el2");
// });

// el3.addEventListener("click", () => {
//   console.log("el3");
// });

// document.addEventListener("click", (event) => {
//   if (!event.target) {
//     return;
//   }
//   if (
//     event.target.matches(".el-1") ||
//     event.target.matches(".el-2") ||
//     event.target.matches(".el-3")
//   ) {
//     console.log(event.target.textContent);
//   }
// });

// More Methods

const container = document.querySelector(".container");
const child1 = document.querySelector(".child2");

const link = document.querySelector(".link");

console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(child1.nextSibling);
console.log(child1.previousElementSibling);

console.log(child1.closest(".container"));

link.setAttribute("href", "https://www.google.com");
