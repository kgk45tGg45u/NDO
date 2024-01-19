document.addEventListener("DOMContentLoaded", function() {
  const accordion_titles = document.querySelectorAll('.accordion .accordion-title');

  accordion_titles.forEach((at) => {
    at.addEventListener("click", ()=>{
      at.parentElement.classList.toggle('accordion-is-open')
      const ac = at.parentElement.querySelector('.accordion-content');
      if (ac.style.maxHeight) {
        ac.style.maxHeight = null;
      } else {
        ac.style.maxHeight = ac.scrollHeight + "px";
      }
    });
  });
});
