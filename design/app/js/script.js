// undeadskeleton faulty dropdown menu
// const btn = document.querySelectorAll(".btn");
// const quesBlock = document.querySelector(".question-block");
// let currBlock, sibBlock;
// const ansBlock = document.querySelectorAll(".quest");

// for (const button of btn) {
//   button.addEventListener("click", () => {
//     currBlock = button.parentElement;
//     sibBlock = currBlock.nextElementSibling;
//     if (sibBlock.classList.contains("dropup")) {
//       sibBlock.classList.toggle("dropup");
//       sibBlock.classList.toggle("dropdown");
//     } else if (sibBlock.classList.contains("dropdown")) {
//       sibBlock.classList.toggle("dropdown");
//       sibBlock.classList.toggle("dropup");
//     }
//   });
// }

const btn = document.querySelectorAll(".btn");
const quesBlock = document.querySelectorAll(".question-block");
const innerCont = document.querySelector(".container_inner");
for (const ques of quesBlock) {
  ques.addEventListener("click", () => {
    let ansBlock = ques.lastElementChild;
    ansBlock.classList.toggle("active");

    let imgSrc = ques.querySelector(".btn");

    if (imgSrc.src.includes("icon-plus.svg")) {
      imgSrc.setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      imgSrc.setAttribute("src", "assets/images/icon-plus.svg");
    }
    let qBheight = ques.offsetHeight;
    let icHeight = innerCont.offsetHeight;

    innerCont.style.maxHeight = `${qBheight}+${icHeight}`;

    console.log(innerCont.offsetHeight);
  });
}
