/* 모달창 열기 */
document
  .getElementsByClassName("work_type")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("modal_bk_bg")[0]
      .classList.toggle("hidden");
  });
document
  .getElementsByClassName("select_skill")[0]
  .addEventListener("click", function () {
    document
      .getElementsByClassName("modal_bk_bg")[1]
      .classList.toggle("hidden");
  });
/* 드랍다운 열기 */
document
  .getElementsByClassName("work_form")[0]
  .addEventListener("click", function () {
    document.querySelector(".work_form .dropdown").classList.toggle("hidden");
  });
/* 드랍다운 선택시키기 */
const workFormLis = document.querySelectorAll(".work_form .dropdown > *");
console.log(Array.from(workFormLis));
const removeAllSelected = function () {
  Array.from(workFormLis).forEach((v) => {
    v.classList.remove("selected");
  });
};
Array.from(workFormLis).forEach((v, i) => {
  v.addEventListener("click", function () {
    console.log(v);
    console.log("안녕");
    removeAllSelected();
    workFormLis[i].classList.add("selected");
  });
});

/* 모달창 닫기 */
const close_btn = document.getElementsByClassName("close");
Array.from(close_btn).forEach((v, i) => {
  v.addEventListener("click", function () {
    document
      .getElementsByClassName("modal_bk_bg")
      [i].classList.toggle("hidden");
  });
});
