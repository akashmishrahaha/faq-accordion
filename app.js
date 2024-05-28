// console.log("Hello world")
// window.onload = function() {
//   const accordionItems = document.querySelectorAll(".title")
//   accordionItems.forEach(item => {
//     item.addEventListener("click", () => {
//       const isItemOpen = item.classList.contains("open")
//       if (!isItemOpen) {
//         item.classList.add("open")
//         const content = item.querySelector(".content");
//         content.style.display = "block";
//       }
//     })
//   })
//   const accordionPara = document.querySelectorAll(".content")
//   accordionPara.forEach(item => {
//     item.addEventListener("click", () => {
//       const isItemOpen = item.classList.contains("open")
//       if (!isItemOpen) {
//         item.classList.add("open")
//         const content = item.querySelector(".content");
//         content.style.display = "none";
//       }
//     })
//   })
// }

// window.onload = function() {
//   const accordionItems = document.querySelectorAll(".title");

//   accordionItems.forEach(item => {
//     item.addEventListener("click", () => {
//       const content = item.querySelector(".content");
//       const isItemOpen = item.classList.contains("open");

//       if (!isItemOpen) {
//         item.classList.add("open");
//         content.style.display = "block";
//       } else {
//         item.classList.remove("open");
//         content.style.display = "none";
//       }
//     });
//   });
// };


window.onload = function() {
  const accordionItems = document.querySelectorAll(".title");

  accordionItems.forEach(item => {
    const questionIcon = item.querySelector(".question-icon");
    const icon = questionIcon.querySelector(".icon");
    const minusIcon = questionIcon.querySelector(".minus");
    const content = item.querySelector(".content");

    icon.addEventListener("click", () => {
      icon.style.display = "none";
      minusIcon.style.display = "inline-block";
      content.style.display = "block";
    });

    minusIcon.addEventListener("click", () => {
      icon.style.display = "inline-block";
      minusIcon.style.display = "none";
      content.style.display = "none";
    });
  });
};
