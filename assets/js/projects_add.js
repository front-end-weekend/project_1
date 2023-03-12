/* 모달창 닫기 */
document.getElementById('closeBoxText2').addEventListener('click', function () {
  document.getElementsByClassName('modal_bk_bg')[0].classList.add('close');
});

/* 히든 인포 열기 & 닫기 */
let clickCount = 0;
document.getElementById('hiddenInfo').addEventListener('click', function () {
  clickCount++;
  if (clickCount % 2 == 1) {
    document.getElementById('hiddenInfoFull').classList.remove('close');
  } else {
    document.getElementById('hiddenInfoFull').classList.add('close');
  }
});

/* 히든 인포 아이콘으로 열기 & 닫기 */
let clickCount1 = 0;
document.getElementById('hiddenInfoIcon').addEventListener('click', function () {
  clickCount1++;
  if (clickCount1 % 2 == 1) {
    document.getElementById('hiddenInfoFull').classList.remove('close');
  } else {
    document.getElementById('hiddenInfoFull').classList.add('close');
  }
});

/* 히든 인포 2 & 아이콘 열기 닫기 */
let clickCount2 = 0;
const checkboxWrapper2 = document.querySelector('#checkboxWrapper2 input[type="checkbox"] + label');
const checkboxWrapper3 = document.querySelector('#checkboxWrapper3 input[type="checkbox"] + label');
const checkboxWrapper4 = document.querySelector('#checkboxWrapper4 input[type="checkbox"] + label');
document.getElementById('hiddenInfo2').addEventListener('click', function () {
  clickCount2++;
  if (clickCount2 % 2 == 1) {
    document.getElementById('hiddenInfo3').classList.remove('close');
    document.getElementById('hiddenInfo2Icon').src = './ico_up.png';
    document.getElementById('mainContainer').style.height = '190vh';
    document.getElementById('infoBox').style.height = '148vh';
    document.getElementById('hiddenInfo2').style.borderRadius = '4px 4px 0px 0px';
  } else {
    document.getElementById('hiddenInfo3').classList.add('close');
    document.getElementById('hiddenInfo2Icon').src = './ico_down.png';
    document.getElementById('mainContainer').style.height = '167vh';
    document.getElementById('infoBox').style.height = '125vh';
  }
});

let clickCount5 = 0;
document.getElementById('hiddenInfo2Icon').addEventListener('click', function () {
  clickCount5++;
  if (clickCount3 % 2 == 1) {
    document.getElementById('hiddenInfo3').classList.remove('close');
    document.getElementById('hiddenInfo2Icon').src = './ico_up.png';
    document.getElementById('mainContainer').style.height = '190vh';
    document.getElementById('infoBox').style.height = '148vh';
    document.getElementById('hiddenInfo2').style.borderRadius = '4px 4px 0px 0px';
  } else {
    document.getElementById('hiddenInfo3').classList.add('close');
    document.getElementById('hiddenInfo2Icon').src = './ico_down.png';
    document.getElementById('mainContainer').style.height = '167vh';
    document.getElementById('infoBox').style.height = '125vh';
  }
});

/* 사업자가 아닙니다 체크박스 체크했을때 이벤트 발생 */

let clickCount3 = 0;
checkboxWrapper2.addEventListener('click', function () {
  clickCount3++;
  if (clickCount3 % 2 == 1) {
    document.getElementById('redDot1').classList.add('close');
    document.getElementById('mainInput2').readOnly = true;
    document.getElementById('mainInput2').style.backgroundColor = 'rgb(189, 189, 189, 0.574)';
    mainInput2.style.cursor = 'not-allowed';
    mainInput2.addEventListener('mouseover', function () {
      mainInput2.style.borderColor = 'rgba(189, 189, 189, 0.574)';
    });
    mainInput2.addEventListener('mouseout', function () {
      mainInput2.style.borderColor = 'rgba(189, 189, 189)';
    });
    /*placeholder 클릭했을때 border 컬러 변경 해야함*/
  } else {
    document.getElementById('redDot1').classList.remove('close');
    document.getElementById('mainInput2').readOnly = false;
    document.getElementById('mainInput2').style.backgroundColor = 'white';
    mainInput2.style.cursor = 'auto';
    mainInput2.addEventListener('mouseover', function () {
      mainInput2.style.borderColor = '#3365FD';
    });
    mainInput2.addEventListener('mouseout', function () {
      mainInput2.style.borderColor = 'rgba(189, 189, 189)';
    });
  }
});

/* mainInput2에 place홀더의 값이 비어있을때 이벤트 발생 -- 실패 */

let clickCount4 = 0;
mainInput2.addEventListener('click', function () {
  clickCount4++;
  if (clickCount4 % 2 == 1) {
    mainInput2.addEventListener('focus', function () {
      if (mainInput2.placeholder === '') {
        mainInput2.placeholder = '값을 입력해주세요.';
        mainInput2.style.color = 'red';
      }
      mainInput2.style.borderColor = 'black';
    });

    mainInput2.addEventListener('blur', function () {
      if (mainInput2.placeholder === '값을 입력해주세요.') {
        mainInput2.placeholder = '';
        mainInput2.style.color = '';
      }
      mainInput2.style.borderColor = '#ddd';
    });
  }
});

/* 픽스되어있는 코스트 아이콘을 눌렀을때 발상하는 이벤트 */

document.getElementById('ghostBtn').addEventListener('click', function () {
  document.getElementById('ghostHidden').classList.remove('close');
});

document.getElementsByClassName('ghost_hidden_ico2')[0].addEventListener('click', function () {
  document.getElementById('ghostHidden').classList.add('close');
});
