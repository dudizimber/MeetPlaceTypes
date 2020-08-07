'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.File = void 0;
var File = /** @class */ (function () {
  function File($fileId, $name, $fileType, $fileUrl, $fileOptions, $creator, $createdDate, $body) {
    this.fileId = $fileId;
    this.name = $name;
    this.fileType = $fileType;
    this.fileUrl = $fileUrl;
    this.fileOptions = $fileOptions;
    this.creator = $creator;
    this.createdDate = $createdDate;
    this.body = $body;
  }
  return File;
})();
exports.File = File;
