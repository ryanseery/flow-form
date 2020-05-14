'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.typeOf;
var reactIs_2 = reactIs.isElement;
var reactIs_3 = reactIs.isValidElementType;
var reactIs_4 = reactIs.ForwardRef;

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !reactIs_1(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return (process.env.NODE_ENV !== 'production' ? typeof target === 'string' && target : false) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.0";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || process.env.NODE_ENV !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS = process.env.NODE_ENV !== 'production' ? errorMap : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(', ') : ''));
  } else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if (process.env.NODE_ENV !== 'production' && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new stylis_min(options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = React__default.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = React__default.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return React.useContext(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return React.useContext(StylisContext) || masterStylis;
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (process.env.NODE_ENV !== 'production' && reactIs_2(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!reactIs_3(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic = process.env.NODE_ENV === 'production' && isStaticRules(rules);
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (process.env.NODE_ENV !== 'production') dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (process.env.NODE_ENV !== 'production') {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useRef();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && (process.env.NODE_ENV !== 'production' ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = React__default.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if (process.env.NODE_ENV !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = React.useContext(ThemeContext);
  var themeContext = React.useMemo(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  React.useDebugValue(className);

  if (process.env.NODE_ENV !== 'production' && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  React.useDebugValue(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, React.useContext(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context, process.env.NODE_ENV !== 'production' ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && index;
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, index)) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return React.createElement(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = React__default.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoistNonReactStatics_cjs(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (process.env.NODE_ENV !== 'production') {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = React.useContext(ThemeContext);
    var instanceRef = React.useRef(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if (process.env.NODE_ENV !== 'production' && React__default.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if (process.env.NODE_ENV !== 'production' && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    React.useEffect(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return React__default.memo(GlobalStyleComponent);
}
/* Warning if you've imported this file on React Native */

if (process.env.NODE_ENV !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('toKebabCase called on non-string');
    }
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
}

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('toCamelCase called on non-string');
    }
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) { return (index === 0 ? word.toLowerCase() : word.toUpperCase()); })
        .replace(/\s+/g, '');
}

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function handleArr(arr) {
    return arr
        .map(function (a) { return Object.entries(a).every(function (_a) {
        var _ = _a[0], v = _a[1];
        return v === false;
    }); })
        .every(function (b) { return b === false; });
}
function deepCheck(obj) {
    return Object.entries(obj)
        .reduce(function (acc, _a) {
        var _ = _a[0], v = _a[1];
        return (Array.isArray(v) ? __spreadArrays(acc, [handleArr(v)]) : __spreadArrays(acc, [v]));
    }, [])
        .every(function (a) { return a === false; });
}

var theme = {
    colors: {
        blue: '#00A0DF',
        grey: '#E6E6E6',
        white: '#ffffff',
        green: '#4BBF6B',
        red: '#FF0000',
    },
    fonts: {
        small: '1em',
        medium: '1.2em',
        large: '1.5em',
    },
    text: {
        indent: '0.2em',
    },
    border: {
        default: '0.0625em solid #BDBDBD',
        focus: '0.0625em solid #00A0DF',
        error: '0.0625em solid #FF0000',
        radius: '0.2em',
    },
    inputs: {
        radio: '0.75em',
        checkbox: '1em',
    },
};

function border(focused, showError) {
    if (focused && showError)
        return theme.border.error;
    if (focused)
        return theme.border.focus;
    if (showError)
        return theme.border.error;
    return theme.border.default;
}

var handleDefaults = function (e) {
    e.preventDefault();
    e.stopPropagation();
};

var initialState = {
    isFlowForm: false,
    canProceed: false,
    flow: {
        key: 0,
        end: 0,
        currentStep: null,
        steps: [],
    },
    formData: {},
    error: {},
    showError: {},
    focus: {},
};
var Context = React.createContext({});
var ACTIONS;
(function (ACTIONS) {
    ACTIONS["SET_FORM"] = "SET_FORM";
    ACTIONS["SET_FIELD"] = "SET_FIELD";
    ACTIONS["SET_FIELD_LIST"] = "SET_FIELD_LIST";
    ACTIONS["UPDATE_FIELD"] = "UPDATE_FIELD";
    ACTIONS["REMOVE_FILE"] = "REMOVE_FILE";
    ACTIONS["UPDATE_FILE_FIELD"] = "UPDATE_FILE_FIELD";
    ACTIONS["SET_BLUR"] = "SET_BLUR";
    ACTIONS["SET_FOCUS"] = "SET_FOCUS";
    ACTIONS["PROGRESS_FORM"] = "PROGRESS_FORM";
    ACTIONS["REVERT_FORM"] = "REVERT_FORM";
    ACTIONS["UPDATE_FIELD_LIST_ITEM"] = "UPDATE_FIELD_LIST_ITEM";
    ACTIONS["ADD_FIELD_LIST"] = "ADD_FIELD_LIST";
    ACTIONS["REMOVE_FIELD_LIST"] = "REMOVE_FIELD_LIST";
    ACTIONS["SET_FIELD_LIST_BLUR"] = "SET_FIELD_LIST_BLUR";
    ACTIONS["SET_FIELD_LIST_FOCUS"] = "SET_FIELD_LIST_FOCUS";
})(ACTIONS || (ACTIONS = {}));
var setForm = function (_a) {
    var isFlowForm = _a.isFlowForm, flow = _a.flow;
    return ({
        type: ACTIONS.SET_FORM,
        isFlowForm: isFlowForm,
        flow: flow,
    });
};
var setField = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.SET_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var setFieldList = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error, showError = _a.showError, focus = _a.focus;
    return ({
        type: ACTIONS.SET_FIELD_LIST,
        step: step,
        id: id,
        value: value,
        error: error,
        showError: showError,
        focus: focus,
    });
};
var updateInput = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var removeFile = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index;
    return ({
        type: ACTIONS.REMOVE_FILE,
        step: step,
        id: id,
        index: index,
    });
};
var updateFileField = function (_a) {
    var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FILE_FIELD,
        step: step,
        id: id,
        value: value,
        error: error,
    });
};
var setBlur = function (_a) {
    var step = _a.step, id = _a.id, showError = _a.showError;
    return ({
        type: ACTIONS.SET_BLUR,
        step: step,
        id: id,
        showError: showError,
    });
};
var setFocus = function (_a) {
    var step = _a.step, id = _a.id;
    return ({
        type: ACTIONS.SET_FOCUS,
        step: step,
        id: id,
    });
};
var progressForm = function () { return ({
    type: ACTIONS.PROGRESS_FORM,
}); };
var revertForm = function () { return ({
    type: ACTIONS.REVERT_FORM,
}); };
var updateInputListItem = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value, error = _a.error;
    return ({
        type: ACTIONS.UPDATE_FIELD_LIST_ITEM,
        step: step,
        id: id,
        index: index,
        name: name,
        value: value,
        error: error,
    });
};
var addFieldList = function (_a) {
    var step = _a.step, id = _a.id, blankInput = _a.blankInput, blankError = _a.blankError, blankFocus = _a.blankFocus;
    return ({
        type: ACTIONS.ADD_FIELD_LIST,
        step: step,
        id: id,
        blankInput: blankInput,
        blankError: blankError,
        blankFocus: blankFocus,
    });
};
var removeFieldList = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index;
    return ({
        type: ACTIONS.REMOVE_FIELD_LIST,
        step: step,
        id: id,
        index: index,
    });
};
var setFieldListBlur = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name, error = _a.error;
    return ({
        type: ACTIONS.SET_FIELD_LIST_BLUR,
        step: step,
        id: id,
        index: index,
        name: name,
        error: error,
    });
};
var setFieldListFocus = function (_a) {
    var step = _a.step, id = _a.id, index = _a.index, name = _a.name;
    return ({
        type: ACTIONS.SET_FIELD_LIST_FOCUS,
        step: step,
        id: id,
        index: index,
        name: name,
    });
};
function reducer(state, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84;
    var _85, _86, _87, _88, _89, _90, _91, _92;
    switch (action.type) {
        case ACTIONS.SET_FORM: {
            var isFlowForm = action.isFlowForm, flow = action.flow;
            return __assign(__assign({}, state), { isFlowForm: isFlowForm, flow: flow });
        }
        case ACTIONS.SET_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null && !state.formData[id]) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_a = {}, _a[id] = error, _a))), formData: __assign(__assign({}, state.formData), (_b = {}, _b[id] = value, _b)), error: __assign(__assign({}, state.error), (_c = {}, _c[id] = error, _c)), showError: __assign(__assign({}, state.showError), (_d = {}, _d[id] = false, _d)), focus: __assign(__assign({}, state.focus), (_e = {}, _e[id] = false, _e)) });
            }
            else if (step != null && !((_86 = (_85 = state.formData) === null || _85 === void 0 ? void 0 : _85[step]) === null || _86 === void 0 ? void 0 : _86[id])) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_f = {}, _f[id] = error, _f))), formData: __assign(__assign({}, state.formData), (_g = {}, _g[step] = __assign(__assign({}, state.formData[step]), (_h = {}, _h[id] = value, _h)), _g)), error: __assign(__assign({}, state.error), (_j = {}, _j[step] = __assign(__assign({}, state.error[step]), (_k = {}, _k[id] = error, _k)), _j)), showError: __assign(__assign({}, state.showError), (_l = {}, _l[step] = __assign(__assign({}, state.showError[step]), (_m = {}, _m[id] = false, _m)), _l)), focus: __assign(__assign({}, state.focus), (_o = {}, _o[step] = __assign(__assign({}, state.focus[step]), (_p = {}, _p[id] = false, _p)), _o)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_q = {}, _q[id] = error, _q))), formData: __assign(__assign({}, state.formData), (_r = {}, _r[id] = value, _r)), error: __assign(__assign({}, state.error), (_s = {}, _s[id] = error, _s)), showError: __assign(__assign({}, state.showError), (_t = {}, _t[id] = error, _t)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_u = {}, _u[id] = error, _u))), formData: __assign(__assign({}, state.formData), (_v = {}, _v[step] = __assign(__assign({}, state.formData[step]), (_w = {}, _w[id] = value, _w)), _v)), error: __assign(__assign({}, state.error), (_x = {}, _x[step] = __assign(__assign({}, state.error[step]), (_y = {}, _y[id] = error, _y)), _x)), showError: __assign(__assign({}, state.showError), (_z = {}, _z[step] = __assign(__assign({}, state.showError[step]), (_0 = {}, _0[id] = error, _0)), _z)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.REMOVE_FILE: {
            var step = action.step, id = action.id, index_1 = action.index;
            if (step == null) {
                var mutable = __spreadArrays(state.formData[id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_1 = {}, _1[id] = __spreadArrays(updatedArr), _1)) });
            }
            else if (step != null) {
                var mutable = __spreadArrays(state.formData[step][id]);
                var updatedArr = mutable.filter(function (_, i) { return i !== index_1; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_2 = {}, _2[step] = __assign(__assign({}, state.formData[step]), (_3 = {}, _3[id] = __spreadArrays(updatedArr), _3)), _2)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FILE_FIELD: {
            var step = action.step, id = action.id, value = action.value, error = action.error;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_4 = {}, _4[id] = error, _4))), formData: __assign(__assign({}, state.formData), (_5 = {}, _5[id] = __spreadArrays(state.formData[id], value), _5)), error: __assign(__assign({}, state.error), (_6 = {}, _6[id] = error, _6)), showError: __assign(__assign({}, state.showError), (_7 = {}, _7[id] = error, _7)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_8 = {}, _8[id] = error, _8))), formData: __assign(__assign({}, state.formData), (_9 = {}, _9[step] = __assign(__assign({}, state.formData[step]), (_10 = {}, _10[id] = __spreadArrays(state.formData[step][id], value), _10)), _9)), error: __assign(__assign({}, state.error), (_11 = {}, _11[step] = __assign(__assign({}, state.error[step]), (_12 = {}, _12[id] = error, _12)), _11)), showError: __assign(__assign({}, state.showError), (_13 = {}, _13[step] = __assign(__assign({}, state.showError[step]), (_14 = {}, _14[id] = error, _14)), _13)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_BLUR: {
            var step = action.step, id = action.id, showError = action.showError;
            if (step == null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_15 = {}, _15[id] = showError, _15))), error: __assign(__assign({}, state.error), (_16 = {}, _16[id] = showError, _16)), showError: __assign(__assign({}, state.showError), (_17 = {}, _17[id] = showError, _17)), focus: __assign(__assign({}, state.focus), (_18 = {}, _18[id] = false, _18)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_19 = {}, _19[id] = showError, _19))), error: __assign(__assign({}, state.error), (_20 = {}, _20[step] = __assign(__assign({}, state.error[step]), (_21 = {}, _21[id] = showError, _21)), _20)), showError: __assign(__assign({}, state.showError), (_22 = {}, _22[step] = __assign(__assign({}, state.showError[step]), (_23 = {}, _23[id] = showError, _23)), _22)), focus: __assign(__assign({}, state.focus), (_24 = {}, _24[step] = __assign(__assign({}, state.focus[step]), (_25 = {}, _25[id] = false, _25)), _24)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FOCUS: {
            var step = action.step, id = action.id;
            if (step == null) {
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_26 = {}, _26[id] = !state.focus[id], _26)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_27 = {}, _27[step] = __assign(__assign({}, state.focus[step]), (_28 = {}, _28[id] = !state.focus[step][id], _28)), _27)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.PROGRESS_FORM: {
            var key = state.flow.key + 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_88 = (_87 = state === null || state === void 0 ? void 0 : state.flow) === null || _87 === void 0 ? void 0 : _87.steps) === null || _88 === void 0 ? void 0 : _88[key] }) });
        }
        case ACTIONS.REVERT_FORM: {
            var key = state.flow.key - 1;
            return __assign(__assign({}, state), { flow: __assign(__assign({}, state.flow), { key: key, currentStep: (_90 = (_89 = state === null || state === void 0 ? void 0 : state.flow) === null || _89 === void 0 ? void 0 : _89.steps) === null || _90 === void 0 ? void 0 : _90[key] }) });
        }
        case ACTIONS.SET_FIELD_LIST: {
            var step = action.step, id = action.id, value = action.value, error = action.error, showError = action.showError, focus_1 = action.focus;
            if (step == null && !state.formData[id]) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_29 = {}, _29[id] = __spreadArrays(value), _29)), error: __assign(__assign({}, state.error), (_30 = {}, _30[id] = __spreadArrays(error), _30)), showError: __assign(__assign({}, state.showError), (_31 = {}, _31[id] = __spreadArrays(showError), _31)), focus: __assign(__assign({}, state.focus), (_32 = {}, _32[id] = __spreadArrays(focus_1), _32)) });
            }
            else if (step != null && !((_92 = (_91 = state.formData) === null || _91 === void 0 ? void 0 : _91[step]) === null || _92 === void 0 ? void 0 : _92[id])) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_33 = {}, _33[step] = __assign(__assign({}, state.formData[step]), (_34 = {}, _34[id] = __spreadArrays(value), _34)), _33)), error: __assign(__assign({}, state.error), (_35 = {}, _35[step] = __assign(__assign({}, state.error[step]), (_36 = {}, _36[id] = __spreadArrays(error), _36)), _35)), showError: __assign(__assign({}, state.showError), (_37 = {}, _37[step] = __assign(__assign({}, state.showError[step]), (_38 = {}, _38[id] = __spreadArrays(showError), _38)), _37)), focus: __assign(__assign({}, state.focus), (_39 = {}, _39[step] = __assign(__assign({}, state.focus[step]), (_40 = {}, _40[id] = __spreadArrays(focus_1), _40)), _39)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.UPDATE_FIELD_LIST_ITEM: {
            var step = action.step, id = action.id, index = action.index, name_1 = action.name, value = action.value, error = action.error;
            if (step == null) {
                var mutableValue = __spreadArrays(state.formData[id]);
                mutableValue[index][name_1] = value;
                var mutateError = __spreadArrays(state.error[id]);
                mutateError[index][name_1] = error;
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error), (_41 = {}, _41[id] = __spreadArrays(mutateError), _41))), formData: __assign(__assign({}, state.formData), (_42 = {}, _42[id] = __spreadArrays(mutableValue), _42)), error: __assign(__assign({}, state.error), (_43 = {}, _43[id] = __spreadArrays(mutateError), _43)) });
            }
            else if (step != null) {
                var mutableValue = __spreadArrays(state.formData[step][id]);
                mutableValue[index][name_1] = value;
                var mutableError = __spreadArrays(state.error[step][id]);
                mutableError[index][name_1] = error;
                return __assign(__assign({}, state), { canProceed: deepCheck(__assign(__assign({}, state.error[step]), (_44 = {}, _44[id] = __spreadArrays(mutableError), _44))), formData: __assign(__assign({}, state.formData), (_45 = {}, _45[step] = __assign(__assign({}, state.formData[step]), (_46 = {}, _46[id] = __spreadArrays(mutableValue), _46)), _45)), error: __assign(__assign({}, state.error), (_47 = {}, _47[step] = __assign(__assign({}, state.error[step]), (_48 = {}, _48[id] = __spreadArrays(mutableError), _48)), _47)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.ADD_FIELD_LIST: {
            var step = action.step, id = action.id, blankInput = action.blankInput, blankError = action.blankError, blankFocus = action.blankFocus;
            if (step == null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_49 = {}, _49[id] = __spreadArrays(state.formData[id], [__assign({}, blankInput)]), _49)), error: __assign(__assign({}, state.error), (_50 = {}, _50[id] = __spreadArrays(state.error[id], [__assign({}, blankError)]), _50)), showError: __assign(__assign({}, state.showError), (_51 = {}, _51[id] = __spreadArrays(state.showError[id], [__assign({}, blankFocus)]), _51)), focus: __assign(__assign({}, state.focus), (_52 = {}, _52[id] = __spreadArrays(state.focus[id], [__assign({}, blankFocus)]), _52)) });
            }
            else if (step != null) {
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_53 = {}, _53[step] = __assign(__assign({}, state.formData[step]), (_54 = {}, _54[id] = __spreadArrays(state.formData[step][id], [__assign({}, blankInput)]), _54)), _53)), error: __assign(__assign({}, state.error), (_55 = {}, _55[step] = __assign(__assign({}, state.error[step]), (_56 = {}, _56[id] = __spreadArrays(state.error[step][id], [__assign({}, blankError)]), _56)), _55)), showError: __assign(__assign({}, state.showError), (_57 = {}, _57[step] = __assign(__assign({}, state.showError[step]), (_58 = {}, _58[id] = __spreadArrays(state.showError[step][id], [__assign({}, blankFocus)]), _58)), _57)), focus: __assign(__assign({}, state.focus), (_59 = {}, _59[step] = __assign(__assign({}, state.focus[step]), (_60 = {}, _60[id] = __spreadArrays(state.focus[step][id], [__assign({}, blankFocus)]), _60)), _59)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.REMOVE_FIELD_LIST: {
            var step = action.step, id = action.id, index_2 = action.index;
            if (step == null) {
                var mutableData = __spreadArrays(state.formData[id]);
                var updatedDataArr = mutableData.filter(function (_, i) { return i !== index_2; });
                var mutableError = __spreadArrays(state.error[id]);
                var updatedErrorArr = mutableError.filter(function (_, i) { return i !== index_2; });
                var mutableShowError = __spreadArrays(state.showError[id]);
                var updatedShowErrorArr = mutableShowError.filter(function (_, i) { return i !== index_2; });
                var mutableFocus = __spreadArrays(state.focus[id]);
                var updatedFocusArr = mutableFocus.filter(function (_, i) { return i !== index_2; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_61 = {}, _61[id] = __spreadArrays(updatedDataArr), _61)), error: __assign(__assign({}, state.error), (_62 = {}, _62[id] = __spreadArrays(updatedErrorArr), _62)), showError: __assign(__assign({}, state.showError), (_63 = {}, _63[id] = __spreadArrays(updatedShowErrorArr), _63)), focus: __assign(__assign({}, state.focus), (_64 = {}, _64[id] = __spreadArrays(updatedFocusArr), _64)) });
            }
            else if (step != null) {
                var mutable = __spreadArrays(state.formData[step][id]);
                var updatedDataArr = mutable.filter(function (_, i) { return i !== index_2; });
                var mutableError = __spreadArrays(state.error[step][id]);
                var updatedErrorArr = mutableError.filter(function (_, i) { return i !== index_2; });
                var mutableShowError = __spreadArrays(state.showError[step][id]);
                var updatedShowErrorArr = mutableShowError.filter(function (_, i) { return i !== index_2; });
                var mutableFocus = __spreadArrays(state.focus[step][id]);
                var updatedFocusArr = mutableFocus.filter(function (_, i) { return i !== index_2; });
                return __assign(__assign({}, state), { formData: __assign(__assign({}, state.formData), (_65 = {}, _65[step] = __assign(__assign({}, state.formData[step]), (_66 = {}, _66[id] = __spreadArrays(updatedDataArr), _66)), _65)), error: __assign(__assign({}, state.error), (_67 = {}, _67[step] = __assign(__assign({}, state.error[step]), (_68 = {}, _68[id] = __spreadArrays(updatedErrorArr), _68)), _67)), showError: __assign(__assign({}, state.showError), (_69 = {}, _69[step] = __assign(__assign({}, state.showError[step]), (_70 = {}, _70[id] = __spreadArrays(updatedShowErrorArr), _70)), _69)), focus: __assign(__assign({}, state.focus), (_71 = {}, _71[step] = __assign(__assign({}, state.focus[step]), (_72 = {}, _72[id] = __spreadArrays(updatedFocusArr), _72)), _71)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FIELD_LIST_BLUR: {
            var step = action.step, id = action.id, index = action.index, name_2 = action.name, error = action.error;
            if (step == null) {
                var mutableErr = __spreadArrays(state.error[id]);
                mutableErr[index][name_2] = error;
                var mutableShowErr = __spreadArrays(state.showError[id]);
                mutableShowErr[index][name_2] = error;
                var mutableFocus = __spreadArrays(state.focus[id]);
                mutableFocus[index][name_2] = !mutableFocus[index][name_2];
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_73 = {}, _73[id] = __spreadArrays(mutableErr), _73)), showError: __assign(__assign({}, state.showError), (_74 = {}, _74[id] = __spreadArrays(mutableShowErr), _74)), focus: __assign(__assign({}, state.focus), (_75 = {}, _75[id] = __spreadArrays(mutableFocus), _75)) });
            }
            else if (step != null) {
                var mutableErr = __spreadArrays(state.error[step][id]);
                mutableErr[index][name_2] = error;
                var mutableShowErr = __spreadArrays(state.showError[step][id]);
                mutableShowErr[index][name_2] = error;
                var mutableFocus = __spreadArrays(state.focus[step][id]);
                mutableFocus[index][name_2] = !mutableFocus[index][name_2];
                return __assign(__assign({}, state), { error: __assign(__assign({}, state.error), (_76 = {}, _76[step] = __assign(__assign({}, state.error[step]), (_77 = {}, _77[id] = __spreadArrays(mutableErr), _77)), _76)), showError: __assign(__assign({}, state.showError), (_78 = {}, _78[step] = __assign(__assign({}, state.showError[step]), (_79 = {}, _79[id] = __spreadArrays(mutableShowErr), _79)), _78)), focus: __assign(__assign({}, state.focus), (_80 = {}, _80[step] = __assign(__assign({}, state.focus[step]), (_81 = {}, _81[id] = __spreadArrays(mutableFocus), _81)), _80)) });
            }
            else {
                return state;
            }
        }
        case ACTIONS.SET_FIELD_LIST_FOCUS: {
            var step = action.step, id = action.id, index = action.index, name_3 = action.name;
            if (step == null) {
                var mutableFocus = __spreadArrays(state.focus[id]);
                mutableFocus[index][name_3] = !mutableFocus[index][name_3];
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_82 = {}, _82[id] = __spreadArrays(mutableFocus), _82)) });
            }
            else if (step != null) {
                var mutableFocus = __spreadArrays(state.focus[step][id]);
                mutableFocus[index][name_3] = !mutableFocus[index][name_3];
                return __assign(__assign({}, state), { focus: __assign(__assign({}, state.focus), (_83 = {}, _83[step] = __assign(__assign({}, state.focus[step]), (_84 = {}, _84[id] = __spreadArrays(mutableFocus), _84)), _83)) });
            }
            else {
                return state;
            }
        }
        default:
            throw new Error("Context Reducer Received Unrecognized Action!");
    }
}
var Wrapper = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var actions = React.useMemo(function () {
        return {
            setForm: function (_a) {
                var isFlowForm = _a.isFlowForm, flow = _a.flow;
                return dispatch(setForm({ isFlowForm: isFlowForm, flow: flow }));
            },
            setField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(setField({ step: step, id: id, value: value, error: error }));
            },
            setFieldList: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error, showError = _a.showError, focus = _a.focus;
                return dispatch(setFieldList({ step: step, id: id, value: value, error: error, showError: showError, focus: focus }));
            },
            updateField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateInput({ step: step, id: id, value: value, error: error }));
            },
            removeFile: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index;
                return dispatch(removeFile({ step: step, id: id, index: index }));
            },
            updateFileField: function (_a) {
                var step = _a.step, id = _a.id, value = _a.value, error = _a.error;
                return dispatch(updateFileField({ step: step, id: id, value: value, error: error }));
            },
            setBlur: function (_a) {
                var step = _a.step, id = _a.id, showError = _a.showError;
                return dispatch(setBlur({ step: step, id: id, showError: showError }));
            },
            setFocus: function (_a) {
                var step = _a.step, id = _a.id;
                return dispatch(setFocus({ step: step, id: id }));
            },
            progressForm: function () { return dispatch(progressForm()); },
            revertForm: function () { return dispatch(revertForm()); },
            updateFieldListItem: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name, value = _a.value, error = _a.error;
                return dispatch(updateInputListItem({ step: step, id: id, index: index, name: name, value: value, error: error }));
            },
            addFieldList: function (_a) {
                var step = _a.step, id = _a.id, blankInput = _a.blankInput, blankError = _a.blankError, blankFocus = _a.blankFocus;
                return dispatch(addFieldList({ step: step, id: id, blankInput: blankInput, blankError: blankError, blankFocus: blankFocus }));
            },
            removeFieldList: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index;
                return dispatch(removeFieldList({ step: step, id: id, index: index }));
            },
            setFieldListBlur: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name, error = _a.error;
                return dispatch(setFieldListBlur({ step: step, id: id, index: index, name: name, error: error }));
            },
            setFieldListFocus: function (_a) {
                var step = _a.step, id = _a.id, index = _a.index, name = _a.name;
                return dispatch(setFieldListFocus({ step: step, id: id, index: index, name: name }));
            },
        };
    }, []);
    return React.createElement(Context.Provider, { value: __assign(__assign({}, state), actions) }, children);
};

var FFComponent;
(function (FFComponent) {
    FFComponent["FORM"] = "FORM";
    FFComponent["FIELD"] = "FIELD";
    FFComponent["STEP"] = "STEP";
    FFComponent["SHOW_DATA"] = "SHOW_DATA";
    FFComponent["SUBMIT"] = "SUBMIT";
    FFComponent["TEXT"] = "TEXT";
    FFComponent["NUMBER"] = "NUMBER";
    FFComponent["COLOR"] = "COLOR";
    FFComponent["EMAIL"] = "EMAIL";
    FFComponent["PASSWORD"] = "PASSWORD";
    FFComponent["TEL"] = "TEL";
    FFComponent["TEXTAREA"] = "TEXTAREA";
    FFComponent["URL"] = "URL";
    FFComponent["SELECT"] = "SELECT";
    FFComponent["DRAG_AND_DROP"] = "DRAG_AND_DROP";
    FFComponent["IMG_PREVIEW"] = "IMG_PREVIEW";
    FFComponent["CHECKBOX"] = "CHECKBOX";
    FFComponent["FIELD_LIST"] = "FIELD_LIST";
    FFComponent["ITEM"] = "ITEM";
    FFComponent["ROW"] = "ROW";
    FFComponent["ITEM_INPUT"] = "ITEM_INPUT";
    FFComponent["PROGRESS"] = "PROGRESS";
    FFComponent["DOUGHNUT"] = "DOUGHNUT";
    FFComponent["DEFAULT_SUBMIT"] = "DEFAULT_SUBMIT";
    FFComponent["DEFAULT_BACK_BUTTON"] = "DEFAULT_BACK_BUTTON";
    FFComponent["DEFAULT_NEXT_BUTTON"] = "DEFAULT_NEXT_BUTTON";
    FFComponent["DEFAULT_BTN"] = "DEFAULT_BTN";
    FFComponent["LIST_BUTTON"] = "LIST_BUTTON";
})(FFComponent || (FFComponent = {}));

var ButtonStyles = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  font-size: ", ";\n  border-radius: ", ";\n  padding: 0.5em 1em;\n  cursor: pointer;\n"], ["\n  outline: none;\n  font-size: ", ";\n  border-radius: ", ";\n  padding: 0.5em 1em;\n  cursor: pointer;\n"])), function (props) { return props.theme.font.small; }, function (props) { return props.theme.border.radius; });
var templateObject_1;

var DefaultSubmitWrapper = styled(ButtonStyles)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  border: ", ";\n  color: ", ";\n  background-color: ", ";\n"], ["\n  border: ", ";\n  color: ", ";\n  background-color: ", ";\n"])), function (props) { return (props.disabled ? "none" : props.theme.border.focus); }, function (props) { return props.theme.colors.white; }, function (props) { return (props.disabled ? props.theme.colors.grey : props.theme.colors.blue); });
var DefaultSubmit = function (_a) {
    var disabled = _a.disabled;
    return (React.createElement(DefaultSubmitWrapper, { type: "submit", className: "flow-form-submit-btn", disabled: disabled }, "Submit"));
};
DefaultSubmit.defaultProps = {
    ffComp: FFComponent.DEFAULT_SUBMIT,
};
var templateObject_1$1;

var DefaultBack = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement(ButtonStyles, { type: "button", className: "flow-form-back-btn", onClick: onClick }, "Back"));
};
DefaultBack.defaultProps = {
    ffComp: FFComponent.DEFAULT_BACK_BUTTON,
};

var DefaultNextWrapper = styled(ButtonStyles)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border: ", ";\n  background-color: ", ";\n  color: ", ";\n"], ["\n  border: ", ";\n  background-color: ", ";\n  color: ", ";\n"])), function (props) { return (props.disabled ? "none" : props.theme.border.focus); }, function (props) { return (props.disabled ? props.theme.colors.grey : props.theme.colors.blue); }, function (props) { return props.theme.colors.white; });
var DefaultNext = function (_a) {
    var onClick = _a.onClick, disabled = _a.disabled;
    return (React.createElement(DefaultNextWrapper, { type: "button", className: "flow-form-next-btn", onClick: onClick, disabled: disabled }, "Next"));
};
DefaultNext.defaultProps = {
    ffComp: FFComponent.DEFAULT_NEXT_BUTTON,
};
var templateObject_1$2;

var ListButtonWrapper = styled(ButtonStyles)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border: none;\n  padding: 0;\n  width: 3.5em;\n  height: 1.8rem;\n  text-align: center;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border: none;\n  padding: 0;\n  width: 3.5em;\n  height: 1.8rem;\n  text-align: center;\n"])), function (props) { return (props.remove ? props.theme.colors.red : props.theme.colors.green); }, function (props) { return props.theme.colors.white; });
var ListButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, remove = _a.remove;
    return (React.createElement(ListButtonWrapper, { type: "button", className: "flow-form-list-btn", onClick: onClick, remove: remove }, children));
};
ListButton.defaultProps = {
    ffComp: FFComponent.LIST_BUTTON,
};
var templateObject_1$3;

var ProgressWrapper = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: ", ";\n"])), function (props) { return props.theme.border.default; });
var StepWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  .flow-form-label-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding: 0 0.3em 0.3em 0.3em;\n  }\n  .flow-form-label {\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  .flow-form-label-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding: 0 0.3em 0.3em 0.3em;\n  }\n  .flow-form-label {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), function (props) { return (props.isActive ? props.theme.colors.blue : props.theme.colors.grey); }, function (props) { return props.theme.font.large; });
var Doughnut = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: 80%;\n  height: 0.9375rem;\n  width: 1.125rem;\n  margin-right: 0.0625rem;\n  padding-top: 0.1875rem;\n  font-size: ", ";\n  text-align: center;\n  color: ", ";\n"], ["\n  background: ",
    ";\n  border-radius: 80%;\n  height: 0.9375rem;\n  width: 1.125rem;\n  margin-right: 0.0625rem;\n  padding-top: 0.1875rem;\n  font-size: ", ";\n  text-align: center;\n  color: ", ";\n"])), function (props) {
    return props.isActive
        ? "radial-gradient(circle, transparent 30%, " + props.theme.colors.blue + " 40%)"
        : "radial-gradient(circle, transparent 30%, " + props.theme.colors.grey + " 40%)";
}, function (props) { return props.theme.font.large; }, function (props) { return props.theme.colors.white; });
var templateObject_1$4, templateObject_2, templateObject_3;

var Progress = function (_a) {
    var steps = _a.steps, currentStep = _a.currentStep, doughNut = _a.doughNut;
    var isActive = function (step) { return step.index === (currentStep === null || currentStep === void 0 ? void 0 : currentStep.index); };
    return (React.createElement(ProgressWrapper, { className: "flow-form-progress" }, steps === null || steps === void 0 ? void 0 : steps.map(function (step) { return (React.createElement(StepWrapper, { key: step.id, isActive: isActive(step) },
        React.createElement("div", { className: "flow-form-label-container" },
            doughNut && React.createElement(Doughnut, { isActive: isActive(step) }),
            React.createElement("span", { className: "flow-form-label" }, step.label)))); })));
};
Progress.defaultProps = {
    ffComp: FFComponent.PROGRESS,
};

var Global = createGlobalStyle(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  .flow-form-fieldset {\n    border: none;\n  }\n  .flow-form-button-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n  }\n"], ["\n  .flow-form-fieldset {\n    border: none;\n  }\n  .flow-form-button-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n  }\n"])));
var templateObject_1$5;

var theme2 = {
    colors: {
        blue: '#00A0DF',
        grey: '#E6E6E6',
        white: '#ffffff',
        green: '#4BBF6B',
        red: '#FF0000',
    },
    font: {
        small: '1em',
        medium: '1.2em',
        large: '1.5em',
    },
    text: {
        indent: '0.2em',
    },
    border: {
        default: '0.0625em solid #BDBDBD',
        focus: '0.0625em solid #00A0DF',
        error: '0.0625em solid #FF0000',
        radius: '0.2em',
    },
    inputs: {
        radio: '0.75em',
        checkbox: '1em',
    },
};

// TODO clean up with toArray(children).reduce
function handleChildArr(children) {
    var arr = [];
    React.Children.map(children, function (child, index) {
        if (React.isValidElement(child)) {
            if (child.props.ffComp === FFComponent.STEP) {
                arr.push({
                    id: toCamelCase(child.props.name ? child.props.name : child.props.label),
                    label: child.props.label,
                    index: index,
                });
            }
        }
    });
    return arr;
}
function handleChildObj(children) {
    if (React.isValidElement(children)) {
        if (children.props.ffComp === FFComponent.STEP) {
            return [
                {
                    id: toCamelCase(children.props.name ? children.props.name : children.props.label),
                    label: children.props.label,
                    index: 0,
                },
            ];
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
}
var Form = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, showData = _a.showData, doughNut = _a.doughNut;
    var _b, _c;
    var _d = React.useContext(Context), isFlowForm = _d.isFlowForm, canProceed = _d.canProceed, flow = _d.flow, formData = _d.formData, setForm = _d.setForm, progressForm = _d.progressForm, revertForm = _d.revertForm, error = _d.error, showError = _d.showError, focus = _d.focus;
    React.useEffect(function () {
        var steps = Array.isArray(children) ? handleChildArr(children) : handleChildObj(children);
        setForm({
            isFlowForm: (steps === null || steps === void 0 ? void 0 : steps.length) !== 0,
            flow: {
                key: 0,
                end: steps.length > 0 ? steps.length - 1 : 0,
                steps: steps,
                currentStep: steps.length !== 0 ? steps[0] : null,
            },
        });
    }, []);
    showData && console.log({ isFlowForm: isFlowForm, canProceed: canProceed, flow: flow, formData: formData, error: error, showError: showError, focus: focus });
    return (React.createElement("form", { onSubmit: function (e) {
            e.preventDefault();
            onSubmit(formData);
        }, className: "flow-form " + (className !== null && className !== void 0 ? className : ''), style: style },
        isFlowForm && React.createElement(Progress, { steps: flow.steps, currentStep: flow.currentStep, doughNut: doughNut }),
        React.createElement("fieldset", { className: "flow-form-fieldset" },
            React.createElement(React.Fragment, null, isFlowForm ? children === null || children === void 0 ? void 0 : children[flow.key] : children),
            isFlowForm ? (React.createElement("div", { className: "flow-form-button-container" },
                flow.currentStep != null && ((_b = flow.currentStep) === null || _b === void 0 ? void 0 : _b.index) > 0 && React.createElement(DefaultBack, { onClick: function () { return revertForm(); } }),
                flow.end !== ((_c = flow.currentStep) === null || _c === void 0 ? void 0 : _c.index) ? (React.createElement(DefaultNext, { disabled: !canProceed, onClick: function () { return progressForm(); } })) : (React.createElement(DefaultSubmit, { disabled: !canProceed })))) : (React.createElement(DefaultSubmit, { disabled: !canProceed })))));
};
Form.defaultProps = {
    ffComp: FFComponent.FORM,
};
var FlowForm = function (_a) {
    var children = _a.children, onSubmit = _a.onSubmit, className = _a.className, style = _a.style, showData = _a.showData, doughNut = _a.doughNut;
    return (React.createElement(ThemeProvider, { theme: theme2 },
        React.createElement(Wrapper, null,
            React.createElement(Global, null),
            React.createElement(Form, { onSubmit: onSubmit, className: className, style: style, showData: showData, doughNut: doughNut }, children))));
};

var Step = function (_a) {
    var children = _a.children, name = _a.name, label = _a.label, className = _a.className, style = _a.style;
    if (!label) {
        throw new Error("The label prop is mandatory on Step Component.");
    }
    return (React.createElement("div", { "data-step-id": toCamelCase(name ? name : label), className: "flow-form-step " + (className !== null && className !== void 0 ? className : ''), style: style }, React.Children.map(children, function (child, index) {
        if (React.isValidElement(child)) {
            if (child.props.ffComp === FFComponent.FIELD || child.props.ffComp === FFComponent.FIELD_LIST) {
                return React.cloneElement(child, {
                    index: index,
                    step: toCamelCase(name ? name : label),
                });
            }
            else if (child.type === 'div') {
                return (React.createElement("div", { style: child.props.style }, React.Children.map(child.props.children, function (grandChild, i) {
                    if (React.isValidElement(grandChild)) {
                        if (grandChild.props.ffComp === FFComponent.FIELD) {
                            return React.cloneElement(grandChild, {
                                index: i,
                                step: toCamelCase(name ? name : label),
                            });
                        }
                        else {
                            return grandChild;
                        }
                    }
                    else {
                        return grandChild;
                    }
                })));
            }
            else {
                return child;
            }
        }
        else {
            return child;
        }
    })));
};
Step.defaultProps = {
    ffComp: FFComponent.STEP,
};

var imageTypes = ['image/jpeg', 'image/png', 'image/gif'];
// TODO remove id from any function args
function useFormData(_a) {
    var step = _a.step, id = _a.id, value = _a.value, required = _a.required, validation = _a.validation;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var _p = React.useContext(Context), setField = _p.setField, formData = _p.formData, error = _p.error, updateField = _p.updateField, removeFile = _p.removeFile, updateFileField = _p.updateFileField, setBlur = _p.setBlur, setFocus = _p.setFocus, showError = _p.showError, focus = _p.focus, flow = _p.flow;
    React.useEffect(function () {
        setField({ step: step, id: id, value: value, error: required || validation ? true : false });
    }, [step, id, flow.currentStep, flow.key]);
    function validate(e) {
        if (required || validation) {
            return validation ? validation(e) : !e.target.value;
        }
        return false;
    }
    function validateFile(e) {
        if (required || validation) {
            return validation ? validation(e) : !e.dataTransfer.files;
        }
        return false;
    }
    var onChange = function (e) {
        e.persist();
        updateField({
            step: step,
            id: e.target.name,
            value: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
            error: validate(e),
        });
    };
    var onFileChange = function (e) {
        var files = e.target.files;
        var val = files ? Array.from(files) : [];
        updateFileField({
            step: step,
            id: id,
            value: val,
            error: validate(e),
        });
    };
    var onFileDrop = function (e, id) {
        updateFileField({
            step: step,
            id: id,
            value: Array.from(e.dataTransfer.files),
            error: validateFile(e),
        });
    };
    var onFileRemove = function (index) {
        removeFile({
            step: step,
            id: id,
            index: index,
        });
    };
    var onImgChange = function (e) {
        var _a;
        var val = Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : []);
        if (imageTypes.includes(val[0].type)) {
            updateField({
                step: step,
                id: e.target.name,
                value: val[0],
                error: validate(e),
            });
        }
    };
    var onImgDrop = function (e) {
        var files = Array.from(e.dataTransfer.files);
        if (imageTypes.includes(files[0].type)) {
            updateField({
                step: step,
                id: id,
                value: files[0],
                error: validateFile(e),
            });
        }
        else {
            updateField({
                step: step,
                id: id,
                value: '',
                error: validateFile(e),
            });
        }
    };
    var onBlur = function (e) {
        e.preventDefault();
        setBlur({ step: step, id: id, showError: validate(e) });
    };
    var onFocus = function (e) {
        e.preventDefault();
        setFocus({ step: step, id: id });
    };
    // TODO clean this mess up
    return {
        value: isObjectEmpty(formData) ? '' : step != null ? (_c = (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id]) !== null && _c !== void 0 ? _c : '' : (_d = formData === null || formData === void 0 ? void 0 : formData[id]) !== null && _d !== void 0 ? _d : '',
        error: isObjectEmpty(error) ? false : step != null ? (_f = (_e = error === null || error === void 0 ? void 0 : error[step]) === null || _e === void 0 ? void 0 : _e[id]) !== null && _f !== void 0 ? _f : false : (_g = error === null || error === void 0 ? void 0 : error[id]) !== null && _g !== void 0 ? _g : false,
        showError: isObjectEmpty(showError)
            ? false
            : step != null
                ? (_j = (_h = showError === null || showError === void 0 ? void 0 : showError[step]) === null || _h === void 0 ? void 0 : _h[id]) !== null && _j !== void 0 ? _j : false : (_k = showError === null || showError === void 0 ? void 0 : showError[id]) !== null && _k !== void 0 ? _k : false,
        focused: isObjectEmpty(focus) ? false : step != null ? (_m = (_l = focus === null || focus === void 0 ? void 0 : focus[step]) === null || _l === void 0 ? void 0 : _l[id]) !== null && _m !== void 0 ? _m : false : (_o = focus === null || focus === void 0 ? void 0 : focus[id]) !== null && _o !== void 0 ? _o : false,
        onChange: onChange,
        onFileChange: onFileChange,
        onFileDrop: onFileDrop,
        onFileRemove: onFileRemove,
        onBlur: onBlur,
        onFocus: onFocus,
        onImgDrop: onImgDrop,
        onImgChange: onImgChange,
    };
}

var DisplayErrorWrapper = styled.small(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.colors.red; });
var DisplayError = function (_a) {
    var id = _a.id, className = _a.className, errMsg = _a.errMsg;
    return (React.createElement(DisplayErrorWrapper, { id: id + "-error", "data-error-id": id + "-error", className: "flow-form-error " + className }, typeof errMsg === 'string' ? errMsg : "Please provide a valid value!"));
};
var templateObject_1$6;

function border$1(props) {
    if (props.focused && props.showError)
        return props.theme.border.error;
    if (props.focused)
        return props.theme.border.focus;
    if (props.showError)
        return props.theme.border.error;
    return props.theme.border.default;
}
var InputWrapper = styled.input(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n"], ["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n"])), function (props) { return props.theme.font.medium; }, function (props) { return props.theme.text.indent; }, function (props) { return props.theme.border.radius; }, function (props) { return props.theme.colors.white; }, function (props) { return border$1(props); });
var ColorInputWrapper = styled(InputWrapper)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var TextareaWrapper = styled.textarea(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n"], ["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n"])), function (props) { return props.theme.font.medium; }, function (props) { return props.theme.text.indent; }, function (props) { return props.theme.border.radius; }, function (props) { return props.theme.colors.white; }, function (props) { return border$1(props); });
var SelectWrapper = styled.select(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n  cursor: pointer;\n"], ["\n  display: block;\n  width: 100%;\n  font-size: ", ";\n  text-indent: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  outline: none;\n  border: ", ";\n  cursor: pointer;\n"])), function (props) { return props.theme.font.medium; }, function (props) { return props.theme.text.indent; }, function (props) { return props.theme.border.radius; }, function (props) { return props.theme.colors.white; }, function (props) { return border$1(props); });
var ButtonInputWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"])));
var ButtonInputLabel = styled.label(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ", ";\n  text-transform: capitalize;\n  margin-right: ", ";\n  input {\n    width: 1rem;\n    font-size: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: ", ";\n  text-transform: capitalize;\n  margin-right: ", ";\n  input {\n    width: 1rem;\n    font-size: ", ";\n  }\n"])), function (props) { return props.theme.font.small; }, function (props) { return (props.index === props.optionsLength ? "0" : "0.9375em"); }, function (props) { return (props.type === "radio" ? props.theme.inputs.radio : props.theme.inputs.checkbox); });
var DragAndDropWrapper = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 5rem;\n  width: 100%;\n  border: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  .flow-form-file-call-to-action {\n    font-size: ", ";\n  }\n  .flow-form-img-call-to-action {\n    font-size: ", ";\n    text-align: center;\n    width: 61%;\n  }\n  .flow-form-img-preview-call-to-action {\n    font-size: ", ";\n    text-align: center;\n    width: 20%;\n    position: absolute;\n    color: ", ";\n  }\n  img {\n    height: 100%;\n    width: 100%;\n  }\n  input {\n    display: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 5rem;\n  width: 100%;\n  border: ", ";\n  border-radius: ", ";\n  cursor: pointer;\n  .flow-form-file-call-to-action {\n    font-size: ", ";\n  }\n  .flow-form-img-call-to-action {\n    font-size: ", ";\n    text-align: center;\n    width: 61%;\n  }\n  .flow-form-img-preview-call-to-action {\n    font-size: ", ";\n    text-align: center;\n    width: 20%;\n    position: absolute;\n    color: ", ";\n  }\n  img {\n    height: 100%;\n    width: 100%;\n  }\n  input {\n    display: none;\n  }\n"])), function (props) { return border$1(props); }, function (props) { return props.theme.border.radius; }, function (props) { return props.theme.font.small; }, function (props) { return props.theme.font.small; }, function (props) { return props.theme.font.small; }, function (props) { return props.theme.colors.white; });
var ListWrapper = styled.ul(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  .list-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 0.3rem;\n    font-size: ", ";\n  }\n"], ["\n  list-style: none;\n  padding: 0;\n  .list-item {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 0.3rem;\n    font-size: ", ";\n  }\n"])), function (props) { return props.theme.font.small; });
var templateObject_1$7, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var Text = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className, placeholder: placeholder, autoComplete: autoComplete, focused: focused, showError: showError, style: style }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Text.defaultProps = {
    ffComp: FFComponent.TEXT,
};

var Number = function (_a) {
    var step = _a.step, id = _a.id, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-field-number", "data-input-id": id + "-field-number", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-number " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Number.defaultProps = {
    ffComp: FFComponent.NUMBER,
};

var Email = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'email' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-field-email", "data-input-id": id + "-field-email", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-email " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Email.defaultProps = {
    ffComp: FFComponent.EMAIL,
};

var Password = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'password' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-field-password", "data-input-id": id + "-field-password", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-password " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Password.defaultProps = {
    ffComp: FFComponent.PASSWORD,
};

var Tel = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-field-tel", "data-input-id": id + "-field-tel", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-tel " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Tel.defaultProps = {
    ffComp: FFComponent.TEL,
};

var Url = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _d = _a.pattern, pattern = _d === void 0 ? 'https://.*' : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(InputWrapper, { id: id + "-filed-url", "data-input-id": id + "-field-url", name: id, type: type, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-url " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, pattern: pattern, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Url.defaultProps = {
    ffComp: FFComponent.URL,
};

var Color = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.type, type = _b === void 0 ? 'color' : _b, _c = _a.required, required = _c === void 0 ? false : _c, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, onBlur = _d.onBlur, onFocus = _d.onFocus, showError = _d.showError, focused = _d.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(ColorInputWrapper, { id: id + "-field-color", "data-input-id": id + "-field-color", name: id, type: type, value: value || '#519839', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-color " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Color.defaultProps = {
    ffComp: FFComponent.COLOR,
};

var TextArea = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _c = _a.rows, rows = _c === void 0 ? 4 : _c, _d = _a.cols, cols = _d === void 0 ? 20 : _d;
    var _e = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _e.value, onChange = _e.onChange, onBlur = _e.onBlur, onFocus = _e.onFocus, showError = _e.showError, focused = _e.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextareaWrapper, { id: id + "-field-textarea", "data-input-id": id + "-field-textarea", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-textarea " + className + "-field", placeholder: placeholder, autoComplete: autoComplete, style: style, rows: rows, cols: cols, focused: focused, showError: showError }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
TextArea.defaultProps = {
    ffComp: FFComponent.TEXTAREA,
};

var Select = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, options = _a.options;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onChange = _c.onChange, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    return (React.createElement(React.Fragment, null,
        React.createElement(SelectWrapper, { id: id + "-field-text", "data-input-id": id + "-field-text", name: id, value: value || '', required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-text " + className, placeholder: placeholder, autoComplete: autoComplete, style: style, focused: focused, showError: showError },
            React.createElement("option", { disabled: true, defaultValue: "" }),
            options &&
                options.map(function (option) { return (React.createElement("option", { key: option.name, value: option.value }, option.name)); })),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Select.defaultProps = {
    ffComp: FFComponent.SELECT,
};

var DragAndDrop = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, className = _a.className, label = _a.label, errMsg = _a.errMsg, style = _a.style;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onFileChange = _c.onFileChange, onFileDrop = _c.onFileDrop, onFileRemove = _c.onFileRemove, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    React.useEffect(function () {
        window.addEventListener('dragover', function (event) {
            handleDefaults(event);
        });
        window.addEventListener('drop', function (event) {
            handleDefaults(event);
        });
        return function () {
            window.removeEventListener('dragover', handleDefaults);
            window.removeEventListener('drop', handleDefaults);
        };
    }, []);
    var fileRef = React.useRef(null);
    var onDrop = function (e) {
        handleDefaults(e);
        onFileDrop(e, id);
    };
    var handleFileBtn = function () {
        if (fileRef.current == null)
            return;
        fileRef.current.click();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(DragAndDropWrapper, { className: "flow-form-file-upload " + className, style: style, focused: focused, showError: showError, onDrag: handleDefaults, onDragStart: handleDefaults, onDragEnd: handleDefaults, onDragOver: handleDefaults, onDragEnter: handleDefaults, onDragLeave: handleDefaults, onDrop: onDrop, onClick: handleFileBtn },
            React.createElement("span", { className: "flow-form-file-call-to-action" }, placeholder ? placeholder : "Drag and Drop or Click to upload"),
            React.createElement("input", { ref: fileRef, multiple: true, id: id + "-field-file", "data-input-id": id + "-field-file", name: id, type: "file", required: required, onChange: onFileChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-drag-and-drop", autoComplete: autoComplete })),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg }),
        value.length > 0 && (React.createElement(ListWrapper, null, value.map(function (file, index) { return (React.createElement("li", { key: index },
            React.createElement("span", null, file.name),
            React.createElement(ListButton, { onClick: function () { return onFileRemove(index); }, remove: true }, "\u00D7"))); })))));
};
DragAndDrop.defaultProps = {
    ffComp: FFComponent.DRAG_AND_DROP,
};

var ImgPreview = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, className = _a.className, label = _a.label, errMsg = _a.errMsg, style = _a.style;
    var _c = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _c.value, onImgChange = _c.onImgChange, onImgDrop = _c.onImgDrop, onBlur = _c.onBlur, onFocus = _c.onFocus, showError = _c.showError, focused = _c.focused;
    React.useEffect(function () {
        window.addEventListener('dragover', function (event) {
            handleDefaults(event);
        });
        window.addEventListener('drop', function (event) {
            handleDefaults(event);
        });
        return function () {
            window.removeEventListener('dragover', handleDefaults);
            window.removeEventListener('drop', handleDefaults);
        };
    }, []);
    var fileRef = React.useRef(null);
    var onDrop = function (e) {
        handleDefaults(e);
        onImgDrop(e);
    };
    var handleFileBtn = function () {
        if (fileRef.current == null)
            return;
        fileRef.current.click();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(DragAndDropWrapper, { className: "flow-form-img-preview " + className, style: style, focused: focused, showError: showError, onDrag: handleDefaults, onDragStart: handleDefaults, onDragEnd: handleDefaults, onDragOver: handleDefaults, onDragEnter: handleDefaults, onDragLeave: handleDefaults, onDrop: onDrop, onClick: handleFileBtn },
            typeof value === 'string' ? (React.createElement("span", { className: "flow-form-img-call-to-action" }, placeholder ? placeholder : "Drag and Drop or Click to upload")) : (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "flow-form-img-preview-call-to-action" }, placeholder ? placeholder : "Drag and Drop or Click to upload"),
                React.createElement("img", { className: "flow-form-img-preview", src: URL.createObjectURL(value), alt: value.name }))),
            React.createElement("input", { ref: fileRef, multiple: true, id: id + "-field-file", "data-input-id": id + "-field-file", name: id, type: "file", required: required, onChange: onImgChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-drag-and-drop ", autoComplete: autoComplete })),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
ImgPreview.defaultProps = {
    ffComp: FFComponent.IMG_PREVIEW,
};

var Checkbox = function (_a) {
    var step = _a.step, id = _a.id, _b = _a.required, required = _b === void 0 ? false : _b, validation = _a.validation, placeholder = _a.placeholder, autoComplete = _a.autoComplete, style = _a.style, className = _a.className, label = _a.label, errMsg = _a.errMsg, _c = _a.options, options = _c === void 0 ? [] : _c, type = _a.type;
    var _d = useFormData({
        step: step,
        id: id,
        value: '',
        required: required,
        validation: validation,
    }), value = _d.value, onChange = _d.onChange, focused = _d.focused, showError = _d.showError;
    return (React.createElement(ButtonInputWrapper, { style: style },
        options.map(function (option, index) { return (React.createElement(ButtonInputLabel, { key: index, htmlFor: option, className: "flow-form-legend " + id + "-legend " + className, index: index, optionsLength: options.length - 1, type: type, focused: focused, showError: showError },
            React.createElement("input", { id: option, "data-input-id": option + "-field-checkbox", name: id, type: type, value: option, required: required, onChange: onChange, className: "flow-form-field flow-form-" + type + "-" + id + " " + className, placeholder: placeholder, autoComplete: autoComplete, checked: value === option }),
            option)); }),
        showError && React.createElement(DisplayError, { id: id, className: className, label: label, errMsg: errMsg })));
};
Checkbox.defaultProps = {
    ffComp: FFComponent.CHECKBOX,
};

var FieldWrapper = styled.label(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: block;\n  text-transform: capitalize;\n  min-height: ", ";\n  legend {\n    font-size: ", ";\n    padding-bottom: 0.2rem;\n  }\n  .required {\n    color: ", ";\n  }\n"], ["\n  display: block;\n  text-transform: capitalize;\n  min-height: ", ";\n  legend {\n    font-size: ", ";\n    padding-bottom: 0.2rem;\n  }\n  .required {\n    color: ", ";\n  }\n"])), function (props) { return (props.type === 'checkbox' || props.type === 'radio' ? "4rem" : "4.5rem"); }, function (props) { return props.theme.font.medium; }, function (props) { return props.theme.colors.red; });
var templateObject_1$8;

var Field = function (_a) {
    var _b = _a.step, step = _b === void 0 ? null : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, name = _a.name, type = _a.type, children = _a.children, style = _a.style, _d = _a.required, required = _d === void 0 ? false : _d, validation = _a.validation, _e = _a.autoComplete, autoComplete = _e === void 0 ? 'off' : _e, placeholder = _a.placeholder, errMsg = _a.errMsg, options = _a.options, inputs = _a.inputs;
    if (!name && !children) {
        throw new Error("Please provide a label(<Field>Label</Field>) or name prop(<Field name=\"label\" />).");
    }
    var id = name ? toCamelCase(name) : toCamelCase(children !== null && children !== void 0 ? children : '');
    var className = name ? toKebabCase(name) : toKebabCase(children !== null && children !== void 0 ? children : '');
    var defaultProps = {
        id: id,
        step: step,
        index: index,
        type: type,
        required: required,
        validation: validation,
        autoComplete: autoComplete,
        placeholder: placeholder,
        className: className,
        label: children !== null && children !== void 0 ? children : name,
        style: style,
        errMsg: errMsg,
        options: options,
        inputs: inputs,
    };
    return (React.createElement(FieldWrapper, { id: id + "-label", "data-field-id": id + "-label", htmlFor: id, className: "flow-form-label " + className, type: type },
        React.createElement("legend", { className: "flow-form-legend " + className, "data-legend-id": id + "-legend" },
            children ? children : name !== null && name !== void 0 ? name : '',
            required || validation ? React.createElement("span", { className: "required" }, "*") : null),
        (function () {
            switch (type) {
                case 'text':
                    return React.createElement(Text, __assign({}, defaultProps));
                case 'number':
                    return React.createElement(Number, __assign({}, defaultProps));
                case 'email':
                    return React.createElement(Email, __assign({}, defaultProps));
                case 'password':
                    return React.createElement(Password, __assign({}, defaultProps));
                case 'tel':
                    return React.createElement(Tel, __assign({}, defaultProps));
                case 'url':
                    return React.createElement(Url, __assign({}, defaultProps));
                case 'color':
                    return React.createElement(Color, __assign({}, defaultProps));
                case 'textarea':
                    return React.createElement(TextArea, __assign({}, defaultProps));
                case 'select':
                    return React.createElement(Select, __assign({}, defaultProps));
                case 'dragAndDrop':
                    return React.createElement(DragAndDrop, __assign({}, defaultProps));
                case 'imgPreview':
                    return React.createElement(ImgPreview, __assign({}, defaultProps));
                case 'checkbox':
                    return React.createElement(Checkbox, __assign({}, defaultProps));
                case 'radio':
                    return React.createElement(Checkbox, __assign({}, defaultProps));
                default:
                    return React.createElement(Text, __assign({}, defaultProps));
            }
        })()));
};
Field.defaultProps = {
    ffComp: FFComponent.FIELD,
    step: null,
    index: 0,
};

var Item = React.memo(function () { return React.createElement(React.Fragment, null); });
Item.defaultProps = {
    ffComp: FFComponent.ITEM,
};

var Row = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("div", { className: "flow-form-field-row " + className, style: { display: 'flex', flexDirection: 'row', minHeight: '2rem' } }, children));
};
Row.defaultProps = {
    ffComp: FFComponent.ROW,
};

var ItemInput = function (_a) {
    var objKey = _a.objKey, fieldIndex = _a.fieldIndex, type = _a.type, value = _a.value, required = _a.required, _b = _a.autoComplete, autoComplete = _b === void 0 ? 'off' : _b, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, style = _a.style;
    return (React.createElement("input", { "data-field-id": objKey + "-field-field-list-item-" + fieldIndex, id: objKey + "-field-list-field-" + type, name: objKey, type: type, value: value, required: required, onChange: onChange, onBlur: onBlur, onFocus: onFocus, className: "flow-form-field flow-form-field-list-item " + objKey + "-field-list-item", placeholder: objKey, autoComplete: autoComplete, style: style }));
};
ItemInput.defaultProps = {
    ffComp: FFComponent.ITEM_INPUT,
};

function handleBlankArr(children) {
    return React.Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b;
        return React.isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = '', _a)) : acc;
    }, {});
}
function handleBlankObj(children) {
    var _a;
    var _b;
    if (React.isValidElement(children)) {
        return _a = {}, _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = '', _a;
    }
    else {
        return {};
    }
}
function handleInputPropsArr(children) {
    return React.Children.toArray(children).reduce(function (acc, child) { return (React.isValidElement(child) ? __spreadArrays(acc, [__assign({}, child.props)]) : acc); }, []);
}
function handleInputPropsObj(children) {
    if (React.isValidElement(children)) {
        return [__assign({}, children.props)];
    }
    return [];
}
function handleErrorArr(children) {
    return React.Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b, _c, _d, _e;
        return React.isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = ((_c = child.props) === null || _c === void 0 ? void 0 : _c.required) || ((_d = child.props) === null || _d === void 0 ? void 0 : _d.validation) ? true : (_e = false) !== null && _e !== void 0 ? _e : false, _a)) : acc;
    }, {});
}
function handleErrorObj(children) {
    var _a;
    var _b, _c, _d, _e;
    if (React.isValidElement(children)) {
        return _a = {},
            _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = ((_c = children.props) === null || _c === void 0 ? void 0 : _c.required) || ((_d = children.props) === null || _d === void 0 ? void 0 : _d.validation) ? true : (_e = false) !== null && _e !== void 0 ? _e : false,
            _a;
    }
    else {
        return {};
    }
}
function handleFocusArr(children) {
    return React.Children.toArray(children).reduce(function (acc, child) {
        var _a;
        var _b;
        return React.isValidElement(child)
            ? __assign(__assign({}, acc), (_a = {}, _a[toCamelCase(child.props.name ? child.props.name : (_b = child.props.children) !== null && _b !== void 0 ? _b : '')] = false, _a)) : acc;
    }, {});
}
function handleFocusObj(children) {
    var _a;
    var _b;
    if (React.isValidElement(children)) {
        return _a = {},
            _a[toCamelCase(children.props.name ? children.props.name : (_b = children.props.children) !== null && _b !== void 0 ? _b : '')] = false,
            _a;
    }
    else {
        return {};
    }
}
function useFieldListData(_a) {
    var name = _a.name, label = _a.label, step = _a.step, children = _a.children;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var _p = React.useContext(Context), flow = _p.flow, setFieldList = _p.setFieldList, updateFieldListItem = _p.updateFieldListItem, addFieldList = _p.addFieldList, removeFieldList = _p.removeFieldList, setFieldListBlur = _p.setFieldListBlur, setFieldListFocus = _p.setFieldListFocus, formData = _p.formData, error = _p.error, showError = _p.showError, focus = _p.focus;
    var id = React.useMemo(function () { return toCamelCase(name ? name : label); }, [name, label]);
    var blankInput = React.useMemo(function () { return (Array.isArray(children) ? handleBlankArr(children) : handleBlankObj(children)); }, [children]);
    var inputProps = React.useMemo(function () { return (Array.isArray(children) ? handleInputPropsArr(children) : handleInputPropsObj(children)); }, [children]);
    var constructErrors = React.useMemo(function () { return (Array.isArray(children) ? handleErrorArr(children) : handleErrorObj(children)); }, [children]);
    var constructFocus = React.useMemo(function () { return (Array.isArray(children) ? handleFocusArr(children) : handleFocusObj(children)); }, [children]);
    function validate(e, index) {
        if (inputProps[index].required || inputProps[index].validation) {
            return inputProps[index].validation ? inputProps[index].validation(e) : !e.target.value;
        }
        return false;
    }
    React.useEffect(function () {
        setFieldList({
            step: step,
            id: id,
            value: [__assign({}, blankInput)],
            error: [__assign({}, constructErrors)],
            showError: [__assign({}, constructFocus)],
            focus: [__assign({}, constructFocus)],
        });
    }, [step, label, flow.currentStep, flow.key]);
    var onChange = function (row, input) { return function (e) {
        e.preventDefault();
        var _a = e.target, type = _a.type, name = _a.name, value = _a.value;
        updateFieldListItem({
            step: step,
            id: id,
            index: row,
            name: name,
            value: type === 'number' ? parseFloat(value) : value,
            error: validate(e, input),
        });
    }; };
    var onBlur = function (row, input) { return function (e) {
        var name = e.target.name;
        setFieldListBlur({
            step: step,
            id: id,
            index: row,
            name: name,
            error: validate(e, input),
        });
    }; };
    var onFocus = function (index) { return function (e) {
        var name = e.target.name;
        setFieldListFocus({
            step: step,
            id: id,
            index: index,
            name: name,
        });
    }; };
    return {
        id: id,
        inputProps: inputProps,
        onChange: onChange,
        onBlur: onBlur,
        onFocus: onFocus,
        onAddFieldList: function () {
            return addFieldList({
                step: step,
                id: id,
                blankInput: blankInput !== null && blankInput !== void 0 ? blankInput : {},
                blankError: constructErrors !== null && constructErrors !== void 0 ? constructErrors : {},
                blankFocus: constructFocus !== null && constructFocus !== void 0 ? constructFocus : {},
            });
        },
        onRemoveFieldList: function (index) { return removeFieldList({ step: step, id: id, index: index }); },
        value: isObjectEmpty(formData) ? [] : step != null ? (_c = (_b = formData === null || formData === void 0 ? void 0 : formData[step]) === null || _b === void 0 ? void 0 : _b[id]) !== null && _c !== void 0 ? _c : [] : (_d = formData === null || formData === void 0 ? void 0 : formData[id]) !== null && _d !== void 0 ? _d : [],
        error: isObjectEmpty(error) ? false : step != null ? (_f = (_e = error === null || error === void 0 ? void 0 : error[step]) === null || _e === void 0 ? void 0 : _e[id]) !== null && _f !== void 0 ? _f : false : (_g = error === null || error === void 0 ? void 0 : error[id]) !== null && _g !== void 0 ? _g : false,
        showError: isObjectEmpty(showError)
            ? false
            : step != null
                ? (_j = (_h = showError === null || showError === void 0 ? void 0 : showError[step]) === null || _h === void 0 ? void 0 : _h[id]) !== null && _j !== void 0 ? _j : false : (_k = showError === null || showError === void 0 ? void 0 : showError[id]) !== null && _k !== void 0 ? _k : false,
        focused: isObjectEmpty(focus) ? false : step != null ? (_m = (_l = focus === null || focus === void 0 ? void 0 : focus[step]) === null || _l === void 0 ? void 0 : _l[id]) !== null && _m !== void 0 ? _m : false : (_o = focus === null || focus === void 0 ? void 0 : focus[id]) !== null && _o !== void 0 ? _o : false,
    };
}

var FieldList = function (_a) {
    var step = _a.step, label = _a.label, name = _a.name, className = _a.className, style = _a.style, children = _a.children, add = _a.add, required = _a.required;
    if (!children) {
        throw new Error("<FieldList> expects to have <FieldList.Item> for child components.");
    }
    if (!label) {
        throw new Error("The label prop is mandatory on FieldList Component.");
    }
    var _b = useFieldListData({
        name: name,
        label: label,
        step: step,
        children: children,
    }), id = _b.id, inputProps = _b.inputProps, onChange = _b.onChange, onBlur = _b.onBlur, onFocus = _b.onFocus, value = _b.value, showError = _b.showError, focused = _b.focused, onAddFieldList = _b.onAddFieldList, onRemoveFieldList = _b.onRemoveFieldList;
    return (React.createElement("fieldset", { "data-field-list-id": id, className: "flow-form-field-list " + className, style: __assign({ display: "block", minHeight: '4.5rem', border: 'none', padding: '0', margin: '0' }, style) },
        React.createElement("legend", { style: { fontSize: "" + theme.fonts.medium, paddingBottom: '0.2em' } },
            label,
            " ",
            required && React.createElement("span", { style: { color: "" + theme.colors.red } }, "*")),
        value.map(function (field, index) { return (React.createElement(Row, { key: index, className: className },
            Object.entries(field).map(function (_a, i) {
                var k = _a[0], v = _a[1];
                var _b, _c, _d;
                return (React.createElement("div", { key: i, style: { display: 'flex', flexDirection: 'column', width: '100%' } },
                    React.createElement(ItemInput, { key: k, objKey: k, fieldIndex: i, type: (_b = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].type) !== null && _b !== void 0 ? _b : 'text', value: v || '', required: (_c = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].required) !== null && _c !== void 0 ? _c : false, onChange: onChange(index, i), onBlur: onBlur(index, i), onFocus: onFocus(index), autoComplete: (_d = inputProps === null || inputProps === void 0 ? void 0 : inputProps[i].autoComplete) !== null && _d !== void 0 ? _d : 'off', style: {
                            marginRight: '0.625em',
                            textTransform: 'capitalize',
                            fontSize: "" + theme.fonts.medium,
                            textIndent: "" + theme.text.indent,
                            border: "" + border(focused[index][k], showError[index][k]),
                            borderRadius: "" + theme.border.radius,
                            backgroundColor: "" + theme.colors.white,
                            outline: 'none',
                        } }),
                    showError[index][k] && (React.createElement(DisplayError, { id: k, className: inputProps[i].className, label: k, errMsg: inputProps[i].errMsg }))));
            }),
            add && (React.createElement(React.Fragment, null, index === 0 ? (React.createElement(ListButton, { onClick: function () { return onAddFieldList(); } }, "+")) : (React.createElement(ListButton, { remove: true, onClick: function () { return onRemoveFieldList(index); } }, "\u2212")))))); })));
};
FieldList.defaultProps = {
    ffComp: FFComponent.FIELD_LIST,
};
FieldList.Item = Item;

exports.Field = Field;
exports.FieldList = FieldList;
exports.FlowForm = FlowForm;
exports.Step = Step;
//# sourceMappingURL=index.js.map
