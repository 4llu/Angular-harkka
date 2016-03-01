(function() {
    "use strict";

    angular
        .module("app")
        .controller("ApodController", Controller);

    Controller.$inject = ["$filter", "apodFactory"];

    /* @ngInject */
    function Controller($filter, apodFactory) {
        var vm = this;

        vm.today = Date.now();
        vm.curDate = vm.today
        vm.updateUrl = updateUrl;

        activate();

        function activate() {
            updateUrl(0);
        }

        function updateUrl(dir) {
            console.log("lel");
            vm.curDate = vm.curDate + dir * (1000 * 60 * 60 * 24);
            var fd = $filter("date")(vm.curDate, "yyyy-MM-dd");

            apodFactory.get({date: fd, api_key: "bo94eNC0xuIbz5MjVque1GQUzayUWsTso2TLvIaT"}, function(data) {
                vm.url = data.url;
            }, function() {
                // Newest picture not up yet, fallback to yesterday
                updateUrl(-1);
                $("#next").prop("disabled", true);
            });

            // Disable next if on current date
            if (vm.curDate == vm.today) {
                $("#next").prop("disabled", true);
            }
            else {
                $("#next").prop("disabled", false);
            }
        }

    }
})();
