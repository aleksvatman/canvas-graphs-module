function $s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Tn = { exports: {} }, qt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qo;
function Tu() {
  if (Qo) return qt;
  Qo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return qt.Fragment = t, qt.jsx = n, qt.jsxs = n, qt;
}
var Kt = {}, An = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function Au() {
  if (Jo) return oe;
  Jo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.iterator;
  function a(p) {
    return p === null || typeof p != "object" ? null : (p = f && p[f] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var h = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, w = Object.assign, y = {};
  function _(p, E, A) {
    this.props = p, this.context = E, this.refs = y, this.updater = A || h;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(p, E) {
    if (typeof p != "object" && typeof p != "function" && p != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, p, E, "setState");
  }, _.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function x() {
  }
  x.prototype = _.prototype;
  function N(p, E, A) {
    this.props = p, this.context = E, this.refs = y, this.updater = A || h;
  }
  var m = N.prototype = new x();
  m.constructor = N, w(m, _.prototype), m.isPureReactComponent = !0;
  var v = Array.isArray, C = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function S(p, E, A, z, Y, U) {
    return A = U.ref, {
      $$typeof: e,
      type: p,
      key: E,
      ref: A !== void 0 ? A : null,
      props: U
    };
  }
  function D(p, E) {
    return S(
      p.type,
      E,
      void 0,
      void 0,
      void 0,
      p.props
    );
  }
  function j(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }
  function B(p) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(A) {
      return E[A];
    });
  }
  var $ = /\/+/g;
  function F(p, E) {
    return typeof p == "object" && p !== null && p.key != null ? B("" + p.key) : E.toString(36);
  }
  function V() {
  }
  function b(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (typeof p.status == "string" ? p.then(V, V) : (p.status = "pending", p.then(
          function(E) {
            p.status === "pending" && (p.status = "fulfilled", p.value = E);
          },
          function(E) {
            p.status === "pending" && (p.status = "rejected", p.reason = E);
          }
        )), p.status) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function P(p, E, A, z, Y) {
    var U = typeof p;
    (U === "undefined" || U === "boolean") && (p = null);
    var W = !1;
    if (p === null) W = !0;
    else
      switch (U) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case e:
            case t:
              W = !0;
              break;
            case d:
              return W = p._init, P(
                W(p._payload),
                E,
                A,
                z,
                Y
              );
          }
      }
    if (W)
      return Y = Y(p), W = z === "" ? "." + F(p, 0) : z, v(Y) ? (A = "", W != null && (A = W.replace($, "$&/") + "/"), P(Y, E, A, "", function(Q) {
        return Q;
      })) : Y != null && (j(Y) && (Y = D(
        Y,
        A + (Y.key == null || p && p.key === Y.key ? "" : ("" + Y.key).replace(
          $,
          "$&/"
        ) + "/") + W
      )), E.push(Y)), 1;
    W = 0;
    var G = z === "" ? "." : z + ":";
    if (v(p))
      for (var X = 0; X < p.length; X++)
        z = p[X], U = G + F(z, X), W += P(
          z,
          E,
          A,
          U,
          Y
        );
    else if (X = a(p), typeof X == "function")
      for (p = X.call(p), X = 0; !(z = p.next()).done; )
        z = z.value, U = G + F(z, X++), W += P(
          z,
          E,
          A,
          U,
          Y
        );
    else if (U === "object") {
      if (typeof p.then == "function")
        return P(
          b(p),
          E,
          A,
          z,
          Y
        );
      throw E = String(p), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return W;
  }
  function O(p, E, A) {
    if (p == null) return p;
    var z = [], Y = 0;
    return P(p, z, "", "", function(U) {
      return E.call(A, U, Y++);
    }), z;
  }
  function T(p) {
    if (p._status === -1) {
      var E = p._result;
      E = E(), E.then(
        function(A) {
          (p._status === 0 || p._status === -1) && (p._status = 1, p._result = A);
        },
        function(A) {
          (p._status === 0 || p._status === -1) && (p._status = 2, p._result = A);
        }
      ), p._status === -1 && (p._status = 0, p._result = E);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var L = typeof reportError == "function" ? reportError : function(p) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p),
        error: p
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", p);
      return;
    }
    console.error(p);
  };
  function R() {
  }
  return oe.Children = {
    map: O,
    forEach: function(p, E, A) {
      O(
        p,
        function() {
          E.apply(this, arguments);
        },
        A
      );
    },
    count: function(p) {
      var E = 0;
      return O(p, function() {
        E++;
      }), E;
    },
    toArray: function(p) {
      return O(p, function(E) {
        return E;
      }) || [];
    },
    only: function(p) {
      if (!j(p))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return p;
    }
  }, oe.Component = _, oe.Fragment = n, oe.Profiler = o, oe.PureComponent = N, oe.StrictMode = r, oe.Suspense = u, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(p) {
      return C.H.useMemoCache(p);
    }
  }, oe.cache = function(p) {
    return function() {
      return p.apply(null, arguments);
    };
  }, oe.cloneElement = function(p, E, A) {
    if (p == null)
      throw Error(
        "The argument must be a React element, but you passed " + p + "."
      );
    var z = w({}, p.props), Y = p.key, U = void 0;
    if (E != null)
      for (W in E.ref !== void 0 && (U = void 0), E.key !== void 0 && (Y = "" + E.key), E)
        !k.call(E, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && E.ref === void 0 || (z[W] = E[W]);
    var W = arguments.length - 2;
    if (W === 1) z.children = A;
    else if (1 < W) {
      for (var G = Array(W), X = 0; X < W; X++)
        G[X] = arguments[X + 2];
      z.children = G;
    }
    return S(p.type, Y, void 0, void 0, U, z);
  }, oe.createContext = function(p) {
    return p = {
      $$typeof: s,
      _currentValue: p,
      _currentValue2: p,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, p.Provider = p, p.Consumer = {
      $$typeof: i,
      _context: p
    }, p;
  }, oe.createElement = function(p, E, A) {
    var z, Y = {}, U = null;
    if (E != null)
      for (z in E.key !== void 0 && (U = "" + E.key), E)
        k.call(E, z) && z !== "key" && z !== "__self" && z !== "__source" && (Y[z] = E[z]);
    var W = arguments.length - 2;
    if (W === 1) Y.children = A;
    else if (1 < W) {
      for (var G = Array(W), X = 0; X < W; X++)
        G[X] = arguments[X + 2];
      Y.children = G;
    }
    if (p && p.defaultProps)
      for (z in W = p.defaultProps, W)
        Y[z] === void 0 && (Y[z] = W[z]);
    return S(p, U, void 0, void 0, null, Y);
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(p) {
    return { $$typeof: c, render: p };
  }, oe.isValidElement = j, oe.lazy = function(p) {
    return {
      $$typeof: d,
      _payload: { _status: -1, _result: p },
      _init: T
    };
  }, oe.memo = function(p, E) {
    return {
      $$typeof: l,
      type: p,
      compare: E === void 0 ? null : E
    };
  }, oe.startTransition = function(p) {
    var E = C.T, A = {};
    C.T = A;
    try {
      var z = p(), Y = C.S;
      Y !== null && Y(A, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(R, L);
    } catch (U) {
      L(U);
    } finally {
      C.T = E;
    }
  }, oe.unstable_useCacheRefresh = function() {
    return C.H.useCacheRefresh();
  }, oe.use = function(p) {
    return C.H.use(p);
  }, oe.useActionState = function(p, E, A) {
    return C.H.useActionState(p, E, A);
  }, oe.useCallback = function(p, E) {
    return C.H.useCallback(p, E);
  }, oe.useContext = function(p) {
    return C.H.useContext(p);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(p, E) {
    return C.H.useDeferredValue(p, E);
  }, oe.useEffect = function(p, E, A) {
    var z = C.H;
    if (typeof A == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return z.useEffect(p, E);
  }, oe.useId = function() {
    return C.H.useId();
  }, oe.useImperativeHandle = function(p, E, A) {
    return C.H.useImperativeHandle(p, E, A);
  }, oe.useInsertionEffect = function(p, E) {
    return C.H.useInsertionEffect(p, E);
  }, oe.useLayoutEffect = function(p, E) {
    return C.H.useLayoutEffect(p, E);
  }, oe.useMemo = function(p, E) {
    return C.H.useMemo(p, E);
  }, oe.useOptimistic = function(p, E) {
    return C.H.useOptimistic(p, E);
  }, oe.useReducer = function(p, E, A) {
    return C.H.useReducer(p, E, A);
  }, oe.useRef = function(p) {
    return C.H.useRef(p);
  }, oe.useState = function(p) {
    return C.H.useState(p);
  }, oe.useSyncExternalStore = function(p, E, A) {
    return C.H.useSyncExternalStore(
      p,
      E,
      A
    );
  }, oe.useTransition = function() {
    return C.H.useTransition();
  }, oe.version = "19.1.0", oe;
}
var en = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
en.exports;
var ei;
function Mu() {
  return ei || (ei = 1, function(e, t) {
    process.env.NODE_ENV !== "production" && function() {
      function n(g, M) {
        Object.defineProperty(i.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function r(g) {
        return g === null || typeof g != "object" ? null : (g = te && g[te] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function o(g, M) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var q = g + "." + M;
        Z[q] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          g
        ), Z[q] = !0);
      }
      function i(g, M, q) {
        this.props = g, this.context = M, this.refs = ye, this.updater = q || ge;
      }
      function s() {
      }
      function c(g, M, q) {
        this.props = g, this.context = M, this.refs = ye, this.updater = q || ge;
      }
      function u(g) {
        return "" + g;
      }
      function l(g) {
        try {
          u(g);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var q = M.error, K = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return q.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            K
          ), u(g);
        }
      }
      function d(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === Ut ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case p:
            return "Fragment";
          case A:
            return "Profiler";
          case E:
            return "StrictMode";
          case W:
            return "Suspense";
          case G:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case R:
              return "Portal";
            case Y:
              return (g.displayName || "Context") + ".Provider";
            case z:
              return (g._context.displayName || "Context") + ".Consumer";
            case U:
              var M = g.render;
              return g = g.displayName, g || (g = M.displayName || M.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case X:
              return M = g.displayName || null, M !== null ? M : d(g.type) || "Memo";
            case Q:
              M = g._payload, g = g._init;
              try {
                return d(g(M));
              } catch {
              }
          }
        return null;
      }
      function f(g) {
        if (g === p) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Q)
          return "<...>";
        try {
          var M = d(g);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function a() {
        var g = ne.A;
        return g === null ? null : g.getOwner();
      }
      function h() {
        return Error("react-stack-top-frame");
      }
      function w(g) {
        if (Ge.call(g, "key")) {
          var M = Object.getOwnPropertyDescriptor(g, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function y(g, M) {
        function q() {
          Ke || (Ke = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        q.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: q,
          configurable: !0
        });
      }
      function _() {
        var g = d(this.type);
        return Be[g] || (Be[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function x(g, M, q, K, J, ce, re, fe) {
        return q = ce.ref, g = {
          $$typeof: L,
          type: g,
          key: M,
          props: ce,
          _owner: J
        }, (q !== void 0 ? q : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: _
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: re
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: fe
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function N(g, M) {
        return M = x(
          g.type,
          M,
          void 0,
          void 0,
          g._owner,
          g.props,
          g._debugStack,
          g._debugTask
        ), g._store && (M._store.validated = g._store.validated), M;
      }
      function m(g) {
        return typeof g == "object" && g !== null && g.$$typeof === L;
      }
      function v(g) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(q) {
          return M[q];
        });
      }
      function C(g, M) {
        return typeof g == "object" && g !== null && g.key != null ? (l(g.key), v("" + g.key)) : M.toString(36);
      }
      function k() {
      }
      function S(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(k, k) : (g.status = "pending", g.then(
              function(M) {
                g.status === "pending" && (g.status = "fulfilled", g.value = M);
              },
              function(M) {
                g.status === "pending" && (g.status = "rejected", g.reason = M);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function D(g, M, q, K, J) {
        var ce = typeof g;
        (ce === "undefined" || ce === "boolean") && (g = null);
        var re = !1;
        if (g === null) re = !0;
        else
          switch (ce) {
            case "bigint":
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case L:
                case R:
                  re = !0;
                  break;
                case Q:
                  return re = g._init, D(
                    re(g._payload),
                    M,
                    q,
                    K,
                    J
                  );
              }
          }
        if (re) {
          re = g, J = J(re);
          var fe = K === "" ? "." + C(re, 0) : K;
          return xt(J) ? (q = "", fe != null && (q = fe.replace(Et, "$&/") + "/"), D(J, M, q, "", function(Le) {
            return Le;
          })) : J != null && (m(J) && (J.key != null && (re && re.key === J.key || l(J.key)), q = N(
            J,
            q + (J.key == null || re && re.key === J.key ? "" : ("" + J.key).replace(
              Et,
              "$&/"
            ) + "/") + fe
          ), K !== "" && re != null && m(re) && re.key == null && re._store && !re._store.validated && (q._store.validated = 2), J = q), M.push(J)), 1;
        }
        if (re = 0, fe = K === "" ? "." : K + ":", xt(g))
          for (var ae = 0; ae < g.length; ae++)
            K = g[ae], ce = fe + C(K, ae), re += D(
              K,
              M,
              q,
              ce,
              J
            );
        else if (ae = r(g), typeof ae == "function")
          for (ae === g.entries && (Cn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Cn = !0), g = ae.call(g), ae = 0; !(K = g.next()).done; )
            K = K.value, ce = fe + C(K, ae++), re += D(
              K,
              M,
              q,
              ce,
              J
            );
        else if (ce === "object") {
          if (typeof g.then == "function")
            return D(
              S(g),
              M,
              q,
              K,
              J
            );
          throw M = String(g), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return re;
      }
      function j(g, M, q) {
        if (g == null) return g;
        var K = [], J = 0;
        return D(g, K, "", "", function(ce) {
          return M.call(q, ce, J++);
        }), K;
      }
      function B(g) {
        if (g._status === -1) {
          var M = g._result;
          M = M(), M.then(
            function(q) {
              (g._status === 0 || g._status === -1) && (g._status = 1, g._result = q);
            },
            function(q) {
              (g._status === 0 || g._status === -1) && (g._status = 2, g._result = q);
            }
          ), g._status === -1 && (g._status = 0, g._result = M);
        }
        if (g._status === 1)
          return M = g._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw g._result;
      }
      function $() {
        var g = ne.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function F() {
      }
      function V(g) {
        if (St === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            St = (e && e[M]).call(
              e,
              "timers"
            ).setImmediate;
          } catch {
            St = function(K) {
              kn === !1 && (kn = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var J = new MessageChannel();
              J.port1.onmessage = K, J.port2.postMessage(void 0);
            };
          }
        return St(g);
      }
      function b(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function P(g, M) {
        M !== Ct - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Ct = M;
      }
      function O(g, M, q) {
        var K = ne.actQueue;
        if (K !== null)
          if (K.length !== 0)
            try {
              T(K), V(function() {
                return O(g, M, q);
              });
              return;
            } catch (J) {
              ne.thrownErrors.push(J);
            }
          else ne.actQueue = null;
        0 < ne.thrownErrors.length ? (K = b(ne.thrownErrors), ne.thrownErrors.length = 0, q(K)) : M(g);
      }
      function T(g) {
        if (!Gt) {
          Gt = !0;
          var M = 0;
          try {
            for (; M < g.length; M++) {
              var q = g[M];
              do {
                ne.didUsePromise = !1;
                var K = q(!1);
                if (K !== null) {
                  if (ne.didUsePromise) {
                    g[M] = q, g.splice(0, M);
                    return;
                  }
                  q = K;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (J) {
            g.splice(0, M + 1), ne.thrownErrors.push(J);
          } finally {
            Gt = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var L = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), te = Symbol.iterator, Z = {}, ge = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          o(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          o(g, "replaceState");
        },
        enqueueSetState: function(g) {
          o(g, "setState");
        }
      }, ue = Object.assign, ye = {};
      Object.freeze(ye), i.prototype.isReactComponent = {}, i.prototype.setState = function(g, M) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, M, "setState");
      }, i.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var he = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ae;
      for (Ae in he)
        he.hasOwnProperty(Ae) && n(Ae, he[Ae]);
      s.prototype = i.prototype, he = c.prototype = new s(), he.constructor = c, ue(he, i.prototype), he.isPureReactComponent = !0;
      var xt = Array.isArray, Ut = Symbol.for("react.client.reference"), ne = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ge = Object.prototype.hasOwnProperty, qe = console.createTask ? console.createTask : function() {
        return null;
      };
      he = {
        "react-stack-bottom-frame": function(g) {
          return g();
        }
      };
      var Ke, _t, Be = {}, Ze = he["react-stack-bottom-frame"].bind(he, h)(), bt = qe(f(h)), Cn = !1, Et = /\/+/g, Nn = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, kn = !1, St = null, Ct = 0, Nt = !1, Gt = !1, On = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : V;
      he = Object.freeze({
        __proto__: null,
        c: function(g) {
          return $().useMemoCache(g);
        }
      }), t.Children = {
        map: j,
        forEach: function(g, M, q) {
          j(
            g,
            function() {
              M.apply(this, arguments);
            },
            q
          );
        },
        count: function(g) {
          var M = 0;
          return j(g, function() {
            M++;
          }), M;
        },
        toArray: function(g) {
          return j(g, function(M) {
            return M;
          }) || [];
        },
        only: function(g) {
          if (!m(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      }, t.Component = i, t.Fragment = p, t.Profiler = A, t.PureComponent = c, t.StrictMode = E, t.Suspense = W, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, t.__COMPILER_RUNTIME = he, t.act = function(g) {
        var M = ne.actQueue, q = Ct;
        Ct++;
        var K = ne.actQueue = M !== null ? M : [], J = !1;
        try {
          var ce = g();
        } catch (ae) {
          ne.thrownErrors.push(ae);
        }
        if (0 < ne.thrownErrors.length)
          throw P(M, q), g = b(ne.thrownErrors), ne.thrownErrors.length = 0, g;
        if (ce !== null && typeof ce == "object" && typeof ce.then == "function") {
          var re = ce;
          return On(function() {
            J || Nt || (Nt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ae, Le) {
              J = !0, re.then(
                function(Qe) {
                  if (P(M, q), q === 0) {
                    try {
                      T(K), V(function() {
                        return O(
                          Qe,
                          ae,
                          Le
                        );
                      });
                    } catch (Lr) {
                      ne.thrownErrors.push(Lr);
                    }
                    if (0 < ne.thrownErrors.length) {
                      var $r = b(
                        ne.thrownErrors
                      );
                      ne.thrownErrors.length = 0, Le($r);
                    }
                  } else ae(Qe);
                },
                function(Qe) {
                  P(M, q), 0 < ne.thrownErrors.length && (Qe = b(
                    ne.thrownErrors
                  ), ne.thrownErrors.length = 0), Le(Qe);
                }
              );
            }
          };
        }
        var fe = ce;
        if (P(M, q), q === 0 && (T(K), K.length !== 0 && On(function() {
          J || Nt || (Nt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ne.actQueue = null), 0 < ne.thrownErrors.length)
          throw g = b(ne.thrownErrors), ne.thrownErrors.length = 0, g;
        return {
          then: function(ae, Le) {
            J = !0, q === 0 ? (ne.actQueue = K, V(function() {
              return O(
                fe,
                ae,
                Le
              );
            })) : ae(fe);
          }
        };
      }, t.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, t.captureOwnerStack = function() {
        var g = ne.getCurrentStack;
        return g === null ? null : g();
      }, t.cloneElement = function(g, M, q) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var K = ue({}, g.props), J = g.key, ce = g._owner;
        if (M != null) {
          var re;
          e: {
            if (Ge.call(M, "ref") && (re = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && re.isReactWarning) {
              re = !1;
              break e;
            }
            re = M.ref !== void 0;
          }
          re && (ce = a()), w(M) && (l(M.key), J = "" + M.key);
          for (fe in M)
            !Ge.call(M, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && M.ref === void 0 || (K[fe] = M[fe]);
        }
        var fe = arguments.length - 2;
        if (fe === 1) K.children = q;
        else if (1 < fe) {
          re = Array(fe);
          for (var ae = 0; ae < fe; ae++)
            re[ae] = arguments[ae + 2];
          K.children = re;
        }
        for (K = x(
          g.type,
          J,
          void 0,
          void 0,
          ce,
          K,
          g._debugStack,
          g._debugTask
        ), J = 2; J < arguments.length; J++)
          ce = arguments[J], m(ce) && ce._store && (ce._store.validated = 1);
        return K;
      }, t.createContext = function(g) {
        return g = {
          $$typeof: Y,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: z,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, t.createElement = function(g, M, q) {
        for (var K = 2; K < arguments.length; K++) {
          var J = arguments[K];
          m(J) && J._store && (J._store.validated = 1);
        }
        if (K = {}, J = null, M != null)
          for (ae in _t || !("__self" in M) || "key" in M || (_t = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), w(M) && (l(M.key), J = "" + M.key), M)
            Ge.call(M, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (K[ae] = M[ae]);
        var ce = arguments.length - 2;
        if (ce === 1) K.children = q;
        else if (1 < ce) {
          for (var re = Array(ce), fe = 0; fe < ce; fe++)
            re[fe] = arguments[fe + 2];
          Object.freeze && Object.freeze(re), K.children = re;
        }
        if (g && g.defaultProps)
          for (ae in ce = g.defaultProps, ce)
            K[ae] === void 0 && (K[ae] = ce[ae]);
        J && y(
          K,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var ae = 1e4 > ne.recentlyCreatedOwnerStacks++;
        return x(
          g,
          J,
          void 0,
          void 0,
          a(),
          K,
          ae ? Error("react-stack-top-frame") : Ze,
          ae ? qe(f(g)) : bt
        );
      }, t.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, t.forwardRef = function(g) {
        g != null && g.$$typeof === X ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var M = { $$typeof: U, render: g }, q;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return q;
          },
          set: function(K) {
            q = K, g.name || g.displayName || (Object.defineProperty(g, "name", { value: K }), g.displayName = K);
          }
        }), M;
      }, t.isValidElement = m, t.lazy = function(g) {
        return {
          $$typeof: Q,
          _payload: { _status: -1, _result: g },
          _init: B
        };
      }, t.memo = function(g, M) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), M = {
          $$typeof: X,
          type: g,
          compare: M === void 0 ? null : M
        };
        var q;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return q;
          },
          set: function(K) {
            q = K, g.name || g.displayName || (Object.defineProperty(g, "name", { value: K }), g.displayName = K);
          }
        }), M;
      }, t.startTransition = function(g) {
        var M = ne.T, q = {};
        ne.T = q, q._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var K = g(), J = ne.S;
          J !== null && J(q, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(F, Nn);
        } catch (ce) {
          Nn(ce);
        } finally {
          M === null && q._updatedFibers && (g = q._updatedFibers.size, q._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), ne.T = M;
        }
      }, t.unstable_useCacheRefresh = function() {
        return $().useCacheRefresh();
      }, t.use = function(g) {
        return $().use(g);
      }, t.useActionState = function(g, M, q) {
        return $().useActionState(
          g,
          M,
          q
        );
      }, t.useCallback = function(g, M) {
        return $().useCallback(g, M);
      }, t.useContext = function(g) {
        var M = $();
        return g.$$typeof === z && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(g);
      }, t.useDebugValue = function(g, M) {
        return $().useDebugValue(g, M);
      }, t.useDeferredValue = function(g, M) {
        return $().useDeferredValue(g, M);
      }, t.useEffect = function(g, M, q) {
        g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var K = $();
        if (typeof q == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return K.useEffect(g, M);
      }, t.useId = function() {
        return $().useId();
      }, t.useImperativeHandle = function(g, M, q) {
        return $().useImperativeHandle(g, M, q);
      }, t.useInsertionEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), $().useInsertionEffect(g, M);
      }, t.useLayoutEffect = function(g, M) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), $().useLayoutEffect(g, M);
      }, t.useMemo = function(g, M) {
        return $().useMemo(g, M);
      }, t.useOptimistic = function(g, M) {
        return $().useOptimistic(g, M);
      }, t.useReducer = function(g, M, q) {
        return $().useReducer(g, M, q);
      }, t.useRef = function(g) {
        return $().useRef(g);
      }, t.useState = function(g) {
        return $().useState(g);
      }, t.useSyncExternalStore = function(g, M, q) {
        return $().useSyncExternalStore(
          g,
          M,
          q
        );
      }, t.useTransition = function() {
        return $().useTransition();
      }, t.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(en, en.exports)), en.exports;
}
var ti;
function at() {
  return ti || (ti = 1, process.env.NODE_ENV === "production" ? An.exports = Au() : An.exports = Mu()), An.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function Pu() {
  return ni || (ni = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === B ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case y:
          return "Fragment";
        case x:
          return "Profiler";
        case _:
          return "StrictMode";
        case C:
          return "Suspense";
        case k:
          return "SuspenseList";
        case j:
          return "Activity";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case w:
            return "Portal";
          case m:
            return (p.displayName || "Context") + ".Provider";
          case N:
            return (p._context.displayName || "Context") + ".Consumer";
          case v:
            var E = p.render;
            return p = p.displayName, p || (p = E.displayName || E.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case S:
            return E = p.displayName || null, E !== null ? E : e(p.type) || "Memo";
          case D:
            E = p._payload, p = p._init;
            try {
              return e(p(E));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function n(p) {
      try {
        t(p);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var A = E.error, z = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return A.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(p);
      }
    }
    function r(p) {
      if (p === y) return "<>";
      if (typeof p == "object" && p !== null && p.$$typeof === D)
        return "<...>";
      try {
        var E = e(p);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var p = $.A;
      return p === null ? null : p.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(p) {
      if (F.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function c(p, E) {
      function A() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: A,
        configurable: !0
      });
    }
    function u() {
      var p = e(this.type);
      return O[p] || (O[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function l(p, E, A, z, Y, U, W, G) {
      return A = U.ref, p = {
        $$typeof: h,
        type: p,
        key: E,
        props: U,
        _owner: Y
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(p, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(p, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function d(p, E, A, z, Y, U, W, G) {
      var X = E.children;
      if (X !== void 0)
        if (z)
          if (V(X)) {
            for (z = 0; z < X.length; z++)
              f(X[z]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(X);
      if (F.call(E, "key")) {
        X = e(p);
        var Q = Object.keys(E).filter(function(te) {
          return te !== "key";
        });
        z = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", R[X + z] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          X,
          Q,
          X
        ), R[X + z] = !0);
      }
      if (X = null, A !== void 0 && (n(A), X = "" + A), s(E) && (n(E.key), X = "" + E.key), "key" in E) {
        A = {};
        for (var se in E)
          se !== "key" && (A[se] = E[se]);
      } else A = E;
      return X && c(
        A,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), l(
        p,
        X,
        U,
        Y,
        o(),
        A,
        W,
        G
      );
    }
    function f(p) {
      typeof p == "object" && p !== null && p.$$typeof === h && p._store && (p._store.validated = 1);
    }
    var a = at(), h = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), j = Symbol.for("react.activity"), B = Symbol.for("react.client.reference"), $ = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, V = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    a = {
      "react-stack-bottom-frame": function(p) {
        return p();
      }
    };
    var P, O = {}, T = a["react-stack-bottom-frame"].bind(
      a,
      i
    )(), L = b(r(i)), R = {};
    Kt.Fragment = y, Kt.jsx = function(p, E, A, z, Y) {
      var U = 1e4 > $.recentlyCreatedOwnerStacks++;
      return d(
        p,
        E,
        A,
        !1,
        z,
        Y,
        U ? Error("react-stack-top-frame") : T,
        U ? b(r(p)) : L
      );
    }, Kt.jsxs = function(p, E, A, z, Y) {
      var U = 1e4 > $.recentlyCreatedOwnerStacks++;
      return d(
        p,
        E,
        A,
        !0,
        z,
        Y,
        U ? Error("react-stack-top-frame") : T,
        U ? b(r(p)) : L
      );
    };
  }()), Kt;
}
var ri;
function Iu() {
  return ri || (ri = 1, process.env.NODE_ENV === "production" ? Tn.exports = Tu() : Tn.exports = Pu()), Tn.exports;
}
var I = Iu(), H = at();
const ke = /* @__PURE__ */ $s(H);
var Se = function() {
  return Se = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Se.apply(this, arguments);
};
function Pt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Du(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var $u = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lu = /* @__PURE__ */ Du(
  function(e) {
    return $u.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), pe = "-ms-", on = "-moz-", de = "-webkit-", Ls = "comm", wr = "rule", Co = "decl", ju = "@import", js = "@keyframes", Hu = "@layer", Hs = Math.abs, No = String.fromCharCode, no = Object.assign;
function zu(e, t) {
  return _e(e, 0) ^ 45 ? (((t << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function zs(e) {
  return e.trim();
}
function Ye(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ie(e, t, n) {
  return e.replace(t, n);
}
function Gn(e, t, n) {
  return e.indexOf(t, n);
}
function _e(e, t) {
  return e.charCodeAt(t) | 0;
}
function It(e, t, n) {
  return e.slice(t, n);
}
function je(e) {
  return e.length;
}
function Bs(e) {
  return e.length;
}
function tn(e, t) {
  return t.push(e), e;
}
function Bu(e, t) {
  return e.map(t).join("");
}
function oi(e, t) {
  return e.filter(function(n) {
    return !Ye(n, t);
  });
}
var vr = 1, Dt = 1, Vs = 0, Te = 0, ve = 0, Wt = "";
function xr(e, t, n, r, o, i, s, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vr, column: Dt, length: s, return: "", siblings: c };
}
function tt(e, t) {
  return no(xr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function kt(e) {
  for (; e.root; )
    e = tt(e.root, { children: [e] });
  tn(e, e.siblings);
}
function Vu() {
  return ve;
}
function Yu() {
  return ve = Te > 0 ? _e(Wt, --Te) : 0, Dt--, ve === 10 && (Dt = 1, vr--), ve;
}
function De() {
  return ve = Te < Vs ? _e(Wt, Te++) : 0, Dt++, ve === 10 && (Dt = 1, vr++), ve;
}
function dt() {
  return _e(Wt, Te);
}
function qn() {
  return Te;
}
function _r(e, t) {
  return It(Wt, e, t);
}
function ro(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fu(e) {
  return vr = Dt = 1, Vs = je(Wt = e), Te = 0, [];
}
function Wu(e) {
  return Wt = "", e;
}
function Hr(e) {
  return zs(_r(Te - 1, oo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xu(e) {
  for (; (ve = dt()) && ve < 33; )
    De();
  return ro(e) > 2 || ro(ve) > 3 ? "" : " ";
}
function Uu(e, t) {
  for (; --t && De() && !(ve < 48 || ve > 102 || ve > 57 && ve < 65 || ve > 70 && ve < 97); )
    ;
  return _r(e, qn() + (t < 6 && dt() == 32 && De() == 32));
}
function oo(e) {
  for (; De(); )
    switch (ve) {
      // ] ) " '
      case e:
        return Te;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && oo(ve);
        break;
      // (
      case 40:
        e === 41 && oo(e);
        break;
      // \
      case 92:
        De();
        break;
    }
  return Te;
}
function Gu(e, t) {
  for (; De() && e + ve !== 57; )
    if (e + ve === 84 && dt() === 47)
      break;
  return "/*" + _r(t, Te - 1) + "*" + No(e === 47 ? e : De());
}
function qu(e) {
  for (; !ro(dt()); )
    De();
  return _r(e, Te);
}
function Ku(e) {
  return Wu(Kn("", null, null, null, [""], e = Fu(e), 0, [0], e));
}
function Kn(e, t, n, r, o, i, s, c, u) {
  for (var l = 0, d = 0, f = s, a = 0, h = 0, w = 0, y = 1, _ = 1, x = 1, N = 0, m = "", v = o, C = i, k = r, S = m; _; )
    switch (w = N, N = De()) {
      // (
      case 40:
        if (w != 108 && _e(S, f - 1) == 58) {
          Gn(S += ie(Hr(N), "&", "&\f"), "&\f", Hs(l ? c[l - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        S += Hr(N);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        S += Xu(w);
        break;
      // \
      case 92:
        S += Uu(qn() - 1, 7);
        continue;
      // /
      case 47:
        switch (dt()) {
          case 42:
          case 47:
            tn(Zu(Gu(De(), qn()), t, n, u), u);
            break;
          default:
            S += "/";
        }
        break;
      // {
      case 123 * y:
        c[l++] = je(S) * x;
      // } ; \0
      case 125 * y:
      case 59:
      case 0:
        switch (N) {
          // \0 }
          case 0:
          case 125:
            _ = 0;
          // ;
          case 59 + d:
            x == -1 && (S = ie(S, /\f/g, "")), h > 0 && je(S) - f && tn(h > 32 ? si(S + ";", r, n, f - 1, u) : si(ie(S, " ", "") + ";", r, n, f - 2, u), u);
            break;
          // @ ;
          case 59:
            S += ";";
          // { rule/at-rule
          default:
            if (tn(k = ii(S, t, n, l, d, o, c, m, v = [], C = [], f, i), i), N === 123)
              if (d === 0)
                Kn(S, t, k, k, v, i, f, c, C);
              else
                switch (a === 99 && _e(S, 3) === 110 ? 100 : a) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kn(e, k, k, r && tn(ii(e, k, k, 0, 0, o, c, m, o, v = [], f, C), C), o, C, f, c, r ? v : C);
                    break;
                  default:
                    Kn(S, k, k, k, [""], C, 0, c, C);
                }
        }
        l = d = h = 0, y = x = 1, m = S = "", f = s;
        break;
      // :
      case 58:
        f = 1 + je(S), h = w;
      default:
        if (y < 1) {
          if (N == 123)
            --y;
          else if (N == 125 && y++ == 0 && Yu() == 125)
            continue;
        }
        switch (S += No(N), N * y) {
          // &
          case 38:
            x = d > 0 ? 1 : (S += "\f", -1);
            break;
          // ,
          case 44:
            c[l++] = (je(S) - 1) * x, x = 1;
            break;
          // @
          case 64:
            dt() === 45 && (S += Hr(De())), a = dt(), d = f = je(m = S += qu(qn())), N++;
            break;
          // -
          case 45:
            w === 45 && je(S) == 2 && (y = 0);
        }
    }
  return i;
}
function ii(e, t, n, r, o, i, s, c, u, l, d, f) {
  for (var a = o - 1, h = o === 0 ? i : [""], w = Bs(h), y = 0, _ = 0, x = 0; y < r; ++y)
    for (var N = 0, m = It(e, a + 1, a = Hs(_ = s[y])), v = e; N < w; ++N)
      (v = zs(_ > 0 ? h[N] + " " + m : ie(m, /&\f/g, h[N]))) && (u[x++] = v);
  return xr(e, t, n, o === 0 ? wr : c, u, l, d, f);
}
function Zu(e, t, n, r) {
  return xr(e, t, n, Ls, No(Vu()), It(e, 2, -2), 0, r);
}
function si(e, t, n, r, o) {
  return xr(e, t, n, Co, It(e, 0, r), It(e, r + 1, -1), r, o);
}
function Ys(e, t, n) {
  switch (zu(e, t)) {
    // color-adjust
    case 5103:
      return de + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return de + e + e;
    // tab-size
    case 4789:
      return on + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + e + on + e + pe + e + e;
    // writing-mode
    case 5936:
      switch (_e(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return de + e + pe + ie(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return de + e + pe + ie(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return de + e + pe + ie(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return de + e + pe + e + e;
    // order
    case 6165:
      return de + e + pe + "flex-" + e + e;
    // align-items
    case 5187:
      return de + e + ie(e, /(\w+).+(:[^]+)/, de + "box-$1$2" + pe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return de + e + pe + "flex-item-" + ie(e, /flex-|-self/g, "") + (Ye(e, /flex-|baseline/) ? "" : pe + "grid-row-" + ie(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return de + e + pe + "flex-line-pack" + ie(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return de + e + pe + ie(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return de + e + pe + ie(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return de + "box-" + ie(e, "-grow", "") + de + e + pe + ie(e, "grow", "positive") + e;
    // transition
    case 4554:
      return de + ie(e, /([^-])(transform)/g, "$1" + de + "$2") + e;
    // cursor
    case 6187:
      return ie(ie(ie(e, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ie(e, /(image-set\([^]*)/, de + "$1$`$1");
    // justify-content
    case 4968:
      return ie(ie(e, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + de + e + e;
    // justify-self
    case 4200:
      if (!Ye(e, /flex-|baseline/)) return pe + "grid-column-align" + It(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return pe + ie(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Ye(r.props, /grid-\w+-end/);
      }) ? ~Gn(e + (n = n[t].value), "span", 0) ? e : pe + ie(e, "-start", "") + e + pe + "grid-row-span:" + (~Gn(n, "span", 0) ? Ye(n, /\d+/) : +Ye(n, /\d+/) - +Ye(e, /\d+/)) + ";" : pe + ie(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Ye(r.props, /grid-\w+-start/);
      }) ? e : pe + ie(ie(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ie(e, /(.+)-inline(.+)/, de + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (je(e) - 1 - t > 6)
        switch (_e(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (_e(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return ie(e, /(.+:)(.+)-([^]+)/, "$1" + de + "$2-$3$1" + on + (_e(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Gn(e, "stretch", 0) ? Ys(ie(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return ie(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, u, l) {
        return pe + o + ":" + i + l + (s ? pe + o + "-span:" + (c ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (_e(e, t + 6) === 121)
        return ie(e, ":", ":" + de) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (_e(e, _e(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return ie(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + de + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + de + "$2$3$1" + pe + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return ie(e, ":", ":" + pe) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ie(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function rr(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Qu(e, t, n, r) {
  switch (e.type) {
    case Hu:
      if (e.children.length) break;
    case ju:
    case Co:
      return e.return = e.return || e.value;
    case Ls:
      return "";
    case js:
      return e.return = e.value + "{" + rr(e.children, r) + "}";
    case wr:
      if (!je(e.value = e.props.join(","))) return "";
  }
  return je(n = rr(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ju(e) {
  var t = Bs(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function el(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function tl(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Co:
        e.return = Ys(e.value, e.length, n);
        return;
      case js:
        return rr([tt(e, { value: ie(e.value, "@", "@" + de) })], r);
      case wr:
        if (e.length)
          return Bu(n = e.props, function(o) {
            switch (Ye(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                kt(tt(e, { props: [ie(o, /:(read-\w+)/, ":" + on + "$1")] })), kt(tt(e, { props: [o] })), no(e, { props: oi(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                kt(tt(e, { props: [ie(o, /:(plac\w+)/, ":" + de + "input-$1")] })), kt(tt(e, { props: [ie(o, /:(plac\w+)/, ":" + on + "$1")] })), kt(tt(e, { props: [ie(o, /:(plac\w+)/, pe + "input-$1")] })), kt(tt(e, { props: [o] })), no(e, { props: oi(n, r) });
                break;
            }
            return "";
          });
    }
}
var nl = {
  animationIterationCount: 1,
  aspectRatio: 1,
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
}, mt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Fs = "active", Ws = "data-styled-version", br = "6.1.17", ko = `/*!sc*/
`, or = typeof window < "u" && "HTMLElement" in window, rl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ai = /invalid hook call/i, Mn = /* @__PURE__ */ new Set(), ol = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var c = [], u = 1; u < arguments.length; u++) c[u - 1] = arguments[u];
        ai.test(s) ? (i = !1, Mn.delete(r)) : o.apply(void 0, Pt([s], c, !1));
      }, H.useRef(), i && !Mn.has(r) && (console.warn(r), Mn.add(r));
    } catch (s) {
      ai.test(s.message) && Mn.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Er = Object.freeze([]), $t = Object.freeze({});
function il(e, t, n) {
  return n === void 0 && (n = $t), e.theme !== n.theme && e.theme || t || n.theme;
}
var io = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), sl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, al = /(^-|-$)/g;
function ci(e) {
  return e.replace(sl, "-").replace(al, "");
}
var cl = /(a)(d)/gi, Pn = 52, ui = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function so(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Pn; t = t / Pn | 0) n = ui(t % Pn) + n;
  return (ui(t % Pn) + n).replace(cl, "$1-$2");
}
var zr, Xs = 5381, ut = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Us = function(e) {
  return ut(Xs, e);
};
function ul(e) {
  return so(Us(e) >>> 0);
}
function Gs(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Br(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var qs = typeof Symbol == "function" && Symbol.for, Ks = qs ? Symbol.for("react.memo") : 60115, ll = qs ? Symbol.for("react.forward_ref") : 60112, fl = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, dl = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Zs = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, hl = ((zr = {})[ll] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, zr[Ks] = Zs, zr);
function li(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ks ? Zs : "$$typeof" in e ? hl[e.$$typeof] : fl;
  var t;
}
var pl = Object.defineProperty, gl = Object.getOwnPropertyNames, fi = Object.getOwnPropertySymbols, ml = Object.getOwnPropertyDescriptor, yl = Object.getPrototypeOf, di = Object.prototype;
function Qs(e, t, n) {
  if (typeof t != "string") {
    if (di) {
      var r = yl(t);
      r && r !== di && Qs(e, r, n);
    }
    var o = gl(t);
    fi && (o = o.concat(fi(t)));
    for (var i = li(e), s = li(t), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in dl || n && n[u] || s && u in s || i && u in i)) {
        var l = ml(t, u);
        try {
          pl(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function Lt(e) {
  return typeof e == "function";
}
function Oo(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function lt(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function hi(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function jt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function ao(e, t, n) {
  if (n === void 0 && (n = !1), !n && !jt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = ao(e[r], t[r]);
  else if (jt(t)) for (var r in t) e[r] = ao(e[r], t[r]);
  return e;
}
function Ro(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var wl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function vl() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Xt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(vl.apply(void 0, Pt([wl[e]], t, !1)).trim());
}
var xl = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Xt(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(r), this.length = i;
      for (var s = o; s < i; s++) this.groupSizes[s] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), u = (s = 0, n.length); s < u; s++) this.tag.insertRule(c, n[s]) && (this.groupSizes[t]++, c++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), o = r + n;
      this.groupSizes[t] = 0;
      for (var i = r; i < o; i++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(ko);
    return n;
  }, e;
}(), _l = 1 << 30, Zn = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Qn = 1, In = function(e) {
  if (Zn.has(e)) return Zn.get(e);
  for (; ir.has(Qn); ) Qn++;
  var t = Qn++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > _l)) throw Xt(16, "".concat(t));
  return Zn.set(e, t), ir.set(t, e), t;
}, bl = function(e, t) {
  Qn = t + 1, Zn.set(e, t), ir.set(t, e);
}, El = "style[".concat(mt, "][").concat(Ws, '="').concat(br, '"]'), Sl = new RegExp("^".concat(mt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Cl = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Nl = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(ko), o = [], i = 0, s = r.length; i < s; i++) {
    var c = r[i].trim();
    if (c) {
      var u = c.match(Sl);
      if (u) {
        var l = 0 | parseInt(u[1], 10), d = u[2];
        l !== 0 && (bl(d, l), Cl(e, d, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, pi = function(e) {
  for (var t = document.querySelectorAll(El), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(mt) !== Fs && (Nl(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function kl() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Js = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(mt, "]")));
    return u[u.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(mt, Fs), r.setAttribute(Ws, br);
  var s = kl();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Ol = function() {
  function e(t) {
    this.element = Js(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Xt(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), Rl = function() {
  function e(t) {
    this.element = Js(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Tl = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), gi = or, Al = { isServer: !or, useCSSOMInjection: !rl }, ea = function() {
  function e(t, n, r) {
    t === void 0 && (t = $t), n === void 0 && (n = {});
    var o = this;
    this.options = Se(Se({}, Al), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && or && gi && (gi = !1, pi(this)), Ro(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, u = "", l = function(f) {
          var a = function(x) {
            return ir.get(x);
          }(f);
          if (a === void 0) return "continue";
          var h = i.names.get(a), w = s.getGroup(f);
          if (h === void 0 || !h.size || w.length === 0) return "continue";
          var y = "".concat(mt, ".g").concat(f, '[id="').concat(a, '"]'), _ = "";
          h !== void 0 && h.forEach(function(x) {
            x.length > 0 && (_ += "".concat(x, ","));
          }), u += "".concat(w).concat(y, '{content:"').concat(_, '"}').concat(ko);
        }, d = 0; d < c; d++) l(d);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return In(t);
  }, e.prototype.rehydrate = function() {
    !this.server && or && pi(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Se(Se({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Tl(o) : r ? new Ol(o) : new Rl(o);
    }(this.options), new xl(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (In(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(In(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(In(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Ml = /&/g, Pl = /^\s*\/\/.*$/gm;
function ta(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = ta(n.children, t)), n;
  });
}
function Il(e) {
  var t, n, r, o = $t, i = o.options, s = i === void 0 ? $t : i, c = o.plugins, u = c === void 0 ? Er : c, l = function(a, h, w) {
    return w.startsWith(n) && w.endsWith(n) && w.replaceAll(n, "").length > 0 ? ".".concat(t) : a;
  }, d = u.slice();
  d.push(function(a) {
    a.type === wr && a.value.includes("&") && (a.props[0] = a.props[0].replace(Ml, n).replace(r, l));
  }), s.prefix && d.push(tl), d.push(Qu);
  var f = function(a, h, w, y) {
    h === void 0 && (h = ""), w === void 0 && (w = ""), y === void 0 && (y = "&"), t = y, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var _ = a.replace(Pl, ""), x = Ku(w || h ? "".concat(w, " ").concat(h, " { ").concat(_, " }") : _);
    s.namespace && (x = ta(x, s.namespace));
    var N = [];
    return rr(x, Ju(d.concat(el(function(m) {
      return N.push(m);
    })))), N;
  };
  return f.hash = u.length ? u.reduce(function(a, h) {
    return h.name || Xt(15), ut(a, h.name);
  }, Xs).toString() : "", f;
}
var Dl = new ea(), co = Il(), na = ke.createContext({ shouldForwardProp: void 0, styleSheet: Dl, stylis: co });
na.Consumer;
ke.createContext(void 0);
function mi() {
  return H.useContext(na);
}
var yi = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = co);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Ro(this, function() {
      throw Xt(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = co), this.name + t.hash;
  }, e;
}(), $l = function(e) {
  return e >= "A" && e <= "Z";
};
function wi(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    $l(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var ra = function(e) {
  return e == null || e === !1 || e === "";
}, oa = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !ra(i) && (Array.isArray(i) && i.isCss || Lt(i) ? r.push("".concat(wi(o), ":"), i, ";") : jt(i) ? r.push.apply(r, Pt(Pt(["".concat(o, " {")], oa(i), !1), ["}"], !1)) : r.push("".concat(wi(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in nl || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function ht(e, t, n, r) {
  if (ra(e)) return [];
  if (Oo(e)) return [".".concat(e.styledComponentId)];
  if (Lt(e)) {
    if (!Lt(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof yi || jt(o) || o === null || console.error("".concat(Gs(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ht(o, t, n, r);
  }
  var i;
  return e instanceof yi ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : jt(e) ? oa(e) : Array.isArray(e) ? Array.prototype.concat.apply(Er, e.map(function(s) {
    return ht(s, t, n, r);
  })) : [e.toString()];
}
function Ll(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Lt(n) && !Oo(n)) return !1;
  }
  return !0;
}
var jl = Us(br), Hl = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Ll(t), this.componentId = n, this.baseHash = ut(jl, n), this.baseStyle = r, ea.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = lt(o, this.staticRulesId);
    else {
      var i = hi(ht(this.rules, t, n, r)), s = so(ut(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var c = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, c);
      }
      o = lt(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = ut(this.baseHash, r.hash), l = "", d = 0; d < this.rules.length; d++) {
        var f = this.rules[d];
        if (typeof f == "string") l += f, process.env.NODE_ENV !== "production" && (u = ut(u, f));
        else if (f) {
          var a = hi(ht(f, t, n, r));
          u = ut(u, a + d), l += a;
        }
      }
      if (l) {
        var h = so(u >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(l, ".".concat(h), void 0, this.componentId)), o = lt(o, h);
      }
    }
    return o;
  }, e;
}(), ia = ke.createContext(void 0);
ia.Consumer;
var Vr = {}, vi = /* @__PURE__ */ new Set();
function zl(e, t, n) {
  var r = Oo(e), o = e, i = !Br(e), s = t.attrs, c = s === void 0 ? Er : s, u = t.componentId, l = u === void 0 ? function(v, C) {
    var k = typeof v != "string" ? "sc" : ci(v);
    Vr[k] = (Vr[k] || 0) + 1;
    var S = "".concat(k, "-").concat(ul(br + k + Vr[k]));
    return C ? "".concat(C, "-").concat(S) : S;
  }(t.displayName, t.parentComponentId) : u, d = t.displayName, f = d === void 0 ? function(v) {
    return Br(v) ? "styled.".concat(v) : "Styled(".concat(Gs(v), ")");
  }(e) : d, a = t.displayName && t.componentId ? "".concat(ci(t.displayName), "-").concat(t.componentId) : t.componentId || l, h = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, w = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var y = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var _ = t.shouldForwardProp;
      w = function(v, C) {
        return y(v, C) && _(v, C);
      };
    } else w = y;
  }
  var x = new Hl(n, a, r ? o.componentStyle : void 0);
  function N(v, C) {
    return function(k, S, D) {
      var j = k.attrs, B = k.componentStyle, $ = k.defaultProps, F = k.foldedComponentIds, V = k.styledComponentId, b = k.target, P = ke.useContext(ia), O = mi(), T = k.shouldForwardProp || O.shouldForwardProp;
      process.env.NODE_ENV !== "production" && H.useDebugValue(V);
      var L = il(S, P, $) || $t, R = function(U, W, G) {
        for (var X, Q = Se(Se({}, W), { className: void 0, theme: G }), se = 0; se < U.length; se += 1) {
          var te = Lt(X = U[se]) ? X(Q) : X;
          for (var Z in te) Q[Z] = Z === "className" ? lt(Q[Z], te[Z]) : Z === "style" ? Se(Se({}, Q[Z]), te[Z]) : te[Z];
        }
        return W.className && (Q.className = lt(Q.className, W.className)), Q;
      }(j, S, L), p = R.as || b, E = {};
      for (var A in R) R[A] === void 0 || A[0] === "$" || A === "as" || A === "theme" && R.theme === L || (A === "forwardedAs" ? E.as = R.forwardedAs : T && !T(A, p) || (E[A] = R[A], T || process.env.NODE_ENV !== "development" || Lu(A) || vi.has(A) || !io.has(p) || (vi.add(A), console.warn('styled-components: it looks like an unknown prop "'.concat(A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var z = function(U, W) {
        var G = mi(), X = U.generateAndInjectStyles(W, G.styleSheet, G.stylis);
        return process.env.NODE_ENV !== "production" && H.useDebugValue(X), X;
      }(B, R);
      process.env.NODE_ENV !== "production" && k.warnTooManyClasses && k.warnTooManyClasses(z);
      var Y = lt(F, V);
      return z && (Y += " " + z), R.className && (Y += " " + R.className), E[Br(p) && !io.has(p) ? "class" : "className"] = Y, D && (E.ref = D), H.createElement(p, E);
    }(m, v, C);
  }
  N.displayName = f;
  var m = ke.forwardRef(N);
  return m.attrs = h, m.componentStyle = x, m.displayName = f, m.shouldForwardProp = w, m.foldedComponentIds = r ? lt(o.foldedComponentIds, o.styledComponentId) : "", m.styledComponentId = a, m.target = r ? o.target : e, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(v) {
    this._foldedDefaultProps = r ? function(C) {
      for (var k = [], S = 1; S < arguments.length; S++) k[S - 1] = arguments[S];
      for (var D = 0, j = k; D < j.length; D++) ao(C, j[D], !0);
      return C;
    }({}, o.defaultProps, v) : v;
  } }), process.env.NODE_ENV !== "production" && (ol(f, a), m.warnTooManyClasses = /* @__PURE__ */ function(v, C) {
    var k = {}, S = !1;
    return function(D) {
      if (!S && (k[D] = !0, Object.keys(k).length >= 200)) {
        var j = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(v).concat(j, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), S = !0, k = {};
      }
    };
  }(f, a)), Ro(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && Qs(m, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), m;
}
function xi(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var _i = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Bl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Lt(e) || jt(e)) return _i(ht(xi(Er, Pt([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? ht(r) : _i(ht(xi(r, t)));
}
function uo(e, t, n) {
  if (n === void 0 && (n = $t), !t) throw Xt(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Bl.apply(void 0, Pt([o], i, !1)));
  };
  return r.attrs = function(o) {
    return uo(e, t, Se(Se({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return uo(e, t, Se(Se({}, n), o));
  }, r;
}
var sa = function(e) {
  return uo(zl, e);
}, yn = sa;
io.forEach(function(e) {
  yn[e] = sa(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Dn = "__sc-".concat(mt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Dn] || (window[Dn] = 0), window[Dn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Dn] += 1);
const Vl = yn.div`
  height: 100vh;
  width: 100%;
`, Yl = {
  SheetWrapper: Vl
};
function xe(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = xe(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Fl = { value: () => {
} };
function Sr() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Jn(n);
}
function Jn(e) {
  this._ = e;
}
function Wl(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Jn.prototype = Sr.prototype = {
  constructor: Jn,
  on: function(e, t) {
    var n = this._, r = Wl(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = Xl(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = bi(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = bi(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Jn(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function Xl(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function bi(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Fl, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var lo = "http://www.w3.org/1999/xhtml";
const Ei = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: lo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Cr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ei.hasOwnProperty(t) ? { space: Ei[t], local: e } : e;
}
function Ul(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === lo && t.documentElement.namespaceURI === lo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Gl(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function aa(e) {
  var t = Cr(e);
  return (t.local ? Gl : Ul)(t);
}
function ql() {
}
function To(e) {
  return e == null ? ql : function() {
    return this.querySelector(e);
  };
}
function Kl(e) {
  typeof e != "function" && (e = To(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = new Array(s), u, l, d = 0; d < s; ++d)
      (u = i[d]) && (l = e.call(u, u.__data__, d, i)) && ("__data__" in u && (l.__data__ = u.__data__), c[d] = l);
  return new Oe(r, this._parents);
}
function Zl(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Ql() {
  return [];
}
function ca(e) {
  return e == null ? Ql : function() {
    return this.querySelectorAll(e);
  };
}
function Jl(e) {
  return function() {
    return Zl(e.apply(this, arguments));
  };
}
function ef(e) {
  typeof e == "function" ? e = Jl(e) : e = ca(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], c = s.length, u, l = 0; l < c; ++l)
      (u = s[l]) && (r.push(e.call(u, u.__data__, l, s)), o.push(u));
  return new Oe(r, o);
}
function ua(e) {
  return function() {
    return this.matches(e);
  };
}
function la(e) {
  return function(t) {
    return t.matches(e);
  };
}
var tf = Array.prototype.find;
function nf(e) {
  return function() {
    return tf.call(this.children, e);
  };
}
function rf() {
  return this.firstElementChild;
}
function of(e) {
  return this.select(e == null ? rf : nf(typeof e == "function" ? e : la(e)));
}
var sf = Array.prototype.filter;
function af() {
  return Array.from(this.children);
}
function cf(e) {
  return function() {
    return sf.call(this.children, e);
  };
}
function uf(e) {
  return this.selectAll(e == null ? af : cf(typeof e == "function" ? e : la(e)));
}
function lf(e) {
  typeof e != "function" && (e = ua(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && c.push(u);
  return new Oe(r, this._parents);
}
function fa(e) {
  return new Array(e.length);
}
function ff() {
  return new Oe(this._enter || this._groups.map(fa), this._parents);
}
function sr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
sr.prototype = {
  constructor: sr,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function df(e) {
  return function() {
    return e;
  };
}
function hf(e, t, n, r, o, i) {
  for (var s = 0, c, u = t.length, l = i.length; s < l; ++s)
    (c = t[s]) ? (c.__data__ = i[s], r[s] = c) : n[s] = new sr(e, i[s]);
  for (; s < u; ++s)
    (c = t[s]) && (o[s] = c);
}
function pf(e, t, n, r, o, i, s) {
  var c, u, l = /* @__PURE__ */ new Map(), d = t.length, f = i.length, a = new Array(d), h;
  for (c = 0; c < d; ++c)
    (u = t[c]) && (a[c] = h = s.call(u, u.__data__, c, t) + "", l.has(h) ? o[c] = u : l.set(h, u));
  for (c = 0; c < f; ++c)
    h = s.call(e, i[c], c, i) + "", (u = l.get(h)) ? (r[c] = u, u.__data__ = i[c], l.delete(h)) : n[c] = new sr(e, i[c]);
  for (c = 0; c < d; ++c)
    (u = t[c]) && l.get(a[c]) === u && (o[c] = u);
}
function gf(e) {
  return e.__data__;
}
function mf(e, t) {
  if (!arguments.length) return Array.from(this, gf);
  var n = t ? pf : hf, r = this._parents, o = this._groups;
  typeof e != "function" && (e = df(e));
  for (var i = o.length, s = new Array(i), c = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var d = r[l], f = o[l], a = f.length, h = yf(e.call(d, d && d.__data__, l, r)), w = h.length, y = c[l] = new Array(w), _ = s[l] = new Array(w), x = u[l] = new Array(a);
    n(d, f, y, _, x, h, t);
    for (var N = 0, m = 0, v, C; N < w; ++N)
      if (v = y[N]) {
        for (N >= m && (m = N + 1); !(C = _[m]) && ++m < w; ) ;
        v._next = C || null;
      }
  }
  return s = new Oe(s, r), s._enter = c, s._exit = u, s;
}
function yf(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wf() {
  return new Oe(this._exit || this._groups.map(fa), this._parents);
}
function vf(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function xf(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), c = new Array(o), u = 0; u < s; ++u)
    for (var l = n[u], d = r[u], f = l.length, a = c[u] = new Array(f), h, w = 0; w < f; ++w)
      (h = l[w] || d[w]) && (a[w] = h);
  for (; u < o; ++u)
    c[u] = n[u];
  return new Oe(c, this._parents);
}
function _f() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function bf(e) {
  e || (e = Ef);
  function t(f, a) {
    return f && a ? e(f.__data__, a.__data__) : !f - !a;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], c = s.length, u = o[i] = new Array(c), l, d = 0; d < c; ++d)
      (l = s[d]) && (u[d] = l);
    u.sort(t);
  }
  return new Oe(o, this._parents).order();
}
function Ef(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Sf() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Cf() {
  return Array.from(this);
}
function Nf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function kf() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Of() {
  return !this.node();
}
function Rf(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, c; i < s; ++i)
      (c = o[i]) && e.call(c, c.__data__, i, o);
  return this;
}
function Tf(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Af(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mf(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Pf(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function If(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Df(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function $f(e, t) {
  var n = Cr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Af : Tf : typeof t == "function" ? n.local ? Df : If : n.local ? Pf : Mf)(n, t));
}
function da(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Lf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function jf(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Hf(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function zf(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Lf : typeof t == "function" ? Hf : jf)(e, t, n ?? "")) : Ht(this.node(), e);
}
function Ht(e, t) {
  return e.style.getPropertyValue(t) || da(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Bf(e) {
  return function() {
    delete this[e];
  };
}
function Vf(e, t) {
  return function() {
    this[e] = t;
  };
}
function Yf(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ff(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Bf : typeof t == "function" ? Yf : Vf)(e, t)) : this.node()[e];
}
function ha(e) {
  return e.trim().split(/^|\s+/);
}
function Ao(e) {
  return e.classList || new pa(e);
}
function pa(e) {
  this._node = e, this._names = ha(e.getAttribute("class") || "");
}
pa.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function ga(e, t) {
  for (var n = Ao(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function ma(e, t) {
  for (var n = Ao(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Wf(e) {
  return function() {
    ga(this, e);
  };
}
function Xf(e) {
  return function() {
    ma(this, e);
  };
}
function Uf(e, t) {
  return function() {
    (t.apply(this, arguments) ? ga : ma)(this, e);
  };
}
function Gf(e, t) {
  var n = ha(e + "");
  if (arguments.length < 2) {
    for (var r = Ao(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Uf : t ? Wf : Xf)(n, t));
}
function qf() {
  this.textContent = "";
}
function Kf(e) {
  return function() {
    this.textContent = e;
  };
}
function Zf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Qf(e) {
  return arguments.length ? this.each(e == null ? qf : (typeof e == "function" ? Zf : Kf)(e)) : this.node().textContent;
}
function Jf() {
  this.innerHTML = "";
}
function ed(e) {
  return function() {
    this.innerHTML = e;
  };
}
function td(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function nd(e) {
  return arguments.length ? this.each(e == null ? Jf : (typeof e == "function" ? td : ed)(e)) : this.node().innerHTML;
}
function rd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function od() {
  return this.each(rd);
}
function id() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function sd() {
  return this.each(id);
}
function ad(e) {
  var t = typeof e == "function" ? e : aa(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function cd() {
  return null;
}
function ud(e, t) {
  var n = typeof e == "function" ? e : aa(e), r = t == null ? cd : typeof t == "function" ? t : To(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ld() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function fd() {
  return this.each(ld);
}
function dd() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function hd() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function pd(e) {
  return this.select(e ? hd : dd);
}
function gd(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function md(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function yd(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function wd(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function vd(e, t, n) {
  return function() {
    var r = this.__on, o, i = md(t);
    if (r) {
      for (var s = 0, c = r.length; s < c; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function xd(e, t, n) {
  var r = yd(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var u = 0, l = c.length, d; u < l; ++u)
        for (o = 0, d = c[u]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (c = t ? vd : wd, o = 0; o < i; ++o) this.each(c(r[o], t, n));
  return this;
}
function ya(e, t, n) {
  var r = da(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _d(e, t) {
  return function() {
    return ya(this, e, t);
  };
}
function bd(e, t) {
  return function() {
    return ya(this, e, t.apply(this, arguments));
  };
}
function Ed(e, t) {
  return this.each((typeof t == "function" ? bd : _d)(e, t));
}
function* Sd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var wa = [null];
function Oe(e, t) {
  this._groups = e, this._parents = t;
}
function wn() {
  return new Oe([[document.documentElement]], wa);
}
function Cd() {
  return this;
}
Oe.prototype = wn.prototype = {
  constructor: Oe,
  select: Kl,
  selectAll: ef,
  selectChild: of,
  selectChildren: uf,
  filter: lf,
  data: mf,
  enter: ff,
  exit: wf,
  join: vf,
  merge: xf,
  selection: Cd,
  order: _f,
  sort: bf,
  call: Sf,
  nodes: Cf,
  node: Nf,
  size: kf,
  empty: Of,
  each: Rf,
  attr: $f,
  style: zf,
  property: Ff,
  classed: Gf,
  text: Qf,
  html: nd,
  raise: od,
  lower: sd,
  append: ad,
  insert: ud,
  remove: fd,
  clone: pd,
  datum: gd,
  on: xd,
  dispatch: Ed,
  [Symbol.iterator]: Sd
};
function Ne(e) {
  return typeof e == "string" ? new Oe([[document.querySelector(e)]], [document.documentElement]) : new Oe([[e]], wa);
}
function Nd(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Me(e, t) {
  if (e = Nd(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const kd = { passive: !1 }, cn = { capture: !0, passive: !1 };
function Yr(e) {
  e.stopImmediatePropagation();
}
function At(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function va(e) {
  var t = e.document.documentElement, n = Ne(e).on("dragstart.drag", At, cn);
  "onselectstart" in t ? n.on("selectstart.drag", At, cn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function xa(e, t) {
  var n = e.document.documentElement, r = Ne(e).on("dragstart.drag", null);
  t && (r.on("click.drag", At, cn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const $n = (e) => () => e;
function fo(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: c,
  dx: u,
  dy: l,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: c, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
fo.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Od(e) {
  return !e.ctrlKey && !e.button;
}
function Rd() {
  return this.parentNode;
}
function Td(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Ad() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _a() {
  var e = Od, t = Rd, n = Td, r = Ad, o = {}, i = Sr("start", "drag", "end"), s = 0, c, u, l, d, f = 0;
  function a(v) {
    v.on("mousedown.drag", h).filter(r).on("touchstart.drag", _).on("touchmove.drag", x, kd).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(v, C) {
    if (!(d || !e.call(this, v, C))) {
      var k = m(this, t.call(this, v, C), v, C, "mouse");
      k && (Ne(v.view).on("mousemove.drag", w, cn).on("mouseup.drag", y, cn), va(v.view), Yr(v), l = !1, c = v.clientX, u = v.clientY, k("start", v));
    }
  }
  function w(v) {
    if (At(v), !l) {
      var C = v.clientX - c, k = v.clientY - u;
      l = C * C + k * k > f;
    }
    o.mouse("drag", v);
  }
  function y(v) {
    Ne(v.view).on("mousemove.drag mouseup.drag", null), xa(v.view, l), At(v), o.mouse("end", v);
  }
  function _(v, C) {
    if (e.call(this, v, C)) {
      var k = v.changedTouches, S = t.call(this, v, C), D = k.length, j, B;
      for (j = 0; j < D; ++j)
        (B = m(this, S, v, C, k[j].identifier, k[j])) && (Yr(v), B("start", v, k[j]));
    }
  }
  function x(v) {
    var C = v.changedTouches, k = C.length, S, D;
    for (S = 0; S < k; ++S)
      (D = o[C[S].identifier]) && (At(v), D("drag", v, C[S]));
  }
  function N(v) {
    var C = v.changedTouches, k = C.length, S, D;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), S = 0; S < k; ++S)
      (D = o[C[S].identifier]) && (Yr(v), D("end", v, C[S]));
  }
  function m(v, C, k, S, D, j) {
    var B = i.copy(), $ = Me(j || k, C), F, V, b;
    if ((b = n.call(v, new fo("beforestart", {
      sourceEvent: k,
      target: a,
      identifier: D,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), S)) != null)
      return F = b.x - $[0] || 0, V = b.y - $[1] || 0, function P(O, T, L) {
        var R = $, p;
        switch (O) {
          case "start":
            o[D] = P, p = s++;
            break;
          case "end":
            delete o[D], --s;
          // falls through
          case "drag":
            $ = Me(L || T, C), p = s;
            break;
        }
        B.call(
          O,
          v,
          new fo(O, {
            sourceEvent: T,
            subject: b,
            target: a,
            identifier: D,
            active: p,
            x: $[0] + F,
            y: $[1] + V,
            dx: $[0] - R[0],
            dy: $[1] - R[1],
            dispatch: B
          }),
          S
        );
      };
  }
  return a.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : $n(!!v), a) : e;
  }, a.container = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : $n(v), a) : t;
  }, a.subject = function(v) {
    return arguments.length ? (n = typeof v == "function" ? v : $n(v), a) : n;
  }, a.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : $n(!!v), a) : r;
  }, a.on = function() {
    var v = i.on.apply(i, arguments);
    return v === i ? a : v;
  }, a.clickDistance = function(v) {
    return arguments.length ? (f = (v = +v) * v, a) : Math.sqrt(f);
  }, a;
}
function Mo(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ba(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function vn() {
}
var un = 0.7, ar = 1 / un, Mt = "\\s*([+-]?\\d+)\\s*", ln = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", He = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Md = /^#([0-9a-f]{3,8})$/, Pd = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`), Id = new RegExp(`^rgb\\(${He},${He},${He}\\)$`), Dd = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${ln}\\)$`), $d = new RegExp(`^rgba\\(${He},${He},${He},${ln}\\)$`), Ld = new RegExp(`^hsl\\(${ln},${He},${He}\\)$`), jd = new RegExp(`^hsla\\(${ln},${He},${He},${ln}\\)$`), Si = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Mo(vn, fn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ci,
  // Deprecated! Use color.formatHex.
  formatHex: Ci,
  formatHex8: Hd,
  formatHsl: zd,
  formatRgb: Ni,
  toString: Ni
});
function Ci() {
  return this.rgb().formatHex();
}
function Hd() {
  return this.rgb().formatHex8();
}
function zd() {
  return Ea(this).formatHsl();
}
function Ni() {
  return this.rgb().formatRgb();
}
function fn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Md.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ki(t) : n === 3 ? new Ce(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ln(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ln(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Pd.exec(e)) ? new Ce(t[1], t[2], t[3], 1) : (t = Id.exec(e)) ? new Ce(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dd.exec(e)) ? Ln(t[1], t[2], t[3], t[4]) : (t = $d.exec(e)) ? Ln(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ld.exec(e)) ? Ti(t[1], t[2] / 100, t[3] / 100, 1) : (t = jd.exec(e)) ? Ti(t[1], t[2] / 100, t[3] / 100, t[4]) : Si.hasOwnProperty(e) ? ki(Si[e]) : e === "transparent" ? new Ce(NaN, NaN, NaN, 0) : null;
}
function ki(e) {
  return new Ce(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ln(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Ce(e, t, n, r);
}
function Bd(e) {
  return e instanceof vn || (e = fn(e)), e ? (e = e.rgb(), new Ce(e.r, e.g, e.b, e.opacity)) : new Ce();
}
function ho(e, t, n, r) {
  return arguments.length === 1 ? Bd(e) : new Ce(e, t, n, r ?? 1);
}
function Ce(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Mo(Ce, ho, ba(vn, {
  brighter(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Ce(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? un : Math.pow(un, e), new Ce(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ce(pt(this.r), pt(this.g), pt(this.b), cr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Oi,
  // Deprecated! Use color.formatHex.
  formatHex: Oi,
  formatHex8: Vd,
  formatRgb: Ri,
  toString: Ri
}));
function Oi() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`;
}
function Vd() {
  return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ri() {
  const e = cr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function cr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ft(e) {
  return e = pt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ti(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Pe(e, t, n, r);
}
function Ea(e) {
  if (e instanceof Pe) return new Pe(e.h, e.s, e.l, e.opacity);
  if (e instanceof vn || (e = fn(e)), !e) return new Pe();
  if (e instanceof Pe) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, c = i - o, u = (i + o) / 2;
  return c ? (t === i ? s = (n - r) / c + (n < r) * 6 : n === i ? s = (r - t) / c + 2 : s = (t - n) / c + 4, c /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : c = u > 0 && u < 1 ? 0 : s, new Pe(s, c, u, e.opacity);
}
function Yd(e, t, n, r) {
  return arguments.length === 1 ? Ea(e) : new Pe(e, t, n, r ?? 1);
}
function Pe(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Mo(Pe, Yd, ba(vn, {
  brighter(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Pe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? un : Math.pow(un, e), new Pe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Ce(
      Fr(e >= 240 ? e - 240 : e + 120, o, r),
      Fr(e, o, r),
      Fr(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Pe(Ai(this.h), jn(this.s), jn(this.l), cr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = cr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ai(this.h)}, ${jn(this.s) * 100}%, ${jn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ai(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function jn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Fr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Sa = (e) => () => e;
function Fd(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Wd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xd(e) {
  return (e = +e) == 1 ? Ca : function(t, n) {
    return n - t ? Wd(t, n, e) : Sa(isNaN(t) ? n : t);
  };
}
function Ca(e, t) {
  var n = t - e;
  return n ? Fd(e, n) : Sa(isNaN(e) ? t : e);
}
const Mi = function e(t) {
  var n = Xd(t);
  function r(o, i) {
    var s = n((o = ho(o)).r, (i = ho(i)).r), c = n(o.g, i.g), u = n(o.b, i.b), l = Ca(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = c(d), o.b = u(d), o.opacity = l(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function nt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var po = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Wr = new RegExp(po.source, "g");
function Ud(e) {
  return function() {
    return e;
  };
}
function Gd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qd(e, t) {
  var n = po.lastIndex = Wr.lastIndex = 0, r, o, i, s = -1, c = [], u = [];
  for (e = e + "", t = t + ""; (r = po.exec(e)) && (o = Wr.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), c[s] ? c[s] += i : c[++s] = i), (r = r[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, u.push({ i: s, x: nt(r, o) })), n = Wr.lastIndex;
  return n < t.length && (i = t.slice(n), c[s] ? c[s] += i : c[++s] = i), c.length < 2 ? u[0] ? Gd(u[0].x) : Ud(t) : (t = u.length, function(l) {
    for (var d = 0, f; d < t; ++d) c[(f = u[d]).i] = f.x(l);
    return c.join("");
  });
}
var Pi = 180 / Math.PI, go = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Na(e, t, n, r, o, i) {
  var s, c, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (c = Math.sqrt(n * n + r * r)) && (n /= c, r /= c, u /= c), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * Pi,
    skewX: Math.atan(u) * Pi,
    scaleX: s,
    scaleY: c
  };
}
var Hn;
function Kd(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? go : Na(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Zd(e) {
  return e == null || (Hn || (Hn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Hn.setAttribute("transform", e), !(e = Hn.transform.baseVal.consolidate())) ? go : (e = e.matrix, Na(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ka(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, d, f, a, h, w) {
    if (l !== f || d !== a) {
      var y = h.push("translate(", null, t, null, n);
      w.push({ i: y - 4, x: nt(l, f) }, { i: y - 2, x: nt(d, a) });
    } else (f || a) && h.push("translate(" + f + t + a + n);
  }
  function s(l, d, f, a) {
    l !== d ? (l - d > 180 ? d += 360 : d - l > 180 && (l += 360), a.push({ i: f.push(o(f) + "rotate(", null, r) - 2, x: nt(l, d) })) : d && f.push(o(f) + "rotate(" + d + r);
  }
  function c(l, d, f, a) {
    l !== d ? a.push({ i: f.push(o(f) + "skewX(", null, r) - 2, x: nt(l, d) }) : d && f.push(o(f) + "skewX(" + d + r);
  }
  function u(l, d, f, a, h, w) {
    if (l !== f || d !== a) {
      var y = h.push(o(h) + "scale(", null, ",", null, ")");
      w.push({ i: y - 4, x: nt(l, f) }, { i: y - 2, x: nt(d, a) });
    } else (f !== 1 || a !== 1) && h.push(o(h) + "scale(" + f + "," + a + ")");
  }
  return function(l, d) {
    var f = [], a = [];
    return l = e(l), d = e(d), i(l.translateX, l.translateY, d.translateX, d.translateY, f, a), s(l.rotate, d.rotate, f, a), c(l.skewX, d.skewX, f, a), u(l.scaleX, l.scaleY, d.scaleX, d.scaleY, f, a), l = d = null, function(h) {
      for (var w = -1, y = a.length, _; ++w < y; ) f[(_ = a[w]).i] = _.x(h);
      return f.join("");
    };
  };
}
var Qd = ka(Kd, "px, ", "px)", "deg)"), Jd = ka(Zd, ", ", ")", ")"), eh = 1e-12;
function Ii(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function th(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function nh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const rh = function e(t, n, r) {
  function o(i, s) {
    var c = i[0], u = i[1], l = i[2], d = s[0], f = s[1], a = s[2], h = d - c, w = f - u, y = h * h + w * w, _, x;
    if (y < eh)
      x = Math.log(a / l) / t, _ = function(S) {
        return [
          c + S * h,
          u + S * w,
          l * Math.exp(t * S * x)
        ];
      };
    else {
      var N = Math.sqrt(y), m = (a * a - l * l + r * y) / (2 * l * n * N), v = (a * a - l * l - r * y) / (2 * a * n * N), C = Math.log(Math.sqrt(m * m + 1) - m), k = Math.log(Math.sqrt(v * v + 1) - v);
      x = (k - C) / t, _ = function(S) {
        var D = S * x, j = Ii(C), B = l / (n * N) * (j * nh(t * D + C) - th(C));
        return [
          c + B * h,
          u + B * w,
          l * j / Ii(t * D + C)
        ];
      };
    }
    return _.duration = x * 1e3 * t / Math.SQRT2, _;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), c = s * s, u = c * c;
    return e(s, c, u);
  }, o;
}(Math.SQRT2, 2, 4);
var zt = 0, nn = 0, Zt = 0, Oa = 1e3, ur, rn, lr = 0, yt = 0, Nr = 0, dn = typeof performance == "object" && performance.now ? performance : Date, Ra = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Po() {
  return yt || (Ra(oh), yt = dn.now() + Nr);
}
function oh() {
  yt = 0;
}
function fr() {
  this._call = this._time = this._next = null;
}
fr.prototype = Ta.prototype = {
  constructor: fr,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Po() : +n) + (t == null ? 0 : +t), !this._next && rn !== this && (rn ? rn._next = this : ur = this, rn = this), this._call = e, this._time = n, mo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, mo());
  }
};
function Ta(e, t, n) {
  var r = new fr();
  return r.restart(e, t, n), r;
}
function ih() {
  Po(), ++zt;
  for (var e = ur, t; e; )
    (t = yt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --zt;
}
function Di() {
  yt = (lr = dn.now()) + Nr, zt = nn = 0;
  try {
    ih();
  } finally {
    zt = 0, ah(), yt = 0;
  }
}
function sh() {
  var e = dn.now(), t = e - lr;
  t > Oa && (Nr -= t, lr = e);
}
function ah() {
  for (var e, t = ur, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ur = n);
  rn = e, mo(r);
}
function mo(e) {
  if (!zt) {
    nn && (nn = clearTimeout(nn));
    var t = e - yt;
    t > 24 ? (e < 1 / 0 && (nn = setTimeout(Di, e - dn.now() - Nr)), Zt && (Zt = clearInterval(Zt))) : (Zt || (lr = dn.now(), Zt = setInterval(sh, Oa)), zt = 1, Ra(Di));
  }
}
function $i(e, t, n) {
  var r = new fr();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var ch = Sr("start", "end", "cancel", "interrupt"), uh = [], Aa = 0, Li = 1, yo = 2, er = 3, ji = 4, wo = 5, tr = 6;
function kr(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  lh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: ch,
    tween: uh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: Aa
  });
}
function Io(e, t) {
  var n = $e(e, t);
  if (n.state > Aa) throw new Error("too late; already scheduled");
  return n;
}
function ze(e, t) {
  var n = $e(e, t);
  if (n.state > er) throw new Error("too late; already running");
  return n;
}
function $e(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function lh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = Ta(i, 0, n.time);
  function i(l) {
    n.state = Li, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var d, f, a, h;
    if (n.state !== Li) return u();
    for (d in r)
      if (h = r[d], h.name === n.name) {
        if (h.state === er) return $i(s);
        h.state === ji ? (h.state = tr, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[d]) : +d < t && (h.state = tr, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[d]);
      }
    if ($i(function() {
      n.state === er && (n.state = ji, n.timer.restart(c, n.delay, n.time), c(l));
    }), n.state = yo, n.on.call("start", e, e.__data__, n.index, n.group), n.state === yo) {
      for (n.state = er, o = new Array(a = n.tween.length), d = 0, f = -1; d < a; ++d)
        (h = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++f] = h);
      o.length = f + 1;
    }
  }
  function c(l) {
    for (var d = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = wo, 1), f = -1, a = o.length; ++f < a; )
      o[f].call(e, d);
    n.state === wo && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = tr, n.timer.stop(), delete r[t];
    for (var l in r) return;
    delete e.__transition;
  }
}
function nr(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > yo && r.state < wo, r.state = tr, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function fh(e) {
  return this.each(function() {
    nr(this, e);
  });
}
function dh(e, t) {
  var n, r;
  return function() {
    var o = ze(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, c = r.length; s < c; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function hh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ze(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var c = { name: t, value: n }, u = 0, l = o.length; u < l; ++u)
        if (o[u].name === t) {
          o[u] = c;
          break;
        }
      u === l && o.push(c);
    }
    i.tween = o;
  };
}
function ph(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = $e(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? dh : hh)(n, e, t));
}
function Do(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = ze(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return $e(o, r).value[t];
  };
}
function Ma(e, t) {
  var n;
  return (typeof t == "number" ? nt : t instanceof fn ? Mi : (n = fn(t)) ? (t = n, Mi) : qd)(e, t);
}
function gh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function mh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function yh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function wh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function vh(e, t, n) {
  var r, o, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = c + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c)));
  };
}
function xh(e, t, n) {
  var r, o, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = c + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c)));
  };
}
function _h(e, t) {
  var n = Cr(e), r = n === "transform" ? Jd : Ma;
  return this.attrTween(e, typeof t == "function" ? (n.local ? xh : vh)(n, r, Do(this, "attr." + e, t)) : t == null ? (n.local ? mh : gh)(n) : (n.local ? wh : yh)(n, r, t));
}
function bh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Eh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Sh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Eh(e, i)), n;
  }
  return o._value = t, o;
}
function Ch(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bh(e, i)), n;
  }
  return o._value = t, o;
}
function Nh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Cr(e);
  return this.tween(n, (r.local ? Sh : Ch)(r, t));
}
function kh(e, t) {
  return function() {
    Io(this, e).delay = +t.apply(this, arguments);
  };
}
function Oh(e, t) {
  return t = +t, function() {
    Io(this, e).delay = t;
  };
}
function Rh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? kh : Oh)(t, e)) : $e(this.node(), t).delay;
}
function Th(e, t) {
  return function() {
    ze(this, e).duration = +t.apply(this, arguments);
  };
}
function Ah(e, t) {
  return t = +t, function() {
    ze(this, e).duration = t;
  };
}
function Mh(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Th : Ah)(t, e)) : $e(this.node(), t).duration;
}
function Ph(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ze(this, e).ease = t;
  };
}
function Ih(e) {
  var t = this._id;
  return arguments.length ? this.each(Ph(t, e)) : $e(this.node(), t).ease;
}
function Dh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ze(this, e).ease = n;
  };
}
function $h(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Dh(this._id, e));
}
function Lh(e) {
  typeof e != "function" && (e = ua(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && c.push(u);
  return new Xe(r, this._parents, this._name, this._id);
}
function jh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), c = 0; c < i; ++c)
    for (var u = t[c], l = n[c], d = u.length, f = s[c] = new Array(d), a, h = 0; h < d; ++h)
      (a = u[h] || l[h]) && (f[h] = a);
  for (; c < r; ++c)
    s[c] = t[c];
  return new Xe(s, this._parents, this._name, this._id);
}
function Hh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function zh(e, t, n) {
  var r, o, i = Hh(t) ? Io : ze;
  return function() {
    var s = i(this, e), c = s.on;
    c !== r && (o = (r = c).copy()).on(t, n), s.on = o;
  };
}
function Bh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? $e(this.node(), n).on.on(e) : this.each(zh(n, e, t));
}
function Vh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Yh() {
  return this.on("end.remove", Vh(this._id));
}
function Fh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = To(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var c = r[s], u = c.length, l = i[s] = new Array(u), d, f, a = 0; a < u; ++a)
      (d = c[a]) && (f = e.call(d, d.__data__, a, c)) && ("__data__" in d && (f.__data__ = d.__data__), l[a] = f, kr(l[a], t, n, a, l, $e(d, n)));
  return new Xe(i, this._parents, t, n);
}
function Wh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ca(e));
  for (var r = this._groups, o = r.length, i = [], s = [], c = 0; c < o; ++c)
    for (var u = r[c], l = u.length, d, f = 0; f < l; ++f)
      if (d = u[f]) {
        for (var a = e.call(d, d.__data__, f, u), h, w = $e(d, n), y = 0, _ = a.length; y < _; ++y)
          (h = a[y]) && kr(h, t, n, y, a, w);
        i.push(a), s.push(d);
      }
  return new Xe(i, s, t, n);
}
var Xh = wn.prototype.constructor;
function Uh() {
  return new Xh(this._groups, this._parents);
}
function Gh(e, t) {
  var n, r, o;
  return function() {
    var i = Ht(this, e), s = (this.style.removeProperty(e), Ht(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function Pa(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function qh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Ht(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Kh(e, t, n) {
  var r, o, i;
  return function() {
    var s = Ht(this, e), c = n(this), u = c + "";
    return c == null && (u = c = (this.style.removeProperty(e), Ht(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c));
  };
}
function Zh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, c;
  return function() {
    var u = ze(this, e), l = u.on, d = u.value[i] == null ? c || (c = Pa(t)) : void 0;
    (l !== n || o !== d) && (r = (n = l).copy()).on(s, o = d), u.on = r;
  };
}
function Qh(e, t, n) {
  var r = (e += "") == "transform" ? Qd : Ma;
  return t == null ? this.styleTween(e, Gh(e, r)).on("end.style." + e, Pa(e)) : typeof t == "function" ? this.styleTween(e, Kh(e, r, Do(this, "style." + e, t))).each(Zh(this._id, e)) : this.styleTween(e, qh(e, r, t), n).on("end.style." + e, null);
}
function Jh(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function ep(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Jh(e, s, n)), r;
  }
  return i._value = t, i;
}
function tp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, ep(e, t, n ?? ""));
}
function np(e) {
  return function() {
    this.textContent = e;
  };
}
function rp(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function op(e) {
  return this.tween("text", typeof e == "function" ? rp(Do(this, "text", e)) : np(e == null ? "" : e + ""));
}
function ip(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function sp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && ip(o)), t;
  }
  return r._value = e, r;
}
function ap(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, sp(e));
}
function cp() {
  for (var e = this._name, t = this._id, n = Ia(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], c = s.length, u, l = 0; l < c; ++l)
      if (u = s[l]) {
        var d = $e(u, t);
        kr(u, e, n, l, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Xe(r, this._parents, e, n);
}
function up() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var c = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = ze(this, r), d = l.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(c), t._.interrupt.push(c), t._.end.push(u)), l.on = t;
    }), o === 0 && i();
  });
}
var lp = 0;
function Xe(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ia() {
  return ++lp;
}
var Ve = wn.prototype;
Xe.prototype = {
  constructor: Xe,
  select: Fh,
  selectAll: Wh,
  selectChild: Ve.selectChild,
  selectChildren: Ve.selectChildren,
  filter: Lh,
  merge: jh,
  selection: Uh,
  transition: cp,
  call: Ve.call,
  nodes: Ve.nodes,
  node: Ve.node,
  size: Ve.size,
  empty: Ve.empty,
  each: Ve.each,
  on: Bh,
  attr: _h,
  attrTween: Nh,
  style: Qh,
  styleTween: tp,
  text: op,
  textTween: ap,
  remove: Yh,
  tween: ph,
  delay: Rh,
  duration: Mh,
  ease: Ih,
  easeVarying: $h,
  end: up,
  [Symbol.iterator]: Ve[Symbol.iterator]
};
function fp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var dp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: fp
};
function hp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function pp(e) {
  var t, n;
  e instanceof Xe ? (t = e._id, e = e._name) : (t = Ia(), (n = dp).time = Po(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], c = s.length, u, l = 0; l < c; ++l)
      (u = s[l]) && kr(u, e, t, l, s, n || hp(u, t));
  return new Xe(r, this._parents, e, t);
}
wn.prototype.interrupt = fh;
wn.prototype.transition = pp;
const zn = (e) => () => e;
function gp(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function Fe(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Fe.prototype = {
  constructor: Fe,
  scale: function(e) {
    return e === 1 ? this : new Fe(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Fe(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Or = new Fe(1, 0, 0);
Da.prototype = Fe.prototype;
function Da(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Or;
  return e.__zoom;
}
function Xr(e) {
  e.stopImmediatePropagation();
}
function Qt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function mp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function yp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Hi() {
  return this.__zoom || Or;
}
function wp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function vp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function xp(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function $a() {
  var e = mp, t = yp, n = xp, r = wp, o = vp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, u = rh, l = Sr("start", "zoom", "end"), d, f, a, h = 500, w = 150, y = 0, _ = 10;
  function x(b) {
    b.property("__zoom", Hi).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", j).on("dblclick.zoom", B).filter(o).on("touchstart.zoom", $).on("touchmove.zoom", F).on("touchend.zoom touchcancel.zoom", V).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(b, P, O, T) {
    var L = b.selection ? b.selection() : b;
    L.property("__zoom", Hi), b !== L ? C(b, P, O, T) : L.interrupt().each(function() {
      k(this, arguments).event(T).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, x.scaleBy = function(b, P, O, T) {
    x.scaleTo(b, function() {
      var L = this.__zoom.k, R = typeof P == "function" ? P.apply(this, arguments) : P;
      return L * R;
    }, O, T);
  }, x.scaleTo = function(b, P, O, T) {
    x.transform(b, function() {
      var L = t.apply(this, arguments), R = this.__zoom, p = O == null ? v(L) : typeof O == "function" ? O.apply(this, arguments) : O, E = R.invert(p), A = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(m(N(R, A), p, E), L, s);
    }, O, T);
  }, x.translateBy = function(b, P, O, T) {
    x.transform(b, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof O == "function" ? O.apply(this, arguments) : O
      ), t.apply(this, arguments), s);
    }, null, T);
  }, x.translateTo = function(b, P, O, T, L) {
    x.transform(b, function() {
      var R = t.apply(this, arguments), p = this.__zoom, E = T == null ? v(R) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Or.translate(E[0], E[1]).scale(p.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof O == "function" ? -O.apply(this, arguments) : -O
      ), R, s);
    }, T, L);
  };
  function N(b, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === b.k ? b : new Fe(P, b.x, b.y);
  }
  function m(b, P, O) {
    var T = P[0] - O[0] * b.k, L = P[1] - O[1] * b.k;
    return T === b.x && L === b.y ? b : new Fe(b.k, T, L);
  }
  function v(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function C(b, P, O, T) {
    b.on("start.zoom", function() {
      k(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var L = this, R = arguments, p = k(L, R).event(T), E = t.apply(L, R), A = O == null ? v(E) : typeof O == "function" ? O.apply(L, R) : O, z = Math.max(E[1][0] - E[0][0], E[1][1] - E[0][1]), Y = L.__zoom, U = typeof P == "function" ? P.apply(L, R) : P, W = u(Y.invert(A).concat(z / Y.k), U.invert(A).concat(z / U.k));
      return function(G) {
        if (G === 1) G = U;
        else {
          var X = W(G), Q = z / X[2];
          G = new Fe(Q, A[0] - X[0] * Q, A[1] - X[1] * Q);
        }
        p.zoom(null, G);
      };
    });
  }
  function k(b, P, O) {
    return !O && b.__zooming || new S(b, P);
  }
  function S(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, P), this.taps = 0;
  }
  S.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, P) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var P = Ne(this.that).datum();
      l.call(
        b,
        this.that,
        new gp(b, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: l
        }),
        P
      );
    }
  };
  function D(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var O = k(this, P).event(b), T = this.__zoom, L = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), R = Me(b);
    if (O.wheel)
      (O.mouse[0][0] !== R[0] || O.mouse[0][1] !== R[1]) && (O.mouse[1] = T.invert(O.mouse[0] = R)), clearTimeout(O.wheel);
    else {
      if (T.k === L) return;
      O.mouse = [R, T.invert(R)], nr(this), O.start();
    }
    Qt(b), O.wheel = setTimeout(p, w), O.zoom("mouse", n(m(N(T, L), O.mouse[0], O.mouse[1]), O.extent, s));
    function p() {
      O.wheel = null, O.end();
    }
  }
  function j(b, ...P) {
    if (a || !e.apply(this, arguments)) return;
    var O = b.currentTarget, T = k(this, P, !0).event(b), L = Ne(b.view).on("mousemove.zoom", A, !0).on("mouseup.zoom", z, !0), R = Me(b, O), p = b.clientX, E = b.clientY;
    va(b.view), Xr(b), T.mouse = [R, this.__zoom.invert(R)], nr(this), T.start();
    function A(Y) {
      if (Qt(Y), !T.moved) {
        var U = Y.clientX - p, W = Y.clientY - E;
        T.moved = U * U + W * W > y;
      }
      T.event(Y).zoom("mouse", n(m(T.that.__zoom, T.mouse[0] = Me(Y, O), T.mouse[1]), T.extent, s));
    }
    function z(Y) {
      L.on("mousemove.zoom mouseup.zoom", null), xa(Y.view, T.moved), Qt(Y), T.event(Y).end();
    }
  }
  function B(b, ...P) {
    if (e.apply(this, arguments)) {
      var O = this.__zoom, T = Me(b.changedTouches ? b.changedTouches[0] : b, this), L = O.invert(T), R = O.k * (b.shiftKey ? 0.5 : 2), p = n(m(N(O, R), T, L), t.apply(this, P), s);
      Qt(b), c > 0 ? Ne(this).transition().duration(c).call(C, p, T, b) : Ne(this).call(x.transform, p, T, b);
    }
  }
  function $(b, ...P) {
    if (e.apply(this, arguments)) {
      var O = b.touches, T = O.length, L = k(this, P, b.changedTouches.length === T).event(b), R, p, E, A;
      for (Xr(b), p = 0; p < T; ++p)
        E = O[p], A = Me(E, this), A = [A, this.__zoom.invert(A), E.identifier], L.touch0 ? !L.touch1 && L.touch0[2] !== A[2] && (L.touch1 = A, L.taps = 0) : (L.touch0 = A, R = !0, L.taps = 1 + !!d);
      d && (d = clearTimeout(d)), R && (L.taps < 2 && (f = A[0], d = setTimeout(function() {
        d = null;
      }, h)), nr(this), L.start());
    }
  }
  function F(b, ...P) {
    if (this.__zooming) {
      var O = k(this, P).event(b), T = b.changedTouches, L = T.length, R, p, E, A;
      for (Qt(b), R = 0; R < L; ++R)
        p = T[R], E = Me(p, this), O.touch0 && O.touch0[2] === p.identifier ? O.touch0[0] = E : O.touch1 && O.touch1[2] === p.identifier && (O.touch1[0] = E);
      if (p = O.that.__zoom, O.touch1) {
        var z = O.touch0[0], Y = O.touch0[1], U = O.touch1[0], W = O.touch1[1], G = (G = U[0] - z[0]) * G + (G = U[1] - z[1]) * G, X = (X = W[0] - Y[0]) * X + (X = W[1] - Y[1]) * X;
        p = N(p, Math.sqrt(G / X)), E = [(z[0] + U[0]) / 2, (z[1] + U[1]) / 2], A = [(Y[0] + W[0]) / 2, (Y[1] + W[1]) / 2];
      } else if (O.touch0) E = O.touch0[0], A = O.touch0[1];
      else return;
      O.zoom("touch", n(m(p, E, A), O.extent, s));
    }
  }
  function V(b, ...P) {
    if (this.__zooming) {
      var O = k(this, P).event(b), T = b.changedTouches, L = T.length, R, p;
      for (Xr(b), a && clearTimeout(a), a = setTimeout(function() {
        a = null;
      }, h), R = 0; R < L; ++R)
        p = T[R], O.touch0 && O.touch0[2] === p.identifier ? delete O.touch0 : O.touch1 && O.touch1[2] === p.identifier && delete O.touch1;
      if (O.touch1 && !O.touch0 && (O.touch0 = O.touch1, delete O.touch1), O.touch0) O.touch0[1] = this.__zoom.invert(O.touch0[0]);
      else if (O.end(), O.taps === 2 && (p = Me(p, this), Math.hypot(f[0] - p[0], f[1] - p[1]) < _)) {
        var E = Ne(this).on("dblclick.zoom");
        E && E.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : zn(+b), x) : r;
  }, x.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : zn(!!b), x) : e;
  }, x.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : zn(!!b), x) : o;
  }, x.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : zn([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), x) : t;
  }, x.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], x) : [i[0], i[1]];
  }, x.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], x) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, x.constrain = function(b) {
    return arguments.length ? (n = b, x) : n;
  }, x.duration = function(b) {
    return arguments.length ? (c = +b, x) : c;
  }, x.interpolate = function(b) {
    return arguments.length ? (u = b, x) : u;
  }, x.on = function() {
    var b = l.on.apply(l, arguments);
    return b === l ? x : b;
  }, x.clickDistance = function(b) {
    return arguments.length ? (y = (b = +b) * b, x) : Math.sqrt(y);
  }, x.tapDistance = function(b) {
    return arguments.length ? (_ = +b, x) : _;
  }, x;
}
const Re = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, hn = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], La = ["Enter", " ", "Escape"];
var wt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(wt || (wt = {}));
var gt;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(gt || (gt = {}));
var Bt;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(Bt || (Bt = {}));
const ja = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var rt;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(rt || (rt = {}));
var st;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(st || (st = {}));
var ee;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(ee || (ee = {}));
const zi = {
  [ee.Left]: ee.Right,
  [ee.Right]: ee.Left,
  [ee.Top]: ee.Bottom,
  [ee.Bottom]: ee.Top
};
function Ha(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const za = (e) => "id" in e && "source" in e && "target" in e, _p = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), $o = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), xn = (e, t = [0, 0]) => {
  const { width: n, height: r } = Ue(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, bp = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : $o(o) ? o : t.nodeLookup.get(o.id));
    const c = s ? dr(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Rr(r, c);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Tr(n);
}, _n = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = dr(r);
      n = Rr(n, o);
    }
  }), Tr(n);
}, Ba = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const c = {
    ...bn(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, u = [];
  for (const l of e.values()) {
    const { measured: d, selectable: f = !0, hidden: a = !1 } = l;
    if (s && !f || a)
      continue;
    const h = d.width ?? l.width ?? l.initialWidth ?? null, w = d.height ?? l.height ?? l.initialHeight ?? null, y = pn(c, Yt(l)), _ = (h ?? 0) * (w ?? 0), x = i && y > 0;
    (!l.internals.handleBounds || x || y >= _ || l.dragging) && u.push(l);
  }
  return u;
}, Ep = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Sp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Cp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const c = Sp(e, s), u = _n(c), l = Lo(u, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function Va({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), c = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: l } = c ? c.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let f = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!c)
      i == null || i("005", Re.error005());
    else {
      const h = c.measured.width, w = c.measured.height;
      h && w && (f = [
        [u, l],
        [u + h, l + w]
      ]);
    }
  else c && Ft(s.extent) && (f = [
    [s.extent[0][0] + u, s.extent[0][1] + l],
    [s.extent[1][0] + u, s.extent[1][1] + l]
  ]);
  const a = Ft(f) ? vt(t, f, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", Re.error015())), {
    position: {
      x: a.x - u + (s.measured.width ?? 0) * d[0],
      y: a.y - l + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: a
  };
}
async function Np({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((a) => a.id)), s = [];
  for (const a of n) {
    if (a.deletable === !1)
      continue;
    const h = i.has(a.id), w = !h && a.parentId && s.find((y) => y.id === a.parentId);
    (h || w) && s.push(a);
  }
  const c = new Set(t.map((a) => a.id)), u = r.filter((a) => a.deletable !== !1), d = Ep(s, u);
  for (const a of u)
    c.has(a.id) && !d.find((w) => w.id === a.id) && d.push(a);
  if (!o)
    return {
      edges: d,
      nodes: s
    };
  const f = await o({
    nodes: s,
    edges: d
  });
  return typeof f == "boolean" ? f ? { edges: d, nodes: s } : { edges: [], nodes: [] } : f;
}
const Vt = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), vt = (e = { x: 0, y: 0 }, t, n) => ({
  x: Vt(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Vt(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Ya(e, t, n) {
  const { width: r, height: o } = Ue(n), { x: i, y: s } = n.internals.positionAbsolute;
  return vt(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const Bi = (e, t, n) => e < t ? Vt(Math.abs(e - t), 1, t) / t : e > n ? -Vt(Math.abs(e - n), 1, t) / t : 0, Fa = (e, t, n = 15, r = 40) => {
  const o = Bi(e.x, r, t.width - r) * n, i = Bi(e.y, r, t.height - r) * n;
  return [o, i];
}, Rr = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), vo = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Tr = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Yt = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = $o(e) ? e.internals.positionAbsolute : xn(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, dr = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = $o(e) ? e.internals.positionAbsolute : xn(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Wa = (e, t) => Tr(Rr(vo(e), vo(t))), pn = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Vi = (e) => Ie(e.width) && Ie(e.height) && Ie(e.x) && Ie(e.y), Ie = (e) => !isNaN(e) && isFinite(e), Xa = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, Ar = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), bn = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const c = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Ar(c, s) : c;
}, hr = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function Ot(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function kp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Ot(e, n), o = Ot(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = Ot(e.top ?? e.y ?? 0, n), o = Ot(e.bottom ?? e.y ?? 0, n), i = Ot(e.left ?? e.x ?? 0, t), s = Ot(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Op(e, t, n, r, o, i) {
  const { x: s, y: c } = hr(e, [t, n, r]), { x: u, y: l } = hr({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - u, f = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(c),
    right: Math.floor(d),
    bottom: Math.floor(f)
  };
}
const Lo = (e, t, n, r, o, i) => {
  const s = kp(i, t, n), c = (t - s.x) / e.width, u = (n - s.y) / e.height, l = Math.min(c, u), d = Vt(l, r, o), f = e.x + e.width / 2, a = e.y + e.height / 2, h = t / 2 - f * d, w = n / 2 - a * d, y = Op(e, h, w, d, t, n), _ = {
    left: Math.min(y.left - s.left, 0),
    top: Math.min(y.top - s.top, 0),
    right: Math.min(y.right - s.right, 0),
    bottom: Math.min(y.bottom - s.bottom, 0)
  };
  return {
    x: h - _.left + _.right,
    y: w - _.top + _.bottom,
    zoom: d
  };
}, pr = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Ft(e) {
  return e !== void 0 && e !== "parent";
}
function Ue(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Ua(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Ga(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const c = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * c[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * c[1];
  }
  return i;
}
function Yi(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Rp() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function sn(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = We(e), c = bn({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: l } = n ? Ar(c, t) : c;
  return {
    xSnapped: u,
    ySnapped: l,
    ...c
  };
}
const jo = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), qa = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Tp = ["INPUT", "SELECT", "TEXTAREA"];
function Ka(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Tp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Za = (e) => "clientX" in e, We = (e, t) => {
  var i, s;
  const n = Za(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Fi = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const c = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (c.left - n.left) / r,
      y: (c.top - n.top) / r,
      ...jo(s)
    };
  });
};
function Qa({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: c }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + c * 0.375 + r * 0.125, d = Math.abs(u - e), f = Math.abs(l - t);
  return [u, l, d, f];
}
function Bn(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Wi({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case ee.Left:
      return [t - Bn(t - r, i), n];
    case ee.Right:
      return [t + Bn(r - t, i), n];
    case ee.Top:
      return [t, n - Bn(n - o, i)];
    case ee.Bottom:
      return [t, n + Bn(o - n, i)];
  }
}
function Ja({ sourceX: e, sourceY: t, sourcePosition: n = ee.Bottom, targetX: r, targetY: o, targetPosition: i = ee.Top, curvature: s = 0.25 }) {
  const [c, u] = Wi({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [l, d] = Wi({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [f, a, h, w] = Qa({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: c,
    sourceControlY: u,
    targetControlX: l,
    targetControlY: d
  });
  return [
    `M${e},${t} C${c},${u} ${l},${d} ${r},${o}`,
    f,
    a,
    h,
    w
  ];
}
function ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, c = r < t ? r + s : r - s;
  return [i, c, o, s];
}
function Ap({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function Mp({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Rr(dr(e), dr(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return pn(s, Tr(i)) > 0;
}
const Pp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, Ip = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), tc = (e, t) => {
  if (!e.source || !e.target)
    return Xa("006", Re.error006()), t;
  let n;
  return za(e) ? n = { ...e } : n = {
    ...e,
    id: Pp(e)
  }, Ip(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Ho({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, c] = ec({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, c];
}
const Xi = {
  [ee.Left]: { x: -1, y: 0 },
  [ee.Right]: { x: 1, y: 0 },
  [ee.Top]: { x: 0, y: -1 },
  [ee.Bottom]: { x: 0, y: 1 }
}, Dp = ({ source: e, sourcePosition: t = ee.Bottom, target: n }) => t === ee.Left || t === ee.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Ui = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function $p({ source: e, sourcePosition: t = ee.Bottom, target: n, targetPosition: r = ee.Top, center: o, offset: i }) {
  const s = Xi[t], c = Xi[r], u = { x: e.x + s.x * i, y: e.y + s.y * i }, l = { x: n.x + c.x * i, y: n.y + c.y * i }, d = Dp({
    source: u,
    sourcePosition: t,
    target: l
  }), f = d.x !== 0 ? "x" : "y", a = d[f];
  let h = [], w, y;
  const _ = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [N, m, v, C] = ec({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[f] * c[f] === -1) {
    w = o.x ?? N, y = o.y ?? m;
    const S = [
      { x: w, y: u.y },
      { x: w, y: l.y }
    ], D = [
      { x: u.x, y },
      { x: l.x, y }
    ];
    s[f] === a ? h = f === "x" ? S : D : h = f === "x" ? D : S;
  } else {
    const S = [{ x: u.x, y: l.y }], D = [{ x: l.x, y: u.y }];
    if (f === "x" ? h = s.x === a ? D : S : h = s.y === a ? S : D, t === r) {
      const V = Math.abs(e[f] - n[f]);
      if (V <= i) {
        const b = Math.min(i - 1, i - V);
        s[f] === a ? _[f] = (u[f] > e[f] ? -1 : 1) * b : x[f] = (l[f] > n[f] ? -1 : 1) * b;
      }
    }
    if (t !== r) {
      const V = f === "x" ? "y" : "x", b = s[f] === c[V], P = u[V] > l[V], O = u[V] < l[V];
      (s[f] === 1 && (!b && P || b && O) || s[f] !== 1 && (!b && O || b && P)) && (h = f === "x" ? S : D);
    }
    const j = { x: u.x + _.x, y: u.y + _.y }, B = { x: l.x + x.x, y: l.y + x.y }, $ = Math.max(Math.abs(j.x - h[0].x), Math.abs(B.x - h[0].x)), F = Math.max(Math.abs(j.y - h[0].y), Math.abs(B.y - h[0].y));
    $ >= F ? (w = (j.x + B.x) / 2, y = h[0].y) : (w = h[0].x, y = (j.y + B.y) / 2);
  }
  return [[
    e,
    { x: u.x + _.x, y: u.y + _.y },
    ...h,
    { x: l.x + x.x, y: l.y + x.y },
    n
  ], w, y, v, C];
}
function Lp(e, t, n, r) {
  const o = Math.min(Ui(e, t) / 2, Ui(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const l = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * l},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const c = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * c},${s}`;
}
function xo({ sourceX: e, sourceY: t, sourcePosition: n = ee.Bottom, targetX: r, targetY: o, targetPosition: i = ee.Top, borderRadius: s = 5, centerX: c, centerY: u, offset: l = 20 }) {
  const [d, f, a, h, w] = $p({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: c, y: u },
    offset: l
  });
  return [d.reduce((_, x, N) => {
    let m = "";
    return N > 0 && N < d.length - 1 ? m = Lp(d[N - 1], x, d[N + 1], s) : m = `${N === 0 ? "M" : "L"}${x.x} ${x.y}`, _ += m, _;
  }, ""), f, a, h, w];
}
function Gi(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function jp(e) {
  var f;
  const { sourceNode: t, targetNode: n } = e;
  if (!Gi(t) || !Gi(n))
    return null;
  const r = t.internals.handleBounds || qi(t.handles), o = n.internals.handleBounds || qi(n.handles), i = Ki((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Ki(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === wt.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (f = e.onError) == null || f.call(e, "008", Re.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const c = (i == null ? void 0 : i.position) || ee.Bottom, u = (s == null ? void 0 : s.position) || ee.Top, l = gn(t, i, c), d = gn(n, s, u);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: c,
    targetPosition: u
  };
}
function qi(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function gn(e, t, n = ee.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: c } = t ?? Ue(e);
  if (r)
    return { x: o + s / 2, y: i + c / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case ee.Top:
      return { x: o + s / 2, y: i };
    case ee.Right:
      return { x: o + s, y: i + c / 2 };
    case ee.Bottom:
      return { x: o + s / 2, y: i + c };
    case ee.Left:
      return { x: o, y: i + c / 2 };
  }
}
function Ki(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _o(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Hp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, c) => ([c.markerStart || r, c.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const l = _o(u, t);
      i.has(l) || (s.push({ id: l, color: u.color || n, ...u }), i.add(l));
    }
  }), s), []).sort((s, c) => s.id.localeCompare(c.id));
}
const zo = {
  nodeOrigin: [0, 0],
  nodeExtent: hn,
  elevateNodesOnSelect: !0,
  defaults: {}
}, zp = {
  ...zo,
  checkEquality: !0
};
function Bo(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Bp(e, t, n) {
  const r = Bo(zo, n);
  for (const o of e.values())
    if (o.parentId)
      Vo(o, e, t, r);
    else {
      const i = xn(o, r.nodeOrigin), s = Ft(o.extent) ? o.extent : r.nodeExtent, c = vt(i, s, Ue(o));
      o.internals.positionAbsolute = c;
    }
}
function bo(e, t, n, r) {
  var u, l;
  const o = Bo(zp, r);
  let i = e.length > 0;
  const s = new Map(t), c = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const d of e) {
    let f = s.get(d.id);
    if (o.checkEquality && d === (f == null ? void 0 : f.internals.userNode))
      t.set(d.id, f);
    else {
      const a = xn(d, o.nodeOrigin), h = Ft(d.extent) ? d.extent : o.nodeExtent, w = vt(a, h, Ue(d));
      f = {
        ...o.defaults,
        ...d,
        measured: {
          width: (u = d.measured) == null ? void 0 : u.width,
          height: (l = d.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: w,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: d.measured ? f == null ? void 0 : f.internals.handleBounds : void 0,
          z: nc(d, c),
          userNode: d
        }
      }, t.set(d.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (i = !1), d.parentId && Vo(f, t, n, r);
  }
  return i;
}
function Vp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Vo(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = Bo(zo, r), c = e.parentId, u = t.get(c);
  if (!u) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Vp(e, n);
  const l = o ? 1e3 : 0, { x: d, y: f, z: a } = Yp(e, u, i, s, l), { positionAbsolute: h } = e.internals, w = d !== h.x || f !== h.y;
  (w || a !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: w ? { x: d, y: f } : h,
      z: a
    }
  });
}
function nc(e, t) {
  return (Ie(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Yp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, c = Ue(e), u = xn(e, n), l = Ft(e.extent) ? vt(u, e.extent, c) : u;
  let d = vt({ x: i + l.x, y: s + l.y }, r, c);
  e.extent === "parent" && (d = Ya(d, c, t));
  const f = nc(e, o), a = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: a > f ? a : f
  };
}
function Yo(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const c of e) {
    const u = t.get(c.parentId);
    if (!u)
      continue;
    const l = ((s = i.get(c.parentId)) == null ? void 0 : s.expandedRect) ?? Yt(u), d = Wa(l, c.rect);
    i.set(c.parentId, { expandedRect: d, parent: u });
  }
  return i.size > 0 && i.forEach(({ expandedRect: c, parent: u }, l) => {
    var m;
    const d = u.internals.positionAbsolute, f = Ue(u), a = u.origin ?? r, h = c.x < d.x ? Math.round(Math.abs(d.x - c.x)) : 0, w = c.y < d.y ? Math.round(Math.abs(d.y - c.y)) : 0, y = Math.max(f.width, Math.round(c.width)), _ = Math.max(f.height, Math.round(c.height)), x = (y - f.width) * a[0], N = (_ - f.height) * a[1];
    (h > 0 || w > 0 || x || N) && (o.push({
      id: l,
      type: "position",
      position: {
        x: u.position.x - h + x,
        y: u.position.y - w + N
      }
    }), (m = n.get(l)) == null || m.forEach((v) => {
      e.some((C) => C.id === v.id) || o.push({
        id: v.id,
        type: "position",
        position: {
          x: v.position.x + h,
          y: v.position.y + w
        }
      });
    })), (f.width < c.width || f.height < c.height || h || w) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: y + (h ? a[0] * h - x : 0),
        height: _ + (w ? a[1] * w - N : 0)
      }
    });
  }), o;
}
function Fp(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let c = !1;
  if (!s)
    return { changes: [], updatedInternals: c };
  const u = [], l = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(l.transform), f = [];
  for (const a of e.values()) {
    const h = t.get(a.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), c = !0;
      continue;
    }
    const w = jo(a.nodeElement), y = h.measured.width !== w.width || h.measured.height !== w.height;
    if (!!(w.width && w.height && (y || !h.internals.handleBounds || a.force))) {
      const x = a.nodeElement.getBoundingClientRect(), N = Ft(h.extent) ? h.extent : i;
      let { positionAbsolute: m } = h.internals;
      h.parentId && h.extent === "parent" ? m = Ya(m, w, t.get(h.parentId)) : N && (m = vt(m, N, w));
      const v = {
        ...h,
        measured: w,
        internals: {
          ...h.internals,
          positionAbsolute: m,
          handleBounds: {
            source: Fi("source", a.nodeElement, x, d, h.id),
            target: Fi("target", a.nodeElement, x, d, h.id)
          }
        }
      };
      t.set(h.id, v), h.parentId && Vo(v, t, n, { nodeOrigin: o }), c = !0, y && (u.push({
        id: h.id,
        type: "dimensions",
        dimensions: w
      }), h.expandParent && h.parentId && f.push({
        id: h.id,
        parentId: h.parentId,
        rect: Yt(v, o)
      }));
    }
  }
  if (f.length > 0) {
    const a = Yo(f, t, n, o);
    u.push(...a);
  }
  return { changes: u, updatedInternals: c };
}
async function Wp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), c = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(c);
}
function Zi(e, t, n, r, o, i) {
  let s = o;
  const c = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, c.set(n, t)), s = `${o}-${e}`;
  const u = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, u.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const l = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, l.set(n, t));
  }
}
function rc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: c = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: c }, l = `${o}-${s}--${i}-${c}`, d = `${i}-${c}--${o}-${s}`;
    Zi("source", u, d, e, o, s), Zi("target", u, l, e, i, c), t.set(r.id, r);
  }
}
function oc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : oc(n, t) : !1;
}
function Qi(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function Xp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !oc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const c = e.get(i);
      c && o.set(i, {
        id: i,
        position: c.position || { x: 0, y: 0 },
        distance: {
          x: n.x - c.internals.positionAbsolute.x,
          y: n.y - c.internals.positionAbsolute.y
        },
        extent: c.extent,
        parentId: c.parentId,
        origin: c.origin,
        expandParent: c.expandParent,
        internals: {
          positionAbsolute: c.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: c.measured.width ?? 0,
          height: c.measured.height ?? 0
        }
      });
    }
  return o;
}
function Ur({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, c, u;
  const o = [];
  for (const [l, d] of t) {
    const f = (s = n.get(l)) == null ? void 0 : s.internals.userNode;
    f && o.push({
      ...f,
      position: d.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (c = n.get(e)) == null ? void 0 : c.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((u = t.get(e)) == null ? void 0 : u.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Up({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, c = /* @__PURE__ */ new Map(), u = !1, l = { x: 0, y: 0 }, d = null, f = !1, a = null, h = !1;
  function w({ noDragClassName: _, handleSelector: x, domNode: N, isSelectable: m, nodeId: v, nodeClickDistance: C = 0 }) {
    a = Ne(N);
    function k({ x: B, y: $ }, F) {
      const { nodeLookup: V, nodeExtent: b, snapGrid: P, snapToGrid: O, nodeOrigin: T, onNodeDrag: L, onSelectionDrag: R, onError: p, updateNodePositions: E } = t();
      i = { x: B, y: $ };
      let A = !1, z = { x: 0, y: 0, x2: 0, y2: 0 };
      if (c.size > 1 && b) {
        const Y = _n(c);
        z = vo(Y);
      }
      for (const [Y, U] of c) {
        if (!V.has(Y))
          continue;
        let W = { x: B - U.distance.x, y: $ - U.distance.y };
        O && (W = Ar(W, P));
        let G = [
          [b[0][0], b[0][1]],
          [b[1][0], b[1][1]]
        ];
        if (c.size > 1 && b && !U.extent) {
          const { positionAbsolute: se } = U.internals, te = se.x - z.x + b[0][0], Z = se.x + U.measured.width - z.x2 + b[1][0], ge = se.y - z.y + b[0][1], ue = se.y + U.measured.height - z.y2 + b[1][1];
          G = [
            [te, ge],
            [Z, ue]
          ];
        }
        const { position: X, positionAbsolute: Q } = Va({
          nodeId: Y,
          nextPosition: W,
          nodeLookup: V,
          nodeExtent: G,
          nodeOrigin: T,
          onError: p
        });
        A = A || U.position.x !== X.x || U.position.y !== X.y, U.position = X, U.internals.positionAbsolute = Q;
      }
      if (A && (E(c, !0), F && (r || L || !v && R))) {
        const [Y, U] = Ur({
          nodeId: v,
          dragItems: c,
          nodeLookup: V
        });
        r == null || r(F, c, Y, U), L == null || L(F, Y, U), v || R == null || R(F, U);
      }
    }
    async function S() {
      if (!d)
        return;
      const { transform: B, panBy: $, autoPanSpeed: F, autoPanOnNodeDrag: V } = t();
      if (!V) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [b, P] = Fa(l, d, F);
      (b !== 0 || P !== 0) && (i.x = (i.x ?? 0) - b / B[2], i.y = (i.y ?? 0) - P / B[2], await $({ x: b, y: P }) && k(i, null)), s = requestAnimationFrame(S);
    }
    function D(B) {
      var A;
      const { nodeLookup: $, multiSelectionActive: F, nodesDraggable: V, transform: b, snapGrid: P, snapToGrid: O, selectNodesOnDrag: T, onNodeDragStart: L, onSelectionDragStart: R, unselectNodesAndEdges: p } = t();
      f = !0, (!T || !m) && !F && v && ((A = $.get(v)) != null && A.selected || p()), m && T && v && (e == null || e(v));
      const E = sn(B.sourceEvent, { transform: b, snapGrid: P, snapToGrid: O, containerBounds: d });
      if (i = E, c = Xp($, V, E, v), c.size > 0 && (n || L || !v && R)) {
        const [z, Y] = Ur({
          nodeId: v,
          dragItems: c,
          nodeLookup: $
        });
        n == null || n(B.sourceEvent, c, z, Y), L == null || L(B.sourceEvent, z, Y), v || R == null || R(B.sourceEvent, Y);
      }
    }
    const j = _a().clickDistance(C).on("start", (B) => {
      const { domNode: $, nodeDragThreshold: F, transform: V, snapGrid: b, snapToGrid: P } = t();
      d = ($ == null ? void 0 : $.getBoundingClientRect()) || null, h = !1, F === 0 && D(B), i = sn(B.sourceEvent, { transform: V, snapGrid: b, snapToGrid: P, containerBounds: d }), l = We(B.sourceEvent, d);
    }).on("drag", (B) => {
      const { autoPanOnNodeDrag: $, transform: F, snapGrid: V, snapToGrid: b, nodeDragThreshold: P, nodeLookup: O } = t(), T = sn(B.sourceEvent, { transform: F, snapGrid: V, snapToGrid: b, containerBounds: d });
      if ((B.sourceEvent.type === "touchmove" && B.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      v && !O.has(v)) && (h = !0), !h) {
        if (!u && $ && f && (u = !0, S()), !f) {
          const L = T.xSnapped - (i.x ?? 0), R = T.ySnapped - (i.y ?? 0);
          Math.sqrt(L * L + R * R) > P && D(B);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && c && f && (l = We(B.sourceEvent, d), k(T, B.sourceEvent));
      }
    }).on("end", (B) => {
      if (!(!f || h) && (u = !1, f = !1, cancelAnimationFrame(s), c.size > 0)) {
        const { nodeLookup: $, updateNodePositions: F, onNodeDragStop: V, onSelectionDragStop: b } = t();
        if (F(c, !1), o || V || !v && b) {
          const [P, O] = Ur({
            nodeId: v,
            dragItems: c,
            nodeLookup: $,
            dragging: !1
          });
          o == null || o(B.sourceEvent, c, P, O), V == null || V(B.sourceEvent, P, O), v || b == null || b(B.sourceEvent, O);
        }
      }
    }).filter((B) => {
      const $ = B.target;
      return !B.button && (!_ || !Qi($, `.${_}`, N)) && (!x || Qi($, x, N));
    });
    a.call(j);
  }
  function y() {
    a == null || a.on(".drag", null);
  }
  return {
    update: w,
    destroy: y
  };
}
function Gp(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    pn(o, Yt(i)) > 0 && r.push(i);
  return r;
}
const qp = 250;
function Kp(e, t, n, r) {
  var c, u;
  let o = [], i = 1 / 0;
  const s = Gp(e, n, t + qp);
  for (const l of s) {
    const d = [...((c = l.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((u = l.internals.handleBounds) == null ? void 0 : u.target) ?? []];
    for (const f of d) {
      if (r.nodeId === f.nodeId && r.type === f.type && r.id === f.id)
        continue;
      const { x: a, y: h } = gn(l, f, f.position, !0), w = Math.sqrt(Math.pow(a - e.x, 2) + Math.pow(h - e.y, 2));
      w > t || (w < i ? (o = [{ ...f, x: a, y: h }], i = w) : w === i && o.push({ ...f, x: a, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const l = r.type === "source" ? "target" : "source";
    return o.find((d) => d.type === l) ?? o[0];
  }
  return o[0];
}
function ic(e, t, n, r, o, i = !1) {
  var l, d, f;
  const s = r.get(e);
  if (!s)
    return null;
  const c = o === "strict" ? (l = s.internals.handleBounds) == null ? void 0 : l[t] : [...((d = s.internals.handleBounds) == null ? void 0 : d.source) ?? [], ...((f = s.internals.handleBounds) == null ? void 0 : f.target) ?? []], u = (n ? c == null ? void 0 : c.find((a) => a.id === n) : c == null ? void 0 : c[0]) ?? null;
  return u && i ? { ...u, ...gn(s, u, u.position, !0) } : u;
}
function sc(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Zp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const ac = () => !0;
function Qp(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: c, nodeLookup: u, lib: l, autoPanOnConnect: d, flowId: f, panBy: a, cancelConnection: h, onConnectStart: w, onConnect: y, onConnectEnd: _, isValidConnection: x = ac, onReconnectEnd: N, updateConnection: m, getTransform: v, getFromHandle: C, autoPanSpeed: k }) {
  const S = qa(e.target);
  let D = 0, j;
  const { x: B, y: $ } = We(e), F = S == null ? void 0 : S.elementFromPoint(B, $), V = sc(i, F), b = c == null ? void 0 : c.getBoundingClientRect();
  if (!b || !V)
    return;
  const P = ic(o, V, r, u, t);
  if (!P)
    return;
  let O = We(e, b), T = !1, L = null, R = !1, p = null;
  function E() {
    if (!d || !b)
      return;
    const [Q, se] = Fa(O, b, k);
    a({ x: Q, y: se }), D = requestAnimationFrame(E);
  }
  const A = {
    ...P,
    nodeId: o,
    type: V,
    position: P.position
  }, z = u.get(o), U = {
    inProgress: !0,
    isValid: null,
    from: gn(z, A, ee.Left, !0),
    fromHandle: A,
    fromPosition: A.position,
    fromNode: z,
    to: O,
    toHandle: null,
    toPosition: zi[A.position],
    toNode: null
  };
  m(U);
  let W = U;
  w == null || w(e, { nodeId: o, handleId: r, handleType: V });
  function G(Q) {
    if (!C() || !A) {
      X(Q);
      return;
    }
    const se = v();
    O = We(Q, b), j = Kp(bn(O, se, !1, [1, 1]), n, u, A), T || (E(), T = !0);
    const te = cc(Q, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: x,
      doc: S,
      lib: l,
      flowId: f,
      nodeLookup: u
    });
    p = te.handleDomNode, L = te.connection, R = Zp(!!j, te.isValid);
    const Z = {
      // from stays the same
      ...W,
      isValid: R,
      to: j && R ? hr({ x: j.x, y: j.y }, se) : O,
      toHandle: te.toHandle,
      toPosition: R && te.toHandle ? te.toHandle.position : zi[A.position],
      toNode: te.toHandle ? u.get(te.toHandle.nodeId) : null
    };
    R && j && W.toHandle && Z.toHandle && W.toHandle.type === Z.toHandle.type && W.toHandle.nodeId === Z.toHandle.nodeId && W.toHandle.id === Z.toHandle.id && W.to.x === Z.to.x && W.to.y === Z.to.y || (m(Z), W = Z);
  }
  function X(Q) {
    (j || p) && L && R && (y == null || y(L));
    const { inProgress: se, ...te } = W, Z = {
      ...te,
      toPosition: W.toHandle ? W.toPosition : null
    };
    _ == null || _(Q, Z), i && (N == null || N(Q, Z)), h(), cancelAnimationFrame(D), T = !1, R = !1, L = null, p = null, S.removeEventListener("mousemove", G), S.removeEventListener("mouseup", X), S.removeEventListener("touchmove", G), S.removeEventListener("touchend", X);
  }
  S.addEventListener("mousemove", G), S.addEventListener("mouseup", X), S.addEventListener("touchmove", G), S.addEventListener("touchend", X);
}
function cc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: c, flowId: u, isValidConnection: l = ac, nodeLookup: d }) {
  const f = i === "target", a = t ? s.querySelector(`.${c}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: w } = We(e), y = s.elementFromPoint(h, w), _ = y != null && y.classList.contains(`${c}-flow__handle`) ? y : a, x = {
    handleDomNode: _,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (_) {
    const N = sc(void 0, _), m = _.getAttribute("data-nodeid"), v = _.getAttribute("data-handleid"), C = _.classList.contains("connectable"), k = _.classList.contains("connectableend");
    if (!m || !N)
      return x;
    const S = {
      source: f ? m : r,
      sourceHandle: f ? v : o,
      target: f ? r : m,
      targetHandle: f ? o : v
    };
    x.connection = S;
    const j = C && k && (n === wt.Strict ? f && N === "source" || !f && N === "target" : m !== r || v !== o);
    x.isValid = j && l(S), x.toHandle = ic(m, N, v, d, n, !1);
  }
  return x;
}
const Eo = {
  onPointerDown: Qp,
  isValid: cc
};
function Jp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Ne(e);
  function i({ translateExtent: c, width: u, height: l, zoomStep: d = 10, pannable: f = !0, zoomable: a = !0, inversePan: h = !1 }) {
    const w = (m) => {
      const v = n();
      if (m.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -m.sourceEvent.deltaY * (m.sourceEvent.deltaMode === 1 ? 0.05 : m.sourceEvent.deltaMode ? 1 : 2e-3) * d, k = v[2] * Math.pow(2, C);
      t.scaleTo(k);
    };
    let y = [0, 0];
    const _ = (m) => {
      (m.sourceEvent.type === "mousedown" || m.sourceEvent.type === "touchstart") && (y = [
        m.sourceEvent.clientX ?? m.sourceEvent.touches[0].clientX,
        m.sourceEvent.clientY ?? m.sourceEvent.touches[0].clientY
      ]);
    }, x = (m) => {
      const v = n();
      if (m.sourceEvent.type !== "mousemove" && m.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        m.sourceEvent.clientX ?? m.sourceEvent.touches[0].clientX,
        m.sourceEvent.clientY ?? m.sourceEvent.touches[0].clientY
      ], k = [C[0] - y[0], C[1] - y[1]];
      y = C;
      const S = r() * Math.max(v[2], Math.log(v[2])) * (h ? -1 : 1), D = {
        x: v[0] - k[0] * S,
        y: v[1] - k[1] * S
      }, j = [
        [0, 0],
        [u, l]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: v[2]
      }, j, c);
    }, N = $a().on("start", _).on("zoom", f ? x : null).on("zoom.wheel", a ? w : null);
    o.call(N, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Me
  };
}
const eg = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, Mr = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Gr = ({ x: e, y: t, zoom: n }) => Or.translate(e, t).scale(n), Rt = (e, t) => e.target.closest(`.${t}`), uc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), qr = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, lc = (e) => {
  const t = e.ctrlKey && pr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function tg({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: c, onPanZoom: u, onPanZoomEnd: l }) {
  return (d) => {
    if (Rt(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const f = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const _ = Me(d), x = lc(d), N = f * Math.pow(2, x);
      r.scaleTo(n, N, _, d);
      return;
    }
    const a = d.deltaMode === 1 ? 20 : 1;
    let h = o === gt.Vertical ? 0 : d.deltaX * a, w = o === gt.Horizontal ? 0 : d.deltaY * a;
    !pr() && d.shiftKey && o !== gt.Vertical && (h = d.deltaY * a, w = 0), r.translateBy(
      n,
      -(h / f) * i,
      -(w / f) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const y = Mr(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, c == null || c(d, y)), e.isPanScrolling && (u == null || u(d, y), e.panScrollTimeout = setTimeout(() => {
      l == null || l(d, y), e.isPanScrolling = !1;
    }, 150));
  };
}
function ng({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, c = Rt(r, e);
    if (r.ctrlKey && i && c && r.preventDefault(), s || c)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function rg({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, c;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = Mr(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((c = r.sourceEvent) == null ? void 0 : c.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function og({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, c;
    e.usedRightMouseButton = !!(n && uc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((c = i.sourceEvent) != null && c.internal) && (o == null || o(i.sourceEvent, Mr(i.transform)));
  };
}
function ig({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var c;
    if (!((c = s.sourceEvent) != null && c.internal) && (e.isZoomingOrPanning = !1, i && uc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && eg(e.prevViewport, s.transform))) {
      const u = Mr(s.transform);
      e.prevViewport = u, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, u);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function sg({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: c, noPanClassName: u, lib: l }) {
  return (d) => {
    var w;
    const f = e || t, a = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (Rt(d, `${l}-flow__node`) || Rt(d, `${l}-flow__edge`)))
      return !0;
    if (!r && !f && !o && !i && !n || s || Rt(d, c) && d.type === "wheel" || Rt(d, u) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && ((w = d.touches) == null ? void 0 : w.length) > 1)
      return d.preventDefault(), !1;
    if (!f && !o && !a && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && h;
  };
}
function ag({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: c, onPanZoomEnd: u, onDraggingChange: l }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, f = e.getBoundingClientRect(), a = $a().clickDistance(!Ie(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = Ne(e).call(a);
  m({
    x: i.x,
    y: i.y,
    zoom: Vt(i.zoom, t, n)
  }, [
    [0, 0],
    [f.width, f.height]
  ], o);
  const w = h.on("wheel.zoom"), y = h.on("dblclick.zoom");
  a.wheelDelta(lc);
  function _(F, V) {
    return h ? new Promise((b) => {
      a == null || a.transform(qr(h, V == null ? void 0 : V.duration, () => b(!0)), F);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: F, noPanClassName: V, onPaneContextMenu: b, userSelectionActive: P, panOnScroll: O, panOnDrag: T, panOnScrollMode: L, panOnScrollSpeed: R, preventScrolling: p, zoomOnPinch: E, zoomOnScroll: A, zoomOnDoubleClick: z, zoomActivationKeyPressed: Y, lib: U, onTransformChange: W }) {
    P && !d.isZoomingOrPanning && N();
    const X = O && !Y && !P ? tg({
      zoomPanValues: d,
      noWheelClassName: F,
      d3Selection: h,
      d3Zoom: a,
      panOnScrollMode: L,
      panOnScrollSpeed: R,
      zoomOnPinch: E,
      onPanZoomStart: c,
      onPanZoom: s,
      onPanZoomEnd: u
    }) : ng({
      noWheelClassName: F,
      preventScrolling: p,
      d3ZoomHandler: w
    });
    if (h.on("wheel.zoom", X, { passive: !1 }), !P) {
      const se = rg({
        zoomPanValues: d,
        onDraggingChange: l,
        onPanZoomStart: c
      });
      a.on("start", se);
      const te = og({
        zoomPanValues: d,
        panOnDrag: T,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: W
      });
      a.on("zoom", te);
      const Z = ig({
        zoomPanValues: d,
        panOnDrag: T,
        panOnScroll: O,
        onPaneContextMenu: b,
        onPanZoomEnd: u,
        onDraggingChange: l
      });
      a.on("end", Z);
    }
    const Q = sg({
      zoomActivationKeyPressed: Y,
      panOnDrag: T,
      zoomOnScroll: A,
      panOnScroll: O,
      zoomOnDoubleClick: z,
      zoomOnPinch: E,
      userSelectionActive: P,
      noPanClassName: V,
      noWheelClassName: F,
      lib: U
    });
    a.filter(Q), z ? h.on("dblclick.zoom", y) : h.on("dblclick.zoom", null);
  }
  function N() {
    a.on("zoom", null);
  }
  async function m(F, V, b) {
    const P = Gr(F), O = a == null ? void 0 : a.constrain()(P, V, b);
    return O && await _(O), new Promise((T) => T(O));
  }
  async function v(F, V) {
    const b = Gr(F);
    return await _(b, V), new Promise((P) => P(b));
  }
  function C(F) {
    if (h) {
      const V = Gr(F), b = h.property("__zoom");
      (b.k !== F.zoom || b.x !== F.x || b.y !== F.y) && (a == null || a.transform(h, V, null, { sync: !0 }));
    }
  }
  function k() {
    const F = h ? Da(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: F.x, y: F.y, zoom: F.k };
  }
  function S(F, V) {
    return h ? new Promise((b) => {
      a == null || a.scaleTo(qr(h, V == null ? void 0 : V.duration, () => b(!0)), F);
    }) : Promise.resolve(!1);
  }
  function D(F, V) {
    return h ? new Promise((b) => {
      a == null || a.scaleBy(qr(h, V == null ? void 0 : V.duration, () => b(!0)), F);
    }) : Promise.resolve(!1);
  }
  function j(F) {
    a == null || a.scaleExtent(F);
  }
  function B(F) {
    a == null || a.translateExtent(F);
  }
  function $(F) {
    const V = !Ie(F) || F < 0 ? 0 : F;
    a == null || a.clickDistance(V);
  }
  return {
    update: x,
    destroy: N,
    setViewport: v,
    setViewportConstrained: m,
    getViewport: k,
    scaleTo: S,
    scaleBy: D,
    setScaleExtent: j,
    setTranslateExtent: B,
    syncViewport: C,
    setClickDistance: $
  };
}
var an;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(an || (an = {}));
function cg({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, c = n - r, u = [s > 0 ? 1 : s < 0 ? -1 : 0, c > 0 ? 1 : c < 0 ? -1 : 0];
  return s && o && (u[0] = u[0] * -1), c && i && (u[1] = u[1] * -1), u;
}
function ug(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function Je(e, t) {
  return Math.max(0, t - e);
}
function et(e, t) {
  return Math.max(0, e - t);
}
function Vn(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Ji(e, t) {
  return e ? !t : t;
}
function lg(e, t, n, r, o, i, s, c) {
  let { affectsX: u, affectsY: l } = t;
  const { isHorizontal: d, isVertical: f } = t, a = d && f, { xSnapped: h, ySnapped: w } = n, { minWidth: y, maxWidth: _, minHeight: x, maxHeight: N } = r, { x: m, y: v, width: C, height: k, aspectRatio: S } = e;
  let D = Math.floor(d ? h - e.pointerX : 0), j = Math.floor(f ? w - e.pointerY : 0);
  const B = C + (u ? -D : D), $ = k + (l ? -j : j), F = -i[0] * C, V = -i[1] * k;
  let b = Vn(B, y, _), P = Vn($, x, N);
  if (s) {
    let L = 0, R = 0;
    u && D < 0 ? L = Je(m + D + F, s[0][0]) : !u && D > 0 && (L = et(m + B + F, s[1][0])), l && j < 0 ? R = Je(v + j + V, s[0][1]) : !l && j > 0 && (R = et(v + $ + V, s[1][1])), b = Math.max(b, L), P = Math.max(P, R);
  }
  if (c) {
    let L = 0, R = 0;
    u && D > 0 ? L = et(m + D, c[0][0]) : !u && D < 0 && (L = Je(m + B, c[1][0])), l && j > 0 ? R = et(v + j, c[0][1]) : !l && j < 0 && (R = Je(v + $, c[1][1])), b = Math.max(b, L), P = Math.max(P, R);
  }
  if (o) {
    if (d) {
      const L = Vn(B / S, x, N) * S;
      if (b = Math.max(b, L), s) {
        let R = 0;
        !u && !l || u && !l && a ? R = et(v + V + B / S, s[1][1]) * S : R = Je(v + V + (u ? D : -D) / S, s[0][1]) * S, b = Math.max(b, R);
      }
      if (c) {
        let R = 0;
        !u && !l || u && !l && a ? R = Je(v + B / S, c[1][1]) * S : R = et(v + (u ? D : -D) / S, c[0][1]) * S, b = Math.max(b, R);
      }
    }
    if (f) {
      const L = Vn($ * S, y, _) / S;
      if (P = Math.max(P, L), s) {
        let R = 0;
        !u && !l || l && !u && a ? R = et(m + $ * S + F, s[1][0]) / S : R = Je(m + (l ? j : -j) * S + F, s[0][0]) / S, P = Math.max(P, R);
      }
      if (c) {
        let R = 0;
        !u && !l || l && !u && a ? R = Je(m + $ * S, c[1][0]) / S : R = et(m + (l ? j : -j) * S, c[0][0]) / S, P = Math.max(P, R);
      }
    }
  }
  j = j + (j < 0 ? P : -P), D = D + (D < 0 ? b : -b), o && (a ? B > $ * S ? j = (Ji(u, l) ? -D : D) / S : D = (Ji(u, l) ? -j : j) * S : d ? (j = D / S, l = u) : (D = j * S, u = l));
  const O = u ? m + D : m, T = l ? v + j : v;
  return {
    width: C + (u ? -D : D),
    height: k + (l ? -j : j),
    x: i[0] * D * (u ? -1 : 1) + O,
    y: i[1] * j * (l ? -1 : 1) + T
  };
}
const fc = { width: 0, height: 0, x: 0, y: 0 }, fg = {
  ...fc,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function dg(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function hg(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, c = n[0] * i, u = n[1] * s;
  return [
    [r - c, o - u],
    [r + i - c, o + s - u]
  ];
}
function pg({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = Ne(e);
  function s({ controlPosition: u, boundaries: l, keepAspectRatio: d, resizeDirection: f, onResizeStart: a, onResize: h, onResizeEnd: w, shouldResize: y }) {
    let _ = { ...fc }, x = { ...fg };
    const N = ug(u);
    let m, v = null, C = [], k, S, D;
    const j = _a().on("start", (B) => {
      const { nodeLookup: $, transform: F, snapGrid: V, snapToGrid: b, nodeOrigin: P, paneDomNode: O } = n();
      if (m = $.get(t), !m)
        return;
      v = (O == null ? void 0 : O.getBoundingClientRect()) ?? null;
      const { xSnapped: T, ySnapped: L } = sn(B.sourceEvent, {
        transform: F,
        snapGrid: V,
        snapToGrid: b,
        containerBounds: v
      });
      _ = {
        width: m.measured.width ?? 0,
        height: m.measured.height ?? 0,
        x: m.position.x ?? 0,
        y: m.position.y ?? 0
      }, x = {
        ..._,
        pointerX: T,
        pointerY: L,
        aspectRatio: _.width / _.height
      }, k = void 0, m.parentId && (m.extent === "parent" || m.expandParent) && (k = $.get(m.parentId), S = k && m.extent === "parent" ? dg(k) : void 0), C = [], D = void 0;
      for (const [R, p] of $)
        if (p.parentId === t && (C.push({
          id: R,
          position: { ...p.position },
          extent: p.extent
        }), p.extent === "parent" || p.expandParent)) {
          const E = hg(p, m, p.origin ?? P);
          D ? D = [
            [Math.min(E[0][0], D[0][0]), Math.min(E[0][1], D[0][1])],
            [Math.max(E[1][0], D[1][0]), Math.max(E[1][1], D[1][1])]
          ] : D = E;
        }
      a == null || a(B, { ..._ });
    }).on("drag", (B) => {
      const { transform: $, snapGrid: F, snapToGrid: V, nodeOrigin: b } = n(), P = sn(B.sourceEvent, {
        transform: $,
        snapGrid: F,
        snapToGrid: V,
        containerBounds: v
      }), O = [];
      if (!m)
        return;
      const { x: T, y: L, width: R, height: p } = _, E = {}, A = m.origin ?? b, { width: z, height: Y, x: U, y: W } = lg(x, N, P, l, d, A, S, D), G = z !== R, X = Y !== p, Q = U !== T && G, se = W !== L && X;
      if (!Q && !se && !G && !X)
        return;
      if ((Q || se || A[0] === 1 || A[1] === 1) && (E.x = Q ? U : _.x, E.y = se ? W : _.y, _.x = E.x, _.y = E.y, C.length > 0)) {
        const ue = U - T, ye = W - L;
        for (const he of C)
          he.position = {
            x: he.position.x - ue + A[0] * (z - R),
            y: he.position.y - ye + A[1] * (Y - p)
          }, O.push(he);
      }
      if ((G || X) && (E.width = G && (!f || f === "horizontal") ? z : _.width, E.height = X && (!f || f === "vertical") ? Y : _.height, _.width = E.width, _.height = E.height), k && m.expandParent) {
        const ue = A[0] * (E.width ?? 0);
        E.x && E.x < ue && (_.x = ue, x.x = x.x - (E.x - ue));
        const ye = A[1] * (E.height ?? 0);
        E.y && E.y < ye && (_.y = ye, x.y = x.y - (E.y - ye));
      }
      const te = cg({
        width: _.width,
        prevWidth: R,
        height: _.height,
        prevHeight: p,
        affectsX: N.affectsX,
        affectsY: N.affectsY
      }), Z = { ..._, direction: te };
      (y == null ? void 0 : y(B, Z)) !== !1 && (h == null || h(B, Z), r(E, O));
    }).on("end", (B) => {
      w == null || w(B, { ..._ }), o == null || o({ ..._ });
    });
    i.call(j);
  }
  function c() {
    i.on(".drag", null);
  }
  return {
    update: s,
    destroy: c
  };
}
var Yn = { exports: {} }, Kr = {}, Fn = { exports: {} }, Zr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function gg() {
  if (es) return Zr;
  es = 1;
  var e = at();
  function t(f, a) {
    return f === a && (f !== 0 || 1 / f === 1 / a) || f !== f && a !== a;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function c(f, a) {
    var h = a(), w = r({ inst: { value: h, getSnapshot: a } }), y = w[0].inst, _ = w[1];
    return i(
      function() {
        y.value = h, y.getSnapshot = a, u(y) && _({ inst: y });
      },
      [f, h, a]
    ), o(
      function() {
        return u(y) && _({ inst: y }), f(function() {
          u(y) && _({ inst: y });
        });
      },
      [f]
    ), s(h), h;
  }
  function u(f) {
    var a = f.getSnapshot;
    f = f.value;
    try {
      var h = a();
      return !n(f, h);
    } catch {
      return !0;
    }
  }
  function l(f, a) {
    return a();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : c;
  return Zr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Zr;
}
var Qr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function mg() {
  return ts || (ts = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, w) {
      return h === w && (h !== 0 || 1 / h === 1 / w) || h !== h && w !== w;
    }
    function t(h, w) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var y = w();
      if (!f) {
        var _ = w();
        i(y, _) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      _ = s({
        inst: { value: y, getSnapshot: w }
      });
      var x = _[0].inst, N = _[1];
      return u(
        function() {
          x.value = y, x.getSnapshot = w, n(x) && N({ inst: x });
        },
        [h, y, w]
      ), c(
        function() {
          return n(x) && N({ inst: x }), h(function() {
            n(x) && N({ inst: x });
          });
        },
        [h]
      ), l(y), y;
    }
    function n(h) {
      var w = h.getSnapshot;
      h = h.value;
      try {
        var y = w();
        return !i(h, y);
      } catch {
        return !0;
      }
    }
    function r(h, w) {
      return w();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = at(), i = typeof Object.is == "function" ? Object.is : e, s = o.useState, c = o.useEffect, u = o.useLayoutEffect, l = o.useDebugValue, d = !1, f = !1, a = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Qr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : a, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Qr;
}
var ns;
function dc() {
  return ns || (ns = 1, process.env.NODE_ENV === "production" ? Fn.exports = gg() : Fn.exports = mg()), Fn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function yg() {
  if (rs) return Kr;
  rs = 1;
  var e = at(), t = dc();
  function n(l, d) {
    return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, c = e.useMemo, u = e.useDebugValue;
  return Kr.useSyncExternalStoreWithSelector = function(l, d, f, a, h) {
    var w = i(null);
    if (w.current === null) {
      var y = { hasValue: !1, value: null };
      w.current = y;
    } else y = w.current;
    w = c(
      function() {
        function x(k) {
          if (!N) {
            if (N = !0, m = k, k = a(k), h !== void 0 && y.hasValue) {
              var S = y.value;
              if (h(S, k))
                return v = S;
            }
            return v = k;
          }
          if (S = v, r(m, k)) return S;
          var D = a(k);
          return h !== void 0 && h(S, D) ? (m = k, S) : (m = k, v = D);
        }
        var N = !1, m, v, C = f === void 0 ? null : f;
        return [
          function() {
            return x(d());
          },
          C === null ? void 0 : function() {
            return x(C());
          }
        ];
      },
      [d, f, a, h]
    );
    var _ = o(l, w[0], w[1]);
    return s(
      function() {
        y.hasValue = !0, y.value = _;
      },
      [_]
    ), u(_), _;
  }, Kr;
}
var Jr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function wg() {
  return os || (os = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, d) {
      return l === d && (l !== 0 || 1 / l === 1 / d) || l !== l && d !== d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = at(), n = dc(), r = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, i = t.useRef, s = t.useEffect, c = t.useMemo, u = t.useDebugValue;
    Jr.useSyncExternalStoreWithSelector = function(l, d, f, a, h) {
      var w = i(null);
      if (w.current === null) {
        var y = { hasValue: !1, value: null };
        w.current = y;
      } else y = w.current;
      w = c(
        function() {
          function x(k) {
            if (!N) {
              if (N = !0, m = k, k = a(k), h !== void 0 && y.hasValue) {
                var S = y.value;
                if (h(S, k))
                  return v = S;
              }
              return v = k;
            }
            if (S = v, r(m, k))
              return S;
            var D = a(k);
            return h !== void 0 && h(S, D) ? (m = k, S) : (m = k, v = D);
          }
          var N = !1, m, v, C = f === void 0 ? null : f;
          return [
            function() {
              return x(d());
            },
            C === null ? void 0 : function() {
              return x(C());
            }
          ];
        },
        [d, f, a, h]
      );
      var _ = o(l, w[0], w[1]);
      return s(
        function() {
          y.hasValue = !0, y.value = _;
        },
        [_]
      ), u(_), _;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Jr;
}
var is;
function vg() {
  return is || (is = 1, process.env.NODE_ENV === "production" ? Yn.exports = yg() : Yn.exports = wg()), Yn.exports;
}
var xg = vg();
const _g = /* @__PURE__ */ $s(xg), bg = {}, ss = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (d, f) => {
    const a = typeof d == "function" ? d(t) : d;
    if (!Object.is(a, t)) {
      const h = t;
      t = f ?? (typeof a != "object" || a === null) ? a : Object.assign({}, t, a), n.forEach((w) => w(t, h));
    }
  }, o = () => t, u = { setState: r, getState: o, getInitialState: () => l, subscribe: (d) => (n.add(d), () => n.delete(d)), destroy: () => {
    (bg ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, u);
  return u;
}, Eg = (e) => e ? ss(e) : ss, { useDebugValue: Sg } = ke, { useSyncExternalStoreWithSelector: Cg } = _g, Ng = (e) => e;
function hc(e, t = Ng, n) {
  const r = Cg(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Sg(r), r;
}
const as = (e, t) => {
  const n = Eg(e), r = (o, i = t) => hc(n, o, i);
  return Object.assign(r, n), r;
}, kg = (e, t) => e ? as(e, t) : as;
function we(e, t) {
  if (Object.is(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e)
      if (!Object.is(o, t.get(r)))
        return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e)
      if (!t.has(r))
        return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
var Wn = { exports: {} }, be = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Og() {
  if (cs) return be;
  cs = 1;
  var e = at();
  function t(u) {
    var l = "https://react.dev/errors/" + u;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var d = 2; d < arguments.length; d++)
        l += "&args[]=" + encodeURIComponent(arguments[d]);
    }
    return "Minified React error #" + u + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var r = {
    d: {
      f: n,
      r: function() {
        throw Error(t(522));
      },
      D: n,
      C: n,
      L: n,
      m: n,
      X: n,
      S: n,
      M: n
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function i(u, l, d) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: f == null ? null : "" + f,
      children: u,
      containerInfo: l,
      implementation: d
    };
  }
  var s = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(u, l) {
    if (u === "font") return "";
    if (typeof l == "string")
      return l === "use-credentials" ? l : "";
  }
  return be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, be.createPortal = function(u, l) {
    var d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
      throw Error(t(299));
    return i(u, l, null, d);
  }, be.flushSync = function(u) {
    var l = s.T, d = r.p;
    try {
      if (s.T = null, r.p = 2, u) return u();
    } finally {
      s.T = l, r.p = d, r.d.f();
    }
  }, be.preconnect = function(u, l) {
    typeof u == "string" && (l ? (l = l.crossOrigin, l = typeof l == "string" ? l === "use-credentials" ? l : "" : void 0) : l = null, r.d.C(u, l));
  }, be.prefetchDNS = function(u) {
    typeof u == "string" && r.d.D(u);
  }, be.preinit = function(u, l) {
    if (typeof u == "string" && l && typeof l.as == "string") {
      var d = l.as, f = c(d, l.crossOrigin), a = typeof l.integrity == "string" ? l.integrity : void 0, h = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
      d === "style" ? r.d.S(
        u,
        typeof l.precedence == "string" ? l.precedence : void 0,
        {
          crossOrigin: f,
          integrity: a,
          fetchPriority: h
        }
      ) : d === "script" && r.d.X(u, {
        crossOrigin: f,
        integrity: a,
        fetchPriority: h,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0
      });
    }
  }, be.preinitModule = function(u, l) {
    if (typeof u == "string")
      if (typeof l == "object" && l !== null) {
        if (l.as == null || l.as === "script") {
          var d = c(
            l.as,
            l.crossOrigin
          );
          r.d.M(u, {
            crossOrigin: d,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0
          });
        }
      } else l == null && r.d.M(u);
  }, be.preload = function(u, l) {
    if (typeof u == "string" && typeof l == "object" && l !== null && typeof l.as == "string") {
      var d = l.as, f = c(d, l.crossOrigin);
      r.d.L(u, d, {
        crossOrigin: f,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        type: typeof l.type == "string" ? l.type : void 0,
        fetchPriority: typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
        referrerPolicy: typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
        imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
        imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
        media: typeof l.media == "string" ? l.media : void 0
      });
    }
  }, be.preloadModule = function(u, l) {
    if (typeof u == "string")
      if (l) {
        var d = c(l.as, l.crossOrigin);
        r.d.m(u, {
          as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
          crossOrigin: d,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0
        });
      } else r.d.m(u);
  }, be.requestFormReset = function(u) {
    r.d.r(u);
  }, be.unstable_batchedUpdates = function(u, l) {
    return u(l);
  }, be.useFormState = function(u, l, d) {
    return s.H.useFormState(u, l, d);
  }, be.useFormStatus = function() {
    return s.H.useHostTransitionStatus();
  }, be.version = "19.1.0", be;
}
var Ee = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function Rg() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(f) {
      return "" + f;
    }
    function n(f, a, h) {
      var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(w);
        var y = !1;
      } catch {
        y = !0;
      }
      return y && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object"
      ), t(w)), {
        $$typeof: l,
        key: w == null ? null : "" + w,
        children: f,
        containerInfo: a,
        implementation: h
      };
    }
    function r(f, a) {
      if (f === "font") return "";
      if (typeof a == "string")
        return a === "use-credentials" ? a : "";
    }
    function o(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : 'something with type "' + typeof f + '"';
    }
    function i(f) {
      return f === null ? "`null`" : f === void 0 ? "`undefined`" : f === "" ? "an empty string" : typeof f == "string" ? JSON.stringify(f) : typeof f == "number" ? "`" + f + "`" : 'something with type "' + typeof f + '"';
    }
    function s() {
      var f = d.H;
      return f === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var c = at(), u = {
      d: {
        f: e,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: e,
        C: e,
        L: e,
        m: e,
        X: e,
        S: e,
        M: e
      },
      p: 0,
      findDOMNode: null
    }, l = Symbol.for("react.portal"), d = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Ee.createPortal = function(f, a) {
      var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(f, a, null, h);
    }, Ee.flushSync = function(f) {
      var a = d.T, h = u.p;
      try {
        if (d.T = null, u.p = 2, f)
          return f();
      } finally {
        d.T = a, u.p = h, u.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ee.preconnect = function(f, a) {
      typeof f == "string" && f ? a != null && typeof a != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        i(a)
      ) : a != null && typeof a.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        o(a.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        o(f)
      ), typeof f == "string" && (a ? (a = a.crossOrigin, a = typeof a == "string" ? a === "use-credentials" ? a : "" : void 0) : a = null, u.d.C(f, a));
    }, Ee.prefetchDNS = function(f) {
      if (typeof f != "string" || !f)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          o(f)
        );
      else if (1 < arguments.length) {
        var a = arguments[1];
        typeof a == "object" && a.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          i(a)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          i(a)
        );
      }
      typeof f == "string" && u.d.D(f);
    }, Ee.preinit = function(f, a) {
      if (typeof f == "string" && f ? a == null || typeof a != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        i(a)
      ) : a.as !== "style" && a.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        i(a.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        o(f)
      ), typeof f == "string" && a && typeof a.as == "string") {
        var h = a.as, w = r(h, a.crossOrigin), y = typeof a.integrity == "string" ? a.integrity : void 0, _ = typeof a.fetchPriority == "string" ? a.fetchPriority : void 0;
        h === "style" ? u.d.S(
          f,
          typeof a.precedence == "string" ? a.precedence : void 0,
          {
            crossOrigin: w,
            integrity: y,
            fetchPriority: _
          }
        ) : h === "script" && u.d.X(f, {
          crossOrigin: w,
          integrity: y,
          fetchPriority: _,
          nonce: typeof a.nonce == "string" ? a.nonce : void 0
        });
      }
    }, Ee.preinitModule = function(f, a) {
      var h = "";
      if (typeof f == "string" && f || (h += " The `href` argument encountered was " + o(f) + "."), a !== void 0 && typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : a && "as" in a && a.as !== "script" && (h += " The `as` option encountered was " + i(a.as) + "."), h)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          h
        );
      else
        switch (h = a && typeof a.as == "string" ? a.as : "script", h) {
          case "script":
            break;
          default:
            h = i(h), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              h,
              f
            );
        }
      typeof f == "string" && (typeof a == "object" && a !== null ? (a.as == null || a.as === "script") && (h = r(
        a.as,
        a.crossOrigin
      ), u.d.M(f, {
        crossOrigin: h,
        integrity: typeof a.integrity == "string" ? a.integrity : void 0,
        nonce: typeof a.nonce == "string" ? a.nonce : void 0
      })) : a == null && u.d.M(f));
    }, Ee.preload = function(f, a) {
      var h = "";
      if (typeof f == "string" && f || (h += " The `href` argument encountered was " + o(f) + "."), a == null || typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : typeof a.as == "string" && a.as || (h += " The `as` option encountered was " + o(a.as) + "."), h && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        h
      ), typeof f == "string" && typeof a == "object" && a !== null && typeof a.as == "string") {
        h = a.as;
        var w = r(
          h,
          a.crossOrigin
        );
        u.d.L(f, h, {
          crossOrigin: w,
          integrity: typeof a.integrity == "string" ? a.integrity : void 0,
          nonce: typeof a.nonce == "string" ? a.nonce : void 0,
          type: typeof a.type == "string" ? a.type : void 0,
          fetchPriority: typeof a.fetchPriority == "string" ? a.fetchPriority : void 0,
          referrerPolicy: typeof a.referrerPolicy == "string" ? a.referrerPolicy : void 0,
          imageSrcSet: typeof a.imageSrcSet == "string" ? a.imageSrcSet : void 0,
          imageSizes: typeof a.imageSizes == "string" ? a.imageSizes : void 0,
          media: typeof a.media == "string" ? a.media : void 0
        });
      }
    }, Ee.preloadModule = function(f, a) {
      var h = "";
      typeof f == "string" && f || (h += " The `href` argument encountered was " + o(f) + "."), a !== void 0 && typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : a && "as" in a && typeof a.as != "string" && (h += " The `as` option encountered was " + o(a.as) + "."), h && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        h
      ), typeof f == "string" && (a ? (h = r(
        a.as,
        a.crossOrigin
      ), u.d.m(f, {
        as: typeof a.as == "string" && a.as !== "script" ? a.as : void 0,
        crossOrigin: h,
        integrity: typeof a.integrity == "string" ? a.integrity : void 0
      })) : u.d.m(f));
    }, Ee.requestFormReset = function(f) {
      u.d.r(f);
    }, Ee.unstable_batchedUpdates = function(f, a) {
      return f(a);
    }, Ee.useFormState = function(f, a, h) {
      return s().useFormState(f, a, h);
    }, Ee.useFormStatus = function() {
      return s().useHostTransitionStatus();
    }, Ee.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ee;
}
var ls;
function Tg() {
  if (ls) return Wn.exports;
  ls = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (e(), Wn.exports = Og()) : Wn.exports = Rg(), Wn.exports;
}
Tg();
const Pr = H.createContext(null), Ag = Pr.Provider, pc = Re.error001();
function le(e, t) {
  const n = H.useContext(Pr);
  if (n === null)
    throw new Error(pc);
  return hc(n, e, t);
}
function me() {
  const e = H.useContext(Pr);
  if (e === null)
    throw new Error(pc);
  return H.useMemo(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const fs = { display: "none" }, Mg = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, gc = "react-flow__node-desc", mc = "react-flow__edge-desc", Pg = "react-flow__aria-live", Ig = (e) => e.ariaLiveMessage;
function Dg({ rfId: e }) {
  const t = le(Ig);
  return I.jsx("div", { id: `${Pg}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Mg, children: t });
}
function $g({ rfId: e, disableKeyboardA11y: t }) {
  return I.jsxs(I.Fragment, { children: [I.jsxs("div", { id: `${gc}-${e}`, style: fs, children: ["Press enter or space to select a node.", !t && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "] }), I.jsx("div", { id: `${mc}-${e}`, style: fs, children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel." }), !t && I.jsx(Dg, { rfId: e })] });
}
const Lg = (e) => e.userSelectionActive ? "none" : "all", Ir = H.forwardRef(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = le(Lg), c = `${e}`.split("-");
  return I.jsx("div", { className: xe(["react-flow__panel", n, ...c]), style: { ...r, pointerEvents: s }, ref: i, ...o, children: t });
});
Ir.displayName = "Panel";
function jg({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : I.jsx(Ir, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: I.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Hg = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, Xn = (e) => e.id;
function zg(e, t) {
  return we(e.selectedNodes.map(Xn), t.selectedNodes.map(Xn)) && we(e.selectedEdges.map(Xn), t.selectedEdges.map(Xn));
}
function Bg({ onSelectionChange: e }) {
  const t = me(), { selectedNodes: n, selectedEdges: r } = le(Hg, zg);
  return H.useEffect(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const Vg = (e) => !!e.onSelectionChangeHandlers;
function Yg({ onSelectionChange: e }) {
  const t = le(Vg);
  return e || t ? I.jsx(Bg, { onSelectionChange: e }) : null;
}
const yc = [0, 0], Fg = { x: 0, y: 0, zoom: 1 }, Wg = [
  "nodes",
  "edges",
  "defaultNodes",
  "defaultEdges",
  "onConnect",
  "onConnectStart",
  "onConnectEnd",
  "onClickConnectStart",
  "onClickConnectEnd",
  "nodesDraggable",
  "nodesConnectable",
  "nodesFocusable",
  "edgesFocusable",
  "edgesReconnectable",
  "elevateNodesOnSelect",
  "elevateEdgesOnSelect",
  "minZoom",
  "maxZoom",
  "nodeExtent",
  "onNodesChange",
  "onEdgesChange",
  "elementsSelectable",
  "connectionMode",
  "snapGrid",
  "snapToGrid",
  "translateExtent",
  "connectOnClick",
  "defaultEdgeOptions",
  "fitView",
  "fitViewOptions",
  "onNodesDelete",
  "onEdgesDelete",
  "onDelete",
  "onNodeDrag",
  "onNodeDragStart",
  "onNodeDragStop",
  "onSelectionDrag",
  "onSelectionDragStart",
  "onSelectionDragStop",
  "onMoveStart",
  "onMove",
  "onMoveEnd",
  "noPanClassName",
  "nodeOrigin",
  "autoPanOnConnect",
  "autoPanOnNodeDrag",
  "onError",
  "connectionRadius",
  "isValidConnection",
  "selectNodesOnDrag",
  "nodeDragThreshold",
  "onBeforeDelete",
  "debug",
  "autoPanSpeed",
  "paneClickDistance"
], ds = [...Wg, "rfId"], Xg = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setPaneClickDistance: e.setPaneClickDistance
}), hs = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: hn,
  nodeOrigin: yc,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1",
  paneClickDistance: 0
};
function Ug(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: c, setDefaultNodesAndEdges: u, setPaneClickDistance: l } = le(Xg, we), d = me();
  H.useEffect(() => (u(e.defaultNodes, e.defaultEdges), () => {
    f.current = hs, c();
  }), []);
  const f = H.useRef(hs);
  return H.useEffect(
    () => {
      for (const a of ds) {
        const h = e[a], w = f.current[a];
        h !== w && (typeof e[a] > "u" || (a === "nodes" ? t(h) : a === "edges" ? n(h) : a === "minZoom" ? r(h) : a === "maxZoom" ? o(h) : a === "translateExtent" ? i(h) : a === "nodeExtent" ? s(h) : a === "paneClickDistance" ? l(h) : a === "fitView" ? d.setState({ fitViewQueued: h }) : a === "fitViewOptions" ? d.setState({ fitViewOptions: h }) : d.setState({ [a]: h })));
      }
      f.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    ds.map((a) => e[a])
  ), null;
}
function ps() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Gg(e) {
  var r;
  const [t, n] = H.useState(e === "system" ? null : e);
  return H.useEffect(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = ps(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = ps()) != null && r.matches ? "dark" : "light";
}
const gs = typeof document < "u" ? document : null;
function mn(e = null, t = { target: gs, actInsideInputWithModifier: !0 }) {
  const [n, r] = H.useState(!1), o = H.useRef(!1), i = H.useRef(/* @__PURE__ */ new Set([])), [s, c] = H.useMemo(() => {
    if (e !== null) {
      const l = (Array.isArray(e) ? e : [e]).filter((f) => typeof f == "string").map((f) => f.replace("+", `
`).replace(`

`, `
+`).split(`
`)), d = l.reduce((f, a) => f.concat(...a), []);
      return [l, d];
    }
    return [[], []];
  }, [e]);
  return H.useEffect(() => {
    const u = (t == null ? void 0 : t.target) || gs;
    if (e !== null) {
      const l = (a) => {
        var y, _;
        if (o.current = a.ctrlKey || a.metaKey || a.shiftKey || a.altKey, (!o.current || o.current && !t.actInsideInputWithModifier) && Ka(a))
          return !1;
        const w = ys(a.code, c);
        if (i.current.add(a[w]), ms(s, i.current, !1)) {
          const x = ((_ = (y = a.composedPath) == null ? void 0 : y.call(a)) == null ? void 0 : _[0]) || a.target, N = (x == null ? void 0 : x.nodeName) === "BUTTON" || (x == null ? void 0 : x.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !N) && a.preventDefault(), r(!0);
        }
      }, d = (a) => {
        const h = ys(a.code, c);
        ms(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(a[h]), a.key === "Meta" && i.current.clear(), o.current = !1;
      }, f = () => {
        i.current.clear(), r(!1);
      };
      return u == null || u.addEventListener("keydown", l), u == null || u.addEventListener("keyup", d), window.addEventListener("blur", f), window.addEventListener("contextmenu", f), () => {
        u == null || u.removeEventListener("keydown", l), u == null || u.removeEventListener("keyup", d), window.removeEventListener("blur", f), window.removeEventListener("contextmenu", f);
      };
    }
  }, [e, r]), n;
}
function ms(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function ys(e, t) {
  return t.includes(e) ? "code" : "key";
}
const qg = () => {
  const e = me();
  return H.useMemo(() => ({
    zoomIn: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomOut: (t) => {
      const { panZoom: n } = e.getState();
      return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(!1);
    },
    zoomTo: (t, n) => {
      const { panZoom: r } = e.getState();
      return r ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(!1);
    },
    getZoom: () => e.getState().transform[2],
    setViewport: async (t, n) => {
      const { transform: [r, o, i], panZoom: s } = e.getState();
      return s ? (await s.setViewport({
        x: t.x ?? r,
        y: t.y ?? o,
        zoom: t.zoom ?? i
      }, { duration: n == null ? void 0 : n.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => {
      const [t, n, r] = e.getState().transform;
      return { x: t, y: n, zoom: r };
    },
    setCenter: async (t, n, r) => {
      const { width: o, height: i, maxZoom: s, panZoom: c } = e.getState(), u = typeof (r == null ? void 0 : r.zoom) < "u" ? r.zoom : s, l = o / 2 - t * u, d = i / 2 - n * u;
      return c ? (await c.setViewport({
        x: l,
        y: d,
        zoom: u
      }, { duration: r == null ? void 0 : r.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: c } = e.getState(), u = Lo(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return c ? (await c.setViewport(u, { duration: n == null ? void 0 : n.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: c, y: u } = s.getBoundingClientRect(), l = {
        x: t.x - c,
        y: t.y - u
      }, d = n.snapGrid ?? o, f = n.snapToGrid ?? i;
      return bn(l, r, f, d);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = hr(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function wc(e, t) {
  const n = [], r = /* @__PURE__ */ new Map(), o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace")
      r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove")
      continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const c = { ...i };
    for (const u of s)
      Kg(u, c);
    n.push(c);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Kg(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      typeof e.position < "u" && (t.position = e.position), typeof e.dragging < "u" && (t.dragging = e.dragging);
      break;
    }
    case "dimensions": {
      typeof e.dimensions < "u" && (t.measured ?? (t.measured = {}), t.measured.width = e.dimensions.width, t.measured.height = e.dimensions.height, e.setAttributes && ((e.setAttributes === !0 || e.setAttributes === "width") && (t.width = e.dimensions.width), (e.setAttributes === !0 || e.setAttributes === "height") && (t.height = e.dimensions.height))), typeof e.resizing == "boolean" && (t.resizing = e.resizing);
      break;
    }
  }
}
function vc(e, t) {
  return wc(e, t);
}
function xc(e, t) {
  return wc(e, t);
}
function ct(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function Tt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(ct(i.id, s)));
  }
  return r;
}
function ws({ items: e = [], lookup: t }) {
  var o;
  const n = [], r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const c = t.get(s.id), u = ((o = c == null ? void 0 : c.internals) == null ? void 0 : o.userNode) ?? c;
    u !== void 0 && u !== s && n.push({ id: s.id, item: s, type: "replace" }), u === void 0 && n.push({ item: s, type: "add", index: i });
  }
  for (const [i] of t)
    r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function vs(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const xs = (e) => _p(e), Zg = (e) => za(e);
function _c(e) {
  return H.forwardRef(e);
}
const Qg = typeof window < "u" ? H.useLayoutEffect : H.useEffect;
function _s(e) {
  const [t, n] = H.useState(BigInt(0)), [r] = H.useState(() => Jg(() => n((o) => o + BigInt(1))));
  return Qg(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function Jg(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      t.push(n), e();
    }
  };
}
const bc = H.createContext(null);
function em({ children: e }) {
  const t = me(), n = H.useCallback((c) => {
    const { nodes: u = [], setNodes: l, hasDefaultNodes: d, onNodesChange: f, nodeLookup: a, fitViewQueued: h } = t.getState();
    let w = u;
    for (const y of c)
      w = typeof y == "function" ? y(w) : y;
    if (d)
      l(w);
    else {
      const y = ws({
        items: w,
        lookup: a
      });
      y.length > 0 ? f == null || f(y) : h && window.requestAnimationFrame(() => {
        const { fitViewQueued: _, nodes: x, setNodes: N } = t.getState();
        _ && N(x);
      });
    }
  }, []), r = _s(n), o = H.useCallback((c) => {
    const { edges: u = [], setEdges: l, hasDefaultEdges: d, onEdgesChange: f, edgeLookup: a } = t.getState();
    let h = u;
    for (const w of c)
      h = typeof w == "function" ? w(h) : w;
    d ? l(h) : f && f(ws({
      items: h,
      lookup: a
    }));
  }, []), i = _s(o), s = H.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return I.jsx(bc.Provider, { value: s, children: e });
}
function tm() {
  const e = H.useContext(bc);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const nm = (e) => !!e.panZoom;
function Fo() {
  const e = qg(), t = me(), n = tm(), r = le(nm), o = H.useMemo(() => {
    const i = (f) => t.getState().nodeLookup.get(f), s = (f) => {
      n.nodeQueue.push(f);
    }, c = (f) => {
      n.edgeQueue.push(f);
    }, u = (f) => {
      var x, N;
      const { nodeLookup: a, nodeOrigin: h } = t.getState(), w = xs(f) ? f : a.get(f.id), y = w.parentId ? Ga(w.position, w.measured, w.parentId, a, h) : w.position, _ = {
        ...w,
        position: y,
        width: ((x = w.measured) == null ? void 0 : x.width) ?? w.width,
        height: ((N = w.measured) == null ? void 0 : N.height) ?? w.height
      };
      return Yt(_);
    }, l = (f, a, h = { replace: !1 }) => {
      s((w) => w.map((y) => {
        if (y.id === f) {
          const _ = typeof a == "function" ? a(y) : a;
          return h.replace && xs(_) ? _ : { ...y, ..._ };
        }
        return y;
      }));
    }, d = (f, a, h = { replace: !1 }) => {
      c((w) => w.map((y) => {
        if (y.id === f) {
          const _ = typeof a == "function" ? a(y) : a;
          return h.replace && Zg(_) ? _ : { ...y, ..._ };
        }
        return y;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((f) => ({ ...f })),
      getNode: (f) => {
        var a;
        return (a = i(f)) == null ? void 0 : a.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: f = [] } = t.getState();
        return f.map((a) => ({ ...a }));
      },
      getEdge: (f) => t.getState().edgeLookup.get(f),
      setNodes: s,
      setEdges: c,
      addNodes: (f) => {
        const a = Array.isArray(f) ? f : [f];
        n.nodeQueue.push((h) => [...h, ...a]);
      },
      addEdges: (f) => {
        const a = Array.isArray(f) ? f : [f];
        n.edgeQueue.push((h) => [...h, ...a]);
      },
      toObject: () => {
        const { nodes: f = [], edges: a = [], transform: h } = t.getState(), [w, y, _] = h;
        return {
          nodes: f.map((x) => ({ ...x })),
          edges: a.map((x) => ({ ...x })),
          viewport: {
            x: w,
            y,
            zoom: _
          }
        };
      },
      deleteElements: async ({ nodes: f = [], edges: a = [] }) => {
        const { nodes: h, edges: w, onNodesDelete: y, onEdgesDelete: _, triggerNodeChanges: x, triggerEdgeChanges: N, onDelete: m, onBeforeDelete: v } = t.getState(), { nodes: C, edges: k } = await Np({
          nodesToRemove: f,
          edgesToRemove: a,
          nodes: h,
          edges: w,
          onBeforeDelete: v
        }), S = k.length > 0, D = C.length > 0;
        if (S) {
          const j = k.map(vs);
          _ == null || _(k), N(j);
        }
        if (D) {
          const j = C.map(vs);
          y == null || y(C), x(j);
        }
        return (D || S) && (m == null || m({ nodes: C, edges: k })), { deletedNodes: C, deletedEdges: k };
      },
      getIntersectingNodes: (f, a = !0, h) => {
        const w = Vi(f), y = w ? f : u(f), _ = h !== void 0;
        return y ? (h || t.getState().nodes).filter((x) => {
          const N = t.getState().nodeLookup.get(x.id);
          if (N && !w && (x.id === f.id || !N.internals.positionAbsolute))
            return !1;
          const m = Yt(_ ? x : N), v = pn(m, y);
          return a && v > 0 || v >= y.width * y.height;
        }) : [];
      },
      isNodeIntersecting: (f, a, h = !0) => {
        const y = Vi(f) ? f : u(f);
        if (!y)
          return !1;
        const _ = pn(y, a);
        return h && _ > 0 || _ >= y.width * y.height;
      },
      updateNode: l,
      updateNodeData: (f, a, h = { replace: !1 }) => {
        l(f, (w) => {
          const y = typeof a == "function" ? a(w) : a;
          return h.replace ? { ...w, data: y } : { ...w, data: { ...w.data, ...y } };
        }, h);
      },
      updateEdge: d,
      updateEdgeData: (f, a, h = { replace: !1 }) => {
        d(f, (w) => {
          const y = typeof a == "function" ? a(w) : a;
          return h.replace ? { ...w, data: y } : { ...w, data: { ...w.data, ...y } };
        }, h);
      },
      getNodesBounds: (f) => {
        const { nodeLookup: a, nodeOrigin: h } = t.getState();
        return bp(f, { nodeLookup: a, nodeOrigin: h });
      },
      getHandleConnections: ({ type: f, id: a, nodeId: h }) => {
        var w;
        return Array.from(((w = t.getState().connectionLookup.get(`${h}-${f}${a ? `-${a}` : ""}`)) == null ? void 0 : w.values()) ?? []);
      },
      getNodeConnections: ({ type: f, handleId: a, nodeId: h }) => {
        var w;
        return Array.from(((w = t.getState().connectionLookup.get(`${h}${f ? a ? `-${f}-${a}` : `-${f}` : ""}`)) == null ? void 0 : w.values()) ?? []);
      },
      fitView: async (f) => {
        const a = t.getState().fitViewResolver ?? Rp();
        return t.setState({ fitViewQueued: !0, fitViewOptions: f, fitViewResolver: a }), n.nodeQueue.push((h) => [...h]), a.promise;
      }
    };
  }, []);
  return H.useMemo(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const bs = (e) => e.selected, rm = { actInsideInputWithModifier: !1 }, om = typeof window < "u" ? window : void 0;
function im({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = me(), { deleteElements: r } = Fo(), o = mn(e, rm), i = mn(t, { target: om });
  H.useEffect(() => {
    if (o) {
      const { edges: s, nodes: c } = n.getState();
      r({ nodes: c.filter(bs), edges: s.filter(bs) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), H.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function sm(e) {
  const t = me();
  H.useEffect(() => {
    const n = () => {
      var o, i;
      if (!e.current)
        return !1;
      const r = jo(e.current);
      (r.height === 0 || r.width === 0) && ((i = (o = t.getState()).onError) == null || i.call(o, "004", Re.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
    };
    if (e.current) {
      n(), window.addEventListener("resize", n);
      const r = new ResizeObserver(() => n());
      return r.observe(e.current), () => {
        window.removeEventListener("resize", n), r && e.current && r.unobserve(e.current);
      };
    }
  }, []);
}
const Dr = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, am = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib
});
function cm({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = gt.Free, zoomOnDoubleClick: s = !0, panOnDrag: c = !0, defaultViewport: u, translateExtent: l, minZoom: d, maxZoom: f, zoomActivationKeyCode: a, preventScrolling: h = !0, children: w, noWheelClassName: y, noPanClassName: _, onViewportChange: x, isControlledViewport: N, paneClickDistance: m }) {
  const v = me(), C = H.useRef(null), { userSelectionActive: k, lib: S } = le(am, we), D = mn(a), j = H.useRef();
  sm(C);
  const B = H.useCallback(($) => {
    x == null || x({ x: $[0], y: $[1], zoom: $[2] }), N || v.setState({ transform: $ });
  }, [x, N]);
  return H.useEffect(() => {
    if (C.current) {
      j.current = ag({
        domNode: C.current,
        minZoom: d,
        maxZoom: f,
        translateExtent: l,
        viewport: u,
        paneClickDistance: m,
        onDraggingChange: (b) => v.setState({ paneDragging: b }),
        onPanZoomStart: (b, P) => {
          const { onViewportChangeStart: O, onMoveStart: T } = v.getState();
          T == null || T(b, P), O == null || O(P);
        },
        onPanZoom: (b, P) => {
          const { onViewportChange: O, onMove: T } = v.getState();
          T == null || T(b, P), O == null || O(P);
        },
        onPanZoomEnd: (b, P) => {
          const { onViewportChangeEnd: O, onMoveEnd: T } = v.getState();
          T == null || T(b, P), O == null || O(P);
        }
      });
      const { x: $, y: F, zoom: V } = j.current.getViewport();
      return v.setState({
        panZoom: j.current,
        transform: [$, F, V],
        domNode: C.current.closest(".react-flow")
      }), () => {
        var b;
        (b = j.current) == null || b.destroy();
      };
    }
  }, []), H.useEffect(() => {
    var $;
    ($ = j.current) == null || $.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: c,
      zoomActivationKeyPressed: D,
      preventScrolling: h,
      noPanClassName: _,
      userSelectionActive: k,
      noWheelClassName: y,
      lib: S,
      onTransformChange: B
    });
  }, [
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    c,
    D,
    h,
    _,
    k,
    y,
    S,
    B
  ]), I.jsx("div", { className: "react-flow__renderer", ref: C, style: Dr, children: w });
}
const um = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function lm() {
  const { userSelectionActive: e, userSelectionRect: t } = le(um, we);
  return e && t ? I.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const eo = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, fm = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function dm({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = Bt.Full, panOnDrag: r, selectionOnDrag: o, onSelectionStart: i, onSelectionEnd: s, onPaneClick: c, onPaneContextMenu: u, onPaneScroll: l, onPaneMouseEnter: d, onPaneMouseMove: f, onPaneMouseLeave: a, children: h }) {
  const w = me(), { userSelectionActive: y, elementsSelectable: _, dragging: x, connectionInProgress: N } = le(fm, we), m = _ && (e || y), v = H.useRef(null), C = H.useRef(), k = H.useRef(/* @__PURE__ */ new Set()), S = H.useRef(/* @__PURE__ */ new Set()), D = H.useRef(!1), j = H.useRef(!1), B = (T) => {
    if (D.current || N) {
      D.current = !1;
      return;
    }
    c == null || c(T), w.getState().resetSelectedElements(), w.setState({ nodesSelectionActive: !1 });
  }, $ = (T) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      T.preventDefault();
      return;
    }
    u == null || u(T);
  }, F = l ? (T) => l(T) : void 0, V = (T) => {
    var A, z;
    const { resetSelectedElements: L, domNode: R } = w.getState();
    if (C.current = R == null ? void 0 : R.getBoundingClientRect(), !_ || !e || T.button !== 0 || T.target !== v.current || !C.current)
      return;
    (z = (A = T.target) == null ? void 0 : A.setPointerCapture) == null || z.call(A, T.pointerId), j.current = !0, D.current = !1;
    const { x: p, y: E } = We(T.nativeEvent, C.current);
    L(), w.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: p,
        startY: E,
        x: p,
        y: E
      }
    }), i == null || i(T);
  }, b = (T) => {
    const { userSelectionRect: L, transform: R, nodeLookup: p, edgeLookup: E, connectionLookup: A, triggerNodeChanges: z, triggerEdgeChanges: Y, defaultEdgeOptions: U } = w.getState();
    if (!C.current || !L)
      return;
    D.current = !0;
    const { x: W, y: G } = We(T.nativeEvent, C.current), { startX: X, startY: Q } = L, se = {
      startX: X,
      startY: Q,
      x: W < X ? W : X,
      y: G < Q ? G : Q,
      width: Math.abs(W - X),
      height: Math.abs(G - Q)
    }, te = k.current, Z = S.current;
    k.current = new Set(Ba(p, se, R, n === Bt.Partial, !0).map((ue) => ue.id)), S.current = /* @__PURE__ */ new Set();
    const ge = (U == null ? void 0 : U.selectable) ?? !0;
    for (const ue of k.current) {
      const ye = A.get(ue);
      if (ye)
        for (const { edgeId: he } of ye.values()) {
          const Ae = E.get(he);
          Ae && (Ae.selectable ?? ge) && S.current.add(he);
        }
    }
    if (!Yi(te, k.current)) {
      const ue = Tt(p, k.current, !0);
      z(ue);
    }
    if (!Yi(Z, S.current)) {
      const ue = Tt(E, S.current);
      Y(ue);
    }
    w.setState({
      userSelectionRect: se,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, P = (T) => {
    var R, p;
    if (T.button !== 0 || !j.current)
      return;
    (p = (R = T.target) == null ? void 0 : R.releasePointerCapture) == null || p.call(R, T.pointerId);
    const { userSelectionRect: L } = w.getState();
    !y && L && T.target === v.current && (B == null || B(T)), w.setState({
      userSelectionActive: !1,
      userSelectionRect: null,
      nodesSelectionActive: k.current.size > 0
    }), s == null || s(T), (t || o) && (D.current = !1), j.current = !1;
  }, O = r === !0 || Array.isArray(r) && r.includes(0);
  return I.jsxs("div", { className: xe(["react-flow__pane", { draggable: O, dragging: x, selection: e }]), onClick: m ? void 0 : eo(B, v), onContextMenu: eo($, v), onWheel: eo(F, v), onPointerEnter: m ? void 0 : d, onPointerDown: m ? V : f, onPointerMove: m ? b : f, onPointerUp: m ? P : void 0, onPointerLeave: a, ref: v, style: Dr, children: [h, I.jsx(lm, {})] });
}
function So({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: c, onError: u } = t.getState(), l = c.get(e);
  if (!l) {
    u == null || u("012", Re.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && s) && (i({ nodes: [l], edges: [] }), requestAnimationFrame(() => {
    var d;
    return (d = r == null ? void 0 : r.current) == null ? void 0 : d.blur();
  })) : o([e]);
}
function Ec({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const c = me(), [u, l] = H.useState(!1), d = H.useRef();
  return H.useEffect(() => {
    d.current = Up({
      getStoreItems: () => c.getState(),
      onNodeMouseDown: (f) => {
        So({
          id: f,
          store: c,
          nodeRef: e
        });
      },
      onDragStart: () => {
        l(!0);
      },
      onDragStop: () => {
        l(!1);
      }
    });
  }, []), H.useEffect(() => {
    var f, a;
    if (t)
      (f = d.current) == null || f.destroy();
    else if (e.current)
      return (a = d.current) == null || a.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var h;
        (h = d.current) == null || h.destroy();
      };
  }, [n, r, t, i, e, o]), u;
}
const hm = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function Sc() {
  const e = me();
  return H.useCallback((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: c, updateNodePositions: u, nodeLookup: l, nodeOrigin: d } = e.getState(), f = /* @__PURE__ */ new Map(), a = hm(s), h = o ? i[0] : 5, w = o ? i[1] : 5, y = n.direction.x * h * n.factor, _ = n.direction.y * w * n.factor;
    for (const [, x] of l) {
      if (!a(x))
        continue;
      let N = {
        x: x.internals.positionAbsolute.x + y,
        y: x.internals.positionAbsolute.y + _
      };
      o && (N = Ar(N, i));
      const { position: m, positionAbsolute: v } = Va({
        nodeId: x.id,
        nextPosition: N,
        nodeLookup: l,
        nodeExtent: r,
        nodeOrigin: d,
        onError: c
      });
      x.position = m, x.internals.positionAbsolute = v, f.set(x.id, x);
    }
    u(f);
  }, []);
}
const Wo = H.createContext(null), pm = Wo.Provider;
Wo.Consumer;
const Cc = () => H.useContext(Wo), gm = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), mm = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: c, toHandle: u, isValid: l } = s, d = (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n;
  return {
    connectingFrom: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.id) === t && (c == null ? void 0 : c.type) === n,
    connectingTo: d,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === wt.Strict ? (c == null ? void 0 : c.type) !== n : e !== (c == null ? void 0 : c.nodeId) || t !== (c == null ? void 0 : c.id),
    connectionInProcess: !!c,
    clickConnectionInProcess: !!o,
    valid: d && l
  };
};
function ym({ type: e = "source", position: t = ee.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: c, children: u, className: l, onMouseDown: d, onTouchStart: f, ...a }, h) {
  var P, O;
  const w = s || null, y = e === "target", _ = me(), x = Cc(), { connectOnClick: N, noPanClassName: m, rfId: v } = le(gm, we), { connectingFrom: C, connectingTo: k, clickConnecting: S, isPossibleEndHandle: D, connectionInProcess: j, clickConnectionInProcess: B, valid: $ } = le(mm(x, w, e), we);
  x || (O = (P = _.getState()).onError) == null || O.call(P, "010", Re.error010());
  const F = (T) => {
    const { defaultEdgeOptions: L, onConnect: R, hasDefaultEdges: p } = _.getState(), E = {
      ...L,
      ...T
    };
    if (p) {
      const { edges: A, setEdges: z } = _.getState();
      z(tc(E, A));
    }
    R == null || R(E), c == null || c(E);
  }, V = (T) => {
    if (!x)
      return;
    const L = Za(T.nativeEvent);
    if (o && (L && T.button === 0 || !L)) {
      const R = _.getState();
      Eo.onPointerDown(T.nativeEvent, {
        autoPanOnConnect: R.autoPanOnConnect,
        connectionMode: R.connectionMode,
        connectionRadius: R.connectionRadius,
        domNode: R.domNode,
        nodeLookup: R.nodeLookup,
        lib: R.lib,
        isTarget: y,
        handleId: w,
        nodeId: x,
        flowId: R.rfId,
        panBy: R.panBy,
        cancelConnection: R.cancelConnection,
        onConnectStart: R.onConnectStart,
        onConnectEnd: R.onConnectEnd,
        updateConnection: R.updateConnection,
        onConnect: F,
        isValidConnection: n || R.isValidConnection,
        getTransform: () => _.getState().transform,
        getFromHandle: () => _.getState().connection.fromHandle,
        autoPanSpeed: R.autoPanSpeed
      });
    }
    L ? d == null || d(T) : f == null || f(T);
  }, b = (T) => {
    const { onClickConnectStart: L, onClickConnectEnd: R, connectionClickStartHandle: p, connectionMode: E, isValidConnection: A, lib: z, rfId: Y, nodeLookup: U, connection: W } = _.getState();
    if (!x || !p && !o)
      return;
    if (!p) {
      L == null || L(T.nativeEvent, { nodeId: x, handleId: w, handleType: e }), _.setState({ connectionClickStartHandle: { nodeId: x, type: e, id: w } });
      return;
    }
    const G = qa(T.target), X = n || A, { connection: Q, isValid: se } = Eo.isValid(T.nativeEvent, {
      handle: {
        nodeId: x,
        id: w,
        type: e
      },
      connectionMode: E,
      fromNodeId: p.nodeId,
      fromHandleId: p.id || null,
      fromType: p.type,
      isValidConnection: X,
      flowId: Y,
      doc: G,
      lib: z,
      nodeLookup: U
    });
    se && Q && F(Q);
    const te = structuredClone(W);
    delete te.inProgress, te.toPosition = te.toHandle ? te.toHandle.position : null, R == null || R(T, te), _.setState({ connectionClickStartHandle: null });
  };
  return I.jsx("div", { "data-handleid": w, "data-nodeid": x, "data-handlepos": t, "data-id": `${v}-${x}-${w}-${e}`, className: xe([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    m,
    l,
    {
      source: !y,
      target: y,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: S,
      connectingfrom: C,
      connectingto: k,
      valid: $,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!j || D) && (j || B ? i : o)
    }
  ]), onMouseDown: V, onTouchStart: V, onClick: N ? b : void 0, ref: h, ...a, children: u });
}
const ot = H.memo(_c(ym));
function wm({ data: e, isConnectable: t, sourcePosition: n = ee.Bottom }) {
  return I.jsxs(I.Fragment, { children: [e == null ? void 0 : e.label, I.jsx(ot, { type: "source", position: n, isConnectable: t })] });
}
function vm({ data: e, isConnectable: t, targetPosition: n = ee.Top, sourcePosition: r = ee.Bottom }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(ot, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, I.jsx(ot, { type: "source", position: r, isConnectable: t })] });
}
function xm() {
  return null;
}
function _m({ data: e, isConnectable: t, targetPosition: n = ee.Top }) {
  return I.jsxs(I.Fragment, { children: [I.jsx(ot, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const gr = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, Es = {
  input: wm,
  default: vm,
  output: _m,
  group: xm
};
function bm(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const Em = (e) => {
  const { width: t, height: n, x: r, y: o } = _n(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Ie(t) ? t : null,
    height: Ie(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function Sm({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = me(), { width: o, height: i, transformString: s, userSelectionActive: c } = le(Em, we), u = Sc(), l = H.useRef(null);
  if (H.useEffect(() => {
    var a;
    n || (a = l.current) == null || a.focus({
      preventScroll: !0
    });
  }, [n]), Ec({
    nodeRef: l
  }), c || !o || !i)
    return null;
  const d = e ? (a) => {
    const h = r.getState().nodes.filter((w) => w.selected);
    e(a, h);
  } : void 0, f = (a) => {
    Object.prototype.hasOwnProperty.call(gr, a.key) && (a.preventDefault(), u({
      direction: gr[a.key],
      factor: a.shiftKey ? 4 : 1
    }));
  };
  return I.jsx("div", { className: xe(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: I.jsx("div", { ref: l, className: "react-flow__nodesselection-rect", onContextMenu: d, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : f, style: {
    width: o,
    height: i
  } }) });
}
const Ss = typeof window < "u" ? window : void 0, Cm = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function Nc({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: c, deleteKeyCode: u, selectionKeyCode: l, selectionOnDrag: d, selectionMode: f, onSelectionStart: a, onSelectionEnd: h, multiSelectionKeyCode: w, panActivationKeyCode: y, zoomActivationKeyCode: _, elementsSelectable: x, zoomOnScroll: N, zoomOnPinch: m, panOnScroll: v, panOnScrollSpeed: C, panOnScrollMode: k, zoomOnDoubleClick: S, panOnDrag: D, defaultViewport: j, translateExtent: B, minZoom: $, maxZoom: F, preventScrolling: V, onSelectionContextMenu: b, noWheelClassName: P, noPanClassName: O, disableKeyboardA11y: T, onViewportChange: L, isControlledViewport: R }) {
  const { nodesSelectionActive: p, userSelectionActive: E } = le(Cm), A = mn(l, { target: Ss }), z = mn(y, { target: Ss }), Y = z || D, U = z || v, W = d && Y !== !0, G = A || E || W;
  return im({ deleteKeyCode: u, multiSelectionKeyCode: w }), I.jsx(cm, { onPaneContextMenu: i, elementsSelectable: x, zoomOnScroll: N, zoomOnPinch: m, panOnScroll: U, panOnScrollSpeed: C, panOnScrollMode: k, zoomOnDoubleClick: S, panOnDrag: !A && Y, defaultViewport: j, translateExtent: B, minZoom: $, maxZoom: F, zoomActivationKeyCode: _, preventScrolling: V, noWheelClassName: P, noPanClassName: O, onViewportChange: L, isControlledViewport: R, paneClickDistance: c, children: I.jsxs(dm, { onSelectionStart: a, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: Y, isSelecting: !!G, selectionMode: f, selectionKeyPressed: A, selectionOnDrag: W, children: [e, p && I.jsx(Sm, { onSelectionContextMenu: b, noPanClassName: O, disableKeyboardA11y: T })] }) });
}
Nc.displayName = "FlowRenderer";
const Nm = H.memo(Nc), km = (e) => (t) => e ? Ba(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function Om(e) {
  return le(H.useCallback(km(e), [e]), we);
}
const Rm = (e) => e.updateNodeInternals;
function Tm() {
  const e = le(Rm), [t] = H.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const r = /* @__PURE__ */ new Map();
    n.forEach((o) => {
      const i = o.target.getAttribute("data-id");
      r.set(i, {
        id: i,
        nodeElement: o.target,
        force: !0
      });
    }), e(r);
  }));
  return H.useEffect(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function Am({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = me(), i = H.useRef(null), s = H.useRef(null), c = H.useRef(e.sourcePosition), u = H.useRef(e.targetPosition), l = H.useRef(t), d = n && !!e.internals.handleBounds;
  return H.useEffect(() => {
    i.current && !e.hidden && (!d || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [d, e.hidden]), H.useEffect(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), H.useEffect(() => {
    if (i.current) {
      const f = l.current !== t, a = c.current !== e.sourcePosition, h = u.current !== e.targetPosition;
      (f || a || h) && (l.current = t, c.current = e.sourcePosition, u.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function Mm({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: c, elementsSelectable: u, nodesConnectable: l, nodesFocusable: d, resizeObserver: f, noDragClassName: a, noPanClassName: h, disableKeyboardA11y: w, rfId: y, nodeTypes: _, nodeClickDistance: x, onError: N }) {
  const { node: m, internals: v, isParent: C } = le((G) => {
    const X = G.nodeLookup.get(e), Q = G.parentLookup.has(e);
    return {
      node: X,
      internals: X.internals,
      isParent: Q
    };
  }, we);
  let k = m.type || "default", S = (_ == null ? void 0 : _[k]) || Es[k];
  S === void 0 && (N == null || N("003", Re.error003(k)), k = "default", S = Es.default);
  const D = !!(m.draggable || c && typeof m.draggable > "u"), j = !!(m.selectable || u && typeof m.selectable > "u"), B = !!(m.connectable || l && typeof m.connectable > "u"), $ = !!(m.focusable || d && typeof m.focusable > "u"), F = me(), V = Ua(m), b = Am({ node: m, nodeType: k, hasDimensions: V, resizeObserver: f }), P = Ec({
    nodeRef: b,
    disabled: m.hidden || !D,
    noDragClassName: a,
    handleSelector: m.dragHandle,
    nodeId: e,
    isSelectable: j,
    nodeClickDistance: x
  }), O = Sc();
  if (m.hidden)
    return null;
  const T = Ue(m), L = bm(m), R = j || D || t || n || r || o, p = n ? (G) => n(G, { ...v.userNode }) : void 0, E = r ? (G) => r(G, { ...v.userNode }) : void 0, A = o ? (G) => o(G, { ...v.userNode }) : void 0, z = i ? (G) => i(G, { ...v.userNode }) : void 0, Y = s ? (G) => s(G, { ...v.userNode }) : void 0, U = (G) => {
    const { selectNodesOnDrag: X, nodeDragThreshold: Q } = F.getState();
    j && (!X || !D || Q > 0) && So({
      id: e,
      store: F,
      nodeRef: b
    }), t && t(G, { ...v.userNode });
  }, W = (G) => {
    if (!(Ka(G.nativeEvent) || w))
      if (La.includes(G.key) && j) {
        const X = G.key === "Escape";
        So({
          id: e,
          store: F,
          unselect: X,
          nodeRef: b
        });
      } else D && m.selected && Object.prototype.hasOwnProperty.call(gr, G.key) && (G.preventDefault(), F.setState({
        ariaLiveMessage: `Moved selected node ${G.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~v.positionAbsolute.x}, y: ${~~v.positionAbsolute.y}`
      }), O({
        direction: gr[G.key],
        factor: G.shiftKey ? 4 : 1
      }));
  };
  return I.jsx("div", { className: xe([
    "react-flow__node",
    `react-flow__node-${k}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [h]: D
    },
    m.className,
    {
      selected: m.selected,
      selectable: j,
      parent: C,
      draggable: D,
      dragging: P
    }
  ]), ref: b, style: {
    zIndex: v.z,
    transform: `translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,
    pointerEvents: R ? "all" : "none",
    visibility: V ? "visible" : "hidden",
    ...m.style,
    ...L
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: p, onMouseMove: E, onMouseLeave: A, onContextMenu: z, onClick: U, onDoubleClick: Y, onKeyDown: $ ? W : void 0, tabIndex: $ ? 0 : void 0, role: $ ? "button" : void 0, "aria-describedby": w ? void 0 : `${gc}-${y}`, "aria-label": m.ariaLabel, children: I.jsx(pm, { value: e, children: I.jsx(S, { id: e, data: m.data, type: k, positionAbsoluteX: v.positionAbsolute.x, positionAbsoluteY: v.positionAbsolute.y, selected: m.selected ?? !1, selectable: j, draggable: D, deletable: m.deletable ?? !0, isConnectable: B, sourcePosition: m.sourcePosition, targetPosition: m.targetPosition, dragging: P, dragHandle: m.dragHandle, zIndex: v.z, parentId: m.parentId, ...T }) }) });
}
const Pm = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function kc(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = le(Pm, we), s = Om(e.onlyRenderVisibleElements), c = Tm();
  return I.jsx("div", { className: "react-flow__nodes", style: Dr, children: s.map((u) => (
    /*
     * The split of responsibilities between NodeRenderer and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For example, when you’re dragging a single node, that node gets
     * updated multiple times per second. If `NodeRenderer` were to update
     * every time, it would have to re-run the `nodes.map()` loop every
     * time. This gets pricey with hundreds of nodes, especially if every
     * loop cycle does more than just rendering a JSX element!
     *
     * As a result of this choice, we took the following implementation
     * decisions:
     * - NodeRenderer subscribes *only* to node IDs – and therefore
     *   rerender *only* when visible nodes are added or removed.
     * - NodeRenderer performs all operations the result of which can be
     *   shared between nodes (such as creating the `ResizeObserver`
     *   instance, or subscribing to `selector`). This means extra prop
     *   drilling into `NodeComponentWrapper`, but it means we need to run
     *   these operations only once – instead of once per node.
     * - Any operations that you’d normally write inside `nodes.map` are
     *   moved into `NodeComponentWrapper`. This ensures they are
     *   memorized – so if `NodeRenderer` *has* to rerender, it only
     *   needs to regenerate the list of nodes, nothing else.
     */
    I.jsx(Mm, { id: u, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: c, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, u)
  )) });
}
kc.displayName = "NodeRenderer";
const Im = H.memo(kc);
function Dm(e) {
  return le(H.useCallback((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && Mp({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), we);
}
const $m = ({ color: e = "none", strokeWidth: t = 1 }) => I.jsx("polyline", { style: {
  stroke: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" }), Lm = ({ color: e = "none", strokeWidth: t = 1 }) => I.jsx("polyline", { style: {
  stroke: e,
  fill: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" }), Cs = {
  [st.Arrow]: $m,
  [st.ArrowClosed]: Lm
};
function jm(e) {
  const t = me();
  return H.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Cs, e) ? Cs[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", Re.error009(e)), null);
  }, [e]);
}
const Hm = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: c = "auto-start-reverse" }) => {
  const u = jm(t);
  return u ? I.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: c, refX: "0", refY: "0", children: I.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, Oc = ({ defaultColor: e, rfId: t }) => {
  const n = le((i) => i.edges), r = le((i) => i.defaultEdgeOptions), o = H.useMemo(() => Hp(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? I.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: I.jsx("defs", { children: o.map((i) => I.jsx(Hm, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
Oc.displayName = "MarkerDefinitions";
var zm = H.memo(Oc);
function Rc({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: c = 2, children: u, className: l, ...d }) {
  const [f, a] = H.useState({ x: 1, y: 0, width: 0, height: 0 }), h = xe(["react-flow__edge-textwrapper", l]), w = H.useRef(null);
  return H.useEffect(() => {
    if (w.current) {
      const y = w.current.getBBox();
      a({
        x: y.x,
        y: y.y,
        width: y.width,
        height: y.height
      });
    }
  }, [n]), n ? I.jsxs("g", { transform: `translate(${e - f.width / 2} ${t - f.height / 2})`, className: h, visibility: f.width ? "visible" : "hidden", ...d, children: [o && I.jsx("rect", { width: f.width + 2 * s[0], x: -s[0], y: -s[1], height: f.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: c, ry: c }), I.jsx("text", { className: "react-flow__edge-text", y: f.height / 2, dy: "0.3em", ref: w, style: r, children: n }), u] }) : null;
}
Rc.displayName = "EdgeText";
const Bm = H.memo(Rc);
function En({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, interactionWidth: l = 20, ...d }) {
  return I.jsxs(I.Fragment, { children: [I.jsx("path", { ...d, d: e, fill: "none", className: xe(["react-flow__edge-path", d.className]) }), l && I.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: l, className: "react-flow__edge-interaction" }), r && Ie(t) && Ie(n) ? I.jsx(Bm, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u }) : null] });
}
function Ns({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === ee.Left || e === ee.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function Tc({ sourceX: e, sourceY: t, sourcePosition: n = ee.Bottom, targetX: r, targetY: o, targetPosition: i = ee.Top }) {
  const [s, c] = Ns({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, l] = Ns({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [d, f, a, h] = Qa({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: s,
    sourceControlY: c,
    targetControlX: u,
    targetControlY: l
  });
  return [
    `M${e},${t} C${s},${c} ${u},${l} ${r},${o}`,
    d,
    f,
    a,
    h
  ];
}
function Ac(e) {
  return H.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: c, label: u, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: a, labelBgBorderRadius: h, style: w, markerEnd: y, markerStart: _, interactionWidth: x }) => {
    const [N, m, v] = Tc({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: c
    }), C = e.isInternal ? void 0 : t;
    return I.jsx(En, { id: C, path: N, labelX: m, labelY: v, label: u, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: a, labelBgBorderRadius: h, style: w, markerEnd: y, markerStart: _, interactionWidth: x });
  });
}
const Vm = Ac({ isInternal: !1 }), Mc = Ac({ isInternal: !0 });
Vm.displayName = "SimpleBezierEdge";
Mc.displayName = "SimpleBezierEdgeInternal";
function Pc(e) {
  return H.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: a, sourcePosition: h = ee.Bottom, targetPosition: w = ee.Top, markerEnd: y, markerStart: _, pathOptions: x, interactionWidth: N }) => {
    const [m, v, C] = xo({
      sourceX: n,
      sourceY: r,
      sourcePosition: h,
      targetX: o,
      targetY: i,
      targetPosition: w,
      borderRadius: x == null ? void 0 : x.borderRadius,
      offset: x == null ? void 0 : x.offset
    }), k = e.isInternal ? void 0 : t;
    return I.jsx(En, { id: k, path: m, labelX: v, labelY: C, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: a, markerEnd: y, markerStart: _, interactionWidth: N });
  });
}
const Ic = Pc({ isInternal: !1 }), Dc = Pc({ isInternal: !0 });
Ic.displayName = "SmoothStepEdge";
Dc.displayName = "SmoothStepEdgeInternal";
function $c(e) {
  return H.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return I.jsx(Ic, { ...n, id: r, pathOptions: H.useMemo(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const Ym = $c({ isInternal: !1 }), Lc = $c({ isInternal: !0 });
Ym.displayName = "StepEdge";
Lc.displayName = "StepEdgeInternal";
function jc(e) {
  return H.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: a, markerEnd: h, markerStart: w, interactionWidth: y }) => {
    const [_, x, N] = Ho({ sourceX: n, sourceY: r, targetX: o, targetY: i }), m = e.isInternal ? void 0 : t;
    return I.jsx(En, { id: m, path: _, labelX: x, labelY: N, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: d, labelBgBorderRadius: f, style: a, markerEnd: h, markerStart: w, interactionWidth: y });
  });
}
const Fm = jc({ isInternal: !1 }), Hc = jc({ isInternal: !0 });
Fm.displayName = "StraightEdge";
Hc.displayName = "StraightEdgeInternal";
function zc(e) {
  return H.memo(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = ee.Bottom, targetPosition: c = ee.Top, label: u, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: a, labelBgBorderRadius: h, style: w, markerEnd: y, markerStart: _, pathOptions: x, interactionWidth: N }) => {
    const [m, v, C] = Ja({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: c,
      curvature: x == null ? void 0 : x.curvature
    }), k = e.isInternal ? void 0 : t;
    return I.jsx(En, { id: k, path: m, labelX: v, labelY: C, label: u, labelStyle: l, labelShowBg: d, labelBgStyle: f, labelBgPadding: a, labelBgBorderRadius: h, style: w, markerEnd: y, markerStart: _, interactionWidth: N });
  });
}
const Wm = zc({ isInternal: !1 }), Bc = zc({ isInternal: !0 });
Wm.displayName = "BezierEdge";
Bc.displayName = "BezierEdgeInternal";
const ks = {
  default: Bc,
  straight: Hc,
  step: Lc,
  smoothstep: Dc,
  simplebezier: Mc
}, Os = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, Xm = (e, t, n) => n === ee.Left ? e - t : n === ee.Right ? e + t : e, Um = (e, t, n) => n === ee.Top ? e - t : n === ee.Bottom ? e + t : e, Rs = "react-flow__edgeupdater";
function Ts({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: c }) {
  return I.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: xe([Rs, `${Rs}-${c}`]), cx: Xm(t, r, e), cy: Um(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function Gm({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: c, targetPosition: u, onReconnect: l, onReconnectStart: d, onReconnectEnd: f, setReconnecting: a, setUpdateHover: h }) {
  const w = me(), y = (v, C) => {
    if (v.button !== 0)
      return;
    const { autoPanOnConnect: k, domNode: S, isValidConnection: D, connectionMode: j, connectionRadius: B, lib: $, onConnectStart: F, onConnectEnd: V, cancelConnection: b, nodeLookup: P, rfId: O, panBy: T, updateConnection: L } = w.getState(), R = C.type === "target";
    a(!0), d == null || d(v, n, C.type);
    const p = (A, z) => {
      a(!1), f == null || f(A, n, C.type, z);
    }, E = (A) => l == null ? void 0 : l(n, A);
    Eo.onPointerDown(v.nativeEvent, {
      autoPanOnConnect: k,
      connectionMode: j,
      connectionRadius: B,
      domNode: S,
      handleId: C.id,
      nodeId: C.nodeId,
      nodeLookup: P,
      isTarget: R,
      edgeUpdaterType: C.type,
      lib: $,
      flowId: O,
      cancelConnection: b,
      panBy: T,
      isValidConnection: D,
      onConnect: E,
      onConnectStart: F,
      onConnectEnd: V,
      onReconnectEnd: p,
      updateConnection: L,
      getTransform: () => w.getState().transform,
      getFromHandle: () => w.getState().connection.fromHandle
    });
  }, _ = (v) => y(v, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), x = (v) => y(v, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), N = () => h(!0), m = () => h(!1);
  return I.jsxs(I.Fragment, { children: [(e === !0 || e === "source") && I.jsx(Ts, { position: c, centerX: r, centerY: o, radius: t, onMouseDown: _, onMouseEnter: N, onMouseOut: m, type: "source" }), (e === !0 || e === "target") && I.jsx(Ts, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: x, onMouseEnter: N, onMouseOut: m, type: "target" })] });
}
function qm({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: l, reconnectRadius: d, onReconnect: f, onReconnectStart: a, onReconnectEnd: h, rfId: w, edgeTypes: y, noPanClassName: _, onError: x, disableKeyboardA11y: N }) {
  let m = le((Z) => Z.edgeLookup.get(e));
  const v = le((Z) => Z.defaultEdgeOptions);
  m = v ? { ...v, ...m } : m;
  let C = m.type || "default", k = (y == null ? void 0 : y[C]) || ks[C];
  k === void 0 && (x == null || x("011", Re.error011(C)), C = "default", k = ks.default);
  const S = !!(m.focusable || t && typeof m.focusable > "u"), D = typeof f < "u" && (m.reconnectable || n && typeof m.reconnectable > "u"), j = !!(m.selectable || r && typeof m.selectable > "u"), B = H.useRef(null), [$, F] = H.useState(!1), [V, b] = H.useState(!1), P = me(), { zIndex: O, sourceX: T, sourceY: L, targetX: R, targetY: p, sourcePosition: E, targetPosition: A } = le(H.useCallback((Z) => {
    const ge = Z.nodeLookup.get(m.source), ue = Z.nodeLookup.get(m.target);
    if (!ge || !ue)
      return {
        zIndex: m.zIndex,
        ...Os
      };
    const ye = jp({
      id: e,
      sourceNode: ge,
      targetNode: ue,
      sourceHandle: m.sourceHandle || null,
      targetHandle: m.targetHandle || null,
      connectionMode: Z.connectionMode,
      onError: x
    });
    return {
      zIndex: Ap({
        selected: m.selected,
        zIndex: m.zIndex,
        sourceNode: ge,
        targetNode: ue,
        elevateOnSelect: Z.elevateEdgesOnSelect
      }),
      ...ye || Os
    };
  }, [m.source, m.target, m.sourceHandle, m.targetHandle, m.selected, m.zIndex]), we), z = H.useMemo(() => m.markerStart ? `url('#${_o(m.markerStart, w)}')` : void 0, [m.markerStart, w]), Y = H.useMemo(() => m.markerEnd ? `url('#${_o(m.markerEnd, w)}')` : void 0, [m.markerEnd, w]);
  if (m.hidden || T === null || L === null || R === null || p === null)
    return null;
  const U = (Z) => {
    var he;
    const { addSelectedEdges: ge, unselectNodesAndEdges: ue, multiSelectionActive: ye } = P.getState();
    j && (P.setState({ nodesSelectionActive: !1 }), m.selected && ye ? (ue({ nodes: [], edges: [m] }), (he = B.current) == null || he.blur()) : ge([e])), o && o(Z, m);
  }, W = i ? (Z) => {
    i(Z, { ...m });
  } : void 0, G = s ? (Z) => {
    s(Z, { ...m });
  } : void 0, X = c ? (Z) => {
    c(Z, { ...m });
  } : void 0, Q = u ? (Z) => {
    u(Z, { ...m });
  } : void 0, se = l ? (Z) => {
    l(Z, { ...m });
  } : void 0, te = (Z) => {
    var ge;
    if (!N && La.includes(Z.key) && j) {
      const { unselectNodesAndEdges: ue, addSelectedEdges: ye } = P.getState();
      Z.key === "Escape" ? ((ge = B.current) == null || ge.blur(), ue({ edges: [m] })) : ye([e]);
    }
  };
  return I.jsx("svg", { style: { zIndex: O }, children: I.jsxs("g", { className: xe([
    "react-flow__edge",
    `react-flow__edge-${C}`,
    m.className,
    _,
    {
      selected: m.selected,
      animated: m.animated,
      inactive: !j && !o,
      updating: $,
      selectable: j
    }
  ]), onClick: U, onDoubleClick: W, onContextMenu: G, onMouseEnter: X, onMouseMove: Q, onMouseLeave: se, onKeyDown: S ? te : void 0, tabIndex: S ? 0 : void 0, role: S ? "button" : "img", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": m.ariaLabel === null ? void 0 : m.ariaLabel || `Edge from ${m.source} to ${m.target}`, "aria-describedby": S ? `${mc}-${w}` : void 0, ref: B, children: [!V && I.jsx(k, { id: e, source: m.source, target: m.target, type: m.type, selected: m.selected, animated: m.animated, selectable: j, deletable: m.deletable ?? !0, label: m.label, labelStyle: m.labelStyle, labelShowBg: m.labelShowBg, labelBgStyle: m.labelBgStyle, labelBgPadding: m.labelBgPadding, labelBgBorderRadius: m.labelBgBorderRadius, sourceX: T, sourceY: L, targetX: R, targetY: p, sourcePosition: E, targetPosition: A, data: m.data, style: m.style, sourceHandleId: m.sourceHandle, targetHandleId: m.targetHandle, markerStart: z, markerEnd: Y, pathOptions: "pathOptions" in m ? m.pathOptions : void 0, interactionWidth: m.interactionWidth }), D && I.jsx(Gm, { edge: m, isReconnectable: D, reconnectRadius: d, onReconnect: f, onReconnectStart: a, onReconnectEnd: h, sourceX: T, sourceY: L, targetX: R, targetY: p, sourcePosition: E, targetPosition: A, setUpdateHover: F, setReconnecting: b })] }) });
}
const Km = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function Vc({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: c, onEdgeMouseMove: u, onEdgeMouseLeave: l, onEdgeClick: d, reconnectRadius: f, onEdgeDoubleClick: a, onReconnectStart: h, onReconnectEnd: w, disableKeyboardA11y: y }) {
  const { edgesFocusable: _, edgesReconnectable: x, elementsSelectable: N, onError: m } = le(Km, we), v = Dm(t);
  return I.jsxs("div", { className: "react-flow__edges", children: [I.jsx(zm, { defaultColor: e, rfId: n }), v.map((C) => I.jsx(qm, { id: C, edgesFocusable: _, edgesReconnectable: x, elementsSelectable: N, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: l, onClick: d, reconnectRadius: f, onDoubleClick: a, onReconnectStart: h, onReconnectEnd: w, rfId: n, onError: m, edgeTypes: r, disableKeyboardA11y: y }, C))] });
}
Vc.displayName = "EdgeRenderer";
const Zm = H.memo(Vc), Qm = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Jm({ children: e }) {
  const t = le(Qm);
  return I.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function ey(e) {
  const t = Fo(), n = H.useRef(!1);
  H.useEffect(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const ty = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function ny(e) {
  const t = le(ty), n = me();
  return H.useEffect(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function ry(e) {
  return e.connection.inProgress ? { ...e.connection, to: bn(e.connection.to, e.transform) } : { ...e.connection };
}
function oy(e) {
  return ry;
}
function iy(e) {
  const t = oy();
  return le(t, we);
}
const sy = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function ay({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: c, inProgress: u } = le(sy, we);
  return !(i && o && u) ? null : I.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: I.jsx("g", { className: xe(["react-flow__connection", Ha(c)]), children: I.jsx(Yc, { style: t, type: n, CustomComponent: r, isValid: c }) }) });
}
const Yc = ({ style: e, type: t = rt.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: c, fromPosition: u, to: l, toNode: d, toHandle: f, toPosition: a } = iy();
  if (!o)
    return;
  if (n)
    return I.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: c, fromX: i.x, fromY: i.y, toX: l.x, toY: l.y, fromPosition: u, toPosition: a, connectionStatus: Ha(r), toNode: d, toHandle: f });
  let h = "";
  const w = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: u,
    targetX: l.x,
    targetY: l.y,
    targetPosition: a
  };
  switch (t) {
    case rt.Bezier:
      [h] = Ja(w);
      break;
    case rt.SimpleBezier:
      [h] = Tc(w);
      break;
    case rt.Step:
      [h] = xo({
        ...w,
        borderRadius: 0
      });
      break;
    case rt.SmoothStep:
      [h] = xo(w);
      break;
    default:
      [h] = Ho(w);
  }
  return I.jsx("path", { d: h, fill: "none", className: "react-flow__connection-path", style: e });
};
Yc.displayName = "ConnectionLine";
const cy = {};
function As(e = cy) {
  const t = H.useRef(e), n = me();
  H.useEffect(() => {
    var r, o;
    if (process.env.NODE_ENV === "development") {
      const i = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
      for (const s of i)
        if (t.current[s] !== e[s]) {
          (o = (r = n.getState()).onError) == null || o.call(r, "002", Re.error002());
          break;
        }
      t.current = e;
    }
  }, [e]);
}
function uy() {
  const e = me(), t = H.useRef(!1);
  H.useEffect(() => {
    var n, r;
    if (process.env.NODE_ENV === "development" && !t.current) {
      const o = document.querySelector(".react-flow__pane");
      o && window.getComputedStyle(o).zIndex !== "1" && ((r = (n = e.getState()).onError) == null || r.call(n, "013", Re.error013("react"))), t.current = !0;
    }
  }, []);
}
function Fc({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: l, onNodeContextMenu: d, onSelectionContextMenu: f, onSelectionStart: a, onSelectionEnd: h, connectionLineType: w, connectionLineStyle: y, connectionLineComponent: _, connectionLineContainerStyle: x, selectionKeyCode: N, selectionOnDrag: m, selectionMode: v, multiSelectionKeyCode: C, panActivationKeyCode: k, zoomActivationKeyCode: S, deleteKeyCode: D, onlyRenderVisibleElements: j, elementsSelectable: B, defaultViewport: $, translateExtent: F, minZoom: V, maxZoom: b, preventScrolling: P, defaultMarkerColor: O, zoomOnScroll: T, zoomOnPinch: L, panOnScroll: R, panOnScrollSpeed: p, panOnScrollMode: E, zoomOnDoubleClick: A, panOnDrag: z, onPaneClick: Y, onPaneMouseEnter: U, onPaneMouseMove: W, onPaneMouseLeave: G, onPaneScroll: X, onPaneContextMenu: Q, paneClickDistance: se, nodeClickDistance: te, onEdgeContextMenu: Z, onEdgeMouseEnter: ge, onEdgeMouseMove: ue, onEdgeMouseLeave: ye, reconnectRadius: he, onReconnect: Ae, onReconnectStart: xt, onReconnectEnd: Ut, noDragClassName: ne, noWheelClassName: Ge, noPanClassName: qe, disableKeyboardA11y: Ke, nodeExtent: _t, rfId: Be, viewport: Ze, onViewportChange: bt }) {
  return As(e), As(t), uy(), ey(n), ny(Ze), I.jsx(Nm, { onPaneClick: Y, onPaneMouseEnter: U, onPaneMouseMove: W, onPaneMouseLeave: G, onPaneContextMenu: Q, onPaneScroll: X, paneClickDistance: se, deleteKeyCode: D, selectionKeyCode: N, selectionOnDrag: m, selectionMode: v, onSelectionStart: a, onSelectionEnd: h, multiSelectionKeyCode: C, panActivationKeyCode: k, zoomActivationKeyCode: S, elementsSelectable: B, zoomOnScroll: T, zoomOnPinch: L, zoomOnDoubleClick: A, panOnScroll: R, panOnScrollSpeed: p, panOnScrollMode: E, panOnDrag: z, defaultViewport: $, translateExtent: F, minZoom: V, maxZoom: b, onSelectionContextMenu: f, preventScrolling: P, noDragClassName: ne, noWheelClassName: Ge, noPanClassName: qe, disableKeyboardA11y: Ke, onViewportChange: bt, isControlledViewport: !!Ze, children: I.jsxs(Jm, { children: [I.jsx(Zm, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: Ae, onReconnectStart: xt, onReconnectEnd: Ut, onlyRenderVisibleElements: j, onEdgeContextMenu: Z, onEdgeMouseEnter: ge, onEdgeMouseMove: ue, onEdgeMouseLeave: ye, reconnectRadius: he, defaultMarkerColor: O, noPanClassName: qe, disableKeyboardA11y: Ke, rfId: Be }), I.jsx(ay, { style: y, type: w, component: _, containerStyle: x }), I.jsx("div", { className: "react-flow__edgelabel-renderer" }), I.jsx(Im, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: l, onNodeContextMenu: d, nodeClickDistance: te, onlyRenderVisibleElements: j, noPanClassName: qe, noDragClassName: ne, disableKeyboardA11y: Ke, nodeExtent: _t, rfId: Be }), I.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Fc.displayName = "GraphView";
const ly = H.memo(Fc), Ms = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: c, minZoom: u = 0.5, maxZoom: l = 2, nodeOrigin: d, nodeExtent: f } = {}) => {
  const a = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), _ = r ?? t ?? [], x = n ?? e ?? [], N = d ?? [0, 0], m = f ?? hn;
  rc(w, y, _);
  const v = bo(x, a, h, {
    nodeOrigin: N,
    nodeExtent: m,
    elevateNodesOnSelect: !1
  });
  let C = [0, 0, 1];
  if (s && o && i) {
    const k = _n(a, {
      filter: (B) => !!((B.width || B.initialWidth) && (B.height || B.initialHeight))
    }), { x: S, y: D, zoom: j } = Lo(k, o, i, u, l, (c == null ? void 0 : c.padding) ?? 0.1);
    C = [S, D, j];
  }
  return {
    rfId: "1",
    width: 0,
    height: 0,
    transform: C,
    nodes: x,
    nodesInitialized: v,
    nodeLookup: a,
    parentLookup: h,
    edges: _,
    edgeLookup: y,
    connectionLookup: w,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: u,
    maxZoom: l,
    translateExtent: hn,
    nodeExtent: m,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: wt.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: N,
    nodeDragThreshold: 1,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    nodesFocusable: !0,
    edgesFocusable: !0,
    edgesReconnectable: !0,
    elementsSelectable: !0,
    elevateNodesOnSelect: !0,
    elevateEdgesOnSelect: !1,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    fitViewQueued: s ?? !1,
    fitViewOptions: c,
    fitViewResolver: null,
    connection: { ...ja },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: Xa,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1
  };
}, fy = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: c, minZoom: u, maxZoom: l, nodeOrigin: d, nodeExtent: f }) => kg((a, h) => {
  async function w() {
    const { nodeLookup: y, panZoom: _, fitViewOptions: x, fitViewResolver: N, width: m, height: v, minZoom: C, maxZoom: k } = h();
    _ && (await Cp({
      nodes: y,
      width: m,
      height: v,
      panZoom: _,
      minZoom: C,
      maxZoom: k
    }, x), N == null || N.resolve(!0), a({ fitViewResolver: null }));
  }
  return {
    ...Ms({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: c,
      minZoom: u,
      maxZoom: l,
      nodeOrigin: d,
      nodeExtent: f,
      defaultNodes: n,
      defaultEdges: r
    }),
    setNodes: (y) => {
      const { nodeLookup: _, parentLookup: x, nodeOrigin: N, elevateNodesOnSelect: m, fitViewQueued: v } = h(), C = bo(y, _, x, {
        nodeOrigin: N,
        nodeExtent: f,
        elevateNodesOnSelect: m,
        checkEquality: !0
      });
      v && C ? (w(), a({ nodes: y, nodesInitialized: C, fitViewQueued: !1, fitViewOptions: void 0 })) : a({ nodes: y, nodesInitialized: C });
    },
    setEdges: (y) => {
      const { connectionLookup: _, edgeLookup: x } = h();
      rc(_, x, y), a({ edges: y });
    },
    setDefaultNodesAndEdges: (y, _) => {
      if (y) {
        const { setNodes: x } = h();
        x(y), a({ hasDefaultNodes: !0 });
      }
      if (_) {
        const { setEdges: x } = h();
        x(_), a({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (y) => {
      const { triggerNodeChanges: _, nodeLookup: x, parentLookup: N, domNode: m, nodeOrigin: v, nodeExtent: C, debug: k, fitViewQueued: S } = h(), { changes: D, updatedInternals: j } = Fp(y, x, N, m, v, C);
      j && (Bp(x, N, { nodeOrigin: v, nodeExtent: C }), S ? (w(), a({ fitViewQueued: !1, fitViewOptions: void 0 })) : a({}), (D == null ? void 0 : D.length) > 0 && (k && console.log("React Flow: trigger node changes", D), _ == null || _(D)));
    },
    updateNodePositions: (y, _ = !1) => {
      const x = [], N = [], { nodeLookup: m, triggerNodeChanges: v } = h();
      for (const [C, k] of y) {
        const S = m.get(C), D = !!(S != null && S.expandParent && (S != null && S.parentId) && (k != null && k.position)), j = {
          id: C,
          type: "position",
          position: D ? {
            x: Math.max(0, k.position.x),
            y: Math.max(0, k.position.y)
          } : k.position,
          dragging: _
        };
        D && S.parentId && x.push({
          id: C,
          parentId: S.parentId,
          rect: {
            ...k.internals.positionAbsolute,
            width: k.measured.width ?? 0,
            height: k.measured.height ?? 0
          }
        }), N.push(j);
      }
      if (x.length > 0) {
        const { parentLookup: C, nodeOrigin: k } = h(), S = Yo(x, m, C, k);
        N.push(...S);
      }
      v(N);
    },
    triggerNodeChanges: (y) => {
      const { onNodesChange: _, setNodes: x, nodes: N, hasDefaultNodes: m, debug: v } = h();
      if (y != null && y.length) {
        if (m) {
          const C = vc(y, N);
          x(C);
        }
        v && console.log("React Flow: trigger node changes", y), _ == null || _(y);
      }
    },
    triggerEdgeChanges: (y) => {
      const { onEdgesChange: _, setEdges: x, edges: N, hasDefaultEdges: m, debug: v } = h();
      if (y != null && y.length) {
        if (m) {
          const C = xc(y, N);
          x(C);
        }
        v && console.log("React Flow: trigger edge changes", y), _ == null || _(y);
      }
    },
    addSelectedNodes: (y) => {
      const { multiSelectionActive: _, edgeLookup: x, nodeLookup: N, triggerNodeChanges: m, triggerEdgeChanges: v } = h();
      if (_) {
        const C = y.map((k) => ct(k, !0));
        m(C);
        return;
      }
      m(Tt(N, /* @__PURE__ */ new Set([...y]), !0)), v(Tt(x));
    },
    addSelectedEdges: (y) => {
      const { multiSelectionActive: _, edgeLookup: x, nodeLookup: N, triggerNodeChanges: m, triggerEdgeChanges: v } = h();
      if (_) {
        const C = y.map((k) => ct(k, !0));
        v(C);
        return;
      }
      v(Tt(x, /* @__PURE__ */ new Set([...y]))), m(Tt(N, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: y, edges: _ } = {}) => {
      const { edges: x, nodes: N, nodeLookup: m, triggerNodeChanges: v, triggerEdgeChanges: C } = h(), k = y || N, S = _ || x, D = k.map((B) => {
        const $ = m.get(B.id);
        return $ && ($.selected = !1), ct(B.id, !1);
      }), j = S.map((B) => ct(B.id, !1));
      v(D), C(j);
    },
    setMinZoom: (y) => {
      const { panZoom: _, maxZoom: x } = h();
      _ == null || _.setScaleExtent([y, x]), a({ minZoom: y });
    },
    setMaxZoom: (y) => {
      const { panZoom: _, minZoom: x } = h();
      _ == null || _.setScaleExtent([x, y]), a({ maxZoom: y });
    },
    setTranslateExtent: (y) => {
      var _;
      (_ = h().panZoom) == null || _.setTranslateExtent(y), a({ translateExtent: y });
    },
    setPaneClickDistance: (y) => {
      var _;
      (_ = h().panZoom) == null || _.setClickDistance(y);
    },
    resetSelectedElements: () => {
      const { edges: y, nodes: _, triggerNodeChanges: x, triggerEdgeChanges: N, elementsSelectable: m } = h();
      if (!m)
        return;
      const v = _.reduce((k, S) => S.selected ? [...k, ct(S.id, !1)] : k, []), C = y.reduce((k, S) => S.selected ? [...k, ct(S.id, !1)] : k, []);
      x(v), N(C);
    },
    setNodeExtent: (y) => {
      const { nodes: _, nodeLookup: x, parentLookup: N, nodeOrigin: m, elevateNodesOnSelect: v, nodeExtent: C } = h();
      y[0][0] === C[0][0] && y[0][1] === C[0][1] && y[1][0] === C[1][0] && y[1][1] === C[1][1] || (bo(_, x, N, {
        nodeOrigin: m,
        nodeExtent: y,
        elevateNodesOnSelect: v,
        checkEquality: !1
      }), a({ nodeExtent: y }));
    },
    panBy: (y) => {
      const { transform: _, width: x, height: N, panZoom: m, translateExtent: v } = h();
      return Wp({ delta: y, panZoom: m, transform: _, translateExtent: v, width: x, height: N });
    },
    cancelConnection: () => {
      a({
        connection: { ...ja }
      });
    },
    updateConnection: (y) => {
      a({ connection: y });
    },
    reset: () => a({ ...Ms() })
  };
}, Object.is);
function dy({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: c, initialFitViewOptions: u, fitView: l, nodeOrigin: d, nodeExtent: f, children: a }) {
  const [h] = H.useState(() => fy({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: l,
    minZoom: s,
    maxZoom: c,
    fitViewOptions: u,
    nodeOrigin: d,
    nodeExtent: f
  }));
  return I.jsx(Ag, { value: h, children: I.jsx(em, { children: a }) });
}
function hy({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: c, fitViewOptions: u, minZoom: l, maxZoom: d, nodeOrigin: f, nodeExtent: a }) {
  return H.useContext(Pr) ? I.jsx(I.Fragment, { children: e }) : I.jsx(dy, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: c, initialFitViewOptions: u, initialMinZoom: l, initialMaxZoom: d, nodeOrigin: f, nodeExtent: a, children: e });
}
const py = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function gy({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: c, onEdgeClick: u, onInit: l, onMove: d, onMoveStart: f, onMoveEnd: a, onConnect: h, onConnectStart: w, onConnectEnd: y, onClickConnectStart: _, onClickConnectEnd: x, onNodeMouseEnter: N, onNodeMouseMove: m, onNodeMouseLeave: v, onNodeContextMenu: C, onNodeDoubleClick: k, onNodeDragStart: S, onNodeDrag: D, onNodeDragStop: j, onNodesDelete: B, onEdgesDelete: $, onDelete: F, onSelectionChange: V, onSelectionDragStart: b, onSelectionDrag: P, onSelectionDragStop: O, onSelectionContextMenu: T, onSelectionStart: L, onSelectionEnd: R, onBeforeDelete: p, connectionMode: E, connectionLineType: A = rt.Bezier, connectionLineStyle: z, connectionLineComponent: Y, connectionLineContainerStyle: U, deleteKeyCode: W = "Backspace", selectionKeyCode: G = "Shift", selectionOnDrag: X = !1, selectionMode: Q = Bt.Full, panActivationKeyCode: se = "Space", multiSelectionKeyCode: te = pr() ? "Meta" : "Control", zoomActivationKeyCode: Z = pr() ? "Meta" : "Control", snapToGrid: ge, snapGrid: ue, onlyRenderVisibleElements: ye = !1, selectNodesOnDrag: he, nodesDraggable: Ae, nodesConnectable: xt, nodesFocusable: Ut, nodeOrigin: ne = yc, edgesFocusable: Ge, edgesReconnectable: qe, elementsSelectable: Ke = !0, defaultViewport: _t = Fg, minZoom: Be = 0.5, maxZoom: Ze = 2, translateExtent: bt = hn, preventScrolling: Cn = !0, nodeExtent: Et, defaultMarkerColor: Nn = "#b1b1b7", zoomOnScroll: kn = !0, zoomOnPinch: St = !0, panOnScroll: Ct = !1, panOnScrollSpeed: Nt = 0.5, panOnScrollMode: Gt = gt.Free, zoomOnDoubleClick: On = !0, panOnDrag: g = !0, onPaneClick: M, onPaneMouseEnter: q, onPaneMouseMove: K, onPaneMouseLeave: J, onPaneScroll: ce, onPaneContextMenu: re, paneClickDistance: fe = 0, nodeClickDistance: ae = 0, children: Le, onReconnect: Qe, onReconnectStart: $r, onReconnectEnd: Lr, onEdgeContextMenu: Kc, onEdgeDoubleClick: Zc, onEdgeMouseEnter: Qc, onEdgeMouseMove: Jc, onEdgeMouseLeave: eu, reconnectRadius: tu = 10, onNodesChange: nu, onEdgesChange: ru, noDragClassName: ou = "nodrag", noWheelClassName: iu = "nowheel", noPanClassName: Xo = "nopan", fitView: Uo, fitViewOptions: Go, connectOnClick: su, attributionPosition: au, proOptions: cu, defaultEdgeOptions: uu, elevateNodesOnSelect: lu, elevateEdgesOnSelect: fu, disableKeyboardA11y: qo = !1, autoPanOnConnect: du, autoPanOnNodeDrag: hu, autoPanSpeed: pu, connectionRadius: gu, isValidConnection: mu, onError: yu, style: wu, id: Ko, nodeDragThreshold: vu, viewport: xu, onViewportChange: _u, width: bu, height: Eu, colorMode: Su = "light", debug: Cu, onScroll: Rn, ...Nu }, ku) {
  const jr = Ko || "1", Ou = Gg(Su), Ru = H.useCallback((Zo) => {
    Zo.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), Rn == null || Rn(Zo);
  }, [Rn]);
  return I.jsx("div", { "data-testid": "rf__wrapper", ...Nu, onScroll: Ru, style: { ...wu, ...py }, ref: ku, className: xe(["react-flow", o, Ou]), id: Ko, children: I.jsxs(hy, { nodes: e, edges: t, width: bu, height: Eu, fitView: Uo, fitViewOptions: Go, minZoom: Be, maxZoom: Ze, nodeOrigin: ne, nodeExtent: Et, children: [I.jsx(ly, { onInit: l, onNodeClick: c, onEdgeClick: u, onNodeMouseEnter: N, onNodeMouseMove: m, onNodeMouseLeave: v, onNodeContextMenu: C, onNodeDoubleClick: k, nodeTypes: i, edgeTypes: s, connectionLineType: A, connectionLineStyle: z, connectionLineComponent: Y, connectionLineContainerStyle: U, selectionKeyCode: G, selectionOnDrag: X, selectionMode: Q, deleteKeyCode: W, multiSelectionKeyCode: te, panActivationKeyCode: se, zoomActivationKeyCode: Z, onlyRenderVisibleElements: ye, defaultViewport: _t, translateExtent: bt, minZoom: Be, maxZoom: Ze, preventScrolling: Cn, zoomOnScroll: kn, zoomOnPinch: St, zoomOnDoubleClick: On, panOnScroll: Ct, panOnScrollSpeed: Nt, panOnScrollMode: Gt, panOnDrag: g, onPaneClick: M, onPaneMouseEnter: q, onPaneMouseMove: K, onPaneMouseLeave: J, onPaneScroll: ce, onPaneContextMenu: re, paneClickDistance: fe, nodeClickDistance: ae, onSelectionContextMenu: T, onSelectionStart: L, onSelectionEnd: R, onReconnect: Qe, onReconnectStart: $r, onReconnectEnd: Lr, onEdgeContextMenu: Kc, onEdgeDoubleClick: Zc, onEdgeMouseEnter: Qc, onEdgeMouseMove: Jc, onEdgeMouseLeave: eu, reconnectRadius: tu, defaultMarkerColor: Nn, noDragClassName: ou, noWheelClassName: iu, noPanClassName: Xo, rfId: jr, disableKeyboardA11y: qo, nodeExtent: Et, viewport: xu, onViewportChange: _u }), I.jsx(Ug, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: h, onConnectStart: w, onConnectEnd: y, onClickConnectStart: _, onClickConnectEnd: x, nodesDraggable: Ae, nodesConnectable: xt, nodesFocusable: Ut, edgesFocusable: Ge, edgesReconnectable: qe, elementsSelectable: Ke, elevateNodesOnSelect: lu, elevateEdgesOnSelect: fu, minZoom: Be, maxZoom: Ze, nodeExtent: Et, onNodesChange: nu, onEdgesChange: ru, snapToGrid: ge, snapGrid: ue, connectionMode: E, translateExtent: bt, connectOnClick: su, defaultEdgeOptions: uu, fitView: Uo, fitViewOptions: Go, onNodesDelete: B, onEdgesDelete: $, onDelete: F, onNodeDragStart: S, onNodeDrag: D, onNodeDragStop: j, onSelectionDrag: P, onSelectionDragStart: b, onSelectionDragStop: O, onMove: d, onMoveStart: f, onMoveEnd: a, noPanClassName: Xo, nodeOrigin: ne, rfId: jr, autoPanOnConnect: du, autoPanOnNodeDrag: hu, autoPanSpeed: pu, onError: yu, connectionRadius: gu, isValidConnection: mu, selectNodesOnDrag: he, nodeDragThreshold: vu, onBeforeDelete: p, paneClickDistance: fe, debug: Cu }), I.jsx(Yg, { onSelectionChange: V }), Le, I.jsx(jg, { proOptions: cu, position: au }), I.jsx($g, { rfId: jr, disableKeyboardA11y: qo })] }) });
}
var my = _c(gy);
function yy(e) {
  const [t, n] = H.useState(e), r = H.useCallback((o) => n((i) => vc(o, i)), []);
  return [t, n, r];
}
function wy(e) {
  const [t, n] = H.useState(e), r = H.useCallback((o) => n((i) => xc(o, i)), []);
  return [t, n, r];
}
function vy({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return I.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: xe(["react-flow__background-pattern", n, r]) });
}
function xy({ radius: e, className: t }) {
  return I.jsx("circle", { cx: e, cy: e, r: e, className: xe(["react-flow__background-pattern", "dots", t]) });
}
var it;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(it || (it = {}));
const _y = {
  [it.Dots]: 1,
  [it.Lines]: 1,
  [it.Cross]: 6
}, by = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Wc({
  id: e,
  variant: t = it.Dots,
  // only used for dots and cross
  gap: n = 20,
  // only used for lines and cross
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: c,
  style: u,
  className: l,
  patternClassName: d
}) {
  const f = H.useRef(null), { transform: a, patternId: h } = le(by, we), w = r || _y[t], y = t === it.Dots, _ = t === it.Cross, x = Array.isArray(n) ? n : [n, n], N = [x[0] * a[2] || 1, x[1] * a[2] || 1], m = w * a[2], v = Array.isArray(i) ? i : [i, i], C = _ ? [m, m] : N, k = [
    v[0] * a[2] || 1 + C[0] / 2,
    v[1] * a[2] || 1 + C[1] / 2
  ], S = `${h}${e || ""}`;
  return I.jsxs("svg", { className: xe(["react-flow__background", l]), style: {
    ...u,
    ...Dr,
    "--xy-background-color-props": c,
    "--xy-background-pattern-color-props": s
  }, ref: f, "data-testid": "rf__background", children: [I.jsx("pattern", { id: S, x: a[0] % N[0], y: a[1] % N[1], width: N[0], height: N[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${k[0]},-${k[1]})`, children: y ? I.jsx(xy, { radius: m / 2, className: d }) : I.jsx(vy, { dimensions: C, lineWidth: o, variant: t, className: d }) }), I.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${S})` })] });
}
Wc.displayName = "Background";
const Ey = H.memo(Wc);
function Sy() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: I.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function Cy() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: I.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function Ny() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: I.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function ky() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Oy() {
  return I.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: I.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Un({ children: e, className: t, ...n }) {
  return I.jsx("button", { type: "button", className: xe(["react-flow__controls-button", t]), ...n, children: e });
}
const Ry = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom
});
function Xc({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: c, onInteractiveChange: u, className: l, children: d, position: f = "bottom-left", orientation: a = "vertical", "aria-label": h = "React Flow controls" }) {
  const w = me(), { isInteractive: y, minZoomReached: _, maxZoomReached: x } = le(Ry, we), { zoomIn: N, zoomOut: m, fitView: v } = Fo(), C = () => {
    N(), i == null || i();
  }, k = () => {
    m(), s == null || s();
  }, S = () => {
    v(o), c == null || c();
  }, D = () => {
    w.setState({
      nodesDraggable: !y,
      nodesConnectable: !y,
      elementsSelectable: !y
    }), u == null || u(!y);
  }, j = a === "horizontal" ? "horizontal" : "vertical";
  return I.jsxs(Ir, { className: xe(["react-flow__controls", j, l]), position: f, style: e, "data-testid": "rf__controls", "aria-label": h, children: [t && I.jsxs(I.Fragment, { children: [I.jsx(Un, { onClick: C, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: x, children: I.jsx(Sy, {}) }), I.jsx(Un, { onClick: k, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: _, children: I.jsx(Cy, {}) })] }), n && I.jsx(Un, { className: "react-flow__controls-fitview", onClick: S, title: "fit view", "aria-label": "fit view", children: I.jsx(Ny, {}) }), r && I.jsx(Un, { className: "react-flow__controls-interactive", onClick: D, title: "toggle interactivity", "aria-label": "toggle interactivity", children: y ? I.jsx(Oy, {}) : I.jsx(ky, {}) }), d] });
}
Xc.displayName = "Controls";
H.memo(Xc);
function Ty({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: c, strokeWidth: u, className: l, borderRadius: d, shapeRendering: f, selected: a, onClick: h }) {
  const { background: w, backgroundColor: y } = i || {}, _ = s || w || y;
  return I.jsx("rect", { className: xe(["react-flow__minimap-node", { selected: a }, l]), x: t, y: n, rx: d, ry: d, width: r, height: o, style: {
    fill: _,
    stroke: c,
    strokeWidth: u
  }, shapeRendering: f, onClick: h ? (x) => h(x, e) : void 0 });
}
const Ay = H.memo(Ty), My = (e) => e.nodes.map((t) => t.id), to = (e) => e instanceof Function ? e : () => e;
function Py({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = Ay,
  onClick: s
}) {
  const c = le(My, we), u = to(t), l = to(e), d = to(n), f = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return I.jsx(I.Fragment, { children: c.map((a) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    I.jsx(Dy, { id: a, nodeColorFunc: u, nodeStrokeColorFunc: l, nodeClassNameFunc: d, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: f }, a)
  )) });
}
function Iy({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: c, onClick: u }) {
  const { node: l, x: d, y: f, width: a, height: h } = le((w) => {
    const { internals: y } = w.nodeLookup.get(e), _ = y.userNode, { x, y: N } = y.positionAbsolute, { width: m, height: v } = Ue(_);
    return {
      node: _,
      x,
      y: N,
      width: m,
      height: v
    };
  }, we);
  return !l || l.hidden || !Ua(l) ? null : I.jsx(c, { x: d, y: f, width: a, height: h, style: l.style, selected: !!l.selected, className: r(l), color: t(l), borderRadius: o, strokeColor: n(l), strokeWidth: i, shapeRendering: s, onClick: u, id: l.id });
}
const Dy = H.memo(Iy);
var $y = H.memo(Py);
const Ly = 200, jy = 150, Hy = (e) => !e.hidden, zy = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? Wa(_n(e.nodeLookup, { filter: Hy }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height
  };
}, By = "react-flow__minimap-desc";
function Uc({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: c,
  bgColor: u,
  maskColor: l,
  maskStrokeColor: d,
  maskStrokeWidth: f,
  position: a = "bottom-right",
  onClick: h,
  onNodeClick: w,
  pannable: y = !1,
  zoomable: _ = !1,
  ariaLabel: x = "React Flow mini map",
  inversePan: N,
  zoomStep: m = 10,
  offsetScale: v = 5
}) {
  const C = me(), k = H.useRef(null), { boundingRect: S, viewBB: D, rfId: j, panZoom: B, translateExtent: $, flowWidth: F, flowHeight: V } = le(zy, we), b = (e == null ? void 0 : e.width) ?? Ly, P = (e == null ? void 0 : e.height) ?? jy, O = S.width / b, T = S.height / P, L = Math.max(O, T), R = L * b, p = L * P, E = v * L, A = S.x - (R - S.width) / 2 - E, z = S.y - (p - S.height) / 2 - E, Y = R + E * 2, U = p + E * 2, W = `${By}-${j}`, G = H.useRef(0), X = H.useRef();
  G.current = L, H.useEffect(() => {
    if (k.current && B)
      return X.current = Jp({
        domNode: k.current,
        panZoom: B,
        getTransform: () => C.getState().transform,
        getViewScale: () => G.current
      }), () => {
        var te;
        (te = X.current) == null || te.destroy();
      };
  }, [B]), H.useEffect(() => {
    var te;
    (te = X.current) == null || te.update({
      translateExtent: $,
      width: F,
      height: V,
      inversePan: N,
      pannable: y,
      zoomStep: m,
      zoomable: _
    });
  }, [y, _, N, m, $, F, V]);
  const Q = h ? (te) => {
    var ue;
    const [Z, ge] = ((ue = X.current) == null ? void 0 : ue.pointer(te)) || [0, 0];
    h(te, { x: Z, y: ge });
  } : void 0, se = w ? H.useCallback((te, Z) => {
    const ge = C.getState().nodeLookup.get(Z).internals.userNode;
    w(te, ge);
  }, []) : void 0;
  return I.jsx(Ir, { position: a, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof d == "string" ? d : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof f == "number" ? f * L : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: xe(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: I.jsxs("svg", { width: b, height: P, viewBox: `${A} ${z} ${Y} ${U}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": W, ref: k, onClick: Q, children: [x && I.jsx("title", { id: W, children: x }), I.jsx($y, { onClick: se, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: c }), I.jsx("path", { className: "react-flow__minimap-mask", d: `M${A - E},${z - E}h${Y + E * 2}v${U + E * 2}h${-Y - E * 2}z
        M${D.x},${D.y}h${D.width}v${D.height}h${-D.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Uc.displayName = "MiniMap";
H.memo(Uc);
function Vy({ nodeId: e, position: t, variant: n = an.Handle, className: r, style: o = {}, children: i, color: s, minWidth: c = 10, minHeight: u = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: d = Number.MAX_VALUE, keepAspectRatio: f = !1, resizeDirection: a, shouldResize: h, onResizeStart: w, onResize: y, onResizeEnd: _ }) {
  const x = Cc(), N = typeof e == "string" ? e : x, m = me(), v = H.useRef(null), C = n === an.Line ? "right" : "bottom-right", k = t ?? C, S = H.useRef(null);
  H.useEffect(() => {
    if (!(!v.current || !N))
      return S.current || (S.current = pg({
        domNode: v.current,
        nodeId: N,
        getStoreItems: () => {
          const { nodeLookup: $, transform: F, snapGrid: V, snapToGrid: b, nodeOrigin: P, domNode: O } = m.getState();
          return {
            nodeLookup: $,
            transform: F,
            snapGrid: V,
            snapToGrid: b,
            nodeOrigin: P,
            paneDomNode: O
          };
        },
        onChange: ($, F) => {
          const { triggerNodeChanges: V, nodeLookup: b, parentLookup: P, nodeOrigin: O } = m.getState(), T = [], L = { x: $.x, y: $.y }, R = b.get(N);
          if (R && R.expandParent && R.parentId) {
            const p = R.origin ?? O, E = $.width ?? R.measured.width ?? 0, A = $.height ?? R.measured.height ?? 0, z = {
              id: R.id,
              parentId: R.parentId,
              rect: {
                width: E,
                height: A,
                ...Ga({
                  x: $.x ?? R.position.x,
                  y: $.y ?? R.position.y
                }, { width: E, height: A }, R.parentId, b, p)
              }
            }, Y = Yo([z], b, P, O);
            T.push(...Y), L.x = $.x ? Math.max(p[0] * E, $.x) : void 0, L.y = $.y ? Math.max(p[1] * A, $.y) : void 0;
          }
          if (L.x !== void 0 && L.y !== void 0) {
            const p = {
              id: N,
              type: "position",
              position: { ...L }
            };
            T.push(p);
          }
          if ($.width !== void 0 && $.height !== void 0) {
            const E = {
              id: N,
              type: "dimensions",
              resizing: !0,
              setAttributes: a ? a === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: $.width,
                height: $.height
              }
            };
            T.push(E);
          }
          for (const p of F) {
            const E = {
              ...p,
              type: "position"
            };
            T.push(E);
          }
          V(T);
        },
        onEnd: ({ width: $, height: F }) => {
          const V = {
            id: N,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: $,
              height: F
            }
          };
          m.getState().triggerNodeChanges([V]);
        }
      })), S.current.update({
        controlPosition: k,
        boundaries: {
          minWidth: c,
          minHeight: u,
          maxWidth: l,
          maxHeight: d
        },
        keepAspectRatio: f,
        resizeDirection: a,
        onResizeStart: w,
        onResize: y,
        onResizeEnd: _,
        shouldResize: h
      }), () => {
        var $;
        ($ = S.current) == null || $.destroy();
      };
  }, [
    k,
    c,
    u,
    l,
    d,
    f,
    w,
    y,
    _,
    h
  ]);
  const D = k.split("-"), j = n === an.Line ? "borderColor" : "backgroundColor", B = s ? { ...o, [j]: s } : o;
  return I.jsx("div", { className: xe(["react-flow__resize-control", "nodrag", ...D, n, r]), ref: v, style: B, children: i });
}
H.memo(Vy);
const Yy = yn.div`
  width: 60px;
  max-width: 130px;
  background-color: ${(e) => e.$bgColor ? e.$bgColor : "white"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px 10px;
  color:rgb(112, 111, 111);
  font-size: 12px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px 0px rgba(95, 95, 95, 0.75);
  gap: 2px;

  .react-flow__node.selected & {
    outline: 1px solid rgb(112, 111, 111);
  }

  .react-flow__handle {
    background-color: lightblue;
    border-color: lightblue;
    min-height: 4px;
    height: 4px;
    min-width: 4px;
    width: 4px;
    visibility: hidden;
  }


  &:hover {
    .react-flow__handle {
      visibility: visible;
    }
  }
`, Fy = yn.div`
  margin: 0;
  font-size: 12px;
  line-height: 1;
`, Wy = yn.p`
  font-size: 8px;
  margin: 0;
  text-align: center;
  line-height: 1;
`, Jt = {
  NodeContainer: Yy,
  NodeIcon: Fy,
  NodeLabel: Wy
};
var Gc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ps = ke.createContext && /* @__PURE__ */ ke.createContext(Gc), Xy = ["attr", "size", "title"];
function Uy(e, t) {
  if (e == null) return {};
  var n = Gy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Gy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mr.apply(this, arguments);
}
function Is(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Is(Object(n), !0).forEach(function(r) {
      qy(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Is(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qy(e, t, n) {
  return t = Ky(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ky(e) {
  var t = Zy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Zy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qc(e) {
  return e && e.map((t, n) => /* @__PURE__ */ ke.createElement(t.tag, yr({
    key: n
  }, t.attr), qc(t.child)));
}
function Sn(e) {
  return (t) => /* @__PURE__ */ ke.createElement(Qy, mr({
    attr: yr({}, e.attr)
  }, t), qc(e.child));
}
function Qy(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Uy(e, Xy), c = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ ke.createElement("svg", mr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: u,
      style: yr(yr({
        color: e.color || n.color
      }, n.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ke.createElement("title", null, i), e.children);
  };
  return Ps !== void 0 ? /* @__PURE__ */ ke.createElement(Ps.Consumer, null, (n) => t(n)) : t(Gc);
}
function Jy(e) {
  return Sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m18 16 4-4-4-4" }, child: [] }, { tag: "path", attr: { d: "m6 8-4 4 4 4" }, child: [] }, { tag: "path", attr: { d: "m14.5 4-5 16" }, child: [] }] })(e);
}
function e0(e) {
  return Sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "ellipse", attr: { cx: "12", cy: "5", rx: "9", ry: "3" }, child: [] }, { tag: "path", attr: { d: "M3 5V19A9 3 0 0 0 21 19V5" }, child: [] }, { tag: "path", attr: { d: "M3 12A9 3 0 0 0 21 12" }, child: [] }] })(e);
}
function Ds(e) {
  return Sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }, child: [] }, { tag: "path", attr: { d: "M14 2v4a2 2 0 0 0 2 2h4" }, child: [] }] })(e);
}
function t0(e) {
  return Sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, child: [] }, { tag: "path", attr: { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, child: [] }] })(e);
}
function n0(e) {
  return Sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }, child: [] }] })(e);
}
function r0(e) {
  const t = {
    LuDatabase: /* @__PURE__ */ I.jsx(e0, {}),
    LuFile: /* @__PURE__ */ I.jsx(Ds, {}),
    LuCodeXml: /* @__PURE__ */ I.jsx(Jy, {}),
    LuStar: /* @__PURE__ */ I.jsx(n0, {}),
    LuInbox: /* @__PURE__ */ I.jsx(t0, {})
  };
  return t[e] ? t[e] : /* @__PURE__ */ I.jsx(Ds, {});
}
function o0({
  data: e
}) {
  return !e.label || !e.id ? /* @__PURE__ */ I.jsx(Jt.NodeContainer, { children: /* @__PURE__ */ I.jsx(Jt.NodeLabel, { children: "Wrong created node" }) }) : /* @__PURE__ */ I.jsxs(Jt.NodeContainer, { $bgColor: e.bgColor, children: [
    /* @__PURE__ */ I.jsx(ot, { type: "source", position: ee.Top, id: `${e.id}-top` }),
    e.icon && /* @__PURE__ */ I.jsx(Jt.NodeIcon, { children: r0(e.icon) }),
    /* @__PURE__ */ I.jsx(Jt.NodeLabel, { children: e.label }),
    /* @__PURE__ */ I.jsx(
      ot,
      {
        type: "source",
        position: ee.Bottom,
        id: `${e.id}-bottom`
      }
    ),
    /* @__PURE__ */ I.jsx(ot, { type: "source", position: ee.Left, id: `${e.id}-left` }),
    /* @__PURE__ */ I.jsx(ot, { type: "source", position: ee.Right, id: `${e.id}-right` })
  ] });
}
function i0({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  markerEnd: i
}) {
  const [s] = Ho({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o + 2
  });
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsx(En, { id: e, path: s, markerEnd: i }) });
}
const s0 = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "obj 1", id: "1", icon: "LuDatabase" },
    type: "custom-node"
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "obj 2", id: "2", icon: "LuFile" },
    type: "custom-node"
  },
  {
    id: "3",
    position: { x: 200, y: 150 },
    data: { label: "obj 3", id: "3", icon: "LuCodeXml" },
    type: "custom-node"
  },
  {
    id: "4",
    position: { x: 200, y: 250 },
    data: { label: "obj 4", id: "4", icon: "LuStar" },
    type: "custom-node"
  },
  {
    id: "5",
    position: { x: 300, y: 350 },
    data: { label: "obj 5", id: "5", icon: "LuInbox" },
    type: "custom-node"
  }
], a0 = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "1-bottom",
    targetHandle: "2-top",
    type: "straight-arrow",
    markerEnd: { type: st.Arrow }
  },
  { id: "e1-3", source: "1", sourceHandle: "1-right", target: "3", type: "straight-arrow", markerEnd: { type: st.Arrow } }
], c0 = [1, 2], u0 = {
  "custom-node": o0
}, l0 = {
  "straight-arrow": i0
};
function f0({
  nodeColor: e,
  importedJSON: t,
  setCurrentJSON: n
}) {
  const [r, o, i] = yy(s0), [s, c, u] = wy(a0);
  H.useEffect(() => {
    if (!n)
      return;
    const d = JSON.parse(JSON.stringify(s)), f = {
      elements: r,
      connections: d.map((a) => (delete a.markerEnd, a))
    };
    n(JSON.stringify(f));
  }, [r, s, n]), H.useEffect(() => {
    e && o((d) => d.map((a) => ({ ...a, data: { ...a.data, bgColor: e } })));
  }, [e, o]), H.useEffect(() => {
    if (!t)
      return;
    const d = JSON.parse(JSON.parse(t));
    if (Array.isArray(d.connections) && Array.isArray(d.elements)) {
      const f = d.connections.map((a) => (a.markerEnd = { type: st.Arrow }, a));
      o(d.elements), c(f);
    } else
      alert(
        "Wrong file, structure or format. Should be JSON and contain 2 arrays of objects: 'elements' & 'connections'."
      );
  }, [t, c, o]);
  const l = H.useCallback(
    (d) => {
      const f = {
        ...d,
        type: "straight-arrow",
        markerEnd: { type: st.Arrow }
      };
      c((a) => tc(f, a));
    },
    [c]
  );
  return /* @__PURE__ */ I.jsx(Yl.SheetWrapper, { children: /* @__PURE__ */ I.jsx(
    my,
    {
      nodes: r,
      edges: s,
      onNodesChange: i,
      onEdgesChange: u,
      onConnect: l,
      nodeTypes: u0,
      edgeTypes: l0,
      fitView: !0,
      panOnScroll: !0,
      selectionOnDrag: !0,
      panOnDrag: c0,
      selectionMode: Bt.Partial,
      connectionMode: wt.Loose,
      deleteKeyCode: ["Delete", "Backspace"],
      children: /* @__PURE__ */ I.jsx(Ey, { id: "1", color: "#f7f7f7", bgColor: "#f7f7f7" })
    }
  ) });
}
export {
  f0 as DiagramSheet
};
