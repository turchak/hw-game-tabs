let button = document.querySelectorAll('.menu-button');
let description = document.querySelectorAll('.description');

window.onload = function() {
  hideContent(1);
}

function hideContent(a) {
  for (var i = a; i < description.length; i++) {
    description[i].classList.remove('show');
    description[i].classList.add('hide');
  }
}
document.querySelector('.menu').onclick = function(event) {
  let target = event.target;
  if (target.className == 'menu-button') {
    for (var i = 0; i < button.length; i++) {
      if (target == button[i]) {
        showContent(i);
        break;
      }
    }
  }
}

function showContent(b) {
  if (description[b].classList.contains('hide')) {
    hideContent(0);
    description[b].classList.remove('hide');
    description[b].classList.add('show');

  }
};
