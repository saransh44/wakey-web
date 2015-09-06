var app = angular.module("app", ["firebase"]);

$(window).load(function() {

	angular.element($(".container").scope().getCurrentTime());
	angular.element($(".container").scope().randomizeTips());
	angular.element($(".container").scope().getCurrentTip());


	$(".button").click(function() {
		angular.element($(".container").scope().advance());
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