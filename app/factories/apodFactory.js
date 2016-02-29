(function() {
    "use strict";

    angular
        .module("app")
        .factory("apodFactory", factory);

    factory.$inject = ["$resource"];

    /* @ngInject */
    function factory($resource) {
        return $resource("https://api.nasa.gov/planetary/apod");
    }
})();
