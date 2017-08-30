let description = document.querySelectorAll('.description');
let tab = document.querySelectorAll('.menu__item');

tab.forEach((element, index) => {
  tab[index].onclick = function() {
    description.forEach((j) => {
      j.classList.remove('show');
    })
    description[index].className += ' show';
  }
})
