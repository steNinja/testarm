//magnificPopup
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

// Emulate hover on tablets and smartphones
$( ".ch-item" ).click(function(e) {
 	$(this).toggleClass( "flipped" );
 	e.preventDefault();
});

$('.noSpin').click(function(event){
    event.stopImmediatePropagation();
});

