(function() {
    "use strict";

    angular
        .module("app")
        .factory("roverFactory", factory);

    factory.$inject = ["$resource"];

    /* @ngInject */
    function factory($resource) {
        return $resource("https://api.nasa.gov/mars-photos/api/v1/rovers/:rover/photos", {rover: "@rover"});
    }
})();
