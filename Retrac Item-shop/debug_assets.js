const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/root-C8z8CVul.js",
      "assets/link-D_3I7x8o.js",
      "assets/canNavigate-5PdUpqLc.js",
      "assets/storefrontManager-BtUtZqcl.js",
      "assets/index-GOPOA7P7.js",
      "assets/motion-CYpg6VKc.js",
      "assets/root-DQDtIq7V.css",
      "assets/index-d7zPEbyO.js",
      "assets/index-B22nowXd.css",
      "assets/storefrontView-D3FR2ZZP.js",
      "assets/useMutation-DBkoy0nk.js",
      "assets/unsaved-DTKxfzB4.js",
      "assets/unsaved-BaZiUdM5.css",
      "assets/index-JVyEHEiC.js",
      "assets/storefrontView-CHwmIbYc.css",
      "assets/index-DeTKSuxH.js",
      "assets/index-DfZEV5Bg.css",
      "assets/hotfixView-DzqZ7qX0.js",
      "assets/index-CI36xviE.js",
      "assets/hotfixView-OESaTgF1.css",
      "assets/index-DKEfddQR.js",
      "assets/index-BCixp5Gz.css",
      "assets/eventView-CwHB2tw1.js",
      "assets/eventView-XQYCshiv.css",
      "assets/index-fk63pdGh.js",
      "assets/index-Uf2es_zc.css",
      "assets/index-BjMyem9n.js",
      "assets/index-tBugeWgB.css",
      "assets/index-BJcfzUV4.js",
      "assets/index-Dzx0OpC2.css",
    ])
) => i.map((i) => d[i]);
var Wc = (e) => {
  throw TypeError(e);
};
var Pa = (e, t, n) => t.has(e) || Wc("Cannot " + n);
var w = (e, t, n) => (
    Pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  $ = (e, t, n) =>
    t.has(e)
      ? Wc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  b = (e, t, n, r) => (
    Pa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  X = (e, t, n) => (Pa(e, t, "access private method"), n);
var Ii = (e, t, n, r) => ({
  set _(o) {
    b(e, t, o, n);
  },
  get _() {
    return w(e, t, r);
  },
});
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var wx =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function vo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var eh = { exports: {} },
  Xs = {},
  th = { exports: {} },
  Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ci = Symbol.for("react.element"),
  Nv = Symbol.for("react.portal"),
  Iv = Symbol.for("react.fragment"),
  Av = Symbol.for("react.strict_mode"),
  Fv = Symbol.for("react.profiler"),
  jv = Symbol.for("react.provider"),
  Dv = Symbol.for("react.context"),
  bv = Symbol.for("react.forward_ref"),
  zv = Symbol.for("react.suspense"),
  Bv = Symbol.for("react.memo"),
  Uv = Symbol.for("react.lazy"),
  Qc = Symbol.iterator;
function $v(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qc && e[Qc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rh = Object.assign,
  oh = {};
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oh),
    (this.updater = n || nh);
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ih() {}
ih.prototype = yo.prototype;
function ku(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oh),
    (this.updater = n || nh);
}
var Ou = (ku.prototype = new ih());
Ou.constructor = ku;
rh(Ou, yo.prototype);
Ou.isPureReactComponent = !0;
var qc = Array.isArray,
  sh = Object.prototype.hasOwnProperty,
  Lu = { current: null },
  ah = { key: !0, ref: !0, __self: !0, __source: !0 };
function lh(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      sh.call(t, r) && !ah.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ci,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Lu.current,
  };
}
function Hv(e, t) {
  return {
    $$typeof: Ci,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ci;
}
function Vv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Kc = /\/+/g;
function Ra(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Vv("" + e.key)
    : t.toString(36);
}
function ts(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ci:
          case Nv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Ra(s, 0) : r),
      qc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Kc, "$&/") + "/"),
          ts(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Mu(o) &&
            (o = Hv(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Kc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), qc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Ra(i, a);
      s += ts(i, t, n, l, o);
    }
  else if (((l = $v(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Ra(i, a++)), (s += ts(i, t, n, l, o));
  else if (i === "object")
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
  return s;
}
function Ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ts(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Wv(e) {
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
var qe = { current: null },
  ns = { transition: null },
  Qv = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: ns,
    ReactCurrentOwner: Lu,
  };
function uh() {
  throw Error("act(...) is not supported in production builds of React.");
}
Y.Children = {
  map: Ai,
  forEach: function (e, t, n) {
    Ai(
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
      Ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Y.Component = yo;
Y.Fragment = Iv;
Y.Profiler = Fv;
Y.PureComponent = ku;
Y.StrictMode = Av;
Y.Suspense = zv;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qv;
Y.act = uh;
Y.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Lu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      sh.call(t, l) &&
        !ah.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ci, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Y.createContext = function (e) {
  return (
    (e = {
      $$typeof: Dv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: jv, _context: e }),
    (e.Consumer = e)
  );
};
Y.createElement = lh;
Y.createFactory = function (e) {
  var t = lh.bind(null, e);
  return (t.type = e), t;
};
Y.createRef = function () {
  return { current: null };
};
Y.forwardRef = function (e) {
  return { $$typeof: bv, render: e };
};
Y.isValidElement = Mu;
Y.lazy = function (e) {
  return { $$typeof: Uv, _payload: { _status: -1, _result: e }, _init: Wv };
};
Y.memo = function (e, t) {
  return { $$typeof: Bv, type: e, compare: t === void 0 ? null : t };
};
Y.startTransition = function (e) {
  var t = ns.transition;
  ns.transition = {};
  try {
    e();
  } finally {
    ns.transition = t;
  }
};
Y.unstable_act = uh;
Y.useCallback = function (e, t) {
  return qe.current.useCallback(e, t);
};
Y.useContext = function (e) {
  return qe.current.useContext(e);
};
Y.useDebugValue = function () {};
Y.useDeferredValue = function (e) {
  return qe.current.useDeferredValue(e);
};
Y.useEffect = function (e, t) {
  return qe.current.useEffect(e, t);
};
Y.useId = function () {
  return qe.current.useId();
};
Y.useImperativeHandle = function (e, t, n) {
  return qe.current.useImperativeHandle(e, t, n);
};
Y.useInsertionEffect = function (e, t) {
  return qe.current.useInsertionEffect(e, t);
};
Y.useLayoutEffect = function (e, t) {
  return qe.current.useLayoutEffect(e, t);
};
Y.useMemo = function (e, t) {
  return qe.current.useMemo(e, t);
};
Y.useReducer = function (e, t, n) {
  return qe.current.useReducer(e, t, n);
};
Y.useRef = function (e) {
  return qe.current.useRef(e);
};
Y.useState = function (e) {
  return qe.current.useState(e);
};
Y.useSyncExternalStore = function (e, t, n) {
  return qe.current.useSyncExternalStore(e, t, n);
};
Y.useTransition = function () {
  return qe.current.useTransition();
};
Y.version = "18.3.1";
th.exports = Y;
var N = th.exports;
const M = vo(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qv = N,
  Kv = Symbol.for("react.element"),
  Yv = Symbol.for("react.fragment"),
  Xv = Object.prototype.hasOwnProperty,
  Gv = qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ch(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Xv.call(t, r) && !Jv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Kv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Gv.current,
  };
}
Xs.Fragment = Yv;
Xs.jsx = ch;
Xs.jsxs = ch;
eh.exports = Xs;
var T = eh.exports,
  cl = {},
  dh = { exports: {} },
  ht = {},
  fh = { exports: {} },
  hh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, I) {
    var A = P.length;
    P.push(I);
    e: for (; 0 < A; ) {
      var O = (A - 1) >>> 1,
        F = P[O];
      if (0 < o(F, I)) (P[O] = I), (P[A] = F), (A = O);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var I = P[0],
      A = P.pop();
    if (A !== I) {
      P[0] = A;
      e: for (var O = 0, F = P.length, j = F >>> 1; O < j; ) {
        var U = 2 * (O + 1) - 1,
          re = P[U],
          H = U + 1,
          te = P[H];
        if (0 > o(re, A))
          H < F && 0 > o(te, re)
            ? ((P[O] = te), (P[H] = A), (O = H))
            : ((P[O] = re), (P[U] = A), (O = U));
        else if (H < F && 0 > o(te, A)) (P[O] = te), (P[H] = A), (O = H);
        else break e;
      }
    }
    return I;
  }
  function o(P, I) {
    var A = P.sortIndex - I.sortIndex;
    return A !== 0 ? A : P.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    f = 1,
    d = null,
    c = 3,
    h = !1,
    y = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= P)
        r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function E(P) {
    if (((g = !1), v(P), !y))
      if (n(l) !== null) (y = !0), pe(_);
      else {
        var I = n(u);
        I !== null && Te(E, I.startTime - P);
      }
  }
  function _(P, I) {
    (y = !1), g && ((g = !1), m(x), (x = -1)), (h = !0);
    var A = c;
    try {
      for (
        v(I), d = n(l);
        d !== null && (!(d.expirationTime > I) || (P && !q()));

      ) {
        var O = d.callback;
        if (typeof O == "function") {
          (d.callback = null), (c = d.priorityLevel);
          var F = O(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof F == "function" ? (d.callback = F) : d === n(l) && r(l),
            v(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var j = !0;
      else {
        var U = n(u);
        U !== null && Te(E, U.startTime - I), (j = !1);
      }
      return j;
    } finally {
      (d = null), (c = A), (h = !1);
    }
  }
  var k = !1,
    R = null,
    x = -1,
    B = 5,
    z = -1;
  function q() {
    return !(e.unstable_now() - z < B);
  }
  function Z() {
    if (R !== null) {
      var P = e.unstable_now();
      z = P;
      var I = !0;
      try {
        I = R(!0, P);
      } finally {
        I ? K() : ((k = !1), (R = null));
      }
    } else k = !1;
  }
  var K;
  if (typeof p == "function")
    K = function () {
      p(Z);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      ce = oe.port2;
    (oe.port1.onmessage = Z),
      (K = function () {
        ce.postMessage(null);
      });
  } else
    K = function () {
      S(Z, 0);
    };
  function pe(P) {
    (R = P), k || ((k = !0), K());
  }
  function Te(P, I) {
    x = S(function () {
      P(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), pe(_));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = c;
      }
      var A = c;
      c = I;
      try {
        return P();
      } finally {
        c = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, I) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var A = c;
      c = P;
      try {
        return I();
      } finally {
        c = A;
      }
    }),
    (e.unstable_scheduleCallback = function (P, I, A) {
      var O = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? O + A : O))
          : (A = O),
        P)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = A + F),
        (P = {
          id: f++,
          callback: I,
          priorityLevel: P,
          startTime: A,
          expirationTime: F,
          sortIndex: -1,
        }),
        A > O
          ? ((P.sortIndex = A),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (g ? (m(x), (x = -1)) : (g = !0), Te(E, A - O)))
          : ((P.sortIndex = F), t(l, P), y || h || ((y = !0), pe(_))),
        P
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (P) {
      var I = c;
      return function () {
        var A = c;
        c = I;
        try {
          return P.apply(this, arguments);
        } finally {
          c = A;
        }
      };
    });
})(hh);
fh.exports = hh;
var Zv = fh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ey = N,
  ft = Zv;
function L(e) {
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
var ph = new Set(),
  Go = {};
function pr(e, t) {
  oo(e, t), oo(e + "Capture", t);
}
function oo(e, t) {
  for (Go[e] = t, e = 0; e < t.length; e++) ph.add(t[e]);
}
var on = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dl = Object.prototype.hasOwnProperty,
  ty =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yc = {},
  Xc = {};
function ny(e) {
  return dl.call(Xc, e)
    ? !0
    : dl.call(Yc, e)
    ? !1
    : ty.test(e)
    ? (Xc[e] = !0)
    : ((Yc[e] = !0), !1);
}
function ry(e, t, n, r) {
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
function oy(e, t, n, r) {
  if (t === null || typeof t > "u" || ry(e, t, n, r)) return !0;
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
function Ke(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nu = /[\-:]([a-z])/g;
function Iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nu, Iu);
    je[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nu, Iu);
    je[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nu, Iu);
  je[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Au(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (oy(t, n, o, r) && (n = null),
    r || o === null
      ? ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var un = ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Fi = Symbol.for("react.element"),
  _r = Symbol.for("react.portal"),
  Pr = Symbol.for("react.fragment"),
  Fu = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  mh = Symbol.for("react.provider"),
  vh = Symbol.for("react.context"),
  ju = Symbol.for("react.forward_ref"),
  hl = Symbol.for("react.suspense"),
  pl = Symbol.for("react.suspense_list"),
  Du = Symbol.for("react.memo"),
  pn = Symbol.for("react.lazy"),
  yh = Symbol.for("react.offscreen"),
  Gc = Symbol.iterator;
function Co(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gc && e[Gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  ka;
function Ao(e) {
  if (ka === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ka = (t && t[1]) || "";
    }
  return (
    `
  ` +
    ka +
    e
  );
}
var Oa = !1;
function La(e, t) {
  if (!e || Oa) return "";
  Oa = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
  `),
          i = r.stack.split(`
  `),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
  ` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Oa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ao(e) : "";
}
function iy(e) {
  switch (e.tag) {
    case 5:
      return Ao(e.type);
    case 16:
      return Ao("Lazy");
    case 13:
      return Ao("Suspense");
    case 19:
      return Ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = La(e.type, !1)), e;
    case 11:
      return (e = La(e.type.render, !1)), e;
    case 1:
      return (e = La(e.type, !0)), e;
    default:
      return "";
  }
}
function ml(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pr:
      return "Fragment";
    case _r:
      return "Portal";
    case fl:
      return "Profiler";
    case Fu:
      return "StrictMode";
    case hl:
      return "Suspense";
    case pl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vh:
        return (e.displayName || "Context") + ".Consumer";
      case mh:
        return (e._context.displayName || "Context") + ".Provider";
      case ju:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Du:
        return (
          (t = e.displayName || null), t !== null ? t : ml(e.type) || "Memo"
        );
      case pn:
        (t = e._payload), (e = e._init);
        try {
          return ml(e(t));
        } catch {}
    }
  return null;
}
function sy(e) {
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
      return ml(t);
    case 8:
      return t === Fu ? "StrictMode" : "Mode";
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
function Fn(e) {
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
function gh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ay(e) {
  var t = gh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ji(e) {
  e._valueTracker || (e._valueTracker = ay(e));
}
function wh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function vl(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Jc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sh(e, t) {
  (t = t.checked), t != null && Au(e, "checked", t, !1);
}
function yl(e, t) {
  Sh(e, t);
  var n = Fn(t.value),
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
    ? gl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gl(e, t.type, Fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zc(e, t, n) {
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
function gl(e, t, n) {
  (t !== "number" || vs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fo = Array.isArray;
function Dr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function wl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ed(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Fo(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Fn(n) };
}
function Eh(e, t) {
  var n = Fn(t.value),
    r = Fn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function td(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Sl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Di,
  Ch = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Di = Di || document.createElement("div"),
          Di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zo = {
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
  ly = ["Webkit", "ms", "Moz", "O"];
Object.keys(zo).forEach(function (e) {
  ly.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zo[t] = zo[e]);
  });
});
function Th(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zo.hasOwnProperty(e) && zo[e])
    ? ("" + t).trim()
    : t + "px";
}
function _h(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Th(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var uy = ge(
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
function El(e, t) {
  if (t) {
    if (uy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function xl(e, t) {
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
var Cl = null;
function bu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  br = null,
  zr = null;
function nd(e) {
  if ((e = Pi(e))) {
    if (typeof Tl != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = ta(t)), Tl(e.stateNode, e.type, t));
  }
}
function Ph(e) {
  br ? (zr ? zr.push(e) : (zr = [e])) : (br = e);
}
function Rh() {
  if (br) {
    var e = br,
      t = zr;
    if (((zr = br = null), nd(e), t)) for (e = 0; e < t.length; e++) nd(t[e]);
  }
}
function kh(e, t) {
  return e(t);
}
function Oh() {}
var Ma = !1;
function Lh(e, t, n) {
  if (Ma) return e(t, n);
  Ma = !0;
  try {
    return kh(e, t, n);
  } finally {
    (Ma = !1), (br !== null || zr !== null) && (Oh(), Rh());
  }
}
function Zo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ta(n);
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
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var _l = !1;
if (on)
  try {
    var To = {};
    Object.defineProperty(To, "passive", {
      get: function () {
        _l = !0;
      },
    }),
      window.addEventListener("test", To, To),
      window.removeEventListener("test", To, To);
  } catch {
    _l = !1;
  }
function cy(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Bo = !1,
  ys = null,
  gs = !1,
  Pl = null,
  dy = {
    onError: function (e) {
      (Bo = !0), (ys = e);
    },
  };
function fy(e, t, n, r, o, i, s, a, l) {
  (Bo = !1), (ys = null), cy.apply(dy, arguments);
}
function hy(e, t, n, r, o, i, s, a, l) {
  if ((fy.apply(this, arguments), Bo)) {
    if (Bo) {
      var u = ys;
      (Bo = !1), (ys = null);
    } else throw Error(L(198));
    gs || ((gs = !0), (Pl = u));
  }
}
function mr(e) {
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
function Mh(e) {
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
function rd(e) {
  if (mr(e) !== e) throw Error(L(188));
}
function py(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = mr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return rd(o), e;
        if (i === r) return rd(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Nh(e) {
  return (e = py(e)), e !== null ? Ih(e) : null;
}
function Ih(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ih(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ah = ft.unstable_scheduleCallback,
  od = ft.unstable_cancelCallback,
  my = ft.unstable_shouldYield,
  vy = ft.unstable_requestPaint,
  xe = ft.unstable_now,
  yy = ft.unstable_getCurrentPriorityLevel,
  zu = ft.unstable_ImmediatePriority,
  Fh = ft.unstable_UserBlockingPriority,
  ws = ft.unstable_NormalPriority,
  gy = ft.unstable_LowPriority,
  jh = ft.unstable_IdlePriority,
  Gs = null,
  Yt = null;
function wy(e) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var It = Math.clz32 ? Math.clz32 : xy,
  Sy = Math.log,
  Ey = Math.LN2;
function xy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sy(e) / Ey) | 0)) | 0;
}
var bi = 64,
  zi = 4194304;
function jo(e) {
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
function Ss(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = jo(a)) : ((i &= s), i !== 0 && (r = jo(i)));
  } else (s = n & ~o), s !== 0 ? (r = jo(s)) : i !== 0 && (r = jo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - It(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Cy(e, t) {
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
function Ty(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - It(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = Cy(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Rl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dh() {
  var e = bi;
  return (bi <<= 1), !(bi & 4194240) && (bi = 64), e;
}
function Na(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ti(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - It(t)),
    (e[t] = n);
}
function _y(e, t) {
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
    var o = 31 - It(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Bu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - It(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function bh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zh,
  Uu,
  Bh,
  Uh,
  $h,
  kl = !1,
  Bi = [],
  Pn = null,
  Rn = null,
  kn = null,
  ei = new Map(),
  ti = new Map(),
  vn = [],
  Py =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function id(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Pn = null;
      break;
    case "dragenter":
    case "dragleave":
      Rn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      ei.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ti.delete(t.pointerId);
  }
}
function _o(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Pi(t)), t !== null && Uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ry(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Pn = _o(Pn, e, t, n, r, o)), !0;
    case "dragenter":
      return (Rn = _o(Rn, e, t, n, r, o)), !0;
    case "mouseover":
      return (kn = _o(kn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ei.set(i, _o(ei.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ti.set(i, _o(ti.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Hh(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = mr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mh(n)), t !== null)) {
          (e.blockedOn = t),
            $h(e.priority, function () {
              Bh(n);
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
function rs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cl = r), n.target.dispatchEvent(r), (Cl = null);
    } else return (t = Pi(n)), t !== null && Uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sd(e, t, n) {
  rs(e) && n.delete(t);
}
function ky() {
  (kl = !1),
    Pn !== null && rs(Pn) && (Pn = null),
    Rn !== null && rs(Rn) && (Rn = null),
    kn !== null && rs(kn) && (kn = null),
    ei.forEach(sd),
    ti.forEach(sd);
}
function Po(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    kl ||
      ((kl = !0),
      ft.unstable_scheduleCallback(ft.unstable_NormalPriority, ky)));
}
function ni(e) {
  function t(o) {
    return Po(o, e);
  }
  if (0 < Bi.length) {
    Po(Bi[0], e);
    for (var n = 1; n < Bi.length; n++) {
      var r = Bi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Pn !== null && Po(Pn, e),
      Rn !== null && Po(Rn, e),
      kn !== null && Po(kn, e),
      ei.forEach(t),
      ti.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (r = vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    Hh(n), n.blockedOn === null && vn.shift();
}
var Br = un.ReactCurrentBatchConfig,
  Es = !0;
function Oy(e, t, n, r) {
  var o = ne,
    i = Br.transition;
  Br.transition = null;
  try {
    (ne = 1), $u(e, t, n, r);
  } finally {
    (ne = o), (Br.transition = i);
  }
}
function Ly(e, t, n, r) {
  var o = ne,
    i = Br.transition;
  Br.transition = null;
  try {
    (ne = 4), $u(e, t, n, r);
  } finally {
    (ne = o), (Br.transition = i);
  }
}
function $u(e, t, n, r) {
  if (Es) {
    var o = Ol(e, t, n, r);
    if (o === null) $a(e, t, r, xs, n), id(e, r);
    else if (Ry(o, e, t, n, r)) r.stopPropagation();
    else if ((id(e, r), t & 4 && -1 < Py.indexOf(e))) {
      for (; o !== null; ) {
        var i = Pi(o);
        if (
          (i !== null && zh(i),
          (i = Ol(e, t, n, r)),
          i === null && $a(e, t, r, xs, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $a(e, t, r, null, n);
  }
}
var xs = null;
function Ol(e, t, n, r) {
  if (((xs = null), (e = bu(r)), (e = Qn(e)), e !== null))
    if (((t = mr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xs = e), null;
}
function Vh(e) {
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
      switch (yy()) {
        case zu:
          return 1;
        case Fh:
          return 4;
        case ws:
        case gy:
          return 16;
        case jh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null,
  Hu = null,
  os = null;
function Wh() {
  if (os) return os;
  var e,
    t = Hu,
    n = t.length,
    r,
    o = "value" in Tn ? Tn.value : Tn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (os = o.slice(e, 1 < r ? 1 - r : void 0));
}
function is(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ui() {
  return !0;
}
function ad() {
  return !1;
}
function pt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ui
        : ad),
      (this.isPropagationStopped = ad),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ui));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ui));
      },
      persist: function () {},
      isPersistent: Ui,
    }),
    t
  );
}
var go = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = pt(go),
  _i = ge({}, go, { view: 0, detail: 0 }),
  My = pt(_i),
  Ia,
  Aa,
  Ro,
  Js = ge({}, _i, {
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
    getModifierState: Wu,
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
        : (e !== Ro &&
            (Ro && e.type === "mousemove"
              ? ((Ia = e.screenX - Ro.screenX), (Aa = e.screenY - Ro.screenY))
              : (Aa = Ia = 0),
            (Ro = e)),
          Ia);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Aa;
    },
  }),
  ld = pt(Js),
  Ny = ge({}, Js, { dataTransfer: 0 }),
  Iy = pt(Ny),
  Ay = ge({}, _i, { relatedTarget: 0 }),
  Fa = pt(Ay),
  Fy = ge({}, go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jy = pt(Fy),
  Dy = ge({}, go, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  by = pt(Dy),
  zy = ge({}, go, { data: 0 }),
  ud = pt(zy),
  By = {
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
  Uy = {
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
  $y = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $y[e]) ? !!t[e] : !1;
}
function Wu() {
  return Hy;
}
var Vy = ge({}, _i, {
    key: function (e) {
      if (e.key) {
        var t = By[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Uy[e.keyCode] || "Unidentified"
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
    getModifierState: Wu,
    charCode: function (e) {
      return e.type === "keypress" ? is(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? is(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Wy = pt(Vy),
  Qy = ge({}, Js, {
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
  cd = pt(Qy),
  qy = ge({}, _i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wu,
  }),
  Ky = pt(qy),
  Yy = ge({}, go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xy = pt(Yy),
  Gy = ge({}, Js, {
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
  Jy = pt(Gy),
  Zy = [9, 13, 27, 32],
  Qu = on && "CompositionEvent" in window,
  Uo = null;
on && "documentMode" in document && (Uo = document.documentMode);
var eg = on && "TextEvent" in window && !Uo,
  Qh = on && (!Qu || (Uo && 8 < Uo && 11 >= Uo)),
  dd = " ",
  fd = !1;
function qh(e, t) {
  switch (e) {
    case "keyup":
      return Zy.indexOf(t.keyCode) !== -1;
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
function Kh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rr = !1;
function tg(e, t) {
  switch (e) {
    case "compositionend":
      return Kh(t);
    case "keypress":
      return t.which !== 32 ? null : ((fd = !0), dd);
    case "textInput":
      return (e = t.data), e === dd && fd ? null : e;
    default:
      return null;
  }
}
function ng(e, t) {
  if (Rr)
    return e === "compositionend" || (!Qu && qh(e, t))
      ? ((e = Wh()), (os = Hu = Tn = null), (Rr = !1), e)
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
      return Qh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rg = {
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
function hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rg[e.type] : t === "textarea";
}
function Yh(e, t, n, r) {
  Ph(r),
    (t = Cs(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $o = null,
  ri = null;
function og(e) {
  sp(e, 0);
}
function Zs(e) {
  var t = Lr(e);
  if (wh(t)) return e;
}
function ig(e, t) {
  if (e === "change") return t;
}
var Xh = !1;
if (on) {
  var ja;
  if (on) {
    var Da = "oninput" in document;
    if (!Da) {
      var pd = document.createElement("div");
      pd.setAttribute("oninput", "return;"),
        (Da = typeof pd.oninput == "function");
    }
    ja = Da;
  } else ja = !1;
  Xh = ja && (!document.documentMode || 9 < document.documentMode);
}
function md() {
  $o && ($o.detachEvent("onpropertychange", Gh), (ri = $o = null));
}
function Gh(e) {
  if (e.propertyName === "value" && Zs(ri)) {
    var t = [];
    Yh(t, ri, e, bu(e)), Lh(og, t);
  }
}
function sg(e, t, n) {
  e === "focusin"
    ? (md(), ($o = t), (ri = n), $o.attachEvent("onpropertychange", Gh))
    : e === "focusout" && md();
}
function ag(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Zs(ri);
}
function lg(e, t) {
  if (e === "click") return Zs(t);
}
function ug(e, t) {
  if (e === "input" || e === "change") return Zs(t);
}
function cg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == "function" ? Object.is : cg;
function oi(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!dl.call(t, o) || !jt(e[o], t[o])) return !1;
  }
  return !0;
}
function vd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yd(e, t) {
  var n = vd(e);
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
    n = vd(n);
  }
}
function Jh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zh() {
  for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vs(e.document);
  }
  return t;
}
function qu(e) {
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
function dg(e) {
  var t = Zh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qu(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = yd(n, i));
        var s = yd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var fg = on && "documentMode" in document && 11 >= document.documentMode,
  kr = null,
  Ll = null,
  Ho = null,
  Ml = !1;
function gd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ml ||
    kr == null ||
    kr !== vs(r) ||
    ((r = kr),
    "selectionStart" in r && qu(r)
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
    (Ho && oi(Ho, r)) ||
      ((Ho = r),
      (r = Cs(Ll, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kr))));
}
function $i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Or = {
    animationend: $i("Animation", "AnimationEnd"),
    animationiteration: $i("Animation", "AnimationIteration"),
    animationstart: $i("Animation", "AnimationStart"),
    transitionend: $i("Transition", "TransitionEnd"),
  },
  ba = {},
  ep = {};
on &&
  ((ep = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Or.animationend.animation,
    delete Or.animationiteration.animation,
    delete Or.animationstart.animation),
  "TransitionEvent" in window || delete Or.transitionend.transition);
function ea(e) {
  if (ba[e]) return ba[e];
  if (!Or[e]) return e;
  var t = Or[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ep) return (ba[e] = t[n]);
  return e;
}
var tp = ea("animationend"),
  np = ea("animationiteration"),
  rp = ea("animationstart"),
  op = ea("transitionend"),
  ip = new Map(),
  wd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Dn(e, t) {
  ip.set(e, t), pr(t, [e]);
}
for (var za = 0; za < wd.length; za++) {
  var Ba = wd[za],
    hg = Ba.toLowerCase(),
    pg = Ba[0].toUpperCase() + Ba.slice(1);
  Dn(hg, "on" + pg);
}
Dn(tp, "onAnimationEnd");
Dn(np, "onAnimationIteration");
Dn(rp, "onAnimationStart");
Dn("dblclick", "onDoubleClick");
Dn("focusin", "onFocus");
Dn("focusout", "onBlur");
Dn(op, "onTransitionEnd");
oo("onMouseEnter", ["mouseout", "mouseover"]);
oo("onMouseLeave", ["mouseout", "mouseover"]);
oo("onPointerEnter", ["pointerout", "pointerover"]);
oo("onPointerLeave", ["pointerout", "pointerover"]);
pr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Do =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));
function Sd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hy(r, t, void 0, e), (e.currentTarget = null);
}
function sp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Sd(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Sd(o, a, u), (i = l);
        }
    }
  }
  if (gs) throw ((e = Pl), (gs = !1), (Pl = null), e);
}
function le(e, t) {
  var n = t[jl];
  n === void 0 && (n = t[jl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ap(t, e, 2, !1), n.add(r));
}
function Ua(e, t, n) {
  var r = 0;
  t && (r |= 4), ap(n, e, r, t);
}
var Hi = "_reactListening" + Math.random().toString(36).slice(2);
function ii(e) {
  if (!e[Hi]) {
    (e[Hi] = !0),
      ph.forEach(function (n) {
        n !== "selectionchange" && (mg.has(n) || Ua(n, !1, e), Ua(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hi] || ((t[Hi] = !0), Ua("selectionchange", !1, t));
  }
}
function ap(e, t, n, r) {
  switch (Vh(t)) {
    case 1:
      var o = Oy;
      break;
    case 4:
      o = Ly;
      break;
    default:
      o = $u;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !_l ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function $a(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Qn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lh(function () {
    var u = i,
      f = bu(n),
      d = [];
    e: {
      var c = ip.get(e);
      if (c !== void 0) {
        var h = Vu,
          y = e;
        switch (e) {
          case "keypress":
            if (is(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = Wy;
            break;
          case "focusin":
            (y = "focus"), (h = Fa);
            break;
          case "focusout":
            (y = "blur"), (h = Fa);
            break;
          case "beforeblur":
          case "afterblur":
            h = Fa;
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
            h = ld;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Iy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Ky;
            break;
          case tp:
          case np:
          case rp:
            h = jy;
            break;
          case op:
            h = Xy;
            break;
          case "scroll":
            h = My;
            break;
          case "wheel":
            h = Jy;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = by;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = cd;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          m = g ? (c !== null ? c + "Capture" : null) : c;
        g = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var E = v.stateNode;
          if (
            (v.tag === 5 &&
              E !== null &&
              ((v = E),
              m !== null && ((E = Zo(p, m)), E != null && g.push(si(p, E, v)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((c = new h(c, y, null, n, f)), d.push({ event: c, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          c &&
            n !== Cl &&
            (y = n.relatedTarget || n.fromElement) &&
            (Qn(y) || y[sn]))
        )
          break e;
        if (
          (h || c) &&
          ((c =
            f.window === f
              ? f
              : (c = f.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? Qn(y) : null),
              y !== null &&
                ((S = mr(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((g = ld),
            (E = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = cd),
              (E = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (S = h == null ? c : Lr(h)),
            (v = y == null ? c : Lr(y)),
            (c = new g(E, p + "leave", h, n, f)),
            (c.target = S),
            (c.relatedTarget = v),
            (E = null),
            Qn(f) === u &&
              ((g = new g(m, p + "enter", y, n, f)),
              (g.target = v),
              (g.relatedTarget = S),
              (E = g)),
            (S = E),
            h && y)
          )
            t: {
              for (g = h, m = y, p = 0, v = g; v; v = Sr(v)) p++;
              for (v = 0, E = m; E; E = Sr(E)) v++;
              for (; 0 < p - v; ) (g = Sr(g)), p--;
              for (; 0 < v - p; ) (m = Sr(m)), v--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = Sr(g)), (m = Sr(m));
              }
              g = null;
            }
          else g = null;
          h !== null && Ed(d, c, h, g, !1),
            y !== null && S !== null && Ed(d, S, y, g, !0);
        }
      }
      e: {
        if (
          ((c = u ? Lr(u) : window),
          (h = c.nodeName && c.nodeName.toLowerCase()),
          h === "select" || (h === "input" && c.type === "file"))
        )
          var _ = ig;
        else if (hd(c))
          if (Xh) _ = ug;
          else {
            _ = ag;
            var k = sg;
          }
        else
          (h = c.nodeName) &&
            h.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (_ = lg);
        if (_ && (_ = _(e, u))) {
          Yh(d, _, n, f);
          break e;
        }
        k && k(e, c, u),
          e === "focusout" &&
            (k = c._wrapperState) &&
            k.controlled &&
            c.type === "number" &&
            gl(c, "number", c.value);
      }
      switch (((k = u ? Lr(u) : window), e)) {
        case "focusin":
          (hd(k) || k.contentEditable === "true") &&
            ((kr = k), (Ll = u), (Ho = null));
          break;
        case "focusout":
          Ho = Ll = kr = null;
          break;
        case "mousedown":
          Ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ml = !1), gd(d, n, f);
          break;
        case "selectionchange":
          if (fg) break;
        case "keydown":
        case "keyup":
          gd(d, n, f);
      }
      var R;
      if (Qu)
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
        Rr
          ? qh(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Qh &&
          n.locale !== "ko" &&
          (Rr || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && Rr && (R = Wh())
            : ((Tn = f),
              (Hu = "value" in Tn ? Tn.value : Tn.textContent),
              (Rr = !0))),
        (k = Cs(u, x)),
        0 < k.length &&
          ((x = new ud(x, e, null, n, f)),
          d.push({ event: x, listeners: k }),
          R ? (x.data = R) : ((R = Kh(n)), R !== null && (x.data = R)))),
        (R = eg ? tg(e, n) : ng(e, n)) &&
          ((u = Cs(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new ud("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = R)));
    }
    sp(d, t);
  });
}
function si(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Zo(e, n)),
      i != null && r.unshift(si(e, i, o)),
      (i = Zo(e, t)),
      i != null && r.push(si(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ed(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Zo(n, i)), l != null && s.unshift(si(n, l, a)))
        : o || ((l = Zo(n, i)), l != null && s.push(si(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var vg = /\r\n?/g,
  yg = /\u0000|\uFFFD/g;
function xd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vg,
      `
  `
    )
    .replace(yg, "");
}
function Vi(e, t, n) {
  if (((t = xd(t)), xd(e) !== t && n)) throw Error(L(425));
}
function Ts() {}
var Nl = null,
  Il = null;
function Al(e, t) {
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
var Fl = typeof setTimeout == "function" ? setTimeout : void 0,
  gg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cd = typeof Promise == "function" ? Promise : void 0,
  wg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cd < "u"
      ? function (e) {
          return Cd.resolve(null).then(e).catch(Sg);
        }
      : Fl;
function Sg(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ha(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ni(t);
}
function On(e) {
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
function Td(e) {
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
var wo = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + wo,
  ai = "__reactProps$" + wo,
  sn = "__reactContainer$" + wo,
  jl = "__reactEvents$" + wo,
  Eg = "__reactListeners$" + wo,
  xg = "__reactHandles$" + wo;
function Qn(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sn] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Td(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = Td(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pi(e) {
  return (
    (e = e[Kt] || e[sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function ta(e) {
  return e[ai] || null;
}
var Dl = [],
  Mr = -1;
function bn(e) {
  return { current: e };
}
function ue(e) {
  0 > Mr || ((e.current = Dl[Mr]), (Dl[Mr] = null), Mr--);
}
function se(e, t) {
  Mr++, (Dl[Mr] = e.current), (e.current = t);
}
var jn = {},
  Ue = bn(jn),
  et = bn(!1),
  lr = jn;
function io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function tt(e) {
  return (e = e.childContextTypes), e != null;
}
function _s() {
  ue(et), ue(Ue);
}
function _d(e, t, n) {
  if (Ue.current !== jn) throw Error(L(168));
  se(Ue, t), se(et, n);
}
function lp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, sy(e) || "Unknown", o));
  return ge({}, n, r);
}
function Ps(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jn),
    (lr = Ue.current),
    se(Ue, e),
    se(et, et.current),
    !0
  );
}
function Pd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = lp(e, t, lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(et),
      ue(Ue),
      se(Ue, e))
    : ue(et),
    se(et, n);
}
var en = null,
  na = !1,
  Va = !1;
function up(e) {
  en === null ? (en = [e]) : en.push(e);
}
function Cg(e) {
  (na = !0), up(e);
}
function zn() {
  if (!Va && en !== null) {
    Va = !0;
    var e = 0,
      t = ne;
    try {
      var n = en;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (en = null), (na = !1);
    } catch (o) {
      throw (en !== null && (en = en.slice(e + 1)), Ah(zu, zn), o);
    } finally {
      (ne = t), (Va = !1);
    }
  }
  return null;
}
var Nr = [],
  Ir = 0,
  Rs = null,
  ks = 0,
  wt = [],
  St = 0,
  ur = null,
  tn = 1,
  nn = "";
function Hn(e, t) {
  (Nr[Ir++] = ks), (Nr[Ir++] = Rs), (Rs = e), (ks = t);
}
function cp(e, t, n) {
  (wt[St++] = tn), (wt[St++] = nn), (wt[St++] = ur), (ur = e);
  var r = tn;
  e = nn;
  var o = 32 - It(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - It(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (tn = (1 << (32 - It(t) + o)) | (n << o) | r),
      (nn = i + e);
  } else (tn = (1 << i) | (n << o) | r), (nn = e);
}
function Ku(e) {
  e.return !== null && (Hn(e, 1), cp(e, 1, 0));
}
function Yu(e) {
  for (; e === Rs; )
    (Rs = Nr[--Ir]), (Nr[Ir] = null), (ks = Nr[--Ir]), (Nr[Ir] = null);
  for (; e === ur; )
    (ur = wt[--St]),
      (wt[St] = null),
      (nn = wt[--St]),
      (wt[St] = null),
      (tn = wt[--St]),
      (wt[St] = null);
}
var ct = null,
  ut = null,
  he = !1,
  Lt = null;
function dp(e, t) {
  var n = Et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ct = e), (ut = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ct = e), (ut = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ur !== null ? { id: tn, overflow: nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ct = e),
            (ut = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zl(e) {
  if (he) {
    var t = ut;
    if (t) {
      var n = t;
      if (!Rd(e, t)) {
        if (bl(e)) throw Error(L(418));
        t = On(n.nextSibling);
        var r = ct;
        t && Rd(e, t)
          ? dp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ct = e));
      }
    } else {
      if (bl(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (ct = e);
    }
  }
}
function kd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ct = e;
}
function Wi(e) {
  if (e !== ct) return !1;
  if (!he) return kd(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Al(e.type, e.memoizedProps))),
    t && (t = ut))
  ) {
    if (bl(e)) throw (fp(), Error(L(418)));
    for (; t; ) dp(e, t), (t = On(t.nextSibling));
  }
  if ((kd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ut = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ut = null;
    }
  } else ut = ct ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function fp() {
  for (var e = ut; e; ) e = On(e.nextSibling);
}
function so() {
  (ut = ct = null), (he = !1);
}
function Xu(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
var Tg = un.ReactCurrentBatchConfig;
function ko(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Qi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Od(e) {
  var t = e._init;
  return t(e._payload);
}
function hp(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = In(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, v, E) {
    return p === null || p.tag !== 6
      ? ((p = Ga(v, m.mode, E)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function l(m, p, v, E) {
    var _ = v.type;
    return _ === Pr
      ? f(m, p, v.props.children, E, v.key)
      : p !== null &&
        (p.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === pn &&
            Od(_) === p.type))
      ? ((E = o(p, v.props)), (E.ref = ko(m, p, v)), (E.return = m), E)
      : ((E = fs(v.type, v.key, v.props, null, m.mode, E)),
        (E.ref = ko(m, p, v)),
        (E.return = m),
        E);
  }
  function u(m, p, v, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Ja(v, m.mode, E)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function f(m, p, v, E, _) {
    return p === null || p.tag !== 7
      ? ((p = ir(v, m.mode, E, _)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function d(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ga("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Fi:
          return (
            (v = fs(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = ko(m, null, p)),
            (v.return = m),
            v
          );
        case _r:
          return (p = Ja(p, m.mode, v)), (p.return = m), p;
        case pn:
          var E = p._init;
          return d(m, E(p._payload), v);
      }
      if (Fo(p) || Co(p))
        return (p = ir(p, m.mode, v, null)), (p.return = m), p;
      Qi(m, p);
    }
    return null;
  }
  function c(m, p, v, E) {
    var _ = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return _ !== null ? null : a(m, p, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Fi:
          return v.key === _ ? l(m, p, v, E) : null;
        case _r:
          return v.key === _ ? u(m, p, v, E) : null;
        case pn:
          return (_ = v._init), c(m, p, _(v._payload), E);
      }
      if (Fo(v) || Co(v)) return _ !== null ? null : f(m, p, v, E, null);
      Qi(m, v);
    }
    return null;
  }
  function h(m, p, v, E, _) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (m = m.get(v) || null), a(p, m, "" + E, _);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Fi:
          return (m = m.get(E.key === null ? v : E.key) || null), l(p, m, E, _);
        case _r:
          return (m = m.get(E.key === null ? v : E.key) || null), u(p, m, E, _);
        case pn:
          var k = E._init;
          return h(m, p, v, k(E._payload), _);
      }
      if (Fo(E) || Co(E)) return (m = m.get(v) || null), f(p, m, E, _, null);
      Qi(p, E);
    }
    return null;
  }
  function y(m, p, v, E) {
    for (
      var _ = null, k = null, R = p, x = (p = 0), B = null;
      R !== null && x < v.length;
      x++
    ) {
      R.index > x ? ((B = R), (R = null)) : (B = R.sibling);
      var z = c(m, R, v[x], E);
      if (z === null) {
        R === null && (R = B);
        break;
      }
      e && R && z.alternate === null && t(m, R),
        (p = i(z, p, x)),
        k === null ? (_ = z) : (k.sibling = z),
        (k = z),
        (R = B);
    }
    if (x === v.length) return n(m, R), he && Hn(m, x), _;
    if (R === null) {
      for (; x < v.length; x++)
        (R = d(m, v[x], E)),
          R !== null &&
            ((p = i(R, p, x)), k === null ? (_ = R) : (k.sibling = R), (k = R));
      return he && Hn(m, x), _;
    }
    for (R = r(m, R); x < v.length; x++)
      (B = h(R, m, x, v[x], E)),
        B !== null &&
          (e && B.alternate !== null && R.delete(B.key === null ? x : B.key),
          (p = i(B, p, x)),
          k === null ? (_ = B) : (k.sibling = B),
          (k = B));
    return (
      e &&
        R.forEach(function (q) {
          return t(m, q);
        }),
      he && Hn(m, x),
      _
    );
  }
  function g(m, p, v, E) {
    var _ = Co(v);
    if (typeof _ != "function") throw Error(L(150));
    if (((v = _.call(v)), v == null)) throw Error(L(151));
    for (
      var k = (_ = null), R = p, x = (p = 0), B = null, z = v.next();
      R !== null && !z.done;
      x++, z = v.next()
    ) {
      R.index > x ? ((B = R), (R = null)) : (B = R.sibling);
      var q = c(m, R, z.value, E);
      if (q === null) {
        R === null && (R = B);
        break;
      }
      e && R && q.alternate === null && t(m, R),
        (p = i(q, p, x)),
        k === null ? (_ = q) : (k.sibling = q),
        (k = q),
        (R = B);
    }
    if (z.done) return n(m, R), he && Hn(m, x), _;
    if (R === null) {
      for (; !z.done; x++, z = v.next())
        (z = d(m, z.value, E)),
          z !== null &&
            ((p = i(z, p, x)), k === null ? (_ = z) : (k.sibling = z), (k = z));
      return he && Hn(m, x), _;
    }
    for (R = r(m, R); !z.done; x++, z = v.next())
      (z = h(R, m, x, z.value, E)),
        z !== null &&
          (e && z.alternate !== null && R.delete(z.key === null ? x : z.key),
          (p = i(z, p, x)),
          k === null ? (_ = z) : (k.sibling = z),
          (k = z));
    return (
      e &&
        R.forEach(function (Z) {
          return t(m, Z);
        }),
      he && Hn(m, x),
      _
    );
  }
  function S(m, p, v, E) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Pr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Fi:
          e: {
            for (var _ = v.key, k = p; k !== null; ) {
              if (k.key === _) {
                if (((_ = v.type), _ === Pr)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (p = o(k, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  k.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === pn &&
                    Od(_) === k.type)
                ) {
                  n(m, k.sibling),
                    (p = o(k, v.props)),
                    (p.ref = ko(m, k, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            v.type === Pr
              ? ((p = ir(v.props.children, m.mode, E, v.key)),
                (p.return = m),
                (m = p))
              : ((E = fs(v.type, v.key, v.props, null, m.mode, E)),
                (E.ref = ko(m, p, v)),
                (E.return = m),
                (m = E));
          }
          return s(m);
        case _r:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Ja(v, m.mode, E)), (p.return = m), (m = p);
          }
          return s(m);
        case pn:
          return (k = v._init), S(m, p, k(v._payload), E);
      }
      if (Fo(v)) return y(m, p, v, E);
      if (Co(v)) return g(m, p, v, E);
      Qi(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Ga(v, m.mode, E)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return S;
}
var ao = hp(!0),
  pp = hp(!1),
  Os = bn(null),
  Ls = null,
  Ar = null,
  Gu = null;
function Ju() {
  Gu = Ar = Ls = null;
}
function Zu(e) {
  var t = Os.current;
  ue(Os), (e._currentValue = t);
}
function Bl(e, t, n) {
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
function Ur(e, t) {
  (Ls = e),
    (Gu = Ar = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ze = !0), (e.firstContext = null));
}
function Ct(e) {
  var t = e._currentValue;
  if (Gu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ar === null)) {
      if (Ls === null) throw Error(L(308));
      (Ar = e), (Ls.dependencies = { lanes: 0, firstContext: e });
    } else Ar = Ar.next = e;
  return t;
}
var qn = null;
function ec(e) {
  qn === null ? (qn = [e]) : qn.push(e);
}
function mp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ec(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    an(e, r)
  );
}
function an(e, t) {
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
var mn = !1;
function tc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vp(e, t) {
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
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      an(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ec(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    an(e, n)
  );
}
function ss(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bu(e, n);
  }
}
function Ld(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function Ms(e, t, n, r) {
  var o = e.updateQueue;
  mn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (f = u = l = null), (a = i);
    do {
      var c = a.lane,
        h = a.eventTime;
      if ((r & c) === c) {
        f !== null &&
          (f = f.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((c = t), (h = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                d = y.call(h, d, c);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (c = typeof y == "function" ? y.call(h, d, c) : y),
                c == null)
              )
                break e;
              d = ge({}, d, c);
              break e;
            case 2:
              mn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [a]) : c.push(a));
      } else
        (h = {
          eventTime: h,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = h), (l = d)) : (f = f.next = h),
          (s |= c);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (c = a),
          (a = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (dr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Md(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Ri = {},
  Xt = bn(Ri),
  li = bn(Ri),
  ui = bn(Ri);
function Kn(e) {
  if (e === Ri) throw Error(L(174));
  return e;
}
function nc(e, t) {
  switch ((se(ui, t), se(li, e), se(Xt, Ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Sl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Sl(t, e));
  }
  ue(Xt), se(Xt, t);
}
function lo() {
  ue(Xt), ue(li), ue(ui);
}
function yp(e) {
  Kn(ui.current);
  var t = Kn(Xt.current),
    n = Sl(t, e.type);
  t !== n && (se(li, e), se(Xt, n));
}
function rc(e) {
  li.current === e && (ue(Xt), ue(li));
}
var me = bn(0);
function Ns(e) {
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
var Wa = [];
function oc() {
  for (var e = 0; e < Wa.length; e++)
    Wa[e]._workInProgressVersionPrimary = null;
  Wa.length = 0;
}
var as = un.ReactCurrentDispatcher,
  Qa = un.ReactCurrentBatchConfig,
  cr = 0,
  ye = null,
  ke = null,
  Le = null,
  Is = !1,
  Vo = !1,
  ci = 0,
  _g = 0;
function De() {
  throw Error(L(321));
}
function ic(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jt(e[n], t[n])) return !1;
  return !0;
}
function sc(e, t, n, r, o, i) {
  if (
    ((cr = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (as.current = e === null || e.memoizedState === null ? Og : Lg),
    (e = n(r, o)),
    Vo)
  ) {
    i = 0;
    do {
      if (((Vo = !1), (ci = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (Le = ke = null),
        (t.updateQueue = null),
        (as.current = Mg),
        (e = n(r, o));
    } while (Vo);
  }
  if (
    ((as.current = As),
    (t = ke !== null && ke.next !== null),
    (cr = 0),
    (Le = ke = ye = null),
    (Is = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function ac() {
  var e = ci !== 0;
  return (ci = 0), e;
}
function $t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function Tt() {
  if (ke === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Le === null ? ye.memoizedState : Le.next;
  if (t !== null) (Le = t), (ke = e);
  else {
    if (e === null) throw Error(L(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function di(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qa(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var f = u.lane;
      if ((cr & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (ye.lanes |= f),
          (dr |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      jt(r, t.memoizedState) || (Ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (dr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ka(e) {
  var t = Tt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    jt(i, t.memoizedState) || (Ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function gp() {}
function wp(e, t) {
  var n = ye,
    r = Tt(),
    o = t(),
    i = !jt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ze = !0)),
    (r = r.queue),
    lc(xp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fi(9, Ep.bind(null, n, r, o, t), void 0, null),
      Me === null)
    )
      throw Error(L(349));
    cr & 30 || Sp(n, t, o);
  }
  return o;
}
function Sp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ep(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Cp(t) && Tp(e);
}
function xp(e, t, n) {
  return n(function () {
    Cp(t) && Tp(e);
  });
}
function Cp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function Tp(e) {
  var t = an(e, 1);
  t !== null && At(t, e, 1, -1);
}
function Nd(e) {
  var t = $t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: di,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kg.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function fi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _p() {
  return Tt().memoizedState;
}
function ls(e, t, n, r) {
  var o = $t();
  (ye.flags |= e),
    (o.memoizedState = fi(1 | t, n, void 0, r === void 0 ? null : r));
}
function ra(e, t, n, r) {
  var o = Tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (((i = s.destroy), r !== null && ic(r, s.deps))) {
      o.memoizedState = fi(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = fi(1 | t, n, i, r));
}
function Id(e, t) {
  return ls(8390656, 8, e, t);
}
function lc(e, t) {
  return ra(2048, 8, e, t);
}
function Pp(e, t) {
  return ra(4, 2, e, t);
}
function Rp(e, t) {
  return ra(4, 4, e, t);
}
function kp(e, t) {
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
function Op(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ra(4, 4, kp.bind(null, t, e), n)
  );
}
function uc() {}
function Lp(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ic(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mp(e, t) {
  var n = Tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ic(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Np(e, t, n) {
  return cr & 21
    ? (jt(n, t) || ((n = Dh()), (ye.lanes |= n), (dr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n));
}
function Pg(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qa.transition;
  Qa.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Qa.transition = r);
  }
}
function Ip() {
  return Tt().memoizedState;
}
function Rg(e, t, n) {
  var r = Nn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ap(e))
  )
    Fp(t, n);
  else if (((n = mp(e, t, n, r)), n !== null)) {
    var o = Qe();
    At(n, e, r, o), jp(n, t, r);
  }
}
function kg(e, t, n) {
  var r = Nn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ap(e)) Fp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), jt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), ec(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = mp(e, t, o, r)),
      n !== null && ((o = Qe()), At(n, e, r, o), jp(n, t, r));
  }
}
function Ap(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Fp(e, t) {
  Vo = Is = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bu(e, n);
  }
}
var As = {
    readContext: Ct,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Og = {
    readContext: Ct,
    useCallback: function (e, t) {
      return ($t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ct,
    useEffect: Id,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ls(4194308, 4, kp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ls(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ls(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $t();
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
        (e = e.dispatch = Rg.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nd,
    useDebugValue: uc,
    useDeferredValue: function (e) {
      return ($t().memoizedState = e);
    },
    useTransition: function () {
      var e = Nd(!1),
        t = e[0];
      return (e = Pg.bind(null, e[1])), ($t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = $t();
      if (he) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Me === null)) throw Error(L(349));
        cr & 30 || Sp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Id(xp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        fi(9, Ep.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $t(),
        t = Me.identifierPrefix;
      if (he) {
        var n = nn,
          r = tn;
        (n = (r & ~(1 << (32 - It(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ci++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = _g++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Lg = {
    readContext: Ct,
    useCallback: Lp,
    useContext: Ct,
    useEffect: lc,
    useImperativeHandle: Op,
    useInsertionEffect: Pp,
    useLayoutEffect: Rp,
    useMemo: Mp,
    useReducer: qa,
    useRef: _p,
    useState: function () {
      return qa(di);
    },
    useDebugValue: uc,
    useDeferredValue: function (e) {
      var t = Tt();
      return Np(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = qa(di)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: gp,
    useSyncExternalStore: wp,
    useId: Ip,
    unstable_isNewReconciler: !1,
  },
  Mg = {
    readContext: Ct,
    useCallback: Lp,
    useContext: Ct,
    useEffect: lc,
    useImperativeHandle: Op,
    useInsertionEffect: Pp,
    useLayoutEffect: Rp,
    useMemo: Mp,
    useReducer: Ka,
    useRef: _p,
    useState: function () {
      return Ka(di);
    },
    useDebugValue: uc,
    useDeferredValue: function (e) {
      var t = Tt();
      return ke === null ? (t.memoizedState = e) : Np(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Ka(di)[0],
        t = Tt().memoizedState;
      return [e, t];
    },
    useMutableSource: gp,
    useSyncExternalStore: wp,
    useId: Ip,
    unstable_isNewReconciler: !1,
  };
function Rt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var oa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? mr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = Nn(e),
      i = rn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Ln(e, i, o)),
      t !== null && (At(t, e, o, r), ss(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = Nn(e),
      i = rn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Ln(e, i, o)),
      t !== null && (At(t, e, o, r), ss(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = Nn(e),
      o = rn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ln(e, o, r)),
      t !== null && (At(t, e, r, n), ss(t, e, r));
  },
};
function Ad(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !oi(n, r) || !oi(o, i)
      : !0
  );
}
function Dp(e, t, n) {
  var r = !1,
    o = jn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ct(i))
      : ((o = tt(t) ? lr : Ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? io(e, o) : jn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = oa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && oa.enqueueReplaceState(t, t.state, null);
}
function $l(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), tc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ct(i))
    : ((i = tt(t) ? lr : Ue.current), (o.context = io(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ul(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && oa.enqueueReplaceState(o, o.state, null),
      Ms(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function uo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += iy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
  Error generating stack: ` +
      i.message +
      `
  ` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ya(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ng = typeof WeakMap == "function" ? WeakMap : Map;
function bp(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      js || ((js = !0), (Zl = r)), Hl(e, t);
    }),
    n
  );
}
function zp(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Hl(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Hl(e, t),
          typeof r != "function" &&
            (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function jd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ng();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Qg.bind(null, e, t, n)), t.then(e, e));
}
function Dd(e) {
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
function bd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rn(-1, 1)), (t.tag = 2), Ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ig = un.ReactCurrentOwner,
  Ze = !1;
function We(e, t, n, r) {
  t.child = e === null ? pp(t, null, n, r) : ao(t, e.child, n, r);
}
function zd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ur(t, o),
    (r = sc(e, t, n, r, i, o)),
    (n = ac()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (he && n && Ku(t), (t.flags |= 1), We(e, t, r, o), t.child)
  );
}
function Bd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !yc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Bp(e, t, i, r, o))
      : ((e = fs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : oi), n(s, r) && e.ref === t.ref)
    )
      return ln(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (oi(i, r) && e.ref === t.ref)
      if (((Ze = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ze = !0);
      else return (t.lanes = e.lanes), ln(e, t, o);
  }
  return Vl(e, t, n, r, o);
}
function Up(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(jr, at),
        (at |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(jr, at),
          (at |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        se(jr, at),
        (at |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(jr, at),
      (at |= r);
  return We(e, t, o, n), t.child;
}
function $p(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vl(e, t, n, r, o) {
  var i = tt(n) ? lr : Ue.current;
  return (
    (i = io(t, i)),
    Ur(t, o),
    (n = sc(e, t, n, r, i, o)),
    (r = ac()),
    e !== null && !Ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        ln(e, t, o))
      : (he && r && Ku(t), (t.flags |= 1), We(e, t, n, o), t.child)
  );
}
function Ud(e, t, n, r, o) {
  if (tt(n)) {
    var i = !0;
    Ps(t);
  } else i = !1;
  if ((Ur(t, o), t.stateNode === null))
    us(e, t), Dp(t, n, r), $l(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ct(u))
      : ((u = tt(n) ? lr : Ue.current), (u = io(t, u)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Fd(t, s, r, u)),
      (mn = !1);
    var c = t.memoizedState;
    (s.state = c),
      Ms(t, r, s, o),
      (l = t.memoizedState),
      a !== r || c !== l || et.current || mn
        ? (typeof f == "function" && (Ul(t, n, f, r), (l = t.memoizedState)),
          (a = mn || Ad(t, n, a, r, c, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      vp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Rt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (c = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ct(l))
        : ((l = tt(n) ? lr : Ue.current), (l = io(t, l)));
    var h = n.getDerivedStateFromProps;
    (f =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || c !== l) && Fd(t, s, r, l)),
      (mn = !1),
      (c = t.memoizedState),
      (s.state = c),
      Ms(t, r, s, o);
    var y = t.memoizedState;
    a !== d || c !== y || et.current || mn
      ? (typeof h == "function" && (Ul(t, n, h, r), (y = t.memoizedState)),
        (u = mn || Ad(t, n, u, r, c, y, l) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wl(e, t, n, r, i, o);
}
function Wl(e, t, n, r, o, i) {
  $p(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Pd(t, n, !1), ln(e, t, i);
  (r = t.stateNode), (Ig.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ao(t, e.child, null, i)), (t.child = ao(t, null, a, i)))
      : We(e, t, a, i),
    (t.memoizedState = r.state),
    o && Pd(t, n, !0),
    t.child
  );
}
function Hp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _d(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _d(e, t.context, !1),
    nc(e, t.containerInfo);
}
function $d(e, t, n, r, o) {
  return so(), Xu(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var Ql = { dehydrated: null, treeContext: null, retryLane: 0 };
function ql(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vp(e, t, n) {
  var r = t.pendingProps,
    o = me.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    se(me, o & 1),
    e === null)
  )
    return (
      zl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = aa(s, r, 0, null)),
              (e = ir(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ql(n)),
              (t.memoizedState = Ql),
              e)
            : cc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Ag(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = In(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = In(a, i)) : ((i = ir(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ql(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ql),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = In(i, { mode: "visible", children: r.children })),
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
function cc(e, t) {
  return (
    (t = aa({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function qi(e, t, n, r) {
  return (
    r !== null && Xu(r),
    ao(t, e.child, null, n),
    (e = cc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ag(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ya(Error(L(422)))), qi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = aa({ mode: "visible", children: r.children }, o, 0, null)),
        (i = ir(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ao(t, e.child, null, s),
        (t.child.memoizedState = ql(s)),
        (t.memoizedState = Ql),
        i);
  if (!(t.mode & 1)) return qi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(L(419))), (r = Ya(i, r, void 0)), qi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ze || a)) {
    if (((r = Me), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), an(e, o), At(r, e, o, -1));
    }
    return vc(), (r = Ya(Error(L(421)))), qi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ut = On(o.nextSibling)),
      (ct = t),
      (he = !0),
      (Lt = null),
      e !== null &&
        ((wt[St++] = tn),
        (wt[St++] = nn),
        (wt[St++] = ur),
        (tn = e.id),
        (nn = e.overflow),
        (ur = t)),
      (t = cc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bl(e.return, t, n);
}
function Xa(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Wp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((We(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hd(e, n, t);
        else if (e.tag === 19) Hd(e, n, t);
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
  if ((se(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ns(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Xa(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ns(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Xa(t, !0, n, null, i);
        break;
      case "together":
        Xa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function us(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Fg(e, t, n) {
  switch (t.tag) {
    case 3:
      Hp(t), so();
      break;
    case 5:
      yp(t);
      break;
    case 1:
      tt(t.type) && Ps(t);
      break;
    case 4:
      nc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      se(Os, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vp(e, t, n)
          : (se(me, me.current & 1),
            (e = ln(e, t, n)),
            e !== null ? e.sibling : null);
      se(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        se(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Up(e, t, n);
  }
  return ln(e, t, n);
}
var Qp, Kl, qp, Kp;
Qp = function (e, t) {
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
Kl = function () {};
qp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Kn(Xt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = vl(e, o)), (r = vl(e, r)), (i = []);
        break;
      case "select":
        (o = ge({}, o, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = wl(e, o)), (r = wl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ts);
    }
    El(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Go.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Go.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && le("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Kp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Oo(e, t) {
  if (!he)
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
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function jg(e, t, n) {
  var r = t.pendingProps;
  switch ((Yu(t), t.tag)) {
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
      return be(t), null;
    case 1:
      return tt(t.type) && _s(), be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        lo(),
        ue(et),
        ue(Ue),
        oc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Lt !== null && (nu(Lt), (Lt = null)))),
        Kl(e, t),
        be(t),
        null
      );
    case 5:
      rc(t);
      var o = Kn(ui.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        qp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return be(t), null;
        }
        if (((e = Kn(Xt.current)), Wi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Kt] = t), (r[ai] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Do.length; o++) le(Do[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Jc(r, i), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              ed(r, i), le("invalid", r);
          }
          El(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Vi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Go.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              ji(r), Zc(r, i, !0);
              break;
            case "textarea":
              ji(r), td(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ts);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Kt] = t),
            (e[ai] = r),
            Qp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = xl(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Do.length; o++) le(Do[o], e);
                o = r;
                break;
              case "source":
                le("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (o = r);
                break;
              case "details":
                le("toggle", e), (o = r);
                break;
              case "input":
                Jc(e, r), (o = vl(e, r)), le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ge({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                ed(e, r), (o = wl(e, r)), le("invalid", e);
                break;
              default:
                o = r;
            }
            El(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? _h(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Ch(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Jo(e, l)
                    : typeof l == "number" && Jo(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Go.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && le("scroll", e)
                      : l != null && Au(e, i, l, s));
              }
            switch (n) {
              case "input":
                ji(e), Zc(e, r, !1);
                break;
              case "textarea":
                ji(e), td(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Dr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Dr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ts);
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
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) Kp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Kn(ui.current)), Kn(Xt.current), Wi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Kt] = t),
            (i = r.nodeValue !== n) && ((e = ct), e !== null))
          )
            switch (e.tag) {
              case 3:
                Vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Kt] = t),
            (t.stateNode = r);
      }
      return be(t), null;
    case 13:
      if (
        (ue(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && ut !== null && t.mode & 1 && !(t.flags & 128))
          fp(), so(), (t.flags |= 98560), (i = !1);
        else if (((i = Wi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[Kt] = t;
          } else
            so(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (i = !1);
        } else Lt !== null && (nu(Lt), (Lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Oe === 0 && (Oe = 3) : vc())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return (
        lo(), Kl(e, t), e === null && ii(t.stateNode.containerInfo), be(t), null
      );
    case 10:
      return Zu(t.type._context), be(t), null;
    case 17:
      return tt(t.type) && _s(), be(t), null;
    case 19:
      if ((ue(me), (i = t.memoizedState), i === null)) return be(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Oo(i, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ns(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Oo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            xe() > co &&
            ((t.flags |= 128), (r = !0), Oo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ns(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Oo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
            )
              return be(t), null;
          } else
            2 * xe() - i.renderingStartTime > co &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Oo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = xe()),
          (t.sibling = null),
          (n = me.current),
          se(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        mc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? at & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function Dg(e, t) {
  switch ((Yu(t), t.tag)) {
    case 1:
      return (
        tt(t.type) && _s(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        lo(),
        ue(et),
        ue(Ue),
        oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return rc(t), null;
    case 13:
      if (
        (ue(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        so();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(me), null;
    case 4:
      return lo(), null;
    case 10:
      return Zu(t.type._context), null;
    case 22:
    case 23:
      return mc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ki = !1,
  Be = !1,
  bg = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Yl(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Vd = !1;
function zg(e, t) {
  if (((Nl = Es), (e = Zh()), qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            f = 0,
            d = e,
            c = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (c = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (c === n && ++u === o && (a = s),
                c === i && ++f === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = c), (c = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Il = { focusedElem: e, selectionRange: n }, Es = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
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
                  var g = y.memoizedProps,
                    S = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Rt(t.type, g),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Ee(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (y = Vd), (Vd = !1), y;
}
function Wo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Yl(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ia(e, t) {
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
function Xl(e) {
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
function Yp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[ai], delete t[jl], delete t[Eg], delete t[xg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xp(e.return)) return null;
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
function Gl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ts));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), (e = e.sibling);
}
function Jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
}
var Ne = null,
  Ot = !1;
function dn(e, t, n) {
  for (n = n.child; n !== null; ) Gp(e, t, n), (n = n.sibling);
}
function Gp(e, t, n) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(Gs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || Fr(n, t);
    case 6:
      var r = Ne,
        o = Ot;
      (Ne = null),
        dn(e, t, n),
        (Ne = r),
        (Ot = o),
        Ne !== null &&
          (Ot
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (Ot
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ha(e.parentNode, n)
              : e.nodeType === 1 && Ha(e, n),
            ni(e))
          : Ha(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (o = Ot),
        (Ne = n.stateNode.containerInfo),
        (Ot = !0),
        dn(e, t, n),
        (Ne = r),
        (Ot = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Yl(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      dn(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (Fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ee(n, t, a);
        }
      dn(e, t, n);
      break;
    case 21:
      dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), dn(e, t, n), (Be = r))
        : dn(e, t, n);
      break;
    default:
      dn(e, t, n);
  }
}
function Qd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bg()),
      t.forEach(function (r) {
        var o = Kg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (Ot = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (Ot = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (Ot = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(L(160));
        Gp(i, s, o), (Ne = null), (Ot = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ee(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jp(t, e), (t = t.sibling);
}
function Jp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pt(t, e), Bt(e), r & 4)) {
        try {
          Wo(3, e, e.return), ia(3, e);
        } catch (g) {
          Ee(e, e.return, g);
        }
        try {
          Wo(5, e, e.return);
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 1:
      Pt(t, e), Bt(e), r & 512 && n !== null && Fr(n, n.return);
      break;
    case 5:
      if (
        (Pt(t, e),
        Bt(e),
        r & 512 && n !== null && Fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Jo(o, "");
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Sh(o, i),
              xl(a, s);
            var u = xl(a, i);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s],
                d = l[s + 1];
              f === "style"
                ? _h(o, d)
                : f === "dangerouslySetInnerHTML"
                ? Ch(o, d)
                : f === "children"
                ? Jo(o, d)
                : Au(o, f, d, u);
            }
            switch (a) {
              case "input":
                yl(o, i);
                break;
              case "textarea":
                Eh(o, i);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Dr(o, !!i.multiple, h, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Dr(o, !!i.multiple, i.defaultValue, !0)
                      : Dr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ai] = i;
          } catch (g) {
            Ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Pt(t, e), Bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Pt(t, e), Bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ni(t.containerInfo);
        } catch (g) {
          Ee(e, e.return, g);
        }
      break;
    case 4:
      Pt(t, e), Bt(e);
      break;
    case 13:
      Pt(t, e),
        Bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (hc = xe())),
        r & 4 && Qd(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (u = Be) || f), Pt(t, e), (Be = u)) : Pt(t, e),
        Bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (D = e, f = e.child; f !== null; ) {
            for (d = D = f; D !== null; ) {
              switch (((c = D), (h = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wo(4, c, c.return);
                  break;
                case 1:
                  Fr(c, c.return);
                  var y = c.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Ee(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Fr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Kd(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = c), (D = h)) : Kd(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Th("display", s)));
              } catch (g) {
                Ee(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Ee(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Pt(t, e), Bt(e), r & 4 && Qd(e);
      break;
    case 21:
      break;
    default:
      Pt(t, e), Bt(e);
  }
}
function Bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Jo(o, ""), (r.flags &= -33));
          var i = Wd(e);
          Jl(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Wd(e);
          Gl(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Ee(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bg(e, t, n) {
  (D = e), Zp(e);
}
function Zp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ki;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Be;
        a = Ki;
        var u = Be;
        if (((Ki = s), (Be = l) && !u))
          for (D = o; D !== null; )
            (s = D),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Yd(o)
                : l !== null
                ? ((l.return = s), (D = l))
                : Yd(o);
        for (; i !== null; ) (D = i), Zp(i), (i = i.sibling);
        (D = o), (Ki = a), (Be = u);
      }
      qd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (D = i)) : qd(e);
  }
}
function qd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || ia(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Md(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Md(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && ni(d);
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
              throw Error(L(163));
          }
        Be || (t.flags & 512 && Xl(t));
      } catch (c) {
        Ee(t, t.return, c);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Kd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Yd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ia(4, t);
          } catch (l) {
            Ee(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ee(t, o, l);
            }
          }
          var i = t.return;
          try {
            Xl(t);
          } catch (l) {
            Ee(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Xl(t);
          } catch (l) {
            Ee(t, s, l);
          }
      }
    } catch (l) {
      Ee(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var Ug = Math.ceil,
  Fs = un.ReactCurrentDispatcher,
  dc = un.ReactCurrentOwner,
  xt = un.ReactCurrentBatchConfig,
  J = 0,
  Me = null,
  Pe = null,
  Fe = 0,
  at = 0,
  jr = bn(0),
  Oe = 0,
  hi = null,
  dr = 0,
  sa = 0,
  fc = 0,
  Qo = null,
  Je = null,
  hc = 0,
  co = 1 / 0,
  Zt = null,
  js = !1,
  Zl = null,
  Mn = null,
  Yi = !1,
  _n = null,
  Ds = 0,
  qo = 0,
  eu = null,
  cs = -1,
  ds = 0;
function Qe() {
  return J & 6 ? xe() : cs !== -1 ? cs : (cs = xe());
}
function Nn(e) {
  return e.mode & 1
    ? J & 2 && Fe !== 0
      ? Fe & -Fe
      : Tg.transition !== null
      ? (ds === 0 && (ds = Dh()), ds)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vh(e.type))),
        e)
    : 1;
}
function At(e, t, n, r) {
  if (50 < qo) throw ((qo = 0), (eu = null), Error(L(185)));
  Ti(e, n, r),
    (!(J & 2) || e !== Me) &&
      (e === Me && (!(J & 2) && (sa |= n), Oe === 4 && yn(e, Fe)),
      nt(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((co = xe() + 500), na && zn()));
}
function nt(e, t) {
  var n = e.callbackNode;
  Ty(e, t);
  var r = Ss(e, e === Me ? Fe : 0);
  if (r === 0)
    n !== null && od(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && od(n), t === 1))
      e.tag === 0 ? Cg(Xd.bind(null, e)) : up(Xd.bind(null, e)),
        wg(function () {
          !(J & 6) && zn();
        }),
        (n = null);
    else {
      switch (bh(r)) {
        case 1:
          n = zu;
          break;
        case 4:
          n = Fh;
          break;
        case 16:
          n = ws;
          break;
        case 536870912:
          n = jh;
          break;
        default:
          n = ws;
      }
      n = am(n, em.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function em(e, t) {
  if (((cs = -1), (ds = 0), J & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var r = Ss(e, e === Me ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bs(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = nm();
    (Me !== e || Fe !== t) && ((Zt = null), (co = xe() + 500), or(e, t));
    do
      try {
        Vg();
        break;
      } catch (a) {
        tm(e, a);
      }
    while (!0);
    Ju(),
      (Fs.current = i),
      (J = o),
      Pe !== null ? (t = 0) : ((Me = null), (Fe = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Rl(e)), o !== 0 && ((r = o), (t = tu(e, o)))), t === 1)
    )
      throw ((n = hi), or(e, 0), yn(e, r), nt(e, xe()), n);
    if (t === 6) yn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$g(o) &&
          ((t = bs(e, r)),
          t === 2 && ((i = Rl(e)), i !== 0 && ((r = i), (t = tu(e, i)))),
          t === 1))
      )
        throw ((n = hi), or(e, 0), yn(e, r), nt(e, xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Vn(e, Je, Zt);
          break;
        case 3:
          if (
            (yn(e, r), (r & 130023424) === r && ((t = hc + 500 - xe()), 10 < t))
          ) {
            if (Ss(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Fl(Vn.bind(null, e, Je, Zt), t);
            break;
          }
          Vn(e, Je, Zt);
          break;
        case 4:
          if ((yn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - It(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = xe() - r),
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
                : 1960 * Ug(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fl(Vn.bind(null, e, Je, Zt), r);
            break;
          }
          Vn(e, Je, Zt);
          break;
        case 5:
          Vn(e, Je, Zt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return nt(e, xe()), e.callbackNode === n ? em.bind(null, e) : null;
}
function tu(e, t) {
  var n = Qo;
  return (
    e.current.memoizedState.isDehydrated && (or(e, t).flags |= 256),
    (e = bs(e, t)),
    e !== 2 && ((t = Je), (Je = n), t !== null && nu(t)),
    e
  );
}
function nu(e) {
  Je === null ? (Je = e) : Je.push.apply(Je, e);
}
function $g(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!jt(i(), o)) return !1;
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
function yn(e, t) {
  for (
    t &= ~fc,
      t &= ~sa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - It(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xd(e) {
  if (J & 6) throw Error(L(327));
  $r();
  var t = Ss(e, 0);
  if (!(t & 1)) return nt(e, xe()), null;
  var n = bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Rl(e);
    r !== 0 && ((t = r), (n = tu(e, r)));
  }
  if (n === 1) throw ((n = hi), or(e, 0), yn(e, t), nt(e, xe()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vn(e, Je, Zt),
    nt(e, xe()),
    null
  );
}
function pc(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((co = xe() + 500), na && zn());
  }
}
function fr(e) {
  _n !== null && _n.tag === 0 && !(J & 6) && $r();
  var t = J;
  J |= 1;
  var n = xt.transition,
    r = ne;
  try {
    if (((xt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (xt.transition = n), (J = t), !(J & 6) && zn();
  }
}
function mc() {
  (at = jr.current), ue(jr);
}
function or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gg(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((Yu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && _s();
          break;
        case 3:
          lo(), ue(et), ue(Ue), oc();
          break;
        case 5:
          rc(r);
          break;
        case 4:
          lo();
          break;
        case 13:
          ue(me);
          break;
        case 19:
          ue(me);
          break;
        case 10:
          Zu(r.type._context);
          break;
        case 22:
        case 23:
          mc();
      }
      n = n.return;
    }
  if (
    ((Me = e),
    (Pe = e = In(e.current, null)),
    (Fe = at = t),
    (Oe = 0),
    (hi = null),
    (fc = sa = dr = 0),
    (Je = Qo = null),
    qn !== null)
  ) {
    for (t = 0; t < qn.length; t++)
      if (((n = qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    qn = null;
  }
  return e;
}
function tm(e, t) {
  do {
    var n = Pe;
    try {
      if ((Ju(), (as.current = As), Is)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Is = !1;
      }
      if (
        ((cr = 0),
        (Le = ke = ye = null),
        (Vo = !1),
        (ci = 0),
        (dc.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (hi = t), (Pe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var c = f.alternate;
            c
              ? ((f.updateQueue = c.updateQueue),
                (f.memoizedState = c.memoizedState),
                (f.lanes = c.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var h = Dd(s);
          if (h !== null) {
            (h.flags &= -257),
              bd(h, s, a, i, t),
              h.mode & 1 && jd(i, u, t),
              (t = h),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              jd(i, u, t), vc();
              break e;
            }
            l = Error(L(426));
          }
        } else if (he && a.mode & 1) {
          var S = Dd(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              bd(S, s, a, i, t),
              Xu(uo(l, a));
            break e;
          }
        }
        (i = l = uo(l, a)),
          Oe !== 4 && (Oe = 2),
          Qo === null ? (Qo = [i]) : Qo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = bp(i, l, t);
              Ld(i, m);
              break e;
            case 1:
              a = l;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Mn === null || !Mn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = zp(i, a, t);
                Ld(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      om(n);
    } catch (_) {
      (t = _), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nm() {
  var e = Fs.current;
  return (Fs.current = As), e === null ? As : e;
}
function vc() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Me === null || (!(dr & 268435455) && !(sa & 268435455)) || yn(Me, Fe);
}
function bs(e, t) {
  var n = J;
  J |= 2;
  var r = nm();
  (Me !== e || Fe !== t) && ((Zt = null), or(e, t));
  do
    try {
      Hg();
      break;
    } catch (o) {
      tm(e, o);
    }
  while (!0);
  if ((Ju(), (J = n), (Fs.current = r), Pe !== null)) throw Error(L(261));
  return (Me = null), (Fe = 0), Oe;
}
function Hg() {
  for (; Pe !== null; ) rm(Pe);
}
function Vg() {
  for (; Pe !== null && !my(); ) rm(Pe);
}
function rm(e) {
  var t = sm(e.alternate, e, at);
  (e.memoizedProps = e.pendingProps),
    t === null ? om(e) : (Pe = t),
    (dc.current = null);
}
function om(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Dg(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (Pe = null);
        return;
      }
    } else if (((n = jg(n, t, at)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function Vn(e, t, n) {
  var r = ne,
    o = xt.transition;
  try {
    (xt.transition = null), (ne = 1), Wg(e, t, n, r);
  } finally {
    (xt.transition = o), (ne = r);
  }
  return null;
}
function Wg(e, t, n, r) {
  do $r();
  while (_n !== null);
  if (J & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (_y(e, i),
    e === Me && ((Pe = Me = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yi ||
      ((Yi = !0),
      am(ws, function () {
        return $r(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = xt.transition), (xt.transition = null);
    var s = ne;
    ne = 1;
    var a = J;
    (J |= 4),
      (dc.current = null),
      zg(e, n),
      Jp(n, e),
      dg(Il),
      (Es = !!Nl),
      (Il = Nl = null),
      (e.current = n),
      Bg(n),
      vy(),
      (J = a),
      (ne = s),
      (xt.transition = i);
  } else e.current = n;
  if (
    (Yi && ((Yi = !1), (_n = e), (Ds = o)),
    (i = e.pendingLanes),
    i === 0 && (Mn = null),
    wy(n.stateNode),
    nt(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (js) throw ((js = !1), (e = Zl), (Zl = null), e);
  return (
    Ds & 1 && e.tag !== 0 && $r(),
    (i = e.pendingLanes),
    i & 1 ? (e === eu ? qo++ : ((qo = 0), (eu = e))) : (qo = 0),
    zn(),
    null
  );
}
function $r() {
  if (_n !== null) {
    var e = bh(Ds),
      t = xt.transition,
      n = ne;
    try {
      if (((xt.transition = null), (ne = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (Ds = 0), J & 6)) throw Error(L(331));
        var o = J;
        for (J |= 4, D = e.current; D !== null; ) {
          var i = D,
            s = i.child;
          if (D.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var f = D;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (D = d);
                  else
                    for (; D !== null; ) {
                      f = D;
                      var c = f.sibling,
                        h = f.return;
                      if ((Yp(f), f === u)) {
                        D = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = h), (D = c);
                        break;
                      }
                      D = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              D = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (D = s);
          else
            e: for (; D !== null; ) {
              if (((i = D), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wo(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (D = m);
                break e;
              }
              D = i.return;
            }
        }
        var p = e.current;
        for (D = p; D !== null; ) {
          s = D;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (D = v);
          else
            e: for (s = p; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ia(9, a);
                  }
                } catch (_) {
                  Ee(a, a.return, _);
                }
              if (a === s) {
                D = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (D = E);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((J = o), zn(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        )
          try {
            Yt.onPostCommitFiberRoot(Gs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (xt.transition = t);
    }
  }
  return !1;
}
function Gd(e, t, n) {
  (t = uo(n, t)),
    (t = bp(e, t, 1)),
    (e = Ln(e, t, 1)),
    (t = Qe()),
    e !== null && (Ti(e, 1, t), nt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Gd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mn === null || !Mn.has(r)))
        ) {
          (e = uo(n, e)),
            (e = zp(t, e, 1)),
            (t = Ln(t, e, 1)),
            (e = Qe()),
            t !== null && (Ti(t, 1, e), nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Qg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Me === e &&
      (Fe & n) === n &&
      (Oe === 4 || (Oe === 3 && (Fe & 130023424) === Fe && 500 > xe() - hc)
        ? or(e, 0)
        : (fc |= n)),
    nt(e, t);
}
function im(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = zi), (zi <<= 1), !(zi & 130023424) && (zi = 4194304))
      : (t = 1));
  var n = Qe();
  (e = an(e, t)), e !== null && (Ti(e, t, n), nt(e, n));
}
function qg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), im(e, n);
}
function Kg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), im(e, n);
}
var sm;
sm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || et.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ze = !1), Fg(e, t, n);
      Ze = !!(e.flags & 131072);
    }
  else (Ze = !1), he && t.flags & 1048576 && cp(t, ks, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      us(e, t), (e = t.pendingProps);
      var o = io(t, Ue.current);
      Ur(t, n), (o = sc(null, t, r, e, o, n));
      var i = ac();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            tt(r) ? ((i = !0), Ps(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            tc(t),
            (o.updater = oa),
            (t.stateNode = o),
            (o._reactInternals = t),
            $l(t, r, e, n),
            (t = Wl(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && Ku(t), We(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (us(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Xg(r)),
          (e = Rt(r, e)),
          o)
        ) {
          case 0:
            t = Vl(null, t, r, e, n);
            break e;
          case 1:
            t = Ud(null, t, r, e, n);
            break e;
          case 11:
            t = zd(null, t, r, e, n);
            break e;
          case 14:
            t = Bd(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rt(r, o)),
        Vl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rt(r, o)),
        Ud(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Hp(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          vp(e, t),
          Ms(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = uo(Error(L(423)), t)), (t = $d(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = uo(Error(L(424)), t)), (t = $d(e, t, r, n, o));
            break e;
          } else
            for (
              ut = On(t.stateNode.containerInfo.firstChild),
                ct = t,
                he = !0,
                Lt = null,
                n = pp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((so(), r === o)) {
            t = ln(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yp(t),
        e === null && zl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Al(r, o) ? (s = null) : i !== null && Al(r, i) && (t.flags |= 32),
        $p(e, t),
        We(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && zl(t), null;
    case 13:
      return Vp(e, t, n);
    case 4:
      return (
        nc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ao(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rt(r, o)),
        zd(e, t, r, o, n)
      );
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          se(Os, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (jt(i.value, s)) {
            if (i.children === o.children && !et.current) {
              t = ln(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = rn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Bl(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Bl(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        We(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ur(t, n),
        (o = Ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        We(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Rt(r, t.pendingProps)),
        (o = Rt(r.type, o)),
        Bd(e, t, r, o, n)
      );
    case 15:
      return Bp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Rt(r, o)),
        us(e, t),
        (t.tag = 1),
        tt(r) ? ((e = !0), Ps(t)) : (e = !1),
        Ur(t, n),
        Dp(t, r, o),
        $l(t, r, o, n),
        Wl(null, t, r, !0, e, n)
      );
    case 19:
      return Wp(e, t, n);
    case 22:
      return Up(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function am(e, t) {
  return Ah(e, t);
}
function Yg(e, t, n, r) {
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
function Et(e, t, n, r) {
  return new Yg(e, t, n, r);
}
function yc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xg(e) {
  if (typeof e == "function") return yc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ju)) return 11;
    if (e === Du) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Et(e.tag, t, e.key, e.mode)),
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
function fs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) yc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Pr:
        return ir(n.children, o, i, t);
      case Fu:
        (s = 8), (o |= 8);
        break;
      case fl:
        return (
          (e = Et(12, n, t, o | 2)), (e.elementType = fl), (e.lanes = i), e
        );
      case hl:
        return (e = Et(13, n, t, o)), (e.elementType = hl), (e.lanes = i), e;
      case pl:
        return (e = Et(19, n, t, o)), (e.elementType = pl), (e.lanes = i), e;
      case yh:
        return aa(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mh:
              s = 10;
              break e;
            case vh:
              s = 9;
              break e;
            case ju:
              s = 11;
              break e;
            case Du:
              s = 14;
              break e;
            case pn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Et(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function ir(e, t, n, r) {
  return (e = Et(7, e, r, t)), (e.lanes = n), e;
}
function aa(e, t, n, r) {
  return (
    (e = Et(22, e, r, t)),
    (e.elementType = yh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ga(e, t, n) {
  return (e = Et(6, e, null, t)), (e.lanes = n), e;
}
function Ja(e, t, n) {
  return (
    (t = Et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gg(e, t, n, r, o) {
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
    (this.eventTimes = Na(0)),
    (this.expirationTimes = Na(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Na(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function gc(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new Gg(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Et(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    tc(i),
    e
  );
}
function Jg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _r,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lm(e) {
  if (!e) return jn;
  e = e._reactInternals;
  e: {
    if (mr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (tt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (tt(n)) return lp(e, n, t);
  }
  return t;
}
function um(e, t, n, r, o, i, s, a, l) {
  return (
    (e = gc(n, r, !0, e, o, i, s, a, l)),
    (e.context = lm(null)),
    (n = e.current),
    (r = Qe()),
    (o = Nn(n)),
    (i = rn(r, o)),
    (i.callback = t ?? null),
    Ln(n, i, o),
    (e.current.lanes = o),
    Ti(e, o, r),
    nt(e, r),
    e
  );
}
function la(e, t, n, r) {
  var o = t.current,
    i = Qe(),
    s = Nn(o);
  return (
    (n = lm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ln(o, t, s)),
    e !== null && (At(e, o, s, i), ss(e, o, s)),
    s
  );
}
function zs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wc(e, t) {
  Jd(e, t), (e = e.alternate) && Jd(e, t);
}
function Zg() {
  return null;
}
var cm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Sc(e) {
  this._internalRoot = e;
}
ua.prototype.render = Sc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  la(e, t, null, null);
};
ua.prototype.unmount = Sc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    fr(function () {
      la(null, e, null, null);
    }),
      (t[sn] = null);
  }
};
function ua(e) {
  this._internalRoot = e;
}
ua.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Uh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && Hh(e);
  }
};
function Ec(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ca(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zd() {}
function e0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = zs(s);
        i.call(u);
      };
    }
    var s = um(t, r, e, 0, null, !1, !1, "", Zd);
    return (
      (e._reactRootContainer = s),
      (e[sn] = s.current),
      ii(e.nodeType === 8 ? e.parentNode : e),
      fr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = zs(l);
      a.call(u);
    };
  }
  var l = gc(e, 0, !1, null, null, !1, !1, "", Zd);
  return (
    (e._reactRootContainer = l),
    (e[sn] = l.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    fr(function () {
      la(t, l, n, r);
    }),
    l
  );
}
function da(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = zs(s);
        a.call(l);
      };
    }
    la(t, s, e, o);
  } else s = e0(n, t, e, o, r);
  return zs(s);
}
zh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jo(t.pendingLanes);
        n !== 0 &&
          (Bu(t, n | 1), nt(t, xe()), !(J & 6) && ((co = xe() + 500), zn()));
      }
      break;
    case 13:
      fr(function () {
        var r = an(e, 1);
        if (r !== null) {
          var o = Qe();
          At(r, e, 1, o);
        }
      }),
        wc(e, 1);
  }
};
Uu = function (e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var n = Qe();
      At(t, e, 134217728, n);
    }
    wc(e, 134217728);
  }
};
Bh = function (e) {
  if (e.tag === 13) {
    var t = Nn(e),
      n = an(e, t);
    if (n !== null) {
      var r = Qe();
      At(n, e, t, r);
    }
    wc(e, t);
  }
};
Uh = function () {
  return ne;
};
$h = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((yl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = ta(r);
            if (!o) throw Error(L(90));
            wh(r), yl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Eh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dr(e, !!n.multiple, t, !1);
  }
};
kh = pc;
Oh = fr;
var t0 = { usingClientEntryPoint: !1, Events: [Pi, Lr, ta, Ph, Rh, pc] },
  Lo = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  n0 = {
    bundleType: Lo.bundleType,
    version: Lo.version,
    rendererPackageName: Lo.rendererPackageName,
    rendererConfig: Lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Lo.findFiberByHostInstance || Zg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xi.isDisabled && Xi.supportsFiber)
    try {
      (Gs = Xi.inject(n0)), (Yt = Xi);
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t0;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ec(t)) throw Error(L(200));
  return Jg(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!Ec(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = cm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = gc(e, 1, !1, null, null, n, !1, r, o)),
    (e[sn] = t.current),
    ii(e.nodeType === 8 ? e.parentNode : e),
    new Sc(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Nh(t)), (e = e === null ? null : e.stateNode), e;
};
ht.flushSync = function (e) {
  return fr(e);
};
ht.hydrate = function (e, t, n) {
  if (!ca(t)) throw Error(L(200));
  return da(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!Ec(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = cm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = um(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[sn] = t.current),
    ii(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ua(t);
};
ht.render = function (e, t, n) {
  if (!ca(t)) throw Error(L(200));
  return da(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!ca(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (fr(function () {
        da(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sn] = null);
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = pc;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ca(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return da(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function dm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dm);
    } catch (e) {
      console.error(e);
    }
}
dm(), (dh.exports = ht);
var fm = dh.exports;
const r0 = vo(fm);
var ef = fm;
(cl.createRoot = ef.createRoot), (cl.hydrateRoot = ef.hydrateRoot);
const tf = "pushstate",
  nf = "popstate",
  hm = "beforeunload",
  pm = (e) => (e.preventDefault(), (e.returnValue = "")),
  o0 = () => {
    removeEventListener(hm, pm, { capture: !0 });
  };
function mm(e) {
  let t = e.getLocation();
  const n = new Set();
  let r = [];
  const o = () => {
      (t = e.getLocation()), n.forEach((s) => s());
    },
    i = async (s, a) => {
      var l;
      if (
        !((a == null ? void 0 : a.ignoreBlocker) ?? !1) &&
        typeof document < "u" &&
        r.length
      ) {
        for (const f of r)
          if (!(await f())) {
            (l = e.onBlocked) == null || l.call(e, o);
            return;
          }
      }
      s();
    };
  return {
    get location() {
      return t;
    },
    subscribers: n,
    subscribe: (s) => (
      n.add(s),
      () => {
        n.delete(s);
      }
    ),
    push: (s, a, l) => {
      (a = Ko(a)),
        i(() => {
          e.pushState(s, a), o();
        }, l);
    },
    replace: (s, a, l) => {
      (a = Ko(a)),
        i(() => {
          e.replaceState(s, a), o();
        }, l);
    },
    go: (s, a) => {
      i(() => {
        e.go(s), o();
      }, a);
    },
    back: (s) => {
      i(() => {
        e.back(), o();
      }, s);
    },
    forward: (s) => {
      i(() => {
        e.forward(), o();
      }, s);
    },
    createHref: (s) => e.createHref(s),
    block: (s) => (
      r.push(s),
      r.length === 1 && addEventListener(hm, pm, { capture: !0 }),
      () => {
        (r = r.filter((a) => a !== s)), r.length || o0();
      }
    ),
    flush: () => {
      var s;
      return (s = e.flush) == null ? void 0 : s.call(e);
    },
    destroy: () => {
      var s;
      return (s = e.destroy) == null ? void 0 : s.call(e);
    },
    notify: o,
  };
}
function Ko(e) {
  return e || (e = {}), { ...e, key: vm() };
}
function i0(e) {
  const t = typeof document < "u" ? window : void 0,
    n = t.history.pushState,
    r = t.history.replaceState,
    o = (g) => g,
    i = () =>
      ru(
        `${t.location.pathname}${t.location.search}${t.location.hash}`,
        t.history.state
      );
  let s = i(),
    a;
  const l = () => s;
  let u, f;
  const d = () => {
      if (!u) return;
      (u.isPush ? n : r).call(t.history, u.state, "", u.href),
        (u = void 0),
        (f = void 0),
        (a = void 0);
    },
    c = (g, S, m) => {
      const p = o(S);
      f || (a = s),
        (s = ru(S, m)),
        (u = {
          href: p,
          state: m,
          isPush: (u == null ? void 0 : u.isPush) || g === "push",
        }),
        f || (f = Promise.resolve().then(() => d()));
    },
    h = () => {
      (s = i()), y.notify();
    },
    y = mm({
      getLocation: l,
      pushState: (g, S) => c("push", g, S),
      replaceState: (g, S) => c("replace", g, S),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: (g) => t.history.go(g),
      createHref: (g) => o(g),
      flush: d,
      destroy: () => {
        (t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(tf, h),
          t.removeEventListener(nf, h);
      },
      onBlocked: (g) => {
        a && s !== a && ((s = a), g());
      },
    });
  return (
    t.addEventListener(tf, h),
    t.addEventListener(nf, h),
    (t.history.pushState = function (...g) {
      const S = n.apply(t.history, g);
      return h(), S;
    }),
    (t.history.replaceState = function (...g) {
      const S = r.apply(t.history, g);
      return h(), S;
    }),
    y
  );
}
function s0(e = { initialEntries: ["/"] }) {
  const t = e.initialEntries;
  let n = e.initialIndex ?? t.length - 1,
    r = { key: vm() };
  return mm({
    getLocation: () => ru(t[n], r),
    pushState: (i, s) => {
      (r = s),
        t.splice,
        n < t.length - 1 && t.splice(n + 1),
        t.push(i),
        (n = Math.max(t.length - 1, 0));
    },
    replaceState: (i, s) => {
      (r = s), (t[n] = i);
    },
    back: () => {
      (r = Ko(r)), (n = Math.max(n - 1, 0));
    },
    forward: () => {
      (r = Ko(r)), (n = Math.min(n + 1, t.length - 1));
    },
    go: (i) => {
      (r = Ko(r)), (n = Math.min(Math.max(n + i, 0), t.length - 1));
    },
    createHref: (i) => i,
  });
}
function ru(e, t) {
  const n = e.indexOf("#"),
    r = e.indexOf("?");
  return {
    href: e,
    pathname: e.substring(
      0,
      n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length
    ),
    hash: n > -1 ? e.substring(n) : "",
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
    state: t || {},
  };
}
function vm() {
  return (Math.random() + 1).toString(36).substring(7);
}
var a0 = "Invariant failed";
function Ge(e, t) {
  if (!e) throw new Error(a0);
}
var l0 = !0;
function pi(e, t) {
  if (!l0) {
    if (e) return;
    var n = "Warning: " + t;
    typeof console < "u" && console.warn(n);
    try {
      throw Error(n);
    } catch {}
  }
}
const Za = N.createContext(null);
function ym() {
  return typeof document > "u"
    ? Za
    : window.__TSR_ROUTER_CONTEXT__
    ? window.__TSR_ROUTER_CONTEXT__
    : ((window.__TSR_ROUTER_CONTEXT__ = Za), Za);
}
function Bn(e) {
  const t = N.useContext(ym());
  return (
    pi(
      !(((e == null ? void 0 : e.warn) ?? !0) && !t),
      "useRouter must be used inside a <RouterProvider> component!"
    ),
    t
  );
}
var gm = { exports: {} },
  wm = {},
  Sm = { exports: {} },
  Em = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = N;
function u0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var c0 = typeof Object.is == "function" ? Object.is : u0,
  d0 = fo.useState,
  f0 = fo.useEffect,
  h0 = fo.useLayoutEffect,
  p0 = fo.useDebugValue;
function m0(e, t) {
  var n = t(),
    r = d0({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    h0(
      function () {
        (o.value = n), (o.getSnapshot = t), el(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    f0(
      function () {
        return (
          el(o) && i({ inst: o }),
          e(function () {
            el(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    p0(n),
    n
  );
}
function el(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !c0(e, n);
  } catch {
    return !0;
  }
}
function v0(e, t) {
  return t();
}
var y0 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? v0
    : m0;
Em.useSyncExternalStore =
  fo.useSyncExternalStore !== void 0 ? fo.useSyncExternalStore : y0;
Sm.exports = Em;
var g0 = Sm.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fa = N,
  w0 = g0;
function S0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var E0 = typeof Object.is == "function" ? Object.is : S0,
  x0 = w0.useSyncExternalStore,
  C0 = fa.useRef,
  T0 = fa.useEffect,
  _0 = fa.useMemo,
  P0 = fa.useDebugValue;
wm.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = C0(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = _0(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (f = h), (h = r(h)), o !== void 0 && s.hasValue)) {
            var y = s.value;
            if (o(y, h)) return (d = y);
          }
          return (d = h);
        }
        if (((y = d), E0(f, h))) return y;
        var g = r(h);
        return o !== void 0 && o(y, g) ? y : ((f = h), (d = g));
      }
      var u = !1,
        f,
        d,
        c = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        c === null
          ? void 0
          : function () {
              return l(c());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = x0(e, i[0], i[1]);
  return (
    T0(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    P0(a),
    a
  );
};
gm.exports = wm;
var R0 = gm.exports;
class k0 {
  constructor(t, n) {
    (this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (r) => {
        var o, i;
        this.listeners.add(r);
        const s =
          (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : i.call(o, r, this);
        return () => {
          this.listeners.delete(r), s == null || s();
        };
      }),
      (this.setState = (r) => {
        var o, i, s;
        const a = this.state;
        (this.state =
          (o = this.options) != null && o.updateFn
            ? this.options.updateFn(a)(r)
            : r(a)),
          (s = (i = this.options) == null ? void 0 : i.onUpdate) == null ||
            s.call(i),
          this._flush();
      }),
      (this._flush = () => {
        if (this._batching) return;
        const r = ++this._flushing;
        this.listeners.forEach((o) => {
          this._flushing === r && o();
        });
      }),
      (this.batch = (r) => {
        if (this._batching) return r();
        (this._batching = !0), r(), (this._batching = !1), this._flush();
      }),
      (this.state = t),
      (this.options = n);
  }
}
function O0(e, t = (n) => n) {
  return R0.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    L0
  );
}
function L0(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (let r = 0; r < n.length; r++)
    if (
      !Object.prototype.hasOwnProperty.call(t, n[r]) ||
      !Object.is(e[n[r]], t[n[r]])
    )
      return !1;
  return !0;
}
const lt = "__root__";
function M0(e, t) {
  let n,
    r,
    o,
    i = "";
  for (n in e)
    if ((o = e[n]) !== void 0)
      if (Array.isArray(o))
        for (r = 0; r < o.length; r++)
          i && (i += "&"),
            (i += encodeURIComponent(n) + "=" + encodeURIComponent(o[r]));
      else
        i && (i += "&"),
          (i += encodeURIComponent(n) + "=" + encodeURIComponent(o));
  return "" + i;
}
function rf(e) {
  if (!e) return "";
  const t = decodeURIComponent(e);
  return t === "false"
    ? !1
    : t === "true"
    ? !0
    : +t * 0 === 0 && +t + "" === t
    ? +t
    : t;
}
function N0(e, t) {
  let n, r;
  const o = {},
    i = e.split("&");
  for (; (n = i.shift()); ) {
    const s = n.indexOf("=");
    if (s !== -1) {
      r = n.slice(0, s);
      const a = n.slice(s + 1);
      o[r] !== void 0 ? (o[r] = [].concat(o[r], rf(a))) : (o[r] = rf(a));
    } else (r = n), (o[r] = "");
  }
  return o;
}
const I0 = F0(JSON.parse),
  A0 = j0(JSON.stringify, JSON.parse);
function F0(e) {
  return (t) => {
    t.substring(0, 1) === "?" && (t = t.substring(1));
    const n = N0(t);
    for (const r in n) {
      const o = n[r];
      if (typeof o == "string")
        try {
          n[r] = e(o);
        } catch {}
    }
    return n;
  };
}
function j0(e, t) {
  function n(r) {
    if (typeof r == "object" && r !== null)
      try {
        return e(r);
      } catch {}
    else if (typeof r == "string" && typeof t == "function")
      try {
        return t(r), e(r);
      } catch {}
    return r;
  }
  return (r) => {
    (r = { ...r }),
      Object.keys(r).forEach((i) => {
        const s = r[i];
        typeof s > "u" || s === void 0 ? delete r[i] : (r[i] = n(s));
      });
    const o = M0(r).toString();
    return o ? `?${o}` : "";
  };
}
function Bs(e) {
  return e[e.length - 1];
}
function D0(e) {
  return typeof e == "function";
}
function Gi(e, t) {
  return D0(e) ? e(t) : e;
}
function Yo(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function Ut(e, t) {
  if (e === t) return e;
  const n = t,
    r = sf(e) && sf(n);
  if (r || (Us(e) && Us(n))) {
    const o = r ? e : Object.keys(e),
      i = o.length,
      s = r ? n : Object.keys(n),
      a = s.length,
      l = r ? [] : {};
    let u = 0;
    for (let f = 0; f < a; f++) {
      const d = r ? f : s[f];
      ((!r && o.includes(d)) || r) && e[d] === void 0 && n[d] === void 0
        ? ((l[d] = void 0), u++)
        : ((l[d] = Ut(e[d], n[d])), l[d] === e[d] && e[d] !== void 0 && u++);
    }
    return i === a && u === i ? e : l;
  }
  return n;
}
function Us(e) {
  if (!of(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!of(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function of(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function sf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xo(e, t, n = !1) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Us(e) && Us(t)) {
    const r = Object.keys(e).filter((i) => e[i] !== void 0),
      o = Object.keys(t).filter((i) => t[i] !== void 0);
    return !n && r.length !== o.length
      ? !1
      : !o.some((i) => !(i in e) || !Xo(e[i], t[i], n));
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, o) => !Xo(r, t[o], n))
    : !1;
}
const tl = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function Tr(e) {
  let t, n;
  const r = new Promise((o, i) => {
    (t = o), (n = i);
  });
  return (
    (r.status = "pending"),
    (r.resolve = (o) => {
      (r.status = "resolved"), (r.value = o), t(o), e == null || e(o);
    }),
    (r.reject = (o) => {
      (r.status = "rejected"), n(o);
    }),
    r
  );
}
function af(e) {
  const t = N.useRef({ value: e, prev: null }),
    n = t.current.value;
  return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function Sx(e, t, n = {}, r = {}) {
  const o = N.useRef(typeof IntersectionObserver == "function"),
    i = N.useRef(null);
  return (
    N.useEffect(() => {
      if (!(!e.current || !o.current || r.disabled))
        return (
          (i.current = new IntersectionObserver(([s]) => {
            t(s);
          }, n)),
          i.current.observe(e.current),
          () => {
            var s;
            (s = i.current) == null || s.disconnect();
          }
        );
    }, [t, n, r.disabled, e]),
    i.current
  );
}
function Ex(e) {
  const t = N.useRef(null);
  return (
    N.useEffect(() => {
      e && (typeof e == "function" ? e(t.current) : (e.current = t.current));
    }),
    t
  );
}
function An(e) {
  return ha(e.filter((t) => t !== void 0).join("/"));
}
function ha(e) {
  return e.replace(/\/{2,}/g, "/");
}
function xc(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Yn(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function b0(e) {
  return Yn(xc(e));
}
function lf(e, t) {
  return e.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function xx(e, t, n) {
  return lf(e, n) === lf(t, n);
}
function z0({ basepath: e, base: t, to: n, trailingSlash: r = "never" }) {
  var o, i;
  (t = $s(e, t)), (n = $s(e, n));
  let s = ho(t);
  const a = ho(n);
  s.length > 1 && ((o = Bs(s)) == null ? void 0 : o.value) === "/" && s.pop(),
    a.forEach((u, f) => {
      u.value === "/"
        ? f
          ? f === a.length - 1 && s.push(u)
          : (s = [u])
        : u.value === ".."
        ? s.pop()
        : u.value === "." || s.push(u);
    }),
    s.length > 1 &&
      (((i = Bs(s)) == null ? void 0 : i.value) === "/"
        ? r === "never" && s.pop()
        : r === "always" && s.push({ type: "pathname", value: "/" }));
  const l = An([e, ...s.map((u) => u.value)]);
  return ha(l);
}
function ho(e) {
  if (!e) return [];
  e = ha(e);
  const t = [];
  if (
    (e.slice(0, 1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    !e)
  )
    return t;
  const n = e.split("/").filter(Boolean);
  return (
    t.push(
      ...n.map((r) =>
        r === "$" || r === "*"
          ? { type: "wildcard", value: r }
          : r.charAt(0) === "$"
          ? { type: "param", value: r }
          : { type: "pathname", value: decodeURIComponent(r) }
      )
    ),
    e.slice(-1) === "/" &&
      ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
    t
  );
}
function nl({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
  const o = ho(e),
    i = {};
  for (const [s, a] of Object.entries(t)) {
    const l = typeof a == "string";
    ["*", "_splat"].includes(s)
      ? (i[s] = l ? encodeURI(a) : a)
      : (i[s] = l ? encodeURIComponent(a) : a);
  }
  return An(
    o.map((s) => {
      if (s.type === "wildcard") {
        const a = i._splat;
        return n ? `${s.value}${a ?? ""}` : a;
      }
      if (s.type === "param") {
        if (r) {
          const a = i[s.value];
          return `${s.value}${a ?? ""}`;
        }
        return i[s.value.substring(1)] ?? "undefined";
      }
      return s.value;
    })
  );
}
function Ji(e, t, n) {
  const r = B0(e, t, n);
  if (!(n.to && !r)) return r ?? {};
}
function $s(e, t) {
  switch (!0) {
    case e === "/":
      return t;
    case t === e:
      return "";
    case t.length < e.length:
      return t;
    case t[e.length] !== "/":
      return t;
    case t.startsWith(e):
      return t.slice(e.length);
    default:
      return t;
  }
}
function B0(e, t, n) {
  t = $s(e, t);
  const r = $s(e, `${n.to ?? "$"}`),
    o = ho(t),
    i = ho(r);
  t.startsWith("/") || o.unshift({ type: "pathname", value: "/" }),
    r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
  const s = {};
  return (() => {
    for (let l = 0; l < Math.max(o.length, i.length); l++) {
      const u = o[l],
        f = i[l],
        d = l >= o.length - 1,
        c = l >= i.length - 1;
      if (f) {
        if (f.type === "wildcard") {
          if (u != null && u.value) {
            const h = decodeURI(An(o.slice(l).map((y) => y.value)));
            return (s["*"] = h), (s._splat = h), !0;
          }
          return !1;
        }
        if (f.type === "pathname") {
          if (f.value === "/" && !(u != null && u.value)) return !0;
          if (u) {
            if (n.caseSensitive) {
              if (f.value !== u.value) return !1;
            } else if (f.value.toLowerCase() !== u.value.toLowerCase())
              return !1;
          }
        }
        if (!u) return !1;
        if (f.type === "param") {
          if (u.value === "/") return !1;
          u.value.charAt(0) !== "$" &&
            (s[f.value.substring(1)] = decodeURIComponent(u.value));
        }
      }
      if (!d && c)
        return (
          (s["**"] = An(o.slice(l + 1).map((h) => h.value))),
          !!n.fuzzy && (f == null ? void 0 : f.value) !== "/"
        );
    }
    return !0;
  })()
    ? s
    : void 0;
}
function U0(e) {
  if (
    ((e.isRedirect = !0),
    (e.statusCode = e.statusCode || e.code || 301),
    (e.headers = e.headers || {}),
    e.throw)
  )
    throw e;
  return e;
}
function Wn(e) {
  return !!(e != null && e.isRedirect);
}
function uf(e) {
  return !!(e != null && e.isRedirect) && e.href;
}
function Cc(e) {
  const t = e.errorComponent ?? pa;
  return T.jsx($0, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? N.createElement(t, { error: n, reset: r }) : e.children,
  });
}
class $0 extends N.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(t) {
    return { resetKey: t.getResetKey() };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n);
  }
  render() {
    return this.props.children({
      error:
        this.state.resetKey !== this.props.getResetKey()
          ? null
          : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function pa({ error: e }) {
  const [t, n] = N.useState(!1);
  return T.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      T.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          T.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          T.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => n((r) => !r),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      T.jsx("div", { style: { height: ".25rem" } }),
      t
        ? T.jsx("div", {
            children: T.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message
                ? T.jsx("code", { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function rt(e) {
  const t = Bn({ warn: (e == null ? void 0 : e.router) === void 0 });
  return O0(
    ((e == null ? void 0 : e.router) || t).__store,
    e == null ? void 0 : e.select
  );
}
function Ht(e) {
  return !!(e != null && e.isNotFound);
}
function H0(e) {
  const t = rt({
    select: (n) => `not-found-${n.location.pathname}-${n.status}`,
  });
  return T.jsx(Cc, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var o;
      if (Ht(n)) (o = e.onCatch) == null || o.call(e, n, r);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      var r;
      return (r = e.fallback) == null ? void 0 : r.call(e, n);
    },
    children: e.children,
  });
}
function V0() {
  return T.jsx("p", { children: "Not Found" });
}
const W0 = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent",
];
function Q0(e) {
  return new q0(e);
}
class q0 {
  constructor(t) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        n.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
          );
        const r = this.options;
        (this.options = { ...this.options, ...n }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === "" || n.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${b0(n.basepath)}`)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer
                ? s0({ initialEntries: [this.basepath || "/"] })
                : i0())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new k0(X0(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (o) => !["redirected"].includes(o.status)
                  ),
                };
              },
            }));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const n = this.options.notFoundRoute;
        n &&
          (n.init({ originalIndex: 99999999999 }), (this.routesById[n.id] = n));
        const r = (s) => {
          s.forEach((a, l) => {
            a.init({ originalIndex: l });
            const u = this.routesById[a.id];
            if (
              (Ge(!u, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const d = Yn(a.fullPath);
              (!this.routesByPath[d] || a.fullPath.endsWith("/")) &&
                (this.routesByPath[d] = a);
            }
            const f = a.children;
            f != null && f.length && r(f);
          });
        };
        r([this.routeTree]);
        const o = [];
        Object.values(this.routesById).forEach((s, a) => {
          var l;
          if (s.isRoot || !s.path) return;
          const u = xc(s.fullPath),
            f = ho(u);
          for (
            ;
            f.length > 1 && ((l = f[0]) == null ? void 0 : l.value) === "/";

          )
            f.shift();
          const d = f.map((c) =>
            c.value === "/"
              ? 0.75
              : c.type === "param"
              ? 0.5
              : c.type === "wildcard"
              ? 0.25
              : 1
          );
          o.push({ child: s, trimmed: u, parsed: f, index: a, scores: d });
        }),
          (this.flatRoutes = o
            .sort((s, a) => {
              const l = Math.min(s.scores.length, a.scores.length);
              for (let u = 0; u < l; u++)
                if (s.scores[u] !== a.scores[u])
                  return a.scores[u] - s.scores[u];
              if (s.scores.length !== a.scores.length)
                return a.scores.length - s.scores.length;
              for (let u = 0; u < l; u++)
                if (s.parsed[u].value !== a.parsed[u].value)
                  return s.parsed[u].value > a.parsed[u].value ? 1 : -1;
              return s.index - a.index;
            })
            .map((s, a) => ((s.child.rank = a), s.child)));
      }),
      (this.subscribe = (n, r) => {
        const o = { eventType: n, fn: r };
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o);
          }
        );
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n);
        });
      }),
      (this.parseLocation = (n) => {
        const r = ({ pathname: a, search: l, hash: u, state: f }) => {
            const d = this.options.parseSearch(l),
              c = this.options.stringifySearch(d);
            return {
              pathname: a,
              searchStr: c,
              search: Ut(n == null ? void 0 : n.search, d),
              hash: u.split("#").reverse()[0] ?? "",
              href: `${a}${c}${u}`,
              state: Ut(n == null ? void 0 : n.state, f),
            };
          },
          o = r(this.history.location),
          { __tempLocation: i, __tempKey: s } = o.state;
        if (i && (!s || s === this.tempLocationKey)) {
          const a = r(i);
          return (
            (a.state.key = o.state.key),
            delete a.state.__tempLocation,
            { ...a, maskedLocation: o }
          );
        }
        return o;
      }),
      (this.resolvePathWithBase = (n, r) =>
        z0({
          basepath: this.basepath,
          base: n,
          to: ha(r),
          trailingSlash: this.options.trailingSlash,
        })),
      (this.matchRoutes = (n, r, o) => {
        let i = {};
        const s = this.flatRoutes.find((h) => {
          const y = Ji(this.basepath, Yn(n), {
            to: h.fullPath,
            caseSensitive:
              h.options.caseSensitive ?? this.options.caseSensitive,
            fuzzy: !0,
          });
          return y ? ((i = y), !0) : !1;
        });
        let a = s || this.routesById[lt];
        const l = [a];
        let u = !1;
        for (
          (s ? s.path !== "/" && i["**"] : Yn(n)) &&
          (this.options.notFoundRoute
            ? l.push(this.options.notFoundRoute)
            : (u = !0));
          a.parentRoute;

        )
          (a = a.parentRoute), l.unshift(a);
        const f = (() => {
            if (u) {
              if (this.options.notFoundMode !== "root")
                for (let h = l.length - 1; h >= 0; h--) {
                  const y = l[h];
                  if (y.children) return y.id;
                }
              return lt;
            }
          })(),
          d = l.map((h) => {
            var y;
            let g;
            const S =
              ((y = h.options.params) == null ? void 0 : y.parse) ??
              h.options.parseParams;
            if (S)
              try {
                const m = S(i);
                Object.assign(i, m);
              } catch (m) {
                if (
                  ((g = new Y0(m.message, { cause: m })),
                  o != null && o.throwOnError)
                )
                  throw g;
                return g;
              }
          }),
          c = [];
        return (
          l.forEach((h, y) => {
            var g, S, m, p, v, E, _, k, R, x;
            const B = c[y - 1],
              [z, q] = (() => {
                const I = (B == null ? void 0 : B.search) ?? r;
                try {
                  const A =
                      typeof h.options.validateSearch == "object"
                        ? h.options.validateSearch.parse
                        : h.options.validateSearch,
                    O = (A == null ? void 0 : A(I)) ?? {};
                  return [{ ...I, ...O }, void 0];
                } catch (A) {
                  const O = new K0(A.message, { cause: A });
                  if (o != null && o.throwOnError) throw O;
                  return [I, O];
                }
              })(),
              Z =
                ((S = (g = h.options).loaderDeps) == null
                  ? void 0
                  : S.call(g, { search: z })) ?? "",
              K = Z ? JSON.stringify(Z) : "",
              oe = nl({ path: h.fullPath, params: i }),
              ce = nl({ path: h.id, params: i, leaveWildcards: !0 }) + K,
              pe = this.getMatch(ce),
              Te = this.state.matches.find((I) => I.id === ce)
                ? "stay"
                : "enter";
            let P;
            if (pe) P = { ...pe, cause: Te, params: i };
            else {
              const I =
                h.options.loader || h.options.beforeLoad || h.lazyFn
                  ? "pending"
                  : "success";
              P = {
                id: ce,
                index: y,
                routeId: h.id,
                params: i,
                pathname: An([this.basepath, oe]),
                updatedAt: Date.now(),
                search: {},
                searchError: void 0,
                status: I,
                isFetching: !1,
                error: void 0,
                paramsError: d[y],
                routeContext: void 0,
                context: void 0,
                abortController: new AbortController(),
                fetchCount: 0,
                cause: Te,
                loaderDeps: Z,
                invalid: !1,
                preload: !1,
                links: (p = (m = h.options).links) == null ? void 0 : p.call(m),
                scripts:
                  (E = (v = h.options).scripts) == null ? void 0 : E.call(v),
                staticData: h.options.staticData || {},
                loadPromise: Tr(),
              };
            }
            P.status === "success" &&
              ((P.meta =
                (k = (_ = h.options).meta) == null
                  ? void 0
                  : k.call(_, {
                      matches: c,
                      match: P,
                      params: P.params,
                      loaderData: P.loaderData,
                    })),
              (P.headers =
                (x = (R = h.options).headers) == null
                  ? void 0
                  : x.call(R, { loaderData: P.loaderData }))),
              (o != null && o.preload) || (P.globalNotFound = f === h.id),
              (P.search = Ut(P.search, z)),
              (P.searchError = q),
              c.push(P);
          }),
          c
        );
      }),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n);
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var n;
        (n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id);
          });
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, s) => {
            var a, l, u;
            const f =
                i._fromLocation != null
                  ? this.matchRoutes(
                      i._fromLocation.pathname,
                      i.fromSearch || i._fromLocation.search
                    )
                  : this.state.matches,
              d =
                i.from != null
                  ? f.find((K) =>
                      Ji(this.basepath, Yn(K.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                    )
                  : void 0,
              c =
                (d == null ? void 0 : d.pathname) ||
                this.latestLocation.pathname;
            Ge(
              i.from == null || d != null,
              "Could not find match for from: " + i.from
            );
            const h =
                ((a = Bs(f)) == null ? void 0 : a.search) ||
                this.latestLocation.search,
              y =
                s == null
                  ? void 0
                  : s.filter((K) => f.find((oe) => oe.routeId === K.routeId)),
              g =
                this.routesById[
                  (l = y == null ? void 0 : y.find((K) => K.pathname === c)) ==
                  null
                    ? void 0
                    : l.routeId
                ];
            let S = i.to
              ? this.resolvePathWithBase(c, `${i.to}`)
              : this.resolvePathWithBase(c, (g == null ? void 0 : g.to) ?? c);
            const m = { ...((u = Bs(f)) == null ? void 0 : u.params) };
            let p = (i.params ?? !0) === !0 ? m : { ...m, ...Gi(i.params, m) };
            Object.keys(p).length > 0 &&
              (s == null ||
                s
                  .map((K) => {
                    var oe;
                    const ce = this.looseRoutesById[K.routeId];
                    return (
                      ((oe = ce == null ? void 0 : ce.options.params) == null
                        ? void 0
                        : oe.stringify) ?? ce.options.stringifyParams
                    );
                  })
                  .filter(Boolean)
                  .forEach((K) => {
                    p = { ...p, ...K(p) };
                  })),
              (S = nl({
                path: S,
                params: p ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
              }));
            const v =
                (y == null
                  ? void 0
                  : y
                      .map(
                        (K) =>
                          this.looseRoutesById[K.routeId].options
                            .preSearchFilters ?? []
                      )
                      .flat()
                      .filter(Boolean)) ?? [],
              E =
                (y == null
                  ? void 0
                  : y
                      .map(
                        (K) =>
                          this.looseRoutesById[K.routeId].options
                            .postSearchFilters ?? []
                      )
                      .flat()
                      .filter(Boolean)) ?? [],
              _ = v.length ? v.reduce((K, oe) => oe(K), h) : h,
              k =
                i.search === !0
                  ? _
                  : i.search
                  ? Gi(i.search, _)
                  : v.length
                  ? _
                  : {},
              R = E.length ? E.reduce((K, oe) => oe(K), k) : k,
              x = Ut(h, R),
              B = this.options.stringifySearch(x),
              z =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                  ? Gi(i.hash, this.latestLocation.hash)
                  : void 0,
              q = z ? `#${z}` : "";
            let Z =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                ? Gi(i.state, this.latestLocation.state)
                : {};
            return (
              (Z = Ut(this.latestLocation.state, Z)),
              {
                pathname: S,
                search: x,
                searchStr: B,
                state: Z,
                hash: z ?? "",
                href: `${S}${B}${q}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            );
          },
          o = (i = {}, s) => {
            var a;
            const l = r(i);
            let u = s ? r(s) : void 0;
            if (!u) {
              let y = {};
              const g =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find((S) => {
                      const m = Ji(this.basepath, l.pathname, {
                        to: S.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return m ? ((y = m), !0) : !1;
                    });
              if (g) {
                const { from: S, ...m } = g;
                (s = { ...Yo(n, ["from"]), ...m, params: y }), (u = r(s));
              }
            }
            const f = this.matchRoutes(l.pathname, l.search),
              d = u ? this.matchRoutes(u.pathname, u.search) : void 0,
              c = u ? r(s, d) : void 0,
              h = r(i, f);
            return c && (h.maskedLocation = c), h;
          };
        return n.mask ? o(n, { ...Yo(n, ["from"]), ...n.mask }) : o(n);
      }),
      (this.commitLocation = ({
        viewTransition: n,
        ignoreBlocker: r,
        ...o
      }) => {
        const i = () => {
            o.state.key = this.latestLocation.state.key;
            const l = Xo(o.state, this.latestLocation.state);
            return delete o.state.key, l;
          },
          s = this.latestLocation.href === o.href,
          a = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = Tr(() => {
            a == null || a.resolve();
          })),
          s && i())
        )
          this.load();
        else {
          let { maskedLocation: l, ...u } = o;
          l &&
            ((u = {
              ...l,
              state: {
                ...l.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...u,
                  search: u.searchStr,
                  state: {
                    ...u.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (u.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (u.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[o.replace ? "replace" : "push"](u.href, u.state, {
              ignoreBlocker: r,
            });
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: o,
        ignoreBlocker: i,
        ...s
      } = {}) => {
        const a = this.buildLocation(s);
        return this.commitLocation({
          ...a,
          viewTransition: o,
          replace: n,
          resetScroll: r,
          ignoreBlocker: i,
        });
      }),
      (this.navigate = ({ from: n, to: r, __isRedirect: o, ...i }) => {
        const s = String(r);
        let a;
        try {
          new URL(`${s}`), (a = !0);
        } catch {}
        return Ge(!a), this.buildAndCommitLocation({ ...i, from: n, to: r });
      }),
      (this.load = async () => {
        (this.latestLocation = this.parseLocation(this.latestLocation)),
          this.__store.setState((i) => ({ ...i, loadedAt: Date.now() }));
        let n, r;
        const o = new Promise((i) => {
          this.startReactTransition(async () => {
            var s;
            try {
              const a = this.latestLocation,
                l = this.state.resolvedLocation,
                u = l.href !== a.href;
              this.cancelMatches();
              let f;
              this.__store.batch(() => {
                (f = this.matchRoutes(a.pathname, a.search)),
                  this.__store.setState((d) => ({
                    ...d,
                    status: "pending",
                    isLoading: !0,
                    location: a,
                    pendingMatches: f,
                    cachedMatches: d.cachedMatches.filter(
                      (c) => !f.find((h) => h.id === c.id)
                    ),
                  }));
              }),
                this.state.redirect ||
                  this.emit({
                    type: "onBeforeNavigate",
                    fromLocation: l,
                    toLocation: a,
                    pathChanged: u,
                  }),
                this.emit({
                  type: "onBeforeLoad",
                  fromLocation: l,
                  toLocation: a,
                  pathChanged: u,
                }),
                await this.loadMatches({
                  matches: f,
                  location: a,
                  onReady: async () => {
                    this.startViewTransition(async () => {
                      let d, c, h;
                      this.__store.batch(() => {
                        this.__store.setState((y) => {
                          const g = y.matches,
                            S = y.pendingMatches || y.matches;
                          return (
                            (d = g.filter(
                              (m) => !S.find((p) => p.id === m.id)
                            )),
                            (c = S.filter(
                              (m) => !g.find((p) => p.id === m.id)
                            )),
                            (h = g.filter((m) => S.find((p) => p.id === m.id))),
                            {
                              ...y,
                              isLoading: !1,
                              matches: S,
                              pendingMatches: void 0,
                              cachedMatches: [
                                ...y.cachedMatches,
                                ...d.filter((m) => m.status !== "error"),
                              ],
                            }
                          );
                        }),
                          this.cleanCache();
                      }),
                        [
                          [d, "onLeave"],
                          [c, "onEnter"],
                          [h, "onStay"],
                        ].forEach(([y, g]) => {
                          y.forEach((S) => {
                            var m, p;
                            (p = (m = this.looseRoutesById[S.routeId].options)[
                              g
                            ]) == null || p.call(m, S);
                          });
                        });
                    });
                  },
                });
            } catch (a) {
              uf(a)
                ? ((n = a),
                  this.isServer ||
                    this.navigate({ ...a, replace: !0, __isRedirect: !0 }))
                : Ht(a) && (r = a),
                this.__store.setState((l) => ({
                  ...l,
                  statusCode: n
                    ? n.statusCode
                    : r
                    ? 404
                    : l.matches.some((u) => u.status === "error")
                    ? 500
                    : 200,
                  redirect: n,
                }));
            }
            this.latestLoadPromise === o &&
              ((s = this.commitLocationPromise) == null || s.resolve(),
              (this.latestLoadPromise = void 0),
              (this.commitLocationPromise = void 0)),
              i();
          });
        });
        for (
          this.latestLoadPromise = o, await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
      }),
      (this.startViewTransition = (n) => {
        var r, o;
        const i =
          this.shouldViewTransition ?? this.options.defaultViewTransition;
        delete this.shouldViewTransition,
          ((o =
            (r = i && typeof document < "u" ? document : void 0) == null
              ? void 0
              : r.startViewTransition) != null &&
            o.call(r, n)) ||
            n();
      }),
      (this.updateMatch = (n, r) => {
        var o;
        let i;
        const s =
            (o = this.state.pendingMatches) == null
              ? void 0
              : o.find((u) => u.id === n),
          a = this.state.matches.find((u) => u.id === n),
          l = s ? "pendingMatches" : a ? "matches" : "cachedMatches";
        return (
          this.__store.setState((u) => {
            var f;
            return {
              ...u,
              [l]:
                (f = u[l]) == null
                  ? void 0
                  : f.map((d) => (d.id === n ? (i = r(d)) : d)),
            };
          }),
          i
        );
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: o,
        onReady: i,
        updateMatch: s = this.updateMatch,
      }) => {
        let a,
          l = !1;
        const u = async () => {
          l || ((l = !0), await (i == null ? void 0 : i()));
        };
        !this.isServer && !this.state.matches.length && u();
        const f = (d, c) => {
          var h, y, g;
          if (uf(c)) throw c;
          if (Wn(c) || Ht(c)) {
            if (
              (s(d.id, (S) => ({
                ...S,
                status: Wn(c) ? "redirected" : Ht(c) ? "notFound" : "error",
                isFetching: !1,
                error: c,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              c.routeId || (c.routeId = d.routeId),
              (h = d.beforeLoadPromise) == null || h.resolve(),
              (y = d.loaderPromise) == null || y.resolve(),
              (g = d.loadPromise) == null || g.resolve(),
              Wn(c))
            )
              throw (
                ((l = !0),
                (c = this.resolveRedirect({ ...c, _fromLocation: n })),
                c)
              );
            if (Ht(c))
              throw (this._handleNotFound(r, c, { updateMatch: s }), c);
          }
        };
        try {
          await new Promise((d, c) => {
            (async () => {
              var h, y, g;
              try {
                const S = (v, E, _) => {
                  var k, R;
                  const { id: x, routeId: B } = r[v],
                    z = this.looseRoutesById[B];
                  if (E instanceof Promise) throw E;
                  (E.routerCode = _), (a = a ?? v), f(this.getMatch(x), E);
                  try {
                    (R = (k = z.options).onError) == null || R.call(k, E);
                  } catch (q) {
                    (E = q), f(this.getMatch(x), E);
                  }
                  s(x, (q) => {
                    var Z;
                    return (
                      (Z = q.beforeLoadPromise) == null || Z.resolve(),
                      {
                        ...q,
                        error: E,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [v, { id: E, routeId: _ }] of r.entries()) {
                  const k = this.getMatch(E);
                  if (k.beforeLoadPromise || k.loaderPromise)
                    await k.beforeLoadPromise;
                  else {
                    try {
                      s(E, (j) => ({
                        ...j,
                        loadPromise: Tr(() => {
                          var U;
                          (U = j.loadPromise) == null || U.resolve();
                        }),
                        beforeLoadPromise: Tr(),
                      }));
                      const R = this.looseRoutesById[_],
                        x = new AbortController(),
                        B = (h = r[v - 1]) == null ? void 0 : h.id,
                        z = () =>
                          B
                            ? this.getMatch(B).context ??
                              this.options.context ??
                              {}
                            : this.options.context ?? {},
                        q =
                          R.options.pendingMs ?? this.options.defaultPendingMs,
                        Z = !!(
                          i &&
                          !this.isServer &&
                          !o &&
                          (R.options.loader || R.options.beforeLoad) &&
                          typeof q == "number" &&
                          q !== 1 / 0 &&
                          (R.options.pendingComponent ??
                            this.options.defaultPendingComponent)
                        );
                      let K;
                      Z &&
                        (K = setTimeout(() => {
                          try {
                            u();
                          } catch {}
                        }, q));
                      const { paramsError: oe, searchError: ce } =
                        this.getMatch(E);
                      oe && S(v, oe, "PARSE_PARAMS"),
                        ce && S(v, ce, "VALIDATE_SEARCH");
                      const pe = z();
                      s(E, (j) => ({
                        ...j,
                        isFetching: "beforeLoad",
                        fetchCount: j.fetchCount + 1,
                        routeContext: Ut(j.routeContext, pe),
                        context: Ut(j.context, pe),
                        abortController: x,
                        pendingTimeout: K,
                      }));
                      const {
                          search: Te,
                          params: P,
                          routeContext: I,
                          cause: A,
                        } = this.getMatch(E),
                        O = {
                          search: Te,
                          abortController: x,
                          params: P,
                          preload: !!o,
                          context: I,
                          location: n,
                          navigate: (j) =>
                            this.navigate({ ...j, _fromLocation: n }),
                          buildLocation: this.buildLocation,
                          cause: o ? "preload" : A,
                        },
                        F =
                          (await ((g = (y = R.options).beforeLoad) == null
                            ? void 0
                            : g.call(y, O))) ?? {};
                      (Wn(F) || Ht(F)) && S(v, F, "BEFORE_LOAD"),
                        s(E, (j) => {
                          const U = { ...j.routeContext, ...F };
                          return {
                            ...j,
                            routeContext: Ut(j.routeContext, U),
                            context: Ut(j.context, U),
                            abortController: x,
                          };
                        });
                    } catch (R) {
                      S(v, R, "BEFORE_LOAD");
                    }
                    s(E, (R) => {
                      var x;
                      return (
                        (x = R.beforeLoadPromise) == null || x.resolve(),
                        { ...R, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const m = r.slice(0, a),
                  p = [];
                m.forEach(({ id: v, routeId: E }, _) => {
                  p.push(
                    (async () => {
                      const { loaderPromise: k } = this.getMatch(v);
                      if (k) await k;
                      else {
                        const R = p[_ - 1],
                          x = this.looseRoutesById[E],
                          B = () => {
                            const {
                              params: I,
                              loaderDeps: A,
                              abortController: O,
                              context: F,
                              cause: j,
                            } = this.getMatch(v);
                            return {
                              params: I,
                              deps: A,
                              preload: !!o,
                              parentMatchPromise: R,
                              abortController: O,
                              context: F,
                              location: n,
                              navigate: (U) =>
                                this.navigate({ ...U, _fromLocation: n }),
                              cause: o ? "preload" : j,
                              route: x,
                            };
                          },
                          z = Date.now() - this.getMatch(v).updatedAt,
                          q = o
                            ? x.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4
                            : x.options.staleTime ??
                              this.options.defaultStaleTime ??
                              0,
                          Z = x.options.shouldReload,
                          K = typeof Z == "function" ? Z(B()) : Z;
                        s(v, (I) => ({
                          ...I,
                          loaderPromise: Tr(),
                          preload:
                            !!o && !this.state.matches.find((A) => A.id === v),
                        }));
                        const oe = async () => {
                            var I, A, O, F, j, U, re, H;
                            try {
                              const te = async () => {
                                const we = this.getMatch(v);
                                we.minPendingPromise &&
                                  (await we.minPendingPromise);
                              };
                              try {
                                x._lazyPromise =
                                  x._lazyPromise ||
                                  (x.lazyFn
                                    ? x.lazyFn().then((_t) => {
                                        Object.assign(x.options, _t.options);
                                      })
                                    : Promise.resolve());
                                const we =
                                  this.getMatch(v).componentsPromise ||
                                  x._lazyPromise.then(() =>
                                    Promise.all(
                                      W0.map(async (_t) => {
                                        const xo = x.options[_t];
                                        xo != null &&
                                          xo.preload &&
                                          (await xo.preload());
                                      })
                                    )
                                  );
                                s(v, (_t) => ({
                                  ..._t,
                                  isFetching: "loader",
                                  componentsPromise: we,
                                })),
                                  await x._lazyPromise;
                                let _e = await ((A = (I = x.options).loader) ==
                                null
                                  ? void 0
                                  : A.call(I, B()));
                                this.serializeLoaderData &&
                                  (_e = this.serializeLoaderData(_e, {
                                    router: this,
                                    match: this.getMatch(v),
                                  })),
                                  f(this.getMatch(v), _e),
                                  await te();
                                const mt =
                                    (F = (O = x.options).meta) == null
                                      ? void 0
                                      : F.call(O, {
                                          matches: r,
                                          match: this.getMatch(v),
                                          params: this.getMatch(v).params,
                                          loaderData: _e,
                                        }),
                                  Ca =
                                    (U = (j = x.options).headers) == null
                                      ? void 0
                                      : U.call(j, { loaderData: _e });
                                s(v, (_t) => ({
                                  ..._t,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: _e,
                                  meta: mt,
                                  headers: Ca,
                                }));
                              } catch (we) {
                                let _e = we;
                                await te(), f(this.getMatch(v), we);
                                try {
                                  (H = (re = x.options).onError) == null ||
                                    H.call(re, we);
                                } catch (mt) {
                                  (_e = mt), f(this.getMatch(v), mt);
                                }
                                s(v, (mt) => ({
                                  ...mt,
                                  error: _e,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              await this.getMatch(v).componentsPromise;
                            } catch (te) {
                              f(this.getMatch(v), te);
                            }
                          },
                          { status: ce, invalid: pe } = this.getMatch(v);
                        ce === "success" && (pe || (K ?? z > q))
                          ? (async () => {
                              try {
                                await oe();
                              } catch {}
                            })()
                          : ce !== "success" && (await oe());
                        const { loaderPromise: Te, loadPromise: P } =
                          this.getMatch(v);
                        Te == null || Te.resolve(), P == null || P.resolve();
                      }
                      s(v, (R) => ({
                        ...R,
                        isFetching: !1,
                        loaderPromise: void 0,
                      }));
                    })()
                  );
                }),
                  await Promise.all(p),
                  d();
              } catch (S) {
                c(S);
              }
            })();
          }),
            await u();
        } catch (d) {
          if (Wn(d) || Ht(d)) throw (Ht(d) && !o && (await u()), d);
        }
        return r;
      }),
      (this.invalidate = () => {
        const n = (r) => ({
          ...r,
          invalid: !0,
          ...(r.status === "error" ? { status: "pending", error: void 0 } : {}),
        });
        return (
          this.__store.setState((r) => {
            var o;
            return {
              ...r,
              matches: r.matches.map(n),
              cachedMatches: r.cachedMatches.map(n),
              pendingMatches:
                (o = r.pendingMatches) == null ? void 0 : o.map(n),
            };
          }),
          this.load()
        );
      }),
      (this.resolveRedirect = (n) => {
        const r = n;
        return r.href || (r.href = this.buildLocation(r).href), r;
      }),
      (this.cleanCache = () => {
        this.__store.setState((n) => ({
          ...n,
          cachedMatches: n.cachedMatches.filter((r) => {
            const o = this.looseRoutesById[r.routeId];
            if (!o.options.loader) return !1;
            const i =
              (r.preload
                ? o.options.preloadGcTime ?? this.options.defaultPreloadGcTime
                : o.options.gcTime ?? this.options.defaultGcTime) ??
              5 * 60 * 1e3;
            return r.status !== "error" && Date.now() - r.updatedAt < i;
          }),
        }));
      }),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n);
        let o = this.matchRoutes(r.pathname, r.search, {
          throwOnError: !0,
          preload: !0,
        });
        const i = Object.fromEntries(
          [
            ...this.state.matches,
            ...(this.state.pendingMatches ?? []),
            ...this.state.cachedMatches,
          ].map((a) => [a.id, !0])
        );
        this.__store.batch(() => {
          o.forEach((a) => {
            i[a.id] ||
              this.__store.setState((l) => ({
                ...l,
                cachedMatches: [...l.cachedMatches, a],
              }));
          });
        });
        const s = new Set(
          [...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
            (a) => a.id
          )
        );
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: r,
              preload: !0,
              updateMatch: (a, l) => {
                s.has(a)
                  ? (o = o.map((u) => (u.id === a ? l(u) : u)))
                  : this.updateMatch(a, l);
              },
            })),
            o
          );
        } catch (a) {
          if (Wn(a)) return await this.preloadRoute({ ...a, _fromLocation: r });
          console.error(a);
          return;
        }
      }),
      (this.matchRoute = (n, r) => {
        const o = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || "", n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(o);
        if (r != null && r.pending && this.state.status !== "pending")
          return !1;
        const a = (
            (r == null ? void 0 : r.pending) === void 0
              ? !this.state.isLoading
              : r.pending
          )
            ? this.latestLocation
            : this.state.resolvedLocation,
          l = Ji(this.basepath, a.pathname, { ...r, to: i.pathname });
        return !l || (n.params && !Xo(l, n.params, !0))
          ? !1
          : l && ((r == null ? void 0 : r.includeSearch) ?? !0)
          ? Xo(a.search, i.search, !0)
            ? l
            : !1
          : l;
      }),
      (this.dehydrate = () => {
        var n;
        const r =
          ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ??
          G0;
        return {
          state: {
            dehydratedMatches: this.state.matches.map((o) => ({
              ...Yo(o, ["id", "status", "updatedAt"]),
              error: o.error
                ? { data: r(o.error), __isServerError: !0 }
                : void 0,
            })),
          },
          manifest: this.manifest,
        };
      }),
      (this.hydrate = () => {
        var n, r, o;
        let i;
        typeof document < "u" &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated
          )),
          Ge(i),
          (this.dehydratedData = i.payload),
          (o = (r = this.options).hydrate) == null || o.call(r, i.payload);
        const s = i.router.state,
          a = this.matchRoutes(
            this.state.location.pathname,
            this.state.location.search
          ).map((l) => {
            const u = s.dehydratedMatches.find((f) => f.id === l.id);
            return (
              Ge(
                u,
                `Could not find a client-side match for dehydrated match with id: ${l.id}!`
              ),
              { ...l, ...u }
            );
          });
        this.__store.setState((l) => ({ ...l, matches: a })),
          (this.manifest = i.router.manifest);
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => (
          (this.injectedHtml = this.injectedHtml.filter((o) => o !== r)), n
        );
        this.injectedHtml.push(r);
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r;
        if (this.isServer) return;
        const o = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
        if (o)
          return (
            o.parsed || (o.parsed = this.options.transformer.parse(o.value)),
            o.parsed
          );
      }),
      (this.streamValue = (n, r) => {
        var o;
        pi(!this.streamedKeys.has(n), "Key has already been streamed: " + n),
          this.streamedKeys.add(n);
        const i = `__TSR__.streamedValues['${n}'] = { value: ${
          (o = this.serializer) == null
            ? void 0
            : o.call(this, this.options.transformer.stringify(r))
        }}`;
        this.injectHtml(
          `<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`
        );
      }),
      (this._handleNotFound = (
        n,
        r,
        { updateMatch: o = this.updateMatch } = {}
      ) => {
        const i = Object.fromEntries(n.map((l) => [l.routeId, l]));
        let s =
          (r.global
            ? this.looseRoutesById[lt]
            : this.looseRoutesById[r.routeId]) || this.looseRoutesById[lt];
        for (
          ;
          !s.options.notFoundComponent &&
          !this.options.defaultNotFoundComponent &&
          s.id !== lt;

        )
          (s = s.parentRoute), Ge(s);
        const a = i[s.id];
        Ge(a, "Could not find match for route: " + s.id),
          o(a.id, (l) => ({
            ...l,
            status: "notFound",
            error: r,
            isFetching: !1,
          })),
          r.routerCode === "BEFORE_LOAD" &&
            s.parentRoute &&
            ((r.routeId = s.parentRoute.id),
            this._handleNotFound(n, r, { updateMatch: o }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (n) => n.status === "notFound" || n.globalNotFound
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        stringifySearch: t.stringifySearch ?? A0,
        parseSearch: t.parseSearch ?? I0,
        transformer: t.transformer ?? {
          parse: JSON.parse,
          stringify: JSON.stringify,
        },
      }),
      typeof document < "u" && (window.__TSR__ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
}
class K0 extends Error {}
class Y0 extends Error {}
function X0(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: { ...e },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function G0(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function cf(e) {
  return !(typeof e == "object" && e && "data" in e) ||
    !("__isServerError" in e && e.__isServerError) ||
    !(typeof e.data == "object" && e.data)
    ? !1
    : e.__isServerError === !0;
}
function df(e) {
  if ("name" in e && "message" in e) {
    const t = new Error(e.message);
    return (t.name = e.name), t;
  }
  return e.data;
}
const ma = N.createContext(void 0);
function po(e) {
  const t = N.useContext(ma);
  return rt({
    select: (r) => {
      const o = r.matches.find((i) =>
        e.from ? e.from === i.routeId : i.id === t
      );
      if (
        (Ge(
          !((e.shouldThrow ?? !0) && !o),
          `Could not find ${
            e.from ? `an active match from "${e.from}"` : "a nearest match!"
          }`
        ),
        o !== void 0)
      )
        return e.select ? e.select(o) : o;
    },
  });
}
function J0(e) {
  return po({
    ...e,
    select: (t) =>
      typeof e.select == "function" ? e.select(t.loaderDeps) : t.loaderDeps,
  });
}
function Z0(e) {
  return po({
    ...e,
    select: (t) =>
      typeof e.select == "function" ? e.select(t.loaderData) : t.loaderData,
  });
}
function e1(e) {
  return po({
    ...e,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  });
}
function t1(e) {
  return po({
    ...e,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function xm(e) {
  const { navigate: t } = Bn();
  return N.useCallback((n) => t({ ...n }), [t]);
}
function n1(e) {
  const { navigate: t } = Bn();
  return (
    N.useEffect(() => {
      t({ ...e });
    }, []),
    null
  );
}
class Cm {
  constructor(t) {
    (this.init = (n) => {
      var r, o;
      this.originalIndex = n.originalIndex;
      const i = this.options,
        s = !(i != null && i.path) && !(i != null && i.id);
      (this.parentRoute =
        (o = (r = this.options) == null ? void 0 : r.getParentRoute) == null
          ? void 0
          : o.call(r)),
        s ? (this.path = lt) : Ge(this.parentRoute);
      let a = s ? lt : i.path;
      a && a !== "/" && (a = xc(a));
      const l = (i == null ? void 0 : i.id) || a;
      let u = s
        ? lt
        : An([this.parentRoute.id === lt ? "" : this.parentRoute.id, l]);
      a === lt && (a = "/"), u !== lt && (u = An(["/", u]));
      const f = u === lt ? "/" : An([this.parentRoute.fullPath, a]);
      (this.path = a), (this.id = u), (this.fullPath = f), (this.to = f);
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) => po({ ...n, from: this.id })),
      (this.useRouteContext = (n) =>
        po({
          ...n,
          from: this.id,
          select: (r) =>
            n != null && n.select ? n.select(r.context) : r.context,
        })),
      (this.useSearch = (n) => t1({ ...n, from: this.id })),
      (this.useParams = (n) => e1({ ...n, from: this.id })),
      (this.useLoaderDeps = (n) => J0({ ...n, from: this.id })),
      (this.useLoaderData = (n) => Z0({ ...n, from: this.id })),
      (this.useNavigate = () => xm({ from: this.id })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Ge(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for("react.memo"));
  }
  addChildren(t) {
    return (this.children = Array.isArray(t) ? t : Object.values(t)), this;
  }
}
function $e(e) {
  return new Cm(e);
}
class r1 extends Cm {
  constructor(t) {
    super(t);
  }
  addChildren(t) {
    return super.addChildren(t);
  }
}
function o1(e) {
  return new r1(e);
}
function i1() {
  const e = Bn(),
    t = N.useRef({ router: e, mounted: !1 }),
    n = rt({
      select: (u) =>
        Yo(u, ["isLoading", "location", "resolvedLocation", "isTransitioning"]),
    }),
    [r, o] = N.useTransition(),
    i = rt({ select: (u) => u.matches.some((f) => f.status === "pending") }),
    s = af(n.isLoading),
    a = n.isLoading || r || i,
    l = af(a);
  return (
    e.isServer || (e.startReactTransition = o),
    N.useEffect(() => {
      const u = e.history.subscribe(e.load),
        f = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
        });
      return (
        Yn(e.latestLocation.href) !== Yn(f.href) &&
          e.commitLocation({ ...f, replace: !0 }),
        () => {
          u();
        }
      );
    }, [e, e.history]),
    tl(() => {
      var u;
      if (
        ((u = window.__TSR__) != null && u.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return;
      (t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (d) {
            console.error(d);
          }
        })();
    }, [e]),
    tl(() => {
      if (s && !n.isLoading) {
        const u = e.state.location,
          f = e.state.resolvedLocation,
          d = f.href !== u.href;
        e.emit({
          type: "onLoad",
          fromLocation: f,
          toLocation: u,
          pathChanged: d,
        });
      }
    }, [s, e, n.isLoading]),
    tl(() => {
      if (l && !a) {
        const u = e.state.location,
          f = e.state.resolvedLocation,
          d = f.href !== u.href;
        if (
          (e.emit({
            type: "onResolved",
            fromLocation: f,
            toLocation: u,
            pathChanged: d,
          }),
          e.__store.setState((c) => ({
            ...c,
            status: "idle",
            resolvedLocation: c.location,
          })),
          document.querySelector && e.state.location.hash !== "")
        ) {
          const c = document.getElementById(e.state.location.hash);
          c && c.scrollIntoView();
        }
      }
    }, [a, l, e]),
    null
  );
}
function rl(e) {
  return T.jsx(T.Fragment, { children: e.children });
}
function Tm(e, t, n) {
  return t.options.notFoundComponent
    ? T.jsx(t.options.notFoundComponent, { data: n })
    : e.options.defaultNotFoundComponent
    ? T.jsx(e.options.defaultNotFoundComponent, { data: n })
    : T.jsx(V0, {});
}
const _m = N.memo(function ({ matchId: t }) {
    var n, r;
    const o = Bn(),
      i = rt({
        select: (S) => {
          var m;
          return (m = S.matches.find((p) => p.id === t)) == null
            ? void 0
            : m.routeId;
        },
      });
    Ge(i);
    const s = o.routesById[i],
      a = s.options.pendingComponent ?? o.options.defaultPendingComponent,
      l = a ? T.jsx(a, {}) : null,
      u = s.options.errorComponent ?? o.options.defaultErrorComponent,
      f = s.options.onCatch ?? o.options.defaultOnCatch,
      d = s.isRoot
        ? s.options.notFoundComponent ??
          ((n = o.options.notFoundRoute) == null ? void 0 : n.options.component)
        : s.options.notFoundComponent,
      c =
        (!s.isRoot || s.options.wrapInSuspense) &&
        (s.options.wrapInSuspense ??
          a ??
          ((r = s.options.errorComponent) == null ? void 0 : r.preload))
          ? N.Suspense
          : rl,
      h = u ? Cc : rl,
      y = d ? H0 : rl,
      g = rt({ select: (S) => S.loadedAt });
    return T.jsx(ma.Provider, {
      value: t,
      children: T.jsx(c, {
        fallback: l,
        children: T.jsx(h, {
          getResetKey: () => g,
          errorComponent: u || pa,
          onCatch: (S, m) => {
            if (Ht(S)) throw S;
            pi(!1, `Error in route match: ${t}`), f == null || f(S, m);
          },
          children: T.jsx(y, {
            fallback: (S) => {
              if (
                !d ||
                (S.routeId && S.routeId !== i) ||
                (!S.routeId && !s.isRoot)
              )
                throw S;
              return N.createElement(d, S);
            },
            children: T.jsx(s1, { matchId: t }),
          }),
        }),
      }),
    });
  }),
  s1 = N.memo(function ({ matchId: t }) {
    var n, r;
    const o = Bn(),
      i = rt({
        select: (d) => {
          var c;
          return (c = d.matches.find((h) => h.id === t)) == null
            ? void 0
            : c.routeId;
        },
      }),
      s = o.routesById[i],
      a = rt({ select: (d) => d.matches.findIndex((c) => c.id === t) }),
      l = rt({
        select: (d) => {
          const c = d.matches[a];
          return Yo(c, [
            "id",
            "status",
            "error",
            "loadPromise",
            "minPendingPromise",
          ]);
        },
      }),
      u = N.useMemo(() => {
        const d = s.options.component ?? o.options.defaultComponent;
        return d ? T.jsx(d, {}, i) : T.jsx(Pm, {});
      }, [i, s.options.component, o.options.defaultComponent]);
    N.useEffect(() => {
      if (l.status === "pending") {
        const d = s.options.pendingMinMs ?? o.options.defaultPendingMinMs;
        if (d && !l.minPendingPromise && !o.isServer) {
          const c = Tr();
          o.updateMatch(l.id, (y) => ({ ...y, minPendingPromise: c }));
          const h = setTimeout(() => {
            c.resolve(),
              o.updateMatch(l.id, (y) => ({ ...y, minPendingPromise: void 0 }));
          }, d);
          return () => clearTimeout(h);
        }
      }
    }, [
      l.id,
      l.loadPromise,
      l.minPendingPromise,
      l.status,
      s.options.pendingMinMs,
      o,
    ]);
    const f =
      (s.options.errorComponent ?? o.options.defaultErrorComponent) || pa;
    if (l.status === "notFound") {
      let d;
      return (
        cf(l.error)
          ? (d = (
              ((n = o.options.errorSerializer) == null
                ? void 0
                : n.deserialize) ?? df
            )(l.error.data))
          : (d = l.error),
        Ge(Ht(d)),
        Tm(o, s, d)
      );
    }
    if (l.status === "redirected") throw (Ge(Wn(l.error)), l.loadPromise);
    if (l.status === "error") {
      if (o.isServer)
        return T.jsx(f, { error: l.error, info: { componentStack: "" } });
      throw cf(l.error)
        ? (
            ((r = o.options.errorSerializer) == null
              ? void 0
              : r.deserialize) ?? df
          )(l.error.data)
        : l.error;
    }
    if (l.status === "pending") throw l.loadPromise;
    return T.jsxs(T.Fragment, {
      children: [
        u,
        o.AfterEachMatch
          ? T.jsx(o.AfterEachMatch, { match: l, matchIndex: a })
          : null,
      ],
    });
  }),
  Pm = N.memo(function () {
    const t = Bn(),
      n = N.useContext(ma),
      r = rt({
        select: (u) => {
          var f;
          return (f = u.matches.find((d) => d.id === n)) == null
            ? void 0
            : f.routeId;
        },
      }),
      o = t.routesById[r],
      { parentGlobalNotFound: i } = rt({
        select: (u) => {
          const d = u.matches.find((c) => c.id === n);
          return Ge(d), { parentGlobalNotFound: d.globalNotFound };
        },
      }),
      s = rt({
        select: (u) => {
          var f;
          const d = u.matches,
            c = d.findIndex((h) => h.id === n);
          return (f = d[c + 1]) == null ? void 0 : f.id;
        },
      });
    if (i) return Tm(t, o, void 0);
    if (!s) return null;
    const a = T.jsx(_m, { matchId: s }),
      l = t.options.defaultPendingComponent
        ? T.jsx(t.options.defaultPendingComponent, {})
        : null;
    return n === lt ? T.jsx(N.Suspense, { fallback: l, children: a }) : a;
  });
function a1() {
  const e = Bn(),
    t = e.options.defaultPendingComponent
      ? T.jsx(e.options.defaultPendingComponent, {})
      : null,
    n = T.jsxs(N.Suspense, {
      fallback: t,
      children: [T.jsx(i1, {}), T.jsx(l1, {})],
    });
  return e.options.InnerWrap ? T.jsx(e.options.InnerWrap, { children: n }) : n;
}
function l1() {
  const e = rt({
      select: (n) => {
        var r;
        return (r = n.matches[0]) == null ? void 0 : r.id;
      },
    }),
    t = rt({ select: (n) => n.loadedAt });
  return T.jsx(ma.Provider, {
    value: e,
    children: T.jsx(Cc, {
      getResetKey: () => t,
      errorComponent: pa,
      onCatch: (n) => {
        pi(
          !1,
          "The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!"
        ),
          pi(!1, n.message || n.toString());
      },
      children: e ? T.jsx(_m, { matchId: e }) : null,
    }),
  });
}
function u1({ router: e, children: t, ...n }) {
  e.update({
    ...e.options,
    ...n,
    context: { ...e.options.context, ...n.context },
  });
  const r = ym(),
    o = T.jsx(r.Provider, { value: e, children: t });
  return e.options.Wrap ? T.jsx(e.options.Wrap, { children: o }) : o;
}
function c1({ router: e, ...t }) {
  return T.jsx(u1, { router: e, ...t, children: T.jsx(a1, {}) });
}
const d1 = "modulepreload",
  f1 = function (e) {
    return "/" + e;
  },
  ff = {},
  Re = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        s =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      o = Promise.all(
        n.map((a) => {
          if (((a = f1(a)), a in ff)) return;
          ff[a] = !0;
          const l = a.endsWith(".css"),
            u = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${u}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = l ? "stylesheet" : d1),
            l || ((f.as = "script"), (f.crossOrigin = "")),
            (f.href = a),
            s && f.setAttribute("nonce", s),
            document.head.appendChild(f),
            l)
          )
            return new Promise((d, c) => {
              f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  c(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    return o
      .then(() => t())
      .catch((i) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i;
      });
  };
var h1 = (e) => {
    switch (e) {
      case "success":
        return v1;
      case "info":
        return g1;
      case "warning":
        return y1;
      case "error":
        return w1;
      default:
        return null;
    }
  },
  p1 = Array(12).fill(0),
  m1 = ({ visible: e }) =>
    M.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      M.createElement(
        "div",
        { className: "sonner-spinner" },
        p1.map((t, n) =>
          M.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  v1 = M.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  y1 = M.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  g1 = M.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  w1 = M.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  S1 = () => {
    let [e, t] = M.useState(document.hidden);
    return (
      M.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  ou = 1,
  E1 = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : ou++,
            i = this.toasts.find((a) => a.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: s, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (i) => {
                if (C1(i) && !i.ok) {
                  o = !1;
                  let s =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${i.status}`)
                        : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${i.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: a,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let s =
                      typeof t.success == "function"
                        ? await t.success(i)
                        : t.success,
                    a =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: s,
                    description: a,
                  });
                }
              })
              .catch(async (i) => {
                if (t.error !== void 0) {
                  o = !1;
                  let s =
                      typeof t.error == "function" ? await t.error(i) : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: a,
                  });
                }
              })
              .finally(() => {
                var i;
                o && (this.dismiss(n), (n = void 0)),
                  (i = t.finally) == null || i.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || ou++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  st = new E1(),
  x1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || ou++;
    return st.addToast({ title: e, ...t, id: n }), n;
  },
  C1 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  T1 = x1,
  _1 = () => st.toasts,
  ve = Object.assign(
    T1,
    {
      success: st.success,
      info: st.info,
      warning: st.warning,
      error: st.error,
      custom: st.custom,
      message: st.message,
      promise: st.promise,
      dismiss: st.dismiss,
      loading: st.loading,
    },
    { getHistory: _1 }
  );
function P1(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
P1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
  `);
function Zi(e) {
  return e.label !== void 0;
}
var R1 = 3,
  k1 = "32px",
  O1 = 4e3,
  L1 = 356,
  M1 = 14,
  N1 = 20,
  I1 = 200;
function A1(...e) {
  return e.filter(Boolean).join(" ");
}
var F1 = (e) => {
  var t, n, r, o, i, s, a, l, u, f;
  let {
      invert: d,
      toast: c,
      unstyled: h,
      interacting: y,
      setHeights: g,
      visibleToasts: S,
      heights: m,
      index: p,
      toasts: v,
      expanded: E,
      removeToast: _,
      defaultRichColors: k,
      closeButton: R,
      style: x,
      cancelButtonStyle: B,
      actionButtonStyle: z,
      className: q = "",
      descriptionClassName: Z = "",
      duration: K,
      position: oe,
      gap: ce,
      loadingIcon: pe,
      expandByDefault: Te,
      classNames: P,
      icons: I,
      closeButtonAriaLabel: A = "Close toast",
      pauseWhenPageIsHidden: O,
      cn: F,
    } = e,
    [j, U] = M.useState(!1),
    [re, H] = M.useState(!1),
    [te, we] = M.useState(!1),
    [_e, mt] = M.useState(!1),
    [Ca, _t] = M.useState(0),
    [xo, bc] = M.useState(0),
    zc = M.useRef(null),
    vr = M.useRef(null),
    Cv = p === 0,
    Tv = p + 1 <= S,
    vt = c.type,
    yr = c.dismissible !== !1,
    _v = c.className || "",
    Pv = c.descriptionClassName || "",
    Mi = M.useMemo(
      () => m.findIndex((Q) => Q.toastId === c.id) || 0,
      [m, c.id]
    ),
    Rv = M.useMemo(() => {
      var Q;
      return (Q = c.closeButton) != null ? Q : R;
    }, [c.closeButton, R]),
    Bc = M.useMemo(() => c.duration || K || O1, [c.duration, K]),
    Ta = M.useRef(0),
    gr = M.useRef(0),
    Uc = M.useRef(0),
    wr = M.useRef(null),
    [$c, kv] = oe.split("-"),
    Hc = M.useMemo(
      () => m.reduce((Q, ae, ie) => (ie >= Mi ? Q : Q + ae.height), 0),
      [m, Mi]
    ),
    Vc = S1(),
    Ov = c.invert || d,
    _a = vt === "loading";
  (gr.current = M.useMemo(() => Mi * ce + Hc, [Mi, Hc])),
    M.useEffect(() => {
      U(!0);
    }, []),
    M.useLayoutEffect(() => {
      if (!j) return;
      let Q = vr.current,
        ae = Q.style.height;
      Q.style.height = "auto";
      let ie = Q.getBoundingClientRect().height;
      (Q.style.height = ae),
        bc(ie),
        g((bt) =>
          bt.find((zt) => zt.toastId === c.id)
            ? bt.map((zt) => (zt.toastId === c.id ? { ...zt, height: ie } : zt))
            : [{ toastId: c.id, height: ie, position: c.position }, ...bt]
        );
    }, [j, c.title, c.description, g, c.id]);
  let cn = M.useCallback(() => {
    H(!0),
      _t(gr.current),
      g((Q) => Q.filter((ae) => ae.toastId !== c.id)),
      setTimeout(() => {
        _(c);
      }, I1);
  }, [c, _, g, gr]);
  M.useEffect(() => {
    if (
      (c.promise && vt === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let Q,
      ae = Bc;
    return (
      E || y || (O && Vc)
        ? (() => {
            if (Uc.current < Ta.current) {
              let ie = new Date().getTime() - Ta.current;
              ae = ae - ie;
            }
            Uc.current = new Date().getTime();
          })()
        : ae !== 1 / 0 &&
          ((Ta.current = new Date().getTime()),
          (Q = setTimeout(() => {
            var ie;
            (ie = c.onAutoClose) == null || ie.call(c, c), cn();
          }, ae))),
      () => clearTimeout(Q)
    );
  }, [E, y, Te, c, Bc, cn, c.promise, vt, O, Vc]),
    M.useEffect(() => {
      let Q = vr.current;
      if (Q) {
        let ae = Q.getBoundingClientRect().height;
        return (
          bc(ae),
          g((ie) => [
            { toastId: c.id, height: ae, position: c.position },
            ...ie,
          ]),
          () => g((ie) => ie.filter((bt) => bt.toastId !== c.id))
        );
      }
    }, [g, c.id]),
    M.useEffect(() => {
      c.delete && cn();
    }, [cn, c.delete]);
  function Lv() {
    return I != null && I.loading
      ? M.createElement(
          "div",
          { className: "sonner-loader", "data-visible": vt === "loading" },
          I.loading
        )
      : pe
      ? M.createElement(
          "div",
          { className: "sonner-loader", "data-visible": vt === "loading" },
          pe
        )
      : M.createElement(m1, { visible: vt === "loading" });
  }
  return M.createElement(
    "li",
    {
      "aria-live": c.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: vr,
      className: F(
        q,
        _v,
        P == null ? void 0 : P.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        P == null ? void 0 : P.default,
        P == null ? void 0 : P[vt],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[vt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : k,
      "data-styled": !(c.jsx || c.unstyled || h),
      "data-mounted": j,
      "data-promise": !!c.promise,
      "data-removed": re,
      "data-visible": Tv,
      "data-y-position": $c,
      "data-x-position": kv,
      "data-index": p,
      "data-front": Cv,
      "data-swiping": te,
      "data-dismissible": yr,
      "data-type": vt,
      "data-invert": Ov,
      "data-swipe-out": _e,
      "data-expanded": !!(E || (Te && j)),
      style: {
        "--index": p,
        "--toasts-before": p,
        "--z-index": v.length - p,
        "--offset": `${re ? Ca : gr.current}px`,
        "--initial-height": Te ? "auto" : `${xo}px`,
        ...x,
        ...c.style,
      },
      onPointerDown: (Q) => {
        _a ||
          !yr ||
          ((zc.current = new Date()),
          _t(gr.current),
          Q.target.setPointerCapture(Q.pointerId),
          Q.target.tagName !== "BUTTON" &&
            (we(!0), (wr.current = { x: Q.clientX, y: Q.clientY })));
      },
      onPointerUp: () => {
        var Q, ae, ie, bt;
        if (_e || !yr) return;
        wr.current = null;
        let zt = Number(
            ((Q = vr.current) == null
              ? void 0
              : Q.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          Ni =
            new Date().getTime() -
            ((ae = zc.current) == null ? void 0 : ae.getTime()),
          Mv = Math.abs(zt) / Ni;
        if (Math.abs(zt) >= N1 || Mv > 0.11) {
          _t(gr.current),
            (ie = c.onDismiss) == null || ie.call(c, c),
            cn(),
            mt(!0);
          return;
        }
        (bt = vr.current) == null ||
          bt.style.setProperty("--swipe-amount", "0px"),
          we(!1);
      },
      onPointerMove: (Q) => {
        var ae;
        if (!wr.current || !yr) return;
        let ie = Q.clientY - wr.current.y,
          bt = Q.clientX - wr.current.x,
          zt = ($c === "top" ? Math.min : Math.max)(0, ie),
          Ni = Q.pointerType === "touch" ? 10 : 2;
        Math.abs(zt) > Ni
          ? (ae = vr.current) == null ||
            ae.style.setProperty("--swipe-amount", `${ie}px`)
          : Math.abs(bt) > Ni && (wr.current = null);
      },
    },
    Rv && !c.jsx
      ? M.createElement(
          "button",
          {
            "aria-label": A,
            "data-disabled": _a,
            "data-close-button": !0,
            onClick:
              _a || !yr
                ? () => {}
                : () => {
                    var Q;
                    cn(), (Q = c.onDismiss) == null || Q.call(c, c);
                  },
            className: F(
              P == null ? void 0 : P.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          M.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            M.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            M.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    c.jsx || M.isValidElement(c.title)
      ? c.jsx || c.title
      : M.createElement(
          M.Fragment,
          null,
          vt || c.icon || c.promise
            ? M.createElement(
                "div",
                {
                  "data-icon": "",
                  className: F(
                    P == null ? void 0 : P.icon,
                    (i = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || Lv()
                  : null,
                c.type !== "loading"
                  ? c.icon || (I == null ? void 0 : I[vt]) || h1(vt)
                  : null
              )
            : null,
          M.createElement(
            "div",
            {
              "data-content": "",
              className: F(
                P == null ? void 0 : P.content,
                (s = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : s.content
              ),
            },
            M.createElement(
              "div",
              {
                "data-title": "",
                className: F(
                  P == null ? void 0 : P.title,
                  (a = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              c.title
            ),
            c.description
              ? M.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: F(
                      Z,
                      Pv,
                      P == null ? void 0 : P.description,
                      (l = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : l.description
                    ),
                  },
                  c.description
                )
              : null
          ),
          M.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && Zi(c.cancel)
            ? M.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: c.cancelButtonStyle || B,
                  onClick: (Q) => {
                    var ae, ie;
                    Zi(c.cancel) &&
                      yr &&
                      ((ie = (ae = c.cancel).onClick) == null || ie.call(ae, Q),
                      cn());
                  },
                  className: F(
                    P == null ? void 0 : P.cancelButton,
                    (u = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                c.cancel.label
              )
            : null,
          M.isValidElement(c.action)
            ? c.action
            : c.action && Zi(c.action)
            ? M.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: c.actionButtonStyle || z,
                  onClick: (Q) => {
                    var ae, ie;
                    Zi(c.action) &&
                      (Q.defaultPrevented ||
                        ((ie = (ae = c.action).onClick) == null ||
                          ie.call(ae, Q),
                        cn()));
                  },
                  className: F(
                    P == null ? void 0 : P.actionButton,
                    (f = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                c.action.label
              )
            : null
        )
  );
};
function hf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var Cx = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: s,
      offset: a,
      theme: l = "light",
      richColors: u,
      duration: f,
      style: d,
      visibleToasts: c = R1,
      toastOptions: h,
      dir: y = hf(),
      gap: g = M1,
      loadingIcon: S,
      icons: m,
      containerAriaLabel: p = "Notifications",
      pauseWhenPageIsHidden: v,
      cn: E = A1,
    } = e,
    [_, k] = M.useState([]),
    R = M.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(_.filter((O) => O.position).map((O) => O.position))
          )
        ),
      [_, n]
    ),
    [x, B] = M.useState([]),
    [z, q] = M.useState(!1),
    [Z, K] = M.useState(!1),
    [oe, ce] = M.useState(
      l !== "system"
        ? l
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    pe = M.useRef(null),
    Te = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    P = M.useRef(null),
    I = M.useRef(!1),
    A = M.useCallback(
      (O) => {
        var F;
        ((F = _.find((j) => j.id === O.id)) != null && F.delete) ||
          st.dismiss(O.id),
          k((j) => j.filter(({ id: U }) => U !== O.id));
      },
      [_]
    );
  return (
    M.useEffect(
      () =>
        st.subscribe((O) => {
          if (O.dismiss) {
            k((F) => F.map((j) => (j.id === O.id ? { ...j, delete: !0 } : j)));
            return;
          }
          setTimeout(() => {
            r0.flushSync(() => {
              k((F) => {
                let j = F.findIndex((U) => U.id === O.id);
                return j !== -1
                  ? [...F.slice(0, j), { ...F[j], ...O }, ...F.slice(j + 1)]
                  : [O, ...F];
              });
            });
          });
        }),
      []
    ),
    M.useEffect(() => {
      if (l !== "system") {
        ce(l);
        return;
      }
      l === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? ce("dark")
          : ce("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: O }) => {
              ce(O ? "dark" : "light");
            });
    }, [l]),
    M.useEffect(() => {
      _.length <= 1 && q(!1);
    }, [_]),
    M.useEffect(() => {
      let O = (F) => {
        var j, U;
        r.every((re) => F[re] || F.code === re) &&
          (q(!0), (j = pe.current) == null || j.focus()),
          F.code === "Escape" &&
            (document.activeElement === pe.current ||
              ((U = pe.current) != null &&
                U.contains(document.activeElement))) &&
            q(!1);
      };
      return (
        document.addEventListener("keydown", O),
        () => document.removeEventListener("keydown", O)
      );
    }, [r]),
    M.useEffect(() => {
      if (pe.current)
        return () => {
          P.current &&
            (P.current.focus({ preventScroll: !0 }),
            (P.current = null),
            (I.current = !1));
        };
    }, [pe.current]),
    _.length
      ? M.createElement(
          "section",
          { "aria-label": `${p} ${Te}`, tabIndex: -1 },
          R.map((O, F) => {
            var j;
            let [U, re] = O.split("-");
            return M.createElement(
              "ol",
              {
                key: O,
                dir: y === "auto" ? hf() : y,
                tabIndex: -1,
                ref: pe,
                className: s,
                "data-sonner-toaster": !0,
                "data-theme": oe,
                "data-y-position": U,
                "data-x-position": re,
                style: {
                  "--front-toast-height": `${
                    ((j = x[0]) == null ? void 0 : j.height) || 0
                  }px`,
                  "--offset": typeof a == "number" ? `${a}px` : a || k1,
                  "--width": `${L1}px`,
                  "--gap": `${g}px`,
                  ...d,
                },
                onBlur: (H) => {
                  I.current &&
                    !H.currentTarget.contains(H.relatedTarget) &&
                    ((I.current = !1),
                    P.current &&
                      (P.current.focus({ preventScroll: !0 }),
                      (P.current = null)));
                },
                onFocus: (H) => {
                  (H.target instanceof HTMLElement &&
                    H.target.dataset.dismissible === "false") ||
                    I.current ||
                    ((I.current = !0), (P.current = H.relatedTarget));
                },
                onMouseEnter: () => q(!0),
                onMouseMove: () => q(!0),
                onMouseLeave: () => {
                  Z || q(!1);
                },
                onPointerDown: (H) => {
                  (H.target instanceof HTMLElement &&
                    H.target.dataset.dismissible === "false") ||
                    K(!0);
                },
                onPointerUp: () => K(!1),
              },
              _.filter((H) => (!H.position && F === 0) || H.position === O).map(
                (H, te) => {
                  var we, _e;
                  return M.createElement(F1, {
                    key: H.id,
                    icons: m,
                    index: te,
                    toast: H,
                    defaultRichColors: u,
                    duration:
                      (we = h == null ? void 0 : h.duration) != null ? we : f,
                    className: h == null ? void 0 : h.className,
                    descriptionClassName:
                      h == null ? void 0 : h.descriptionClassName,
                    invert: t,
                    visibleToasts: c,
                    closeButton:
                      (_e = h == null ? void 0 : h.closeButton) != null
                        ? _e
                        : i,
                    interacting: Z,
                    position: O,
                    style: h == null ? void 0 : h.style,
                    unstyled: h == null ? void 0 : h.unstyled,
                    classNames: h == null ? void 0 : h.classNames,
                    cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                    actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                    removeToast: A,
                    toasts: _.filter((mt) => mt.position == H.position),
                    heights: x.filter((mt) => mt.position == H.position),
                    setHeights: B,
                    expandByDefault: o,
                    gap: g,
                    loadingIcon: S,
                    expanded: z,
                    pauseWhenPageIsHidden: v,
                    cn: E,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
function Rm(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: j1 } = Object.prototype,
  { getPrototypeOf: Tc } = Object,
  va = ((e) => (t) => {
    const n = j1.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Dt = (e) => ((e = e.toLowerCase()), (t) => va(t) === e),
  ya = (e) => (t) => typeof t === e,
  { isArray: So } = Array,
  mi = ya("undefined");
function D1(e) {
  return (
    e !== null &&
    !mi(e) &&
    e.constructor !== null &&
    !mi(e.constructor) &&
    dt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const km = Dt("ArrayBuffer");
function b1(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && km(e.buffer)),
    t
  );
}
const z1 = ya("string"),
  dt = ya("function"),
  Om = ya("number"),
  ga = (e) => e !== null && typeof e == "object",
  B1 = (e) => e === !0 || e === !1,
  hs = (e) => {
    if (va(e) !== "object") return !1;
    const t = Tc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  U1 = Dt("Date"),
  $1 = Dt("File"),
  H1 = Dt("Blob"),
  V1 = Dt("FileList"),
  W1 = (e) => ga(e) && dt(e.pipe),
  Q1 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (dt(e.append) &&
          ((t = va(e)) === "formdata" ||
            (t === "object" &&
              dt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  q1 = Dt("URLSearchParams"),
  [K1, Y1, X1, G1] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Dt
  ),
  J1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ki(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), So(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Lm(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Xn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Mm = (e) => !mi(e) && e !== Xn;
function iu() {
  const { caseless: e } = (Mm(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Lm(t, o)) || o;
      hs(t[i]) && hs(r)
        ? (t[i] = iu(t[i], r))
        : hs(r)
        ? (t[i] = iu({}, r))
        : So(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ki(arguments[r], n);
  return t;
}
const Z1 = (e, t, n, { allOwnKeys: r } = {}) => (
    ki(
      t,
      (o, i) => {
        n && dt(o) ? (e[i] = Rm(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ew = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  nw = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Tc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  rw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  ow = (e) => {
    if (!e) return null;
    if (So(e)) return e;
    let t = e.length;
    if (!Om(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  iw = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Tc(Uint8Array)),
  sw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  aw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  lw = Dt("HTMLFormElement"),
  uw = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  pf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  cw = Dt("RegExp"),
  Nm = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ki(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  dw = (e) => {
    Nm(e, (t, n) => {
      if (dt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (dt(r)) {
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
  fw = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return So(e) ? r(e) : r(String(e).split(t)), n;
  },
  hw = () => {},
  pw = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  ol = "abcdefghijklmnopqrstuvwxyz",
  mf = "0123456789",
  Im = { DIGIT: mf, ALPHA: ol, ALPHA_DIGIT: ol + ol.toUpperCase() + mf },
  mw = (e = 16, t = Im.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function vw(e) {
  return !!(
    e &&
    dt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const yw = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ga(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = So(r) ? [] : {};
            return (
              ki(r, (s, a) => {
                const l = n(s, o + 1);
                !mi(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  gw = Dt("AsyncFunction"),
  ww = (e) => e && (ga(e) || dt(e)) && dt(e.then) && dt(e.catch),
  Am = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          Xn.addEventListener(
            "message",
            ({ source: o, data: i }) => {
              o === Xn && i === n && r.length && r.shift()();
            },
            !1
          ),
          (o) => {
            r.push(o), Xn.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    dt(Xn.postMessage)
  ),
  Sw =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Xn)
      : (typeof process < "u" && process.nextTick) || Am,
  C = {
    isArray: So,
    isArrayBuffer: km,
    isBuffer: D1,
    isFormData: Q1,
    isArrayBufferView: b1,
    isString: z1,
    isNumber: Om,
    isBoolean: B1,
    isObject: ga,
    isPlainObject: hs,
    isReadableStream: K1,
    isRequest: Y1,
    isResponse: X1,
    isHeaders: G1,
    isUndefined: mi,
    isDate: U1,
    isFile: $1,
    isBlob: H1,
    isRegExp: cw,
    isFunction: dt,
    isStream: W1,
    isURLSearchParams: q1,
    isTypedArray: iw,
    isFileList: V1,
    forEach: ki,
    merge: iu,
    extend: Z1,
    trim: J1,
    stripBOM: ew,
    inherits: tw,
    toFlatObject: nw,
    kindOf: va,
    kindOfTest: Dt,
    endsWith: rw,
    toArray: ow,
    forEachEntry: sw,
    matchAll: aw,
    isHTMLForm: lw,
    hasOwnProperty: pf,
    hasOwnProp: pf,
    reduceDescriptors: Nm,
    freezeMethods: dw,
    toObjectSet: fw,
    toCamelCase: uw,
    noop: hw,
    toFiniteNumber: pw,
    findKey: Lm,
    global: Xn,
    isContextDefined: Mm,
    ALPHABET: Im,
    generateString: mw,
    isSpecCompliantForm: vw,
    toJSONObject: yw,
    isAsyncFn: gw,
    isThenable: ww,
    setImmediate: Am,
    asap: Sw,
  };
function W(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
C.inherits(W, Error, {
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
      config: C.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Fm = W.prototype,
  jm = {};
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
  jm[e] = { value: e };
});
Object.defineProperties(W, jm);
Object.defineProperty(Fm, "isAxiosError", { value: !0 });
W.from = (e, t, n, r, o, i) => {
  const s = Object.create(Fm);
  return (
    C.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    W.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const Ew = null;
function su(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Dm(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Dm(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function xw(e) {
  return C.isArray(e) && !e.some(su);
}
const Cw = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function wa(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, S) {
        return !C.isUndefined(S[g]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (C.isDate(y)) return y.toISOString();
    if (!l && C.isBlob(y))
      throw new W("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(y) || C.isTypedArray(y)
      ? l && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, g, S) {
    let m = y;
    if (y && !S && typeof y == "object") {
      if (C.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (C.isArray(y) && xw(y)) ||
        ((C.isFileList(y) || C.endsWith(g, "[]")) && (m = C.toArray(y)))
      )
        return (
          (g = Dm(g)),
          m.forEach(function (v, E) {
            !(C.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? vf([g], E, i) : s === null ? g : g + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return su(y) ? !0 : (t.append(vf(S, g, i), u(y)), !1);
  }
  const d = [],
    c = Object.assign(Cw, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: su,
    });
  function h(y, g) {
    if (!C.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(y),
        C.forEach(y, function (m, p) {
          (!(C.isUndefined(m) || m === null) &&
            o.call(t, m, C.isString(p) ? p.trim() : p, g, c)) === !0 &&
            h(m, g ? g.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return h(e), t;
}
function yf(e) {
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
function _c(e, t) {
  (this._pairs = []), e && wa(e, this, t);
}
const bm = _c.prototype;
bm.append = function (t, n) {
  this._pairs.push([t, n]);
};
bm.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, yf);
      }
    : yf;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Tw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function zm(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Tw,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = C.isURLSearchParams(t) ? t.toString() : new _c(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class gf {
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
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Bm = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  _w = typeof URLSearchParams < "u" ? URLSearchParams : _c,
  Pw = typeof FormData < "u" ? FormData : null,
  Rw = typeof Blob < "u" ? Blob : null,
  kw = {
    isBrowser: !0,
    classes: { URLSearchParams: _w, FormData: Pw, Blob: Rw },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Pc = typeof window < "u" && typeof document < "u",
  Ow = ((e) => Pc && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Lw =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Mw = (Pc && window.location.href) || "http://localhost",
  Nw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Pc,
        hasStandardBrowserEnv: Ow,
        hasStandardBrowserWebWorkerEnv: Lw,
        origin: Mw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ft = { ...Nw, ...kw };
function Iw(e, t) {
  return wa(
    e,
    new Ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Ft.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Aw(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Fw(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function Um(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && C.isArray(o) ? o.length : s),
      l
        ? (C.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !C.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && C.isArray(o[s]) && (o[s] = Fw(o[s])),
          !a)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, o) => {
        t(Aw(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function jw(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Oi = {
  transitional: Bm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = C.isObject(t);
      if ((i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return o ? JSON.stringify(Um(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t) ||
        C.isReadableStream(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Iw(t, this.formSerializer).toString();
        if ((a = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return wa(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), jw(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Oi.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? W.from(a, W.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
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
  env: { FormData: Ft.classes.FormData, Blob: Ft.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Oi.headers[e] = {};
});
const Dw = C.toObjectSet([
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
  bw = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
  `
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && Dw[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  wf = Symbol("internals");
function Mo(e) {
  return e && String(e).trim().toLowerCase();
}
function ps(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(ps) : String(e);
}
function zw(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Bw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function il(e, t, n, r, o) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function Uw(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function $w(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class ot {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const f = Mo(l);
      if (!f) throw new Error("header name must be a non-empty string");
      const d = C.findKey(o, f);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = ps(a));
    }
    const s = (a, l) => C.forEach(a, (u, f) => i(u, f, l));
    if (C.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (C.isString(t) && (t = t.trim()) && !Bw(t)) s(bw(t), n);
    else if (C.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Mo(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return zw(o);
        if (C.isFunction(n)) return n.call(this, o, r);
        if (C.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Mo(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || il(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Mo(s)), s)) {
        const a = C.findKey(r, s);
        a && (!n || il(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || il(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (o, i) => {
        const s = C.findKey(r, i);
        if (s) {
          (n[s] = ps(o)), delete n[i];
          return;
        }
        const a = t ? Uw(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = ps(o)), (r[a] = !0);
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
      C.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && C.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[wf] = this[wf] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = Mo(s);
      r[a] || ($w(o, s), (r[a] = !0));
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ot.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(ot.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(ot);
function sl(e, t) {
  const n = this || Oi,
    r = t || n,
    o = ot.from(r.headers);
  let i = r.data;
  return (
    C.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function $m(e) {
  return !!(e && e.__CANCEL__);
}
function Eo(e, t, n) {
  W.call(this, e ?? "canceled", W.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(Eo, W, { __CANCEL__: !0 });
function Hm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new W(
          "Request failed with status code " + n.status,
          [W.ERR_BAD_REQUEST, W.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Hw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Vw(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        f = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        c = 0;
      for (; d !== o; ) (c += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const h = f && u - f;
      return h ? Math.round((c * 1e3) / h) : void 0;
    }
  );
}
function Ww(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, f = Date.now()) => {
    (n = f), (o = null), i && (clearTimeout(i), (i = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const f = Date.now(),
        d = f - n;
      d >= r
        ? s(u, f)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              (i = null), s(o);
            }, r - d)));
    },
    () => o && s(o),
  ];
}
const Hs = (e, t, n = 3) => {
    let r = 0;
    const o = Vw(50, 250);
    return Ww((i) => {
      const s = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = s - r,
        u = o(l),
        f = s <= a;
      r = s;
      const d = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && f ? (a - s) / u : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Sf = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Ef =
    (e) =>
    (...t) =>
      C.asap(() => e(...t)),
  Qw = Ft.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
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
          (r = o(window.location.href)),
          function (s) {
            const a = C.isString(s) ? o(s) : s;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  qw = Ft.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && s.push("path=" + r),
            C.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Kw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vm(e, t) {
  return e && !Kw(t) ? Yw(e, t) : t;
}
const xf = (e) => (e instanceof ot ? { ...e } : e);
function hr(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, d) {
    return C.isPlainObject(u) && C.isPlainObject(f)
      ? C.merge.call({ caseless: d }, u, f)
      : C.isPlainObject(f)
      ? C.merge({}, f)
      : C.isArray(f)
      ? f.slice()
      : f;
  }
  function o(u, f, d) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, f, d);
  }
  function i(u, f) {
    if (!C.isUndefined(f)) return r(void 0, f);
  }
  function s(u, f) {
    if (C.isUndefined(f)) {
      if (!C.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, d) {
    if (d in t) return r(u, f);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, f) => o(xf(u), xf(f), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const d = l[f] || o,
        c = d(e[f], t[f], f);
      (C.isUndefined(c) && d !== a) || (n[f] = c);
    }),
    n
  );
}
const Wm = (e) => {
    const t = hr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = ot.from(s)),
      (t.url = zm(Vm(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (C.isFormData(n)) {
      if (Ft.hasStandardBrowserEnv || Ft.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [u, ...f] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...f].join("; "));
      }
    }
    if (
      Ft.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && Qw(t.url)))
    ) {
      const u = o && i && qw.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  Xw = typeof XMLHttpRequest < "u",
  Gw =
    Xw &&
    function (e) {
      return new Promise(function (n, r) {
        const o = Wm(e);
        let i = o.data;
        const s = ot.from(o.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = o,
          f,
          d,
          c,
          h,
          y;
        function g() {
          h && h(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(f),
            o.signal && o.signal.removeEventListener("abort", f);
        }
        let S = new XMLHttpRequest();
        S.open(o.method.toUpperCase(), o.url, !0), (S.timeout = o.timeout);
        function m() {
          if (!S) return;
          const v = ot.from(
              "getAllResponseHeaders" in S && S.getAllResponseHeaders()
            ),
            _ = {
              data:
                !a || a === "text" || a === "json"
                  ? S.responseText
                  : S.response,
              status: S.status,
              statusText: S.statusText,
              headers: v,
              config: e,
              request: S,
            };
          Hm(
            function (R) {
              n(R), g();
            },
            function (R) {
              r(R), g();
            },
            _
          ),
            (S = null);
        }
        "onloadend" in S
          ? (S.onloadend = m)
          : (S.onreadystatechange = function () {
              !S ||
                S.readyState !== 4 ||
                (S.status === 0 &&
                  !(S.responseURL && S.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (S.onabort = function () {
            S &&
              (r(new W("Request aborted", W.ECONNABORTED, e, S)), (S = null));
          }),
          (S.onerror = function () {
            r(new W("Network Error", W.ERR_NETWORK, e, S)), (S = null);
          }),
          (S.ontimeout = function () {
            let E = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = o.transitional || Bm;
            o.timeoutErrorMessage && (E = o.timeoutErrorMessage),
              r(
                new W(
                  E,
                  _.clarifyTimeoutError ? W.ETIMEDOUT : W.ECONNABORTED,
                  e,
                  S
                )
              ),
              (S = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in S &&
            C.forEach(s.toJSON(), function (E, _) {
              S.setRequestHeader(_, E);
            }),
          C.isUndefined(o.withCredentials) ||
            (S.withCredentials = !!o.withCredentials),
          a && a !== "json" && (S.responseType = o.responseType),
          u && (([c, y] = Hs(u, !0)), S.addEventListener("progress", c)),
          l &&
            S.upload &&
            (([d, h] = Hs(l)),
            S.upload.addEventListener("progress", d),
            S.upload.addEventListener("loadend", h)),
          (o.cancelToken || o.signal) &&
            ((f = (v) => {
              S &&
                (r(!v || v.type ? new Eo(null, e, S) : v),
                S.abort(),
                (S = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(f),
            o.signal &&
              (o.signal.aborted ? f() : o.signal.addEventListener("abort", f)));
        const p = Hw(o.url);
        if (p && Ft.protocols.indexOf(p) === -1) {
          r(new W("Unsupported protocol " + p + ":", W.ERR_BAD_REQUEST, e));
          return;
        }
        S.send(i || null);
      });
    },
  Jw = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (l) {
      if (!r) {
        (r = !0), s();
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof W ? u : new Eo(u instanceof Error ? u.message : u)
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        o(new W(`timeout ${t} of ms exceeded`, W.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", o)
              : l.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", o));
    const { signal: a } = n;
    return (
      (a.unsubscribe = s),
      [
        a,
        () => {
          i && clearTimeout(i), (i = null);
        },
      ]
    );
  },
  Zw = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  eS = async function* (e, t, n) {
    for await (const r of e)
      yield* Zw(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Cf = (e, t, n, r, o) => {
    const i = eS(e, t, o);
    let s = 0,
      a,
      l = (u) => {
        a || ((a = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: f, value: d } = await i.next();
            if (f) {
              l(), u.close();
              return;
            }
            let c = d.byteLength;
            if (n) {
              let h = (s += c);
              n(h);
            }
            u.enqueue(new Uint8Array(d));
          } catch (f) {
            throw (l(f), f);
          }
        },
        cancel(u) {
          return l(u), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Sa =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Qm = Sa && typeof ReadableStream == "function",
  au =
    Sa &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  qm = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  tS =
    Qm &&
    qm(() => {
      let e = !1;
      const t = new Request(Ft.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Tf = 64 * 1024,
  lu = Qm && qm(() => C.isReadableStream(new Response("").body)),
  Vs = { stream: lu && ((e) => e.body) };
Sa &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Vs[t] &&
        (Vs[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new W(
                `Response type '${t}' is not supported`,
                W.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const nS = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(e) || C.isArrayBuffer(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await au(e)).byteLength;
  },
  rS = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? nS(t);
  },
  oS =
    Sa &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: f,
        withCredentials: d = "same-origin",
        fetchOptions: c,
      } = Wm(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [h, y] = o || i || s ? Jw([o, i], s) : [],
        g,
        S;
      const m = () => {
        !g &&
          setTimeout(() => {
            h && h.unsubscribe();
          }),
          (g = !0);
      };
      let p;
      try {
        if (
          l &&
          tS &&
          n !== "get" &&
          n !== "head" &&
          (p = await rS(f, r)) !== 0
        ) {
          let k = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (C.isFormData(r) &&
              (R = k.headers.get("content-type")) &&
              f.setContentType(R),
            k.body)
          ) {
            const [x, B] = Sf(p, Hs(Ef(l)));
            r = Cf(k.body, Tf, x, B, au);
          }
        }
        C.isString(d) || (d = d ? "include" : "omit"),
          (S = new Request(t, {
            ...c,
            signal: h,
            method: n.toUpperCase(),
            headers: f.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: d,
          }));
        let v = await fetch(S);
        const E = lu && (u === "stream" || u === "response");
        if (lu && (a || E)) {
          const k = {};
          ["status", "statusText", "headers"].forEach((z) => {
            k[z] = v[z];
          });
          const R = C.toFiniteNumber(v.headers.get("content-length")),
            [x, B] = (a && Sf(R, Hs(Ef(a), !0))) || [];
          v = new Response(
            Cf(
              v.body,
              Tf,
              x,
              () => {
                B && B(), E && m();
              },
              au
            ),
            k
          );
        }
        u = u || "text";
        let _ = await Vs[C.findKey(Vs, u) || "text"](v, e);
        return (
          !E && m(),
          y && y(),
          await new Promise((k, R) => {
            Hm(k, R, {
              data: _,
              headers: ot.from(v.headers),
              status: v.status,
              statusText: v.statusText,
              config: e,
              request: S,
            });
          })
        );
      } catch (v) {
        throw (
          (m(),
          v && v.name === "TypeError" && /fetch/i.test(v.message)
            ? Object.assign(new W("Network Error", W.ERR_NETWORK, e, S), {
                cause: v.cause || v,
              })
            : W.from(v, v && v.code, e, S))
        );
      }
    }),
  uu = { http: Ew, xhr: Gw, fetch: oS };
C.forEach(uu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _f = (e) => `- ${e}`,
  iS = (e) => C.isFunction(e) || e === null || e === !1,
  Km = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !iS(n) && ((r = uu[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new W(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
  ` +
              i.map(_f).join(`
  `)
            : " " + _f(i[0])
          : "as no adapter specified";
        throw new W(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: uu,
  };
function al(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Eo(null, e);
}
function Pf(e) {
  return (
    al(e),
    (e.headers = ot.from(e.headers)),
    (e.data = sl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Km.getAdapter(e.adapter || Oi.adapter)(e).then(
      function (r) {
        return (
          al(e),
          (r.data = sl.call(e, e.transformResponse, r)),
          (r.headers = ot.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          $m(r) ||
            (al(e),
            r &&
              r.response &&
              ((r.response.data = sl.call(e, e.transformResponse, r.response)),
              (r.response.headers = ot.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ym = "1.7.3",
  Rc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Rc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Rf = {};
Rc.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      Ym +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new W(
        o(s, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return (
      n &&
        !Rf[s] &&
        ((Rf[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function sS(e, t, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new W("option " + i + " must be " + l, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new W("Unknown option " + i, W.ERR_BAD_OPTION);
  }
}
const cu = { assertOptions: sS, validators: Rc },
  fn = cu.validators;
class sr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new gf(), response: new gf() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
  ` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      cu.assertOptions(
        r,
        {
          silentJSONParsing: fn.transitional(fn.boolean),
          forcedJSONParsing: fn.transitional(fn.boolean),
          clarifyTimeoutError: fn.transitional(fn.boolean),
        },
        !1
      ),
      o != null &&
        (C.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : cu.assertOptions(
              o,
              { encode: fn.function, serialize: fn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && C.merge(i.common, i[n.method]);
    i &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = ot.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let f,
      d = 0,
      c;
    if (!l) {
      const y = [Pf.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, u),
          c = y.length,
          f = Promise.resolve(n);
        d < c;

      )
        f = f.then(y[d++], y[d++]);
      return f;
    }
    c = a.length;
    let h = n;
    for (d = 0; d < c; ) {
      const y = a[d++],
        g = a[d++];
      try {
        h = y(h);
      } catch (S) {
        g.call(this, S);
        break;
      }
    }
    try {
      f = Pf.call(this, h);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, c = u.length; d < c; ) f = f.then(u[d++], u[d++]);
    return f;
  }
  getUri(t) {
    t = hr(this.defaults, t);
    const n = Vm(t.baseURL, t.url);
    return zm(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  sr.prototype[t] = function (n, r) {
    return this.request(
      hr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        hr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (sr.prototype[t] = n()), (sr.prototype[t + "Form"] = n(!0));
});
class kc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Eo(i, s, a)), n(r.reason));
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
      token: new kc(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function aS(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function lS(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const du = {
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
Object.entries(du).forEach(([e, t]) => {
  du[t] = e;
});
function Xm(e) {
  const t = new sr(e),
    n = Rm(sr.prototype.request, t);
  return (
    C.extend(n, sr.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Xm(hr(e, o));
    }),
    n
  );
}
const Ce = Xm(Oi);
Ce.Axios = sr;
Ce.CanceledError = Eo;
Ce.CancelToken = kc;
Ce.isCancel = $m;
Ce.VERSION = Ym;
Ce.toFormData = wa;
Ce.AxiosError = W;
Ce.Cancel = Ce.CanceledError;
Ce.all = function (t) {
  return Promise.all(t);
};
Ce.spread = aS;
Ce.isAxiosError = lS;
Ce.mergeConfig = hr;
Ce.AxiosHeaders = ot;
Ce.formToJSON = (e) => Um(C.isHTMLForm(e) ? new FormData(e) : e);
Ce.getAdapter = Km.getAdapter;
Ce.HttpStatusCode = du;
Ce.default = Ce;
const Ws = {
  getConfig: async () => {
    const e = await Ae.get("/admin/config", {
      headers: { Authorization: localStorage.getItem("token") || "" },
    }).catch(() => null);
    return e == null || e.data === null || e.status !== 200 || !e.data
      ? (ve.error("Failed to fetch config data."), "")
      : JSON.stringify(e.data, null, 2);
  },
  getConfigJSON: async () => {
    const e = await Ae.get("/admin/config", {
      headers: { Authorization: localStorage.getItem("token") || "" },
    }).catch(() => null);
    return e == null || e.data === null || e.status !== 200 || !e.data
      ? (ve.error("Failed to fetch config data."), null)
      : e.data;
  },
  setConfig: async (e) => {
    const t = await Ae.post("/admin/config", e, {
      headers: { Authorization: localStorage.getItem("token") || "" },
    }).catch(() => null);
    return t == null || t.status !== 200
      ? (ve.error("Failed to save hotfix data."), [{}, !1])
      : [t.data, !0];
  },
  getEvents: async () => {
    const e = await Ae.get("/admin/config", {
      headers: { Authorization: localStorage.getItem("token") || "" },
    }).catch(() => null);
    return e == null || e.data === null || e.status !== 200 || !e.data
      ? (ve.error("Failed to fetch config data."), [[], !1])
      : "Events" in e.data
      ? [e.data.Events, !0]
      : (ve.error("Failed to fetch events"), [[], !1]);
  },
  getEventsInformation: async () => {
    const e = await Ae.get("/admin/config", {
      headers: { Authorization: localStorage.getItem("token") || "" },
    }).catch(() => null);
    return e == null || e.data === null || e.status !== 200 || !e.data
      ? (ve.error("Failed to fetch config data."), [[], !1])
      : "TournamentInformation" in e.data
      ? [e.data.TournamentInformation, !0]
      : (ve.error("Failed to fetch events"), [[], !1]);
  },
};
Ce.create({ baseURL: "https://retrac.site/" });
const uS = Ce.create({ baseURL: "https://retrac.site/" }),
  Ae = uS,
  Oc = {
    discord: async () => {
      const e = await Ae.get("/retrac/discord?panel=true").catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? [
            (e == null ? void 0 : e.data) ||
              "Failed to fetch Discord Authentication URL.",
            !1,
          ]
        : [e.data, !0];
    },
    adminTestAccess: async (e) => {
      const t = await Ae.get("/admin/access", {
        headers: { Authorization: e },
      }).catch(() => null);
      return t == null || t.data === null || t.status !== 200 || !t.data
        ? [
            (t == null ? void 0 : t.data) ||
              "You are not authorized to access this page.",
            !1,
          ]
        : [t.data, !0];
    },
    getAllRetracCosmetics: async () => {
      const e = await Ae.get("/retrac/data").catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? (ve.error("Failed to fetch Retrac cosmetics data."),
          [(e == null ? void 0 : e.data) || { cosmetics: {}, sets: {} }, !1])
        : [e.data, !0];
    },
    saveCatalog: async (e) => {
      const t = await Ae.post(
        "/admin/storefronts/",
        { catalog: e },
        { headers: { Authorization: localStorage.getItem("token") || "" } }
      ).catch(() => null);
      return t == null || t.data === null || t.status !== 200 || !t.data
        ? (ve.error("Failed to save storefrot."), null)
        : t.data;
    },
    saveEvent: async (e, t) => {
      const n = await Ws.getConfigJSON();
      if (!n) return ve.error("failed to fetch config"), null;
      if (!("Events" in n)) return ve.error("Failed to fetch events"), null;
      if (!("TournamentInformation" in n))
        return ve.error("Failed to fetch TournamentInformation"), null;
      const r = n.Events,
        o = n.TournamentInformation,
        i = r.map((l) => (l.ID == e.ID ? e : l)),
        s = o.map((l) =>
          l.tournament_display_id == t.tournament_display_id ? t : l
        );
      return (
        await Ws.setConfig({ ...n, Events: i, TournamentInformation: s })
      )[1]
        ? { event: e, style: t }
        : (ve.error("Failed to set config"), null);
    },
  },
  Lc = {
    getDates: async () => {
      const e = await Ae.get("/admin/storefronts", {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? (ve.error("Failed to fetch storefront dates."), [[], !1])
        : [e.data, !0];
    },
    getStorefrontForDate: async (e) => {
      const t = await Ae.get(`/admin/storefronts/${e}`, {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return t == null || t.data === null || t.status !== 200 || !t.data
        ? (ve.error(`Failed to fetch storefront for date, ${e}.`),
          [{ Date: "", Storefronts: [] }, !1])
        : [t.data, !0];
    },
    getPublicStorefront: async () => {
      const e = await Ae.get("/shop/today").catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? (ve.error("Failed to get the public storefront."),
          [{ Date: "", Storefronts: [] }, !1])
        : [e.data, !0];
    },
  },
  cS = {
    getHotfixes: async () => {
      const e = await Ae.get("/admin/hotfixes", {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? (ve.error("Failed to fetch hotfixes."), [[], !1])
        : [e.data, !0];
    },
    getHotfixData: async (e) => {
      const t = await Ae.get(`/admin/hotfixes/${e}`, {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return t == null || t.data === null || t.status !== 200 || !t.data
        ? (ve.error("Failed to fetch hotfix data."), "")
        : t.data;
    },
    setHotfixData: async (e, t) => {
      const n = await Ae.post(`/admin/hotfixes/${e}`, t, {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return n == null || n.status !== 204
        ? (ve.error("Failed to save hotfix data."), !1)
        : !0;
    },
  },
  dS = {
    getServers: async () => {
      const e = await Ae.get("/admin/servers", {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return e == null || e.data === null || e.status !== 200 || !e.data
        ? (ve.error("Failed to fetch servers."), [[], !1])
        : [e.data.buckets, !0];
    },
    deleteServer: async (e) => {
      const t = await Ae.delete(`/admin/servers/${e}`, {
        headers: { Authorization: localStorage.getItem("token") || "" },
      }).catch(() => null);
      return t == null || t.status !== 204
        ? (ve.error("Failed to delete server."), !1)
        : !0;
    },
  },
  fS = async () => {
    const e = localStorage.getItem("token");
    if (!e) return localStorage.getItem("token") || "";
    const [t, n] = await Oc.adminTestAccess(e);
    return n
      ? e
      : (ve.error("Failed to authenticate, please log in again."),
        localStorage.removeItem("token"),
        "");
  },
  Tx = async () => {
    const [e] = await Lc.getDates();
    return e.reverse();
  },
  _x = async (e) => {
    const [t] = await Lc.getStorefrontForDate(e);
    return {
      ...t,
      Storefronts: t.Storefronts.map((n) => ({
        ...n,
        DBMtxOffers: n.DBMtxOffers.map((r, o) => ({
          ...r,
          Meta: { ...r.Meta, Category: o.toString() },
        })),
      })),
    };
  },
  hS = async () => {
    const [e] = await Lc.getPublicStorefront();
    return {
      ...e,
      Storefronts: e.Storefronts.map((t) => ({
        ...t,
        DBMtxOffers: t.DBMtxOffers.map((n, r) => ({
          ...n,
          Meta: { ...n.Meta, Category: r.toString() },
        })),
      })),
    };
  },
  Gm = async () => {
    const [e] = await Oc.getAllRetracCosmetics();
    return e;
  },
  Px = async () => {
    const [e, t] = await cS.getHotfixes();
    return t ? e : [];
  },
  Rx = async () => {
    const [e, t] = await dS.getServers();
    return t ? e : [];
  },
  kx = async () => {
    const [e, t] = await Ws.getEvents();
    return t ? e : [];
  },
  Ox = async () => {
    const [e, t] = await Ws.getEventsInformation();
    return t ? e : [];
  };
var Li = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  mo = typeof window > "u" || "Deno" in globalThis;
function gt() {}
function pS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fu(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Jm(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kf(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Mc(s, t.options)) return !1;
    } else if (!yi(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Of(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (vi(t.options.mutationKey) !== vi(i)) return !1;
    } else if (!yi(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Mc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || vi)(e);
}
function vi(e) {
  return JSON.stringify(e, (t, n) =>
    pu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function yi(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !yi(e[n], t[n]))
    : !1;
}
function Zm(e, t) {
  if (e === t) return e;
  const n = Lf(e) && Lf(t);
  if (n || (pu(e) && pu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < s; u++) {
      const f = n ? u : i[u];
      ((!n && r.includes(f)) || n) && e[f] === void 0 && t[f] === void 0
        ? ((a[f] = void 0), l++)
        : ((a[f] = Zm(e[f], t[f])), a[f] === e[f] && e[f] !== void 0 && l++);
    }
    return o === s && l === o ? e : a;
  }
  return t;
}
function hu(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Lf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function pu(e) {
  if (!Mf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Mf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Mf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function mS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function mu(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Zm(e, t)
    : t;
}
function vS(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function yS(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ev = Symbol();
function tv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ev
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Gn,
  gn,
  Wr,
  Wf,
  gS =
    ((Wf = class extends Li {
      constructor() {
        super();
        $(this, Gn);
        $(this, gn);
        $(this, Wr);
        b(this, Wr, (t) => {
          if (!mo && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, gn) || this.setEventListener(w(this, Wr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = w(this, gn)) == null || t.call(this), b(this, gn, void 0));
      }
      setEventListener(t) {
        var n;
        b(this, Wr, t),
          (n = w(this, gn)) == null || n.call(this),
          b(
            this,
            gn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        w(this, Gn) !== t && (b(this, Gn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof w(this, Gn) == "boolean"
          ? w(this, Gn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Gn = new WeakMap()),
    (gn = new WeakMap()),
    (Wr = new WeakMap()),
    Wf),
  Nc = new gS(),
  Qr,
  wn,
  qr,
  Qf,
  wS =
    ((Qf = class extends Li {
      constructor() {
        super();
        $(this, Qr, !0);
        $(this, wn);
        $(this, qr);
        b(this, qr, (t) => {
          if (!mo && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, wn) || this.setEventListener(w(this, qr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = w(this, wn)) == null || t.call(this), b(this, wn, void 0));
      }
      setEventListener(t) {
        var n;
        b(this, qr, t),
          (n = w(this, wn)) == null || n.call(this),
          b(this, wn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        w(this, Qr) !== t &&
          (b(this, Qr, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return w(this, Qr);
      }
    }),
    (Qr = new WeakMap()),
    (wn = new WeakMap()),
    (qr = new WeakMap()),
    Qf),
  Qs = new wS();
function SS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function nv(e) {
  return (e ?? "online") === "online" ? Qs.isOnline() : !0;
}
var rv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function ll(e) {
  return e instanceof rv;
}
function ov(e) {
  let t = !1,
    n = 0,
    r = !1,
    o,
    i,
    s;
  const a = new Promise((m, p) => {
      (i = m), (s = p);
    }),
    l = (m) => {
      var p;
      r || (y(new rv(m)), (p = e.abort) == null || p.call(e));
    },
    u = () => {
      t = !0;
    },
    f = () => {
      t = !1;
    },
    d = () =>
      Nc.isFocused() &&
      (e.networkMode === "always" || Qs.isOnline()) &&
      e.canRun(),
    c = () => nv(e.networkMode) && e.canRun(),
    h = (m) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onSuccess) == null || p.call(e, m),
        o == null || o(),
        i(m));
    },
    y = (m) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onError) == null || p.call(e, m),
        o == null || o(),
        s(m));
    },
    g = () =>
      new Promise((m) => {
        var p;
        (o = (v) => {
          (r || d()) && m(v);
        }),
          (p = e.onPause) == null || p.call(e);
      }).then(() => {
        var m;
        (o = void 0), r || (m = e.onContinue) == null || m.call(e);
      }),
    S = () => {
      if (r) return;
      let m;
      const p = n === 0 ? e.initialPromise : void 0;
      try {
        m = p ?? e.fn();
      } catch (v) {
        m = Promise.reject(v);
      }
      Promise.resolve(m)
        .then(h)
        .catch((v) => {
          var x;
          if (r) return;
          const E = e.retry ?? (mo ? 0 : 3),
            _ = e.retryDelay ?? SS,
            k = typeof _ == "function" ? _(n, v) : _,
            R =
              E === !0 ||
              (typeof E == "number" && n < E) ||
              (typeof E == "function" && E(n, v));
          if (t || !R) {
            y(v);
            return;
          }
          n++,
            (x = e.onFail) == null || x.call(e, n, v),
            mS(k)
              .then(() => (d() ? void 0 : g()))
              .then(() => {
                t ? y(v) : S();
              });
        });
    };
  return {
    promise: a,
    cancel: l,
    continue: () => (o == null || o(), a),
    cancelRetry: u,
    continueRetry: f,
    canStart: c,
    start: () => (c() ? S() : g().then(S), a),
  };
}
function ES() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    },
    o = (c) => setTimeout(c, 0);
  const i = (c) => {
      o = c;
    },
    s = (c) => {
      let h;
      t++;
      try {
        h = c();
      } finally {
        t--, t || u();
      }
      return h;
    },
    a = (c) => {
      t
        ? e.push(c)
        : o(() => {
            n(c);
          });
    },
    l =
      (c) =>
      (...h) => {
        a(() => {
          c(...h);
        });
      },
    u = () => {
      const c = e;
      (e = []),
        c.length &&
          o(() => {
            r(() => {
              c.forEach((h) => {
                n(h);
              });
            });
          });
    };
  return {
    batch: s,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    },
    setScheduler: i,
  };
}
var Ie = ES(),
  Jn,
  qf,
  iv =
    ((qf = class {
      constructor() {
        $(this, Jn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          fu(this.gcTime) &&
            b(
              this,
              Jn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (mo ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        w(this, Jn) && (clearTimeout(w(this, Jn)), b(this, Jn, void 0));
      }
    }),
    (Jn = new WeakMap()),
    qf),
  Kr,
  Yr,
  yt,
  ze,
  wi,
  Zn,
  kt,
  Jt,
  Kf,
  xS =
    ((Kf = class extends iv {
      constructor(t) {
        super();
        $(this, kt);
        $(this, Kr);
        $(this, Yr);
        $(this, yt);
        $(this, ze);
        $(this, wi);
        $(this, Zn);
        b(this, Zn, !1),
          b(this, wi, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          b(this, yt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          b(this, Kr, CS(this.options)),
          (this.state = t.state ?? w(this, Kr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = w(this, ze)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...w(this, wi), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          w(this, yt).remove(this);
      }
      setData(t, n) {
        const r = mu(this.state.data, t, this.options);
        return (
          X(this, kt, Jt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        X(this, kt, Jt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = w(this, ze)) == null ? void 0 : r.promise;
        return (
          (o = w(this, ze)) == null || o.cancel(t),
          n ? n.then(gt).catch(gt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(w(this, Kr));
      }
      isActive() {
        return this.observers.some((t) => Mt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Jm(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = w(this, ze)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = w(this, ze)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          w(this, yt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (w(this, ze) &&
              (w(this, Zn)
                ? w(this, ze).cancel({ revert: !0 })
                : w(this, ze).cancelRetry()),
            this.scheduleGc()),
          w(this, yt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          X(this, kt, Jt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, f;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (w(this, ze))
            return w(this, ze).continueRetry(), w(this, ze).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((c) => c.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          o = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (b(this, Zn, !0), r.signal),
            });
          },
          i = () => {
            const d = tv(this.options, n),
              c = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(c),
              b(this, Zn, !1),
              this.options.persister ? this.options.persister(d, c, this) : d(c)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (l = this.options.behavior) == null || l.onFetch(s, this),
          b(this, Yr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            X(this, kt, Jt).call(this, {
              type: "fetch",
              meta: (f = s.fetchOptions) == null ? void 0 : f.meta,
            });
        const a = (d) => {
          var c, h, y, g;
          (ll(d) && d.silent) ||
            X(this, kt, Jt).call(this, { type: "error", error: d }),
            ll(d) ||
              ((h = (c = w(this, yt).config).onError) == null ||
                h.call(c, d, this),
              (g = (y = w(this, yt).config).onSettled) == null ||
                g.call(y, this.state.data, d, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          b(
            this,
            ze,
            ov({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var c, h, y, g;
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(d),
                  (h = (c = w(this, yt).config).onSuccess) == null ||
                    h.call(c, d, this),
                  (g = (y = w(this, yt).config).onSettled) == null ||
                    g.call(y, d, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: a,
              onFail: (d, c) => {
                X(this, kt, Jt).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: c,
                });
              },
              onPause: () => {
                X(this, kt, Jt).call(this, { type: "pause" });
              },
              onContinue: () => {
                X(this, kt, Jt).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          w(this, ze).start()
        );
      }
    }),
    (Kr = new WeakMap()),
    (Yr = new WeakMap()),
    (yt = new WeakMap()),
    (ze = new WeakMap()),
    (wi = new WeakMap()),
    (Zn = new WeakMap()),
    (kt = new WeakSet()),
    (Jt = function (t) {
      const n = (r) => {
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
              ...sv(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
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
            return ll(o) && o.revert && w(this, Yr)
              ? { ...w(this, Yr), fetchStatus: "idle" }
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
        Ie.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            w(this, yt).notify({ query: this, type: "updated", action: t });
        });
    }),
    Kf);
function sv(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: nv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function CS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
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
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Vt,
  Yf,
  TS =
    ((Yf = class extends Li {
      constructor(t = {}) {
        super();
        $(this, Vt);
        (this.config = t), b(this, Vt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? Mc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new xS({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        w(this, Vt).has(t.queryHash) ||
          (w(this, Vt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = w(this, Vt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && w(this, Vt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return w(this, Vt).get(t);
      }
      getAll() {
        return [...w(this, Vt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => kf(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => kf(t, r)) : n;
      }
      notify(t) {
        Ie.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Vt = new WeakMap()),
    Yf),
  Wt,
  He,
  er,
  Qt,
  hn,
  Xf,
  _S =
    ((Xf = class extends iv {
      constructor(t) {
        super();
        $(this, Qt);
        $(this, Wt);
        $(this, He);
        $(this, er);
        (this.mutationId = t.mutationId),
          b(this, He, t.mutationCache),
          b(this, Wt, []),
          (this.state = t.state || PS()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        w(this, Wt).includes(t) ||
          (w(this, Wt).push(t),
          this.clearGcTimeout(),
          w(this, He).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        b(
          this,
          Wt,
          w(this, Wt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          w(this, He).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        w(this, Wt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : w(this, He).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = w(this, er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, a, l, u, f, d, c, h, y, g, S, m, p, v, E, _, k, R;
        b(
          this,
          er,
          ov({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (x, B) => {
              X(this, Qt, hn).call(this, {
                type: "failed",
                failureCount: x,
                error: B,
              });
            },
            onPause: () => {
              X(this, Qt, hn).call(this, { type: "pause" });
            },
            onContinue: () => {
              X(this, Qt, hn).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => w(this, He).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !w(this, er).canStart();
        try {
          if (!n) {
            X(this, Qt, hn).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = w(this, He).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const B = await ((a = (s = this.options).onMutate) == null
              ? void 0
              : a.call(s, t));
            B !== this.state.context &&
              X(this, Qt, hn).call(this, {
                type: "pending",
                context: B,
                variables: t,
                isPaused: r,
              });
          }
          const x = await w(this, er).start();
          return (
            await ((u = (l = w(this, He).config).onSuccess) == null
              ? void 0
              : u.call(l, x, t, this.state.context, this)),
            await ((d = (f = this.options).onSuccess) == null
              ? void 0
              : d.call(f, x, t, this.state.context)),
            await ((h = (c = w(this, He).config).onSettled) == null
              ? void 0
              : h.call(
                  c,
                  x,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((g = (y = this.options).onSettled) == null
              ? void 0
              : g.call(y, x, null, t, this.state.context)),
            X(this, Qt, hn).call(this, { type: "success", data: x }),
            x
          );
        } catch (x) {
          try {
            throw (
              (await ((m = (S = w(this, He).config).onError) == null
                ? void 0
                : m.call(S, x, t, this.state.context, this)),
              await ((v = (p = this.options).onError) == null
                ? void 0
                : v.call(p, x, t, this.state.context)),
              await ((_ = (E = w(this, He).config).onSettled) == null
                ? void 0
                : _.call(
                    E,
                    void 0,
                    x,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (k = this.options).onSettled) == null
                ? void 0
                : R.call(k, void 0, x, t, this.state.context)),
              x)
            );
          } finally {
            X(this, Qt, hn).call(this, { type: "error", error: x });
          }
        } finally {
          w(this, He).runNext(this);
        }
      }
    }),
    (Wt = new WeakMap()),
    (He = new WeakMap()),
    (er = new WeakMap()),
    (Qt = new WeakSet()),
    (hn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
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
        }
      };
      (this.state = n(this.state)),
        Ie.batch(() => {
          w(this, Wt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            w(this, He).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Xf);
function PS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var it,
  Si,
  Gf,
  RS =
    ((Gf = class extends Li {
      constructor(t = {}) {
        super();
        $(this, it);
        $(this, Si);
        (this.config = t), b(this, it, new Map()), b(this, Si, Date.now());
      }
      build(t, n, r) {
        const o = new _S({
          mutationCache: this,
          mutationId: ++Ii(this, Si)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = es(t),
          r = w(this, it).get(n) ?? [];
        r.push(t),
          w(this, it).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = es(t);
        if (w(this, it).has(n)) {
          const o =
            (r = w(this, it).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? w(this, it).delete(n) : w(this, it).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = w(this, it).get(es(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = w(this, it).get(es(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Ie.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...w(this, it).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Of(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Of(t, n));
      }
      notify(t) {
        Ie.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ie.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(gt)))
        );
      }
    }),
    (it = new WeakMap()),
    (Si = new WeakMap()),
    Gf);
function es(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function kS(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var y, g, S, m, p;
        const o = t.options,
          i =
            (S =
              (g = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
                ? void 0
                : g.fetchMore) == null
              ? void 0
              : S.direction,
          s = ((m = t.state.data) == null ? void 0 : m.pages) || [],
          a = ((p = t.state.data) == null ? void 0 : p.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const f = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          d = tv(t.options, t.fetchOptions),
          c = async (v, E, _) => {
            if (u) return Promise.reject();
            if (E == null && v.pages.length) return Promise.resolve(v);
            const k = {
              queryKey: t.queryKey,
              pageParam: E,
              direction: _ ? "backward" : "forward",
              meta: t.options.meta,
            };
            f(k);
            const R = await d(k),
              { maxPages: x } = t.options,
              B = _ ? yS : vS;
            return {
              pages: B(v.pages, R, x),
              pageParams: B(v.pageParams, E, x),
            };
          };
        let h;
        if (i && s.length) {
          const v = i === "backward",
            E = v ? OS : Nf,
            _ = { pages: s, pageParams: a },
            k = E(o, _);
          h = await c(_, k, v);
        } else {
          h = await c(l, a[0] ?? o.initialPageParam);
          const v = e ?? s.length;
          for (let E = 1; E < v; E++) {
            const _ = Nf(o, h);
            if (_ == null) break;
            h = await c(h, _);
          }
        }
        return h;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var o, i;
            return (i = (o = t.options).persister) == null
              ? void 0
              : i.call(
                  o,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function Nf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function OS(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Se,
  Sn,
  En,
  Xr,
  Gr,
  xn,
  Jr,
  Zr,
  Jf,
  LS =
    ((Jf = class {
      constructor(e = {}) {
        $(this, Se);
        $(this, Sn);
        $(this, En);
        $(this, Xr);
        $(this, Gr);
        $(this, xn);
        $(this, Jr);
        $(this, Zr);
        b(this, Se, e.queryCache || new TS()),
          b(this, Sn, e.mutationCache || new RS()),
          b(this, En, e.defaultOptions || {}),
          b(this, Xr, new Map()),
          b(this, Gr, new Map()),
          b(this, xn, 0);
      }
      mount() {
        Ii(this, xn)._++,
          w(this, xn) === 1 &&
            (b(
              this,
              Jr,
              Nc.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), w(this, Se).onFocus());
              })
            ),
            b(
              this,
              Zr,
              Qs.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), w(this, Se).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Ii(this, xn)._--,
          w(this, xn) === 0 &&
            ((e = w(this, Jr)) == null || e.call(this),
            b(this, Jr, void 0),
            (t = w(this, Zr)) == null || t.call(this),
            b(this, Zr, void 0));
      }
      isFetching(e) {
        return w(this, Se).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return w(this, Sn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = w(this, Se).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = w(this, Se).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Hr(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return w(this, Se)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = w(this, Se).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = pS(t, i);
        if (s !== void 0)
          return w(this, Se)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ie.batch(() =>
          w(this, Se)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = w(this, Se).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = w(this, Se);
        Ie.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = w(this, Se),
          r = { type: "active", ...e };
        return Ie.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Ie.batch(() =>
            w(this, Se)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(gt).catch(gt);
      }
      invalidateQueries(e = {}, t = {}) {
        return Ie.batch(() => {
          if (
            (w(this, Se)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Ie.batch(() =>
            w(this, Se)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(gt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(gt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = w(this, Se).build(this, t);
        return n.isStaleByTime(Hr(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(gt).catch(gt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = kS(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(gt).catch(gt);
      }
      resumePausedMutations() {
        return Qs.isOnline()
          ? w(this, Sn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return w(this, Se);
      }
      getMutationCache() {
        return w(this, Sn);
      }
      getDefaultOptions() {
        return w(this, En);
      }
      setDefaultOptions(e) {
        b(this, En, e);
      }
      setQueryDefaults(e, t) {
        w(this, Xr).set(vi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...w(this, Xr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            yi(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        w(this, Gr).set(vi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...w(this, Gr).values()];
        let n = {};
        return (
          t.forEach((r) => {
            yi(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...w(this, En).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Mc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === ev && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...w(this, En).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        w(this, Se).clear(), w(this, Sn).clear();
      }
    }),
    (Se = new WeakMap()),
    (Sn = new WeakMap()),
    (En = new WeakMap()),
    (Xr = new WeakMap()),
    (Gr = new WeakMap()),
    (xn = new WeakMap()),
    (Jr = new WeakMap()),
    (Zr = new WeakMap()),
    Jf),
  Xe,
  G,
  Ei,
  Ve,
  tr,
  eo,
  qt,
  xi,
  to,
  no,
  nr,
  rr,
  Cn,
  ro,
  ee,
  bo,
  vu,
  yu,
  gu,
  wu,
  Su,
  Eu,
  xu,
  av,
  Zf,
  MS =
    ((Zf = class extends Li {
      constructor(t, n) {
        super();
        $(this, ee);
        $(this, Xe);
        $(this, G);
        $(this, Ei);
        $(this, Ve);
        $(this, tr);
        $(this, eo);
        $(this, qt);
        $(this, xi);
        $(this, to);
        $(this, no);
        $(this, nr);
        $(this, rr);
        $(this, Cn);
        $(this, ro, new Set());
        (this.options = n),
          b(this, Xe, t),
          b(this, qt, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (w(this, G).addObserver(this),
          If(w(this, G), this.options)
            ? X(this, ee, bo).call(this)
            : this.updateResult(),
          X(this, ee, wu).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Cu(w(this, G), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Cu(w(this, G), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          X(this, ee, Su).call(this),
          X(this, ee, Eu).call(this),
          w(this, G).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          o = w(this, G);
        if (
          ((this.options = w(this, Xe).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Mt(this.options.enabled, w(this, G)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        X(this, ee, xu).call(this),
          w(this, G).setOptions(this.options),
          r._defaulted &&
            !hu(this.options, r) &&
            w(this, Xe)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: w(this, G),
                observer: this,
              });
        const i = this.hasListeners();
        i && Af(w(this, G), o, this.options, r) && X(this, ee, bo).call(this),
          this.updateResult(n),
          i &&
            (w(this, G) !== o ||
              Mt(this.options.enabled, w(this, G)) !==
                Mt(r.enabled, w(this, G)) ||
              Hr(this.options.staleTime, w(this, G)) !==
                Hr(r.staleTime, w(this, G))) &&
            X(this, ee, vu).call(this);
        const s = X(this, ee, yu).call(this);
        i &&
          (w(this, G) !== o ||
            Mt(this.options.enabled, w(this, G)) !==
              Mt(r.enabled, w(this, G)) ||
            s !== w(this, Cn)) &&
          X(this, ee, gu).call(this, s);
      }
      getOptimisticResult(t) {
        const n = w(this, Xe).getQueryCache().build(w(this, Xe), t),
          r = this.createResult(n, t);
        return (
          IS(this, r) &&
            (b(this, Ve, r),
            b(this, eo, this.options),
            b(this, tr, w(this, G).state)),
          r
        );
      }
      getCurrentResult() {
        return w(this, Ve);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((o) => {
            Object.defineProperty(r, o, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(o), n == null || n(o), t[o]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        w(this, ro).add(t);
      }
      getCurrentQuery() {
        return w(this, G);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = w(this, Xe).defaultQueryOptions(t),
          r = w(this, Xe).getQueryCache().build(w(this, Xe), n);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, n))
        );
      }
      fetch(t) {
        return X(this, ee, bo)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), w(this, Ve)));
      }
      createResult(t, n) {
        var R;
        const r = w(this, G),
          o = this.options,
          i = w(this, Ve),
          s = w(this, tr),
          a = w(this, eo),
          u = t !== r ? t.state : w(this, Ei),
          { state: f } = t;
        let d = { ...f },
          c = !1,
          h;
        if (n._optimisticResults) {
          const x = this.hasListeners(),
            B = !x && If(t, n),
            z = x && Af(t, r, n, o);
          (B || z) && (d = { ...d, ...sv(f.data, t.options) }),
            n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: y, errorUpdatedAt: g, status: S } = d;
        if (n.select && d.data !== void 0)
          if (
            i &&
            d.data === (s == null ? void 0 : s.data) &&
            n.select === w(this, xi)
          )
            h = w(this, to);
          else
            try {
              b(this, xi, n.select),
                (h = n.select(d.data)),
                (h = mu(i == null ? void 0 : i.data, h, n)),
                b(this, to, h),
                b(this, qt, null);
            } catch (x) {
              b(this, qt, x);
            }
        else h = d.data;
        if (n.placeholderData !== void 0 && h === void 0 && S === "pending") {
          let x;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            x = i.data;
          else if (
            ((x =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (R = w(this, no)) == null ? void 0 : R.state.data,
                    w(this, no)
                  )
                : n.placeholderData),
            n.select && x !== void 0)
          )
            try {
              (x = n.select(x)), b(this, qt, null);
            } catch (B) {
              b(this, qt, B);
            }
          x !== void 0 &&
            ((S = "success"),
            (h = mu(i == null ? void 0 : i.data, x, n)),
            (c = !0));
        }
        w(this, qt) &&
          ((y = w(this, qt)),
          (h = w(this, to)),
          (g = Date.now()),
          (S = "error"));
        const m = d.fetchStatus === "fetching",
          p = S === "pending",
          v = S === "error",
          E = p && m,
          _ = h !== void 0;
        return {
          status: S,
          fetchStatus: d.fetchStatus,
          isPending: p,
          isSuccess: S === "success",
          isError: v,
          isInitialLoading: E,
          isLoading: E,
          data: h,
          dataUpdatedAt: d.dataUpdatedAt,
          error: y,
          errorUpdatedAt: g,
          failureCount: d.fetchFailureCount,
          failureReason: d.fetchFailureReason,
          errorUpdateCount: d.errorUpdateCount,
          isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
          isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount ||
            d.errorUpdateCount > u.errorUpdateCount,
          isFetching: m,
          isRefetching: m && !p,
          isLoadingError: v && !_,
          isPaused: d.fetchStatus === "paused",
          isPlaceholderData: c,
          isRefetchError: v && _,
          isStale: Ic(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = w(this, Ve),
          r = this.createResult(w(this, G), this.options);
        if (
          (b(this, tr, w(this, G).state),
          b(this, eo, this.options),
          w(this, tr).data !== void 0 && b(this, no, w(this, G)),
          hu(r, n))
        )
          return;
        b(this, Ve, r);
        const o = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: s } = this.options,
              a = typeof s == "function" ? s() : s;
            if (a === "all" || (!a && !w(this, ro).size)) return !0;
            const l = new Set(a ?? w(this, ro));
            return (
              this.options.throwOnError && l.add("error"),
              Object.keys(w(this, Ve)).some((u) => {
                const f = u;
                return w(this, Ve)[f] !== n[f] && l.has(f);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0),
          X(this, ee, av).call(this, { ...o, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && X(this, ee, wu).call(this);
      }
    }),
    (Xe = new WeakMap()),
    (G = new WeakMap()),
    (Ei = new WeakMap()),
    (Ve = new WeakMap()),
    (tr = new WeakMap()),
    (eo = new WeakMap()),
    (qt = new WeakMap()),
    (xi = new WeakMap()),
    (to = new WeakMap()),
    (no = new WeakMap()),
    (nr = new WeakMap()),
    (rr = new WeakMap()),
    (Cn = new WeakMap()),
    (ro = new WeakMap()),
    (ee = new WeakSet()),
    (bo = function (t) {
      X(this, ee, xu).call(this);
      let n = w(this, G).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(gt)), n;
    }),
    (vu = function () {
      X(this, ee, Su).call(this);
      const t = Hr(this.options.staleTime, w(this, G));
      if (mo || w(this, Ve).isStale || !fu(t)) return;
      const r = Jm(w(this, Ve).dataUpdatedAt, t) + 1;
      b(
        this,
        nr,
        setTimeout(() => {
          w(this, Ve).isStale || this.updateResult();
        }, r)
      );
    }),
    (yu = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(w(this, G))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (gu = function (t) {
      X(this, ee, Eu).call(this),
        b(this, Cn, t),
        !(
          mo ||
          Mt(this.options.enabled, w(this, G)) === !1 ||
          !fu(w(this, Cn)) ||
          w(this, Cn) === 0
        ) &&
          b(
            this,
            rr,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || Nc.isFocused()) &&
                X(this, ee, bo).call(this);
            }, w(this, Cn))
          );
    }),
    (wu = function () {
      X(this, ee, vu).call(this),
        X(this, ee, gu).call(this, X(this, ee, yu).call(this));
    }),
    (Su = function () {
      w(this, nr) && (clearTimeout(w(this, nr)), b(this, nr, void 0));
    }),
    (Eu = function () {
      w(this, rr) && (clearInterval(w(this, rr)), b(this, rr, void 0));
    }),
    (xu = function () {
      const t = w(this, Xe).getQueryCache().build(w(this, Xe), this.options);
      if (t === w(this, G)) return;
      const n = w(this, G);
      b(this, G, t),
        b(this, Ei, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (av = function (t) {
      Ie.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(w(this, Ve));
          }),
          w(this, Xe)
            .getQueryCache()
            .notify({ query: w(this, G), type: "observerResultsUpdated" });
      });
    }),
    Zf);
function NS(e, t) {
  return (
    Mt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function If(e, t) {
  return NS(e, t) || (e.state.data !== void 0 && Cu(e, t, t.refetchOnMount));
}
function Cu(e, t, n) {
  if (Mt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Ic(e, t));
  }
  return !1;
}
function Af(e, t, n, r) {
  return (
    (e !== t || Mt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Ic(e, n)
  );
}
function Ic(e, t) {
  return Mt(t.enabled, e) !== !1 && e.isStaleByTime(Hr(t.staleTime, e));
}
function IS(e, t) {
  return !hu(e.getCurrentResult(), t);
}
var lv = N.createContext(void 0),
  uv = (e) => {
    const t = N.useContext(lv);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  AS = ({ client: e, children: t }) => (
    N.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    T.jsx(lv.Provider, { value: e, children: t })
  ),
  cv = N.createContext(!1),
  FS = () => N.useContext(cv);
cv.Provider;
function jS() {
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
var DS = N.createContext(jS()),
  bS = () => N.useContext(DS);
function zS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Lx() {}
var BS = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  US = (e) => {
    N.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  $S = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && zS(n, [e.error, r]),
  HS = (e) => {
    e.suspense &&
      (typeof e.staleTime != "number" && (e.staleTime = 1e3),
      typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  VS = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  WS = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function QS(e, t, n) {
  var u, f, d, c;
  const r = uv(),
    o = FS(),
    i = bS(),
    s = r.defaultQueryOptions(e);
  (f =
    (u = r.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || f.call(u, s),
    (s._optimisticResults = o ? "isRestoring" : "optimistic"),
    HS(s),
    BS(s, i),
    US(i);
  const [a] = N.useState(() => new t(r, s)),
    l = a.getOptimisticResult(s);
  if (
    (N.useSyncExternalStore(
      N.useCallback(
        (h) => {
          const y = o ? () => {} : a.subscribe(Ie.batchCalls(h));
          return a.updateResult(), y;
        },
        [a, o]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    N.useEffect(() => {
      a.setOptions(s, { listeners: !1 });
    }, [s, a]),
    VS(s, l))
  )
    throw WS(s, a, i);
  if (
    $S({
      result: l,
      errorResetBoundary: i,
      throwOnError: s.throwOnError,
      query: r.getQueryCache().get(s.queryHash),
    })
  )
    throw l.error;
  return (
    (c =
      (d = r.getDefaultOptions().queries) == null
        ? void 0
        : d._experimental_afterQuery) == null || c.call(d, s, l),
    s.notifyOnChangeProps ? l : a.trackResult(l)
  );
}
function Ff(e, t) {
  return QS(e, MS);
}
const qS = () => {
  const e = uv(),
    t = xm(),
    n = new URLSearchParams(window.location.search),
    r = async () => {
      const [o, i] = await Oc.adminTestAccess(n.get("credentials") || "");
      if (!i) return t({ to: "/editor" }), ve.error(o);
      e.setQueriesData({ queryKey: ["token"] }, n.get("credentials")),
        localStorage.setItem("token", n.get("credentials") || ""),
        t({ to: "/editor/storefronts" });
    };
  return (
    N.useEffect(() => {
      r();
    }, []),
    T.jsxs("div", {
      className: "authenticateContainer",
      children: [
        T.jsx("h3", { children: "Hang Tight!" }),
        T.jsx("p", {
          children:
            "Please wait while we authenticate your Retrac account, this should only take a second.",
        }),
      ],
    })
  );
};
var KS = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function YS(e, t) {
  var n = t === void 0 ? {} : t,
    r = n.decayRate,
    o = r === void 0 ? 0.95 : r,
    i = n.safeDisplacement,
    s = i === void 0 ? 10 : i,
    a = n.applyRubberBandEffect,
    l = a === void 0 ? !1 : a,
    u = n.activeMouseButton,
    f = u === void 0 ? "Left" : u,
    d = n.isMounted,
    c = d === void 0 ? !0 : d,
    h = N.useRef({
      isMouseDown: !1,
      isDraggingX: !1,
      isDraggingY: !1,
      initialMouseX: 0,
      initialMouseY: 0,
      lastMouseX: 0,
      lastMouseY: 0,
      scrollSpeedX: 0,
      scrollSpeedY: 0,
      lastScrollX: 0,
      lastScrollY: 0,
    }),
    y = !1,
    g = !1,
    S = 0,
    m = 0,
    p,
    v,
    E,
    _,
    k = (1 / 60) * 1e3;
  KS(
    function () {
      c &&
        ((y = window.getComputedStyle(e.current).overflowX === "scroll"),
        (g = window.getComputedStyle(e.current).overflowY === "scroll"),
        (S = e.current.scrollWidth - e.current.clientWidth),
        (m = e.current.scrollHeight - e.current.clientHeight),
        (p = window.getComputedStyle(e.current).cursor),
        (v = []),
        (E = []),
        (_ = []),
        e.current.childNodes.forEach(function (A) {
          v.push(window.getComputedStyle(A).cursor),
            E.push(
              window.getComputedStyle(A).transform === "none"
                ? ""
                : window.getComputedStyle(A).transform
            ),
            _.push(
              window.getComputedStyle(A).transition === "none"
                ? ""
                : window.getComputedStyle(A).transition
            );
        }));
    },
    [c]
  );
  var R = function () {
      var O = h.current.scrollSpeedX * k,
        F = h.current.scrollSpeedY * k,
        j = e.current.scrollLeft + O,
        U = e.current.scrollTop + F;
      (e.current.scrollLeft = j),
        (e.current.scrollTop = U),
        (h.current.lastScrollX = j),
        (h.current.lastScrollY = U);
    },
    x = function (O) {
      var F = O.clientX - h.current.initialMouseX,
        j = O.clientY - h.current.initialMouseY,
        U = e.current,
        re = U.clientWidth,
        H = U.clientHeight,
        te = 0,
        we = 0;
      y && g
        ? ((te =
            0.3 * re * Math.sign(F) * Math.log10(1 + (0.5 * Math.abs(F)) / re)),
          (we =
            0.3 * H * Math.sign(j) * Math.log10(1 + (0.5 * Math.abs(j)) / H)))
        : y
        ? (te =
            0.3 * re * Math.sign(F) * Math.log10(1 + (0.5 * Math.abs(F)) / re))
        : g &&
          (we =
            0.3 * H * Math.sign(j) * Math.log10(1 + (0.5 * Math.abs(j)) / H)),
        e.current.childNodes.forEach(function (_e) {
          (_e.style.transform = "translate3d(" + te + "px, " + we + "px, 0px)"),
            (_e.style.transition = "transform 0ms");
        });
    },
    B = function () {
      e.current.childNodes.forEach(function (O, F) {
        (O.style.transform = E[F]), (O.style.transition = _[F]);
      });
    },
    z,
    q,
    Z,
    K = function () {
      var O = 0.05;
      if (
        ((q = setInterval(function () {
          var j = h.current.scrollSpeedX,
            U = j * o;
          h.current.scrollSpeedX = U;
          var re = e.current.scrollLeft <= 0,
            H = e.current.scrollLeft >= S,
            te = re || H;
          R(),
            (Math.abs(U) < O || h.current.isMouseDown || te) &&
              ((h.current.scrollSpeedX = 0), clearInterval(q));
        }, k)),
        (Z = setInterval(function () {
          var j = h.current.scrollSpeedY,
            U = j * o;
          h.current.scrollSpeedY = U;
          var re = e.current.scrollTop <= 0,
            H = e.current.scrollTop >= m,
            te = re || H;
          R(),
            (Math.abs(U) < O || h.current.isMouseDown || te) &&
              ((h.current.scrollSpeedY = 0), clearInterval(Z));
        }, k)),
        (h.current.isDraggingX = !1),
        (h.current.isDraggingY = !1),
        l)
      ) {
        var F = 250;
        e.current.childNodes.forEach(function (j) {
          (j.style.transform = "translate3d(0px, 0px, 0px)"),
            (j.style.transition = "transform " + F + "ms");
        }),
          (z = setTimeout(B, F));
      }
    },
    oe = function (O) {
      O.preventDefault(), O.stopImmediatePropagation();
    },
    ce = function (O) {
      return (
        (f === "Left" && O === 1) ||
        (f === "Middle" && O === 4) ||
        (f === "Right" && O === 2)
      );
    },
    pe = function (O) {
      var F = ce(O.buttons);
      F &&
        ((h.current.isMouseDown = !0),
        (h.current.lastMouseX = O.clientX),
        (h.current.lastMouseY = O.clientY),
        (h.current.initialMouseX = O.clientX),
        (h.current.initialMouseY = O.clientY));
    },
    Te = function (O) {
      var F = h.current.isDraggingX || h.current.isDraggingY,
        j = h.current.initialMouseX - O.clientX,
        U = h.current.initialMouseY - O.clientY,
        re = Math.abs(j) > s || Math.abs(U) > s,
        H = F && re;
      H
        ? e.current.childNodes.forEach(function (te) {
            te.addEventListener("click", oe);
          })
        : e.current.childNodes.forEach(function (te) {
            te.removeEventListener("click", oe);
          }),
        (h.current.isMouseDown = !1),
        (h.current.lastMouseX = 0),
        (h.current.lastMouseY = 0),
        (e.current.style.cursor = p),
        e.current.childNodes.forEach(function (te, we) {
          te.style.cursor = v[we];
        }),
        H && K();
    },
    P = function (O) {
      if (h.current.isMouseDown) {
        O.preventDefault();
        var F = h.current.lastMouseX - O.clientX;
        (h.current.lastMouseX = O.clientX),
          (h.current.scrollSpeedX = F / k),
          (h.current.isDraggingX = !0);
        var j = h.current.lastMouseY - O.clientY;
        (h.current.lastMouseY = O.clientY),
          (h.current.scrollSpeedY = j / k),
          (h.current.isDraggingY = !0),
          (e.current.style.cursor = "grabbing"),
          e.current.childNodes.forEach(function (_e) {
            _e.style.cursor = "grabbing";
          });
        var U = e.current.scrollLeft <= 0 && y,
          re = e.current.scrollLeft >= S && y,
          H = e.current.scrollTop <= 0 && g,
          te = e.current.scrollTop >= m && g,
          we = U || re || H || te;
        we && l && x(O), R();
      }
    },
    I = function () {
      (S = e.current.scrollWidth - e.current.clientWidth),
        (m = e.current.scrollHeight - e.current.clientHeight);
    };
  return (
    N.useEffect(
      function () {
        return (
          c &&
            (window.addEventListener("mouseup", Te),
            window.addEventListener("mousemove", P),
            window.addEventListener("resize", I)),
          function () {
            window.removeEventListener("mouseup", Te),
              window.removeEventListener("mousemove", P),
              window.removeEventListener("resize", I),
              clearInterval(q),
              clearInterval(Z),
              clearTimeout(z);
          }
        );
      },
      [c]
    ),
    { events: { onMouseDown: pe } }
  );
}
const dv = (e) => {
  const t = xa.getQueryData(["cosmeticData"]);
  if (!t) return console.log("Failed to fetch cosmetic data."), {};
  if (!t) return {};
  const n = Object.values(t.cosmetics).find((r) => {
    var o;
    return (
      ((o = r == null ? void 0 : r.Cosmetic) == null
        ? void 0
        : o.id.toLowerCase()) === e.toLowerCase()
    );
  });
  return n
    ? { item: n.Cosmetic }
    : (console.log(`Failed to find item with template ${e}.`), {});
};
var fv = { exports: {} },
  XS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  GS = XS,
  JS = GS;
function hv() {}
function pv() {}
pv.resetWarningCache = hv;
var ZS = function () {
  function e(r, o, i, s, a, l) {
    if (l !== JS) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: pv,
    resetWarningCache: hv,
  };
  return (n.PropTypes = n), n;
};
fv.exports = ZS();
var eE = fv.exports;
const de = vo(eE);
function tE(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var mv = N,
  nE = tE(mv);
function jf(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rE(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var oE = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function iE(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var s = [],
      a;
    function l() {
      (a = e(
        s.map(function (f) {
          return f.props;
        })
      )),
        u.canUseDOM ? t(a) : n && (a = n(a));
    }
    var u = (function (f) {
      rE(d, f);
      function d() {
        return f.apply(this, arguments) || this;
      }
      (d.peek = function () {
        return a;
      }),
        (d.rewind = function () {
          if (d.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var y = a;
          return (a = void 0), (s = []), y;
        });
      var c = d.prototype;
      return (
        (c.UNSAFE_componentWillMount = function () {
          s.push(this), l();
        }),
        (c.componentDidUpdate = function () {
          l();
        }),
        (c.componentWillUnmount = function () {
          var y = s.indexOf(this);
          s.splice(y, 1), l();
        }),
        (c.render = function () {
          return nE.createElement(i, this.props);
        }),
        d
      );
    })(mv.PureComponent);
    return (
      jf(u, "displayName", "SideEffect(" + r(i) + ")"),
      jf(u, "canUseDOM", oE),
      u
    );
  };
}
var sE = iE;
const aE = vo(sE);
var lE = typeof Element < "u",
  uE = typeof Map == "function",
  cE = typeof Set == "function",
  dE = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ms(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ms(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (uE && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!ms(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (cE && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (dE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (lE && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !ms(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var fE = function (t, n) {
  try {
    return ms(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const hE = vo(fE);
/*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */ var Df = Object.getOwnPropertySymbols,
  pE = Object.prototype.hasOwnProperty,
  mE = Object.prototype.propertyIsEnumerable;
function vE(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function yE() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var gE = yE()
  ? Object.assign
  : function (e, t) {
      for (var n, r = vE(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n) pE.call(n, s) && (r[s] = n[s]);
        if (Df) {
          o = Df(n);
          for (var a = 0; a < o.length; a++)
            mE.call(n, o[a]) && (r[o[a]] = n[o[a]]);
        }
      }
      return r;
    };
const wE = vo(gE);
var ar = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  V = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(V).map(function (e) {
  return V[e];
});
var fe = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  qs = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  gi = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  SE = Object.keys(qs).reduce(function (e, t) {
    return (e[qs[t]] = t), e;
  }, {}),
  EE = [V.NOSCRIPT, V.SCRIPT, V.STYLE],
  Nt = "data-react-helmet",
  xE =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  CE = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  TE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Ye =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  _E = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  bf = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  PE = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  Tu = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  RE = function (t) {
    var n = Vr(t, V.TITLE),
      r = Vr(t, gi.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = Vr(t, gi.DEFAULT_TITLE);
    return n || o || void 0;
  },
  kE = function (t) {
    return Vr(t, gi.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  ul = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return Ye({}, r, o);
      }, {});
  },
  OE = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[V.BASE] < "u";
      })
      .map(function (r) {
        return r[V.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var i = Object.keys(o), s = 0; s < i.length; s++) {
            var a = i[s],
              l = a.toLowerCase();
            if (t.indexOf(l) !== -1 && o[l]) return r.concat(o);
          }
        return r;
      }, []);
  },
  No = function (t, n, r) {
    var o = {};
    return r
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] < "u" &&
              IE(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  xE(i[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[t];
      })
      .reverse()
      .reduce(function (i, s) {
        var a = {};
        s.filter(function (c) {
          for (var h = void 0, y = Object.keys(c), g = 0; g < y.length; g++) {
            var S = y[g],
              m = S.toLowerCase();
            n.indexOf(m) !== -1 &&
              !(h === fe.REL && c[h].toLowerCase() === "canonical") &&
              !(m === fe.REL && c[m].toLowerCase() === "stylesheet") &&
              (h = m),
              n.indexOf(S) !== -1 &&
                (S === fe.INNER_HTML ||
                  S === fe.CSS_TEXT ||
                  S === fe.ITEM_PROP) &&
                (h = S);
          }
          if (!h || !c[h]) return !1;
          var p = c[h].toLowerCase();
          return (
            o[h] || (o[h] = {}),
            a[h] || (a[h] = {}),
            o[h][p] ? !1 : ((a[h][p] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (c) {
            return i.push(c);
          });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
          var f = l[u],
            d = wE({}, o[f], a[f]);
          o[f] = d;
        }
        return i;
      }, [])
      .reverse();
  },
  Vr = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  LE = function (t) {
    return {
      baseTag: OE([fe.HREF, fe.TARGET], t),
      bodyAttributes: ul(ar.BODY, t),
      defer: Vr(t, gi.DEFER),
      encode: Vr(t, gi.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: ul(ar.HTML, t),
      linkTags: No(V.LINK, [fe.REL, fe.HREF], t),
      metaTags: No(
        V.META,
        [fe.NAME, fe.CHARSET, fe.HTTPEQUIV, fe.PROPERTY, fe.ITEM_PROP],
        t
      ),
      noscriptTags: No(V.NOSCRIPT, [fe.INNER_HTML], t),
      onChangeClientState: kE(t),
      scriptTags: No(V.SCRIPT, [fe.SRC, fe.INNER_HTML], t),
      styleTags: No(V.STYLE, [fe.CSS_TEXT], t),
      title: RE(t),
      titleAttributes: ul(ar.TITLE, t),
    };
  },
  _u = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            _u(t);
          }, 0);
    };
  })(),
  zf = function (t) {
    return clearTimeout(t);
  },
  ME =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        _u
      : global.requestAnimationFrame || _u,
  NE =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        zf
      : global.cancelAnimationFrame || zf,
  IE = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  Io = null,
  AE = function (t) {
    Io && NE(Io),
      t.defer
        ? (Io = ME(function () {
            Bf(t, function () {
              Io = null;
            });
          }))
        : (Bf(t), (Io = null));
  },
  Bf = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      f = t.scriptTags,
      d = t.styleTags,
      c = t.title,
      h = t.titleAttributes;
    Pu(V.BODY, o), Pu(V.HTML, i), FE(c, h);
    var y = {
        baseTag: Er(V.BASE, r),
        linkTags: Er(V.LINK, s),
        metaTags: Er(V.META, a),
        noscriptTags: Er(V.NOSCRIPT, l),
        scriptTags: Er(V.SCRIPT, f),
        styleTags: Er(V.STYLE, d),
      },
      g = {},
      S = {};
    Object.keys(y).forEach(function (m) {
      var p = y[m],
        v = p.newTags,
        E = p.oldTags;
      v.length && (g[m] = v), E.length && (S[m] = y[m].oldTags);
    }),
      n && n(),
      u(t, g, S);
  },
  vv = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  FE = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = vv(t)),
      Pu(V.TITLE, n);
  },
  Pu = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(Nt),
          i = o ? o.split(",") : [],
          s = [].concat(i),
          a = Object.keys(n),
          l = 0;
        l < a.length;
        l++
      ) {
        var u = a[l],
          f = n[u] || "";
        r.getAttribute(u) !== f && r.setAttribute(u, f),
          i.indexOf(u) === -1 && i.push(u);
        var d = s.indexOf(u);
        d !== -1 && s.splice(d, 1);
      }
      for (var c = s.length - 1; c >= 0; c--) r.removeAttribute(s[c]);
      i.length === s.length
        ? r.removeAttribute(Nt)
        : r.getAttribute(Nt) !== a.join(",") && r.setAttribute(Nt, a.join(","));
    }
  },
  Er = function (t, n) {
    var r = document.head || document.querySelector(V.HEAD),
      o = r.querySelectorAll(t + "[" + Nt + "]"),
      i = Array.prototype.slice.call(o),
      s = [],
      a = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t);
          for (var f in l)
            if (l.hasOwnProperty(f))
              if (f === fe.INNER_HTML) u.innerHTML = l.innerHTML;
              else if (f === fe.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText));
              else {
                var d = typeof l[f] > "u" ? "" : l[f];
                u.setAttribute(f, d);
              }
          u.setAttribute(Nt, "true"),
            i.some(function (c, h) {
              return (a = h), u.isEqualNode(c);
            })
              ? i.splice(a, 1)
              : s.push(u);
        }),
      i.forEach(function (l) {
        return l.parentNode.removeChild(l);
      }),
      s.forEach(function (l) {
        return r.appendChild(l);
      }),
      { oldTags: i, newTags: s }
    );
  },
  yv = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  jE = function (t, n, r, o) {
    var i = yv(r),
      s = vv(n);
    return i
      ? "<" + t + " " + Nt + '="true" ' + i + ">" + Tu(s, o) + "</" + t + ">"
      : "<" + t + " " + Nt + '="true">' + Tu(s, o) + "</" + t + ">";
  },
  DE = function (t, n, r) {
    return n.reduce(function (o, i) {
      var s = Object.keys(i)
          .filter(function (u) {
            return !(u === fe.INNER_HTML || u === fe.CSS_TEXT);
          })
          .reduce(function (u, f) {
            var d = typeof i[f] > "u" ? f : f + '="' + Tu(i[f], r) + '"';
            return u ? u + " " + d : d;
          }, ""),
        a = i.innerHTML || i.cssText || "",
        l = EE.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        Nt +
        '="true" ' +
        s +
        (l ? "/>" : ">" + a + "</" + t + ">")
      );
    }, "");
  },
  gv = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[qs[o] || o] = t[o]), r;
    }, n);
  },
  bE = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[SE[o] || o] = t[o]), r;
    }, n);
  },
  zE = function (t, n, r) {
    var o,
      i = ((o = { key: n }), (o[Nt] = !0), o),
      s = gv(r, i);
    return [M.createElement(V.TITLE, s, n)];
  },
  BE = function (t, n) {
    return n.map(function (r, o) {
      var i,
        s = ((i = { key: o }), (i[Nt] = !0), i);
      return (
        Object.keys(r).forEach(function (a) {
          var l = qs[a] || a;
          if (l === fe.INNER_HTML || l === fe.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[l] = r[a];
        }),
        M.createElement(t, s)
      );
    });
  },
  Gt = function (t, n, r) {
    switch (t) {
      case V.TITLE:
        return {
          toComponent: function () {
            return zE(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return jE(t, n.title, n.titleAttributes, r);
          },
        };
      case ar.BODY:
      case ar.HTML:
        return {
          toComponent: function () {
            return gv(n);
          },
          toString: function () {
            return yv(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return BE(t, n);
          },
          toString: function () {
            return DE(t, n, r);
          },
        };
    }
  },
  wv = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      s = t.linkTags,
      a = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      f = t.styleTags,
      d = t.title,
      c = d === void 0 ? "" : d,
      h = t.titleAttributes;
    return {
      base: Gt(V.BASE, n, o),
      bodyAttributes: Gt(ar.BODY, r, o),
      htmlAttributes: Gt(ar.HTML, i, o),
      link: Gt(V.LINK, s, o),
      meta: Gt(V.META, a, o),
      noscript: Gt(V.NOSCRIPT, l, o),
      script: Gt(V.SCRIPT, u, o),
      style: Gt(V.STYLE, f, o),
      title: Gt(V.TITLE, { title: c, titleAttributes: h }, o),
    };
  },
  UE = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          _E(i, o);
          function i() {
            return CE(this, i), PE(this, o.apply(this, arguments));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (a) {
              return !hE(this.props, a);
            }),
            (i.prototype.mapNestedChildrenToProps = function (a, l) {
              if (!l) return null;
              switch (a.type) {
                case V.SCRIPT:
                case V.NOSCRIPT:
                  return { innerHTML: l };
                case V.STYLE:
                  return { cssText: l };
              }
              throw new Error(
                "<" +
                  a.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (a) {
              var l,
                u = a.child,
                f = a.arrayTypeChildren,
                d = a.newChildProps,
                c = a.nestedChildren;
              return Ye(
                {},
                f,
                ((l = {}),
                (l[u.type] = [].concat(f[u.type] || [], [
                  Ye({}, d, this.mapNestedChildrenToProps(u, c)),
                ])),
                l)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (a) {
              var l,
                u,
                f = a.child,
                d = a.newProps,
                c = a.newChildProps,
                h = a.nestedChildren;
              switch (f.type) {
                case V.TITLE:
                  return Ye(
                    {},
                    d,
                    ((l = {}),
                    (l[f.type] = h),
                    (l.titleAttributes = Ye({}, c)),
                    l)
                  );
                case V.BODY:
                  return Ye({}, d, { bodyAttributes: Ye({}, c) });
                case V.HTML:
                  return Ye({}, d, { htmlAttributes: Ye({}, c) });
              }
              return Ye({}, d, ((u = {}), (u[f.type] = Ye({}, c)), u));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (a, l) {
              var u = Ye({}, l);
              return (
                Object.keys(a).forEach(function (f) {
                  var d;
                  u = Ye({}, u, ((d = {}), (d[f] = a[f]), d));
                }),
                u
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (a, l) {
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (a, l) {
              var u = this,
                f = {};
              return (
                M.Children.forEach(a, function (d) {
                  if (!(!d || !d.props)) {
                    var c = d.props,
                      h = c.children,
                      y = bf(c, ["children"]),
                      g = bE(y);
                    switch ((u.warnOnInvalidChildren(d, h), d.type)) {
                      case V.LINK:
                      case V.META:
                      case V.NOSCRIPT:
                      case V.SCRIPT:
                      case V.STYLE:
                        f = u.flattenArrayTypeChildren({
                          child: d,
                          arrayTypeChildren: f,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                      default:
                        l = u.mapObjectTypeChildren({
                          child: d,
                          newProps: l,
                          newChildProps: g,
                          nestedChildren: h,
                        });
                        break;
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(f, l)),
                l
              );
            }),
            (i.prototype.render = function () {
              var a = this.props,
                l = a.children,
                u = bf(a, ["children"]),
                f = Ye({}, u);
              return (
                l && (f = this.mapChildrenToProps(l, f)), M.createElement(t, f)
              );
            }),
            TE(i, null, [
              {
                key: "canUseDOM",
                set: function (a) {
                  t.canUseDOM = a;
                },
              },
            ]),
            i
          );
        })(M.Component)),
      (n.propTypes = {
        base: de.object,
        bodyAttributes: de.object,
        children: de.oneOfType([de.arrayOf(de.node), de.node]),
        defaultTitle: de.string,
        defer: de.bool,
        encodeSpecialCharacters: de.bool,
        htmlAttributes: de.object,
        link: de.arrayOf(de.object),
        meta: de.arrayOf(de.object),
        noscript: de.arrayOf(de.object),
        onChangeClientState: de.func,
        script: de.arrayOf(de.object),
        style: de.arrayOf(de.object),
        title: de.string,
        titleAttributes: de.object,
        titleTemplate: de.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = wv({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  $E = function () {
    return null;
  },
  HE = aE(LE, AE, wv)($E),
  Ru = UE(HE);
Ru.renderStatic = Ru.rewind;
var Sv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Uf = M.createContext && M.createContext(Sv),
  VE = ["attr", "size", "title"];
function WE(e, t) {
  if (e == null) return {};
  var n = QE(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function QE(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ks.apply(this, arguments)
  );
}
function $f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $f(Object(n), !0).forEach(function (r) {
          qE(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : $f(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function qE(e, t, n) {
  return (
    (t = KE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function KE(e) {
  var t = YE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YE(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ev(e) {
  return (
    e &&
    e.map((t, n) => M.createElement(t.tag, Ys({ key: n }, t.attr), Ev(t.child)))
  );
}
function Ac(e) {
  return (t) =>
    M.createElement(XE, Ks({ attr: Ys({}, e.attr) }, t), Ev(e.child));
}
function XE(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      s = WE(e, VE),
      a = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      M.createElement(
        "svg",
        Ks(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: Ys(Ys({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && M.createElement("title", null, i),
        e.children
      )
    );
  };
  return Uf !== void 0
    ? M.createElement(Uf.Consumer, null, (n) => t(n))
    : t(Sv);
}
function Mx(e) {
  return Ac({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function GE(e) {
  return Ac({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
        child: [],
      },
    ],
  })(e);
}
function JE(e) {
  return Ac({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
        child: [],
      },
    ],
  })(e);
}
const xv = (e) =>
    e.type === "div" ? T.jsx(ZE, { ...e }) : T.jsx(ex, { ...e }),
  ZE = (e) => {
    const [t, n] = N.useState(!1),
      [r, o] = N.useState(!1),
      i = (a) =>
        `https://fortnite-api.com/images/cosmetics/br/${e.item.id.replace(
          "_Retrac",
          ""
        )}/${a}.png`,
      s = r
        ? "/unknown.png"
        : i(t || !e.item.images.featured || e.forceIcon ? "icon" : "featured");
    return (
      N.useEffect(() => {
        n(!1), o(!1);
      }, [e.item.id]),
      T.jsxs(T.Fragment, {
        children: [
          T.jsx("div", {
            style: {
              backgroundImage: `url(${s})`,
              ...(r && {
                backgroundSize: "10rem 10rem",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 0.5rem",
                mixBlendMode: "screen",
              }),
            },
            ...e,
            className: `${e.className} ${t ? "icon" : "featured"}Image`,
          }),
          !t &&
            T.jsx("img", {
              src: i("featured"),
              onError: () => n(!0),
              style: { display: "none" },
            }),
          t &&
            !r &&
            T.jsx("img", {
              src: i("icon"),
              onError: () => o(!0),
              style: { display: "none" },
            }),
        ],
      })
    );
  },
  ex = (e) => {
    const [t, n] = N.useState(!1),
      [r, o] = N.useState(!1),
      s = r
        ? "/icon.png"
        : ((a) =>
            `https://fortnite-api.com/images/cosmetics/br/${e.item.id.replace(
              "_Retrac",
              ""
            )}/${a}.png`)(
            t || !e.item.images.featured || e.forceIcon ? "icon" : "featured"
          );
    return (
      N.useEffect(() => {
        n(!1), o(!1);
      }, [e.item.id]),
      r
        ? T.jsx("img", {
            src: "/icon.png",
            ...e,
            className: `${e.className} iconImage`,
          })
        : t || !e.item.images.featured || e.forceIcon
        ? T.jsx("img", {
            src: s,
            ...e,
            className: `${e.className} iconImage`,
            onError: () => o(!0),
          })
        : T.jsx("img", {
            src: s,
            ...e,
            className: `${e.className} ${t ? "icon" : "featured"}Image`,
            onError: () => n(!0),
          })
    );
  },
  xr = ["BRWeeklyStorefront", "BRDailyStorefront"],
  Cr = ["Retrac", "Weekly", "Daily"],
  tx = () => {
    Ff({ queryKey: ["cosmeticData"], queryFn: Gm });
    const { data: e } = Ff({
        queryKey: ["storefront-today"],
        queryFn: hS,
        staleTime: 1 / 0,
      }),
      t = Object.entries(
        ((e == null ? void 0 : e.Storefronts) || []).reduce(
          (i, s) => {
            const a = s.Name,
              l = s.DBMtxOffers.reduce((u, f) => {
                const d = f.Meta.SectionID;
                return u[d] || (u[d] = []), u[d].push(f), u;
              }, {});
            return (i[a] = l), i;
          },
          { BRWeeklyStorefront: {}, BRDailyStorefront: {} }
        )
      )
        .map(([i, s]) => [
          i,
          Object.entries(s).sort(([a], [l]) => Cr.indexOf(a) - Cr.indexOf(l)),
        ])
        .sort(([i], [s]) => xr.indexOf(i) - xr.indexOf(s)),
      n = Object.entries(
        ((e == null ? void 0 : e.Storefronts) || []).reduce(
          (i, s) => {
            const a = s.Name,
              l = s.DBBundleOffers.reduce((u, f) => {
                const d = f.Meta.SectionID;
                return u[d] || (u[d] = []), u[d].push(f), u;
              }, {});
            return (i[a] = l), i;
          },
          { BRWeeklyStorefront: {}, BRDailyStorefront: {} }
        )
      )
        .map(([i, s]) => [
          i,
          Object.entries(s).sort(([a], [l]) => Cr.indexOf(a) - Cr.indexOf(l)),
        ])
        .sort(([i], [s]) => xr.indexOf(i) - xr.indexOf(s)),
      r = [...t, ...n],
      o = Array.from(
        r.reduce((i, [s, a]) => {
          if (!i.has(s)) i.set(s, a);
          else {
            const l = i.get(s);
            a.forEach(([u, f]) => {
              const d = l.find(([c]) => c === u);
              d
                ? d[1].push(
                    ...f.sort(
                      (c, h) =>
                        parseInt(c.Meta.Category) - parseInt(h.Meta.Category)
                    )
                  )
                : l.push([
                    u,
                    f.sort(
                      (c, h) =>
                        parseInt(c.Meta.Category) - parseInt(h.Meta.Category)
                    ),
                  ]);
            });
          }
          return i;
        }, new Map()),
        ([i, s]) => [i, s.sort(([a], [l]) => Cr.indexOf(a) - Cr.indexOf(l))]
      ).sort(([i], [s]) => xr.indexOf(i) - xr.indexOf(s));
    return T.jsxs(T.Fragment, {
      children: [
        T.jsx(Ru, { children: T.jsx("title", { children: "Retrac Shop" }) }),
        T.jsx("div", {
          className: "storefrontViewContainer",
          children: o.map(([i, s]) =>
            s.map(([a, l]) =>
              T.jsx(nx, { storefrontName: i, sectionId: a, offers: l }, a)
            )
          ),
        }),
      ],
    });
  },
  nx = (e) => {
    const t = N.useRef(null),
      [n, r] = N.useState(!1),
      [o, i] = N.useState("LEFT"),
      s = () =>
        t.current
          ? t.current.scrollHeight > t.current.clientHeight ||
            t.current.scrollWidth > t.current.clientWidth
          : !1,
      a = () =>
        !t.current || t.current.scrollLeft === 0
          ? "LEFT"
          : t.current.scrollLeft + t.current.clientWidth + 1 >=
            t.current.scrollWidth
          ? "RIGHT"
          : "MIDDLE",
      l = () => {
        r(s()), i(a());
      };
    N.useEffect(() => {
      const y = setInterval(l, 100);
      return () => clearInterval(y);
    }, [t]);
    const u = ({ direction: y }) =>
        T.jsx("button", {
          className: `storefrontViewSectionScrollButton ${y}`,
          onClick: () => {
            if (!t.current) return;
            const g = 280;
            y === "LEFT"
              ? (t.current.scrollLeft -= g)
              : (t.current.scrollLeft += g),
              i(a());
          },
          children: y === "LEFT" ? T.jsx(GE, {}) : T.jsx(JE, {}),
        }),
      { events: f } = YS(t, {
        decayRate: 0.99,
        safeDisplacement: 90,
        applyRubberBandEffect: !0,
        activeMouseButton: "Left",
      }),
      [d, c] = N.useState(0.5);
    N.useEffect(() => {
      c(
        () =>
          e.offers.reduce((g, S, m, p) => {
            var v, E;
            return S.Meta.TileSize === "DoubleWide"
              ? g + 27
              : S.Meta.TileSize === "Normal"
              ? g + 18
              : S.Meta.TileSize === "Small" &&
                ((m > 0 &&
                  ((v = p[m - 1]) == null ? void 0 : v.Meta.TileSize) ===
                    "Small") ||
                  (m < p.length - 1 &&
                    ((E = p[m + 1]) == null ? void 0 : E.Meta.TileSize) ===
                      "Small"))
              ? g + 9
              : g + 18;
          }, 0) - 0.5
      );
    }, [e.offers]);
    const h = e.offers.sort(
      (y, g) => parseInt(y.Meta.Category) - parseInt(g.Meta.Category)
    );
    return T.jsxs("section", {
      className: "storefrontViewSection",
      children: [
        T.jsx("div", {
          className: "storefrontSectionHeader",
          children: T.jsx("h3", { children: e.sectionId }),
        }),
        T.jsxs("div", {
          className: `storefrontViewSectionOverflowContainer ${
            n ? "overflowing" : ""
          } ${o}`,
          children: [
            n &&
              (o === "RIGHT" || o === "MIDDLE") &&
              T.jsx(u, { direction: "LEFT" }),
            T.jsxs("div", {
              className: "storefrontViewSectionOffers",
              ref: t,
              ...f,
              style: { width: d + "rem" },
              children: [
                h.map((y) =>
                  y.Type === "MTX"
                    ? T.jsx(rx, { offer: y }, y.ID)
                    : T.jsx(ox, { offer: y }, y.ID)
                ),
                e.offers.length === 0 &&
                  T.jsx("div", {
                    className: "storefrontViewSectionOffersEmpty",
                    children: "No offers exist",
                  }),
              ],
            }),
            n &&
              (o === "LEFT" || o === "MIDDLE") &&
              T.jsx(u, { direction: "RIGHT" }),
          ],
        }),
      ],
    });
  },
  rx = (e) => {
    var n, r;
    if (!((n = e.offer.Grants[0]) != null && n.Template))
      return T.jsx(Hf, { ...e });
    const { item: t } = dv(
      ((r = e.offer.Grants[0]) == null ? void 0 : r.Template) || ""
    );
    return t
      ? T.jsxs("div", {
          className: `storefrontOffer ${
            t.rarity.backendValue.split("::")[1] || "Retrac"
          } ${e.offer.Meta.TileSize}`,
          children: [
            T.jsx(xv, {
              className: "storefrontOfferImage",
              item: t,
              type: "div",
              forceIcon: !1,
            }),
            T.jsxs("div", {
              className: "storefrontOfferInformation",
              children: [
                T.jsxs("div", {
                  className: "storefrontOfferPrice",
                  children: [
                    T.jsx("span", {
                      children: e.offer.Price.FinalPrice.toLocaleString(),
                    }),
                    T.jsx("p", { children: t.type.displayValue }),
                    T.jsx("img", {
                      src: "https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png",
                      alt: "",
                      className: "currencyIcon",
                    }),
                  ],
                }),
                T.jsx("div", {
                  className: "storefrontOfferTitle",
                  children: T.jsx("span", { children: t.name }),
                }),
              ],
            }),
            e.offer.Meta.BannerOverride &&
              T.jsx("div", {
                className: "violator",
                children: e.offer.Meta.BannerOverride,
              }),
          ],
        })
      : T.jsx(Hf, { ...e });
  },
  Hf = (e) =>
    T.jsx("div", {
      className: "storefrontOffer Common Normal",
      children: T.jsxs("div", {
        className: "storefrontOfferInformation",
        children: [
          T.jsxs("div", {
            className: "storefrontOfferPrice",
            children: [
              T.jsx("span", {
                children: e.offer.Price.FinalPrice.toLocaleString(),
              }),
              T.jsx("img", {
                src: "https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png",
                alt: "",
                className: "currencyIcon",
              }),
            ],
          }),
          T.jsx("div", {
            className: "storefrontOfferTitle",
            children: T.jsx("span", { children: "EMPTY OFFER" }),
          }),
        ],
      }),
    }),
  ox = (e) => {
    var n, r;
    if (!((n = e.offer.Grants[0]) != null && n.Template))
      return T.jsx(Vf, { ...e });
    const { item: t } = dv(
      ((r = e.offer.Grants[0]) == null ? void 0 : r.Template) || ""
    );
    return t
      ? T.jsxs("div", {
          className: `storefrontOffer Retrac ${e.offer.Meta.TileSize}`,
          children: [
            T.jsx(xv, {
              className: "storefrontOfferImage",
              item: t,
              type: "div",
              forceIcon: !1,
            }),
            T.jsxs("div", {
              className: "storefrontOfferInformation",
              children: [
                T.jsxs("div", {
                  className: "storefrontOfferPrice",
                  children: [
                    T.jsx("span", { children: "DYNAMIC" }),
                    T.jsx("p", { children: "Bundle" }),
                    T.jsx("img", {
                      src: "https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png",
                      alt: "",
                      className: "currencyIcon",
                    }),
                  ],
                }),
                T.jsx("div", {
                  className: "storefrontOfferTitle",
                  children: T.jsx("span", {
                    children: e.offer.Meta.Title || "Unnamed Item Bundle",
                  }),
                }),
              ],
            }),
            e.offer.Meta.BannerOverride &&
              T.jsx("div", {
                className: "violator",
                children: e.offer.Meta.BannerOverride,
              }),
          ],
        })
      : T.jsx(Vf, { ...e });
  },
  Vf = (e) =>
    T.jsx("div", {
      className: `storefrontOffer Common ${e.offer.Meta.TileSize}`,
      children: T.jsxs("div", {
        className: "storefrontOfferInformation",
        children: [
          T.jsxs("div", {
            className: "storefrontOfferPrice",
            children: [
              T.jsx("span", { children: "Dynamic" }),
              T.jsx("p", { children: "Bundle" }),
              T.jsx("img", {
                src: "https://gamepedia.cursecdn.com/fortnite_gamepedia/f/f3/V-bucks_icon.png",
                alt: "",
                className: "currencyIcon",
              }),
            ],
          }),
          T.jsx("div", {
            className: "storefrontOfferTitle",
            children: T.jsx("span", { children: "EMPTY BUNDLE" }),
          }),
        ],
      }),
    }),
  Un = async () => {
    if (!(await xa.fetchQuery({ queryKey: ["token"], queryFn: fS })))
      throw U0({ to: "/editor" });
  },
  Ea = o1({
    component: () =>
      T.jsx(N.Suspense, {
        fallback: "Failed, contact @ectrc.",
        children: T.jsx(Pm, {}),
      }),
    notFoundComponent: () => T.jsx(n1, { to: "/" }),
  }),
  $n = $e({
    getParentRoute: () => Ea,
    path: "/editor",
    component: N.lazy(() =>
      Re(
        () => import("./root-C8z8CVul.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])
      )
    ),
    beforeLoad: async () => {
      Re(() => import("./index-d7zPEbyO.js"), __vite__mapDeps([7, 1, 2, 8])),
        Re(
          () => import("./storefrontView-D3FR2ZZP.js"),
          __vite__mapDeps([9, 10, 3, 2, 4, 11, 12, 13, 14])
        ),
        Re(
          () => import("./index-DeTKSuxH.js"),
          __vite__mapDeps([15, 1, 2, 16])
        ),
        Re(
          () => import("./hotfixView-DzqZ7qX0.js"),
          __vite__mapDeps([17, 2, 10, 18, 11, 12, 19])
        ),
        Re(
          () => import("./index-DKEfddQR.js"),
          __vite__mapDeps([20, 1, 2, 21])
        ),
        Re(
          () => import("./eventView-CwHB2tw1.js"),
          __vite__mapDeps([22, 4, 2, 10, 13, 11, 12, 23])
        ),
        Re(
          () => import("./index-fk63pdGh.js"),
          __vite__mapDeps([24, 10, 5, 25])
        ),
        Re(
          () => import("./index-BjMyem9n.js"),
          __vite__mapDeps([26, 2, 10, 18, 11, 12, 27])
        );
    },
  }),
  Fc = $e({
    getParentRoute: () => $n,
    path: "/storefronts",
    component: N.lazy(() =>
      Re(() => import("./index-d7zPEbyO.js"), __vite__mapDeps([7, 1, 2, 8]))
    ),
    beforeLoad: Un,
  }),
  ix = $e({
    getParentRoute: () => Fc,
    path: "/",
    component: () =>
      T.jsx("span", {
        className: "selectStorefront",
        children: "Please select a storefront from the side bar.",
      }),
  }),
  sx = $e({
    getParentRoute: () => Fc,
    path: "/$date",
    component: N.lazy(() =>
      Re(
        () => import("./storefrontView-D3FR2ZZP.js"),
        __vite__mapDeps([9, 10, 3, 2, 4, 11, 12, 13, 14])
      )
    ),
  }),
  jc = $e({
    getParentRoute: () => $n,
    path: "/hotfixes",
    component: N.lazy(() =>
      Re(() => import("./index-DeTKSuxH.js"), __vite__mapDeps([15, 1, 2, 16]))
    ),
    beforeLoad: Un,
  }),
  ax = $e({
    getParentRoute: () => jc,
    path: "/$hotfix",
    component: N.lazy(() =>
      Re(
        () => import("./hotfixView-DzqZ7qX0.js"),
        __vite__mapDeps([17, 2, 10, 18, 11, 12, 19])
      )
    ),
  }),
  lx = $e({
    getParentRoute: () => jc,
    path: "/",
    component: () =>
      T.jsx("span", {
        className: "selectHotfix",
        children: "Please select a hotfix from the side bar.",
      }),
    beforeLoad: Un,
  }),
  ux = $e({
    getParentRoute: () => $n,
    path: "/servers",
    component: N.lazy(() =>
      Re(() => import("./index-fk63pdGh.js"), __vite__mapDeps([24, 10, 5, 25]))
    ),
    beforeLoad: Un,
  }),
  cx = $e({ getParentRoute: () => Ea, path: "/authenticate", component: qS }),
  dx = $e({
    getParentRoute: () => $n,
    path: "/config",
    component: N.lazy(() =>
      Re(
        () => import("./index-BjMyem9n.js"),
        __vite__mapDeps([26, 2, 10, 18, 11, 12, 27])
      )
    ),
    beforeLoad: Un,
  }),
  fx = $e({
    getParentRoute: () => $n,
    path: "/users",
    component: N.lazy(() =>
      Re(() => import("./index-BJcfzUV4.js"), __vite__mapDeps([28, 29]))
    ),
    beforeLoad: Un,
  }),
  hx = $e({
    getParentRoute: () => $n,
    path: "/paks",
    component: N.lazy(() => Re(() => import("./index-C83BFppr.js"), [])),
    beforeLoad: Un,
  }),
  Dc = $e({
    getParentRoute: () => $n,
    path: "/events",
    component: N.lazy(() =>
      Re(() => import("./index-DKEfddQR.js"), __vite__mapDeps([20, 1, 2, 21]))
    ),
    beforeLoad: Un,
  }),
  px = $e({
    getParentRoute: () => Dc,
    path: "/",
    component: () =>
      T.jsx("span", {
        className: "selectStorefront",
        children: "Please select a tournament from the side bar.",
      }),
  }),
  mx = $e({
    getParentRoute: () => Dc,
    path: "/$eventId",
    component: N.lazy(() =>
      Re(
        () => import("./eventView-CwHB2tw1.js"),
        __vite__mapDeps([22, 4, 2, 10, 13, 11, 12, 23])
      )
    ),
  }),
  vx = $e({
    getParentRoute: () => Ea,
    path: "/",
    component: () =>
      T.jsx(N.Suspense, { fallback: "", children: T.jsx(tx, {}) }),
    beforeLoad: async () => {
      await xa.prefetchQuery({ queryKey: ["cosmeticData"], queryFn: Gm });
    },
  }),
  yx = Q0({
    routeTree: Ea.addChildren([
      $n.addChildren([
        Fc.addChildren([ix, sx]),
        jc.addChildren([lx, ax]),
        Dc.addChildren([px, mx]),
        ux,
        dx,
        fx,
        hx,
      ]),
      cx,
      vx,
    ]),
    defaultPreload: "intent",
  }),
  xa = new LS();
cl.createRoot(document.getElementById("root1")).render(
  T.jsx(AS, { client: xa, children: T.jsx(c1, { router: yx }) })
);
export {
  Sx as A,
  Gi as B,
  fm as C,
  M as D,
  mx as E,
  GE as F,
  Ac as G,
  Ru as H,
  xv as I,
  ve as J,
  Ox as K,
  dS as L,
  Rx as M,
  Ws as N,
  Pm as O,
  vo as P,
  hu as Q,
  vi as R,
  Li as S,
  Cx as T,
  PS as U,
  Ie as V,
  Lx as W,
  zS as X,
  Ff as a,
  xa as b,
  Oc as c,
  Mx as d,
  Tx as e,
  Gm as f,
  uv as g,
  YS as h,
  dv as i,
  T as j,
  JE as k,
  _x as l,
  wx as m,
  Px as n,
  cS as o,
  ax as p,
  fS as q,
  N as r,
  sx as s,
  kx as t,
  rt as u,
  Bn as v,
  Ex as w,
  lf as x,
  xx as y,
  Xo as z,
};
