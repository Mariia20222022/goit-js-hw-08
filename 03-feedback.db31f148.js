!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,s=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,f=setTimeout(O,t),s?j(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?v(n,u-(e-l)):n}(e))}function T(e){return f=void 0,y&&r?j(e):(r=i=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(O,t),j(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(g(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form");console.log(j);document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]');var S="feedback-form-state";j.addEventListener("input",thtottle((function(e){console.log(j.querySelector('input[name="email"]')),console.log(j.querySelector('input[name="message"]'));var t=new FormData(j),n={email:t.get("email"),message:t.get("message")};console.log(n),localStorage.setItem(S,JSON.stringify(n))})),500),j.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.db31f148.js.map
