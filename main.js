// script.js
document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const sections = document.querySelectorAll('section');
  
  let isScrolling;
  
  content.addEventListener('scroll', () => {
    clearTimeout(isScrolling);

    content.style.opacity = '0.5';
    
    isScrolling = setTimeout(() => {
      content.style.opacity = '1';
    }, 200);
  });

  content.addEventListener('scroll', () => {
    let scrollPosition = content.scrollTop + (content.offsetHeight / 2);

    sections.forEach(section => {
      let sectionPosition = section.offsetTop + (section.offsetHeight / 2);

      if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
        document.body.style.backgroundColor = window.getComputedStyle(section).backgroundColor;
      }
    });
  });
});
