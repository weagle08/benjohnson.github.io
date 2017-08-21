System.register(['aurelia-framework', 'app/services/resumeService'], function (_export, _context) {
    "use strict";

    var inject, bindable, ResumeService, _dec, _class, Education;

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
            _export('Education', Education = (_dec = inject(ResumeService), _dec(_class = function () {
                function Education(resumeService) {
                    _classCallCheck(this, Education);

                    this.resumeService = resumeService;
                }

                Education.prototype.attached = function attached() {
                    this.resume = this.resumeService.getResume();
                };

                return Education;
            }()) || _class));

            _export('Education', Education);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJiaW5kYWJsZSIsIlJlc3VtZVNlcnZpY2UiLCJFZHVjYXRpb24iLCJyZXN1bWVTZXJ2aWNlIiwiYXR0YWNoZWQiLCJyZXN1bWUiLCJnZXRSZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07QUFBUUMsb0IscUJBQUFBLFE7O0FBQ1JDLHlCLDZCQUFBQSxhOzs7aUNBR0tDLFMsV0FEWkgsT0FBT0UsYUFBUCxDO0FBRUcsbUNBQVlFLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIseUJBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7O29DQUVEQyxRLHVCQUFXO0FBQ1AseUJBQUtDLE1BQUwsR0FBYyxLQUFLRixhQUFMLENBQW1CRyxTQUFuQixFQUFkO0FBQ0gsaUIiLCJmaWxlIjoiY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDExLzcvMTYuXHJcbiAqL1xyXG5pbXBvcnQge2luamVjdCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtSZXN1bWVTZXJ2aWNlfSBmcm9tICdhcHAvc2VydmljZXMvcmVzdW1lU2VydmljZSc7XHJcblxyXG5AaW5qZWN0KFJlc3VtZVNlcnZpY2UpXHJcbmV4cG9ydCBjbGFzcyBFZHVjYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IocmVzdW1lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lU2VydmljZSA9IHJlc3VtZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWUgPSB0aGlzLnJlc3VtZVNlcnZpY2UuZ2V0UmVzdW1lKCk7XHJcbiAgICB9XHJcbn0iXX0=
