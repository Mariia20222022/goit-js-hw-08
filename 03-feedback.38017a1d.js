!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,l=t,f=e.apply(i,n)}function w(e){return l=e,a=setTimeout(O,t),d?b(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=p();if(h(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function T(e){return a=void 0,v&&o?b(e):(o=r=void 0,f)}function x(){var e=p(),n=h(e);if(o=arguments,r=this,c=e,n){if(void 0===a)return w(c);if(s)return a=setTimeout(O,t),b(c)}return void 0===a&&(a=setTimeout(O,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},x.flush=function(){return void 0===a?f:T(p())},x}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form");console.log(w);document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]');w.addEventListener("submit",e(t)((function(e){e.preventDefault();new FormData(w);var t=Object.fromEntries(myFormData.entries());console.log(t)})),500)}();
//# sourceMappingURL=03-feedback.38017a1d.js.map
