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
            var data = $scope.data;
            var searchText = $scope.data.searchText;

            if (searchText.length === 0) {
                data.results = mockData;
            }
            else {
                console.log(searchText);
                data.results = _(mockData).filter(function (x) {
                    return ~x.name.toLowerCase().indexOf(searchText.toLowerCase());
                });
            }
        }, 200, true);
    });