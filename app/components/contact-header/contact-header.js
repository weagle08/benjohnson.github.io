System.register(['aurelia-framework', 'app/services/resumeService'], function (_export, _context) {
    "use strict";

    var inject, ResumeService, _dec, _class, ContactHeader;

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
            _export('ContactHeader', ContactHeader = (_dec = inject(ResumeService), _dec(_class = function () {
                function ContactHeader(resumeService) {
                    _classCallCheck(this, ContactHeader);

                    this.resumeService = resumeService;
                }

                ContactHeader.prototype.attached = function attached() {
                    this.resume = this.resumeService.getResume();
                };

                return ContactHeader;
            }()) || _class));

            _export('ContactHeader', ContactHeader);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGFjdC1oZWFkZXIvY29udGFjdC1oZWFkZXIuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiUmVzdW1lU2VydmljZSIsIkNvbnRhY3RIZWFkZXIiLCJyZXN1bWVTZXJ2aWNlIiwiYXR0YWNoZWQiLCJyZXN1bWUiLCJnZXRSZXN1bWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07O0FBQ0FDLHlCLDZCQUFBQSxhOzs7cUNBR0tDLGEsV0FEWkYsT0FBT0MsYUFBUCxDO0FBRUcsdUNBQVlFLGFBQVosRUFBMkI7QUFBQTs7QUFDdkIseUJBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7O3dDQUVEQyxRLHVCQUFXO0FBQ1AseUJBQUtDLE1BQUwsR0FBYyxLQUFLRixhQUFMLENBQW1CRyxTQUFuQixFQUFkO0FBQ0gsaUIiLCJmaWxlIjoiY29tcG9uZW50cy9jb250YWN0LWhlYWRlci9jb250YWN0LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJlbiBvbiAxMS8xNC8xNi5cclxuICovXHJcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7UmVzdW1lU2VydmljZX0gZnJvbSAnYXBwL3NlcnZpY2VzL3Jlc3VtZVNlcnZpY2UnO1xyXG5cclxuQGluamVjdChSZXN1bWVTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdEhlYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXN1bWVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVTZXJ2aWNlID0gcmVzdW1lU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLnJlc3VtZSA9IHRoaXMucmVzdW1lU2VydmljZS5nZXRSZXN1bWUoKTtcclxuICAgIH1cclxufSJdfQ==
