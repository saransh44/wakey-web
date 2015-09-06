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
	$scope.tips = ["A word of encouragement during a failure is worth more than an hour of praise after success. -Unknown", "In the middle of every difficulty lies opportunity. -Albert Einstein", "The best revenge is massive success. -Frank Sinatra", "Most of us, swimming against the tides of trouble the world knows nothing about, need only a bit of praise or encouragement – and we will make the goal. -Jerome Fleishman", "Perhaps everything terrible is in its deepest being something helpless that wants help from us. -Rainer Rilke", "Trust yourself. You know more than you think you do. -Ben Spock", "Go confidently in the direction of your dreams. Live the life you have imagined. -Henry Thoreau", "He who refuses to embrace a unique opportunity loses the prize as surely as if he had failed.", "Never let the odds keep you from doing what you know in your heart you were meant to do. -H. Jackson Brown, Jr.", "When you come to the end of your rope, tie a knot and hang on. -Franklin Roosevelt"];

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