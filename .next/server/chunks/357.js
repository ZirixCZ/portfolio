"use strict";
exports.id = 357;
exports.ids = [357];
exports.modules = {

/***/ 357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Card_Card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Card/Card.tsx



const Card = ({ children , header , link , picture , width  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-full w-screen flex items-center justify-center text-BackgroundPageDefault",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "xl:h-2/4 h-full w-full xl:w-5/6 bg-White rounded-2xl mt-40",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        className: "m-20 rounded-2xl",
                        src: picture,
                        height: 160,
                        width: width
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-full w-full bg-White rounded-2xl flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "xl:m-20 text-3xl xl:text-7xl mt-40 m-10",
                                children: header
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "m-5 xl:m-20 text-lg xl:text-3xl",
                                children: [
                                    "Discord bot created to show information about the timetable. E.g time until certain events take place. Inspired by the Delta Time mobile app by MadSoft.cz.   ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-BlueDefault underline",
                                        href: link,
                                        target: "_blank",
                                        children: "Check it out on GitHub"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Card_Card = (Card);

;// CONCATENATED MODULE: ./components/Card/index.ts



/***/ })

};
;