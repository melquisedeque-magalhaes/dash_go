"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/melqui/Documents/GitHub/dash_go/src/pages/dashboard.tsx\";\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"dashboard.tsx -> \" + \"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\n\nvar options = {\n  chart: {\n    toolbar: {\n      show: false\n    },\n    zoom: {\n      enable: false\n    }\n  }\n};\nvar series = [{\n  name: 'Series1',\n  data: [31, 120, 10, 28, 51, 18, 109]\n}];\nfunction Dashboard() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n    direction: \"column\",\n    h: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n      w: \"100%\",\n      my: \"6\",\n      maxWidth: 1480,\n      mx: \"auto\",\n      px: \"6\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.SimpleGrid, {\n        flex: \"1\",\n        gap: \"4\",\n        minChildWidth: \"320px\",\n        align: \"flex-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Inscritos da Semana\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            type: \"area\",\n            height: 160,\n            options: options,\n            series: series\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n          p: \"8\",\n          bg: \"gray.800\",\n          borderRadius: 8,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n            fontSize: \"lg\",\n            mb: \"4\",\n            children: \"Taxa de Abertura\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n_c3 = Dashboard;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNSyxLQUFLLEdBQUdELG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtPQUFOO0FBQUEsQ0FBRCxFQUFtQztBQUNwREUsRUFBQUEsR0FBRyxFQUFFLEtBRCtDO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLG9DQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQW5DLENBQXJCO01BQU1EO0FBSU47QUFDQTtBQUVBLElBQU1JLE9BQU8sR0FBRztBQUNaQyxFQUFBQSxLQUFLLEVBQUU7QUFDSEMsSUFBQUEsT0FBTyxFQUFFO0FBQ0xDLE1BQUFBLElBQUksRUFBRTtBQURELEtBRE47QUFJSEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLE1BQU0sRUFBRTtBQUROO0FBSkg7QUFESyxDQUFoQjtBQVdBLElBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCO0FBQXpCLENBRFcsQ0FBZjtBQUtlLFNBQVNDLFNBQVQsR0FBb0I7QUFDL0Isc0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsS0FBQyxFQUFDLE9BQTNCO0FBQUEsNEJBQ0ksOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBR0UsOERBQUMsa0RBQUQ7QUFDSSxPQUFDLEVBQUMsTUFETjtBQUVJLFFBQUUsRUFBQyxHQUZQO0FBR0ksY0FBUSxFQUFFLElBSGQ7QUFJSSxRQUFFLEVBQUMsTUFKUDtBQUtJLFFBQUUsRUFBQyxHQUxQO0FBQUEsOEJBT00sOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBOLGVBU00sOERBQUMsd0RBQUQ7QUFDRSxZQUFJLEVBQUMsR0FEUDtBQUVFLFdBQUcsRUFBQyxHQUZOO0FBR0UscUJBQWEsRUFBQyxPQUhoQjtBQUlFLGFBQUssRUFBQyxZQUpSO0FBQUEsZ0NBTUksOERBQUMsaURBQUQ7QUFDSSxXQUFDLEVBQUMsR0FETjtBQUVJLFlBQUUsRUFBQyxVQUZQO0FBR0ksc0JBQVksRUFBRSxDQUhsQjtBQUFBLGtDQUtJLDhEQUFDLGtEQUFEO0FBQ0ksb0JBQVEsRUFBQyxJQURiO0FBRUksY0FBRSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFXSSw4REFBQyxLQUFEO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFNLEVBQUUsR0FBM0I7QUFBZ0MsbUJBQU8sRUFBRVQsT0FBekM7QUFBa0Qsa0JBQU0sRUFBRU07QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFtQkksOERBQUMsaURBQUQ7QUFDSSxXQUFDLEVBQUMsR0FETjtBQUVJLFlBQUUsRUFBQyxVQUZQO0FBR0ksc0JBQVksRUFBRSxDQUhsQjtBQUFBLGlDQUtJLDhEQUFDLGtEQUFEO0FBQ0ksb0JBQVEsRUFBQyxJQURiO0FBRUksY0FBRSxFQUFDLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdESDtNQWpEdUJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4PzliMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgU2ltcGxlR3JpZCwgQm94LCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtYXBleGNoYXJ0c1wiKSwge1xuICAgIHNzcjogZmFsc2Vcbn0pXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhclwiXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgY2hhcnQ6IHtcbiAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgem9vbToge1xuICAgICAgICAgICAgZW5hYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBzZXJpZXMgPSBbXG4gICAgeyBuYW1lOiAnU2VyaWVzMScsIGRhdGE6IFszMSwgMTIwLCAxMCwgMjgsIDUxLCAxOCwgMTA5XSB9XG5dXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBoPVwiMTAwdmhcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgIHc9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbXk9XCI2XCJcbiAgICAgICAgICAgICAgbWF4V2lkdGg9ezE0ODB9XG4gICAgICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHB4PVwiNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cblxuICAgICAgICAgICAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgICAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgICAgICAgICBnYXA9XCI0XCJcbiAgICAgICAgICAgICAgICAgIG1pbkNoaWxkV2lkdGg9XCIzMjBweFwiXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgcD1cIjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJncmF5LjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWI9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnNjcml0b3MgZGEgU2VtYW5hXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhcnQgdHlwZT1cImFyZWFcIiBoZWlnaHQ9ezE2MH0gb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBwPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBiZz1cImdyYXkuODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYj1cIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRheGEgZGUgQWJlcnR1cmFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJGbGV4IiwiU2ltcGxlR3JpZCIsIkJveCIsIlRleHQiLCJkeW5hbWljIiwiQ2hhcnQiLCJzc3IiLCJIZWFkZXIiLCJTaWRlYmFyIiwib3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJ6b29tIiwiZW5hYmxlIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJEYXNoYm9hcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n");

/***/ })

});