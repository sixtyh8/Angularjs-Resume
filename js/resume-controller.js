angular.module('resumeApp', []).
  filter('sliceArray', function() {
    return function(arr, start, end) {
    	return arr.slice(start, end); 
		}
  });

function ResumeController($scope, $http){
	
	$http.get('data/jobs.json').success(function(data) {
		
    	$scope.jobs = data.slice(0, 2);
    	$scope.lastJobs = data.slice(2, 4);

	});
	
	$http.get('data/contact-information.json').success(function(data){
		$scope.contact = data[0];
	});
	
	$http.get('data/education.json').success(function(data){
		$scope.education = data;
	});
	
	$http.get('data/other.json').success(function(data){
		$scope.other = data;
	});

};