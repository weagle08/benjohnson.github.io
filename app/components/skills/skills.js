System.register(['aurelia-framework', 'app/services/resumeService', 'app/services/imageService'], function (_export, _context) {
    "use strict";

    var inject, ResumeService, ImageService, _dec, _class, Skills, SkillListValueConverter;

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
        }, function (_appServicesImageService) {
            ImageService = _appServicesImageService.ImageService;
        }],
        execute: function () {
            _export('Skills', Skills = (_dec = inject(ResumeService), _dec(_class = function () {
                function Skills(resumeService) {
                    _classCallCheck(this, Skills);

                    this.resumeService = resumeService;
                }

                Skills.prototype.attached = function attached() {
                    var _this = this;

                    this.resume = this.resumeService.getResume();
                    this.languages = [];
                    this.technologies = [];
                    this.tools = [];
                    this.data = [];
                    this.processes = [];

                    for (var _iterator = this.resume.experience, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;

                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }

                        var e = _ref;

                        for (var _iterator3 = e.projects, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                            var _ref3;

                            if (_isArray3) {
                                if (_i3 >= _iterator3.length) break;
                                _ref3 = _iterator3[_i3++];
                            } else {
                                _i3 = _iterator3.next();
                                if (_i3.done) break;
                                _ref3 = _i3.value;
                            }

                            var p = _ref3;

                            this.languages = this.languages.concat(p.skills.languages.filter(function (v) {
                                return _this.languages.indexOf(v) == -1;
                            }));
                            this.technologies = this.technologies.concat(p.skills.technologies.filter(function (v) {
                                return _this.technologies.indexOf(v) == -1;
                            }));
                            this.tools = this.tools.concat(p.skills.tools.filter(function (v) {
                                return _this.tools.indexOf(v) == -1;
                            }));
                            this.data = this.data.concat(p.skills.data.filter(function (v) {
                                return _this.data.indexOf(v) == -1;
                            }));
                            this.processes = this.processes.concat(p.skills.processes.filter(function (v) {
                                return _this.processes.indexOf(v) == -1;
                            }));
                        }
                    }

                    for (var _iterator2 = this.resume.projects, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                        var _ref2;

                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref2 = _i2.value;
                        }

                        var _p = _ref2;

                        this.languages = this.languages.concat(_p.skills.languages.filter(function (v) {
                            return _this.languages.indexOf(v) == -1;
                        }));
                        this.technologies = this.technologies.concat(_p.skills.technologies.filter(function (v) {
                            return _this.technologies.indexOf(v) == -1;
                        }));
                        this.tools = this.tools.concat(_p.skills.tools.filter(function (v) {
                            return _this.tools.indexOf(v) == -1;
                        }));
                        this.data = this.data.concat(_p.skills.data.filter(function (v) {
                            return _this.data.indexOf(v) == -1;
                        }));
                        this.processes = this.processes.concat(_p.skills.processes.filter(function (v) {
                            return _this.processes.indexOf(v) == -1;
                        }));
                    }
                };

                Skills.prototype._getColor = function _getColor(index) {
                    var multer = parseInt(index / 4);
                    index = index - 4 * multer;

                    switch (index) {
                        case 1:
                            return 'loader-success';
                        case 2:
                            return 'loader-warn';
                        case 3:
                            return 'loader-danger';
                        default:
                            return 'loader';
                    }
                };

                return Skills;
            }()) || _class));

            _export('Skills', Skills);

            _export('SkillListValueConverter', SkillListValueConverter = function () {
                function SkillListValueConverter() {
                    _classCallCheck(this, SkillListValueConverter);
                }

                SkillListValueConverter.prototype.toView = function toView(value) {
                    var retVal = [];

                    if (value != null) {
                        for (var _iterator4 = value, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
                            var _ref4;

                            if (_isArray4) {
                                if (_i4 >= _iterator4.length) break;
                                _ref4 = _iterator4[_i4++];
                            } else {
                                _i4 = _iterator4.next();
                                if (_i4.done) break;
                                _ref4 = _i4.value;
                            }

                            var v = _ref4;

                            retVal.push(ImageService.getSkillName(v));
                        }
                    }

                    return retVal.join(', ');
                };

                return SkillListValueConverter;
            }());

            _export('SkillListValueConverter', SkillListValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2tpbGxzL3NraWxscy5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJSZXN1bWVTZXJ2aWNlIiwiSW1hZ2VTZXJ2aWNlIiwiU2tpbGxzIiwicmVzdW1lU2VydmljZSIsImF0dGFjaGVkIiwicmVzdW1lIiwiZ2V0UmVzdW1lIiwibGFuZ3VhZ2VzIiwidGVjaG5vbG9naWVzIiwidG9vbHMiLCJkYXRhIiwicHJvY2Vzc2VzIiwiZXhwZXJpZW5jZSIsImUiLCJwcm9qZWN0cyIsInAiLCJjb25jYXQiLCJza2lsbHMiLCJmaWx0ZXIiLCJ2IiwiaW5kZXhPZiIsIl9nZXRDb2xvciIsImluZGV4IiwibXVsdGVyIiwicGFyc2VJbnQiLCJTa2lsbExpc3RWYWx1ZUNvbnZlcnRlciIsInRvVmlldyIsInZhbHVlIiwicmV0VmFsIiwicHVzaCIsImdldFNraWxsTmFtZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHUUEsa0IscUJBQUFBLE07O0FBQ0FDLHlCLDZCQUFBQSxhOztBQUNBQyx3Qiw0QkFBQUEsWTs7OzhCQUdLQyxNLFdBRFpILE9BQU9DLGFBQVAsQztBQUVHLGdDQUFZRyxhQUFaLEVBQTJCO0FBQUE7O0FBQ3ZCLHlCQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOztpQ0FFREMsUSx1QkFBVztBQUFBOztBQUNQLHlCQUFLQyxNQUFMLEdBQWMsS0FBS0YsYUFBTCxDQUFtQkcsU0FBbkIsRUFBZDtBQUNBLHlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EseUJBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSx5QkFBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSx5QkFBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQSx5QkFBS0MsU0FBTCxHQUFpQixFQUFqQjs7QUFFQSx5Q0FBYSxLQUFLTixNQUFMLENBQVlPLFVBQXpCLGtIQUFxQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNEJBQTdC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cy9za2lsbHMvc2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYmVuIG9uIDExLzUvMTYuXHJcbiAqL1xyXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1Jlc3VtZVNlcnZpY2V9IGZyb20gJ2FwcC9zZXJ2aWNlcy9yZXN1bWVTZXJ2aWNlJztcclxuaW1wb3J0IHtJbWFnZVNlcnZpY2V9IGZyb20gJ2FwcC9zZXJ2aWNlcy9pbWFnZVNlcnZpY2UnO1xyXG5cclxuQGluamVjdChSZXN1bWVTZXJ2aWNlKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxzIHtcclxuICAgIGNvbnN0cnVjdG9yKHJlc3VtZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnJlc3VtZVNlcnZpY2UgPSByZXN1bWVTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHRoaXMucmVzdW1lID0gdGhpcy5yZXN1bWVTZXJ2aWNlLmdldFJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy50ZWNobm9sb2dpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnRvb2xzID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBlIG9mIHRoaXMucmVzdW1lLmV4cGVyaWVuY2UpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBwIG9mIGUucHJvamVjdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXMuY29uY2F0KHAuc2tpbGxzLmxhbmd1YWdlcy5maWx0ZXIoKHYpID0+IHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVjaG5vbG9naWVzID0gdGhpcy50ZWNobm9sb2dpZXMuY29uY2F0KHAuc2tpbGxzLnRlY2hub2xvZ2llcy5maWx0ZXIoKHYpID0+IHRoaXMudGVjaG5vbG9naWVzLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vbHMgPSB0aGlzLnRvb2xzLmNvbmNhdChwLnNraWxscy50b29scy5maWx0ZXIoKHYpID0+IHRoaXMudG9vbHMuaW5kZXhPZih2KSA9PSAtMSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmNvbmNhdChwLnNraWxscy5kYXRhLmZpbHRlcigodikgPT4gdGhpcy5kYXRhLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2VzID0gdGhpcy5wcm9jZXNzZXMuY29uY2F0KHAuc2tpbGxzLnByb2Nlc3Nlcy5maWx0ZXIoKHYpID0+IHRoaXMucHJvY2Vzc2VzLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBwIG9mIHRoaXMucmVzdW1lLnByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXMuY29uY2F0KHAuc2tpbGxzLmxhbmd1YWdlcy5maWx0ZXIoKHYpID0+IHRoaXMubGFuZ3VhZ2VzLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgdGhpcy50ZWNobm9sb2dpZXMgPSB0aGlzLnRlY2hub2xvZ2llcy5jb25jYXQocC5za2lsbHMudGVjaG5vbG9naWVzLmZpbHRlcigodikgPT4gdGhpcy50ZWNobm9sb2dpZXMuaW5kZXhPZih2KSA9PSAtMSkpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xzID0gdGhpcy50b29scy5jb25jYXQocC5za2lsbHMudG9vbHMuZmlsdGVyKCh2KSA9PiB0aGlzLnRvb2xzLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLmNvbmNhdChwLnNraWxscy5kYXRhLmZpbHRlcigodikgPT4gdGhpcy5kYXRhLmluZGV4T2YodikgPT0gLTEpKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzZXMgPSB0aGlzLnByb2Nlc3Nlcy5jb25jYXQocC5za2lsbHMucHJvY2Vzc2VzLmZpbHRlcigodikgPT4gdGhpcy5wcm9jZXNzZXMuaW5kZXhPZih2KSA9PSAtMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ2V0Q29sb3IoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbXVsdGVyID0gcGFyc2VJbnQoaW5kZXggLyA0KTtcclxuICAgICAgICBpbmRleCA9IGluZGV4IC0gKDQgKiBtdWx0ZXIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbG9hZGVyLXN1Y2Nlc3MnO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xvYWRlci13YXJuJztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsb2FkZXItZGFuZ2VyJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbG9hZGVyJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTa2lsbExpc3RWYWx1ZUNvbnZlcnRlciB7XHJcbiAgICB0b1ZpZXcodmFsdWUpIHtcclxuICAgICAgICBsZXQgcmV0VmFsID0gW107XHJcblxyXG4gICAgICAgIGlmKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yKGxldCB2IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXRWYWwucHVzaChJbWFnZVNlcnZpY2UuZ2V0U2tpbGxOYW1lKHYpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldFZhbC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG59Il19
