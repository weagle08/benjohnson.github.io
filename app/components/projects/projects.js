System.register(['aurelia-framework', 'app/services/resumeService'], function (_export, _context) {
    "use strict";

    var inject, bindable, ResumeService, _dec, _class, Projects;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
        }, function (_appServicesResumeService) {
            ResumeService = _appServicesResumeService.ResumeService;
        }],
        execute: function () {
            _export('Projects', Projects = (_dec = inject(ResumeService), _dec(_class = function () {
                function Projects(resumeService) {
                    _classCallCheck(this, Projects);

                    this.resumeService = resumeService;
                }

                Projects.prototype.attached = function attached() {
                    this.resume = this.resumeService.getResume();
                };

                return Projects;
            }()) || _class));

            _export('Projects', Projects);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiYmluZGFibGUiLCJSZXN1bWVTZXJ2aWNlIiwiUHJvamVjdHMiLCJyZXN1bWVTZXJ2aWNlIiwiYXR0YWNoZWQiLCJyZXN1bWUiLCJnZXRSZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07QUFBUUMsb0IscUJBQUFBLFE7O0FBQ1JDLHlCLDZCQUFBQSxhOzs7Z0NBR0tDLFEsV0FEWkgsT0FBT0UsYUFBUCxDO0FBRUcsa0NBQVlFLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIseUJBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7O21DQUVEQyxRLHVCQUFXO0FBQ1AseUJBQUtDLE1BQUwsR0FBYyxLQUFLRixhQUFMLENBQW1CRyxTQUFuQixFQUFkO0FBQ0gsaUIiLCJmaWxlIjoiY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJlbiBvbiAxMS83LzE2LlxyXG4gKi9cclxuaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7UmVzdW1lU2VydmljZX0gZnJvbSAnYXBwL3NlcnZpY2VzL3Jlc3VtZVNlcnZpY2UnO1xyXG5cclxuQGluamVjdChSZXN1bWVTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgUHJvamVjdHMge1xyXG4gICAgY29uc3RydWN0b3IocmVzdW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lU2VydmljZSA9IHJlc3VtZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUgPSB0aGlzLnJlc3VtZVNlcnZpY2UuZ2V0UmVzdW1lKCk7XHJcbiAgICB9XHJcbn0iXX0=
