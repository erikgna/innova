var bd = Object.defineProperty;
var eh = (e, t, n) =>
  t in e
    ? bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var le = (e, t, n) => (eh(e, typeof t != "symbol" ? t + "" : t, n), n);
function th(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function nh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mi = {},
  rh = {
    get exports() {
      return mi;
    },
    set exports(e) {
      mi = e;
    },
  },
  qi = {},
  P = {},
  ih = {
    get exports() {
      return P;
    },
    set exports(e) {
      P = e;
    },
  },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
  lh = Symbol.for("react.portal"),
  oh = Symbol.for("react.fragment"),
  sh = Symbol.for("react.strict_mode"),
  uh = Symbol.for("react.profiler"),
  ah = Symbol.for("react.provider"),
  ch = Symbol.for("react.context"),
  fh = Symbol.for("react.forward_ref"),
  dh = Symbol.for("react.suspense"),
  hh = Symbol.for("react.memo"),
  ph = Symbol.for("react.lazy"),
  yu = Symbol.iterator;
function mh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yu && e[yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ba = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ec = Object.assign,
  tc = {};
function Nn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tc),
    (this.updater = n || ba);
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nc() {}
nc.prototype = Nn.prototype;
function as(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tc),
    (this.updater = n || ba);
}
var cs = (as.prototype = new nc());
cs.constructor = as;
ec(cs, Nn.prototype);
cs.isPureReactComponent = !0;
var vu = Array.isArray,
  rc = Object.prototype.hasOwnProperty,
  fs = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      rc.call(t, r) && !ic.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: xr,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: fs.current,
  };
}
function yh(e, t) {
  return {
    $$typeof: xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ds(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function vh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gu = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? vh("" + e.key)
    : t.toString(36);
}
function Yr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case lh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      vu(i)
        ? ((n = ""),
          e != null && (n = e.replace(gu, "$&/") + "/"),
          Yr(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (ds(i) &&
            (i = yh(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), vu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + wl(l, s);
      o += Yr(l, t, n, u, i);
    }
  else if (((u = mh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + wl(l, s++)), (o += Yr(l, t, n, u, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Yr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function gh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Zr = { transition: null },
  wh = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Zr,
    ReactCurrentOwner: fs,
  };
I.Children = {
  map: Ir,
  forEach: function (e, t, n) {
    Ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ds(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = Nn;
I.Fragment = oh;
I.Profiler = uh;
I.PureComponent = as;
I.StrictMode = sh;
I.Suspense = dh;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ec({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = fs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      rc.call(t, u) &&
        !ic.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: xr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: ch,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ah, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = lc;
I.createFactory = function (e) {
  var t = lc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: fh, render: e };
};
I.isValidElement = ds;
I.lazy = function (e) {
  return { $$typeof: ph, _payload: { _status: -1, _result: e }, _init: gh };
};
I.memo = function (e, t) {
  return { $$typeof: hh, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ye.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
I.useId = function () {
  return ye.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ye.current.useRef(e);
};
I.useState = function (e) {
  return ye.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ye.current.useTransition();
};
I.version = "18.2.0";
(function (e) {
  e.exports = I;
})(ih);
const Sh = nh(P),
  Zl = th({ __proto__: null, default: Sh }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eh = P,
  Ch = Symbol.for("react.element"),
  xh = Symbol.for("react.fragment"),
  kh = Object.prototype.hasOwnProperty,
  Ph = Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kh.call(t, r) && !Rh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ch,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: Ph.current,
  };
}
qi.Fragment = xh;
qi.jsx = oc;
qi.jsxs = oc;
(function (e) {
  e.exports = qi;
})(rh);
const N = mi.jsx,
  j = mi.jsxs;
var bl = {},
  eo = {},
  Oh = {
    get exports() {
      return eo;
    },
    set exports(e) {
      eo = e;
    },
  },
  Oe = {},
  to = {},
  Nh = {
    get exports() {
      return to;
    },
    set exports(e) {
      to = e;
    },
  },
  sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, F) {
    var D = T.length;
    T.push(F);
    e: for (; 0 < D; ) {
      var J = (D - 1) >>> 1,
        ne = T[J];
      if (0 < i(ne, F)) (T[J] = F), (T[D] = ne), (D = J);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var F = T[0],
      D = T.pop();
    if (D !== F) {
      T[0] = D;
      e: for (var J = 0, ne = T.length, Fr = ne >>> 1; J < Fr; ) {
        var Dt = 2 * (J + 1) - 1,
          gl = T[Dt],
          It = Dt + 1,
          Dr = T[It];
        if (0 > i(gl, D))
          It < ne && 0 > i(Dr, gl)
            ? ((T[J] = Dr), (T[It] = D), (J = It))
            : ((T[J] = gl), (T[Dt] = D), (J = Dt));
        else if (It < ne && 0 > i(Dr, D)) (T[J] = Dr), (T[It] = D), (J = It);
        else break e;
      }
    }
    return F;
  }
  function i(T, F) {
    var D = T.sortIndex - F.sortIndex;
    return D !== 0 ? D : T.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    h = null,
    m = 3,
    g = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(T) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= T)
        r(a), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(a);
    }
  }
  function w(T) {
    if (((v = !1), p(T), !y))
      if (n(u) !== null) (y = !0), yl(R);
      else {
        var F = n(a);
        F !== null && vl(w, F.startTime - T);
      }
  }
  function R(T, F) {
    (y = !1), v && ((v = !1), d(x), (x = -1)), (g = !0);
    var D = m;
    try {
      for (
        p(F), h = n(u);
        h !== null && (!(h.expirationTime > F) || (T && !he()));

      ) {
        var J = h.callback;
        if (typeof J == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var ne = J(h.expirationTime <= F);
          (F = e.unstable_now()),
            typeof ne == "function" ? (h.callback = ne) : h === n(u) && r(u),
            p(F);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var Fr = !0;
      else {
        var Dt = n(a);
        Dt !== null && vl(w, Dt.startTime - F), (Fr = !1);
      }
      return Fr;
    } finally {
      (h = null), (m = D), (g = !1);
    }
  }
  var k = !1,
    O = null,
    x = -1,
    M = 5,
    L = -1;
  function he() {
    return !(e.unstable_now() - L < M);
  }
  function Zt() {
    if (O !== null) {
      var T = e.unstable_now();
      L = T;
      var F = !0;
      try {
        F = O(!0, T);
      } finally {
        F ? Ft() : ((k = !1), (O = null));
      }
    } else k = !1;
  }
  var Ft;
  if (typeof f == "function")
    Ft = function () {
      f(Zt);
    };
  else if (typeof MessageChannel < "u") {
    var mu = new MessageChannel(),
      Zd = mu.port2;
    (mu.port1.onmessage = Zt),
      (Ft = function () {
        Zd.postMessage(null);
      });
  } else
    Ft = function () {
      E(Zt, 0);
    };
  function yl(T) {
    (O = T), k || ((k = !0), Ft());
  }
  function vl(T, F) {
    x = E(function () {
      T(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), yl(R));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = m;
      }
      var D = m;
      m = F;
      try {
        return T();
      } finally {
        m = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, F) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var D = m;
      m = T;
      try {
        return F();
      } finally {
        m = D;
      }
    }),
    (e.unstable_scheduleCallback = function (T, F, D) {
      var J = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? J + D : J))
          : (D = J),
        T)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = D + ne),
        (T = {
          id: c++,
          callback: F,
          priorityLevel: T,
          startTime: D,
          expirationTime: ne,
          sortIndex: -1,
        }),
        D > J
          ? ((T.sortIndex = D),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (v ? (d(x), (x = -1)) : (v = !0), vl(w, D - J)))
          : ((T.sortIndex = ne), t(u, T), y || g || ((y = !0), yl(R))),
        T
      );
    }),
    (e.unstable_shouldYield = he),
    (e.unstable_wrapCallback = function (T) {
      var F = m;
      return function () {
        var D = m;
        m = F;
        try {
          return T.apply(this, arguments);
        } finally {
          m = D;
        }
      };
    });
})(sc);
(function (e) {
  e.exports = sc;
})(Nh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc = P,
  Re = to;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ac = new Set(),
  rr = {};
function Gt(e, t) {
  wn(e, t), wn(e + "Capture", t);
}
function wn(e, t) {
  for (rr[e] = t, e = 0; e < t.length; e++) ac.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  no = Object.prototype.hasOwnProperty,
  _h =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function Th(e) {
  return no.call(Su, e)
    ? !0
    : no.call(wu, e)
    ? !1
    : _h.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function Lh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Fh(e, t, n, r) {
  if (t === null || typeof t > "u" || Lh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hs = /[\-:]([a-z])/g;
function ps(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, ps);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, ps);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hs, ps);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ms(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fh(t, n, i, r) && (n = null),
    r || i === null
      ? Th(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mr = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  ys = Symbol.for("react.strict_mode"),
  ro = Symbol.for("react.profiler"),
  cc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  vs = Symbol.for("react.forward_ref"),
  io = Symbol.for("react.suspense"),
  lo = Symbol.for("react.suspense_list"),
  gs = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  dc = Symbol.for("react.offscreen"),
  Eu = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Eu && e[Eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Sl;
function Hn(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var El = !1;
function Cl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          s = l.length - 1;
        1 <= o && 0 <= s && i[o] !== l[s];

      )
        s--;
      for (; 1 <= o && 0 <= s; o--, s--)
        if (i[o] !== l[s]) {
          if (o !== 1 || s !== 1)
            do
              if ((o--, s--, 0 > s || i[o] !== l[s])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= s);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function Dh(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return "";
  }
}
function oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case ro:
      return "Profiler";
    case ys:
      return "StrictMode";
    case io:
      return "Suspense";
    case lo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case vs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gs:
        return (
          (t = e.displayName || null), t !== null ? t : oo(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return oo(e(t));
        } catch {}
    }
  return null;
}
function Ih(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return oo(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mh(e) {
  var t = hc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zr(e) {
  e._valueTracker || (e._valueTracker = Mh(e));
}
function pc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function so(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function mc(e, t) {
  (t = t.checked), t != null && ms(e, "checked", t, !1);
}
function uo(e, t) {
  mc(e, t);
  var n = Rt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ao(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ao(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ao(e, t, n) {
  (t !== "number" || yi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vn = Array.isArray;
function hn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Vn(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rt(n) };
}
function yc(e, t) {
  var n = Rt(t.value),
    r = Rt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ar,
  gc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  zh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Ah = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ho(e, t) {
  if (t) {
    if (Ah[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mo = null;
function ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yo = null,
  pn = null,
  mn = null;
function Ru(e) {
  if ((e = Rr(e))) {
    if (typeof yo != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Yi(t)), yo(e.stateNode, e.type, t));
  }
}
function Ec(e) {
  pn ? (mn ? mn.push(e) : (mn = [e])) : (pn = e);
}
function Cc() {
  if (pn) {
    var e = pn,
      t = mn;
    if (((mn = pn = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
  }
}
function xc(e, t) {
  return e(t);
}
function kc() {}
var xl = !1;
function Pc(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return xc(e, t, n);
  } finally {
    (xl = !1), (pn !== null || mn !== null) && (kc(), Cc());
  }
}
function lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var vo = !1;
if (tt)
  try {
    var Mn = {};
    Object.defineProperty(Mn, "passive", {
      get: function () {
        vo = !0;
      },
    }),
      window.addEventListener("test", Mn, Mn),
      window.removeEventListener("test", Mn, Mn);
  } catch {
    vo = !1;
  }
function Uh(e, t, n, r, i, l, o, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Gn = !1,
  vi = null,
  gi = !1,
  go = null,
  jh = {
    onError: function (e) {
      (Gn = !0), (vi = e);
    },
  };
function Bh(e, t, n, r, i, l, o, s, u) {
  (Gn = !1), (vi = null), Uh.apply(jh, arguments);
}
function Qh(e, t, n, r, i, l, o, s, u) {
  if ((Bh.apply(this, arguments), Gn)) {
    if (Gn) {
      var a = vi;
      (Gn = !1), (vi = null);
    } else throw Error(C(198));
    gi || ((gi = !0), (go = a));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ou(e) {
  if (Xt(e) !== e) throw Error(C(188));
}
function $h(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Ou(i), e;
        if (l === r) return Ou(i), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, s = i.child; s; ) {
        if (s === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (s === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!o) {
        for (s = l.child; s; ) {
          if (s === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (s === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Oc(e) {
  return (e = $h(e)), e !== null ? Nc(e) : null;
}
function Nc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _c = Re.unstable_scheduleCallback,
  Nu = Re.unstable_cancelCallback,
  Hh = Re.unstable_shouldYield,
  Vh = Re.unstable_requestPaint,
  G = Re.unstable_now,
  Wh = Re.unstable_getCurrentPriorityLevel,
  Ss = Re.unstable_ImmediatePriority,
  Tc = Re.unstable_UserBlockingPriority,
  wi = Re.unstable_NormalPriority,
  qh = Re.unstable_LowPriority,
  Lc = Re.unstable_IdlePriority,
  Ki = null,
  Ke = null;
function Kh(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(Ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Xh,
  Jh = Math.log,
  Gh = Math.LN2;
function Xh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Jh(e) / Gh) | 0)) | 0;
}
var Ur = 64,
  jr = 4194304;
function Wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Si(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var s = o & ~i;
    s !== 0 ? (r = Wn(s)) : ((l &= o), l !== 0 && (r = Wn(l)));
  } else (o = n & ~i), o !== 0 ? (r = Wn(o)) : l !== 0 && (r = Wn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Yh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Be(l),
      s = 1 << o,
      u = i[o];
    u === -1
      ? (!(s & n) || s & r) && (i[o] = Yh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function wo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fc() {
  var e = Ur;
  return (Ur <<= 1), !(Ur & 4194240) && (Ur = 64), e;
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function bh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Be(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ic,
  Cs,
  Mc,
  zc,
  Ac,
  So = !1,
  Br = [],
  vt = null,
  gt = null,
  wt = null,
  or = new Map(),
  sr = new Map(),
  dt = [],
  ep =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _u(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function zn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Rr(t)), t !== null && Cs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function tp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vt = zn(vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (gt = zn(gt, e, t, n, r, i)), !0;
    case "mouseover":
      return (wt = zn(wt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return or.set(l, zn(or.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), sr.set(l, zn(sr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Uc(e) {
  var t = Ut(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rc(n)), t !== null)) {
          (e.blockedOn = t),
            Ac(e.priority, function () {
              Mc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (mo = r), n.target.dispatchEvent(r), (mo = null);
    } else return (t = Rr(n)), t !== null && Cs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tu(e, t, n) {
  br(e) && n.delete(t);
}
function np() {
  (So = !1),
    vt !== null && br(vt) && (vt = null),
    gt !== null && br(gt) && (gt = null),
    wt !== null && br(wt) && (wt = null),
    or.forEach(Tu),
    sr.forEach(Tu);
}
function An(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    So ||
      ((So = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, np)));
}
function ur(e) {
  function t(i) {
    return An(i, e);
  }
  if (0 < Br.length) {
    An(Br[0], e);
    for (var n = 1; n < Br.length; n++) {
      var r = Br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && An(vt, e),
      gt !== null && An(gt, e),
      wt !== null && An(wt, e),
      or.forEach(t),
      sr.forEach(t),
      n = 0;
    n < dt.length;
    n++
  )
    (r = dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dt.length && ((n = dt[0]), n.blockedOn === null); )
    Uc(n), n.blockedOn === null && dt.shift();
}
var yn = lt.ReactCurrentBatchConfig,
  Ei = !0;
function rp(e, t, n, r) {
  var i = U,
    l = yn.transition;
  yn.transition = null;
  try {
    (U = 1), xs(e, t, n, r);
  } finally {
    (U = i), (yn.transition = l);
  }
}
function ip(e, t, n, r) {
  var i = U,
    l = yn.transition;
  yn.transition = null;
  try {
    (U = 4), xs(e, t, n, r);
  } finally {
    (U = i), (yn.transition = l);
  }
}
function xs(e, t, n, r) {
  if (Ei) {
    var i = Eo(e, t, n, r);
    if (i === null) Il(e, t, r, Ci, n), _u(e, r);
    else if (tp(i, e, t, n, r)) r.stopPropagation();
    else if ((_u(e, r), t & 4 && -1 < ep.indexOf(e))) {
      for (; i !== null; ) {
        var l = Rr(i);
        if (
          (l !== null && Ic(l),
          (l = Eo(e, t, n, r)),
          l === null && Il(e, t, r, Ci, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var Ci = null;
function Eo(e, t, n, r) {
  if (((Ci = null), (e = ws(r)), (e = Ut(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function jc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wh()) {
        case Ss:
          return 1;
        case Tc:
          return 4;
        case wi:
        case qh:
          return 16;
        case Lc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null,
  ks = null,
  ei = null;
function Bc() {
  if (ei) return ei;
  var e,
    t = ks,
    n = t.length,
    r,
    i = "value" in pt ? pt.value : pt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (ei = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ti(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qr() {
  return !0;
}
function Lu() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Qr
        : Lu),
      (this.isPropagationStopped = Lu),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qr));
      },
      persist: function () {},
      isPersistent: Qr,
    }),
    t
  );
}
var _n = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ps = Ne(_n),
  Pr = q({}, _n, { view: 0, detail: 0 }),
  lp = Ne(Pr),
  Pl,
  Rl,
  Un,
  Ji = q({}, Pr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Un &&
            (Un && e.type === "mousemove"
              ? ((Pl = e.screenX - Un.screenX), (Rl = e.screenY - Un.screenY))
              : (Rl = Pl = 0),
            (Un = e)),
          Pl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rl;
    },
  }),
  Fu = Ne(Ji),
  op = q({}, Ji, { dataTransfer: 0 }),
  sp = Ne(op),
  up = q({}, Pr, { relatedTarget: 0 }),
  Ol = Ne(up),
  ap = q({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cp = Ne(ap),
  fp = q({}, _n, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dp = Ne(fp),
  hp = q({}, _n, { data: 0 }),
  Du = Ne(hp),
  pp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yp[e]) ? !!t[e] : !1;
}
function Rs() {
  return vp;
}
var gp = q({}, Pr, {
    key: function (e) {
      if (e.key) {
        var t = pp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rs,
    charCode: function (e) {
      return e.type === "keypress" ? ti(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ti(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wp = Ne(gp),
  Sp = q({}, Ji, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Iu = Ne(Sp),
  Ep = q({}, Pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rs,
  }),
  Cp = Ne(Ep),
  xp = q({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kp = Ne(xp),
  Pp = q({}, Ji, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Rp = Ne(Pp),
  Op = [9, 13, 27, 32],
  Os = tt && "CompositionEvent" in window,
  Xn = null;
tt && "documentMode" in document && (Xn = document.documentMode);
var Np = tt && "TextEvent" in window && !Xn,
  Qc = tt && (!Os || (Xn && 8 < Xn && 11 >= Xn)),
  Mu = String.fromCharCode(32),
  zu = !1;
function $c(e, t) {
  switch (e) {
    case "keyup":
      return Op.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Hc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function _p(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Mu);
    case "textInput":
      return (e = t.data), e === Mu && zu ? null : e;
    default:
      return null;
  }
}
function Tp(e, t) {
  if (nn)
    return e === "compositionend" || (!Os && $c(e, t))
      ? ((e = Bc()), (ei = ks = pt = null), (nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lp[e.type] : t === "textarea";
}
function Vc(e, t, n, r) {
  Ec(r),
    (t = xi(t, "onChange")),
    0 < t.length &&
      ((n = new Ps("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yn = null,
  ar = null;
function Fp(e) {
  tf(e, 0);
}
function Gi(e) {
  var t = on(e);
  if (pc(t)) return e;
}
function Dp(e, t) {
  if (e === "change") return t;
}
var Wc = !1;
if (tt) {
  var Nl;
  if (tt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Uu = document.createElement("div");
      Uu.setAttribute("oninput", "return;"),
        (_l = typeof Uu.oninput == "function");
    }
    Nl = _l;
  } else Nl = !1;
  Wc = Nl && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Yn && (Yn.detachEvent("onpropertychange", qc), (ar = Yn = null));
}
function qc(e) {
  if (e.propertyName === "value" && Gi(ar)) {
    var t = [];
    Vc(t, ar, e, ws(e)), Pc(Fp, t);
  }
}
function Ip(e, t, n) {
  e === "focusin"
    ? (ju(), (Yn = t), (ar = n), Yn.attachEvent("onpropertychange", qc))
    : e === "focusout" && ju();
}
function Mp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gi(ar);
}
function zp(e, t) {
  if (e === "click") return Gi(t);
}
function Ap(e, t) {
  if (e === "input" || e === "change") return Gi(t);
}
function Up(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : Up;
function cr(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!no.call(t, i) || !$e(e[i], t[i])) return !1;
  }
  return !0;
}
function Bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qu(e, t) {
  var n = Bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bu(n);
  }
}
function Kc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
  for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yi(e.document);
  }
  return t;
}
function Ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jp(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ns(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Qu(n, l));
        var o = Qu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bp = tt && "documentMode" in document && 11 >= document.documentMode,
  rn = null,
  Co = null,
  Zn = null,
  xo = !1;
function $u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xo ||
    rn == null ||
    rn !== yi(r) ||
    ((r = rn),
    "selectionStart" in r && Ns(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zn && cr(Zn, r)) ||
      ((Zn = r),
      (r = xi(Co, "onSelect")),
      0 < r.length &&
        ((t = new Ps("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rn))));
}
function $r(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ln = {
    animationend: $r("Animation", "AnimationEnd"),
    animationiteration: $r("Animation", "AnimationIteration"),
    animationstart: $r("Animation", "AnimationStart"),
    transitionend: $r("Transition", "TransitionEnd"),
  },
  Tl = {},
  Gc = {};
tt &&
  ((Gc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  "TransitionEvent" in window || delete ln.transitionend.transition);
function Xi(e) {
  if (Tl[e]) return Tl[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gc) return (Tl[e] = t[n]);
  return e;
}
var Xc = Xi("animationend"),
  Yc = Xi("animationiteration"),
  Zc = Xi("animationstart"),
  bc = Xi("transitionend"),
  ef = new Map(),
  Hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _t(e, t) {
  ef.set(e, t), Gt(t, [e]);
}
for (var Ll = 0; Ll < Hu.length; Ll++) {
  var Fl = Hu[Ll],
    Qp = Fl.toLowerCase(),
    $p = Fl[0].toUpperCase() + Fl.slice(1);
  _t(Qp, "on" + $p);
}
_t(Xc, "onAnimationEnd");
_t(Yc, "onAnimationIteration");
_t(Zc, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(bc, "onTransitionEnd");
wn("onMouseEnter", ["mouseout", "mouseover"]);
wn("onMouseLeave", ["mouseout", "mouseover"]);
wn("onPointerEnter", ["pointerout", "pointerover"]);
wn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qh(r, t, void 0, e), (e.currentTarget = null);
}
function tf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var s = r[o],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && i.isPropagationStopped())) break e;
          Vu(i, s, a), (l = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((s = r[o]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && i.isPropagationStopped())
          )
            break e;
          Vu(i, s, a), (l = u);
        }
    }
  }
  if (gi) throw ((e = go), (gi = !1), (go = null), e);
}
function Q(e, t) {
  var n = t[No];
  n === void 0 && (n = t[No] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), nf(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Hr]) {
    (e[Hr] = !0),
      ac.forEach(function (n) {
        n !== "selectionchange" && (Hp.has(n) || Dl(n, !1, e), Dl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || ((t[Hr] = !0), Dl("selectionchange", !1, t));
  }
}
function nf(e, t, n, r) {
  switch (jc(t)) {
    case 1:
      var i = rp;
      break;
    case 4:
      i = ip;
      break;
    default:
      i = xs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !vo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Il(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; s !== null; ) {
          if (((o = Ut(s)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = l = o;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Pc(function () {
    var a = l,
      c = ws(n),
      h = [];
    e: {
      var m = ef.get(e);
      if (m !== void 0) {
        var g = Ps,
          y = e;
        switch (e) {
          case "keypress":
            if (ti(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = wp;
            break;
          case "focusin":
            (y = "focus"), (g = Ol);
            break;
          case "focusout":
            (y = "blur"), (g = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Fu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = sp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Cp;
            break;
          case Xc:
          case Yc:
          case Zc:
            g = cp;
            break;
          case bc:
            g = kp;
            break;
          case "scroll":
            g = lp;
            break;
          case "wheel":
            g = Rp;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = dp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Iu;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          d = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var f = a, p; f !== null; ) {
          p = f;
          var w = p.stateNode;
          if (
            (p.tag === 5 &&
              w !== null &&
              ((p = w),
              d !== null && ((w = lr(f, d)), w != null && v.push(dr(f, w, p)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((m = new g(m, y, null, n, c)), h.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== mo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ut(y) || y[nt]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Ut(y) : null),
              y !== null &&
                ((E = Xt(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((v = Fu),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Iu),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (E = g == null ? m : on(g)),
            (p = y == null ? m : on(y)),
            (m = new v(w, f + "leave", g, n, c)),
            (m.target = E),
            (m.relatedTarget = p),
            (w = null),
            Ut(c) === a &&
              ((v = new v(d, f + "enter", y, n, c)),
              (v.target = p),
              (v.relatedTarget = E),
              (w = v)),
            (E = w),
            g && y)
          )
            t: {
              for (v = g, d = y, f = 0, p = v; p; p = bt(p)) f++;
              for (p = 0, w = d; w; w = bt(w)) p++;
              for (; 0 < f - p; ) (v = bt(v)), f--;
              for (; 0 < p - f; ) (d = bt(d)), p--;
              for (; f--; ) {
                if (v === d || (d !== null && v === d.alternate)) break t;
                (v = bt(v)), (d = bt(d));
              }
              v = null;
            }
          else v = null;
          g !== null && Wu(h, m, g, v, !1),
            y !== null && E !== null && Wu(h, E, y, v, !0);
        }
      }
      e: {
        if (
          ((m = a ? on(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var R = Dp;
        else if (Au(m))
          if (Wc) R = Ap;
          else {
            R = Mp;
            var k = Ip;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (R = zp);
        if (R && (R = R(e, a))) {
          Vc(h, R, n, c);
          break e;
        }
        k && k(e, m, a),
          e === "focusout" &&
            (k = m._wrapperState) &&
            k.controlled &&
            m.type === "number" &&
            ao(m, "number", m.value);
      }
      switch (((k = a ? on(a) : window), e)) {
        case "focusin":
          (Au(k) || k.contentEditable === "true") &&
            ((rn = k), (Co = a), (Zn = null));
          break;
        case "focusout":
          Zn = Co = rn = null;
          break;
        case "mousedown":
          xo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xo = !1), $u(h, n, c);
          break;
        case "selectionchange":
          if (Bp) break;
        case "keydown":
        case "keyup":
          $u(h, n, c);
      }
      var O;
      if (Os)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        nn
          ? $c(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Qc &&
          n.locale !== "ko" &&
          (nn || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && nn && (O = Bc())
            : ((pt = c),
              (ks = "value" in pt ? pt.value : pt.textContent),
              (nn = !0))),
        (k = xi(a, x)),
        0 < k.length &&
          ((x = new Du(x, e, null, n, c)),
          h.push({ event: x, listeners: k }),
          O ? (x.data = O) : ((O = Hc(n)), O !== null && (x.data = O)))),
        (O = Np ? _p(e, n) : Tp(e, n)) &&
          ((a = xi(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Du("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: a }),
            (c.data = O)));
    }
    tf(h, t);
  });
}
function dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = lr(e, n)),
      l != null && r.unshift(dr(e, l, i)),
      (l = lr(e, t)),
      l != null && r.push(dr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wu(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = lr(n, l)), u != null && o.unshift(dr(n, u, s)))
        : i || ((u = lr(n, l)), u != null && o.push(dr(n, u, s)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vp = /\r\n?/g,
  Wp = /\u0000|\uFFFD/g;
function qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vp,
      `
`
    )
    .replace(Wp, "");
}
function Vr(e, t, n) {
  if (((t = qu(t)), qu(e) !== t && n)) throw Error(C(425));
}
function ki() {}
var ko = null,
  Po = null;
function Ro(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oo = typeof setTimeout == "function" ? setTimeout : void 0,
  qp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ku = typeof Promise == "function" ? Promise : void 0,
  Kp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ku < "u"
      ? function (e) {
          return Ku.resolve(null).then(e).catch(Jp);
        }
      : Oo;
function Jp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ur(t);
}
function St(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ju(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + Tn,
  hr = "__reactProps$" + Tn,
  nt = "__reactContainer$" + Tn,
  No = "__reactEvents$" + Tn,
  Gp = "__reactListeners$" + Tn,
  Xp = "__reactHandles$" + Tn;
function Ut(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ju(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = Ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rr(e) {
  return (
    (e = e[We] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function on(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Yi(e) {
  return e[hr] || null;
}
var _o = [],
  sn = -1;
function Tt(e) {
  return { current: e };
}
function $(e) {
  0 > sn || ((e.current = _o[sn]), (_o[sn] = null), sn--);
}
function B(e, t) {
  sn++, (_o[sn] = e.current), (e.current = t);
}
var Ot = {},
  de = Tt(Ot),
  Se = Tt(!1),
  Vt = Ot;
function Sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function Pi() {
  $(Se), $(de);
}
function Gu(e, t, n) {
  if (de.current !== Ot) throw Error(C(168));
  B(de, t), B(Se, n);
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Ih(e) || "Unknown", i));
  return q({}, n, r);
}
function Ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (Vt = de.current),
    B(de, e),
    B(Se, Se.current),
    !0
  );
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = rf(e, t, Vt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Se),
      $(de),
      B(de, e))
    : $(Se),
    B(Se, n);
}
var Xe = null,
  Zi = !1,
  zl = !1;
function lf(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function Yp(e) {
  (Zi = !0), lf(e);
}
function Lt() {
  if (!zl && Xe !== null) {
    zl = !0;
    var e = 0,
      t = U;
    try {
      var n = Xe;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Zi = !1);
    } catch (i) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), _c(Ss, Lt), i);
    } finally {
      (U = t), (zl = !1);
    }
  }
  return null;
}
var un = [],
  an = 0,
  Oi = null,
  Ni = 0,
  Te = [],
  Le = 0,
  Wt = null,
  Ye = 1,
  Ze = "";
function Mt(e, t) {
  (un[an++] = Ni), (un[an++] = Oi), (Oi = e), (Ni = t);
}
function of(e, t, n) {
  (Te[Le++] = Ye), (Te[Le++] = Ze), (Te[Le++] = Wt), (Wt = e);
  var r = Ye;
  e = Ze;
  var i = 32 - Be(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Be(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ye = (1 << (32 - Be(t) + i)) | (n << i) | r),
      (Ze = l + e);
  } else (Ye = (1 << l) | (n << i) | r), (Ze = e);
}
function _s(e) {
  e.return !== null && (Mt(e, 1), of(e, 1, 0));
}
function Ts(e) {
  for (; e === Oi; )
    (Oi = un[--an]), (un[an] = null), (Ni = un[--an]), (un[an] = null);
  for (; e === Wt; )
    (Wt = Te[--Le]),
      (Te[Le] = null),
      (Ze = Te[--Le]),
      (Te[Le] = null),
      (Ye = Te[--Le]),
      (Te[Le] = null);
}
var Pe = null,
  ke = null,
  H = !1,
  je = null;
function sf(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pe = e), (ke = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pe = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wt !== null ? { id: Ye, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pe = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function To(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Lo(e) {
  if (H) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Yu(e, t)) {
        if (To(e)) throw Error(C(418));
        t = St(n.nextSibling);
        var r = Pe;
        t && Yu(e, t)
          ? sf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Pe = e));
      }
    } else {
      if (To(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Pe = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pe = e;
}
function Wr(e) {
  if (e !== Pe) return !1;
  if (!H) return Zu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ro(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (To(e)) throw (uf(), Error(C(418)));
    for (; t; ) sf(e, t), (t = St(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = St(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Pe ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function uf() {
  for (var e = ke; e; ) e = St(e.nextSibling);
}
function En() {
  (ke = Pe = null), (H = !1);
}
function Ls(e) {
  je === null ? (je = [e]) : je.push(e);
}
var Zp = lt.ReactCurrentBatchConfig;
function Ae(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _i = Tt(null),
  Ti = null,
  cn = null,
  Fs = null;
function Ds() {
  Fs = cn = Ti = null;
}
function Is(e) {
  var t = _i.current;
  $(_i), (e._currentValue = t);
}
function Fo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vn(e, t) {
  (Ti = e),
    (Fs = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (we = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (Fs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (Ti === null) throw Error(C(308));
      (cn = e), (Ti.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var jt = null;
function Ms(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function af(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ms(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function zs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function be(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ms(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function ni(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
function bu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Li(e, t, n, r) {
  var i = e.updateQueue;
  ct = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), o === null ? (l = a) : (o.next = a), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== o &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var h = i.baseState;
    (o = 0), (c = a = u = null), (s = l);
    do {
      var m = s.lane,
        g = s.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            v = s;
          switch (((m = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                h = y.call(g, h, m);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (m = typeof y == "function" ? y.call(g, h, m) : y),
                m == null)
              )
                break e;
              h = q({}, h, m);
              break e;
            case 2:
              ct = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [s]) : m.push(s));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = g), (u = h)) : (c = c.next = g),
          (o |= m);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (m = s),
          (s = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (u = h),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Kt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function ea(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var ff = new uc.Component().refs;
function Do(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = xt(e),
      l = be(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Et(e, l, i)),
      t !== null && (Qe(t, e, i, r), ni(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      i = xt(e),
      l = be(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Et(e, l, i)),
      t !== null && (Qe(t, e, i, r), ni(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = xt(e),
      i = be(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Et(e, i, r)),
      t !== null && (Qe(t, e, r, n), ni(t, e, r));
  },
};
function ta(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cr(n, r) || !cr(i, l)
      : !0
  );
}
function df(e, t, n) {
  var r = !1,
    i = Ot,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ie(l))
      : ((i = Ee(t) ? Vt : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Sn(e, i) : Ot)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function na(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function Io(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ff), zs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Ie(l))
    : ((l = Ee(t) ? Vt : de.current), (i.context = Sn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Do(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && bi.enqueueReplaceState(i, i.state, null),
      Li(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var s = i.refs;
            s === ff && (s = i.refs = {}),
              o === null ? delete s[l] : (s[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function qr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ra(e) {
  var t = e._init;
  return t(e._payload);
}
function hf(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = kt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, f, p, w) {
    return f === null || f.tag !== 6
      ? ((f = Hl(p, d.mode, w)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function u(d, f, p, w) {
    var R = p.type;
    return R === tn
      ? c(d, f, p.props.children, w, p.key)
      : f !== null &&
        (f.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === at &&
            ra(R) === f.type))
      ? ((w = i(f, p.props)), (w.ref = jn(d, f, p)), (w.return = d), w)
      : ((w = ui(p.type, p.key, p.props, null, d.mode, w)),
        (w.ref = jn(d, f, p)),
        (w.return = d),
        w);
  }
  function a(d, f, p, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = Vl(p, d.mode, w)), (f.return = d), f)
      : ((f = i(f, p.children || [])), (f.return = d), f);
  }
  function c(d, f, p, w, R) {
    return f === null || f.tag !== 7
      ? ((f = Ht(p, d.mode, w, R)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function h(d, f, p) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Hl("" + f, d.mode, p)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Mr:
          return (
            (p = ui(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = jn(d, null, f)),
            (p.return = d),
            p
          );
        case en:
          return (f = Vl(f, d.mode, p)), (f.return = d), f;
        case at:
          var w = f._init;
          return h(d, w(f._payload), p);
      }
      if (Vn(f) || In(f))
        return (f = Ht(f, d.mode, p, null)), (f.return = d), f;
      qr(d, f);
    }
    return null;
  }
  function m(d, f, p, w) {
    var R = f !== null ? f.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return R !== null ? null : s(d, f, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Mr:
          return p.key === R ? u(d, f, p, w) : null;
        case en:
          return p.key === R ? a(d, f, p, w) : null;
        case at:
          return (R = p._init), m(d, f, R(p._payload), w);
      }
      if (Vn(p) || In(p)) return R !== null ? null : c(d, f, p, w, null);
      qr(d, p);
    }
    return null;
  }
  function g(d, f, p, w, R) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(p) || null), s(f, d, "" + w, R);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Mr:
          return (d = d.get(w.key === null ? p : w.key) || null), u(f, d, w, R);
        case en:
          return (d = d.get(w.key === null ? p : w.key) || null), a(f, d, w, R);
        case at:
          var k = w._init;
          return g(d, f, p, k(w._payload), R);
      }
      if (Vn(w) || In(w)) return (d = d.get(p) || null), c(f, d, w, R, null);
      qr(f, w);
    }
    return null;
  }
  function y(d, f, p, w) {
    for (
      var R = null, k = null, O = f, x = (f = 0), M = null;
      O !== null && x < p.length;
      x++
    ) {
      O.index > x ? ((M = O), (O = null)) : (M = O.sibling);
      var L = m(d, O, p[x], w);
      if (L === null) {
        O === null && (O = M);
        break;
      }
      e && O && L.alternate === null && t(d, O),
        (f = l(L, f, x)),
        k === null ? (R = L) : (k.sibling = L),
        (k = L),
        (O = M);
    }
    if (x === p.length) return n(d, O), H && Mt(d, x), R;
    if (O === null) {
      for (; x < p.length; x++)
        (O = h(d, p[x], w)),
          O !== null &&
            ((f = l(O, f, x)), k === null ? (R = O) : (k.sibling = O), (k = O));
      return H && Mt(d, x), R;
    }
    for (O = r(d, O); x < p.length; x++)
      (M = g(O, d, x, p[x], w)),
        M !== null &&
          (e && M.alternate !== null && O.delete(M.key === null ? x : M.key),
          (f = l(M, f, x)),
          k === null ? (R = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        O.forEach(function (he) {
          return t(d, he);
        }),
      H && Mt(d, x),
      R
    );
  }
  function v(d, f, p, w) {
    var R = In(p);
    if (typeof R != "function") throw Error(C(150));
    if (((p = R.call(p)), p == null)) throw Error(C(151));
    for (
      var k = (R = null), O = f, x = (f = 0), M = null, L = p.next();
      O !== null && !L.done;
      x++, L = p.next()
    ) {
      O.index > x ? ((M = O), (O = null)) : (M = O.sibling);
      var he = m(d, O, L.value, w);
      if (he === null) {
        O === null && (O = M);
        break;
      }
      e && O && he.alternate === null && t(d, O),
        (f = l(he, f, x)),
        k === null ? (R = he) : (k.sibling = he),
        (k = he),
        (O = M);
    }
    if (L.done) return n(d, O), H && Mt(d, x), R;
    if (O === null) {
      for (; !L.done; x++, L = p.next())
        (L = h(d, L.value, w)),
          L !== null &&
            ((f = l(L, f, x)), k === null ? (R = L) : (k.sibling = L), (k = L));
      return H && Mt(d, x), R;
    }
    for (O = r(d, O); !L.done; x++, L = p.next())
      (L = g(O, d, x, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && O.delete(L.key === null ? x : L.key),
          (f = l(L, f, x)),
          k === null ? (R = L) : (k.sibling = L),
          (k = L));
    return (
      e &&
        O.forEach(function (Zt) {
          return t(d, Zt);
        }),
      H && Mt(d, x),
      R
    );
  }
  function E(d, f, p, w) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === tn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Mr:
          e: {
            for (var R = p.key, k = f; k !== null; ) {
              if (k.key === R) {
                if (((R = p.type), R === tn)) {
                  if (k.tag === 7) {
                    n(d, k.sibling),
                      (f = i(k, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  k.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === at &&
                    ra(R) === k.type)
                ) {
                  n(d, k.sibling),
                    (f = i(k, p.props)),
                    (f.ref = jn(d, k, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === tn
              ? ((f = Ht(p.props.children, d.mode, w, p.key)),
                (f.return = d),
                (d = f))
              : ((w = ui(p.type, p.key, p.props, null, d.mode, w)),
                (w.ref = jn(d, f, p)),
                (w.return = d),
                (d = w));
          }
          return o(d);
        case en:
          e: {
            for (k = p.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(d, f.sibling),
                    (f = i(f, p.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Vl(p, d.mode, w)), (f.return = d), (d = f);
          }
          return o(d);
        case at:
          return (k = p._init), E(d, f, k(p._payload), w);
      }
      if (Vn(p)) return y(d, f, p, w);
      if (In(p)) return v(d, f, p, w);
      qr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, p)), (f.return = d), (d = f))
          : (n(d, f), (f = Hl(p, d.mode, w)), (f.return = d), (d = f)),
        o(d))
      : n(d, f);
  }
  return E;
}
var Cn = hf(!0),
  pf = hf(!1),
  Or = {},
  Je = Tt(Or),
  pr = Tt(Or),
  mr = Tt(Or);
function Bt(e) {
  if (e === Or) throw Error(C(174));
  return e;
}
function As(e, t) {
  switch ((B(mr, t), B(pr, e), B(Je, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fo(t, e));
  }
  $(Je), B(Je, t);
}
function xn() {
  $(Je), $(pr), $(mr);
}
function mf(e) {
  Bt(mr.current);
  var t = Bt(Je.current),
    n = fo(t, e.type);
  t !== n && (B(pr, e), B(Je, n));
}
function Us(e) {
  pr.current === e && ($(Je), $(pr));
}
var V = Tt(0);
function Fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Al = [];
function js() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var ri = lt.ReactCurrentDispatcher,
  Ul = lt.ReactCurrentBatchConfig,
  qt = 0,
  W = null,
  Z = null,
  re = null,
  Di = !1,
  bn = !1,
  yr = 0,
  bp = 0;
function ae() {
  throw Error(C(321));
}
function Bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Qs(e, t, n, r, i, l) {
  if (
    ((qt = l),
    (W = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ri.current = e === null || e.memoizedState === null ? rm : im),
    (e = n(r, i)),
    bn)
  ) {
    l = 0;
    do {
      if (((bn = !1), (yr = 0), 25 <= l)) throw Error(C(301));
      (l += 1),
        (re = Z = null),
        (t.updateQueue = null),
        (ri.current = lm),
        (e = n(r, i));
    } while (bn);
  }
  if (
    ((ri.current = Ii),
    (t = Z !== null && Z.next !== null),
    (qt = 0),
    (re = Z = W = null),
    (Di = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function $s() {
  var e = yr !== 0;
  return (yr = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (W.memoizedState = re = e) : (re = re.next = e), re;
}
function Me() {
  if (Z === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = re === null ? W.memoizedState : re.next;
  if (t !== null) (re = t), (Z = e);
  else {
    if (e === null) throw Error(C(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      re === null ? (W.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = Z,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var s = (o = null),
      u = null,
      a = l;
    do {
      var c = a.lane;
      if ((qt & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (o = r)) : (u = u.next = h),
          (W.lanes |= c),
          (Kt |= c);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (o = r) : (u.next = s),
      $e(r, t.memoizedState) || (we = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (W.lanes |= l), (Kt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bl(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    $e(l, t.memoizedState) || (we = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function yf() {}
function vf(e, t) {
  var n = W,
    r = Me(),
    i = t(),
    l = !$e(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (we = !0)),
    (r = r.queue),
    Hs(Sf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gr(9, wf.bind(null, n, r, i, t), void 0, null),
      ie === null)
    )
      throw Error(C(349));
    qt & 30 || gf(n, t, i);
  }
  return i;
}
function gf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ef(t) && Cf(e);
}
function Sf(e, t, n) {
  return n(function () {
    Ef(t) && Cf(e);
  });
}
function Ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Cf(e) {
  var t = rt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function ia(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nm.bind(null, W, e)),
    [t.memoizedState, e]
  );
}
function gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = W.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (W.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xf() {
  return Me().memoizedState;
}
function ii(e, t, n, r) {
  var i = Ve();
  (W.flags |= e),
    (i.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function el(e, t, n, r) {
  var i = Me();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((l = o.destroy), r !== null && Bs(r, o.deps))) {
      i.memoizedState = gr(t, n, l, r);
      return;
    }
  }
  (W.flags |= e), (i.memoizedState = gr(1 | t, n, l, r));
}
function la(e, t) {
  return ii(8390656, 8, e, t);
}
function Hs(e, t) {
  return el(2048, 8, e, t);
}
function kf(e, t) {
  return el(4, 2, e, t);
}
function Pf(e, t) {
  return el(4, 4, e, t);
}
function Rf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Of(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), el(4, 4, Rf.bind(null, t, e), n)
  );
}
function Vs() {}
function Nf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _f(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tf(e, t, n) {
  return qt & 21
    ? ($e(n, t) || ((n = Fc()), (W.lanes |= n), (Kt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function em(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Ul.transition = r);
  }
}
function Lf() {
  return Me().memoizedState;
}
function tm(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ff(e))
  )
    Df(t, n);
  else if (((n = af(e, t, n, r)), n !== null)) {
    var i = me();
    Qe(n, e, r, i), If(n, t, r);
  }
}
function nm(e, t, n) {
  var r = xt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ff(e)) Df(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), $e(s, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Ms(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = af(e, t, i, r)),
      n !== null && ((i = me()), Qe(n, e, r, i), If(n, t, r));
  }
}
function Ff(e) {
  var t = e.alternate;
  return e === W || (t !== null && t === W);
}
function Df(e, t) {
  bn = Di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function If(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
var Ii = {
    readContext: Ie,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: la,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ii(4194308, 4, Rf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ii(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ii(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = tm.bind(null, W, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ia,
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = ia(!1),
        t = e[0];
      return (e = em.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = W,
        i = Ve();
      if (H) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(C(349));
        qt & 30 || gf(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        la(Sf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        gr(9, wf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = ie.identifierPrefix;
      if (H) {
        var n = Ze,
          r = Ye;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  im = {
    readContext: Ie,
    useCallback: Nf,
    useContext: Ie,
    useEffect: Hs,
    useImperativeHandle: Of,
    useInsertionEffect: kf,
    useLayoutEffect: Pf,
    useMemo: _f,
    useReducer: jl,
    useRef: xf,
    useState: function () {
      return jl(vr);
    },
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      var t = Me();
      return Tf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(vr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: yf,
    useSyncExternalStore: vf,
    useId: Lf,
    unstable_isNewReconciler: !1,
  },
  lm = {
    readContext: Ie,
    useCallback: Nf,
    useContext: Ie,
    useEffect: Hs,
    useImperativeHandle: Of,
    useInsertionEffect: kf,
    useLayoutEffect: Pf,
    useMemo: _f,
    useReducer: Bl,
    useRef: xf,
    useState: function () {
      return Bl(vr);
    },
    useDebugValue: Vs,
    useDeferredValue: function (e) {
      var t = Me();
      return Z === null ? (t.memoizedState = e) : Tf(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(vr)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: yf,
    useSyncExternalStore: vf,
    useId: Lf,
    unstable_isNewReconciler: !1,
  };
function kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var om = typeof WeakMap == "function" ? WeakMap : Map;
function Mf(e, t, n) {
  (n = be(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zi || ((zi = !0), (Wo = r)), Mo(e, t);
    }),
    n
  );
}
function zf(e, t, n) {
  (n = be(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Mo(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Mo(e, t),
          typeof r != "function" &&
            (Ct === null ? (Ct = new Set([this])) : Ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new om();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Sm.bind(null, e, t, n)), t.then(e, e));
}
function sa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ua(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = be(-1, 1)), (t.tag = 2), Et(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sm = lt.ReactCurrentOwner,
  we = !1;
function pe(e, t, n, r) {
  t.child = e === null ? pf(t, null, n, r) : Cn(t, e.child, n, r);
}
function aa(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    vn(t, i),
    (r = Qs(e, t, n, r, l, i)),
    (n = $s()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && n && _s(t), (t.flags |= 1), pe(e, t, r, i), t.child)
  );
}
function ca(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Zs(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Af(e, t, l, r, i))
      : ((e = ui(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cr), n(o, r) && e.ref === t.ref)
    )
      return it(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = kt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Af(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (cr(l, r) && e.ref === t.ref)
      if (((we = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (we = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return zo(e, t, n, r, i);
}
function Uf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(dn, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(dn, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(dn, xe),
        (xe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(dn, xe),
      (xe |= r);
  return pe(e, t, i, n), t.child;
}
function jf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zo(e, t, n, r, i) {
  var l = Ee(n) ? Vt : de.current;
  return (
    (l = Sn(t, l)),
    vn(t, i),
    (n = Qs(e, t, n, r, l, i)),
    (r = $s()),
    e !== null && !we
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && r && _s(t), (t.flags |= 1), pe(e, t, n, i), t.child)
  );
}
function fa(e, t, n, r, i) {
  if (Ee(n)) {
    var l = !0;
    Ri(t);
  } else l = !1;
  if ((vn(t, i), t.stateNode === null))
    li(e, t), df(t, n, r), Io(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      s = t.memoizedProps;
    o.props = s;
    var u = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ie(a))
      : ((a = Ee(n) ? Vt : de.current), (a = Sn(t, a)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && na(t, o, r, a)),
      (ct = !1);
    var m = t.memoizedState;
    (o.state = m),
      Li(t, r, o, i),
      (u = t.memoizedState),
      s !== r || m !== u || Se.current || ct
        ? (typeof c == "function" && (Do(t, n, c, r), (u = t.memoizedState)),
          (s = ct || ta(t, n, s, r, m, u, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = a),
          (r = s))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      cf(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : Ae(t.type, s)),
      (o.props = a),
      (h = t.pendingProps),
      (m = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ie(u))
        : ((u = Ee(n) ? Vt : de.current), (u = Sn(t, u)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((s !== h || m !== u) && na(t, o, r, u)),
      (ct = !1),
      (m = t.memoizedState),
      (o.state = m),
      Li(t, r, o, i);
    var y = t.memoizedState;
    s !== h || m !== y || Se.current || ct
      ? (typeof g == "function" && (Do(t, n, g, r), (y = t.memoizedState)),
        (a = ct || ta(t, n, a, r, m, y, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = u),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ao(e, t, n, r, l, i);
}
function Ao(e, t, n, r, i, l) {
  jf(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Xu(t, n, !1), it(e, t, l);
  (r = t.stateNode), (sm.current = t);
  var s =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Cn(t, e.child, null, l)), (t.child = Cn(t, null, s, l)))
      : pe(e, t, s, l),
    (t.memoizedState = r.state),
    i && Xu(t, n, !0),
    t.child
  );
}
function Bf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gu(e, t.context, !1),
    As(e, t.containerInfo);
}
function da(e, t, n, r, i) {
  return En(), Ls(i), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var Uo = { dehydrated: null, treeContext: null, retryLane: 0 };
function jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qf(e, t, n) {
  var r = t.pendingProps,
    i = V.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    s;
  if (
    ((s = o) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(V, i & 1),
    e === null)
  )
    return (
      Lo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = rl(o, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = jo(n)),
              (t.memoizedState = Uo),
              e)
            : Ws(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return um(e, t, o, r, s, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = kt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (l = kt(s, l)) : ((l = Ht(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? jo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Uo),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = kt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ws(e, t) {
  return (
    (t = rl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kr(e, t, n, r) {
  return (
    r !== null && Ls(r),
    Cn(t, e.child, null, n),
    (e = Ws(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function um(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(C(422)))), Kr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = rl({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Ht(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, o),
        (t.child.memoizedState = jo(o)),
        (t.memoizedState = Uo),
        l);
  if (!(t.mode & 1)) return Kr(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(C(419))), (r = Ql(l, r, void 0)), Kr(e, t, o, r);
  }
  if (((s = (o & e.childLanes) !== 0), we || s)) {
    if (((r = ie), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), rt(e, i), Qe(r, e, i, -1));
    }
    return Ys(), (r = Ql(Error(C(421)))), Kr(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Em.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ke = St(i.nextSibling)),
      (Pe = t),
      (H = !0),
      (je = null),
      e !== null &&
        ((Te[Le++] = Ye),
        (Te[Le++] = Ze),
        (Te[Le++] = Wt),
        (Ye = e.id),
        (Ze = e.overflow),
        (Wt = t)),
      (t = Ws(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ha(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fo(e.return, t, n);
}
function $l(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function $f(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ha(e, n, t);
        else if (e.tag === 19) ha(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Fi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          $l(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        $l(t, !0, n, null, l);
        break;
      case "together":
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = kt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function am(e, t, n) {
  switch (t.tag) {
    case 3:
      Bf(t), En();
      break;
    case 5:
      mf(t);
      break;
    case 1:
      Ee(t.type) && Ri(t);
      break;
    case 4:
      As(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(_i, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qf(e, t, n)
          : (B(V, V.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      B(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $f(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Uf(e, t, n);
  }
  return it(e, t, n);
}
var Hf, Bo, Vf, Wf;
Hf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Bo = function () {};
Vf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Bt(Je.current);
    var l = null;
    switch (n) {
      case "input":
        (i = so(e, i)), (r = so(e, r)), (l = []);
        break;
      case "select":
        (i = q({}, i, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = co(e, i)), (r = co(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ki);
    }
    ho(n, r);
    var o;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var s = i[a];
          for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (rr.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (o in s)
              !s.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                s[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (rr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && Q("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Wf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ts(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ce(t), null;
    case 1:
      return Ee(t.type) && Pi(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xn(),
        $(Se),
        $(de),
        js(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (Jo(je), (je = null)))),
        Bo(e, t),
        ce(t),
        null
      );
    case 5:
      Us(t);
      var i = Bt(mr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ce(t), null;
        }
        if (((e = Bt(Je.current)), Wr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[We] = t), (r[hr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qn.length; i++) Q(qn[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Cu(r, l), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              ku(r, l), Q("invalid", r);
          }
          ho(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var s = l[o];
              o === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Vr(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Vr(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : rr.hasOwnProperty(o) &&
                  s != null &&
                  o === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              zr(r), xu(r, l, !0);
              break;
            case "textarea":
              zr(r), Pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = ki);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[We] = t),
            (e[hr] = r),
            Hf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = po(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < qn.length; i++) Q(qn[i], e);
                i = r;
                break;
              case "source":
                Q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (i = r);
                break;
              case "details":
                Q("toggle", e), (i = r);
                break;
              case "input":
                Cu(e, r), (i = so(e, r)), Q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                ku(e, r), (i = co(e, r)), Q("invalid", e);
                break;
              default:
                i = r;
            }
            ho(n, i), (s = i);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? Sc(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && gc(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ir(e, u)
                    : typeof u == "number" && ir(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (rr.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && Q("scroll", e)
                      : u != null && ms(e, l, u, o));
              }
            switch (n) {
              case "input":
                zr(e), xu(e, r, !1);
                break;
              case "textarea":
                zr(e), Pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? hn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      hn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ki);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Bt(mr.current)), Bt(Je.current), Wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (l = r.nodeValue !== n) && ((e = Pe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        ($(V),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && ke !== null && t.mode & 1 && !(t.flags & 128))
          uf(), En(), (t.flags |= 98560), (l = !1);
        else if (((l = Wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(C(317));
            l[We] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (l = !1);
        } else je !== null && (Jo(je), (je = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || V.current & 1 ? b === 0 && (b = 3) : Ys())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        xn(), Bo(e, t), e === null && fr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Is(t.type._context), ce(t), null;
    case 17:
      return Ee(t.type) && Pi(), ce(t), null;
    case 19:
      if (($(V), (l = t.memoizedState), l === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) Bn(l, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Bn(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            G() > Pn &&
            ((t.flags |= 128), (r = !0), Bn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Fi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !H)
            )
              return ce(t), null;
          } else
            2 * G() - l.renderingStartTime > Pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = G()),
          (t.sibling = null),
          (n = V.current),
          B(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        Xs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function fm(e, t) {
  switch ((Ts(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && Pi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xn(),
        $(Se),
        $(de),
        js(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Us(t), null;
    case 13:
      if (($(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(V), null;
    case 4:
      return xn(), null;
    case 10:
      return Is(t.type._context), null;
    case 22:
    case 23:
      return Xs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jr = !1,
  fe = !1,
  dm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Qo(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var pa = !1;
function hm(e, t) {
  if (((ko = Ei), (e = Jc()), Ns(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (i !== 0 && h.nodeType !== 3) || (s = o + i),
                h !== l || (r !== 0 && h.nodeType !== 3) || (u = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (m = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++a === i && (s = o),
                m === l && ++c === r && (u = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = g;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Po = { focusedElem: e, selectionRange: n }, Ei = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ae(t.type, v),
                      E
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (w) {
          K(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (y = pa), (pa = !1), y;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && Qo(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $o(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function qf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[hr], delete t[No], delete t[Gp], delete t[Xp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ma(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ho(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ho(e, t, n), e = e.sibling; e !== null; ) Ho(e, t, n), (e = e.sibling);
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
var oe = null,
  Ue = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) Jf(e, t, n), (n = n.sibling);
}
function Jf(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(Ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || fn(n, t);
    case 6:
      var r = oe,
        i = Ue;
      (oe = null),
        st(e, t, n),
        (oe = r),
        (Ue = i),
        oe !== null &&
          (Ue
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Ue
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            ur(e))
          : Ml(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = Ue),
        (oe = n.stateNode.containerInfo),
        (Ue = !0),
        st(e, t, n),
        (oe = r),
        (Ue = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && Qo(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          K(n, t, s);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), st(e, t, n), (fe = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function ya(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new dm()),
      t.forEach(function (r) {
        var i = Cm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          s = o;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (oe = s.stateNode), (Ue = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(C(160));
        Jf(l, o, i), (oe = null), (Ue = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        K(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gf(t, e), (t = t.sibling);
}
function Gf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), He(e), r & 4)) {
        try {
          er(3, e, e.return), tl(3, e);
        } catch (v) {
          K(e, e.return, v);
        }
        try {
          er(5, e, e.return);
        } catch (v) {
          K(e, e.return, v);
        }
      }
      break;
    case 1:
      ze(t, e), He(e), r & 512 && n !== null && fn(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        He(e),
        r & 512 && n !== null && fn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ir(i, "");
        } catch (v) {
          K(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && mc(i, l),
              po(s, o);
            var a = po(s, l);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                h = u[o + 1];
              c === "style"
                ? Sc(i, h)
                : c === "dangerouslySetInnerHTML"
                ? gc(i, h)
                : c === "children"
                ? ir(i, h)
                : ms(i, c, h, a);
            }
            switch (s) {
              case "input":
                uo(i, l);
                break;
              case "textarea":
                yc(i, l);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? hn(i, !!l.multiple, g, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hn(i, !!l.multiple, l.defaultValue, !0)
                      : hn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[hr] = l;
          } catch (v) {
            K(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ze(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (v) {
          K(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (v) {
          K(e, e.return, v);
        }
      break;
    case 4:
      ze(t, e), He(e);
      break;
    case 13:
      ze(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Js = G())),
        r & 4 && ya(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (a = fe) || c), ze(t, e), (fe = a)) : ze(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (h = _ = c; _ !== null; ) {
              switch (((m = _), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, m, m.return);
                  break;
                case 1:
                  fn(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      K(r, n, v);
                    }
                  }
                  break;
                case 5:
                  fn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ga(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (_ = g)) : ga(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  a
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = wc("display", o)));
              } catch (v) {
                K(e, e.return, v);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (v) {
                K(e, e.return, v);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), He(e), r & 4 && ya(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ir(i, ""), (r.flags &= -33));
          var l = ma(e);
          Vo(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            s = ma(e);
          Ho(e, s, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  (_ = e), Xf(e);
}
function Xf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var i = _,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Jr;
      if (!o) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || fe;
        s = Jr;
        var a = fe;
        if (((Jr = o), (fe = u) && !a))
          for (_ = i; _ !== null; )
            (o = _),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? wa(i)
                : u !== null
                ? ((u.return = o), (_ = u))
                : wa(i);
        for (; l !== null; ) (_ = l), Xf(l), (l = l.sibling);
        (_ = i), (Jr = s), (fe = a);
      }
      va(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (_ = l)) : va(e);
  }
}
function va(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ae(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ea(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ea(t, o, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && ur(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        fe || (t.flags & 512 && $o(t));
      } catch (m) {
        K(t, t.return, m);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ga(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function wa(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, i, u);
            }
          }
          var l = t.return;
          try {
            $o(t);
          } catch (u) {
            K(t, l, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            $o(t);
          } catch (u) {
            K(t, o, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var mm = Math.ceil,
  Mi = lt.ReactCurrentDispatcher,
  qs = lt.ReactCurrentOwner,
  De = lt.ReactCurrentBatchConfig,
  A = 0,
  ie = null,
  Y = null,
  se = 0,
  xe = 0,
  dn = Tt(0),
  b = 0,
  wr = null,
  Kt = 0,
  nl = 0,
  Ks = 0,
  tr = null,
  ge = null,
  Js = 0,
  Pn = 1 / 0,
  Ge = null,
  zi = !1,
  Wo = null,
  Ct = null,
  Gr = !1,
  mt = null,
  Ai = 0,
  nr = 0,
  qo = null,
  oi = -1,
  si = 0;
function me() {
  return A & 6 ? G() : oi !== -1 ? oi : (oi = G());
}
function xt(e) {
  return e.mode & 1
    ? A & 2 && se !== 0
      ? se & -se
      : Zp.transition !== null
      ? (si === 0 && (si = Fc()), si)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jc(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (qo = null), Error(C(185)));
  kr(e, n, r),
    (!(A & 2) || e !== ie) &&
      (e === ie && (!(A & 2) && (nl |= n), b === 4 && ht(e, se)),
      Ce(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((Pn = G() + 500), Zi && Lt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Zh(e, t);
  var r = Si(e, e === ie ? se : 0);
  if (r === 0)
    n !== null && Nu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Nu(n), t === 1))
      e.tag === 0 ? Yp(Sa.bind(null, e)) : lf(Sa.bind(null, e)),
        Kp(function () {
          !(A & 6) && Lt();
        }),
        (n = null);
    else {
      switch (Dc(r)) {
        case 1:
          n = Ss;
          break;
        case 4:
          n = Tc;
          break;
        case 16:
          n = wi;
          break;
        case 536870912:
          n = Lc;
          break;
        default:
          n = wi;
      }
      n = id(n, Yf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yf(e, t) {
  if (((oi = -1), (si = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = Si(e, e === ie ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
  else {
    t = r;
    var i = A;
    A |= 2;
    var l = bf();
    (ie !== e || se !== t) && ((Ge = null), (Pn = G() + 500), $t(e, t));
    do
      try {
        gm();
        break;
      } catch (s) {
        Zf(e, s);
      }
    while (1);
    Ds(),
      (Mi.current = l),
      (A = i),
      Y !== null ? (t = 0) : ((ie = null), (se = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = wo(e)), i !== 0 && ((r = i), (t = Ko(e, i)))), t === 1)
    )
      throw ((n = wr), $t(e, 0), ht(e, r), Ce(e, G()), n);
    if (t === 6) ht(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ym(i) &&
          ((t = Ui(e, r)),
          t === 2 && ((l = wo(e)), l !== 0 && ((r = l), (t = Ko(e, l)))),
          t === 1))
      )
        throw ((n = wr), $t(e, 0), ht(e, r), Ce(e, G()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          zt(e, ge, Ge);
          break;
        case 3:
          if (
            (ht(e, r), (r & 130023424) === r && ((t = Js + 500 - G()), 10 < t))
          ) {
            if (Si(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Oo(zt.bind(null, e, ge, Ge), t);
            break;
          }
          zt(e, ge, Ge);
          break;
        case 4:
          if ((ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Be(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * mm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oo(zt.bind(null, e, ge, Ge), r);
            break;
          }
          zt(e, ge, Ge);
          break;
        case 5:
          zt(e, ge, Ge);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ce(e, G()), e.callbackNode === n ? Yf.bind(null, e) : null;
}
function Ko(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Ui(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && Jo(t)),
    e
  );
}
function Jo(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function ym(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!$e(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ht(e, t) {
  for (
    t &= ~Ks,
      t &= ~nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sa(e) {
  if (A & 6) throw Error(C(327));
  gn();
  var t = Si(e, 0);
  if (!(t & 1)) return Ce(e, G()), null;
  var n = Ui(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wo(e);
    r !== 0 && ((t = r), (n = Ko(e, r)));
  }
  if (n === 1) throw ((n = wr), $t(e, 0), ht(e, t), Ce(e, G()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, ge, Ge),
    Ce(e, G()),
    null
  );
}
function Gs(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((Pn = G() + 500), Zi && Lt());
  }
}
function Jt(e) {
  mt !== null && mt.tag === 0 && !(A & 6) && gn();
  var t = A;
  A |= 1;
  var n = De.transition,
    r = U;
  try {
    if (((De.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (De.transition = n), (A = t), !(A & 6) && Lt();
  }
}
function Xs() {
  (xe = dn.current), $(dn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qp(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ts(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Pi();
          break;
        case 3:
          xn(), $(Se), $(de), js();
          break;
        case 5:
          Us(r);
          break;
        case 4:
          xn();
          break;
        case 13:
          $(V);
          break;
        case 19:
          $(V);
          break;
        case 10:
          Is(r.type._context);
          break;
        case 22:
        case 23:
          Xs();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (Y = e = kt(e.current, null)),
    (se = xe = t),
    (b = 0),
    (wr = null),
    (Ks = nl = Kt = 0),
    (ge = tr = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function Zf(e, t) {
  do {
    var n = Y;
    try {
      if ((Ds(), (ri.current = Ii), Di)) {
        for (var r = W.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Di = !1;
      }
      if (
        ((qt = 0),
        (re = Z = W = null),
        (bn = !1),
        (yr = 0),
        (qs.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (wr = t), (Y = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          s = n,
          u = t;
        if (
          ((t = se),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = sa(o);
          if (g !== null) {
            (g.flags &= -257),
              ua(g, o, s, l, t),
              g.mode & 1 && oa(l, a, t),
              (t = g),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(u), (t.updateQueue = v);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              oa(l, a, t), Ys();
              break e;
            }
            u = Error(C(426));
          }
        } else if (H && s.mode & 1) {
          var E = sa(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              ua(E, o, s, l, t),
              Ls(kn(u, s));
            break e;
          }
        }
        (l = u = kn(u, s)),
          b !== 4 && (b = 2),
          tr === null ? (tr = [l]) : tr.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = Mf(l, u, t);
              bu(l, d);
              break e;
            case 1:
              s = u;
              var f = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ct === null || !Ct.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = zf(l, s, t);
                bu(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      td(n);
    } catch (R) {
      (t = R), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function bf() {
  var e = Mi.current;
  return (Mi.current = Ii), e === null ? Ii : e;
}
function Ys() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ie === null || (!(Kt & 268435455) && !(nl & 268435455)) || ht(ie, se);
}
function Ui(e, t) {
  var n = A;
  A |= 2;
  var r = bf();
  (ie !== e || se !== t) && ((Ge = null), $t(e, t));
  do
    try {
      vm();
      break;
    } catch (i) {
      Zf(e, i);
    }
  while (1);
  if ((Ds(), (A = n), (Mi.current = r), Y !== null)) throw Error(C(261));
  return (ie = null), (se = 0), b;
}
function vm() {
  for (; Y !== null; ) ed(Y);
}
function gm() {
  for (; Y !== null && !Hh(); ) ed(Y);
}
function ed(e) {
  var t = rd(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? td(e) : (Y = t),
    (qs.current = null);
}
function td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fm(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (Y = null);
        return;
      }
    } else if (((n = cm(n, t, xe)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function zt(e, t, n) {
  var r = U,
    i = De.transition;
  try {
    (De.transition = null), (U = 1), wm(e, t, n, r);
  } finally {
    (De.transition = i), (U = r);
  }
  return null;
}
function wm(e, t, n, r) {
  do gn();
  while (mt !== null);
  if (A & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (bh(e, l),
    e === ie && ((Y = ie = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gr ||
      ((Gr = !0),
      id(wi, function () {
        return gn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = De.transition), (De.transition = null);
    var o = U;
    U = 1;
    var s = A;
    (A |= 4),
      (qs.current = null),
      hm(e, n),
      Gf(n, e),
      jp(Po),
      (Ei = !!ko),
      (Po = ko = null),
      (e.current = n),
      pm(n),
      Vh(),
      (A = s),
      (U = o),
      (De.transition = l);
  } else e.current = n;
  if (
    (Gr && ((Gr = !1), (mt = e), (Ai = i)),
    (l = e.pendingLanes),
    l === 0 && (Ct = null),
    Kh(n.stateNode),
    Ce(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (zi) throw ((zi = !1), (e = Wo), (Wo = null), e);
  return (
    Ai & 1 && e.tag !== 0 && gn(),
    (l = e.pendingLanes),
    l & 1 ? (e === qo ? nr++ : ((nr = 0), (qo = e))) : (nr = 0),
    Lt(),
    null
  );
}
function gn() {
  if (mt !== null) {
    var e = Dc(Ai),
      t = De.transition,
      n = U;
    try {
      if (((De.transition = null), (U = 16 > e ? 16 : e), mt === null))
        var r = !1;
      else {
        if (((e = mt), (mt = null), (Ai = 0), A & 6)) throw Error(C(331));
        var i = A;
        for (A |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            o = l.child;
          if (_.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (_ = a; _ !== null; ) {
                  var c = _;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, c, l);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (_ = h);
                  else
                    for (; _ !== null; ) {
                      c = _;
                      var m = c.sibling,
                        g = c.return;
                      if ((qf(c), c === a)) {
                        _ = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (_ = m);
                        break;
                      }
                      _ = g;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (_ = d);
                break e;
              }
              _ = l.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          o = _;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (_ = p);
          else
            e: for (o = f; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tl(9, s);
                  }
                } catch (R) {
                  K(s, s.return, R);
                }
              if (s === o) {
                _ = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (_ = w);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((A = i), Lt(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(Ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (De.transition = t);
    }
  }
  return !1;
}
function Ea(e, t, n) {
  (t = kn(n, t)),
    (t = Mf(e, t, 1)),
    (e = Et(e, t, 1)),
    (t = me()),
    e !== null && (kr(e, 1, t), Ce(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Ea(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ea(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ct === null || !Ct.has(r)))
        ) {
          (e = kn(n, e)),
            (e = zf(t, e, 1)),
            (t = Et(t, e, 1)),
            (e = me()),
            t !== null && (kr(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (se & n) === n &&
      (b === 4 || (b === 3 && (se & 130023424) === se && 500 > G() - Js)
        ? $t(e, 0)
        : (Ks |= n)),
    Ce(e, t);
}
function nd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = me();
  (e = rt(e, t)), e !== null && (kr(e, t, n), Ce(e, n));
}
function Em(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), nd(e, n);
}
function Cm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) we = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), am(e, t, n);
      we = !!(e.flags & 131072);
    }
  else (we = !1), H && t.flags & 1048576 && of(t, Ni, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      li(e, t), (e = t.pendingProps);
      var i = Sn(t, de.current);
      vn(t, n), (i = Qs(null, t, r, e, i, n));
      var l = $s();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((l = !0), Ri(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            zs(t),
            (i.updater = bi),
            (t.stateNode = i),
            (i._reactInternals = t),
            Io(t, r, e, n),
            (t = Ao(null, t, r, !0, l, n)))
          : ((t.tag = 0), H && l && _s(t), pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (li(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = km(r)),
          (e = Ae(r, e)),
          i)
        ) {
          case 0:
            t = zo(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = aa(null, t, r, e, n);
            break e;
          case 14:
            t = ca(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        zo(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        fa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Bf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          cf(e, t),
          Li(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = kn(Error(C(423)), t)), (t = da(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = kn(Error(C(424)), t)), (t = da(e, t, r, n, i));
            break e;
          } else
            for (
              ke = St(t.stateNode.containerInfo.firstChild),
                Pe = t,
                H = !0,
                je = null,
                n = pf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === i)) {
            t = it(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mf(t),
        e === null && Lo(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ro(r, i) ? (o = null) : l !== null && Ro(r, l) && (t.flags |= 32),
        jf(e, t),
        pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Lo(t), null;
    case 13:
      return Qf(e, t, n);
    case 4:
      return (
        As(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        aa(e, t, r, i, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          B(_i, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if ($e(l.value, o)) {
            if (l.children === i.children && !Se.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                o = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = be(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Fo(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (s = o.alternate),
                  s !== null && (s.lanes |= n),
                  Fo(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        vn(t, n),
        (i = Ie(i)),
        (r = r(i)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ae(r, t.pendingProps)),
        (i = Ae(r.type, i)),
        ca(e, t, r, i, n)
      );
    case 15:
      return Af(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        li(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), Ri(t)) : (e = !1),
        vn(t, n),
        df(t, r, i),
        Io(t, r, i, n),
        Ao(null, t, r, !0, e, n)
      );
    case 19:
      return $f(e, t, n);
    case 22:
      return Uf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function id(e, t) {
  return _c(e, t);
}
function xm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new xm(e, t, n, r);
}
function Zs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function km(e) {
  if (typeof e == "function") return Zs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vs)) return 11;
    if (e === gs) return 14;
  }
  return 2;
}
function kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ui(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) Zs(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case tn:
        return Ht(n.children, i, l, t);
      case ys:
        (o = 8), (i |= 8);
        break;
      case ro:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = ro), (e.lanes = l), e
        );
      case io:
        return (e = Fe(13, n, t, i)), (e.elementType = io), (e.lanes = l), e;
      case lo:
        return (e = Fe(19, n, t, i)), (e.elementType = lo), (e.lanes = l), e;
      case dc:
        return rl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cc:
              o = 10;
              break e;
            case fc:
              o = 9;
              break e;
            case vs:
              o = 11;
              break e;
            case gs:
              o = 14;
              break e;
            case at:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ht(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function rl(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = dc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hl(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function Vl(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function bs(e, t, n, r, i, l, o, s, u) {
  return (
    (e = new Pm(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Fe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zs(l),
    e
  );
}
function Rm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: en,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ld(e) {
  if (!e) return Ot;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return rf(e, n, t);
  }
  return t;
}
function od(e, t, n, r, i, l, o, s, u) {
  return (
    (e = bs(n, r, !0, e, i, l, o, s, u)),
    (e.context = ld(null)),
    (n = e.current),
    (r = me()),
    (i = xt(n)),
    (l = be(r, i)),
    (l.callback = t ?? null),
    Et(n, l, i),
    (e.current.lanes = i),
    kr(e, i, r),
    Ce(e, r),
    e
  );
}
function il(e, t, n, r) {
  var i = t.current,
    l = me(),
    o = xt(i);
  return (
    (n = ld(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = be(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Et(i, t, o)),
    e !== null && (Qe(e, i, o, l), ni(e, i, o)),
    o
  );
}
function ji(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function eu(e, t) {
  Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function Om() {
  return null;
}
var sd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function tu(e) {
  this._internalRoot = e;
}
ll.prototype.render = tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  il(e, t, null, null);
};
ll.prototype.unmount = tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function () {
      il(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function ll(e) {
  this._internalRoot = e;
}
ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dt.length && t !== 0 && t < dt[n].priority; n++);
    dt.splice(n, 0, e), n === 0 && Uc(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xa() {}
function Nm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = ji(o);
        l.call(a);
      };
    }
    var o = od(t, r, e, 0, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = o),
      (e[nt] = o.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = ji(u);
      s.call(a);
    };
  }
  var u = bs(e, 0, !1, null, null, !1, !1, "", xa);
  return (
    (e._reactRootContainer = u),
    (e[nt] = u.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      il(t, u, n, r);
    }),
    u
  );
}
function sl(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = ji(o);
        s.call(u);
      };
    }
    il(t, o, e, i);
  } else o = Nm(n, t, e, i, r);
  return ji(o);
}
Ic = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wn(t.pendingLanes);
        n !== 0 &&
          (Es(t, n | 1), Ce(t, G()), !(A & 6) && ((Pn = G() + 500), Lt()));
      }
      break;
    case 13:
      Jt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var i = me();
          Qe(r, e, 1, i);
        }
      }),
        eu(e, 1);
  }
};
Cs = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = me();
      Qe(t, e, 134217728, n);
    }
    eu(e, 134217728);
  }
};
Mc = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = me();
      Qe(n, e, t, r);
    }
    eu(e, t);
  }
};
zc = function () {
  return U;
};
Ac = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
yo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((uo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Yi(r);
            if (!i) throw Error(C(90));
            pc(r), uo(r, i);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      (t = n.value), t != null && hn(e, !!n.multiple, t, !1);
  }
};
xc = Gs;
kc = Jt;
var _m = { usingClientEntryPoint: !1, Events: [Rr, on, Yi, Ec, Cc, Gs] },
  Qn = {
    findFiberByHostInstance: Ut,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Tm = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Oc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || Om,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (Ki = Xr.inject(Tm)), (Ke = Xr);
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _m;
Oe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(t)) throw Error(C(200));
  return Rm(e, t, null, n);
};
Oe.createRoot = function (e, t) {
  if (!nu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = sd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = bs(e, 1, !1, null, null, n, !1, r, i)),
    (e[nt] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
  );
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Oc(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
  return Jt(e);
};
Oe.hydrate = function (e, t, n) {
  if (!ol(t)) throw Error(C(200));
  return sl(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
  if (!nu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = sd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = od(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[nt] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ll(t);
};
Oe.render = function (e, t, n) {
  if (!ol(t)) throw Error(C(200));
  return sl(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Jt(function () {
        sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = Gs;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ol(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return sl(e, t, n, !1, r);
};
Oe.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Oe);
})(Oh);
var ka = eo;
(bl.createRoot = ka.createRoot), (bl.hydrateRoot = ka.hydrateRoot);
class Nr {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((n) => n !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Sr = typeof window > "u" || "Deno" in window;
function _e() {}
function Lm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Go(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ud(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Kn(e, t, n) {
  return ul(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function ft(e, t, n) {
  return ul(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Pa(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: l,
    queryKey: o,
    stale: s,
  } = e;
  if (ul(o)) {
    if (r) {
      if (t.queryHash !== ru(o, t.options)) return !1;
    } else if (!Bi(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const u = t.isActive();
    if ((n === "active" && !u) || (n === "inactive" && u)) return !1;
  }
  return !(
    (typeof s == "boolean" && t.isStale() !== s) ||
    (typeof i < "u" && i !== t.state.fetchStatus) ||
    (l && !l(t))
  );
}
function Ra(e, t) {
  const { exact: n, fetching: r, predicate: i, mutationKey: l } = e;
  if (ul(l)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Qt(t.options.mutationKey) !== Qt(l)) return !1;
    } else if (!Bi(t.options.mutationKey, l)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function ru(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Qt)(e);
}
function Qt(e) {
  return JSON.stringify(e, (t, n) =>
    Xo(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function Bi(e, t) {
  return ad(e, t);
}
function ad(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !ad(e[n], t[n]))
    : !1;
}
function cd(e, t) {
  if (e === t) return e;
  const n = Na(e) && Na(t);
  if (n || (Xo(e) && Xo(t))) {
    const r = n ? e.length : Object.keys(e).length,
      i = n ? t : Object.keys(t),
      l = i.length,
      o = n ? [] : {};
    let s = 0;
    for (let u = 0; u < l; u++) {
      const a = n ? u : i[u];
      (o[a] = cd(e[a], t[a])), o[a] === e[a] && s++;
    }
    return r === l && s === r ? e : o;
  }
  return t;
}
function Oa(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Na(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xo(e) {
  if (!_a(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!_a(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function _a(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ul(e) {
  return Array.isArray(e);
}
function fd(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ta(e) {
  fd(0).then(e);
}
function Fm() {
  if (typeof AbortController == "function") return new AbortController();
}
function Yo(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? cd(e, t)
    : t;
}
class Dm extends Nr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Sr && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Qi = new Dm();
class Im extends Nr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Sr && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("online", n, !1),
            window.addEventListener("offline", n, !1),
            () => {
              window.removeEventListener("online", n),
                window.removeEventListener("offline", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const $i = new Im();
function Mm(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function al(e) {
  return (e ?? "online") === "online" ? $i.isOnline() : !0;
}
class dd {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function ai(e) {
  return e instanceof dd;
}
function hd(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    l,
    o;
  const s = new Promise((E, d) => {
      (l = E), (o = d);
    }),
    u = (E) => {
      r || (g(new dd(E)), e.abort == null || e.abort());
    },
    a = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    h = () => !Qi.isFocused() || (e.networkMode !== "always" && !$i.isOnline()),
    m = (E) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(E),
        i == null || i(),
        l(E));
    },
    g = (E) => {
      r ||
        ((r = !0), e.onError == null || e.onError(E), i == null || i(), o(E));
    },
    y = () =>
      new Promise((E) => {
        (i = (d) => {
          const f = r || !h();
          return f && E(d), f;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (i = void 0), r || e.onContinue == null || e.onContinue();
      }),
    v = () => {
      if (r) return;
      let E;
      try {
        E = e.fn();
      } catch (d) {
        E = Promise.reject(d);
      }
      Promise.resolve(E)
        .then(m)
        .catch((d) => {
          var f, p;
          if (r) return;
          const w = (f = e.retry) != null ? f : 3,
            R = (p = e.retryDelay) != null ? p : Mm,
            k = typeof R == "function" ? R(n, d) : R,
            O =
              w === !0 ||
              (typeof w == "number" && n < w) ||
              (typeof w == "function" && w(n, d));
          if (t || !O) {
            g(d);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, d),
            fd(k)
              .then(() => {
                if (h()) return y();
              })
              .then(() => {
                t ? g(d) : v();
              });
        });
    };
  return (
    al(e.networkMode) ? v() : y().then(v),
    {
      promise: s,
      cancel: u,
      continue: () => ((i == null ? void 0 : i()) ? s : Promise.resolve()),
      cancelRetry: a,
      continueRetry: c,
    }
  );
}
const iu = console;
function zm() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    };
  const i = (c) => {
      let h;
      t++;
      try {
        h = c();
      } finally {
        t--, t || s();
      }
      return h;
    },
    l = (c) => {
      t
        ? e.push(c)
        : Ta(() => {
            n(c);
          });
    },
    o =
      (c) =>
      (...h) => {
        l(() => {
          c(...h);
        });
      },
    s = () => {
      const c = e;
      (e = []),
        c.length &&
          Ta(() => {
            r(() => {
              c.forEach((h) => {
                n(h);
              });
            });
          });
    };
  return {
    batch: i,
    batchCalls: o,
    schedule: l,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    },
  };
}
const X = zm();
class pd {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Go(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (Sr ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class Am extends pd {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || iu),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || Um(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = Yo(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(_e).catch(_e) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !ud(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var l;
        return (l = this.retryer) == null || l.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const g = this.observers.find((y) => y.options.queryFn);
      g && this.setOptions(g.options);
    }
    Array.isArray(this.options.queryKey);
    const o = Fm(),
      s = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      u = (g) => {
        Object.defineProperty(g, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    u(s);
    const a = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(s))
          : Promise.reject("Missing queryFn"),
      c = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: a,
      };
    if (
      (u(c),
      (r = this.options.behavior) == null || r.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((i = c.fetchOptions) == null ? void 0 : i.meta))
    ) {
      var h;
      this.dispatch({
        type: "fetch",
        meta: (h = c.fetchOptions) == null ? void 0 : h.meta,
      });
    }
    const m = (g) => {
      if (
        ((ai(g) && g.silent) || this.dispatch({ type: "error", error: g }),
        !ai(g))
      ) {
        var y, v;
        (y = (v = this.cache.config).onError) == null || y.call(v, g, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = hd({
        fn: c.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (g) => {
          var y, v;
          if (typeof g > "u") {
            m(new Error("undefined"));
            return;
          }
          this.setData(g),
            (y = (v = this.cache.config).onSuccess) == null ||
              y.call(v, g, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: m,
        onFail: (g, y) => {
          this.dispatch({ type: "failed", failureCount: g, error: y });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var i, l;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = t.meta) != null ? i : null,
            fetchStatus: al(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (l = t.dataUpdatedAt) != null ? l : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const o = t.error;
          return ai(o) && o.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      X.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function Um(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class jm extends Nr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var i;
    const l = n.queryKey,
      o = (i = n.queryHash) != null ? i : ru(l, n);
    let s = this.get(o);
    return (
      s ||
        ((s = new Am({
          cache: this,
          logger: t.getLogger(),
          queryKey: l,
          queryHash: o,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(l),
        })),
        this.add(s)),
      s
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    X.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = ft(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((i) => Pa(r, i))
    );
  }
  findAll(t, n) {
    const [r] = ft(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((i) => Pa(r, i))
      : this.queries;
  }
  notify(t) {
    X.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    X.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    X.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class Bm extends pd {
  constructor(t) {
    super(),
      (this.options = { ...t.defaultOptions, ...t.options }),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || iu),
      (this.observers = []),
      (this.state = t.state || Qm()),
      this.updateCacheTime(this.options.cacheTime),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var p;
        return (
          (this.retryer = hd({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (w, R) => {
              this.dispatch({ type: "failed", failureCount: w, error: R });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (p = this.options.retry) != null ? p : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, i, l, o, s, u;
      if (!n) {
        var a, c, h, m;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((a = (c = this.mutationCache.config).onMutate) == null
            ? void 0
            : a.call(c, this.state.variables, this));
        const w = await ((h = (m = this.options).onMutate) == null
          ? void 0
          : h.call(m, this.state.variables));
        w !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: w,
            variables: this.state.variables,
          });
      }
      const p = await t();
      return (
        await ((r = (i = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(i, p, this.state.variables, this.state.context, this)),
        await ((l = (o = this.options).onSuccess) == null
          ? void 0
          : l.call(o, p, this.state.variables, this.state.context)),
        await ((s = (u = this.options).onSettled) == null
          ? void 0
          : s.call(u, p, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: p }),
        p
      );
    } catch (p) {
      try {
        var g, y, v, E, d, f;
        throw (
          (await ((g = (y = this.mutationCache.config).onError) == null
            ? void 0
            : g.call(y, p, this.state.variables, this.state.context, this)),
          await ((v = (E = this.options).onError) == null
            ? void 0
            : v.call(E, p, this.state.variables, this.state.context)),
          await ((d = (f = this.options).onSettled) == null
            ? void 0
            : d.call(f, void 0, p, this.state.variables, this.state.context)),
          p)
        );
      } finally {
        this.dispatch({ type: "error", error: p });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !al(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      X.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function Qm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class $m extends Nr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const i = new Bm({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
    });
    return this.add(i), i;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    X.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => Ra(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => Ra(t, n));
  }
  notify(t) {
    X.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return X.batch(() =>
            n.reduce(
              (r, i) => r.then(() => i.continue().catch(_e)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function Hm() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, i, l, o;
        const s =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          u =
            (r = e.fetchOptions) == null || (i = r.meta) == null
              ? void 0
              : i.fetchMore,
          a = u == null ? void 0 : u.pageParam,
          c = (u == null ? void 0 : u.direction) === "forward",
          h = (u == null ? void 0 : u.direction) === "backward",
          m = ((l = e.state.data) == null ? void 0 : l.pages) || [],
          g = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
        let y = g,
          v = !1;
        const E = (k) => {
            Object.defineProperty(k, "signal", {
              enumerable: !0,
              get: () => {
                var O;
                if ((O = e.signal) != null && O.aborted) v = !0;
                else {
                  var x;
                  (x = e.signal) == null ||
                    x.addEventListener("abort", () => {
                      v = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          d = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
          f = (k, O, x, M) => (
            (y = M ? [O, ...y] : [...y, O]), M ? [x, ...k] : [...k, x]
          ),
          p = (k, O, x, M) => {
            if (v) return Promise.reject("Cancelled");
            if (typeof x > "u" && !O && k.length) return Promise.resolve(k);
            const L = {
              queryKey: e.queryKey,
              pageParam: x,
              meta: e.options.meta,
            };
            E(L);
            const he = d(L);
            return Promise.resolve(he).then((Ft) => f(k, x, Ft, M));
          };
        let w;
        if (!m.length) w = p([]);
        else if (c) {
          const k = typeof a < "u",
            O = k ? a : La(e.options, m);
          w = p(m, k, O);
        } else if (h) {
          const k = typeof a < "u",
            O = k ? a : Vm(e.options, m);
          w = p(m, k, O, !0);
        } else {
          y = [];
          const k = typeof e.options.getNextPageParam > "u";
          w = (s && m[0] ? s(m[0], 0, m) : !0)
            ? p([], k, g[0])
            : Promise.resolve(f([], g[0], m[0]));
          for (let x = 1; x < m.length; x++)
            w = w.then((M) => {
              if (s && m[x] ? s(m[x], x, m) : !0) {
                const he = k ? g[x] : La(e.options, M);
                return p(M, k, he);
              }
              return Promise.resolve(f(M, g[x], m[x]));
            });
        }
        return w.then((k) => ({ pages: k, pageParams: y }));
      };
    },
  };
}
function La(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function Vm(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class Wm {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new jm()),
      (this.mutationCache = t.mutationCache || new $m()),
      (this.logger = t.logger || iu),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Qi.subscribe(() => {
          Qi.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = $i.subscribe(() => {
          $i.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = ft(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const i = Kn(t, n, r),
      l = this.getQueryData(i.queryKey);
    return l ? Promise.resolve(l) : this.fetchQuery(i);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const i = r.data;
        return [n, i];
      });
  }
  setQueryData(t, n, r) {
    const i = this.queryCache.find(t),
      l = i == null ? void 0 : i.state.data,
      o = Lm(n, l);
    if (typeof o > "u") return;
    const s = Kn(t),
      u = this.defaultQueryOptions(s);
    return this.queryCache.build(this, u).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return X.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = ft(t, n),
      i = this.queryCache;
    X.batch(() => {
      i.findAll(r).forEach((l) => {
        i.remove(l);
      });
    });
  }
  resetQueries(t, n, r) {
    const [i, l] = ft(t, n, r),
      o = this.queryCache,
      s = { type: "active", ...i };
    return X.batch(
      () => (
        o.findAll(i).forEach((u) => {
          u.reset();
        }),
        this.refetchQueries(s, l)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [i, l = {}] = ft(t, n, r);
    typeof l.revert > "u" && (l.revert = !0);
    const o = X.batch(() => this.queryCache.findAll(i).map((s) => s.cancel(l)));
    return Promise.all(o).then(_e).catch(_e);
  }
  invalidateQueries(t, n, r) {
    const [i, l] = ft(t, n, r);
    return X.batch(() => {
      var o, s;
      if (
        (this.queryCache.findAll(i).forEach((a) => {
          a.invalidate();
        }),
        i.refetchType === "none")
      )
        return Promise.resolve();
      const u = {
        ...i,
        type:
          (o = (s = i.refetchType) != null ? s : i.type) != null ? o : "active",
      };
      return this.refetchQueries(u, l);
    });
  }
  refetchQueries(t, n, r) {
    const [i, l] = ft(t, n, r),
      o = X.batch(() =>
        this.queryCache
          .findAll(i)
          .filter((u) => !u.isDisabled())
          .map((u) => {
            var a;
            return u.fetch(void 0, {
              ...l,
              cancelRefetch:
                (a = l == null ? void 0 : l.cancelRefetch) != null ? a : !0,
              meta: { refetchPage: i.refetchPage },
            });
          })
      );
    let s = Promise.all(o).then(_e);
    return (l != null && l.throwOnError) || (s = s.catch(_e)), s;
  }
  fetchQuery(t, n, r) {
    const i = Kn(t, n, r),
      l = this.defaultQueryOptions(i);
    typeof l.retry > "u" && (l.retry = !1);
    const o = this.queryCache.build(this, l);
    return o.isStaleByTime(l.staleTime)
      ? o.fetch(l)
      : Promise.resolve(o.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(_e).catch(_e);
  }
  fetchInfiniteQuery(t, n, r) {
    const i = Kn(t, n, r);
    return (i.behavior = Hm()), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(_e).catch(_e);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((i) => Qt(t) === Qt(i.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => Bi(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((i) => Qt(t) === Qt(i.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => Bi(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = ru(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class qm extends Nr {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.length === 1 &&
      (this.currentQuery.addObserver(this),
      Fa(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Zo(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Zo(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = []),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      i = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Oa(r, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const l = this.hasListeners();
    l && Da(this.currentQuery, i, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      l &&
        (this.currentQuery !== i ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    l &&
      (this.currentQuery !== i ||
        this.options.enabled !== r.enabled ||
        o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t);
    return this.createResult(n, t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({ ...n, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(_e)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      Sr || this.currentResult.isStale || !Go(this.options.staleTime))
    )
      return;
    const n = ud(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        Sr ||
        this.options.enabled === !1 ||
        !Go(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Qi.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      i = this.options,
      l = this.currentResult,
      o = this.currentResultState,
      s = this.currentResultOptions,
      u = t !== r,
      a = u ? t.state : this.currentQueryInitialState,
      c = u ? this.currentResult : this.previousQueryResult,
      { state: h } = t;
    let {
        dataUpdatedAt: m,
        error: g,
        errorUpdatedAt: y,
        fetchStatus: v,
        status: E,
      } = h,
      d = !1,
      f = !1,
      p;
    if (n._optimisticResults) {
      const x = this.hasListeners(),
        M = !x && Fa(t, n),
        L = x && Da(t, r, n, i);
      (M || L) &&
        ((v = al(t.options.networkMode) ? "fetching" : "paused"),
        m || (E = "loading")),
        n._optimisticResults === "isRestoring" && (v = "idle");
    }
    if (
      n.keepPreviousData &&
      !h.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      E !== "error"
    )
      (p = c.data), (m = c.dataUpdatedAt), (E = c.status), (d = !0);
    else if (n.select && typeof h.data < "u")
      if (
        l &&
        h.data === (o == null ? void 0 : o.data) &&
        n.select === this.selectFn
      )
        p = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (p = n.select(h.data)),
            (p = Yo(l == null ? void 0 : l.data, p, n)),
            (this.selectResult = p),
            (this.selectError = null);
        } catch (x) {
          this.selectError = x;
        }
    else p = h.data;
    if (typeof n.placeholderData < "u" && typeof p > "u" && E === "loading") {
      let x;
      if (
        l != null &&
        l.isPlaceholderData &&
        n.placeholderData === (s == null ? void 0 : s.placeholderData)
      )
        x = l.data;
      else if (
        ((x =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof x < "u")
      )
        try {
          (x = n.select(x)), (this.selectError = null);
        } catch (M) {
          this.selectError = M;
        }
      typeof x < "u" &&
        ((E = "success"),
        (p = Yo(l == null ? void 0 : l.data, x, n)),
        (f = !0));
    }
    this.selectError &&
      ((g = this.selectError),
      (p = this.selectResult),
      (y = Date.now()),
      (E = "error"));
    const w = v === "fetching",
      R = E === "loading",
      k = E === "error";
    return {
      status: E,
      fetchStatus: v,
      isLoading: R,
      isSuccess: E === "success",
      isError: k,
      isInitialLoading: R && w,
      data: p,
      dataUpdatedAt: m,
      error: g,
      errorUpdatedAt: y,
      failureCount: h.fetchFailureCount,
      failureReason: h.fetchFailureReason,
      errorUpdateCount: h.errorUpdateCount,
      isFetched: h.dataUpdateCount > 0 || h.errorUpdateCount > 0,
      isFetchedAfterMount:
        h.dataUpdateCount > a.dataUpdateCount ||
        h.errorUpdateCount > a.errorUpdateCount,
      isFetching: w,
      isRefetching: w && !R,
      isLoadingError: k && h.dataUpdatedAt === 0,
      isPaused: v === "paused",
      isPlaceholderData: f,
      isPreviousData: d,
      isRefetchError: k && h.dataUpdatedAt !== 0,
      isStale: lu(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Oa(r, n))
    )
      return;
    this.currentResult = r;
    const i = { cache: !0 },
      l = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const s = new Set(o ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && s.add("error"),
          Object.keys(this.currentResult).some((u) => {
            const a = u;
            return this.currentResult[a] !== n[a] && s.has(a);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && l() && (i.listeners = !0),
      this.notify({ ...i, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !ai(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    X.batch(() => {
      if (t.onSuccess) {
        var n, r, i, l;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (i = (l = this.options).onSettled) == null ||
            i.call(l, this.currentResult.data, null);
      } else if (t.onError) {
        var o, s, u, a;
        (o = (s = this.options).onError) == null ||
          o.call(s, this.currentResult.error),
          (u = (a = this.options).onSettled) == null ||
            u.call(a, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach((c) => {
          c(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function Km(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Fa(e, t) {
  return Km(e, t) || (e.state.dataUpdatedAt > 0 && Zo(e, t, t.refetchOnMount));
}
function Zo(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && lu(e, t));
  }
  return !1;
}
function Da(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    lu(e, n)
  );
}
function lu(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var bo = {},
  Jm = {
    get exports() {
      return bo;
    },
    set exports(e) {
      bo = e;
    },
  },
  md = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rn = P;
function Gm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xm = typeof Object.is == "function" ? Object.is : Gm,
  Ym = Rn.useState,
  Zm = Rn.useEffect,
  bm = Rn.useLayoutEffect,
  ey = Rn.useDebugValue;
function ty(e, t) {
  var n = t(),
    r = Ym({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    l = r[1];
  return (
    bm(
      function () {
        (i.value = n), (i.getSnapshot = t), Wl(i) && l({ inst: i });
      },
      [e, n, t]
    ),
    Zm(
      function () {
        return (
          Wl(i) && l({ inst: i }),
          e(function () {
            Wl(i) && l({ inst: i });
          })
        );
      },
      [e]
    ),
    ey(n),
    n
  );
}
function Wl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xm(e, n);
  } catch {
    return !0;
  }
}
function ny(e, t) {
  return t();
}
var ry =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? ny
    : ty;
md.useSyncExternalStore =
  Rn.useSyncExternalStore !== void 0 ? Rn.useSyncExternalStore : ry;
(function (e) {
  e.exports = md;
})(Jm);
const iy = bo.useSyncExternalStore,
  Ia = P.createContext(void 0),
  yd = P.createContext(!1);
function vd(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = Ia),
        window.ReactQueryClientContext)
      : Ia)
  );
}
const ly = ({ context: e } = {}) => {
    const t = P.useContext(vd(e, P.useContext(yd)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  oy = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    P.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const i = vd(n, r);
    return P.createElement(
      yd.Provider,
      { value: !n && r },
      P.createElement(i.Provider, { value: e }, t)
    );
  },
  gd = P.createContext(!1),
  sy = () => P.useContext(gd);
gd.Provider;
function uy() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const ay = P.createContext(uy()),
  cy = () => P.useContext(ay);
function fy(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const dy = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  hy = (e) => {
    P.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  py = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && fy(n, [e.error, r]),
  my = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  yy = (e, t) => e.isLoading && e.isFetching && !t,
  vy = (e, t, n) => (e == null ? void 0 : e.suspense) && yy(t, n),
  gy = (e, t, n) =>
    t
      .fetchOptimistic(e)
      .then(({ data: r }) => {
        e.onSuccess == null || e.onSuccess(r),
          e.onSettled == null || e.onSettled(r, null);
      })
      .catch((r) => {
        n.clearReset(),
          e.onError == null || e.onError(r),
          e.onSettled == null || e.onSettled(void 0, r);
      });
function wy(e, t) {
  const n = ly({ context: e.context }),
    r = sy(),
    i = cy(),
    l = n.defaultQueryOptions(e);
  (l._optimisticResults = r ? "isRestoring" : "optimistic"),
    l.onError && (l.onError = X.batchCalls(l.onError)),
    l.onSuccess && (l.onSuccess = X.batchCalls(l.onSuccess)),
    l.onSettled && (l.onSettled = X.batchCalls(l.onSettled)),
    my(l),
    dy(l, i),
    hy(i);
  const [o] = P.useState(() => new t(n, l)),
    s = o.getOptimisticResult(l);
  if (
    (iy(
      P.useCallback(
        (u) => (r ? () => {} : o.subscribe(X.batchCalls(u))),
        [o, r]
      ),
      () => o.getCurrentResult(),
      () => o.getCurrentResult()
    ),
    P.useEffect(() => {
      o.setOptions(l, { listeners: !1 });
    }, [l, o]),
    vy(l, s, r))
  )
    throw gy(l, o, i);
  if (
    py({
      result: s,
      errorResetBoundary: i,
      useErrorBoundary: l.useErrorBoundary,
      query: o.getCurrentQuery(),
    })
  )
    throw s.error;
  return l.notifyOnChangeProps ? s : o.trackResult(s);
}
function wd(e, t, n) {
  const r = Kn(e, t, n);
  return wy(r, qm);
}
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Er() {
  return (
    (Er = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Er.apply(this, arguments)
  );
}
var yt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(yt || (yt = {}));
const Ma = "popstate";
function Sy(e) {
  e === void 0 && (e = {});
  function t(i, l) {
    let {
      pathname: o = "/",
      search: s = "",
      hash: u = "",
    } = Yt(i.location.hash.substr(1));
    return es(
      "",
      { pathname: o, search: s, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(i, l) {
    let o = i.document.querySelector("base"),
      s = "";
    if (o && o.getAttribute("href")) {
      let u = i.location.href,
        a = u.indexOf("#");
      s = a === -1 ? u : u.slice(0, a);
    }
    return s + "#" + (typeof l == "string" ? l : Hi(l));
  }
  function r(i, l) {
    Ey(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(l) +
        ")"
    );
  }
  return xy(t, n, r, e);
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ey(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cy() {
  return Math.random().toString(36).substr(2, 8);
}
function za(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function es(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Er(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yt(t) : t,
      { state: n, key: (t && t.key) || r || Cy() }
    )
  );
}
function Hi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    o = i.history,
    s = yt.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), o.replaceState(Er({}, o.state, { idx: a }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    s = yt.Pop;
    let E = c(),
      d = E == null ? null : E - a;
    (a = E), u && u({ action: s, location: v.location, delta: d });
  }
  function m(E, d) {
    s = yt.Push;
    let f = es(v.location, E, d);
    n && n(f, E), (a = c() + 1);
    let p = za(f, a),
      w = v.createHref(f);
    try {
      o.pushState(p, "", w);
    } catch {
      i.location.assign(w);
    }
    l && u && u({ action: s, location: v.location, delta: 1 });
  }
  function g(E, d) {
    s = yt.Replace;
    let f = es(v.location, E, d);
    n && n(f, E), (a = c());
    let p = za(f, a),
      w = v.createHref(f);
    o.replaceState(p, "", w),
      l && u && u({ action: s, location: v.location, delta: 0 });
  }
  function y(E) {
    let d = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof E == "string" ? E : Hi(E);
    return (
      ee(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, d)
    );
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Ma, h),
        (u = E),
        () => {
          i.removeEventListener(Ma, h), (u = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let d = y(E);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: g,
    go(E) {
      return o.go(E);
    },
  };
  return v;
}
var Aa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Aa || (Aa = {}));
function ky(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Yt(t) : t,
    i = Cd(r.pathname || "/", n);
  if (i == null) return null;
  let l = Sd(e);
  Py(l);
  let o = null;
  for (let s = 0; o == null && s < l.length; ++s) o = Iy(l[s], Ay(i));
  return o;
}
function Sd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (l, o, s) => {
    let u = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (ee(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = Pt([r, u.relativePath]),
      c = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (ee(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Sd(l.children, t, c, a)),
      !(l.path == null && !l.index) &&
        t.push({ path: a, score: Fy(a, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, o) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) i(l, o);
      else for (let u of Ed(l.path)) i(l, o, u);
    }),
    t
  );
}
function Ed(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let o = Ed(r.join("/")),
    s = [];
  return (
    s.push(...o.map((u) => (u === "" ? l : [l, u].join("/")))),
    i && s.push(...o),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Py(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Ry = /^:\w+$/,
  Oy = 3,
  Ny = 2,
  _y = 1,
  Ty = 10,
  Ly = -2,
  Ua = (e) => e === "*";
function Fy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ua) && (r += Ly),
    t && (r += Ny),
    n
      .filter((i) => !Ua(i))
      .reduce((i, l) => i + (Ry.test(l) ? Oy : l === "" ? _y : Ty), r)
  );
}
function Dy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Iy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    l = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      u = o === n.length - 1,
      a = i === "/" ? t : t.slice(i.length) || "/",
      c = My(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let h = s.route;
    l.push({
      params: r,
      pathname: Pt([i, c.pathname]),
      pathnameBase: Qy(Pt([i, c.pathnameBase])),
      route: h,
    }),
      c.pathnameBase !== "/" && (i = Pt([i, c.pathnameBase]));
  }
  return l;
}
function My(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = zy(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    o = l.replace(/(.)\/+$/, "$1"),
    s = i.slice(1);
  return {
    params: r.reduce((a, c, h) => {
      if (c === "*") {
        let m = s[h] || "";
        o = l.slice(0, l.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (a[c] = Uy(s[h] || "", c)), a;
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function zy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ou(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, s) => (r.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Ay(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ou(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Uy(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ou(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Cd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ou(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Yt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : By(n, t)) : t,
    search: $y(r),
    hash: Hy(i),
  };
}
function By(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ql(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function kd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Yt(e))
    : ((i = Er({}, e)),
      ee(
        !i.pathname || !i.pathname.includes("?"),
        ql("?", "pathname", "search", i)
      ),
      ee(
        !i.pathname || !i.pathname.includes("#"),
        ql("#", "pathname", "hash", i)
      ),
      ee(!i.search || !i.search.includes("#"), ql("#", "search", "hash", i)));
  let l = e === "" || i.pathname === "",
    o = l ? "/" : i.pathname,
    s;
  if (r || o == null) s = n;
  else {
    let h = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (h -= 1);
      i.pathname = m.join("/");
    }
    s = h >= 0 ? t[h] : "/";
  }
  let u = jy(i, s),
    a = o && o !== "/" && o.endsWith("/"),
    c = (l || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Qy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  $y = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Hy = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Vy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Wy = ["post", "put", "patch", "delete"];
[...Wy];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ts() {
  return (
    (ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ts.apply(this, arguments)
  );
}
function qy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Ky = typeof Object.is == "function" ? Object.is : qy,
  { useState: Jy, useEffect: Gy, useLayoutEffect: Xy, useDebugValue: Yy } = Zl;
function Zy(e, t, n) {
  const r = t(),
    [{ inst: i }, l] = Jy({ inst: { value: r, getSnapshot: t } });
  return (
    Xy(() => {
      (i.value = r), (i.getSnapshot = t), Kl(i) && l({ inst: i });
    }, [e, r, t]),
    Gy(
      () => (
        Kl(i) && l({ inst: i }),
        e(() => {
          Kl(i) && l({ inst: i });
        })
      ),
      [e]
    ),
    Yy(r),
    r
  );
}
function Kl(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Ky(n, r);
  } catch {
    return !0;
  }
}
function by(e, t, n) {
  return t();
}
const ev =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  tv = !ev,
  nv = tv ? by : Zy;
"useSyncExternalStore" in Zl && ((e) => e.useSyncExternalStore)(Zl);
const Pd = P.createContext(null),
  Rd = P.createContext(null),
  cl = P.createContext(null),
  fl = P.createContext(null),
  Ln = P.createContext({ outlet: null, matches: [] }),
  Od = P.createContext(null);
function rv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  _r() || ee(!1);
  let { basename: r, navigator: i } = P.useContext(cl),
    { hash: l, pathname: o, search: s } = Nd(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Pt([r, o])),
    i.createHref({ pathname: u, search: s, hash: l })
  );
}
function _r() {
  return P.useContext(fl) != null;
}
function Fn() {
  return _r() || ee(!1), P.useContext(fl).location;
}
function iv() {
  _r() || ee(!1);
  let { basename: e, navigator: t } = P.useContext(cl),
    { matches: n } = P.useContext(Ln),
    { pathname: r } = Fn(),
    i = JSON.stringify(xd(n).map((s) => s.pathnameBase)),
    l = P.useRef(!1);
  return (
    P.useEffect(() => {
      l.current = !0;
    }),
    P.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof s == "number") {
          t.go(s);
          return;
        }
        let a = kd(s, JSON.parse(i), r, u.relative === "path");
        e !== "/" &&
          (a.pathname = a.pathname === "/" ? e : Pt([e, a.pathname])),
          (u.replace ? t.replace : t.push)(a, u.state, u);
      },
      [e, t, i, r]
    )
  );
}
function Nd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(Ln),
    { pathname: i } = Fn(),
    l = JSON.stringify(xd(r).map((o) => o.pathnameBase));
  return P.useMemo(() => kd(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function lv(e, t) {
  _r() || ee(!1);
  let { navigator: n } = P.useContext(cl),
    r = P.useContext(Rd),
    { matches: i } = P.useContext(Ln),
    l = i[i.length - 1],
    o = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Fn(),
    a;
  if (t) {
    var c;
    let v = typeof t == "string" ? Yt(t) : t;
    s === "/" || ((c = v.pathname) != null && c.startsWith(s)) || ee(!1),
      (a = v);
  } else a = u;
  let h = a.pathname || "/",
    m = s === "/" ? h : h.slice(s.length) || "/",
    g = ky(e, { pathname: m }),
    y = av(
      g &&
        g.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, o, v.params),
            pathname: Pt([
              s,
              n.encodeLocation
                ? n.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? s
                : Pt([
                    s,
                    n.encodeLocation
                      ? n.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      r || void 0
    );
  return t && y
    ? P.createElement(
        fl.Provider,
        {
          value: {
            location: ts(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              a
            ),
            navigationType: yt.Pop,
          },
        },
        y
      )
    : y;
}
function ov() {
  let e = hv(),
    t = Vy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    l
  );
}
class sv extends P.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? P.createElement(
          Ln.Provider,
          { value: this.props.routeContext },
          P.createElement(Od.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function uv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(Pd);
  return (
    i &&
      i.static &&
      i.staticContext &&
      n.route.errorElement &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Ln.Provider, { value: t }, r)
  );
}
function av(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let l = r.findIndex(
      (o) => o.route.id && (i == null ? void 0 : i[o.route.id])
    );
    l >= 0 || ee(!1), (r = r.slice(0, Math.min(r.length, l + 1)));
  }
  return r.reduceRight((l, o, s) => {
    let u = o.route.id ? (i == null ? void 0 : i[o.route.id]) : null,
      a = n ? o.route.errorElement || P.createElement(ov, null) : null,
      c = t.concat(r.slice(0, s + 1)),
      h = () =>
        P.createElement(
          uv,
          { match: o, routeContext: { outlet: l, matches: c } },
          u ? a : o.route.element !== void 0 ? o.route.element : l
        );
    return n && (o.route.errorElement || s === 0)
      ? P.createElement(sv, {
          location: n.location,
          component: a,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: c },
        })
      : h();
  }, null);
}
var ja;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(ja || (ja = {}));
var Vi;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Vi || (Vi = {}));
function cv(e) {
  let t = P.useContext(Rd);
  return t || ee(!1), t;
}
function fv(e) {
  let t = P.useContext(Ln);
  return t || ee(!1), t;
}
function dv(e) {
  let t = fv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ee(!1), n.route.id;
}
function hv() {
  var e;
  let t = P.useContext(Od),
    n = cv(Vi.UseRouteError),
    r = dv(Vi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ci(e) {
  ee(!1);
}
function pv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = yt.Pop,
    navigator: l,
    static: o = !1,
  } = e;
  _r() && ee(!1);
  let s = t.replace(/^\/*/, "/"),
    u = P.useMemo(() => ({ basename: s, navigator: l, static: o }), [s, l, o]);
  typeof r == "string" && (r = Yt(r));
  let {
      pathname: a = "/",
      search: c = "",
      hash: h = "",
      state: m = null,
      key: g = "default",
    } = r,
    y = P.useMemo(() => {
      let v = Cd(a, s);
      return v == null
        ? null
        : { pathname: v, search: c, hash: h, state: m, key: g };
    }, [s, a, c, h, m, g]);
  return y == null
    ? null
    : P.createElement(
        cl.Provider,
        { value: u },
        P.createElement(fl.Provider, {
          children: n,
          value: { location: y, navigationType: i },
        })
      );
}
function mv(e) {
  let { children: t, location: n } = e,
    r = P.useContext(Pd),
    i = r && !t ? r.router.routes : ns(t);
  return lv(i, n);
}
var Ba;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ba || (Ba = {}));
new Promise(() => {});
function ns(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, i) => {
      if (!P.isValidElement(r)) return;
      if (r.type === P.Fragment) {
        n.push.apply(n, ns(r.props.children, t));
        return;
      }
      r.type !== ci && ee(!1), !r.props.index || !r.props.children || ee(!1);
      let l = [...t, i],
        o = {
          id: r.props.id || l.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (o.children = ns(r.props.children, l)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rs() {
  return (
    (rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rs.apply(this, arguments)
  );
}
function yv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function vv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !vv(e);
}
const wv = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Sv(e) {
  let { basename: t, children: n, window: r } = e,
    i = P.useRef();
  i.current == null && (i.current = Sy({ window: r, v5Compat: !0 }));
  let l = i.current,
    [o, s] = P.useState({ action: l.action, location: l.location });
  return (
    P.useLayoutEffect(() => l.listen(s), [l]),
    P.createElement(pv, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: l,
    })
  );
}
const Ev =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  At = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: l,
        replace: o,
        state: s,
        target: u,
        to: a,
        preventScrollReset: c,
      } = t,
      h = yv(t, wv),
      m,
      g = !1;
    if (Ev && typeof a == "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(a)) {
      m = a;
      let d = new URL(window.location.href),
        f = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a);
      f.origin === d.origin ? (a = f.pathname + f.search + f.hash) : (g = !0);
    }
    let y = rv(a, { relative: i }),
      v = Cv(a, {
        replace: o,
        state: s,
        target: u,
        preventScrollReset: c,
        relative: i,
      });
    function E(d) {
      r && r(d), d.defaultPrevented || v(d);
    }
    return P.createElement(
      "a",
      rs({}, h, { href: m || y, onClick: g || l ? r : E, ref: n, target: u })
    );
  });
var Qa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Qa || (Qa = {}));
var $a;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($a || ($a = {}));
function Cv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: l,
      relative: o,
    } = t === void 0 ? {} : t,
    s = iv(),
    u = Fn(),
    a = Nd(e, { relative: o });
  return P.useCallback(
    (c) => {
      if (gv(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : Hi(u) === Hi(a);
        s(e, { replace: h, state: i, preventScrollReset: l, relative: o });
      }
    },
    [u, s, a, r, i, n, e, l, o]
  );
}
const xv = "/innova/dist/assets/menu-d2e13953.svg",
  kv = "/innova/dist/assets/close-5f596bde.svg",
  Pv = () => {
    const e = Fn(),
      [t, n] = P.useState(!1);
    return N("nav", {
      className: "bg-gray-800 pt-8 flex justify-center px-4",
      children: j("div", {
        className: "max-w-7xl w-full flex items-center justify-between",
        children: [
          N(At, {
            to: "/",
            children: N("h1", {
              className: "text-white font-bold text-2xl cursor-pointer",
              children: "Star Wars Wiki",
            }),
          }),
          j("button", {
            type: "button",
            className:
              "sm:hidden inline items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
            onClick: () => n(!t),
            children: [
              N("span", { className: "sr-only", children: "Change menu" }),
              t
                ? N("img", { src: kv, alt: "Close" })
                : N("img", { src: xv, alt: "Open" }),
            ],
          }),
          t &&
            N("div", {
              className:
                "sm:hidden z-10 fixed top-24 left-1/2 -translate-x-1/2 rounded bg-gray-600 px-4 py-4 w-72",
              children: j("ul", {
                className: "flex flex-col items-start w-full",
                children: [
                  N("li", {
                    onClick: () => n(!1),
                    className: `w-full px-2 py-2 text-white ease-linear duration-300 rounded ${
                      e.pathname === "/" ? "bg-blue-600" : "hover:bg-gray-700"
                    }`,
                    children: N(At, { to: "/", children: "Personagens" }),
                  }),
                  localStorage.getItem("last-url") &&
                    N("li", {
                      onClick: () => n(!1),
                      className: `mt-2 w-full px-2 py-2 text-white ease-linear duration-300  ${
                        e.pathname.includes("character")
                          ? "bg-blue-600"
                          : "hover:bg-gray-700"
                      }`,
                      children: N(At, {
                        to: localStorage.getItem("last-url") ?? "/",
                        children: "Último acesso",
                      }),
                    }),
                ],
              }),
            }),
          j("ul", {
            className: "hidden sm:flex items-center text-white",
            children: [
              N("li", {
                className: `hover:text-blue-500 ease-linear duration-300 ${
                  e.pathname === "/" && "text-blue-500"
                }`,
                children: N(At, { to: "/", children: "Personagens" }),
              }),
              localStorage.getItem("last-url") &&
                N("li", {
                  className: `ml-8 hover:text-blue-500 ease-linear duration-300  ${
                    e.pathname.includes("character") && "text-blue-500"
                  }`,
                  children: N(At, {
                    to: localStorage.getItem("last-url") ?? "/",
                    children: "Último acesso",
                  }),
                }),
            ],
          }),
        ],
      }),
    });
  },
  _d = ({ text: e }) =>
    j("section", {
      className:
        "h-screen w-full flex flex-col justify-center items-center bg-gray-800",
      children: [
        N("h1", {
          className: "text-5xl font-extrabold text-white tracking-widest",
          children: "Erro na requisição",
        }),
        N("div", {
          className:
            "bg-blue-500 px-2 -mt-12 text-sm rounded rotate-12 absolute",
          children: e,
        }),
        N("button", {
          className: "mt-8",
          onClick: () => {},
          children: j("p", {
            className:
              "relative inline-block text-sm font-medium text-blue-500 group active:text-blue-500 focus:outline-none focus:ring",
            children: [
              N("span", {
                className:
                  "absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0",
              }),
              N("span", {
                onClick: () => window.location.reload(),
                className:
                  "relative block px-8 py-3 bg-gray-800 border border-current",
                children: "Tentar novamente",
              }),
            ],
          }),
        }),
      ],
    }),
  Td = () =>
    N("section", {
      className: "flex flex-col px-2 bg-gray-800 w-full min-h-screen pt-16",
      children: N("div", {
        className: "p-4 max-w-2xl w-full mx-auto",
        children: N("div", {
          className: "animate-pulse flex space-x-4",
          children: j("div", {
            className: "flex-1",
            children: [
              N("div", { className: "h-5 bg-gray-500 rounded mb-10" }),
              N("div", { className: "h-5 bg-gray-500 rounded mb-10" }),
              N("div", { className: "h-5 bg-gray-500 rounded mb-10" }),
              N("div", { className: "h-5 bg-gray-500 rounded mb-10" }),
              N("div", { className: "h-5 bg-gray-500 rounded" }),
            ],
          }),
        }),
      }),
    });
class Rv {
  static toBrazil(t) {
    const n = t.split("-");
    return n[2] + "/" + n[1] + "/" + n[0];
  }
}
const Ov = "/innova/dist/assets/attack-clones-7ceedda0.jpg",
  Nv = "/innova/dist/assets/empire-strikes-d4e642f0.jpg",
  _v = "/innova/dist/assets/new-hope-f04ae4b9.jpg",
  Tv = "/innova/dist/assets/phantom-menace-8372c1f1.jpg",
  Lv = "/innova/dist/assets/return-jedi-21b4aa3c.jpg",
  Fv = "/innova/dist/assets/revenge-sith-31e6de2e.jpg";
class Dv {
  constructor() {
    le(this, "attackClones");
    le(this, "empireStrikes");
    le(this, "newHope");
    le(this, "phantomMenace");
    le(this, "returnJedi");
    le(this, "revengeSith");
    (this.attackClones = Ov),
      (this.empireStrikes = Nv),
      (this.newHope = _v),
      (this.phantomMenace = Tv),
      (this.returnJedi = Lv),
      (this.revengeSith = Fv);
  }
  selectImage(t) {
    switch (t) {
      case "Attack of the Clones":
        return this.attackClones;
      case "The Empire Strikes Back":
        return this.empireStrikes;
      case "A New Hope":
        return this.newHope;
      case "The Phantom Menace":
        return this.phantomMenace;
      case "Return of the Jedi":
        return this.returnJedi;
      case "Revenge of the Sith":
        return this.revengeSith;
      default:
        return this.revengeSith;
    }
  }
}
const Iv = ({ movie: e }) => {
  const t = new Dv();
  return N("div", {
    className: "flex justify-center",
    children: j("div", {
      className: "group relative",
      children: [
        N("img", {
          className: "w-56 h-96  rounded",
          src: t.selectImage(e.title),
          alt: e.title,
        }),
        j("div", {
          className:
            "absolute rounded top-0 left-0 w-56 h-0 flex flex-col justify-center items-center bg-[#000000a4] opacity-0 group-hover:h-full group-hover:opacity-100 group-active:h-full group-active:opacity-100 duration-500",
          children: [
            N("h1", {
              className: "text-2xl text-white text-center",
              children: e.title,
            }),
            N("p", {
              className: "text-white",
              children: Rv.toBrazil(e.release_date),
            }),
          ],
        }),
      ],
    }),
  });
};
function Ld(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Fd } = Object.prototype,
  { getPrototypeOf: su } = Object,
  uu = ((e) => (t) => {
    const n = Fd.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ot = (e) => ((e = e.toLowerCase()), (t) => uu(t) === e),
  dl = (e) => (t) => typeof t === e,
  { isArray: Dn } = Array,
  Cr = dl("undefined");
function Mv(e) {
  return (
    e !== null &&
    !Cr(e) &&
    e.constructor !== null &&
    !Cr(e.constructor) &&
    Nt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Dd = ot("ArrayBuffer");
function zv(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Dd(e.buffer)),
    t
  );
}
const Av = dl("string"),
  Nt = dl("function"),
  Id = dl("number"),
  au = (e) => e !== null && typeof e == "object",
  Uv = (e) => e === !0 || e === !1,
  fi = (e) => {
    if (uu(e) !== "object") return !1;
    const t = su(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  jv = ot("Date"),
  Bv = ot("File"),
  Qv = ot("Blob"),
  $v = ot("FileList"),
  Hv = (e) => au(e) && Nt(e.pipe),
  Vv = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        Fd.call(e) === t ||
        (Nt(e.toString) && e.toString() === t))
    );
  },
  Wv = ot("URLSearchParams"),
  qv = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Dn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = l.length;
    let s;
    for (r = 0; r < o; r++) (s = l[r]), t.call(null, e[s], s, e);
  }
}
function Md(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const zd = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Ad = (e) => !Cr(e) && e !== zd;
function is() {
  const { caseless: e } = (Ad(this) && this) || {},
    t = {},
    n = (r, i) => {
      const l = (e && Md(t, i)) || i;
      fi(t[l]) && fi(r)
        ? (t[l] = is(t[l], r))
        : fi(r)
        ? (t[l] = is({}, r))
        : Dn(r)
        ? (t[l] = r.slice())
        : (t[l] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Tr(arguments[r], n);
  return t;
}
const Kv = (e, t, n, { allOwnKeys: r } = {}) => (
    Tr(
      t,
      (i, l) => {
        n && Nt(i) ? (e[l] = Ld(i, n)) : (e[l] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Jv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Gv = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Xv = (e, t, n, r) => {
    let i, l, o;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), l = i.length; l-- > 0; )
        (o = i[l]), (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0));
      e = n !== !1 && su(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Yv = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Zv = (e) => {
    if (!e) return null;
    if (Dn(e)) return e;
    let t = e.length;
    if (!Id(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  bv = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && su(Uint8Array)),
  e0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const l = i.value;
      t.call(e, l[0], l[1]);
    }
  },
  t0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  n0 = ot("HTMLFormElement"),
  r0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Ha = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  i0 = ot("RegExp"),
  Ud = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Tr(n, (i, l) => {
      t(i, l, e) !== !1 && (r[l] = i);
    }),
      Object.defineProperties(e, r);
  },
  l0 = (e) => {
    Ud(e, (t, n) => {
      if (Nt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Nt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  o0 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((l) => {
          n[l] = !0;
        });
      };
    return Dn(e) ? r(e) : r(String(e).split(t)), n;
  },
  s0 = () => {},
  u0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Jl = "abcdefghijklmnopqrstuvwxyz",
  Va = "0123456789",
  jd = { DIGIT: Va, ALPHA: Jl, ALPHA_DIGIT: Jl + Jl.toUpperCase() + Va },
  a0 = (e = 16, t = jd.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function c0(e) {
  return !!(
    e &&
    Nt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const f0 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (au(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const l = Dn(r) ? [] : {};
            return (
              Tr(r, (o, s) => {
                const u = n(o, i + 1);
                !Cr(u) && (l[s] = u);
              }),
              (t[i] = void 0),
              l
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  S = {
    isArray: Dn,
    isArrayBuffer: Dd,
    isBuffer: Mv,
    isFormData: Vv,
    isArrayBufferView: zv,
    isString: Av,
    isNumber: Id,
    isBoolean: Uv,
    isObject: au,
    isPlainObject: fi,
    isUndefined: Cr,
    isDate: jv,
    isFile: Bv,
    isBlob: Qv,
    isRegExp: i0,
    isFunction: Nt,
    isStream: Hv,
    isURLSearchParams: Wv,
    isTypedArray: bv,
    isFileList: $v,
    forEach: Tr,
    merge: is,
    extend: Kv,
    trim: qv,
    stripBOM: Jv,
    inherits: Gv,
    toFlatObject: Xv,
    kindOf: uu,
    kindOfTest: ot,
    endsWith: Yv,
    toArray: Zv,
    forEachEntry: e0,
    matchAll: t0,
    isHTMLForm: n0,
    hasOwnProperty: Ha,
    hasOwnProp: Ha,
    reduceDescriptors: Ud,
    freezeMethods: l0,
    toObjectSet: o0,
    toCamelCase: r0,
    noop: s0,
    toFiniteNumber: u0,
    findKey: Md,
    global: zd,
    isContextDefined: Ad,
    ALPHABET: jd,
    generateString: a0,
    isSpecCompliantForm: c0,
    toJSONObject: f0,
  };
function z(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
S.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Bd = z.prototype,
  Qd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Qd[e] = { value: e };
});
Object.defineProperties(z, Qd);
Object.defineProperty(Bd, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, i, l) => {
  const o = Object.create(Bd);
  return (
    S.toFlatObject(
      e,
      o,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    z.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    l && Object.assign(o, l),
    o
  );
};
const d0 = null;
function ls(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function $d(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wa(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, l) {
          return (i = $d(i)), !n && l ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function h0(e) {
  return S.isArray(e) && !e.some(ls);
}
const p0 = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hl(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, E) {
        return !S.isUndefined(E[v]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    l = n.dots,
    o = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(y) {
    if (y === null) return "";
    if (S.isDate(y)) return y.toISOString();
    if (!u && S.isBlob(y))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(y) || S.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function c(y, v, E) {
    let d = y;
    if (y && !E && typeof y == "object") {
      if (S.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (S.isArray(y) && h0(y)) ||
        ((S.isFileList(y) || S.endsWith(v, "[]")) && (d = S.toArray(y)))
      )
        return (
          (v = $d(v)),
          d.forEach(function (p, w) {
            !(S.isUndefined(p) || p === null) &&
              t.append(
                o === !0 ? Wa([v], w, l) : o === null ? v : v + "[]",
                a(p)
              );
          }),
          !1
        );
    }
    return ls(y) ? !0 : (t.append(Wa(E, v, l), a(y)), !1);
  }
  const h = [],
    m = Object.assign(p0, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: ls,
    });
  function g(y, v) {
    if (!S.isUndefined(y)) {
      if (h.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      h.push(y),
        S.forEach(y, function (d, f) {
          (!(S.isUndefined(d) || d === null) &&
            i.call(t, d, S.isString(f) ? f.trim() : f, v, m)) === !0 &&
            g(d, v ? v.concat(f) : [f]);
        }),
        h.pop();
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function qa(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function cu(e, t) {
  (this._pairs = []), e && hl(e, this, t);
}
const Hd = cu.prototype;
Hd.append = function (t, n) {
  this._pairs.push([t, n]);
};
Hd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, qa);
      }
    : qa;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function m0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Vd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || m0,
    i = n && n.serialize;
  let l;
  if (
    (i
      ? (l = i(t, n))
      : (l = S.isURLSearchParams(t) ? t.toString() : new cu(t, n).toString(r)),
    l)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + l);
  }
  return e;
}
class y0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ka = y0,
  Wd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  v0 = typeof URLSearchParams < "u" ? URLSearchParams : cu,
  g0 = typeof FormData < "u" ? FormData : null,
  w0 = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  S0 = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  qe = {
    isBrowser: !0,
    classes: { URLSearchParams: v0, FormData: g0, Blob },
    isStandardBrowserEnv: w0,
    isStandardBrowserWebWorkerEnv: S0,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function E0(e, t) {
  return hl(
    e,
    new qe.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, l) {
          return qe.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : l.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function C0(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function x0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let l;
  for (r = 0; r < i; r++) (l = n[r]), (t[l] = e[l]);
  return t;
}
function qd(e) {
  function t(n, r, i, l) {
    let o = n[l++];
    const s = Number.isFinite(+o),
      u = l >= n.length;
    return (
      (o = !o && S.isArray(i) ? i.length : o),
      u
        ? (S.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !s)
        : ((!i[o] || !S.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], l) && S.isArray(i[o]) && (i[o] = x0(i[o])),
          !s)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, i) => {
        t(C0(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const k0 = { "Content-Type": void 0 };
function P0(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const pl = {
  transitional: Wd,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        l = S.isObject(t);
      if ((l && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i && i ? JSON.stringify(qd(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let s;
      if (l) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return E0(t, this.formSerializer).toString();
        if ((s = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return hl(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return l || i ? (n.setContentType("application/json", !1), P0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || pl.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && S.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError"
              ? z.from(s, z.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: qe.classes.FormData, Blob: qe.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
S.forEach(["delete", "get", "head"], function (t) {
  pl.headers[t] = {};
});
S.forEach(["post", "put", "patch"], function (t) {
  pl.headers[t] = S.merge(k0);
});
const fu = pl,
  R0 = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  O0 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && R0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Ja = Symbol("internals");
function $n(e) {
  return e && String(e).trim().toLowerCase();
}
function di(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(di) : String(e);
}
function N0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function _0(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Gl(e, t, n, r, i) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function T0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function L0(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, l, o) {
        return this[r].call(this, t, i, l, o);
      },
      configurable: !0,
    });
  });
}
class ml {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function l(s, u, a) {
      const c = $n(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const h = S.findKey(i, c);
      (!h || i[h] === void 0 || a === !0 || (a === void 0 && i[h] !== !1)) &&
        (i[h || u] = di(s));
    }
    const o = (s, u) => S.forEach(s, (a, c) => l(a, c, u));
    return (
      S.isPlainObject(t) || t instanceof this.constructor
        ? o(t, n)
        : S.isString(t) && (t = t.trim()) && !_0(t)
        ? o(O0(t), n)
        : t != null && l(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = $n(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return N0(i);
        if (S.isFunction(n)) return n.call(this, i, r);
        if (S.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = $n(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Gl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function l(o) {
      if (((o = $n(o)), o)) {
        const s = S.findKey(r, o);
        s && (!n || Gl(r, r[s], s, n)) && (delete r[s], (i = !0));
      }
    }
    return S.isArray(t) ? t.forEach(l) : l(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const l = n[r];
      (!t || Gl(this, this[l], l, t, !0)) && (delete this[l], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (i, l) => {
        const o = S.findKey(r, l);
        if (o) {
          (n[o] = di(i)), delete n[l];
          return;
        }
        const s = t ? T0(l) : String(l).trim();
        s !== l && delete n[l], (n[s] = di(i)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Ja] = this[Ja] = { accessors: {} }).accessors,
      i = this.prototype;
    function l(o) {
      const s = $n(o);
      r[s] || (L0(i, o), (r[s] = !0));
    }
    return S.isArray(t) ? t.forEach(l) : l(t), this;
  }
}
ml.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.freezeMethods(ml.prototype);
S.freezeMethods(ml);
const et = ml;
function Xl(e, t) {
  const n = this || fu,
    r = t || n,
    i = et.from(r.headers);
  let l = r.data;
  return (
    S.forEach(e, function (s) {
      l = s.call(n, l, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    l
  );
}
function Kd(e) {
  return !!(e && e.__CANCEL__);
}
function Lr(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
S.inherits(Lr, z, { __CANCEL__: !0 });
function F0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          "Request failed with status code " + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const D0 = qe.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, l, o, s) {
          const u = [];
          u.push(n + "=" + encodeURIComponent(r)),
            S.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()),
            S.isString(l) && u.push("path=" + l),
            S.isString(o) && u.push("domain=" + o),
            s === !0 && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function I0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function M0(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Jd(e, t) {
  return e && !I0(t) ? M0(e, t) : t;
}
const z0 = qe.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(l) {
        let o = l;
        return (
          t && (n.setAttribute("href", o), (o = n.href)),
          n.setAttribute("href", o),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (o) {
          const s = S.isString(o) ? i(o) : o;
          return s.protocol === r.protocol && s.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function A0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function U0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    l = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[l];
      o || (o = a), (n[i] = u), (r[i] = a);
      let h = l,
        m = 0;
      for (; h !== i; ) (m += n[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === l && (l = (l + 1) % e), a - o < t)) return;
      const g = c && a - c;
      return g ? Math.round((m * 1e3) / g) : void 0;
    }
  );
}
function Ga(e, t) {
  let n = 0;
  const r = U0(50, 250);
  return (i) => {
    const l = i.loaded,
      o = i.lengthComputable ? i.total : void 0,
      s = l - n,
      u = r(s),
      a = l <= o;
    n = l;
    const c = {
      loaded: l,
      total: o,
      progress: o ? l / o : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && o && a ? (o - l) / u : void 0,
      event: i,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const j0 = typeof XMLHttpRequest < "u",
  B0 =
    j0 &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const l = et.from(e.headers).normalize(),
          o = e.responseType;
        let s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        S.isFormData(i) &&
          (qe.isStandardBrowserEnv || qe.isStandardBrowserWebWorkerEnv) &&
          l.setContentType(!1);
        let a = new XMLHttpRequest();
        if (e.auth) {
          const g = e.auth.username || "",
            y = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          l.set("Authorization", "Basic " + btoa(g + ":" + y));
        }
        const c = Jd(e.baseURL, e.url);
        a.open(e.method.toUpperCase(), Vd(c, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout);
        function h() {
          if (!a) return;
          const g = et.from(
              "getAllResponseHeaders" in a && a.getAllResponseHeaders()
            ),
            v = {
              data:
                !o || o === "text" || o === "json"
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: g,
              config: e,
              request: a,
            };
          F0(
            function (d) {
              n(d), u();
            },
            function (d) {
              r(d), u();
            },
            v
          ),
            (a = null);
        }
        if (
          ("onloadend" in a
            ? (a.onloadend = h)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(h);
              }),
          (a.onabort = function () {
            a &&
              (r(new z("Request aborted", z.ECONNABORTED, e, a)), (a = null));
          }),
          (a.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, a)), (a = null);
          }),
          (a.ontimeout = function () {
            let y = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const v = e.transitional || Wd;
            e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
              r(
                new z(
                  y,
                  v.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  a
                )
              ),
              (a = null);
          }),
          qe.isStandardBrowserEnv)
        ) {
          const g =
            (e.withCredentials || z0(c)) &&
            e.xsrfCookieName &&
            D0.read(e.xsrfCookieName);
          g && l.set(e.xsrfHeaderName, g);
        }
        i === void 0 && l.setContentType(null),
          "setRequestHeader" in a &&
            S.forEach(l.toJSON(), function (y, v) {
              a.setRequestHeader(v, y);
            }),
          S.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          o && o !== "json" && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            a.addEventListener("progress", Ga(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            a.upload &&
            a.upload.addEventListener("progress", Ga(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (g) => {
              a &&
                (r(!g || g.type ? new Lr(null, e, a) : g),
                a.abort(),
                (a = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const m = A0(c);
        if (m && qe.protocols.indexOf(m) === -1) {
          r(new z("Unsupported protocol " + m + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        a.send(i || null);
      });
    },
  hi = { http: d0, xhr: B0 };
S.forEach(hi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Q0 = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let i = 0;
      i < t && ((n = e[i]), !(r = S.isString(n) ? hi[n.toLowerCase()] : n));
      i++
    );
    if (!r)
      throw r === !1
        ? new z(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            S.hasOwnProp(hi, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!S.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: hi,
};
function Yl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Lr(null, e);
}
function Xa(e) {
  return (
    Yl(e),
    (e.headers = et.from(e.headers)),
    (e.data = Xl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Q0.getAdapter(e.adapter || fu.adapter)(e).then(
      function (r) {
        return (
          Yl(e),
          (r.data = Xl.call(e, e.transformResponse, r)),
          (r.headers = et.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Kd(r) ||
            (Yl(e),
            r &&
              r.response &&
              ((r.response.data = Xl.call(e, e.transformResponse, r.response)),
              (r.response.headers = et.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ya = (e) => (e instanceof et ? e.toJSON() : e);
function On(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, h) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: h }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, h) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, h);
    } else return r(a, c, h);
  }
  function l(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c);
  }
  function o(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, h) {
    if (h in t) return r(a, c);
    if (h in e) return r(void 0, a);
  }
  const u = {
    url: l,
    method: l,
    data: l,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (a, c) => i(Ya(a), Ya(c), !0),
  };
  return (
    S.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const h = u[c] || i,
        m = h(e[c], t[c], c);
      (S.isUndefined(m) && h !== s) || (n[c] = m);
    }),
    n
  );
}
const Gd = "1.3.3",
  du = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    du[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Za = {};
du.transitional = function (t, n, r) {
  function i(l, o) {
    return (
      "[Axios v" +
      Gd +
      "] Transitional option '" +
      l +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (l, o, s) => {
    if (t === !1)
      throw new z(
        i(o, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return (
      n &&
        !Za[o] &&
        ((Za[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(l, o, s) : !0
    );
  };
};
function $0(e, t, n) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const l = r[i],
      o = t[l];
    if (o) {
      const s = e[l],
        u = s === void 0 || o(s, l, e);
      if (u !== !0)
        throw new z("option " + l + " must be " + u, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new z("Unknown option " + l, z.ERR_BAD_OPTION);
  }
}
const os = { assertOptions: $0, validators: du },
  ut = os.validators;
class Wi {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Ka(), response: new Ka() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = On(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: l } = n;
    r !== void 0 &&
      os.assertOptions(
        r,
        {
          silentJSONParsing: ut.transitional(ut.boolean),
          forcedJSONParsing: ut.transitional(ut.boolean),
          clarifyTimeoutError: ut.transitional(ut.boolean),
        },
        !1
      ),
      i !== void 0 &&
        os.assertOptions(
          i,
          { encode: ut.function, serialize: ut.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o;
    (o = l && S.merge(l.common, l[n.method])),
      o &&
        S.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (y) => {
            delete l[y];
          }
        ),
      (n.headers = et.concat(o, l));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), s.unshift(v.fulfilled, v.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected);
    });
    let c,
      h = 0,
      m;
    if (!u) {
      const y = [Xa.bind(this), void 0];
      for (
        y.unshift.apply(y, s),
          y.push.apply(y, a),
          m = y.length,
          c = Promise.resolve(n);
        h < m;

      )
        c = c.then(y[h++], y[h++]);
      return c;
    }
    m = s.length;
    let g = n;
    for (h = 0; h < m; ) {
      const y = s[h++],
        v = s[h++];
      try {
        g = y(g);
      } catch (E) {
        v.call(this, E);
        break;
      }
    }
    try {
      c = Xa.call(this, g);
    } catch (y) {
      return Promise.reject(y);
    }
    for (h = 0, m = a.length; h < m; ) c = c.then(a[h++], a[h++]);
    return c;
  }
  getUri(t) {
    t = On(this.defaults, t);
    const n = Jd(t.baseURL, t.url);
    return Vd(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  Wi.prototype[t] = function (n, r) {
    return this.request(
      On(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (l, o, s) {
      return this.request(
        On(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: l,
          data: o,
        })
      );
    };
  }
  (Wi.prototype[t] = n()), (Wi.prototype[t + "Form"] = n(!0));
});
const pi = Wi;
class hu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (l) {
      n = l;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let l = r._listeners.length;
      for (; l-- > 0; ) r._listeners[l](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let l;
        const o = new Promise((s) => {
          r.subscribe(s), (l = s);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(l);
          }),
          o
        );
      }),
      t(function (l, o, s) {
        r.reason || ((r.reason = new Lr(l, o, s)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new hu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const H0 = hu;
function V0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function W0(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const ss = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ss).forEach(([e, t]) => {
  ss[t] = e;
});
const q0 = ss;
function Xd(e) {
  const t = new pi(e),
    n = Ld(pi.prototype.request, t);
  return (
    S.extend(n, pi.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Xd(On(e, i));
    }),
    n
  );
}
const te = Xd(fu);
te.Axios = pi;
te.CanceledError = Lr;
te.CancelToken = H0;
te.isCancel = Kd;
te.VERSION = Gd;
te.toFormData = hl;
te.AxiosError = z;
te.Cancel = te.CanceledError;
te.all = function (t) {
  return Promise.all(t);
};
te.spread = V0;
te.isAxiosError = W0;
te.mergeConfig = On;
te.AxiosHeaders = et;
te.formToJSON = (e) => qd(S.isHTMLForm(e) ? new FormData(e) : e);
te.HttpStatusCode = q0;
te.default = te;
const K0 = te,
  pu = K0.create({
    baseURL: "https://swapi.dev/api",
    headers: { "Content-Type": "application/json" },
    timeout: 1e4,
  }),
  J0 = () => pu.get("/people"),
  G0 = (e) => pu.get(`/people/${e}`),
  X0 = (e) => pu.get(`/films/${e}`),
  Y0 = "/innova/dist/assets/luke-541363f9.jpg",
  Z0 = "/innova/dist/assets/vader-c7349600.png",
  b0 = "/innova/dist/assets/kenobi-5345a0c6.png",
  eg = "/innova/dist/assets/beru-e2cc6ccf.jpg",
  tg = "/innova/dist/assets/c3po-91e41789.png",
  ng = "/innova/dist/assets/leia-904d6d1b.jpg",
  rg = "/innova/dist/assets/r5d4-2aa45672.png",
  ig = "/innova/dist/assets/r2d2-af824e16.png",
  lg = "/innova/dist/assets/owen-2ae99c42.png",
  og = "/innova/dist/assets/biggs-5f64f8dd.png";
class Yd {
  constructor() {
    le(this, "luke");
    le(this, "vader");
    le(this, "c3po");
    le(this, "r2d2");
    le(this, "r5d4");
    le(this, "kenobi");
    le(this, "leia");
    le(this, "owen");
    le(this, "beru");
    le(this, "biggs");
    (this.luke = Y0),
      (this.vader = Z0),
      (this.c3po = tg),
      (this.r2d2 = ig),
      (this.r5d4 = rg),
      (this.kenobi = b0),
      (this.leia = ng),
      (this.owen = lg),
      (this.biggs = og),
      (this.beru = eg);
  }
  selectImage(t) {
    switch (t) {
      case "Luke Skywalker":
        return this.luke;
      case "Darth Vader":
        return this.vader;
      case "C-3PO":
        return this.c3po;
      case "R2-D2":
        return this.r2d2;
      case "Leia Organa":
        return this.leia;
      case "Owen Lars":
        return this.owen;
      case "Beru Whitesun lars":
        return this.beru;
      case "R5-D4":
        return this.r5d4;
      case "Biggs Darklighter":
        return this.biggs;
      case "Obi-Wan Kenobi":
        return this.kenobi;
      default:
        return this.kenobi;
    }
  }
}
class us {
  static translate(t) {
    switch (t) {
      case "brown":
        return "marrom";
      case "blue":
        return "azul";
      case "yellow":
        return "amarelo";
      case "green":
        return "verde";
      case "red":
        return "vermelha";
      case "male":
        return "masculino";
      case "female":
        return "feminino";
      default:
        return t;
    }
  }
}
const sg = "/innova/dist/assets/movie-icon-c504a60f.svg",
  ug = () => {
    const e = Fn(),
      t = new Yd(),
      [n, r] = P.useState(!1),
      [i, l] = P.useState(!1),
      [o, s] = P.useState([]),
      {
        isLoading: u,
        isError: a,
        data: c,
        isSuccess: h,
      } = wd({
        queryKey: ["character"],
        cacheTime: 0,
        queryFn: () => G0(e.pathname.slice(-2)),
      }),
      m = async (y) => {
        r(!0);
        try {
          for (const v of y) {
            const E = await X0(v.slice(-2));
            s((d) => [...d, E.data]);
          }
        } catch {
          l(!0);
        }
        r(!1);
      };
    if (
      (P.useEffect(() => {
        c && m(c.data.films);
      }, [h]),
      u || n)
    )
      return N(Td, {});
    if (a || i)
      return N(_d, {
        text: "Não foi possível recuperar os detalhes do personagem.",
      });
    const g = c.data;
    return j("section", {
      className: "max-w-7xl w-full flex flex-col min-h-screen pt-16 pb-4",
      children: [
        j("div", {
          className: "flex items-center flex-col sm:flex-row",
          children: [
            N("div", {
              className: "w-32 h-32 rounded-full overflow-hidden bg-gray-600",
              children: N("img", {
                className: "w-full h-full object-contain",
                src: t.selectImage(g.name),
                alt: g.name,
              }),
            }),
            j("div", {
              className: "ml-8 mt-6 sm:mt-0",
              children: [
                N("p", {
                  className: "text-white font-bold text-xl pb-4",
                  children: g.name,
                }),
                j("p", {
                  className: "text-gray-300",
                  children: ["Sou do genêro ", us.translate(g.gender)],
                }),
                j("p", {
                  className: "text-gray-300",
                  children: ["Nascido em ", g.birth_year],
                }),
                j("p", {
                  className: "text-gray-300",
                  children: ["Olhos da cor ", us.translate(g.eye_color)],
                }),
              ],
            }),
          ],
        }),
        N("div", { className: "w-full h-px bg-gray-400 mt-8 mb-2" }),
        j("div", {
          className: "flex flex-col",
          children: [
            j("div", {
              className: "flex items-center self-center",
              children: [
                N("img", { src: sg, alt: "Movies", className: "h-6 w-6" }),
                N("h3", {
                  className: "text-white text-xl font-semibold mb-2 mt-3 ml-4",
                  children: "FILMES",
                }),
              ],
            }),
            N("div", {
              className:
                "grid gap-y-12 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mt-8",
              children: o.map((y) => N(Iv, { movie: y }, y.title)),
            }),
          ],
        }),
      ],
    });
  },
  ag = "_input_1ed5y_1",
  cg = { input: ag },
  fg = "/innova/dist/assets/search-2aa1b1b3.svg",
  dg = ({ value: e, handleChange: t }) =>
    j("form", {
      children: [
        N("label", {
          htmlFor: "default-search",
          className:
            "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
          children: "Search",
        }),
        j("div", {
          className: "relative mb-8",
          children: [
            N("div", {
              className:
                "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
              children: N("img", { src: fg, alt: "Search" }),
            }),
            N("input", {
              type: "search",
              id: "default-search",
              className: `${cg.input} block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
              placeholder: "Procurar personagem...",
              onChange: (n) => t(n.target.value),
              value: e,
            }),
          ],
        }),
      ],
    }),
  hg = ({ character: e }) => {
    const t = new Yd(),
      n = (i) => {
        localStorage.setItem("last-url", i);
      },
      r = `/character/${e.url.slice(-2)}`;
    return N(
      At,
      {
        to: r,
        onClick: () => n(r),
        children: j("div", {
          className: "py-4 flex items-center",
          children: [
            N("div", {
              className: "w-16 h-16 rounded-full overflow-hidden bg-gray-600",
              children: N("img", {
                className: "w-full h-full object-contain",
                src: t.selectImage(e.name),
                alt: e.name,
              }),
            }),
            j("div", {
              className: "ml-4",
              children: [
                N("p", {
                  className: "text-white font-semibold mb-2",
                  children: e.name,
                }),
                j("p", {
                  className: "text-gray-300 text-sm",
                  children: [
                    N("strong", { children: "Genêro: " }),
                    us.translate(e.gender),
                  ],
                }),
                j("p", {
                  className: "text-gray-300 text-sm",
                  children: [
                    N("strong", { children: "Peso: " }),
                    e.mass,
                    " kg",
                  ],
                }),
              ],
            }),
          ],
        }),
      },
      e.name
    );
  },
  pg = () => {
    const {
        isLoading: e,
        isError: t,
        data: n,
      } = wd({ queryKey: ["peoples"], queryFn: () => J0() }),
      [r, i] = P.useState("");
    if (e) return N(Td, {});
    if (t) return N(_d, { text: "Não foi possível recuperar os personagens." });
    const l = n == null ? void 0 : n.data.results;
    return j("section", {
      className:
        "max-w-7xl w-full min-h-screen flex flex-col justify-center self-center pt-8 pb-4",
      children: [
        N(dg, { value: r, handleChange: i }),
        N("div", {
          className: "flex flex-col",
          children: l.map((o) => {
            if (o.name.toLowerCase().includes(r.toLowerCase()) || r === "")
              return N(hg, { character: o }, o.name);
          }),
        }),
      ],
    });
  },
  mg = () =>
    j("section", {
      className:
        "h-screen w-full flex flex-col justify-center items-center dark:bg-gray-800",
      children: [
        N("h1", {
          className: "text-9xl font-extrabold text-white tracking-widest",
          children: "404",
        }),
        N("div", {
          className: "bg-blue-500 px-2 text-sm rounded rotate-12 absolute",
          children: "Página não encontrada",
        }),
        N("button", {
          className: "mt-8",
          children: j("p", {
            className:
              "relative inline-block text-sm font-medium text-blue-500 group active:text-blue-500 focus:outline-none focus:ring",
            children: [
              N("span", {
                className:
                  "absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0",
              }),
              N("span", {
                className:
                  "relative block px-8 py-3 bg-[#1A2238] border border-current",
                children: N(At, { to: "/", children: "Voltar ao Inicio" }),
              }),
            ],
          }),
        }),
      ],
    });
function yg() {
  return j(Sv, {
    children: [
      N(Pv, {}),
      N("section", {
        className: "flex justify-center bg-gray-800 px-4",
        children: j(mv, {
          children: [
            N(ci, { path: "/", element: N(pg, {}) }),
            N(ci, { path: "/character/:id", element: N(ug, {}) }),
            N(ci, { path: "*", element: N(mg, {}) }),
          ],
        }),
      }),
    ],
  });
}
const vg = new Wm();
bl.createRoot(document.getElementById("root")).render(
  N(oy, { client: vg, children: N(yg, {}) })
);
