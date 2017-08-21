System.register(['aurelia-framework', 'aurelia-router', 'aurelia-fetch-client'], function (_export, _context) {
    "use strict";

    var inject, Router, HttpClient, _dec, _class, App;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }],
        execute: function () {
            _export('App', App = (_dec = inject(Router, HttpClient), _dec(_class = function App(router, httpClient) {
                _classCallCheck(this, App);

                this.router = router;
                this.httpClient = httpClient;

                this.router.configure(function (config) {
                    config.title = "Ben Johnson";

                    config.mapUnknownRoutes('pages/app');
                });
            }) || _class));

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FwcC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJSb3V0ZXIiLCJIdHRwQ2xpZW50IiwiQXBwIiwicm91dGVyIiwiaHR0cENsaWVudCIsImNvbmZpZ3VyZSIsImNvbmZpZyIsInRpdGxlIiwibWFwVW5rbm93blJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdRQSxrQixxQkFBQUEsTTs7QUFDQUMsa0Isa0JBQUFBLE07O0FBQ0FDLHNCLHVCQUFBQSxVOzs7MkJBR0tDLEcsV0FEWkgsT0FBT0MsTUFBUCxFQUFlQyxVQUFmLEMsZ0JBRUcsYUFBWUUsTUFBWixFQUFvQkMsVUFBcEIsRUFBZ0M7QUFBQTs7QUFDNUIscUJBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxxQkFBS0QsTUFBTCxDQUFZRSxTQUFaLENBQXNCLFVBQUNDLE1BQUQsRUFBWTtBQUM5QkEsMkJBQU9DLEtBQVAsR0FBZSxhQUFmOztBQUVBRCwyQkFBT0UsZ0JBQVAsQ0FBd0IsV0FBeEI7QUFDSCxpQkFKRDtBQUtILGEiLCJmaWxlIjoicGFnZXMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDEwLzIzLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KFJvdXRlciwgSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIGh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBodHRwQ2xpZW50O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5jb25maWd1cmUoKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcudGl0bGUgPSBcIkJlbiBKb2huc29uXCI7XHJcblxyXG4gICAgICAgICAgICBjb25maWcubWFwVW5rbm93blJvdXRlcygncGFnZXMvYXBwJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
