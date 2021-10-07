define("m", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hi = void 0;
    exports.hi = 'hello, I am in M module';
});
define("app", ["require", "exports", "m"], function (require, exports, m_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let a = 123;
    console.log(a);
    console.log(m_js_1.hi);
    let app = 'app';
    document.getElementById('asd');
});
