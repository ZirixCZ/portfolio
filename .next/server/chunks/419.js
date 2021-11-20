"use strict";
exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* reexport */ Navbar_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.tsx



const Navbar = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "fixed z-10 w-full h-24 bg-NavBar flex items-center justify-center font-UbuntuMono text-White border-b-2 border-HTMLTag shadow-2xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "m-7 text-3xl",
                    children: "Root"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "m-7 text-3xl text-text-WhiteFont",
                    children: "Projects"
                })
            })
        ]
    }));
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Navbar/index.ts



/***/ })

};
;