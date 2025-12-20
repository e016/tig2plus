var renderCanvas;
(() => {
  "use strict";
  var e = {
      d: (t, r) => {
        for (var n in r)
          e.o(r, n) &&
            !e.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  (() => {
    async function r(e, t, r) {
      await Promise.all([
        ...n(e, t.audioFileNames || [], r.audioElements, r.loadAudioFile),
        ...n(e, t.imageFileNames || [], r.imageElements, (e) =>
          r.loadImageFile(e, !1)
        ),
        ...n(e, t.imageFileNamesScaleNearestPixel || [], r.imageElements, (e) =>
          r.loadImageFile(e, !0)
        ),
      ]);
    }
    function n(e, t, r, n) {
      return t.map((t) => {
        if (r[t]) {
          r[t].globalSpriteIds.push(e);
          const { data: n } = r[t];
          return "then" in n ? n : Promise.resolve();
        }
        const i = n(t).then((e) => {
          r[t].data = e;
        });
        return (r[t] = { globalSpriteIds: [e], data: i }), i;
      });
    }
    function i(e, t) {
      o(e, t.audioElements, t.cleanupAudioFile),
        o(e, t.imageElements, t.cleanupImageFile);
    }
    function o(e, t, r) {
      for (const n in t) {
        const { globalSpriteIds: i } = t[n],
          o = i.indexOf(e);
        -1 !== o &&
          (1 === i.length
            ? (r(n), delete t[n])
            : t[n].globalSpriteIds.splice(o, 1));
      }
    }
    function a(e) {
      var t, r, n;
      return {
        x: e.x || 0,
        y: e.y || 0,
        rotation: e.rotation || 0,
        opacity: Math.min(
          1,
          Math.max(0, null !== (t = e.opacity) && void 0 !== t ? t : 1)
        ),
        scaleX: null !== (r = e.scaleX) && void 0 !== r ? r : 1,
        scaleY: null !== (n = e.scaleY) && void 0 !== n ? n : 1,
        anchorX: e.anchorX || 0,
        anchorY: e.anchorY || 0,
        mask: e.mask || null,
        show: e.show || !0,
      };
    }
    function s(e, t) {
      var r, n, i, o;
      const a = e;
      return (
        (a.x = t.x || 0),
        (a.y = t.y || 0),
        (a.rotation = t.rotation || 0),
        (a.opacity = Math.min(
          1,
          Math.max(0, null !== (r = t.opacity) && void 0 !== r ? r : 1)
        )),
        (a.scaleX = null !== (n = t.scaleX) && void 0 !== n ? n : 1),
        (a.scaleY = null !== (i = t.scaleY) && void 0 !== i ? i : 1),
        (a.anchorX = t.anchorX || 0),
        (a.anchorY = t.anchorY || 0),
        (a.mask = t.mask || null),
        (a.show = null === (o = t.show) || void 0 === o || o),
        a
      );
    }
    function l(e, t) {
      var r;
      switch (e.type) {
        case "rectangleArray": {
          const e = t;
          return s(
            {
              testId: e.testId,
              width: e.width || 10,
              height: e.height || 10,
              color: e.color || "black",
            },
            e
          );
        }
        case "textArray": {
          const e = t;
          return s(
            {
              testId: e.testId,
              font: e.font,
              text: e.text || "",
              color: e.color || "black",
              gradient: e.gradient,
              strokeColor: e.strokeColor,
              strokeThickness: e.strokeThickness,
            },
            e
          );
        }
        case "circleArray": {
          const e = t;
          return s(
            {
              testId: e.testId,
              radius: e.radius || 10,
              color: e.color || "black",
              gradient: e.gradient,
            },
            e
          );
        }
        case "lineArray": {
          const e = t;
          return s(
            {
              testId: e.testId,
              color: e.color,
              fillColor: e.fillColor,
              thickness: null !== (r = e.thickness) && void 0 !== r ? r : 1,
              lineCap: e.lineCap || "butt",
              path: e.path || [],
              gradient: e.gradient,
              fillGradient: e.fillGradient,
            },
            e
          );
        }
        case "imageArray": {
          const e = t;
          return s(
            { testId: e.testId, width: e.width || 10, height: e.height || 10 },
            e
          );
        }
      }
    }
    e.r(t), e.d(t, { run: () => ue });
    const c = {
        identityMatrix: [1, 0, 0, 1, 0, 0],
        getNewIdentity3fv: function () {
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        },
        getScaleMatrix: function (e, t) {
          return [e, 0, 0, t, 0, 0];
        },
        getTranslateMatrix: function (e, t) {
          return [1, 0, 0, 1, e, t];
        },
        multiply: function (e, t) {
          const r = e[0],
            n = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            l = t[0],
            c = t[1],
            u = t[2],
            d = t[3],
            p = t[4],
            f = t[5];
          return [
            r * l + i * c,
            n * l + o * c,
            r * u + i * d,
            n * u + o * d,
            r * p + i * f + a,
            n * p + o * f + s,
          ];
        },
        transformMut: function (e, t, r, n, i, o, a, s, l, c, u) {
          const d = Math.cos(o),
            p = Math.sin(o),
            f = e[0],
            m = e[1],
            h = e[2],
            g = e[3],
            v = e[4],
            y = e[5],
            x = l * d * n,
            _ = l * p * n,
            A = c * -p * i,
            b = c * d * i,
            S = d * n * a - p * i * s + t,
            E = p * n * a + d * i * s + r;
          (u[0] = f * x + h * _),
            (u[1] = m * x + g * _),
            (u[2] = f * A + h * b),
            (u[3] = m * A + g * b),
            (u[4] = f * S + h * E + v),
            (u[5] = m * S + g * E + y);
        },
        toUniform3fvMut: function (e, t) {
          (t[0] = e[0]),
            (t[1] = e[1]),
            (t[2] = 0),
            (t[3] = e[2]),
            (t[4] = e[3]),
            (t[5] = 0),
            (t[6] = e[4]),
            (t[7] = e[5]),
            (t[8] = 1);
        },
        scaleToUniform3fvMut: function (e, t, r, n) {
          const i = e[0],
            o = e[1],
            a = e[2],
            s = e[3],
            l = e[4],
            c = e[5];
          (n[0] = i * t),
            (n[1] = o * t),
            (n[2] = 0),
            (n[3] = a * r),
            (n[4] = s * r),
            (n[5] = 0),
            (n[6] = l),
            (n[7] = c),
            (n[8] = 1);
        },
        multiplyPooled: function (e, t) {
          const r = e[0],
            n = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            l = t[0],
            c = t[1],
            d = t[2],
            p = t[3],
            f = t[4],
            m = t[5];
          return (
            (u[0] = r * l + i * c),
            (u[1] = n * l + o * c),
            (u[2] = r * d + i * p),
            (u[3] = n * d + o * p),
            (u[4] = r * f + i * m + a),
            (u[5] = n * f + o * m + s),
            u
          );
        },
        getTranslateMatrixPooled: function (e, t) {
          return (d[4] = e), (d[5] = t), d;
        },
        getScaleMatrixPooled: function (e, t) {
          return (p[0] = e), (p[3] = t), p;
        },
        getRotateMatrixPooled: function (e) {
          const t = Math.sin(e),
            r = Math.cos(e);
          return (f[0] = r), (f[1] = t), (f[2] = -t), (f[3] = r), f;
        },
        getScalePooled: function (e) {
          return (
            (m.scaleX = Math.hypot(e[0], e[2])),
            (m.scaleY = Math.hypot(e[1], e[3])),
            m
          );
        },
        invertPooled: function (e) {
          const t = e[0],
            r = e[1],
            n = e[2],
            i = e[3],
            o = e[4],
            a = e[5];
          let s = t * i - r * n;
          return s
            ? ((s = 1 / s),
              (h[0] = i * s),
              (h[1] = -r * s),
              (h[2] = -n * s),
              (h[3] = t * s),
              (h[4] = (n * a - i * o) * s),
              (h[5] = (r * o - t * a) * s),
              h)
            : null;
        },
      },
      u = [0, 0, 0, 0, 0, 0],
      d = [1, 0, 0, 1, 0, 0],
      p = [0, 0, 0, 0, 0, 0],
      f = [0, 0, 0, 0, 0, 0],
      m = { scaleX: 0, scaleY: 0 },
      h = [0, 0, 0, 0, 0, 0];
    function g(e, t, r, n = 1, i = 1) {
      c.transformMut(
        e,
        r.x,
        r.y,
        r.scaleX,
        r.scaleY,
        -r.rotation * x,
        -r.anchorX,
        -r.anchorY,
        n,
        i,
        t
      );
    }
    const v = [0, 0, 0, 0, 0, 0];
    function y(e, t, r = 1, n = 1) {
      return g(e, v, t, r, n), v;
    }
    const x = Math.PI / 180;
    function _(e, t, r, n, i, o, a, l, c, u, d, p, f, m) {
      const { baseProps: h } = e;
      s(h, t);
      const g = n.addToStack(h),
        v = e.getSprites(t, g, a, l, c, m),
        y = e.prevChildIdsSet,
        x = e.prevChildIds;
      let _ = 0;
      p.startRenderSprite(h, g, null),
        b(v, e, r, n, i, o, l, c, u, d, p, f, m, (e) => {
          (x[_] = e), _++, y.delete(e);
        }),
        p.endRenderSprite(n.removeFromStack()),
        _ < x.length && (x.length = _);
      for (const t of y)
        A({ [t]: e.childContainers[t] }, u, r), delete e.childContainers[t];
      e.prevChildIdsSet.clear();
      for (const t of x) e.prevChildIdsSet.add(t);
      if (e.prevChildIdsSet.size < x.length) {
        const e = x.find((e, t) => x.indexOf(e) !== t);
        throw Error(`Duplicate Sprite id ${e}`);
      }
    }
    function A(e, t, r) {
      for (const n in e) {
        const o = e[n];
        if ("custom" === o.type) {
          const e = `${t}--${n}`;
          A(o.childContainers, e, r),
            o.loadFilesPromise &&
              o.loadFilesPromise.then(() => {
                i(e, r.assetUtils);
              });
        }
        o.cleanup();
      }
    }
    function b(e, t, r, n, i, o, a, s, l, u, d, p, f, m) {
      for (let h = 0; h < e.length; h++) {
        const g = e[h];
        if (g)
          if ("context" === g.type)
            b(g.sprites, t, r, n, i, o, a, s, l, u, d, p, [...f, g], m);
          else if ("native" === g.type) {
            m(g.props.id);
            const { nativeSpriteMap: e, nativeSpriteUtils: r } = u,
              i = e[g.name];
            if (!i) throw Error(`Cannot find Native Sprite "${g.name}"`);
            let o = t.childContainers[g.props.id];
            if (!o || "native" !== o.type) {
              const e = {
                type: "native",
                props: g.props,
                state: i.create({
                  props: g.props,
                  parentGlobalId: l,
                  getState: () => e.state,
                  utils: r,
                }),
                updateSprite() {
                  d.startNativeSprite(),
                    i.loop({
                      props: e.props,
                      state: e.state,
                      parentGlobalId: l,
                      utils: r,
                      spriteToGameCoords: (e, t, r) => {
                        const i = c.multiplyPooled(
                          n.getTopStack().transformationGameCoords,
                          c.getTranslateMatrixPooled(e, t)
                        );
                        (r.x = i[4]), (r.y = i[5]);
                      },
                    }),
                    d.endNativeSprite();
                },
                cleanup() {
                  i.cleanup({ state: this.state, parentGlobalId: l });
                },
              };
              (t.childContainers[g.props.id] = e), (o = e);
            }
            (o.props = g.props), o.updateSprite();
          } else if ("pure" === g.type) {
            m(g.props.id);
            let e = t.childContainers[g.props.id];
            (e && "pure" === e.type) ||
              ((e = P(g)), (t.childContainers[g.props.id] = e)),
              F(e, g.props, n, r.size, u.nativeSpriteUtils.didResize, a, d);
          } else if ("custom" === g.type) {
            m(g.props.id);
            let e = !1,
              c = t.childContainers[g.props.id];
            const h = `${l}--${g.props.id}`;
            (c && "custom" === c.type) ||
              ((e = !0),
              (c = E(g, r, i, o, n, t.prevTime, h, f)),
              (t.childContainers[g.props.id] = c)),
              _(c, g.props, r, n, i, o, e, a, s, h, u, d, p, f);
          } else if ("mutable" === g.type) {
            if (!g.props.id)
              throw Error(
                "Mutable sprite must have id prop in non-Mutable Sprites"
              );
            m(g.props.id);
            let e = t.childContainers[g.props.id];
            const a = `${l}--${g.props.id}`;
            let s = !1;
            if (!e || "mutable" !== e.type) {
              if (
                ((s = !0),
                (e = R(g, r, n, i, o, t.prevTime, a, [], d, p, u)),
                "mutable" !== e.type)
              )
                throw Error("Can only render mutable Sprite");
              t.childContainers[g.props.id] = e;
            }
            for (const t in g.props) e.props[t] = g.props[t];
            const c = n.addToStack(e.props);
            d.startRenderSprite(e.props, c, e.maskState),
              e.updateSprites(s),
              d.endRenderSprite(n.removeFromStack());
          } else
            d.renderTexture(n.getTopStack(), g, d.getInitTextureState(g), null);
      }
    }
    const S = (1 / 60) * 1e3;
    function E(e, t, n, i, o, s, l, c) {
      const { spriteObj: u, props: d } = e,
        p = [],
        f = (e) => {
          p.push(e);
        };
      let m,
        h = null,
        g = null;
      u.init &&
        (m = u.init({
          props: d,
          getState: () => {
            if (!h) throw Error("Cannot call getState synchronously in init");
            return h.state;
          },
          device: t,
          getInputs: () =>
            n(
              o.getStack((null == h ? void 0 : h.stackIndex) || 0)
                .transformationGameCoords,
              (null == h ? void 0 : h.inputs) || i()
            ),
          updateState: f,
          getContext: (e) => {
            const t = c.find((t) => t.context === e);
            if (!t) throw Error("No context setup");
            return t.value;
          },
          preloadFiles: async (e) => {
            const n = r(l, e, t.assetUtils);
            h ? (h.loadFilesPromise = n) : (g = n), await n;
          },
        }));
      const v = () => {
          let e = 0;
          for (; e < p.length; ) {
            const t = p[e];
            (h.state = t(h.state)), e++;
          }
          p.length = 0;
        },
        y = () => h.state;
      return (
        (h = {
          type: "custom",
          state: m,
          inputs: i(),
          baseProps: a(d),
          childContainers: {},
          prevChildIds: [],
          prevChildIdsSet: new Set(),
          prevTime: s,
          currentLag: 0,
          loadFilesPromise: g,
          stackIndex: null,
          getSprites(e, r, i, a, s, l) {
            v(),
              null === this.stackIndex && (this.stackIndex = o.getStackIndex());
            const c = (e) => {
              const t = l.find((t) => t.context === e);
              if (!t) throw Error("No context setup");
              return t.value;
            };
            !i &&
              u.loop &&
              (this.state = u.loop({
                props: e,
                state: this.state,
                device: t,
                getInputs: () => n(r.transformationGameCoords, this.inputs),
                updateState: f,
                getState: y,
                getContext: c,
              })),
              v();
            let d = u[a];
            d || (d = "renderPXL" === a && u.renderXL ? u.renderXL : u.render);
            const p = d({
              props: e,
              state: this.state,
              device: t,
              getInputs: () => n(r.transformationGameCoords, this.inputs),
              updateState: f,
              getState: y,
              getContext: c,
              extrapolateFactor: s,
            });
            return v(), p;
          },
          cleanup() {
            var e;
            null === (e = u.cleanup) ||
              void 0 === e ||
              e.call(u, { state: this.state, device: t });
          },
        }),
        h
      );
    }
    function w(e, t) {
      const r = e.deviceHeight > e.deviceWidth;
      let n,
        i = !1;
      return (
        "portrait" in t
          ? ((n = r ? t.portrait : t.landscape), (i = !0))
          : (n = t),
        (n.minHeightXL && e.deviceHeight >= n.minHeightXL) ||
        (n.minWidthXL && e.deviceWidth >= n.minWidthXL)
          ? i && r
            ? "renderPXL"
            : "renderXL"
          : i && r
          ? "renderP"
          : "render"
      );
    }
    function T(e, t, r, n) {
      switch (e.type) {
        case "mutable":
          e.updateSelf();
          const i = r.addToStack(e.props);
          t.startRenderSprite(e.props, i, e.maskState),
            e.updateSprites(n),
            t.endRenderSprite(r.removeFromStack());
          break;
        case "mutableArray":
          e.updateSprites();
          for (const i in e.containersArray) {
            const o = e.containersArray[i],
              a = r.addToStack(o.props);
            t.startRenderSprite(o.props, a, o.maskState),
              o.updateSprites(n),
              t.endRenderSprite(r.removeFromStack());
          }
          break;
        case "mutTexture":
          e.updateTexture(),
            t.renderTexture(
              r.getTopStack(),
              e.texture,
              e.textureState,
              e.maskState
            );
          break;
        case "mutOnChange":
          n = n || e.updateOnChange();
          for (const i of e.containers) T(i, t, r, n);
          break;
        case "mutArrayTexture":
          e.updateTextureArray(),
            t.renderTexture(
              r.getTopStack(),
              e.texture,
              e.textureState,
              e.maskState
            );
          break;
        case "mutRun":
          e.updateRun();
          break;
        case "mutContext":
          for (const i of e.containers) T(i, t, r, n);
          break;
        case "native":
          e.updateSprite();
          break;
        default:
          !(function (e) {
            throw new Error("Replay unreachable error");
          })();
      }
    }
    function R(e, t, n, o, a, u, d, p, f, m, h) {
      var g, v;
      if (null === e) return null;
      switch (e.type) {
        case "text":
        case "circle":
        case "rectangle":
        case "image":
        case "line":
        case "spriteSheet": {
          const t = e.props,
            r = e.update;
          return (
            null == r || r(t),
            {
              type: "mutTexture",
              texture: e,
              textureState: f.getInitTextureState(e),
              maskState: f.getInitMaskState(e.props.mask),
              updateTexture() {
                null == r || r(this.texture.props);
              },
              cleanup: () => null,
            }
          );
        }
        case "rectangleArray":
        case "textArray":
        case "circleArray":
        case "lineArray":
        case "imageArray": {
          const t = e.array(),
            r = e.update;
          return (
            (e.props = Array.from({ length: t.length }).map((n, i) => {
              const o = l(e, e.newProps(t[i], i));
              return null == r || r(o, t[i], i), o;
            })),
            {
              type: "mutArrayTexture",
              texture: e,
              array: e.array,
              textureState: f.getInitTextureState(e),
              maskState: f.getInitMaskState(e.mask),
              cleanup: () => null,
              pooledProps: [],
              updateTextureArray() {
                const t = this.array(),
                  n = t.length,
                  i = this.texture.props.length,
                  o = n - i;
                if (o > 0)
                  for (let r = 0; r < o; r++)
                    if (this.pooledProps.length > 0)
                      this.texture.props.push(this.pooledProps.pop());
                    else {
                      const n = l(e, e.newProps(t[i + r], i + r));
                      this.texture.props.push(n);
                    }
                else if (o < 0) {
                  let e = -o;
                  for (; e > 0; )
                    e--, this.pooledProps.push(this.texture.props.pop());
                }
                for (let n = 0; n < this.texture.props.length; n++) {
                  const i = this.texture.props[n];
                  null == r || r(i, t[n], n),
                    m && e.testId && (i.testId = e.testId(t[n], n));
                }
              },
            }
          );
        }
        case "onChange": {
          const r = e.value();
          return {
            type: "mutOnChange",
            value: r,
            containers: e
              .sprites()
              .map((e, i) => R(e, t, n, o, a, u, `${d}--${r}-${i}`, p, f, m, h))
              .filter(k),
            updateOnChange() {
              const r = e.value();
              return (
                this.value !== r &&
                ((this.value = r),
                this.cleanup(),
                (this.containers = e
                  .sprites()
                  .map((e, i) =>
                    R(e, t, n, o, a, u, `${d}--${r}-${i}`, p, f, m, h)
                  )
                  .filter(k)),
                !0)
              );
            },
            cleanup() {
              for (const e of this.containers) e.cleanup();
            },
          };
        }
        case "run":
          return {
            type: "mutRun",
            updateRun: () => {
              e.fn();
            },
            cleanup: () => null,
          };
        case "conditional": {
          const r = e.condition();
          return {
            type: "mutOnChange",
            value: r,
            containers: (r ? e.trueSprites() : e.falseSprites())
              .map((e, i) => R(e, t, n, o, a, u, `${d}--${r}-${i}`, p, f, m, h))
              .filter(k),
            updateOnChange() {
              const r = e.condition();
              return !this.value && r
                ? ((this.value = !0),
                  this.cleanup(),
                  (this.containers = e
                    .trueSprites()
                    .map((e, r) =>
                      R(e, t, n, o, a, u, `${d}--true-${r}`, p, f, m, h)
                    )
                    .filter(k)),
                  !0)
                : !(
                    !this.value ||
                    r ||
                    ((this.value = !1),
                    this.cleanup(),
                    (this.containers = e
                      .falseSprites()
                      .map((e, r) =>
                        R(e, t, n, o, a, u, `${d}--false-${r}`, p, f, m, h)
                      )
                      .filter(k)),
                    0)
                  );
            },
            cleanup() {
              for (const e of this.containers) e.cleanup();
            },
          };
        }
        case "mutContext": {
          const r = [...p, e];
          return {
            type: "mutContext",
            containers: e.sprites
              .map((e, i) => R(e, t, n, o, a, u, `${d}--${i}`, r, f, m, h))
              .filter(k),
            cleanup() {
              for (const e of this.containers) e.cleanup();
            },
          };
        }
        case "native": {
          const { nativeSpriteMap: t, nativeSpriteUtils: r } = h,
            i = t[e.name];
          if (!i) throw Error(`Cannot find Native Sprite "${e.name}"`);
          const o = i.create({
              props: e.props,
              parentGlobalId: d,
              getState: () => s.state,
              utils: r,
            }),
            a = {
              props: e.props,
              state: o,
              parentGlobalId: d,
              utils: r,
              spriteToGameCoords: (e, t, r) => {
                const i = c.multiplyPooled(
                  n.getTopStack().transformationGameCoords,
                  c.getTranslateMatrixPooled(e, t)
                );
                (r.x = i[4]), (r.y = i[5]);
              },
            },
            s = {
              type: "native",
              props: e.props,
              state: o,
              updateSprite() {
                var t;
                f.startNativeSprite(),
                  null === (t = e.update) ||
                    void 0 === t ||
                    t.call(e, this.props),
                  i.loop(a),
                  f.endNativeSprite();
              },
              cleanup: () => {
                i.cleanup({ state: s.state, parentGlobalId: d });
              },
            };
          return s;
        }
        case "mutableArray": {
          const { spriteObj: r } = e,
            i = e.update,
            l = (t, n) => {
              var i, o;
              const a = e.props(t, n);
              return (
                s(a, a),
                null === (i = e.update) || void 0 === i || i.call(e, a, t, n),
                null === (o = e.updateAll) || void 0 === o || o.call(e, a),
                { type: "mutable", spriteObj: r, props: a }
              );
            },
            c = [];
          return {
            type: "mutableArray",
            props: e.props,
            update: e.update,
            filter: e.filter,
            array: e.array,
            key: e.key,
            prevIdsA: c,
            prevIdsB: c,
            isOnSamePrevIdRef: !0,
            onPrevIdA: !0,
            containersArray: e
              .array()
              .map((t, r) => (void 0 === e.filter || e.filter(t, r) ? t : null))
              .reduce((r, i, s) => {
                if (null === i) return r;
                const c = e.key(i, s);
                return (
                  (r[c] = R(l(i, s), t, n, o, a, u, `${d}--${c}`, p, f, m, h)),
                  r
                );
              }, {}),
            updateSprites() {
              var r, s;
              const c = this.array(),
                g = this.onPrevIdA ? this.prevIdsA : this.prevIdsB,
                v = this.onPrevIdA ? this.prevIdsB : this.prevIdsA;
              let y = 0,
                x = 0;
              for (let v = 0; v < c.length; v++) {
                const _ = c[v];
                if (
                  !1 ===
                  (null === (r = this.filter) || void 0 === r
                    ? void 0
                    : r.call(this, _, v))
                )
                  continue;
                const A = e.key(_, v);
                (g[y] = A), y++;
                let b = this.containersArray[A];
                b ||
                  (x++,
                  (b = R(l(_, v), t, n, o, a, u, `${d}--${A}`, p, f, m, h)),
                  (this.containersArray[A] = b)),
                  null === (s = e.updateAll) ||
                    void 0 === s ||
                    s.call(e, b.props),
                  null == i || i(b.props, c[v], v);
              }
              y < g.length && (g.length = y);
              const _ = g.length,
                A = v.length + x;
              if (_ > A) {
                const e = g.find((e, t) => g.indexOf(e) !== t);
                throw Error(`Duplicate key ${e}`);
              }
              if (_ < A) {
                const e = new Set(v);
                for (const t of g) e.delete(t);
                for (const t of e)
                  this.containersArray[t].cleanup(),
                    delete this.containersArray[t];
              }
              (this.onPrevIdA = !this.onPrevIdA),
                this.isOnSamePrevIdRef &&
                  ((this.isOnSamePrevIdRef = !1),
                  (this.prevIdsB = [...this.prevIdsB]));
            },
            cleanup() {
              for (const e in this.containersArray)
                this.containersArray[e].cleanup();
            },
          };
        }
        case "mutable": {
          const { spriteObj: l } = e;
          let c = null;
          function y(e) {
            const t = p.find((t) => t.context === e);
            if (!t) throw Error("No context setup");
            return t.value();
          }
          const { props: x } = e;
          s(x, x), null === (g = e.update) || void 0 === g || g.call(e, x);
          let _ = null;
          const A =
              null === (v = l.init) || void 0 === v
                ? void 0
                : v.call(l, {
                    props: x,
                    device: t,
                    getState: () => {
                      if (!_)
                        throw Error(
                          "Cannot call getState synchronously in init"
                        );
                      return _.state;
                    },
                    getInputs: () =>
                      o(
                        n.getStack((null == _ ? void 0 : _.stackIndex) || 0)
                          .transformationGameCoords,
                        (null == _ ? void 0 : _.inputs) || a()
                      ),
                    getContext: y,
                    preloadFiles: async (e) => {
                      const n = r(d, e, t.assetUtils);
                      _ ? (_.loadFilesPromise = n) : (c = n), await n;
                    },
                  }),
            b = {
              props: x,
              state: A,
              device: t,
              getInputs: () =>
                o(
                  n.getStack((null == _ ? void 0 : _.stackIndex) || 0)
                    .transformationGameCoords,
                  (null == _ ? void 0 : _.inputs) || a()
                ),
              getContext: y,
            };
          return (
            (_ = {
              type: "mutable",
              props: x,
              state: A,
              inputs: a(),
              stackIndex: null,
              maskState: f.getInitMaskState(e.props.mask),
              childContainers: l
                .render({
                  props: x,
                  state: A,
                  device: t,
                  getInputs: () =>
                    o(
                      n.getStack((null == _ ? void 0 : _.stackIndex) || 0)
                        .transformationGameCoords,
                      (null == _ ? void 0 : _.inputs) || a()
                    ),
                  getContext: y,
                })
                .map((e, r) => R(e, t, n, o, a, u, `${d}--${r}`, p, f, m, h))
                .filter(k),
              updateSelf() {
                var t;
                null === (t = e.update) || void 0 === t || t.call(e, x);
              },
              updateSprites(e) {
                var t;
                null === this.stackIndex &&
                  (this.stackIndex = n.getStackIndex()),
                  e || null === (t = l.loop) || void 0 === t || t.call(l, b);
                for (const t of this.childContainers) T(t, f, n, e);
              },
              cleanup() {
                var e;
                for (const e of this.childContainers) e.cleanup();
                null === (e = l.cleanup) ||
                  void 0 === e ||
                  e.call(l, { state: this.state, device: t }),
                  this.loadFilesPromise &&
                    this.loadFilesPromise.then(() => {
                      i(d, t.assetUtils);
                    });
              },
              loadFilesPromise: c,
            }),
            _
          );
        }
      }
    }
    function P(e) {
      const { spriteObj: t } = e;
      return {
        type: "pure",
        childContainers: {},
        prevChildIds: [],
        prevChildIdsSet: new Set(),
        baseProps: a(e.props),
        getSprites(e, r, n, i) {
          if (
            this.prevProps &&
            this.cache &&
            !t.shouldRerender(this.prevProps, e) &&
            !n
          )
            return (this.prevProps = e), this.cache;
          let o = t[i];
          return (
            o || (o = "renderPXL" === i && t.renderXL ? t.renderXL : t.render),
            (this.prevProps = e),
            { type: "pureSprites", sprites: o({ props: e, size: r }) }
          );
        },
        cleanup: () => null,
      };
    }
    function F(e, t, r, n, i, o, a) {
      const { baseProps: l } = e;
      s(l, t);
      const c = e.getSprites(t, n, i, o);
      return "cache" === c.type
        ? (I(c, a, r), c)
        : (function (e, t, r, n, i, o, a) {
            const { baseProps: s } = e,
              l = e.prevChildIdsSet,
              c = e.prevChildIds;
            let u = 0;
            a.startRenderSprite(s, r.addToStack(s), null);
            const d = new Array(t.length);
            let p = 0;
            for (let s = 0; s < t.length; s++) {
              const f = t[s];
              if (f)
                if ("pure" === f.type) {
                  (c[u] = f.props.id), u++, l.delete(f.props.id);
                  let t = e.childContainers[f.props.id];
                  (t && "pure" === t.type) ||
                    ((t = P(f)), (e.childContainers[f.props.id] = t)),
                    (d[p] = F(t, f.props, r, n, i, o, a)),
                    p++;
                } else
                  a.renderTexture(
                    r.getTopStack(),
                    f,
                    a.getInitTextureState(f),
                    null
                  ),
                    (d[p] = f),
                    p++;
            }
            p < d.length && (d.length = p),
              a.endRenderSprite(r.removeFromStack());
            for (const t of l) delete e.childContainers[t];
            const f = { type: "cache", baseProps: s, items: d };
            if (
              ((e.cache = f),
              u < c.length && (c.length = u),
              (e.prevChildIdsSet = new Set(c)),
              e.prevChildIdsSet.size < c.length)
            ) {
              const e = c.find((e, t) => c.indexOf(e) !== t);
              throw Error(`Duplicate Sprite id ${e}`);
            }
            return f;
          })(e, c.sprites, r, n, i, o, a);
    }
    function I(e, t, r) {
      const n = r.addToStack(e.baseProps);
      t.startRenderSprite(e.baseProps, n, null);
      for (let i = 0; i < e.items.length; i++) {
        const o = e.items[i];
        "cache" === o.type
          ? I(o, t, r)
          : t.renderTexture(n, o, t.getInitTextureState(o), null);
      }
      t.endRenderSprite(r.removeFromStack());
    }
    function k(e) {
      return null != e;
    }
    const L = {
      keysDown: {},
      keysJustPressed: {},
      pointer: {
        pressed: !1,
        numberPressed: 0,
        justPressed: !1,
        justReleased: !1,
        x: 0,
        y: 0,
      },
    };
    let M = [];
    const C = [1, 0, 0, 1, 0, 0];
    function U(e, t) {
      (t.keysDown = L.keysDown),
        (t.keysJustPressed = L.keysJustPressed),
        (t.pointer.pressed = L.pointer.pressed),
        (t.pointer.numberPressed = L.pointer.numberPressed),
        (t.pointer.justPressed = L.pointer.justPressed),
        (t.pointer.justReleased = L.pointer.justReleased);
      const r = c.invertPooled(e);
      if (!r) return t;
      (C[4] = L.pointer.x), (C[5] = L.pointer.y);
      const n = c.multiplyPooled(r, C);
      return (t.pointer.x = n[4]), (t.pointer.y = n[5]), t;
    }
    function N() {
      return {
        keysDown: {},
        keysJustPressed: {},
        pointer: {
          pressed: !1,
          numberPressed: 0,
          justPressed: !1,
          justReleased: !1,
          x: 0,
          y: 0,
        },
      };
    }
    function D(e) {
      ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(
        e.key
      ) &&
        !(
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLInputElement
        ) &&
        e.preventDefault(),
        (L.keysDown[e.key] = !0),
        (L.keysJustPressed[e.key] = !0);
    }
    function B(e) {
      L.keysDown[e.key] = void 0;
    }
    function O(e, t, r) {
      M.includes(r) || (M = [...M, r]),
        (L.pointer.pressed = !0),
        (L.pointer.numberPressed = M.length),
        (L.pointer.justPressed = !0),
        (L.pointer.x = e),
        (L.pointer.y = t);
    }
    function Y(e, t) {
      (L.pointer.x = e), (L.pointer.y = t);
    }
    function V(e, t, r) {
      (M = M.filter((e) => e !== r)),
        0 === M.length &&
          ((L.pointer.justPressed = !1), (L.pointer.pressed = !1)),
        (L.pointer.numberPressed = M.length),
        (L.pointer.justReleased = !0),
        (L.pointer.x = e),
        (L.pointer.y = t);
    }
    function G(e) {
      (M = M.filter((t) => t !== e)),
        (L.pointer.numberPressed = M.length),
        0 === M.length &&
          ((L.pointer.justPressed = !1), (L.pointer.pressed = !1));
    }
    function X() {
      for (const e in L.keysJustPressed) L.keysJustPressed[e] = void 0;
      (L.pointer.justPressed = !1), (L.pointer.justReleased = !1);
    }
    function z(e, t, r, n) {
      let i;
      i = "portrait" in n ? (t > e ? n.portrait : n.landscape) : n;
      const {
        width: o,
        height: a,
        maxWidthMargin: s = 0,
        maxHeightMargin: l = 0,
      } = i;
      if ("game-coords" === r || 0 === e || 0 === t)
        return {
          width: o,
          height: a,
          widthMargin: 0,
          heightMargin: 0,
          fullWidth: o,
          fullHeight: a,
          deviceWidth: o,
          deviceHeight: a,
        };
      const c = o / a;
      if (c > e / t) {
        const r = e,
          n = r / c,
          i = (n / a) * l,
          s = Math.min(t, n + 2 * i),
          u = ((s - n) / 2) * (a / n);
        return {
          width: o,
          height: a,
          widthMargin: 0,
          heightMargin: u,
          fullWidth: o,
          fullHeight: a + 2 * u,
          deviceWidth: r,
          deviceHeight: s,
        };
      }
      {
        const r = t,
          n = r * c,
          i = (n / o) * s,
          l = Math.min(e, n + 2 * i),
          u = ((l - n) / 2) * (o / n);
        return {
          width: o,
          height: a,
          widthMargin: u,
          heightMargin: 0,
          fullWidth: o + 2 * u,
          fullHeight: a,
          deviceWidth: l,
          deviceHeight: r,
        };
      }
    }
    function $() {
      const e = {};
      return {
        start: (t, r) => {
          const n = window.setTimeout(() => {
              delete e[i], t();
            }, r),
            i = String(n);
          return (
            (e[i] = {
              timeoutId: n,
              callback: t,
              timeStartedMs: Date.now(),
              timeRemainingMs: r,
              isPaused: !1,
            }),
            i
          );
        },
        pause: (t) => {
          const r = e[t];
          if (!r || r.isPaused) return;
          const n = Date.now() - r.timeStartedMs;
          (r.timeRemainingMs -= n),
            (r.isPaused = !0),
            window.clearTimeout(r.timeoutId);
        },
        resume: (t) => {
          const r = e[t];
          if (!r || !r.isPaused) return;
          (r.timeStartedMs = Date.now()), (r.isPaused = !1);
          const n = window.setTimeout(() => {
            delete e[t], r.callback();
          }, r.timeRemainingMs);
          r.timeoutId = n;
        },
        cancel: (t) => {
          const r = e[t];
          r && (window.clearTimeout(r.timeoutId), delete e[t]);
        },
      };
    }
    function W(e, t, r) {
      return (n) => {
        if (!r[n]) throw Error(`Audio file "${n}" was not preloaded`);
        const { data: i } = r[n];
        if ("then" in i)
          throw Error(
            `Audio file "${n}" did not finish loading before it was used`
          );
        const { buffer: o, playState: a } = i;
        return {
          getPosition: () => j(e, i.playState),
          play: (s) => {
            let l,
              c = !1,
              u = !1,
              d = 1;
            "number" == typeof s
              ? (l = s)
              : s &&
                ({
                  fromPosition: l,
                  loop: c = c,
                  overwrite: u = u,
                  playbackRate: d = d,
                } = s);
            const p = e.createBufferSource();
            (p.buffer = o), (p.playbackRate.value = d);
            const f = e.createGain();
            p.connect(f),
              f.connect(e.destination),
              f.gain.setValueAtTime(t.volume, e.currentTime);
            const m = null != l ? l : j(e, a);
            try {
              p.start(void 0, m);
            } catch (e) {
              return;
            }
            (p.loop = c),
              (p.onended = () => {
                var e;
                if (!r[n]) return;
                const { data: t } = r[n];
                "then" in t ||
                  !1 !==
                    (null === (e = t.playState) || void 0 === e
                      ? void 0
                      : e.isPaused) ||
                  delete t.playState;
              });
            const h = a && !a.isPaused;
            (h && !u) ||
              (a && h && ((a.sample.onended = null), a.sample.stop()),
              (i.playState = {
                playTime: e.currentTime,
                sample: p,
                alreadyPlayedTime: m,
                isPaused: !1,
                gainNode: f,
                volume: 1,
              }));
          },
          pause: () => {
            a &&
              !a.isPaused &&
              ((a.sample.onended = null),
              a.sample.stop(),
              (i.playState = {
                ...a,
                alreadyPlayedTime: j(e, a),
                isPaused: !0,
              }));
          },
          getStatus: () =>
            i.playState && !1 === i.playState.isPaused ? "playing" : "paused",
          getDuration: () => o.duration,
          getVolume: () => (i.playState ? i.playState.volume : 1),
          setVolume: (r) => {
            const n = i.playState;
            if (n)
              if ("number" == typeof r) {
                const i = Math.max(Math.min(1, r), 0);
                (n.volume = i),
                  n.gainNode.gain.setValueAtTime(i * t.volume, e.currentTime);
              } else {
                const { type: i, fadeTo: o, fadeTime: a } = r,
                  s = Math.max(Math.min(1, o), 0);
                (n.volume = s),
                  "linear" === i
                    ? n.gainNode.gain.linearRampToValueAtTime(
                        s * t.volume,
                        e.currentTime + a
                      )
                    : n.gainNode.gain.exponentialRampToValueAtTime(
                        s * t.volume,
                        e.currentTime + a
                      );
              }
          },
        };
      };
    }
    function j(e, t) {
      return t
        ? t.isPaused
          ? t.alreadyPlayedTime
          : (e.currentTime - t.playTime) * t.sample.playbackRate.value +
            t.alreadyPlayedTime
        : 0;
    }
    const H = "__replay_resolution_v1__",
      J = "__replay_global_volume_v1__";
    function K(e, t, r) {
      const n = q(e, e.VERTEX_SHADER, t),
        i = q(e, e.FRAGMENT_SHADER, r),
        o = e.createProgram();
      if (
        (e.attachShader(o, n),
        e.attachShader(o, i),
        e.linkProgram(o),
        e.getProgramParameter(o, e.LINK_STATUS))
      )
        return o;
      throw Error(e.getProgramInfoLog(o) || "");
    }
    function q(e, t, r) {
      const n = e.createShader(t);
      if (
        (e.shaderSource(n, r),
        e.compileShader(n),
        e.getShaderParameter(n, e.COMPILE_STATUS))
      )
        return n;
      throw Error(e.getShaderInfoLog(n) || "");
    }
    const presetColors = {
        black: "#000000",
        silver: "#c0c0c0",
        gray: "#808080",
        white: "#ffffff",
        maroon: "#800000",
        red: "#ff0000",
        purple: "#800080",
        fuchsia: "#ff00ff",
        green: "#008000",
        lime: "#00ff00",
        olive: "#808000",
        yellow: "#ffff00",
        navy: "#000080",
        blue: "#0000ff",
        teal: "#008080",
        aqua: "#00ffff",
      },
      Z = { r: 0, g: 0, b: 0, a: 1 };
    function calculateRGB(e, t) {
      e.startsWith("#") || (e = presetColors[e] || presetColors.black);
      var rgb = Number.parseInt(e.slice(1), 16),
        r,
        g,
        b,
        a = 1;

      if (e.startsWith("rgba")) {
        var values = e.split("rgba(")[1].split(",");
        (r = values[0] / 255),
          (g = values[1] / 255),
          (b = values[2] / 255),
          (a = values[3]);
        Z = {
          r: r * (t || 1),
          g: g * (t || 1),
          b: b * (t || 1),
          a: a * (t || 1),
        };
        return Z;
      } else {
        (r = rgb >> 16), (g = (rgb >> 8) & 255), (b = 255 & rgb);
      }
      Z.a = 1;
      return (
        void 0 !== t
          ? ((Z.r = t * (r / 255)),
            (Z.g = t * (g / 255)),
            (Z.b = t * (b / 255)))
          : ((Z.r = r / 255), (Z.g = g / 255), (Z.b = b / 255)),
        Z
      );
    }
    function te(e, t, r, n, i, o, a, s) {
      const l = t.colors.length;
      e.uniform1i(r, 0),
        e.uniform1f(n, l),
        "linearHoriz" === t.type
          ? (e.uniform1f(i, t.width / a), e.uniform1i(o, 1))
          : (e.uniform1f(i, t.height / s), e.uniform1i(o, 0));
    }
    function re(e, t) {
      const r = e.createTexture();
      e.bindTexture(e.TEXTURE_2D, r),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
      const n = t.colors.length;
      return (
        e.texImage2D(
          e.TEXTURE_2D,
          0,
          e.RGBA,
          n,
          1,
          0,
          e.RGBA,
          e.UNSIGNED_BYTE,
          (function (e) {
            const t = Array.from({ length: 4 * e.colors.length });
            for (let i = 0; i < e.colors.length; i++) {
              const n = e.colors[i],
                { r: r, g: g, b: b, a: trueA } = calculateRGB(n);
              let a = trueA;
              if (e.opacities) {
                const t = e.opacities[i];
                void 0 !== t && (a = (0 * (1 - a)) + (t * (a)));
              }
              const l = 4 * i;
              (t[l] = 255 * r),
                (t[l + 1] = 255 * g),
                (t[l + 2] = 255 * b),
                (t[l + 3] = 255 * a);
            }
            return new Uint8Array(t);
          })(t)
        ),
        r
      );
    }
    function ne(e, t) {
      const r = e.createTexture();
      return (
        e.bindTexture(e.TEXTURE_2D, r),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
        r
      );
    }
    const ie = (e, t) => {
      const r =
        "linearHoriz" === t.type
          ? e.createLinearGradient(-t.width / 2, 0, t.width / 2, 0)
          : e.createLinearGradient(0, -t.height / 2, 0, t.height / 2);
      for (let e = 0; e < t.colors.length; e++) {
        let n = t.colors[e];
        if (t.opacities) {
          const opacity = t.opacities[e];
          if (void 0 !== opacity) {
            const { r: e, g: t, b: i, a: alpha } = calculateRGB(n);
            n = `rgba(${255 * e}, ${255 * t}, ${255 * i}, ${opacity})}`;
          }
        }
        const i = e / (t.colors.length - 1);
        r.addColorStop(i, n);
      }
      return r;
    };
    function oe(e, t, r, n, i, o, a, s, l, u) {
      const d = e.canvas.width,
        p = e.canvas.height,
        f = (d * u) / i;
      e.viewport(0, 0, d, p);
      const m = n.getContext("2d"),
        h = { texture: null, program: null },
        v = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nuniform mat3 u_matrix;\nuniform mat3 u_texture_matrix;\n\nvarying vec2 v_texcoord;\n\nconst mat3 flipY = mat3(\n  1.0, 0.0, 0.0,\n  0.0, -1.0, 0.0,\n  0.0, 1.0, 1.0\n);\n\nvoid main() {\n  gl_Position = vec4(u_matrix * vec3(a_position, 1.0), 1.0);\n  v_texcoord = (flipY * u_texture_matrix * vec3(a_texcoord, 1.0)).xy;\n}",
              "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D u_texture;\nuniform float u_opacity;\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_texcoord) * u_opacity;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_position"),
            a = e.getAttribLocation(n, "a_texcoord"),
            s = e.getUniformLocation(n, "u_matrix"),
            l = e.getUniformLocation(n, "u_texture_matrix"),
            u = e.getUniformLocation(n, "u_texture"),
            d = e.getUniformLocation(n, "u_opacity"),
            p = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, p),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            );
          const f = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(a),
            e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]),
              e.STATIC_DRAW
            ),
            t.bindVertexArrayOES(null);
          const m = c.getNewIdentity3fv(),
            h = c.getNewIdentity3fv();
          return function (o, a, p, f, g, v) {
            o !== r.texture &&
              (e.bindTexture(e.TEXTURE_2D, o), (r.texture = o)),
              n !== r.program &&
                (e.useProgram(n), (r.program = n), t.bindVertexArrayOES(i)),
              c.scaleToUniform3fvMut(a, p, f, m),
              e.uniformMatrix3fv(s, !1, m),
              (function (e, t) {
                if (!e) return void c.toUniform3fvMut(c.identityMatrix, t);
                const { columns: r, rows: n, index: i } = e,
                  o = i % r,
                  a = Math.floor(i / r) % n,
                  s = c.multiplyPooled(
                    c.getTranslateMatrixPooled(o / r, (n - 1 - a) / n),
                    c.getScaleMatrixPooled(1 / r, 1 / n)
                  );
                c.toUniform3fvMut(s, t);
              })(v, h),
              e.uniformMatrix3fv(l, !1, h),
              e.uniform1i(u, 0),
              e.uniform1f(d, g),
              e.drawArrays(e.TRIANGLES, 0, 6);
          };
        })(e, r, h),
        x = (function (e, t, r, n) {
          const i = K(
              e,
              "\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec4 a_matrix_abcd;\nattribute vec2 a_matrix_txty;\nattribute float a_opacity;\n\nvarying vec2 v_texcoord;\nvarying float v_opacity;\n\nconst mat3 flipY = mat3(\n  1.0, 0.0, 0.0,\n  0.0, -1.0, 0.0,\n  0.0, 1.0, 1.0\n);\n\nvoid main() {\n  mat3 matrix = mat3(\n    a_matrix_abcd.x, a_matrix_abcd.y, 0,\n    a_matrix_abcd.z, a_matrix_abcd.w, 0,\n    a_matrix_txty.x, a_matrix_txty.y, 1\n  );\n  gl_Position = vec4(matrix * vec3(a_position, 1.0), 1.0);\n  v_texcoord = (flipY * vec3(a_texcoord, 1.0)).xy;\n  v_opacity = a_opacity;\n}",
              "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\nvarying float v_opacity;\n\nuniform sampler2D u_texture;\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_texcoord) * v_opacity;\n}\n"
            ),
            o = r.createVertexArrayOES();
          r.bindVertexArrayOES(o);
          const a = e.getAttribLocation(i, "a_position"),
            s = e.getAttribLocation(i, "a_texcoord"),
            l = e.getAttribLocation(i, "a_matrix_abcd"),
            c = e.getAttribLocation(i, "a_matrix_txty"),
            u = e.getAttribLocation(i, "a_opacity"),
            d = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, d),
            e.enableVertexAttribArray(a),
            e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            );
          const p = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, p),
            e.enableVertexAttribArray(s),
            e.vertexAttribPointer(s, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]),
              e.STATIC_DRAW
            );
          const f = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(l),
            e.vertexAttribPointer(l, 4, e.FLOAT, !1, 24, 0),
            t.vertexAttribDivisorANGLE(l, 1),
            e.enableVertexAttribArray(c),
            e.vertexAttribPointer(c, 2, e.FLOAT, !1, 24, 16),
            t.vertexAttribDivisorANGLE(c, 1);
          const m = e.createBuffer();
          return (
            e.bindBuffer(e.ARRAY_BUFFER, m),
            e.enableVertexAttribArray(u),
            e.vertexAttribPointer(u, 1, e.FLOAT, !1, 0, 0),
            t.vertexAttribDivisorANGLE(u, 1),
            r.bindVertexArrayOES(null),
            function (a, s, l, c, u) {
              a !== n.texture &&
                (e.bindTexture(e.TEXTURE_2D, a), (n.texture = a)),
                i !== n.program &&
                  (e.useProgram(i), (n.program = i), r.bindVertexArrayOES(o)),
                (function (e, t, r, n) {
                  const i = 6 * t.length;
                  e.matrices.length !== i && (e.matrices = new Float32Array(i));
                  const o = e.matrices,
                    a = t.length;
                  e.opacities.length !== a &&
                    (e.opacities = new Float32Array(a));
                  const s = e.opacities;
                  for (let e = 0; e < t.length; e++) {
                    const i = t[e],
                      a = y(r, i, i.width, i.height),
                      l = 6 * e,
                    calcO = (i.opacity * n);
                    ((o[l] = a[0])),
                      (o[l + 1] = a[1]),
                      (o[l + 2] = a[2]),
                      (o[l + 3] = a[3]),
                      (o[l + 4] = a[4]),
                      (o[l + 5] = a[5]),
                      (s[e] = i.show ? calcO : 0);
                  }
                })(s, u, l, c),
                e.bindBuffer(e.ARRAY_BUFFER, f),
                e.bufferData(e.ARRAY_BUFFER, s.matrices, e.DYNAMIC_DRAW),
                e.bindBuffer(e.ARRAY_BUFFER, m),
                e.bufferData(e.ARRAY_BUFFER, s.opacities, e.DYNAMIC_DRAW),
                t.drawArraysInstancedANGLE(e.TRIANGLES, 0, 6, u.length);
            }
          );
        })(e, t, r, h),
        _ = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvoid main() {\n  gl_Position = vec4(u_matrix * vec3(a_position, 1.0), 1.0);\n}\n",
              "\nprecision mediump float;\n\nuniform vec4 u_colour;\n\nvoid main() {\n  gl_FragColor = u_colour;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_position"),
            a = e.getUniformLocation(n, "u_matrix"),
            s = e.getUniformLocation(n, "u_colour"),
            l = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, l),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            ),
            t.bindVertexArrayOES(null);
          const u = c.getNewIdentity3fv();
          return function (o, l, d, p, f) {
            n !== r.program &&
              (e.useProgram(n), (r.program = n), t.bindVertexArrayOES(i));
            const m = c.multiplyPooled(o, c.getScaleMatrixPooled(d, p));
            c.toUniform3fvMut(m, u), e.uniformMatrix3fv(a, !1, u);
            const { r: h, g, b: v, a: alpha} = calculateRGB(l, f);
            e.uniform4f(s, h, g, v, (0 * (1 - alpha)) + f * alpha), e.drawArrays(e.TRIANGLES, 0, 6);
          };
        })(e, r, h),
        A = (function (e, t, r, n) {
          const i = K(
              e,
              "\nattribute vec2 a_position;\nattribute vec4 a_matrix_abcd;\nattribute vec2 a_matrix_txty;\nattribute vec4 a_colour;\n\nvarying vec4 v_colour;\n\nvoid main() {\n  mat3 matrix = mat3(\n    a_matrix_abcd.x, a_matrix_abcd.y, 0,\n    a_matrix_abcd.z, a_matrix_abcd.w, 0,\n    a_matrix_txty.x, a_matrix_txty.y, 1\n  );\n  gl_Position = vec4(matrix * vec3(a_position, 1.0), 1.0);\n  v_colour = a_colour;\n}\n",
              "\nprecision mediump float;\n\nvarying vec4 v_colour;\n\nvoid main() {\n  gl_FragColor = v_colour;\n}\n"
            ),
            o = r.createVertexArrayOES();
          r.bindVertexArrayOES(o);
          const a = e.getAttribLocation(i, "a_position"),
            s = e.getAttribLocation(i, "a_matrix_abcd"),
            l = e.getAttribLocation(i, "a_matrix_txty"),
            c = e.getAttribLocation(i, "a_colour"),
            u = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, u),
            e.enableVertexAttribArray(a),
            e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            );
          const d = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, d),
            e.enableVertexAttribArray(s),
            e.vertexAttribPointer(s, 4, e.FLOAT, !1, 24, 0),
            t.vertexAttribDivisorANGLE(s, 1),
            e.enableVertexAttribArray(l),
            e.vertexAttribPointer(l, 2, e.FLOAT, !1, 24, 16),
            t.vertexAttribDivisorANGLE(l, 1);
          const p = e.createBuffer();
          return (
            e.bindBuffer(e.ARRAY_BUFFER, p),
            e.enableVertexAttribArray(c),
            e.vertexAttribPointer(c, 4, e.FLOAT, !1, 0, 0),
            t.vertexAttribDivisorANGLE(c, 1),
            r.bindVertexArrayOES(null),
            function (a, s, l, c) {
              i !== n.program &&
                (e.useProgram(i), (n.program = i), r.bindVertexArrayOES(o)),
                (function (e, t, r, n) {
                  const i = 6 * n.length;
                  e.matrices.length !== i && (e.matrices = new Float32Array(i));
                  const o = e.matrices,
                    a = 4 * n.length;
                  e.colours.length !== a && (e.colours = new Float32Array(a));
                  const s = e.colours;
                  for (let e = 0; e < n.length; e++) {
                    const i = n[e],
                      a = y(t, i, i.width, i.height),
                      l = 6 * e;
                    (o[l] = a[0]),
                      (o[l + 1] = a[1]),
                      (o[l + 2] = a[2]),
                      (o[l + 3] = a[3]),
                      (o[l + 4] = a[4]),
                      (o[l + 5] = a[5]);
                    const c = i.show ? r * i.opacity : 0,
                      { r: u, g: d, b: p, a: alpha } = calculateRGB(i.color, c),
                      f = 4 * e;
                    (s[f] = u), (s[f + 1] = d), (s[f + 2] = p), (s[f + 3] = (0 * (1 - alpha)) + c * alpha);
                  }
                })(s, a, l, c),
                e.bindBuffer(e.ARRAY_BUFFER, d),
                e.bufferData(e.ARRAY_BUFFER, s.matrices, e.DYNAMIC_DRAW),
                e.bindBuffer(e.ARRAY_BUFFER, p),
                e.bufferData(e.ARRAY_BUFFER, s.colours, e.DYNAMIC_DRAW),
                t.drawArraysInstancedANGLE(e.TRIANGLES, 0, 6, c.length);
            }
          );
        })(e, t, r, h),
        b = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_point;\n\nuniform mat3 u_matrix;\nuniform bool u_horizontal;\nuniform float u_ramp_width;\nuniform float u_gradient_length;\n\nvarying float ramp_distance;\n\nvoid main() {\n  float grad_coord = 0.0;\n\n  if (u_horizontal) {\n    grad_coord = a_point.x;\n  } else {\n    grad_coord = -a_point.y;\n  }\n\n  // grad_coord = -0.5 / 0.5 is edges of rect\n  // mixValue varies from 0 -> 1 along gradient length\n  float mixValue = 0.5 + grad_coord / u_gradient_length;\n\n  float rampPixelLength = 1.0 / u_ramp_width;\n\n  ramp_distance =\n    // Left offset to middle of pixel\n    rampPixelLength / 2.0 +\n    // Distance along ramp width\n    mixValue * (1.0 - rampPixelLength);\n\n  gl_Position = vec4(u_matrix * vec3(a_point, 1.0), 1.0);\n}\n",
              "\nprecision mediump float;\n\nuniform sampler2D u_ramp_texture;\nuniform float u_opacity;\n\nvarying float ramp_distance;\n\nvoid main() {\n  gl_FragColor = texture2D(\n    u_ramp_texture,\n    vec2(ramp_distance, 0.5)\n  ) * u_opacity;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_point"),
            a = e.getUniformLocation(n, "u_matrix"),
            s = e.getUniformLocation(n, "u_ramp_texture"),
            l = e.getUniformLocation(n, "u_ramp_width"),
            u = e.getUniformLocation(n, "u_gradient_length"),
            d = e.getUniformLocation(n, "u_horizontal"),
            p = e.getUniformLocation(n, "u_opacity"),
            f = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            ),
            t.bindVertexArrayOES(null);
          const m = c.getNewIdentity3fv();
          return function (o, f, h, g, v, y) {
            f !== r.texture &&
              (e.bindTexture(e.TEXTURE_2D, f), (r.texture = f)),
              n !== r.program &&
                (e.useProgram(n), (r.program = n), t.bindVertexArrayOES(i));
            const x = c.multiplyPooled(o, c.getScaleMatrixPooled(g, v));
            c.toUniform3fvMut(x, m),
              e.uniformMatrix3fv(a, !1, m),
              e.uniform1f(p, y),
              te(e, h, s, l, u, d, g, v),
              e.drawArrays(e.TRIANGLES, 0, 6);
          };
        })(e, r, h),
        S = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_origin;\nattribute vec2 a_point1;\nattribute vec2 a_point2;\n\nuniform mat3 u_matrix;\nuniform float u_half_thickness;\n\nvoid main() {\n  if (a_point1 == a_point2) {\n    // Avoid normalize a zero vector\n    gl_Position = vec4(u_matrix * vec3(a_origin, 1.0), 1.0);\n    return;\n  }\n\n  vec2 normal = normalize(a_point2 - a_point1);\n  vec2 tangent = vec2(-normal.y, normal.x);\n  vec2 pos = a_origin + tangent * u_half_thickness;\n\n  gl_Position = vec4(u_matrix * vec3(pos, 1.0), 1.0);\n}\n",
              "\nprecision mediump float;\n\nuniform vec4 u_colour;\n\nvoid main() {\n  gl_FragColor = u_colour;\n}\n"
            ),
            i = t.createVertexArrayOES(),
            o = t.createVertexArrayOES(),
            a = e.getAttribLocation(n, "a_point1"),
            s = e.getAttribLocation(n, "a_point2"),
            l = e.getAttribLocation(n, "a_origin"),
            u = e.getUniformLocation(n, "u_matrix"),
            d = e.getUniformLocation(n, "u_half_thickness"),
            p = e.getUniformLocation(n, "u_colour"),
            f = e.createBuffer();
          t.bindVertexArrayOES(i),
            e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(a),
            e.vertexAttribPointer(a, 2, e.FLOAT, !1, 24, 8),
            e.enableVertexAttribArray(s),
            e.vertexAttribPointer(s, 2, e.FLOAT, !1, 24, 16),
            e.enableVertexAttribArray(l),
            e.vertexAttribPointer(l, 2, e.FLOAT, !1, 24, 0),
            t.bindVertexArrayOES(o),
            e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(l),
            e.vertexAttribPointer(l, 2, e.FLOAT, !1, 96, 0),
            e.disableVertexAttribArray(a),
            e.disableVertexAttribArray(s),
            t.bindVertexArrayOES(null);
          const m = c.getNewIdentity3fv();
          return function (a, s, l, h, g, v, y, x) {
            if (l.length <= 1) s.lineCaps = null;
            else {
              if (
                (n !== r.program &&
                  (e.useProgram(n),
                  (r.program = n),
                  e.bindBuffer(e.ARRAY_BUFFER, f)),
                (function (e, t) {
                  const r = 24 * t.length;
                  e.strokePath.length !== r &&
                    (e.strokePath = new Float32Array(r));
                  const n = e.strokePath;
                  let i,
                    o,
                    a,
                    s,
                    l = t[0][0],
                    c = t[0][1];
                  for (let e = 0; e < t.length; e++) {
                    const r = 24 * e;
                    (i = a), (o = s), (a = l), (s = c);
                    const u = t[e + 1];
                    u ? ([l, c] = u) : ((l = a), (c = s)),
                      (void 0 !== i && void 0 !== o) || ((i = a), (o = s)),
                      (n[r] = a),
                      (n[r + 1] = s),
                      (n[r + 2] = i),
                      (n[r + 3] = o),
                      (n[r + 4] = a),
                      (n[r + 5] = s),
                      (n[r + 6] = a),
                      (n[r + 7] = s),
                      (n[r + 8] = a),
                      (n[r + 9] = s),
                      (n[r + 10] = i),
                      (n[r + 11] = o),
                      (n[r + 12] = a),
                      (n[r + 13] = s),
                      (n[r + 14] = a),
                      (n[r + 15] = s),
                      (n[r + 16] = l),
                      (n[r + 17] = c),
                      (n[r + 18] = a),
                      (n[r + 19] = s),
                      (n[r + 20] = l),
                      (n[r + 21] = c),
                      (n[r + 22] = a),
                      (n[r + 23] = s);
                  }
                })(s, l),
                e.bufferData(e.ARRAY_BUFFER, s.strokePath, e.DYNAMIC_DRAW),
                c.toUniform3fvMut(a, m),
                e.uniformMatrix3fv(u, !1, m),
                e.uniform1f(d, h / 2),
                v)
              ) {
                const { r, g: n, b: i } = calculateRGB(v, x);
                e.uniform4f(p, r, n, i, x),
                  t.bindVertexArrayOES(o),
                  e.drawArrays(e.TRIANGLE_FAN, 0, l.length);
              }
              if (g) {
                const { r, g: n, b: o } = calculateRGB(g, x);
                e.uniform4f(p, r, n, o, x),
                  t.bindVertexArrayOES(i),
                  e.drawArrays(e.TRIANGLE_STRIP, 0, 4 * l.length),
                  "round" === y
                    ? (function (e, t) {
                        const r = e[0],
                          n = e[1],
                          i = e[e.length - 2],
                          o = e[e.length - 1];
                        t.lineCaps ||
                          (t.lineCaps = [
                            {
                              x: 0,
                              y: 0,
                              angleRad: 0,
                              textureState: { points: new Float32Array() },
                            },
                            {
                              x: 0,
                              y: 0,
                              angleRad: 0,
                              textureState: { points: new Float32Array() },
                            },
                          ]),
                          (t.lineCaps[0].x = r[0]),
                          (t.lineCaps[0].y = r[1]),
                          (t.lineCaps[0].angleRad =
                            Math.atan2(n[1] - r[1], n[0] - r[0]) + Math.PI / 2),
                          (t.lineCaps[1].x = o[0]),
                          (t.lineCaps[1].y = o[1]),
                          (t.lineCaps[1].angleRad =
                            Math.atan2(o[1] - i[1], o[0] - i[0]) - Math.PI / 2);
                      })(l, s)
                    : (s.lineCaps = null);
              } else s.lineCaps = null;
            }
          };
        })(e, r, h),
        E = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_point;\n\nuniform mat3 u_matrix;\nuniform bool u_horizontal;\nuniform float u_ramp_width;\nuniform float u_gradient_length;\n\nvarying float ramp_distance;\n\nvoid main() {\n  float grad_coord = 0.0;\n\n  if (u_horizontal) {\n    grad_coord = a_point.x;\n  } else {\n    grad_coord = -a_point.y;\n  }\n\n  // mixValue varies from 0 -> 1 along gradient length\n  float mixValue = 0.5 + grad_coord / u_gradient_length;\n\n  float rampPixelLength = 1.0 / u_ramp_width;\n\n  ramp_distance =\n    // Left offset to middle of pixel\n    rampPixelLength / 2.0 +\n    // Distance along ramp width\n    mixValue * (1.0 - rampPixelLength);\n\n  gl_Position = vec4(u_matrix * vec3(a_point, 1.0), 1.0);\n}\n",
              "\nprecision mediump float;\n\nuniform sampler2D u_ramp_texture;\nuniform float u_opacity;\n\nvarying float ramp_distance;\n\nvoid main() {\n  gl_FragColor = texture2D(\n    u_ramp_texture,\n    vec2(ramp_distance, 0.5)\n  ) * u_opacity;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_point"),
            a = e.getUniformLocation(n, "u_matrix"),
            s = e.getUniformLocation(n, "u_ramp_texture"),
            l = e.getUniformLocation(n, "u_ramp_width"),
            u = e.getUniformLocation(n, "u_gradient_length"),
            d = e.getUniformLocation(n, "u_horizontal"),
            p = e.getUniformLocation(n, "u_opacity"),
            f = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, f),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 2, e.FLOAT, !1, 0, 0),
            t.bindVertexArrayOES(null);
          const m = c.getNewIdentity3fv();
          return function (o, h, g, v, y, x) {
            v.length <= 1 ||
              (g !== r.texture &&
                (e.bindTexture(e.TEXTURE_2D, g), (r.texture = g)),
              n !== r.program &&
                (e.useProgram(n),
                (r.program = n),
                t.bindVertexArrayOES(i),
                e.bindBuffer(e.ARRAY_BUFFER, f)),
              (function (e, t) {
                const r = 2 * e.length;
                t.linePath.length !== r && (t.linePath = new Float32Array(r));
                const n = t.linePath;
                for (let t = 0; t < e.length; t++) {
                  const [r, i] = e[t],
                    o = 2 * t;
                  (n[o] = r), (n[o + 1] = i);
                }
              })(v, h),
              e.bufferData(e.ARRAY_BUFFER, h.linePath, e.DYNAMIC_DRAW),
              c.toUniform3fvMut(o, m),
              e.uniformMatrix3fv(a, !1, m),
              e.uniform1f(p, x),
              te(e, y, s, l, u, d, 1, 1),
              e.drawArrays(e.TRIANGLE_FAN, 0, v.length));
          };
        })(e, r, h),
        w = (function (e, t, r) {
          const n = K(
              e,
              "\n#define PI 3.1415926538\n\nattribute float a_vertex;\nuniform float u_num_vertex;\nuniform float u_radius;\nuniform float u_angle_multiplier;\n\nuniform mat3 u_matrix;\n\nvoid main() {\n  if (a_vertex < 0.0) {\n    // Origin\n    gl_Position = vec4(u_matrix * vec3(0.0, 0.0, 1.0), 1.0);\n    return;\n  }\n  float dr = a_vertex / u_num_vertex;\n  float angle = dr * PI * 2.0 * u_angle_multiplier;\n\n  vec2 position = vec2(cos(angle), sin(angle)) * u_radius;\n\n  gl_Position = vec4(u_matrix * vec3(position, 1.0), 1.0);\n}\n",
              "\nprecision mediump float;\n\nuniform vec4 u_colour;\n\nvoid main() {\n  gl_FragColor = u_colour;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_vertex"),
            a = e.getUniformLocation(n, "u_num_vertex"),
            s = e.getUniformLocation(n, "u_radius"),
            l = e.getUniformLocation(n, "u_angle_multiplier"),
            u = e.getUniformLocation(n, "u_matrix"),
            d = e.getUniformLocation(n, "u_colour"),
            p = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, p),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 1, e.FLOAT, !1, 0, 0),
            t.bindVertexArrayOES(null);
          const f = c.getNewIdentity3fv();
          return function (o, m, h, g, v, y, x, _, A) {
            n !== r.program &&
              (e.useProgram(n),
              (r.program = n),
              t.bindVertexArrayOES(i),
              e.bindBuffer(e.ARRAY_BUFFER, p));
            const { scaleX: b, scaleY: S } = c.getScalePooled(o),
              E = Math.max(b * v, S * y) / 2,
              w = Math.ceil(Math.PI * g * E * x);
            !(function (e, t) {
              const r = t + 2;
              if (e.points.length !== r) {
                e.points = new Float32Array(r);
                for (let t = -1; t < r - 1; t++) e.points[t] = t;
              }
            })(m, w),
              e.bufferData(e.ARRAY_BUFFER, m.points, e.DYNAMIC_DRAW),
              c.toUniform3fvMut(o, f),
              e.uniformMatrix3fv(u, !1, f);
            const { r: T, g: R, b: P } = calculateRGB(h, _);
            e.uniform4f(d, T, R, P, _),
              e.uniform1f(a, w),
              e.uniform1f(s, g),
              e.uniform1f(l, A ? 0.5 : 1),
              e.drawArrays(e.TRIANGLE_FAN, 0, w + 2);
          };
        })(e, r, h),
        T = (function (e, t, r) {
          const n = K(
              e,
              "\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nuniform mat3 u_matrix;\n\nvarying vec2 v_texcoord;\n\nconst mat3 flipY = mat3(\n  1.0, 0.0, 0.0,\n  0.0, -1.0, 0.0,\n  0.0, 1.0, 1.0\n);\n\nvoid main() {\n  gl_Position = vec4(u_matrix * vec3(a_position, 1.0), 1.0);\n  v_texcoord = (flipY * vec3(a_texcoord, 1.0)).xy;\n}",
              "\nprecision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D u_texture;\nuniform float u_opacity;\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_texcoord) * u_opacity;\n}\n"
            ),
            i = t.createVertexArrayOES();
          t.bindVertexArrayOES(i);
          const o = e.getAttribLocation(n, "a_position"),
            a = e.getAttribLocation(n, "a_texcoord"),
            s = e.getUniformLocation(n, "u_matrix"),
            l = e.getUniformLocation(n, "u_texture"),
            u = e.getUniformLocation(n, "u_opacity"),
            d = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, d),
            e.enableVertexAttribArray(o),
            e.vertexAttribPointer(o, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([
                -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,
                0.5,
              ]),
              e.STATIC_DRAW
            );
          const p = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, p),
            e.enableVertexAttribArray(a),
            e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1]),
              e.STATIC_DRAW
            ),
            t.bindVertexArrayOES(null);
          const f = c.getNewIdentity3fv();
          return function (o, a, d, p, m, h) {
            e.bindTexture(e.TEXTURE_2D, o),
              (r.texture = o),
              n !== r.program &&
                (e.useProgram(n), (r.program = n), t.bindVertexArrayOES(i));
            const g = c.multiplyPooled(a, c.getScaleMatrixPooled(d / h, p / h));
            c.toUniform3fvMut(g, f),
              e.uniformMatrix3fv(s, !1, f),
              e.uniform1i(l, 0),
              e.uniform1f(u, m),
              e.drawArrays(e.TRIANGLES, 0, 6);
          };
        })(e, r, h);
      function R(t, r, n, a, s) {
        var l, d;
        if (!t) return;
        if (e.isEnabled(e.STENCIL_TEST))
          throw Error("Nested masks not supported");
        e.enable(e.STENCIL_TEST),
          e.clear(e.STENCIL_BUFFER_BIT),
          e.stencilFunc(e.ALWAYS, 1, 255),
          e.stencilOp(e.KEEP, e.KEEP, e.REPLACE);
        const p = c.multiply(
          void 0 === a || void 0 === s || (0 === a && 0 === s)
            ? n
            : c.multiply(n, c.getTranslateMatrix(a, s)),
          c.getTranslateMatrix(t.x, t.y)
        );
        switch ((e.colorMask(!1, !1, !1, !1), t.type)) {
          case "circleMask":
            null === r && (r = { value: null }),
              "circleMask" !==
                (null === (l = r.value) || void 0 === l ? void 0 : l.type) &&
                (r.value = { type: "circleMask", points: new Float32Array() }),
              w(p, r.value, "", t.radius, i, o, u, 1, !1);
            break;
          case "lineMask":
            null === r && (r = { value: null }),
              "lineMask" !==
                (null === (d = r.value) || void 0 === d ? void 0 : d.type) &&
                (r.value = {
                  type: "lineMask",
                  lineCaps: null,
                  linePath: new Float32Array(),
                  strokePath: new Float32Array(),
                }),
              S(p, r.value, t.path, 0, void 0, " ", "butt", 1);
            break;
          case "rectangleMask":
            _(p, "", t.width, t.height, 1);
        }
        e.colorMask(!0, !0, !0, !0),
          e.stencilFunc(e.EQUAL, 1, 255),
          e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
      }
      function P() {
        e.disable(e.STENCIL_TEST);
      }
      const F = {},
        I = new Set(),
        k = [0, 0, 0, 0, 0, 0],
        { r: L, g: M, b: C } = calculateRGB(l);
      function U(t, r, n) {
        const a = t.fillGradient;
        if (a) {
          const i = `${a.type}-${a.colors.join("")}-${(a.opacities || []).join(
            ""
          )}`;
          let o = F[i];
          o
            ? I.delete(i)
            : ((o = {
                texture: re(e, a),
                width: 0,
                height: 0,
                align: "center",
              }),
              (F[i] = o)),
            E(k, n, o.texture, t.path, a, t.opacity * r);
        }
        if (t.color || t.fillColor) {
          S(
            k,
            n,
            t.path,
            t.thickness,
            t.color,
            t.fillColor,
            t.lineCap,
            t.opacity * r
          );
          const e = t.color;
          if (n.lineCaps && e)
            for (const a of n.lineCaps) {
              const n = c.multiplyPooled(
                  c.getTranslateMatrixPooled(a.x, a.y),
                  c.getRotateMatrixPooled(a.angleRad)
                ),
                s = c.multiplyPooled(k, n);
              w(
                s,
                a.textureState,
                e,
                t.thickness / 2,
                i,
                o,
                f,
                t.opacity * r,
                !0
              );
            }
        }
      }
      function N(t, r) {
        const { text: i, color: o, strokeColor: a, font: l } = t,
          d = l
            ? `${i}-${o}-${a}-${l.size}-${l.weight}-${l.style}-${l.align}`
            : `${i}-${o}-${a}`;
        let p = F[d];
        if (p) I.delete(d);
        else {
          const r = (function (e, t, r, n, i) {
            const o = { ...n, ...e.font },
              {
                size: a = 10,
                weight: s = "normal",
                style: l = "normal",
                family: c,
                align: u = "center",
                baseline: d = "middle",
              } = o,
              p = `${l} ${s} ${a ? `${a}px` : ""} ${c ? `${c}` : ""}`,
              { text: f, strokeThickness: m = 1, color: h } = e;
            return (
              (function (e, t, r, n, i) {
                const o = r * n,
                  a = r * i;
                o !== e.width || a !== e.height
                  ? ((e.width = o),
                    (e.height = a),
                    t.translate(o / 2, a / 2),
                    t.scale(r, r))
                  : t.clearRect(-o / 2, -a / 2, e.width, e.height);
              })(
                t,
                r,
                i,
                (function (e, t, r, n) {
                  return (e.font = n), e.measureText(t).width + 2 * r;
                })(r, f, m, p),
                1.5 * a * ("middle" !== d ? 2 : 1)
              ),
              (function (e, t, r, n, i, o, a, s, l) {
                (e.font = t),
                  (e.textBaseline = o),
                  (e.textAlign = "center"),
                  l &&
                    ((e.strokeStyle = l),
                    (e.lineWidth = i),
                    e.strokeText(r, 0, 0)),
                  (e.fillStyle = s ? ie(e, s) : n),
                  e.fillText(r, 0, 0);
              })(r, p, f, h, m, d, 0, e.gradient, e.strokeColor),
              u
            );
          })(t, n, m, s, u);
          (p = {
            texture: ne(e, n),
            width: n.width,
            height: n.height,
            align: r,
          }),
            (F[d] = p);
        }
        const { align: f, width: h, height: g } = p;
        T(
          p.texture,
          "center" === f
            ? k
            : c.multiplyPooled(
                k,
                c.getTranslateMatrixPooled(
                  (h / (2 * u)) * ("left" === f ? 1 : -1),
                  0
                )
              ),
          h,
          g,
          t.opacity * r,
          u
        );
      }
      return {
        newFrame: () => {
          e.clearColor(L, M, C, 1), e.clear(e.COLOR_BUFFER_BIT);
          for (const t of I) e.deleteTexture(F[t].texture), delete F[t];
          I.clear();
          for (const e in F) I.add(e);
          e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        },
        endFrame: () => {
          r.bindVertexArrayOES(null), (h.program = null), (h.texture = null);
        },
        startRenderSprite: (e, t, r) => {
          R(e.mask, r, t.transformation);
        },
        endRenderSprite: (e) => {
          e.hasMask && P();
        },
        renderTexture: (t, r, n, s) => {
          if ("imageArray" === r.type) {
            if (0 === r.props.length) return;
            const e = n;
            R(r.mask, s, t.transformation);
            const i = ae(a, r.fileName);
            return (
              x(i.texture, e, t.transformation, t.opacity, r.props),
              void (r.mask && P())
            );
          }
          if ("rectangleArray" === r.type) {
            if (0 === r.props.length) return;
            const e = n;
            return (
              R(r.mask, s, t.transformation),
              A(t.transformation, e, t.opacity, r.props),
              void (r.mask && P())
            );
          }
          if ("textArray" !== r.type)
            if ("circleArray" !== r.type)
              if ("lineArray" !== r.type) {
                if (r.props.show) {
                  switch (
                    (g(t.transformation, k, r.props),
                    R(r.props.mask, s, t.transformation, r.props.x, r.props.y),
                    r.type)
                  ) {
                    case "image":
                    case "spriteSheet": {
                      const e = ae(a, r.props.fileName);
                      v(
                        e.texture,
                        k,
                        r.props.width,
                        r.props.height,
                        r.props.opacity * t.opacity,
                        "spriteSheet" === r.type ? r.props : null
                      );
                      break;
                    }
                    case "line": {
                      const e = n;
                      U(r.props, t.opacity, e);
                      break;
                    }
                    case "rectangle": {
                      const n = r.props.gradient;
                      if (n) {
                        const i = `${n.type}-${n.colors.join("")}-${(
                          n.opacities || []
                        ).join("")}`;
                        let o = F[i];
                        o
                          ? I.delete(i)
                          : ((o = {
                              texture: re(e, n),
                              width: 0,
                              height: 0,
                              align: "center",
                            }),
                            (F[i] = o)),
                          b(
                            k,
                            o.texture,
                            n,
                            r.props.width,
                            r.props.height,
                            r.props.opacity * t.opacity
                          );
                      } else
                        _(
                          k,
                          r.props.color,
                          r.props.width,
                          r.props.height,
                          r.props.opacity * t.opacity
                        );
                      break;
                    }
                    case "circle":
                      w(
                        k,
                        n,
                        r.props.color,
                        r.props.radius,
                        i,
                        o,
                        f,
                        r.props.opacity * t.opacity,
                        !1
                      );
                      break;
                    case "text":
                      N(r.props, t.opacity);
                  }
                  r.props.mask && P();
                }
              } else {
                if (0 === r.props.length) return;
                const e = n;
                R(r.mask, s, t.transformation),
                  (function (e, t) {
                    const r = t.props.length - e.stateByIndex.length;
                    if (r > 0)
                      for (let t = 0; t < r; t++)
                        e.stateByIndex.push({
                          lineCaps: null,
                          linePath: new Float32Array(),
                          strokePath: new Float32Array(),
                        });
                    else r < 0 && (e.stateByIndex.length = t.props.length);
                  })(e, r);
                for (let n = 0; n < r.props.length; n++) {
                  const i = r.props[n];
                  i.show &&
                    (g(t.transformation, k, i),
                    U(i, t.opacity, e.stateByIndex[n]));
                }
                r.mask && P();
              }
            else {
              if (0 === r.props.length) return;
              const e = n;
              R(r.mask, s, t.transformation),
                (function (e, t) {
                  const r = t.props.length - e.pointsByIndex.length;
                  if (r > 0)
                    for (let t = 0; t < r; t++)
                      e.pointsByIndex.push({ points: new Float32Array() });
                  else r < 0 && (e.pointsByIndex.length = t.props.length);
                })(e, r);
              for (let n = 0; n < r.props.length; n++) {
                const a = r.props[n];
                a.show &&
                  (g(t.transformation, k, a),
                  w(
                    k,
                    e.pointsByIndex[n],
                    a.color,
                    a.radius,
                    i,
                    o,
                    f,
                    a.opacity * t.opacity,
                    !1
                  ));
              }
              r.mask && P();
            }
          else {
            if (0 === r.props.length) return;
            R(r.mask, s, t.transformation);
            for (const e of r.props)
              e.show && (g(t.transformation, k, e), N(e, t.opacity));
            r.mask && P();
          }
        },
        startNativeSprite: () => {
          r.bindVertexArrayOES(null);
        },
        endNativeSprite: () => {
          (h.program = null),
            (h.texture = null),
            e.enable(e.BLEND),
            e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        },
        getInitTextureState: (e) => {
          switch (e.type) {
            case "imageArray":
              return {
                matrices: new Float32Array(),
                opacities: new Float32Array(),
              };
            case "line":
              return {
                lineCaps: null,
                linePath: new Float32Array(),
                strokePath: new Float32Array(),
              };
            case "circle":
              return { points: new Float32Array() };
            case "rectangleArray":
              return {
                matrices: new Float32Array(),
                colours: new Float32Array(),
              };
            case "circleArray":
              return {
                pointsByIndex: Array.from({ length: e.array().length }).map(
                  () => ({ points: new Float32Array() })
                ),
              };
            case "lineArray":
              return {
                stateByIndex: Array.from({ length: e.array().length }).map(
                  () => ({
                    lineCaps: null,
                    linePath: new Float32Array(),
                    strokePath: new Float32Array(),
                  })
                ),
              };
            default:
              return null;
          }
        },
        getInitMaskState: (e) => {
          if (null === e) return { value: null };
          switch (e.type) {
            case "lineMask":
              return {
                value: {
                  type: e.type,
                  lineCaps: null,
                  linePath: new Float32Array(),
                  strokePath: new Float32Array(),
                },
              };
            case "circleMask":
              return { value: { type: e.type, points: new Float32Array() } };
            case "rectangleMask":
              return { value: null };
          }
        },
      };
    }
    const ae = (e, t) => {
        const r = e[t];
        if (!r) throw Error(`Image file "${t}" was not preloaded`);
        if ("then" in r.data)
          throw Error(
            `Image file "${t}" did not finish loading before it was used`
          );
        return r.data;
      },
      se = { family: "sans-serif", size: 12 };
    function le({
      id: e,
      message: t = "",
      message2: r = "",
      message3: n = "",
      message4: i = "",
      message5: o = "",
    }) {
      return new Promise((a) => {
        new Promise((t) => {
          let r = window.__replayGlobalCallbacks__;
          r || ((r = {}), (window.__replayGlobalCallbacks__ = r)),
            (r[e] = (e) => {
              t(e);
            });
        }).then((t) => {
          (window.__replayGlobalCallbacks__[e] = void 0), a(t);
        }),
          window.Android.bridge(e, t, r, n, i, o);
      });
    }
    function ce(e) {
      return new Promise(function (t, r) {
        const n = new XMLHttpRequest();
        (n.onload = function () {
          t(new Response(n.response, { status: n.status }));
        }),
          (n.onerror = function () {
            r(new TypeError(`Failed to load file: ${e.toString()}`));
          }),
          n.open("GET", e),
          (n.responseType = "arraybuffer"),
          n.send(null);
      });
    }
    function ue() {
      return "undefined" != typeof game && game.Game
        ? (function (e, t, r) {
            const {
                dimensions: n = "game-coords",
                canvas: i,
                nativeSpriteMap: o = {},
                windowSize: a,
                statsBegin: s,
                statsEnd: l,
                imageResolution: u = 3,
                maxPixels: d,
              } = t || {},
              p = i || document.createElement("canvas");
            i || document.body.appendChild(p), (p.id = "replay-canvas");
            const f = document.createElement("canvas"),
              m = window.PointerEvent ? "pointerdown" : "touchstart",
              h = window.PointerEvent ? "pointermove" : "touchmove",
              v = window.PointerEvent ? "pointerup" : "touchend",
              y = window.PointerEvent ? "pointercancel" : "touchcancel",
              x = p.getContext("webgl", { stencil: !0 });
            if (!x) return Error("WebGL not supported");
            const A = x,
              b = A.getExtension("ANGLE_instanced_arrays");
            if (!b) return Error("WebGL instancing not supported");
            const T = b,
              R = A.getExtension("OES_vertex_array_object");
            if (!R) return Error("WebGL VAO not supported");
            const P = R;
            A.enable(A.BLEND),
              A.blendFunc(A.ONE, A.ONE_MINUS_SRC_ALPHA),
              A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            const F = new (window.AudioContext || window.webkitAudioContext)(),
              I = {
                volume: 1,
                setVolume(e) {
                  const t = Math.min(1, Math.max(0, e));
                  (this.volume = t),
                    window.clearTimeout(k),
                    (k = window.setTimeout(() => {
                      he.storage.setItem(J, String(t));
                    }, 1e3)),
                    (function (e, t, r) {
                      var n;
                      for (const i in t) {
                        const o = t[i].data;
                        "then" in o ||
                          null === (n = o.playState) ||
                          void 0 === n ||
                          n.gainNode.gain.setValueAtTime(
                            o.playState.volume * r,
                            e.currentTime
                          );
                      }
                    })(F, le, t);
                },
              };
            let k,
              L = !0,
              M = !0,
              C = 0,
              j = !1,
              K = 0,
              q = 0;
            const Q = () => {
              document.hidden && M && ((K = C), F.suspend()),
                document.hidden ||
                  M ||
                  ((j = !0),
                  setTimeout(() => {
                    F.suspend(),
                      setTimeout(() => {
                        F.resume();
                      }, 75);
                  }, 75)),
                (M = !document.hidden);
            };
            document.addEventListener(
              "keydown",
              (e) => {
                L && !e.repeat && D(e);
              },
              !1
            ),
              document.addEventListener(
                "keyup",
                (e) => {
                  L && B(e);
                },
                !1
              ),
              document.addEventListener("visibilitychange", Q, !1),
              window.addEventListener("resize", ae, !1);
            const Z = () => ae({ didScroll: !0 });
            let ee, te, re, ne, ie;
            function ae(t) {
              const r = Boolean(t && "cleanup" in t && t.cleanup),
                i = Boolean(t && "didScroll" in t && t.didScroll);
              if (
                ee &&
                (document.removeEventListener(m, te),
                document.removeEventListener(h, re),
                document.removeEventListener(v, ne),
                document.removeEventListener(y, ie),
                r)
              )
                return;
              (i && ee) ||
                (he.size = z(
                  (null == a ? void 0 : a.width) || window.innerWidth,
                  (null == a ? void 0 : a.height) || window.innerHeight,
                  n,
                  e.props.size
                ));
              const o = window.devicePixelRatio || 1,
                s = he.size.deviceWidth * o * me.resolution,
                l = he.size.fullWidth * u;
              let c, g;
              s > l
                ? ((c = Math.round(l)),
                  (g = Math.round(he.size.fullHeight * u)))
                : ((c = Math.round(s)),
                  (g = Math.round(he.size.deviceHeight * o * me.resolution)));
              const x = c / he.size.fullWidth;
              if (d && !me.hasSet && c * g > d && me.resolution > 0.15)
                return (me.resolution -= 0.1), void ae();
              (p.width = c),
                (p.height = g),
                (p.style.width = `${he.size.deviceWidth}px`),
                (p.style.height = `${he.size.deviceHeight}px`);
              const _ = e.props.defaultFont || se,
                b = e.props.backgroundColor || "white",
                S = he.size.width + 2 * he.size.widthMargin,
                E = he.size.height + 2 * he.size.heightMargin,
                w = oe(A, T, P, f, S, E, ce, _, b, x),
                R = he.size.deviceWidth / S;
              (fe.newFrame = w.newFrame),
                (fe.endFrame = w.endFrame),
                (fe.startRenderSprite = w.startRenderSprite),
                (fe.endRenderSprite = w.endRenderSprite),
                (fe.renderTexture = w.renderTexture),
                (fe.startNativeSprite = w.startNativeSprite),
                (fe.endNativeSprite = w.endNativeSprite),
                (fe.getInitTextureState = w.getInitTextureState),
                (fe.getInitMaskState = w.getInitMaskState),
                (ve.gameXToPlatformX = (
                  ({
                    canvasOffsetLeft: e,
                    widthMargin: t,
                    scale: r,
                    width: n,
                  }) =>
                  (i) =>
                    e + r * (i + n / 2 + t)
                )({
                  canvasOffsetLeft: p.offsetLeft,
                  width: he.size.width,
                  widthMargin: he.size.widthMargin,
                  scale: R,
                })),
                (ve.gameYToPlatformY = (
                  ({
                    canvasOffsetTop: e,
                    heightMargin: t,
                    scale: r,
                    height: n,
                  }) =>
                  (i) =>
                    e - r * (i - n / 2 - t)
                )({
                  canvasOffsetTop: p.offsetTop,
                  height: he.size.height,
                  heightMargin: he.size.heightMargin,
                  scale: R,
                })),
                (ve.didResize = !0),
                (ve.scale = R),
                (ve.size = he.size);
              const F = (
                  ({
                    canvasOffsetLeft: e,
                    scrollX: t,
                    widthMargin: r,
                    scale: n,
                    width: i,
                  }) =>
                  (o) =>
                    (o - e + t) / n - r - i / 2
                )({
                  canvasOffsetLeft: p.offsetLeft,
                  scrollX: window.scrollX,
                  width: he.size.width,
                  widthMargin: he.size.widthMargin,
                  scale: R,
                }),
                I = (
                  ({
                    canvasOffsetTop: e,
                    scrollY: t,
                    heightMargin: r,
                    scale: n,
                    height: i,
                  }) =>
                  (o) =>
                    -(o - e + t) / n + r + i / 2
                )({
                  canvasOffsetTop: p.offsetTop,
                  scrollY: window.scrollY,
                  height: he.size.height,
                  heightMargin: he.size.heightMargin,
                  scale: R,
                }),
                k = (e, t) =>
                  e > he.size.width / 2 + he.size.widthMargin ||
                  e < -he.size.width / 2 - he.size.widthMargin ||
                  t > he.size.height / 2 + he.size.heightMargin ||
                  t < -he.size.height / 2 - he.size.heightMargin;
              (te = (e) => {
                if ("changedTouches" in e) {
                  L = !1;
                  for (let t = 0; t < e.changedTouches.length; t++) {
                    const r = e.changedTouches[t],
                      n = F(r.screenX),
                      i = I(r.screenY);
                    k(n, i) || ((L = !0), O(n, i, r.identifier));
                  }
                  return;
                }
                const t = F(e.clientX),
                  r = I(e.clientY);
                k(t, r) ? (L = !1) : ((L = !0), O(t, r, e.pointerId));
              }),
                (re = (e) => {
                  if ("changedTouches" in e) {
                    for (let t = 0; t < e.changedTouches.length; t++) {
                      const r = e.changedTouches[t],
                        n = F(r.screenX),
                        i = I(r.screenY);
                      k(n, i) || Y(n, i);
                    }
                    return;
                  }
                  const t = F(e.clientX),
                    r = I(e.clientY);
                  k(t, r) || Y(t, r);
                }),
                (ne = (e) => {
                  if ("changedTouches" in e) {
                    for (let t = 0; t < e.changedTouches.length; t++) {
                      const r = e.changedTouches[t],
                        n = F(r.screenX),
                        i = I(r.screenY);
                      k(n, i) ? G(r.identifier) : V(n, i, r.identifier);
                    }
                    return;
                  }
                  const t = F(e.clientX),
                    r = I(e.clientY);
                  k(t, r) ? G(e.pointerId) : V(t, r, e.pointerId);
                }),
                (ie = (e) => {
                  if ("changedTouches" in e)
                    for (let t = 0; t < e.changedTouches.length; t++)
                      G(e.changedTouches[t].identifier);
                  else G(e.pointerId);
                }),
                document.addEventListener(m, te, !1),
                document.addEventListener(h, re, !1),
                document.addEventListener(v, ne, !1),
                document.addEventListener(y, ie, !1),
                (ee = he.size);
            }
            window.addEventListener("scroll", Z, !1),
              document.addEventListener("contextmenu", (e) => {
                e.preventDefault();
              });
            const le = {},
              ce = {},
              ue = (e, t) => () => {
                throw Error(`Failed to load ${e} file "${t}"`);
              },
              de = (null == r ? void 0 : r.fileFetch) || fetch,
              pe = {
                audioElements: le,
                imageElements: ce,
                loadAudioFile: (e) =>
                  (async function (e, t) {
                    const r = await t,
                      n = await r.arrayBuffer();
                    return await new Promise((t, r) => {
                      e.decodeAudioData(n, t, r);
                    });
                  })(F, de(e))
                    .then((e) => ({ buffer: e, volume: 1 }))
                    .catch(ue("audio", e)),
                loadImageFile: (e, t) =>
                  new Promise((r, n) => {
                    const i = new Image();
                    i.addEventListener("load", () => {
                      r(
                        (function (e, t, r) {
                          const n = e.createTexture();
                          e.bindTexture(e.TEXTURE_2D, n),
                            e.texParameteri(
                              e.TEXTURE_2D,
                              e.TEXTURE_WRAP_S,
                              e.CLAMP_TO_EDGE
                            ),
                            e.texParameteri(
                              e.TEXTURE_2D,
                              e.TEXTURE_WRAP_T,
                              e.CLAMP_TO_EDGE
                            ),
                            r
                              ? (e.texParameteri(
                                  e.TEXTURE_2D,
                                  e.TEXTURE_MIN_FILTER,
                                  e.NEAREST
                                ),
                                e.texParameteri(
                                  e.TEXTURE_2D,
                                  e.TEXTURE_MAG_FILTER,
                                  e.NEAREST
                                ))
                              : e.texParameteri(
                                  e.TEXTURE_2D,
                                  e.TEXTURE_MIN_FILTER,
                                  e.LINEAR
                                );
                          const i = { texture: n, image: t };
                          return (
                            e.texImage2D(
                              e.TEXTURE_2D,
                              0,
                              e.RGBA,
                              e.RGBA,
                              e.UNSIGNED_BYTE,
                              t
                            ),
                            i
                          );
                        })(A, i, t)
                      );
                    }),
                      i.addEventListener("error", n),
                      (i.src = e);
                  }).catch(ue("image", e)),
                cleanupAudioFile: (e) => {
                  const { data: t } = le[e];
                  !("then" in t) &&
                    t.playState &&
                    ((t.playState.sample.onended = null),
                    t.playState.sample.disconnect(),
                    (t.playState.sample.buffer = null));
                },
                cleanupImageFile: (e) => {
                  const { data: t } = ce[e];
                  "then" in t || A.deleteTexture(t.texture);
                },
              },
              fe = {
                newFrame: () => null,
                endFrame: () => null,
                startRenderSprite: () => null,
                endRenderSprite: () => null,
                renderTexture: () => null,
                startNativeSprite: () => null,
                endNativeSprite: () => null,
                getInitTextureState: () => null,
                getInitMaskState: () => ({ value: null }),
              },
              me = {
                resolution: 1,
                hasSet: !1,
                get() {
                  return this.resolution;
                },
                set(e) {
                  (this.resolution = e),
                    (this.hasSet = !0),
                    ae(),
                    he.storage.setItem(H, String(e));
                },
              },
              he = (function (e, t, r, n, i, o) {
                return {
                  isTouchScreen:
                    !!(
                      "ontouchstart" in window ||
                      (window.DocumentTouch &&
                        document instanceof window.DocumentTouch)
                    ) ||
                    window.matchMedia(
                      "(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)"
                    ).matches,
                  log: console.log,
                  random: Math.random,
                  timer: $(),
                  audio: W(e, t, n.audioElements),
                  globalAudio: t,

                  assetUtils: n,
                  network: {
                    get: (e, t) => {
                      fetch(e)
                        .then((e) => e.json())
                        .then(t);
                    },
                    post: (e, t, r) => {
                      fetch(e, { method: "POST", body: JSON.stringify(t) })
                        .then((e) => e.json())
                        .then(r);
                    },
                    put: (e, t, r) => {
                      fetch(e, { method: "PUT", body: JSON.stringify(t) })
                        .then((e) => e.json())
                        .then(r);
                    },
                    delete: (e, t) => {
                      fetch(e, { method: "DELETE" })
                        .then((e) => e.json())
                        .then(t);
                    },
                  },
                  storage: {
                    getItem: async (e) => localStorage.getItem(e),
                    setItem: async (e, t) => {
                      null !== t
                        ? localStorage.setItem(e, t)
                        : localStorage.removeItem(e);
                    },
                  },
                  alert: {
                    ok: (e, t) => {
                      alert(e), null == t || t();
                    },
                    okCancel: (e, t) => {
                      t(confirm(e));
                    },
                  },
                  clipboard: {
                    copy: (e, t) => {
                      navigator.clipboard
                        ? navigator.clipboard
                            .writeText(e)
                            .then(() => {
                              t();
                            })
                            .catch((e) => {
                              t(e);
                            })
                        : t(
                            new Error(
                              window.isSecureContext
                                ? "Couldn't access clipboard"
                                : "Clipboard only available on HTTPS or localhost"
                            )
                          );
                    },
                  },
                  size: r,
                  now: () => new Date(),
                  resolution: o,
                  ...i,
                };
              })(
                F,
                I,
                z(
                  (null == a ? void 0 : a.width) || window.innerWidth,
                  (null == a ? void 0 : a.height) || window.innerHeight,
                  n,
                  e.props.size
                ),
                pe,
                (null == r ? void 0 : r.device) || {
                  alert: {
                    ok: (e, t) => {
                      (K = C), alert(e), (j = !0), null == t || t();
                    },
                    okCancel: (e, t) => {
                      K = C;
                      const r = confirm(e);
                      (j = !0), t(r);
                    },
                  },
                },
                me
              );
            he.storage.getItem(H).then((e) => {
              if (null !== e) {
                const t = Number(e);
                isNaN(t) || me.set(t);
              }
            }),
              he.storage.getItem(J).then((e) => {
                if (null !== e) {
                  const t = Number(e);
                  !isNaN(t) && t >= 0 && t <= 1 && I.setVolume(t);
                }
              });
            const ge = {
                mutDevice: he,
                getInputs: U,
                newInputs: N,
                render: fe,
                isTestPlatform: !1,
              },
              ve = {
                isLastFrame: !0,
                didResize: !1,
                scale: 1,
                gameXToPlatformX: (e) => e,
                gameYToPlatformY: (e) => e,
                size: he.size,
              };
            let ye = !1;
            const xe = () => {
              document.removeEventListener("keydown", xe, !1),
                document.removeEventListener(m, xe, !1),
                "suspended" === F.state && F.resume(),
                (F.onstatechange = () => {
                  "suspended" !== F.state || document.hidden || F.resume();
                });
            };
            return (
              document.addEventListener("keydown", xe, !1),
              document.addEventListener(m, xe, !1),
              (function t() {
                const r = (null == a ? void 0 : a.width) || window.innerWidth,
                  n = (null == a ? void 0 : a.height) || window.innerHeight;
                if (!r || !n) return void setTimeout(t, 50);
                ae();
                const { runNextFrame: i } = (function (e, t, r, n) {
                  const {
                      mutDevice: i,
                      getInputs: o,
                      newInputs: a,
                      isTestPlatform: s,
                    } = e,
                    l = {
                      index: 0,
                      stack: [
                        {
                          opacity: 1,
                          transformation: c.getScaleMatrix(
                            2 / i.size.fullWidth,
                            2 / i.size.fullHeight
                          ),
                          transformationGameCoords: [...c.identityMatrix],
                          hasMask: !1,
                        },
                      ],
                    },
                    u = [0, 0, 0, 0, 0, 0],
                    d = [0, 0, 0, 0, 0, 0],
                    p = {
                      addToStack: (e) => {
                        const t = l.stack[l.index];
                        g(t.transformation, u, e),
                          g(t.transformationGameCoords, d, e),
                          l.index++;
                        const r = l.stack[l.index];
                        if (r) {
                          (r.opacity = t.opacity * e.opacity),
                            (r.hasMask = null !== e.mask);
                          for (let e = 0; e < u.length; e++)
                            r.transformation[e] = u[e];
                          for (let e = 0; e < d.length; e++)
                            r.transformationGameCoords[e] = d[e];
                          return r;
                        }
                        {
                          const r = [...u],
                            n = [...d],
                            i = {
                              opacity: t.opacity * e.opacity,
                              hasMask: null !== e.mask,
                              transformation: r,
                              transformationGameCoords: n,
                            };
                          return l.stack.push(i), i;
                        }
                      },
                      removeFromStack: () => {
                        const e = l.stack[l.index];
                        return l.index--, e;
                      },
                      getStack: (e) => l.stack[e],
                      getStackIndex: () => l.index,
                      getTopStack: () => l.stack[l.index],
                    },
                    f = E(r, i, o, a, p, 0, r.props.id, []),
                    m = r.props.size,
                    h = w(i.size, m);
                  let v = 0,
                    y = 0;
                  const x = {
                    isEmpty: !1,
                    newFrame: e.render.newFrame,
                    endFrame: e.render.endFrame,
                    startRenderSprite: e.render.startRenderSprite,
                    endRenderSprite: e.render.endRenderSprite,
                    renderTexture: e.render.renderTexture,
                    startNativeSprite: e.render.startNativeSprite,
                    endNativeSprite: e.render.endNativeSprite,
                    getInitTextureState: e.render.getInitTextureState,
                    getInitMaskState: e.render.getInitMaskState,
                  };
                  x.newFrame(),
                    _(
                      f,
                      r.props,
                      i,
                      p,
                      o,
                      a,
                      !0,
                      h,
                      0,
                      r.props.id,
                      t,
                      x,
                      s,
                      []
                    ),
                    x.endFrame();
                  const A = () => null,
                    b = () => null,
                    T = () => null,
                    R = () => null,
                    P = () => null,
                    F = () => null,
                    I = () => null;
                  return (
                    e.render.getInitTextureState,
                    e.render.getInitMaskState,
                    {
                      runNextFrame(n, u) {
                        const d = n - v;
                        (v = n), (y += d);
                        let h = Math.round(y / S);
                        for (
                          t.nativeSpriteUtils.didResize &&
                          (l.stack[0].transformation = c.getScaleMatrix(
                            2 / i.size.fullWidth,
                            2 / i.size.fullHeight
                          ));
                          h > 0;

                        ) {
                          (y -= S), h--;
                          const n = y / S,
                            l = w(i.size, m),
                            c = 0 === h;
                          c && x.isEmpty
                            ? ((x.isEmpty = !1),
                              (x.newFrame = e.render.newFrame),
                              (x.endFrame = e.render.endFrame),
                              (x.startRenderSprite =
                                e.render.startRenderSprite),
                              (x.endRenderSprite = e.render.endRenderSprite),
                              (x.renderTexture = e.render.renderTexture),
                              (x.startNativeSprite =
                                e.render.startNativeSprite),
                              (x.endNativeSprite = e.render.endNativeSprite))
                            : c ||
                              x.isEmpty ||
                              ((x.isEmpty = !0),
                              (x.newFrame = A),
                              (x.endFrame = b),
                              (x.startRenderSprite = T),
                              (x.endRenderSprite = R),
                              (x.renderTexture = P),
                              (x.startNativeSprite = F),
                              (x.endNativeSprite = I)),
                            (t.nativeSpriteUtils.isLastFrame = c),
                            x.newFrame(),
                            _(
                              f,
                              r.props,
                              i,
                              p,
                              o,
                              a,
                              !1,
                              l,
                              n,
                              r.props.id,
                              t,
                              x,
                              s,
                              []
                            ),
                            x.endFrame(),
                            (t.nativeSpriteUtils.didResize = !1),
                            u();
                        }
                      },
                    }
                  );
                })(ge, { nativeSpriteMap: o, nativeSpriteUtils: ve }, e);
                let u = null;
                function d() {
                  null == l || l(), window.requestAnimationFrame(p);
                }
                function p(e) {
                  ye ||
                    (null == s || s(),
                    null === u && (u = e - 1 / 60),
                    M
                      ? (j && ((j = !1), (q += e - K)),
                        (C = e),
                        d(),
                        i(e - u - q, X))
                      : d());
                }
                d();
              })(),
              {
                cleanup: function () {
                  (p.width = p.width),
                    i || document.body.removeChild(p),
                    (ye = !0),
                    document.removeEventListener("keydown", D, !1),
                    document.removeEventListener("keyup", B, !1),
                    document.removeEventListener("visibilitychange", Q, !1),
                    window.removeEventListener("resize", ae, !1),
                    window.removeEventListener("scroll", Z, !1),
                    ae({ cleanup: !0 });
                },
                audioElements: le,
                imageElements: ce,
                audioContext: F,
              }
            );
          })(game.Game(game.gameProps), game.options, {
            fileFetch: ce,
            device: {
              storage: {
                getItem: async (e) => {
                  return localStorage.getItem(e);
                  const t = await le({
                    id: `__internalReplayStorageGetItem-${e}`,
                    message: e,
                  });
                  if ("error" in t) throw Error(t.error);
                  return t.value;
                },
                setItem: async (e, t) => {
                  null !== t
                    ? localStorage.setItem(e, t)
                    : localStorage.removeItem(e);
                  return;
                  if (null === t) {
                    const t = await le({
                      id: `__internalReplayStorageRemoveItem-${e}`,
                      message: e,
                    });
                    if ("string" == typeof t) throw Error(t);
                    return;
                  }
                  const r = await le({
                    id: `__internalReplayStorageSetItem-${e}`,
                    message: e,
                    message2: t,
                  });
                  if ("string" == typeof r) throw Error(r);
                },
              },
              clipboard: {
                copy(e, t) {
                  navigator.clipboard
                    ? navigator.clipboard
                        .writeText(e)
                        .then(() => {
                          t();
                        })
                        .catch((e) => {
                          t(e);
                        })
                    : t(
                        new Error(
                          window.isSecureContext
                            ? "Couldn't access clipboard"
                            : "Clipboard only available on HTTPS or localhost"
                        )
                      );
                  return;
                  le({ id: "__internalReplayClipboardCopy", message: e }).then(
                    () => {
                      t();
                    }
                  );
                },
              },
              alert: {
                ok: (e, t) => {
                  alert(e);
                  null == t || t();
                  le({ id: "__internalReplayAlertOk", message: e }).then(() => {
                    null == t || t();
                  });
                },
                okCancel: (e, t) => {
                  t(confirm(e));
                  /*
                  le({ id: "__internalReplayAlertOkCancel", message: e }).then(
                    (e) => {
                      t(e);
                    }
                  );*/
                },
              },
            },
          })
        : Error("Game is not defined");
    }
  })(),
    (renderCanvas = t);
})();
