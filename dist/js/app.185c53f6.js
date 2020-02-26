(function(e) {
  function t(t) {
    for (
      var r, o, u = t[0], i = t[1], s = t[2], l = 0, d = [];
      l < u.length;
      l++
    )
      (o = u[l]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && d.push(c[o][0]),
        (c[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    f && f(t);
    while (d.length) d.shift()();
    return a.push.apply(a, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var u = n[o];
        0 !== c[u] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    c = { app: 0 },
    a = [];
  function u(e) {
    return (
      i.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-2d0da3c4": "8d55d267",
        "chunk-3b508903": "8c29d6f0",
        "chunk-54d2b166": "a7ab9b99",
        "chunk-6c34d8a4": "8a784437"
      }[e] +
      ".js"
    );
  }
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(e) {
    var t = [],
      n = { "chunk-3b508903": 1, "chunk-54d2b166": 1, "chunk-6c34d8a4": 1 };
    o[e]
      ? t.push(o[e])
      : 0 !== o[e] &&
        n[e] &&
        t.push(
          (o[e] = new Promise(function(t, n) {
            for (
              var r =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-2d0da3c4": "31d6cfe0",
                    "chunk-3b508903": "09cb0fe8",
                    "chunk-54d2b166": "9499da09",
                    "chunk-6c34d8a4": "1c4e25a7"
                  }[e] +
                  ".css",
                c = i.p + r,
                a = document.getElementsByTagName("link"),
                u = 0;
              u < a.length;
              u++
            ) {
              var s = a[u],
                l = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (l === r || l === c)) return t();
            }
            var d = document.getElementsByTagName("style");
            for (u = 0; u < d.length; u++) {
              (s = d[u]), (l = s.getAttribute("data-href"));
              if (l === r || l === c) return t();
            }
            var f = document.createElement("link");
            (f.rel = "stylesheet"),
              (f.type = "text/css"),
              (f.onload = t),
              (f.onerror = function(t) {
                var r = (t && t.target && t.target.src) || c,
                  a = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = r),
                  delete o[e],
                  f.parentNode.removeChild(f),
                  n(a);
              }),
              (f.href = c);
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(f);
          }).then(function() {
            o[e] = 0;
          }))
        );
    var r = c[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var a = new Promise(function(t, n) {
          r = c[e] = [t, n];
        });
        t.push((r[2] = a));
        var s,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          (l.src = u(e));
        var d = new Error();
        s = function(t) {
          (l.onerror = l.onload = null), clearTimeout(f);
          var n = c[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = r),
                (d.request = o),
                n[1](d);
            }
            c[e] = void 0;
          }
        };
        var f = setTimeout(function() {
          s({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = s), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = r),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          i.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var d = 0; d < s.length; d++) t(s[d]);
  var f = l;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "25a1": function(e, t, n) {},
  "28fd": function(e, t, n) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r),
      n.d(r, "login", function() {
        return f;
      }),
      n.d(r, "dashboard", function() {
        return p;
      });
    n("15f5"), n("28fd"), n("d3b7"), n("e6cf"), n("e260");
    var o = n("2b0e"),
      c =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b"),
        n("ade3")),
      a = n("bc3a"),
      u = n.n(a),
      i = "http://localhost:3000/api",
      s = { "content-type": "application/x-www-form-urlencoded" },
      l = u.a.create({ baseURL: i, headers: s });
    function d(e, t) {
      return new Promise(function(n, r) {
        l(e).then(
          function(e) {
            return n(e);
          },
          function(e) {
            function o(e) {
              n(), console.log(e);
            }
            t ? t({ resolve: n, reject: r, error: e }) : o(e);
          }
        );
      });
    }
    l.interceptors.request.use(function(e) {
      return console.log(e), (e.headers.token = "123456"), e;
    }),
      l.interceptors.response.use(function(e) {
        return console.log(e), e;
      });
    var f = { method: "get", url: "/login" },
      p = {
        user: { url: "/user", method: "post" },
        product: { url: "/product", method: "post" },
        hhh: { 1: { 2: { url: "/hhh/1/2", method: "post" } } }
      };
    function h(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function g(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? h(Object(n), !0).forEach(function(t) {
              Object(c["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : h(Object(n)).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function b(e, t) {
      for (var n in e) e[n].url ? r(g({}, e[n]), n, t) : (t[n] = b(e[n], {}));
      return t;
      function r(e, t, n) {
        !e.method && (e.method = "get"),
          (n[t] = function(t) {
            var n = t.data,
              r = t.handleError;
            return (
              "get" === e.method
                ? (e.params = n)
                : "post" === e.method && (e.data = n),
              d(e, r)
            );
          });
      }
    }
    var m = b(r, {});
    m.dashboard["hhh"][1][2]({
      data: {},
      handleError: function(e) {
        var t = e.error;
        console.log(222, t);
      }
    });
    var v = !1,
      y = {
        install: function(e) {
          v ||
            ((v = !0),
            Object.defineProperty(e.prototype, "$http", {
              get: function() {
                return m;
              }
            }));
        }
      };
    function w(e, t) {
      if ("string" !== typeof e) return !1;
      try {
        window.localStorage.setItem(e, JSON.stringify(t));
      } catch (n) {
        return !1;
      }
    }
    function O(e) {
      if ("string" !== typeof e) return null;
      try {
        return JSON.parse(window.localStorage.getItem(e));
      } catch (t) {
        return window.localStorage.getItem(e);
      }
    }
    function k() {
      window.localStorage.clear();
    }
    var j = { set: w, get: O, clear: k },
      P = !1,
      S = {
        install: function(e) {
          P ||
            ((P = !0),
            Object.defineProperty(e.prototype, "$ls", {
              get: function() {
                return j;
              }
            }));
        }
      },
      E = n("8c4f"),
      N = n("2f62");
    o["a"]
      .use(S)
      .use(y)
      .use(E["a"])
      .use(N["a"]);
    var x = n("9483");
    Object(x["a"])("".concat("", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    });
    var _ = [
        { path: "/", redirect: "/login" },
        {
          path: "/login",
          component: function() {
            return n.e("chunk-6c34d8a4").then(n.bind(null, "37d4"));
          }
        },
        {
          path: "/admin",
          redirect: "/admin/dashboard",
          component: function() {
            return n.e("chunk-54d2b166").then(n.bind(null, "9b42"));
          },
          children: [
            {
              path: "dashboard",
              component: function() {
                return n.e("chunk-3b508903").then(n.bind(null, "7ff0"));
              }
            },
            {
              path: ":id",
              component: function() {
                return n.e("chunk-2d0da3c4").then(n.bind(null, "6b79"));
              }
            }
          ]
        }
      ],
      A = new E["a"]({ routes: _ }),
      C = A,
      I = { sideMenuIsOpen: !0 },
      M = {},
      T = {
        toggleSideMenuIsOpen: function(e) {
          e.sideMenuIsOpen = !e.sideMenuIsOpen;
        }
      },
      D = {},
      L = new N["a"].Store({ state: I, getters: M, mutations: T, actions: D }),
      $ = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "transition",
          { attrs: { name: e.transitionName, mode: "out-in" } },
          [n("router-view", { attrs: { id: "app" } })],
          1
        );
      },
      q = [],
      B =
        (n("c975"),
        {
          computed: {
            transitionName: function() {
              var e = this.$route.path;
              return "/login" === e || e.indexOf("admin") > -1
                ? "xm-slide"
                : "";
            }
          }
        }),
      J = B,
      F = (n("5f76"), n("2877")),
      U = Object(F["a"])(J, $, q, !1, null, "628a6d5b", null),
      H = U.exports;
    (o["a"].config.productionTip = !1),
      new o["a"]({
        router: C,
        store: L,
        render: function(e) {
          return e(H);
        }
      }).$mount("#app");
  },
  "5f76": function(e, t, n) {
    "use strict";
    var r = n("25a1"),
      o = n.n(r);
    o.a;
  }
});
//# sourceMappingURL=app.185c53f6.js.map
