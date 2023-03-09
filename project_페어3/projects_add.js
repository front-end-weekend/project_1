/* 모달창 닫기 */
document.getElementById('closeBoxText2').addEventListener('click', function(){
    document.getElementsByClassName('modal_bk_bg')[0].classList.add('close');
});

/* 히든 인포 열기 & 닫기 */
let clickCount = 0;
document.getElementById('hiddenInfo').addEventListener('click', function(){
    clickCount ++;
    if(clickCount % 2 == 1){
        document.getElementById('hiddenInfoFull').classList.remove('close');
    } else {
        document.getElementById('hiddenInfoFull').classList.add('close');
    }
});

/* 히든 인포 아이콘으로 열기 & 닫기 */
let clickCount1 = 0;
document.getElementById('hiddenInfoIcon').addEventListener('click', function(){
    clickCount1 ++;
    if(clickCount1 % 2 == 1){
        document.getElementById('hiddenInfoFull').classList.remove('close');
    } else {
        document.getElementById('hiddenInfoFull').classList.add('close');
    }
});

