
function changeItem(){
  let info = document.querySelector('.info').style.display = "block";
}
function rechangeItem(){
  let info = document.querySelector('.info').style.display = "none";
}

function changeItemS(){
  let info = document.querySelector('.infoS').style.display = "block";
}
function rechangeItemS(){
  let info = document.querySelector('.infoS').style.display = "none";
}

function changeItemT(){
  let info = document.querySelector('.infoT').style.display = "block";
}
function rechangeItemT(){
  let info = document.querySelector('.infoT').style.display = "none";
}

const tabsBtn = document.querySelectorAll('.buy__tabs_nav_btn');
const tabsItems = document.querySelectorAll('.buy__tabs_item');
// console.log(tabsBtn);

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);
    // console.log(currentTab);

    
    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    });
    tabsItems.forEach(function(item) {
      item.classList.remove('active');
    });
    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});

function imgSlider(item){
  let mainImg = document.querySelector('.mainImg');
  mainImg.src = item;
  mainImg.style.width = '449px';
}


const arrows = document.querySelector('.arrowBottom');
const blocks = document.querySelectorAll('.delivery__option');

blocks.forEach((block) => {
  block.addEventListener("click", function info() {
    block.classList.toggle('active');
  });
});

