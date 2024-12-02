! function() {
    "use strict";

    function e() {}

    function t(e) {
        return e()
    }

    function n(e) {
        e.forEach(t)
    }

    function o(t) {
        if (null == t) return e;
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
        var i = t.subscribe.apply(t, o);
        return i.unsubscribe ? function() {
            return i.unsubscribe()
        } : i
    }

    function r(e) {
        var t;
        return o(e, (function(e) {
            return t = e
        }))(), t
    }
    new Set, new Map;

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }
    new Set, new Set, "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global, new Set([].concat(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"])), "function" == typeof HTMLElement && HTMLElement;
    var a = [];

    function s(t) {
        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
            r = new Set;

        function s(e) {
            if (u = e, ((p = t) != p ? u == u : p !== u || p && "object" == typeof p || "function" == typeof p) && (t = e, n)) {
                var o, s = !a.length,
                    l = function(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return i(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                                    }
                                }(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var o = 0,
                                    r = function() {};
                                return {
                                    s: r,
                                    n: function() {
                                        return o >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[o++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, s = !0,
                            l = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return s = e.done, e
                            },
                            e: function(e) {
                                l = !0, a = e
                            },
                            f: function() {
                                try {
                                    s || null == n.return || n.return()
                                } finally {
                                    if (l) throw a
                                }
                            }
                        }
                    }(r);
                try {
                    for (l.s(); !(o = l.n()).done;) {
                        var c = o.value;
                        c[1](), a.push(c, t)
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
                if (s) {
                    for (var d = 0; d < a.length; d += 2) a[d][0](a[d + 1]);
                    a.length = 0
                }
            }
            var p, u
        }
        return {
            set: s,
            update: function(e) {
                s(e(t))
            },
            subscribe: function(i) {
                var a = [i, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e];
                return r.add(a), 1 === r.size && (n = o(s) || e), i(t),
                    function() {
                        r.delete(a), 0 === r.size && n && (n(), n = null)
                    }
            }
        }
    }

    function l(t, r, i) {
        var a = !Array.isArray(t),
            l = a ? [t] : t,
            c = r.length < 2;
        return {
            subscribe: s(i, (function(t) {
                var i = !1,
                    s = [],
                    d = 0,
                    p = e,
                    u = function() {
                        if (!d) {
                            p();
                            var n = r(a ? s[0] : s, t);
                            c ? t(n) : p = "function" == typeof n ? n : e
                        }
                    },
                    f = l.map((function(e, t) {
                        return o(e, (function(e) {
                            s[t] = e, d &= ~(1 << t), i && u()
                        }), (function() {
                            d |= 1 << t
                        }))
                    }));
                return i = !0, u(),
                    function() {
                        n(f), p(), i = !1
                    }
            })).subscribe
        }
    }

    function c(e, t, n, o) {
        var i, a, s = !1,
            c = "withOld" in n,
            d = l(e, ((e, n) => {
                if (i = n, c && (a = e), !s) {
                    let o = t(e, n);
                    if (!(t.length < 2)) return o;
                    n(o)
                }
                s = !1
            }), o),
            p = !Array.isArray(e),
            u = t => {
                p ? (s = !0, e.set(t)) : t.forEach(((t, n) => {
                    s = !0, e[n].set(t)
                })), s = !1
            };
        c && (n = n.withOld);
        var f = n.length >= (c ? 3 : 2),
            m = null,
            g = !1;

        function h(e) {
            var t, o, s, l;
            if (g) return l = e(r(d)), void i(l);
            var p = d.subscribe((e => {
                g ? t ? o = !0 : t = !0 : s = e
            }));
            l = e(s), g = !0, i(l), p(), g = !1, o && (l = r(d)), t && function(e) {
                if (m && (m(), m = null), c) var t = n(e, a, u);
                else t = n(e, u);
                f ? "function" == typeof t && (m = t) : u(t)
            }(l)
        }
        return {
            subscribe: d.subscribe,
            set(e) {
                h((() => e))
            },
            update: h
        }
    }

    function d(e, t) {
        if (Array.isArray(t)) {
            let n = t.concat();
            return c(e, (e => {
                for (let t = 0; t < n.length; ++t) e = e[n[t]];
                return e
            }), {
                withOld(e, t) {
                    let o = t;
                    for (let e = 0; e < n.length - 1; ++e) o = o[n[e]];
                    return o[n[n.length - 1]] = e, t
                }
            })
        }
        return c(e, (e => e[t]), {
            withOld(e, n) {
                return n[t] = e, n
            }
        })
    }

    function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(n), !0).forEach((function(t) {
                f(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function f(e, t, n) {
        return (t = function(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, "string");
                    if ("object" != typeof o) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return new Proxy(e, {
            get(e, t, n) {
                const o = r(e),
                    i = Reflect.get(o, t);
                return i instanceof Function ? function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return i.apply(this === n ? o : this, t)
                } : i
            },
            set(e, t, n, o) {
                let r;
                return e.update((e => {
                    const o = u({}, e);
                    return r = Reflect.set(o, t, n), o
                })), r
            },
            has(e, t) {
                return Reflect.has(r(e), t)
            },
            ownKeys(e) {
                return Reflect.ownKeys(r(e))
            },
            defineProperty(e, t, n) {
                let o;
                return e.update((e => {
                    const r = u({}, e);
                    return o = Reflect.defineProperty(r, t, n), r
                })), o
            },
            deleteProperty(e, t) {
                let n;
                return t in r(e) && (e.update((e => {
                    const o = u({}, e);
                    return n = Reflect.deleteProperty(o, t), o
                })), n)
            },
            getOwnPropertyDescriptor(e, t) {
                return Object.getOwnPropertyDescriptor(r(e), t)
            },
            getPrototypeOf(e) {
                return Reflect.getPrototypeOf(r(e))
            },
            setPrototypeOf(e, t) {
                return Reflect.setPrototypeOf(e, t)
            },
            isExtensible(e) {
                return Reflect.isExtensible(r(e))
            },
            preventExtensions(e) {
                return Reflect.preventExtensions(e)
            },
            apply(e, t, n) {
                return Reflect.apply(r(e), t, n)
            },
            construct(e, t, n) {
                return Reflect.construct(r(e), t, n)
            }
        })
    }
    let g;
    try {
        g = (window.Cypress ? window : window.parent).Rivo
    } catch (e) {
        console.error(e), g = window.Rivo
    }
    const h = s(g),
        w = m(h),
        _ = d(h, "loy_config"),
        y = m(_);

    function b(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        let n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }

    function v(e) {
        var t = document.createElement("script");
        t.src = e, t.defer = !0, document.head.appendChild(t)
    }
    var x, $, k;
    l(h, (e => e.common.shop.money_format || "{{amount_with_comma_separator}}$")), d(_, "ways_to_earn"), d(_, "referral_rewards"), d(_, "vip_tiers"), d(h, ["common", "customer"]), s(), s(), s(), s([]), s(), s(), s({
        bottom: void 0
    }), s(), x = {}, window.addEventListener("click", (function(e) {
        for (var t = e.target; t && t.dataset && !t.dataset.action;) t = t.parentNode;
        if (t && t.dataset && t.dataset.action && x[t.dataset.action]) {
            e.stopPropagation(), e.preventDefault();
            var n = t.dataset.data;
            return n = n ? n.split(",").map((function(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            })) : [], n.unshift(e), x[t.dataset.action].apply(void 0, n), !1
        }
    }), !0), $ = {}, k = {
        on: function(e, t) {
            if ("object" != typeof e) k._has_clb(e, t) || ($[e] || ($[e] = []), $[e].push(t));
            else
                for (var n in e) k.on(n, e[n])
        },
        _has_clb: function(e, t) {
            return !!$[e] && -1 !== $[e].indexOf(t)
        },
        once: function(e, t) {
            if ("object" != typeof e) t.once = !0, k.on(e, t);
            else
                for (var n in e) k.once(n, e[n])
        },
        emit: function(e, t) {
            t || (t = []), $[e] && $[e].forEach((function(n) {
                n.apply(void 0, t), n.once && k.remove(e, n)
            }))
        },
        remove: function(e, t) {
            if ("object" != typeof e) {
                if ($[e]) {
                    var n = $[e].indexOf(t); - 1 !== n && $[e].splice(n, 1)
                }
            } else
                for (var o in e) k.remove(o, e[o])
        }
    };
    const L = ["inherit", "Arial", "Arial Black", "Comic Sans MS", "Brush Script MT", "Courier New", "Georgia", "Garamond", "Helvetica", "Impact", "Lato", "Lucida Grande", "Microsoft Sans Serif", "Palatino", "Tahoma", "Trebuchet MS", "Times New Roman", "Verdana"],
        R = async e => {
            for (; null === document.querySelector(e);) await new Promise((e => requestAnimationFrame(e)));
            return document.querySelector(e)
        };

    function S(e) {
        var t = "/discount/" + e.code,
            n = {
                method: "GET"
            };
        return new Promise((function(o, r) {
            fetch(t, n).then((function(t) {
                if (void 0 === e.variant_ids) return o({});
                var n = e.variant_ids.split(",");
                if (0 === n.length) return o({});
                if (1 === n.length) return fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        items: [{
                            id: n[0],
                            quantity: 1
                        }]
                    })
                }).then((function(e) {
                    return window.location = "/cart", o({})
                }));
                var r = y.api_endpoint;
                return fetch(`${r}/products/${e.product_id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((function(e) {
                    return e.json()
                })).then((function(e) {
                    return window.Rivo.sendMessageToWidget({
                        msg_action: "app.redeem.product-options",
                        msg_options: e
                    }), o({})
                }))
            })).catch((function(e) {
                console.error(e), o({})
            }))
        }))
    }! function() {
        if (y.membership_tiers && window.Rivo.common ? .product ? .tags && -1 !== window.Rivo.common.product.tags.indexOf("Rivo Membership")) return void(window.location = y.paid_membership_settings.landing_path || "/");
        window.Rivo.preview_mode = "undefined" == typeof Shopify;
        let e = localStorage.getItem("rivo_advocate_profile");
        e && (window.Rivo.advocate_profile = JSON.parse(e));
        let t, n = localStorage.getItem("rivo_friend_profile");
        n && (window.Rivo.friend_profile = JSON.parse(n)), window.Rivo.global_config.loy_js_api_enabled && v(window.Rivo.global_config.asset_urls.loy.api_js), y.pages_config && v(window.Rivo.global_config.asset_urls.loy.page_init_js), y.forms && y.forms.length > 0 && v(window.Rivo.global_config.asset_urls.forms.init_js), window.addEventListener("message", (function(e) {
            switch (e.data.msg_action) {
                case "widget.register":
                    window.location.href = "/account/register";
                    break;
                case "widget.login":
                    e.data.msg_options ? .redirect_url ? window.location.href = `/account/login?checkout_url=${e.data.msg_options.redirect_url}` : window.location.href = "/account/login";
                case "widget.apply_discount_code":
                    S(e.data.msg_options);
                    break;
                case "widget.visit":
                    window.location.href = e.data.msg_options.url;
                    break;
                case "widget.popup":
                    ! function(e, t, n) {
                        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "right";
                        new Promise((function(r, i) {
                            if ("right" == o) var a = "960";
                            else a = "0";
                            var s = window.open(e, t || "_blank", n || "height=500,width=700,left=" + a);
                            return window.focus && s.focus(), r({})
                        }))
                    }(e.data.msg_options.url, e.data.msg_options.windowName, e.data.msg_options.windowFeatures, y.brand_theme_settings.desktop_placement);
                    break;
                case "widget.new_tab":
                    window.open(e.data.msg_options.url, "_blank");
                    break;
                case "widget.open":
                    t(!0, e.data.msg_options.page);
                    break;
                case "widget.close":
                    t(!1);
                    break;
                case "widget.referral_claimed":
                    ! function(e) {
                        e.email;
                        let t = e.code;
                        localStorage.setItem("ba_referral_claimed", t), localStorage.removeItem("ba_referral_customer_signup")
                    }(e.data.msg_options);
                    break;
                case "widget.referral_via_email":
                    Object.assign(document.createElement("a"), {
                        target: "_blank",
                        href: `mailto:?subject=${e.data.msg_options.subject}&body=${e.data.msg_options.body}`
                    }).click();
                    break;
                case "widget.go_to_url":
                    Object.assign(document.createElement("a"), {
                        target: "_blank",
                        href: e.data.msg_options.url
                    }).click()
            }
        }));
        const o = () => {
                const e = document.createElement("script"),
                    t = "https:" == document.location.protocol ? "https://" : "http://";
                e.src = `${t}${y.domain_name}/preview_loy.js`, e.type = "text/javascript", document.head.appendChild(e)
            },
            r = {
                "#ba-loyalty-home": "index",
                "#ba-loyalty-rewards": "my_rewards",
                "#ba-loyalty-ways-to-earn": "ways_to_earn",
                "#ba-loyalty-redeem": "ways_to_redeem",
                "#ba-referral-program": "referrals",
                "#ba-referrals": "my_referrals"
            };
        window.addSellingPlanToCart = function(e, t) {
            const n = {
                id: e,
                selling_plan: t,
                quantity: 1
            };
            fetch("/cart/add.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(n)
            }).then((e => e.json())).then((e => {
                window.location = "/cart"
            })).catch((e => console.error("Error:", e)))
        }, window.Rivo.deepLinks = function() {
            let e = window.location.search.substr(1).split("&").reduce((function(e, t) {
                    var n = t.split("=");
                    return e[n[0]] = decodeURIComponent(n[1]), e
                }), {}),
                t = {},
                n = e.referral_code || e.xrc;
            return "loyalty_points_redeemed" === e.preset_type ? (t.page = "reward", t.reward_id = e.record_id) : "loyalty_birthday" === e.preset_type ? t.page = "home" : n ? (t.referral_code = n, window.Rivo.advocate_profile ? t.page = "invalid_referral" : function(e) {
                const t = void 0 !== e && "" !== e.trim(),
                    n = null == localStorage.getItem("ba_referral_claimed");
                return t && n
            }(n) && (t.page = "referral_signup", e.rci && (t.referral_campaign_id = e.rci), baMet.register("referrals_opens", {
                referral_code: n,
                referral_campaign_id: e.rci
            }, "loy"))) : r[window.location.hash] ? t.page = window.Rivo.common ? .customer ? r[window.location.hash] : r["#ba-loyalty-home"] : "email" == e.utm_medium && "rivo" == e.utm_source && (t.page = "home"), e.advocate_rdc ? (t.reward_discount_code = e.advocate_rdc, t.page = "advocate_reward") : e.friend_rdc ? (t.reward_discount_code = e.friend_rdc, t.page = "friend_reward") : e.popup_panel && (t.popup_panel = e.popup_panel), e.fpr_pid && e.fpr_vids && (t.free_product_reward = {
                product_id: e.fpr_pid,
                variant_id: e.fpr_vids
            }), t
        }();
        const i = "ontouchstart" in window || window.navigator.msPointerEnabled ? "click" : "mouseup";
        window.addEventListener(i, (function(e) {
            if (0 === e.button) {
                const n = function(e, t) {
                    let n = e;
                    for (; null !== n && n.tagName !== "A".toUpperCase();) n = n.parentNode;
                    return n
                }(e.target || e.srcElement);
                if (!n) return;
                const o = n.hash;
                if (!o || !r[o]) return;
                return event.preventDefault(), n.setAttribute("onclick", "return false;"), window.Rivo.deepLinks.page = r[o], void t(!0, r[o])
            }
        }));
        var a = {
            gift: '<svg id="ba-loy-launcher-img" xmlns="http://www.w3.org/2000/svg" width="30" height="30" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 19 3 C 15.428062 3 12.5 5.9280619 12.5 9.5 C 12.5 10.78688 12.885764 11.987083 13.539062 13 L 8.5 13 C 7.12 13 6 14.12 6 15.5 L 6 21.5 C 6 22.88 7.12 24 8.5 24 L 22.5 24 L 22.5 13 L 19 13 C 17.049938 13 15.5 11.450062 15.5 9.5 C 15.5 7.5499381 17.049938 6 19 6 C 20.950062 6 22.5 7.5499381 22.5 9.5 L 22.5 13 L 25.5 13 L 25.5 9.5 C 25.5 7.5499381 27.049938 6 29 6 C 30.950062 6 32.5 7.5499381 32.5 9.5 C 32.5 11.450062 30.950062 13 29 13 L 25.5 13 L 25.5 24 L 39.5 24 C 40.88 24 42 22.88 42 21.5 L 42 15.5 C 42 14.12 40.88 13 39.5 13 L 34.460938 13 C 35.114236 11.987083 35.5 10.78688 35.5 9.5 C 35.5 5.9280619 32.571938 3 29 3 C 26.951606 3 25.194111 4.0224818 24 5.5175781 C 22.805889 4.0224818 21.048394 3 19 3 z M 8 27 L 8 37.5 C 8 41.08 10.92 44 14.5 44 L 22.5 44 L 22.5 27 L 8 27 z M 25.5 27 L 25.5 44 L 33.5 44 C 37.08 44 40 41.08 40 37.5 L 40 27 L 25.5 27 z"/></svg>',
            star: '<svg id="ba-loy-launcher-img" xmlns="http://www.w3.org/2000/svg" width="30" height="30" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24.009766 5 A 1.50015 1.50015 0 0 0 22.658203 5.8300781 L 17.505859 16.134766 L 5.2714844 18.017578 A 1.50015 1.50015 0 0 0 4.4394531 20.560547 L 12.902344 29.023438 L 11.017578 41.271484 A 1.50015 1.50015 0 0 0 13.193359 42.830078 L 24 37.191406 L 34.806641 42.830078 A 1.50015 1.50015 0 0 0 36.982422 41.271484 L 35.097656 29.023438 L 43.560547 20.560547 A 1.50015 1.50015 0 0 0 42.728516 18.017578 L 30.494141 16.134766 L 25.341797 5.8300781 A 1.50015 1.50015 0 0 0 24.009766 5 z"/></svg>'
        };
        const s = "data-ba-met-app='loy' data-ba-met-name='app_widget_loy_panel_click'";

        function l(e, t, n) {
            var o = e[t + "_layout"] || e.layout,
                r = e[t + "_text"] || e.text,
                i = e[t + "_icon"] || e.icon,
                l = "";
            return "icon_with_text" != o && "image_only" != o || (l += '<div class="launcher-' + t + " launcher-icon " + o + ' ba-met-handler" ' + s + ">" + (n ? `<img src="${n}" style="width: 32px; height: 32px;"/>` : a[i]) + "</div>"), o.includes("text") && (l += '<div class="launcher-' + t + " launcher-text " + o + ' ba-met-handler" ' + s + ">" + r + "</div>"), l
        }
        let c = document.location.search.indexOf("ba-loy-preview=1") > -1,
            d = document.location.search.indexOf("hide-preview-popup=1") > -1,
            p = document.location.search.indexOf("loy_preview=1") > -1;

        function u(e, t) {
            if (!t) return "";
            let n, o = "";
            return n = "inherit" === t ? `font-family: ${t} !important;` : `font-family: '${t}', sans-serif !important;`, "primary_font" == e ? o = `<style type="text/css">h1,h2,h3,h4,h5,.header, .header-main.truncate, .head-title:not(.header-secondary), .panel-title, .content-title, .next-reward-title{${n}}</style>` : "secondary_font" == e && (o = `<style type="text/css">p,button,label,.header-secondary, .loy-button, .loy-button-secondary, loy-button-link-main, .ba-tooltip, .sign-in-text, .less-color.text-nowrap, .content-subtitle, .panel-desc, .section-table-piece-detail-items, .dob-fields, .txt-info, .txt-warning, .section-top-bar, .txt-field{${n}}</style>`), L.includes(t) ? o : `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=${t.replace(" ","+")}"></link>${o}`
        }
        window.addEventListener("load", (function() {
            const e = y.points_program_enabled || y.referral_program_enabled || y.membership_program_enabled;
            if ((c || p || e) && (document.getElementsByTagName("head")[0].innerHTML.search("loy_" + window.Rivo.common.shop.id) > 0 || document.getElementById("rivo-app-embed-init"))) {
                window.Rivo.common.customer ? function() {
                        let e = `${y.api_endpoint}/customers/${window.Rivo.common.customer.id}/status`;
                        fetch(e, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((e => e.json())).then((function(e) {
                            y.viewable = e.viewable, e.viewable && 1 == y.show_customer_page_widget && function(e, t) {
                                const n = window.Rivo.common ? .customer,
                                    o = y.brand_theme_settings,
                                    r = o.shopify_account_embed_target_page || "customers/account";
                                if (window.Rivo.common.template != r || !n) return;
                                let i = document.createElement("style");
                                i.id = "loyalty-program-and-rewards", i.innerHTML = `#rivo-loyalty-program-and-rewards{margin-top: 30px;}\n\t\t\t.account-loyalty-wrapper{margin: 15px 0;}\n\t\t\t.account-loyalty-wrapper p{margin: 0 0 10px; text-transform: none; font-size: 15px; font-weight: 400;}\n\t\t\th2#loyalty-program-header{text-transform: none;}\n\t\t\tp#freeform-text{white-space: pre-wrap;}\n\t\t\tp#widget-click a{color: #006eff;}\n\t\t\t#see-more-on-widget{cursor:pointer}#see-more-on-widget:hover{text-decoration: underline;}\n\t\t\t${o.shopify_account_embed_custom_css}`, document.head.appendChild(i);
                                const a = y.translations,
                                    s = `<b>${function(e,t){var n=0,o="",r="";if(Number(e)===e&&e%1!=0){var i=Math.abs(e).toFixed(2).split(".");r=i[0].split("").reverse(),o="."+i[1]}else r=Math.abs(e).toString().split("").reverse();return r.forEach((function(e){3==n&&(o=","+o,n=0),o=e+o,n++})),e<0&&(o="- "+o),o}(e)}</b>`,
                                    l = `<b>${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(void 0===e||null==e)return"";if("string"==typeof e&&0==e.length)return"";var n=w.global_config.base_money_format||w.common.shop.money_format,o=/\{\{\s*(\w+)\s*\}\}0?/;function r(e,t){return void 0===e?t:e}var i=e<0;function a(e,t,n,o){if(t=r(t,2),n=r(n,","),o=r(o,"."),isNaN(e)||null==e)return 0;var i=(e=Math.abs(e)).toString().split("."),a=i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n),s=i[1]?parseFloat("0."+i[1]).toFixed(t).split(".")[1]:"";return a+(s?o+s:"")}var s="";switch(n.match(o)[1]){case"amount":case"amount_no_decimals":s=a(e,t);break;case"amount_no_decimals_with_comma_separator":case"amount_with_comma_separator":s=a(e,t,".",",")}return(i?"- ":"")+n.replace(o,s)}(t,2)}</b>`;
                                let c = `<div id="rivo-loyalty-program-and-rewards">\n      <h2 id="loyalty-program-header">${a.general_loyalty_program_and_rewards||"Loyalty Program & Rewards"}</h2>\n\t    <div class="account-loyalty-wrapper">\n\t      <p id="points-balance">${a.general_you_have_points?a.general_you_have_points.replace("{{points}}",s).replace("{{credits}}",l):`
                                You have $ {
                                    s
                                }
                                points.
                                `}</p>\n\t\t\t\t${a.shopify_account_embed_freeform_text?"<p id='freeform-text'>"+a.shopify_account_embed_freeform_text+"</p>":""}\n\t      <p id="widget-click"><a href="#" id="see-more-on-widget">${a.general_click_to_see_more||"View My Rewards Account"}</a></p>\n\t    </div>\n\t\t</div>`;
                                const d = document.querySelector(`${o.shopify_account_embed_custom_placement||"main .grid > div:first-child *:first-child, main div.customer, main div"}`);
                                d && d.insertAdjacentHTML(`${o.shopify_account_embed_custom_insert_method||"beforeend"}`, c);
                                const p = document.getElementById("see-more-on-widget");
                                p && p.addEventListener("click", (function(e) {
                                    if (e.preventDefault(), o.shopify_account_embed_custom_link) {
                                        const e = `${window.top.location.origin}${o.shopify_account_embed_custom_link}`;
                                        window.postMessage({
                                            msg_action: "widget.go_to_url",
                                            msg_options: {
                                                url: e
                                            }
                                        }, "*")
                                    } else {
                                        let e = document.querySelector("#launcher-wrapper");
                                        e.classList.contains("up") || e.click()
                                    }
                                }))
                            }(e.points, e.credits), R("#ba-loy-container").then((t => {
                                e.viewable ? t.style.display = "block" : t.remove()
                            }))
                        }))
                    }() : R("#ba-loy-container").then((e => {
                        e.style.display = "block"
                    })),
                    function() {
                        let e = document.createElement("style"),
                            t = "#ba-loy-container-body {overflow: hidden !important;}\niframe#ba-loy-frame{position: absolute !important;opacity: 0 !important;width: 1px !important;height: 1px !important;top: 0 !important;left: 0 !important;border: none !important;display: block !important;z-index: -1 !important;}\n.ba-loy-namespace .ba-loy-app {line-height: 1;}\n.ba-loy-namespace div,.ba-loy-namespace frame {display: block;}\n.ba-loy-namespace div,\n.ba-loy-namespace span,\n.ba-loy-namespace iframe {font-family: ba-loy-font, \"Helvetica Neue\", \"Apple Color Emoji\", Helvetica, Arial, sans-serif;font-size: 100%;font-style: normal;letter-spacing: normal;font-stretch: normal;font-variant: normal;font-weight: normal;text-align-last: initial;text-decoration: none;text-indent: 0px;text-shadow: none;text-transform: none;alignment-baseline: baseline;animation-play-state: running;backface-visibility: visible;background-color: transparent;background-image: none;baseline-shift: baseline;border: 0px none transparent;border-radius: 0px;bottom: auto;-webkit-box-decoration-break: slice;box-shadow: none;box-sizing: content-box;caption-side: top;clear: none;clip: auto;color: inherit;columns: auto auto;column-fill: balance;column-gap: normal;content: normal;counter-increment: none;counter-reset: none;cursor: auto;direction: ltr;display: inline;dominant-baseline: auto;empty-cells: show;float: none;height: auto;-webkit-hyphenate-character: auto;hyphens: manual;image-rendering: auto;left: auto;line-height: inherit;list-style: outside none disc;margin: 0px;max-height: none;max-width: none;min-height: 0px;min-width: 0px;opacity: 1;orphans: 2;outline-offset: 0px;overflow: visible;padding: 0px;page: auto;break-after: auto;break-before: auto;break-inside: auto;perspective: none;perspective-origin: 50% 50%;pointer-events: auto;position: static;quotes: none;resize: none;right: auto;size: auto;table-layout: auto;top: auto;transform: none;transform-origin: 50% 50% 0px;transform-style: flat;unicode-bidi: normal;vertical-align: baseline;white-space: normal;widows: 2;width: auto;word-break: normal;word-spacing: normal;overflow-wrap: normal;z-index: auto;text-align: start;-webkit-font-smoothing: antialiased;}\n@media (max-width: 500px) {\n\t.ba-loy-namespace .ba-loy-messenger-frame,\n\t#launcher-wrapper{right: 10px;}\n}\n.ba-loy-namespace .ba-loy-messenger-frame {z-index: 2147483650;position: fixed;bottom: 90px;right: 20px;width: 376px;min-height: 450px;max-height: 700px;box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;border-radius: 10px;overflow: hidden;opacity: 1;height: calc(100% - 120px);}\n.ba-loy-namespace .ba-loy-messenger-frame>iframe {width: 100%;height: 100%;position: absolute;}\n#ba-loy-container-body {overflow: hidden;}\n#launcher-wrapper {position: fixed;z-index: 99999999999;bottom: 20px;right: 20px;display: flex; height: 60px; align-items: center;justify-content: center;cursor: pointer;color:white;background: #0749d1;border-radius: 30px;min-width:60px;box-shadow: 0 1px 6px 0 rgb(0 0 0 / 5%), 0 2px 30px 0 rgb(0 0 0 / 15%);}\n#launcher-wrapper *{cursor: pointer;}\n#launcher-wrapper > *{padding: 16px 14px;transition:all 300ms cubic-bezier(0.87, 0, 0.13, 1);}\n#launcher-wrapper > .opened{position: relative;z-index:2;width:auto;display: inline-flex;align-items: center;max-width:250px;box-sizing:border-box;}\n#launcher-wrapper > .closed{position: absolute;top: 0px;left: 0px;bottom: 0px;width: 30px; opacity:0;z-index:1;}\n#launcher-wrapper .launcher-icon{width:32px;height:32px;}\n#launcher-wrapper .icon_with_text{font-size: 16px; margin-right: 12px;}\n#launcher-wrapper .launcher-text{display:inline-block;vertical-align:top;line-height:normal;margin-right: 10px;}\n#launcher-wrapper .launcher-close-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z'/%3E%3C/svg%3E%0A\");width: 26px;height: 26px;display: block;background-size: 26px;}\n#launcher-wrapper.up > .opened{opacity:0;max-width:60px;}\n#launcher-wrapper.up > .closed{opacity:1;}\nsvg#ba-loy-launcher-img{width:32px;height:32px;}\n#ba-loy-launcher-img > path {fill: #fff;}\n #launcher-wrapper .text_only.launcher-text{margin-right:0px;margin: 0px 5px;}" + y.widget_css + (y.custom_css || ""),
                            n = y ? .font_settings ? .primary_font || "";
                        if (n.length > 0) {
                            let e = document.createElement("link");
                            e.rel = "stylesheet", e.href = `https://fonts.googleapis.com/css?family=${n.replace(" ","+")}`, document.head.appendChild(e), t += ` .launcher-text{font-family: '${n}', sans-serif !important;}`
                        }
                        e.innerHTML = t, document.head.appendChild(e)
                    }();
                var n = function() {
                        let e = y.launcher_style_settings,
                            t = y.brand_theme_settings,
                            n = `\n\t\t\t<div class="ba-loy-app">\n\t\t\t\t<div class="ba-loy-messenger-frame ba-loy-${t.container_shape}" id="loy-widget-wrapper" style="display:none;">\n\t\t\t\t\t<iframe id="ba-other-window-body" allowfullscreen="" src="about:blank" sandbox="allow-scripts allow-same-origin"></iframe>\n\t\t\t\t</div>\n\t\t\t\t<div id="launcher-wrapper" class="ba-loy-${t.launcher_shape}">\n\t\t\t\t\t<div class="opened ba-met-handler" ${s}>\n\t\t\t\t\t\t${l(e,"desktop",e.desktop_launcher_icon)}\n\t\t\t\t\t\t${l(e,"mobile",e.mobile_launcher_icon)}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="closed">\n\t\t\t\t\t\t<div class="launcher-close-icon close-loy-button"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,
                            o = document.createElement("div");
                        return o.id = "ba-loy-container", o.className = "ba-loy-namespace", o.innerHTML = n, o.style.display = "none", o
                    }(),
                    r = {
                        container: n.querySelector("#loy-widget-wrapper"),
                        iframe: n.querySelector("iframe"),
                        button: n.querySelector("#launcher-wrapper")
                    };
                "true" == y ? .brand_theme_settings ? .hide_widget_permanently || y ? .referral_campaigns ? .length > 0 && window.Rivo.deepLinks.referral_code || document.body.appendChild(n), r.button.addEventListener("click", (function() {
                    const e = document.getElementsByClassName("ba-met-handler");
                    for (let t of e) f ? t.removeAttribute("data-ba-met-name") : t.dataset.baMetName = "app_widget_loy_panel_click";
                    t(!f)
                })), t = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    f = e, r.button.classList[f ? "add" : "remove"]("up"), r.container.style.display = f ? "" : "none", f && function(e, t) {
                        if (m) e.contentWindow.postMessage({
                            msg_action: "event.opened",
                            msg_options: {
                                page: t
                            }
                        }, "*");
                        else {
                            m = !0;
                            let t = window.Rivo ? window.Rivo.common.shop : void 0,
                                n = window.Rivo ? window.Rivo.common.customer : void 0,
                                o = window.Rivo ? y.widget_css : void 0,
                                r = y ? .custom_css || "";
                            const i = y ? .font_settings || "";
                            c && function() {
                                const e = b("visitor_header_title"),
                                    t = b("visitor_header_caption");
                                e && (y.translations.visitor_header_title = e), t && (y.translations.visitor_header_caption = t)
                            }();
                            let a = !("Promise" in window || "fetch" in window);
                            e.contentWindow.document.write(`\n\t\t\t\t<html lang="en">\n\t\t\t\t\t<head>\n\t\t\t\t\t\t<title></title>\n\t\t\t\t\t\t${a?'<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise%2Cfetch"><\/script>':""}\n\t\t\t\t\t\t<link rel="stylesheet" href="${window.Rivo.global_config.asset_urls.loy.widget_css}">\n\t\t\t\t\t\t${t?`<script>window.shop=${JSON.stringify(t)};<\/script>`:""}\n\t\t\t\t\t\t${n?`<script>window.customer=${JSON.stringify(n)};<\/script>`:""}\n\t\t\t\t\t\t<script src="${window.Rivo.global_config.asset_urls.loy.widget_js}"><\/script>\n            <style type="text/css">${o}${c?function(){const e=b("primary_color")||"#2932fc";return`#baLoySectionWrapper .ba-loy-bg-color {background: ${e} !important;}\n\t\t.header-main, .header-secondary, .points-expiry-desc{color: ${b("header_text_color")||"#fff"} !important;}\n\t\t#baLoySectionWrapper .section-panel-wrapper {box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 15px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, ${e} 0px 2px 0px 0px inset  !important;}\n\t\t#baLoySectionWrapper .loy-button-main{background: ${e} !important;}\n\t\t.main-default a.sign-in{color: ${e} !important;}\n\t\t#launcher-wrapper{background: ${e} !important;}`}():""}</style>\n            ${i?.primary_font?u("primary_font",i.primary_font):""}\n            ${i?.secondary_font?u("secondary_font",i.secondary_font):""}\n            ${r?`<style type="text/css">${r}</style>`:""}\n\t\t\t\t\t</head>\n\t\t\t\t\t<body>\n\t\t\t\t\t\t<div class="spin-wrapper ajax-interceptor ajax-loader-out"></div>\n\t\t\t\t\t</body>\n\t\t\t\t\t<script>window._init();<\/script>\n\t\t\t\t</html>\n\t\t\t\t`), e.contentWindow.Rivo = window.Rivo, window.Rivo.sendMessageToWidget = function(t) {
                                e.contentWindow.postMessage(t, "*")
                            }
                        }
                    }(r.iframe, t)
                };
                var i = localStorage.getItem("ba_reopen_referrals_coupon_section");
                if (window.Rivo.common.customer && i) {
                    var a = JSON.parse(i).referral_code;
                    window.Rivo.deepLinks.page = "referral_signup", window.Rivo.deepLinks.referral_code = a,
                        function(e, t) {
                            if (window.history.pushState) {
                                var n = new URL(window.location.href);
                                n.searchParams.set("referral_code", t), window.history.pushState({
                                    path: n.href
                                }, "", n.href)
                            }
                        }(0, a), localStorage.removeItem("ba_reopen_referrals_coupon_section"), localStorage.setItem("ba_referral_customer_signup", "true")
                }
                y.membership_tiers ? .length > 0 && (document.querySelectorAll('.rivo-membership-add-to-cart, a[href*="membership-add-to-cart"]').forEach((e => {
                    e.addEventListener("click", (function(e) {
                        e.target.innerHTML = "...", e.preventDefault(), addSellingPlanToCart(window.Rivo.loy_config.membership_tiers[0].variant_id, window.Rivo.loy_config.membership_tiers[0].selling_plan_id)
                    }))
                })), window.Rivo.common ? .customer ? .tags && window.Rivo.common.customer.tags.includes("Rivo Subscriber") && y.membership_tiers[0].static_discounts.forEach((function(e) {
                    S({
                        code: e ? .code
                    })
                }))), (window.Rivo.deepLinks.page || p) && setTimeout((function() {
                    t(!0)
                }), 100), c && !d && setTimeout(o, 1e3), y.referral_campaigns && y.referral_campaigns.forEach((function(e) {
                    ! function(e) {
                        new Promise((function(t) {
                            let n = e.display_type,
                                o = window.Rivo.deepLinks.referral_campaign_id;
                            if ("none" == n) return;
                            if (o && parseInt(o) != e.id) return;
                            let r = document.getElementById(`rivo-referral-campaign-${e.id}`);
                            const i = y ? .font_settings || "";
                            if ((window.Rivo.deepLinks.referral_code || window.Rivo.deepLinks.reward_discount_code) && (r = document.createElement("div"), r.id = `rivo-referral-campaign-${e.id}`, n = "overlay", document.body.appendChild(r)), !r) return void t();
                            let a = document.createElement("style");
                            a.id = `rivo-referral-styles-${e.id}`, a.innerHTML = `\n      #rivo-referral-campaign-${e.id} { width: 100%; height: 100%; display: contents;}\n      iframe.rivo-referral{\n        position: relative;\n        width: 100%;\n        height: ${e.design_settings.desktop_inline_height}px;\n        border: none;\n      }\n\n      @media (max-width: 680px){\n        iframe.rivo-referral{\n          height: ${e.design_settings.mobile_inline_height}px;\n        }\n      }\n\n      iframe.rivo-referral.overlay{\n        position: fixed;\n        z-index: 2147483644;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        overflow: auto;\n        background-color: rgb(0,0,0);\n        background-color: rgba(0,0,0,0.4);\n        opacity: 1;\n        visibility: visible;\n      }`, document.head.appendChild(a);
                            let s = window.Rivo ? window.Rivo.common.shop : void 0,
                                l = window.Rivo ? window.Rivo.common.customer : void 0;
                            r.innerHTML = `<iframe id="rivo-referral-container-${e.id}" class="rivo-referral ${n}" name="rivo-referral-panel" allowfullscreen="" src="about:blank" sandbox="allow-scripts allow-same-origin"></iframe>`;
                            const c = `\n        .background-image, .background-cover{\n          background-image: url(${e.background_image_url});\n        }\n        .content .header{\n          background-color: ${e.design_settings.header_background_color};\n          color: ${e.design_settings.header_font_color};\n          text-align: ${e.design_settings.header_text_align};\n        }\n        .content-title{\n          color: ${e.design_settings.title_font_color};\n          font-size: var(--title-font-size);\n          text-align: ${e.design_settings.title_text_align};\n        }\n        .content-subtitle{\n          color: ${e.design_settings.subtitle_font_color};\n          font-size: var(--subtitle-font-size);\n          text-align: ${e.design_settings.subtitle_text_align};\n        }\n        .button{\n          background-color: ${e.design_settings.button_background_color};\n          border-color: ${e.design_settings.button_border_color};\n          color: ${e.design_settings.button_font_color};\n          font-size: ${e.design_settings.button_font_size}px;\n        }\n        .button:hover{opacity: 0.9;}\n        .footer{\n          color: ${e.design_settings.footer_font_color};\n          font-size: ${e.design_settings.footer_font_size}px;\n          text-align: ${e.design_settings.footer_text_align};\n        }\n        @media (max-width: 680px){\n          .mobile-image{\n            background-image: url('${e.background_image_url}');\n          }\n        }\n      `;
                            let d = document.getElementById(`rivo-referral-container-${e.id}`);
                            d.contentWindow.document.write(`\n        <html lang="en">\n          <head>\n            <title></title>\n            \n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">\n  \n            <style type="text/css">\n              :root {\n                --primary-font: ${i.primary_font};\n                --secondary-font: ${i.secondary_font};\n                --primary-color: ${e.design_settings.primary_color};\n                --secondary-color: ${e.design_settings.primary_color};\n                --title-font-size: ${e.design_settings.title_font_size}px;\n                --subtitle-font-size: ${e.design_settings.subtitle_font_size}px;\n                --title-color: ${e.design_settings.title_font_color};\n                --subtitle-color: ${e.design_settings.subtitle_font_color};\n                --regular-font-size: 14px;\n                --small-font-size: ${e.design_settings.subtitle_font_size}px;\n                --error-color: red;\n                --font-color: #3b4351;\n              }\n            </style>\n            <link rel="stylesheet" href="${window.Rivo.global_config.asset_urls.loy.referrals_css}">\n            <style type="text/css">${c}</style>\n            ${i?.primary_font?u("primary_font",i.primary_font):""}\n            ${i?.secondary_font?u("secondary_font",i.secondary_font):""}\n            <style type="text/css" id="custom-css">${e.custom_css}</style>\n            ${s?`<script>window.shop=${JSON.stringify(s)};<\/script>`:""}\n            ${l?`<script>window.customer=${JSON.stringify(l)};<\/script>`:""}\n            <script>window.campaign=${JSON.stringify(e)};<\/script>\n            <script src="${window.Rivo.global_config.asset_urls.loy.referrals_js}"><\/script>\n          </head>\n          <body>\n            <div class="spin-wrapper ajax-interceptor ajax-loader-out"></div>\n          </body>\n          <script>window._init();<\/script>\n        </html>\n      `), d.contentWindow.document.close(), t()
                        }))
                    }(e)
                }))
            }
        }));
        var f = !1,
            m = !1;
        ! function() {
            try {
                const e = "\n- Increased repurchase rates\n- Increased LTV\n- Fully customizable\n\n\nHit us up at: https://www.rivo.io/developers\n\n",
                    t = "display:inline-block; font-size: 14px; padding: 5px; background: linear-gradient(to right, #141B32, #00D9CC); color:#FFFFFF; border-radius: 5px;";
                console.group("%cDeveloper friendly loyalty - powered by Rivo.", t), console.log(`%c ${e}`, "font-size: 13px;"), console.groupEnd()
            } catch (e) {}
        }()
    }()
}();
//# sourceMappingURL=https://d15d3imw3mjndz.cloudfront.net/assets/storefront/ba_loy_init.js-58d717bbb8100df3d16ca01627cc9a0a0b8df92aa32112fb5568654e77b76ca3.map
//!
;