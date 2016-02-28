(funtion() {
    "use strict"

    angular
        .module("app")
        .config(config)

    function config($stateProvider, urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "views/homeView.html"
            })

            .state("apod", {
                url: "/apod",
                templateUrl: "views/apodView.html",
                controller: "ApodController",
                controllerAs: "apod"
            })

            .state("rover", {
                url: "/rover",
                templateUrl: "views/roverView.html",
                controller: "RoverController",
                controllerAs: "rover"
            })

            .state("foaas", {
                url: "/foaas",
                templateUrl: "views/foaasView.html",
                controller: "FoaasController",
                controllerAs: "foaas"
            });
    }
})();
