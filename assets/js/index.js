!(function () {
  'use strict';
  var t = {
      2210: function (t, e, n) {
        n.d(e, {
          im: function () {
            return r;
          },
          ab: function () {
            return s;
          },
          Lb: function () {
            return a;
          },
          Gi: function () {
            return l;
          },
        }),
          n(4954);
        var i = (window.sdListenersLoadProgress = window.sdListenersLoadProgress || []),
          o = (window.sdListenersLoadDone = window.sdListenersLoadDone || []);
        function r(t) {
          i.push(t);
        }
        function s(t) {
          i.some(function (e, n) {
            if (e === t) return i.splice(n, 1), !0;
          });
        }
        function a(t) {
          o.push(t);
        }
        function l(t) {
          o.some(function (e, n) {
            if (e === t) return o.splice(n, 1), !0;
          });
        }
      },
      4516: function (t, e, n) {
        n.d(e, {
          RC: function () {
            return o;
          },
          V2: function () {
            return r;
          },
        });
        var i = (window.sdListenersTick = window.sdListenersTick || []);
        function o(t) {
          i.push(t);
        }
        function r(t) {
          i.some(function (e, n) {
            if (e === t) return i.splice(n, 1), !0;
          });
        }
      },
      4295: function (t, e, n) {
        n.d(e, {
          ib: function () {
            return c;
          },
          HK: function () {
            return u;
          },
          yj: function () {
            return h;
          },
          g2: function () {
            return f;
          },
          fB: function () {
            return p;
          },
          Ex: function () {
            return d;
          },
          f: function () {
            return y;
          },
          D6: function () {
            return v;
          },
          kP: function () {
            return m;
          },
        });
        var i = n(1890),
          o = n(7650),
          r = (window.sdListenersResize = window.sdListenersResize || []),
          s = (window.sdListenersResizeAlways = window.sdListenersResizeAlways || []),
          a = (window.sdListenersResetSize = window.sdListenersResetSize || []),
          l = (window.sdListenersOrientationchange = window.sdListenersOrientationchange || []);
        function c(t, e) {
          e &&
            requestAnimationFrame(function () {
              t();
            }),
            r.push(t);
        }
        function u(t) {
          r.some(function (e, n) {
            if (e === t) return r.splice(n, 1), !0;
          });
        }
        function h(t, e) {
          e &&
            requestAnimationFrame(function () {
              t();
            }),
            s.push(t);
        }
        function f(t) {
          s.some(function (e, n) {
            if (e === t) return s.splice(n, 1), !0;
          });
        }
        function p(t, e) {
          e &&
            requestAnimationFrame(function () {
              t();
            }),
            a.push(t);
        }
        function d(t) {
          a.some(function (e, n) {
            if (e === t) return a.splice(n, 1), !0;
          });
        }
        function y(t, e) {
          e &&
            requestAnimationFrame(function () {
              var e = 0 !== window.orientation;
              t(e);
            }),
            l.push(t);
        }
        function v(t) {
          l.some(function (e, n) {
            if (e === t) return l.splice(n, 1), !0;
          });
        }
        window.sdWindowWidth = window.sdWindowWidth || 0;
        var m = (0, o.Ds)(function (t) {
          for (var e = 0; e < s.length; e++) s[e](t);
          if (t || !i.tq || window.sdWindowWidth !== window.innerWidth) {
            window.sdWindowWidth = window.innerWidth;
            for (var n = 0; n < a.length; n++) a[n](t);
            for (var o = 0; o < r.length; o++) r[o](t);
          }
        }, 100);
      },
      7650: function (t, e, n) {
        function i(t) {
          var e = t.changedTouches ? t.changedTouches[0] : t;
          return { x: e.clientX, y: e.clientY };
        }
        function o(t) {
          var e,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200;
          return function () {
            var i = arguments,
              o = this;
            clearTimeout(e),
              (e = setTimeout(function () {
                t.apply(o, i);
              }, n));
          };
        }
        function r(t) {
          return new Promise(function (e) {
            t.complete ? e() : t.addEventListener('load', e);
          });
        }
        function s(t) {
          return new Promise(function (e) {
            4 === t.readyState ? e() : t.addEventListener('loadeddata', e);
          });
        }
        n.d(e, {
          fC: function () {
            return i;
          },
          Ds: function () {
            return o;
          },
          WH: function () {
            return r;
          },
          NR: function () {
            return s;
          },
        }),
          n(851),
          n(6253);
      },
      3510: function (t, e, n) {
        var i = n(4954);
        e.Z = window.sdMedia =
          window.sdMedia ||
          (function () {
            var t = {},
              e = window.matchMedia('screen and (max-width: '.concat(i.Z.breakpoint - 1, 'px)'));
            Object.defineProperty(t, 'isSp', {
              get: function () {
                return e.matches;
              },
            });
            var n = window.matchMedia(
              'screen and (min-width: '
                .concat(i.Z.breakpoint, 'px) and (max-width: ')
                .concat(i.Z.baseWidthMinPc - 1, 'px)')
            );
            Object.defineProperty(t, 'isTb', {
              get: function () {
                return n.matches;
              },
            });
            var o = window.matchMedia(
              'screen and (min-width: '.concat(i.Z.breakpoint, 'px) and (orientation: portrait)')
            );
            return (
              Object.defineProperty(t, 'isTbPortrait', {
                get: function () {
                  return o.matches;
                },
              }),
              t
            );
          })();
      },
      1890: function (t, e, n) {
        n.d(e, {
          w1: function () {
            return r;
          },
          vU: function () {
            return l;
          },
          tq: function () {
            return f;
          },
        }),
          n(1466);
        var i = navigator.userAgent,
          o = navigator.platform,
          r = /Trident/.test(i) || /msie/i.test(i),
          s = /Edg/.test(i),
          a = /Chrome/.test(i),
          l = /Firefox/.test(i),
          c =
            (!s && !a && /Safari/.test(i),
            /Win/.test(o),
            /iPad/.test(i) || (/Macintosh/.test(i) && 'ontouchend' in document)),
          u = (/iPhone|iPod/.test(i) || c) && !window.MSStream,
          h = /Android/i.test(i),
          f = u || h;
        'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints,
          c || (h && i.match(/Android.+Mobile/));
      },
      2585: function (t, e, n) {
        n(2139), n(5666);
        var i = n(43),
          o = n(8670),
          r = n(7856),
          s = n(8766),
          a = n(6086),
          l = n(4656),
          c = (n(8351), n(8837), n(5767), n(1181), n(6997), n(6253), n(7476), n(4949)),
          u = n(7477),
          h = n(9885);
        function f(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function p(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(n), !0).forEach(function (e) {
                  (0, c.Z)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
          }
          return t;
        }
        var d = (function (t) {
            (0, s.Z)(r, t);
            var e,
              n,
              i =
                ((e = r),
                (n = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                  if (Reflect.construct.sham) return !1;
                  if ('function' == typeof Proxy) return !0;
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                  } catch (t) {
                    return !1;
                  }
                })()),
                function () {
                  var t,
                    i = (0, l.Z)(e);
                  if (n) {
                    var o = (0, l.Z)(this).constructor;
                    t = Reflect.construct(i, arguments, o);
                  } else t = i.apply(this, arguments);
                  return (0, a.Z)(this, t);
                });
            function r() {
              var t,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              (0, o.Z)(this, r);
              var n = e.el,
                s = void 0 === n ? document.body : n;
              return (
                (e.isManualInit = !0),
                (t = i.call(this, p({ el: s }, e))).onPreInit && t.onPreInit(),
                t.onInit &&
                  h.Z.once('init', function () {
                    t.onInit();
                  }),
                h.Z.emit('readyPage'),
                t
              );
            }
            return r;
          })(u.Z),
          y = n(6358),
          v = (n(110), n(851), n(9115), n(9371), n(2172)),
          m = n(1578),
          g = n(5016),
          w = {
            copyCount: 3,
            yPercent: 70,
            duration: 1,
            staggerAmount: 0.4,
            staggerLine: 0.24,
            easeColor: 'power2.in',
            durationOpacity: 0.6,
            easeOpacity: 'power2.out',
            durationMove1: 1,
            easeMove: 'expo.out',
            staggerMove: 0.05,
            yHide: -40,
            easeMoveHide: 'power4.out',
            durationHide: 1.2,
            durationRateHover: 0.8,
          };
        (w.durationMove2 = w.durationMove1), (w.durationMove3 = w.durationMove2);
        var Z = '#c1c4cb',
          x = '#3455fc',
          S = '#0af0f2',
          M = (function () {
            function t(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (0, o.Z)(this, t),
                (this.delay = n.delay || 0),
                n.isManual
                  ? (this.lines = (0, v.Z)(e.querySelectorAll('span')))
                  : (this.lines = new m.C(e, { type: 'lines', span: !0 }).lines),
                (this.overlapLines = this.lines.map(function (t, e) {
                  return new k(t, n);
                }));
            }
            var e;
            return (
              (0, r.Z)(t, [
                {
                  key: 'show',
                  value:
                    ((e = (0, i.Z)(
                      regeneratorRuntime.mark(function t() {
                        var e = this;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    Promise.all(
                                      this.overlapLines.map(
                                        (function () {
                                          var t = (0, i.Z)(
                                            regeneratorRuntime.mark(function t(n, i) {
                                              return regeneratorRuntime.wrap(function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (t.next = 2), (0, g.D)(e.delay + w.staggerLine * i);
                                                    case 2:
                                                      return (t.next = 4), n.show();
                                                    case 4:
                                                    case 'end':
                                                      return t.stop();
                                                  }
                                              }, t);
                                            })
                                          );
                                          return function (e, n) {
                                            return t.apply(this, arguments);
                                          };
                                        })()
                                      )
                                    )
                                  );
                                case 2:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                },
                {
                  key: 'hide',
                  value: function () {
                    return Promise.all(
                      this.overlapLines.map(function (t) {
                        return t.hide();
                      })
                    );
                  },
                },
                {
                  key: 'hover',
                  value: function () {
                    return Promise.all(
                      this.overlapLines.map(function (t) {
                        return t.hover();
                      })
                    );
                  },
                },
                {
                  key: 'remove',
                  value: function () {
                    this.overlapLines.forEach(function (t) {
                      t.remove();
                    });
                  },
                },
              ]),
              t
            );
          })(),
          k = (function () {
            function t(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              (0, o.Z)(this, t);
              var i = n.amount,
                r = void 0 === i ? w.staggerAmount : i,
                s = n.isHover,
                a = void 0 !== s && s,
                l = n.isAutoRemove,
                c = void 0 === l ? !a : l;
              (this.el = e),
                (this.color = [Z, x, S]),
                (this.duration = [w.durationMove1, w.durationMove2, w.durationMove3]),
                (this.delayMove = [0, 0.2 * w.staggerMove, w.staggerMove + w.staggerMove]),
                (this.amount = r),
                (this.isAutoRemove = c),
                (this.isHover = a),
                (this.elsCopy = []),
                (this.propertyY = 'yPercent');
              var u = w.yPercent;
              (this.y = [0.3 * u, 0.65 * u, u]),
                e.classList.add('mOverlap'),
                this.isHover && e.classList.add('-hover'),
                (e.style.display = 'inline-block');
              for (
                var h = e.innerHTML, f = document.createDocumentFragment(), p = 0;
                p < w.copyCount;
                p = (p + 1) | 0
              ) {
                var d = document.createElement('span');
                d.classList.add('mOverlap-line'), (d.innerHTML = h), f.append(d), this.elsCopy.push(d);
              }
              (e.innerHTML = ''), e.append(f);
            }
            var e, n;
            return (
              (0, r.Z)(t, [
                {
                  key: 'show',
                  value:
                    ((n = (0, i.Z)(
                      regeneratorRuntime.mark(function t() {
                        var e = this;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.el.classList.add('-animate'),
                                    (t.next = 3),
                                    Promise.all(
                                      this.elsCopy.map(function (t, n) {
                                        var i;
                                        return y.ZP.timeline()
                                          .from(
                                            t,
                                            {
                                              color: e.color[n],
                                              duration: w.duration * w.durationRateHover,
                                              delay: (e.amount / (e.elsCopy.length - 1)) * n,
                                              ease: w.easeColor,
                                            },
                                            0
                                          )
                                          .fromTo(
                                            t,
                                            { opacity: 0 },
                                            {
                                              opacity: 1,
                                              duration: w.durationOpacity * w.durationRateHover,
                                              delay: e.delayMove[n],
                                              ease: w.easeOpacity,
                                            },
                                            0
                                          )
                                          .from(
                                            t,
                                            ((i = {}),
                                            (0, c.Z)(i, e.propertyY, e.y[n]),
                                            (0, c.Z)(i, 'duration', e.duration[n] * w.durationRateHover),
                                            (0, c.Z)(i, 'delay', e.delayMove[n]),
                                            (0, c.Z)(i, 'ease', w.easeMove),
                                            i),
                                            0
                                          );
                                      })
                                    )
                                  );
                                case 3:
                                  this.el.classList.remove('-animate'), this.isAutoRemove && this.remove();
                                case 5:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function () {
                      return n.apply(this, arguments);
                    }),
                },
                {
                  key: 'hide',
                  value: function () {
                    var t = w.durationHide;
                    return y.ZP.to(this.el, {
                      yPercent: w.yHide,
                      opacity: 0,
                      duration: t,
                      ease: w.easeMoveHide,
                      stagger: { amount: this.amount },
                    });
                  },
                },
                {
                  key: 'hover',
                  value:
                    ((e = (0, i.Z)(
                      regeneratorRuntime.mark(function t() {
                        var e = this;
                        return regeneratorRuntime.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    this.el.classList.add('-animate'),
                                    (t.next = 3),
                                    Promise.all(
                                      this.elsCopy.map(function (t, n) {
                                        var i,
                                          o = y.ZP.timeline();
                                        return (
                                          o.from(
                                            t,
                                            {
                                              color: e.color[n],
                                              duration: w.duration,
                                              delay: (e.amount / (e.elsCopy.length - 1)) * n,
                                              ease: w.easeColor,
                                            },
                                            0
                                          ),
                                          0 !== n &&
                                            (o.fromTo(
                                              t,
                                              { opacity: 0 },
                                              {
                                                opacity: 1,
                                                duration: w.durationOpacity,
                                                delay: e.delayMove[n],
                                                ease: w.easeOpacity,
                                              },
                                              0
                                            ),
                                            o.from(
                                              t,
                                              ((i = {}),
                                              (0, c.Z)(i, e.propertyY, e.y[n]),
                                              (0, c.Z)(i, 'duration', e.duration[n]),
                                              (0, c.Z)(i, 'delay', e.delayMove[n]),
                                              (0, c.Z)(i, 'ease', w.easeMove),
                                              i),
                                              0
                                            )),
                                          o
                                        );
                                      })
                                    )
                                  );
                                case 3:
                                  this.el.classList.remove('-animate');
                                case 4:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                },
                {
                  key: 'remove',
                  value: function () {
                    this.elsCopy.slice(1).forEach(function (t) {
                      t.remove();
                    });
                  },
                },
              ]),
              t
            );
          })();
        var C = (function (t) {
          (0, s.Z)(h, t);
          var e,
            n,
            c,
            u =
              ((n = h),
              (c = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = (0, l.Z)(n);
                if (c) {
                  var i = (0, l.Z)(this).constructor;
                  t = Reflect.construct(e, arguments, i);
                } else t = e.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function h() {
            var t;
            (0, o.Z)(this, h);
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return (
              ((t = u.call.apply(u, [this].concat(n))).isStarted = !1), (t.isLoadDone = !1), (t.isStartDone = !1), t
            );
          }
          return (
            (0, r.Z)(h, [
              {
                key: 'onInit',
                value: function () {
                  (this.motionCatch1 = new M(this.refs.catch1)),
                    (this.motionCatch2 = new M(this.refs.catch2)),
                    (this.motionCatch3 = new M(this.refs.catch3)),
                    this.el.classList.add('-ready');
                },
              },
              {
                key: 'onLoadProgress',
                value: function (t) {
                  (this.refs.percentage.textContent = ''.concat(Math.round(t), '%')), t > 0 && this.start();
                },
              },
              {
                key: 'onLoadDone',
                value: function () {
                  var t = this;
                  y.ZP.delayedCall(0.4, function () {
                    t.refs.percentage.classList.add('-hide');
                  }),
                    (this.isLoadDone = !0),
                    this.finish();
                },
              },
              {
                key: 'start',
                value:
                  ((e = (0, i.Z)(
                    regeneratorRuntime.mark(function t() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.isStarted) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return');
                              case 2:
                                return (
                                  (this.isStarted = !0),
                                  (e = 0.79 * (w.duration + w.staggerAmount)),
                                  this.motionCatch1.show(),
                                  (t.next = 7),
                                  (0, g.D)(e)
                                );
                              case 7:
                                return this.motionCatch1.hide(), this.motionCatch2.show(), (t.next = 11), (0, g.D)(e);
                              case 11:
                                return (
                                  this.motionCatch2.hide(), this.motionCatch3.show(), (t.next = 15), (0, g.D)(e - 0.5)
                                );
                              case 15:
                                (this.isStartDone = !0), this.finish();
                              case 17:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'finish',
                value: function () {
                  var t = this;
                  this.isLoadDone &&
                    this.isStartDone &&
                    (y.ZP.delayedCall(0.5, function () {
                      t.motionCatch3.hide(),
                        t.el.addEventListener('transitionend', function () {
                          t.destroy();
                        }),
                        t.el.classList.add('-hide');
                    }),
                    this.emit('startOpeningRay'));
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.el.remove(), this.onDestroy();
                },
              },
            ]),
            h
          );
        })(u.Z);
        (C.componentName = 'cLoading'), (C.isPermanent = !0);
        var O = n(4787),
          R = n(2553),
          T = n(7971),
          b = (n(9357), n(1246), n(6059), n(8719)),
          P = n(4954),
          I = n(3510),
          A = n(1890);
        function L(t, e) {
          var n = 'object' === (0, b.Z)(t) && 'Array' === t.constructor.name,
            i = [];
          return (
            (n ? t : [t]).forEach(function (t) {
              var n = document.createElement('img');
              i.push(
                new Promise(function (t) {
                  n.addEventListener('load', function () {
                    t(n);
                  });
                })
              ),
                e && (n.crossOrigin = 'anonymous'),
                (n.src = t);
            }),
            n ? Promise.all(i) : i[0]
          );
        }
        function H(t) {
          return (
            (t * (A.tq ? Math.min(window.innerWidth, window.outerWidth) : window.innerWidth)) /
            (I.Z.isSp ? P.Z.designWidthSp : P.Z.designWidthPc)
          );
        }
        var E = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            var t;
            (0, o.Z)(this, c);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return (
              ((t = i.call.apply(i, [this].concat(n))).positionMouse = { x: H(1154), y: H(603) }),
              (t.positionCurrentNormal = { x: 0, y: 0 }),
              (t.positionCurrentAccent = { x: 0, y: 0 }),
              (t.positionCurrentTheme = { x: 0, y: 0 }),
              t
            );
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'onInit',
                value: function () {
                  this.motion = new R.Z(this.el.firstElementChild, { delay: 0.5 });
                },
              },
              {
                key: 'move',
                value: function (t) {
                  this.positionMouse = t;
                },
              },
              {
                key: 'show',
                value: function () {
                  this.motion.show();
                },
              },
              { key: 'hide', value: function () {} },
              {
                key: 'play',
                value: function () {
                  (this.positionCurrentNormal.x = this.positionMouse.x),
                    (this.positionCurrentNormal.y = this.positionMouse.y),
                    (this.positionCurrentAccent.x = this.positionMouse.x),
                    (this.positionCurrentAccent.y = this.positionMouse.y),
                    (this.positionCurrentTheme.x = this.positionMouse.x),
                    (this.positionCurrentTheme.y = this.positionMouse.y),
                    this.playTick();
                },
              },
              {
                key: 'pause',
                value: function () {
                  this.pauseTick();
                },
              },
              {
                key: 'onTick',
                value: function () {
                  var t = this.positionMouse.x - this.positionCurrentNormal.x;
                  (this.positionCurrentNormal.x += 0.16 * t),
                    Math.abs(t) < 0.1 && (this.positionCurrentNormal.x = this.positionMouse.x);
                  var e = this.positionMouse.y - this.positionCurrentNormal.y;
                  (this.positionCurrentNormal.y += 0.16 * e),
                    Math.abs(e) < 0.1 && (this.positionCurrentNormal.y = this.positionMouse.y);
                  var n = this.positionMouse.x - this.positionCurrentAccent.x;
                  (this.positionCurrentAccent.x += 0.14 * n),
                    Math.abs(n) < 0.1 && (this.positionCurrentAccent.x = this.positionMouse.x);
                  var i = this.positionMouse.y - this.positionCurrentAccent.y;
                  (this.positionCurrentAccent.y += 0.14 * i),
                    Math.abs(i) < 0.1 && (this.positionCurrentAccent.y = this.positionMouse.y);
                  var o = this.positionMouse.x - this.positionCurrentTheme.x;
                  (this.positionCurrentTheme.x += 0.12 * o),
                    Math.abs(o) < 0.1 && (this.positionCurrentTheme.x = this.positionMouse.x);
                  var r = this.positionMouse.y - this.positionCurrentTheme.y;
                  (this.positionCurrentTheme.y += 0.12 * r),
                    Math.abs(r) < 0.1 && (this.positionCurrentTheme.y = this.positionMouse.y);
                  var s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                    .concat(this.positionCurrentNormal.x, ',')
                    .concat(this.positionCurrentNormal.y, ',0,1)');
                  this.refs.text && (this.refs.text.style.transform = s),
                    (this.refs.shapeNormal.style.transform = s),
                    (this.refs.shapeNormal.style.opacity = Math.min(
                      0.5 * Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)),
                      1
                    )),
                    (this.refs.shapeAccent.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                      .concat(this.positionCurrentAccent.x, ',')
                      .concat(this.positionCurrentAccent.y, ',0,1)')),
                    (this.refs.shapeAccent.style.opacity = Math.min(
                      0.5 * Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)),
                      1
                    )),
                    (this.refs.shapeTheme.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                      .concat(this.positionCurrentTheme.x, ',')
                      .concat(this.positionCurrentTheme.y, ',0,1)'));
                },
              },
            ]),
            c
          );
        })(u.Z);
        E.componentName = 'cMouseStalker';
        var N = n(7650),
          D = n(6451);
        var W = {
          durationTitleEnFlicker: 1,
          staggerAmountTitleEnFlicker: 0.7,
          delayTitleEnOverlap: 0.4,
          durationHeaderShow: 1,
          delayHeaderShow: 1.5,
          delayVideoShow: 0.5,
          durationMarqueeShow: 0.5,
          easeMarqueeShow: 'power2.out',
          durationMarqueeHide: 0.3,
          easeMarqueeHide: 'power2.out',
          delayMouseStalkerShowScroll: 0.4,
          yHideTitle: -50,
          delayShowOtherRate: 0.9,
        };
        (W.delayTitleJp = W.delayTitleEnOverlap + 0.5),
          (W.delayLogo = W.delayTitleJp + 0.3),
          (W.delayMouseStalkerShow = W.delayLogo + 0.3);
        var F = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            return (0, o.Z)(this, c), i.apply(this, arguments);
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'onInit',
                value: function () {
                  var t = this;
                  (this.isDisable = !1),
                    (this.isShowMouseStalker = !1),
                    (this.motionTitleEnFlicker = new R.Z(this.refs.titleEnFlicker, {
                      duration: W.durationTitleEnFlicker,
                      amount: W.staggerAmountTitleEnFlicker,
                    })),
                    (this.motionTitleEnOverlap = new M(this.refs.titleEn, {
                      isManual: !0,
                      delay: W.delayTitleEnOverlap,
                    })),
                    (this.motionTitleJp = new R.Z(this.refs.titleJp, { delay: W.delayTitleJp })),
                    (this.motionLogo = new M(this.refs.logo, { isManual: !0, delay: W.delayLogo })),
                    (this.cMouseStalker = new E({ context: this.el })),
                    (this.cMarquee = new D.Z({ el: this.refs.marquee, context: this.el })),
                    (this.elsTitles = this.refs.titleInner),
                    (this.elsOthers = [this.refs.marquee, this.refs.video]),
                    y.ZP.set(this.elsOthers, { opacity: 0 }),
                    this.refs.video.pause(),
                    h.Z.on('mouseenterHeader', function () {
                      t.hideMouseStalker();
                    }),
                    h.Z.on('mouseleaveHeader', function () {
                      t.showMouseStalker();
                    }),
                    (this.onClickMouseStalker = function () {
                      t.isSp && h.Z.emit('openModal', 'lVideo');
                    }),
                    this.cMouseStalker.el.addEventListener('click', this.onClickMouseStalker);
                },
              },
              {
                key: 'onClick',
                value: function () {
                  this.isPc && h.Z.emit('openModal', 'lVideo');
                },
              },
              {
                key: 'start',
                value: function () {
                  var t = this;
                  return (
                    this.el.classList.add('-ready'),
                    Promise.all([
                      y.ZP.to(this.refs.video, {
                        opacity: 1,
                        duration: W.durationMarqueeShow,
                        ease: W.easeMarqueeShow,
                        delay: W.delayVideoShow,
                      }),
                      this.showMouseStalker(W.delayMouseStalkerShow),
                      this.motionTitleEnFlicker.show(),
                      this.motionTitleEnOverlap.show(),
                      this.motionTitleJp.show(),
                      this.motionLogo.show(),
                      4 === this.refs.video.readyState
                        ? this.refs.video.play()
                        : new Promise(function (e) {
                            t.refs.video.addEventListener('loadeddata', function () {
                              t.refs.video.play(), e();
                            });
                          }),
                      this.isPc ? this.cMouseStalker.play() : null,
                      y.ZP.to([this.refs.marquee, P.Z.cHeader.el], {
                        opacity: 1,
                        duration: W.durationHeaderShow,
                        ease: W.easeMarqueeShow,
                        delay: W.delayHeaderShow,
                      }),
                    ]).then(function () {
                      t.el.classList.add('-start');
                    })
                  );
                },
              },
              {
                key: 'visible',
                value: function () {
                  return (
                    this.el.classList.add('-ready', '-start'),
                    Promise.all([
                      y.ZP.set(this.elsOthers, { opacity: 1 }),
                      this.showMouseStalker(),
                      this.motionTitleEnFlicker.show(),
                      this.motionTitleEnOverlap.show(),
                      this.motionTitleJp.show(),
                      this.motionLogo.show(),
                      this.isPc ? this.cMouseStalker.play() : null,
                      y.ZP.set(P.Z.cHeader.el, { opacity: 1 }),
                    ])
                  );
                },
              },
              {
                key: 'enable',
                value: function () {
                  (this.isDisable = !1), this.el.classList.remove('-hide'), this.showMouseStalker();
                },
              },
              {
                key: 'disable',
                value: function () {
                  this.hideMouseStalker(), (this.isDisable = !0), this.el.classList.add('-hide');
                },
              },
              {
                key: 'play',
                value: function () {
                  this.refs.video.play(), this.isPc && this.cMouseStalker.play();
                },
              },
              {
                key: 'pause',
                value: function () {
                  this.refs.video.pause(), this.isPc && this.cMouseStalker.pause();
                },
              },
              {
                key: 'showMouseStalker',
                value: function () {
                  var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  if (!this.isDisable && !this.isShowMouseStalker)
                    return (
                      (this.isShowMouseStalker = !0),
                      T.Z.timeline(
                        {
                          delay: e,
                          onComplete: function () {
                            t.cMouseStalker.el.classList.add('-show'),
                              y.ZP.delayedCall(0.5, function () {
                                t.cMouseStalker.el.classList.add('-active');
                              });
                          },
                        },
                        'lHeroShowMouseStalker'
                      ).add([
                        function () {
                          t.cMouseStalker.show();
                        },
                        T.Z.to(this.cMouseStalker.el, {
                          opacity: 1,
                          duration: W.durationMarqueeShow,
                          ease: W.easeMarqueeShow,
                        }),
                      ])
                    );
                },
              },
              {
                key: 'hideMouseStalker',
                value: function () {
                  var t = this;
                  if (!this.isDisable && this.isShowMouseStalker)
                    return (
                      (this.isShowMouseStalker = !1),
                      T.Z.to(this.cMouseStalker.el, {
                        opacity: 0,
                        duration: W.durationMarqueeHide,
                        ease: W.easeMarqueeHide,
                        onComplete: function () {
                          t.cMouseStalker.hide(),
                            t.cMouseStalker.el.classList.remove('-show'),
                            t.cMouseStalker.el.classList.remove('-active');
                        },
                      })
                    );
                },
              },
              {
                key: 'hideProgress',
                value: function (t) {
                  var e = 1 - t,
                    n = W.delayShowOtherRate;
                  y.ZP.set(this.elsOthers, { opacity: (e - n) / (1 - n) }),
                    y.ZP.set(this.elsTitles, { y: W.yHideTitle * t, opacity: e });
                },
              },
              {
                key: 'onMousemove',
                value: function (t) {
                  this.isPc && this.cMouseStalker.move((0, N.fC)(t));
                },
              },
              {
                key: 'onOpenModal',
                value: function (t) {
                  'lVideo' === t &&
                    (this.refs.video.pause(),
                    this.cMarquee.pause(),
                    this.isPc && this.cMouseStalker.pause(),
                    this.hideMouseStalker());
                },
              },
              {
                key: 'onCloseModal',
                value: function (t) {
                  'lVideo' === t &&
                    (this.refs.video.play(),
                    this.cMarquee.play(),
                    this.isPc && this.cMouseStalker.play(),
                    this.showMouseStalker(W.delayMouseStalkerShowScroll));
                },
              },
              {
                key: 'onResize',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    y.ZP.set(t.el, { height: window.innerHeight });
                  }, 300);
                },
              },
              {
                key: 'onDestroy',
                value: function () {
                  this.cMouseStalker.el.removeEventListener('click', this.onClickMouseStalker),
                    (0, O.Z)((0, l.Z)(c.prototype), 'destroy', this).call(this);
                },
              },
            ]),
            c
          );
        })(u.Z);
        F.componentName = 'lHero';
        var q = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            var t;
            (0, o.Z)(this, c);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return (
              ((t = i.call.apply(i, [this].concat(n))).positionMouse = { x: 0, y: 0 }),
              (t.positionCurrentNormal = { x: 0, y: 0 }),
              (t.positionCurrentAccent = { x: 0, y: 0 }),
              (t.positionCurrentTheme = { x: 0, y: 0 }),
              t
            );
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'move',
                value: function (t) {
                  this.positionMouse = t;
                },
              },
              {
                key: 'play',
                value: function () {
                  (this.positionCurrentNormal.x = this.positionMouse.x),
                    (this.positionCurrentNormal.y = this.positionMouse.y),
                    (this.positionCurrentAccent.x = this.positionMouse.x),
                    (this.positionCurrentAccent.y = this.positionMouse.y),
                    (this.positionCurrentTheme.x = this.positionMouse.x),
                    (this.positionCurrentTheme.y = this.positionMouse.y),
                    this.playTick();
                },
              },
              {
                key: 'pause',
                value: function () {
                  this.pauseTick();
                },
              },
              {
                key: 'show',
                value: function (t) {
                  this.move(t), this.play(), T.Z.to(this.el, { opacity: 1 });
                },
              },
              {
                key: 'hide',
                value: function () {
                  T.Z.to(this.el, { opacity: 0 });
                },
              },
              {
                key: 'onTick',
                value: function () {
                  var t = this.positionMouse.x - this.positionCurrentNormal.x;
                  (this.positionCurrentNormal.x += 0.16 * t),
                    Math.abs(t) < 0.1 && (this.positionCurrentNormal.x = this.positionMouse.x);
                  var e = this.positionMouse.y - this.positionCurrentNormal.y;
                  (this.positionCurrentNormal.y += 0.16 * e),
                    Math.abs(e) < 0.1 && (this.positionCurrentNormal.y = this.positionMouse.y);
                  var n = this.positionMouse.x - this.positionCurrentAccent.x;
                  (this.positionCurrentAccent.x += 0.14 * n),
                    Math.abs(n) < 0.1 && (this.positionCurrentAccent.x = this.positionMouse.x);
                  var i = this.positionMouse.y - this.positionCurrentAccent.y;
                  (this.positionCurrentAccent.y += 0.14 * i),
                    Math.abs(i) < 0.1 && (this.positionCurrentAccent.y = this.positionMouse.y);
                  var o = this.positionMouse.x - this.positionCurrentTheme.x;
                  (this.positionCurrentTheme.x += 0.12 * o),
                    Math.abs(o) < 0.1 && (this.positionCurrentTheme.x = this.positionMouse.x);
                  var r = this.positionMouse.y - this.positionCurrentTheme.y;
                  (this.positionCurrentTheme.y += 0.12 * r),
                    Math.abs(r) < 0.1 && (this.positionCurrentTheme.y = this.positionMouse.y);
                  var s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                    .concat(this.positionCurrentNormal.x, ',')
                    .concat(this.positionCurrentNormal.y, ',0,1)');
                  this.refs.text && (this.refs.text.style.transform = s),
                    (this.refs.shapeNormal.style.transform = s),
                    (this.refs.shapeNormal.style.opacity = Math.min(
                      0.5 * Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)),
                      1
                    )),
                    (this.refs.shapeAccent.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                      .concat(this.positionCurrentAccent.x, ',')
                      .concat(this.positionCurrentAccent.y, ',0,1)')),
                    (this.refs.shapeAccent.style.opacity = Math.min(
                      0.5 * Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)),
                      1
                    )),
                    (this.refs.shapeTheme.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'
                      .concat(this.positionCurrentTheme.x, ',')
                      .concat(this.positionCurrentTheme.y, ',0,1)'));
                },
              },
            ]),
            c
          );
        })(u.Z);
        q.componentName = 'lNewsMouseStalker';
        var B = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            return (0, o.Z)(this, c), i.apply(this, arguments);
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'onInit',
                value: function () {
                  (this.lNewsMouseStalker = new q()),
                    (this.elsOthers = this.lNewsMouseStalker.el),
                    y.ZP.set(this.elsOthers, { opacity: 0 });
                },
              },
              {
                key: 'getMousePos',
                value: function (t) {
                  var e = this.el.getBoundingClientRect(),
                    n = (0, N.fC)(t);
                  return { x: n.x - e.left, y: n.y - e.top };
                },
              },
              {
                key: 'onMousemove',
                value: function (t) {
                  this.lNewsMouseStalker.move(this.getMousePos(t));
                },
              },
              {
                key: 'onMouseenter',
                value: function (t) {
                  this.lNewsMouseStalker.show(this.getMousePos(t));
                },
              },
              {
                key: 'onMouseleave',
                value: function () {
                  this.lNewsMouseStalker.hide();
                },
              },
            ]),
            c
          );
        })(u.Z);
        B.componentName = 'lNewsStalker';
        var z = n(6678),
          G = n(2825),
          j = n(4295);
        var V = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c(t) {
            var e;
            if (
              ((0, o.Z)(this, c),
              ((e = i.call(this, t)).isOpen = !1),
              (e.isAnimating = !1),
              (e.elTrigger = e.el.querySelector('[data-accordion-trigger]')),
              (e.elContent = (0, v.Z)(e.el.querySelectorAll('[data-accordion-content]'))),
              (e.elChild = (0, v.Z)(e.el.querySelectorAll('[data-news]'))),
              !e.elTrigger || !e.elContent)
            )
              return (0, a.Z)(e);
            for (var n = 0; n < e.elChild.length; n++) e.elChild.length <= 6 && (e.elTrigger.style.display = 'none');
            return (
              e.elContent.forEach(function (t) {
                T.Z.set(t, { opacity: 0, overflow: 'hidden', height: 0 });
              }),
              (e._onClickTrigger = e.clickTrigger.bind((0, z.Z)(e))),
              e.elTrigger.addEventListener('click', e._onClickTrigger, G.Z),
              e
            );
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'clickTrigger',
                value: function () {
                  this.isOpen || this.open();
                },
              },
              {
                key: 'open',
                value: function () {
                  var t = this;
                  this.isAnimating ||
                    this.isOpen ||
                    ((this.isOpen = !0),
                    (this.isAnimating = !0),
                    this.elTrigger.classList.add('-open'),
                    this.elContent.forEach(function (t) {
                      t.style.willChange = 'height';
                    }),
                    (this.elTrigger.style.display = 'none'),
                    this.elContent.forEach(function (e) {
                      T.Z.to(e, {
                        height: 'auto',
                        duration: 0.8,
                        opacity: 1,
                        ease: 'power4.out',
                        onComplete: function () {
                          (0, j.kP)(),
                            t.elContent.forEach(function (t) {
                              t.style.willChange = 'auto';
                            }),
                            (t.isAnimating = !1);
                        },
                      });
                    }));
                },
              },
            ]),
            c
          );
        })(u.Z);
        function Y(t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = (0, l.Z)(t);
            if (e) {
              var o = (0, l.Z)(this).constructor;
              n = Reflect.construct(i, arguments, o);
            } else n = i.apply(this, arguments);
            return (0, a.Z)(this, n);
          };
        }
        V.selectorRoot = '[data-accordion]';
        var U = (function (t) {
          (0, s.Z)(n, t);
          var e = Y(n);
          function n() {
            return (0, o.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  (this.lOutlineCatchEn = new J({ context: this.el })),
                    this.refs.catchJp.forEach(function (t, e) {
                      new _({ el: t });
                    }),
                    new X({ context: this.el });
                },
              },
              {
                key: 'maskImage',
                value: function (t) {
                  y.ZP.set(this.refs.image, {
                    maskImage:
                      t >= 1
                        ? 'none'
                        : 'linear-gradient(to top, rgba(0, 0, 0, 1) '
                            .concat(2 * Math.max(t - 0.5, 0) * 100, '%, transparent ')
                            .concat(100 * Math.min(2 * t, 1), '%)'),
                  });
                },
              },
              {
                key: 'onScroll',
                value: function (t) {
                  this.groupLOutlineImage;
                },
              },
              {
                key: 'onResize',
                value: function () {
                  this.groupLOutlineImage &&
                    (this.groupLOutlineImage.y = P.Z.scrollY - 0.4 * (P.Z.scrollY - P.Z.positionScrollNextSection));
                },
              },
            ]),
            n
          );
        })(u.Z);
        U.componentName = 'lOutline';
        var J = (function (t) {
          (0, s.Z)(n, t);
          var e = Y(n);
          function n() {
            var t;
            (0, o.Z)(this, n);
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            return ((t = e.call.apply(e, [this].concat(r))).isPlayed = !1), t;
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  this.motion = new M(this.el, { delay: 0.2 });
                },
              },
              {
                key: 'onInView',
                value: function () {
                  this.isPlayed || ((this.isPlayed = !0), this.show());
                },
              },
              {
                key: 'show',
                value: function () {
                  this.motion.show();
                },
              },
            ]),
            n
          );
        })(u.Z);
        J.componentName = 'lOutline-catchEn';
        var _ = (function (t) {
          (0, s.Z)(n, t);
          var e = Y(n);
          function n() {
            var t;
            (0, o.Z)(this, n);
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            return ((t = e.call.apply(e, [this].concat(r))).isPlayed = !1), t;
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  this.motion = new R.Z(this.el);
                },
              },
              {
                key: 'onInView',
                value: function () {
                  this.isPlayed || ((this.isPlayed = !0), this.show());
                },
              },
              {
                key: 'show',
                value: function () {
                  this.el.classList.add('-show'), this.motion.show();
                },
              },
            ]),
            n
          );
        })(u.Z);
        _.componentName = 'lOutline-catchJp';
        var X = (function (t) {
          (0, s.Z)(n, t);
          var e = Y(n);
          function n() {
            var t;
            (0, o.Z)(this, n);
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            return ((t = e.call.apply(e, [this].concat(r))).isPlayed = !1), t;
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  (this.elsLine = this.el.querySelectorAll(
                    I.Z.isSp ? 'span:not(.lOutline-text-pc)' : 'span:not(.lOutline-text-sp)'
                  )),
                    y.ZP.set(this.elsLine, { display: 'inline-block' });
                },
              },
              {
                key: 'onInView',
                value: function () {
                  this.isPlayed || ((this.isPlayed = !0), this.show());
                },
              },
              {
                key: 'show',
                value: function () {
                  y.ZP.from(this.elsLine, { yPercent: 120, duration: 1.9, ease: 'expo.out', stagger: 0.24 }),
                    y.ZP.from(this.elsLine, { opacity: 0, duration: 0.8, ease: 'power3.in', stagger: 0.24 });
                },
              },
            ]),
            n
          );
        })(u.Z);
        X.componentName = 'lOutline-text';
        var K,
          Q = n(9787);
        n(5115), n(1876);
        var $ = n(5933),
          tt = n.n($);
        function et(t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = (0, l.Z)(t);
            if (e) {
              var o = (0, l.Z)(this).constructor;
              n = Reflect.construct(i, arguments, o);
            } else n = i.apply(this, arguments);
            return (0, a.Z)(this, n);
          };
        }
        var nt = {
          fov: 20,
          radiusCylinder: I.Z.isSp ? 80 : 280,
          heightCylinder: I.Z.isSp ? 10 : 38,
          radialSegmentsCylinder: 80,
          xCylinder: I.Z.isSp ? 116 : 270,
          yCylinder: I.Z.isSp ? 86 : 300,
          rotateXCylinder: Math.PI * (I.Z.isSp ? 0.18 : 0.25),
          rotateYCylinder: Math.PI * (I.Z.isSp, 1.1),
          rotateZCylinder: -Math.PI * (I.Z.isSp ? 0.14 : 0.1),
          pSlim: (I.Z.isSp, 0.85),
          scaleCylinderIn: 0.7,
          scaleCylinderOut: 1.2,
          easeCylinderIn: 'power4.out',
          easeCylinderOut: 'power1.inOut',
          durationCylinderIn: 0.9,
          durationCylinderOut: 0.3,
          scrollDiffRate: 0.2,
          durationFadeIn: 0.5,
          durationFadeOut: 0.3,
          offsetXGroupImage: 200,
          extraWidthImage: 200,
        };
        nt.zCylinder = nt.radiusCylinder;
        var it = (function (t) {
          (0, s.Z)(n, t);
          var e = et(n);
          function n() {
            var t;
            (0, o.Z)(this, n);
            for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            return (
              ((t = e.call.apply(e, [this].concat(r))).countCylinder = 0),
              (t.isShow = !1),
              (t.isShowCylinder = !1),
              (t.isShowCylinderModal = !1),
              (t.progress = 0),
              t
            );
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  var t = this;
                  if (this.isPc && !A.w1 && !A.vU) {
                    var e = P.Z.cRay;
                    (this.groupLOutlineGalleryImage = e.kgl.createGroup()),
                      e.add(this.groupLOutlineGalleryImage),
                      (this.lOutlineGalleryImages = ot.createAll(this.el, {
                        glComponent: e,
                        group: this.groupLOutlineGalleryImage,
                        elParent: this.refs.target,
                      }));
                  }
                  tt().load({
                    google: { families: ['Rajdhani:wght@600'] },
                    active: function () {
                      t.initCylinderText();
                    },
                  });
                },
              },
              {
                key: 'initCylinderText',
                value: function () {
                  var t = nt.fov,
                    e = nt.radiusCylinder,
                    n = nt.heightCylinder,
                    i = nt.radialSegmentsCylinder,
                    o = nt.xCylinder,
                    r = nt.yCylinder,
                    s = nt.zCylinder,
                    a = nt.rotateXCylinder,
                    l = nt.rotateYCylinder,
                    c = nt.rotateZCylinder,
                    u = nt.pSlim;
                  this.kgl = new Q.Z({
                    canvas: document.querySelector('.cCylinder'),
                    clearedColor: [5 / 255, 7 / 255, 17 / 255, 0],
                    hasCamera: !0,
                    fov: t,
                  });
                  var h = (function () {
                      var t,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.text,
                        i = e.color,
                        o = void 0 === i ? C().color : i,
                        r = e.fontSize,
                        s = void 0 === r ? parseFloat(C().fontSize) : r,
                        a = e.fontFamily,
                        l = void 0 === a ? C().fontFamily : a,
                        c = e.fontWeight,
                        u = e.lineHeight,
                        h = void 0 === u ? parseFloat(C().lineHeight) / parseFloat(C().fontSize) : u,
                        f = e.textAlign,
                        p = void 0 === f ? 'center' : f,
                        d = e.verticalAlign,
                        y = void 0 === d ? 'middle' : d,
                        v = e.offsetY,
                        m = void 0 === v ? 0 : v,
                        g = e.isTrim,
                        w = void 0 !== g && g,
                        Z = n.split('\n'),
                        x = document.createElement('canvas'),
                        S = x.getContext('2d'),
                        M = (x.width = e.width || Math.ceil(O().width)),
                        k = (x.height = e.height || Math.ceil(O().height));
                      function C() {
                        return K || (K = window.getComputedStyle(document.body));
                      }
                      function O() {
                        if (t) return t;
                        var e = document.createElement('div');
                        return (
                          (e.innerHTML = n.replace(/\n/g, '<br>')),
                          Object.assign(e.style, {
                            visibility: 'hidden',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            color: o,
                            fontFamily: l,
                            fontSize: ''.concat(s, 'px'),
                            fontWeight: c,
                            lineHeight: h,
                            textAlign: p,
                            verticalAlign: y,
                            whiteSpace: 'nowrap',
                          }),
                          document.body.appendChild(e),
                          (t = e.getBoundingClientRect()),
                          e.remove(),
                          t
                        );
                      }
                      return (
                        Object.assign(S, {
                          font: ''
                            .concat(c ? c + ' ' : '')
                            .concat(s, 'px/')
                            .concat(h, ' ')
                            .concat(l),
                          fillStyle: o,
                          textAlign: p,
                          textBaseline: y,
                        }),
                        Z.forEach(function (t, e) {
                          var n = M / 2,
                            i = k / 2 + s * h * (e - 0.5 * (Z.length - 1)) + m;
                          (t = t.replace('&nbsp;', ' ')), S.fillText(w ? t.trim() : t, n, i);
                        }),
                        { canvas: x, ctx: S, width: M, height: k }
                      );
                    })({
                      text: 'Welcome to the $TON618 Black Hole Extravaganza! &nbsp;',
                      fontFamily: 'Rajdhani',
                      fontSize: H(2 * n),
                      fontWeight: '600',
                      offsetY: 3,
                    }),
                    f = h.canvas,
                    p = h.width,
                    d = h.height;
                  this.programText = this.kgl.createProgram({
                    shape: 'cylinder',
                    radius: H(e),
                    height: H(n),
                    radialSegments: i,
                    x: 0.5 * -window.innerWidth + H(o),
                    y: H(r),
                    z: H(s),
                    rotate3d: [a, l, c],
                    fragmentShader:
                      'precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uResolutionShape;\nuniform sampler2D uImage;\nuniform vec2 uImageResolution;\nuniform float uTime;\nuniform float uScrollDiff;\nuniform float uOpacity;\nuniform float pSlim;\n\nvarying vec2 vUv;\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvec2 fitHeight(vec2 coord, vec2 inputResolution, vec2 outputResolution) {\n  coord.x = coord.x / outputResolution.y * inputResolution.y;\n  return coord;\n}\n\nconst vec3 colorAccent = vec3(52., 85., 252.) / 255.;\nconst vec3 colorTheme = vec3(10., 240., 242.) / 255.;\n\nconst float pSpeed = 0.001;\nconst float pFadeStart = 0.1;\nconst float pFadeEnd = 0.4;\nconst float pOpacityMax = 0.85;\nconst float pOffsetX = 0.002;\nconst float pOffsetY = 0.002;\nconst float pScrollDiffAccent = 0.0002;\nconst float pScrollDiffTheme = 0.0003;\nconst float pAlphaAccent = 0.7;\n\nvoid main () {\n  vec2 uv = vUv;\n  uv.x += uTime * pSpeed;\n  uv.y = 1. - uv.y;\n  uv = fitHeight(uv, uImageResolution, uResolutionShape);\n  uv.x /= pSlim;\n  uv.x = fract(uv.x);\n\n  vec4 colorText = texture2D(uImage, uv);\n  vec4 colorTextAccent = texture2D(uImage, vec2(uv.x + pOffsetX - uScrollDiff * pScrollDiffAccent, uv.y + pOffsetY));\n  vec4 colorTextTheme = texture2D(uImage, vec2(uv.x - pOffsetX - uScrollDiff * pScrollDiffTheme, uv.y + pOffsetY));\n  colorTextAccent.rgb *= colorAccent;\n  colorTextTheme.rgb *= colorTheme;\n  colorTextAccent.a *= pAlphaAccent;\n  colorTextTheme.a *= pAlphaAccent;\n  vec4 color1 = colorText.a > 0. ? colorText : colorTextAccent.a > 0. ? colorTextAccent : colorTextTheme.a > 0. ? colorTextTheme : colorText;\n  vec3 color2 = blendOverlay(colorText.rgb, blendOverlay(colorTextAccent.rgb, colorTextTheme.rgb, pOpacityMax), pOpacityMax);\n  vec4 color = vec4(mix(color1.rgb, color2, min(abs(uScrollDiff / 50.), 1.)), color1.a);\n  color.a = max(color.a, max(colorTextAccent.a, colorTextTheme.a));\n  color.a *= smoothstep(pFadeStart, pFadeEnd, vUv.x) * smoothstep(1. - pFadeStart, 1. - pFadeEnd, vUv.x);\n  color.a *= pOpacityMax * uOpacity;\n\n  color.a = floor(color.a * 10.) / 10.;\n\n  gl_FragColor = color;\n}\n',
                    uniforms: { uImage: f, uImageResolution: [p, d], uTime: 0, uScrollDiff: 0, uOpacity: 0, pSlim: u },
                    isTransparent: !0,
                    isCulling: !1,
                    isAutoAdd: !0,
                  });
                },
              },
              {
                key: 'onInView',
                value: function (t) {
                  this.programText &&
                    ('enter' === t
                      ? ((this.isShow = !0), (this.refs.list.style.willChange = 'transform'))
                      : ((this.isShow = !1), (this.refs.list.style.willChange = 'auto')));
                },
              },
              {
                key: 'onCall',
                value: function (t, e, n) {
                  'lOutlineGallery-inner' === t && ('enter' === e ? this.showCylinder() : this.hideCylinder());
                },
              },
              {
                key: 'showCylinder',
                value: function () {
                  if (this.programText) {
                    if ((this.playTick(), !this.isShowCylinderModal)) {
                      if (this.isShowCylinder) return;
                      (this.isShowCylinder = !0),
                        T.Z.fromTo(
                          this.programText,
                          { scale: nt.scaleCylinderIn },
                          { scale: 1, duration: nt.durationCylinderIn, ease: nt.easeCylinderIn }
                        );
                    }
                    return T.Z.to(this.programText.uniforms, { uOpacity: 1, duration: nt.durationFadeIn });
                  }
                },
              },
              {
                key: 'hideCylinder',
                value: function () {
                  var t = this;
                  if (this.programText) {
                    if (!this.isShowCylinderModal) {
                      if (!this.isShowCylinder) return;
                      (this.isShowCylinder = !1),
                        T.Z.to(this.programText, {
                          scale: nt.scaleCylinderOut,
                          duration: nt.durationCylinderOut,
                          ease: nt.easeCylinderOut,
                        });
                    }
                    return T.Z.to(this.programText.uniforms, { uOpacity: 0, duration: nt.durationFadeOut }).then(
                      function () {
                        t.pauseTick();
                      }
                    );
                  }
                },
              },
              {
                key: 'showImage',
                value: function () {
                  this.lOutlineGalleryImages &&
                    T.Z.to(this.lOutlineGalleryImages, { opacity: 1, duration: nt.durationFadeIn });
                },
              },
              {
                key: 'hideImage',
                value: function () {
                  return T.Z.to(this.lOutlineGalleryImages, { opacity: 0, duration: nt.durationFadeOut });
                },
              },
              {
                key: 'onOpenModal',
                value: function (t) {
                  this.isShow && this.hideImage(),
                    this.isShowCylinder &&
                      !this.isShowCylinderModal &&
                      ((this.isShowCylinderModal = !0), this.hideCylinder());
                },
              },
              {
                key: 'onCloseModal',
                value: function () {
                  this.isShow && this.showImage(),
                    this.isShowCylinder &&
                      this.isShowCylinderModal &&
                      (this.showCylinder(), (this.isShowCylinderModal = !1));
                },
              },
              {
                key: 'onTick',
                value: function () {
                  (this.countCylinder = this.countCylinder + 1),
                    this.programText && (this.programText.uniforms.uTime = this.countCylinder),
                    this.kgl.draw();
                },
              },
              {
                key: 'onScroll',
                value: function (t, e, n) {
                  var i = e.currentElements.lOutlineGallery;
                  i &&
                    ((this.progress = i.progress),
                    (this.refs.list.style.transform = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'.concat(
                      -this.progress * this.width * 1,
                      ',0,0,1)'
                    )),
                    (this.countCylinder += n * nt.scrollDiffRate),
                    this.programText && (this.programText.uniforms.uScrollDiff = n),
                    this.groupLOutlineGalleryImage &&
                      (this.yImage(t),
                      this.lOutlineGalleryImages.forEach(function (t) {
                        t.scrollDiff(n);
                      })));
                },
              },
              {
                key: 'yImage',
                value: function (t) {
                  this.groupLOutlineGalleryImage &&
                    ((this.groupLOutlineGalleryImage.x = -this.progress * this.width),
                    (this.groupLOutlineGalleryImage.y =
                      t > this.bottomEl ? t - this.bottomEl + this.topEl : t >= this.topEl ? this.topEl : t));
                },
              },
              {
                key: 'onResize',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    (t.windowWidthInitial = t.windowWidthInitial || window.innerWidth),
                      (t.width = t.refs.list.offsetWidth);
                    var e = t.el.getBoundingClientRect(),
                      n = e.top,
                      i = e.bottom;
                    (t.topEl = n + P.Z.scrollY),
                      (t.bottomEl = i + P.Z.scrollY - window.innerHeight),
                      t.programText &&
                        (t.kgl.resize(),
                        (t.programText.scale = window.innerWidth / t.windowWidthInitial),
                        (t.programText.x = 0.5 * -window.innerWidth + H(nt.xCylinder)),
                        (t.programText.y = H(nt.yCylinder)),
                        (t.programText.z = H(nt.zCylinder))),
                      t.yImage(P.Z.scrollY);
                  }, 300);
                },
              },
            ]),
            n
          );
        })(u.Z);
        it.componentName = 'lOutlineGallery';
        var ot = (function (t) {
          (0, s.Z)(a, t);
          var e,
            n = et(a);
          function a() {
            return (0, o.Z)(this, a), n.apply(this, arguments);
          }
          return (
            (0, r.Z)(a, [
              {
                key: 'onInit',
                value: function () {
                  (this.isInit = !0), (this.isResize = !1), (this.isInitGl = !1), this.initGl();
                },
              },
              {
                key: 'initGl',
                value:
                  ((e = (0, i.Z)(
                    regeneratorRuntime.mark(function t() {
                      var e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.isInitGl && this.isInit && this.isResize) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return');
                              case 2:
                                return (
                                  (this.isInitGl = !0),
                                  (this.glComponent = this.option.glComponent),
                                  (this.group = this.option.group),
                                  (t.next = 7),
                                  (0, N.WH)(this.el)
                                );
                              case 7:
                                return (t.next = 9), L(this.el.currentSrc);
                              case 9:
                                (e = t.sent),
                                  (this.program = this.glComponent.kgl.createProgram({
                                    shape: 'plane',
                                    width: this.width,
                                    height: this.height,
                                    x: this.x,
                                    y: this.y,
                                    fragmentShader:
                                      'precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uResolutionShape;\nuniform sampler2D uImage;\nuniform vec2 uImageResolution;\nuniform float uScrollDiff;\nuniform float uOpacity;\n\nvarying vec2 vUv;\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nconst float PI = 3.1415926;\n\nvec2 fitContain(vec2 coord, vec2 inputResolution, vec2 outputResolution) {\n  vec2 ratio = vec2(\n    max((outputResolution.x / outputResolution.y) / (inputResolution.x / inputResolution.y), 1.0),\n    max((outputResolution.y / outputResolution.x) / (inputResolution.y / inputResolution.x), 1.0)\n  );\n  return coord * ratio + (1. - ratio) * 0.5;\n}\n\nvoid discardOutOfRangeUv(vec2 uv) {\n  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) discard;\n}\n\nconst vec3 cColorAccent = vec3(52., 85., 252.) / 255.;\nconst vec3 cColorTheme = vec3(10., 240., 242.) / 255.;\n\nconst float pOpacityMax = 0.85;\nconst float pScrollDiffMain = 0.002;\nconst float pScrollDiffAccent = 0.005;\nconst float pStretch = 0.002;\nconst float pAlphaAccent = 0.7;\n\nvoid main () {\n  vec2 uv = vUv;\n  uv.y = 1. - uv.y;\n  uv = fitContain(uv, uImageResolution, uResolutionShape);\n  uv.x += sin(uv.y * PI) * uScrollDiff * pScrollDiffMain;\n  uv.x *= 1. - abs(uScrollDiff) * pStretch;\n  discardOutOfRangeUv(uv);\n\n  vec4 colorMain = texture2D(uImage, uv);\n  vec4 colorAccent = texture2D(uImage, vec2(uv.x - uScrollDiff * pScrollDiffAccent, uv.y));\n  vec4 colorTheme = colorMain;\n  colorAccent.a *= pAlphaAccent;\n  colorTheme.a *= pAlphaAccent;\n  vec4 color1 = colorMain.a > 0. ? colorMain : colorAccent.a > 0. ? colorAccent : colorTheme.a > 0. ? colorTheme : colorMain;\n  vec3 color2 = blendOverlay(colorMain.rgb, blendOverlay(colorAccent.rgb, colorTheme.rgb, pOpacityMax), pOpacityMax);\n  vec4 color = vec4(mix(color1.rgb, color2, min(abs(uScrollDiff / 50.), 1.)), color1.a);\n  color.a *= uOpacity;\n\n  gl_FragColor = color;\n}\n',
                                    uniforms: {
                                      uImage: e,
                                      uImageResolution: [e.naturalWidth, e.naturalHeight],
                                      uScrollDiff: 0,
                                      uOpacity: 1,
                                    },
                                    isTransparent: !0,
                                  })),
                                  this.group.add(this.program);
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'onLoadDone',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.el.removeAttribute('loading');
                  }, 300);
                },
              },
              {
                key: 'scrollDiff',
                value: function (t) {
                  this.program && (this.program.uniforms.uScrollDiff = t);
                },
              },
              {
                key: 'opacity',
                value: function (t) {
                  this.program && (this.program.uniforms.uOpacity = t);
                },
              },
              {
                key: 'onResize',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.windowWidthInitial = t.windowWidthInitial || window.innerWidth;
                    var e = t.el.getBoundingClientRect(),
                      n = e.width,
                      i = e.height,
                      o = e.left,
                      r = t.option.elParent.getBoundingClientRect(),
                      s = H(nt.extraWidthImage);
                    (t.width = n + 2 * s),
                      (t.height = i),
                      t.x
                        ? (t.x = (t.xInitial * window.innerWidth) / t.windowWidthInitial)
                        : (t.x = t.xInitial = o + (-window.innerWidth + n) / 2 - s + H(nt.offsetXGroupImage)),
                      (t.y = -(r.top + P.Z.scrollY)),
                      t.program &&
                        ((t.program.scale = window.innerWidth / t.windowWidthInitial),
                        (t.program.x = t.x),
                        (t.program.y = t.y)),
                      (t.isResize = !0),
                      t.initGl();
                  }, 300);
                },
              },
            ]),
            a
          );
        })(u.Z);
        ot.componentName = 'lOutlineGallery-image';
        var rt = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            return (0, o.Z)(this, c), i.apply(this, arguments);
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'onInit',
                value: function () {
                  var t = this,
                    e = this.option.isManual,
                    n = void 0 !== e && e;
                  (this.isManual = n),
                    this.isManual ||
                      ((this.observer = new IntersectionObserver(function (e, n) {
                        e.forEach(function (e) {
                          e.isIntersecting && (t.load(e.target), t.observer.unobserve(t.el));
                        });
                      })),
                      this.observer.observe(this.el));
                },
              },
              {
                key: 'load',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.el;
                  if (t.children.length > 0)
                    for (var e in t.children) {
                      var n = t.children[e];
                      'SOURCE' === n.tagName && (n.src = n.dataset.src);
                    }
                  else
                    switch (t.tagName) {
                      case 'IMG':
                      case 'VIDEO':
                      case 'SOURCE':
                        t.src = t.dataset.src;
                    }
                  t.load();
                },
              },
              {
                key: 'onDestroy',
                value: function () {
                  this.isManual || this.observer.unobserve(this.el),
                    (0, O.Z)((0, l.Z)(c.prototype), 'onDestroy', this).call(this);
                },
              },
            ]),
            c
          );
        })(u.Z);
        rt.selectorRoot = '[data-src]';
        var st = n(7460);
        var at = (function (t) {
          (0, s.Z)(c, t);
          var e,
            n,
            i =
              ((e = c),
              (n = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  i = (0, l.Z)(e);
                if (n) {
                  var o = (0, l.Z)(this).constructor;
                  t = Reflect.construct(i, arguments, o);
                } else t = i.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function c() {
            var t;
            (0, o.Z)(this, c);
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return (
              ((t = i.call.apply(i, [this].concat(n))).isLoad = !1),
              (t.isInitVolume = !1),
              (t.isMouseenterContent = !1),
              t
            );
          }
          return (
            (0, r.Z)(c, [
              {
                key: 'onInit',
                value: function () {
                  var t = this;
                  (this.cLazy = new rt({ context: this.el, isManual: !0 })),
                    (this.cMouseStalker = new E({ context: this.el })),
                    T.Z.set(this.cMouseStalker.el, { opacity: 0 }),
                    (0, st.ue)(this.refs.content, function () {
                      (t.isMouseenterContent = !0), t.hideMouseStalker();
                    }),
                    (0, st.he)(this.refs.content, function () {
                      (t.isMouseenterContent = !1), t.showMouseStalker();
                    });
                },
              },
              {
                key: 'load',
                value: function () {
                  this.isLoad || ((this.isLoad = !0), this.cLazy.load());
                },
              },
              {
                key: 'onLoadDone',
                value: function () {
                  this.load();
                },
              },
              {
                key: 'onOpenModal',
                value: function (t) {
                  'lVideo' === t && T.Z.to(P.Z.cHeader.el, { opacity: 0, zIndex: -1, duration: 0.3 });
                },
              },
              {
                key: 'onCompleteOpenModal',
                value: function (t) {
                  var e = this;
                  if ('lVideo' === t) {
                    var n = this.refs.video;
                    this.load(),
                      (0, N.NR)(n).then(function () {
                        e.isInitVolume || ((e.isInitVolume = !0), (n.volume = 0.2)), n.play();
                      }),
                      this.isMouseenterContent || this.showMouseStalker();
                  }
                },
              },
              {
                key: 'onCloseModal',
                value: function (t) {
                  'lVideo' === t &&
                    (this.refs.video.pause(),
                    this.hideMouseStalker(),
                    T.Z.to(P.Z.cHeader.el, { opacity: 1, zIndex: '', duration: 0.5 }));
                },
              },
              {
                key: 'showMouseStalker',
                value: function () {
                  this.cMouseStalker.play(),
                    T.Z.to(this.cMouseStalker.el, { opacity: 1, duration: 0.5, ease: 'power2.out' });
                },
              },
              {
                key: 'hideMouseStalker',
                value: function () {
                  this.cMouseStalker.pause(),
                    T.Z.to(this.cMouseStalker.el, { opacity: 0, duration: 0.3, ease: 'power2.out' });
                },
              },
              {
                key: 'onMousemove',
                value: function (t) {
                  this.cMouseStalker.move((0, N.fC)(t));
                },
              },
            ]),
            c
          );
        })(u.Z);
        function lt(t) {
          var e = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              i = (0, l.Z)(t);
            if (e) {
              var o = (0, l.Z)(this).constructor;
              n = Reflect.construct(i, arguments, o);
            } else n = i.apply(this, arguments);
            return (0, a.Z)(this, n);
          };
        }
        at.componentName = 'lVideo';
        var ct = (function (t) {
          (0, s.Z)(n, t);
          var e = lt(n);
          function n() {
            return (0, o.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'onInit',
                value: function () {
                  new ut({ el: this.refs.catch }), new ht({ context: this.el });
                },
              },
            ]),
            n
          );
        })(u.Z);
        ct.componentName = 'lOrder';
        var ut = (function (t) {
            (0, s.Z)(n, t);
            var e = lt(n);
            function n() {
              var t;
              (0, o.Z)(this, n);
              for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++) r[s] = arguments[s];
              return ((t = e.call.apply(e, [this].concat(r))).isShow = !1), t;
            }
            return (
              (0, r.Z)(n, [
                {
                  key: 'onInit',
                  value: function () {
                    this.motion = new M(this.el, { isManual: !0 });
                  },
                },
                {
                  key: 'show',
                  value: function () {
                    this.isShow || ((this.isShow = !0), this.motion.show());
                  },
                },
                {
                  key: 'onInView',
                  value: function (t) {
                    'enter' === t && this.show();
                  },
                },
              ]),
              n
            );
          })(u.Z),
          ht = (function (t) {
            (0, s.Z)(n, t);
            var e = lt(n);
            function n() {
              return (0, o.Z)(this, n), e.apply(this, arguments);
            }
            return (
              (0, r.Z)(n, [
                {
                  key: 'onInit',
                  value: function () {
                    this.el.pause();
                  },
                },
                {
                  key: 'onInView',
                  value: function (t) {
                    'enter' === t ? this.el.play() : this.el.pause();
                  },
                },
              ]),
              n
            );
          })(u.Z);
        function ft(t, e, n, i, o) {
          return t <= e ? i : t >= n ? o : ((t - e) * (o - i)) / (n - e) + i;
        }
        ht.componentName = 'lOrderVideo';
        var pt = Math.pow,
          dt = (Math.sqrt, Math.sin, Math.cos),
          yt = Math.PI;
        function vt(t) {
          return 1 - pt(1 - t, 4);
        }
        function mt(t) {
          return -(dt(yt * t) - 1) / 2;
        }
        function gt(t) {
          return 1 === t ? 1 : 1 - pt(2, -10 * t);
        }
        var wt = n(6178);
        var Zt = I.Z.isSp ? 0.4 : 0.5;
        new ((function (t) {
          (0, s.Z)(h, t);
          var e,
            n,
            c,
            u =
              ((n = h),
              (c = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              })()),
              function () {
                var t,
                  e = (0, l.Z)(n);
                if (c) {
                  var i = (0, l.Z)(this).constructor;
                  t = Reflect.construct(e, arguments, i);
                } else t = e.apply(this, arguments);
                return (0, a.Z)(this, t);
              });
          function h() {
            var t;
            (0, o.Z)(this, h);
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return ((t = u.call.apply(u, [this].concat(n))).positionScrollNextSection = 0), t;
          }
          return (
            (0, r.Z)(h, [
              {
                key: 'onInit',
                value: function () {
                  var t = this;
                  (this.isTop = !0),
                    (P.Z.isSkip = P.Z.isTransitioned || !!location.hash),
                    P.Z.isSkip || new C(),
                    (this.lHero = new F()),
                    new at(),
                    (this.lOutline = new U()),
                    new it(),
                    (this.lNewsStalker = new B()),
                    (this.lNewsAccordion = new V()),
                    (this.lOrder = new ct()),
                    P.Z.isSkip
                      ? location.hash
                        ? ((this.isAnchor = !0),
                          (this.isOpeningEnd = !0),
                          this.lHero.visible(),
                          this.lHero.disable(),
                          this.lHero.pause(),
                          this.lHero.hideProgress(1))
                        : this.startHero()
                      : (this.once('startOpeningRay', function () {
                          t.startOpeningRay();
                        }),
                        this.once('initCScroll', function () {
                          P.Z.cScroll.stop();
                        }));
                },
              },
              {
                key: 'startOpeningRay',
                value: function () {
                  var t = this;
                  P.Z.cRay.playTick(),
                    (this.tl = y.ZP.timeline({
                      onComplete: function () {
                        t.isTop && P.Z.cRay.pauseTick(), (t.tl = null);
                      },
                    })
                      .to(P.Z.cRay, { progress: 1, wave: 1, duration: 1, ease: 'power1.inOut' })
                      .add([
                        y.ZP.to(P.Z.cRay, { progress: 0, duration: 4.2, ease: 'power1.out' }),
                        y.ZP.to(P.Z.cRay, { wave: 2, duration: 3, ease: 'power4.in' }),
                      ])
                      .call(
                        function () {
                          t.startHero();
                        },
                        null,
                        '<'.concat(0.8)
                      ));
                },
              },
              {
                key: 'startHero',
                value:
                  ((e = (0, i.Z)(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.lHero.start();
                              case 2:
                                P.Z.cScroll.start(), (this.isOpeningEnd = !0);
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: 'onScroll',
                value: function (t, e, n) {
                  if (this.isOpeningEnd && !(this.positionScrollNextSection <= 0)) {
                    if (t >= this.positionScrollNextSection)
                      this.isScrollEndRayPosition ||
                        ((this.isScrollEndRayPosition = !0),
                        (P.Z.cRay.progress = 0),
                        (P.Z.cRay.wave = 2),
                        this.lOutline.lOutlineImage
                          ? (this.lOutline.lOutlineImage.progress = 1)
                          : this.lOutline.maskImage(1)),
                        P.Z.cRayBackground.playTick();
                    else {
                      var i = n < -1;
                      (this.isScrollEndRayPosition || i) &&
                        t < this.positionScrollNextSection &&
                        !P.Z.isScrollAnimating &&
                        ((this.isScrollEndRayPosition = !1),
                        P.Z.cScroll.stop(),
                        P.Z.cScroll.scrollTo(0, {
                          duration: this.isSp ? 1.4 : 1.2,
                          onComplete: function () {
                            P.Z.cScroll.start();
                          },
                        }),
                        (P.Z.cRayBackground.progress = 0),
                        requestAnimationFrame(function () {
                          P.Z.cRayBackground.pauseTick();
                        }));
                      var o =
                        t > this.scrollHidePosition
                          ? ft(t, this.scrollHidePosition, this.positionScrollNextSection, 1, 0)
                          : (i ? vt : mt)(ft(t, 0, this.scrollHidePosition, 0, 1));
                      y.ZP.set(P.Z.cRay, {
                        progress: t > this.scrollHidePosition ? gt(o) : o,
                        wave: t > this.scrollHidePosition ? gt((0, wt.t)(2, 1, o)) : o,
                      }),
                        this.lOutline.lOutlineImage
                          ? (this.lOutline.lOutlineImage.progress = ft(
                              t,
                              this.scrollHidePosition,
                              this.positionScrollNextSection,
                              0,
                              1
                            ))
                          : this.lOutline.maskImage(
                              0 ===
                                (r = ft(
                                  t,
                                  this.positionScrollNextSection * (this.isSp ? 0.3 : 0.6),
                                  this.positionScrollNextSection,
                                  0,
                                  1
                                ))
                                ? 0
                                : pt(2, 10 * r - 10)
                            );
                    }
                    var r;
                    t >= this.scrollHidePosition
                      ? (this.isNext || ((this.isNext = !0), this.lHero.pause(), this.lHero.hideProgress(1)),
                        this.hideTop())
                      : t > 1
                      ? (this.hideTop(),
                        this.isNext && ((this.isNext = !1), this.lHero.play()),
                        this.lHero.hideProgress(ft(t, 0, this.scrollHidePosition, 0, 1)))
                      : this.isTop ||
                        ((this.isTop = !0),
                        this.lHero.enable(),
                        this.lHero.hideProgress(0),
                        this.lOutline.lOutlineImage
                          ? (this.lOutline.lOutlineImage.progress = 0)
                          : this.lOutline.maskImage(0),
                        (P.Z.cRay.progress = 0),
                        (P.Z.cRay.wave = 0),
                        requestAnimationFrame(function () {
                          P.Z.cRay.pauseTick();
                        }));
                  }
                },
              },
              {
                key: 'hideTop',
                value: function () {
                  this.isTop &&
                    ((this.isTop = !1),
                    this.isAnchor || P.Z.isAnchor
                      ? ((this.isAnchor = !1), P.Z.cScroll.start())
                      : P.Z.isScrollAnimating ||
                        (P.Z.cScroll.stop(),
                        P.Z.cScroll.scrollTo(this.positionScrollNextSection + 1, {
                          duration: this.isSp ? 1.6 : 1.3,
                          ease: [0.15, 0.25, 0, 1],
                          onComplete: function () {
                            P.Z.cScroll.start();
                          },
                        })),
                    this.lHero.disable(),
                    P.Z.cRay.playTick());
                },
              },
              {
                key: 'resize',
                value: function () {
                  (this.scrollHidePosition = window.innerHeight * Zt),
                    this.lOutline &&
                      (this.positionScrollNextSection = P.Z.positionScrollNextSection =
                        Math.floor(this.lOutline.el.getBoundingClientRect().top + P.Z.scrollY) - 1);
                },
              },
              {
                key: 'onResizeFirst',
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.resize();
                  }, 300);
                },
              },
              {
                key: 'onResize',
                value: function () {
                  this.resize();
                },
              },
            ]),
            h
          );
        })(d))();
      },
    },
    e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { exports: {} });
    return t[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (n.x = function () {}),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, { a: e }), e;
    }),
    (n.d = function (t, e) {
      for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.j = 613),
    (function () {
      var t = { 613: 0 },
        e = [[2585, 643]],
        i = function () {},
        o = function (o, r) {
          for (var s, a, l = r[0], c = r[1], u = r[2], h = r[3], f = 0, p = []; f < l.length; f++)
            (a = l[f]), n.o(t, a) && t[a] && p.push(t[a][0]), (t[a] = 0);
          for (s in c) n.o(c, s) && (n.m[s] = c[s]);
          for (u && u(n), o && o(r); p.length; ) p.shift()();
          return h && e.push.apply(e, h), i();
        },
        r = (self.webpackChunkpug_static_template = self.webpackChunkpug_static_template || []);
      function s() {
        for (var i, o = 0; o < e.length; o++) {
          for (var r = e[o], s = !0, a = 1; a < r.length; a++) {
            var l = r[a];
            0 !== t[l] && (s = !1);
          }
          s && (e.splice(o--, 1), (i = n((n.s = r[0]))));
        }
        return 0 === e.length && (n.x(), (n.x = function () {})), i;
      }
      r.forEach(o.bind(null, 0)), (r.push = o.bind(null, r.push.bind(r)));
      var a = n.x;
      n.x = function () {
        return (n.x = a || function () {}), (i = s)();
      };
    })(),
    n.x();
})();
