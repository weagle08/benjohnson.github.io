System.register(['aurelia-framework', 'aurelia-fetch-client', 'resume.json!text'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Resume, _dec, _class, ResumeService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_resumeJsonText) {
            Resume = _resumeJsonText.default;
        }],
        execute: function () {
            _export('ResumeService', ResumeService = (_dec = inject(HttpClient, Resume), _dec(_class = function () {
                function ResumeService(httpClient, resume) {
                    _classCallCheck(this, ResumeService);

                    this.client = httpClient;
                    this.resume = JSON.parse(resume);
                }

                ResumeService.prototype.getResume = function getResume() {
                    return this.resume;
                };

                return ResumeService;
            }()) || _class));

            _export('ResumeService', ResumeService);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Jlc3VtZVNlcnZpY2UuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiSHR0cENsaWVudCIsIlJlc3VtZSIsImRlZmF1bHQiLCJSZXN1bWVTZXJ2aWNlIiwiaHR0cENsaWVudCIsInJlc3VtZSIsImNsaWVudCIsIkpTT04iLCJwYXJzZSIsImdldFJlc3VtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdRQSxrQixxQkFBQUEsTTs7QUFDQUMsc0IsdUJBQUFBLFU7O0FBQ1dDLGtCLG1CQUFYQyxPOzs7cUNBR0tDLGEsV0FEWkosT0FBT0MsVUFBUCxFQUFtQkMsTUFBbkIsQztBQUVHLHVDQUFZRyxVQUFaLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBOztBQUM1Qix5QkFBS0MsTUFBTCxHQUFjRixVQUFkO0FBQ0EseUJBQUtDLE1BQUwsR0FBY0UsS0FBS0MsS0FBTCxDQUFXSCxNQUFYLENBQWQ7QUFDSDs7d0NBRURJLFMsd0JBQVk7QUFDUiwyQkFBTyxLQUFLSixNQUFaO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvcmVzdW1lU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJlbiBvbiAxMS81LzE2LlxyXG4gKi9cclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcbmltcG9ydCB7ZGVmYXVsdCBhcyBSZXN1bWV9IGZyb20gJ3Jlc3VtZS5qc29uIXRleHQnO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50LCBSZXN1bWUpXHJcbmV4cG9ydCBjbGFzcyBSZXN1bWVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQsIHJlc3VtZSkge1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLnJlc3VtZSA9IEpTT04ucGFyc2UocmVzdW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXN1bWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdW1lO1xyXG4gICAgfVxyXG59Il19
