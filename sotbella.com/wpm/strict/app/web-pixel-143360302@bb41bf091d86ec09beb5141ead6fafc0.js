(() => {
    var u = (r, t, o) => new Promise((i, e) => {
        var n = a => {
                try {
                    f(o.next(a))
                } catch (E) {
                    e(E)
                }
            },
            s = a => {
                try {
                    f(o.throw(a))
                } catch (E) {
                    e(E)
                }
            },
            f = a => a.done ? i(a.value) : Promise.resolve(a.value).then(n, s);
        f((o = o.apply(r, t)).next())
    });
    var V = "WebPixel::Render";
    var y = r => shopify.extend(V, r);
    var L = "sc-static.net",
        k = "https://",
        gt = "snapchat.com",
        w = k + "tr." + gt;
    var H = k + L + "/scevent.min.js";
    var _ = {};
    var l;

    function M(r) {
        l = r
    }

    function K(r) {
        _.snaptr("init", r)
    }
    var W = "checkout_completed",
        v = "checkout_started",
        B = "page_viewed",
        G = "payment_info_submitted",
        z = "product_added_to_cart",
        Y = "product_viewed",
        X = "search_submitted";

    function j(r) {
        return typeof r == "number"
    }

    function q(r) {
        return r && typeof r == "object"
    }

    function N(r) {
        return typeof r == "string"
    }

    function m(r) {
        return (q(r) || N(r)) && j(r.length) ? r.length : 0
    }

    function T(r) {
        var t, o, i, e, n, s, f, a;
        return {
            client_dedup_id: r,
            user_email: (o = (t = l) == null ? void 0 : t.customer) == null ? void 0 : o.email,
            user_phone_number: (e = (i = l) == null ? void 0 : i.customer) == null ? void 0 : e.phone,
            firstname: (s = (n = l) == null ? void 0 : n.customer) == null ? void 0 : s.firstName,
            lastname: (a = (f = l) == null ? void 0 : f.customer) == null ? void 0 : a.lastName
        }
    }

    function $(r, t) {
        var i, e, n, s, f, a;
        let o = T(r);
        return t.email && m(t.email) && (o.user_email = t.email), t.phone && m(t.phone) ? o.user_phone_number = t.phone : (i = t.shippingAddress) != null && i.phone && m(t.shippingAddress.phone) && (o.user_phone_number = t.shippingAddress.phone), (e = t.shippingAddress) != null && e.firstName && m(t.shippingAddress.firstName) && (o.firstname = t.shippingAddress.firstName), (n = t.shippingAddress) != null && n.lastName && m(t.shippingAddress.lastName) && (o.lastname = t.shippingAddress.lastName), (s = t.shippingAddress) != null && s.country && m(t.shippingAddress.country) && (o.geo_country = t.shippingAddress.country), (f = t.shippingAddress) != null && f.city && m(t.shippingAddress.city) && (o.geo_city = t.shippingAddress.city), (a = t.shippingAddress) != null && a.zip && m(t.shippingAddress.zip) && (o.geo_postal_code = t.shippingAddress.zip), o
    }

    function J(r) {
        let t = [];
        for (let o = 0; o < r.length; o++) r[o] && t.push(String(r[o].variant_id));
        return t
    }

    function Q(r) {
        return r.map(t => ({
            title: t.title || "",
            quantity: t.quantity,
            product_id: t.variant.product.id,
            variant_id: t.variant.id,
            sku: t.variant.sku || "",
            variant_title: t.variant.title,
            product_vendor: t.variant.product.vendor,
            price: t.variant.price.amount
        }))
    }

    function C(r, t) {
        var n;
        let o = Q(t.lineItems),
            i = J(o),
            e = $(r, t);
        return e.brands = o.filter(s => m(s.product_vendor) > 0).map(s => s.product_vendor), e.item_ids = i, e.number_items = i.length, e.description = JSON.stringify(o), e.price = t.totalPrice.amount, e.currency = t.currencyCode, (n = t.order) != null && n.id && m(t.order.id) && (e.transaction_id = t.order.id), e
    }
    var Z = "_scid";

    function tt(r, t) {
        try {
            return r()
        } catch (o) {
            return t
        }
    }
    var I = String.fromCharCode,
        rt = "0123456789abcdef";

    function ht(r) {
        let t = -1,
            o = "",
            i = r && m(r);
        if (i)
            for (;
                (t += 1) < i;) {
                let e = r.charCodeAt(t),
                    n = t + 1 < i ? r.charCodeAt(t + 1) : 0;
                55296 <= e && e <= 56319 && 56320 <= n && n <= 57343 && (e = 65536 + ((e & 1023) << 10) + (n & 1023), t += 1), e <= 127 ? o += I(e) : e <= 2047 ? o += I(192 | e >>> 6 & 31, 128 | e & 63) : e <= 65535 ? o += I(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | e & 63) : e <= 2097151 && (o += I(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | e & 63))
            }
        return o
    }

    function p(r, t) {
        let o = (r & 65535) + (t & 65535);
        return (r >> 16) + (t >> 16) + (o >> 16) << 16 | o & 65535
    }

    function At(r) {
        let t = "",
            o = m(r);
        for (let i = 0; i < o; i += 1) {
            let e = r.charCodeAt(i);
            t += rt.charAt(e >>> 4 & 15) + rt.charAt(e & 15)
        }
        return t
    }

    function It(r) {
        let t = "",
            o = m(r) * 32;
        for (let i = 0; i < o; i += 8) t += I(r[i >> 5] >>> 24 - i % 32 & 255);
        return t
    }

    function St(r) {
        let t = m(r) * 8,
            o = Array(m(r) >> 2),
            i = m(o),
            e;
        for (e = 0; e < i; e += 1) o[e] = 0;
        for (e = 0; e < t; e += 8) o[e >> 5] |= (r.charCodeAt(e / 8) & 255) << 24 - e % 32;
        return o
    }

    function x(r, t) {
        return r >>> t | r << 32 - t
    }

    function ot(r, t) {
        return r >>> t
    }

    function Pt(r) {
        return x(r, 7) ^ x(r, 18) ^ ot(r, 3)
    }

    function Nt(r) {
        return x(r, 17) ^ x(r, 19) ^ ot(r, 10)
    }
    var Ot = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];

    function Dt(r, t) {
        let o = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
            i = new Array(64),
            e, n, s, f, a, E, A, S, P, d, b, F;
        for (r[t >> 5] |= 128 << 24 - t % 32, r[(t + 64 >> 9 << 4) + 15] = t, P = 0; P < m(r); P += 16) {
            for (e = o[0], n = o[1], s = o[2], f = o[3], a = o[4], E = o[5], A = o[6], S = o[7], d = 0; d < 64; d += 1) d < 16 ? i[d] = r[d + P] : i[d] = p(p(p(Nt(i[d - 2]), i[d - 7]), Pt(i[d - 15])), i[d - 16]), b = p(p(p(p(S, x(a, 6) ^ x(a, 11) ^ x(a, 25)), a & E ^ ~a & A), Ot[d]), i[d]), F = p(x(e, 2) ^ x(e, 13) ^ x(e, 22), e & n ^ e & s ^ n & s), S = A, A = E, E = a, a = p(f, b), f = s, s = n, n = e, e = p(b, F);
            o[0] = p(e, o[0]), o[1] = p(n, o[1]), o[2] = p(s, o[2]), o[3] = p(f, o[3]), o[4] = p(a, o[4]), o[5] = p(E, o[5]), o[6] = p(A, o[6]), o[7] = p(S, o[7])
        }
        return o
    }

    function O(r) {
        return tt(() => (r = ht(N(r) ? r : ""), At(It(Dt(St(r), m(r) * 8)))), "")
    }

    function g(r, t) {
        return u(this, null, function*() {
            let o = yield t.cookie.get(Z), i = r.email !== null ? O(r.email) : "", e = r.phone !== null ? O(r.phone) : r.shippingAddress && r.shippingAddress.phone != null ? O(r.shippingAddress.phone) : "";
            return {
                hashedEmail: i,
                hashedPhone: e,
                cookie1: o
            }
        })
    }
    var et = w + "/scs/shopify";

    function h(r, t) {
        let {
            hashedEmail: o,
            hashedPhone: i,
            cookie1: e
        } = r, n = t.settings.pixelId;
        fetch(et, {
            method: "POST",
            body: `pid=${n}&u_hem=${o}&u_hpn=${i}&u_c1=${e}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
    }
    var it = "ADD_BILLING",
        R = "ADD_CART",
        nt = "shopify-wpe",
        st = "PAGE_VIEW",
        at = "PURCHASE",
        mt = "SEARCH",
        pt = "START_CHECKOUT",
        ct = "VIEW_CONTENT";

    function c(r, t = {}) {
        t.integration = nt, _.snaptr("track", r, t)
    }

    function ft(r) {
        r.analytics.subscribe(G, t => u(this, null, function*() {
            let o = C(t.id, t.data.checkout);
            o.cookie1 = t.clientId;
            let i = yield g(t.data.checkout, r.browser);
            h(i, r), c(it, o)
        }))
    }

    function dt(r) {
        r.analytics.subscribe(W, t => u(this, null, function*() {
            let o = C(t.id, t.data.checkout);
            o.cookie1 = t.clientId;
            let i = yield g(t.data.checkout, r.browser);
            h(i, r), c(at, o)
        }))
    }

    function ut(r) {
        r.analytics.subscribe(v, t => u(this, null, function*() {
            let o = C(t.id, t.data.checkout);
            o.cookie1 = t.clientId;
            let i = yield g(t.data.checkout, r.browser);
            h(i, r), c(pt, o)
        }))
    }

    function _t(r) {
        r.analytics.subscribe(B, t => {
            let o = T(t.id);
            o.cookie1 = t.clientId, c(st, o)
        })
    }

    function U(r) {
        let t = {};
        return r.replace(/[?&]+([^=&]+)=([^&]*)/gi, (o, i, e) => (t[i] = e, e)), t
    }

    function xt(r, t) {
        let o = "";
        try {
            let i = new URL(r),
                e = i.pathname.split("/");
            if (e[e.length - 1] === "search") o = U(r).q;
            else if (t) {
                let n = new URL(t);
                if (n.hostname === i.hostname) {
                    let s = n.pathname.split("/");
                    s[s.length - 1] === "search" && (o = U(n.href).q)
                }
            }
        } catch (i) {}
        return o
    }

    function D(r, t, o, i) {
        var s;
        let e = T(r);
        e.item_category = t.product.id, e.item_ids = [String(t.id)], e.description = (s = t.title) == null ? void 0 : s.trim(), e.price = t.price.amount, e.currency = t.price.currencyCode;
        let n = xt(o, i);
        return n !== "" && (e.search_string = n), e
    }

    function Et(r) {
        r.analytics.subscribe(z, t => {
            let o = t.data.cartLine;
            if (o !== null) {
                let i = D(t.id, o.merchandise, t.context.window.location.href, t.context.document.referrer);
                i.cookie1 = t.clientId, c(R, i)
            } else c(R)
        })
    }

    function Tt(r) {
        r.analytics.subscribe(Y, t => {
            let o = D(t.id, t.data.productVariant, t.context.window.location.href, t.context.document.referrer);
            o.cookie1 = t.clientId, c(ct, o)
        })
    }

    function lt(r) {
        r.analytics.subscribe(X, t => {
            let o = T(t.id);
            o.search_string = t.data.searchResult.query, c(mt, o)
        })
    }

    function Ct(r) {
        K(r.settings.pixelId), M(r.init.data), _t(r), lt(r), Tt(r), Et(r), ft(r), ut(r), dt(r)
    }
    y(r => u(void 0, null, function*() {
        _.api = r, _.document = r.init.context.document, _.navigator = r.init.context.navigator, location.shopifyContext = _, importScripts(H), yield _.shopifyReady, Ct(r)
    }));
})();