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
  return __webpack_require__(__webpack_require__.s = "./admin.js");
  /******/
})
  /************************************************************************/
  /******/ ({

    /***/ "./admin.js":
    /*!******************!*\
      !*** ./admin.js ***!
      \******************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
      /* empty/unused harmony star reexport */

      /***/
    }),

    /***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
    /*!******************************************************************!*\
      !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
      \******************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "default", function () {
        return _inheritsLoose;
      });

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      /***/
    }),

    /***/ "./src/admin/components/SSOSettingsModal.js":
    /*!**************************************************!*\
      !*** ./src/admin/components/SSOSettingsModal.js ***!
      \**************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "default", function () {
        return SSOSettingsModal;
      });
      /* harmony import */
      var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
      /* harmony import */
      var _fof_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fof-components */ "@fof-components");
      /* harmony import */
      var _fof_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fof_components__WEBPACK_IMPORTED_MODULE_1__);


      var SettingsModal = _fof_components__WEBPACK_IMPORTED_MODULE_1__["settings"].SettingsModal,
        _settings$items = _fof_components__WEBPACK_IMPORTED_MODULE_1__["settings"].items,
        StringItem = _settings$items.StringItem,
        BooleanItem = _settings$items.BooleanItem;

      var SSOSettingsModal = /*#__PURE__*/function (_SettingsModal) {
        Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SSOSettingsModal, _SettingsModal);

        function SSOSettingsModal() {
          return _SettingsModal.apply(this, arguments) || this;
        }

        var _proto = SSOSettingsModal.prototype;

        _proto.className = function className() {
          return 'Modal';
        };

        _proto.title = function title() {
          return app.translator.trans('fly3949-sso.admin.settings.title');
        };

        _proto.form = function form() {
          return [m(StringItem, {
            key: "fly3949-sso.secret_key"
          }, app.translator.trans('fly3949-sso.admin.settings.secret_key')), m(StringItem, {
            key: "fly3949-sso.signup_url"
          }, app.translator.trans('fly3949-sso.admin.settings.signup_url')), m(StringItem, {
            key: "fly3949-sso.login_url"
          }, app.translator.trans('fly3949-sso.admin.settings.login_url')), m(StringItem, {
            key: "fly3949-sso.logout_url"
          }, app.translator.trans('fly3949-sso.admin.settings.logout_url')), m("div", {
            className: "Form-group"
          }, m(BooleanItem, {
            key: "fly3949-sso.disable_login_btn"
          }, app.translator.trans('fly3949-sso.admin.settings.disable_login_btn'))), m("div", {
            className: "Form-group"
          }, m(BooleanItem, {
            key: "fly3949-sso.disable_signup_btn"
          }, app.translator.trans('fly3949-sso.admin.settings.disable_signup_btn')))];
        };

        return SSOSettingsModal;
      }(SettingsModal); // export default () => {
//   app.extensionSettings['fly3949-sso'] = () =>
//     app.modal.show(
//       new SettingsModal({
//         title: app.translator.trans('fly3949-sso.admin.settings.title'),
//         size: 'small',
//         items: [
//           <StringItem key="fly3949-sso.secret_key">
//             {app.translator.trans('fly3949-sso.admin.settings.secret_key')}
//           </StringItem>,
//           <StringItem key="fly3949-sso.logout_url">
//             {app.translator.trans('fly3949-sso.admin.settings.logout_url')}
//           </StringItem>,
//           <BooleanItem key="fly3949-sso.disable_login_btn">
//             {app.translator.trans('fly3949-sso.admin.settings.disable_login_btn')}
//           </BooleanItem>,
//           <BooleanItem key="fly3949-sso.disable_signup_btn">
//             {app.translator.trans('fly3949-sso.admin.settings.disable_signup_btn')}
//           </BooleanItem>
//         ],
//       })
//     );
// }


      /***/
    }),

    /***/ "./src/admin/index.js":
    /*!****************************!*\
      !*** ./src/admin/index.js ***!
      \****************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _components_SSOSettingsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SSOSettingsModal */ "./src/admin/components/SSOSettingsModal.js");

      app.initializers.add('fly3949-sso', function () {
        app.extensionSettings['fly3949-sso'] = function () {
          return app.modal.show(new _components_SSOSettingsModal__WEBPACK_IMPORTED_MODULE_0__["default"]());
        };
      });

      /***/
    }),

    /***/ "@fof-components":
    /*!******************************************************!*\
      !*** external "flarum.extensions['fof-components']" ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

      module.exports = flarum.extensions['fof-components'];

      /***/
    })

    /******/
  });
//# sourceMappingURL=admin.js.map
