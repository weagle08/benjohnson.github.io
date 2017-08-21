System.register(['aurelia-polyfills', 'whatwg-fetch', 'aurelia-framework', 'aurelia-logging-console'], function (_export, _context) {
  "use strict";

  var LogManager, ConsoleAppender;
  function configure(aurelia) {
    aurelia.use.standardConfiguration();
    aurelia.start().then(function (a) {
      return a.setRoot('app/pages/app', document.body);
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPolyfills) {}, function (_whatwgFetch) {}, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }],
    execute: function () {

      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.logLevel.warn);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInN0YXJ0IiwidGhlbiIsImEiLCJzZXRSb290IiwiZG9jdW1lbnQiLCJib2R5IiwiTG9nTWFuYWdlciIsIkNvbnNvbGVBcHBlbmRlciIsImFkZEFwcGVuZGVyIiwic2V0TGV2ZWwiLCJsb2dMZXZlbCIsIndhcm4iXSwibWFwcGluZ3MiOiI7Ozs7QUFXTyxXQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUE0QjtBQUMvQkEsWUFBUUMsR0FBUixDQUFZQyxxQkFBWjtBQUNBRixZQUFRRyxLQUFSLEdBQWdCQyxJQUFoQixDQUFxQjtBQUFBLGFBQUtDLEVBQUVDLE9BQUYsQ0FBVSxlQUFWLEVBQTJCQyxTQUFTQyxJQUFwQyxDQUFMO0FBQUEsS0FBckI7QUFDSDs7dUJBSGVULFM7Ozs7QUFOUlUsZ0IscUJBQUFBLFU7O0FBQ0FDLHFCLDBCQUFBQSxlOzs7O0FBRVJELGlCQUFXRSxXQUFYLENBQXVCLElBQUlELGVBQUosRUFBdkI7QUFDQUQsaUJBQVdHLFFBQVgsQ0FBb0JILFdBQVdJLFFBQVgsQ0FBb0JDLElBQXhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBiZW4gb24gMTAvMjMvMTYuXHJcbiAqL1xyXG5pbXBvcnQgJ2F1cmVsaWEtcG9seWZpbGxzJztcclxuaW1wb3J0ICd3aGF0d2ctZmV0Y2gnO1xyXG5pbXBvcnQge0xvZ01hbmFnZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtDb25zb2xlQXBwZW5kZXJ9IGZyb20gJ2F1cmVsaWEtbG9nZ2luZy1jb25zb2xlJztcclxuXHJcbkxvZ01hbmFnZXIuYWRkQXBwZW5kZXIobmV3IENvbnNvbGVBcHBlbmRlcigpKTtcclxuTG9nTWFuYWdlci5zZXRMZXZlbChMb2dNYW5hZ2VyLmxvZ0xldmVsLndhcm4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcbiAgICBhdXJlbGlhLnVzZS5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKTsvLy5kZXZlbG9wbWVudExvZ2dpbmcoKTtcclxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCdhcHAvcGFnZXMvYXBwJywgZG9jdW1lbnQuYm9keSkpO1xyXG59Il19
