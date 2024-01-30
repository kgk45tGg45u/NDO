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
          console.log(img, img.height, img.scrollHeight);
          // d.style.height = img.height + "px";
        }
      });

      d.querySelector('button').addEventListener("click", (event) => {
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


// Function to detect Safari and check its version
function isOldSafari() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('safari') !== -1) {
    var version = parseInt((/version\/(\d+)/.exec(userAgent) || [])[1]);
    return version <= 14;
  }
  return false;
}

// Function to display a message if Safari version is too old
function displayMessage() {
  var isOld = isOldSafari();
  if (isOld) {
    var message = "Ihr Browser ist zu alt und wird nicht vollständig unterstützt. Bitte verwenden Sie eine neuere Safari-Version oder wechseln Sie zu Chrome oder Firefox.";
    alert(message);
  }
}
displayMessage();
