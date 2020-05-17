webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeroPost; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ \"./components/avatar.js\");\n/* harmony import */ var _components_date_formater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formater */ \"./components/date-formater.js\");\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cover-image */ \"./components/cover-image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/_next@9.4.1@next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/components/hero-post.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction HeroPost(_ref) {\n  var title = _ref.title,\n      coverImage = _ref.coverImage,\n      date = _ref.date,\n      excerpt = _ref.excerpt,\n      author = _ref.author,\n      slug = _ref.slug;\n  return __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-8 md:mb-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, coverImage && __jsx(_components_cover_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: title && '',\n    src: coverImage,\n    slug: slug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    className: \"mb-4 text-4xl lg:text-6xl leading-tight\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    as: \"/posts/\".concat(slug),\n    href: \"/posts/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"hover:underline\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, title || slug))), __jsx(\"div\", {\n    className: \"mb-4 md:mb-0 text-lg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_components_date_formater__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dateString: date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    className: \"text-lg leading-relaxed mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, excerpt), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    name: author.name,\n    picture: author.picture,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = HeroPost;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeroPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcz9kMWIxIl0sIm5hbWVzIjpbIkhlcm9Qb3N0IiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImV4Y2VycHQiLCJhdXRob3IiLCJzbHVnIiwibmFtZSIsInBpY3R1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQU9aO0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsVUFLQyxRQUxEQSxVQUtDO0FBQUEsTUFKREMsSUFJQyxRQUpEQSxJQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsSUFDQyxRQUREQSxJQUNDO0FBQ0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlKLFVBQVUsSUFBSSxNQUFDLCtEQUFEO0FBQVksU0FBSyxFQUFFRCxLQUFLLElBQUksRUFBNUI7QUFBZ0MsT0FBRyxFQUFFQyxVQUFyQztBQUFpRCxRQUFJLEVBQUVJLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGbEIsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLGtFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxNQUFFLG1CQUFZQSxJQUFaLENBQVI7QUFBNEIsUUFBSSxFQUFDLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDTCxLQUFLLElBQUlLLElBQXpDLENBREYsQ0FERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBYyxjQUFVLEVBQUVILElBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Q0MsT0FBN0MsQ0FERixFQUVFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUVDLE1BQU0sQ0FBQ0UsSUFBckI7QUFBMkIsV0FBTyxFQUFFRixNQUFNLENBQUNHLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVhGLENBTkYsQ0FERjtBQXlCRDtLQWpDdUJSLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8tcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSAnLi4vY29tcG9uZW50cy9hdmF0YXInXG5pbXBvcnQgRGF0ZUZvcm1hdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXRlcidcbmltcG9ydCBDb3ZlckltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvY292ZXItaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9Qb3N0KHtcbiAgdGl0bGUsXG4gIGNvdmVySW1hZ2UsXG4gIGRhdGUsXG4gIGV4Y2VycHQsXG4gIGF1dGhvcixcbiAgc2x1Zyxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBtZDptYi0xNlwiPlxuICAgICAgICB7XG4gICAgICAgICAgY292ZXJJbWFnZSAmJiA8Q292ZXJJbWFnZSB0aXRsZT17dGl0bGUgJiYgJyd9IHNyYz17Y292ZXJJbWFnZX0gc2x1Zz17c2x1Z30gLz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTggbWItMjAgbWQ6bWItMjhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICA8TGluayBhcz17YC9wb3N0cy8ke3NsdWd9YH0gaHJlZj1cIi9wb3N0cy9bc2x1Z11cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+e3RpdGxlIHx8IHNsdWd9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IG1kOm1iLTAgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPERhdGVGb3JtYXRlciBkYXRlU3RyaW5nPXtkYXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+e2V4Y2VycHR9PC9wPlxuICAgICAgICAgIDxBdmF0YXIgbmFtZT17YXV0aG9yLm5hbWV9IHBpY3R1cmU9e2F1dGhvci5waWN0dXJlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hero-post.js\n");

/***/ })

})