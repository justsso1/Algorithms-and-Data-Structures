webpackHotUpdate("static/development/pages/posts/[slug].js",{

/***/ "./components/alert.js":
/*!*****************************!*\
  !*** ./components/alert.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alert; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/_classnames@2.2.6@classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\nvar _jsxFileName = \"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/components/alert.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Alert(_ref) {\n  var preview = _ref.preview;\n  return __jsx(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('border-b', {\n      'bg-accent-7 border-accent-7 text-white': preview,\n      'bg-accent-1 border-accent-2': !preview\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"py-2 text-center text-sm\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, preview ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"This is page is a preview.\", ' ', __jsx(\"a\", {\n    href: \"/api/exit-preview\",\n    className: \"underline hover:text-cyan duration-200 transition-colors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 15\n    }\n  }, \"Click here\"), ' ', \"to exit preview mode.\") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"The source code for this blog is\", ' ', __jsx(\"a\", {\n    href: \"https://github.com/zeit/next.js/tree/canary/examples/\".concat(_lib_constants__WEBPACK_IMPORTED_MODULE_3__[\"EXAMPLE_PATH\"]),\n    className: \"underline hover:text-success duration-200 transition-colors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, \"available on GitHub\"), \".\"))));\n}\n_c = Alert;\n\nvar _c;\n\n$RefreshReg$(_c, \"Alert\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FsZXJ0LmpzPzIyOWUiXSwibmFtZXMiOlsiQWxlcnQiLCJwcmV2aWV3IiwiY24iLCJFWEFNUExFX1BBVEgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxPQUE0QjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUN6QyxTQUNFO0FBQ0UsYUFBUyxFQUFFQyxpREFBRSxDQUFDLFVBQUQsRUFBYTtBQUN4QixnREFBMENELE9BRGxCO0FBRXhCLHFDQUErQixDQUFDQTtBQUZSLEtBQWIsQ0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxPQUFPLEdBQ04saUdBQzZCLEdBRDdCLEVBRUU7QUFDRSxRQUFJLEVBQUMsbUJBRFA7QUFFRSxhQUFTLEVBQUMsMERBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQU9PLEdBUFAsMEJBRE0sR0FZTix1R0FDbUMsR0FEbkMsRUFFRTtBQUNFLFFBQUksaUVBQTBERSwyREFBMUQsQ0FETjtBQUVFLGFBQVMsRUFBQyw2REFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGLE1BYkosQ0FERixDQU5GLENBREY7QUFvQ0Q7S0FyQ3VCSCxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hbGVydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9jb250YWluZXInXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IEVYQU1QTEVfUEFUSCB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgcHJldmlldyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbignYm9yZGVyLWInLCB7XG4gICAgICAgICdiZy1hY2NlbnQtNyBib3JkZXItYWNjZW50LTcgdGV4dC13aGl0ZSc6IHByZXZpZXcsXG4gICAgICAgICdiZy1hY2NlbnQtMSBib3JkZXItYWNjZW50LTInOiAhcHJldmlldyxcbiAgICAgIH0pfVxuICAgID5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAge3ByZXZpZXcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGlzIGlzIHBhZ2UgaXMgYSBwcmV2aWV3LnsnICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hcGkvZXhpdC1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1jeWFuIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbGljayBoZXJlXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBleGl0IHByZXZpZXcgbW9kZS5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICBUaGUgc291cmNlIGNvZGUgZm9yIHRoaXMgYmxvZyBpc3snICd9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvJHtFWEFNUExFX1BBVEh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgaG92ZXI6dGV4dC1zdWNjZXNzIGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBhdmFpbGFibGUgb24gR2l0SHViXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/alert.js\n");

/***/ })

})