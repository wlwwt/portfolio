var slider = new Swipe(document.getElementById('slider'));

!function ($) {

  $(function(){

   $(".thumbnail").on("hover", function (e) {
      e.preventDefault()
      $(this)
        .find(".caption").fadeToggle(200);
    });
	
	$('.typeahead').typeahead({                              
		limit: 5, 
		minLength: 3,
		remote: {
			url: $(this).data().link,
			replace: function(url, uriEncodedQuery) {
				return $('.typeahead').data().link + '&termLowercase=' + uriEncodedQuery.toLowerCase();
            },
			filter: function (response){
				var output = [];
				jQuery.each(response, function(term) {
					output.push({
						value : term
					});
				});
				return(output);
			}
		},
		 header: '<p class="header">... folgendem Begriff</p>'
	  })
	  .on('typeahead:selected', function(){
		  $('.navbar-search').submit();
	  })
  })

}(window.jQuery)