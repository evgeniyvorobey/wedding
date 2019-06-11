var element = document.querySelector('.description')
  
  // Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', () => {
    var scrollTop = document.querySelector('.illustration-container').getBoundingClientRect().top;
    var desc = document.querySelector('.description');
    var overlay = document.querySelector('.overlay');

    desc.style.transform = `translate(-50%, calc(-50% + ${scrollTop / 4}px))`;
    overlay.style.top = `calc(100% + ${scrollTop / 1.1}px)`;

})