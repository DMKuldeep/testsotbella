(function(shopify) {
    (() => {
        var he = Object.defineProperty;
        var ce = Object.getOwnPropertySymbols;
        var Ne = Object.prototype.hasOwnProperty,
            Oe = Object.prototype.propertyIsEnumerable;
        var le = (e, n, o) => n in e ? he(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o
            }) : e[n] = o,
            S = (e, n) => {
                for (var o in n || (n = {})) Ne.call(n, o) && le(e, o, n[o]);
                if (ce)
                    for (var o of ce(n)) Oe.call(n, o) && le(e, o, n[o]);
                return e
            };
        var ue = "WebPixel::Render";
        var W = e => shopify.extend(ue, e);
        var B = {
                config: 0,
                set: 1,
                page_view: 2,
                view_item: 3,
                add_to_cart: 4,
                purchase: 5,
                begin_checkout: 6,
                search: 7,
                add_payment_info: 8,
                update: 9,
                default: 10
            },
            ge = {
                send_to: 0,
                page_path: 1,
                page_title: 2,
                page_location: 3,
                ignore_referrer: 4,
                ecomm_prodid: 5,
                ecomm_totalvalue: 6,
                ecomm_pagetype: 7,
                items: 8,
                id: 9,
                name: 10,
                brand: 11,
                category: 12,
                coupon: 13,
                price: 14,
                quantity: 15,
                variant: 16,
                value: 17,
                currency: 18,
                tax: 19,
                shipping: 20,
                search_term: 21,
                total: 22,
                transaction_id: 23,
                ad_storage: 24,
                ad_user_data: 25,
                ad_personalization: 26,
                analytics_storage: 27
            },
            _e = {
                config: [],
                set: [],
                page_view: ["send_to"],
                view_item: ["send_to", "ecomm_prodid"],
                add_to_cart: ["send_to", "ecomm_prodid"],
                purchase: ["send_to", "transaction_id"],
                begin_checkout: ["send_to"],
                search: ["send_to"],
                add_payment_info: ["send_to"]
            };
        var me = "",
            ye = function(e) {
                me = e
            },
            Ie = Math.floor(Math.random() * 2147483648),
            ve = function() {
                if (arguments[0] === "js") return;
                let n = window.dataLayer.filter(s => Object.prototype.toString.call(s) === "[object Arguments]").filter(s => pe(s, arguments)),
                    o = Te(n, arguments);
                if (!o) {
                    let s = arguments,
                        a = !1,
                        v = window.gtag;
                    window.gtag = function() {
                        return !a && pe(arguments, s) && (fe(arguments, s), a = !0), v == null ? void 0 : v(...arguments)
                    };
                    return
                }
                fe(o, arguments)
            };

        function Te(e, n) {
            if (e.length === 0) return;
            if (n[0] === "set") {
                let s = e.filter(a => O(n[1], a[1], []));
                return s.length > 0 ? s[0] : e[0]
            } else e.sort((s, a) => Me(n[2], s[2], a[2]));
            return e[0]
        }

        function Me(e, n, o) {
            let s = [],
                a = [];
            return O(e, n, s), O(e, o, a), s.length - a.length
        }
        var fe = function(e, n) {
            let o = n[0],
                s = n[1],
                a = n[2],
                v = B[s];
            (o === "set" || o === "config") && (v = B[o]);
            let u = [`id=${me}`, `pid=${Ie}`];
            if (o === "set") {
                if (!O(n[1], e[1], [])) {
                    u.push(`cdm=${v}`), J(u);
                    return
                }
            } else {
                let f = e[2],
                    C = [];
                if (O(a, f, C), C.length) {
                    let E = C.map(A => ge[A]).filter(A => A !== void 0);
                    u.push(`cdm=${v}.${E.join(".")}`), J(u);
                    return
                }
            }
            u.push(`cm=${v}`), J(u)
        };

        function O(e, n, o) {
            let s = [];
            if (e === n) return !0;
            if (!(e instanceof Object) || !(n instanceof Object)) return !1;
            for (let a in e) {
                if (!e.hasOwnProperty(a) || a === "user_data" || a === "developer_id.dNzYwYj") continue;
                if (!n.hasOwnProperty(a)) {
                    s.push(a);
                    continue
                }
                let v = e[a],
                    u = n[a];
                if (v != u) {
                    if (Array.isArray(v) && Array.isArray(u)) {
                        if (Re(v, u, s)) continue
                    } else if (v instanceof Object && O(v, u, s)) continue;
                    s.push(a)
                }
            }
            for (let a in n) n.hasOwnProperty(a) && !e.hasOwnProperty(a) && s.push(a);
            return o.push(...s), s.length === 0
        }

        function Re(e, n, o) {
            let s = [];
            if (e.length !== n.length) return !1;
            for (let a = 0; a < e.length; a++)
                if (e[a] instanceof Object && n[a] instanceof Object) O(e[a], n[a], s);
                else if (e[a] !== n[a]) return !1;
            return o.push(...s), s.length === 0
        }

        function J(e) {
            let n = ["v=3", "t=h"];
            n.push(...e);
            let o = `https://www.googletagmanager.com/a?${n.join("&")}`;
            window.fetch(o, {
                method: "GET",
                mode: "no-cors",
                keepalive: !0
            })
        }

        function pe(e, n) {
            let o = n[0];
            if (o === "set") return e[0] === "set";
            if (o === "config") return e[0] === o && e[1] === n[1];
            if (o === "consent") return e[1] === n[1];
            if (o === "event") {
                let s = n[1];
                if (e[0] !== n[0] || e[1] !== s) return !1;
                let a = n[2],
                    v = _e[s];
                return v ? v.map(f => {
                    let C = e[2][f],
                        E = a[f];
                    return f === "send_to" || f === "ecomm_prodid" ? JSON.stringify(C) === JSON.stringify(E) : f === "transaction_id" ? C == E : C === E
                }).every(f => f === !0) : !1
            }
            return !1
        }
        var je = "developer_id.dYmNjMT",
            I = "developer_id.dNzYwYj";

        function Pe(e) {
            let n = e.init.customerPrivacy;
            if (n === void 0 || n.marketingAllowed || n.analyticsProcessingAllowed) be(e, n);
            else {
                let o = !1;
                e.customerPrivacy.subscribe("visitorConsentCollected", s => {
                    let a = s.customerPrivacy;
                    !o && (a.marketingAllowed || a.analyticsProcessingAllowed) && (be(e, a), o = !0)
                })
            }
        }

        function be(e, n) {
            var H, X, Z, Q, V, k, ee, te, ne, re, ie, ae, oe;
            let o = window.dataLayer = window.dataLayer || [],
                s = JSON.parse(e.settings.config),
                a = s.pixel_id;
            ye(a);
            let v = s.enable_monitoring_mode;
            if (v && !((H = new URL(window.location.href)) != null && H.searchParams.has("force_monitor")) && Math.floor(Math.random() * 1e3) > 10) return;
            let u = window.gtag = window.gtag || function() {
                    o.push(arguments)
                },
                f = v ? ve : u;
            n && (f("consent", "default", Ae(n)), f("set", we(n))), M(e) && f("set", {
                ignore_referrer: "true"
            }), u("policy", "detect_click_events", () => !1), u("policy", "detect_element_visibility_events", () => !1), u("policy", "detect_history_change_events", () => !1), u("policy", "detect_link_click_events", () => !1), u("policy", "detect_timer_events", () => !1), u("policy", "detect_youtube_activity_events", () => !1), u("policy", "detect_scroll_events", () => !1), u("policy", "detect_form_submit_events", () => !1), u("policy", "detect_form_interaction_events", () => !1), u("policy", "internal_sw_allowed", () => !1), u("set", je, !0), u("js", new Date);
            let C = document.createElement("script");
            C.src = `https://www.googletagmanager.com/gtag/js?id=${a}`, document.body.appendChild(C);
            let E = {
                send_page_view: !1
            };
            M(e) && (E.ignore_referrer = "true"), f("config", a, E);
            let A = s.gtag_events,
                N = t => {
                    var i;
                    return "shopify_" + (s.target_country || "US") + "_" + String((i = t == null ? void 0 : t.product) == null ? void 0 : i.id) + "_" + String(t == null ? void 0 : t.id)
                },
                T = t => {
                    let i = t == null ? void 0 : t.title;
                    return ["default", "title", "default title", ""].includes(String(i).toLowerCase()) ? null : i
                },
                L = (t, i) => i ? `${t} - ${i}` : t,
                Ce = (t, i) => {
                    var c;
                    if (t === "/search") {
                        let g = (c = document.querySelector("link[rel='canonical']")) == null ? void 0 : c.getAttribute("href");
                        if (g) return g
                    }
                    return i
                },
                Ee = (t, i, c) => t && t.endsWith("thank_you") ? L(i, c) : i,
                K = t => {
                    var i, c, g, m, l, b, w;
                    return {
                        email: t == null ? void 0 : t.email,
                        phone_number: t == null ? void 0 : t.phone,
                        address: {
                            first_name: (i = t == null ? void 0 : t.billingAddress) == null ? void 0 : i.firstName,
                            last_name: (c = t == null ? void 0 : t.billingAddress) == null ? void 0 : c.lastName,
                            street: (g = t == null ? void 0 : t.billingAddress) == null ? void 0 : g.address1,
                            city: (m = t == null ? void 0 : t.billingAddress) == null ? void 0 : m.city,
                            region: (l = t == null ? void 0 : t.billingAddress) == null ? void 0 : l.province,
                            postal_code: (b = t == null ? void 0 : t.billingAddress) == null ? void 0 : b.zip,
                            country: (w = t == null ? void 0 : t.billingAddress) == null ? void 0 : w.country
                        }
                    }
                },
                F = {
                    email: (Q = (Z = (X = e.init) == null ? void 0 : X.data) == null ? void 0 : Z.customer) == null ? void 0 : Q.email,
                    phone_number: (ee = (k = (V = e.init) == null ? void 0 : V.data) == null ? void 0 : k.customer) == null ? void 0 : ee.phone,
                    address: {
                        first_name: (re = (ne = (te = e.init) == null ? void 0 : te.data) == null ? void 0 : ne.customer) == null ? void 0 : re.firstName,
                        last_name: (oe = (ae = (ie = e.init) == null ? void 0 : ie.data) == null ? void 0 : ae.customer) == null ? void 0 : oe.lastName
                    }
                };
            e.analytics.subscribe("page_viewed", t => {
                var c, g, m, l, b, w, d, P;
                let i = A.find(r => r.type === "page_view");
                if (i && i.action_label) {
                    let r = (m = (g = (c = t.context) == null ? void 0 : c.window) == null ? void 0 : g.location) == null ? void 0 : m.pathname,
                        h = S({
                            send_to: i.action_label,
                            [I]: !0,
                            page_path: r,
                            page_title: xe((b = (l = t.context) == null ? void 0 : l.document) == null ? void 0 : b.title, r),
                            page_location: Ce(r, (P = (d = (w = t.context) == null ? void 0 : w.window) == null ? void 0 : d.location) == null ? void 0 : P.href),
                            user_data: F
                        }, M(e) && {
                            ignore_referrer: "true"
                        });
                    f("event", "page_view", h)
                }
            }), e.analytics.subscribe("product_viewed", t => {
                var c, g, m, l, b, w;
                let i = A.find(d => d.type === "view_item");
                if (i && i.action_label) {
                    let d = (c = t.data) == null ? void 0 : c.productVariant;
                    f("event", "view_item", {
                        send_to: i.action_label,
                        [I]: !0,
                        ecomm_prodid: [N(d)],
                        ecomm_totalvalue: (g = d == null ? void 0 : d.price) == null ? void 0 : g.amount,
                        ecomm_pagetype: "product",
                        items: [{
                            id: N(d),
                            name: L((m = d == null ? void 0 : d.product) == null ? void 0 : m.title, T(d)),
                            brand: (l = d == null ? void 0 : d.product) == null ? void 0 : l.vendor,
                            category: (b = d == null ? void 0 : d.product) == null ? void 0 : b.type,
                            price: (w = d == null ? void 0 : d.price) == null ? void 0 : w.amount,
                            variant: T(d)
                        }],
                        user_data: F
                    })
                }
            }), e.analytics.subscribe("product_added_to_cart", t => {
                var c, g, m, l, b, w, d, P, r, h, p;
                let i = A.find(_ => _.type === "add_to_cart");
                if (i && i.action_label) {
                    let _ = (c = t.data) == null ? void 0 : c.cartLine,
                        y = _ == null ? void 0 : _.merchandise;
                    f("event", "add_to_cart", {
                        send_to: i.action_label,
                        [I]: !0,
                        ecomm_prodid: [N(_ == null ? void 0 : _.merchandise)],
                        ecomm_totalvalue: (m = (g = _ == null ? void 0 : _.cost) == null ? void 0 : g.totalAmount) == null ? void 0 : m.amount,
                        ecomm_pagetype: "cart",
                        value: (b = (l = _ == null ? void 0 : _.cost) == null ? void 0 : l.totalAmount) == null ? void 0 : b.amount,
                        currency: ((d = (w = _ == null ? void 0 : _.cost) == null ? void 0 : w.totalAmount) == null ? void 0 : d.currencyCode) || "USD",
                        items: [{
                            id: N(y),
                            name: L((P = y == null ? void 0 : y.product) == null ? void 0 : P.title, T(y)),
                            brand: (r = y == null ? void 0 : y.product) == null ? void 0 : r.vendor,
                            category: (h = y == null ? void 0 : y.product) == null ? void 0 : h.type,
                            price: (p = y == null ? void 0 : y.price) == null ? void 0 : p.amount,
                            quantity: _ == null ? void 0 : _.quantity,
                            variant: T(y)
                        }],
                        user_data: F
                    })
                }
            }), e.analytics.subscribe("checkout_completed", t => {
                var c, g, m, l, b, w, d, P;
                let i = A.find(r => r.type === "purchase");
                if (i && i.action_label) {
                    let r = (c = t.data) == null ? void 0 : c.checkout,
                        h = S({
                            send_to: i.action_label,
                            [I]: !0,
                            transaction_id: (g = r == null ? void 0 : r.order) == null ? void 0 : g.id,
                            value: (m = r == null ? void 0 : r.subtotalPrice) == null ? void 0 : m.amount,
                            currency: ((l = r == null ? void 0 : r.subtotalPrice) == null ? void 0 : l.currencyCode) || "USD",
                            tax: (b = r == null ? void 0 : r.totalTax) == null ? void 0 : b.amount,
                            shipping: (d = (w = r == null ? void 0 : r.shippingLine) == null ? void 0 : w.price) == null ? void 0 : d.amount,
                            items: (P = r == null ? void 0 : r.lineItems) == null ? void 0 : P.map(p => {
                                var _, y, R, j, x, G, z, q, U, $, Y, D, se, de;
                                return {
                                    id: N(p.variant),
                                    name: Ee((R = (y = (_ = t.context) == null ? void 0 : _.window) == null ? void 0 : y.location) == null ? void 0 : R.pathname, (x = (j = p.variant) == null ? void 0 : j.product) == null ? void 0 : x.title, T(p.variant)),
                                    brand: (z = (G = p.variant) == null ? void 0 : G.product) == null ? void 0 : z.vendor,
                                    category: (U = (q = p.variant) == null ? void 0 : q.product) == null ? void 0 : U.type,
                                    coupon: (D = (Y = ($ = p.discountAllocations) == null ? void 0 : $[0]) == null ? void 0 : Y.discountApplication) == null ? void 0 : D.title,
                                    price: (de = (se = p.variant) == null ? void 0 : se.price) == null ? void 0 : de.amount,
                                    quantity: p.quantity,
                                    variant: T(p.variant)
                                }
                            }),
                            user_data: K(r)
                        }, M(e) && {
                            ignore_referrer: "true"
                        });
                    f("event", "purchase", h)
                }
            }), e.analytics.subscribe("checkout_started", t => {
                var c, g, m, l, b, w, d, P;
                let i = A.find(r => r.type === "begin_checkout");
                if (i && i.action_label) {
                    let r = (c = t.data) == null ? void 0 : c.checkout,
                        h = S({
                            send_to: i.action_label,
                            [I]: !0,
                            ecomm_prodid: (g = r == null ? void 0 : r.lineItems) == null ? void 0 : g.map(p => N(p.variant)),
                            ecomm_totalvalue: (m = r == null ? void 0 : r.subtotalPrice) == null ? void 0 : m.amount,
                            ecomm_pagetype: "cart",
                            value: (l = r == null ? void 0 : r.subtotalPrice) == null ? void 0 : l.amount,
                            currency: ((b = r == null ? void 0 : r.subtotalPrice) == null ? void 0 : b.currencyCode) || "USD",
                            coupon: (d = (w = r == null ? void 0 : r.discountApplications) == null ? void 0 : w[0]) == null ? void 0 : d.title,
                            items: (P = r == null ? void 0 : r.lineItems) == null ? void 0 : P.map(p => {
                                var _, y, R, j, x, G, z, q, U, $, Y, D;
                                return {
                                    id: N(p.variant),
                                    name: (y = (_ = p.variant) == null ? void 0 : _.product) == null ? void 0 : y.title,
                                    brand: (j = (R = p.variant) == null ? void 0 : R.product) == null ? void 0 : j.vendor,
                                    category: (G = (x = p.variant) == null ? void 0 : x.product) == null ? void 0 : G.type,
                                    coupon: (U = (q = (z = p.discountAllocations) == null ? void 0 : z[0]) == null ? void 0 : q.discountApplication) == null ? void 0 : U.title,
                                    price: (Y = ($ = p.variant) == null ? void 0 : $.price) == null ? void 0 : Y.amount,
                                    quantity: p.quantity,
                                    variant: (D = p.variant) == null ? void 0 : D.title
                                }
                            }),
                            user_data: K(r)
                        }, M(e) && {
                            ignore_referrer: "true"
                        });
                    f("event", "begin_checkout", h)
                }
            }), e.analytics.subscribe("search_submitted", t => {
                var c, g;
                let i = A.find(m => m.type === "search");
                i && i.action_label && f("event", "search", {
                    send_to: i.action_label,
                    [I]: !0,
                    search_term: (g = (c = t.data) == null ? void 0 : c.searchResult) == null ? void 0 : g.query,
                    user_data: F
                })
            }), e.analytics.subscribe("payment_info_submitted", t => {
                var c, g, m;
                let i = A.find(l => l.type === "add_payment_info");
                if (i && i.action_label) {
                    let l = (c = t.data) == null ? void 0 : c.checkout,
                        b = S({
                            send_to: i.action_label,
                            [I]: !0,
                            currency: ((g = l == null ? void 0 : l.totalPrice) == null ? void 0 : g.currencyCode) || "USD",
                            total: (m = l == null ? void 0 : l.totalPrice) == null ? void 0 : m.amount,
                            user_data: K(l)
                        }, M(e) && {
                            ignore_referrer: "true"
                        });
                    f("event", "add_payment_info", b)
                }
            }), e.customerPrivacy.subscribe("visitorConsentCollected", t => {
                let i = t.customerPrivacy;
                f("consent", "update", Ae(i)), f("set", we(i))
            })
        }

        function we(e) {
            return {
                restricted_data_processing: !e.saleOfDataAllowed
            }
        }

        function Ae(e) {
            return {
                ad_storage: e.marketingAllowed ? "granted" : "denied",
                ad_user_data: e.marketingAllowed ? "granted" : "denied",
                ad_personalization: e.marketingAllowed ? "granted" : "denied",
                analytics_storage: e.analyticsProcessingAllowed ? "granted" : "denied"
            }
        }

        function M(e) {
            var n;
            return ((n = e == null ? void 0 : e._pixelInfo) == null ? void 0 : n.surfaceNext) === "checkout"
        }

        function xe(e, n) {
            if (!n) return e;
            let o = [
                ["/information", "Checkout - Contact Information"],
                ["/shipping", "Checkout - Shipping"],
                ["/payment", "Checkout - Payment"],
                ["/review", "Checkout - Review"],
                ["/processing", "Checkout - Processing"],
                ["/thank-you", "Checkout - Receipt"],
                ["/stock-problems", "Checkout - Stock problems"],
                ["/error", "Checkout - Error"]
            ];
            for (let [s, a] of o)
                if (n.endsWith(s)) return a;
            return /^\/checkouts\/[A-Za-z0-9]+\/[A-Za-z0-9]+$/.test(n) ? "Checkout - Contact Information" : e
        }
        W(Pe);
    })();

})(self.webPixelsManager.createShopifyExtend('726434094', 'app'));