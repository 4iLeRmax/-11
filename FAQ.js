const cards = document.querySelectorAll('.FAQ__card');
const icons = document.querySelector('.icon');

cards.forEach((card) => {
  card.addEventListener("click", function info() {
    card.classList.toggle('active');
  });
});

// cards.forEach((card) => {
//   icons.addEventListener("click", function info() {
//     card.classList.toggle('active');
//   });
// });