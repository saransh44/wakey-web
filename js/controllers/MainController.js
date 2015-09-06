app.controller('MainController', function($scope, $firebaseArray) {

	$scope.viewSequence = ["#intro", "#pairing", "#hours", "#timeline", "#alarm", "#finished"];
	$scope.currentView = "#intro";
	$scope.currentViewIndex = 0;
	$scope.numHours = 0;
	$scope.tt = 400;
	$scope.currentTime;
	$scope.currentTip;
	$scope.currentTipIndex = 0;
	$scope.sleepCount = 0;
	$scope.tips = ["Grab a snack from the fridge.", "Don't give up.", "You can do it.", "You deserve to sleep.", "Thanks for that.", "Never mind."];

	$scope.advance = function() {
		$scope.currentTipIndex = 0;
		$("#alarm .logo").css("width", "200px");
		$($scope.currentView).fadeOut($scope.tt);
		$scope.currentViewIndex++;
		$scope.currentView = $scope.viewSequence[$scope.currentViewIndex];
		console.log($scope.currentView);
		setTimeout(function() {
			$($scope.currentView).fadeIn($scope.tt);
			$($scope.currentView).fadeTo($scope.tt * 2, 100);
		}, $scope.tt);
		return $scope.currentViewIndex;
	}

	$scope.setNumHours = function(h) {
		$scope.numHours = h;
	}

	$scope.getCurrentTime = function() {
		var d = new Date();
		var hour = d.getHours();
		var min = "0" + d.getMinutes();
		min = min.substring(min.length - 2, min.length);
		$scope.$apply(function() {
			if (hour == 0) {
				$scope.currentTime = "12:" + min + " AM";
			}
			else if (d.getHours() > 12) {
				$scope.currentTime = (hour - 12) + ":" + min + " PM";
			}
			else {
				$scope.currentTime = hour + ":" + min;
			}
		});
	}

	$scope.getCurrentTip = function() {
		$scope.$apply(function() {
			$scope.currentTip = $scope.tips[$scope.currentTipIndex % $scope.tips.length];
			$scope.currentTipIndex++;	
		});	
	}

	$scope.randomizeTips = function() {
		var o = $scope.tips;
    	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	$scope.tips = o;
	};

});