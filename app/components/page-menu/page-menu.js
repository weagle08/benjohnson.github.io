System.register(['aurelia-router', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var Router, inject, _dec, _class, PageMenu;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            _export('PageMenu', PageMenu = (_dec = inject(Router), _dec(_class = function () {
                function PageMenu(router) {
                    _classCallCheck(this, PageMenu);

                    this.router = router;
                    this.showMenu = true;

                    this.navClass = 'nav';
                }

                PageMenu.prototype._onToggleMenuClick = function _onToggleMenuClick() {
                    if (this.navClass == 'nav') {
                        this.navClass += ' expand';
                    } else {
                        this.navClass = 'nav';
                    }
                };

                PageMenu.prototype._onMenuItemClick = function _onMenuItemClick() {
                    this._onToggleMenuClick();
                    return true;
                };

                return PageMenu;
            }()) || _class));

            _export('PageMenu', PageMenu);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS1tZW51L3BhZ2UtbWVudS5qcyJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJpbmplY3QiLCJQYWdlTWVudSIsInJvdXRlciIsInNob3dNZW51IiwibmF2Q2xhc3MiLCJfb25Ub2dnbGVNZW51Q2xpY2siLCJfb25NZW51SXRlbUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR1FBLGtCLGtCQUFBQSxNOztBQUNBQyxrQixxQkFBQUEsTTs7O2dDQUdLQyxRLFdBRFpELE9BQU9ELE1BQVAsQztBQUVHLGtDQUFZRyxNQUFaLEVBQW1CO0FBQUE7O0FBQ2YseUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBLHlCQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7O21DQUVEQyxrQixpQ0FBcUI7QUFDakIsd0JBQUcsS0FBS0QsUUFBTCxJQUFpQixLQUFwQixFQUEyQjtBQUN2Qiw2QkFBS0EsUUFBTCxJQUFpQixTQUFqQjtBQUNILHFCQUZELE1BRU87QUFDSCw2QkFBS0EsUUFBTCxHQUFnQixLQUFoQjtBQUNIO0FBQ0osaUI7O21DQUVERSxnQiwrQkFBbUI7QUFDZix5QkFBS0Qsa0JBQUw7QUFDQSwyQkFBTyxJQUFQO0FBQ0gsaUIiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlLW1lbnUvcGFnZS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDEwLzIzLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBpbmplY3QoUm91dGVyKVxyXG5leHBvcnQgY2xhc3MgUGFnZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGVyKXtcclxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgICAgICB0aGlzLnNob3dNZW51ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXZDbGFzcyA9ICduYXYnO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvZ2dsZU1lbnVDbGljaygpIHtcclxuICAgICAgICBpZih0aGlzLm5hdkNsYXNzID09ICduYXYnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Q2xhc3MgKz0gJyBleHBhbmQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Q2xhc3MgPSAnbmF2JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX29uTWVudUl0ZW1DbGljaygpIHtcclxuICAgICAgICB0aGlzLl9vblRvZ2dsZU1lbnVDbGljaygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
