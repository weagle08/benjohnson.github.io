System.register(['aurelia-framework', 'aurelia-fetch-client', 'imageMap.json!text'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, ImageMap, _dec, _class, ImageService;

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
        }, function (_imageMapJsonText) {
            ImageMap = _imageMapJsonText.default;
        }],
        execute: function () {
            _export('ImageService', ImageService = (_dec = inject(HttpClient, ImageMap), _dec(_class = function () {
                function ImageService(httpClient, imageMap) {
                    _classCallCheck(this, ImageService);

                    this.client = httpClient;
                    this.imageMap = JSON.parse(imageMap);
                }

                ImageService.prototype.getSkillImage = function getSkillImage(key) {
                    if (key != null) {
                        var uri = this.imageMap[key].path;
                        if (uri != null) {
                            return this.client.fetch(uri).then(function (response) {
                                return response.blob();
                            }).then(function (imageData) {
                                return URL.createObjectURL(imageData);
                            });
                        } else {
                            return Promise.reject(new Error('image not found'));
                        }
                    } else {
                        return Promise.reject(new Error('no key specified'));
                    }
                };

                ImageService.prototype.getSkillName = function getSkillName(key) {
                    if (key != null) {
                        return Promise.resolve(this.imageMap[key].name);
                    } else {
                        return Promise.reject(new Error('no key specified'));
                    }
                };

                ImageService.getSkillName = function getSkillName(key) {
                    var t = JSON.parse(ImageMap);
                    return t[key].name;
                };

                return ImageService;
            }()) || _class));

            _export('ImageService', ImageService);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ltYWdlU2VydmljZS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwiSW1hZ2VNYXAiLCJkZWZhdWx0IiwiSW1hZ2VTZXJ2aWNlIiwiaHR0cENsaWVudCIsImltYWdlTWFwIiwiY2xpZW50IiwiSlNPTiIsInBhcnNlIiwiZ2V0U2tpbGxJbWFnZSIsImtleSIsInVyaSIsInBhdGgiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImJsb2IiLCJpbWFnZURhdGEiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJnZXRTa2lsbE5hbWUiLCJyZXNvbHZlIiwibmFtZSIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07O0FBQ0FDLHNCLHVCQUFBQSxVOztBQUNXQyxvQixxQkFBWEMsTzs7O29DQUdLQyxZLFdBRFpKLE9BQU9DLFVBQVAsRUFBbUJDLFFBQW5CLEM7QUFFRyxzQ0FBWUcsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFDOUIseUJBQUtDLE1BQUwsR0FBY0YsVUFBZDtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCRSxLQUFLQyxLQUFMLENBQVdILFFBQVgsQ0FBaEI7QUFDSDs7dUNBRURJLGEsMEJBQWNDLEcsRUFBSztBQUNmLHdCQUFHQSxPQUFPLElBQVYsRUFBZ0I7QUFDWiw0QkFBSUMsTUFBTSxLQUFLTixRQUFMLENBQWNLLEdBQWQsRUFBbUJFLElBQTdCO0FBQ0EsNEJBQUdELE9BQU8sSUFBVixFQUFnQjtBQUNaLG1DQUFPLEtBQUtMLE1BQUwsQ0FBWU8sS0FBWixDQUFrQkYsR0FBbEIsRUFBdUJHLElBQXZCLENBQTRCLFVBQUNDLFFBQUQ7QUFBQSx1Q0FBY0EsU0FBU0MsSUFBVCxFQUFkO0FBQUEsNkJBQTVCLEVBQTJERixJQUEzRCxDQUFnRSxVQUFDRyxTQUFELEVBQWU7QUFDbEYsdUNBQU9DLElBQUlDLGVBQUosQ0FBb0JGLFNBQXBCLENBQVA7QUFDSCw2QkFGTSxDQUFQO0FBR0gseUJBSkQsTUFJTztBQUNILG1DQUFPRyxRQUFRQyxNQUFSLENBQWUsSUFBSUMsS0FBSixDQUFVLGlCQUFWLENBQWYsQ0FBUDtBQUNIO0FBQ0oscUJBVEQsTUFTTztBQUNILCtCQUFPRixRQUFRQyxNQUFSLENBQWUsSUFBSUMsS0FBSixDQUFVLGtCQUFWLENBQWYsQ0FBUDtBQUNIO0FBQ0osaUI7O3VDQUVEQyxZLHlCQUFhYixHLEVBQUs7QUFDZCx3QkFBR0EsT0FBTyxJQUFWLEVBQWdCO0FBQ1osK0JBQU9VLFFBQVFJLE9BQVIsQ0FBZ0IsS0FBS25CLFFBQUwsQ0FBY0ssR0FBZCxFQUFtQmUsSUFBbkMsQ0FBUDtBQUNILHFCQUZELE1BRU87QUFDSCwrQkFBT0wsUUFBUUMsTUFBUixDQUFlLElBQUlDLEtBQUosQ0FBVSxrQkFBVixDQUFmLENBQVA7QUFDSDtBQUNKLGlCOzs2QkFFTUMsWSx5QkFBYWIsRyxFQUFLO0FBQ3JCLHdCQUFJZ0IsSUFBSW5CLEtBQUtDLEtBQUwsQ0FBV1AsUUFBWCxDQUFSO0FBQ0EsMkJBQU95QixFQUFFaEIsR0FBRixFQUFPZSxJQUFkO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvaW1hZ2VTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDExLzUvMTYuXHJcbiAqL1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuaW1wb3J0IHtkZWZhdWx0IGFzIEltYWdlTWFwfSBmcm9tICdpbWFnZU1hcC5qc29uIXRleHQnO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50LCBJbWFnZU1hcClcclxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50LCBpbWFnZU1hcCkge1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gaHR0cENsaWVudDtcclxuICAgICAgICB0aGlzLmltYWdlTWFwID0gSlNPTi5wYXJzZShpbWFnZU1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2tpbGxJbWFnZShrZXkpIHtcclxuICAgICAgICBpZihrZXkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgdXJpID0gdGhpcy5pbWFnZU1hcFtrZXldLnBhdGg7XHJcbiAgICAgICAgICAgIGlmKHVyaSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQuZmV0Y2godXJpKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuYmxvYigpKS50aGVuKChpbWFnZURhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdpbWFnZSBub3QgZm91bmQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdubyBrZXkgc3BlY2lmaWVkJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTa2lsbE5hbWUoa2V5KSB7XHJcbiAgICAgICAgaWYoa2V5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmltYWdlTWFwW2tleV0ubmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbm8ga2V5IHNwZWNpZmllZCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFNraWxsTmFtZShrZXkpIHtcclxuICAgICAgICBsZXQgdCA9IEpTT04ucGFyc2UoSW1hZ2VNYXApO1xyXG4gICAgICAgIHJldHVybiB0W2tleV0ubmFtZTtcclxuICAgIH1cclxufSJdfQ==
