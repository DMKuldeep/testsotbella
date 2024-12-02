var Qi = Object.defineProperty;
var Yi = (I, ve, _e) => ve in I ? Qi(I, ve, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: _e
}) : I[ve] = _e;
var X = (I, ve, _e) => (Yi(I, typeof ve != "symbol" ? ve + "" : ve, _e), _e);
(function() {
    "use strict";

    function I() {}
    const ve = e => e;

    function _e(e) {
        return e()
    }

    function en() {
        return Object.create(null)
    }

    function fe(e) {
        e.forEach(_e)
    }

    function dt(e) {
        return typeof e == "function"
    }

    function re(e, t) {
        return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
    }
    let ht;

    function ne(e, t) {
        return ht || (ht = document.createElement("a")), ht.href = t, e === ht.href
    }

    function oo(e) {
        return Object.keys(e).length === 0
    }

    function tn(e, ...t) {
        if (e == null) return I;
        const n = e.subscribe(...t);
        return n.unsubscribe ? () => n.unsubscribe() : n
    }

    function Ie(e) {
        let t;
        return tn(e, n => t = n)(), t
    }

    function Ne(e, t, n) {
        e.$$.on_destroy.push(tn(t, n))
    }

    function nn(e) {
        const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
        return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
    }
    const on = typeof window < "u";
    let ro = on ? () => window.performance.now() : () => Date.now(),
        zt = on ? e => requestAnimationFrame(e) : I;
    const Je = new Set;

    function rn(e) {
        Je.forEach(t => {
            t.c(e) || (Je.delete(t), t.f())
        }), Je.size !== 0 && zt(rn)
    }

    function io(e) {
        let t;
        return Je.size === 0 && zt(rn), {
            promise: new Promise(n => {
                Je.add(t = {
                    c: e,
                    f: n
                })
            }),
            abort() {
                Je.delete(t)
            }
        }
    }

    function v(e, t) {
        e.appendChild(t)
    }

    function sn(e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }

    function so(e) {
        const t = z("style");
        return co(sn(e), t), t.sheet
    }

    function co(e, t) {
        return v(e.head || e, t), t.sheet
    }

    function N(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function H(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function lo(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function z(e) {
        return document.createElement(e)
    }

    function de(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function ie(e) {
        return document.createTextNode(e)
    }

    function G() {
        return ie(" ")
    }

    function St() {
        return ie("")
    }

    function he(e, t, n, o) {
        return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o)
    }

    function ao(e) {
        return function(t) {
            return t.stopPropagation(), e.call(this, t)
        }
    }

    function p(e, t, n) {
        n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function uo(e) {
        return Array.from(e.childNodes)
    }

    function Ce(e, t) {
        t = "" + t, e.data !== t && (e.data = t)
    }

    function k(e, t, n, o) {
        n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }

    function cn(e, t, {
        bubbles: n = !1,
        cancelable: o = !1
    } = {}) {
        const r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, n, o, t), r
    }

    function ge(e) {
        const t = {};
        for (const n of e) t[n.name] = n.value;
        return t
    }
    const gt = new Map;
    let pt = 0;

    function fo(e) {
        let t = 5381,
            n = e.length;
        for (; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
        return t >>> 0
    }

    function ho(e, t) {
        const n = {
            stylesheet: so(t),
            rules: {}
        };
        return gt.set(e, n), n
    }

    function ln(e, t, n, o, r, i, c, a = 0) {
        const l = 16.666 / o;
        let s = `{
`;
        for (let C = 0; C <= 1; C += l) {
            const S = t + (n - t) * i(C);
            s += C * 100 + `%{${c(S,1-S)}}
`
        }
        const f = s + `100% {${c(n,1-n)}}
}`,
            u = `__svelte_${fo(f)}_${a}`,
            m = sn(e),
            {
                stylesheet: h,
                rules: d
            } = gt.get(m) || ho(m, e);
        d[u] || (d[u] = !0, h.insertRule(`@keyframes ${u} ${f}`, h.cssRules.length));
        const w = e.style.animation || "";
        return e.style.animation = `${w?`${w}, `:""}${u} ${o}ms linear ${r}ms 1 both`, pt += 1, u
    }

    function go(e, t) {
        const n = (e.style.animation || "").split(", "),
            o = n.filter(t ? i => i.indexOf(t) < 0 : i => i.indexOf("__svelte") === -1),
            r = n.length - o.length;
        r && (e.style.animation = o.join(", "), pt -= r, pt || po())
    }

    function po() {
        zt(() => {
            pt || (gt.forEach(e => {
                const {
                    ownerNode: t
                } = e.stylesheet;
                t && H(t)
            }), gt.clear())
        })
    }
    let ot;

    function rt(e) {
        ot = e
    }

    function an() {
        if (!ot) throw new Error("Function called outside component initialization");
        return ot
    }

    function mt(e) {
        an().$$.on_mount.push(e)
    }

    function xt() {
        const e = an();
        return (t, n, {
            cancelable: o = !1
        } = {}) => {
            const r = e.$$.callbacks[t];
            if (r) {
                const i = cn(t, n, {
                    cancelable: o
                });
                return r.slice().forEach(c => {
                    c.call(e, i)
                }), !i.defaultPrevented
            }
            return !0
        }
    }

    function Me(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach(o => o.call(this, t))
    }
    const Te = [],
        Ge = [];
    let We = [];
    const un = [],
        mo = Promise.resolve();
    let At = !1;

    function bo() {
        At || (At = !0, mo.then(y))
    }

    function it(e) {
        We.push(e)
    }
    const Rt = new Set;
    let Qe = 0;

    function y() {
        if (Qe !== 0) return;
        const e = ot;
        do {
            try {
                for (; Qe < Te.length;) {
                    const t = Te[Qe];
                    Qe++, rt(t), wo(t.$$)
                }
            } catch (t) {
                throw Te.length = 0, Qe = 0, t
            }
            for (rt(null), Te.length = 0, Qe = 0; Ge.length;) Ge.pop()();
            for (let t = 0; t < We.length; t += 1) {
                const n = We[t];
                Rt.has(n) || (Rt.add(n), n())
            }
            We.length = 0
        } while (Te.length);
        for (; un.length;) un.pop()();
        At = !1, Rt.clear(), rt(e)
    }

    function wo(e) {
        if (e.fragment !== null) {
            e.update(), fe(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(it)
        }
    }

    function yo(e) {
        const t = [],
            n = [];
        We.forEach(o => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach(o => o()), We = t
    }
    let st;

    function vo() {
        return st || (st = Promise.resolve(), st.then(() => {
            st = null
        })), st
    }

    function It(e, t, n) {
        e.dispatchEvent(cn(`${t?"intro":"outro"}${n}`))
    }
    const bt = new Set;
    let ke;

    function Ye() {
        ke = {
            r: 0,
            c: [],
            p: ke
        }
    }

    function Xe() {
        ke.r || fe(ke.c), ke = ke.p
    }

    function B(e, t) {
        e && e.i && (bt.delete(e), e.i(t))
    }

    function J(e, t, n, o) {
        if (e && e.o) {
            if (bt.has(e)) return;
            bt.add(e), ke.c.push(() => {
                bt.delete(e), o && (n && e.d(1), o())
            }), e.o(t)
        } else o && o()
    }
    const _o = {
        duration: 0
    };

    function fn(e, t, n, o) {
        const r = {
            direction: "both"
        };
        let i = t(e, n, r),
            c = o ? 0 : 1,
            a = null,
            l = null,
            s = null;

        function f() {
            s && go(e, s)
        }

        function u(h, d) {
            const w = h.b - c;
            return d *= Math.abs(w), {
                a: c,
                b: h.b,
                d: w,
                duration: d,
                start: h.start,
                end: h.start + d,
                group: h.group
            }
        }

        function m(h) {
            const {
                delay: d = 0,
                duration: w = 300,
                easing: C = ve,
                tick: S = I,
                css: L
            } = i || _o, O = {
                start: ro() + d,
                b: h
            };
            h || (O.group = ke, ke.r += 1), a || l ? l = O : (L && (f(), s = ln(e, c, h, w, d, C, L)), h && S(0, 1), a = u(O, w), it(() => It(e, h, "start")), io(A => {
                if (l && A > l.start && (a = u(l, w), l = null, It(e, a.b, "start"), L && (f(), s = ln(e, c, a.b, a.duration, 0, C, i.css))), a) {
                    if (A >= a.end) S(c = a.b, 1 - c), It(e, a.b, "end"), l || (a.b ? f() : --a.group.r || fe(a.group.c)), a = null;
                    else if (A >= a.start) {
                        const _ = A - a.start;
                        c = a.a + a.d * C(_ / a.duration), S(c, 1 - c)
                    }
                }
                return !!(a || l)
            }))
        }
        return {
            run(h) {
                dt(i) ? vo().then(() => {
                    i = i(r), m(h)
                }) : m(h)
            },
            end() {
                f(), a = l = null
            }
        }
    }

    function Fe(e) {
        e && e.c()
    }

    function Oe(e, t, n, o) {
        const {
            fragment: r,
            after_update: i
        } = e.$$;
        r && r.m(t, n), o || it(() => {
            const c = e.$$.on_mount.map(_e).filter(dt);
            e.$$.on_destroy ? e.$$.on_destroy.push(...c) : fe(c), e.$$.on_mount = []
        }), i.forEach(it)
    }

    function De(e, t) {
        const n = e.$$;
        n.fragment !== null && (yo(n.after_update), fe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function Co(e, t) {
        e.$$.dirty[0] === -1 && (Te.push(e), bo(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function pe(e, t, n, o, r, i, c, a = [-1]) {
        const l = ot;
        rt(e);
        const s = e.$$ = {
            fragment: null,
            ctx: [],
            props: i,
            update: I,
            not_equal: r,
            bound: en(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(t.context || (l ? l.$$.context : [])),
            callbacks: en(),
            dirty: a,
            skip_bound: !1,
            root: t.target || l.$$.root
        };
        c && c(s.root);
        let f = !1;
        if (s.ctx = n ? n(e, t.props || {}, (u, m, ...h) => {
                const d = h.length ? h[0] : m;
                return s.ctx && r(s.ctx[u], s.ctx[u] = d) && (!s.skip_bound && s.bound[u] && s.bound[u](d), f && Co(e, u)), m
            }) : [], s.update(), f = !0, fe(s.before_update), s.fragment = o ? o(s.ctx) : !1, t.target) {
            if (t.hydrate) {
                const u = uo(t.target);
                s.fragment && s.fragment.l(u), u.forEach(H)
            } else s.fragment && s.fragment.c();
            t.intro && B(e.$$.fragment), Oe(e, t.target, t.anchor, t.customElement), y()
        }
        rt(l)
    }
    let se;
    typeof HTMLElement == "function" && (se = class extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            const {
                on_mount: e
            } = this.$$;
            this.$$.on_disconnect = e.map(_e).filter(dt);
            for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
        }
        attributeChangedCallback(e, t, n) {
            this[e] = n
        }
        disconnectedCallback() {
            fe(this.$$.on_disconnect)
        }
        $destroy() {
            De(this, 1), this.$destroy = I
        }
        $on(e, t) {
            if (!dt(t)) return I;
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const o = n.indexOf(t);
                o !== -1 && n.splice(o, 1)
            }
        }
        $set(e) {
            this.$$set && !oo(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    });
    const dn = {
        text: "Buy Now with Breeze",
        offerText: "",
        errorText: "",
        enable: !0,
        showLogo: !0,
        logocolor: null,
        logohovercolor: null
    };

    function hn(e) {
        let t, n = e[0].errorText + "",
            o;
        return {
            c() {
                t = z("div"), o = ie(n), p(t, "class", "breeze-button-error-text")
            },
            m(r, i) {
                N(r, t, i), v(t, o)
            },
            p(r, i) {
                i & 1 && n !== (n = r[0].errorText + "") && Ce(o, n)
            },
            d(r) {
                r && H(t)
            }
        }
    }

    function gn(e) {
        let t, n, o, r, i, c, a, l, s, f, u, m, h;
        return {
            c() {
                t = z("div"), n = de("svg"), o = de("path"), i = de("path"), a = de("defs"), l = de("linearGradient"), s = de("stop"), f = de("stop"), u = de("linearGradient"), m = de("stop"), h = de("stop"), p(o, "id", "upper-part"), p(o, "d", "M21.6969 12.1324C23.1573 12.1324 24.3047 11.8717 25.1392 11.3501C25.9737 10.8285 26.8082 10.0723 27.6427 9.08131H27.721C27.8774 9.08131 28.0078 9.15954 28.1121 9.31601C28.2686 9.42032 28.2947 9.52464 28.1904 9.62895C25.9477 12.9148 24.1483 15.1053 22.7922 16.2006C21.4362 17.2959 19.9236 17.8435 18.2546 17.8435C17.3158 17.8435 16.4031 17.7392 15.5164 17.5306C14.6298 17.2698 13.6127 16.9047 12.4653 16.4353C11.3179 15.9659 10.2748 15.6008 9.33594 15.34C8.44929 15.0793 7.4844 14.9489 6.44128 14.9489C5.18953 14.9489 4.22464 15.1314 3.54661 15.4965C2.92074 15.8616 2.32095 16.331 1.74723 16.9047C1.17351 17.4263 0.782342 17.7914 0.573717 18H0.495483C0.391171 18 0.26078 17.9478 0.104312 17.8435C6.7661e-08 17.6871 -0.026078 17.5567 0.026078 17.4524C1.27782 15.314 2.71212 13.4363 4.32896 11.8195C5.99795 10.1505 7.77126 9.31601 9.64888 9.31601C10.3791 9.31601 11.1875 9.4464 12.0741 9.70718C13.0129 9.96796 13.9518 10.2548 14.8906 10.5678C17.707 11.6109 19.9758 12.1324 21.6969 12.1324Z"), p(o, "fill", r = e[0].logocolor == null ? "url(#paint0_linear_250_1799)" : e[0].logocolor), p(i, "id", "lower-part"), p(i, "d", "M25.7331 3.05113C27.1934 3.05113 28.3409 2.79035 29.1754 2.26879C30.0099 1.74723 30.8444 0.990966 31.6789 0H31.7571C31.9136 0 32.044 0.0782339 32.1483 0.234702C32.3047 0.339014 32.3308 0.443327 32.2265 0.547639C29.9838 3.83347 28.1844 6.02403 26.8284 7.11931C25.4723 8.21458 23.9598 8.76222 22.2908 8.76222C21.352 8.76222 20.4392 8.65791 19.5526 8.44929C18.6659 8.18851 17.6489 7.82341 16.5014 7.35401C15.354 6.8846 14.3109 6.51951 13.3721 6.25873C12.4854 5.99795 11.5205 5.86756 10.4774 5.86756C9.22567 5.86756 8.26078 6.05011 7.58275 6.4152C6.95688 6.78029 6.35708 7.2497 5.78337 7.82341C5.20965 8.34497 4.81848 8.71007 4.60985 8.91869H4.53162C4.42731 8.91869 4.29692 8.86654 4.14045 8.76222C4.03614 8.60576 4.01006 8.47537 4.06222 8.37105C5.31396 6.23265 6.74825 4.35503 8.36509 2.73819C10.0341 1.0692 11.8074 0.234702 13.685 0.234702C14.4152 0.234702 15.2236 0.365092 16.1103 0.625872C17.0491 0.886652 17.9879 1.17351 18.9267 1.48645C21.7431 2.52957 24.0119 3.05113 25.7331 3.05113Z"), p(i, "fill", c = e[0].logocolor == null ? "url(#paint1_linear_250_1799)" : e[0].logocolor), p(s, "stop-color", "#CBE5F3"), p(f, "offset", "1"), p(f, "stop-color", "#15A0EE"), p(l, "id", "paint0_linear_250_1799"), p(l, "x1", "-3.53162"), p(l, "y1", "18.1626"), p(l, "x2", "38.8478"), p(l, "y2", "3.27123e-06"), p(l, "gradientUnits", "userSpaceOnUse"), p(m, "stop-color", "#CBE5F3"), p(h, "offset", "1"), p(h, "stop-color", "#15A0EE"), p(u, "id", "paint1_linear_250_1799"), p(u, "x1", "-3.53162"), p(u, "y1", "18.1626"), p(u, "x2", "38.8478"), p(u, "y2", "3.27123e-06"), p(u, "gradientUnits", "userSpaceOnUse"), p(n, "width", "33"), p(n, "height", "18"), p(n, "viewBox", "0 0 33 18"), p(n, "fill", "none"), p(n, "xmlns", "http://www.w3.org/2000/svg"), p(t, "class", "breeze-button-logo"), k(t, "--logo-hover-fill", e[0].logohovercolor)
            },
            m(d, w) {
                N(d, t, w), v(t, n), v(n, o), v(n, i), v(n, a), v(a, l), v(l, s), v(l, f), v(a, u), v(u, m), v(u, h)
            },
            p(d, w) {
                w & 1 && r !== (r = d[0].logocolor == null ? "url(#paint0_linear_250_1799)" : d[0].logocolor) && p(o, "fill", r), w & 1 && c !== (c = d[0].logocolor == null ? "url(#paint1_linear_250_1799)" : d[0].logocolor) && p(i, "fill", c), w & 1 && k(t, "--logo-hover-fill", d[0].logohovercolor)
            },
            d(d) {
                d && H(t)
            }
        }
    }

    function ko(e) {
        let t, n, o, r, i, c = e[0].text + "",
            a, l, s, f = e[0].offerText + "",
            u, m, h, d, w, C, S, L, O = !e[0].enable && e[0].errorText !== "" && hn(e),
            A = e[0].showLogo && gn(e);
        return {
            c() {
                O && O.c(), t = G(), n = z("button"), A && A.c(), o = G(), r = z("div"), i = z("div"), a = ie(c), l = G(), s = z("div"), u = ie(f), m = G(), h = z("style"), h.textContent = `.breeze-button:hover path {
      fill: var(--logo-hover-fill, url(#paint0_linear_250_1799));
    }`, d = G(), w = z("span"), this.c = I, p(i, "class", "breeze-button-text"), p(s, "class", "breeze-button-sub-text"), p(r, "class", "breeze-button-text-lines"), p(w, "class", "btn-ring"), p(w, "id", "btn-ring"), p(n, "class", "breeze-button"), k(n, "--breeze-button-opacity", e[0].enable ? 1 : .4), k(n, "--breeze-button-cursor", e[0].enable ? "pointer" : "not-allowed"), n.disabled = C = !e[0].enable
            },
            m(_, R) {
                O && O.m(_, R), N(_, t, R), N(_, n, R), A && A.m(n, null), v(n, o), v(n, r), v(r, i), v(i, a), v(r, l), v(r, s), v(s, u), v(n, m), v(n, h), v(n, d), v(n, w), S || (L = he(n, "click", e[1]), S = !0)
            },
            p(_, [R]) {
                !_[0].enable && _[0].errorText !== "" ? O ? O.p(_, R) : (O = hn(_), O.c(), O.m(t.parentNode, t)) : O && (O.d(1), O = null), _[0].showLogo ? A ? A.p(_, R) : (A = gn(_), A.c(), A.m(n, o)) : A && (A.d(1), A = null), R & 1 && c !== (c = _[0].text + "") && Ce(a, c), R & 1 && f !== (f = _[0].offerText + "") && Ce(u, f), R & 1 && k(n, "--breeze-button-opacity", _[0].enable ? 1 : .4), R & 1 && k(n, "--breeze-button-cursor", _[0].enable ? "pointer" : "not-allowed"), R & 1 && C !== (C = !_[0].enable) && (n.disabled = C)
            },
            i: I,
            o: I,
            d(_) {
                O && O.d(_), _ && H(t), _ && H(n), A && A.d(), S = !1, L()
            }
        }
    }

    function Eo(e, t, n) {
        let {
            properties: o = dn
        } = t;

        function r(i) {
            Me.call(this, e, i)
        }
        return e.$$set = i => {
            "properties" in i && n(0, o = i.properties)
        }, [o, r]
    }
    class pn extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Eo, ko, re, {
                properties: 0
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["properties"]
        }
        get properties() {
            return this.$$.ctx[0]
        }
        set properties(t) {
            this.$$set({
                properties: t
            }), y()
        }
    }
    customElements.define("breeze-button-component", pn);

    function zo(e) {
        const t = e - 1;
        return t * t * t + 1
    }

    function mn(e, {
        delay: t = 0,
        duration: n = 400,
        easing: o = zo,
        x: r = 0,
        y: i = 0,
        opacity: c = 0
    } = {}) {
        const a = getComputedStyle(e),
            l = +a.opacity,
            s = a.transform === "none" ? "" : a.transform,
            f = l * (1 - c),
            [u, m] = nn(r),
            [h, d] = nn(i);
        return {
            delay: t,
            duration: n,
            easing: o,
            css: (w, C) => `
			transform: ${s} translate(${(1-w)*u}${m}, ${(1-w)*h}${d});
			opacity: ${l-f*C}`
        }
    }
    const bn = {
            statusIcon: "icons/order-success-icon.svg",
            statusText: "",
            statusDescription: "",
            buttonProperties: null,
            errorDetails: null,
            trace: []
        },
        wt = {
            text: "",
            enable: !0,
            showLoader: !1,
            icon: null
        };

    function wn(e) {
        let t, n;
        return {
            c() {
                t = z("img"), ne(t.src, n = e[0].icon) || p(t, "src", n), p(t, "alt", ""), p(t, "class", "standard-button-icon")
            },
            m(o, r) {
                N(o, t, r)
            },
            p(o, r) {
                r & 1 && !ne(t.src, n = o[0].icon) && p(t, "src", n)
            },
            d(o) {
                o && H(t)
            }
        }
    }

    function So(e) {
        let t, n, o = e[0].text + "",
            r, i, c, a, l = e[0].icon !== null && wn(e);
        return {
            c() {
                t = z("button"), l && l.c(), n = G(), r = ie(o), this.c = I, p(t, "class", "standard-button"), k(t, "--opacity", e[0].enable ? 1 : .4), k(t, "--cursor", e[0].enable ? "pointer" : "not-allowed"), t.disabled = i = !e[0].enable
            },
            m(s, f) {
                N(s, t, f), l && l.m(t, null), v(t, n), v(t, r), c || (a = he(t, "click", e[1]), c = !0)
            },
            p(s, [f]) {
                s[0].icon !== null ? l ? l.p(s, f) : (l = wn(s), l.c(), l.m(t, n)) : l && (l.d(1), l = null), f & 1 && o !== (o = s[0].text + "") && Ce(r, o), f & 1 && k(t, "--opacity", s[0].enable ? 1 : .4), f & 1 && k(t, "--cursor", s[0].enable ? "pointer" : "not-allowed"), f & 1 && i !== (i = !s[0].enable) && (t.disabled = i)
            },
            i: I,
            o: I,
            d(s) {
                s && H(t), l && l.d(), c = !1, a()
            }
        }
    }

    function xo(e, t, n) {
        let {
            properties: o = wt
        } = t;

        function r(i) {
            Me.call(this, e, i)
        }
        return e.$$set = i => {
            "properties" in i && n(0, o = i.properties)
        }, [o, r]
    }
    class Nt extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, xo, So, re, {
                properties: 0
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["properties"]
        }
        get properties() {
            return this.$$.ctx[0]
        }
        set properties(t) {
            this.$$set({
                properties: t
            }), y()
        }
    }
    customElements.define("breeze-svelte-button", Nt);
    const yn = "<!!error!!>";

    function x(e) {
        return typeof e == "string" ? e : null
    }

    function oe(e) {
        return typeof e == "string" ? e : yn
    }

    function Pe(e) {
        return typeof e == "number" ? e : null
    }

    function vn(e, t) {
        if (Array.isArray(e)) {
            const n = [];
            return e.forEach(o => {
                const r = t(o);
                r && n.push(r)
            }), n
        }
        return null
    }

    function ce(e, t = []) {
        let n = !0,
            o = !0;
        return Object.keys(e).forEach(r => {
            e[r] === null && t.includes(r) || (typeof e[r] == "string" ? n && (n = e[r] !== yn) : o && (o = e[r] !== null))
        }), n && o
    }

    function le(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }

    function Ao(e) {
        if (le(e)) {
            const t = x(e.event),
                n = x(e.checkoutId);
            if (t !== null && n !== null) return {
                event: t,
                checkoutId: n
            }
        }
        return null
    }

    function Ro(e) {
        if (le(e)) {
            const t = x(e.event),
                n = x(e.sessionId),
                o = x(e.shopOrderId),
                r = Pe(e.shippingCharge),
                i = Pe(e.totalPrice),
                c = Pe(e.itemCount),
                a = x(e.currency),
                l = x(e.currentLocation),
                s = vn(e.items, Io),
                f = No(e.userDetails),
                u = x(e.hashedPhoneNumber),
                m = x(e.hashedEmailAddress);
            let h = null;
            if (i !== null && c !== null && n !== null && a !== null && l !== null && s !== null && t !== null && (h = {
                    event: t,
                    shopOrderId: o,
                    shippingCharge: r,
                    totalPrice: i,
                    itemCount: c,
                    sessionId: n,
                    currency: a,
                    currentLocation: l,
                    items: s,
                    userDetails: f,
                    hashedPhoneNumber: u,
                    hashedEmailAddress: m
                }, ce(h, ["userDetails", "shopOrderId", "shippingCharge", "hashedPhoneNumber", "hashedEmailAddress"]))) return h
        }
        return null
    }

    function Io(e) {
        if (le(e)) {
            const t = Pe(e.id),
                n = Pe(e.price),
                o = Pe(e.quantity),
                r = x(e.currency),
                i = Pe(e.variant),
                c = x(e.name);
            let a = null;
            if (n !== null && o !== null && t !== null && r !== null && c !== null && i !== null && (a = {
                    id: t,
                    quantity: o,
                    price: n,
                    currency: r,
                    name: c,
                    variant: i
                }, ce(a))) return a
        }
        return null
    }

    function No(e) {
        if (le(e)) {
            const t = x(e.name),
                n = x(e.phone),
                o = x(e.email),
                r = x(e.city),
                i = x(e.state),
                c = x(e.postalCode),
                a = x(e.countryCode);
            let l = null;
            if (n !== null && o !== null && t !== null && r !== null && t !== null && i !== null && a !== null && c !== null && (l = {
                    name: t,
                    email: o,
                    phone: n,
                    city: r,
                    state: i,
                    postalCode: c,
                    countryCode: a
                }, ce(l))) return l
        }
        return null
    }

    function _n(e) {
        if (typeof e == "string") switch (e.toLowerCase()) {
            case "success":
                return "success";
            case "failure":
                return "failure";
            default:
                return null
        }
        return null
    }

    function Oo(e) {
        if (K(e)) {
            const t = {
                checkoutId: x(e.checkoutId),
                sessionId: oe(e.sessionId),
                enforcedPostalCode: x(e.enforcedPostalCode),
                checkoutInitiationPageHref: x(e.checkoutInitiationPageHref),
                shopUrl: oe(e.shopUrl),
                platformCustomer: Lo(e.platformCustomer),
                shopType: yt(e.shopType)
            };
            if (ce(t, ["checkoutId", "enforcedPostalCode", "checkoutInitiationPageHref", "shopUrl", "platformCustomer", "shopType"])) return t
        }
        return null
    }

    function Do(e) {
        const t = {
            checkoutInitiationPageHref: null,
            enforcedPostalCode: null
        };
        return K(e) && (t.checkoutInitiationPageHref = x(e.checkoutInitiationPageHref), t.enforcedPostalCode = x(e.enforcedPostalCode)), t
    }

    function Uo(e) {
        if (K(e)) {
            const t = {
                checkoutUrl: oe(e.checkoutUrl)
            };
            if (ce(t)) return t
        }
        return null
    }

    function Lo(e) {
        if (K(e)) {
            const t = {
                id: x(e.id),
                email: x(e.email)
            };
            if (ce(t, ["id", "email"])) return t
        }
        return null
    }

    function Mo(e) {
        var t, n, o, r, i, c, a, l;
        if (K(e)) {
            const s = {
                enableGa: ze((t = x(e.enableGa)) != null ? t : "false"),
                enableFbp: ze((n = x(e.enableFbp)) != null ? n : "false"),
                enableSnapTracker: ze((o = x(e.enableSnapTracker)) != null ? o : "false"),
                ga4MeasurementId: (r = x(e.ga4MeasurementId)) != null ? r : "GA4",
                gaVersion: (i = x(e.gaVersion)) != null ? i : "both",
                enableExternalTrackers: ze((c = x(e.enableExternalTrackers)) != null ? c : "false"),
                emitTrackerEvents: ze((a = x(e.emitTrackerEvents)) != null ? a : "false"),
                enableThoughtMetric: ze((l = x(e.enableThoughtMetric)) != null ? l : "false")
            };
            if (ce(s)) return s
        }
        return null
    }

    function yt(e) {
        if (typeof e == "string") switch (e) {
            case "shopify":
            case "magento":
            case "woocommerce":
            case "shopifystorefront":
                return e;
            default:
                return null
        }
        return null
    }

    function Cn(e) {
        if (typeof e == "string") switch (e) {
            case "beta":
            case "release":
                return e;
            default:
                return null
        }
        return null
    }

    function Fo(e) {
        if (K(e)) {
            const t = {
                icon: oe(e.icon),
                title: oe(e.title),
                description: oe(e.description),
                tnc: x(e.tnc)
            };
            if (ce(t, ["tnc"])) return t
        }
        return null
    }

    function Po(e) {
        if (K(e)) {
            const t = { ...e,
                staticOffers: vn(e.staticOffers, Fo)
            };
            if (ce(t, Gr(e))) return t
        }
        return null
    }

    function Ho(e) {
        if (K(e)) {
            const t = {
                status: oe(e.status),
                message: oe(e.message),
                otpSessionToken: oe(e.otpSessionToken),
                phoneNumber: oe(e.phoneNumber)
            };
            if (ce(t)) return t
        }
        return null
    }

    function Bo(e) {
        if (K(e)) {
            const t = _n(e.verifyOTPResponseStatus);
            if (t !== null) return {
                verifyOTPResponseStatus: t,
                platformAuthCredentials: K(e.platformAuthCredentials) ? e.platformAuthCredentials : null
            }
        }
        return null
    }

    function qo(e) {
        if (K(e)) {
            const t = jo(e.error),
                n = _n(e.status);
            if (t !== null && n !== null) return {
                error: t,
                status: n
            }
        }
        return null
    }

    function jo(e) {
        if (K(e)) {
            const t = {
                code: oe(e.code),
                description: oe(e.description)
            };
            if (ce(t)) return t
        }
        return null
    }

    function q(e, t) {
        return e + ": " + t
    }
    const Vo = {
            isInitialAttempt: !0,
            retries: 2,
            retryDelay: 2e3,
            retryErrorResponse: !1,
            trace: [],
            cycleFetchType: !0,
            apiCallerMethodOrder: ["Fetch", "NativeFetch"],
            defaultFetchType: "Fetch"
        },
        Ke = [];

    function Ot(e, t = I) {
        let n;
        const o = new Set;

        function r(a) {
            if (re(e, a) && (e = a, n)) {
                const l = !Ke.length;
                for (const s of o) s[1](), Ke.push(s, e);
                if (l) {
                    for (let s = 0; s < Ke.length; s += 2) Ke[s][0](Ke[s + 1]);
                    Ke.length = 0
                }
            }
        }

        function i(a) {
            r(a(e))
        }

        function c(a, l = I) {
            const s = [a, l];
            return o.add(s), o.size === 1 && (n = t(r) || I), a(e), () => {
                o.delete(s), o.size === 0 && n && (n(), n = null)
            }
        }
        return {
            set: r,
            update: i,
            subscribe: c
        }
    }
    const Jo = {
            checkoutId: null,
            sessionId: ((e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), ""))(),
            enforcedPostalCode: null,
            checkoutInitiationPageHref: null,
            shopUrl: null,
            platformCustomer: null,
            shopType: null
        },
        Ee = Ot(Jo);
    async function To(e) {
        let t = null;
        const n = e.headers.get("content-type");
        return n != null && n.includes("application/json") ? t = await e.json() : t = await e.text(), t
    }

    function Go(e) {
        var t, n, o;
        return e instanceof DOMException ? {
            class: "DOMException",
            name: e.name,
            message: e.message,
            cause: e.cause,
            stack: (t = e.stack) != null ? t : null
        } : e instanceof TypeError ? {
            class: "TypeError",
            name: e.name,
            message: e.message,
            cause: e.cause,
            stack: (n = e.stack) != null ? n : null
        } : e instanceof Error ? {
            class: "Error",
            name: e.name,
            message: e.message,
            cause: JSON.stringify(e),
            stack: (o = e.stack) != null ? o : null
        } : {
            class: "UnhandledException",
            name: "UnhandledException",
            message: null,
            cause: JSON.stringify(e),
            stack: null
        }
    }
    async function Wo(e) {
        return new Promise(t => setTimeout(t, e))
    }
    class Ze {
        constructor(t, n, o, r) {
            X(this, "statusCode");
            X(this, "status");
            X(this, "response");
            X(this, "time");
            this.statusCode = t, this.status = n, this.response = o, this.time = r
        }
    }
    class He {
        constructor(t, n, o, r, i, c) {
            X(this, "errorMessage");
            X(this, "errorCode");
            X(this, "response");
            X(this, "errorResponse");
            X(this, "errorDetails");
            X(this, "time");
            this.errorMessage = t, this.errorCode = n, this.response = o, this.errorResponse = r, this.errorDetails = c, this.time = i
        }
    }
    class ct {
        static async call(t, n, o = null, r = fetch) {
            let i;
            try {
                this.startHooks.forEach(u => {
                    u.func(t)
                });
                const c = Date.now(),
                    a = await r(t.url.href, t),
                    l = Date.now() - c,
                    s = await To(a),
                    f = n(s);
                if (f !== null) i = new Ze(a.status, a.statusText, f, l);
                else {
                    const u = o !== null ? o(s) : null,
                        m = u !== null ? null : {
                            class: "DecodeFailure",
                            name: "DecodeFailure",
                            cause: null,
                            message: "",
                            stack: null
                        };
                    i = new He("Failed to decode API result to success response", a.status, u, s, l, m)
                }
            } catch (c) {
                i = new He("Exception in APICaller.call", -1, null, c, 0, Go(c))
            }
            return this.endHooks.forEach(c => {
                c.func(t, i)
            }), i
        }
        static async callWithRetries(t, n, o, r = null, i = fetch) {
            let c = await this.call(t, n, r, i);
            if (c instanceof He)
                for (let a = 0; a < o.maxRetries && (this.retryHooks.forEach(l => {
                        l.func(t, c, a + 1)
                    }), await Wo(o.retryInterval), c = await this.call(t, n, r, i), !(c instanceof Ze || c.errorDetails !== null && !o.retryOn.includes(c.errorDetails.class))); a++);
            return c
        }
        static registerStartHook(t) {
            typeof this.startHooks.find(n => n.id === t.id) > "u" && this.startHooks.push(t)
        }
        static registerEndHook(t) {
            typeof this.endHooks.find(n => n.id === t.id) > "u" && this.endHooks.push(t)
        }
        static registerRetryHook(t) {
            typeof this.retryHooks.find(n => n.id === t.id) > "u" && this.retryHooks.push(t)
        }
    }
    X(ct, "startHooks", []), X(ct, "endHooks", []), X(ct, "retryHooks", []);
    const vt = "Uh oh!",
        Qo = "Something went wrong while creating checkout! <br> Please retry.",
        Dt = "Oops! items are out of stock",
        Yo = "Some of the items in your cart are out of stock. <br> Please remove them and try again.",
        Xo = "You can't add more",
        Ko = "<br> Please try reducing the quantity or by removing the item.",
        Zo = "already sold out",
        $o = "Product not available",
        kn = "Your cart is empty.",
        En = "Please add an item to the cart.",
        zn = "https://sdk.breeze.in/gallery/images/something-went-wrong.webp",
        Sn = "https://app.breeze.in",
        xn = "https://app.beta.breeze.in";

    function $e() {
        return {
            cart: {},
            status: "failure",
            message: "Unable to fetch your cart",
            description: null,
            errorDetails: null,
            trace: [],
            statusIcon: zn
        }
    }
    const W = Ot({
        platform: null,
        appEnvironment: "release",
        shopConfiguration: null,
        isCheckoutVisible: !1,
        externalTrackerConfig: {
            enableGa: !1,
            enableFbp: !1,
            enableSnapTracker: !1,
            ga4MeasurementId: "GA4",
            gaVersion: "both",
            enableExternalTrackers: !1,
            emitTrackerEvents: !1,
            enableThoughtMetric: !1
        },
        recoverCart: null,
        enableBreezeLogin: null,
        reloadStoreOnClose: !1,
        merchantId: null,
        shopDomain: null
    });

    function me() {
        if (Ue.isShopifyShop()) return "shopify";
        const e = Ie(W);
        return e != null && e.platform ? e.platform : "independent"
    }

    function Be() {
        switch (me()) {
            case "shopify":
                return Ue.getShopUrl();
            case "magento":
                {
                    const e = ee(window.location.href);
                    return e ? e.origin : window.location.href
                }
            case "shopifystorefront":
                {
                    const e = Ie(Ee);
                    return e.shopUrl !== null ? e.shopUrl : window.location.href
                }
            default:
                return window.location.href
        }
    }

    function er() {
        const e = ee(window.location.origin);
        return e !== null ? e.hostname : null
    }

    function ee(e) {
        try {
            return new URL(e)
        } catch (t) {
            console.log(`Failed while converting ${e} to url with error: `, String(t))
        }
        return null
    }

    function Ut() {
        return Ie(W).appEnvironment
    }

    function Lt() {
        return Ut() === "beta" ? "https://app.beta.breeze.in" : "https://app.breeze.in"
    }
    const Mt = {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json;"
        },
        An = e => {
            try {
                return e = typeof e == "string" ? JSON.parse(e) : e, le(e) ? e : null
            } catch {
                return qt({
                    message: "Unable to decode JSON response",
                    rawResponse: e + ""
                }), null
            }
        },
        tr = "/cart/clear.js",
        nr = "/cart/add.js",
        or = "/apps/breeze/api/analytics";

    function rr() {
        return ar().split("/products/").length > 1 ? "Products" : "Checkout"
    }

    function ir() {
        return (Ut() === "beta" ? xn : Sn) + "/api/cart"
    }

    function sr(e, t) {
        const n = { ...e
            },
            o = e.items;
        return Array.isArray(o) && o.length === 0 && t !== null && Array.isArray(t.items) && (n.items = t.items), n
    }

    function Rn(e) {
        const t = $e();
        return e !== null && Array.isArray(e.items) && e.items.length === 0 ? (t.message = kn, t.description = En, t) : null
    }
    async function In(e, t, n, o) {
        var l, s, f;
        let r = $e();
        const i = (l = ut("cart")) != null ? l : null;
        if (e !== null && i !== null) {
            r.trace.push(q("CaseMatch", "cartData !== null && cartToken !== null"));
            const u = Rn(e);
            return u !== null ? u : (e.token = i, r.cart = e, r.status = "success", r.message = "", r.statusIcon = "", r.cart.attributes = Nn(r.cart.attributes), r)
        } else r.trace.push(q("FailedCheck", "cartData !== null && cartToken !== null"));
        let c = null;
        if (t !== null)
            if (r.trace.push(q("CaseMatch", "productDetails !== null")), c = await lr(t, n, o), c.result.status === "failure") {
                r = c.result, r.trace.push(q("Failure", "addProductToCartResult.result.status === 'failure'"));
                const u = Pt(c.result.message),
                    m = hr(c.result.message),
                    h = gr(c.result.message);
                if (u || m || h) {
                    let d = "Selected product quantity is not available.";
                    const w = dr(c.result.message, u, m);
                    w !== null && (d = "Selected quantity for the product " + w + " is not available."), r.description = d + Ko, r.message = Dt
                }
                return r
            } else r.trace.push(q("FailedCheck", "addProductToCartResult.result.status === 'failure'"));
        else r.trace.push(q("FailedCheck", "productDetails !== null"));
        const a = ee(window.location.origin + "/cart.js");
        if (a !== null) {
            r.trace.push(q("CaseMatch", "requestUrl !== null"));
            const m = await Jt("shopify:getCart", {
                url: a,
                body: null,
                method: "GET",
                headers: {}
            }, An);
            if (le(m) && (m.errorCode === 200 || m.statusCode === 200)) {
                r.trace.push(q("CaseMatch", "isJSON(getCartResponse) && (getCartResponse.errorCode === 200 || getCartResponse.statusCode === 200)")), r.cart = sr((s = m.response) != null ? s : m.errorResponse, (f = c == null ? void 0 : c.response) != null ? f : null);
                const h = Rn(r.cart);
                if (h !== null) return h;
                r.status = "success", r.statusIcon = "", r.cart.attributes = Nn(r.cart.attributes)
            } else r.trace.push(q("FailedCheck", "isJSON(getCartResponse) && (getCartResponse.errorCode === 200 || getCartResponse.statusCode === 200)")), r.message = vt + " Something went wrong", m instanceof He ? (r.errorDetails = m.errorDetails, le(m.errorResponse) && typeof m.errorResponse.description == "string" && (r.message = m.errorResponse.description)) : typeof m.response.description == "string" && (r.message = m.response.description)
        } else r.trace.push(q("FailedCheck", "requestUrl !== null"));
        return r
    }

    function cr() {
        var t, n, o, r, i, c, a, l, s;
        const e = ut("_shopify_sa_p");
        if (typeof e < "u" && e !== null) {
            const f = decodeURIComponent(e),
                u = Fr(f);
            return {
                utm_source: (t = u.get("utm_source")) != null ? t : null,
                utm_medium: (n = u.get("utm_medium")) != null ? n : null,
                utm_campaign: (o = u.get("utm_campaign")) != null ? o : null,
                fbclid: (r = u.get("fbclid")) != null ? r : null,
                utm_content: (i = u.get("utm_content")) != null ? i : null,
                utm_term: (c = u.get("utm_term")) != null ? c : null,
                ref: (a = u.get("ref")) != null ? a : null,
                gclid: (l = u.get("gclid")) != null ? l : null,
                shpxid: (s = u.get("shpxid")) != null ? s : null
            }
        }
        return null
    }

    function Nn(e) {
        var d, w, C, S, L, O, A, _, R, M, Q, j, T, F, Y, ue, Z, P, be, we;
        const t = cr(),
            n = (w = (d = ae("utm_source")) != null ? d : t == null ? void 0 : t.utm_source) != null ? w : null,
            o = (S = (C = ae("utm_medium")) != null ? C : t == null ? void 0 : t.utm_medium) != null ? S : null,
            r = (O = (L = ae("utm_campaign")) != null ? L : t == null ? void 0 : t.utm_campaign) != null ? O : null,
            i = (_ = (A = ae("fbclid")) != null ? A : t == null ? void 0 : t.fbclid) != null ? _ : null,
            c = (M = (R = ae("utm_content")) != null ? R : t == null ? void 0 : t.utm_content) != null ? M : null,
            a = (j = (Q = ae("utm_term")) != null ? Q : t == null ? void 0 : t.utm_term) != null ? j : null,
            l = (F = (T = ae("ref")) != null ? T : t == null ? void 0 : t.ref) != null ? F : null,
            s = (ue = (Y = ae("gclid")) != null ? Y : t == null ? void 0 : t.gclid) != null ? ue : null,
            f = (P = (Z = ae("shpxid")) != null ? Z : t == null ? void 0 : t.shpxid) != null ? P : null,
            u = (be = ae("fbc")) != null ? be : null,
            m = (we = ae("fbp")) != null ? we : null,
            h = { ...e
            };
        return n !== null && (h.utm_source = n), o !== null && (h.utm_medium = o), r !== null && (h.utm_campaign = r), i !== null && (h.fbclid = i), c !== null && (h.utm_content = c), a !== null && (h.utm_term = a), l !== null && (h.ref = l), s !== null && (h.gclid = s), f !== null && (h.shpxid = f), u !== null && (h.fbc = u), m !== null && (h.fbp = m), h
    }
    async function lr(e, t, n) {
        const o = { ...$e(),
                message: "Product not available"
            },
            r = {
                result: o,
                response: null
            },
            i = ee(window.location.href);
        let c = null,
            a = "1";
        const l = ee(window.location.origin + nr);
        if (e.available && i !== null) {
            if (o.trace.push(q("CaseMatch", "productData.available && currentPageUrl !== null")), Array.isArray(e.variants) && e.variants.length > 0) {
                const s = e.variants[0],
                    f = i.searchParams.get("variant");
                t != null && t.id ? c = t.id : f !== null ? c = f : s && s.id && (c = "" + s.id)
            }
        } else o.trace.push(q("FailedCheck", "productData.available && currentPageUrl !== null"));
        if (c !== null && l !== null) {
            if (o.trace.push(q("CaseMatch", "variantId !== null && addProductRequestUrl !== null")), n) a = n === "0" ? "1" : n;
            else {
                o.trace.push(q("FailedCheck", "productQuantity"));
                const m = document.getElementsByName("quantity");
                m && m.length > 0 && m[0] && (m[0] instanceof HTMLInputElement || m[0] instanceof HTMLSelectElement) && (a = m[0].value === "0" ? "1" : m[0].value)
            }
            await On();
            const s = {
                    scope: 0,
                    items: [{
                        id: c,
                        quantity: a
                    }]
                },
                f = {
                    url: l,
                    body: JSON.stringify(s),
                    method: "POST",
                    headers: Mt
                },
                u = await Jt("addProductToCart", f, An);
            le(u) && (u.errorCode === 200 || u.statusCode === 200) ? (o.trace.push(q("CaseMatch", "isJSON(addProductResponse) && (addProductResponse.errorCode === 200 || addProductResponse.statusCode === 200)")), o.status = "success", o.message = "", o.statusIcon = "", r.response = u instanceof Ze ? u.response : u.errorResponse) : (o.trace.push(q("FailedCheck", "isJSON(getCartResponse) && (getCartResponse.errorCode === 200 || getCartResponse.statusCode === 200)")), o.message = vt + " Something went wrong", u instanceof He ? (o.errorDetails = u.errorDetails, le(u.errorResponse) && typeof u.errorResponse.description == "string" && (o.message = u.errorResponse.description)) : typeof u.response.description == "string" && (o.message = u.response.description))
        } else o.trace.push(q("FailedCheck", "variantId !== null && addProductRequestUrl !== null"));
        return r
    }
    async function On() {
        const e = {
            credentials: "same-origin",
            headers: Mt,
            method: "POST"
        };
        await Tt()(tr, e), Ar("cart")
    }

    function ar() {
        return window.location.href
    }

    function Ft() {
        var t;
        let e = window.location.origin;
        return (t = window.Shopify) != null && t.shop && (e = "https://" + window.Shopify.shop), e
    }

    function ur() {
        return Ft().includes("myshopify")
    }

    function fr() {
        var t;
        let e = null;
        if ((t = window.Shopify) != null && t.shop) {
            const o = window.Shopify.shop.split(".").at(0);
            e = o != null ? o : e
        }
        return e
    }

    function dr(e, t, n) {
        var o;
        if (t) {
            const r = e.indexOf("You can't add more "),
                i = e.indexOf(" to the cart."),
                c = 19;
            if (r !== -1 && i !== -1) return e.substring(r + c, i)
        } else if (n) {
            const r = e.match(/'(.*?)'/);
            if (r) return (o = r[1]) != null ? o : null
        }
        return null
    }

    function hr(e) {
        return e.includes(Zo)
    }

    function gr(e) {
        return e.includes($o)
    }

    function Pt(e) {
        return e.includes(Xo)
    }

    function pr(e) {
        return Pt(e) ? Yo : e
    }
    async function mr(e, t) {
        var i;
        const n = ee(ir());
        let o = null;
        const r = [];
        if (n !== null) {
            const c = {
                url: n,
                headers: { ...Mt,
                    "x-session-id": t
                },
                method: "POST",
                body: JSON.stringify({ ...e.payload
                })
            };
            if (o = await ct.call(c, Uo), o instanceof Ze) return o.response;
            if (r.push(q("FailedCheck", "apiResponse instanceof APISuccess")), jt("createCheckout", o), le(o.errorResponse) && le(o.errorResponse.error) && typeof o.errorResponse.error.description == "string") {
                const a = pr(o.errorResponse.error.description),
                    l = Pt(o.errorResponse.error.description),
                    s = {
                        description: a,
                        message: l ? Dt : vt,
                        errorDetails: null,
                        trace: r
                    };
                return o.errorDetails !== null && (s.errorDetails = o.errorDetails), s
            }
        } else r.push(q("FailedCheck", "endpoint !== null"));
        return {
            message: vt,
            description: Qo,
            errorDetails: (i = o == null ? void 0 : o.errorDetails) != null ? i : null,
            trace: r
        }
    }
    async function br(e, t, n, o, r) {
        const i = await In(e, t, n, r);
        let c = null;
        return i.status === "success" && i.cart !== null && (c = {
            shopUrl: Ft(),
            cart: i.cart,
            offerCode: o
        }), {
            payload: c,
            status: i.status,
            message: i.message,
            description: i.description
        }
    }
    async function wr(e) {
        try {
            if (typeof e.redirect != "boolean" && (e.redirect = !0), typeof e.userName == "string" && typeof e.password == "string" && typeof e.redirect == "boolean") {
                const t = ee(window.location.origin + "/account/login");
                if (t === null) return;
                const n = {
                        form_type: "customer_login",
                        utf8: "\u2713",
                        "customer[email]": e.userName,
                        "customer[password]": e.password,
                        return_url: "/account"
                    },
                    o = new URLSearchParams(n).toString(),
                    r = {
                        credentials: "same-origin",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        body: o,
                        redirect: "follow"
                    };
                (await (await fetch(t.href, r)).text()).includes("Incorrect email or password.") && qt({
                    message: "Incorrect email or password for shopify login",
                    user: e.userName
                })
            }
        } catch (t) {
            console.log("Error while logging in: ", t)
        }
    }
    async function yr() {
        try {
            await fetch("/account/logout")
        } catch {
            console.error("Failed to logout user")
        }
    }
    const Ue = {
        getShopUrl: Ft,
        isShopifyShop: ur,
        getCart: In,
        getPageType: rr,
        clearCart: On,
        createCheckout: mr,
        analyticsEndpoint: or,
        getShopConfigId: fr,
        getCreateCheckoutPayload: br,
        login: wr,
        logout: yr
    };

    function vr(e) {
        const t = $e();
        return e !== null && e.totalQuantity === 0 ? (t.message = kn, t.description = En, t) : null
    }

    function _r(e) {
        const t = $e();
        if (e !== null) {
            const n = vr(e);
            if (n !== null) return n;
            t.cart = e, t.status = "success", t.statusIcon = "", t.message = ""
        } else t.trace.push(q("FailedCheck", "cartData !== null"));
        return t
    }
    const Cr = {
            getCart: _r
        },
        Le = Ot({
            shopConfigLoad: !1,
            dataAttributesLoad: !1,
            initContextStore: !1,
            initAtomsStore: !1,
            isPostRedirection: !1
        }),
        lt = "atomsSt",
        Ht = "bzCartRec";
    let et = null;
    async function kr(e, t, n, o) {
        let r = $e();
        const i = me();
        switch (i) {
            case "shopify":
                r = await Ue.getCart(e, t, n, o);
                break;
            case "shopifystorefront":
                r = Cr.getCart(e);
                break;
            case "magento":
                r = e !== null ? {
                    cart: e,
                    status: "success",
                    message: "Cart retrieved successfully",
                    description: "Cart retrieved successfully from the plugin",
                    errorDetails: null,
                    trace: [],
                    statusIcon: ""
                } : r;
                break
        }
        return Bt("getCart", { ...r,
            platform: i,
            errorDetails: { ...r.errorDetails,
                cause: r.errorDetails !== null && (K(r.errorDetails.cause) || typeof r.errorDetails.cause == "string") ? r.errorDetails.cause : null
            }
        }), r
    }
    async function Er() {
        switch (me()) {
            case "shopify":
                await Ue.clearCart();
                break
        }
    }

    function zr() {
        return Ut() === "beta" ? xn + "/api/analytics" : Sn + "/api/analytics"
    }

    function tt(e) {
        const t = new Headers;
        t.append("content-type", "application/json"), t.append("x-shop-url", Be());
        const n = {
            method: "POST",
            headers: t,
            body: JSON.stringify(e),
            keepalive: !0
        };
        fetch(zr(), n).catch(o => console.log(String(o)))
    }

    function _t(e, t) {
        const n = Ie(Ee);
        return {
            context: "App",
            eventData: e,
            sessionId: n.sessionId,
            sessionToken: null,
            infoType: t,
            serialNumber: 0
        }
    }

    function Bt(e, t) {
        const o = _t({
            event: "Info",
            source: e,
            value: t
        }, "Info");
        tt(o)
    }

    function Sr(e, t) {
        const o = _t({
            event: "Info",
            source: e,
            value: t
        }, "Info");
        tt(o)
    }

    function qt(e) {
        const n = _t({
            event: "Error",
            source: "breezePlugin",
            value: e
        }, "Error");
        tt(n)
    }

    function jt(e, t, n = null) {
        const o = {
                event: "Error",
                source: "breezePlugin",
                value: {
                    source: e,
                    trace: n,
                    ...t
                }
            },
            r = _t(o, "Error");
        tt(r)
    }

    function xr(e) {
        const n = {
            context: "App",
            eventData: {
                event: "Click",
                source: "breezeButton",
                value: {
                    merchant: Be()
                }
            },
            sessionId: e,
            sessionToken: null,
            infoType: "Info",
            serialNumber: 0
        };
        tt(n)
    }

    function Dn(e, t, n) {
        const o = {
            context: "App",
            eventData: {
                event: "Click",
                source: e,
                value: {
                    merchant: Be(),
                    page: t
                }
            },
            sessionId: n,
            sessionToken: null,
            infoType: "Info",
            serialNumber: 0
        };
        tt(o)
    }

    function Un() {
        try {
            const e = window.localStorage,
                t = "__storage_test__";
            return e.setItem(t, t), e.removeItem(t), !0
        } catch {
            return !1
        }
    }

    function Ar(e) {
        try {
            const t = new Date;
            t.setTime(t.getTime() + -1 * 24 * 60 * 60 * 1e3);
            const n = "; expires=" + t.toString();
            document.cookie = e + "=" + n + "; path=/"
        } catch {
            console.log("Failed to clear the cookie.")
        }
    }

    function Rr(e) {
        if (e) {
            if (Un()) {
                const t = localStorage.getItem("ghost");
                return typeof t == "string" && t === "samurai"
            }
            try {
                return navigator.userAgent.includes("ghost=samurai")
            } catch (t) {
                console.error("Error accessing navigator: ", t)
            }
        }
        return !0
    }

    function ze(e) {
        return e.toLowerCase() === "true"
    }

    function Ir() {
        switch (me()) {
            case "shopify":
                return Ue.getPageType();
            default:
                return "Checkout"
        }
    }

    function Nr() {
        const e = {
            "font-family": "Euclid Circular A",
            src: "https://sdk.breeze.in/gallery/fonts/EuclidCircularA-Regular.woff2",
            "font-weight": "400",
            "font-display": "swap"
        };
        Or([e, { ...e,
            "font-weight": "500",
            src: e.src.replace("-Regular.woff2", "-Medium.ttf")
        }, { ...e,
            "font-weight": "600",
            src: e.src.replace("-Regular", "-SemiBold")
        }])
    }

    function Or(e) {
        e.forEach(t => {
            const n = document.createElement("style");
            n.appendChild(document.createTextNode("      @font-face {          font-family: " + t["font-family"] + ";          src: url('" + t.src + "') format('woff2');          font-weight: " + t["font-weight"] + ";          font-display: " + t["font-display"] + ";        }      ")), document.head.appendChild(n)
        })
    }

    function at(e) {
        try {
            if (e.length === 0) return null;
            if (me() !== "magento" && me() !== "shopifystorefront") {
                const t = window.atob(e);
                return JSON.parse(t)
            }
            return JSON.parse(e)
        } catch (t) {
            console.error(`Failed parsing input string: ${e} : `, String(t))
        }
        return null
    }

    function Dr(e) {
        try {
            const t = window.atob(e);
            return JSON.parse(t)
        } catch (t) {
            console.error(`Failed parsing input string: ${e} : `, String(t))
        }
        return null
    }

    function Ur(e) {
        e.checkoutId = null, Ee.update(o => ({ ...o,
            ...e
        })), W.update(o => ({ ...o,
            recoverCart: null
        }));
        const t = window.btoa(JSON.stringify(e)),
            n = ee(window.location.href);
        n !== null && n.searchParams.get(lt) !== null && (n.searchParams.set(lt, t), n.searchParams.delete(Ht), window.history.replaceState({
            path: n.href
        }, "", n.href))
    }

    function Lr(e, t) {
        e.checkoutId = t, Ee.update(r => ({ ...r,
            ...e
        }));
        const n = window.btoa(JSON.stringify(e)),
            o = ee(window.location.href);
        o !== null && (o.searchParams.set(lt, n), window.history.replaceState({
            path: o.href
        }, "", o.href))
    }

    function Mr() {
        window.addEventListener("pageshow", function(e) {
            e.persisted && window.location.reload()
        })
    }

    function ut(e) {
        try {
            const t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
            if (t) return t[2]
        } catch {
            console.error("unable to access cookies")
        }
    }

    function ae(e) {
        const t = ee(window.location.href);
        return t !== null ? t.searchParams.get(e) : null
    }

    function Fr(e) {
        const t = new Map;
        return e.split("&").forEach(o => {
            const [r, i] = o.split("=");
            typeof r < "u" && typeof i < "u" && t.set(r, i)
        }), t
    }

    function Pr(e) {
        const t = ee(e);
        let n = null;
        return t !== null && (n = t.host.split(".").at(0)), n != null ? n : null
    }

    function Hr() {
        switch (me()) {
            case "shopify":
                return Ue.getShopConfigId();
            default:
                return Pr(window.location.origin)
        }
    }
    async function Br() {
        let e = null;
        try {
            const t = `https://sdk.breeze.in/configs/${Hr()}/config.json`,
                n = await fetch(t);
            n.status === 200 && (e = await n.text())
        } catch (t) {
            console.error("Error fetching Shop Configuration:", t)
        }
        return e
    }
    async function qr() {
        let e = null;
        if (Un()) {
            const t = localStorage.getItem("breeze::ShopConfig");
            if (typeof t == "string") return t
        }
        return e = await Br(), e
    }

    function K(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }

    function jr(e) {
        var n;
        const t = e.trim().split(" ");
        return {
            firstName: (n = t.at(0)) != null ? n : "",
            lastName: t.length > 1 ? t.slice(1).join(" ") : ""
        }
    }

    function Vr(e) {
        var i, c, a, l, s, f, u, m;
        const t = e.address,
            n = e.email,
            o = e.appliedOffer;
        let r = window.location.protocol + "//" + window.location.hostname + "/checkout?";
        if (n && n !== null && (r += "&checkout[email]=" + n), K(t)) {
            const h = typeof t.name == "string" ? t.name : "",
                d = jr(h),
                w = {
                    first_name: d.firstName,
                    last_name: d.lastName,
                    address1: (i = t.line1) != null ? i : "",
                    address2: (c = t.line2) != null ? c : "",
                    city: (a = t.city) != null ? a : "",
                    country: (l = t.country) != null ? l : "",
                    zip: (s = t.postalCode) != null ? s : "",
                    province: (f = t.state) != null ? f : "",
                    phone: String((u = t.countryCode) != null ? u : "") + String((m = t.phoneNumber) != null ? m : "")
                };
            Object.entries(w).forEach(([C, S]) => {
                r += `&checkout[shipping_address][${C}]=${S}`
            })
        }
        o && o !== null && (r += "&discount=" + o), window.location.href = r
    }

    function Jr(e) {
        return "detail" in e
    }

    function Tr(e) {
        const t = new CustomEvent("breezeEvent", {
            detail: e
        });
        window.dispatchEvent(t)
    }

    function Gr(e) {
        const t = [];
        if (K(e))
            for (const n in e) e[n] === null && t.push(n);
        return t
    }

    function Wr(e) {
        try {
            if (e === null) return;
            const t = JSON.parse(e),
                n = Po(t);
            W.update(o => ({ ...o,
                shopConfiguration: n
            }))
        } catch (t) {
            console.error("Error parsing shop configuration", t)
        }
    }

    function Ln(e, t) {
        return {
            shopUrl: Be(),
            platform: me(),
            offerCode: t,
            checkoutHidden: !e.isCheckoutVisible,
            shopDomain: e.shopDomain,
            eventName: "set-platform-store-data"
        }
    }

    function Qr() {
        try {
            if (Ie(Le).dataAttributesLoad) return;
            Le.update(r => ({ ...r,
                dataAttributesLoad: !0
            }));
            const t = document.getElementById("breeze-script-tag"),
                n = ["ga-version", "enable-external-trackers", "enable-snap-tracker", "enable-ga", "enable-fbp", "emit-tracker-events", "ga4-measurement-id", "enable-thought-metric"],
                o = {};
            if (t !== null) {
                const r = yt(t.getAttribute("data-platform")),
                    i = Cn(t.getAttribute("data-environment")),
                    c = x(t.getAttribute("data-shopurl")),
                    a = x(t.getAttribute("data-enablebreezelogin")),
                    l = x(t.getAttribute("data-merchantid"));
                n.forEach(f => {
                    const u = x(t.getAttribute("data-" + f));
                    u !== null && W.update(m => (o[Yr(f)] = u, m))
                });
                const s = Mo(o);
                if (r !== null && i !== null && s !== null && (W.update(f => ({ ...f,
                        platform: r,
                        appEnvironment: i,
                        externalTrackerConfig: s,
                        enableBreezeLogin: a !== null ? a === "true" : null,
                        merchantId: l
                    })), r === "shopifystorefront" && c !== null)) {
                    const f = {
                        shopUrl: c,
                        shopType: r
                    };
                    Ee.update(u => ({ ...u,
                        ...f
                    }))
                }
            }
        } catch (e) {
            console.error("Error parsing shop configuration", e)
        }
    }

    function Yr(e) {
        return e.replace(/-(.)/g, (t, n) => n.toUpperCase())
    }

    function Xr() {
        W.update(e => ({ ...e,
            isCheckoutVisible: !0
        }))
    }

    function Kr() {
        W.update(e => ({ ...e,
            isCheckoutVisible: !1
        }))
    }

    function Vt(e, t) {
        var n;
        (n = e.contentWindow) == null || n.postMessage(JSON.stringify(t), "*")
    }

    function Zr(e, t, n) {
        t.cart !== null && Vt(e, {
            eventName: "set-cart-data",
            cart: t.cart,
            offerCode: n
        })
    }

    function $r(e) {
        Vt(e, {
            eventName: "start-checkout"
        })
    }

    function ei(e) {
        Vt(e, {
            eventName: "reset-checkout"
        })
    }
    async function Mn(e) {
        switch (me()) {
            case "shopify":
                await Ue.login(e), Pn();
                break
        }
    }
    async function ti() {
        switch (me()) {
            case "shopify":
                await Ue.logout(), Pn();
                break
        }
    }

    function Fn(e) {
        const t = new CustomEvent("breezeEvent", {
            detail: e
        });
        window.dispatchEvent(t)
    }

    function Pn() {
        W.update(e => ({ ...e,
            reloadStoreOnClose: !0
        }))
    }

    function Hn(e) {
        Le.update(t => ({ ...t,
            isPostRedirection: e
        }))
    }

    function ni(e) {
        if (e.cycleFetchType) {
            const t = e.retries % e.apiCallerMethodOrder.length;
            if (e.apiCallerMethodOrder[t] === "NativeFetch") return [Tt(), "NativeFetch"]
        }
        return [fetch, "Fetch"]
    }
    async function Jt(e, t, n, o = void 0, r = Vo) {
        var i;
        try {
            r.isInitialAttempt && (Bt(e, {
                event: "NetworkCallRequest",
                url: t.url + "",
                body: JSON.stringify(t.body),
                headers: JSON.stringify(t.headers)
            }), r.isInitialAttempt = !1);
            const [c, a] = ni(r);
            r.trace.push(q("Info", "Using apiCallerMethod " + a));
            const l = await ct.call(t, n, o, c);
            return l instanceof Ze || l.response !== null && !r.retryErrorResponse ? (r.trace.push(q("CaseMatch", "apiResponse instanceof APISuccess || (apiResponse instanceof APIFailure && apiResponse.response !== null && !retryOptions.retryErrorResponse)")), Bt(e, {
                event: "NetworkCallResponse",
                url: t.url + "",
                response: JSON.stringify(l),
                trace: r.trace,
                isSuccess: l instanceof Ze
            }), l) : (r.trace.push(q("Failure", "retries: " + r.retries + " | " + l.errorResponse)), (r.retries > 0 ? "Retry" : "Exhausted") === "Retry" ? new Promise(f => {
                setTimeout(async u => {
                    const m = await Jt(e, t, n, o, { ...u,
                        retries: u.retries - 1
                    });
                    u.trace.push(q("AsyncEvent", "callWithRetries retry settimeout elapsed | retries: " + u.retries + " | resp: " + JSON.stringify(m.response))), f(m)
                }, r.retryDelay, r)
            }) : (jt(e, l, r.trace), l))
        } catch (c) {
            let a = null;
            if (c instanceof Error) {
                const l = {
                    cause: c.cause,
                    class: "UnhandledException",
                    name: c.name,
                    stack: (i = c.stack) != null ? i : null,
                    message: c.message
                };
                a = new He("Exception in network call", -1, null, c, 0, l)
            }
            return a === null && (a = new He("Unknown exception", -1, null, c, 0, null)), r.trace.push(q("Failure", "Caught exception in callWithRetries")), jt(e, a, r.trace), a
        }
    }

    function Tt() {
        var e, t;
        if (et !== null) return et;
        try {
            const n = document.createElement("iframe");
            return n.name = "nativeRetriever", n.style.display = "none", n.src = "about:blank", document.body.appendChild(n), et = (t = (e = n.contentWindow) == null ? void 0 : e.fetch) != null ? t : null, et != null ? et : fetch
        } catch (n) {
            return qt({
                message: "Unable to retrieve native fetch method from iframe",
                rawResponse: JSON.stringify(n)
            }), fetch
        }
    }

    function Bn(e) {
        let t, n;
        return t = new Nt({
            props: {
                properties: e[0].buttonProperties
            }
        }), t.$on("click", e[1]), {
            c() {
                Fe(t.$$.fragment)
            },
            m(o, r) {
                Oe(t, o, r), n = !0
            },
            p(o, r) {
                const i = {};
                r & 1 && (i.properties = o[0].buttonProperties), t.$set(i)
            },
            i(o) {
                n || (B(t.$$.fragment, o), n = !0)
            },
            o(o) {
                J(t.$$.fragment, o), n = !1
            },
            d(o) {
                De(t, o)
            }
        }
    }

    function oi(e) {
        let t, n, o, r, i, c, a = e[0].statusText + "",
            l, s, f, u = e[0].statusDescription + "",
            m, h, d = e[0].buttonProperties !== null && Bn(e);
        return {
            c() {
                t = z("div"), n = z("div"), o = z("img"), i = G(), c = z("div"), l = ie(a), s = G(), f = z("div"), m = G(), d && d.c(), this.c = I, ne(o.src, r = e[0].statusIcon) || p(o, "src", r), p(o, "alt", "status"), p(o, "class", "breeze-status-img"), p(n, "class", "breeze-status-img-container"), p(c, "class", "breeze-status-text"), p(f, "class", "breeze-status-description"), p(t, "class", "breeze-status")
            },
            m(w, C) {
                N(w, t, C), v(t, n), v(n, o), v(t, i), v(t, c), v(c, l), v(t, s), v(t, f), f.innerHTML = u, v(t, m), d && d.m(t, null), h = !0
            },
            p(w, [C]) {
                (!h || C & 1 && !ne(o.src, r = w[0].statusIcon)) && p(o, "src", r), (!h || C & 1) && a !== (a = w[0].statusText + "") && Ce(l, a), (!h || C & 1) && u !== (u = w[0].statusDescription + "") && (f.innerHTML = u), w[0].buttonProperties !== null ? d ? (d.p(w, C), C & 1 && B(d, 1)) : (d = Bn(w), d.c(), B(d, 1), d.m(t, null)) : d && (Ye(), J(d, 1, 1, () => {
                    d = null
                }), Xe())
            },
            i(w) {
                h || (B(d), h = !0)
            },
            o(w) {
                J(d), h = !1
            },
            d(w) {
                w && H(t), d && d.d()
            }
        }
    }

    function ri(e, t, n) {
        const o = xt();
        let {
            properties: r = bn
        } = t;
        mt(() => {
            Sr("breezePluginStatusWidget", r)
        });

        function i() {
            o("buttonClick")
        }
        return e.$$set = c => {
            "properties" in c && n(0, r = c.properties)
        }, [r, i]
    }
    class qn extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, ri, oi, re, {
                properties: 0
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["properties"]
        }
        get properties() {
            return this.$$.ctx[0]
        }
        set properties(t) {
            this.$$set({
                properties: t
            }), y()
        }
    }
    customElements.define("breeze-status-screen", qn);
    const jn = {
        fullScreen: !0,
        brandLogoURL: "/icons/logo.svg",
        brandText: "breeze"
    };

    function ii(e) {
        let t, n, o, r, i, c, a, l = e[0].brandText + "",
            s, f, u, m, h;
        return {
            c() {
                t = z("div"), n = z("div"), o = z("div"), r = z("img"), c = G(), a = z("div"), s = ie(l), f = G(), u = z("div"), m = G(), h = z("div"), h.innerHTML = `<img src="https://sdk.breeze.in/gallery/logos/sec-by-jp-wide.webp" class="sec-by-jp" alt=""/> 
    <img src="https://sdk.breeze.in/gallery/logos/card-networks.webp" class="card-networks" alt=""/>`, this.c = I, ne(r.src, i = e[0].brandLogoURL) || p(r, "src", i), p(r, "alt", ""), p(r, "class", "breeze-brand-loader-img"), p(o, "class", "breeze-brand-loader-text"), p(u, "class", "breeze-brand-loader-progress"), p(n, "class", "breeze-brand-loader-content"), p(h, "class", "breeze-brand-loader-footer"), p(t, "class", "breeze-brand-loader")
            },
            m(d, w) {
                N(d, t, w), v(t, n), v(n, o), v(o, r), v(o, c), v(o, a), v(a, s), v(n, f), v(n, u), v(t, m), v(t, h)
            },
            p(d, [w]) {
                w & 1 && !ne(r.src, i = d[0].brandLogoURL) && p(r, "src", i), w & 1 && l !== (l = d[0].brandText + "") && Ce(s, l)
            },
            i: I,
            o: I,
            d(d) {
                d && H(t)
            }
        }
    }

    function si(e, t, n) {
        let {
            properties: o = jn
        } = t;
        return e.$$set = r => {
            "properties" in r && n(0, o = r.properties)
        }, [o]
    }
    class Vn extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, si, ii, re, {
                properties: 0
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["properties"]
        }
        get properties() {
            return this.$$.ctx[0]
        }
        set properties(t) {
            this.$$set({
                properties: t
            }), y()
        }
    }
    customElements.define("breeze-brand-loader", Vn);

    function ci() {
        return typeof window.fbq < "u"
    }

    function li(e) {
        ui(e), ai(e)
    }

    function ai(e) {
        let t = e.currentLocation,
            n = "https://www.facebook.com/tr/?ev=PageView";
        switch (e.event) {
            case "AddPaymentInfo":
                t = t + "?previous_step=shipping_method&step=payment_method", n = n + "&dl=" + t, e.userDetails !== null && n.concat("&ud[em]=", e.userDetails.email).concat("&ud[fn]=", e.userDetails.name).concat("&ud[ln]=").concat("&ud[ct]=", e.userDetails.city).concat("&ud[ph]=", e.userDetails.phone).concat("&ud[st]=", e.userDetails.state).concat("&ud[country]=", e.userDetails.countryCode).concat("&ud[zp]=", e.userDetails.postalCode);
                break;
            case "Purchase":
                t = t + "/thank_you", n = n + "&dl=" + t, e.userDetails !== null && n.concat("&ud[em]=", e.userDetails.email).concat("&ud[fn]=", e.userDetails.name).concat("&ud[ln]=").concat("&ud[ct]=", e.userDetails.city).concat("&ud[ph]=", e.userDetails.phone).concat("&ud[st]=", e.userDetails.state).concat("&ud[country]=", e.userDetails.countryCode).concat("&ud[zp]=", e.userDetails.postalCode);
                break;
            default:
                n = n + "&dl=" + t;
                break
        }
        try {
            if (window.fbq && window.fbq.getState) {
                const i = window.fbq.getState().pixels[0].id,
                    c = ut("_fbp");
                n = n + "&id=" + i, c && (n = n + "&fbp=" + c)
            }
        } catch {
            console.error("failed to create facebook pixel url.")
        }
        const o = document.createElement("img"),
            r = document.querySelector("body");
        r && (o.src = n, o.width = 1, o.height = 1, o.style.display = "none", r.appendChild(o))
    }

    function ui(e) {
        const t = e.items.map(n => n.id);
        window.fbq && window.fbq("track", e.event, {
            content_type: "product_group",
            value: e.totalPrice,
            content_ids: t,
            contents: e.items,
            num_items: e.itemCount,
            currency: e.currency
        }, {
            eventID: e.sessionId
        })
    }

    function fi() {
        return typeof window.gtag < "u"
    }

    function di() {
        return typeof window.ga < "u"
    }

    function hi(e, t) {
        const n = t.ga4MeasurementId;
        switch (e.event) {
            case "InitiateCheckout":
                if (window.gtag) {
                    const o = Gt(e.items);
                    window.gtag("event", "begin_checkout", {
                        send_to: n,
                        currency: e.currency,
                        value: e.totalPrice,
                        items: o,
                        breeze_event_type: "breeze_checkout_initiated",
                        breeze_event_time: new Date().toISOString()
                    }), window.gtag("event", "add_shipping_info", {
                        send_to: n,
                        currency: e.currency,
                        value: e.totalPrice,
                        items: o,
                        breeze_event_type: "breeze_add_shipping_info",
                        breeze_event_time: new Date().toISOString()
                    })
                }
                break;
            case "AddPaymentInfo":
                if (window.gtag) {
                    const o = Gt(e.items);
                    window.gtag("event", "add_payment_info", {
                        send_to: n,
                        currency: e.currency,
                        value: e.totalPrice,
                        items: o,
                        breeze_event_type: "breeze_add_payment_info",
                        breeze_event_time: new Date().toISOString()
                    })
                }
                break;
            case "Purchase":
                if (window.gtag) {
                    const o = Gt(e.items);
                    window.gtag("event", "purchase", {
                        send_to: n,
                        transaction_id: e.shopOrderId,
                        value: e.totalPrice,
                        currency: e.currency,
                        shipping: e.shippingCharge,
                        items: o,
                        breeze_event_type: "breeze_purchase",
                        breeze_event_time: new Date().toISOString()
                    })
                }
                break
        }
    }

    function gi(e) {
        const t = e.currentLocation;
        switch (e.event) {
            case "InitiateCheckout":
                if (window.ga) {
                    const n = window.ga.getAll()[0].get("trackingId");
                    window.ga("create", n, "auto"), window.ga("require", "ec", null), window.ga("ec:setAction", "checkout", {
                        step: 1
                    }), e.items.forEach(function(o) {
                        const r = Ct(o);
                        if (window.ga) return window.ga("ec:addProduct", r, null)
                    }), window.ga("send", "pageview", {
                        page: "/checkout/contact_information"
                    }), window.ga("send", "event", {
                        eventCategory: "All",
                        eventAction: "Viewed Checkout - Contact Information Page",
                        eventValue: e.totalPrice,
                        eventLabel: void 0,
                        nonInteraction: !0
                    }), window.ga("send", "event", {
                        eventCategory: "EnhancedEcommerce",
                        eventAction: "Started Order",
                        eventLabel: "breeze_checkout_initiated",
                        eventValue: e.totalPrice,
                        nonInteraction: !0
                    }), window.ga("ec:setAction", "checkout", {
                        step: 2
                    }), e.items.forEach(function(o) {
                        const r = Ct(o);
                        if (window.ga) return window.ga("ec:addProduct", r, null)
                    }), window.ga("send", "pageview", {
                        page: "/checkout/shipping"
                    }), window.ga("send", "event", {
                        eventAction: "Viewed Checkout - Shipping Page",
                        eventCategory: "All",
                        eventLabel: void 0,
                        eventValue: e.totalPrice,
                        nonInteraction: !0
                    }), window.ga("ec:setAction", "checkout", {
                        id: e.sessionId,
                        revenue: e.totalPrice,
                        tax: "0.00",
                        shipping: String(e.shippingCharge),
                        coupon: ""
                    })
                }
                break;
            case "AddPaymentInfo":
                if (window.ga) {
                    const n = window.ga.getAll()[0].get("trackingId");
                    window.ga("create", n, "auto"), window.ga("require", "ec", null), window.ga("ec:setAction", "checkout", {
                        step: 3
                    }), e.items.forEach(function(o) {
                        const r = Ct(o);
                        if (window.ga) return window.ga("ec:addProduct", r, null)
                    }), window.ga("send", "pageview", {
                        page: "/checkout/payment"
                    }), window.ga("send", "event", {
                        eventAction: "Viewed Checkout - Payment Page",
                        eventCategory: "All",
                        eventLabel: "breeze_add_payment_info",
                        eventValue: e.totalPrice,
                        nonInteraction: !0
                    }), window.ga("ec:setAction", "checkout", {
                        id: e.sessionId,
                        revenue: e.totalPrice,
                        tax: "0.00",
                        shipping: String(e.shippingCharge),
                        coupon: ""
                    })
                }
                break;
            case "Purchase":
                if (window.ga) {
                    const n = window.ga.getAll()[0].get("trackingId");
                    window.ga("create", n, "auto"), window.ga("require", "ec", null), window.ga("send", "event", {
                        eventAction: "Viewed Checkout - Receipt Page",
                        eventCategory: "All",
                        eventLabel: void 0,
                        eventValue: e.totalPrice,
                        nonInteraction: !0
                    }), window.ga("send", "pageview", {
                        page: "/checkout/thank_you"
                    }), e.items.forEach(function(o) {
                        const r = Ct(o);
                        if (window.ga) return window.ga("ec:addProduct", r, null)
                    }), window.ga("ec:setAction", "purchase", {
                        id: e.shopOrderId,
                        revenue: e.totalPrice,
                        tax: "0.00",
                        shipping: String(e.shippingCharge),
                        coupon: "",
                        currency: e.currency,
                        numitems: e.items.length
                    }), window.ga("send", "event", {
                        eventCategory: "EnhancedEcommerce",
                        eventAction: "Completed Order",
                        eventLabel: "breeze_purchase",
                        eventValue: e.totalPrice,
                        nonInteraction: !0
                    })
                }
                break;
            default:
                window.ga && window.ga("send", "pageview", {
                    page: t
                });
                break
        }
    }

    function Gt(e) {
        const t = [];
        return e.forEach(function(n) {
            const o = pi(n);
            t.push(o)
        }), t
    }

    function pi(e) {
        return {
            item_id: String(e.id),
            item_name: e.name,
            item_variant: String(e.variant),
            price: e.price,
            quantity: e.quantity
        }
    }

    function Ct(e) {
        return {
            id: String(e.id),
            name: e.name,
            variant: String(e.variant),
            price: e.price,
            quantity: e.quantity,
            currency: e.currency
        }
    }

    function mi() {
        return typeof window.snaptr < "u"
    }

    function bi(e) {
        wi(e)
    }

    function wi(e) {
        var n, o, r, i, c, a, l, s, f, u, m, h, d, w, C, S, L, O, A, _, R, M, Q, j, T, F, Y, ue, Z, P, be, we, qe, Se, xe, Ae;
        const t = e.items.map(ye => ye.id);
        switch (e.event) {
            case "InitiateCheckout":
                window.snaptr && (e.hashedEmailAddress && e.hashedPhoneNumber ? window.snaptr("track", "START_CHECKOUT", {
                    user_hashed_email: e.hashedEmailAddress,
                    user_hashed_phone_number: e.hashedPhoneNumber,
                    firstname: (n = e.userDetails) == null ? void 0 : n.name,
                    geo_city: (o = e.userDetails) == null ? void 0 : o.city,
                    geo_region: (r = e.userDetails) == null ? void 0 : r.city,
                    geo_postal_code: (i = e.userDetails) == null ? void 0 : i.postalCode,
                    geo_country: (c = e.userDetails) == null ? void 0 : c.countryCode,
                    item_ids: t,
                    currency: e.currency,
                    price: e.totalPrice,
                    number_items: e.itemCount,
                    integration: "shopify-native"
                }) : window.snaptr("track", "START_CHECKOUT", {
                    user_email: (a = e.userDetails) == null ? void 0 : a.email,
                    user_phone_number: (l = e.userDetails) == null ? void 0 : l.phone,
                    firstname: (s = e.userDetails) == null ? void 0 : s.name,
                    geo_city: (f = e.userDetails) == null ? void 0 : f.city,
                    geo_region: (u = e.userDetails) == null ? void 0 : u.city,
                    geo_postal_code: (m = e.userDetails) == null ? void 0 : m.postalCode,
                    geo_country: (h = e.userDetails) == null ? void 0 : h.countryCode,
                    item_ids: t,
                    currency: e.currency,
                    price: e.totalPrice,
                    number_items: e.itemCount,
                    integration: "shopify-native"
                }));
                break;
            case "AddPaymentInfo":
                window.snaptr && (e.hashedEmailAddress && e.hashedPhoneNumber ? window.snaptr("track", "ADD_BILLING", {
                    user_hashed_email: e.hashedEmailAddress,
                    user_hashed_phone_number: e.hashedPhoneNumber,
                    firstname: (d = e.userDetails) == null ? void 0 : d.name,
                    geo_city: (w = e.userDetails) == null ? void 0 : w.city,
                    geo_region: (C = e.userDetails) == null ? void 0 : C.state,
                    geo_postal_code: (S = e.userDetails) == null ? void 0 : S.postalCode,
                    geo_country: (L = e.userDetails) == null ? void 0 : L.countryCode,
                    currency: e.currency,
                    price: e.totalPrice,
                    integration: "shopify-native"
                }) : window.snaptr("track", "ADD_BILLING", {
                    user_email: (O = e.userDetails) == null ? void 0 : O.email,
                    user_phone_number: (A = e.userDetails) == null ? void 0 : A.phone,
                    firstname: (_ = e.userDetails) == null ? void 0 : _.name,
                    geo_city: (R = e.userDetails) == null ? void 0 : R.city,
                    geo_region: (M = e.userDetails) == null ? void 0 : M.state,
                    geo_postal_code: (Q = e.userDetails) == null ? void 0 : Q.postalCode,
                    geo_country: (j = e.userDetails) == null ? void 0 : j.countryCode,
                    currency: e.currency,
                    price: e.totalPrice,
                    integration: "shopify-native"
                }));
                break;
            case "Purchase":
                window.snaptr && (e.hashedEmailAddress && e.hashedPhoneNumber ? window.snaptr("track", "PURCHASE", {
                    user_hashed_email: e.hashedEmailAddress,
                    user_hashed_phone_number: e.hashedPhoneNumber,
                    firstname: (T = e.userDetails) == null ? void 0 : T.name,
                    geo_city: (F = e.userDetails) == null ? void 0 : F.city,
                    geo_region: (Y = e.userDetails) == null ? void 0 : Y.state,
                    geo_postal_code: (ue = e.userDetails) == null ? void 0 : ue.postalCode,
                    geo_country: (Z = e.userDetails) == null ? void 0 : Z.countryCode,
                    item_ids: t,
                    currency: e.currency,
                    price: e.totalPrice,
                    number_items: e.itemCount,
                    integration: "shopify-native"
                }) : window.snaptr("track", "PURCHASE", {
                    user_email: (P = e.userDetails) == null ? void 0 : P.email,
                    user_phone_number: (be = e.userDetails) == null ? void 0 : be.phone,
                    firstname: (we = e.userDetails) == null ? void 0 : we.name,
                    geo_city: (qe = e.userDetails) == null ? void 0 : qe.city,
                    geo_region: (Se = e.userDetails) == null ? void 0 : Se.state,
                    geo_postal_code: (xe = e.userDetails) == null ? void 0 : xe.postalCode,
                    geo_country: (Ae = e.userDetails) == null ? void 0 : Ae.countryCode,
                    item_ids: t,
                    currency: e.currency,
                    price: e.totalPrice,
                    number_items: e.itemCount,
                    integration: "shopify-native"
                }));
                break
        }
    }

    function yi(e) {
        vi(e)
    }

    function vi(e) {
        try {
            switch (e.event) {
                case "InitiateCheckout":
                    {
                        const t = new CustomEvent("breeze-initiate-checkout", {
                            detail: {
                                data: e
                            }
                        });window.dispatchEvent(t);
                        break
                    }
                case "AddPaymentInfo":
                    {
                        const t = new CustomEvent("breeze-add-payment-info", {
                            detail: {
                                data: e
                            }
                        });window.dispatchEvent(t);
                        break
                    }
                case "Purchase":
                    {
                        const t = new CustomEvent("breeze-purchase", {
                            detail: {
                                data: e
                            }
                        });window.dispatchEvent(t);
                        break
                    }
                default:
                    break
            }
        } catch (t) {
            console.log("error triggering merchant script : ", t)
        }
    }

    function _i() {
        return typeof window.thoughtmetric < "u"
    }

    function Ci(e) {
        ki(e)
    }

    function ki(e) {
        switch (e.event) {
            case "Purchase":
                window.thoughtmetric && window.thoughtmetric("event", "order", {
                    transaction_id: e.shopOrderId,
                    total_price: e.totalPrice,
                    currency: e.currency,
                    orderCurrency: e.currency
                });
                break
        }
    }
    class Wt {
        static send(t) {
            const n = Ie(W);
            n.externalTrackerConfig.enableExternalTrackers && this.senders.forEach(o => {
                o.isEnabled(n.externalTrackerConfig) && (o.isReady() ? (o.sender(t, n.externalTrackerConfig), o.sentEvents.push(t)) : (o.pendingEvents.push(t), this.flushAnalyticsQueue()))
            }), n.externalTrackerConfig.emitTrackerEvents && yi(t)
        }
        static flushAnalyticsQueue() {
            this.flushTimerId === null && (this.flushTimerId = setInterval(() => {
                this.senders.some(n => n.pendingEvents.length > 0) || this.stopFlusher(), this.senders.forEach(n => {
                    n.isReady() ? (n.pendingEvents.forEach(o => {
                        n.sender(o, Ie(W).externalTrackerConfig), n.sentEvents.push(o)
                    }), n.pendingEvents = []) : n.retryAttempts++, n.retryAttempts > 10 && (n.failedEvents = n.pendingEvents, n.pendingEvents = [])
                })
            }, 1e3))
        }
        static stopFlusher() {
            this.flushTimerId !== null && (clearInterval(this.flushTimerId), this.flushTimerId = null)
        }
    }
    X(Wt, "senders", [{
        id: "GTag",
        isReady: fi,
        isEnabled: t => t.enableGa && t.gaVersion !== "old",
        pendingEvents: [],
        sentEvents: [],
        sender: hi,
        failedEvents: [],
        retryAttempts: 0
    }, {
        id: "GA",
        isReady: di,
        isEnabled: t => t.enableGa && t.gaVersion === "old",
        pendingEvents: [],
        sentEvents: [],
        sender: gi,
        failedEvents: [],
        retryAttempts: 0
    }, {
        id: "FBQ",
        isReady: ci,
        isEnabled: t => t.enableFbp,
        pendingEvents: [],
        sentEvents: [],
        sender: li,
        failedEvents: [],
        retryAttempts: 0
    }, {
        id: "SnapTr",
        isReady: mi,
        isEnabled: t => t.enableSnapTracker,
        pendingEvents: [],
        sentEvents: [],
        sender: bi,
        failedEvents: [],
        retryAttempts: 0
    }, {
        id: "TM",
        isReady: _i,
        isEnabled: t => t.enableThoughtMetric,
        pendingEvents: [],
        sentEvents: [],
        sender: Ci,
        failedEvents: [],
        retryAttempts: 0
    }]), X(Wt, "flushTimerId", null);

    function Ei(e) {
        let t, n;
        return t = new qn({
            props: {
                properties: e[5]
            }
        }), t.$on("buttonClick", e[8]), {
            c() {
                Fe(t.$$.fragment)
            },
            m(o, r) {
                Oe(t, o, r), n = !0
            },
            p(o, r) {
                const i = {};
                r[0] & 32 && (i.properties = o[5]), t.$set(i)
            },
            i(o) {
                n || (B(t.$$.fragment, o), n = !0)
            },
            o(o) {
                J(t.$$.fragment, o), n = !1
            },
            d(o) {
                De(t, o)
            }
        }
    }

    function zi(e) {
        let t, n, o;
        return n = new Vn({
            props: {
                properties: e[7]
            }
        }), {
            c() {
                t = z("div"), Fe(n.$$.fragment), p(t, "class", "breeze-panel-overlay")
            },
            m(r, i) {
                N(r, t, i), Oe(n, t, null), o = !0
            },
            p: I,
            i(r) {
                o || (B(n.$$.fragment, r), o = !0)
            },
            o(r) {
                J(n.$$.fragment, r), o = !1
            },
            d(r) {
                r && H(t), De(n)
            }
        }
    }

    function Si(e) {
        let t, n, o, r, i, c, a, l, s, f, u, m;
        const h = [zi, Ei],
            d = [];

        function w(C, S) {
            var L;
            return C[4] ? 0 : (L = C[5].statusText) != null && L.length ? 1 : -1
        }
        return ~(r = w(e)) && (i = d[r] = h[r](e)), {
            c() {
                t = z("div"), n = z("div"), o = z("div"), i && i.c(), c = G(), a = z("iframe"), this.c = I, p(a, "class", "breeze-panel-iframe"), ne(a.src, l = "about:blank") || p(a, "src", l), p(a, "allow", "payment *; otp-credentials *;"), p(a, "title", "Breeze 1 Click Checkout"), p(o, "class", "breeze-panel-content"), p(n, "class", "breeze-panel-container"), k(n, "--frameHeight", e[1] + "px"), p(t, "class", "breeze-panel-background"), k(t, "--frameHeight", e[1] + "px"), k(t, "--panelVisibility", e[6].isCheckoutVisible ? "visible" : "hidden")
            },
            m(C, S) {
                N(C, t, S), v(t, n), v(n, o), ~r && d[r].m(o, null), v(o, c), v(o, a), e[21](a), e[22](n), e[23](t), f = !0, u || (m = [he(o, "click", ao(e[19])), he(o, "keydown", e[20]), he(t, "click", e[9]), he(t, "keydown", e[18])], u = !0)
            },
            p(C, S) {
                e = C;
                let L = r;
                r = w(e), r === L ? ~r && d[r].p(e, S) : (i && (Ye(), J(d[L], 1, 1, () => {
                    d[L] = null
                }), Xe()), ~r ? (i = d[r], i ? i.p(e, S) : (i = d[r] = h[r](e), i.c()), B(i, 1), i.m(o, c)) : i = null), (!f || S[0] & 2) && k(n, "--frameHeight", e[1] + "px"), (!f || S[0] & 2) && k(t, "--frameHeight", e[1] + "px"), (!f || S[0] & 64) && k(t, "--panelVisibility", e[6].isCheckoutVisible ? "visible" : "hidden")
            },
            i(C) {
                f || (B(i), it(() => {
                    !f || (s || (s = fn(n, mn, window.innerWidth <= 600 ? {
                        y: 100
                    } : {
                        x: 250
                    }, !0)), s.run(1))
                }), f = !0)
            },
            o(C) {
                J(i), s || (s = fn(n, mn, window.innerWidth <= 600 ? {
                    y: 100
                } : {
                    x: 250
                }, !1)), s.run(0), f = !1
            },
            d(C) {
                C && H(t), ~r && d[r].d(), e[21](null), e[22](null), C && s && s.end(), e[23](null), u = !1, fe(m)
            }
        }
    }

    function xi(e, t, n) {
        let o, r, i;
        Ne(e, Ee, b => n(33, o = b)), Ne(e, W, b => n(6, r = b)), Ne(e, Le, b => n(34, i = b));
        let {
            productdata: c = null
        } = t, {
            cartdata: a = null
        } = t, {
            customerdata: l = null
        } = t, {
            checkoutmeta: s = null
        } = t, {
            selectedproductvariantdata: f = null
        } = t, {
            offercode: u
        } = t, {
            shopconfiguration: m = null
        } = t, {
            productquantity: h
        } = t, d, w = window.innerHeight, C = "", S = !1, L = !1, O = [], A = null, _ = null, R = "close", M = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/), Q = !0, j = {
            checkoutInitiationPageHref: null,
            enforcedPostalCode: null
        }, T = {}, F = {}, Y = {}, ue = {}, Z = { ...jn,
            fullScreen: !0,
            brandLogoURL: "https://sdk.breeze.in/gallery/logos/breeze.svg"
        }, P = { ...bn,
            statusIcon: zn,
            statusDescription: "Failed to fetch user cart . Please try again"
        };

        function be() {
            let b = 0,
                D = setInterval(() => {
                    A !== null && _ !== null && b < 5 && (n(2, A.style.zIndex = "99999999999999 !important", A), n(3, _.style.zIndex = "99999999999999 !important", _), b++, b === 5 && clearInterval(D))
                }, 500)
        }
        mt(async () => {
            window.addEventListener("resize", xe), window.addEventListener("message", Yt), window.addEventListener("parentCompEvent", kt), W.subscribe(async b => {
                var te;
                if (b.isCheckoutVisible && !S) {
                    if (be(), qe(), je(), ft(), Ve(o), S = !0, i.isPostRedirection) return;
                    const E = await kr(F, T, ue, h);
                    E.status === "success" ? (Zr(d, E, u), $r(d)) : (n(4, Q = !1), n(5, P.statusText = E.message, P), n(5, P.statusIcon = E.statusIcon, P), E.description && n(5, P.statusDescription = E.description, P), E.message === Dt && (n(5, P.statusIcon = "https://sdk.breeze.in/gallery/images/out-of-stock.webp", P), n(5, P.statusDescription = (te = E.description) != null ? te : "Out of Stock", P)), n(5, P.buttonProperties = { ...wt,
                        text: "Close",
                        enable: !0
                    }, P))
                }
                b.isCheckoutVisible || (S = !1);
                const D = {
                    eventName: "set-checkout-visibility",
                    value: b.isCheckoutVisible
                };
                Re(JSON.stringify(D))
            }), n(0, d.src = we(), d), n(4, Q = !1)
        });

        function we() {
            var D;
            let b = ee(Lt());
            return b === null ? Lt() : (o.checkoutId !== null && (b.searchParams.append("checkoutId", o.checkoutId), r.recoverCart !== null && b.searchParams.append(Ht, "" + r.recoverCart)), je(), ft(), Ve(o), b.searchParams.append(lt, window.btoa(JSON.stringify(o))), b.searchParams.append("jour", "chk"), b.searchParams.append("merchantId", (D = r.merchantId) != null ? D : ""), b.searchParams.append("shopUrl", encodeURIComponent(Be())), b.href)
        }

        function qe() {
            try {
                M && (document.body.style.position = "fixed"), document.body.style.overflow = "hidden"
            } catch (b) {
                console.warn("Unable to block scrolling on background page: ", String(b))
            }
        }

        function Se() {
            try {
                M && (document.body.style.position = "initial"), document.body.style.overflow = "initial"
            } catch (b) {
                console.error("Error: ", String(b))
            }
        }

        function xe() {
            n(1, w = window.innerHeight)
        }

        function Ae() {
            n(5, P.statusText = "", P), n(5, P.statusIcon = "", P)
        }

        function ye() {
            Hn(!1), Se(), Ur(o), Kr(), Ae(), ei(d), S = !1, Ie(W).reloadStoreOnClose && window.location.reload()
        }

        function je() {
            j = Do(at(s || "")), T = at(c || ""), F = at(a || ""), Y = at(l || ""), ue = at(f || ""), j.checkoutInitiationPageHref = window.location.origin, j = j, T = T
        }

        function ft() {
            var te, E;
            const b = {};
            j.enforcedPostalCode !== null && (b.enforcedPostalCode = j.enforcedPostalCode), j.checkoutInitiationPageHref !== null && (b.checkoutInitiationPageHref = j.checkoutInitiationPageHref);
            let D = null;
            Y !== null && (typeof Y.id == "string" || typeof Y.email == "string") && (D = {
                id: (te = Y.id) != null ? te : null,
                email: (E = Y.email) != null ? E : null
            }), D !== null && (b.platformCustomer = D), Ee.update(Et => ({ ...Et,
                ...b
            }))
        }

        function Qt() {
            switch (R) {
                case "close":
                    Dn("overlayClick", C, o.sessionId), ye();
                    break;
                case "goto-home":
                    window.location.href = "/";
                    break;
                default:
                    ye();
                    break
            }
        }

        function Yt(b) {
            var te;
            const D = b.data;
            if (D && typeof D == "string") try {
                const E = JSON.parse(D),
                    Et = E == null ? void 0 : E.source,
                    eo = E == null ? void 0 : E.message;
                if (Et && Et === "breeze" && typeof eo == "string") switch (eo) {
                    case "clear-cart":
                        Er(), Tr("clear-cart");
                        break;
                    case "close-app":
                        Dn("crossButton", C, o.sessionId), ye();
                        break;
                    case "show-loader":
                        n(4, Q = !0);
                        break;
                    case "hide-loader":
                        n(4, Q = !1);
                        break;
                    case "open-app":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload),
                                V = U.url,
                                nt = U.type;
                            window.parent.open(V, nt)
                        } catch (U) {
                            console.log(JSON.stringify({
                                key: "payload parsing issue: ",
                                value: U
                            }))
                        }
                        break;
                    case "navigating-to":
                        try {
                            const V = JSON.parse(E == null ? void 0 : E.payload).newRoute;
                            typeof V == "string" && (C = V)
                        } catch (U) {
                            console.log("parse failed for iframe message", String(U))
                        }
                        break;
                    case "navigate":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload),
                                V = U.url,
                                nt = U.target;
                            switch (V) {
                                case "back":
                                    window.history.back();
                                    break;
                                case "forward":
                                    window.history.forward();
                                    break;
                                case "home":
                                    window.location.href = "/";
                                    break;
                                default:
                                    typeof V == "string" && (typeof nt == "string" ? window.open(V, nt) : window.location.href = V);
                                    break
                            }
                        } catch (U) {
                            console.log(JSON.stringify({
                                key: "payload parsing issue: ",
                                value: U
                            }))
                        }
                        break;
                    case "update-state":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload);
                            R = U.overlayAction ? U.overlayAction : R
                        } catch (U) {
                            console.log(JSON.stringify({
                                key: "payload parsing issue: ",
                                value: U
                            }))
                        }
                        break;
                    case "get-shop-configuration":
                        try {
                            if (m !== null) {
                                const U = {
                                    eventName: "shop-configuration",
                                    value: (te = r.shopConfiguration) != null ? te : JSON.parse(m)
                                };
                                Re(JSON.stringify(U))
                            }
                        } catch {
                            console.error("Error Sending message to frame")
                        }
                        break;
                    case "get-frame-metadata":
                        Ve(j);
                        break;
                    case "get-tracker-metadata":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload),
                                V = Ao(U),
                                nt = ut("_fbc"),
                                Gi = ut("_fbp");
                            let to = null;
                            if (window.ga) {
                                const no = window.ga.getAll().at(0);
                                typeof no < "u" && (to = no.get("clientId"))
                            }
                            const Wi = {
                                eventName: "tracker-metadata",
                                externalTrackerEvent: V == null ? void 0 : V.event,
                                checkoutId: V == null ? void 0 : V.checkoutId,
                                fbc: nt,
                                fbp: Gi,
                                gacid: to
                            };
                            Re(JSON.stringify(Wi))
                        } catch {
                            console.error("Error Sending message to frame")
                        }
                        break;
                    case "breeze-event-stream":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload),
                                V = Ro(U);
                            V !== null ? Wt.send(V) : console.error("Error decoding External Analytics Payload.")
                        } catch {
                            console.error("Error SendingAnalyticsPayload")
                        }
                        break;
                    case "open-native-checkout":
                        try {
                            const U = JSON.parse(E == null ? void 0 : E.payload);
                            Vr(U)
                        } catch {
                            console.error("Error Redirecting to shopify")
                        }
                        break;
                    case "app-ready":
                        L = !0, O.filter(U => (Re(U), !1)), Re(JSON.stringify(Ln(r, u)));
                        break;
                    case "set-checkout-id":
                        {
                            const V = JSON.parse(E == null ? void 0 : E.payload).checkoutId;typeof V == "string" && Lr(o, V);
                            break
                        }
                    default:
                        break
                }
            } catch (E) {
                console.log(JSON.stringify({
                    key: "unknown message",
                    value: E
                }))
            }
        }

        function kt(b) {
            var D;
            try {
                if (Jr(b) && typeof b.detail.shopconfiguration == "string" && (n(10, m = b.detail.shopconfiguration), typeof m == "string")) {
                    const te = {
                        eventName: "shop-configuration",
                        value: JSON.parse(m)
                    };
                    (D = d.contentWindow) == null || D.postMessage(JSON.stringify(te), "*")
                }
            } catch {
                console.log("Failed to handle parent component event")
            }
        }

        function Re(b) {
            var D;
            L ? (D = d.contentWindow) == null || D.postMessage(b, "*") : O.push(b)
        }

        function Ve(b) {
            try {
                const D = {
                    eventName: "frame-metadata",
                    value: b
                };
                Re(JSON.stringify(D))
            } catch {
                console.error("Error Sending message to frame")
            }
        }

        function Xt(b) {
            Me.call(this, e, b)
        }

        function Kt(b) {
            Me.call(this, e, b)
        }

        function Zt(b) {
            Me.call(this, e, b)
        }

        function $t(b) {
            Ge[b ? "unshift" : "push"](() => {
                d = b, n(0, d)
            })
        }

        function g(b) {
            Ge[b ? "unshift" : "push"](() => {
                _ = b, n(3, _)
            })
        }

        function $(b) {
            Ge[b ? "unshift" : "push"](() => {
                A = b, n(2, A)
            })
        }
        return e.$$set = b => {
            "productdata" in b && n(11, c = b.productdata), "cartdata" in b && n(12, a = b.cartdata), "customerdata" in b && n(13, l = b.customerdata), "checkoutmeta" in b && n(14, s = b.checkoutmeta), "selectedproductvariantdata" in b && n(15, f = b.selectedproductvariantdata), "offercode" in b && n(16, u = b.offercode), "shopconfiguration" in b && n(10, m = b.shopconfiguration), "productquantity" in b && n(17, h = b.productquantity)
        }, [d, w, A, _, Q, P, r, Z, ye, Qt, m, c, a, l, s, f, u, h, Xt, Kt, Zt, $t, g, $]
    }
    class Ai extends se {
        constructor(t) {
            super();
            const n = document.createElement("style");
            n.textContent = `.breeze-panel-background{z-index:99999999999999 !important;top:0;left:0;bottom:0;height:100vh;width:100vw;position:fixed;background:rgba(0, 0, 0, 0.5);cursor:pointer;visibility:var(--panelVisibility);animation:fadeIn 0.2s}.breeze-panel-container{position:fixed;top:0;right:0;bottom:0;height:100dvh;background:#ffffff;overflow:clip;-webkit-overflow-scrolling:touch;width:50%;max-width:600px;animation:slideIn 0.3s}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes slideIn{0%{transform:translateX(100%)}100%{transform:translateX(0%)}}@keyframes slideUp{0%{transform:translateY(100%)}100%{transform:translateY(0%)}}@supports not (height: 100dvh){.breeze-panel-content{height:100vh}}.breeze-panel-content{width:100%;position:relative;height:100dvh;margin:0px;cursor:default;animation:fadeIn 0.2s}.breeze-panel-iframe{top:0;left:0;bottom:0;width:100%;height:100%;border:0}.breeze-panel-overlay{height:100%;width:100%;z-index:20;width:100%}@media only screen and (max-width: 1200px){.breeze-panel-container{width:70vw}}@media only screen and (max-width: 600px){.breeze-panel-background{height:var(--frameHeight, 100vh)}.breeze-panel-container{width:100vw;height:var(--frameHeight, 100vh);bottom:0;top:0;animation:slideUp 0.3s}}.breeze-brand-loader{height:100dvh;width:100%;display:flex;align-items:center;flex-direction:column}.breeze-brand-loader-content{flex:1;background-color:white;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.breeze-brand-loader-progress{width:8px;height:8px;border-radius:50%;display:block;margin:15px auto;position:relative;color:#4e7397;left:-100px;box-sizing:border-box;animation:shadowRolling 2s linear infinite}@keyframes shadowRolling{0%{box-shadow:0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0)}12%{box-shadow:100px 0 #4e7397, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0)}25%{box-shadow:110px 0 #4e7397, 100px 0 #4e7397, 0px 0 rgba(255, 255, 255, 0),
        0px 0 rgba(255, 255, 255, 0)}36%{box-shadow:120px 0 #4e7397, 110px 0 #4e7397, 100px 0 #4e7397, 0px 0 rgba(255, 255, 255, 0)}50%{box-shadow:130px 0 #4e7397, 120px 0 #4e7397, 110px 0 #4e7397, 100px 0 #4e7397}62%{box-shadow:200px 0 rgba(255, 255, 255, 0), 130px 0 #4e7397, 120px 0 #4e7397, 110px 0 #4e7397}75%{box-shadow:200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 #4e7397,
        120px 0 #4e7397}87%{box-shadow:200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 130px 0 #4e7397}100%{box-shadow:200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0),
        200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0)}}.breeze-brand-loader-footer{display:flex;flex-direction:column;justify-content:center;align-items:center;background:#ffffff;padding-bottom:40px}.sec-by-jp{width:150px;object-fit:contain;margin-bottom:20px}.card-networks{width:65%}@keyframes slideIn{0%{transform:translateX(100%)}100%{transform:translateX(0%)}}.breeze-brand-loader-text{font-size:30px;color:#4e7397;font-family:Euclid Circular A;animation:slideIn 0.7s;display:flex;justify-content:center;align-items:center}.breeze-brand-loader-img{margin-right:10px;height:24px}.breeze-status{flex-direction:column;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'Euclid Circular A';font-size:30px;text-align:center;background-color:#ffffff}.breeze-status-img-container{display:flex;margin-bottom:25px}.breeze-status-img{height:256px;width:256px;object-fit:cover}.breeze-status-text{font-weight:600;color:#2f3841;margin-bottom:8px;font-size:20px;font-family:'Euclid Circular A'}.breeze-status-description{font-weight:400;color:#798fa5;opacity:0.8;padding:0px 42px;margin-bottom:25px;font-size:14px}@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)){.breeze-status{background-color:rgba(255, 255, 255, 0.6);-webkit-backdrop-filter:blur(60px);backdrop-filter:blur(60px)}}.standard-button{font-family:var(--button-font-family, 'Euclid Circular A');font-weight:var(--button-font-weight, 400);font-size:15px;background-color:#ffffff;color:#2f3841;height:var(--button-height, fit-content);padding:10px 12px;border-radius:20px;width:var(--button-width, 130px);cursor:var(--cursor, pointer);opacity:var(--opacity, 1);box-shadow:0px 0px 6px rgba(47, 83, 119, 0.12);display:flex;justify-content:center;align-items:center;flex-direction:row;border-width:0px;gap:var(--button-content-gap, 4px)}.standard-button-icon{height:15px;width:15px;margin-right:3px}`, this.shadowRoot.appendChild(n), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, xi, Si, re, {
                productdata: 11,
                cartdata: 12,
                customerdata: 13,
                checkoutmeta: 14,
                selectedproductvariantdata: 15,
                offercode: 16,
                shopconfiguration: 10,
                productquantity: 17
            }, null, [-1, -1]), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["productdata", "cartdata", "customerdata", "checkoutmeta", "selectedproductvariantdata", "offercode", "shopconfiguration", "productquantity"]
        }
        get productdata() {
            return this.$$.ctx[11]
        }
        set productdata(t) {
            this.$$set({
                productdata: t
            }), y()
        }
        get cartdata() {
            return this.$$.ctx[12]
        }
        set cartdata(t) {
            this.$$set({
                cartdata: t
            }), y()
        }
        get customerdata() {
            return this.$$.ctx[13]
        }
        set customerdata(t) {
            this.$$set({
                customerdata: t
            }), y()
        }
        get checkoutmeta() {
            return this.$$.ctx[14]
        }
        set checkoutmeta(t) {
            this.$$set({
                checkoutmeta: t
            }), y()
        }
        get selectedproductvariantdata() {
            return this.$$.ctx[15]
        }
        set selectedproductvariantdata(t) {
            this.$$set({
                selectedproductvariantdata: t
            }), y()
        }
        get offercode() {
            return this.$$.ctx[16]
        }
        set offercode(t) {
            this.$$set({
                offercode: t
            }), y()
        }
        get shopconfiguration() {
            return this.$$.ctx[10]
        }
        set shopconfiguration(t) {
            this.$$set({
                shopconfiguration: t
            }), y()
        }
        get productquantity() {
            return this.$$.ctx[17]
        }
        set productquantity(t) {
            this.$$set({
                productquantity: t
            }), y()
        }
    }
    customElements.define("breeze-checkout-view", Ai);

    function Ri(e) {
        let t;
        return {
            c() {
                t = ie(e[2])
            },
            m(n, o) {
                N(n, t, o)
            },
            p(n, o) {
                o & 4 && Ce(t, n[2])
            },
            d(n) {
                n && H(t)
            }
        }
    }

    function Ii(e) {
        let t, n, o, r, i, c, a, l, s, f, u, m;
        return s = new Nt({
            props: {
                properties: { ...wt,
                    text: e[2]
                },
                $$slots: {
                    default: [Ri]
                },
                $$scope: {
                    ctx: e
                }
            }
        }), s.$on("click", e[3]), {
            c() {
                t = z("div"), n = z("div"), o = z("div"), r = ie(e[0]), i = G(), c = z("div"), a = G(), l = z("div"), Fe(s.$$.fragment), this.c = I, p(o, "class", "modal-content-header"), p(c, "class", "modal-content-body"), p(l, "class", "modal-content-footer"), p(n, "class", "modal-content"), p(t, "class", "modal")
            },
            m(h, d) {
                N(h, t, d), v(t, n), v(n, o), v(o, r), v(n, i), v(n, c), c.innerHTML = e[1], v(n, a), v(n, l), Oe(s, l, null), f = !0, u || (m = [he(t, "click", e[3]), he(t, "keydown", e[4])], u = !0)
            },
            p(h, [d]) {
                (!f || d & 1) && Ce(r, h[0]), (!f || d & 2) && (c.innerHTML = h[1]);
                const w = {};
                d & 4 && (w.properties = { ...wt,
                    text: h[2]
                }), d & 68 && (w.$$scope = {
                    dirty: d,
                    ctx: h
                }), s.$set(w)
            },
            i(h) {
                f || (B(s.$$.fragment, h), f = !0)
            },
            o(h) {
                J(s.$$.fragment, h), f = !1
            },
            d(h) {
                h && H(t), De(s), u = !1, fe(m)
            }
        }
    }

    function Ni(e, t, n) {
        let {
            header: o
        } = t, {
            content: r
        } = t, {
            ctaText: i
        } = t;
        const c = xt();

        function a() {
            c("close")
        }

        function l(s) {
            Me.call(this, e, s)
        }
        return e.$$set = s => {
            "header" in s && n(0, o = s.header), "content" in s && n(1, r = s.content), "ctaText" in s && n(2, i = s.ctaText)
        }, [o, r, i, a, l]
    }
    class Jn extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Ni, Ii, re, {
                header: 0,
                content: 1,
                ctaText: 2
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["header", "content", "ctaText"]
        }
        get header() {
            return this.$$.ctx[0]
        }
        set header(t) {
            this.$$set({
                header: t
            }), y()
        }
        get content() {
            return this.$$.ctx[1]
        }
        set content(t) {
            this.$$set({
                content: t
            }), y()
        }
        get ctaText() {
            return this.$$.ctx[2]
        }
        set ctaText(t) {
            this.$$set({
                ctaText: t
            }), y()
        }
    }
    customElements.define("breeze-modal", Jn);

    function Tn(e) {
        let t, n, o, r, i, c, a, l = e[0] !== null && Gn(e),
            s = e[2] !== null && Wn(e);
        return {
            c() {
                t = z("div"), n = z("div"), l && l.c(), o = G(), r = z("div"), i = ie(e[1]), c = G(), a = z("div"), s && s.c(), p(n, "class", "list-item-logo"), p(r, "class", "list-item-label"), p(a, "class", "list-item-right-icon"), p(t, "class", "list-item")
            },
            m(f, u) {
                N(f, t, u), v(t, n), l && l.m(n, null), v(t, o), v(t, r), v(r, i), v(t, c), v(t, a), s && s.m(a, null)
            },
            p(f, u) {
                f[0] !== null ? l ? l.p(f, u) : (l = Gn(f), l.c(), l.m(n, null)) : l && (l.d(1), l = null), u & 2 && Ce(i, f[1]), f[2] !== null ? s ? s.p(f, u) : (s = Wn(f), s.c(), s.m(a, null)) : s && (s.d(1), s = null)
            },
            d(f) {
                f && H(t), l && l.d(), s && s.d()
            }
        }
    }

    function Gn(e) {
        let t, n;
        return {
            c() {
                t = z("img"), ne(t.src, n = e[0]) || p(t, "src", n), p(t, "alt", ""), p(t, "class", "list-item-img")
            },
            m(o, r) {
                N(o, t, r)
            },
            p(o, r) {
                r & 1 && !ne(t.src, n = o[0]) && p(t, "src", n)
            },
            d(o) {
                o && H(t)
            }
        }
    }

    function Wn(e) {
        let t, n, o, r;
        return {
            c() {
                t = z("img"), ne(t.src, n = e[2]) || p(t, "src", n), p(t, "alt", ""), p(t, "class", "list-item-right-icon-img")
            },
            m(i, c) {
                N(i, t, c), o || (r = [he(t, "keydown", e[4]), he(t, "click", e[3])], o = !0)
            },
            p(i, c) {
                c & 4 && !ne(t.src, n = i[2]) && p(t, "src", n)
            },
            d(i) {
                i && H(t), o = !1, fe(r)
            }
        }
    }

    function Oi(e) {
        let t, n = e[1] !== null && Tn(e);
        return {
            c() {
                n && n.c(), t = St(), this.c = I
            },
            m(o, r) {
                n && n.m(o, r), N(o, t, r)
            },
            p(o, [r]) {
                o[1] !== null ? n ? n.p(o, r) : (n = Tn(o), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
            },
            i: I,
            o: I,
            d(o) {
                n && n.d(o), o && H(t)
            }
        }
    }

    function Di(e, t, n) {
        let {
            icon: o = null
        } = t, {
            label: r = null
        } = t, {
            rightIcon: i = null
        } = t;
        const c = xt();

        function a() {
            c("rightIconClick")
        }

        function l(s) {
            Me.call(this, e, s)
        }
        return e.$$set = s => {
            "icon" in s && n(0, o = s.icon), "label" in s && n(1, r = s.label), "rightIcon" in s && n(2, i = s.rightIcon)
        }, [o, r, i, a, l]
    }
    class Qn extends se {
        constructor(t) {
            super(), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Di, Oi, re, {
                icon: 0,
                label: 1,
                rightIcon: 2
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["icon", "label", "rightIcon"]
        }
        get icon() {
            return this.$$.ctx[0]
        }
        set icon(t) {
            this.$$set({
                icon: t
            }), y()
        }
        get label() {
            return this.$$.ctx[1]
        }
        set label(t) {
            this.$$set({
                label: t
            }), y()
        }
        get rightIcon() {
            return this.$$.ctx[2]
        }
        set rightIcon(t) {
            this.$$set({
                rightIcon: t
            }), y()
        }
    }
    customElements.define("breeze-offers-list-item", Qn);

    function Yn(e, t, n) {
        const o = e.slice();
        return o[7] = t[n], o
    }

    function Xn(e) {
        let t, n, o, r, i = e[2],
            c = [];
        for (let s = 0; s < i.length; s += 1) c[s] = Kn(Yn(e, i, s));
        const a = s => J(c[s], 1, 1, () => {
            c[s] = null
        });
        let l = e[0] && e[1] !== null && Zn(e);
        return {
            c() {
                t = z("div");
                for (let s = 0; s < c.length; s += 1) c[s].c();
                n = G(), l && l.c(), o = St(), p(t, "class", "offers-container")
            },
            m(s, f) {
                N(s, t, f);
                for (let u = 0; u < c.length; u += 1) c[u] && c[u].m(t, null);
                N(s, n, f), l && l.m(s, f), N(s, o, f), r = !0
            },
            p(s, f) {
                if (f & 12) {
                    i = s[2];
                    let u;
                    for (u = 0; u < i.length; u += 1) {
                        const m = Yn(s, i, u);
                        c[u] ? (c[u].p(m, f), B(c[u], 1)) : (c[u] = Kn(m), c[u].c(), B(c[u], 1), c[u].m(t, null))
                    }
                    for (Ye(), u = i.length; u < c.length; u += 1) a(u);
                    Xe()
                }
                s[0] && s[1] !== null ? l ? (l.p(s, f), f & 3 && B(l, 1)) : (l = Zn(s), l.c(), B(l, 1), l.m(o.parentNode, o)) : l && (Ye(), J(l, 1, 1, () => {
                    l = null
                }), Xe())
            },
            i(s) {
                if (!r) {
                    for (let f = 0; f < i.length; f += 1) B(c[f]);
                    B(l), r = !0
                }
            },
            o(s) {
                c = c.filter(Boolean);
                for (let f = 0; f < c.length; f += 1) J(c[f]);
                J(l), r = !1
            },
            d(s) {
                s && H(t), lo(c, s), s && H(n), l && l.d(s), s && H(o)
            }
        }
    }

    function Kn(e) {
        let t, n;

        function o() {
            return e[6](e[7])
        }
        return t = new Qn({
            props: {
                icon: e[7].icon,
                label: e[7].title,
                rightIcon: e[7].description === "" ? null : "https://sdk.breeze.in/gallery/icons/info.svg"
            }
        }), t.$on("rightIconClick", o), {
            c() {
                Fe(t.$$.fragment)
            },
            m(r, i) {
                Oe(t, r, i), n = !0
            },
            p(r, i) {
                e = r;
                const c = {};
                i & 4 && (c.icon = e[7].icon), i & 4 && (c.label = e[7].title), i & 4 && (c.rightIcon = e[7].description === "" ? null : "https://sdk.breeze.in/gallery/icons/info.svg"), t.$set(c)
            },
            i(r) {
                n || (B(t.$$.fragment, r), n = !0)
            },
            o(r) {
                J(t.$$.fragment, r), n = !1
            },
            d(r) {
                De(t, r)
            }
        }
    }

    function Zn(e) {
        var o;
        let t, n;
        return t = new Jn({
            props: {
                header: e[1].title,
                content: e[1].description + "<br>" + ((o = e[1].tnc) != null ? o : ""),
                ctaText: "Got it!"
            }
        }), t.$on("close", e[4]), {
            c() {
                Fe(t.$$.fragment)
            },
            m(r, i) {
                Oe(t, r, i), n = !0
            },
            p(r, i) {
                var a;
                const c = {};
                i & 2 && (c.header = r[1].title), i & 2 && (c.content = r[1].description + "<br>" + ((a = r[1].tnc) != null ? a : "")), t.$set(c)
            },
            i(r) {
                n || (B(t.$$.fragment, r), n = !0)
            },
            o(r) {
                J(t.$$.fragment, r), n = !1
            },
            d(r) {
                De(t, r)
            }
        }
    }

    function Ui(e) {
        let t, n, o = e[2].length > 0 && Xn(e);
        return {
            c() {
                o && o.c(), t = St(), this.c = I
            },
            m(r, i) {
                o && o.m(r, i), N(r, t, i), n = !0
            },
            p(r, [i]) {
                r[2].length > 0 ? o ? (o.p(r, i), i & 4 && B(o, 1)) : (o = Xn(r), o.c(), B(o, 1), o.m(t.parentNode, t)) : o && (Ye(), J(o, 1, 1, () => {
                    o = null
                }), Xe())
            },
            i(r) {
                n || (B(o), n = !0)
            },
            o(r) {
                J(o), n = !1
            },
            d(r) {
                o && o.d(r), r && H(t)
            }
        }
    }

    function Li(e, t, n) {
        let o, r;
        Ne(e, W, f => n(5, r = f));
        let i = !1,
            c = null;

        function a(f) {
            n(1, c = f), n(0, i = !0)
        }

        function l() {
            n(0, i = !1)
        }
        const s = f => a(f);
        return e.$$.update = () => {
            var f, u;
            e.$$.dirty & 32 && n(2, o = (u = (f = r.shopConfiguration) == null ? void 0 : f.staticOffers) != null ? u : [])
        }, [i, c, o, a, l, r, s]
    }
    class Mi extends se {
        constructor(t) {
            super();
            const n = document.createElement("style");
            n.textContent = ".offers-container{border:1px dotted #8d8d8d;border-radius:4px;padding:0px 16px;font-family:Euclid Circular A;height:fit-content;max-height:225px;overflow:scroll}.list-item{display:flex;flex-direction:row;border-bottom:1px solid #eeeeee;padding:16px 0px}.list-item-logo{height:22px;width:22px;border-radius:50%;margin-right:8px}.list-item-img{height:22px;width:22px}.list-item-right-icon-img{height:16px;width:16px;margin-top:3px;cursor:pointer}.list-item-label{margin-right:6px;font-family:Euclid Circular A}.list-item:last-child{border-bottom:none}.modal{position:fixed;background-color:#00000090;z-index:99999999999999;top:0;bottom:0;left:0;right:0;height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;animation:modal-overlay 0.3s ease-in-out}@keyframes modal-overlay{0%{opacity:0}100%{opacity:1}}.modal-content{background-color:#ffffff;border-radius:8px;height:fit-content;width:fit-content;max-width:800px;max-height:90vh;padding:16px;margin:32px;animation:modal 0.3s ease-in-out}.modal-content-header{font-family:Euclid Circular A;font-size:18px;font-weight:500;padding:12px;border-bottom:1px solid #eeeeee;margin-bottom:12px}.modal-content-body{font-family:Euclid Circular A;font-size:14px;font-weight:400;padding:12px;margin-bottom:12px}.modal-content-footer{display:flex;justify-content:flex-end;padding:12px}.standard-button{font-family:Euclid Circular A;font-weight:400;font-size:15px;background-color:#ffffff;color:#2f3841;height:fit-content;padding:10px 12px;border-radius:4px;width:130px;cursor:pointer;display:flex;justify-content:center;align-items:center;flex-direction:row;border:1px solid #eeeeee}.standard-button-icon{height:15px;width:15px;margin-right:3px}@media only screen and (max-width: 600px){.modal{flex-direction:column;justify-content:flex-end}.modal-content{margin:0px;animation:slideUp 0.2s}}@keyframes slideUp{0%{transform:translateY(100%)}100%{transform:translateY(0%)}}", this.shadowRoot.appendChild(n), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Li, Ui, re, {}, null), t && t.target && N(t.target, this, t.anchor)
        }
    }
    customElements.define("breeze-offers", Mi);

    function Fi(e) {
        let t, n;
        return {
            c() {
                t = z("iframe"), this.c = I, ne(t.src, n = e[3]) || p(t, "src", n), p(t, "title", "Login"), p(t, "class", "login-frame"), k(t, "--height", e[0]), k(t, "--width", e[1])
            },
            m(o, r) {
                N(o, t, r), e[4](t)
            },
            p(o, [r]) {
                r & 1 && k(t, "--height", o[0]), r & 2 && k(t, "--width", o[1])
            },
            i: I,
            o: I,
            d(o) {
                o && H(t), e[4](null)
            }
        }
    }

    function Pi(e, t, n) {
        var O, A;
        let o;
        Ne(e, W, _ => n(9, o = _));
        let {
            height: r = "300px"
        } = t, {
            width: i = "500px"
        } = t, c = null, a = null, l = null, s = null, f = !1, u = [], m = Lt() + "?jour=lgn&shopUrl=" + encodeURIComponent(Be()) + "&enableBreezeLogin=" + ((A = (O = o.shopConfiguration) == null ? void 0 : O.enableBreezeLogin) != null ? A : !0);
        async function h(_) {
            const R = _.data;
            if (R && typeof R == "string") try {
                const M = JSON.parse(R),
                    Q = M == null ? void 0 : M.source,
                    j = M == null ? void 0 : M.message,
                    T = typeof(M == null ? void 0 : M.payload) == "string" ? JSON.parse(M.payload) : null;
                if (Q === "breeze" && typeof j == "string") switch (j) {
                    case "login-to-platform":
                        Fn({
                            event: "login-started"
                        }), await Mn(T), Fn({
                            event: "login-completed"
                        });
                        break;
                    case "logout-from-platform":
                        await ti();
                        break;
                    case "app-ready":
                        f = !0, u.filter(F => (d(F), !1)), d(JSON.stringify(Ln(o, null)));
                        break;
                    case "start-login-response":
                        {
                            const F = Ho(T);c !== null && c(F !== null ? F.otpSessionToken : "null")
                        }
                        break;
                    case "verify-login-credentials-response":
                        {
                            const F = Bo(T),
                                Y = F === null ? qo(T) : null;a !== null && (F !== null && F.platformAuthCredentials !== null && await Mn(F == null ? void 0 : F.platformAuthCredentials), a(F !== null ? F.verifyOTPResponseStatus : Y !== null ? Y.error.description : "null"))
                        }
                        break;
                    case "logout-response":
                        {
                            const F = T.status === "success";l !== null && l(F)
                        }
                }
            } catch (M) {
                console.error("Error handling in handleMessage", M)
            }
        }

        function d(_) {
            var R;
            f && s !== null ? (R = s.contentWindow) == null || R.postMessage(_, "*") : u.push(_)
        }
        async function w(_) {
            return new Promise((R, M) => {
                c = R, d(JSON.stringify({
                    eventName: "start-login",
                    payload: _
                }))
            })
        }
        async function C(_) {
            return new Promise((R, M) => {
                a = R, d(JSON.stringify({
                    eventName: "verify-login-credentials",
                    payload: _
                }))
            })
        }
        async function S() {
            return new Promise((_, R) => {
                l = _, d(JSON.stringify({
                    eventName: "start-logout"
                }))
            })
        }
        mt(() => {
            window.addEventListener("message", h), window.breeze = {
                startLogin: w,
                verifyOTP: C,
                logout: S
            }
        });

        function L(_) {
            Ge[_ ? "unshift" : "push"](() => {
                s = _, n(2, s)
            })
        }
        return e.$$set = _ => {
            "height" in _ && n(0, r = _.height), "width" in _ && n(1, i = _.width)
        }, [r, i, s, m, L]
    }
    class Hi extends se {
        constructor(t) {
            super();
            const n = document.createElement("style");
            n.textContent = ".login-frame{border:none;width:var(--width, 100%);height:var(--height, 300px)}", this.shadowRoot.appendChild(n), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Pi, Fi, re, {
                height: 0,
                width: 1
            }, null), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["height", "width"]
        }
        get height() {
            return this.$$.ctx[0]
        }
        set height(t) {
            this.$$set({
                height: t
            }), y()
        }
        get width() {
            return this.$$.ctx[1]
        }
        set width(t) {
            this.$$set({
                width: t
            }), y()
        }
    }
    customElements.define("breeze-login", Hi);

    function $n(e) {
        let t, n, o;
        return t = new pn({
            props: {
                properties: e[16]
            }
        }), t.$on("click", e[37]), {
            c() {
                n = z("div"), Fe(t.$$.fragment), k(n, "display", "contents"), k(n, "--breeze-button-color", e[3]), k(n, "--breeze-button-radius", e[4]), k(n, "--breeze-button-min-height", e[5]), k(n, "--breeze-button-font-size", e[6]), k(n, "--breeze-button-sub-text", e[2]), k(n, "--breeze-button-text-hover-color", e[7]), k(n, "--breeze-button-hover-color", e[8]), k(n, "--breeze-button-font-family", e[9]), k(n, "--breeze-button-letter-spacing", e[10]), k(n, "--breeze-button-text-color", e[11]), k(n, "--breeze-button-min-width", e[12]), k(n, "--breeze-button-padding", e[13]), k(n, "--breeze-button-font-weight", e[14]), k(n, "--breeze-button-hover-border", e[1]), k(n, "--breeze-button-border", e[0])
            },
            m(r, i) {
                N(r, n, i), Oe(t, n, null), o = !0
            },
            p(r, i) {
                i[0] & 8 && k(n, "--breeze-button-color", r[3]), i[0] & 16 && k(n, "--breeze-button-radius", r[4]), i[0] & 32 && k(n, "--breeze-button-min-height", r[5]), i[0] & 64 && k(n, "--breeze-button-font-size", r[6]), i[0] & 4 && k(n, "--breeze-button-sub-text", r[2]), i[0] & 128 && k(n, "--breeze-button-text-hover-color", r[7]), i[0] & 256 && k(n, "--breeze-button-hover-color", r[8]), i[0] & 512 && k(n, "--breeze-button-font-family", r[9]), i[0] & 1024 && k(n, "--breeze-button-letter-spacing", r[10]), i[0] & 2048 && k(n, "--breeze-button-text-color", r[11]), i[0] & 4096 && k(n, "--breeze-button-min-width", r[12]), i[0] & 8192 && k(n, "--breeze-button-padding", r[13]), i[0] & 16384 && k(n, "--breeze-button-font-weight", r[14]), i[0] & 2 && k(n, "--breeze-button-hover-border", r[1]), i[0] & 1 && k(n, "--breeze-button-border", r[0]);
                const c = {};
                i[0] & 65536 && (c.properties = r[16]), t.$set(c)
            },
            i(r) {
                o || (B(t.$$.fragment, r), o = !0)
            },
            o(r) {
                J(t.$$.fragment, r), o = !1
            },
            d(r) {
                r && t && H(n), De(t, r)
            }
        }
    }

    function Bi(e) {
        let t, n, o = e[15] && $n(e);
        return {
            c() {
                t = z("div"), o && o.c(), this.c = I, p(t, "class", "breezeButtonRoot")
            },
            m(r, i) {
                N(r, t, i), o && o.m(t, null), n = !0
            },
            p(r, i) {
                r[15] ? o ? (o.p(r, i), i[0] & 32768 && B(o, 1)) : (o = $n(r), o.c(), B(o, 1), o.m(t, null)) : o && (Ye(), J(o, 1, 1, () => {
                    o = null
                }), Xe())
            },
            i(r) {
                n || (B(o), n = !0)
            },
            o(r) {
                J(o), n = !1
            },
            d(r) {
                r && H(t), o && o.d()
            }
        }
    }

    function qi() {
        var e;
        (e = document.querySelector("meta[name=viewport]")) == null || e.setAttribute("content", "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0")
    }

    function ji() {
        if (Vi()) return;
        const e = document.createElement("breeze-checkout-view");
        e.setAttribute("id", "breezeCheckout"), document.body.appendChild(e)
    }

    function Vi() {
        return document.getElementsByTagName("breeze-checkout-view").length > 0
    }

    function Ji(e, t, n) {
        let o, r, i, c;
        Ne(e, Le, g => n(38, r = g)), Ne(e, W, g => n(39, i = g)), Ne(e, Ee, g => n(17, c = g));
        let {
            productdata: a = null
        } = t, {
            selectedproductvariantdata: l = null
        } = t, {
            checkoutmeta: s = null
        } = t, {
            offercode: f = null
        } = t, {
            enable: u = "true"
        } = t, {
            errortext: m = ""
        } = t, {
            checkouttext: h = "Checkout With Breeze"
        } = t, {
            buynowtext: d = "Buy Now with Breeze"
        } = t, {
            buttonborder: w = ""
        } = t, {
            buttonhoverborder: C = ""
        } = t, {
            buttonsubtext: S = ""
        } = t, {
            buttoncolor: L = ""
        } = t, {
            buttonradius: O = "4px"
        } = t, {
            buttonminheight: A = "46px"
        } = t, {
            buttonfontsize: _ = "18px"
        } = t, {
            showlogo: R = "true"
        } = t, {
            ghostmode: M = "false"
        } = t, {
            logocolor: Q = null
        } = t, {
            logohovercolor: j = null
        } = t, {
            texthovercolor: T = ""
        } = t, {
            buttonhovercolor: F = ""
        } = t, {
            fontfamily: Y = "Euclid Circular A, Serif"
        } = t, {
            letterspacing: ue = "0px"
        } = t, {
            shopconfiguration: Z = null
        } = t, {
            buttontextcolor: P = "white"
        } = t, {
            buttonminwidth: be = "200px"
        } = t, {
            buttonpadding: we = "9px 16px"
        } = t, {
            buttonfontweight: qe = 500
        } = t, {
            cartdata: Se = null
        } = t, {
            customerdata: xe = null
        } = t, {
            platform: Ae = null
        } = t, {
            environment: ye = null
        } = t, {
            productquantity: je = null
        } = t, ft = !0;
        mt(() => {
            Qt(), Nr(), qi(), Yt()
        });

        function Qt() {
            Mr(), n(15, ft = Rr(ze(M))), n(16, o.text = Ir() === "Products" && a !== null ? d : h, o), n(16, o), n(26, h), n(2, S), n(25, m), n(24, u), n(28, R), n(30, Q), n(31, j)
        }

        function Yt() {
            c.checkoutId !== null && !i.isCheckoutVisible && (Hn(!0), Ve())
        }

        function kt() {
            var $;
            const g = ($ = document.getElementById("breezeCheckout")) != null ? $ : document.createElement("breeze-checkout-view");
            Re(g), document.body.appendChild(g)
        }

        function Re(g) {
            g !== null && (a !== null ? g.setAttribute("productdata", a) : g.removeAttribute("productdata"), Se !== null && g.setAttribute("cartdata", Se), xe !== null && g.setAttribute("customerdata", xe), s !== null && g.setAttribute("checkoutmeta", s), l && g.setAttribute("selectedproductvariantdata", l), f && g.setAttribute("offercode", f), Z !== null && g.setAttribute("shopconfiguration", Z), je !== null && g.setAttribute("productquantity", je))
        }

        function Ve() {
            const g = document.getElementById("breezeCheckout");
            if (g !== null) {
                Re(g), Xr();
                return
            }
            kt()
        }
        typeof window == "object" && (window.openBreezeCheckout = kt);

        function Xt() {
            if (r.initAtomsStore) return;
            Le.update($ => ({ ...$,
                initAtomsStore: !0
            }));
            const g = ee(window.location.href);
            if (g !== null) {
                const $ = g.searchParams.get(lt);
                let b = {
                    shopUrl: Be() || null,
                    shopType: yt(Ae)
                };
                if ($ !== null) {
                    const D = Dr($),
                        te = Oo(D);
                    te !== null && (b = { ...te,
                        ...b
                    })
                }
                Ee.update(D => ({ ...D,
                    ...b
                }))
            }
        }

        function Kt() {
            if (r.initContextStore) return;
            Le.update(D => ({ ...D,
                initContextStore: !0
            }));
            const g = yt(Ae),
                $ = Cn(ye),
                b = ee(window.location.href);
            W.update(D => ({ ...D,
                platform: g != null ? g : D.platform,
                appEnvironment: $ != null ? $ : D.appEnvironment,
                recoverCart: (b == null ? void 0 : b.searchParams.get(Ht)) === "true",
                shopDomain: er()
            }))
        }
        async function Zt() {
            if (r.shopConfigLoad) return;
            Le.update($ => ({ ...$,
                shopConfigLoad: !0
            })), n(19, Z = await qr());
            const g = new CustomEvent("parentCompEvent", {
                detail: {
                    shopconfiguration: Z
                }
            });
            Wr(Z), window.dispatchEvent(g)
        }
        Tt(), Zt(), Qr(), Kt(), Xt(), ji();
        const $t = () => {
            xr(c.sessionId), Ve()
        };
        return e.$$set = g => {
            "productdata" in g && n(20, a = g.productdata), "selectedproductvariantdata" in g && n(21, l = g.selectedproductvariantdata), "checkoutmeta" in g && n(22, s = g.checkoutmeta), "offercode" in g && n(23, f = g.offercode), "enable" in g && n(24, u = g.enable), "errortext" in g && n(25, m = g.errortext), "checkouttext" in g && n(26, h = g.checkouttext), "buynowtext" in g && n(27, d = g.buynowtext), "buttonborder" in g && n(0, w = g.buttonborder), "buttonhoverborder" in g && n(1, C = g.buttonhoverborder), "buttonsubtext" in g && n(2, S = g.buttonsubtext), "buttoncolor" in g && n(3, L = g.buttoncolor), "buttonradius" in g && n(4, O = g.buttonradius), "buttonminheight" in g && n(5, A = g.buttonminheight), "buttonfontsize" in g && n(6, _ = g.buttonfontsize), "showlogo" in g && n(28, R = g.showlogo), "ghostmode" in g && n(29, M = g.ghostmode), "logocolor" in g && n(30, Q = g.logocolor), "logohovercolor" in g && n(31, j = g.logohovercolor), "texthovercolor" in g && n(7, T = g.texthovercolor), "buttonhovercolor" in g && n(8, F = g.buttonhovercolor), "fontfamily" in g && n(9, Y = g.fontfamily), "letterspacing" in g && n(10, ue = g.letterspacing), "shopconfiguration" in g && n(19, Z = g.shopconfiguration), "buttontextcolor" in g && n(11, P = g.buttontextcolor), "buttonminwidth" in g && n(12, be = g.buttonminwidth), "buttonpadding" in g && n(13, we = g.buttonpadding), "buttonfontweight" in g && n(14, qe = g.buttonfontweight), "cartdata" in g && n(32, Se = g.cartdata), "customerdata" in g && n(33, xe = g.customerdata), "platform" in g && n(34, Ae = g.platform), "environment" in g && n(35, ye = g.environment), "productquantity" in g && n(36, je = g.productquantity)
        }, e.$$.update = () => {
            e.$$.dirty[0] & 1459617796 | e.$$.dirty[1] & 1 && n(16, o = { ...dn,
                text: h,
                offerText: S,
                errorText: m,
                enable: ze(u),
                showLogo: ze(R),
                logocolor: Q,
                logohovercolor: j
            })
        }, [w, C, S, L, O, A, _, T, F, Y, ue, P, be, we, qe, ft, o, c, Ve, Z, a, l, s, f, u, m, h, d, R, M, Q, j, Se, xe, Ae, ye, je, $t]
    }
    class Ti extends se {
        constructor(t) {
            super();
            const n = document.createElement("style");
            n.textContent = ".breeze-button{font-family:var(--breeze-button-font-family, 'Euclid Circular A, Serif');display:flex;background-color:var(--breeze-button-color, #3a4550);border:var(--breeze-button-border, none);border-radius:var(--breeze-button-radius, 4px);min-height:var(--breeze-button-min-height, 46px);outline:none;padding:var(--breeze-button-padding, 9px 16px);justify-content:center;align-items:center;color:var(--breeze-button-text-color, white);cursor:pointer;min-width:var(--breeze-button-min-width, 200px);width:100%;opacity:var(--breeze-button-opacity, 1);cursor:var(--breeze-button-cursor, pointer)}.breeze-button:hover{color:var(--breeze-button-text-hover-color, #ffffff);background-color:var(--breeze-button-hover-color, #3a4550);border:var(--breeze-button-hover-border, none)}.breeze-button-logo{margin:10px}.breeze-button-text-lines{display:flex;flex-direction:column;align-items:flex-start}.breeze-button-text{font-family:var(--breeze-button-font-family, 'Euclid Circular A, Serif');font-weight:var(--breeze-button-font-weight, 500);font-size:var(--breeze-button-font-size, 18px);color:var(--button-text-color);letter-spacing:var(--breeze-button-letter-spacing, 0px)}.breeze-button-sub-text{font-family:var(--breeze-button-font-family, 'Euclid Circular A, Serif');font-weight:400;font-size:var(--breeze-button-sub-text-font-size, 11px);font-style:italic;margin:1px 0px 0px 0px;color:var(--button-sub-text-color);letter-spacing:var(--breeze-button-letter-spacing, 0px)}.breeze-button-error-text{font-family:var(--breeze-button-font-family, 'Euclid Circular A, Serif');font-weight:400;font-size:14px;margin:0px 0px 8px 0px;color:#fa1405;letter-spacing:var(--breeze-button-letter-spacing, 0px)}@media only screen and (max-width: 800px){.breeze-button-text{font-size:calc(var(--breeze-button-font-size, 18px) - 2px)}.breeze-button-logo{margin:6px}.breeze-button{padding:9px 10px}.breeze-button-sub-text{font-size:calc(var(--breeze-button-sub-text-font-size, 11px) - 1px)}}@media only screen and (max-width: 300px){.breeze-button-text{font-size:calc(var(--breeze-button-font-size, 18px) - 4px)}.breeze-button-logo{margin:4px}.breeze-button{padding:9px 7px}.breeze-button-sub-text{font-size:calc(var(--breeze-button-sub-text-font-size, 11px) - 2px)}}@media only screen and (max-width: 245px){.breeze-button-text{font-size:calc(var(--breeze-button-font-size, 18px) - 6px)}.breeze-button-logo{margin:2px}.breeze-button{padding:9px 4px}.breeze-button-sub-text{font-size:calc(var(--breeze-button-sub-text-font-size, 11px) - 3px)}}.btn-ring{display:none}.btn-ring:after{content:'';display:block;width:25px;height:25px;margin-left:18px;border-radius:50%;border:3px solid #fff;border-color:#fff transparent #fff transparent;animation:ring 1s linear infinite}@keyframes ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}", this.shadowRoot.appendChild(n), pe(this, {
                target: this.shadowRoot,
                props: ge(this.attributes),
                customElement: !0
            }, Ji, Bi, re, {
                productdata: 20,
                selectedproductvariantdata: 21,
                checkoutmeta: 22,
                offercode: 23,
                enable: 24,
                errortext: 25,
                checkouttext: 26,
                buynowtext: 27,
                buttonborder: 0,
                buttonhoverborder: 1,
                buttonsubtext: 2,
                buttoncolor: 3,
                buttonradius: 4,
                buttonminheight: 5,
                buttonfontsize: 6,
                showlogo: 28,
                ghostmode: 29,
                logocolor: 30,
                logohovercolor: 31,
                texthovercolor: 7,
                buttonhovercolor: 8,
                fontfamily: 9,
                letterspacing: 10,
                shopconfiguration: 19,
                buttontextcolor: 11,
                buttonminwidth: 12,
                buttonpadding: 13,
                buttonfontweight: 14,
                cartdata: 32,
                customerdata: 33,
                platform: 34,
                environment: 35,
                productquantity: 36
            }, null, [-1, -1]), t && (t.target && N(t.target, this, t.anchor), t.props && (this.$set(t.props), y()))
        }
        static get observedAttributes() {
            return ["productdata", "selectedproductvariantdata", "checkoutmeta", "offercode", "enable", "errortext", "checkouttext", "buynowtext", "buttonborder", "buttonhoverborder", "buttonsubtext", "buttoncolor", "buttonradius", "buttonminheight", "buttonfontsize", "showlogo", "ghostmode", "logocolor", "logohovercolor", "texthovercolor", "buttonhovercolor", "fontfamily", "letterspacing", "shopconfiguration", "buttontextcolor", "buttonminwidth", "buttonpadding", "buttonfontweight", "cartdata", "customerdata", "platform", "environment", "productquantity"]
        }
        get productdata() {
            return this.$$.ctx[20]
        }
        set productdata(t) {
            this.$$set({
                productdata: t
            }), y()
        }
        get selectedproductvariantdata() {
            return this.$$.ctx[21]
        }
        set selectedproductvariantdata(t) {
            this.$$set({
                selectedproductvariantdata: t
            }), y()
        }
        get checkoutmeta() {
            return this.$$.ctx[22]
        }
        set checkoutmeta(t) {
            this.$$set({
                checkoutmeta: t
            }), y()
        }
        get offercode() {
            return this.$$.ctx[23]
        }
        set offercode(t) {
            this.$$set({
                offercode: t
            }), y()
        }
        get enable() {
            return this.$$.ctx[24]
        }
        set enable(t) {
            this.$$set({
                enable: t
            }), y()
        }
        get errortext() {
            return this.$$.ctx[25]
        }
        set errortext(t) {
            this.$$set({
                errortext: t
            }), y()
        }
        get checkouttext() {
            return this.$$.ctx[26]
        }
        set checkouttext(t) {
            this.$$set({
                checkouttext: t
            }), y()
        }
        get buynowtext() {
            return this.$$.ctx[27]
        }
        set buynowtext(t) {
            this.$$set({
                buynowtext: t
            }), y()
        }
        get buttonborder() {
            return this.$$.ctx[0]
        }
        set buttonborder(t) {
            this.$$set({
                buttonborder: t
            }), y()
        }
        get buttonhoverborder() {
            return this.$$.ctx[1]
        }
        set buttonhoverborder(t) {
            this.$$set({
                buttonhoverborder: t
            }), y()
        }
        get buttonsubtext() {
            return this.$$.ctx[2]
        }
        set buttonsubtext(t) {
            this.$$set({
                buttonsubtext: t
            }), y()
        }
        get buttoncolor() {
            return this.$$.ctx[3]
        }
        set buttoncolor(t) {
            this.$$set({
                buttoncolor: t
            }), y()
        }
        get buttonradius() {
            return this.$$.ctx[4]
        }
        set buttonradius(t) {
            this.$$set({
                buttonradius: t
            }), y()
        }
        get buttonminheight() {
            return this.$$.ctx[5]
        }
        set buttonminheight(t) {
            this.$$set({
                buttonminheight: t
            }), y()
        }
        get buttonfontsize() {
            return this.$$.ctx[6]
        }
        set buttonfontsize(t) {
            this.$$set({
                buttonfontsize: t
            }), y()
        }
        get showlogo() {
            return this.$$.ctx[28]
        }
        set showlogo(t) {
            this.$$set({
                showlogo: t
            }), y()
        }
        get ghostmode() {
            return this.$$.ctx[29]
        }
        set ghostmode(t) {
            this.$$set({
                ghostmode: t
            }), y()
        }
        get logocolor() {
            return this.$$.ctx[30]
        }
        set logocolor(t) {
            this.$$set({
                logocolor: t
            }), y()
        }
        get logohovercolor() {
            return this.$$.ctx[31]
        }
        set logohovercolor(t) {
            this.$$set({
                logohovercolor: t
            }), y()
        }
        get texthovercolor() {
            return this.$$.ctx[7]
        }
        set texthovercolor(t) {
            this.$$set({
                texthovercolor: t
            }), y()
        }
        get buttonhovercolor() {
            return this.$$.ctx[8]
        }
        set buttonhovercolor(t) {
            this.$$set({
                buttonhovercolor: t
            }), y()
        }
        get fontfamily() {
            return this.$$.ctx[9]
        }
        set fontfamily(t) {
            this.$$set({
                fontfamily: t
            }), y()
        }
        get letterspacing() {
            return this.$$.ctx[10]
        }
        set letterspacing(t) {
            this.$$set({
                letterspacing: t
            }), y()
        }
        get shopconfiguration() {
            return this.$$.ctx[19]
        }
        set shopconfiguration(t) {
            this.$$set({
                shopconfiguration: t
            }), y()
        }
        get buttontextcolor() {
            return this.$$.ctx[11]
        }
        set buttontextcolor(t) {
            this.$$set({
                buttontextcolor: t
            }), y()
        }
        get buttonminwidth() {
            return this.$$.ctx[12]
        }
        set buttonminwidth(t) {
            this.$$set({
                buttonminwidth: t
            }), y()
        }
        get buttonpadding() {
            return this.$$.ctx[13]
        }
        set buttonpadding(t) {
            this.$$set({
                buttonpadding: t
            }), y()
        }
        get buttonfontweight() {
            return this.$$.ctx[14]
        }
        set buttonfontweight(t) {
            this.$$set({
                buttonfontweight: t
            }), y()
        }
        get cartdata() {
            return this.$$.ctx[32]
        }
        set cartdata(t) {
            this.$$set({
                cartdata: t
            }), y()
        }
        get customerdata() {
            return this.$$.ctx[33]
        }
        set customerdata(t) {
            this.$$set({
                customerdata: t
            }), y()
        }
        get platform() {
            return this.$$.ctx[34]
        }
        set platform(t) {
            this.$$set({
                platform: t
            }), y()
        }
        get environment() {
            return this.$$.ctx[35]
        }
        set environment(t) {
            this.$$set({
                environment: t
            }), y()
        }
        get productquantity() {
            return this.$$.ctx[36]
        }
        set productquantity(t) {
            this.$$set({
                productquantity: t
            }), y()
        }
    }
    customElements.define("breeze-button", Ti)
})();