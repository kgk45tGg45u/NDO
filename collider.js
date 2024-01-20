document.addEventListener("DOMContentLoaded", function () {
    const accordion_titles = document.querySelectorAll('.accordion .accordion-title');

    accordion_titles.forEach((at) => {
      at.addEventListener("click", () => {
        at.parentElement.classList.toggle('accordion-is-open')
        const ac = at.parentElement.querySelector('.accordion-content');
        if (ac.style.maxHeight) {
          ac.style.maxHeight = null;
        } else {
          ac.style.maxHeight = ac.scrollHeight + "px";
        }
      });
    });

    const cards = document.querySelectorAll('.acard');
    cards.forEach((c) => {
      const d = c.querySelector("dialog");
      if (!d) return;
      c.addEventListener("click", () => {
        d.showModal();
        if (d.scrollWidth > 648) {
          const img = d.querySelector('img');
          d.querySelector('.dialog-text').style.height = img.scrollHeight + "px";
        }
      });

      d.querySelector('button').addEventListener("click", (event) => {
        console.log("CCC")
        d.close();
        event.stopImmediatePropagation();
      });
      d.addEventListener("click", (event) => {
        if (event.target == d)
          d.close();
        event.stopImmediatePropagation();

      })
    })

  }
);
