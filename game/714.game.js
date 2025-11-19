"use strict";
(self.webpackChunkgame = self.webpackChunkgame || []).push([
  [714],
  {
    1559: (n, t, r) => {
      function e(n, t) {
        for (var r = t(n); "Left" === r._tag; ) r = t(r.left);
        return r.right;
      }
      r.d(t, { _: () => e });
    },
    9807: (n, t, r) => {
      r.d(t, { nM: () => e, t$: () => i, F2: () => u, fS: () => o }),
        r(1559),
        r(7597);
      var e = function (n) {
          return "Left" === n._tag;
        },
        i = function (n) {
          return { _tag: "Left", left: n };
        },
        u = function (n) {
          return { _tag: "Right", right: n };
        },
        o = function (n) {
          return function (t) {
            return e(t) ? n(t.left) : t.right;
          };
        };
    },
    7597: (n, t, r) => {
      function e(n, t, r, e, i, u, o, a, c, f, s, l, v, y, p, h, g, d, T, w) {
        switch (arguments.length) {
          case 1:
            return n;
          case 2:
            return t(n);
          case 3:
            return r(t(n));
          case 4:
            return e(r(t(n)));
          case 5:
            return i(e(r(t(n))));
          case 6:
            return u(i(e(r(t(n)))));
          case 7:
            return o(u(i(e(r(t(n))))));
          case 8:
            return a(o(u(i(e(r(t(n)))))));
          case 9:
            return c(a(o(u(i(e(r(t(n))))))));
          case 10:
            return f(c(a(o(u(i(e(r(t(n)))))))));
          case 11:
            return s(f(c(a(o(u(i(e(r(t(n))))))))));
          case 12:
            return l(s(f(c(a(o(u(i(e(r(t(n)))))))))));
          case 13:
            return v(l(s(f(c(a(o(u(i(e(r(t(n))))))))))));
          case 14:
            return y(v(l(s(f(c(a(o(u(i(e(r(t(n)))))))))))));
          case 15:
            return p(y(v(l(s(f(c(a(o(u(i(e(r(t(n))))))))))))));
          case 16:
            return h(p(y(v(l(s(f(c(a(o(u(i(e(r(t(n)))))))))))))));
          case 17:
            return g(h(p(y(v(l(s(f(c(a(o(u(i(e(r(t(n))))))))))))))));
          case 18:
            return d(g(h(p(y(v(l(s(f(c(a(o(u(i(e(r(t(n)))))))))))))))));
          case 19:
            return T(d(g(h(p(y(v(l(s(f(c(a(o(u(i(e(r(t(n))))))))))))))))));
          case 20:
            return w(T(d(g(h(p(y(v(l(s(f(c(a(o(u(i(e(r(t(n)))))))))))))))))));
        }
      }
      r.d(t, { zG: () => e });
    },
    2932: (n, t, r) => {
      r.d(t, { z: () => e });
      var e = r(7597).zG;
    },
    1591: (n, t, r) => {
      r.r(t),
        r.d(t, {
          Type: () => a,
          identity: () => c,
          getFunctionName: () => f,
          getContextEntry: () => s,
          appendContext: () => l,
          failures: () => v,
          failure: () => y,
          success: () => p,
          NullType: () => g,
          nullType: () => d,
          UndefinedType: () => T,
          VoidType: () => m,
          voidType: () => _,
          UnknownType: () => b,
          unknown: () => O,
          StringType: () => j,
          string: () => k,
          NumberType: () => A,
          number: () => M,
          BigIntType: () => I,
          bigint: () => R,
          BooleanType: () => S,
          boolean: () => x,
          AnyArrayType: () => P,
          UnknownArray: () => N,
          AnyDictionaryType: () => U,
          UnknownRecord: () => D,
          FunctionType: () => E,
          Function: () => F,
          RefinementType: () => C,
          brand: () => K,
          Int: () => L,
          LiteralType: () => z,
          literal: () => B,
          KeyofType: () => V,
          keyof: () => J,
          RecursiveType: () => $,
          recursion: () => W,
          ArrayType: () => q,
          array: () => H,
          InterfaceType: () => Q,
          type: () => nn,
          PartialType: () => tn,
          partial: () => en,
          DictionaryType: () => un,
          getDomainKeys: () => on,
          record: () => an,
          UnionType: () => cn,
          union: () => sn,
          IntersectionType: () => ln,
          mergeAll: () => vn,
          intersection: () => yn,
          TupleType: () => pn,
          tuple: () => hn,
          ReadonlyType: () => gn,
          readonly: () => dn,
          ReadonlyArrayType: () => Tn,
          readonlyArray: () => wn,
          strict: () => mn,
          TaggedUnionType: () => _n,
          taggedUnion: () => bn,
          ExactType: () => On,
          exact: () => An,
          null: () => d,
          undefined: () => w,
          Array: () => N,
          interface: () => nn,
          void: () => _,
          getValidationError: () => Mn,
          getDefaultContext: () => In,
          NeverType: () => Rn,
          never: () => Sn,
          AnyType: () => xn,
          any: () => Pn,
          Dictionary: () => Nn,
          ObjectType: () => Un,
          object: () => Dn,
          refinement: () => En,
          Integer: () => Fn,
          dictionary: () => Cn,
          StrictType: () => Kn,
          clean: () => Ln,
          alias: () => zn,
          emptyTags: () => Bn,
          getTags: () => Hn,
          getIndex: () => Qn,
        });
      var e,
        i = r(9807),
        u =
          ((e = function (n, t) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (n, t) {
                    n.__proto__ = t;
                  }) ||
                function (n, t) {
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }),
              e(n, t)
            );
          }),
          function (n, t) {
            function r() {
              this.constructor = n;
            }
            e(n, t),
              (n.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          }),
        o = function () {
          return (
            (o =
              Object.assign ||
              function (n) {
                for (var t, r = 1, e = arguments.length; r < e; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                return n;
              }),
            o.apply(this, arguments)
          );
        },
        a = (function () {
          function n(n, t, r, e) {
            (this.name = n),
              (this.is = t),
              (this.validate = r),
              (this.encode = e),
              (this.decode = this.decode.bind(this));
          }
          return (
            (n.prototype.pipe = function (t, r) {
              var e = this;
              return (
                void 0 === r && (r = "pipe(" + this.name + ", " + t.name + ")"),
                new n(
                  r,
                  t.is,
                  function (n, r) {
                    var u = e.validate(n, r);
                    return (0, i.nM)(u) ? u : t.validate(u.right, r);
                  },
                  this.encode === c && t.encode === c
                    ? c
                    : function (n) {
                        return e.encode(t.encode(n));
                      }
                )
              );
            }),
            (n.prototype.asDecoder = function () {
              return this;
            }),
            (n.prototype.asEncoder = function () {
              return this;
            }),
            (n.prototype.decode = function (n) {
              return this.validate(n, [{ key: "", type: this, actual: n }]);
            }),
            n
          );
        })(),
        c = function (n) {
          return n;
        },
        f = function (n) {
          return n.displayName || n.name || "<function" + n.length + ">";
        },
        s = function (n, t) {
          return { key: n, type: t };
        },
        l = function (n, t, r, e) {
          for (var i = n.length, u = Array(i + 1), o = 0; o < i; o++)
            u[o] = n[o];
          return (u[i] = { key: t, type: r, actual: e }), u;
        },
        v = i.t$,
        y = function (n, t, r) {
          return v([{ value: n, context: t, message: r }]);
        },
        p = i.F2,
        h = function (n, t) {
          for (var r = t.length, e = 0; e < r; e++) n.push(t[e]);
        },
        g = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "null",
                function (n) {
                  return null === n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "NullType"), t;
          }
          return u(t, n), t;
        })(a),
        d = new g(),
        T = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "undefined",
                function (n) {
                  return void 0 === n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "UndefinedType"), t;
          }
          return u(t, n), t;
        })(a),
        w = new T(),
        m = (function (n) {
          function t() {
            var t = n.call(this, "void", w.is, w.validate, c) || this;
            return (t._tag = "VoidType"), t;
          }
          return u(t, n), t;
        })(a),
        _ = new m(),
        b = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "unknown",
                function (n) {
                  return !0;
                },
                p,
                c
              ) || this;
            return (t._tag = "UnknownType"), t;
          }
          return u(t, n), t;
        })(a),
        O = new b(),
        j = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "string",
                function (n) {
                  return "string" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "StringType"), t;
          }
          return u(t, n), t;
        })(a),
        k = new j(),
        A = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "number",
                function (n) {
                  return "number" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "NumberType"), t;
          }
          return u(t, n), t;
        })(a),
        M = new A(),
        I = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "bigint",
                function (n) {
                  return "bigint" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "BigIntType"), t;
          }
          return u(t, n), t;
        })(a),
        R = new I(),
        S = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "boolean",
                function (n) {
                  return "boolean" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "BooleanType"), t;
          }
          return u(t, n), t;
        })(a),
        x = new S(),
        P = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "UnknownArray",
                Array.isArray,
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "AnyArrayType"), t;
          }
          return u(t, n), t;
        })(a),
        N = new P(),
        U = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "UnknownRecord",
                function (n) {
                  var t = Object.prototype.toString.call(n);
                  return "[object Object]" === t || "[object Window]" === t;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "AnyDictionaryType"), t;
          }
          return u(t, n), t;
        })(a),
        D = new U(),
        E = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "Function",
                function (n) {
                  return "function" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "FunctionType"), t;
          }
          return u(t, n), t;
        })(a),
        F = new E(),
        C = (function (n) {
          function t(t, r, e, i, u, o) {
            var a = n.call(this, t, r, e, i) || this;
            return (
              (a.type = u), (a.predicate = o), (a._tag = "RefinementType"), a
            );
          }
          return u(t, n), t;
        })(a),
        K = function (n, t, r) {
          return En(n, t, r);
        },
        L = K(
          M,
          function (n) {
            return Number.isInteger(n);
          },
          "Int"
        ),
        z = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.value = u), (o._tag = "LiteralType"), o;
          }
          return u(t, n), t;
        })(a),
        B = function (n, t) {
          void 0 === t && (t = JSON.stringify(n));
          var r = function (t) {
            return t === n;
          };
          return new z(
            t,
            r,
            function (t, e) {
              return r(t) ? p(n) : y(t, e);
            },
            c,
            n
          );
        },
        V = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.keys = u), (o._tag = "KeyofType"), o;
          }
          return u(t, n), t;
        })(a),
        G = Object.prototype.hasOwnProperty,
        J = function (n, t) {
          void 0 === t &&
            (t = Object.keys(n)
              .map(function (n) {
                return JSON.stringify(n);
              })
              .join(" | "));
          var r = function (t) {
            return k.is(t) && G.call(n, t);
          };
          return new V(
            t,
            r,
            function (n, t) {
              return r(n) ? p(n) : y(n, t);
            },
            c,
            n
          );
        },
        $ = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.runDefinition = u), (o._tag = "RecursiveType"), o;
          }
          return u(t, n), t;
        })(a);
      Object.defineProperty($.prototype, "type", {
        get: function () {
          return this.runDefinition();
        },
        enumerable: !0,
        configurable: !0,
      });
      var W = function (n, t) {
          var r,
            e = function () {
              return r || ((r = t(i)).name = n), r;
            },
            i = new $(
              n,
              function (n) {
                return e().is(n);
              },
              function (n, t) {
                return e().validate(n, t);
              },
              function (n) {
                return e().encode(n);
              },
              e
            );
          return i;
        },
        q = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.type = u), (o._tag = "ArrayType"), o;
          }
          return u(t, n), t;
        })(a),
        H = function (n, t) {
          return (
            void 0 === t && (t = "Array<" + n.name + ">"),
            new q(
              t,
              function (t) {
                return N.is(t) && t.every(n.is);
              },
              function (t, r) {
                var e = N.validate(t, r);
                if ((0, i.nM)(e)) return e;
                for (
                  var u = e.right, o = u.length, a = u, c = [], f = 0;
                  f < o;
                  f++
                ) {
                  var s = u[f],
                    y = n.validate(s, l(r, String(f), n, s));
                  if ((0, i.nM)(y)) h(c, y.left);
                  else {
                    var g = y.right;
                    g !== s && (a === u && (a = u.slice()), (a[f] = g));
                  }
                }
                return c.length > 0 ? v(c) : p(a);
              },
              n.encode === c
                ? c
                : function (t) {
                    return t.map(n.encode);
                  },
              n
            )
          );
        },
        Q = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.props = u), (o._tag = "InterfaceType"), o;
          }
          return u(t, n), t;
        })(a),
        X = function (n) {
          return Object.keys(n)
            .map(function (t) {
              return t + ": " + n[t].name;
            })
            .join(", ");
        },
        Y = function (n) {
          for (var t = 0; t < n.length; t++) if (n[t].encode !== c) return !1;
          return !0;
        },
        Z = function (n) {
          return "{ " + X(n) + " }";
        },
        nn = function (n, t) {
          void 0 === t && (t = Z(n));
          var r = Object.keys(n),
            e = r.map(function (t) {
              return n[t];
            }),
            u = r.length;
          return new Q(
            t,
            function (n) {
              if (D.is(n)) {
                for (var t = 0; t < u; t++) {
                  var i = r[t],
                    o = n[i];
                  if ((void 0 === o && !G.call(n, i)) || !e[t].is(o)) return !1;
                }
                return !0;
              }
              return !1;
            },
            function (n, t) {
              var a = D.validate(n, t);
              if ((0, i.nM)(a)) return a;
              for (var c = a.right, f = c, s = [], y = 0; y < u; y++) {
                var g = r[y],
                  d = f[g],
                  T = e[y],
                  w = T.validate(d, l(t, g, T, d));
                if ((0, i.nM)(w)) h(s, w.left);
                else {
                  var m = w.right;
                  (m !== d || (void 0 === m && !G.call(f, g))) &&
                    (f === c && (f = o({}, c)), (f[g] = m));
                }
              }
              return s.length > 0 ? v(s) : p(f);
            },
            Y(e)
              ? c
              : function (n) {
                  for (var t = o({}, n), i = 0; i < u; i++) {
                    var a = r[i],
                      f = e[i].encode;
                    f !== c && (t[a] = f(n[a]));
                  }
                  return t;
                },
            n
          );
        },
        tn = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.props = u), (o._tag = "PartialType"), o;
          }
          return u(t, n), t;
        })(a),
        rn = function (n) {
          return "Partial<" + n + ">";
        },
        en = function (n, t) {
          void 0 === t && (t = rn(Z(n)));
          var r = Object.keys(n),
            e = r.map(function (t) {
              return n[t];
            }),
            u = r.length;
          return new tn(
            t,
            function (t) {
              if (D.is(t)) {
                for (var e = 0; e < u; e++) {
                  var i = r[e],
                    o = t[i];
                  if (void 0 !== o && !n[i].is(o)) return !1;
                }
                return !0;
              }
              return !1;
            },
            function (t, e) {
              var a = D.validate(t, e);
              if ((0, i.nM)(a)) return a;
              for (var c = a.right, f = c, s = [], y = 0; y < u; y++) {
                var g = r[y],
                  d = f[g],
                  T = n[g],
                  w = T.validate(d, l(e, g, T, d));
                if ((0, i.nM)(w)) void 0 !== d && h(s, w.left);
                else {
                  var m = w.right;
                  m !== d && (f === c && (f = o({}, c)), (f[g] = m));
                }
              }
              return s.length > 0 ? v(s) : p(f);
            },
            Y(e)
              ? c
              : function (n) {
                  for (var t = o({}, n), i = 0; i < u; i++) {
                    var a = r[i],
                      c = n[a];
                    void 0 !== c && (t[a] = e[i].encode(c));
                  }
                  return t;
                },
            n
          );
        },
        un = (function (n) {
          function t(t, r, e, i, u, o) {
            var a = n.call(this, t, r, e, i) || this;
            return (
              (a.domain = u), (a.codomain = o), (a._tag = "DictionaryType"), a
            );
          }
          return u(t, n), t;
        })(a);
      function on(n) {
        var t;
        if (Jn(n)) {
          var r = n.value;
          if (k.is(r)) return ((t = {})[r] = null), t;
        } else {
          if ("KeyofType" === n._tag) return n.keys;
          if (Wn(n)) {
            var e = n.types.map(function (n) {
              return on(n);
            });
            return e.some(w.is)
              ? void 0
              : Object.assign.apply(
                  Object,
                  (function () {
                    for (var n = 0, t = 0, r = arguments.length; t < r; t++)
                      n += arguments[t].length;
                    var e = Array(n),
                      i = 0;
                    for (t = 0; t < r; t++)
                      for (
                        var u = arguments[t], o = 0, a = u.length;
                        o < a;
                        o++, i++
                      )
                        e[i] = u[o];
                    return e;
                  })([{}], e)
                );
          }
        }
      }
      function an(n, t, r) {
        var e = on(n);
        return e
          ? (function (n, t, r, e) {
              void 0 === e && (e = "{ [K in " + t.name + "]: " + r.name + " }");
              var u = n.length;
              return new un(
                e,
                function (t) {
                  return (
                    D.is(t) &&
                    n.every(function (n) {
                      return r.is(t[n]);
                    })
                  );
                },
                function (t, e) {
                  var o = D.validate(t, e);
                  if ((0, i.nM)(o)) return o;
                  for (
                    var a = o.right, c = {}, f = [], s = !1, y = 0;
                    y < u;
                    y++
                  ) {
                    var g = n[y],
                      d = a[g],
                      T = r.validate(d, l(e, g, r, d));
                    if ((0, i.nM)(T)) h(f, T.left);
                    else {
                      var w = T.right;
                      (s = s || w !== d), (c[g] = w);
                    }
                  }
                  return f.length > 0
                    ? v(f)
                    : p(s || Object.keys(a).length !== u ? c : a);
                },
                r.encode === c
                  ? c
                  : function (t) {
                      for (var e = {}, i = 0; i < u; i++) {
                        var o = n[i];
                        e[o] = r.encode(t[o]);
                      }
                      return e;
                    },
                t,
                r
              );
            })(Object.keys(e), n, t, r)
          : (function (n, t, r) {
              return (
                void 0 === r &&
                  (r = "{ [K in " + n.name + "]: " + t.name + " }"),
                new un(
                  r,
                  function (r) {
                    return D.is(r)
                      ? Object.keys(r).every(function (e) {
                          return n.is(e) && t.is(r[e]);
                        })
                      : Gn(t) && Array.isArray(r);
                  },
                  function (r, e) {
                    if (D.is(r)) {
                      for (
                        var u = {},
                          o = [],
                          a = Object.keys(r),
                          c = a.length,
                          f = !1,
                          s = 0;
                        s < c;
                        s++
                      ) {
                        var g = a[s],
                          d = r[g],
                          T = n.validate(g, l(e, g, n, g));
                        if ((0, i.nM)(T)) h(o, T.left);
                        else {
                          var w = T.right;
                          (f = f || w !== g), (g = w);
                          var m = t.validate(d, l(e, g, t, d));
                          if ((0, i.nM)(m)) h(o, m.left);
                          else {
                            var _ = m.right;
                            (f = f || _ !== d), (u[g] = _);
                          }
                        }
                      }
                      return o.length > 0 ? v(o) : p(f ? u : r);
                    }
                    return Gn(t) && Array.isArray(r) ? p(r) : y(r, e);
                  },
                  n.encode === c && t.encode === c
                    ? c
                    : function (r) {
                        for (
                          var e = {}, i = Object.keys(r), u = i.length, o = 0;
                          o < u;
                          o++
                        ) {
                          var a = i[o];
                          e[String(n.encode(a))] = t.encode(r[a]);
                        }
                        return e;
                      },
                  n,
                  t
                )
              );
            })(n, t, r);
      }
      var cn = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.types = u), (o._tag = "UnionType"), o;
          }
          return u(t, n), t;
        })(a),
        fn = function (n) {
          return (
            "(" +
            n
              .map(function (n) {
                return n.name;
              })
              .join(" | ") +
            ")"
          );
        },
        sn = function (n, t) {
          void 0 === t && (t = fn(n));
          var r = Qn(n);
          if (void 0 !== r && n.length > 0) {
            var e = r[0],
              u = r[1],
              o = u.length,
              a = function (n) {
                for (var t = 0; t < o; t++)
                  if (-1 !== u[t].indexOf(n)) return t;
              };
            return new _n(
              t,
              function (t) {
                if (D.is(t)) {
                  var r = a(t[e]);
                  return void 0 !== r && n[r].is(t);
                }
                return !1;
              },
              function (t, r) {
                var u = D.validate(t, r);
                if ((0, i.nM)(u)) return u;
                var o = u.right,
                  c = a(o[e]);
                if (void 0 === c) return y(t, r);
                var f = n[c];
                return f.validate(o, l(r, String(c), f, o));
              },
              Y(n)
                ? c
                : function (r) {
                    var i = a(r[e]);
                    if (void 0 === i)
                      throw new Error(
                        "no codec found to encode value in union codec " + t
                      );
                    return n[i].encode(r);
                  },
              n,
              e
            );
          }
          return new cn(
            t,
            function (t) {
              return n.some(function (n) {
                return n.is(t);
              });
            },
            function (t, r) {
              for (var e = [], u = 0; u < n.length; u++) {
                var o = n[u],
                  a = o.validate(t, l(r, String(u), o, t));
                if (!(0, i.nM)(a)) return p(a.right);
                h(e, a.left);
              }
              return v(e);
            },
            Y(n)
              ? c
              : function (r) {
                  for (var e = 0, i = n; e < i.length; e++) {
                    var u = i[e];
                    if (u.is(r)) return u.encode(r);
                  }
                  throw new Error(
                    "no codec found to encode value in union type " + t
                  );
                },
            n
          );
        },
        ln = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.types = u), (o._tag = "IntersectionType"), o;
          }
          return u(t, n), t;
        })(a),
        vn = function (n, t) {
          for (
            var r = !0, e = !0, i = !D.is(n), u = 0, o = t;
            u < o.length;
            u++
          )
            (s = o[u]) !== n && (r = !1), D.is(s) && (e = !1);
          if (r) return n;
          if (e) return t[t.length - 1];
          for (var a = {}, c = 0, f = t; c < f.length; c++) {
            var s = f[c];
            for (var l in s)
              (a.hasOwnProperty(l) && !i && s[l] === n[l]) || (a[l] = s[l]);
          }
          return a;
        };
      function yn(n, t) {
        void 0 === t &&
          (t =
            "(" +
            n
              .map(function (n) {
                return n.name;
              })
              .join(" & ") +
            ")");
        var r = n.length;
        return new ln(
          t,
          function (t) {
            return n.every(function (n) {
              return n.is(t);
            });
          },
          0 === n.length
            ? p
            : function (t, e) {
                for (var u = [], o = [], a = 0; a < r; a++) {
                  var c = n[a],
                    f = c.validate(t, l(e, String(a), c, t));
                  (0, i.nM)(f) ? h(o, f.left) : u.push(f.right);
                }
                return o.length > 0 ? v(o) : p(vn(t, u));
              },
          0 === n.length
            ? c
            : function (t) {
                return vn(
                  t,
                  n.map(function (n) {
                    return n.encode(t);
                  })
                );
              },
          n
        );
      }
      var pn = (function (n) {
        function t(t, r, e, i, u) {
          var o = n.call(this, t, r, e, i) || this;
          return (o.types = u), (o._tag = "TupleType"), o;
        }
        return u(t, n), t;
      })(a);
      function hn(n, t) {
        void 0 === t &&
          (t =
            "[" +
            n
              .map(function (n) {
                return n.name;
              })
              .join(", ") +
            "]");
        var r = n.length;
        return new pn(
          t,
          function (t) {
            return (
              N.is(t) &&
              t.length === r &&
              n.every(function (n, r) {
                return n.is(t[r]);
              })
            );
          },
          function (t, e) {
            var u = N.validate(t, e);
            if ((0, i.nM)(u)) return u;
            for (
              var o = u.right,
                a = o.length > r ? o.slice(0, r) : o,
                c = [],
                f = 0;
              f < r;
              f++
            ) {
              var s = o[f],
                y = n[f],
                g = y.validate(s, l(e, String(f), y, s));
              if ((0, i.nM)(g)) h(c, g.left);
              else {
                var d = g.right;
                d !== s && (a === o && (a = o.slice()), (a[f] = d));
              }
            }
            return c.length > 0 ? v(c) : p(a);
          },
          Y(n)
            ? c
            : function (t) {
                return n.map(function (n, r) {
                  return n.encode(t[r]);
                });
              },
          n
        );
      }
      var gn = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.type = u), (o._tag = "ReadonlyType"), o;
          }
          return u(t, n), t;
        })(a),
        dn = function (n, t) {
          return (
            void 0 === t && (t = "Readonly<" + n.name + ">"),
            new gn(t, n.is, n.validate, n.encode, n)
          );
        },
        Tn = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.type = u), (o._tag = "ReadonlyArrayType"), o;
          }
          return u(t, n), t;
        })(a),
        wn = function (n, t) {
          void 0 === t && (t = "ReadonlyArray<" + n.name + ">");
          var r = H(n);
          return new Tn(t, r.is, r.validate, r.encode, n);
        },
        mn = function (n, t) {
          return An(nn(n), t);
        },
        _n = (function (n) {
          function t(t, r, e, i, u, o) {
            var a = n.call(this, t, r, e, i, u) || this;
            return (a.tag = o), a;
          }
          return u(t, n), t;
        })(cn),
        bn = function (n, t, r) {
          void 0 === r && (r = fn(t));
          var e = sn(t, r);
          return e instanceof _n
            ? e
            : (console.warn(
                "[io-ts] Cannot build a tagged union for " +
                  r +
                  ", returning a de-optimized union"
              ),
              new _n(r, e.is, e.validate, e.encode, t, n));
        },
        On = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.type = u), (o._tag = "ExactType"), o;
          }
          return u(t, n), t;
        })(a),
        jn = function (n) {
          switch (n._tag) {
            case "RefinementType":
            case "ReadonlyType":
              return jn(n.type);
            case "InterfaceType":
            case "StrictType":
            case "PartialType":
              return n.props;
            case "IntersectionType":
              return n.types.reduce(function (n, t) {
                return Object.assign(n, jn(t));
              }, {});
          }
        },
        kn = function (n, t) {
          for (
            var r = Object.getOwnPropertyNames(n), e = !1, i = {}, u = 0;
            u < r.length;
            u++
          ) {
            var o = r[u];
            G.call(t, o) ? (i[o] = n[o]) : (e = !0);
          }
          return e ? i : n;
        },
        An = function (n, t) {
          void 0 === t &&
            (t = (function (n) {
              return $n(n)
                ? "{| " + X(n.props) + " |}"
                : (function (n) {
                    return "PartialType" === n._tag;
                  })(n)
                ? rn("{| " + X(n.props) + " |}")
                : "Exact<" + n.name + ">";
            })(n));
          var r = jn(n);
          return new On(
            t,
            n.is,
            function (t, e) {
              var u = D.validate(t, e);
              if ((0, i.nM)(u)) return u;
              var o = n.validate(t, e);
              return (0, i.nM)(o) ? o : (0, i.F2)(kn(o.right, r));
            },
            function (t) {
              return n.encode(kn(t, r));
            },
            n
          );
        },
        Mn = function (n, t) {
          return { value: n, context: t };
        },
        In = function (n) {
          return [{ key: "", type: n }];
        },
        Rn = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "never",
                function (n) {
                  return !1;
                },
                function (n, t) {
                  return y(n, t);
                },
                function () {
                  throw new Error("cannot encode never");
                }
              ) || this;
            return (t._tag = "NeverType"), t;
          }
          return u(t, n), t;
        })(a),
        Sn = new Rn(),
        xn = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "any",
                function (n) {
                  return !0;
                },
                p,
                c
              ) || this;
            return (t._tag = "AnyType"), t;
          }
          return u(t, n), t;
        })(a),
        Pn = new xn(),
        Nn = D,
        Un = (function (n) {
          function t() {
            var t =
              n.call(
                this,
                "object",
                function (n) {
                  return null !== n && "object" == typeof n;
                },
                function (n, r) {
                  return t.is(n) ? p(n) : y(n, r);
                },
                c
              ) || this;
            return (t._tag = "ObjectType"), t;
          }
          return u(t, n), t;
        })(a),
        Dn = new Un();
      function En(n, t, r) {
        return (
          void 0 === r && (r = "(" + n.name + " | " + f(t) + ")"),
          new C(
            r,
            function (r) {
              return n.is(r) && t(r);
            },
            function (r, e) {
              var u = n.validate(r, e);
              if ((0, i.nM)(u)) return u;
              var o = u.right;
              return t(o) ? p(o) : y(o, e);
            },
            n.encode,
            n,
            t
          )
        );
      }
      var Fn = En(M, Number.isInteger, "Integer"),
        Cn = an,
        Kn = (function (n) {
          function t(t, r, e, i, u) {
            var o = n.call(this, t, r, e, i) || this;
            return (o.props = u), (o._tag = "StrictType"), o;
          }
          return u(t, n), t;
        })(a);
      function Ln(n) {
        return n;
      }
      function zn(n) {
        return function () {
          return n;
        };
      }
      var Bn = {};
      function Vn(n, t) {
        for (var r = [], e = 0, i = n; e < i.length; e++) {
          var u = i[e];
          -1 !== t.indexOf(u) && r.push(u);
        }
        return r;
      }
      function Gn(n) {
        return "AnyType" === n._tag;
      }
      function Jn(n) {
        return "LiteralType" === n._tag;
      }
      function $n(n) {
        return "InterfaceType" === n._tag;
      }
      function Wn(n) {
        return "UnionType" === n._tag;
      }
      var qn = [];
      function Hn(n) {
        if (-1 !== qn.indexOf(n)) return Bn;
        if (
          $n(n) ||
          (function (n) {
            return "StrictType" === n._tag;
          })(n)
        ) {
          var t = Bn;
          for (var r in n.props) {
            var e = n.props[r];
            Jn(e) && (t === Bn && (t = {}), (t[r] = [e.value]));
          }
          return t;
        }
        if (
          (function (n) {
            return "ExactType" === n._tag;
          })(n) ||
          (function (n) {
            return "RefinementType" === n._tag;
          })(n)
        )
          return Hn(n.type);
        if (
          (function (n) {
            return "IntersectionType" === n._tag;
          })(n)
        )
          return n.types.reduce(function (n, t) {
            return (function (n, t) {
              if (n === Bn) return t;
              if (t === Bn) return n;
              var r = Object.assign({}, n);
              for (var e in t)
                if (n.hasOwnProperty(e)) {
                  var i = Vn(n[e], t[e]);
                  if (!(i.length > 0)) {
                    r = Bn;
                    break;
                  }
                  r[e] = i;
                } else r[e] = t[e];
              return r;
            })(n, Hn(t));
          }, Bn);
        if (Wn(n))
          return n.types.slice(1).reduce(function (n, t) {
            return (function (n, t) {
              if (n === Bn || t === Bn) return Bn;
              var r = Bn;
              for (var e in n)
                t.hasOwnProperty(e) &&
                  0 === Vn(n[e], t[e]).length &&
                  (r === Bn && (r = {}), (r[e] = n[e].concat(t[e])));
              return r;
            })(n, Hn(t));
          }, Hn(n.types[0]));
        if (
          (function (n) {
            return "RecursiveType" === n._tag;
          })(n)
        ) {
          qn.push(n);
          var i = Hn(n.type);
          return qn.pop(), i;
        }
        return Bn;
      }
      function Qn(n) {
        for (
          var t = Hn(n[0]),
            r = Object.keys(t),
            e = n.length,
            i = function (r) {
              for (var i = t[r].slice(), u = [t[r]], o = 1; o < e; o++) {
                var a = Hn(n[o])[r];
                if (void 0 === a) return "continue-keys";
                if (
                  a.some(function (n) {
                    return -1 !== i.indexOf(n);
                  })
                )
                  return "continue-keys";
                i.push.apply(i, a), u.push(a);
              }
              return { value: [r, u] };
            },
            u = 0,
            o = r;
          u < o.length;
          u++
        ) {
          var a = i(o[u]);
          if ("object" == typeof a) return a.value;
        }
      }
    },
  },
]);
