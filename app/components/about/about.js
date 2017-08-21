System.register(['aurelia-framework', 'app/services/resumeService'], function (_export, _context) {
    "use strict";

    var inject, ResumeService, _dec, _class, About;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_appServicesResumeService) {
            ResumeService = _appServicesResumeService.ResumeService;
        }],
        execute: function () {
            _export('About', About = (_dec = inject(ResumeService), _dec(_class = function () {
                function About(resumeService) {
                    _classCallCheck(this, About);

                    this.resumeService = resumeService;
                }

                About.prototype.attached = function attached() {
                    this.resume = this.resumeService.getResume();
                };

                return About;
            }()) || _class));

            _export('About', About);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiUmVzdW1lU2VydmljZSIsIkFib3V0IiwicmVzdW1lU2VydmljZSIsImF0dGFjaGVkIiwicmVzdW1lIiwiZ2V0UmVzdW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR1FBLGtCLHFCQUFBQSxNOztBQUNBQyx5Qiw2QkFBQUEsYTs7OzZCQUdLQyxLLFdBRFpGLE9BQU9DLGFBQVAsQztBQUVHLCtCQUFZRSxhQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLHlCQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOztnQ0FFREMsUSx1QkFBVztBQUNQLHlCQUFLQyxNQUFMLEdBQWMsS0FBS0YsYUFBTCxDQUFtQkcsU0FBbkIsRUFBZDtBQUNILGlCIiwiZmlsZSI6ImNvbXBvbmVudHMvYWJvdXQvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBiZW4gb24gMTEvNS8xNi5cclxuICovXHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7UmVzdW1lU2VydmljZX0gZnJvbSAnYXBwL3NlcnZpY2VzL3Jlc3VtZVNlcnZpY2UnO1xyXG5cclxuQGluamVjdChSZXN1bWVTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgQWJvdXQge1xyXG4gICAgY29uc3RydWN0b3IocmVzdW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lU2VydmljZSA9IHJlc3VtZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUgPSB0aGlzLnJlc3VtZVNlcnZpY2UuZ2V0UmVzdW1lKCk7XHJcbiAgICB9XHJcbn0iXX0=
