var element = document.querySelector('.description')

var glyph1 = document.querySelector('.glyph-1');
var glyph2 = document.querySelector('.glyph-2');
var glyph3 = document.querySelector('.glyph-3');
var glyph4 = document.querySelector('.glyph-4');
var glyph5 = document.querySelector('.glyph-5');

  
  // Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', () => {
  var scrollTop = document.querySelector('.illustration-container').getBoundingClientRect().top;
  var desc = document.querySelector('.description');

  desc.style.transform = `translate(-50%, calc(-50% + ${scrollTop / 4}px))`;

  // BIRD

if(window.innerWidth <= 750) {
  glyph1.style.top = `calc(90% + ${scrollTop / 1.4}px)`;
  glyph2.style.top = `calc(80% + ${scrollTop / 1.2}px)`;
  glyph3.style.top = `calc(120% + ${scrollTop / 2.1}px)`;
  glyph4.style.top = `calc(100% + ${scrollTop / 1.6}px)`;
  glyph5.style.top = `calc(120% + ${scrollTop / 1.7}px)`;
}

})