// 헤더 안내문구
function showGuide() {
  let sideGuide = document.getElementById("guide_id");
  sideGuide.display = "block";
  console.log(sideGuide);
  setTimeout(function () {
    sideGuide.style.display = "none";
  }, 5000);
}

(function () {
  showGuide();
})();
