resume = angular.module('resumeApp', []);

// Controller
resume.controller('ResumeController', function($scope, $http){
	
	$http.get('data/jobs.json').success(function(data) {
    	$scope.jobs = data;
	});
	
	$http.get('data/contact-information.json').success(function(data){
		$scope.contact = data[0];
	});
	
	$http.get('data/social.json').success(function(data){
		$scope.social = data;
	})
	
	$http.get('data/education.json').success(function(data){
		$scope.education = data;
	});
	
	$http.get('data/other.json').success(function(data){
		$scope.other = data;
	});
	
	$http.get('data/weapons.json').success(function(data){
		$scope.weapons = data;
	});

});

// Filter
resume.filter('sliceArray', function() {
    return function(arr, start, end) {
    	return arr.slice(start, end); 
	}
});
