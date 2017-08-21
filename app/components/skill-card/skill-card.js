System.register(['aurelia-framework', 'app/services/imageService'], function (_export, _context) {
    "use strict";

    var inject, bindable, ImageService, _dec, _dec2, _dec3, _class, SkillCard;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            bindable = _aureliaFramework.bindable;
        }, function (_appServicesImageService) {
            ImageService = _appServicesImageService.ImageService;
        }],
        execute: function () {
            _export('SkillCard', SkillCard = (_dec = bindable('skill'), _dec2 = bindable('loaderStyle'), _dec3 = inject(ImageService), _dec(_class = _dec2(_class = _dec3(_class = function () {
                function SkillCard(imageService) {
                    _classCallCheck(this, SkillCard);

                    this.imageService = imageService;
                    this.imageData = '';

                    this.loaderStyle = 'loader';
                }

                SkillCard.prototype.attached = function attached() {
                    var _this = this;

                    this.imageService.getSkillName(this.skill).then(function (name) {
                        _this.skillName = name;
                    });

                    this.imageService.getSkillImage(this.skill).then(function (imageData) {
                        _this.imageLoaded = true;
                        _this.imageData = imageData;
                    });
                };

                return SkillCard;
            }()) || _class) || _class) || _class));

            _export('SkillCard', SkillCard);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2tpbGwtY2FyZC9za2lsbC1jYXJkLmpzIl0sIm5hbWVzIjpbImluamVjdCIsImJpbmRhYmxlIiwiSW1hZ2VTZXJ2aWNlIiwiU2tpbGxDYXJkIiwiaW1hZ2VTZXJ2aWNlIiwiaW1hZ2VEYXRhIiwibG9hZGVyU3R5bGUiLCJhdHRhY2hlZCIsImdldFNraWxsTmFtZSIsInNraWxsIiwidGhlbiIsIm5hbWUiLCJza2lsbE5hbWUiLCJnZXRTa2lsbEltYWdlIiwiaW1hZ2VMb2FkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07QUFBUUMsb0IscUJBQUFBLFE7O0FBQ1JDLHdCLDRCQUFBQSxZOzs7aUNBS0tDLFMsV0FIWkYsU0FBUyxPQUFULEMsVUFDQUEsU0FBUyxhQUFULEMsVUFDQUQsT0FBT0UsWUFBUCxDO0FBRUcsbUNBQVlFLFlBQVosRUFBMEI7QUFBQTs7QUFDdEIseUJBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsRUFBakI7O0FBRUEseUJBQUtDLFdBQUwsR0FBbUIsUUFBbkI7QUFDSDs7b0NBRURDLFEsdUJBQVc7QUFBQTs7QUFDUCx5QkFBS0gsWUFBTCxDQUFrQkksWUFBbEIsQ0FBK0IsS0FBS0MsS0FBcEMsRUFBMkNDLElBQTNDLENBQWdELFVBQUNDLElBQUQsRUFBVTtBQUN0RCw4QkFBS0MsU0FBTCxHQUFpQkQsSUFBakI7QUFDSCxxQkFGRDs7QUFJQSx5QkFBS1AsWUFBTCxDQUFrQlMsYUFBbEIsQ0FBZ0MsS0FBS0osS0FBckMsRUFBNENDLElBQTVDLENBQWlELFVBQUNMLFNBQUQsRUFBZTtBQUM1RCw4QkFBS1MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLDhCQUFLVCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNILHFCQUhEO0FBSUgsaUIiLCJmaWxlIjoiY29tcG9uZW50cy9za2lsbC1jYXJkL3NraWxsLWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBiZW4gb24gMTEvNS8xNi5cclxuICovXHJcbmltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0ltYWdlU2VydmljZX0gZnJvbSAnYXBwL3NlcnZpY2VzL2ltYWdlU2VydmljZSc7XHJcblxyXG5AYmluZGFibGUoJ3NraWxsJylcclxuQGJpbmRhYmxlKCdsb2FkZXJTdHlsZScpXHJcbkBpbmplY3QoSW1hZ2VTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlID0gaW1hZ2VTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VEYXRhID0gJyc7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVyU3R5bGUgPSAnbG9hZGVyJztcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmltYWdlU2VydmljZS5nZXRTa2lsbE5hbWUodGhpcy5za2lsbCkudGhlbigobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNraWxsTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLmdldFNraWxsSW1hZ2UodGhpcy5za2lsbCkudGhlbigoaW1hZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlRGF0YSA9IGltYWdlRGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
