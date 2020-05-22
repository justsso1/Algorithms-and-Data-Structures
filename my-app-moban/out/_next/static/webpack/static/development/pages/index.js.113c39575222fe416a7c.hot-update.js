webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/leetcode-list.js":
/*!*************************************!*\
  !*** ./components/leetcode-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LeetCodeList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.13.1@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/_next@9.4.1@next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ssojust/gitproject/Algorithms-and-Data-Structures/my-app-moban/components/leetcode-list.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction LeetCodeList(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts;\n  return __jsx(\"ul\", {\n    className: \"list-disc font-serif\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }\n  }, posts.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      className: \"mb-6 antialiased\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 24\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/leetcode/[slug]\",\n      as: \"leetcode/\".concat(item.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 25\n      }\n    }, __jsx(\"svg\", {\n      t: \"1589873091973\",\n      className: \"icon\",\n      viewBox: \"0 0 1024 1024\",\n      version: \"1.1\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      \"p-id\": \"3358\",\n      width: \"128\",\n      height: \"128\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 29\n      }\n    }, __jsx(\"path\", {\n      d: \"M897.4 63.9H128.2c-34.9 0-63.5 28.6-63.5 63.5v769.2c0 34.9 28.6 63.5 63.5 63.5h769.2c34.9 0 63.5-28.6 63.5-63.5V127.4c0-34.9-28.6-63.5-63.5-63.5z m-0.5 768.3c0 34.9-28.6 63.5-63.5 63.5H192.2c-34.9 0-63.5-28.6-63.5-63.5V191.4c0-34.9 28.6-63.5 63.5-63.5h641.3c34.9 0 63.5 28.6 63.5 63.5v640.8z\",\n      fill: \"#F5AF3F\",\n      \"p-id\": \"3359\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 106\n      }\n    }), __jsx(\"path\", {\n      d: \"M477.2 555.4c0 56-13.6 99-40.7 128.9-27.1 29.9-66 44.9-116.6 44.9-22.4 0-43.2-3.7-62.4-10.9v-85.1c16.5 11.9 35.3 17.8 56.4 17.8 45.6 0 68.4-32.9 68.4-98.8V297.8h94.9v257.6z m51.7 85.1c31.8 18.4 63 27.6 93.5 27.6 38.3 0 57.5-9.8 57.5-29.3 0-13.9-15.8-25.5-47.5-34.8-39.5-11.7-66.6-24.7-81.4-39-14.8-14.3-22.1-33.7-22.1-58.2 0-29.7 12.7-53.1 38-69.9 25.3-16.9 58.5-25.3 99.5-25.3 29.1 0 57.2 4.1 84.3 12.3v69.5c-24.7-13.9-52-20.8-81.7-20.8-14.8 0-26.7 2.5-35.7 7.5-9 5-13.5 11.6-13.5 19.8 0 13.9 13.4 25.1 40.3 33.7 28.8 9.1 50.4 17.4 64.9 24.9 14.5 7.5 25.5 17.3 33.1 29.6 7.6 12.2 11.4 26.4 11.4 42.4 0 31.2-13.1 55.4-39.4 72.7-26.3 17.2-61.4 25.9-105.3 25.9-34.5 0-66.4-5.2-95.8-15.6v-73z\",\n      fill: \"#F5AF3F\",\n      \"p-id\": \"3360\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 67\n      }\n    }))), __jsx(\"a\", {\n      className: \"text-lg hover:underline\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 25\n      }\n    }, item.slug)));\n  }));\n}\n_c = LeetCodeList;\n\nvar _c;\n\n$RefreshReg$(_c, \"LeetCodeList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.43.0@webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xlZXRjb2RlLWxpc3QuanM/M2U4YyJdLCJuYW1lcyI6WyJMZWV0Q29kZUxpc3QiLCJwb3N0cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsWUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVBDLEtBQU8sUUFBUEEsS0FBTztBQUN6QyxTQUNJO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hCLFdBQU87QUFBSSxTQUFHLEVBQUVBLEtBQVQ7QUFBZ0IsZUFBUyxFQUFDLGtCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0gsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxrQkFBWDtBQUE4QixRQUFFLHFCQUFlRCxJQUFJLENBQUNFLElBQXBCLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxPQUFDLEVBQUMsZUFBUDtBQUF1QixlQUFTLEVBQUMsTUFBakM7QUFBd0MsYUFBTyxFQUFDLGVBQWhEO0FBQWdFLGFBQU8sRUFBQyxLQUF4RTtBQUNLLFdBQUssRUFBQyw0QkFEWDtBQUN3QyxjQUFLLE1BRDdDO0FBQ29ELFdBQUssRUFBQyxLQUQxRDtBQUNnRSxZQUFNLEVBQUMsS0FEdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUM2RTtBQUN6RSxPQUFDLEVBQUMscVNBRHVFO0FBRXpFLFVBQUksRUFBQyxTQUZvRTtBQUUxRCxjQUFLLE1BRnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEN0UsRUFHc0M7QUFDbEMsT0FBQyxFQUFDLG1yQkFEZ0M7QUFFbEMsVUFBSSxFQUFDLFNBRjZCO0FBRW5CLGNBQUssTUFGYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSHRDLENBREosQ0FESixFQVNJO0FBQUcsZUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0NGLElBQUksQ0FBQ0UsSUFBN0MsQ0FUSixDQURHLENBQVA7QUFhSCxHQWRBLENBREwsQ0FESjtBQW1CSDtLQXBCdUJMLFkiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZXRjb2RlLWxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZXRDb2RlTGlzdCh7cG9zdHN9KXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGZvbnQtc2VyaWZcIj5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi02IGFudGlhbGlhc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGVldGNvZGUvW3NsdWddXCIgYXM9eyBgbGVldGNvZGUvJHtpdGVtLnNsdWd9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTU4OTg3MzA5MTk3M1wiIGNsYXNzTmFtZT1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIzMzU4XCIgd2lkdGg9XCIxMjhcIiBoZWlnaHQ9XCIxMjhcIj48cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTg5Ny40IDYzLjlIMTI4LjJjLTM0LjkgMC02My41IDI4LjYtNjMuNSA2My41djc2OS4yYzAgMzQuOSAyOC42IDYzLjUgNjMuNSA2My41aDc2OS4yYzM0LjkgMCA2My41LTI4LjYgNjMuNS02My41VjEyNy40YzAtMzQuOS0yOC42LTYzLjUtNjMuNS02My41eiBtLTAuNSA3NjguM2MwIDM0LjktMjguNiA2My41LTYzLjUgNjMuNUgxOTIuMmMtMzQuOSAwLTYzLjUtMjguNi02My41LTYzLjVWMTkxLjRjMC0zNC45IDI4LjYtNjMuNSA2My41LTYzLjVoNjQxLjNjMzQuOSAwIDYzLjUgMjguNiA2My41IDYzLjV2NjQwLjh6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGNUFGM0ZcIiBwLWlkPVwiMzM1OVwiPjwvcGF0aD48cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ3Ny4yIDU1NS40YzAgNTYtMTMuNiA5OS00MC43IDEyOC45LTI3LjEgMjkuOS02NiA0NC45LTExNi42IDQ0LjktMjIuNCAwLTQzLjItMy43LTYyLjQtMTAuOXYtODUuMWMxNi41IDExLjkgMzUuMyAxNy44IDU2LjQgMTcuOCA0NS42IDAgNjguNC0zMi45IDY4LjQtOTguOFYyOTcuOGg5NC45djI1Ny42eiBtNTEuNyA4NS4xYzMxLjggMTguNCA2MyAyNy42IDkzLjUgMjcuNiAzOC4zIDAgNTcuNS05LjggNTcuNS0yOS4zIDAtMTMuOS0xNS44LTI1LjUtNDcuNS0zNC44LTM5LjUtMTEuNy02Ni42LTI0LjctODEuNC0zOS0xNC44LTE0LjMtMjIuMS0zMy43LTIyLjEtNTguMiAwLTI5LjcgMTIuNy01My4xIDM4LTY5LjkgMjUuMy0xNi45IDU4LjUtMjUuMyA5OS41LTI1LjMgMjkuMSAwIDU3LjIgNC4xIDg0LjMgMTIuM3Y2OS41Yy0yNC43LTEzLjktNTItMjAuOC04MS43LTIwLjgtMTQuOCAwLTI2LjcgMi41LTM1LjcgNy41LTkgNS0xMy41IDExLjYtMTMuNSAxOS44IDAgMTMuOSAxMy40IDI1LjEgNDAuMyAzMy43IDI4LjggOS4xIDUwLjQgMTcuNCA2NC45IDI0LjkgMTQuNSA3LjUgMjUuNSAxNy4zIDMzLjEgMjkuNiA3LjYgMTIuMiAxMS40IDI2LjQgMTEuNCA0Mi40IDAgMzEuMi0xMy4xIDU1LjQtMzkuNCA3Mi43LTI2LjMgMTcuMi02MS40IDI1LjktMTA1LjMgMjUuOS0zNC41IDAtNjYuNC01LjItOTUuOC0xNS42di03M3pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0Y1QUYzRlwiIHAtaWQ9XCIzMzYwXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1sZyBob3Zlcjp1bmRlcmxpbmVcIj57aXRlbS5zbHVnfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/leetcode-list.js\n");

/***/ })

})