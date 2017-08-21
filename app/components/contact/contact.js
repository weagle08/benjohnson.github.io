System.register(['aurelia-framework', 'app/services/resumeService'], function (_export, _context) {
    "use strict";

    var inject, ResumeService, _dec, _class, Contact;

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
            _export('Contact', Contact = (_dec = inject(ResumeService), _dec(_class = function () {
                function Contact(resumeService) {
                    _classCallCheck(this, Contact);

                    this.resumeService = resumeService;
                }

                Contact.prototype.attached = function attached() {
                    this.resume = this.resumeService.getResume();
                };

                return Contact;
            }()) || _class));

            _export('Contact', Contact);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmpzIl0sIm5hbWVzIjpbImluamVjdCIsIlJlc3VtZVNlcnZpY2UiLCJDb250YWN0IiwicmVzdW1lU2VydmljZSIsImF0dGFjaGVkIiwicmVzdW1lIiwiZ2V0UmVzdW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR1FBLGtCLHFCQUFBQSxNOztBQUNBQyx5Qiw2QkFBQUEsYTs7OytCQUdLQyxPLFdBRFpGLE9BQU9DLGFBQVAsQztBQUVHLGlDQUFZRSxhQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLHlCQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOztrQ0FFREMsUSx1QkFBVztBQUNQLHlCQUFLQyxNQUFMLEdBQWMsS0FBS0YsYUFBTCxDQUFtQkcsU0FBbkIsRUFBZDtBQUNILGlCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDExLzcvMTYuXHJcbiAqL1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1Jlc3VtZVNlcnZpY2V9IGZyb20gJ2FwcC9zZXJ2aWNlcy9yZXN1bWVTZXJ2aWNlJztcclxuXHJcbkBpbmplY3QoUmVzdW1lU2VydmljZSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3Qge1xyXG4gICAgY29uc3RydWN0b3IocmVzdW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lU2VydmljZSA9IHJlc3VtZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUgPSB0aGlzLnJlc3VtZVNlcnZpY2UuZ2V0UmVzdW1lKCk7XHJcbiAgICB9XHJcbn0iXX0=
