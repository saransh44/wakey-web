var app = angular.module("app", ["firebase"]);

/**
 * @author Alexander Manzyuk <admsev@gmail.com>
 * Copyright (c) 2012 Alexander Manzyuk - released under MIT License
 * https://github.com/admsev/jquery-play-sound
 * Usage: $.playSound('http://example.org/sound.mp3');
**/

(function($){

  $.extend({
    playSound: function(){
      return $("<embed src='"+arguments[0]+".mp3' hidden='true' autostart='true' loop='false' class='playSound'>" + "<audio autoplay='autoplay' style='display:none;' controls='controls'><source src='"+arguments[0]+".mp3' /><source src='"+arguments[0]+".ogg' /></audio>").appendTo('body');
    }
  });

})(jQuery);

$(window).load(function() {

	angular.element($(".container").scope().getCurrentTime());
	angular.element($(".container").scope().randomizeTips());
	angular.element($(".container").scope().getCurrentTip());


	$(".button").click(function() {
		if (angular.element($(".container").scope().advance()) == 4) {
			$.playSound("http://soundbible.com/grab.php?id=2061&type=mp3");
		}
		if ($("#numHours").val() != "") {
			angular.element($(".container").scope().setNumHours($("#numHours").val()));
		}
	});

	$(document.body).delegate('input:text', 'keypress', function(e) {
	    if (e.which === 13) { // if is enter
	        e.preventDefault(); // don't submit form
	        $("#hours .button").click();
	    }
	});

});