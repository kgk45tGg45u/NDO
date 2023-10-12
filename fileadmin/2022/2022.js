var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {
        $(document).ready( () => onPageLoad());
        clearInterval(waitForJQuery);
    }
}, 25);

function onPageLoad(){
  $(".ambtn").click(function () {
    $(this).closest('.amore-container').addClass('aactive');
  });

  $(".athumb img").click(function () {
    $(this).closest('.athumb').toggleClass('aactive')
  })
  $(".athumb img").hover(function () {
    $(this).closest('.athumb').toggleClass('aactive')
  })

}
