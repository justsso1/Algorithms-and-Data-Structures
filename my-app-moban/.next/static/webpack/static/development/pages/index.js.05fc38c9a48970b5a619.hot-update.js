webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/post-preview.js":
/*!************************************!*\
  !*** ./components/post-preview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostPreview; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _components_date_formater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formater */ \"./components/date-formater.js\");\n/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover-image */ \"./components/cover-image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/_next@9.4.1@next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/components/post-preview.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction PostPreview(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      author = _ref.author,\n      slug = _ref.slug;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, coverImage && __jsx(_cover_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    slug: slug,\n    title: title || slug,\n    src: coverImage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 26\n    }\n  })), __jsx(\"h3\", {\n    className: \"text-3xl mb-3 leading-snug\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    as: \"\".concat(slug),\n    href: \"/[...slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, title || slug))), __jsx(\"div\", {\n    className: \"text-lg mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, date && __jsx(_components_date_formater__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 22\n    }\n  })), excerpt && __jsx(\"p\", {\n    className: \"text-lg leading-relaxed mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 22\n    }\n  }, excerpt), author && __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: author.name,\n    picture: author.picture,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }));\n}\n_c = PostPreview;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostPreview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QtcHJldmlldy5qcz8zYmZjIl0sIm5hbWVzIjpbIlBvc3RQcmV2aWV3IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwibmFtZSIsInBpY3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQU9aO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tKLFVBQVUsSUFBSSxNQUFDLG9EQUFEO0FBQVksUUFBSSxFQUFFSSxJQUFsQjtBQUF3QixTQUFLLEVBQUVMLEtBQUssSUFBSUssSUFBeEM7QUFBOEMsT0FBRyxFQUFFSixVQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRG5CLENBREYsRUFJRTtBQUFJLGFBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLE1BQUUsWUFBS0ksSUFBTCxDQUFSO0FBQXFCLFFBQUksRUFBQyxZQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ0wsS0FBSyxJQUFJSyxJQUF6QyxDQURGLENBREYsQ0FKRixFQVNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSCxJQUFJLElBQUssTUFBQyxpRUFBRDtBQUFjLGNBQVUsRUFBRUEsSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURmLENBVEYsRUFZS0MsT0FBTyxJQUFLO0FBQUcsYUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNBLE9BQTdDLENBWmpCLEVBYU1DLE1BQU0sSUFBSSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxFQUFFQSxNQUFNLENBQUNFLElBQXJCO0FBQTJCLFdBQU8sRUFBRUYsTUFBTSxDQUFDRyxPQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYmhCLENBREY7QUFpQkQ7S0F6QnVCUixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wb3N0LXByZXZpZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gJy4uL2NvbXBvbmVudHMvYXZhdGFyJ1xuaW1wb3J0IERhdGVGb3JtYXRlciBmcm9tICcuLi9jb21wb25lbnRzL2RhdGUtZm9ybWF0ZXInXG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tICcuL2NvdmVyLWltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UHJldmlldyh7XG4gIHRpdGxlLFxuICBjb3ZlckltYWdlLFxuICBkYXRlLFxuICBleGNlcnB0LFxuICBhdXRob3IsXG4gIHNsdWcsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIHtjb3ZlckltYWdlICYmIDxDb3ZlckltYWdlIHNsdWc9e3NsdWd9IHRpdGxlPXt0aXRsZSB8fCBzbHVnfSBzcmM9e2NvdmVySW1hZ2V9IC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItMyBsZWFkaW5nLXNudWdcIj5cbiAgICAgICAgPExpbmsgYXM9e2Ake3NsdWd9YH0gaHJlZj1cIi9bLi4uc2x1Z11cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj57dGl0bGUgfHwgc2x1Z308L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgbWItNFwiPlxuICAgICAgICAgIHsgZGF0ZSAmJiAgPERhdGVGb3JtYXRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhjZXJwdCAmJiAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiPntleGNlcnB0fTwvcD59XG4gICAgICAgIHsgYXV0aG9yICYmIDxBdmF0YXIgbmFtZT17YXV0aG9yLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfSAvPn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post-preview.js\n");

/***/ })

})