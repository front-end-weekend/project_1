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
const workFormText = document.querySelector(".work_form .criterion_value");
const removeAllSelected = function (lis) {
  Array.from(lis).forEach((v) => {
    v.classList.remove("selected");
  });
};
Array.from(workFormLis).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    removeAllSelected(workFormLis);
    workFormLis[i].classList.add("selected");
    workFormText.innerHTML = document.querySelector(
      ".work_form li.selected div"
    ).innerHTML;
  });
});
/* 직군/직무 모달창 내부 구현 */
const firstModalButton1 = document.querySelector("#work_type_modal .area");
const firstModalButton2 = document.querySelector("#work_type_modal .task");
const firstModalDropdowns = document.querySelectorAll(
  "#work_type_modal .dropdown"
);
firstModalButton1.addEventListener("click", function () {
  firstModalDropdowns[0].classList.toggle("hidden");
});
/* 첫 드랍다운 선택 시 토글됨 */
Array.from(firstModalDropdowns[0].children).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    removeAllSelected(firstModalDropdowns[0].children);
    firstModalDropdowns[0].children[i].classList.add("selected");
    firstModalButton1.children[0].innerHTML =
      firstModalDropdowns[0].children[i].children[0].innerHTML;
    firstModalButton2.classList.remove("hidden");
    firstModalDropdowns[1].classList.toggle("hidden");
  });
});
firstModalButton2.addEventListener("click", function () {
  firstModalDropdowns[1].classList.toggle("hidden");
});
Array.from(firstModalDropdowns[1].children).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    // firstModalButton1.children[1].innerHTML =
    //   firstModalDropdowns[1].children[i].children[0].innerHTML;
    firstModalDropdowns[1].children[i].classList.toggle("selected");
    firstModalButton2.classList.toggle("selected");
    // 내일 이 문제 해결하기
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
