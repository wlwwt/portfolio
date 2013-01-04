var slider = new Swipe(document.getElementById('slider'));

!function ($) {

  $(function(){

    $(".thumbnail").on("hover", function (e) {
      e.preventDefault()
      $(this)
        .find(".caption").fadeToggle();
    })
   
  })

}(window.jQuery)