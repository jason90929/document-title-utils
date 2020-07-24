/*!
  Copyright (c) 2020 Jason Tseng.
  Licensed under the MIT License (MIT), see
  https://github.com/jason90929/document-title-utils
*/
/* global define */

(function () {
  'use strict';

  var documentTitleUtils = {
    init(name, spltter) {
      this.primaryName = name || '';
      this.splitter = spltter || '|';
    },
    getSplitter() {
      return this.splitter;
    },
    getPrimaryName() {
      return this.primaryName;
    },
    markUnread(unread) {
      this.unread = unread;
    },
    clearUnread() {
      this.unread = 0;
    },
  };

  documentTitleUtils.generateTitle = function getDocumentTitle(title = '') {
    let documentTitle = this.getPrimaryName();
    if (title) {
      documentTitle = `${title} ${this.getSplitter()} ${documentTitle}`;
    }
    if (this.unread) {
      documentTitle = `(${this.unread}) ${documentTitle}`;
    }
    document.title = documentTitle;
  };

  if (typeof module !== 'undefined' && module.exports) {
    documentTitleUtils.default = documentTitleUtils;
    module.exports = documentTitleUtils;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // register as 'documentTitleUtils', consistent with npm package name
    define('documentTitleUtils', [], function () {
      return documentTitleUtils;
    });
  } else {
    window.documentTitleUtils = documentTitleUtils;
  }
}());
