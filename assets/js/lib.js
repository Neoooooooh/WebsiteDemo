/*!
 * pace.js v1.2.3
 * https://github.com/CodeByZach/pace/
 * Licensed MIT © HubSpot, Inc.
 */
(function () {
  function o(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var u,
    c,
    i,
    n,
    y,
    t,
    l,
    v,
    r,
    s,
    a,
    e,
    p,
    w,
    b,
    h,
    f,
    d,
    g,
    m,
    k,
    S,
    q,
    x,
    L,
    P,
    T,
    R,
    j,
    O,
    E,
    M,
    A,
    C,
    N,
    _,
    F,
    U,
    W,
    X,
    D,
    H,
    I,
    z,
    G,
    B = [].slice,
    J = {}.hasOwnProperty,
    K = function (t, e) {
      for (var n in e) J.call(e, n) && (t[n] = e[n]);
      function r() {
        this.constructor = t;
      }
      return (r.prototype = e.prototype), (t.prototype = new r()), (t.__super__ = e.prototype), t;
    },
    Q =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
        return -1;
      };
  function V() {}
  for (
    f = {
      className: '',
      catchupTime: 100,
      initialRate: 0.03,
      minTime: 250,
      ghostTime: 100,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: !0,
      restartOnPushState: !0,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: { checkInterval: 100, selectors: ['body'] },
      eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
      ajax: { trackMethods: ['GET'], trackWebSockets: !0, ignoreURLs: [] },
    },
      L = function () {
        var t;
        return null !=
          (t =
            'undefined' != typeof performance && null !== performance && 'function' == typeof performance.now
              ? performance.now()
              : void 0)
          ? t
          : +new Date();
      },
      T =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame,
      h = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
      a = function (t, e, n) {
        return ('function' == typeof t.addEventListener ? t.addEventListener(e, n, !1) : void 0) || (t['on' + e] = n);
      },
      null == T &&
        ((T = function (t) {
          return setTimeout(t, 50);
        }),
        (h = function (t) {
          return clearTimeout(t);
        })),
      j = function (e) {
        var n = L(),
          r = function () {
            var t = L() - n;
            return 33 <= t
              ? ((n = L()),
                e(t, function () {
                  return T(r);
                }))
              : setTimeout(r, 33 - t);
          };
        return r();
      },
      R = function () {
        var t = arguments[0],
          e = arguments[1],
          n = 3 <= arguments.length ? B.call(arguments, 2) : [];
        return 'function' == typeof t[e] ? t[e].apply(t, n) : t[e];
      },
      d = function () {
        for (
          var t, e, n, r = arguments[0], s = 2 <= arguments.length ? B.call(arguments, 1) : [], o = 0, i = s.length;
          o < i;
          o++
        )
          if ((e = s[o]))
            for (t in e)
              J.call(e, t) &&
                ((n = e[t]),
                null != r[t] && 'object' == typeof r[t] && null != n && 'object' == typeof n ? d(r[t], n) : (r[t] = n));
        return r;
      },
      p = function (t) {
        for (var e, n, r = (e = 0), s = 0, o = t.length; s < o; s++) (n = t[s]), (r += Math.abs(n)), e++;
        return r / e;
      },
      m = function (t, e) {
        var n, r;
        if (
          (null == t && (t = 'options'), null == e && (e = !0), (r = document.querySelector('[data-pace-' + t + ']')))
        ) {
          if (((n = r.getAttribute('data-pace-' + t)), !e)) return n;
          try {
            return JSON.parse(n);
          } catch (t) {
            return 'undefined' != typeof console && null !== console
              ? console.error('Error parsing inline pace options', t)
              : void 0;
          }
        }
      },
      V.prototype.on = function (t, e, n, r) {
        var s;
        return (
          null == r && (r = !1),
          null == this.bindings && (this.bindings = {}),
          null == (s = this.bindings)[t] && (s[t] = []),
          this.bindings[t].push({ handler: e, ctx: n, once: r })
        );
      },
      V.prototype.once = function (t, e, n) {
        return this.on(t, e, n, !0);
      },
      V.prototype.off = function (t, e) {
        var n, r, s;
        if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
          if (null == e) return delete this.bindings[t];
          for (n = 0, s = []; n < this.bindings[t].length; )
            this.bindings[t][n].handler === e ? s.push(this.bindings[t].splice(n, 1)) : s.push(n++);
          return s;
        }
      },
      V.prototype.trigger = function () {
        var t,
          e,
          n,
          r,
          s,
          o,
          i = arguments[0],
          a = 2 <= arguments.length ? B.call(arguments, 1) : [];
        if (null != (r = this.bindings) && r[i]) {
          for (n = 0, o = []; n < this.bindings[i].length; )
            (e = (s = this.bindings[i][n]).handler),
              (t = s.ctx),
              (s = s.once),
              e.apply(null != t ? t : this, a),
              s ? o.push(this.bindings[i].splice(n, 1)) : o.push(n++);
          return o;
        }
      },
      G = V,
      y = window.Pace || {},
      window.Pace = y,
      d(y, G.prototype),
      P = y.options = d({}, f, window.paceOptions, m()),
      W = 0,
      D = (I = ['ajax', 'document', 'eventLag', 'elements']).length;
    W < D;
    W++
  )
    !0 === P[(A = I[W])] && (P[A] = f[A]);
  function Y() {
    return Y.__super__.constructor.apply(this, arguments);
  }
  function Z() {
    this.progress = 0;
  }
  function $() {
    this.bindings = {};
  }
  function tt() {
    var e,
      o = this;
    tt.__super__.constructor.apply(this, arguments),
      (e = function (r) {
        var s = r.open;
        return (r.open = function (t, e, n) {
          return M(t) && o.trigger('request', { type: t, url: e, request: r }), s.apply(r, arguments);
        });
      }),
      (window.XMLHttpRequest = function (t) {
        t = new U(t);
        return e(t), t;
      });
    try {
      g(window.XMLHttpRequest, U);
    } catch (t) {}
    if (null != F) {
      window.XDomainRequest = function () {
        var t = new F();
        return e(t), t;
      };
      try {
        g(window.XDomainRequest, F);
      } catch (t) {}
    }
    if (null != _ && P.ajax.trackWebSockets) {
      window.WebSocket = function (t, e) {
        var n = null != e ? new _(t, e) : new _(t);
        return M('socket') && o.trigger('request', { type: 'socket', url: t, protocols: e, request: n }), n;
      };
      try {
        g(window.WebSocket, _);
      } catch (t) {}
    }
  }
  function et() {
    this.complete = o(this.complete, this);
    var t = this;
    (this.elements = []),
      k().on('request', function () {
        return t.watch.apply(t, arguments);
      });
  }
  function nt(t) {
    var e, n, r, s;
    for (
      null == t && (t = {}),
        this.complete = o(this.complete, this),
        this.elements = [],
        null == t.selectors && (t.selectors = []),
        n = 0,
        r = (s = t.selectors).length;
      n < r;
      n++
    )
      (e = s[n]), this.elements.push(new i(e, this.complete));
  }
  function rt(t, e) {
    (this.selector = t), (this.completeCallback = e), (this.progress = 0), this.check();
  }
  function st() {
    var t,
      e,
      n = this;
    (this.progress = null != (e = this.states[document.readyState]) ? e : 100),
      (t = document.onreadystatechange),
      (document.onreadystatechange = function () {
        return (
          null != n.states[document.readyState] && (n.progress = n.states[document.readyState]),
          'function' == typeof t ? t.apply(null, arguments) : void 0
        );
      });
  }
  function ot(t) {
    (this.source = t),
      (this.last = this.sinceLastUpdate = 0),
      (this.rate = P.initialRate),
      (this.catchup = 0),
      (this.progress = this.lastProgress = 0),
      null != this.source && (this.progress = R(this.source, 'progress'));
  }
  (G = Error),
    K(Y, G),
    (n = Y),
    (Z.prototype.getElement = function () {
      var t;
      if (null == this.el) {
        if (!(t = document.querySelector(P.target))) throw new n();
        (this.el = document.createElement('div')),
          (this.el.className = 'pace pace-active'),
          (document.body.className = document.body.className.replace(/(pace-done )|/, 'pace-running '));
        var e = '' !== P.className ? ' ' + P.className : '';
        (this.el.innerHTML =
          '<div class="pace-progress' +
          e +
          '">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
          null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el);
      }
      return this.el;
    }),
    (Z.prototype.finish = function () {
      var t = this.getElement();
      return (
        (t.className = t.className.replace('pace-active', 'pace-inactive')),
        (document.body.className = document.body.className.replace('pace-running ', 'pace-done '))
      );
    }),
    (Z.prototype.update = function (t) {
      return (this.progress = t), y.trigger('progress', t), this.render();
    }),
    (Z.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (t) {
        n = t;
      }
      return (this.el = void 0);
    }),
    (Z.prototype.render = function () {
      var t, e, n, r, s, o, i;
      if (null == document.querySelector(P.target)) return !1;
      for (
        t = this.getElement(),
          r = 'translate3d(' + this.progress + '%, 0, 0)',
          s = 0,
          o = (i = ['webkitTransform', 'msTransform', 'transform']).length;
        s < o;
        s++
      )
        (e = i[s]), (t.children[0].style[e] = r);
      return (
        (!this.lastRenderedProgress || this.lastRenderedProgress | (0 !== this.progress) | 0) &&
          (t.children[0].setAttribute('data-progress-text', (0 | this.progress) + '%'),
          100 <= this.progress ? (n = '99') : ((n = this.progress < 10 ? '0' : ''), (n += 0 | this.progress)),
          t.children[0].setAttribute('data-progress', '' + n)),
        y.trigger('change', this.progress),
        (this.lastRenderedProgress = this.progress)
      );
    }),
    (Z.prototype.done = function () {
      return 100 <= this.progress;
    }),
    (c = Z),
    ($.prototype.trigger = function (t, e) {
      var n, r, s, o, i;
      if (null != this.bindings[t]) {
        for (i = [], r = 0, s = (o = this.bindings[t]).length; r < s; r++) (n = o[r]), i.push(n.call(this, e));
        return i;
      }
    }),
    ($.prototype.on = function (t, e) {
      var n;
      return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e);
    }),
    (m = $),
    (U = window.XMLHttpRequest),
    (F = window.XDomainRequest),
    (_ = window.WebSocket),
    (g = function (t, e) {
      var n,
        r = [];
      for (n in e.prototype)
        try {
          null == t[n] && 'function' != typeof e[n]
            ? 'function' == typeof Object.defineProperty
              ? r.push(
                  Object.defineProperty(t, n, {
                    get: (function (t) {
                      return function () {
                        return e.prototype[t];
                      };
                    })(n),
                    configurable: !0,
                    enumerable: !0,
                  })
                )
              : r.push((t[n] = e.prototype[n]))
            : r.push(void 0);
        } catch (t) {
          0;
        }
      return r;
    }),
    (q = []),
    (y.ignore = function () {
      var t = arguments[0],
        e = 2 <= arguments.length ? B.call(arguments, 1) : [];
      return q.unshift('ignore'), (e = t.apply(null, e)), q.shift(), e;
    }),
    (y.track = function () {
      var t = arguments[0],
        e = 2 <= arguments.length ? B.call(arguments, 1) : [];
      return q.unshift('track'), (e = t.apply(null, e)), q.shift(), e;
    }),
    (M = function (t) {
      if ((null == t && (t = 'GET'), 'track' === q[0])) return 'force';
      if (!q.length && P.ajax) {
        if ('socket' === t && P.ajax.trackWebSockets) return !0;
        if (((t = t.toUpperCase()), 0 <= Q.call(P.ajax.trackMethods, t))) return !0;
      }
      return !1;
    }),
    K(tt, m),
    (t = tt),
    (X = null),
    (E = function (t) {
      for (var e, n = P.ajax.ignoreURLs, r = 0, s = n.length; r < s; r++)
        if ('string' == typeof (e = n[r])) {
          if (-1 !== t.indexOf(e)) return !0;
        } else if (e.test(t)) return !0;
      return !1;
    }),
    (k = function () {
      return null == X && (X = new t()), X;
    })().on('request', function (t) {
      var o,
        i = t.type,
        a = t.request,
        e = t.url;
      if (!E(e))
        return y.running || (!1 === P.restartOnRequestAfter && 'force' !== M(i))
          ? void 0
          : ((o = arguments),
            'boolean' == typeof (e = P.restartOnRequestAfter || 0) && (e = 0),
            setTimeout(function () {
              var t,
                e,
                n,
                r,
                s = 'socket' === i ? a.readyState < 1 : 0 < (s = a.readyState) && s < 4;
              if (s) {
                for (y.restart(), r = [], t = 0, e = (n = y.sources).length; t < e; t++) {
                  if ((A = n[t]) instanceof u) {
                    A.watch.apply(A, o);
                    break;
                  }
                  r.push(void 0);
                }
                return r;
              }
            }, e));
    }),
    (et.prototype.watch = function (t) {
      var e = t.type,
        n = t.request,
        t = t.url;
      if (!E(t)) return (n = new ('socket' === e ? r : s)(n, this.complete)), this.elements.push(n);
    }),
    (et.prototype.complete = function (e) {
      return (this.elements = this.elements.filter(function (t) {
        return t !== e;
      }));
    }),
    (u = et),
    (s = function (e, n) {
      var t,
        r,
        s,
        o,
        i = this;
      if (((this.progress = 0), null != window.ProgressEvent))
        for (
          a(e, 'progress', function (t) {
            return t.lengthComputable
              ? (i.progress = (100 * t.loaded) / t.total)
              : (i.progress = i.progress + (100 - i.progress) / 2);
          }),
            t = 0,
            r = (o = ['load', 'abort', 'timeout', 'error']).length;
          t < r;
          t++
        )
          a(e, o[t], function () {
            return n(i), (i.progress = 100);
          });
      else
        (s = e.onreadystatechange),
          (e.onreadystatechange = function () {
            var t;
            return (
              0 === (t = e.readyState) || 4 === t
                ? (n(i), (i.progress = 100))
                : 3 === e.readyState && (i.progress = 50),
              'function' == typeof s ? s.apply(null, arguments) : void 0
            );
          });
    }),
    (r = function (t, e) {
      for (var n, r = this, s = (this.progress = 0), o = (n = ['error', 'open']).length; s < o; s++)
        a(t, n[s], function () {
          return e(r), (r.progress = 100);
        });
    }),
    (nt.prototype.complete = function (e) {
      return (this.elements = this.elements.filter(function (t) {
        return t !== e;
      }));
    }),
    (G = nt),
    (rt.prototype.check = function () {
      var t = this;
      return document.querySelector(this.selector)
        ? this.done()
        : setTimeout(function () {
            return t.check();
          }, P.elements.checkInterval);
    }),
    (rt.prototype.done = function () {
      return this.completeCallback(this), (this.completeCallback = null), (this.progress = 100);
    }),
    (i = rt),
    (st.prototype.states = { loading: 0, interactive: 50, complete: 100 }),
    (K = st),
    (m = function () {
      var e,
        n,
        r,
        s,
        o,
        i = this;
      (this.progress = 0),
        (o = []),
        (s = 0),
        (r = L()),
        (n = setInterval(function () {
          var t = L() - r - 50;
          return (
            (r = L()),
            o.push(t),
            o.length > P.eventLag.sampleCount && o.shift(),
            (e = p(o)),
            ++s >= P.eventLag.minSamples && e < P.eventLag.lagThreshold
              ? ((i.progress = 100), clearInterval(n))
              : (i.progress = (3 / (e + 3)) * 100)
          );
        }, 50));
    }),
    (ot.prototype.tick = function (t, e) {
      return (
        null == e && (e = R(this.source, 'progress')),
        100 <= e && (this.done = !0),
        e === this.last
          ? (this.sinceLastUpdate += t)
          : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate),
            (this.catchup = (e - this.progress) / P.catchupTime),
            (this.sinceLastUpdate = 0),
            (this.last = e)),
        e > this.progress && (this.progress += this.catchup * t),
        (e = 1 - Math.pow(this.progress / 100, P.easeFactor)),
        (this.progress += e * this.rate * t),
        (this.progress = Math.min(this.lastProgress + P.maxProgressPerFrame, this.progress)),
        (this.progress = Math.max(0, this.progress)),
        (this.progress = Math.min(100, this.progress)),
        (this.lastProgress = this.progress),
        this.progress
      );
    }),
    (v = ot),
    (b = e = N = w = O = C = null),
    (y.running = !1),
    (S = function () {
      if (P.restartOnPushState) return y.restart();
    }),
    null != window.history.pushState &&
      ((H = window.history.pushState),
      (window.history.pushState = function () {
        return S(), H.apply(window.history, arguments);
      })),
    null != window.history.replaceState &&
      ((z = window.history.replaceState),
      (window.history.replaceState = function () {
        return S(), z.apply(window.history, arguments);
      })),
    (l = { ajax: u, elements: G, document: K, eventLag: m }),
    (x = function () {
      var t, e, n, r, s, o, i, a;
      for (y.sources = C = [], e = 0, r = (o = ['ajax', 'elements', 'document', 'eventLag']).length; e < r; e++)
        !1 !== P[(t = o[e])] && C.push(new l[t](P[t]));
      for (n = 0, s = (a = null != (i = P.extraSources) ? i : []).length; n < s; n++) (A = a[n]), C.push(new A(P));
      return (y.bar = w = new c()), (O = []), (N = new v());
    })(),
    (y.stop = function () {
      return (
        y.trigger('stop'),
        (y.running = !1),
        w.destroy(),
        (b = !0),
        null != e && ('function' == typeof h && h(e), (e = null)),
        x()
      );
    }),
    (y.restart = function () {
      return y.trigger('restart'), y.stop(), y.start();
    }),
    (y.go = function () {
      var m;
      return (
        (y.running = !0),
        w.render(),
        (m = L()),
        (b = !1),
        (e = j(function (t, e) {
          w.progress;
          for (var n, r, s, o, i, a, u, c, l, p, h = (a = 0), f = !0, d = (u = 0), g = C.length; u < g; d = ++u)
            for (
              A = C[d],
                i = null != O[d] ? O[d] : (O[d] = []),
                s = c = 0,
                l = (r = null != (p = A.elements) ? p : [A]).length;
              c < l;
              s = ++c
            )
              (o = r[s]), (f &= (o = null != i[s] ? i[s] : (i[s] = new v(o))).done), o.done || (h++, (a += o.tick(t)));
          return (
            (n = a / h),
            w.update(N.tick(t, n)),
            w.done() || f || b
              ? (w.update(100),
                y.trigger('done'),
                setTimeout(function () {
                  return w.finish(), (y.running = !1), y.trigger('hide');
                }, Math.max(P.ghostTime, Math.max(P.minTime - (L() - m), 0))))
              : e()
          );
        }))
      );
    }),
    (y.start = function (t) {
      d(P, t), (y.running = !0);
      try {
        w.render();
      } catch (t) {
        n = t;
      }
      return document.querySelector('.pace') ? (y.trigger('start'), y.go()) : setTimeout(y.start, 50);
    }),
    'function' == typeof define && define.amd
      ? define(function () {
          return y;
        })
      : 'object' == typeof exports
      ? (module.exports = y)
      : P.startOnPageLoad && y.start();
}).call(this);
