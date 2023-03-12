/* TODO : 페이지네이션 */

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
const areaItemsDisplay = document.getElementsByClassName("area_items")[0];
const areaItems = [
  "웹 개발자",
  "서버 개발자",
  "소프트웨어 엔지니어",
  "프론트엔드 개발자",
  "자바 개발자",
  "안드로이드 개발자",
  "C, C++ 개발자",
  "Node.js 개발자",
  "데이터 엔지니어",
  "iOS 개발자",
  "시스템, 네트워크 관리자",
  "파이썬 개발자",
  "DevOps / 시스템 관리자",
  "머신러닝 엔지니어",
  "개발 매니저",
  "데이터 사이언티스트",
  "기술 지원",
  "빅데이터 엔지니어",
  "QA, 테스트 엔지니어",
  "보안 엔지니어",
  "프로덕트 매니저",
  "블록체인 플랫폼 엔지니어",
  "임베디드 개발자",
  "PHP 개발자",
  "하드웨어 엔지니어",
  "웹 퍼블리셔",
  ".NET 개발자",
  "DBA",
  "크로스플랫폼 개발자",
  "영상, 음성 엔지니어",
  "그래픽스 엔지니어",
  "CTO, Chief Technology Officer",
  "ERP전문가",
  "BI 엔지니어",
  "루비온레일즈 개발자",
  "VR 엔지니어",
  "CIO, Chief Information Officer",
];

/* 직무를 선택해주세요(n개) 부분 업데이트해 주는 함수 */
const setAreaNumber = function () {
  firstModalButton2.children[0].children[0].innerHTML = `(${
    Array.from(firstModalDropdowns[1].children).filter((element) =>
      element.classList.contains("selected")
    ).length
  }개)`;
};
/* 직무 선택 시 밑에 뜨는 것 구현, 지울 수 있게까지 함 */
const setAreaItemsDisplay = function () {
  areaItemsDisplay.innerHTML = "";
  Array.from(firstModalDropdowns[1].children).forEach((v, i) => {
    if (v.classList.contains("selected")) {
      areaItemsDisplay.innerHTML += `<div class="hover_blue">${areaItems[i]}<span id="${i}"> ╳</span></div>`;
    }
  });
  Array.from(areaItemsDisplay.children).forEach((v) => {
    v.children[0].addEventListener("click", function () {
      firstModalDropdowns[1].children[v.children[0].id].classList.toggle(
        "selected"
      );
      v.remove();
      setAreaNumber();
    });
  });
};
/* 직군을 선택해주세요 클릭 시 드랍다운 내려옴 */
firstModalButton1.addEventListener("click", function () {
  firstModalDropdowns[0].classList.toggle("hidden");
});
setAreaNumber();
/* 직군 드랍다운 선택 시 다음 드랍다운이 생김 */
Array.from(firstModalDropdowns[0].children).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    removeAllSelected(firstModalDropdowns[0].children);
    firstModalDropdowns[0].children[i].classList.add("selected");
    firstModalButton1.children[0].innerHTML =
      firstModalDropdowns[0].children[i].children[0].innerHTML;
    firstModalButton2.classList.remove("hidden");
    firstModalDropdowns[1].classList.remove("hidden");
    firstModalDropdowns[1].classList.toggle("selected");
  });
});
/* 직무를 선택해주세요 클릭 시 드랍다운 내려옴 */
firstModalButton2.addEventListener("click", function () {
  firstModalDropdowns[1].classList.toggle("hidden");
});
/* 직무 버튼 드랍다운 클릭 시 */
Array.from(firstModalDropdowns[1].children).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    firstModalDropdowns[1].children[i].classList.toggle("selected");
    firstModalDropdowns[1].classList.toggle("hidden");
    setAreaNumber();
    setAreaItemsDisplay();
  });
});
/* 초기화 버튼 */
const refreshButtons = document.getElementsByClassName("refresh");
const skillInput = document.querySelector(".skill input");
refreshButtons[0].addEventListener("click", function () {
  removeAllSelected(firstModalDropdowns[0].children);
  removeAllSelected(firstModalDropdowns[1].children);
  firstModalDropdowns[0].classList.add("hidden");
  firstModalDropdowns[1].classList.add("hidden");
  firstModalButton2.classList.add("hidden");
  areaItemsDisplay.innerHTML = "";
  setAreaNumber();
});
refreshButtons[1].addEventListener("click", function () {
  skillInput.value = "";
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
/* 확인 버튼 2개 */
const confirmButtons = document.getElementsByClassName("confirm");
const workTypeText = document.querySelector(".work_type .criterion_value");
confirmButtons[0].addEventListener("click", function () {
  try {
    workTypeText.innerHTML = document.querySelector(
      ".area li.selected div"
    ).innerHTML;
  } catch (error) {
    workTypeText.innerHTML = "전체";
  }
  document.getElementsByClassName("modal_bk_bg")[0].classList.toggle("hidden");
});
confirmButtons[1].addEventListener("click", function () {
  document.getElementsByClassName("modal_bk_bg")[1].classList.toggle("hidden");
});
/* 토글 버튼 */
const toggle = document.getElementsByClassName("toggle_switch")[0];
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
});
/* 정렬 기준 선택 시 드랍다운 */
const sort = document.querySelector(".sort .criterion");
const sortDropdown = document.querySelector(".sort .dropdown");
const sortLis = document.querySelectorAll(".sort .dropdown > *");
sort.addEventListener("click", function () {
  sortDropdown.classList.toggle("hidden");
});
Array.from(sortLis).forEach((v, i) => {
  v.innerHTML += "<div>✓</div>";
  v.addEventListener("click", function () {
    removeAllSelected(sortLis);
    sortLis[i].classList.toggle("selected");
    sort.children[0].innerHTML = document.querySelector(
      ".sort li.selected div"
    ).innerHTML;
  });
});
