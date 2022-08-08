const tabsBtn = document.querySelectorAll('.navigation__circle');
const tabsItems = document.querySelectorAll('.shop__cards');
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