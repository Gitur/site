var mockData = [
    { name: 'Project Cool', score: '55', github: 'http://github.com/turowicz/cool' },
    { name: 'Project Sad', score: '11', github: 'http://github.com/turowicz/fun' },
    { name: 'Project Fun', score: '33', github: 'http://github.com/turowicz/sad' }
];

angular.module('gitur-app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'templates/list.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .controller('HomeCtrl', function ($scope) {
        $scope.data = {
            searchText: '',
            results: mockData
        };

        $scope.search = _.debounce(function () {
            console.log($scope.data.searchText);
        }, 500);
    });