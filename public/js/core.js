(function(){
/**
 * 
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
var app = angular.module('app', ['ngRoute','ngSanitize','ngResource']);

/**
 * 
 * @param {type} $resource
 * @return {unresolved}
 */
app.factory('TransportsFactory',function($resource){
                return $resource('api/transports',{},{
                    query: {method: 'GET', isArray:true},
                    create: { method: 'POST'}
                });
})
        .factory('TransportFactory',function($resource){
                return $resource('api/transports/:id',{},{
                    show : {method:'GET'},
                    delete : {method: 'DELETE', params: {id: '@id'}},
                    update : { method: 'PUT', params: {id: '@id'}}
                });
})

.controller('TrnsListCtrl', ['$scope','$sce','TransportsFactory','TransportFactory','$location',
    function($scope,$sce,TransportsFactory,TransportFactory,$location){
        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
          };
        // ng-click 'deleteTransport' supprime transport
        $scope.deleteTransport = function(transportId){
            TransportFactory.delete({ id : transportId });
            $scope.liste = TransportsFactory.query();
        };
        // ng-click 'editTransport' edition transport
         $scope.editTransport = function(transportId){
            $location.path('/transport-detail/' + transportId);
        };
        // ng-click 'createTransport' création transport
        $scope.createTransport = function(){
            $location.path('/transport-create');
        };

        $scope.liste = TransportsFactory.query();    
}])

.controller('TrnDetailCtrl',['$scope','$routeParams','TransportFactory','$location',
    function($scope,$routeParams,TransportFactory,$location){
        // ng-click 'updateTransport' mise à jour transport
        $scope.updateTransport = function(){
            TransportFactory.update($scope.transport);
            $location.path('/transports');
        };
        // ng-click 'cancel' retour
        $scope.cancel = function(){
            $location.path('/transports');
        };
        
        $scope.transport = TransportFactory.show({ id : $routeParams.id });
    }
])

.controller('TrnsCreateCtrl', ['$scope','TransportsFactory','$location',
    function($scope,TransportsFactory,$location){
        $scope.createTransport = function(){
            TransportsFactory.create($scope.transport);
        };
    }
])

.config(function($locationProvider,$routeProvider){
     $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'TrnsListCtrl'
      })
      .when('/transport-detail/:id',{
        templateUrl: 'partials/tripdetail.html',
        controller: 'TrnDetailCtrl'
      })
      .when('/transport-create',{
          templateUrl: 'partials/tripcreate.html',
        controller: 'TrnsCreateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
});
})();


