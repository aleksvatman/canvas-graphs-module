import ce, { useDebugValue as Do, createElement as Tu, useRef as te, useContext as Ct, memo as le, useState as be, useCallback as _e, forwardRef as ys, useEffect as ne, createContext as io, useMemo as Oe, useLayoutEffect as Pu } from "react";
function Ru(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var un = { exports: {} }, Pt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $o;
function Iu() {
  if ($o) return Pt;
  $o = 1;
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
  return Pt.Fragment = t, Pt.jsx = n, Pt.jsxs = n, Pt;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function Du() {
  return Lo || (Lo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(_) {
      if (_ == null) return null;
      if (typeof _ == "function")
        return _.$$typeof === L ? null : _.displayName || _.name || null;
      if (typeof _ == "string") return _;
      switch (_) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case N:
          return "Suspense";
        case E:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof _ == "object")
        switch (typeof _.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), _.$$typeof) {
          case m:
            return "Portal";
          case g:
            return (_.displayName || "Context") + ".Provider";
          case S:
            return (_._context.displayName || "Context") + ".Consumer";
          case y:
            var A = _.render;
            return _ = _.displayName, _ || (_ = A.displayName || A.name || "", _ = _ !== "" ? "ForwardRef(" + _ + ")" : "ForwardRef"), _;
          case b:
            return A = _.displayName || null, A !== null ? A : e(_.type) || "Memo";
          case P:
            A = _._payload, _ = _._init;
            try {
              return e(_(A));
            } catch {
            }
        }
      return null;
    }
    function t(_) {
      return "" + _;
    }
    function n(_) {
      try {
        t(_);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var D = A.error, H = typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return D.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(_);
      }
    }
    function r(_) {
      if (_ === p) return "<>";
      if (typeof _ == "object" && _ !== null && _.$$typeof === P)
        return "<...>";
      try {
        var A = e(_);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var _ = $.A;
      return _ === null ? null : _.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function s(_) {
      if (j.call(_, "key")) {
        var A = Object.getOwnPropertyDescriptor(_, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return _.key !== void 0;
    }
    function c(_, A) {
      function D() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(_, "key", {
        get: D,
        configurable: !0
      });
    }
    function u() {
      var _ = e(this.type);
      return C[_] || (C[_] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), _ = this.props.ref, _ !== void 0 ? _ : null;
    }
    function l(_, A, D, H, F, Y, W, V) {
      return D = Y.ref, _ = {
        $$typeof: h,
        type: _,
        key: A,
        props: Y,
        _owner: F
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(_, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(_, "ref", { enumerable: !1, value: null }), _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(_, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(_, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(_, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    }
    function f(_, A, D, H, F, Y, W, V) {
      var B = A.children;
      if (B !== void 0)
        if (H)
          if (z(B)) {
            for (H = 0; H < B.length; H++)
              d(B[H]);
            Object.freeze && Object.freeze(B);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(B);
      if (j.call(A, "key")) {
        B = e(_);
        var q = Object.keys(A).filter(function(U) {
          return U !== "key";
        });
        H = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", k[B + H] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          B,
          q,
          B
        ), k[B + H] = !0);
      }
      if (B = null, D !== void 0 && (n(D), B = "" + D), s(A) && (n(A.key), B = "" + A.key), "key" in A) {
        D = {};
        for (var Z in A)
          Z !== "key" && (D[Z] = A[Z]);
      } else D = A;
      return B && c(
        D,
        typeof _ == "function" ? _.displayName || _.name || "Unknown" : _
      ), l(
        _,
        B,
        Y,
        F,
        o(),
        D,
        W,
        V
      );
    }
    function d(_) {
      typeof _ == "object" && _ !== null && _.$$typeof === h && _._store && (_._store.validated = 1);
    }
    var a = ce, h = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), g = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), $ = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, z = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    a = {
      "react-stack-bottom-frame": function(_) {
        return _();
      }
    };
    var T, C = {}, O = a["react-stack-bottom-frame"].bind(
      a,
      i
    )(), R = v(r(i)), k = {};
    Rt.Fragment = p, Rt.jsx = function(_, A, D, H, F) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return f(
        _,
        A,
        D,
        !1,
        H,
        F,
        Y ? Error("react-stack-top-frame") : O,
        Y ? v(r(_)) : R
      );
    }, Rt.jsxs = function(_, A, D, H, F) {
      var Y = 1e4 > $.recentlyCreatedOwnerStacks++;
      return f(
        _,
        A,
        D,
        !0,
        H,
        F,
        Y ? Error("react-stack-top-frame") : O,
        Y ? v(r(_)) : R
      );
    };
  }()), Rt;
}
var jo;
function $u() {
  return jo || (jo = 1, process.env.NODE_ENV === "production" ? un.exports = Iu() : un.exports = Du()), un.exports;
}
var M = $u(), me = function() {
  return me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, me.apply(this, arguments);
};
function pt(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Lu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ju = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zu = /* @__PURE__ */ Lu(
  function(e) {
    return ju.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), re = "-ms-", Ht = "-moz-", ee = "-webkit-", xs = "comm", Kn = "rule", so = "decl", Hu = "@import", ws = "@keyframes", Vu = "@layer", vs = Math.abs, ao = String.fromCharCode, Lr = Object.assign;
function Bu(e, t) {
  return fe(e, 0) ^ 45 ? (((t << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function bs(e) {
  return e.trim();
}
function Ie(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
  return e.replace(t, n);
}
function Cn(e, t, n) {
  return e.indexOf(t, n);
}
function fe(e, t) {
  return e.charCodeAt(t) | 0;
}
function gt(e, t, n) {
  return e.slice(t, n);
}
function Ae(e) {
  return e.length;
}
function _s(e) {
  return e.length;
}
function Lt(e, t) {
  return t.push(e), e;
}
function Fu(e, t) {
  return e.map(t).join("");
}
function zo(e, t) {
  return e.filter(function(n) {
    return !Ie(n, t);
  });
}
var Zn = 1, mt = 1, Ss = 0, Se = 0, ae = 0, kt = "";
function Qn(e, t, n, r, o, i, s, c) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Zn, column: mt, length: s, return: "", siblings: c };
}
function Ve(e, t) {
  return Lr(Qn("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ct(e) {
  for (; e.root; )
    e = Ve(e.root, { children: [e] });
  Lt(e, e.siblings);
}
function Yu() {
  return ae;
}
function Wu() {
  return ae = Se > 0 ? fe(kt, --Se) : 0, mt--, ae === 10 && (mt = 1, Zn--), ae;
}
function ke() {
  return ae = Se < Ss ? fe(kt, Se++) : 0, mt++, ae === 10 && (mt = 1, Zn++), ae;
}
function Ze() {
  return fe(kt, Se);
}
function kn() {
  return Se;
}
function Jn(e, t) {
  return gt(kt, e, t);
}
function jr(e) {
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
function Xu(e) {
  return Zn = mt = 1, Ss = Ae(kt = e), Se = 0, [];
}
function Gu(e) {
  return kt = "", e;
}
function vr(e) {
  return bs(Jn(Se - 1, zr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qu(e) {
  for (; (ae = Ze()) && ae < 33; )
    ke();
  return jr(e) > 2 || jr(ae) > 3 ? "" : " ";
}
function Uu(e, t) {
  for (; --t && ke() && !(ae < 48 || ae > 102 || ae > 57 && ae < 65 || ae > 70 && ae < 97); )
    ;
  return Jn(e, kn() + (t < 6 && Ze() == 32 && ke() == 32));
}
function zr(e) {
  for (; ke(); )
    switch (ae) {
      // ] ) " '
      case e:
        return Se;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && zr(ae);
        break;
      // (
      case 40:
        e === 41 && zr(e);
        break;
      // \
      case 92:
        ke();
        break;
    }
  return Se;
}
function Ku(e, t) {
  for (; ke() && e + ae !== 57; )
    if (e + ae === 84 && Ze() === 47)
      break;
  return "/*" + Jn(t, Se - 1) + "*" + ao(e === 47 ? e : ke());
}
function Zu(e) {
  for (; !jr(Ze()); )
    ke();
  return Jn(e, Se);
}
function Qu(e) {
  return Gu(On("", null, null, null, [""], e = Xu(e), 0, [0], e));
}
function On(e, t, n, r, o, i, s, c, u) {
  for (var l = 0, f = 0, d = s, a = 0, h = 0, m = 0, p = 1, w = 1, x = 1, S = 0, g = "", y = o, N = i, E = r, b = g; w; )
    switch (m = S, S = ke()) {
      // (
      case 40:
        if (m != 108 && fe(b, d - 1) == 58) {
          Cn(b += K(vr(S), "&", "&\f"), "&\f", vs(l ? c[l - 1] : 0)) != -1 && (x = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        b += vr(S);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        b += qu(m);
        break;
      // \
      case 92:
        b += Uu(kn() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ze()) {
          case 42:
          case 47:
            Lt(Ju(Ku(ke(), kn()), t, n, u), u);
            break;
          default:
            b += "/";
        }
        break;
      // {
      case 123 * p:
        c[l++] = Ae(b) * x;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + f:
            x == -1 && (b = K(b, /\f/g, "")), h > 0 && Ae(b) - d && Lt(h > 32 ? Vo(b + ";", r, n, d - 1, u) : Vo(K(b, " ", "") + ";", r, n, d - 2, u), u);
            break;
          // @ ;
          case 59:
            b += ";";
          // { rule/at-rule
          default:
            if (Lt(E = Ho(b, t, n, l, f, o, c, g, y = [], N = [], d, i), i), S === 123)
              if (f === 0)
                On(b, t, E, E, y, i, d, c, N);
              else
                switch (a === 99 && fe(b, 3) === 110 ? 100 : a) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    On(e, E, E, r && Lt(Ho(e, E, E, 0, 0, o, c, g, o, y = [], d, N), N), o, N, d, c, r ? y : N);
                    break;
                  default:
                    On(b, E, E, E, [""], N, 0, c, N);
                }
        }
        l = f = h = 0, p = x = 1, g = b = "", d = s;
        break;
      // :
      case 58:
        d = 1 + Ae(b), h = m;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && Wu() == 125)
            continue;
        }
        switch (b += ao(S), S * p) {
          // &
          case 38:
            x = f > 0 ? 1 : (b += "\f", -1);
            break;
          // ,
          case 44:
            c[l++] = (Ae(b) - 1) * x, x = 1;
            break;
          // @
          case 64:
            Ze() === 45 && (b += vr(ke())), a = Ze(), f = d = Ae(g = b += Zu(kn())), S++;
            break;
          // -
          case 45:
            m === 45 && Ae(b) == 2 && (p = 0);
        }
    }
  return i;
}
function Ho(e, t, n, r, o, i, s, c, u, l, f, d) {
  for (var a = o - 1, h = o === 0 ? i : [""], m = _s(h), p = 0, w = 0, x = 0; p < r; ++p)
    for (var S = 0, g = gt(e, a + 1, a = vs(w = s[p])), y = e; S < m; ++S)
      (y = bs(w > 0 ? h[S] + " " + g : K(g, /&\f/g, h[S]))) && (u[x++] = y);
  return Qn(e, t, n, o === 0 ? Kn : c, u, l, f, d);
}
function Ju(e, t, n, r) {
  return Qn(e, t, n, xs, ao(Yu()), gt(e, 2, -2), 0, r);
}
function Vo(e, t, n, r, o) {
  return Qn(e, t, n, so, gt(e, 0, r), gt(e, r + 1, -1), r, o);
}
function Es(e, t, n) {
  switch (Bu(e, t)) {
    // color-adjust
    case 5103:
      return ee + "print-" + e + e;
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
      return ee + e + e;
    // tab-size
    case 4789:
      return Ht + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Ht + e + re + e + e;
    // writing-mode
    case 5936:
      switch (fe(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ee + e + re + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ee + e + re + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ee + e + re + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return ee + e + re + e + e;
    // order
    case 6165:
      return ee + e + re + "flex-" + e + e;
    // align-items
    case 5187:
      return ee + e + K(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + re + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ee + e + re + "flex-item-" + K(e, /flex-|-self/g, "") + (Ie(e, /flex-|baseline/) ? "" : re + "grid-row-" + K(e, /flex-|-self/g, "")) + e;
    // align-content
    case 4675:
      return ee + e + re + "flex-line-pack" + K(e, /align-content|flex-|-self/g, "") + e;
    // flex-shrink
    case 5548:
      return ee + e + re + K(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ee + e + re + K(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ee + "box-" + K(e, "-grow", "") + ee + e + re + K(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ee + K(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    // cursor
    case 6187:
      return K(K(K(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, ee + "$1$`$1");
    // justify-content
    case 4968:
      return K(K(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    // justify-self
    case 4200:
      if (!Ie(e, /flex-|baseline/)) return re + "grid-column-align" + gt(e, t) + e;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return re + K(e, "template-", "") + e;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return n && n.some(function(r, o) {
        return t = o, Ie(r.props, /grid-\w+-end/);
      }) ? ~Cn(e + (n = n[t].value), "span", 0) ? e : re + K(e, "-start", "") + e + re + "grid-row-span:" + (~Cn(n, "span", 0) ? Ie(n, /\d+/) : +Ie(n, /\d+/) - +Ie(e, /\d+/)) + ";" : re + K(e, "-start", "") + e;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Ie(r.props, /grid-\w+-start/);
      }) ? e : re + K(K(e, "-end", "-span"), "span ", "") + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (Ae(e) - 1 - t > 6)
        switch (fe(e, t + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (fe(e, t + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return K(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Ht + (fe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          // (s)tretch
          case 115:
            return ~Cn(e, "stretch", 0) ? Es(K(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return K(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, o, i, s, c, u, l) {
        return re + o + ":" + i + l + (s ? re + o + "-span:" + (c ? u : +u - +i) + l : "") + e;
      });
    // position: sticky
    case 4949:
      if (fe(e, t + 6) === 121)
        return K(e, ":", ":" + ee) + e;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (fe(e, fe(e, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return K(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + re + "$2box$3") + e;
        // (inline-)?gri(d)
        case 100:
          return K(e, ":", ":" + re) + e;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return K(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Dn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function el(e, t, n, r) {
  switch (e.type) {
    case Vu:
      if (e.children.length) break;
    case Hu:
    case so:
      return e.return = e.return || e.value;
    case xs:
      return "";
    case ws:
      return e.return = e.value + "{" + Dn(e.children, r) + "}";
    case Kn:
      if (!Ae(e.value = e.props.join(","))) return "";
  }
  return Ae(n = Dn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function tl(e) {
  var t = _s(e);
  return function(n, r, o, i) {
    for (var s = "", c = 0; c < t; c++)
      s += e[c](n, r, o, i) || "";
    return s;
  };
}
function nl(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function rl(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case so:
        e.return = Es(e.value, e.length, n);
        return;
      case ws:
        return Dn([Ve(e, { value: K(e.value, "@", "@" + ee) })], r);
      case Kn:
        if (e.length)
          return Fu(n = e.props, function(o) {
            switch (Ie(o, r = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ct(Ve(e, { props: [K(o, /:(read-\w+)/, ":" + Ht + "$1")] })), ct(Ve(e, { props: [o] })), Lr(e, { props: zo(n, r) });
                break;
              // :placeholder
              case "::placeholder":
                ct(Ve(e, { props: [K(o, /:(plac\w+)/, ":" + ee + "input-$1")] })), ct(Ve(e, { props: [K(o, /:(plac\w+)/, ":" + Ht + "$1")] })), ct(Ve(e, { props: [K(o, /:(plac\w+)/, re + "input-$1")] })), ct(Ve(e, { props: [o] })), Lr(e, { props: zo(n, r) });
                break;
            }
            return "";
          });
    }
}
var ol = {
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
}, tt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Ns = "active", Cs = "data-styled-version", er = "6.1.17", co = `/*!sc*/
`, $n = typeof window < "u" && "HTMLElement" in window, il = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Bo = /invalid hook call/i, ln = /* @__PURE__ */ new Set(), sl = function(e, t) {
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
        Bo.test(s) ? (i = !1, ln.delete(r)) : o.apply(void 0, pt([s], c, !1));
      }, te(), i && !ln.has(r) && (console.warn(r), ln.add(r));
    } catch (s) {
      Bo.test(s.message) && ln.delete(r);
    } finally {
      console.error = o;
    }
  }
}, tr = Object.freeze([]), yt = Object.freeze({});
function al(e, t, n) {
  return n === void 0 && (n = yt), e.theme !== n.theme && e.theme || t || n.theme;
}
var Hr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), cl = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ul = /(^-|-$)/g;
function Fo(e) {
  return e.replace(cl, "-").replace(ul, "");
}
var ll = /(a)(d)/gi, dn = 52, Yo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Vr(e) {
  var t, n = "";
  for (t = Math.abs(e); t > dn; t = t / dn | 0) n = Yo(t % dn) + n;
  return (Yo(t % dn) + n).replace(ll, "$1-$2");
}
var br, ks = 5381, qe = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Os = function(e) {
  return qe(ks, e);
};
function dl(e) {
  return Vr(Os(e) >>> 0);
}
function Ms(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function _r(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var As = typeof Symbol == "function" && Symbol.for, Ts = As ? Symbol.for("react.memo") : 60115, fl = As ? Symbol.for("react.forward_ref") : 60112, hl = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, pl = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ps = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, gl = ((br = {})[fl] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, br[Ts] = Ps, br);
function Wo(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Ts ? Ps : "$$typeof" in e ? gl[e.$$typeof] : hl;
  var t;
}
var ml = Object.defineProperty, yl = Object.getOwnPropertyNames, Xo = Object.getOwnPropertySymbols, xl = Object.getOwnPropertyDescriptor, wl = Object.getPrototypeOf, Go = Object.prototype;
function Rs(e, t, n) {
  if (typeof t != "string") {
    if (Go) {
      var r = wl(t);
      r && r !== Go && Rs(e, r, n);
    }
    var o = yl(t);
    Xo && (o = o.concat(Xo(t)));
    for (var i = Wo(e), s = Wo(t), c = 0; c < o.length; ++c) {
      var u = o[c];
      if (!(u in pl || n && n[u] || s && u in s || i && u in i)) {
        var l = xl(t, u);
        try {
          ml(e, u, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function xt(e) {
  return typeof e == "function";
}
function uo(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Ue(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qo(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function wt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Br(e, t, n) {
  if (n === void 0 && (n = !1), !n && !wt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Br(e[r], t[r]);
  else if (wt(t)) for (var r in t) e[r] = Br(e[r], t[r]);
  return e;
}
function lo(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var vl = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function bl() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], o = 1, i = e.length; o < i; o += 1) r.push(e[o]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Ot(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(bl.apply(void 0, pt([vl[e]], t, !1)).trim());
}
var _l = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw Ot(16, "".concat(t));
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
    for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, s = o; s < i; s++) n += "".concat(this.tag.getRule(s)).concat(co);
    return n;
  }, e;
}(), Sl = 1 << 30, Mn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), An = 1, fn = function(e) {
  if (Mn.has(e)) return Mn.get(e);
  for (; Ln.has(An); ) An++;
  var t = An++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Sl)) throw Ot(16, "".concat(t));
  return Mn.set(e, t), Ln.set(t, e), t;
}, El = function(e, t) {
  An = t + 1, Mn.set(e, t), Ln.set(t, e);
}, Nl = "style[".concat(tt, "][").concat(Cs, '="').concat(er, '"]'), Cl = new RegExp("^".concat(tt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), kl = function(e, t, n) {
  for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++) (r = o[i]) && e.registerName(t, r);
}, Ol = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(co), o = [], i = 0, s = r.length; i < s; i++) {
    var c = r[i].trim();
    if (c) {
      var u = c.match(Cl);
      if (u) {
        var l = 0 | parseInt(u[1], 10), f = u[2];
        l !== 0 && (El(f, l), kl(e, f, u[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(c);
    }
  }
}, Uo = function(e) {
  for (var t = document.querySelectorAll(Nl), n = 0, r = t.length; n < r; n++) {
    var o = t[n];
    o && o.getAttribute(tt) !== Ns && (Ol(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Ml() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Is = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(c) {
    var u = Array.from(c.querySelectorAll("style[".concat(tt, "]")));
    return u[u.length - 1];
  }(n), i = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(tt, Ns), r.setAttribute(Cs, er);
  var s = Ml();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
}, Al = function() {
  function e(t) {
    this.element = Is(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
        var s = r[o];
        if (s.ownerNode === n) return s;
      }
      throw Ot(17);
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
}(), Tl = function() {
  function e(t) {
    this.element = Is(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), Pl = function() {
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
}(), Ko = $n, Rl = { isServer: !$n, useCSSOMInjection: !il }, Ds = function() {
  function e(t, n, r) {
    t === void 0 && (t = yt), n === void 0 && (n = {});
    var o = this;
    this.options = me(me({}, Rl), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && $n && Ko && (Ko = !1, Uo(this)), lo(this, function() {
      return function(i) {
        for (var s = i.getTag(), c = s.length, u = "", l = function(d) {
          var a = function(x) {
            return Ln.get(x);
          }(d);
          if (a === void 0) return "continue";
          var h = i.names.get(a), m = s.getGroup(d);
          if (h === void 0 || !h.size || m.length === 0) return "continue";
          var p = "".concat(tt, ".g").concat(d, '[id="').concat(a, '"]'), w = "";
          h !== void 0 && h.forEach(function(x) {
            x.length > 0 && (w += "".concat(x, ","));
          }), u += "".concat(m).concat(p, '{content:"').concat(w, '"}').concat(co);
        }, f = 0; f < c; f++) l(f);
        return u;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return fn(t);
  }, e.prototype.rehydrate = function() {
    !this.server && $n && Uo(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(me(me({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, o = n.target;
      return n.isServer ? new Pl(o) : r ? new Al(o) : new Tl(o);
    }(this.options), new _l(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (fn(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(fn(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(fn(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Il = /&/g, Dl = /^\s*\/\/.*$/gm;
function $s(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = $s(n.children, t)), n;
  });
}
function $l(e) {
  var t, n, r, o = yt, i = o.options, s = i === void 0 ? yt : i, c = o.plugins, u = c === void 0 ? tr : c, l = function(a, h, m) {
    return m.startsWith(n) && m.endsWith(n) && m.replaceAll(n, "").length > 0 ? ".".concat(t) : a;
  }, f = u.slice();
  f.push(function(a) {
    a.type === Kn && a.value.includes("&") && (a.props[0] = a.props[0].replace(Il, n).replace(r, l));
  }), s.prefix && f.push(rl), f.push(el);
  var d = function(a, h, m, p) {
    h === void 0 && (h = ""), m === void 0 && (m = ""), p === void 0 && (p = "&"), t = p, n = h, r = new RegExp("\\".concat(n, "\\b"), "g");
    var w = a.replace(Dl, ""), x = Qu(m || h ? "".concat(m, " ").concat(h, " { ").concat(w, " }") : w);
    s.namespace && (x = $s(x, s.namespace));
    var S = [];
    return Dn(x, tl(f.concat(nl(function(g) {
      return S.push(g);
    })))), S;
  };
  return d.hash = u.length ? u.reduce(function(a, h) {
    return h.name || Ot(15), qe(a, h.name);
  }, ks).toString() : "", d;
}
var Ll = new Ds(), Fr = $l(), Ls = ce.createContext({ shouldForwardProp: void 0, styleSheet: Ll, stylis: Fr });
Ls.Consumer;
ce.createContext(void 0);
function Zo() {
  return Ct(Ls);
}
var Qo = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Fr);
      var s = r.name + i.hash;
      o.hasNameForId(r.id, s) || o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, lo(this, function() {
      throw Ot(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Fr), this.name + t.hash;
  }, e;
}(), jl = function(e) {
  return e >= "A" && e <= "Z";
};
function Jo(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    jl(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var js = function(e) {
  return e == null || e === !1 || e === "";
}, zs = function(e) {
  var t, n, r = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !js(i) && (Array.isArray(i) && i.isCss || xt(i) ? r.push("".concat(Jo(o), ":"), i, ";") : wt(i) ? r.push.apply(r, pt(pt(["".concat(o, " {")], zs(i), !1), ["}"], !1)) : r.push("".concat(Jo(o), ": ").concat((t = o, (n = i) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in ol || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Qe(e, t, n, r) {
  if (js(e)) return [];
  if (uo(e)) return [".".concat(e.styledComponentId)];
  if (xt(e)) {
    if (!xt(i = e) || i.prototype && i.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Qo || wt(o) || o === null || console.error("".concat(Ms(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Qe(o, t, n, r);
  }
  var i;
  return e instanceof Qo ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : wt(e) ? zs(e) : Array.isArray(e) ? Array.prototype.concat.apply(tr, e.map(function(s) {
    return Qe(s, t, n, r);
  })) : [e.toString()];
}
function zl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (xt(n) && !uo(n)) return !1;
  }
  return !0;
}
var Hl = Os(er), Vl = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && zl(t), this.componentId = n, this.baseHash = qe(Hl, n), this.baseStyle = r, Ds.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = Ue(o, this.staticRulesId);
    else {
      var i = qo(Qe(this.rules, t, n, r)), s = Vr(qe(this.baseHash, i) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var c = r(i, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, c);
      }
      o = Ue(o, s), this.staticRulesId = s;
    }
    else {
      for (var u = qe(this.baseHash, r.hash), l = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string") l += d, process.env.NODE_ENV !== "production" && (u = qe(u, d));
        else if (d) {
          var a = qo(Qe(d, t, n, r));
          u = qe(u, a + f), l += a;
        }
      }
      if (l) {
        var h = Vr(u >>> 0);
        n.hasNameForId(this.componentId, h) || n.insertRules(this.componentId, h, r(l, ".".concat(h), void 0, this.componentId)), o = Ue(o, h);
      }
    }
    return o;
  }, e;
}(), Hs = ce.createContext(void 0);
Hs.Consumer;
var Sr = {}, ei = /* @__PURE__ */ new Set();
function Bl(e, t, n) {
  var r = uo(e), o = e, i = !_r(e), s = t.attrs, c = s === void 0 ? tr : s, u = t.componentId, l = u === void 0 ? function(y, N) {
    var E = typeof y != "string" ? "sc" : Fo(y);
    Sr[E] = (Sr[E] || 0) + 1;
    var b = "".concat(E, "-").concat(dl(er + E + Sr[E]));
    return N ? "".concat(N, "-").concat(b) : b;
  }(t.displayName, t.parentComponentId) : u, f = t.displayName, d = f === void 0 ? function(y) {
    return _r(y) ? "styled.".concat(y) : "Styled(".concat(Ms(y), ")");
  }(e) : f, a = t.displayName && t.componentId ? "".concat(Fo(t.displayName), "-").concat(t.componentId) : t.componentId || l, h = r && o.attrs ? o.attrs.concat(c).filter(Boolean) : c, m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var p = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var w = t.shouldForwardProp;
      m = function(y, N) {
        return p(y, N) && w(y, N);
      };
    } else m = p;
  }
  var x = new Vl(n, a, r ? o.componentStyle : void 0);
  function S(y, N) {
    return function(E, b, P) {
      var I = E.attrs, L = E.componentStyle, $ = E.defaultProps, j = E.foldedComponentIds, z = E.styledComponentId, v = E.target, T = ce.useContext(Hs), C = Zo(), O = E.shouldForwardProp || C.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Do(z);
      var R = al(b, T, $) || yt, k = function(Y, W, V) {
        for (var B, q = me(me({}, W), { className: void 0, theme: V }), Z = 0; Z < Y.length; Z += 1) {
          var U = xt(B = Y[Z]) ? B(q) : B;
          for (var X in U) q[X] = X === "className" ? Ue(q[X], U[X]) : X === "style" ? me(me({}, q[X]), U[X]) : U[X];
        }
        return W.className && (q.className = Ue(q.className, W.className)), q;
      }(I, b, R), _ = k.as || v, A = {};
      for (var D in k) k[D] === void 0 || D[0] === "$" || D === "as" || D === "theme" && k.theme === R || (D === "forwardedAs" ? A.as = k.forwardedAs : O && !O(D, _) || (A[D] = k[D], O || process.env.NODE_ENV !== "development" || zu(D) || ei.has(D) || !Hr.has(_) || (ei.add(D), console.warn('styled-components: it looks like an unknown prop "'.concat(D, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var H = function(Y, W) {
        var V = Zo(), B = Y.generateAndInjectStyles(W, V.styleSheet, V.stylis);
        return process.env.NODE_ENV !== "production" && Do(B), B;
      }(L, k);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(H);
      var F = Ue(j, z);
      return H && (F += " " + H), k.className && (F += " " + k.className), A[_r(_) && !Hr.has(_) ? "class" : "className"] = F, P && (A.ref = P), Tu(_, A);
    }(g, y, N);
  }
  S.displayName = d;
  var g = ce.forwardRef(S);
  return g.attrs = h, g.componentStyle = x, g.displayName = d, g.shouldForwardProp = m, g.foldedComponentIds = r ? Ue(o.foldedComponentIds, o.styledComponentId) : "", g.styledComponentId = a, g.target = r ? o.target : e, Object.defineProperty(g, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(y) {
    this._foldedDefaultProps = r ? function(N) {
      for (var E = [], b = 1; b < arguments.length; b++) E[b - 1] = arguments[b];
      for (var P = 0, I = E; P < I.length; P++) Br(N, I[P], !0);
      return N;
    }({}, o.defaultProps, y) : y;
  } }), process.env.NODE_ENV !== "production" && (sl(d, a), g.warnTooManyClasses = /* @__PURE__ */ function(y, N) {
    var E = {}, b = !1;
    return function(P) {
      if (!b && (E[P] = !0, Object.keys(E).length >= 200)) {
        var I = N ? ' with the id of "'.concat(N, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(y).concat(I, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), b = !0, E = {};
      }
    };
  }(d, a)), lo(g, function() {
    return ".".concat(g.styledComponentId);
  }), i && Rs(g, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), g;
}
function ti(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var ni = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Fl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (xt(e) || wt(e)) return ni(Qe(ti(tr, pt([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Qe(r) : ni(Qe(ti(r, t)));
}
function Yr(e, t, n) {
  if (n === void 0 && (n = yt), !t) throw Ot(1, t);
  var r = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, Fl.apply(void 0, pt([o], i, !1)));
  };
  return r.attrs = function(o) {
    return Yr(e, t, me(me({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
  }, r.withConfig = function(o) {
    return Yr(e, t, me(me({}, n), o));
  }, r;
}
var Vs = function(e) {
  return Yr(Bl, e);
}, Qt = Vs;
Hr.forEach(function(e) {
  Qt[e] = Vs(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var hn = "__sc-".concat(tt, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[hn] || (window[hn] = 0), window[hn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[hn] += 1);
const Yl = Qt.div`
  height: 100vh;
  width: 100%;
`, Wl = {
  SheetWrapper: Yl
};
function ue(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = ue(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Xl = { value: () => {
} };
function nr() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Tn(n);
}
function Tn(e) {
  this._ = e;
}
function Gl(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Tn.prototype = nr.prototype = {
  constructor: Tn,
  on: function(e, t) {
    var n = this._, r = Gl(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = ql(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = ri(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = ri(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Tn(e);
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
function ql(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function ri(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Xl, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Wr = "http://www.w3.org/1999/xhtml";
const oi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function rr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), oi.hasOwnProperty(t) ? { space: oi[t], local: e } : e;
}
function Ul(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Wr && t.documentElement.namespaceURI === Wr ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Kl(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Bs(e) {
  var t = rr(e);
  return (t.local ? Kl : Ul)(t);
}
function Zl() {
}
function fo(e) {
  return e == null ? Zl : function() {
    return this.querySelector(e);
  };
}
function Ql(e) {
  typeof e != "function" && (e = fo(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = new Array(s), u, l, f = 0; f < s; ++f)
      (u = i[f]) && (l = e.call(u, u.__data__, f, i)) && ("__data__" in u && (l.__data__ = u.__data__), c[f] = l);
  return new we(r, this._parents);
}
function Jl(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ed() {
  return [];
}
function Fs(e) {
  return e == null ? ed : function() {
    return this.querySelectorAll(e);
  };
}
function td(e) {
  return function() {
    return Jl(e.apply(this, arguments));
  };
}
function nd(e) {
  typeof e == "function" ? e = td(e) : e = Fs(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], c = s.length, u, l = 0; l < c; ++l)
      (u = s[l]) && (r.push(e.call(u, u.__data__, l, s)), o.push(u));
  return new we(r, o);
}
function Ys(e) {
  return function() {
    return this.matches(e);
  };
}
function Ws(e) {
  return function(t) {
    return t.matches(e);
  };
}
var rd = Array.prototype.find;
function od(e) {
  return function() {
    return rd.call(this.children, e);
  };
}
function id() {
  return this.firstElementChild;
}
function sd(e) {
  return this.select(e == null ? id : od(typeof e == "function" ? e : Ws(e)));
}
var ad = Array.prototype.filter;
function cd() {
  return Array.from(this.children);
}
function ud(e) {
  return function() {
    return ad.call(this.children, e);
  };
}
function ld(e) {
  return this.selectAll(e == null ? cd : ud(typeof e == "function" ? e : Ws(e)));
}
function dd(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && c.push(u);
  return new we(r, this._parents);
}
function Xs(e) {
  return new Array(e.length);
}
function fd() {
  return new we(this._enter || this._groups.map(Xs), this._parents);
}
function jn(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
jn.prototype = {
  constructor: jn,
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
function hd(e) {
  return function() {
    return e;
  };
}
function pd(e, t, n, r, o, i) {
  for (var s = 0, c, u = t.length, l = i.length; s < l; ++s)
    (c = t[s]) ? (c.__data__ = i[s], r[s] = c) : n[s] = new jn(e, i[s]);
  for (; s < u; ++s)
    (c = t[s]) && (o[s] = c);
}
function gd(e, t, n, r, o, i, s) {
  var c, u, l = /* @__PURE__ */ new Map(), f = t.length, d = i.length, a = new Array(f), h;
  for (c = 0; c < f; ++c)
    (u = t[c]) && (a[c] = h = s.call(u, u.__data__, c, t) + "", l.has(h) ? o[c] = u : l.set(h, u));
  for (c = 0; c < d; ++c)
    h = s.call(e, i[c], c, i) + "", (u = l.get(h)) ? (r[c] = u, u.__data__ = i[c], l.delete(h)) : n[c] = new jn(e, i[c]);
  for (c = 0; c < f; ++c)
    (u = t[c]) && l.get(a[c]) === u && (o[c] = u);
}
function md(e) {
  return e.__data__;
}
function yd(e, t) {
  if (!arguments.length) return Array.from(this, md);
  var n = t ? gd : pd, r = this._parents, o = this._groups;
  typeof e != "function" && (e = hd(e));
  for (var i = o.length, s = new Array(i), c = new Array(i), u = new Array(i), l = 0; l < i; ++l) {
    var f = r[l], d = o[l], a = d.length, h = xd(e.call(f, f && f.__data__, l, r)), m = h.length, p = c[l] = new Array(m), w = s[l] = new Array(m), x = u[l] = new Array(a);
    n(f, d, p, w, x, h, t);
    for (var S = 0, g = 0, y, N; S < m; ++S)
      if (y = p[S]) {
        for (S >= g && (g = S + 1); !(N = w[g]) && ++g < m; ) ;
        y._next = N || null;
      }
  }
  return s = new we(s, r), s._enter = c, s._exit = u, s;
}
function xd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function wd() {
  return new we(this._exit || this._groups.map(Xs), this._parents);
}
function vd(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function bd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), c = new Array(o), u = 0; u < s; ++u)
    for (var l = n[u], f = r[u], d = l.length, a = c[u] = new Array(d), h, m = 0; m < d; ++m)
      (h = l[m] || f[m]) && (a[m] = h);
  for (; u < o; ++u)
    c[u] = n[u];
  return new we(c, this._parents);
}
function _d() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Sd(e) {
  e || (e = Ed);
  function t(d, a) {
    return d && a ? e(d.__data__, a.__data__) : !d - !a;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], c = s.length, u = o[i] = new Array(c), l, f = 0; f < c; ++f)
      (l = s[f]) && (u[f] = l);
    u.sort(t);
  }
  return new we(o, this._parents).order();
}
function Ed(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Nd() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Cd() {
  return Array.from(this);
}
function kd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Od() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Md() {
  return !this.node();
}
function Ad(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, c; i < s; ++i)
      (c = o[i]) && e.call(c, c.__data__, i, o);
  return this;
}
function Td(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Pd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Rd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Id(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Dd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function $d(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ld(e, t) {
  var n = rr(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Pd : Td : typeof t == "function" ? n.local ? $d : Dd : n.local ? Id : Rd)(n, t));
}
function Gs(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function jd(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function zd(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Hd(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function Vd(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? jd : typeof t == "function" ? Hd : zd)(e, t, n ?? "")) : vt(this.node(), e);
}
function vt(e, t) {
  return e.style.getPropertyValue(t) || Gs(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Bd(e) {
  return function() {
    delete this[e];
  };
}
function Fd(e, t) {
  return function() {
    this[e] = t;
  };
}
function Yd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Wd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Bd : typeof t == "function" ? Yd : Fd)(e, t)) : this.node()[e];
}
function qs(e) {
  return e.trim().split(/^|\s+/);
}
function ho(e) {
  return e.classList || new Us(e);
}
function Us(e) {
  this._node = e, this._names = qs(e.getAttribute("class") || "");
}
Us.prototype = {
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
function Ks(e, t) {
  for (var n = ho(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Zs(e, t) {
  for (var n = ho(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Xd(e) {
  return function() {
    Ks(this, e);
  };
}
function Gd(e) {
  return function() {
    Zs(this, e);
  };
}
function qd(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ks : Zs)(this, e);
  };
}
function Ud(e, t) {
  var n = qs(e + "");
  if (arguments.length < 2) {
    for (var r = ho(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? qd : t ? Xd : Gd)(n, t));
}
function Kd() {
  this.textContent = "";
}
function Zd(e) {
  return function() {
    this.textContent = e;
  };
}
function Qd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Jd(e) {
  return arguments.length ? this.each(e == null ? Kd : (typeof e == "function" ? Qd : Zd)(e)) : this.node().textContent;
}
function ef() {
  this.innerHTML = "";
}
function tf(e) {
  return function() {
    this.innerHTML = e;
  };
}
function nf(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function rf(e) {
  return arguments.length ? this.each(e == null ? ef : (typeof e == "function" ? nf : tf)(e)) : this.node().innerHTML;
}
function of() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sf() {
  return this.each(of);
}
function af() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function cf() {
  return this.each(af);
}
function uf(e) {
  var t = typeof e == "function" ? e : Bs(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function lf() {
  return null;
}
function df(e, t) {
  var n = typeof e == "function" ? e : Bs(e), r = t == null ? lf : typeof t == "function" ? t : fo(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ff() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function hf() {
  return this.each(ff);
}
function pf() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gf() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function mf(e) {
  return this.select(e ? gf : pf);
}
function yf(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function xf(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function wf(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function vf(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function bf(e, t, n) {
  return function() {
    var r = this.__on, o, i = xf(t);
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
function _f(e, t, n) {
  var r = wf(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var u = 0, l = c.length, f; u < l; ++u)
        for (o = 0, f = c[u]; o < i; ++o)
          if ((s = r[o]).type === f.type && s.name === f.name)
            return f.value;
    }
    return;
  }
  for (c = t ? bf : vf, o = 0; o < i; ++o) this.each(c(r[o], t, n));
  return this;
}
function Qs(e, t, n) {
  var r = Gs(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function Sf(e, t) {
  return function() {
    return Qs(this, e, t);
  };
}
function Ef(e, t) {
  return function() {
    return Qs(this, e, t.apply(this, arguments));
  };
}
function Nf(e, t) {
  return this.each((typeof t == "function" ? Ef : Sf)(e, t));
}
function* Cf() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Js = [null];
function we(e, t) {
  this._groups = e, this._parents = t;
}
function Jt() {
  return new we([[document.documentElement]], Js);
}
function kf() {
  return this;
}
we.prototype = Jt.prototype = {
  constructor: we,
  select: Ql,
  selectAll: nd,
  selectChild: sd,
  selectChildren: ld,
  filter: dd,
  data: yd,
  enter: fd,
  exit: wd,
  join: vd,
  merge: bd,
  selection: kf,
  order: _d,
  sort: Sd,
  call: Nd,
  nodes: Cd,
  node: kd,
  size: Od,
  empty: Md,
  each: Ad,
  attr: Ld,
  style: Vd,
  property: Wd,
  classed: Ud,
  text: Jd,
  html: rf,
  raise: sf,
  lower: cf,
  append: uf,
  insert: df,
  remove: hf,
  clone: mf,
  datum: yf,
  on: _f,
  dispatch: Nf,
  [Symbol.iterator]: Cf
};
function xe(e) {
  return typeof e == "string" ? new we([[document.querySelector(e)]], [document.documentElement]) : new we([[e]], Js);
}
function Of(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ee(e, t) {
  if (e = Of(e), t === void 0 && (t = e.currentTarget), t) {
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
const Mf = { passive: !1 }, Ft = { capture: !0, passive: !1 };
function Er(e) {
  e.stopImmediatePropagation();
}
function ft(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function ea(e) {
  var t = e.document.documentElement, n = xe(e).on("dragstart.drag", ft, Ft);
  "onselectstart" in t ? n.on("selectstart.drag", ft, Ft) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ta(e, t) {
  var n = e.document.documentElement, r = xe(e).on("dragstart.drag", null);
  t && (r.on("click.drag", ft, Ft), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const pn = (e) => () => e;
function Xr(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: c,
  dx: u,
  dy: l,
  dispatch: f
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
    _: { value: f }
  });
}
Xr.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Af(e) {
  return !e.ctrlKey && !e.button;
}
function Tf() {
  return this.parentNode;
}
function Pf(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Rf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function na() {
  var e = Af, t = Tf, n = Pf, r = Rf, o = {}, i = nr("start", "drag", "end"), s = 0, c, u, l, f, d = 0;
  function a(y) {
    y.on("mousedown.drag", h).filter(r).on("touchstart.drag", w).on("touchmove.drag", x, Mf).on("touchend.drag touchcancel.drag", S).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(y, N) {
    if (!(f || !e.call(this, y, N))) {
      var E = g(this, t.call(this, y, N), y, N, "mouse");
      E && (xe(y.view).on("mousemove.drag", m, Ft).on("mouseup.drag", p, Ft), ea(y.view), Er(y), l = !1, c = y.clientX, u = y.clientY, E("start", y));
    }
  }
  function m(y) {
    if (ft(y), !l) {
      var N = y.clientX - c, E = y.clientY - u;
      l = N * N + E * E > d;
    }
    o.mouse("drag", y);
  }
  function p(y) {
    xe(y.view).on("mousemove.drag mouseup.drag", null), ta(y.view, l), ft(y), o.mouse("end", y);
  }
  function w(y, N) {
    if (e.call(this, y, N)) {
      var E = y.changedTouches, b = t.call(this, y, N), P = E.length, I, L;
      for (I = 0; I < P; ++I)
        (L = g(this, b, y, N, E[I].identifier, E[I])) && (Er(y), L("start", y, E[I]));
    }
  }
  function x(y) {
    var N = y.changedTouches, E = N.length, b, P;
    for (b = 0; b < E; ++b)
      (P = o[N[b].identifier]) && (ft(y), P("drag", y, N[b]));
  }
  function S(y) {
    var N = y.changedTouches, E = N.length, b, P;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), b = 0; b < E; ++b)
      (P = o[N[b].identifier]) && (Er(y), P("end", y, N[b]));
  }
  function g(y, N, E, b, P, I) {
    var L = i.copy(), $ = Ee(I || E, N), j, z, v;
    if ((v = n.call(y, new Xr("beforestart", {
      sourceEvent: E,
      target: a,
      identifier: P,
      active: s,
      x: $[0],
      y: $[1],
      dx: 0,
      dy: 0,
      dispatch: L
    }), b)) != null)
      return j = v.x - $[0] || 0, z = v.y - $[1] || 0, function T(C, O, R) {
        var k = $, _;
        switch (C) {
          case "start":
            o[P] = T, _ = s++;
            break;
          case "end":
            delete o[P], --s;
          // falls through
          case "drag":
            $ = Ee(R || O, N), _ = s;
            break;
        }
        L.call(
          C,
          y,
          new Xr(C, {
            sourceEvent: O,
            subject: v,
            target: a,
            identifier: P,
            active: _,
            x: $[0] + j,
            y: $[1] + z,
            dx: $[0] - k[0],
            dy: $[1] - k[1],
            dispatch: L
          }),
          b
        );
      };
  }
  return a.filter = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : pn(!!y), a) : e;
  }, a.container = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : pn(y), a) : t;
  }, a.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : pn(y), a) : n;
  }, a.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : pn(!!y), a) : r;
  }, a.on = function() {
    var y = i.on.apply(i, arguments);
    return y === i ? a : y;
  }, a.clickDistance = function(y) {
    return arguments.length ? (d = (y = +y) * y, a) : Math.sqrt(d);
  }, a;
}
function po(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ra(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function en() {
}
var Yt = 0.7, zn = 1 / Yt, ht = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", If = /^#([0-9a-f]{3,8})$/, Df = new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`), $f = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), Lf = new RegExp(`^rgba\\(${ht},${ht},${ht},${Wt}\\)$`), jf = new RegExp(`^rgba\\(${Te},${Te},${Te},${Wt}\\)$`), zf = new RegExp(`^hsl\\(${Wt},${Te},${Te}\\)$`), Hf = new RegExp(`^hsla\\(${Wt},${Te},${Te},${Wt}\\)$`), ii = {
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
po(en, Xt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: si,
  // Deprecated! Use color.formatHex.
  formatHex: si,
  formatHex8: Vf,
  formatHsl: Bf,
  formatRgb: ai,
  toString: ai
});
function si() {
  return this.rgb().formatHex();
}
function Vf() {
  return this.rgb().formatHex8();
}
function Bf() {
  return oa(this).formatHsl();
}
function ai() {
  return this.rgb().formatRgb();
}
function Xt(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = If.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ci(t) : n === 3 ? new ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? gn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? gn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Df.exec(e)) ? new ye(t[1], t[2], t[3], 1) : (t = $f.exec(e)) ? new ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Lf.exec(e)) ? gn(t[1], t[2], t[3], t[4]) : (t = jf.exec(e)) ? gn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = zf.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, 1) : (t = Hf.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, t[4]) : ii.hasOwnProperty(e) ? ci(ii[e]) : e === "transparent" ? new ye(NaN, NaN, NaN, 0) : null;
}
function ci(e) {
  return new ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gn(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ye(e, t, n, r);
}
function Ff(e) {
  return e instanceof en || (e = Xt(e)), e ? (e = e.rgb(), new ye(e.r, e.g, e.b, e.opacity)) : new ye();
}
function Gr(e, t, n, r) {
  return arguments.length === 1 ? Ff(e) : new ye(e, t, n, r ?? 1);
}
function ye(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
po(ye, Gr, ra(en, {
  brighter(e) {
    return e = e == null ? zn : Math.pow(zn, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yt : Math.pow(Yt, e), new ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ye(Je(this.r), Je(this.g), Je(this.b), Hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ui,
  // Deprecated! Use color.formatHex.
  formatHex: ui,
  formatHex8: Yf,
  formatRgb: li,
  toString: li
}));
function ui() {
  return `#${Ke(this.r)}${Ke(this.g)}${Ke(this.b)}`;
}
function Yf() {
  return `#${Ke(this.r)}${Ke(this.g)}${Ke(this.b)}${Ke((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function li() {
  const e = Hn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Je(this.r)}, ${Je(this.g)}, ${Je(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Je(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ke(e) {
  return e = Je(e), (e < 16 ? "0" : "") + e.toString(16);
}
function di(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ne(e, t, n, r);
}
function oa(e) {
  if (e instanceof Ne) return new Ne(e.h, e.s, e.l, e.opacity);
  if (e instanceof en || (e = Xt(e)), !e) return new Ne();
  if (e instanceof Ne) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, c = i - o, u = (i + o) / 2;
  return c ? (t === i ? s = (n - r) / c + (n < r) * 6 : n === i ? s = (r - t) / c + 2 : s = (t - n) / c + 4, c /= u < 0.5 ? i + o : 2 - i - o, s *= 60) : c = u > 0 && u < 1 ? 0 : s, new Ne(s, c, u, e.opacity);
}
function Wf(e, t, n, r) {
  return arguments.length === 1 ? oa(e) : new Ne(e, t, n, r ?? 1);
}
function Ne(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
po(Ne, Wf, ra(en, {
  brighter(e) {
    return e = e == null ? zn : Math.pow(zn, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Yt : Math.pow(Yt, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new ye(
      Nr(e >= 240 ? e - 240 : e + 120, o, r),
      Nr(e, o, r),
      Nr(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Ne(fi(this.h), mn(this.s), mn(this.l), Hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Hn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${fi(this.h)}, ${mn(this.s) * 100}%, ${mn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function fi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function mn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ia = (e) => () => e;
function Xf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Gf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function qf(e) {
  return (e = +e) == 1 ? sa : function(t, n) {
    return n - t ? Gf(t, n, e) : ia(isNaN(t) ? n : t);
  };
}
function sa(e, t) {
  var n = t - e;
  return n ? Xf(e, n) : ia(isNaN(e) ? t : e);
}
const hi = function e(t) {
  var n = qf(t);
  function r(o, i) {
    var s = n((o = Gr(o)).r, (i = Gr(i)).r), c = n(o.g, i.g), u = n(o.b, i.b), l = sa(o.opacity, i.opacity);
    return function(f) {
      return o.r = s(f), o.g = c(f), o.b = u(f), o.opacity = l(f), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Be(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var qr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cr = new RegExp(qr.source, "g");
function Uf(e) {
  return function() {
    return e;
  };
}
function Kf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Zf(e, t) {
  var n = qr.lastIndex = Cr.lastIndex = 0, r, o, i, s = -1, c = [], u = [];
  for (e = e + "", t = t + ""; (r = qr.exec(e)) && (o = Cr.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), c[s] ? c[s] += i : c[++s] = i), (r = r[0]) === (o = o[0]) ? c[s] ? c[s] += o : c[++s] = o : (c[++s] = null, u.push({ i: s, x: Be(r, o) })), n = Cr.lastIndex;
  return n < t.length && (i = t.slice(n), c[s] ? c[s] += i : c[++s] = i), c.length < 2 ? u[0] ? Kf(u[0].x) : Uf(t) : (t = u.length, function(l) {
    for (var f = 0, d; f < t; ++f) c[(d = u[f]).i] = d.x(l);
    return c.join("");
  });
}
var pi = 180 / Math.PI, Ur = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function aa(e, t, n, r, o, i) {
  var s, c, u;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (u = e * n + t * r) && (n -= e * u, r -= t * u), (c = Math.sqrt(n * n + r * r)) && (n /= c, r /= c, u /= c), e * r < t * n && (e = -e, t = -t, u = -u, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * pi,
    skewX: Math.atan(u) * pi,
    scaleX: s,
    scaleY: c
  };
}
var yn;
function Qf(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ur : aa(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Jf(e) {
  return e == null || (yn || (yn = document.createElementNS("http://www.w3.org/2000/svg", "g")), yn.setAttribute("transform", e), !(e = yn.transform.baseVal.consolidate())) ? Ur : (e = e.matrix, aa(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ca(e, t, n, r) {
  function o(l) {
    return l.length ? l.pop() + " " : "";
  }
  function i(l, f, d, a, h, m) {
    if (l !== d || f !== a) {
      var p = h.push("translate(", null, t, null, n);
      m.push({ i: p - 4, x: Be(l, d) }, { i: p - 2, x: Be(f, a) });
    } else (d || a) && h.push("translate(" + d + t + a + n);
  }
  function s(l, f, d, a) {
    l !== f ? (l - f > 180 ? f += 360 : f - l > 180 && (l += 360), a.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Be(l, f) })) : f && d.push(o(d) + "rotate(" + f + r);
  }
  function c(l, f, d, a) {
    l !== f ? a.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Be(l, f) }) : f && d.push(o(d) + "skewX(" + f + r);
  }
  function u(l, f, d, a, h, m) {
    if (l !== d || f !== a) {
      var p = h.push(o(h) + "scale(", null, ",", null, ")");
      m.push({ i: p - 4, x: Be(l, d) }, { i: p - 2, x: Be(f, a) });
    } else (d !== 1 || a !== 1) && h.push(o(h) + "scale(" + d + "," + a + ")");
  }
  return function(l, f) {
    var d = [], a = [];
    return l = e(l), f = e(f), i(l.translateX, l.translateY, f.translateX, f.translateY, d, a), s(l.rotate, f.rotate, d, a), c(l.skewX, f.skewX, d, a), u(l.scaleX, l.scaleY, f.scaleX, f.scaleY, d, a), l = f = null, function(h) {
      for (var m = -1, p = a.length, w; ++m < p; ) d[(w = a[m]).i] = w.x(h);
      return d.join("");
    };
  };
}
var eh = ca(Qf, "px, ", "px)", "deg)"), th = ca(Jf, ", ", ")", ")"), nh = 1e-12;
function gi(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function rh(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function oh(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const ih = function e(t, n, r) {
  function o(i, s) {
    var c = i[0], u = i[1], l = i[2], f = s[0], d = s[1], a = s[2], h = f - c, m = d - u, p = h * h + m * m, w, x;
    if (p < nh)
      x = Math.log(a / l) / t, w = function(b) {
        return [
          c + b * h,
          u + b * m,
          l * Math.exp(t * b * x)
        ];
      };
    else {
      var S = Math.sqrt(p), g = (a * a - l * l + r * p) / (2 * l * n * S), y = (a * a - l * l - r * p) / (2 * a * n * S), N = Math.log(Math.sqrt(g * g + 1) - g), E = Math.log(Math.sqrt(y * y + 1) - y);
      x = (E - N) / t, w = function(b) {
        var P = b * x, I = gi(N), L = l / (n * S) * (I * oh(t * P + N) - rh(N));
        return [
          c + L * h,
          u + L * m,
          l * I / gi(t * P + N)
        ];
      };
    }
    return w.duration = x * 1e3 * t / Math.SQRT2, w;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), c = s * s, u = c * c;
    return e(s, c, u);
  }, o;
}(Math.SQRT2, 2, 4);
var bt = 0, jt = 0, It = 0, ua = 1e3, Vn, zt, Bn = 0, nt = 0, or = 0, Gt = typeof performance == "object" && performance.now ? performance : Date, la = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function go() {
  return nt || (la(sh), nt = Gt.now() + or);
}
function sh() {
  nt = 0;
}
function Fn() {
  this._call = this._time = this._next = null;
}
Fn.prototype = da.prototype = {
  constructor: Fn,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? go() : +n) + (t == null ? 0 : +t), !this._next && zt !== this && (zt ? zt._next = this : Vn = this, zt = this), this._call = e, this._time = n, Kr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Kr());
  }
};
function da(e, t, n) {
  var r = new Fn();
  return r.restart(e, t, n), r;
}
function ah() {
  go(), ++bt;
  for (var e = Vn, t; e; )
    (t = nt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --bt;
}
function mi() {
  nt = (Bn = Gt.now()) + or, bt = jt = 0;
  try {
    ah();
  } finally {
    bt = 0, uh(), nt = 0;
  }
}
function ch() {
  var e = Gt.now(), t = e - Bn;
  t > ua && (or -= t, Bn = e);
}
function uh() {
  for (var e, t = Vn, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Vn = n);
  zt = e, Kr(r);
}
function Kr(e) {
  if (!bt) {
    jt && (jt = clearTimeout(jt));
    var t = e - nt;
    t > 24 ? (e < 1 / 0 && (jt = setTimeout(mi, e - Gt.now() - or)), It && (It = clearInterval(It))) : (It || (Bn = Gt.now(), It = setInterval(ch, ua)), bt = 1, la(mi));
  }
}
function yi(e, t, n) {
  var r = new Fn();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var lh = nr("start", "end", "cancel", "interrupt"), dh = [], fa = 0, xi = 1, Zr = 2, Pn = 3, wi = 4, Qr = 5, Rn = 6;
function ir(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  fh(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: lh,
    tween: dh,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: fa
  });
}
function mo(e, t) {
  var n = Me(e, t);
  if (n.state > fa) throw new Error("too late; already scheduled");
  return n;
}
function Pe(e, t) {
  var n = Me(e, t);
  if (n.state > Pn) throw new Error("too late; already running");
  return n;
}
function Me(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function fh(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = da(i, 0, n.time);
  function i(l) {
    n.state = xi, n.timer.restart(s, n.delay, n.time), n.delay <= l && s(l - n.delay);
  }
  function s(l) {
    var f, d, a, h;
    if (n.state !== xi) return u();
    for (f in r)
      if (h = r[f], h.name === n.name) {
        if (h.state === Pn) return yi(s);
        h.state === wi ? (h.state = Rn, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[f]) : +f < t && (h.state = Rn, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[f]);
      }
    if (yi(function() {
      n.state === Pn && (n.state = wi, n.timer.restart(c, n.delay, n.time), c(l));
    }), n.state = Zr, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Zr) {
      for (n.state = Pn, o = new Array(a = n.tween.length), f = 0, d = -1; f < a; ++f)
        (h = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function c(l) {
    for (var f = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Qr, 1), d = -1, a = o.length; ++d < a; )
      o[d].call(e, f);
    n.state === Qr && (n.on.call("end", e, e.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Rn, n.timer.stop(), delete r[t];
    for (var l in r) return;
    delete e.__transition;
  }
}
function In(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > Zr && r.state < Qr, r.state = Rn, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function hh(e) {
  return this.each(function() {
    In(this, e);
  });
}
function ph(e, t) {
  var n, r;
  return function() {
    var o = Pe(this, e), i = o.tween;
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
function gh(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Pe(this, e), s = i.tween;
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
function mh(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Me(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? ph : gh)(n, e, t));
}
function yo(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Pe(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Me(o, r).value[t];
  };
}
function ha(e, t) {
  var n;
  return (typeof t == "number" ? Be : t instanceof Xt ? hi : (n = Xt(t)) ? (t = n, hi) : Zf)(e, t);
}
function yh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function xh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function wh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function vh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function bh(e, t, n) {
  var r, o, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), u = c + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c)));
  };
}
function _h(e, t, n) {
  var r, o, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), u = c + "", s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c)));
  };
}
function Sh(e, t) {
  var n = rr(e), r = n === "transform" ? th : ha;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _h : bh)(n, r, yo(this, "attr." + e, t)) : t == null ? (n.local ? xh : yh)(n) : (n.local ? vh : wh)(n, r, t));
}
function Eh(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Nh(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Ch(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Nh(e, i)), n;
  }
  return o._value = t, o;
}
function kh(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Eh(e, i)), n;
  }
  return o._value = t, o;
}
function Oh(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = rr(e);
  return this.tween(n, (r.local ? Ch : kh)(r, t));
}
function Mh(e, t) {
  return function() {
    mo(this, e).delay = +t.apply(this, arguments);
  };
}
function Ah(e, t) {
  return t = +t, function() {
    mo(this, e).delay = t;
  };
}
function Th(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Mh : Ah)(t, e)) : Me(this.node(), t).delay;
}
function Ph(e, t) {
  return function() {
    Pe(this, e).duration = +t.apply(this, arguments);
  };
}
function Rh(e, t) {
  return t = +t, function() {
    Pe(this, e).duration = t;
  };
}
function Ih(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ph : Rh)(t, e)) : Me(this.node(), t).duration;
}
function Dh(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Pe(this, e).ease = t;
  };
}
function $h(e) {
  var t = this._id;
  return arguments.length ? this.each(Dh(t, e)) : Me(this.node(), t).ease;
}
function Lh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Pe(this, e).ease = n;
  };
}
function jh(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Lh(this._id, e));
}
function zh(e) {
  typeof e != "function" && (e = Ys(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, c = r[o] = [], u, l = 0; l < s; ++l)
      (u = i[l]) && e.call(u, u.__data__, l, i) && c.push(u);
  return new Le(r, this._parents, this._name, this._id);
}
function Hh(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), c = 0; c < i; ++c)
    for (var u = t[c], l = n[c], f = u.length, d = s[c] = new Array(f), a, h = 0; h < f; ++h)
      (a = u[h] || l[h]) && (d[h] = a);
  for (; c < r; ++c)
    s[c] = t[c];
  return new Le(s, this._parents, this._name, this._id);
}
function Vh(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Bh(e, t, n) {
  var r, o, i = Vh(t) ? mo : Pe;
  return function() {
    var s = i(this, e), c = s.on;
    c !== r && (o = (r = c).copy()).on(t, n), s.on = o;
  };
}
function Fh(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Me(this.node(), n).on.on(e) : this.each(Bh(n, e, t));
}
function Yh(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Wh() {
  return this.on("end.remove", Yh(this._id));
}
function Xh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = fo(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var c = r[s], u = c.length, l = i[s] = new Array(u), f, d, a = 0; a < u; ++a)
      (f = c[a]) && (d = e.call(f, f.__data__, a, c)) && ("__data__" in f && (d.__data__ = f.__data__), l[a] = d, ir(l[a], t, n, a, l, Me(f, n)));
  return new Le(i, this._parents, t, n);
}
function Gh(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Fs(e));
  for (var r = this._groups, o = r.length, i = [], s = [], c = 0; c < o; ++c)
    for (var u = r[c], l = u.length, f, d = 0; d < l; ++d)
      if (f = u[d]) {
        for (var a = e.call(f, f.__data__, d, u), h, m = Me(f, n), p = 0, w = a.length; p < w; ++p)
          (h = a[p]) && ir(h, t, n, p, a, m);
        i.push(a), s.push(f);
      }
  return new Le(i, s, t, n);
}
var qh = Jt.prototype.constructor;
function Uh() {
  return new qh(this._groups, this._parents);
}
function Kh(e, t) {
  var n, r, o;
  return function() {
    var i = vt(this, e), s = (this.style.removeProperty(e), vt(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function pa(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Zh(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = vt(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function Qh(e, t, n) {
  var r, o, i;
  return function() {
    var s = vt(this, e), c = n(this), u = c + "";
    return c == null && (u = c = (this.style.removeProperty(e), vt(this, e))), s === u ? null : s === r && u === o ? i : (o = u, i = t(r = s, c));
  };
}
function Jh(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, c;
  return function() {
    var u = Pe(this, e), l = u.on, f = u.value[i] == null ? c || (c = pa(t)) : void 0;
    (l !== n || o !== f) && (r = (n = l).copy()).on(s, o = f), u.on = r;
  };
}
function ep(e, t, n) {
  var r = (e += "") == "transform" ? eh : ha;
  return t == null ? this.styleTween(e, Kh(e, r)).on("end.style." + e, pa(e)) : typeof t == "function" ? this.styleTween(e, Qh(e, r, yo(this, "style." + e, t))).each(Jh(this._id, e)) : this.styleTween(e, Zh(e, r, t), n).on("end.style." + e, null);
}
function tp(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function np(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && tp(e, s, n)), r;
  }
  return i._value = t, i;
}
function rp(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, np(e, t, n ?? ""));
}
function op(e) {
  return function() {
    this.textContent = e;
  };
}
function ip(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function sp(e) {
  return this.tween("text", typeof e == "function" ? ip(yo(this, "text", e)) : op(e == null ? "" : e + ""));
}
function ap(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function cp(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && ap(o)), t;
  }
  return r._value = e, r;
}
function up(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, cp(e));
}
function lp() {
  for (var e = this._name, t = this._id, n = ga(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], c = s.length, u, l = 0; l < c; ++l)
      if (u = s[l]) {
        var f = Me(u, t);
        ir(u, e, n, l, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new Le(r, this._parents, e, n);
}
function dp() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var c = { value: s }, u = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var l = Pe(this, r), f = l.on;
      f !== e && (t = (e = f).copy(), t._.cancel.push(c), t._.interrupt.push(c), t._.end.push(u)), l.on = t;
    }), o === 0 && i();
  });
}
var fp = 0;
function Le(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ga() {
  return ++fp;
}
var Re = Jt.prototype;
Le.prototype = {
  constructor: Le,
  select: Xh,
  selectAll: Gh,
  selectChild: Re.selectChild,
  selectChildren: Re.selectChildren,
  filter: zh,
  merge: Hh,
  selection: Uh,
  transition: lp,
  call: Re.call,
  nodes: Re.nodes,
  node: Re.node,
  size: Re.size,
  empty: Re.empty,
  each: Re.each,
  on: Fh,
  attr: Sh,
  attrTween: Oh,
  style: ep,
  styleTween: rp,
  text: sp,
  textTween: up,
  remove: Wh,
  tween: mh,
  delay: Th,
  duration: Ih,
  ease: $h,
  easeVarying: jh,
  end: dp,
  [Symbol.iterator]: Re[Symbol.iterator]
};
function hp(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var pp = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: hp
};
function gp(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function mp(e) {
  var t, n;
  e instanceof Le ? (t = e._id, e = e._name) : (t = ga(), (n = pp).time = go(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], c = s.length, u, l = 0; l < c; ++l)
      (u = s[l]) && ir(u, e, t, l, s, n || gp(u, t));
  return new Le(r, this._parents, e, t);
}
Jt.prototype.interrupt = hh;
Jt.prototype.transition = mp;
const xn = (e) => () => e;
function yp(e, {
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
function De(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
De.prototype = {
  constructor: De,
  scale: function(e) {
    return e === 1 ? this : new De(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new De(this.k, this.x + this.k * e, this.y + this.k * t);
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
var sr = new De(1, 0, 0);
ma.prototype = De.prototype;
function ma(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return sr;
  return e.__zoom;
}
function kr(e) {
  e.stopImmediatePropagation();
}
function Dt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function xp(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function wp() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function vi() {
  return this.__zoom || sr;
}
function vp(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function bp() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _p(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function ya() {
  var e = xp, t = wp, n = _p, r = vp, o = bp, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, u = ih, l = nr("start", "zoom", "end"), f, d, a, h = 500, m = 150, p = 0, w = 10;
  function x(v) {
    v.property("__zoom", vi).on("wheel.zoom", P, { passive: !1 }).on("mousedown.zoom", I).on("dblclick.zoom", L).filter(o).on("touchstart.zoom", $).on("touchmove.zoom", j).on("touchend.zoom touchcancel.zoom", z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(v, T, C, O) {
    var R = v.selection ? v.selection() : v;
    R.property("__zoom", vi), v !== R ? N(v, T, C, O) : R.interrupt().each(function() {
      E(this, arguments).event(O).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end();
    });
  }, x.scaleBy = function(v, T, C, O) {
    x.scaleTo(v, function() {
      var R = this.__zoom.k, k = typeof T == "function" ? T.apply(this, arguments) : T;
      return R * k;
    }, C, O);
  }, x.scaleTo = function(v, T, C, O) {
    x.transform(v, function() {
      var R = t.apply(this, arguments), k = this.__zoom, _ = C == null ? y(R) : typeof C == "function" ? C.apply(this, arguments) : C, A = k.invert(_), D = typeof T == "function" ? T.apply(this, arguments) : T;
      return n(g(S(k, D), _, A), R, s);
    }, C, O);
  }, x.translateBy = function(v, T, C, O) {
    x.transform(v, function() {
      return n(this.__zoom.translate(
        typeof T == "function" ? T.apply(this, arguments) : T,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, O);
  }, x.translateTo = function(v, T, C, O, R) {
    x.transform(v, function() {
      var k = t.apply(this, arguments), _ = this.__zoom, A = O == null ? y(k) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(sr.translate(A[0], A[1]).scale(_.k).translate(
        typeof T == "function" ? -T.apply(this, arguments) : -T,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), k, s);
    }, O, R);
  };
  function S(v, T) {
    return T = Math.max(i[0], Math.min(i[1], T)), T === v.k ? v : new De(T, v.x, v.y);
  }
  function g(v, T, C) {
    var O = T[0] - C[0] * v.k, R = T[1] - C[1] * v.k;
    return O === v.x && R === v.y ? v : new De(v.k, O, R);
  }
  function y(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function N(v, T, C, O) {
    v.on("start.zoom", function() {
      E(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var R = this, k = arguments, _ = E(R, k).event(O), A = t.apply(R, k), D = C == null ? y(A) : typeof C == "function" ? C.apply(R, k) : C, H = Math.max(A[1][0] - A[0][0], A[1][1] - A[0][1]), F = R.__zoom, Y = typeof T == "function" ? T.apply(R, k) : T, W = u(F.invert(D).concat(H / F.k), Y.invert(D).concat(H / Y.k));
      return function(V) {
        if (V === 1) V = Y;
        else {
          var B = W(V), q = H / B[2];
          V = new De(q, D[0] - B[0] * q, D[1] - B[1] * q);
        }
        _.zoom(null, V);
      };
    });
  }
  function E(v, T, C) {
    return !C && v.__zooming || new b(v, T);
  }
  function b(v, T) {
    this.that = v, this.args = T, this.active = 0, this.sourceEvent = null, this.extent = t.apply(v, T), this.taps = 0;
  }
  b.prototype = {
    event: function(v) {
      return v && (this.sourceEvent = v), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(v, T) {
      return this.mouse && v !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])), this.touch0 && v !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])), this.touch1 && v !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])), this.that.__zoom = T, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(v) {
      var T = xe(this.that).datum();
      l.call(
        v,
        this.that,
        new yp(v, {
          sourceEvent: this.sourceEvent,
          target: x,
          transform: this.that.__zoom,
          dispatch: l
        }),
        T
      );
    }
  };
  function P(v, ...T) {
    if (!e.apply(this, arguments)) return;
    var C = E(this, T).event(v), O = this.__zoom, R = Math.max(i[0], Math.min(i[1], O.k * Math.pow(2, r.apply(this, arguments)))), k = Ee(v);
    if (C.wheel)
      (C.mouse[0][0] !== k[0] || C.mouse[0][1] !== k[1]) && (C.mouse[1] = O.invert(C.mouse[0] = k)), clearTimeout(C.wheel);
    else {
      if (O.k === R) return;
      C.mouse = [k, O.invert(k)], In(this), C.start();
    }
    Dt(v), C.wheel = setTimeout(_, m), C.zoom("mouse", n(g(S(O, R), C.mouse[0], C.mouse[1]), C.extent, s));
    function _() {
      C.wheel = null, C.end();
    }
  }
  function I(v, ...T) {
    if (a || !e.apply(this, arguments)) return;
    var C = v.currentTarget, O = E(this, T, !0).event(v), R = xe(v.view).on("mousemove.zoom", D, !0).on("mouseup.zoom", H, !0), k = Ee(v, C), _ = v.clientX, A = v.clientY;
    ea(v.view), kr(v), O.mouse = [k, this.__zoom.invert(k)], In(this), O.start();
    function D(F) {
      if (Dt(F), !O.moved) {
        var Y = F.clientX - _, W = F.clientY - A;
        O.moved = Y * Y + W * W > p;
      }
      O.event(F).zoom("mouse", n(g(O.that.__zoom, O.mouse[0] = Ee(F, C), O.mouse[1]), O.extent, s));
    }
    function H(F) {
      R.on("mousemove.zoom mouseup.zoom", null), ta(F.view, O.moved), Dt(F), O.event(F).end();
    }
  }
  function L(v, ...T) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, O = Ee(v.changedTouches ? v.changedTouches[0] : v, this), R = C.invert(O), k = C.k * (v.shiftKey ? 0.5 : 2), _ = n(g(S(C, k), O, R), t.apply(this, T), s);
      Dt(v), c > 0 ? xe(this).transition().duration(c).call(N, _, O, v) : xe(this).call(x.transform, _, O, v);
    }
  }
  function $(v, ...T) {
    if (e.apply(this, arguments)) {
      var C = v.touches, O = C.length, R = E(this, T, v.changedTouches.length === O).event(v), k, _, A, D;
      for (kr(v), _ = 0; _ < O; ++_)
        A = C[_], D = Ee(A, this), D = [D, this.__zoom.invert(D), A.identifier], R.touch0 ? !R.touch1 && R.touch0[2] !== D[2] && (R.touch1 = D, R.taps = 0) : (R.touch0 = D, k = !0, R.taps = 1 + !!f);
      f && (f = clearTimeout(f)), k && (R.taps < 2 && (d = D[0], f = setTimeout(function() {
        f = null;
      }, h)), In(this), R.start());
    }
  }
  function j(v, ...T) {
    if (this.__zooming) {
      var C = E(this, T).event(v), O = v.changedTouches, R = O.length, k, _, A, D;
      for (Dt(v), k = 0; k < R; ++k)
        _ = O[k], A = Ee(_, this), C.touch0 && C.touch0[2] === _.identifier ? C.touch0[0] = A : C.touch1 && C.touch1[2] === _.identifier && (C.touch1[0] = A);
      if (_ = C.that.__zoom, C.touch1) {
        var H = C.touch0[0], F = C.touch0[1], Y = C.touch1[0], W = C.touch1[1], V = (V = Y[0] - H[0]) * V + (V = Y[1] - H[1]) * V, B = (B = W[0] - F[0]) * B + (B = W[1] - F[1]) * B;
        _ = S(_, Math.sqrt(V / B)), A = [(H[0] + Y[0]) / 2, (H[1] + Y[1]) / 2], D = [(F[0] + W[0]) / 2, (F[1] + W[1]) / 2];
      } else if (C.touch0) A = C.touch0[0], D = C.touch0[1];
      else return;
      C.zoom("touch", n(g(_, A, D), C.extent, s));
    }
  }
  function z(v, ...T) {
    if (this.__zooming) {
      var C = E(this, T).event(v), O = v.changedTouches, R = O.length, k, _;
      for (kr(v), a && clearTimeout(a), a = setTimeout(function() {
        a = null;
      }, h), k = 0; k < R; ++k)
        _ = O[k], C.touch0 && C.touch0[2] === _.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === _.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0) C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && (_ = Ee(_, this), Math.hypot(d[0] - _[0], d[1] - _[1]) < w)) {
        var A = xe(this).on("dblclick.zoom");
        A && A.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : xn(+v), x) : r;
  }, x.filter = function(v) {
    return arguments.length ? (e = typeof v == "function" ? v : xn(!!v), x) : e;
  }, x.touchable = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : xn(!!v), x) : o;
  }, x.extent = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : xn([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), x) : t;
  }, x.scaleExtent = function(v) {
    return arguments.length ? (i[0] = +v[0], i[1] = +v[1], x) : [i[0], i[1]];
  }, x.translateExtent = function(v) {
    return arguments.length ? (s[0][0] = +v[0][0], s[1][0] = +v[1][0], s[0][1] = +v[0][1], s[1][1] = +v[1][1], x) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, x.constrain = function(v) {
    return arguments.length ? (n = v, x) : n;
  }, x.duration = function(v) {
    return arguments.length ? (c = +v, x) : c;
  }, x.interpolate = function(v) {
    return arguments.length ? (u = v, x) : u;
  }, x.on = function() {
    var v = l.on.apply(l, arguments);
    return v === l ? x : v;
  }, x.clickDistance = function(v) {
    return arguments.length ? (p = (v = +v) * v, x) : Math.sqrt(p);
  }, x.tapDistance = function(v) {
    return arguments.length ? (w = +v, x) : w;
  }, x;
}
const ve = {
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
}, qt = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], xa = ["Enter", " ", "Escape"];
var rt;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(rt || (rt = {}));
var et;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(et || (et = {}));
var _t;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(_t || (_t = {}));
const wa = {
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
var Fe;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Fe || (Fe = {}));
var Xe;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(Xe || (Xe = {}));
var G;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(G || (G = {}));
const bi = {
  [G.Left]: G.Right,
  [G.Right]: G.Left,
  [G.Top]: G.Bottom,
  [G.Bottom]: G.Top
};
function va(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const ba = (e) => "id" in e && "source" in e && "target" in e, Sp = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), xo = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), tn = (e, t = [0, 0]) => {
  const { width: n, height: r } = je(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Ep = (e, t = { nodeOrigin: [0, 0] }) => {
  if (process.env.NODE_ENV === "development" && !t.nodeLookup && console.warn("Please use `getNodesBounds` from `useReactFlow`/`useSvelteFlow` hook to ensure correct values for sub flows. If not possible, you have to provide a nodeLookup to support sub flows."), e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : xo(o) ? o : t.nodeLookup.get(o.id));
    const c = s ? Yn(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return ar(r, c);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return cr(n);
}, nn = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = Yn(r);
      n = ar(n, o);
    }
  }), cr(n);
}, _a = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const c = {
    ...rn(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, u = [];
  for (const l of e.values()) {
    const { measured: f, selectable: d = !0, hidden: a = !1 } = l;
    if (s && !d || a)
      continue;
    const h = f.width ?? l.width ?? l.initialWidth ?? null, m = f.height ?? l.height ?? l.initialHeight ?? null, p = Ut(c, Et(l)), w = (h ?? 0) * (m ?? 0), x = i && p > 0;
    (!l.internals.handleBounds || x || p >= w || l.dragging) && u.push(l);
  }
  return u;
}, Np = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Cp(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function kp({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const c = Cp(e, s), u = nn(c), l = wo(u, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function Sa({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), c = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: l } = c ? c.internals.positionAbsolute : { x: 0, y: 0 }, f = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!c)
      i == null || i("005", ve.error005());
    else {
      const h = c.measured.width, m = c.measured.height;
      h && m && (d = [
        [u, l],
        [u + h, l + m]
      ]);
    }
  else c && Nt(s.extent) && (d = [
    [s.extent[0][0] + u, s.extent[0][1] + l],
    [s.extent[1][0] + u, s.extent[1][1] + l]
  ]);
  const a = Nt(d) ? ot(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", ve.error015())), {
    position: {
      x: a.x - u + (s.measured.width ?? 0) * f[0],
      y: a.y - l + (s.measured.height ?? 0) * f[1]
    },
    positionAbsolute: a
  };
}
async function Op({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((a) => a.id)), s = [];
  for (const a of n) {
    if (a.deletable === !1)
      continue;
    const h = i.has(a.id), m = !h && a.parentId && s.find((p) => p.id === a.parentId);
    (h || m) && s.push(a);
  }
  const c = new Set(t.map((a) => a.id)), u = r.filter((a) => a.deletable !== !1), f = Np(s, u);
  for (const a of u)
    c.has(a.id) && !f.find((m) => m.id === a.id) && f.push(a);
  if (!o)
    return {
      edges: f,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: f
  });
  return typeof d == "boolean" ? d ? { edges: f, nodes: s } : { edges: [], nodes: [] } : d;
}
const St = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), ot = (e = { x: 0, y: 0 }, t, n) => ({
  x: St(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: St(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function Ea(e, t, n) {
  const { width: r, height: o } = je(n), { x: i, y: s } = n.internals.positionAbsolute;
  return ot(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const _i = (e, t, n) => e < t ? St(Math.abs(e - t), 1, t) / t : e > n ? -St(Math.abs(e - n), 1, t) / t : 0, Na = (e, t, n = 15, r = 40) => {
  const o = _i(e.x, r, t.width - r) * n, i = _i(e.y, r, t.height - r) * n;
  return [o, i];
}, ar = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Jr = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), cr = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Et = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = xo(e) ? e.internals.positionAbsolute : tn(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, Yn = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = xo(e) ? e.internals.positionAbsolute : tn(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, Ca = (e, t) => cr(ar(Jr(e), Jr(t))), Ut = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, Si = (e) => Ce(e.width) && Ce(e.height) && Ce(e.x) && Ce(e.y), Ce = (e) => !isNaN(e) && isFinite(e), ka = (e, t) => {
  process.env.NODE_ENV === "development" && console.warn(`[React Flow]: ${t} Help: https://reactflow.dev/error#${e}`);
}, ur = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), rn = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const c = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ur(c, s) : c;
}, Wn = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function ut(e, t) {
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
function Mp(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = ut(e, n), o = ut(e, t);
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
    const r = ut(e.top ?? e.y ?? 0, n), o = ut(e.bottom ?? e.y ?? 0, n), i = ut(e.left ?? e.x ?? 0, t), s = ut(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Ap(e, t, n, r, o, i) {
  const { x: s, y: c } = Wn(e, [t, n, r]), { x: u, y: l } = Wn({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), f = o - u, d = i - l;
  return {
    left: Math.floor(s),
    top: Math.floor(c),
    right: Math.floor(f),
    bottom: Math.floor(d)
  };
}
const wo = (e, t, n, r, o, i) => {
  const s = Mp(i, t, n), c = (t - s.x) / e.width, u = (n - s.y) / e.height, l = Math.min(c, u), f = St(l, r, o), d = e.x + e.width / 2, a = e.y + e.height / 2, h = t / 2 - d * f, m = n / 2 - a * f, p = Ap(e, h, m, f, t, n), w = {
    left: Math.min(p.left - s.left, 0),
    top: Math.min(p.top - s.top, 0),
    right: Math.min(p.right - s.right, 0),
    bottom: Math.min(p.bottom - s.bottom, 0)
  };
  return {
    x: h - w.left + w.right,
    y: m - w.top + w.bottom,
    zoom: f
  };
}, Xn = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function Nt(e) {
  return e !== void 0 && e !== "parent";
}
function je(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function Oa(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function Ma(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const c = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * c[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * c[1];
  }
  return i;
}
function Ei(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Tp() {
  let e, t;
  return { promise: new Promise((r, o) => {
    e = r, t = o;
  }), resolve: e, reject: t };
}
function Vt(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = $e(e), c = rn({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: u, y: l } = n ? ur(c, t) : c;
  return {
    xSnapped: u,
    ySnapped: l,
    ...c
  };
}
const vo = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), Aa = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, Pp = ["INPUT", "SELECT", "TEXTAREA"];
function Ta(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : Pp.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const Pa = (e) => "clientX" in e, $e = (e, t) => {
  var i, s;
  const n = Pa(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, Ni = (e, t, n, r, o) => {
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
      ...vo(s)
    };
  });
};
function Ra({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: c }) {
  const u = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, l = t * 0.125 + i * 0.375 + c * 0.375 + r * 0.125, f = Math.abs(u - e), d = Math.abs(l - t);
  return [u, l, f, d];
}
function wn(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Ci({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case G.Left:
      return [t - wn(t - r, i), n];
    case G.Right:
      return [t + wn(r - t, i), n];
    case G.Top:
      return [t, n - wn(n - o, i)];
    case G.Bottom:
      return [t, n + wn(o - n, i)];
  }
}
function Ia({ sourceX: e, sourceY: t, sourcePosition: n = G.Bottom, targetX: r, targetY: o, targetPosition: i = G.Top, curvature: s = 0.25 }) {
  const [c, u] = Ci({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [l, f] = Ci({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, a, h, m] = Ra({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: c,
    sourceControlY: u,
    targetControlX: l,
    targetControlY: f
  });
  return [
    `M${e},${t} C${c},${u} ${l},${f} ${r},${o}`,
    d,
    a,
    h,
    m
  ];
}
function Da({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, c = r < t ? r + s : r - s;
  return [i, c, o, s];
}
function Rp({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function Ip({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = ar(Yn(e), Yn(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return Ut(s, cr(i)) > 0;
}
const Dp = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, $p = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), $a = (e, t) => {
  if (!e.source || !e.target)
    return ka("006", ve.error006()), t;
  let n;
  return ba(e) ? n = { ...e } : n = {
    ...e,
    id: Dp(e)
  }, $p(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function bo({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, c] = Da({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, c];
}
const ki = {
  [G.Left]: { x: -1, y: 0 },
  [G.Right]: { x: 1, y: 0 },
  [G.Top]: { x: 0, y: -1 },
  [G.Bottom]: { x: 0, y: 1 }
}, Lp = ({ source: e, sourcePosition: t = G.Bottom, target: n }) => t === G.Left || t === G.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Oi = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function jp({ source: e, sourcePosition: t = G.Bottom, target: n, targetPosition: r = G.Top, center: o, offset: i }) {
  const s = ki[t], c = ki[r], u = { x: e.x + s.x * i, y: e.y + s.y * i }, l = { x: n.x + c.x * i, y: n.y + c.y * i }, f = Lp({
    source: u,
    sourcePosition: t,
    target: l
  }), d = f.x !== 0 ? "x" : "y", a = f[d];
  let h = [], m, p;
  const w = { x: 0, y: 0 }, x = { x: 0, y: 0 }, [S, g, y, N] = Da({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * c[d] === -1) {
    m = o.x ?? S, p = o.y ?? g;
    const b = [
      { x: m, y: u.y },
      { x: m, y: l.y }
    ], P = [
      { x: u.x, y: p },
      { x: l.x, y: p }
    ];
    s[d] === a ? h = d === "x" ? b : P : h = d === "x" ? P : b;
  } else {
    const b = [{ x: u.x, y: l.y }], P = [{ x: l.x, y: u.y }];
    if (d === "x" ? h = s.x === a ? P : b : h = s.y === a ? b : P, t === r) {
      const z = Math.abs(e[d] - n[d]);
      if (z <= i) {
        const v = Math.min(i - 1, i - z);
        s[d] === a ? w[d] = (u[d] > e[d] ? -1 : 1) * v : x[d] = (l[d] > n[d] ? -1 : 1) * v;
      }
    }
    if (t !== r) {
      const z = d === "x" ? "y" : "x", v = s[d] === c[z], T = u[z] > l[z], C = u[z] < l[z];
      (s[d] === 1 && (!v && T || v && C) || s[d] !== 1 && (!v && C || v && T)) && (h = d === "x" ? b : P);
    }
    const I = { x: u.x + w.x, y: u.y + w.y }, L = { x: l.x + x.x, y: l.y + x.y }, $ = Math.max(Math.abs(I.x - h[0].x), Math.abs(L.x - h[0].x)), j = Math.max(Math.abs(I.y - h[0].y), Math.abs(L.y - h[0].y));
    $ >= j ? (m = (I.x + L.x) / 2, p = h[0].y) : (m = h[0].x, p = (I.y + L.y) / 2);
  }
  return [[
    e,
    { x: u.x + w.x, y: u.y + w.y },
    ...h,
    { x: l.x + x.x, y: l.y + x.y },
    n
  ], m, p, y, N];
}
function zp(e, t, n, r) {
  const o = Math.min(Oi(e, t) / 2, Oi(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const l = e.x < n.x ? -1 : 1, f = e.y < n.y ? 1 : -1;
    return `L ${i + o * l},${s}Q ${i},${s} ${i},${s + o * f}`;
  }
  const c = e.x < n.x ? 1 : -1, u = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * u}Q ${i},${s} ${i + o * c},${s}`;
}
function eo({ sourceX: e, sourceY: t, sourcePosition: n = G.Bottom, targetX: r, targetY: o, targetPosition: i = G.Top, borderRadius: s = 5, centerX: c, centerY: u, offset: l = 20 }) {
  const [f, d, a, h, m] = jp({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: c, y: u },
    offset: l
  });
  return [f.reduce((w, x, S) => {
    let g = "";
    return S > 0 && S < f.length - 1 ? g = zp(f[S - 1], x, f[S + 1], s) : g = `${S === 0 ? "M" : "L"}${x.x} ${x.y}`, w += g, w;
  }, ""), d, a, h, m];
}
function Mi(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function Hp(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!Mi(t) || !Mi(n))
    return null;
  const r = t.internals.handleBounds || Ai(t.handles), o = n.internals.handleBounds || Ai(n.handles), i = Ti((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Ti(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === rt.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (d = e.onError) == null || d.call(e, "008", ve.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const c = (i == null ? void 0 : i.position) || G.Bottom, u = (s == null ? void 0 : s.position) || G.Top, l = Kt(t, i, c), f = Kt(n, s, u);
  return {
    sourceX: l.x,
    sourceY: l.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: c,
    targetPosition: u
  };
}
function Ai(e) {
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
function Kt(e, t, n = G.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: c } = t ?? je(e);
  if (r)
    return { x: o + s / 2, y: i + c / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case G.Top:
      return { x: o + s / 2, y: i };
    case G.Right:
      return { x: o + s, y: i + c / 2 };
    case G.Bottom:
      return { x: o + s / 2, y: i + c };
    case G.Left:
      return { x: o, y: i + c / 2 };
  }
}
function Ti(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function to(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function Vp(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, c) => ([c.markerStart || r, c.markerEnd || o].forEach((u) => {
    if (u && typeof u == "object") {
      const l = to(u, t);
      i.has(l) || (s.push({ id: l, color: u.color || n, ...u }), i.add(l));
    }
  }), s), []).sort((s, c) => s.id.localeCompare(c.id));
}
const _o = {
  nodeOrigin: [0, 0],
  nodeExtent: qt,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Bp = {
  ..._o,
  checkEquality: !0
};
function So(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function Fp(e, t, n) {
  const r = So(_o, n);
  for (const o of e.values())
    if (o.parentId)
      Eo(o, e, t, r);
    else {
      const i = tn(o, r.nodeOrigin), s = Nt(o.extent) ? o.extent : r.nodeExtent, c = ot(i, s, je(o));
      o.internals.positionAbsolute = c;
    }
}
function no(e, t, n, r) {
  var u, l;
  const o = So(Bp, r);
  let i = e.length > 0;
  const s = new Map(t), c = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const f of e) {
    let d = s.get(f.id);
    if (o.checkEquality && f === (d == null ? void 0 : d.internals.userNode))
      t.set(f.id, d);
    else {
      const a = tn(f, o.nodeOrigin), h = Nt(f.extent) ? f.extent : o.nodeExtent, m = ot(a, h, je(f));
      d = {
        ...o.defaults,
        ...f,
        measured: {
          width: (u = f.measured) == null ? void 0 : u.width,
          height: (l = f.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: m,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: f.measured ? d == null ? void 0 : d.internals.handleBounds : void 0,
          z: La(f, c),
          userNode: f
        }
      }, t.set(f.id, d);
    }
    (d.measured === void 0 || d.measured.width === void 0 || d.measured.height === void 0) && !d.hidden && (i = !1), f.parentId && Eo(d, t, n, r);
  }
  return i;
}
function Yp(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Eo(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = So(_o, r), c = e.parentId, u = t.get(c);
  if (!u) {
    console.warn(`Parent node ${c} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  Yp(e, n);
  const l = o ? 1e3 : 0, { x: f, y: d, z: a } = Wp(e, u, i, s, l), { positionAbsolute: h } = e.internals, m = f !== h.x || d !== h.y;
  (m || a !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: m ? { x: f, y: d } : h,
      z: a
    }
  });
}
function La(e, t) {
  return (Ce(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function Wp(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, c = je(e), u = tn(e, n), l = Nt(e.extent) ? ot(u, e.extent, c) : u;
  let f = ot({ x: i + l.x, y: s + l.y }, r, c);
  e.extent === "parent" && (f = Ea(f, c, t));
  const d = La(e, o), a = t.internals.z ?? 0;
  return {
    x: f.x,
    y: f.y,
    z: a > d ? a : d
  };
}
function No(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const c of e) {
    const u = t.get(c.parentId);
    if (!u)
      continue;
    const l = ((s = i.get(c.parentId)) == null ? void 0 : s.expandedRect) ?? Et(u), f = Ca(l, c.rect);
    i.set(c.parentId, { expandedRect: f, parent: u });
  }
  return i.size > 0 && i.forEach(({ expandedRect: c, parent: u }, l) => {
    var g;
    const f = u.internals.positionAbsolute, d = je(u), a = u.origin ?? r, h = c.x < f.x ? Math.round(Math.abs(f.x - c.x)) : 0, m = c.y < f.y ? Math.round(Math.abs(f.y - c.y)) : 0, p = Math.max(d.width, Math.round(c.width)), w = Math.max(d.height, Math.round(c.height)), x = (p - d.width) * a[0], S = (w - d.height) * a[1];
    (h > 0 || m > 0 || x || S) && (o.push({
      id: l,
      type: "position",
      position: {
        x: u.position.x - h + x,
        y: u.position.y - m + S
      }
    }), (g = n.get(l)) == null || g.forEach((y) => {
      e.some((N) => N.id === y.id) || o.push({
        id: y.id,
        type: "position",
        position: {
          x: y.position.x + h,
          y: y.position.y + m
        }
      });
    })), (d.width < c.width || d.height < c.height || h || m) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: p + (h ? a[0] * h - x : 0),
        height: w + (m ? a[1] * m - S : 0)
      }
    });
  }), o;
}
function Xp(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let c = !1;
  if (!s)
    return { changes: [], updatedInternals: c };
  const u = [], l = window.getComputedStyle(s), { m22: f } = new window.DOMMatrixReadOnly(l.transform), d = [];
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
    const m = vo(a.nodeElement), p = h.measured.width !== m.width || h.measured.height !== m.height;
    if (!!(m.width && m.height && (p || !h.internals.handleBounds || a.force))) {
      const x = a.nodeElement.getBoundingClientRect(), S = Nt(h.extent) ? h.extent : i;
      let { positionAbsolute: g } = h.internals;
      h.parentId && h.extent === "parent" ? g = Ea(g, m, t.get(h.parentId)) : S && (g = ot(g, S, m));
      const y = {
        ...h,
        measured: m,
        internals: {
          ...h.internals,
          positionAbsolute: g,
          handleBounds: {
            source: Ni("source", a.nodeElement, x, f, h.id),
            target: Ni("target", a.nodeElement, x, f, h.id)
          }
        }
      };
      t.set(h.id, y), h.parentId && Eo(y, t, n, { nodeOrigin: o }), c = !0, p && (u.push({
        id: h.id,
        type: "dimensions",
        dimensions: m
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: Et(y, o)
      }));
    }
  }
  if (d.length > 0) {
    const a = No(d, t, n, o);
    u.push(...a);
  }
  return { changes: u, updatedInternals: c };
}
async function Gp({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Pi(e, t, n, r, o, i) {
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
function ja(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: c = null } = r, u = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: c }, l = `${o}-${s}--${i}-${c}`, f = `${i}-${c}--${o}-${s}`;
    Pi("source", u, f, e, o, s), Pi("target", u, l, e, i, c), t.set(r.id, r);
  }
}
function za(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : za(n, t) : !1;
}
function Ri(e, t, n) {
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
function qp(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !za(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function Or({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, c, u;
  const o = [];
  for (const [l, f] of t) {
    const d = (s = n.get(l)) == null ? void 0 : s.internals.userNode;
    d && o.push({
      ...d,
      position: f.position,
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
  let i = { x: null, y: null }, s = 0, c = /* @__PURE__ */ new Map(), u = !1, l = { x: 0, y: 0 }, f = null, d = !1, a = null, h = !1;
  function m({ noDragClassName: w, handleSelector: x, domNode: S, isSelectable: g, nodeId: y, nodeClickDistance: N = 0 }) {
    a = xe(S);
    function E({ x: L, y: $ }, j) {
      const { nodeLookup: z, nodeExtent: v, snapGrid: T, snapToGrid: C, nodeOrigin: O, onNodeDrag: R, onSelectionDrag: k, onError: _, updateNodePositions: A } = t();
      i = { x: L, y: $ };
      let D = !1, H = { x: 0, y: 0, x2: 0, y2: 0 };
      if (c.size > 1 && v) {
        const F = nn(c);
        H = Jr(F);
      }
      for (const [F, Y] of c) {
        if (!z.has(F))
          continue;
        let W = { x: L - Y.distance.x, y: $ - Y.distance.y };
        C && (W = ur(W, T));
        let V = [
          [v[0][0], v[0][1]],
          [v[1][0], v[1][1]]
        ];
        if (c.size > 1 && v && !Y.extent) {
          const { positionAbsolute: Z } = Y.internals, U = Z.x - H.x + v[0][0], X = Z.x + Y.measured.width - H.x2 + v[1][0], se = Z.y - H.y + v[0][1], J = Z.y + Y.measured.height - H.y2 + v[1][1];
          V = [
            [U, se],
            [X, J]
          ];
        }
        const { position: B, positionAbsolute: q } = Sa({
          nodeId: F,
          nextPosition: W,
          nodeLookup: z,
          nodeExtent: V,
          nodeOrigin: O,
          onError: _
        });
        D = D || Y.position.x !== B.x || Y.position.y !== B.y, Y.position = B, Y.internals.positionAbsolute = q;
      }
      if (D && (A(c, !0), j && (r || R || !y && k))) {
        const [F, Y] = Or({
          nodeId: y,
          dragItems: c,
          nodeLookup: z
        });
        r == null || r(j, c, F, Y), R == null || R(j, F, Y), y || k == null || k(j, Y);
      }
    }
    async function b() {
      if (!f)
        return;
      const { transform: L, panBy: $, autoPanSpeed: j, autoPanOnNodeDrag: z } = t();
      if (!z) {
        u = !1, cancelAnimationFrame(s);
        return;
      }
      const [v, T] = Na(l, f, j);
      (v !== 0 || T !== 0) && (i.x = (i.x ?? 0) - v / L[2], i.y = (i.y ?? 0) - T / L[2], await $({ x: v, y: T }) && E(i, null)), s = requestAnimationFrame(b);
    }
    function P(L) {
      var D;
      const { nodeLookup: $, multiSelectionActive: j, nodesDraggable: z, transform: v, snapGrid: T, snapToGrid: C, selectNodesOnDrag: O, onNodeDragStart: R, onSelectionDragStart: k, unselectNodesAndEdges: _ } = t();
      d = !0, (!O || !g) && !j && y && ((D = $.get(y)) != null && D.selected || _()), g && O && y && (e == null || e(y));
      const A = Vt(L.sourceEvent, { transform: v, snapGrid: T, snapToGrid: C, containerBounds: f });
      if (i = A, c = qp($, z, A, y), c.size > 0 && (n || R || !y && k)) {
        const [H, F] = Or({
          nodeId: y,
          dragItems: c,
          nodeLookup: $
        });
        n == null || n(L.sourceEvent, c, H, F), R == null || R(L.sourceEvent, H, F), y || k == null || k(L.sourceEvent, F);
      }
    }
    const I = na().clickDistance(N).on("start", (L) => {
      const { domNode: $, nodeDragThreshold: j, transform: z, snapGrid: v, snapToGrid: T } = t();
      f = ($ == null ? void 0 : $.getBoundingClientRect()) || null, h = !1, j === 0 && P(L), i = Vt(L.sourceEvent, { transform: z, snapGrid: v, snapToGrid: T, containerBounds: f }), l = $e(L.sourceEvent, f);
    }).on("drag", (L) => {
      const { autoPanOnNodeDrag: $, transform: j, snapGrid: z, snapToGrid: v, nodeDragThreshold: T, nodeLookup: C } = t(), O = Vt(L.sourceEvent, { transform: j, snapGrid: z, snapToGrid: v, containerBounds: f });
      if ((L.sourceEvent.type === "touchmove" && L.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      y && !C.has(y)) && (h = !0), !h) {
        if (!u && $ && d && (u = !0, b()), !d) {
          const R = O.xSnapped - (i.x ?? 0), k = O.ySnapped - (i.y ?? 0);
          Math.sqrt(R * R + k * k) > T && P(L);
        }
        (i.x !== O.xSnapped || i.y !== O.ySnapped) && c && d && (l = $e(L.sourceEvent, f), E(O, L.sourceEvent));
      }
    }).on("end", (L) => {
      if (!(!d || h) && (u = !1, d = !1, cancelAnimationFrame(s), c.size > 0)) {
        const { nodeLookup: $, updateNodePositions: j, onNodeDragStop: z, onSelectionDragStop: v } = t();
        if (j(c, !1), o || z || !y && v) {
          const [T, C] = Or({
            nodeId: y,
            dragItems: c,
            nodeLookup: $,
            dragging: !1
          });
          o == null || o(L.sourceEvent, c, T, C), z == null || z(L.sourceEvent, T, C), y || v == null || v(L.sourceEvent, C);
        }
      }
    }).filter((L) => {
      const $ = L.target;
      return !L.button && (!w || !Ri($, `.${w}`, S)) && (!x || Ri($, x, S));
    });
    a.call(I);
  }
  function p() {
    a == null || a.on(".drag", null);
  }
  return {
    update: m,
    destroy: p
  };
}
function Kp(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    Ut(o, Et(i)) > 0 && r.push(i);
  return r;
}
const Zp = 250;
function Qp(e, t, n, r) {
  var c, u;
  let o = [], i = 1 / 0;
  const s = Kp(e, n, t + Zp);
  for (const l of s) {
    const f = [...((c = l.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((u = l.internals.handleBounds) == null ? void 0 : u.target) ?? []];
    for (const d of f) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: a, y: h } = Kt(l, d, d.position, !0), m = Math.sqrt(Math.pow(a - e.x, 2) + Math.pow(h - e.y, 2));
      m > t || (m < i ? (o = [{ ...d, x: a, y: h }], i = m) : m === i && o.push({ ...d, x: a, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const l = r.type === "source" ? "target" : "source";
    return o.find((f) => f.type === l) ?? o[0];
  }
  return o[0];
}
function Ha(e, t, n, r, o, i = !1) {
  var l, f, d;
  const s = r.get(e);
  if (!s)
    return null;
  const c = o === "strict" ? (l = s.internals.handleBounds) == null ? void 0 : l[t] : [...((f = s.internals.handleBounds) == null ? void 0 : f.source) ?? [], ...((d = s.internals.handleBounds) == null ? void 0 : d.target) ?? []], u = (n ? c == null ? void 0 : c.find((a) => a.id === n) : c == null ? void 0 : c[0]) ?? null;
  return u && i ? { ...u, ...Kt(s, u, u.position, !0) } : u;
}
function Va(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function Jp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Ba = () => !0;
function eg(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: c, nodeLookup: u, lib: l, autoPanOnConnect: f, flowId: d, panBy: a, cancelConnection: h, onConnectStart: m, onConnect: p, onConnectEnd: w, isValidConnection: x = Ba, onReconnectEnd: S, updateConnection: g, getTransform: y, getFromHandle: N, autoPanSpeed: E }) {
  const b = Aa(e.target);
  let P = 0, I;
  const { x: L, y: $ } = $e(e), j = b == null ? void 0 : b.elementFromPoint(L, $), z = Va(i, j), v = c == null ? void 0 : c.getBoundingClientRect();
  if (!v || !z)
    return;
  const T = Ha(o, z, r, u, t);
  if (!T)
    return;
  let C = $e(e, v), O = !1, R = null, k = !1, _ = null;
  function A() {
    if (!f || !v)
      return;
    const [q, Z] = Na(C, v, E);
    a({ x: q, y: Z }), P = requestAnimationFrame(A);
  }
  const D = {
    ...T,
    nodeId: o,
    type: z,
    position: T.position
  }, H = u.get(o), Y = {
    inProgress: !0,
    isValid: null,
    from: Kt(H, D, G.Left, !0),
    fromHandle: D,
    fromPosition: D.position,
    fromNode: H,
    to: C,
    toHandle: null,
    toPosition: bi[D.position],
    toNode: null
  };
  g(Y);
  let W = Y;
  m == null || m(e, { nodeId: o, handleId: r, handleType: z });
  function V(q) {
    if (!N() || !D) {
      B(q);
      return;
    }
    const Z = y();
    C = $e(q, v), I = Qp(rn(C, Z, !1, [1, 1]), n, u, D), O || (A(), O = !0);
    const U = Fa(q, {
      handle: I,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: x,
      doc: b,
      lib: l,
      flowId: d,
      nodeLookup: u
    });
    _ = U.handleDomNode, R = U.connection, k = Jp(!!I, U.isValid);
    const X = {
      // from stays the same
      ...W,
      isValid: k,
      to: I && k ? Wn({ x: I.x, y: I.y }, Z) : C,
      toHandle: U.toHandle,
      toPosition: k && U.toHandle ? U.toHandle.position : bi[D.position],
      toNode: U.toHandle ? u.get(U.toHandle.nodeId) : null
    };
    k && I && W.toHandle && X.toHandle && W.toHandle.type === X.toHandle.type && W.toHandle.nodeId === X.toHandle.nodeId && W.toHandle.id === X.toHandle.id && W.to.x === X.to.x && W.to.y === X.to.y || (g(X), W = X);
  }
  function B(q) {
    (I || _) && R && k && (p == null || p(R));
    const { inProgress: Z, ...U } = W, X = {
      ...U,
      toPosition: W.toHandle ? W.toPosition : null
    };
    w == null || w(q, X), i && (S == null || S(q, X)), h(), cancelAnimationFrame(P), O = !1, k = !1, R = null, _ = null, b.removeEventListener("mousemove", V), b.removeEventListener("mouseup", B), b.removeEventListener("touchmove", V), b.removeEventListener("touchend", B);
  }
  b.addEventListener("mousemove", V), b.addEventListener("mouseup", B), b.addEventListener("touchmove", V), b.addEventListener("touchend", B);
}
function Fa(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: c, flowId: u, isValidConnection: l = Ba, nodeLookup: f }) {
  const d = i === "target", a = t ? s.querySelector(`.${c}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: m } = $e(e), p = s.elementFromPoint(h, m), w = p != null && p.classList.contains(`${c}-flow__handle`) ? p : a, x = {
    handleDomNode: w,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (w) {
    const S = Va(void 0, w), g = w.getAttribute("data-nodeid"), y = w.getAttribute("data-handleid"), N = w.classList.contains("connectable"), E = w.classList.contains("connectableend");
    if (!g || !S)
      return x;
    const b = {
      source: d ? g : r,
      sourceHandle: d ? y : o,
      target: d ? r : g,
      targetHandle: d ? o : y
    };
    x.connection = b;
    const I = N && E && (n === rt.Strict ? d && S === "source" || !d && S === "target" : g !== r || y !== o);
    x.isValid = I && l(b), x.toHandle = Ha(g, S, y, f, n, !1);
  }
  return x;
}
const ro = {
  onPointerDown: eg,
  isValid: Fa
};
function tg({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = xe(e);
  function i({ translateExtent: c, width: u, height: l, zoomStep: f = 10, pannable: d = !0, zoomable: a = !0, inversePan: h = !1 }) {
    const m = (g) => {
      const y = n();
      if (g.sourceEvent.type !== "wheel" || !t)
        return;
      const N = -g.sourceEvent.deltaY * (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 2e-3) * f, E = y[2] * Math.pow(2, N);
      t.scaleTo(E);
    };
    let p = [0, 0];
    const w = (g) => {
      (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") && (p = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ]);
    }, x = (g) => {
      const y = n();
      if (g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove" || !t)
        return;
      const N = [
        g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX,
        g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY
      ], E = [N[0] - p[0], N[1] - p[1]];
      p = N;
      const b = r() * Math.max(y[2], Math.log(y[2])) * (h ? -1 : 1), P = {
        x: y[0] - E[0] * b,
        y: y[1] - E[1] * b
      }, I = [
        [0, 0],
        [u, l]
      ];
      t.setViewportConstrained({
        x: P.x,
        y: P.y,
        zoom: y[2]
      }, I, c);
    }, S = ya().on("start", w).on("zoom", d ? x : null).on("zoom.wheel", a ? m : null);
    o.call(S, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ee
  };
}
const ng = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, lr = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Mr = ({ x: e, y: t, zoom: n }) => sr.translate(e, t).scale(n), lt = (e, t) => e.target.closest(`.${t}`), Ya = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), Ar = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Wa = (e) => {
  const t = e.ctrlKey && Xn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function rg({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: c, onPanZoom: u, onPanZoomEnd: l }) {
  return (f) => {
    if (lt(f, t))
      return !1;
    f.preventDefault(), f.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const w = Ee(f), x = Wa(f), S = d * Math.pow(2, x);
      r.scaleTo(n, S, w, f);
      return;
    }
    const a = f.deltaMode === 1 ? 20 : 1;
    let h = o === et.Vertical ? 0 : f.deltaX * a, m = o === et.Horizontal ? 0 : f.deltaY * a;
    !Xn() && f.shiftKey && o !== et.Vertical && (h = f.deltaY * a, m = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(m / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const p = lr(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, c == null || c(f, p)), e.isPanScrolling && (u == null || u(f, p), e.panScrollTimeout = setTimeout(() => {
      l == null || l(f, p), e.isPanScrolling = !1;
    }, 150));
  };
}
function og({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, c = lt(r, e);
    if (r.ctrlKey && i && c && r.preventDefault(), s || c)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function ig({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, c;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = lr(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((c = r.sourceEvent) == null ? void 0 : c.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function sg({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, c;
    e.usedRightMouseButton = !!(n && Ya(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((c = i.sourceEvent) != null && c.internal) && (o == null || o(i.sourceEvent, lr(i.transform)));
  };
}
function ag({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var c;
    if (!((c = s.sourceEvent) != null && c.internal) && (e.isZoomingOrPanning = !1, i && Ya(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && ng(e.prevViewport, s.transform))) {
      const u = lr(s.transform);
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
function cg({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: c, noPanClassName: u, lib: l }) {
  return (f) => {
    var m;
    const d = e || t, a = n && f.ctrlKey;
    if (f.button === 1 && f.type === "mousedown" && (lt(f, `${l}-flow__node`) || lt(f, `${l}-flow__edge`)))
      return !0;
    if (!r && !d && !o && !i && !n || s || lt(f, c) && f.type === "wheel" || lt(f, u) && (f.type !== "wheel" || o && f.type === "wheel" && !e) || !n && f.ctrlKey && f.type === "wheel")
      return !1;
    if (!n && f.type === "touchstart" && ((m = f.touches) == null ? void 0 : m.length) > 1)
      return f.preventDefault(), !1;
    if (!d && !o && !a && f.type === "wheel" || !r && (f.type === "mousedown" || f.type === "touchstart") || Array.isArray(r) && !r.includes(f.button) && f.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(f.button) || !f.button || f.button <= 1;
    return (!f.ctrlKey || f.type === "wheel") && h;
  };
}
function ug({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: c, onPanZoomEnd: u, onDraggingChange: l }) {
  const f = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), a = ya().clickDistance(!Ce(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = xe(e).call(a);
  g({
    x: i.x,
    y: i.y,
    zoom: St(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const m = h.on("wheel.zoom"), p = h.on("dblclick.zoom");
  a.wheelDelta(Wa);
  function w(j, z) {
    return h ? new Promise((v) => {
      a == null || a.transform(Ar(h, z == null ? void 0 : z.duration, () => v(!0)), j);
    }) : Promise.resolve(!1);
  }
  function x({ noWheelClassName: j, noPanClassName: z, onPaneContextMenu: v, userSelectionActive: T, panOnScroll: C, panOnDrag: O, panOnScrollMode: R, panOnScrollSpeed: k, preventScrolling: _, zoomOnPinch: A, zoomOnScroll: D, zoomOnDoubleClick: H, zoomActivationKeyPressed: F, lib: Y, onTransformChange: W }) {
    T && !f.isZoomingOrPanning && S();
    const B = C && !F && !T ? rg({
      zoomPanValues: f,
      noWheelClassName: j,
      d3Selection: h,
      d3Zoom: a,
      panOnScrollMode: R,
      panOnScrollSpeed: k,
      zoomOnPinch: A,
      onPanZoomStart: c,
      onPanZoom: s,
      onPanZoomEnd: u
    }) : og({
      noWheelClassName: j,
      preventScrolling: _,
      d3ZoomHandler: m
    });
    if (h.on("wheel.zoom", B, { passive: !1 }), !T) {
      const Z = ig({
        zoomPanValues: f,
        onDraggingChange: l,
        onPanZoomStart: c
      });
      a.on("start", Z);
      const U = sg({
        zoomPanValues: f,
        panOnDrag: O,
        onPaneContextMenu: !!v,
        onPanZoom: s,
        onTransformChange: W
      });
      a.on("zoom", U);
      const X = ag({
        zoomPanValues: f,
        panOnDrag: O,
        panOnScroll: C,
        onPaneContextMenu: v,
        onPanZoomEnd: u,
        onDraggingChange: l
      });
      a.on("end", X);
    }
    const q = cg({
      zoomActivationKeyPressed: F,
      panOnDrag: O,
      zoomOnScroll: D,
      panOnScroll: C,
      zoomOnDoubleClick: H,
      zoomOnPinch: A,
      userSelectionActive: T,
      noPanClassName: z,
      noWheelClassName: j,
      lib: Y
    });
    a.filter(q), H ? h.on("dblclick.zoom", p) : h.on("dblclick.zoom", null);
  }
  function S() {
    a.on("zoom", null);
  }
  async function g(j, z, v) {
    const T = Mr(j), C = a == null ? void 0 : a.constrain()(T, z, v);
    return C && await w(C), new Promise((O) => O(C));
  }
  async function y(j, z) {
    const v = Mr(j);
    return await w(v, z), new Promise((T) => T(v));
  }
  function N(j) {
    if (h) {
      const z = Mr(j), v = h.property("__zoom");
      (v.k !== j.zoom || v.x !== j.x || v.y !== j.y) && (a == null || a.transform(h, z, null, { sync: !0 }));
    }
  }
  function E() {
    const j = h ? ma(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: j.x, y: j.y, zoom: j.k };
  }
  function b(j, z) {
    return h ? new Promise((v) => {
      a == null || a.scaleTo(Ar(h, z == null ? void 0 : z.duration, () => v(!0)), j);
    }) : Promise.resolve(!1);
  }
  function P(j, z) {
    return h ? new Promise((v) => {
      a == null || a.scaleBy(Ar(h, z == null ? void 0 : z.duration, () => v(!0)), j);
    }) : Promise.resolve(!1);
  }
  function I(j) {
    a == null || a.scaleExtent(j);
  }
  function L(j) {
    a == null || a.translateExtent(j);
  }
  function $(j) {
    const z = !Ce(j) || j < 0 ? 0 : j;
    a == null || a.clickDistance(z);
  }
  return {
    update: x,
    destroy: S,
    setViewport: y,
    setViewportConstrained: g,
    getViewport: E,
    scaleTo: b,
    scaleBy: P,
    setScaleExtent: I,
    setTranslateExtent: L,
    syncViewport: N,
    setClickDistance: $
  };
}
var Bt;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Bt || (Bt = {}));
function lg({ width: e, prevWidth: t, height: n, prevHeight: r, affectsX: o, affectsY: i }) {
  const s = e - t, c = n - r, u = [s > 0 ? 1 : s < 0 ? -1 : 0, c > 0 ? 1 : c < 0 ? -1 : 0];
  return s && o && (u[0] = u[0] * -1), c && i && (u[1] = u[1] * -1), u;
}
function dg(e) {
  const t = e.includes("right") || e.includes("left"), n = e.includes("bottom") || e.includes("top"), r = e.includes("left"), o = e.includes("top");
  return {
    isHorizontal: t,
    isVertical: n,
    affectsX: r,
    affectsY: o
  };
}
function ze(e, t) {
  return Math.max(0, t - e);
}
function He(e, t) {
  return Math.max(0, e - t);
}
function vn(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function Ii(e, t) {
  return e ? !t : t;
}
function fg(e, t, n, r, o, i, s, c) {
  let { affectsX: u, affectsY: l } = t;
  const { isHorizontal: f, isVertical: d } = t, a = f && d, { xSnapped: h, ySnapped: m } = n, { minWidth: p, maxWidth: w, minHeight: x, maxHeight: S } = r, { x: g, y, width: N, height: E, aspectRatio: b } = e;
  let P = Math.floor(f ? h - e.pointerX : 0), I = Math.floor(d ? m - e.pointerY : 0);
  const L = N + (u ? -P : P), $ = E + (l ? -I : I), j = -i[0] * N, z = -i[1] * E;
  let v = vn(L, p, w), T = vn($, x, S);
  if (s) {
    let R = 0, k = 0;
    u && P < 0 ? R = ze(g + P + j, s[0][0]) : !u && P > 0 && (R = He(g + L + j, s[1][0])), l && I < 0 ? k = ze(y + I + z, s[0][1]) : !l && I > 0 && (k = He(y + $ + z, s[1][1])), v = Math.max(v, R), T = Math.max(T, k);
  }
  if (c) {
    let R = 0, k = 0;
    u && P > 0 ? R = He(g + P, c[0][0]) : !u && P < 0 && (R = ze(g + L, c[1][0])), l && I > 0 ? k = He(y + I, c[0][1]) : !l && I < 0 && (k = ze(y + $, c[1][1])), v = Math.max(v, R), T = Math.max(T, k);
  }
  if (o) {
    if (f) {
      const R = vn(L / b, x, S) * b;
      if (v = Math.max(v, R), s) {
        let k = 0;
        !u && !l || u && !l && a ? k = He(y + z + L / b, s[1][1]) * b : k = ze(y + z + (u ? P : -P) / b, s[0][1]) * b, v = Math.max(v, k);
      }
      if (c) {
        let k = 0;
        !u && !l || u && !l && a ? k = ze(y + L / b, c[1][1]) * b : k = He(y + (u ? P : -P) / b, c[0][1]) * b, v = Math.max(v, k);
      }
    }
    if (d) {
      const R = vn($ * b, p, w) / b;
      if (T = Math.max(T, R), s) {
        let k = 0;
        !u && !l || l && !u && a ? k = He(g + $ * b + j, s[1][0]) / b : k = ze(g + (l ? I : -I) * b + j, s[0][0]) / b, T = Math.max(T, k);
      }
      if (c) {
        let k = 0;
        !u && !l || l && !u && a ? k = ze(g + $ * b, c[1][0]) / b : k = He(g + (l ? I : -I) * b, c[0][0]) / b, T = Math.max(T, k);
      }
    }
  }
  I = I + (I < 0 ? T : -T), P = P + (P < 0 ? v : -v), o && (a ? L > $ * b ? I = (Ii(u, l) ? -P : P) / b : P = (Ii(u, l) ? -I : I) * b : f ? (I = P / b, l = u) : (P = I * b, u = l));
  const C = u ? g + P : g, O = l ? y + I : y;
  return {
    width: N + (u ? -P : P),
    height: E + (l ? -I : I),
    x: i[0] * P * (u ? -1 : 1) + C,
    y: i[1] * I * (l ? -1 : 1) + O
  };
}
const Xa = { width: 0, height: 0, x: 0, y: 0 }, hg = {
  ...Xa,
  pointerX: 0,
  pointerY: 0,
  aspectRatio: 1
};
function pg(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height]
  ];
}
function gg(e, t, n) {
  const r = t.position.x + e.position.x, o = t.position.y + e.position.y, i = e.measured.width ?? 0, s = e.measured.height ?? 0, c = n[0] * i, u = n[1] * s;
  return [
    [r - c, o - u],
    [r + i - c, o + s - u]
  ];
}
function mg({ domNode: e, nodeId: t, getStoreItems: n, onChange: r, onEnd: o }) {
  const i = xe(e);
  function s({ controlPosition: u, boundaries: l, keepAspectRatio: f, resizeDirection: d, onResizeStart: a, onResize: h, onResizeEnd: m, shouldResize: p }) {
    let w = { ...Xa }, x = { ...hg };
    const S = dg(u);
    let g, y = null, N = [], E, b, P;
    const I = na().on("start", (L) => {
      const { nodeLookup: $, transform: j, snapGrid: z, snapToGrid: v, nodeOrigin: T, paneDomNode: C } = n();
      if (g = $.get(t), !g)
        return;
      y = (C == null ? void 0 : C.getBoundingClientRect()) ?? null;
      const { xSnapped: O, ySnapped: R } = Vt(L.sourceEvent, {
        transform: j,
        snapGrid: z,
        snapToGrid: v,
        containerBounds: y
      });
      w = {
        width: g.measured.width ?? 0,
        height: g.measured.height ?? 0,
        x: g.position.x ?? 0,
        y: g.position.y ?? 0
      }, x = {
        ...w,
        pointerX: O,
        pointerY: R,
        aspectRatio: w.width / w.height
      }, E = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (E = $.get(g.parentId), b = E && g.extent === "parent" ? pg(E) : void 0), N = [], P = void 0;
      for (const [k, _] of $)
        if (_.parentId === t && (N.push({
          id: k,
          position: { ..._.position },
          extent: _.extent
        }), _.extent === "parent" || _.expandParent)) {
          const A = gg(_, g, _.origin ?? T);
          P ? P = [
            [Math.min(A[0][0], P[0][0]), Math.min(A[0][1], P[0][1])],
            [Math.max(A[1][0], P[1][0]), Math.max(A[1][1], P[1][1])]
          ] : P = A;
        }
      a == null || a(L, { ...w });
    }).on("drag", (L) => {
      const { transform: $, snapGrid: j, snapToGrid: z, nodeOrigin: v } = n(), T = Vt(L.sourceEvent, {
        transform: $,
        snapGrid: j,
        snapToGrid: z,
        containerBounds: y
      }), C = [];
      if (!g)
        return;
      const { x: O, y: R, width: k, height: _ } = w, A = {}, D = g.origin ?? v, { width: H, height: F, x: Y, y: W } = fg(x, S, T, l, f, D, b, P), V = H !== k, B = F !== _, q = Y !== O && V, Z = W !== R && B;
      if (!q && !Z && !V && !B)
        return;
      if ((q || Z || D[0] === 1 || D[1] === 1) && (A.x = q ? Y : w.x, A.y = Z ? W : w.y, w.x = A.x, w.y = A.y, N.length > 0)) {
        const J = Y - O, de = W - R;
        for (const he of N)
          he.position = {
            x: he.position.x - J + D[0] * (H - k),
            y: he.position.y - de + D[1] * (F - _)
          }, C.push(he);
      }
      if ((V || B) && (A.width = V && (!d || d === "horizontal") ? H : w.width, A.height = B && (!d || d === "vertical") ? F : w.height, w.width = A.width, w.height = A.height), E && g.expandParent) {
        const J = D[0] * (A.width ?? 0);
        A.x && A.x < J && (w.x = J, x.x = x.x - (A.x - J));
        const de = D[1] * (A.height ?? 0);
        A.y && A.y < de && (w.y = de, x.y = x.y - (A.y - de));
      }
      const U = lg({
        width: w.width,
        prevWidth: k,
        height: w.height,
        prevHeight: _,
        affectsX: S.affectsX,
        affectsY: S.affectsY
      }), X = { ...w, direction: U };
      (p == null ? void 0 : p(L, X)) !== !1 && (h == null || h(L, X), r(A, C));
    }).on("end", (L) => {
      m == null || m(L, { ...w }), o == null || o({ ...w });
    });
    i.call(I);
  }
  function c() {
    i.on(".drag", null);
  }
  return {
    update: s,
    destroy: c
  };
}
var bn = { exports: {} }, Tr = {}, _n = { exports: {} }, Pr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function yg() {
  if (Di) return Pr;
  Di = 1;
  var e = ce;
  function t(d, a) {
    return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, s = e.useDebugValue;
  function c(d, a) {
    var h = a(), m = r({ inst: { value: h, getSnapshot: a } }), p = m[0].inst, w = m[1];
    return i(
      function() {
        p.value = h, p.getSnapshot = a, u(p) && w({ inst: p });
      },
      [d, h, a]
    ), o(
      function() {
        return u(p) && w({ inst: p }), d(function() {
          u(p) && w({ inst: p });
        });
      },
      [d]
    ), s(h), h;
  }
  function u(d) {
    var a = d.getSnapshot;
    d = d.value;
    try {
      var h = a();
      return !n(d, h);
    } catch {
      return !0;
    }
  }
  function l(d, a) {
    return a();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : c;
  return Pr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Pr;
}
var Rr = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i;
function xg() {
  return $i || ($i = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h, m) {
      return h === m && (h !== 0 || 1 / h === 1 / m) || h !== h && m !== m;
    }
    function t(h, m) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var p = m();
      if (!d) {
        var w = m();
        i(p, w) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      w = s({
        inst: { value: p, getSnapshot: m }
      });
      var x = w[0].inst, S = w[1];
      return u(
        function() {
          x.value = p, x.getSnapshot = m, n(x) && S({ inst: x });
        },
        [h, p, m]
      ), c(
        function() {
          return n(x) && S({ inst: x }), h(function() {
            n(x) && S({ inst: x });
          });
        },
        [h]
      ), l(p), p;
    }
    function n(h) {
      var m = h.getSnapshot;
      h = h.value;
      try {
        var p = m();
        return !i(h, p);
      } catch {
        return !0;
      }
    }
    function r(h, m) {
      return m();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = ce, i = typeof Object.is == "function" ? Object.is : e, s = o.useState, c = o.useEffect, u = o.useLayoutEffect, l = o.useDebugValue, f = !1, d = !1, a = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Rr.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : a, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Rr;
}
var Li;
function Ga() {
  return Li || (Li = 1, process.env.NODE_ENV === "production" ? _n.exports = yg() : _n.exports = xg()), _n.exports;
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
var ji;
function wg() {
  if (ji) return Tr;
  ji = 1;
  var e = ce, t = Ga();
  function n(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, i = e.useRef, s = e.useEffect, c = e.useMemo, u = e.useDebugValue;
  return Tr.useSyncExternalStoreWithSelector = function(l, f, d, a, h) {
    var m = i(null);
    if (m.current === null) {
      var p = { hasValue: !1, value: null };
      m.current = p;
    } else p = m.current;
    m = c(
      function() {
        function x(E) {
          if (!S) {
            if (S = !0, g = E, E = a(E), h !== void 0 && p.hasValue) {
              var b = p.value;
              if (h(b, E))
                return y = b;
            }
            return y = E;
          }
          if (b = y, r(g, E)) return b;
          var P = a(E);
          return h !== void 0 && h(b, P) ? (g = E, b) : (g = E, y = P);
        }
        var S = !1, g, y, N = d === void 0 ? null : d;
        return [
          function() {
            return x(f());
          },
          N === null ? void 0 : function() {
            return x(N());
          }
        ];
      },
      [f, d, a, h]
    );
    var w = o(l, m[0], m[1]);
    return s(
      function() {
        p.hasValue = !0, p.value = w;
      },
      [w]
    ), u(w), w;
  }, Tr;
}
var Ir = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function vg() {
  return zi || (zi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, f) {
      return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = ce, n = Ga(), r = typeof Object.is == "function" ? Object.is : e, o = n.useSyncExternalStore, i = t.useRef, s = t.useEffect, c = t.useMemo, u = t.useDebugValue;
    Ir.useSyncExternalStoreWithSelector = function(l, f, d, a, h) {
      var m = i(null);
      if (m.current === null) {
        var p = { hasValue: !1, value: null };
        m.current = p;
      } else p = m.current;
      m = c(
        function() {
          function x(E) {
            if (!S) {
              if (S = !0, g = E, E = a(E), h !== void 0 && p.hasValue) {
                var b = p.value;
                if (h(b, E))
                  return y = b;
              }
              return y = E;
            }
            if (b = y, r(g, E))
              return b;
            var P = a(E);
            return h !== void 0 && h(b, P) ? (g = E, b) : (g = E, y = P);
          }
          var S = !1, g, y, N = d === void 0 ? null : d;
          return [
            function() {
              return x(f());
            },
            N === null ? void 0 : function() {
              return x(N());
            }
          ];
        },
        [f, d, a, h]
      );
      var w = o(l, m[0], m[1]);
      return s(
        function() {
          p.hasValue = !0, p.value = w;
        },
        [w]
      ), u(w), w;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ir;
}
var Hi;
function bg() {
  return Hi || (Hi = 1, process.env.NODE_ENV === "production" ? bn.exports = wg() : bn.exports = vg()), bn.exports;
}
var _g = bg();
const Sg = /* @__PURE__ */ Ru(_g), Eg = {}, Vi = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (f, d) => {
    const a = typeof f == "function" ? f(t) : f;
    if (!Object.is(a, t)) {
      const h = t;
      t = d ?? (typeof a != "object" || a === null) ? a : Object.assign({}, t, a), n.forEach((m) => m(t, h));
    }
  }, o = () => t, u = { setState: r, getState: o, getInitialState: () => l, subscribe: (f) => (n.add(f), () => n.delete(f)), destroy: () => {
    (Eg ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), n.clear();
  } }, l = t = e(r, o, u);
  return u;
}, Ng = (e) => e ? Vi(e) : Vi, { useDebugValue: Cg } = ce, { useSyncExternalStoreWithSelector: kg } = Sg, Og = (e) => e;
function qa(e, t = Og, n) {
  const r = kg(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Cg(r), r;
}
const Bi = (e, t) => {
  const n = Ng(e), r = (o, i = t) => qa(n, o, i);
  return Object.assign(r, n), r;
}, Mg = (e, t) => e ? Bi(e, t) : Bi;
function ie(e, t) {
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
var Sn = { exports: {} }, pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Ag() {
  if (Fi) return pe;
  Fi = 1;
  var e = ce;
  function t(u) {
    var l = "https://react.dev/errors/" + u;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        l += "&args[]=" + encodeURIComponent(arguments[f]);
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
  function i(u, l, f) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: d == null ? null : "" + d,
      children: u,
      containerInfo: l,
      implementation: f
    };
  }
  var s = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(u, l) {
    if (u === "font") return "";
    if (typeof l == "string")
      return l === "use-credentials" ? l : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.createPortal = function(u, l) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
      throw Error(t(299));
    return i(u, l, null, f);
  }, pe.flushSync = function(u) {
    var l = s.T, f = r.p;
    try {
      if (s.T = null, r.p = 2, u) return u();
    } finally {
      s.T = l, r.p = f, r.d.f();
    }
  }, pe.preconnect = function(u, l) {
    typeof u == "string" && (l ? (l = l.crossOrigin, l = typeof l == "string" ? l === "use-credentials" ? l : "" : void 0) : l = null, r.d.C(u, l));
  }, pe.prefetchDNS = function(u) {
    typeof u == "string" && r.d.D(u);
  }, pe.preinit = function(u, l) {
    if (typeof u == "string" && l && typeof l.as == "string") {
      var f = l.as, d = c(f, l.crossOrigin), a = typeof l.integrity == "string" ? l.integrity : void 0, h = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
      f === "style" ? r.d.S(
        u,
        typeof l.precedence == "string" ? l.precedence : void 0,
        {
          crossOrigin: d,
          integrity: a,
          fetchPriority: h
        }
      ) : f === "script" && r.d.X(u, {
        crossOrigin: d,
        integrity: a,
        fetchPriority: h,
        nonce: typeof l.nonce == "string" ? l.nonce : void 0
      });
    }
  }, pe.preinitModule = function(u, l) {
    if (typeof u == "string")
      if (typeof l == "object" && l !== null) {
        if (l.as == null || l.as === "script") {
          var f = c(
            l.as,
            l.crossOrigin
          );
          r.d.M(u, {
            crossOrigin: f,
            integrity: typeof l.integrity == "string" ? l.integrity : void 0,
            nonce: typeof l.nonce == "string" ? l.nonce : void 0
          });
        }
      } else l == null && r.d.M(u);
  }, pe.preload = function(u, l) {
    if (typeof u == "string" && typeof l == "object" && l !== null && typeof l.as == "string") {
      var f = l.as, d = c(f, l.crossOrigin);
      r.d.L(u, f, {
        crossOrigin: d,
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
  }, pe.preloadModule = function(u, l) {
    if (typeof u == "string")
      if (l) {
        var f = c(l.as, l.crossOrigin);
        r.d.m(u, {
          as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
          crossOrigin: f,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0
        });
      } else r.d.m(u);
  }, pe.requestFormReset = function(u) {
    r.d.r(u);
  }, pe.unstable_batchedUpdates = function(u, l) {
    return u(l);
  }, pe.useFormState = function(u, l, f) {
    return s.H.useFormState(u, l, f);
  }, pe.useFormStatus = function() {
    return s.H.useHostTransitionStatus();
  }, pe.version = "19.1.0", pe;
}
var ge = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function Tg() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && function() {
    function e() {
    }
    function t(d) {
      return "" + d;
    }
    function n(d, a, h) {
      var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(m);
        var p = !1;
      } catch {
        p = !0;
      }
      return p && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object"
      ), t(m)), {
        $$typeof: l,
        key: m == null ? null : "" + m,
        children: d,
        containerInfo: a,
        implementation: h
      };
    }
    function r(d, a) {
      if (d === "font") return "";
      if (typeof a == "string")
        return a === "use-credentials" ? a : "";
    }
    function o(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : 'something with type "' + typeof d + '"';
    }
    function i(d) {
      return d === null ? "`null`" : d === void 0 ? "`undefined`" : d === "" ? "an empty string" : typeof d == "string" ? JSON.stringify(d) : typeof d == "number" ? "`" + d + "`" : 'something with type "' + typeof d + '"';
    }
    function s() {
      var d = f.H;
      return d === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), d;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var c = ce, u = {
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
    }, l = Symbol.for("react.portal"), f = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ge.createPortal = function(d, a) {
      var h = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return n(d, a, null, h);
    }, ge.flushSync = function(d) {
      var a = f.T, h = u.p;
      try {
        if (f.T = null, u.p = 2, d)
          return d();
      } finally {
        f.T = a, u.p = h, u.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ge.preconnect = function(d, a) {
      typeof d == "string" && d ? a != null && typeof a != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        i(a)
      ) : a != null && typeof a.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        o(a.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        o(d)
      ), typeof d == "string" && (a ? (a = a.crossOrigin, a = typeof a == "string" ? a === "use-credentials" ? a : "" : void 0) : a = null, u.d.C(d, a));
    }, ge.prefetchDNS = function(d) {
      if (typeof d != "string" || !d)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          o(d)
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
      typeof d == "string" && u.d.D(d);
    }, ge.preinit = function(d, a) {
      if (typeof d == "string" && d ? a == null || typeof a != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        i(a)
      ) : a.as !== "style" && a.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        i(a.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        o(d)
      ), typeof d == "string" && a && typeof a.as == "string") {
        var h = a.as, m = r(h, a.crossOrigin), p = typeof a.integrity == "string" ? a.integrity : void 0, w = typeof a.fetchPriority == "string" ? a.fetchPriority : void 0;
        h === "style" ? u.d.S(
          d,
          typeof a.precedence == "string" ? a.precedence : void 0,
          {
            crossOrigin: m,
            integrity: p,
            fetchPriority: w
          }
        ) : h === "script" && u.d.X(d, {
          crossOrigin: m,
          integrity: p,
          fetchPriority: w,
          nonce: typeof a.nonce == "string" ? a.nonce : void 0
        });
      }
    }, ge.preinitModule = function(d, a) {
      var h = "";
      if (typeof d == "string" && d || (h += " The `href` argument encountered was " + o(d) + "."), a !== void 0 && typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : a && "as" in a && a.as !== "script" && (h += " The `as` option encountered was " + i(a.as) + "."), h)
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
              d
            );
        }
      typeof d == "string" && (typeof a == "object" && a !== null ? (a.as == null || a.as === "script") && (h = r(
        a.as,
        a.crossOrigin
      ), u.d.M(d, {
        crossOrigin: h,
        integrity: typeof a.integrity == "string" ? a.integrity : void 0,
        nonce: typeof a.nonce == "string" ? a.nonce : void 0
      })) : a == null && u.d.M(d));
    }, ge.preload = function(d, a) {
      var h = "";
      if (typeof d == "string" && d || (h += " The `href` argument encountered was " + o(d) + "."), a == null || typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : typeof a.as == "string" && a.as || (h += " The `as` option encountered was " + o(a.as) + "."), h && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        h
      ), typeof d == "string" && typeof a == "object" && a !== null && typeof a.as == "string") {
        h = a.as;
        var m = r(
          h,
          a.crossOrigin
        );
        u.d.L(d, h, {
          crossOrigin: m,
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
    }, ge.preloadModule = function(d, a) {
      var h = "";
      typeof d == "string" && d || (h += " The `href` argument encountered was " + o(d) + "."), a !== void 0 && typeof a != "object" ? h += " The `options` argument encountered was " + o(a) + "." : a && "as" in a && typeof a.as != "string" && (h += " The `as` option encountered was " + o(a.as) + "."), h && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        h
      ), typeof d == "string" && (a ? (h = r(
        a.as,
        a.crossOrigin
      ), u.d.m(d, {
        as: typeof a.as == "string" && a.as !== "script" ? a.as : void 0,
        crossOrigin: h,
        integrity: typeof a.integrity == "string" ? a.integrity : void 0
      })) : u.d.m(d));
    }, ge.requestFormReset = function(d) {
      u.d.r(d);
    }, ge.unstable_batchedUpdates = function(d, a) {
      return d(a);
    }, ge.useFormState = function(d, a, h) {
      return s().useFormState(d, a, h);
    }, ge.useFormStatus = function() {
      return s().useHostTransitionStatus();
    }, ge.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ge;
}
var Wi;
function Pg() {
  if (Wi) return Sn.exports;
  Wi = 1;
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
  return process.env.NODE_ENV === "production" ? (e(), Sn.exports = Ag()) : Sn.exports = Tg(), Sn.exports;
}
Pg();
const dr = io(null), Rg = dr.Provider, Ua = ve.error001();
function Q(e, t) {
  const n = Ct(dr);
  if (n === null)
    throw new Error(Ua);
  return qa(n, e, t);
}
function oe() {
  const e = Ct(dr);
  if (e === null)
    throw new Error(Ua);
  return Oe(() => ({
    getState: e.getState,
    setState: e.setState,
    subscribe: e.subscribe
  }), [e]);
}
const Xi = { display: "none" }, Ig = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0px, 0px, 0px, 0px)",
  clipPath: "inset(100%)"
}, Ka = "react-flow__node-desc", Za = "react-flow__edge-desc", Dg = "react-flow__aria-live", $g = (e) => e.ariaLiveMessage;
function Lg({ rfId: e }) {
  const t = Q($g);
  return M.jsx("div", { id: `${Dg}-${e}`, "aria-live": "assertive", "aria-atomic": "true", style: Ig, children: t });
}
function jg({ rfId: e, disableKeyboardA11y: t }) {
  return M.jsxs(M.Fragment, { children: [M.jsxs("div", { id: `${Ka}-${e}`, style: Xi, children: ["Press enter or space to select a node.", !t && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "] }), M.jsx("div", { id: `${Za}-${e}`, style: Xi, children: "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel." }), !t && M.jsx(Lg, { rfId: e })] });
}
const zg = (e) => e.userSelectionActive ? "none" : "all", fr = ys(({ position: e = "top-left", children: t, className: n, style: r, ...o }, i) => {
  const s = Q(zg), c = `${e}`.split("-");
  return M.jsx("div", { className: ue(["react-flow__panel", n, ...c]), style: { ...r, pointerEvents: s }, ref: i, ...o, children: t });
});
fr.displayName = "Panel";
function Hg({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution ? null : M.jsx(fr, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: M.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Vg = (e) => {
  const t = [], n = [];
  for (const [, r] of e.nodeLookup)
    r.selected && t.push(r.internals.userNode);
  for (const [, r] of e.edgeLookup)
    r.selected && n.push(r);
  return { selectedNodes: t, selectedEdges: n };
}, En = (e) => e.id;
function Bg(e, t) {
  return ie(e.selectedNodes.map(En), t.selectedNodes.map(En)) && ie(e.selectedEdges.map(En), t.selectedEdges.map(En));
}
function Fg({ onSelectionChange: e }) {
  const t = oe(), { selectedNodes: n, selectedEdges: r } = Q(Vg, Bg);
  return ne(() => {
    const o = { nodes: n, edges: r };
    e == null || e(o), t.getState().onSelectionChangeHandlers.forEach((i) => i(o));
  }, [n, r, e]), null;
}
const Yg = (e) => !!e.onSelectionChangeHandlers;
function Wg({ onSelectionChange: e }) {
  const t = Q(Yg);
  return e || t ? M.jsx(Fg, { onSelectionChange: e }) : null;
}
const Qa = [0, 0], Xg = { x: 0, y: 0, zoom: 1 }, Gg = [
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
], Gi = [...Gg, "rfId"], qg = (e) => ({
  setNodes: e.setNodes,
  setEdges: e.setEdges,
  setMinZoom: e.setMinZoom,
  setMaxZoom: e.setMaxZoom,
  setTranslateExtent: e.setTranslateExtent,
  setNodeExtent: e.setNodeExtent,
  reset: e.reset,
  setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  setPaneClickDistance: e.setPaneClickDistance
}), qi = {
  /*
   * these are values that are also passed directly to other components
   * than the StoreUpdater. We can reduce the number of setStore calls
   * by setting the same values here as prev fields.
   */
  translateExtent: qt,
  nodeOrigin: Qa,
  minZoom: 0.5,
  maxZoom: 2,
  elementsSelectable: !0,
  noPanClassName: "nopan",
  rfId: "1",
  paneClickDistance: 0
};
function Ug(e) {
  const { setNodes: t, setEdges: n, setMinZoom: r, setMaxZoom: o, setTranslateExtent: i, setNodeExtent: s, reset: c, setDefaultNodesAndEdges: u, setPaneClickDistance: l } = Q(qg, ie), f = oe();
  ne(() => (u(e.defaultNodes, e.defaultEdges), () => {
    d.current = qi, c();
  }), []);
  const d = te(qi);
  return ne(
    () => {
      for (const a of Gi) {
        const h = e[a], m = d.current[a];
        h !== m && (typeof e[a] > "u" || (a === "nodes" ? t(h) : a === "edges" ? n(h) : a === "minZoom" ? r(h) : a === "maxZoom" ? o(h) : a === "translateExtent" ? i(h) : a === "nodeExtent" ? s(h) : a === "paneClickDistance" ? l(h) : a === "fitView" ? f.setState({ fitViewQueued: h }) : a === "fitViewOptions" ? f.setState({ fitViewOptions: h }) : f.setState({ [a]: h })));
      }
      d.current = e;
    },
    // Only re-run the effect if one of the fields we track changes
    Gi.map((a) => e[a])
  ), null;
}
function Ui() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Kg(e) {
  var r;
  const [t, n] = be(e === "system" ? null : e);
  return ne(() => {
    if (e !== "system") {
      n(e);
      return;
    }
    const o = Ui(), i = () => n(o != null && o.matches ? "dark" : "light");
    return i(), o == null || o.addEventListener("change", i), () => {
      o == null || o.removeEventListener("change", i);
    };
  }, [e]), t !== null ? t : (r = Ui()) != null && r.matches ? "dark" : "light";
}
const Ki = typeof document < "u" ? document : null;
function Zt(e = null, t = { target: Ki, actInsideInputWithModifier: !0 }) {
  const [n, r] = be(!1), o = te(!1), i = te(/* @__PURE__ */ new Set([])), [s, c] = Oe(() => {
    if (e !== null) {
      const l = (Array.isArray(e) ? e : [e]).filter((d) => typeof d == "string").map((d) => d.replace("+", `
`).replace(`

`, `
+`).split(`
`)), f = l.reduce((d, a) => d.concat(...a), []);
      return [l, f];
    }
    return [[], []];
  }, [e]);
  return ne(() => {
    const u = (t == null ? void 0 : t.target) || Ki;
    if (e !== null) {
      const l = (a) => {
        var p, w;
        if (o.current = a.ctrlKey || a.metaKey || a.shiftKey || a.altKey, (!o.current || o.current && !t.actInsideInputWithModifier) && Ta(a))
          return !1;
        const m = Qi(a.code, c);
        if (i.current.add(a[m]), Zi(s, i.current, !1)) {
          const x = ((w = (p = a.composedPath) == null ? void 0 : p.call(a)) == null ? void 0 : w[0]) || a.target, S = (x == null ? void 0 : x.nodeName) === "BUTTON" || (x == null ? void 0 : x.nodeName) === "A";
          t.preventDefault !== !1 && (o.current || !S) && a.preventDefault(), r(!0);
        }
      }, f = (a) => {
        const h = Qi(a.code, c);
        Zi(s, i.current, !0) ? (r(!1), i.current.clear()) : i.current.delete(a[h]), a.key === "Meta" && i.current.clear(), o.current = !1;
      }, d = () => {
        i.current.clear(), r(!1);
      };
      return u == null || u.addEventListener("keydown", l), u == null || u.addEventListener("keyup", f), window.addEventListener("blur", d), window.addEventListener("contextmenu", d), () => {
        u == null || u.removeEventListener("keydown", l), u == null || u.removeEventListener("keyup", f), window.removeEventListener("blur", d), window.removeEventListener("contextmenu", d);
      };
    }
  }, [e, r]), n;
}
function Zi(e, t, n) {
  return e.filter((r) => n || r.length === t.size).some((r) => r.every((o) => t.has(o)));
}
function Qi(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Zg = () => {
  const e = oe();
  return Oe(() => ({
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
      const { width: o, height: i, maxZoom: s, panZoom: c } = e.getState(), u = typeof (r == null ? void 0 : r.zoom) < "u" ? r.zoom : s, l = o / 2 - t * u, f = i / 2 - n * u;
      return c ? (await c.setViewport({
        x: l,
        y: f,
        zoom: u
      }, { duration: r == null ? void 0 : r.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitBounds: async (t, n) => {
      const { width: r, height: o, minZoom: i, maxZoom: s, panZoom: c } = e.getState(), u = wo(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
      return c ? (await c.setViewport(u, { duration: n == null ? void 0 : n.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    screenToFlowPosition: (t, n = {}) => {
      const { transform: r, snapGrid: o, snapToGrid: i, domNode: s } = e.getState();
      if (!s)
        return t;
      const { x: c, y: u } = s.getBoundingClientRect(), l = {
        x: t.x - c,
        y: t.y - u
      }, f = n.snapGrid ?? o, d = n.snapToGrid ?? i;
      return rn(l, r, d, f);
    },
    flowToScreenPosition: (t) => {
      const { transform: n, domNode: r } = e.getState();
      if (!r)
        return t;
      const { x: o, y: i } = r.getBoundingClientRect(), s = Wn(t, n);
      return {
        x: s.x + o,
        y: s.y + i
      };
    }
  }), []);
};
function Ja(e, t) {
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
      Qg(u, c);
    n.push(c);
  }
  return o.length && o.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Qg(e, t) {
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
function ec(e, t) {
  return Ja(e, t);
}
function tc(e, t) {
  return Ja(e, t);
}
function Ge(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function dt(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), r.push(Ge(i.id, s)));
  }
  return r;
}
function Ji({ items: e = [], lookup: t }) {
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
function es(e) {
  return {
    id: e.id,
    type: "remove"
  };
}
const ts = (e) => Sp(e), Jg = (e) => ba(e);
function nc(e) {
  return ys(e);
}
const em = typeof window < "u" ? Pu : ne;
function ns(e) {
  const [t, n] = be(BigInt(0)), [r] = be(() => tm(() => n((o) => o + BigInt(1))));
  return em(() => {
    const o = r.get();
    o.length && (e(o), r.reset());
  }, [t]), r;
}
function tm(e) {
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
const rc = io(null);
function nm({ children: e }) {
  const t = oe(), n = _e((c) => {
    const { nodes: u = [], setNodes: l, hasDefaultNodes: f, onNodesChange: d, nodeLookup: a, fitViewQueued: h } = t.getState();
    let m = u;
    for (const p of c)
      m = typeof p == "function" ? p(m) : p;
    if (f)
      l(m);
    else {
      const p = Ji({
        items: m,
        lookup: a
      });
      p.length > 0 ? d == null || d(p) : h && window.requestAnimationFrame(() => {
        const { fitViewQueued: w, nodes: x, setNodes: S } = t.getState();
        w && S(x);
      });
    }
  }, []), r = ns(n), o = _e((c) => {
    const { edges: u = [], setEdges: l, hasDefaultEdges: f, onEdgesChange: d, edgeLookup: a } = t.getState();
    let h = u;
    for (const m of c)
      h = typeof m == "function" ? m(h) : m;
    f ? l(h) : d && d(Ji({
      items: h,
      lookup: a
    }));
  }, []), i = ns(o), s = Oe(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return M.jsx(rc.Provider, { value: s, children: e });
}
function rm() {
  const e = Ct(rc);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const om = (e) => !!e.panZoom;
function Co() {
  const e = Zg(), t = oe(), n = rm(), r = Q(om), o = Oe(() => {
    const i = (d) => t.getState().nodeLookup.get(d), s = (d) => {
      n.nodeQueue.push(d);
    }, c = (d) => {
      n.edgeQueue.push(d);
    }, u = (d) => {
      var x, S;
      const { nodeLookup: a, nodeOrigin: h } = t.getState(), m = ts(d) ? d : a.get(d.id), p = m.parentId ? Ma(m.position, m.measured, m.parentId, a, h) : m.position, w = {
        ...m,
        position: p,
        width: ((x = m.measured) == null ? void 0 : x.width) ?? m.width,
        height: ((S = m.measured) == null ? void 0 : S.height) ?? m.height
      };
      return Et(w);
    }, l = (d, a, h = { replace: !1 }) => {
      s((m) => m.map((p) => {
        if (p.id === d) {
          const w = typeof a == "function" ? a(p) : a;
          return h.replace && ts(w) ? w : { ...p, ...w };
        }
        return p;
      }));
    }, f = (d, a, h = { replace: !1 }) => {
      c((m) => m.map((p) => {
        if (p.id === d) {
          const w = typeof a == "function" ? a(p) : a;
          return h.replace && Jg(w) ? w : { ...p, ...w };
        }
        return p;
      }));
    };
    return {
      getNodes: () => t.getState().nodes.map((d) => ({ ...d })),
      getNode: (d) => {
        var a;
        return (a = i(d)) == null ? void 0 : a.internals.userNode;
      },
      getInternalNode: i,
      getEdges: () => {
        const { edges: d = [] } = t.getState();
        return d.map((a) => ({ ...a }));
      },
      getEdge: (d) => t.getState().edgeLookup.get(d),
      setNodes: s,
      setEdges: c,
      addNodes: (d) => {
        const a = Array.isArray(d) ? d : [d];
        n.nodeQueue.push((h) => [...h, ...a]);
      },
      addEdges: (d) => {
        const a = Array.isArray(d) ? d : [d];
        n.edgeQueue.push((h) => [...h, ...a]);
      },
      toObject: () => {
        const { nodes: d = [], edges: a = [], transform: h } = t.getState(), [m, p, w] = h;
        return {
          nodes: d.map((x) => ({ ...x })),
          edges: a.map((x) => ({ ...x })),
          viewport: {
            x: m,
            y: p,
            zoom: w
          }
        };
      },
      deleteElements: async ({ nodes: d = [], edges: a = [] }) => {
        const { nodes: h, edges: m, onNodesDelete: p, onEdgesDelete: w, triggerNodeChanges: x, triggerEdgeChanges: S, onDelete: g, onBeforeDelete: y } = t.getState(), { nodes: N, edges: E } = await Op({
          nodesToRemove: d,
          edgesToRemove: a,
          nodes: h,
          edges: m,
          onBeforeDelete: y
        }), b = E.length > 0, P = N.length > 0;
        if (b) {
          const I = E.map(es);
          w == null || w(E), S(I);
        }
        if (P) {
          const I = N.map(es);
          p == null || p(N), x(I);
        }
        return (P || b) && (g == null || g({ nodes: N, edges: E })), { deletedNodes: N, deletedEdges: E };
      },
      getIntersectingNodes: (d, a = !0, h) => {
        const m = Si(d), p = m ? d : u(d), w = h !== void 0;
        return p ? (h || t.getState().nodes).filter((x) => {
          const S = t.getState().nodeLookup.get(x.id);
          if (S && !m && (x.id === d.id || !S.internals.positionAbsolute))
            return !1;
          const g = Et(w ? x : S), y = Ut(g, p);
          return a && y > 0 || y >= p.width * p.height;
        }) : [];
      },
      isNodeIntersecting: (d, a, h = !0) => {
        const p = Si(d) ? d : u(d);
        if (!p)
          return !1;
        const w = Ut(p, a);
        return h && w > 0 || w >= p.width * p.height;
      },
      updateNode: l,
      updateNodeData: (d, a, h = { replace: !1 }) => {
        l(d, (m) => {
          const p = typeof a == "function" ? a(m) : a;
          return h.replace ? { ...m, data: p } : { ...m, data: { ...m.data, ...p } };
        }, h);
      },
      updateEdge: f,
      updateEdgeData: (d, a, h = { replace: !1 }) => {
        f(d, (m) => {
          const p = typeof a == "function" ? a(m) : a;
          return h.replace ? { ...m, data: p } : { ...m, data: { ...m.data, ...p } };
        }, h);
      },
      getNodesBounds: (d) => {
        const { nodeLookup: a, nodeOrigin: h } = t.getState();
        return Ep(d, { nodeLookup: a, nodeOrigin: h });
      },
      getHandleConnections: ({ type: d, id: a, nodeId: h }) => {
        var m;
        return Array.from(((m = t.getState().connectionLookup.get(`${h}-${d}${a ? `-${a}` : ""}`)) == null ? void 0 : m.values()) ?? []);
      },
      getNodeConnections: ({ type: d, handleId: a, nodeId: h }) => {
        var m;
        return Array.from(((m = t.getState().connectionLookup.get(`${h}${d ? a ? `-${d}-${a}` : `-${d}` : ""}`)) == null ? void 0 : m.values()) ?? []);
      },
      fitView: async (d) => {
        const a = t.getState().fitViewResolver ?? Tp();
        return t.setState({ fitViewQueued: !0, fitViewOptions: d, fitViewResolver: a }), n.nodeQueue.push((h) => [...h]), a.promise;
      }
    };
  }, []);
  return Oe(() => ({
    ...o,
    ...e,
    viewportInitialized: r
  }), [r]);
}
const rs = (e) => e.selected, im = { actInsideInputWithModifier: !1 }, sm = typeof window < "u" ? window : void 0;
function am({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = oe(), { deleteElements: r } = Co(), o = Zt(e, im), i = Zt(t, { target: sm });
  ne(() => {
    if (o) {
      const { edges: s, nodes: c } = n.getState();
      r({ nodes: c.filter(rs), edges: s.filter(rs) }), n.setState({ nodesSelectionActive: !1 });
    }
  }, [o]), ne(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function cm(e) {
  const t = oe();
  ne(() => {
    const n = () => {
      var o, i;
      if (!e.current)
        return !1;
      const r = vo(e.current);
      (r.height === 0 || r.width === 0) && ((i = (o = t.getState()).onError) == null || i.call(o, "004", ve.error004())), t.setState({ width: r.width || 500, height: r.height || 500 });
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
const hr = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}, um = (e) => ({
  userSelectionActive: e.userSelectionActive,
  lib: e.lib
});
function lm({ onPaneContextMenu: e, zoomOnScroll: t = !0, zoomOnPinch: n = !0, panOnScroll: r = !1, panOnScrollSpeed: o = 0.5, panOnScrollMode: i = et.Free, zoomOnDoubleClick: s = !0, panOnDrag: c = !0, defaultViewport: u, translateExtent: l, minZoom: f, maxZoom: d, zoomActivationKeyCode: a, preventScrolling: h = !0, children: m, noWheelClassName: p, noPanClassName: w, onViewportChange: x, isControlledViewport: S, paneClickDistance: g }) {
  const y = oe(), N = te(null), { userSelectionActive: E, lib: b } = Q(um, ie), P = Zt(a), I = te();
  cm(N);
  const L = _e(($) => {
    x == null || x({ x: $[0], y: $[1], zoom: $[2] }), S || y.setState({ transform: $ });
  }, [x, S]);
  return ne(() => {
    if (N.current) {
      I.current = ug({
        domNode: N.current,
        minZoom: f,
        maxZoom: d,
        translateExtent: l,
        viewport: u,
        paneClickDistance: g,
        onDraggingChange: (v) => y.setState({ paneDragging: v }),
        onPanZoomStart: (v, T) => {
          const { onViewportChangeStart: C, onMoveStart: O } = y.getState();
          O == null || O(v, T), C == null || C(T);
        },
        onPanZoom: (v, T) => {
          const { onViewportChange: C, onMove: O } = y.getState();
          O == null || O(v, T), C == null || C(T);
        },
        onPanZoomEnd: (v, T) => {
          const { onViewportChangeEnd: C, onMoveEnd: O } = y.getState();
          O == null || O(v, T), C == null || C(T);
        }
      });
      const { x: $, y: j, zoom: z } = I.current.getViewport();
      return y.setState({
        panZoom: I.current,
        transform: [$, j, z],
        domNode: N.current.closest(".react-flow")
      }), () => {
        var v;
        (v = I.current) == null || v.destroy();
      };
    }
  }, []), ne(() => {
    var $;
    ($ = I.current) == null || $.update({
      onPaneContextMenu: e,
      zoomOnScroll: t,
      zoomOnPinch: n,
      panOnScroll: r,
      panOnScrollSpeed: o,
      panOnScrollMode: i,
      zoomOnDoubleClick: s,
      panOnDrag: c,
      zoomActivationKeyPressed: P,
      preventScrolling: h,
      noPanClassName: w,
      userSelectionActive: E,
      noWheelClassName: p,
      lib: b,
      onTransformChange: L
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
    P,
    h,
    w,
    E,
    p,
    b,
    L
  ]), M.jsx("div", { className: "react-flow__renderer", ref: N, style: hr, children: m });
}
const dm = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect
});
function fm() {
  const { userSelectionActive: e, userSelectionRect: t } = Q(dm, ie);
  return e && t ? M.jsx("div", { className: "react-flow__selection react-flow__container", style: {
    width: t.width,
    height: t.height,
    transform: `translate(${t.x}px, ${t.y}px)`
  } }) : null;
}
const Dr = (e, t) => (n) => {
  n.target === t.current && (e == null || e(n));
}, hm = (e) => ({
  userSelectionActive: e.userSelectionActive,
  elementsSelectable: e.elementsSelectable,
  connectionInProgress: e.connection.inProgress,
  dragging: e.paneDragging
});
function pm({ isSelecting: e, selectionKeyPressed: t, selectionMode: n = _t.Full, panOnDrag: r, selectionOnDrag: o, onSelectionStart: i, onSelectionEnd: s, onPaneClick: c, onPaneContextMenu: u, onPaneScroll: l, onPaneMouseEnter: f, onPaneMouseMove: d, onPaneMouseLeave: a, children: h }) {
  const m = oe(), { userSelectionActive: p, elementsSelectable: w, dragging: x, connectionInProgress: S } = Q(hm, ie), g = w && (e || p), y = te(null), N = te(), E = te(/* @__PURE__ */ new Set()), b = te(/* @__PURE__ */ new Set()), P = te(!1), I = te(!1), L = (O) => {
    if (P.current || S) {
      P.current = !1;
      return;
    }
    c == null || c(O), m.getState().resetSelectedElements(), m.setState({ nodesSelectionActive: !1 });
  }, $ = (O) => {
    if (Array.isArray(r) && (r != null && r.includes(2))) {
      O.preventDefault();
      return;
    }
    u == null || u(O);
  }, j = l ? (O) => l(O) : void 0, z = (O) => {
    var D, H;
    const { resetSelectedElements: R, domNode: k } = m.getState();
    if (N.current = k == null ? void 0 : k.getBoundingClientRect(), !w || !e || O.button !== 0 || O.target !== y.current || !N.current)
      return;
    (H = (D = O.target) == null ? void 0 : D.setPointerCapture) == null || H.call(D, O.pointerId), I.current = !0, P.current = !1;
    const { x: _, y: A } = $e(O.nativeEvent, N.current);
    R(), m.setState({
      userSelectionRect: {
        width: 0,
        height: 0,
        startX: _,
        startY: A,
        x: _,
        y: A
      }
    }), i == null || i(O);
  }, v = (O) => {
    const { userSelectionRect: R, transform: k, nodeLookup: _, edgeLookup: A, connectionLookup: D, triggerNodeChanges: H, triggerEdgeChanges: F, defaultEdgeOptions: Y } = m.getState();
    if (!N.current || !R)
      return;
    P.current = !0;
    const { x: W, y: V } = $e(O.nativeEvent, N.current), { startX: B, startY: q } = R, Z = {
      startX: B,
      startY: q,
      x: W < B ? W : B,
      y: V < q ? V : q,
      width: Math.abs(W - B),
      height: Math.abs(V - q)
    }, U = E.current, X = b.current;
    E.current = new Set(_a(_, Z, k, n === _t.Partial, !0).map((J) => J.id)), b.current = /* @__PURE__ */ new Set();
    const se = (Y == null ? void 0 : Y.selectable) ?? !0;
    for (const J of E.current) {
      const de = D.get(J);
      if (de)
        for (const { edgeId: he } of de.values()) {
          const it = A.get(he);
          it && (it.selectable ?? se) && b.current.add(he);
        }
    }
    if (!Ei(U, E.current)) {
      const J = dt(_, E.current, !0);
      H(J);
    }
    if (!Ei(X, b.current)) {
      const J = dt(A, b.current);
      F(J);
    }
    m.setState({
      userSelectionRect: Z,
      userSelectionActive: !0,
      nodesSelectionActive: !1
    });
  }, T = (O) => {
    var k, _;
    if (O.button !== 0 || !I.current)
      return;
    (_ = (k = O.target) == null ? void 0 : k.releasePointerCapture) == null || _.call(k, O.pointerId);
    const { userSelectionRect: R } = m.getState();
    !p && R && O.target === y.current && (L == null || L(O)), m.setState({
      userSelectionActive: !1,
      userSelectionRect: null,
      nodesSelectionActive: E.current.size > 0
    }), s == null || s(O), (t || o) && (P.current = !1), I.current = !1;
  }, C = r === !0 || Array.isArray(r) && r.includes(0);
  return M.jsxs("div", { className: ue(["react-flow__pane", { draggable: C, dragging: x, selection: e }]), onClick: g ? void 0 : Dr(L, y), onContextMenu: Dr($, y), onWheel: Dr(j, y), onPointerEnter: g ? void 0 : f, onPointerDown: g ? z : d, onPointerMove: g ? v : d, onPointerUp: g ? T : void 0, onPointerLeave: a, ref: y, style: hr, children: [h, M.jsx(fm, {})] });
}
function oo({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const { addSelectedNodes: o, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: c, onError: u } = t.getState(), l = c.get(e);
  if (!l) {
    u == null || u("012", ve.error012(e));
    return;
  }
  t.setState({ nodesSelectionActive: !1 }), l.selected ? (n || l.selected && s) && (i({ nodes: [l], edges: [] }), requestAnimationFrame(() => {
    var f;
    return (f = r == null ? void 0 : r.current) == null ? void 0 : f.blur();
  })) : o([e]);
}
function oc({ nodeRef: e, disabled: t = !1, noDragClassName: n, handleSelector: r, nodeId: o, isSelectable: i, nodeClickDistance: s }) {
  const c = oe(), [u, l] = be(!1), f = te();
  return ne(() => {
    f.current = Up({
      getStoreItems: () => c.getState(),
      onNodeMouseDown: (d) => {
        oo({
          id: d,
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
  }, []), ne(() => {
    var d, a;
    if (t)
      (d = f.current) == null || d.destroy();
    else if (e.current)
      return (a = f.current) == null || a.update({
        noDragClassName: n,
        handleSelector: r,
        domNode: e.current,
        isSelectable: i,
        nodeId: o,
        nodeClickDistance: s
      }), () => {
        var h;
        (h = f.current) == null || h.destroy();
      };
  }, [n, r, t, i, e, o]), u;
}
const gm = (e) => (t) => t.selected && (t.draggable || e && typeof t.draggable > "u");
function ic() {
  const e = oe();
  return _e((n) => {
    const { nodeExtent: r, snapToGrid: o, snapGrid: i, nodesDraggable: s, onError: c, updateNodePositions: u, nodeLookup: l, nodeOrigin: f } = e.getState(), d = /* @__PURE__ */ new Map(), a = gm(s), h = o ? i[0] : 5, m = o ? i[1] : 5, p = n.direction.x * h * n.factor, w = n.direction.y * m * n.factor;
    for (const [, x] of l) {
      if (!a(x))
        continue;
      let S = {
        x: x.internals.positionAbsolute.x + p,
        y: x.internals.positionAbsolute.y + w
      };
      o && (S = ur(S, i));
      const { position: g, positionAbsolute: y } = Sa({
        nodeId: x.id,
        nextPosition: S,
        nodeLookup: l,
        nodeExtent: r,
        nodeOrigin: f,
        onError: c
      });
      x.position = g, x.internals.positionAbsolute = y, d.set(x.id, x);
    }
    u(d);
  }, []);
}
const ko = io(null), mm = ko.Provider;
ko.Consumer;
const sc = () => Ct(ko), ym = (e) => ({
  connectOnClick: e.connectOnClick,
  noPanClassName: e.noPanClassName,
  rfId: e.rfId
}), xm = (e, t, n) => (r) => {
  const { connectionClickStartHandle: o, connectionMode: i, connection: s } = r, { fromHandle: c, toHandle: u, isValid: l } = s, f = (u == null ? void 0 : u.nodeId) === e && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n;
  return {
    connectingFrom: (c == null ? void 0 : c.nodeId) === e && (c == null ? void 0 : c.id) === t && (c == null ? void 0 : c.type) === n,
    connectingTo: f,
    clickConnecting: (o == null ? void 0 : o.nodeId) === e && (o == null ? void 0 : o.id) === t && (o == null ? void 0 : o.type) === n,
    isPossibleEndHandle: i === rt.Strict ? (c == null ? void 0 : c.type) !== n : e !== (c == null ? void 0 : c.nodeId) || t !== (c == null ? void 0 : c.id),
    connectionInProcess: !!c,
    clickConnectionInProcess: !!o,
    valid: f && l
  };
};
function wm({ type: e = "source", position: t = G.Top, isValidConnection: n, isConnectable: r = !0, isConnectableStart: o = !0, isConnectableEnd: i = !0, id: s, onConnect: c, children: u, className: l, onMouseDown: f, onTouchStart: d, ...a }, h) {
  var T, C;
  const m = s || null, p = e === "target", w = oe(), x = sc(), { connectOnClick: S, noPanClassName: g, rfId: y } = Q(ym, ie), { connectingFrom: N, connectingTo: E, clickConnecting: b, isPossibleEndHandle: P, connectionInProcess: I, clickConnectionInProcess: L, valid: $ } = Q(xm(x, m, e), ie);
  x || (C = (T = w.getState()).onError) == null || C.call(T, "010", ve.error010());
  const j = (O) => {
    const { defaultEdgeOptions: R, onConnect: k, hasDefaultEdges: _ } = w.getState(), A = {
      ...R,
      ...O
    };
    if (_) {
      const { edges: D, setEdges: H } = w.getState();
      H($a(A, D));
    }
    k == null || k(A), c == null || c(A);
  }, z = (O) => {
    if (!x)
      return;
    const R = Pa(O.nativeEvent);
    if (o && (R && O.button === 0 || !R)) {
      const k = w.getState();
      ro.onPointerDown(O.nativeEvent, {
        autoPanOnConnect: k.autoPanOnConnect,
        connectionMode: k.connectionMode,
        connectionRadius: k.connectionRadius,
        domNode: k.domNode,
        nodeLookup: k.nodeLookup,
        lib: k.lib,
        isTarget: p,
        handleId: m,
        nodeId: x,
        flowId: k.rfId,
        panBy: k.panBy,
        cancelConnection: k.cancelConnection,
        onConnectStart: k.onConnectStart,
        onConnectEnd: k.onConnectEnd,
        updateConnection: k.updateConnection,
        onConnect: j,
        isValidConnection: n || k.isValidConnection,
        getTransform: () => w.getState().transform,
        getFromHandle: () => w.getState().connection.fromHandle,
        autoPanSpeed: k.autoPanSpeed
      });
    }
    R ? f == null || f(O) : d == null || d(O);
  }, v = (O) => {
    const { onClickConnectStart: R, onClickConnectEnd: k, connectionClickStartHandle: _, connectionMode: A, isValidConnection: D, lib: H, rfId: F, nodeLookup: Y, connection: W } = w.getState();
    if (!x || !_ && !o)
      return;
    if (!_) {
      R == null || R(O.nativeEvent, { nodeId: x, handleId: m, handleType: e }), w.setState({ connectionClickStartHandle: { nodeId: x, type: e, id: m } });
      return;
    }
    const V = Aa(O.target), B = n || D, { connection: q, isValid: Z } = ro.isValid(O.nativeEvent, {
      handle: {
        nodeId: x,
        id: m,
        type: e
      },
      connectionMode: A,
      fromNodeId: _.nodeId,
      fromHandleId: _.id || null,
      fromType: _.type,
      isValidConnection: B,
      flowId: F,
      doc: V,
      lib: H,
      nodeLookup: Y
    });
    Z && q && j(q);
    const U = structuredClone(W);
    delete U.inProgress, U.toPosition = U.toHandle ? U.toHandle.position : null, k == null || k(O, U), w.setState({ connectionClickStartHandle: null });
  };
  return M.jsx("div", { "data-handleid": m, "data-nodeid": x, "data-handlepos": t, "data-id": `${y}-${x}-${m}-${e}`, className: ue([
    "react-flow__handle",
    `react-flow__handle-${t}`,
    "nodrag",
    g,
    l,
    {
      source: !p,
      target: p,
      connectable: r,
      connectablestart: o,
      connectableend: i,
      clickconnecting: b,
      connectingfrom: N,
      connectingto: E,
      valid: $,
      /*
       * shows where you can start a connection from
       * and where you can end it while connecting
       */
      connectionindicator: r && (!I || P) && (I || L ? i : o)
    }
  ]), onMouseDown: z, onTouchStart: z, onClick: S ? v : void 0, ref: h, ...a, children: u });
}
const Ye = le(nc(wm));
function vm({ data: e, isConnectable: t, sourcePosition: n = G.Bottom }) {
  return M.jsxs(M.Fragment, { children: [e == null ? void 0 : e.label, M.jsx(Ye, { type: "source", position: n, isConnectable: t })] });
}
function bm({ data: e, isConnectable: t, targetPosition: n = G.Top, sourcePosition: r = G.Bottom }) {
  return M.jsxs(M.Fragment, { children: [M.jsx(Ye, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label, M.jsx(Ye, { type: "source", position: r, isConnectable: t })] });
}
function _m() {
  return null;
}
function Sm({ data: e, isConnectable: t, targetPosition: n = G.Top }) {
  return M.jsxs(M.Fragment, { children: [M.jsx(Ye, { type: "target", position: n, isConnectable: t }), e == null ? void 0 : e.label] });
}
const Gn = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
}, os = {
  input: vm,
  default: bm,
  output: Sm,
  group: _m
};
function Em(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0 ? {
    width: e.width ?? e.initialWidth ?? ((t = e.style) == null ? void 0 : t.width),
    height: e.height ?? e.initialHeight ?? ((n = e.style) == null ? void 0 : n.height)
  } : {
    width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
    height: e.height ?? ((o = e.style) == null ? void 0 : o.height)
  };
}
const Nm = (e) => {
  const { width: t, height: n, x: r, y: o } = nn(e.nodeLookup, {
    filter: (i) => !!i.selected
  });
  return {
    width: Ce(t) ? t : null,
    height: Ce(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`
  };
};
function Cm({ onSelectionContextMenu: e, noPanClassName: t, disableKeyboardA11y: n }) {
  const r = oe(), { width: o, height: i, transformString: s, userSelectionActive: c } = Q(Nm, ie), u = ic(), l = te(null);
  if (ne(() => {
    var a;
    n || (a = l.current) == null || a.focus({
      preventScroll: !0
    });
  }, [n]), oc({
    nodeRef: l
  }), c || !o || !i)
    return null;
  const f = e ? (a) => {
    const h = r.getState().nodes.filter((m) => m.selected);
    e(a, h);
  } : void 0, d = (a) => {
    Object.prototype.hasOwnProperty.call(Gn, a.key) && (a.preventDefault(), u({
      direction: Gn[a.key],
      factor: a.shiftKey ? 4 : 1
    }));
  };
  return M.jsx("div", { className: ue(["react-flow__nodesselection", "react-flow__container", t]), style: {
    transform: s
  }, children: M.jsx("div", { ref: l, className: "react-flow__nodesselection-rect", onContextMenu: f, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : d, style: {
    width: o,
    height: i
  } }) });
}
const is = typeof window < "u" ? window : void 0, km = (e) => ({ nodesSelectionActive: e.nodesSelectionActive, userSelectionActive: e.userSelectionActive });
function ac({ children: e, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: c, deleteKeyCode: u, selectionKeyCode: l, selectionOnDrag: f, selectionMode: d, onSelectionStart: a, onSelectionEnd: h, multiSelectionKeyCode: m, panActivationKeyCode: p, zoomActivationKeyCode: w, elementsSelectable: x, zoomOnScroll: S, zoomOnPinch: g, panOnScroll: y, panOnScrollSpeed: N, panOnScrollMode: E, zoomOnDoubleClick: b, panOnDrag: P, defaultViewport: I, translateExtent: L, minZoom: $, maxZoom: j, preventScrolling: z, onSelectionContextMenu: v, noWheelClassName: T, noPanClassName: C, disableKeyboardA11y: O, onViewportChange: R, isControlledViewport: k }) {
  const { nodesSelectionActive: _, userSelectionActive: A } = Q(km), D = Zt(l, { target: is }), H = Zt(p, { target: is }), F = H || P, Y = H || y, W = f && F !== !0, V = D || A || W;
  return am({ deleteKeyCode: u, multiSelectionKeyCode: m }), M.jsx(lm, { onPaneContextMenu: i, elementsSelectable: x, zoomOnScroll: S, zoomOnPinch: g, panOnScroll: Y, panOnScrollSpeed: N, panOnScrollMode: E, zoomOnDoubleClick: b, panOnDrag: !D && F, defaultViewport: I, translateExtent: L, minZoom: $, maxZoom: j, zoomActivationKeyCode: w, preventScrolling: z, noWheelClassName: T, noPanClassName: C, onViewportChange: R, isControlledViewport: k, paneClickDistance: c, children: M.jsxs(pm, { onSelectionStart: a, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: r, onPaneMouseLeave: o, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: F, isSelecting: !!V, selectionMode: d, selectionKeyPressed: D, selectionOnDrag: W, children: [e, _ && M.jsx(Cm, { onSelectionContextMenu: v, noPanClassName: C, disableKeyboardA11y: O })] }) });
}
ac.displayName = "FlowRenderer";
const Om = le(ac), Mm = (e) => (t) => e ? _a(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, !0).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function Am(e) {
  return Q(_e(Mm(e), [e]), ie);
}
const Tm = (e) => e.updateNodeInternals;
function Pm() {
  const e = Q(Tm), [t] = be(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
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
  return ne(() => () => {
    t == null || t.disconnect();
  }, [t]), t;
}
function Rm({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = oe(), i = te(null), s = te(null), c = te(e.sourcePosition), u = te(e.targetPosition), l = te(t), f = n && !!e.internals.handleBounds;
  return ne(() => {
    i.current && !e.hidden && (!f || s.current !== i.current) && (s.current && (r == null || r.unobserve(s.current)), r == null || r.observe(i.current), s.current = i.current);
  }, [f, e.hidden]), ne(() => () => {
    s.current && (r == null || r.unobserve(s.current), s.current = null);
  }, []), ne(() => {
    if (i.current) {
      const d = l.current !== t, a = c.current !== e.sourcePosition, h = u.current !== e.targetPosition;
      (d || a || h) && (l.current = t, c.current = e.sourcePosition, u.current = e.targetPosition, o.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e.id, { id: e.id, nodeElement: i.current, force: !0 }]])));
    }
  }, [e.id, t, e.sourcePosition, e.targetPosition]), i;
}
function Im({ id: e, onClick: t, onMouseEnter: n, onMouseMove: r, onMouseLeave: o, onContextMenu: i, onDoubleClick: s, nodesDraggable: c, elementsSelectable: u, nodesConnectable: l, nodesFocusable: f, resizeObserver: d, noDragClassName: a, noPanClassName: h, disableKeyboardA11y: m, rfId: p, nodeTypes: w, nodeClickDistance: x, onError: S }) {
  const { node: g, internals: y, isParent: N } = Q((V) => {
    const B = V.nodeLookup.get(e), q = V.parentLookup.has(e);
    return {
      node: B,
      internals: B.internals,
      isParent: q
    };
  }, ie);
  let E = g.type || "default", b = (w == null ? void 0 : w[E]) || os[E];
  b === void 0 && (S == null || S("003", ve.error003(E)), E = "default", b = os.default);
  const P = !!(g.draggable || c && typeof g.draggable > "u"), I = !!(g.selectable || u && typeof g.selectable > "u"), L = !!(g.connectable || l && typeof g.connectable > "u"), $ = !!(g.focusable || f && typeof g.focusable > "u"), j = oe(), z = Oa(g), v = Rm({ node: g, nodeType: E, hasDimensions: z, resizeObserver: d }), T = oc({
    nodeRef: v,
    disabled: g.hidden || !P,
    noDragClassName: a,
    handleSelector: g.dragHandle,
    nodeId: e,
    isSelectable: I,
    nodeClickDistance: x
  }), C = ic();
  if (g.hidden)
    return null;
  const O = je(g), R = Em(g), k = I || P || t || n || r || o, _ = n ? (V) => n(V, { ...y.userNode }) : void 0, A = r ? (V) => r(V, { ...y.userNode }) : void 0, D = o ? (V) => o(V, { ...y.userNode }) : void 0, H = i ? (V) => i(V, { ...y.userNode }) : void 0, F = s ? (V) => s(V, { ...y.userNode }) : void 0, Y = (V) => {
    const { selectNodesOnDrag: B, nodeDragThreshold: q } = j.getState();
    I && (!B || !P || q > 0) && oo({
      id: e,
      store: j,
      nodeRef: v
    }), t && t(V, { ...y.userNode });
  }, W = (V) => {
    if (!(Ta(V.nativeEvent) || m))
      if (xa.includes(V.key) && I) {
        const B = V.key === "Escape";
        oo({
          id: e,
          store: j,
          unselect: B,
          nodeRef: v
        });
      } else P && g.selected && Object.prototype.hasOwnProperty.call(Gn, V.key) && (V.preventDefault(), j.setState({
        ariaLiveMessage: `Moved selected node ${V.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~y.positionAbsolute.x}, y: ${~~y.positionAbsolute.y}`
      }), C({
        direction: Gn[V.key],
        factor: V.shiftKey ? 4 : 1
      }));
  };
  return M.jsx("div", { className: ue([
    "react-flow__node",
    `react-flow__node-${E}`,
    {
      // this is overwritable by passing `nopan` as a class name
      [h]: P
    },
    g.className,
    {
      selected: g.selected,
      selectable: I,
      parent: N,
      draggable: P,
      dragging: T
    }
  ]), ref: v, style: {
    zIndex: y.z,
    transform: `translate(${y.positionAbsolute.x}px,${y.positionAbsolute.y}px)`,
    pointerEvents: k ? "all" : "none",
    visibility: z ? "visible" : "hidden",
    ...g.style,
    ...R
  }, "data-id": e, "data-testid": `rf__node-${e}`, onMouseEnter: _, onMouseMove: A, onMouseLeave: D, onContextMenu: H, onClick: Y, onDoubleClick: F, onKeyDown: $ ? W : void 0, tabIndex: $ ? 0 : void 0, role: $ ? "button" : void 0, "aria-describedby": m ? void 0 : `${Ka}-${p}`, "aria-label": g.ariaLabel, children: M.jsx(mm, { value: e, children: M.jsx(b, { id: e, data: g.data, type: E, positionAbsoluteX: y.positionAbsolute.x, positionAbsoluteY: y.positionAbsolute.y, selected: g.selected ?? !1, selectable: I, draggable: P, deletable: g.deletable ?? !0, isConnectable: L, sourcePosition: g.sourcePosition, targetPosition: g.targetPosition, dragging: T, dragHandle: g.dragHandle, zIndex: y.z, parentId: g.parentId, ...O }) }) });
}
const Dm = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError
});
function cc(e) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, onError: i } = Q(Dm, ie), s = Am(e.onlyRenderVisibleElements), c = Pm();
  return M.jsx("div", { className: "react-flow__nodes", style: hr, children: s.map((u) => (
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
    M.jsx(Im, { id: u, nodeTypes: e.nodeTypes, nodeExtent: e.nodeExtent, onClick: e.onNodeClick, onMouseEnter: e.onNodeMouseEnter, onMouseMove: e.onNodeMouseMove, onMouseLeave: e.onNodeMouseLeave, onContextMenu: e.onNodeContextMenu, onDoubleClick: e.onNodeDoubleClick, noDragClassName: e.noDragClassName, noPanClassName: e.noPanClassName, rfId: e.rfId, disableKeyboardA11y: e.disableKeyboardA11y, resizeObserver: c, nodesDraggable: t, nodesConnectable: n, nodesFocusable: r, elementsSelectable: o, nodeClickDistance: e.nodeClickDistance, onError: i }, u)
  )) });
}
cc.displayName = "NodeRenderer";
const $m = le(cc);
function Lm(e) {
  return Q(_e((n) => {
    if (!e)
      return n.edges.map((o) => o.id);
    const r = [];
    if (n.width && n.height)
      for (const o of n.edges) {
        const i = n.nodeLookup.get(o.source), s = n.nodeLookup.get(o.target);
        i && s && Ip({
          sourceNode: i,
          targetNode: s,
          width: n.width,
          height: n.height,
          transform: n.transform
        }) && r.push(o.id);
      }
    return r;
  }, [e]), ie);
}
const jm = ({ color: e = "none", strokeWidth: t = 1 }) => M.jsx("polyline", { style: {
  stroke: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", points: "-5,-4 0,0 -5,4" }), zm = ({ color: e = "none", strokeWidth: t = 1 }) => M.jsx("polyline", { style: {
  stroke: e,
  fill: e,
  strokeWidth: t
}, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" }), ss = {
  [Xe.Arrow]: jm,
  [Xe.ArrowClosed]: zm
};
function Hm(e) {
  const t = oe();
  return Oe(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(ss, e) ? ss[e] : ((i = (o = t.getState()).onError) == null || i.call(o, "009", ve.error009(e)), null);
  }, [e]);
}
const Vm = ({ id: e, type: t, color: n, width: r = 12.5, height: o = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: c = "auto-start-reverse" }) => {
  const u = Hm(t);
  return u ? M.jsx("marker", { className: "react-flow__arrowhead", id: e, markerWidth: `${r}`, markerHeight: `${o}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: c, refX: "0", refY: "0", children: M.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, uc = ({ defaultColor: e, rfId: t }) => {
  const n = Q((i) => i.edges), r = Q((i) => i.defaultEdgeOptions), o = Oe(() => Vp(n, {
    id: t,
    defaultColor: e,
    defaultMarkerStart: r == null ? void 0 : r.markerStart,
    defaultMarkerEnd: r == null ? void 0 : r.markerEnd
  }), [n, r, t, e]);
  return o.length ? M.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: M.jsx("defs", { children: o.map((i) => M.jsx(Vm, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
uc.displayName = "MarkerDefinitions";
var Bm = le(uc);
function lc({ x: e, y: t, label: n, labelStyle: r, labelShowBg: o = !0, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: c = 2, children: u, className: l, ...f }) {
  const [d, a] = be({ x: 1, y: 0, width: 0, height: 0 }), h = ue(["react-flow__edge-textwrapper", l]), m = te(null);
  return ne(() => {
    if (m.current) {
      const p = m.current.getBBox();
      a({
        x: p.x,
        y: p.y,
        width: p.width,
        height: p.height
      });
    }
  }, [n]), n ? M.jsxs("g", { transform: `translate(${e - d.width / 2} ${t - d.height / 2})`, className: h, visibility: d.width ? "visible" : "hidden", ...f, children: [o && M.jsx("rect", { width: d.width + 2 * s[0], x: -s[0], y: -s[1], height: d.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: c, ry: c }), M.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: m, style: r, children: n }), u] }) : null;
}
lc.displayName = "EdgeText";
const Fm = le(lc);
function on({ path: e, labelX: t, labelY: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, interactionWidth: l = 20, ...f }) {
  return M.jsxs(M.Fragment, { children: [M.jsx("path", { ...f, d: e, fill: "none", className: ue(["react-flow__edge-path", f.className]) }), l && M.jsx("path", { d: e, fill: "none", strokeOpacity: 0, strokeWidth: l, className: "react-flow__edge-interaction" }), r && Ce(t) && Ce(n) ? M.jsx(Fm, { x: t, y: n, label: r, labelStyle: o, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u }) : null] });
}
function as({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === G.Left || e === G.Right ? [0.5 * (t + r), n] : [t, 0.5 * (n + o)];
}
function dc({ sourceX: e, sourceY: t, sourcePosition: n = G.Bottom, targetX: r, targetY: o, targetPosition: i = G.Top }) {
  const [s, c] = as({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o
  }), [u, l] = as({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t
  }), [f, d, a, h] = Ra({
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
    f,
    d,
    a,
    h
  ];
}
function fc(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s, targetPosition: c, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: a, labelBgBorderRadius: h, style: m, markerEnd: p, markerStart: w, interactionWidth: x }) => {
    const [S, g, y] = dc({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: c
    }), N = e.isInternal ? void 0 : t;
    return M.jsx(on, { id: N, path: S, labelX: g, labelY: y, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: a, labelBgBorderRadius: h, style: m, markerEnd: p, markerStart: w, interactionWidth: x });
  });
}
const Ym = fc({ isInternal: !1 }), hc = fc({ isInternal: !0 });
Ym.displayName = "SimpleBezierEdge";
hc.displayName = "SimpleBezierEdgeInternal";
function pc(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: f, labelBgBorderRadius: d, style: a, sourcePosition: h = G.Bottom, targetPosition: m = G.Top, markerEnd: p, markerStart: w, pathOptions: x, interactionWidth: S }) => {
    const [g, y, N] = eo({
      sourceX: n,
      sourceY: r,
      sourcePosition: h,
      targetX: o,
      targetY: i,
      targetPosition: m,
      borderRadius: x == null ? void 0 : x.borderRadius,
      offset: x == null ? void 0 : x.offset
    }), E = e.isInternal ? void 0 : t;
    return M.jsx(on, { id: E, path: g, labelX: y, labelY: N, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: f, labelBgBorderRadius: d, style: a, markerEnd: p, markerStart: w, interactionWidth: S });
  });
}
const gc = pc({ isInternal: !1 }), mc = pc({ isInternal: !0 });
gc.displayName = "SmoothStepEdge";
mc.displayName = "SmoothStepEdgeInternal";
function yc(e) {
  return le(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return M.jsx(gc, { ...n, id: r, pathOptions: Oe(() => {
      var i;
      return { borderRadius: 0, offset: (i = n.pathOptions) == null ? void 0 : i.offset };
    }, [(o = n.pathOptions) == null ? void 0 : o.offset]) });
  });
}
const Wm = yc({ isInternal: !1 }), xc = yc({ isInternal: !0 });
Wm.displayName = "StepEdge";
xc.displayName = "StepEdgeInternal";
function wc(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: f, labelBgBorderRadius: d, style: a, markerEnd: h, markerStart: m, interactionWidth: p }) => {
    const [w, x, S] = bo({ sourceX: n, sourceY: r, targetX: o, targetY: i }), g = e.isInternal ? void 0 : t;
    return M.jsx(on, { id: g, path: w, labelX: x, labelY: S, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: l, labelBgPadding: f, labelBgBorderRadius: d, style: a, markerEnd: h, markerStart: m, interactionWidth: p });
  });
}
const Xm = wc({ isInternal: !1 }), vc = wc({ isInternal: !0 });
Xm.displayName = "StraightEdge";
vc.displayName = "StraightEdgeInternal";
function bc(e) {
  return le(({ id: t, sourceX: n, sourceY: r, targetX: o, targetY: i, sourcePosition: s = G.Bottom, targetPosition: c = G.Top, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: a, labelBgBorderRadius: h, style: m, markerEnd: p, markerStart: w, pathOptions: x, interactionWidth: S }) => {
    const [g, y, N] = Ia({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: o,
      targetY: i,
      targetPosition: c,
      curvature: x == null ? void 0 : x.curvature
    }), E = e.isInternal ? void 0 : t;
    return M.jsx(on, { id: E, path: g, labelX: y, labelY: N, label: u, labelStyle: l, labelShowBg: f, labelBgStyle: d, labelBgPadding: a, labelBgBorderRadius: h, style: m, markerEnd: p, markerStart: w, interactionWidth: S });
  });
}
const Gm = bc({ isInternal: !1 }), _c = bc({ isInternal: !0 });
Gm.displayName = "BezierEdge";
_c.displayName = "BezierEdgeInternal";
const cs = {
  default: _c,
  straight: vc,
  step: xc,
  smoothstep: mc,
  simplebezier: hc
}, us = {
  sourceX: null,
  sourceY: null,
  targetX: null,
  targetY: null,
  sourcePosition: null,
  targetPosition: null
}, qm = (e, t, n) => n === G.Left ? e - t : n === G.Right ? e + t : e, Um = (e, t, n) => n === G.Top ? e - t : n === G.Bottom ? e + t : e, ls = "react-flow__edgeupdater";
function ds({ position: e, centerX: t, centerY: n, radius: r = 10, onMouseDown: o, onMouseEnter: i, onMouseOut: s, type: c }) {
  return M.jsx("circle", { onMouseDown: o, onMouseEnter: i, onMouseOut: s, className: ue([ls, `${ls}-${c}`]), cx: qm(t, r, e), cy: Um(n, r, e), r, stroke: "transparent", fill: "transparent" });
}
function Km({ isReconnectable: e, reconnectRadius: t, edge: n, sourceX: r, sourceY: o, targetX: i, targetY: s, sourcePosition: c, targetPosition: u, onReconnect: l, onReconnectStart: f, onReconnectEnd: d, setReconnecting: a, setUpdateHover: h }) {
  const m = oe(), p = (y, N) => {
    if (y.button !== 0)
      return;
    const { autoPanOnConnect: E, domNode: b, isValidConnection: P, connectionMode: I, connectionRadius: L, lib: $, onConnectStart: j, onConnectEnd: z, cancelConnection: v, nodeLookup: T, rfId: C, panBy: O, updateConnection: R } = m.getState(), k = N.type === "target";
    a(!0), f == null || f(y, n, N.type);
    const _ = (D, H) => {
      a(!1), d == null || d(D, n, N.type, H);
    }, A = (D) => l == null ? void 0 : l(n, D);
    ro.onPointerDown(y.nativeEvent, {
      autoPanOnConnect: E,
      connectionMode: I,
      connectionRadius: L,
      domNode: b,
      handleId: N.id,
      nodeId: N.nodeId,
      nodeLookup: T,
      isTarget: k,
      edgeUpdaterType: N.type,
      lib: $,
      flowId: C,
      cancelConnection: v,
      panBy: O,
      isValidConnection: P,
      onConnect: A,
      onConnectStart: j,
      onConnectEnd: z,
      onReconnectEnd: _,
      updateConnection: R,
      getTransform: () => m.getState().transform,
      getFromHandle: () => m.getState().connection.fromHandle
    });
  }, w = (y) => p(y, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), x = (y) => p(y, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), S = () => h(!0), g = () => h(!1);
  return M.jsxs(M.Fragment, { children: [(e === !0 || e === "source") && M.jsx(ds, { position: c, centerX: r, centerY: o, radius: t, onMouseDown: w, onMouseEnter: S, onMouseOut: g, type: "source" }), (e === !0 || e === "target") && M.jsx(ds, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: x, onMouseEnter: S, onMouseOut: g, type: "target" })] });
}
function Zm({ id: e, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: r, onClick: o, onDoubleClick: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: l, reconnectRadius: f, onReconnect: d, onReconnectStart: a, onReconnectEnd: h, rfId: m, edgeTypes: p, noPanClassName: w, onError: x, disableKeyboardA11y: S }) {
  let g = Q((X) => X.edgeLookup.get(e));
  const y = Q((X) => X.defaultEdgeOptions);
  g = y ? { ...y, ...g } : g;
  let N = g.type || "default", E = (p == null ? void 0 : p[N]) || cs[N];
  E === void 0 && (x == null || x("011", ve.error011(N)), N = "default", E = cs.default);
  const b = !!(g.focusable || t && typeof g.focusable > "u"), P = typeof d < "u" && (g.reconnectable || n && typeof g.reconnectable > "u"), I = !!(g.selectable || r && typeof g.selectable > "u"), L = te(null), [$, j] = be(!1), [z, v] = be(!1), T = oe(), { zIndex: C, sourceX: O, sourceY: R, targetX: k, targetY: _, sourcePosition: A, targetPosition: D } = Q(_e((X) => {
    const se = X.nodeLookup.get(g.source), J = X.nodeLookup.get(g.target);
    if (!se || !J)
      return {
        zIndex: g.zIndex,
        ...us
      };
    const de = Hp({
      id: e,
      sourceNode: se,
      targetNode: J,
      sourceHandle: g.sourceHandle || null,
      targetHandle: g.targetHandle || null,
      connectionMode: X.connectionMode,
      onError: x
    });
    return {
      zIndex: Rp({
        selected: g.selected,
        zIndex: g.zIndex,
        sourceNode: se,
        targetNode: J,
        elevateOnSelect: X.elevateEdgesOnSelect
      }),
      ...de || us
    };
  }, [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex]), ie), H = Oe(() => g.markerStart ? `url('#${to(g.markerStart, m)}')` : void 0, [g.markerStart, m]), F = Oe(() => g.markerEnd ? `url('#${to(g.markerEnd, m)}')` : void 0, [g.markerEnd, m]);
  if (g.hidden || O === null || R === null || k === null || _ === null)
    return null;
  const Y = (X) => {
    var he;
    const { addSelectedEdges: se, unselectNodesAndEdges: J, multiSelectionActive: de } = T.getState();
    I && (T.setState({ nodesSelectionActive: !1 }), g.selected && de ? (J({ nodes: [], edges: [g] }), (he = L.current) == null || he.blur()) : se([e])), o && o(X, g);
  }, W = i ? (X) => {
    i(X, { ...g });
  } : void 0, V = s ? (X) => {
    s(X, { ...g });
  } : void 0, B = c ? (X) => {
    c(X, { ...g });
  } : void 0, q = u ? (X) => {
    u(X, { ...g });
  } : void 0, Z = l ? (X) => {
    l(X, { ...g });
  } : void 0, U = (X) => {
    var se;
    if (!S && xa.includes(X.key) && I) {
      const { unselectNodesAndEdges: J, addSelectedEdges: de } = T.getState();
      X.key === "Escape" ? ((se = L.current) == null || se.blur(), J({ edges: [g] })) : de([e]);
    }
  };
  return M.jsx("svg", { style: { zIndex: C }, children: M.jsxs("g", { className: ue([
    "react-flow__edge",
    `react-flow__edge-${N}`,
    g.className,
    w,
    {
      selected: g.selected,
      animated: g.animated,
      inactive: !I && !o,
      updating: $,
      selectable: I
    }
  ]), onClick: Y, onDoubleClick: W, onContextMenu: V, onMouseEnter: B, onMouseMove: q, onMouseLeave: Z, onKeyDown: b ? U : void 0, tabIndex: b ? 0 : void 0, role: b ? "button" : "img", "data-id": e, "data-testid": `rf__edge-${e}`, "aria-label": g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`, "aria-describedby": b ? `${Za}-${m}` : void 0, ref: L, children: [!z && M.jsx(E, { id: e, source: g.source, target: g.target, type: g.type, selected: g.selected, animated: g.animated, selectable: I, deletable: g.deletable ?? !0, label: g.label, labelStyle: g.labelStyle, labelShowBg: g.labelShowBg, labelBgStyle: g.labelBgStyle, labelBgPadding: g.labelBgPadding, labelBgBorderRadius: g.labelBgBorderRadius, sourceX: O, sourceY: R, targetX: k, targetY: _, sourcePosition: A, targetPosition: D, data: g.data, style: g.style, sourceHandleId: g.sourceHandle, targetHandleId: g.targetHandle, markerStart: H, markerEnd: F, pathOptions: "pathOptions" in g ? g.pathOptions : void 0, interactionWidth: g.interactionWidth }), P && M.jsx(Km, { edge: g, isReconnectable: P, reconnectRadius: f, onReconnect: d, onReconnectStart: a, onReconnectEnd: h, sourceX: O, sourceY: R, targetX: k, targetY: _, sourcePosition: A, targetPosition: D, setUpdateHover: j, setReconnecting: v })] }) });
}
const Qm = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError
});
function Sc({ defaultMarkerColor: e, onlyRenderVisibleElements: t, rfId: n, edgeTypes: r, noPanClassName: o, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: c, onEdgeMouseMove: u, onEdgeMouseLeave: l, onEdgeClick: f, reconnectRadius: d, onEdgeDoubleClick: a, onReconnectStart: h, onReconnectEnd: m, disableKeyboardA11y: p }) {
  const { edgesFocusable: w, edgesReconnectable: x, elementsSelectable: S, onError: g } = Q(Qm, ie), y = Lm(t);
  return M.jsxs("div", { className: "react-flow__edges", children: [M.jsx(Bm, { defaultColor: e, rfId: n }), y.map((N) => M.jsx(Zm, { id: N, edgesFocusable: w, edgesReconnectable: x, elementsSelectable: S, noPanClassName: o, onReconnect: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: l, onClick: f, reconnectRadius: d, onDoubleClick: a, onReconnectStart: h, onReconnectEnd: m, rfId: n, onError: g, edgeTypes: r, disableKeyboardA11y: p }, N))] });
}
Sc.displayName = "EdgeRenderer";
const Jm = le(Sc), ey = (e) => `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function ty({ children: e }) {
  const t = Q(ey);
  return M.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e });
}
function ny(e) {
  const t = Co(), n = te(!1);
  ne(() => {
    !n.current && t.viewportInitialized && e && (setTimeout(() => e(t), 1), n.current = !0);
  }, [e, t.viewportInitialized]);
}
const ry = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function oy(e) {
  const t = Q(ry), n = oe();
  return ne(() => {
    e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
  }, [e, t]), null;
}
function iy(e) {
  return e.connection.inProgress ? { ...e.connection, to: rn(e.connection.to, e.transform) } : { ...e.connection };
}
function sy(e) {
  return iy;
}
function ay(e) {
  const t = sy();
  return Q(t, ie);
}
const cy = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height
});
function uy({ containerStyle: e, style: t, type: n, component: r }) {
  const { nodesConnectable: o, width: i, height: s, isValid: c, inProgress: u } = Q(cy, ie);
  return !(i && o && u) ? null : M.jsx("svg", { style: e, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: M.jsx("g", { className: ue(["react-flow__connection", va(c)]), children: M.jsx(Ec, { style: t, type: n, CustomComponent: r, isValid: c }) }) });
}
const Ec = ({ style: e, type: t = Fe.Bezier, CustomComponent: n, isValid: r }) => {
  const { inProgress: o, from: i, fromNode: s, fromHandle: c, fromPosition: u, to: l, toNode: f, toHandle: d, toPosition: a } = ay();
  if (!o)
    return;
  if (n)
    return M.jsx(n, { connectionLineType: t, connectionLineStyle: e, fromNode: s, fromHandle: c, fromX: i.x, fromY: i.y, toX: l.x, toY: l.y, fromPosition: u, toPosition: a, connectionStatus: va(r), toNode: f, toHandle: d });
  let h = "";
  const m = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: u,
    targetX: l.x,
    targetY: l.y,
    targetPosition: a
  };
  switch (t) {
    case Fe.Bezier:
      [h] = Ia(m);
      break;
    case Fe.SimpleBezier:
      [h] = dc(m);
      break;
    case Fe.Step:
      [h] = eo({
        ...m,
        borderRadius: 0
      });
      break;
    case Fe.SmoothStep:
      [h] = eo(m);
      break;
    default:
      [h] = bo(m);
  }
  return M.jsx("path", { d: h, fill: "none", className: "react-flow__connection-path", style: e });
};
Ec.displayName = "ConnectionLine";
const ly = {};
function fs(e = ly) {
  const t = te(e), n = oe();
  ne(() => {
    var r, o;
    if (process.env.NODE_ENV === "development") {
      const i = /* @__PURE__ */ new Set([...Object.keys(t.current), ...Object.keys(e)]);
      for (const s of i)
        if (t.current[s] !== e[s]) {
          (o = (r = n.getState()).onError) == null || o.call(r, "002", ve.error002());
          break;
        }
      t.current = e;
    }
  }, [e]);
}
function dy() {
  const e = oe(), t = te(!1);
  ne(() => {
    var n, r;
    if (process.env.NODE_ENV === "development" && !t.current) {
      const o = document.querySelector(".react-flow__pane");
      o && window.getComputedStyle(o).zIndex !== "1" && ((r = (n = e.getState()).onError) == null || r.call(n, "013", ve.error013("react"))), t.current = !0;
    }
  }, []);
}
function Nc({ nodeTypes: e, edgeTypes: t, onInit: n, onNodeClick: r, onEdgeClick: o, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: l, onNodeContextMenu: f, onSelectionContextMenu: d, onSelectionStart: a, onSelectionEnd: h, connectionLineType: m, connectionLineStyle: p, connectionLineComponent: w, connectionLineContainerStyle: x, selectionKeyCode: S, selectionOnDrag: g, selectionMode: y, multiSelectionKeyCode: N, panActivationKeyCode: E, zoomActivationKeyCode: b, deleteKeyCode: P, onlyRenderVisibleElements: I, elementsSelectable: L, defaultViewport: $, translateExtent: j, minZoom: z, maxZoom: v, preventScrolling: T, defaultMarkerColor: C, zoomOnScroll: O, zoomOnPinch: R, panOnScroll: k, panOnScrollSpeed: _, panOnScrollMode: A, zoomOnDoubleClick: D, panOnDrag: H, onPaneClick: F, onPaneMouseEnter: Y, onPaneMouseMove: W, onPaneMouseLeave: V, onPaneScroll: B, onPaneContextMenu: q, paneClickDistance: Z, nodeClickDistance: U, onEdgeContextMenu: X, onEdgeMouseEnter: se, onEdgeMouseMove: J, onEdgeMouseLeave: de, reconnectRadius: he, onReconnect: it, onReconnectStart: pr, onReconnectEnd: gr, noDragClassName: Mt, noWheelClassName: mr, noPanClassName: At, disableKeyboardA11y: Tt, nodeExtent: yr, rfId: st, viewport: at, onViewportChange: an }) {
  return fs(e), fs(t), dy(), ny(n), oy(at), M.jsx(Om, { onPaneClick: F, onPaneMouseEnter: Y, onPaneMouseMove: W, onPaneMouseLeave: V, onPaneContextMenu: q, onPaneScroll: B, paneClickDistance: Z, deleteKeyCode: P, selectionKeyCode: S, selectionOnDrag: g, selectionMode: y, onSelectionStart: a, onSelectionEnd: h, multiSelectionKeyCode: N, panActivationKeyCode: E, zoomActivationKeyCode: b, elementsSelectable: L, zoomOnScroll: O, zoomOnPinch: R, zoomOnDoubleClick: D, panOnScroll: k, panOnScrollSpeed: _, panOnScrollMode: A, panOnDrag: H, defaultViewport: $, translateExtent: j, minZoom: z, maxZoom: v, onSelectionContextMenu: d, preventScrolling: T, noDragClassName: Mt, noWheelClassName: mr, noPanClassName: At, disableKeyboardA11y: Tt, onViewportChange: an, isControlledViewport: !!at, children: M.jsxs(ty, { children: [M.jsx(Jm, { edgeTypes: t, onEdgeClick: o, onEdgeDoubleClick: s, onReconnect: it, onReconnectStart: pr, onReconnectEnd: gr, onlyRenderVisibleElements: I, onEdgeContextMenu: X, onEdgeMouseEnter: se, onEdgeMouseMove: J, onEdgeMouseLeave: de, reconnectRadius: he, defaultMarkerColor: C, noPanClassName: At, disableKeyboardA11y: Tt, rfId: st }), M.jsx(uy, { style: p, type: m, component: w, containerStyle: x }), M.jsx("div", { className: "react-flow__edgelabel-renderer" }), M.jsx($m, { nodeTypes: e, onNodeClick: r, onNodeDoubleClick: i, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: l, onNodeContextMenu: f, nodeClickDistance: U, onlyRenderVisibleElements: I, noPanClassName: At, noDragClassName: Mt, disableKeyboardA11y: Tt, nodeExtent: yr, rfId: st }), M.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
Nc.displayName = "GraphView";
const fy = le(Nc), hs = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: c, minZoom: u = 0.5, maxZoom: l = 2, nodeOrigin: f, nodeExtent: d } = {}) => {
  const a = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), w = r ?? t ?? [], x = n ?? e ?? [], S = f ?? [0, 0], g = d ?? qt;
  ja(m, p, w);
  const y = no(x, a, h, {
    nodeOrigin: S,
    nodeExtent: g,
    elevateNodesOnSelect: !1
  });
  let N = [0, 0, 1];
  if (s && o && i) {
    const E = nn(a, {
      filter: (L) => !!((L.width || L.initialWidth) && (L.height || L.initialHeight))
    }), { x: b, y: P, zoom: I } = wo(E, o, i, u, l, (c == null ? void 0 : c.padding) ?? 0.1);
    N = [b, P, I];
  }
  return {
    rfId: "1",
    width: 0,
    height: 0,
    transform: N,
    nodes: x,
    nodesInitialized: y,
    nodeLookup: a,
    parentLookup: h,
    edges: w,
    edgeLookup: p,
    connectionLookup: m,
    onNodesChange: null,
    onEdgesChange: null,
    hasDefaultNodes: n !== void 0,
    hasDefaultEdges: r !== void 0,
    panZoom: null,
    minZoom: u,
    maxZoom: l,
    translateExtent: qt,
    nodeExtent: g,
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    connectionMode: rt.Strict,
    domNode: null,
    paneDragging: !1,
    noPanClassName: "nopan",
    nodeOrigin: S,
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
    connection: { ...wa },
    connectionClickStartHandle: null,
    connectOnClick: !0,
    ariaLiveMessage: "",
    autoPanOnConnect: !0,
    autoPanOnNodeDrag: !0,
    autoPanSpeed: 15,
    connectionRadius: 20,
    onError: ka,
    isValidConnection: void 0,
    onSelectionChangeHandlers: [],
    lib: "react",
    debug: !1
  };
}, hy = ({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, width: o, height: i, fitView: s, fitViewOptions: c, minZoom: u, maxZoom: l, nodeOrigin: f, nodeExtent: d }) => Mg((a, h) => {
  async function m() {
    const { nodeLookup: p, panZoom: w, fitViewOptions: x, fitViewResolver: S, width: g, height: y, minZoom: N, maxZoom: E } = h();
    w && (await kp({
      nodes: p,
      width: g,
      height: y,
      panZoom: w,
      minZoom: N,
      maxZoom: E
    }, x), S == null || S.resolve(!0), a({ fitViewResolver: null }));
  }
  return {
    ...hs({
      nodes: e,
      edges: t,
      width: o,
      height: i,
      fitView: s,
      fitViewOptions: c,
      minZoom: u,
      maxZoom: l,
      nodeOrigin: f,
      nodeExtent: d,
      defaultNodes: n,
      defaultEdges: r
    }),
    setNodes: (p) => {
      const { nodeLookup: w, parentLookup: x, nodeOrigin: S, elevateNodesOnSelect: g, fitViewQueued: y } = h(), N = no(p, w, x, {
        nodeOrigin: S,
        nodeExtent: d,
        elevateNodesOnSelect: g,
        checkEquality: !0
      });
      y && N ? (m(), a({ nodes: p, nodesInitialized: N, fitViewQueued: !1, fitViewOptions: void 0 })) : a({ nodes: p, nodesInitialized: N });
    },
    setEdges: (p) => {
      const { connectionLookup: w, edgeLookup: x } = h();
      ja(w, x, p), a({ edges: p });
    },
    setDefaultNodesAndEdges: (p, w) => {
      if (p) {
        const { setNodes: x } = h();
        x(p), a({ hasDefaultNodes: !0 });
      }
      if (w) {
        const { setEdges: x } = h();
        x(w), a({ hasDefaultEdges: !0 });
      }
    },
    /*
     * Every node gets registerd at a ResizeObserver. Whenever a node
     * changes its dimensions, this function is called to measure the
     * new dimensions and update the nodes.
     */
    updateNodeInternals: (p) => {
      const { triggerNodeChanges: w, nodeLookup: x, parentLookup: S, domNode: g, nodeOrigin: y, nodeExtent: N, debug: E, fitViewQueued: b } = h(), { changes: P, updatedInternals: I } = Xp(p, x, S, g, y, N);
      I && (Fp(x, S, { nodeOrigin: y, nodeExtent: N }), b ? (m(), a({ fitViewQueued: !1, fitViewOptions: void 0 })) : a({}), (P == null ? void 0 : P.length) > 0 && (E && console.log("React Flow: trigger node changes", P), w == null || w(P)));
    },
    updateNodePositions: (p, w = !1) => {
      const x = [], S = [], { nodeLookup: g, triggerNodeChanges: y } = h();
      for (const [N, E] of p) {
        const b = g.get(N), P = !!(b != null && b.expandParent && (b != null && b.parentId) && (E != null && E.position)), I = {
          id: N,
          type: "position",
          position: P ? {
            x: Math.max(0, E.position.x),
            y: Math.max(0, E.position.y)
          } : E.position,
          dragging: w
        };
        P && b.parentId && x.push({
          id: N,
          parentId: b.parentId,
          rect: {
            ...E.internals.positionAbsolute,
            width: E.measured.width ?? 0,
            height: E.measured.height ?? 0
          }
        }), S.push(I);
      }
      if (x.length > 0) {
        const { parentLookup: N, nodeOrigin: E } = h(), b = No(x, g, N, E);
        S.push(...b);
      }
      y(S);
    },
    triggerNodeChanges: (p) => {
      const { onNodesChange: w, setNodes: x, nodes: S, hasDefaultNodes: g, debug: y } = h();
      if (p != null && p.length) {
        if (g) {
          const N = ec(p, S);
          x(N);
        }
        y && console.log("React Flow: trigger node changes", p), w == null || w(p);
      }
    },
    triggerEdgeChanges: (p) => {
      const { onEdgesChange: w, setEdges: x, edges: S, hasDefaultEdges: g, debug: y } = h();
      if (p != null && p.length) {
        if (g) {
          const N = tc(p, S);
          x(N);
        }
        y && console.log("React Flow: trigger edge changes", p), w == null || w(p);
      }
    },
    addSelectedNodes: (p) => {
      const { multiSelectionActive: w, edgeLookup: x, nodeLookup: S, triggerNodeChanges: g, triggerEdgeChanges: y } = h();
      if (w) {
        const N = p.map((E) => Ge(E, !0));
        g(N);
        return;
      }
      g(dt(S, /* @__PURE__ */ new Set([...p]), !0)), y(dt(x));
    },
    addSelectedEdges: (p) => {
      const { multiSelectionActive: w, edgeLookup: x, nodeLookup: S, triggerNodeChanges: g, triggerEdgeChanges: y } = h();
      if (w) {
        const N = p.map((E) => Ge(E, !0));
        y(N);
        return;
      }
      y(dt(x, /* @__PURE__ */ new Set([...p]))), g(dt(S, /* @__PURE__ */ new Set(), !0));
    },
    unselectNodesAndEdges: ({ nodes: p, edges: w } = {}) => {
      const { edges: x, nodes: S, nodeLookup: g, triggerNodeChanges: y, triggerEdgeChanges: N } = h(), E = p || S, b = w || x, P = E.map((L) => {
        const $ = g.get(L.id);
        return $ && ($.selected = !1), Ge(L.id, !1);
      }), I = b.map((L) => Ge(L.id, !1));
      y(P), N(I);
    },
    setMinZoom: (p) => {
      const { panZoom: w, maxZoom: x } = h();
      w == null || w.setScaleExtent([p, x]), a({ minZoom: p });
    },
    setMaxZoom: (p) => {
      const { panZoom: w, minZoom: x } = h();
      w == null || w.setScaleExtent([x, p]), a({ maxZoom: p });
    },
    setTranslateExtent: (p) => {
      var w;
      (w = h().panZoom) == null || w.setTranslateExtent(p), a({ translateExtent: p });
    },
    setPaneClickDistance: (p) => {
      var w;
      (w = h().panZoom) == null || w.setClickDistance(p);
    },
    resetSelectedElements: () => {
      const { edges: p, nodes: w, triggerNodeChanges: x, triggerEdgeChanges: S, elementsSelectable: g } = h();
      if (!g)
        return;
      const y = w.reduce((E, b) => b.selected ? [...E, Ge(b.id, !1)] : E, []), N = p.reduce((E, b) => b.selected ? [...E, Ge(b.id, !1)] : E, []);
      x(y), S(N);
    },
    setNodeExtent: (p) => {
      const { nodes: w, nodeLookup: x, parentLookup: S, nodeOrigin: g, elevateNodesOnSelect: y, nodeExtent: N } = h();
      p[0][0] === N[0][0] && p[0][1] === N[0][1] && p[1][0] === N[1][0] && p[1][1] === N[1][1] || (no(w, x, S, {
        nodeOrigin: g,
        nodeExtent: p,
        elevateNodesOnSelect: y,
        checkEquality: !1
      }), a({ nodeExtent: p }));
    },
    panBy: (p) => {
      const { transform: w, width: x, height: S, panZoom: g, translateExtent: y } = h();
      return Gp({ delta: p, panZoom: g, transform: w, translateExtent: y, width: x, height: S });
    },
    cancelConnection: () => {
      a({
        connection: { ...wa }
      });
    },
    updateConnection: (p) => {
      a({ connection: p });
    },
    reset: () => a({ ...hs() })
  };
}, Object.is);
function py({ initialNodes: e, initialEdges: t, defaultNodes: n, defaultEdges: r, initialWidth: o, initialHeight: i, initialMinZoom: s, initialMaxZoom: c, initialFitViewOptions: u, fitView: l, nodeOrigin: f, nodeExtent: d, children: a }) {
  const [h] = be(() => hy({
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
    nodeOrigin: f,
    nodeExtent: d
  }));
  return M.jsx(Rg, { value: h, children: M.jsx(nm, { children: a }) });
}
function gy({ children: e, nodes: t, edges: n, defaultNodes: r, defaultEdges: o, width: i, height: s, fitView: c, fitViewOptions: u, minZoom: l, maxZoom: f, nodeOrigin: d, nodeExtent: a }) {
  return Ct(dr) ? M.jsx(M.Fragment, { children: e }) : M.jsx(py, { initialNodes: t, initialEdges: n, defaultNodes: r, defaultEdges: o, initialWidth: i, initialHeight: s, fitView: c, initialFitViewOptions: u, initialMinZoom: l, initialMaxZoom: f, nodeOrigin: d, nodeExtent: a, children: e });
}
const my = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0
};
function yy({ nodes: e, edges: t, defaultNodes: n, defaultEdges: r, className: o, nodeTypes: i, edgeTypes: s, onNodeClick: c, onEdgeClick: u, onInit: l, onMove: f, onMoveStart: d, onMoveEnd: a, onConnect: h, onConnectStart: m, onConnectEnd: p, onClickConnectStart: w, onClickConnectEnd: x, onNodeMouseEnter: S, onNodeMouseMove: g, onNodeMouseLeave: y, onNodeContextMenu: N, onNodeDoubleClick: E, onNodeDragStart: b, onNodeDrag: P, onNodeDragStop: I, onNodesDelete: L, onEdgesDelete: $, onDelete: j, onSelectionChange: z, onSelectionDragStart: v, onSelectionDrag: T, onSelectionDragStop: C, onSelectionContextMenu: O, onSelectionStart: R, onSelectionEnd: k, onBeforeDelete: _, connectionMode: A, connectionLineType: D = Fe.Bezier, connectionLineStyle: H, connectionLineComponent: F, connectionLineContainerStyle: Y, deleteKeyCode: W = "Backspace", selectionKeyCode: V = "Shift", selectionOnDrag: B = !1, selectionMode: q = _t.Full, panActivationKeyCode: Z = "Space", multiSelectionKeyCode: U = Xn() ? "Meta" : "Control", zoomActivationKeyCode: X = Xn() ? "Meta" : "Control", snapToGrid: se, snapGrid: J, onlyRenderVisibleElements: de = !1, selectNodesOnDrag: he, nodesDraggable: it, nodesConnectable: pr, nodesFocusable: gr, nodeOrigin: Mt = Qa, edgesFocusable: mr, edgesReconnectable: At, elementsSelectable: Tt = !0, defaultViewport: yr = Xg, minZoom: st = 0.5, maxZoom: at = 2, translateExtent: an = qt, preventScrolling: Tc = !0, nodeExtent: xr, defaultMarkerColor: Pc = "#b1b1b7", zoomOnScroll: Rc = !0, zoomOnPinch: Ic = !0, panOnScroll: Dc = !1, panOnScrollSpeed: $c = 0.5, panOnScrollMode: Lc = et.Free, zoomOnDoubleClick: jc = !0, panOnDrag: zc = !0, onPaneClick: Hc, onPaneMouseEnter: Vc, onPaneMouseMove: Bc, onPaneMouseLeave: Fc, onPaneScroll: Yc, onPaneContextMenu: Wc, paneClickDistance: Oo = 0, nodeClickDistance: Xc = 0, children: Gc, onReconnect: qc, onReconnectStart: Uc, onReconnectEnd: Kc, onEdgeContextMenu: Zc, onEdgeDoubleClick: Qc, onEdgeMouseEnter: Jc, onEdgeMouseMove: eu, onEdgeMouseLeave: tu, reconnectRadius: nu = 10, onNodesChange: ru, onEdgesChange: ou, noDragClassName: iu = "nodrag", noWheelClassName: su = "nowheel", noPanClassName: Mo = "nopan", fitView: Ao, fitViewOptions: To, connectOnClick: au, attributionPosition: cu, proOptions: uu, defaultEdgeOptions: lu, elevateNodesOnSelect: du, elevateEdgesOnSelect: fu, disableKeyboardA11y: Po = !1, autoPanOnConnect: hu, autoPanOnNodeDrag: pu, autoPanSpeed: gu, connectionRadius: mu, isValidConnection: yu, onError: xu, style: wu, id: Ro, nodeDragThreshold: vu, viewport: bu, onViewportChange: _u, width: Su, height: Eu, colorMode: Nu = "light", debug: Cu, onScroll: cn, ...ku }, Ou) {
  const wr = Ro || "1", Mu = Kg(Nu), Au = _e((Io) => {
    Io.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), cn == null || cn(Io);
  }, [cn]);
  return M.jsx("div", { "data-testid": "rf__wrapper", ...ku, onScroll: Au, style: { ...wu, ...my }, ref: Ou, className: ue(["react-flow", o, Mu]), id: Ro, children: M.jsxs(gy, { nodes: e, edges: t, width: Su, height: Eu, fitView: Ao, fitViewOptions: To, minZoom: st, maxZoom: at, nodeOrigin: Mt, nodeExtent: xr, children: [M.jsx(fy, { onInit: l, onNodeClick: c, onEdgeClick: u, onNodeMouseEnter: S, onNodeMouseMove: g, onNodeMouseLeave: y, onNodeContextMenu: N, onNodeDoubleClick: E, nodeTypes: i, edgeTypes: s, connectionLineType: D, connectionLineStyle: H, connectionLineComponent: F, connectionLineContainerStyle: Y, selectionKeyCode: V, selectionOnDrag: B, selectionMode: q, deleteKeyCode: W, multiSelectionKeyCode: U, panActivationKeyCode: Z, zoomActivationKeyCode: X, onlyRenderVisibleElements: de, defaultViewport: yr, translateExtent: an, minZoom: st, maxZoom: at, preventScrolling: Tc, zoomOnScroll: Rc, zoomOnPinch: Ic, zoomOnDoubleClick: jc, panOnScroll: Dc, panOnScrollSpeed: $c, panOnScrollMode: Lc, panOnDrag: zc, onPaneClick: Hc, onPaneMouseEnter: Vc, onPaneMouseMove: Bc, onPaneMouseLeave: Fc, onPaneScroll: Yc, onPaneContextMenu: Wc, paneClickDistance: Oo, nodeClickDistance: Xc, onSelectionContextMenu: O, onSelectionStart: R, onSelectionEnd: k, onReconnect: qc, onReconnectStart: Uc, onReconnectEnd: Kc, onEdgeContextMenu: Zc, onEdgeDoubleClick: Qc, onEdgeMouseEnter: Jc, onEdgeMouseMove: eu, onEdgeMouseLeave: tu, reconnectRadius: nu, defaultMarkerColor: Pc, noDragClassName: iu, noWheelClassName: su, noPanClassName: Mo, rfId: wr, disableKeyboardA11y: Po, nodeExtent: xr, viewport: bu, onViewportChange: _u }), M.jsx(Ug, { nodes: e, edges: t, defaultNodes: n, defaultEdges: r, onConnect: h, onConnectStart: m, onConnectEnd: p, onClickConnectStart: w, onClickConnectEnd: x, nodesDraggable: it, nodesConnectable: pr, nodesFocusable: gr, edgesFocusable: mr, edgesReconnectable: At, elementsSelectable: Tt, elevateNodesOnSelect: du, elevateEdgesOnSelect: fu, minZoom: st, maxZoom: at, nodeExtent: xr, onNodesChange: ru, onEdgesChange: ou, snapToGrid: se, snapGrid: J, connectionMode: A, translateExtent: an, connectOnClick: au, defaultEdgeOptions: lu, fitView: Ao, fitViewOptions: To, onNodesDelete: L, onEdgesDelete: $, onDelete: j, onNodeDragStart: b, onNodeDrag: P, onNodeDragStop: I, onSelectionDrag: T, onSelectionDragStart: v, onSelectionDragStop: C, onMove: f, onMoveStart: d, onMoveEnd: a, noPanClassName: Mo, nodeOrigin: Mt, rfId: wr, autoPanOnConnect: hu, autoPanOnNodeDrag: pu, autoPanSpeed: gu, onError: xu, connectionRadius: mu, isValidConnection: yu, selectNodesOnDrag: he, nodeDragThreshold: vu, onBeforeDelete: _, paneClickDistance: Oo, debug: Cu }), M.jsx(Wg, { onSelectionChange: z }), Gc, M.jsx(Hg, { proOptions: uu, position: cu }), M.jsx(jg, { rfId: wr, disableKeyboardA11y: Po })] }) });
}
var xy = nc(yy);
function wy(e) {
  const [t, n] = be(e), r = _e((o) => n((i) => ec(o, i)), []);
  return [t, n, r];
}
function vy(e) {
  const [t, n] = be(e), r = _e((o) => n((i) => tc(o, i)), []);
  return [t, n, r];
}
function by({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return M.jsx("path", { strokeWidth: t, d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`, className: ue(["react-flow__background-pattern", n, r]) });
}
function _y({ radius: e, className: t }) {
  return M.jsx("circle", { cx: e, cy: e, r: e, className: ue(["react-flow__background-pattern", "dots", t]) });
}
var We;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(We || (We = {}));
const Sy = {
  [We.Dots]: 1,
  [We.Lines]: 1,
  [We.Cross]: 6
}, Ey = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function Cc({
  id: e,
  variant: t = We.Dots,
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
  patternClassName: f
}) {
  const d = te(null), { transform: a, patternId: h } = Q(Ey, ie), m = r || Sy[t], p = t === We.Dots, w = t === We.Cross, x = Array.isArray(n) ? n : [n, n], S = [x[0] * a[2] || 1, x[1] * a[2] || 1], g = m * a[2], y = Array.isArray(i) ? i : [i, i], N = w ? [g, g] : S, E = [
    y[0] * a[2] || 1 + N[0] / 2,
    y[1] * a[2] || 1 + N[1] / 2
  ], b = `${h}${e || ""}`;
  return M.jsxs("svg", { className: ue(["react-flow__background", l]), style: {
    ...u,
    ...hr,
    "--xy-background-color-props": c,
    "--xy-background-pattern-color-props": s
  }, ref: d, "data-testid": "rf__background", children: [M.jsx("pattern", { id: b, x: a[0] % S[0], y: a[1] % S[1], width: S[0], height: S[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${E[0]},-${E[1]})`, children: p ? M.jsx(_y, { radius: g / 2, className: f }) : M.jsx(by, { dimensions: N, lineWidth: o, variant: t, className: f }) }), M.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${b})` })] });
}
Cc.displayName = "Background";
const Ny = le(Cc);
function Cy() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: M.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function ky() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: M.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function Oy() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: M.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function My() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: M.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function Ay() {
  return M.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: M.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function Nn({ children: e, className: t, ...n }) {
  return M.jsx("button", { type: "button", className: ue(["react-flow__controls-button", t]), ...n, children: e });
}
const Ty = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom
});
function kc({ style: e, showZoom: t = !0, showFitView: n = !0, showInteractive: r = !0, fitViewOptions: o, onZoomIn: i, onZoomOut: s, onFitView: c, onInteractiveChange: u, className: l, children: f, position: d = "bottom-left", orientation: a = "vertical", "aria-label": h = "React Flow controls" }) {
  const m = oe(), { isInteractive: p, minZoomReached: w, maxZoomReached: x } = Q(Ty, ie), { zoomIn: S, zoomOut: g, fitView: y } = Co(), N = () => {
    S(), i == null || i();
  }, E = () => {
    g(), s == null || s();
  }, b = () => {
    y(o), c == null || c();
  }, P = () => {
    m.setState({
      nodesDraggable: !p,
      nodesConnectable: !p,
      elementsSelectable: !p
    }), u == null || u(!p);
  }, I = a === "horizontal" ? "horizontal" : "vertical";
  return M.jsxs(fr, { className: ue(["react-flow__controls", I, l]), position: d, style: e, "data-testid": "rf__controls", "aria-label": h, children: [t && M.jsxs(M.Fragment, { children: [M.jsx(Nn, { onClick: N, className: "react-flow__controls-zoomin", title: "zoom in", "aria-label": "zoom in", disabled: x, children: M.jsx(Cy, {}) }), M.jsx(Nn, { onClick: E, className: "react-flow__controls-zoomout", title: "zoom out", "aria-label": "zoom out", disabled: w, children: M.jsx(ky, {}) })] }), n && M.jsx(Nn, { className: "react-flow__controls-fitview", onClick: b, title: "fit view", "aria-label": "fit view", children: M.jsx(Oy, {}) }), r && M.jsx(Nn, { className: "react-flow__controls-interactive", onClick: P, title: "toggle interactivity", "aria-label": "toggle interactivity", children: p ? M.jsx(Ay, {}) : M.jsx(My, {}) }), f] });
}
kc.displayName = "Controls";
le(kc);
function Py({ id: e, x: t, y: n, width: r, height: o, style: i, color: s, strokeColor: c, strokeWidth: u, className: l, borderRadius: f, shapeRendering: d, selected: a, onClick: h }) {
  const { background: m, backgroundColor: p } = i || {}, w = s || m || p;
  return M.jsx("rect", { className: ue(["react-flow__minimap-node", { selected: a }, l]), x: t, y: n, rx: f, ry: f, width: r, height: o, style: {
    fill: w,
    stroke: c,
    strokeWidth: u
  }, shapeRendering: d, onClick: h ? (x) => h(x, e) : void 0 });
}
const Ry = le(Py), Iy = (e) => e.nodes.map((t) => t.id), $r = (e) => e instanceof Function ? e : () => e;
function Dy({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  /*
   * We need to rename the prop to be `CapitalCase` so that JSX will render it as
   * a component properly.
   */
  nodeComponent: i = Ry,
  onClick: s
}) {
  const c = Q(Iy, ie), u = $r(t), l = $r(e), f = $r(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return M.jsx(M.Fragment, { children: c.map((a) => (
    /*
     * The split of responsibilities between MiniMapNodes and
     * NodeComponentWrapper may appear weird. However, it’s designed to
     * minimize the cost of updates when individual nodes change.
     *
     * For more details, see a similar commit in `NodeRenderer/index.tsx`.
     */
    M.jsx(Ly, { id: a, nodeColorFunc: u, nodeStrokeColorFunc: l, nodeClassNameFunc: f, nodeBorderRadius: r, nodeStrokeWidth: o, NodeComponent: i, onClick: s, shapeRendering: d }, a)
  )) });
}
function $y({ id: e, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: r, nodeBorderRadius: o, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: c, onClick: u }) {
  const { node: l, x: f, y: d, width: a, height: h } = Q((m) => {
    const { internals: p } = m.nodeLookup.get(e), w = p.userNode, { x, y: S } = p.positionAbsolute, { width: g, height: y } = je(w);
    return {
      node: w,
      x,
      y: S,
      width: g,
      height: y
    };
  }, ie);
  return !l || l.hidden || !Oa(l) ? null : M.jsx(c, { x: f, y: d, width: a, height: h, style: l.style, selected: !!l.selected, className: r(l), color: t(l), borderRadius: o, strokeColor: n(l), strokeWidth: i, shapeRendering: s, onClick: u, id: l.id });
}
const Ly = le($y);
var jy = le(Dy);
const zy = 200, Hy = 150, Vy = (e) => !e.hidden, By = (e) => {
  const t = {
    x: -e.transform[0] / e.transform[2],
    y: -e.transform[1] / e.transform[2],
    width: e.width / e.transform[2],
    height: e.height / e.transform[2]
  };
  return {
    viewBB: t,
    boundingRect: e.nodeLookup.size > 0 ? Ca(nn(e.nodeLookup, { filter: Vy }), t) : t,
    rfId: e.rfId,
    panZoom: e.panZoom,
    translateExtent: e.translateExtent,
    flowWidth: e.width,
    flowHeight: e.height
  };
}, Fy = "react-flow__minimap-desc";
function Oc({
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
  maskStrokeColor: f,
  maskStrokeWidth: d,
  position: a = "bottom-right",
  onClick: h,
  onNodeClick: m,
  pannable: p = !1,
  zoomable: w = !1,
  ariaLabel: x = "React Flow mini map",
  inversePan: S,
  zoomStep: g = 10,
  offsetScale: y = 5
}) {
  const N = oe(), E = te(null), { boundingRect: b, viewBB: P, rfId: I, panZoom: L, translateExtent: $, flowWidth: j, flowHeight: z } = Q(By, ie), v = (e == null ? void 0 : e.width) ?? zy, T = (e == null ? void 0 : e.height) ?? Hy, C = b.width / v, O = b.height / T, R = Math.max(C, O), k = R * v, _ = R * T, A = y * R, D = b.x - (k - b.width) / 2 - A, H = b.y - (_ - b.height) / 2 - A, F = k + A * 2, Y = _ + A * 2, W = `${Fy}-${I}`, V = te(0), B = te();
  V.current = R, ne(() => {
    if (E.current && L)
      return B.current = tg({
        domNode: E.current,
        panZoom: L,
        getTransform: () => N.getState().transform,
        getViewScale: () => V.current
      }), () => {
        var U;
        (U = B.current) == null || U.destroy();
      };
  }, [L]), ne(() => {
    var U;
    (U = B.current) == null || U.update({
      translateExtent: $,
      width: j,
      height: z,
      inversePan: S,
      pannable: p,
      zoomStep: g,
      zoomable: w
    });
  }, [p, w, S, g, $, j, z]);
  const q = h ? (U) => {
    var J;
    const [X, se] = ((J = B.current) == null ? void 0 : J.pointer(U)) || [0, 0];
    h(U, { x: X, y: se });
  } : void 0, Z = m ? _e((U, X) => {
    const se = N.getState().nodeLookup.get(X).internals.userNode;
    m(U, se);
  }, []) : void 0;
  return M.jsx(fr, { position: a, style: {
    ...e,
    "--xy-minimap-background-color-props": typeof u == "string" ? u : void 0,
    "--xy-minimap-mask-background-color-props": typeof l == "string" ? l : void 0,
    "--xy-minimap-mask-stroke-color-props": typeof f == "string" ? f : void 0,
    "--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * R : void 0,
    "--xy-minimap-node-background-color-props": typeof r == "string" ? r : void 0,
    "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
    "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0
  }, className: ue(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: M.jsxs("svg", { width: v, height: T, viewBox: `${D} ${H} ${F} ${Y}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": W, ref: E, onClick: q, children: [x && M.jsx("title", { id: W, children: x }), M.jsx(jy, { onClick: Z, nodeColor: r, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: o, nodeStrokeWidth: s, nodeComponent: c }), M.jsx("path", { className: "react-flow__minimap-mask", d: `M${D - A},${H - A}h${F + A * 2}v${Y + A * 2}h${-F - A * 2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
Oc.displayName = "MiniMap";
le(Oc);
function Yy({ nodeId: e, position: t, variant: n = Bt.Handle, className: r, style: o = {}, children: i, color: s, minWidth: c = 10, minHeight: u = 10, maxWidth: l = Number.MAX_VALUE, maxHeight: f = Number.MAX_VALUE, keepAspectRatio: d = !1, resizeDirection: a, shouldResize: h, onResizeStart: m, onResize: p, onResizeEnd: w }) {
  const x = sc(), S = typeof e == "string" ? e : x, g = oe(), y = te(null), N = n === Bt.Line ? "right" : "bottom-right", E = t ?? N, b = te(null);
  ne(() => {
    if (!(!y.current || !S))
      return b.current || (b.current = mg({
        domNode: y.current,
        nodeId: S,
        getStoreItems: () => {
          const { nodeLookup: $, transform: j, snapGrid: z, snapToGrid: v, nodeOrigin: T, domNode: C } = g.getState();
          return {
            nodeLookup: $,
            transform: j,
            snapGrid: z,
            snapToGrid: v,
            nodeOrigin: T,
            paneDomNode: C
          };
        },
        onChange: ($, j) => {
          const { triggerNodeChanges: z, nodeLookup: v, parentLookup: T, nodeOrigin: C } = g.getState(), O = [], R = { x: $.x, y: $.y }, k = v.get(S);
          if (k && k.expandParent && k.parentId) {
            const _ = k.origin ?? C, A = $.width ?? k.measured.width ?? 0, D = $.height ?? k.measured.height ?? 0, H = {
              id: k.id,
              parentId: k.parentId,
              rect: {
                width: A,
                height: D,
                ...Ma({
                  x: $.x ?? k.position.x,
                  y: $.y ?? k.position.y
                }, { width: A, height: D }, k.parentId, v, _)
              }
            }, F = No([H], v, T, C);
            O.push(...F), R.x = $.x ? Math.max(_[0] * A, $.x) : void 0, R.y = $.y ? Math.max(_[1] * D, $.y) : void 0;
          }
          if (R.x !== void 0 && R.y !== void 0) {
            const _ = {
              id: S,
              type: "position",
              position: { ...R }
            };
            O.push(_);
          }
          if ($.width !== void 0 && $.height !== void 0) {
            const A = {
              id: S,
              type: "dimensions",
              resizing: !0,
              setAttributes: a ? a === "horizontal" ? "width" : "height" : !0,
              dimensions: {
                width: $.width,
                height: $.height
              }
            };
            O.push(A);
          }
          for (const _ of j) {
            const A = {
              ..._,
              type: "position"
            };
            O.push(A);
          }
          z(O);
        },
        onEnd: ({ width: $, height: j }) => {
          const z = {
            id: S,
            type: "dimensions",
            resizing: !1,
            dimensions: {
              width: $,
              height: j
            }
          };
          g.getState().triggerNodeChanges([z]);
        }
      })), b.current.update({
        controlPosition: E,
        boundaries: {
          minWidth: c,
          minHeight: u,
          maxWidth: l,
          maxHeight: f
        },
        keepAspectRatio: d,
        resizeDirection: a,
        onResizeStart: m,
        onResize: p,
        onResizeEnd: w,
        shouldResize: h
      }), () => {
        var $;
        ($ = b.current) == null || $.destroy();
      };
  }, [
    E,
    c,
    u,
    l,
    f,
    d,
    m,
    p,
    w,
    h
  ]);
  const P = E.split("-"), I = n === Bt.Line ? "borderColor" : "backgroundColor", L = s ? { ...o, [I]: s } : o;
  return M.jsx("div", { className: ue(["react-flow__resize-control", "nodrag", ...P, n, r]), ref: y, style: L, children: i });
}
le(Yy);
const Wy = Qt.div`
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
`, Xy = Qt.div`
  margin: 0;
  font-size: 12px;
  line-height: 1;
`, Gy = Qt.p`
  font-size: 8px;
  margin: 0;
  text-align: center;
  line-height: 1;
`, $t = {
  NodeContainer: Wy,
  NodeIcon: Xy,
  NodeLabel: Gy
};
var Mc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ps = ce.createContext && /* @__PURE__ */ ce.createContext(Mc), qy = ["attr", "size", "title"];
function Uy(e, t) {
  if (e == null) return {};
  var n = Ky(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ky(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qn.apply(this, arguments);
}
function gs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gs(Object(n), !0).forEach(function(r) {
      Zy(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zy(e, t, n) {
  return t = Qy(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qy(e) {
  var t = Jy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Jy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ac(e) {
  return e && e.map((t, n) => /* @__PURE__ */ ce.createElement(t.tag, Un({
    key: n
  }, t.attr), Ac(t.child)));
}
function sn(e) {
  return (t) => /* @__PURE__ */ ce.createElement(e0, qn({
    attr: Un({}, e.attr)
  }, t), Ac(e.child));
}
function e0(e) {
  var t = (n) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Uy(e, qy), c = o || n.size || "1em", u;
    return n.className && (u = n.className), e.className && (u = (u ? u + " " : "") + e.className), /* @__PURE__ */ ce.createElement("svg", qn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, r, s, {
      className: u,
      style: Un(Un({
        color: e.color || n.color
      }, n.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ce.createElement("title", null, i), e.children);
  };
  return ps !== void 0 ? /* @__PURE__ */ ce.createElement(ps.Consumer, null, (n) => t(n)) : t(Mc);
}
function t0(e) {
  return sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m18 16 4-4-4-4" }, child: [] }, { tag: "path", attr: { d: "m6 8-4 4 4 4" }, child: [] }, { tag: "path", attr: { d: "m14.5 4-5 16" }, child: [] }] })(e);
}
function n0(e) {
  return sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "ellipse", attr: { cx: "12", cy: "5", rx: "9", ry: "3" }, child: [] }, { tag: "path", attr: { d: "M3 5V19A9 3 0 0 0 21 19V5" }, child: [] }, { tag: "path", attr: { d: "M3 12A9 3 0 0 0 21 12" }, child: [] }] })(e);
}
function ms(e) {
  return sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }, child: [] }, { tag: "path", attr: { d: "M14 2v4a2 2 0 0 0 2 2h4" }, child: [] }] })(e);
}
function r0(e) {
  return sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, child: [] }, { tag: "path", attr: { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, child: [] }] })(e);
}
function o0(e) {
  return sn({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }, child: [] }] })(e);
}
function i0(e) {
  const t = {
    LuDatabase: /* @__PURE__ */ M.jsx(n0, {}),
    LuFile: /* @__PURE__ */ M.jsx(ms, {}),
    LuCodeXml: /* @__PURE__ */ M.jsx(t0, {}),
    LuStar: /* @__PURE__ */ M.jsx(o0, {}),
    LuInbox: /* @__PURE__ */ M.jsx(r0, {})
  };
  return t[e] ? t[e] : /* @__PURE__ */ M.jsx(ms, {});
}
function s0({
  data: e
}) {
  return !e.label || !e.id ? /* @__PURE__ */ M.jsx($t.NodeContainer, { children: /* @__PURE__ */ M.jsx($t.NodeLabel, { children: "Wrong created node" }) }) : /* @__PURE__ */ M.jsxs($t.NodeContainer, { $bgColor: e.bgColor, children: [
    /* @__PURE__ */ M.jsx(Ye, { type: "source", position: G.Top, id: `${e.id}-top` }),
    e.icon && /* @__PURE__ */ M.jsx($t.NodeIcon, { children: i0(e.icon) }),
    /* @__PURE__ */ M.jsx($t.NodeLabel, { children: e.label }),
    /* @__PURE__ */ M.jsx(
      Ye,
      {
        type: "source",
        position: G.Bottom,
        id: `${e.id}-bottom`
      }
    ),
    /* @__PURE__ */ M.jsx(Ye, { type: "source", position: G.Left, id: `${e.id}-left` }),
    /* @__PURE__ */ M.jsx(Ye, { type: "source", position: G.Right, id: `${e.id}-right` })
  ] });
}
function a0({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: o,
  markerEnd: i
}) {
  const [s] = bo({
    sourceX: t,
    sourceY: n,
    targetX: r,
    targetY: o + 2
  });
  return /* @__PURE__ */ M.jsx(M.Fragment, { children: /* @__PURE__ */ M.jsx(on, { id: e, path: s, markerEnd: i }) });
}
const c0 = [
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
], u0 = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "1-bottom",
    targetHandle: "2-top",
    type: "straight-arrow",
    markerEnd: { type: Xe.Arrow }
  },
  { id: "e1-3", source: "1", sourceHandle: "1-right", target: "3", type: "straight-arrow", markerEnd: { type: Xe.Arrow } }
], l0 = [1, 2], d0 = {
  "custom-node": s0
}, f0 = {
  "straight-arrow": a0
};
function p0({
  nodeColor: e,
  importedJSON: t,
  setCurrentJSON: n
}) {
  const [r, o, i] = wy(c0), [s, c, u] = vy(u0);
  ne(() => {
    if (!n)
      return;
    const f = JSON.parse(JSON.stringify(s)), d = {
      elements: r,
      connections: f.map((a) => (delete a.markerEnd, a))
    };
    n(JSON.stringify(d));
  }, [r, s, n]), ne(() => {
    e && o((f) => f.map((a) => ({ ...a, data: { ...a.data, bgColor: e } })));
  }, [e, o]), ne(() => {
    if (!t)
      return;
    const f = JSON.parse(JSON.parse(t));
    if (Array.isArray(f.connections) && Array.isArray(f.elements)) {
      const d = f.connections.map((a) => (a.markerEnd = { type: Xe.Arrow }, a));
      o(f.elements), c(d);
    } else
      alert(
        "Wrong file, structure or format. Should be JSON and contain 2 arrays of objects: 'elements' & 'connections'."
      );
  }, [t, c, o]);
  const l = _e(
    (f) => {
      const d = {
        ...f,
        type: "straight-arrow",
        markerEnd: { type: Xe.Arrow }
      };
      c((a) => $a(d, a));
    },
    [c]
  );
  return /* @__PURE__ */ M.jsx(Wl.SheetWrapper, { children: /* @__PURE__ */ M.jsx(
    xy,
    {
      nodes: r,
      edges: s,
      onNodesChange: i,
      onEdgesChange: u,
      onConnect: l,
      nodeTypes: d0,
      edgeTypes: f0,
      fitView: !0,
      panOnScroll: !0,
      selectionOnDrag: !0,
      panOnDrag: l0,
      selectionMode: _t.Partial,
      connectionMode: rt.Loose,
      deleteKeyCode: ["Delete", "Backspace"],
      children: /* @__PURE__ */ M.jsx(Ny, { id: "1", color: "#f7f7f7", bgColor: "#f7f7f7" })
    }
  ) });
}
export {
  p0 as DiagramSheet
};
