module.exports =
  /******/ (function (modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ 		// Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/      i: moduleId,
      /******/      l: false,
      /******/      exports: {}
      /******/
    };
    /******/
    /******/ 		// Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/
    return module.exports;
    /******/
  }

  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {enumerable: true, get: getter});
      /******/
    }
    /******/
  };
  /******/
  /******/ 	// define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  };
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {enumerable: true, value: value});
    /******/
    if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
      return value[key];
    }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
      /******/      function getDefault() {
        return module['default'];
      } :
      /******/      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ 	// __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = "./forum.js");
  /******/
})
  /************************************************************************/
  /******/ ({

    /***/ "./forum.js":
    /*!******************!*\
      !*** ./forum.js ***!
      \******************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
      /* empty/unused harmony star reexport */

      /***/
    }),

    /***/ "./src/forum/index.js":
    /*!****************************!*\
      !*** ./src/forum/index.js ***!
      \****************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
      /* harmony import */
      var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
      /* harmony import */
      var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderSecondary */ "flarum/components/HeaderSecondary");
      /* harmony import */
      var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */
      var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
      /* harmony import */
      var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */
      var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
      /* harmony import */
      var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);


      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('fly3949-sso', function () {
        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'init', redirectWhenLoginModalIsOpened); // Remove login button if checkbox is selected

        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "items", function (items) {
          if (!checkSettings()) {
            return;
          }

          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.disable_login_btn'] === "1") {
            items.remove("logIn");
          } else {
            replaceLoginButton(items);
          }
        }); // Remove signUp button if checkbox is selected

        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, "items", function (items) {
          if (!checkSettings()) {
            return;
          }

          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.disable_signup_btn'] === "1") {
            items.remove("signUp");
          } else {
            replaceSignUpButton(items);
          }
        });
        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'accountItems', removeProfileActions);
        Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'settingsItems', checkRemoveAccountSection);

        function redirectWhenLoginModalIsOpened() {
          if (!checkSettings()) {
            return;
          }

          window.location.href = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.login_url'];
          throw new Error('Stop execution');
        }

        function replaceLoginButton(items) {
          if (!checkSettings()) {
            return;
          }

          if (!items.has('logIn')) {
            return;
          }

          var loginUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.login_url'];
          items.replace('logIn', m("a", {
            href: loginUrl,
            className: "Button Button--link"
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.header.log_in_link')));
        }

        function replaceSignUpButton(items) {
          if (!checkSettings()) {
            return;
          }

          if (!items.has('signUp')) {
            return;
          }

          var signupUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.signup_url'];
          items.replace('signUp', m("a", {
            href: signupUrl,
            className: "Button Button--link"
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.header.sign_up_link')));
        }

        function removeProfileActions(items) {
          if (!checkSettings()) {
            return;
          }

          items.remove('changeEmail');
          items.remove('changePassword');
        }

        function checkRemoveAccountSection(items) {
          if (!checkSettings()) {
            return;
          }

          if (items.has('account') && items.get('account').props.children.length === 0) {
            items.remove('account');
          }
        }

        /**
         * Checks whether secret key is set
         *
         * @returns {*}
         */


        function checkSettings() {
          return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes['fly3949-sso.enabled'];
        }
      });

      /***/
    }),

    /***/ "flarum/app":
    /*!********************************************!*\
      !*** external "flarum.core.compat['app']" ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.core.compat['app'];

      /***/
    }),

    /***/ "flarum/components/HeaderSecondary":
    /*!*******************************************************************!*\
      !*** external "flarum.core.compat['components/HeaderSecondary']" ***!
      \*******************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.core.compat['components/HeaderSecondary'];

      /***/
    }),

    /***/ "flarum/components/LogInModal":
    /*!**************************************************************!*\
      !*** external "flarum.core.compat['components/LogInModal']" ***!
      \**************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.core.compat['components/LogInModal'];

      /***/
    }),

    /***/ "flarum/components/SettingsPage":
    /*!****************************************************************!*\
      !*** external "flarum.core.compat['components/SettingsPage']" ***!
      \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.core.compat['components/SettingsPage'];

      /***/
    }),

    /***/ "flarum/extend":
    /*!***********************************************!*\
      !*** external "flarum.core.compat['extend']" ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.core.compat['extend'];

      /***/
    })

    /******/
  });
//# sourceMappingURL=forum.js.map
