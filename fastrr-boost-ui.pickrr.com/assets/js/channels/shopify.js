(() => {
    "use strict";
    const e = {
            localStorageAvailable: function() {
                try {
                    const e = "__test__".concat(Math.random());
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }(),
            get: function(e) {
                return this.localStorageAvailable ? localStorage.getItem(e) : null
            },
            set: function(e, t) {
                this.localStorageAvailable && localStorage.setItem(e, t)
            },
            remove: function(e) {
                this.localStorageAvailable && localStorage.removeItem(e)
            }
        },
        t = {
            sessionStorageAvailable: function() {
                try {
                    const e = "__test__".concat(Math.random());
                    return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }(),
            get: function(e) {
                return this.sessionStorageAvailable ? sessionStorage.getItem(e) : null
            },
            set: function(e, t) {
                this.sessionStorageAvailable && sessionStorage.setItem(e, t)
            },
            remove: function(e) {
                this.sessionStorageAvailable && sessionStorage.removeItem(e)
            }
        },
        o = {
            setCookie: function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    l = e + "=" + encodeURIComponent(t);
                if (o) {
                    var a = new Date(o).toUTCString();
                    l += "; expires=" + a
                }
                n && (l += "; domain=" + n), document.cookie = "".concat(l, ";path=/;SameSite=None;Secure")
            },
            getCookie: function(e) {
                let t = document.cookie.split(";");
                for (let n = 0; n < t.length; n++) {
                    var o = t[n].trim();
                    if (0 === o.indexOf(e + "=")) return decodeURIComponent(o.substring(e.length + 1))
                }
                return null
            },
            removeCookie: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.setCookie(e, "", "Thu, 01 Jan 1970 00:00:00 GMT", t)
            }
        },
        n = async function(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
            try {
                const i = {
                        method: t,
                        headers: {
                            "Content-Type": "application/json",
                            ...a && { ...a
                            }
                        },
                        ...l && {
                            body: JSON.stringify(l)
                        }
                    },
                    r = await fetch(e, i);
                if (!r.ok) return void("function" == typeof n && n(r.status));
                const d = await r.json();
                return "function" == typeof o && o(d), d
            } catch (e) {
                "function" == typeof n && n(e.message)
            }
        },
        l = e => {
            try {
                n("https://events.pickrr.com/collect", "POST", null, (function(e) {}), {
                    etype: null == e ? void 0 : e.name,
                    ppath: null != e && e.ppath ? null == e ? void 0 : e.ppath : "",
                    usid: null != e && e.usid ? null == e ? void 0 : e.usid : "",
                    uuid: null != e && e.uuid ? null == e ? void 0 : e.uuid : "",
                    et: (new Date).toISOString(),
                    ptype: null != e && e.category ? null == e ? void 0 : e.category : "",
                    data: {
                        env: "PROD",
                        payload: JSON.stringify({ ...(null == e ? void 0 : e.payload) && (null == e ? void 0 : e.payload),
                            site: window.location.host
                        })
                    }
                })
            } catch (e) {}
        },
        a = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        })),
        i = e => {
            const t = Date.now();
            return "".concat(e, "-").concat(t)
        },
        r = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return new Promise((o => {
                const n = document.createElement("script");
                n.src = e, t && (n.type = "module"), n.onload = () => {
                    o(!0)
                }, n.onerror = () => {
                    o(!1)
                }, document.body.append(n)
            }))
        },
        d = e => /[^/]*$/.exec(e)[0],
        u = e => {
            const t = /^(https?:\/\/)?([^\/]+)/i.exec(e);
            return t && t[2]
        },
        s = function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
            return t.reduceRight(((e, t) => function() {
                return t(e(...arguments))
            }))
        },
        c = new URLSearchParams(window.location.search),
        v = () => {
            var e, t, o;
            const n = {
                utm_source: null !== (e = c.get("utm_source")) && void 0 !== e ? e : null,
                utm_medium: null !== (t = c.get("utm_medium")) && void 0 !== t ? t : null,
                utm_campaign: null !== (o = c.get("utm_campaign")) && void 0 !== o ? o : null
            };
            return window.btoa(encodeURIComponent(JSON.stringify(n)))
        },
        p = e => {
            try {
                var t;
                null === (t = ua) || void 0 === t || t.event(null == e ? void 0 : e.eventName, null == e ? void 0 : e.payload)
            } catch (e) {}
        };
    var m, y, h, g;
    window.checkoutBuyer = window.checkoutBuyer ? window.checkoutBuyer : "https://fastrr-boost-ui.pickrr.com/", window.Razorpay;
    var f = !1,
        w = 1,
        k = null,
        _ = "appmaker" === c.get("application");
    const b = new AbortController,
        I = c.get("isFastrrProduct");
    window.enhanced_conversion_data = {};
    var C = ["ranbazaar.com", "thehouseofrare.com", "aramya.in", "blackberrys.com", "arabianaroma.co.in"],
        E = null,
        S = null,
        T = "true" === (null === (m = document.getElementById("disablePrefetch")) || void 0 === m ? void 0 : m.value),
        A = "true" === (null === (y = document.getElementById("disableUniversalCookie")) || void 0 === y ? void 0 : y.value),
        N = "true" === (null === (h = document.getElementById("shiprocketAddressAppEnabled")) || void 0 === h ? void 0 : h.value),
        U = !1;
    let B = 0;
    const O = {
            "thehouseofrare.com": ["THIS STYLE SUITS YOU PERFECTLY 😎", "MOST ADMIRED FASHION BRAND OF INDIA 🇮🇳"],
            "zanducare.com": ["Aapke badalti zindagi ke health expert!!"],
            "fastrrtestingstore.myshopify.com": ["Aapke badalti zindagi ke health expert!!"],
            "harish-30.myshopify.com": ["THIS STYLE SUITS YOU PERFECTLY 😎", "MOST ADMIRED FASHION BRAND OF INDIA 🇮🇳"]
        },
        P = {
            "thehouseofrare.com": !0,
            "harish-30.myshopify.com": !0,
            "fastrrtestingstore.myshopify.com": !0,
            "zanducare.com": !0
        };
    ! function() {
        try {
            window.dataLayer = window.dataLayer || [], gtag.config("G-123")
        } catch (e) {}
    }(),
    function() {
        try {
            var e;
            const t = null === (e = document.getElementById("fastrr-ga-measurement-id")) || void 0 === e ? void 0 : e.value;
            t && (gtag("get", t, "session_id", (e => {
                E = e
            })), gtag("get", t, "client_id", (e => {
                S = e
            })))
        } catch (e) {}
    }(), l({
        name: "SCRIPT_PARSE_INITIATED",
        category: "SCRIPT_INIT",
        payload: {}
    });
    const D = () => {
            try {
                document.querySelector(".loader5") && (document.querySelector(".loader5").style.display = "block", document.querySelector(".sr-checkout-visible").style.display = "none", document.querySelector(".sr-checkout-visible2").style.display = "none", document.querySelector(".sr-checkout-visible1").style.display = "none", document.querySelector(".sr-headless-checkout").style.opacity = ".7", document.querySelectorAll(".sr-headless-checkout").forEach((e => {
                    e.disabled = !0
                }))), document.querySelector(".sr-checkout-loader") && (document.querySelector(".sr-checkout-loader").style.display = "block", document.querySelector(".sr-checkout-visible-button1").style.display = "none", document.querySelector(".sr-checkout-visible2-button1").style.display = "none", document.querySelector(".sr-checkout-visible1-button1").style.display = "none", document.querySelector(".sr-headless-checkout-button1").style.opacity = ".7", document.querySelector(".sr-headless-checkout-button1").disabled = !0)
            } catch (e) {}
        },
        R = () => {
            try {
                document.querySelector(".loader5") && (document.querySelector(".loader5").style.display = "none", document.querySelector(".sr-checkout-visible2").style.display = "inline-block", document.querySelector(".sr-checkout-visible").style.display = "inline-block", document.querySelector(".sr-checkout-visible1").style.display = "inline-block", document.querySelector(".sr-headless-checkout").style.opacity = "1", document.querySelectorAll(".sr-headless-checkout").forEach((e => {
                    e.disabled = !1
                }))), document.querySelector(".sr-checkout-loader") && (document.querySelector(".sr-checkout-loader").style.display = "none", document.querySelector(".sr-checkout-visible-button1").style.display = "inline-block", document.querySelector(".sr-checkout-visible2-button1").style.display = "inline-block", document.querySelector(".sr-checkout-visible1-button1").style.display = "inline-block", document.querySelector(".sr-headless-checkout-button1").style.opacity = "1", document.querySelector(".sr-headless-checkout-button1").disabled = !1)
            } catch (e) {}
        },
        q = () => {
            try {
                document.getElementById("headless-container").remove(), document.getElementById("fastrr-main-container") && document.getElementById("fastrr-main-container").remove(), document.querySelector("body").style.overflow = "auto", document.querySelectorAll(".sr-headless-checkout").forEach((e => {
                    e.removeAttribute("disabled")
                })), clearTimeout(g), M.removeIframe(null), F()
            } catch (e) {}
        },
        L = e => {
            navigator.credentials.get({
                otp: {
                    transport: ["sms"]
                },
                signal: b.signal
            }).then((e => {
                document.getElementById("headless-iframe").contentWindow.postMessage({
                    trigger: "otp-autofill",
                    data: e.code
                }, checkoutBuyer)
            })).catch((e => {}))
        },
        F = () => {
            b.abort(), window.removeEventListener("load", L())
        },
        x = () => {
            try {
                var e, t;
                const n = null !== (e = o.getCookie("fastrr_uuid")) && void 0 !== e ? e : null,
                    l = null !== (t = o.getCookie("fastrr_usid")) && void 0 !== t ? t : null,
                    r = new Date;
                null == r || r.setFullYear(r.getFullYear() + 10);
                const d = new Date;
                null == d || d.setTime(d.getTime() + 18e5);
                const u = (e, t) => {
                    var n, l, a;
                    o.setCookie("fastrr_uuid", e, r), o.setCookie("fastrr_usid", t, d), null !== (n = data) && void 0 !== n && n.sendMessage && (null === (l = document.getElementById("headless-iframe")) || void 0 === l || null === (a = l.contentWindow) || void 0 === a || a.postMessage({
                        trigger: "get-uuid-usid",
                        data: {
                            deviceId: e,
                            sessionId: t
                        }
                    }, checkoutBuyer))
                };
                if (n) n && !l ? u(n, i(n)) : n && l && u(n, l);
                else {
                    const e = a();
                    u(e, i(e))
                }
            } catch (e) {}
        };
    window.shiprocketCheckoutEvents = {
        buyProduct: function(e) {
            D(), shiprocketCheckoutBuyProductHandler(e), l({
                name: "PRODUCT_BUTTON_CLICKED",
                category: "product"
            })
        },
        buyCart: function(e) {
            D(), shiprocketCheckoutBuyCartHandler(e), l({
                name: "CART_BUTTON_CLICKED",
                category: "cart"
            })
        },
        buyDirect: function(e) {
            shiprocketCheckoutDirectHandler(e), l({
                name: "MANUAL_INTEG_".concat(null == e ? void 0 : e.type, "_BUTTON_CLICKED"),
                category: null == e ? void 0 : e.type
            })
        }
    }, window.HeadlessCheckout = {
        buyNow: function(e) {
            D(), shiprocketCheckoutBuyProductHandler(e), l({
                name: "PRODUCT_BUTTON_CLICKED",
                category: "product"
            })
        },
        checkout: function(e) {
            D(), shiprocketCheckoutBuyCartHandler(e), l({
                name: "CART_BUTTON_CLICKED",
                category: "cart"
            })
        },
        addToCart: function(e, t, o) {
            X({
                pass: !0,
                type: "custom",
                token: t,
                fallbackUrl: null != o && o.fallbackUrl ? null == o ? void 0 : o.fallbackUrl : null,
                appendPreloader: !0
            }), l({
                name: "CUSTOM_BUTTON_CLICKED",
                category: "cart"
            })
        },
        InitiateMasonCheckout: function(e) {
            shiprocketCheckoutMasonHandler(e), l({
                name: "MASON_BUTTON_CLICKED",
                category: "cart"
            })
        },
        InitiateDirectCheckout: function(e, t) {
            var o, n;
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                i = arguments.length > 5 ? arguments[5] : void 0;
            shiprocketCheckoutDirectHandler({
                type: "cart",
                products: a,
                cartAttributes: i
            }), l({
                name: "MANUAL_INTEG_".concat(null === (o = data) || void 0 === o ? void 0 : o.type, "_BUTTON_CLICKED"),
                category: null === (n = data) || void 0 === n ? void 0 : n.type
            })
        }
    };
    var M = {
        markIframeLoaded: function(e) {
            var t = document.getElementById("headless-payment-iframe");
            t && t.setAttribute("data-loaded", 1)
        },
        headlessClose: function(e) {
            q()
        },
        redirectTo: function(e) {
            e.url && (window.location.href = e.url)
        },
        loadStorage: function(e) {
            var t, o;
            null === (t = document.getElementById("headless-iframe")) || void 0 === t || t.contentWindow.postMessage({
                trigger: "headless-storage",
                data: JSON.stringify(window.localStorage)
            }, checkoutBuyer), "headless-storage-prefetch" === (null == e ? void 0 : e.trigger) && (null === (o = document.getElementById("prefetch-iframe")) || void 0 === o || o.contentWindow.postMessage({
                trigger: "headless-storage",
                data: JSON.stringify(window.localStorage)
            }, checkoutBuyer))
        },
        setItem: function(t) {
            e.set(t.key, t.value)
        },
        removeItem: function(t) {
            e.remove(t.key)
        },
        createPayment: function(e) {
            var t = document.getElementById("headless-payment-iframe");
            t && t.getAttribute("data-loaded") ? (t.contentWindow.postMessage({
                trigger: "headless-create-payment",
                data: e
            }, checkoutBuyer), t.style.display = "") : setTimeout((() => {
                M.createPayment(e)
            }), 250)
        },
        removeIframe: function(e) {
            var t = document.getElementById("headless-payment-iframe");
            t && t.remove()
        },
        paymentStatus: function(e) {
            document.getElementById("headless-iframe").contentWindow.postMessage({
                trigger: "headless-payment-status",
                actions: e.actions
            }, checkoutBuyer)
        },
        getUUIDParent: function(e) {
            x()
        },
        ucNotifyHandler: function(e) {
            try {
                var t;
                null === (t = ua) || void 0 === t || t.notify("otp_verified", {
                    channel_id: 16
                })
            } catch (e) {}
        },
        ucEventHandler: function(e) {
            try {
                p({
                    eventName: null == e ? void 0 : e.eventName,
                    payload: null == e ? void 0 : e.payload
                })
            } catch (e) {}
        },
        billdeskStandardHandler: function(e) {
            (e => {
                U ? window.loadBillDeskSdk(null == e ? void 0 : e.config) : new Promise((e => {
                    const t = document.createElement("link");
                    t.href = "https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css", t.rel = "stylesheet", t.type = "text/css", t.onload = () => {
                        e(!0)
                    }, t.onerror = () => {
                        e(!1)
                    }, document.head.append(t)
                })).then((() => {
                    r("https://pay.billdesk.com/jssdk/v1/dist/billdesksdk.js").then((() => {
                        r("https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js", !0).then((() => {
                            U = !0, window.loadBillDeskSdk(null == e ? void 0 : e.config)
                        }))
                    }))
                }))
            })(e)
        }
    };
    const H = e => {
            var t, n, a, i, d, u, s, c, v;
            let p = e.data;
            switch (p.trigger) {
                case "headless-close":
                    q();
                    break;
                case "gtag":
                    gtag("event", p.data.event, p.data.data);
                    break;
                case "gtm-events":
                    (e => {
                        (e => {
                            try {
                                window.dataLayer.push(e)
                            } catch (e) {}
                        })(e)
                    })(p.data);
                    break;
                case "headless-payment-close":
                    (() => {
                        try {
                            var e;
                            null !== (e = document.getElementsByClassName("headless-payment-iframe")) && void 0 !== e && e[0] && document.getElementsByClassName("headless-payment-iframe")[0].remove()
                        } catch (e) {}
                    })();
                    break;
                case "headless-payment-hide":
                    (() => {
                        try {
                            var e;
                            null !== (e = document.getElementsByClassName("headless-payment-iframe")) && void 0 !== e && e[0] && (document.getElementsByClassName("headless-payment-iframe")[0].style.backgroundColor = "transparent")
                        } catch (e) {}
                    })();
                    break;
                case "reload-iframe":
                    (e => {
                        try {
                            document.getElementById("headless-iframe") && (document.getElementById("headless-iframe").src = e)
                        } catch (e) {}
                    })(p.data);
                    break;
                case "Wigzo":
                    (e => {
                        try {
                            if ("configure" === (null == e ? void 0 : e.eventName)) l = window, a = document, i = "script", r = "https://app.wigzo.com/wigzo.compressed.js", d = "wigzo", l.WigzoObject = d, l[d] = l[d] || function() {
                                (l[d].q = l[d].q || []).push(arguments)
                            }, l[d].l = 1 * new Date, l[d].h = r, u = a.createElement(i), s = a.getElementsByTagName(i)[0], u.async = 1, u.src = r, s.parentNode.insertBefore(u, s), window.wigzo("configure", null == e ? void 0 : e.data);
                            else if ("track" === (null == e ? void 0 : e.eventName)) {
                                var t, o;
                                window.wigzo("track", null == e || null === (t = e.data) || void 0 === t ? void 0 : t.eventName, null == e || null === (o = e.data) || void 0 === o ? void 0 : o.wigzoProperties)
                            } else if ("identify" === (null == e ? void 0 : e.eventName)) {
                                var n;
                                window.wigzo("identify", {
                                    phone: null == e || null === (n = e.data) || void 0 === n ? void 0 : n.phone
                                })
                            } else "trackBuy" === (null == e ? void 0 : e.eventName) ? window.wigzo("track", "buy", null == e ? void 0 : e.data) : "identifyEmail" === (null == e ? void 0 : e.eventName) && window.wigzo("identify", null == e ? void 0 : e.data, ["email"])
                        } catch (e) {}
                        var l, a, i, r, d, u, s
                    })(p);
                    break;
                case "Webengage":
                    ! function(e) {
                        try {
                            var t, o;
                            if ("Checkout created" === (null == e ? void 0 : e.eventName)) null === (t = window) || void 0 === t || null === (o = t.webengage) || void 0 === o || o.track("Shiprocket checkout created", null == e ? void 0 : e.data);
                            else if ("login" === (null == e ? void 0 : e.eventName)) {
                                var n, l, a;
                                null === (n = window) || void 0 === n || null === (l = n.webengage) || void 0 === l || null === (a = l.user) || void 0 === a || a.login(null == e ? void 0 : e.data)
                            } else if ("we_phone" === (null == e ? void 0 : e.eventName)) {
                                var i, r, d;
                                null === (i = window) || void 0 === i || null === (r = i.webengage) || void 0 === r || null === (d = r.user) || void 0 === d || d.setAttribute("we_phone", null == e ? void 0 : e.data)
                            } else if ("we_first_name" === (null == e ? void 0 : e.eventName)) {
                                var u, s, c;
                                null === (u = window) || void 0 === u || null === (s = u.webengage) || void 0 === s || null === (c = s.user) || void 0 === c || c.setAttribute("we_first_name", null == e ? void 0 : e.data)
                            } else if ("we_last_name" === (null == e ? void 0 : e.eventName)) {
                                var v, p, m;
                                null === (v = window) || void 0 === v || null === (p = v.webengage) || void 0 === p || null === (m = p.user) || void 0 === m || m.setAttribute("we_last_name", null == e ? void 0 : e.data)
                            } else if ("we_email" === (null == e ? void 0 : e.eventName)) {
                                var y, h, g;
                                null === (y = window) || void 0 === y || null === (h = y.webengage) || void 0 === h || null === (g = h.user) || void 0 === g || g.setAttribute("we_email", null == e ? void 0 : e.data)
                            } else if ("Checkout updated" === (null == e ? void 0 : e.eventName)) {
                                var f, w;
                                null === (f = window) || void 0 === f || null === (w = f.webengage) || void 0 === w || w.track("Shiprocket checkout updated", null == e ? void 0 : e.data)
                            }
                        } catch (e) {}
                    }(p);
                    break;
                case "Moengage":
                    ! function(e) {
                        try {
                            var t, o, n, l, a, i, r, d, u, s, c, v, p, m, y, h;
                            const x = null === (t = window) || void 0 === t || null === (o = t.Moengage) || void 0 === o || null === (n = o.user) || void 0 === n ? void 0 : n.getAttributes();
                            var g, f, w, k, _, b, I, C, E, S, T, A, N, U, B, O, P, D, R, q, L, F;
                            (null == e ? void 0 : e.eventName) && (null === (l = window) || void 0 === l || null === (a = l.Moengage) || void 0 === a || a.track_event(null == e ? void 0 : e.eventName, { ...null == e ? void 0 : e.data
                            })), null != e && null !== (i = e.data) && void 0 !== i && i.lastName && (null === (g = window) || void 0 === g || null === (f = g.Moengage) || void 0 === f || f.add_last_name(null == e || null === (w = e.data) || void 0 === w ? void 0 : w.lastName)), null != e && null !== (r = e.data) && void 0 !== r && r.firstName && (null === (k = window) || void 0 === k || null === (_ = k.Moengage) || void 0 === _ || _.add_first_name(null == e || null === (b = e.data) || void 0 === b ? void 0 : b.firstName)), null == e || null === (d = e.data) || void 0 === d || !d.platformCustomerId || null != x && x.platformCustomerId && (null == x ? void 0 : x.platformCustomerId) == (null == e || null === (u = e.data) || void 0 === u ? void 0 : u.platformCustomerId) || null === (I = window) || void 0 === I || null === (C = I.Moengage) || void 0 === C || null === (E = C.user) || void 0 === E || E.addAttribute("platformCustomerId", null == e || null === (S = e.data) || void 0 === S ? void 0 : S.platformCustomerId), null == e || null === (s = e.data) || void 0 === s || !s.email || null != x && x.USER_ATTRIBUTE_USER_EMAIL && (null == x ? void 0 : x.USER_ATTRIBUTE_USER_EMAIL) == (null == e || null === (c = e.data) || void 0 === c ? void 0 : c.email) || null === (T = window) || void 0 === T || null === (A = T.Moengage) || void 0 === A || A.add_email(null == e || null === (N = e.data) || void 0 === N ? void 0 : N.email), null == e || null === (v = e.data) || void 0 === v || !v.phoneNo || null != x && x.USER_ATTRIBUTE_USER_MOBILE && (null == x ? void 0 : x.USER_ATTRIBUTE_USER_MOBILE) == (null == e || null === (p = e.data) || void 0 === p ? void 0 : p.phoneNo) || null === (U = window) || void 0 === U || null === (B = U.Moengage) || void 0 === B || B.add_mobile(null == e || null === (O = e.data) || void 0 === O ? void 0 : O.phoneNo), null == e || null === (m = e.data) || void 0 === m || !m.unique_id_value || null != x && x.USER_ATTRIBUTE_UNIQUE_ID || null === (P = window) || void 0 === P || null === (D = P.Moengage) || void 0 === D || D.add_unique_user_id(null == e || null === (R = e.data) || void 0 === R ? void 0 : R.unique_id_value), null != e && null !== (y = e.data) && void 0 !== y && y.unique_id_value && (null == x ? void 0 : x.USER_ATTRIBUTE_UNIQUE_ID) != (null == e || null === (h = e.data) || void 0 === h ? void 0 : h.unique_id_value) && (null === (q = window) || void 0 === q || null === (L = q.Moengage) || void 0 === L || L.update_unique_user_id(null == e || null === (F = e.data) || void 0 === F ? void 0 : F.unique_id_value))
                        } catch (e) {}
                    }(p);
                    break;
                case "razorpay-standard-checkout":
                    (e => {
                        r("https://checkout.razorpay.com/v1/checkout.js").then((() => {
                            new Razorpay(e).open()
                        }))
                    })(null == p ? void 0 : p.data);
                    break;
                case "cashfree-standard-checkout":
                    (e => {
                        r("https://sdk.cashfree.com/js/v3/cashfree.js").then((() => {
                            const t = Cashfree({
                                mode: "production"
                            });
                            let o = {
                                paymentSessionId: e,
                                redirectTarget: "_self"
                            };
                            t.checkout(o)
                        }))
                    })(null == p ? void 0 : p.data);
                    break;
                case "otp-read-start":
                    "OTPCredential" in window && window.addEventListener("load", L());
                    break;
                case "otp-read-stop":
                    F();
                    break;
                case "open-true-caller":
                    ((e, t) => {
                        try {
                            window.open(e, "_top"), setTimeout((() => {
                                var e, o;
                                document.hasFocus() || null === (e = document.getElementById("headless-iframe")) || void 0 === e || null === (o = e.contentWindow) || void 0 === o || o.postMessage({
                                    trigger: "true-caller-request",
                                    payload: t
                                }, checkoutBuyer)
                            }), 600)
                        } catch (e) {}
                    })(null == p ? void 0 : p.data, null == p ? void 0 : p.payload);
                    break;
                case "set-cookie":
                    o.setCookie(null == p || null === (t = p.data) || void 0 === t ? void 0 : t.name, null == p || null === (n = p.data) || void 0 === n ? void 0 : n.data, null == p || null === (a = p.data) || void 0 === a ? void 0 : a.time);
                    break;
                case "set-analytics-cookie":
                    o.setCookie(null == p || null === (i = p.data) || void 0 === i ? void 0 : i.name, JSON.stringify(null == p || null === (d = p.data) || void 0 === d ? void 0 : d.data), null == p || null === (u = p.data) || void 0 === u ? void 0 : u.time);
                    break;
                case "hide-pre-loader":
                    (() => {
                        try {
                            document.getElementById("fastrr-pre-loader") && (document.getElementById("fastrr-pre-loader").style.display = "none")
                        } catch (e) {}
                    })();
                    break;
                case "ga-session-id-parent":
                    (e => {
                        gtag("get", e, "session_id", (e => {
                            var t, o;
                            null === (t = document.getElementById("headless-iframe")) || void 0 === t || null === (o = t.contentWindow) || void 0 === o || o.postMessage({
                                trigger: "ga-session-id",
                                field: e
                            }, checkoutBuyer)
                        })), gtag("get", e, "client_id", (e => {
                            var t, o;
                            null === (t = document.getElementById("headless-iframe")) || void 0 === t || null === (o = t.contentWindow) || void 0 === o || o.postMessage({
                                trigger: "ga-client-id",
                                field: e
                            }, checkoutBuyer)
                        }))
                    })(p.data);
                    break;
                case "init-checkout":
                    window.shirocketCheckoutUpsellHandler(p);
                    break;
                case "convesion-gtm-event":
                    enhanced_conversion_data = null == p ? void 0 : p.enhanced_conversion_data, gtag("config", null == p || null === (s = p.config) || void 0 === s ? void 0 : s.configId, { ...null == p || null === (c = p.config) || void 0 === c ? void 0 : c.configObject
                    }), gtag("event", null == p ? void 0 : p.eventName, p.conversionData);
                    break;
                case "send-collect-events":
                    (e => {
                        try {
                            var t, n;
                            const i = null !== (t = o.getCookie("fastrr_uuid")) && void 0 !== t ? t : null,
                                r = null !== (n = o.getCookie("fastrr_usid")) && void 0 !== n ? n : null;
                            if (!o.getCookie("fastrrUserIdEventTriggered")) {
                                var a;
                                l({
                                    name: null == e ? void 0 : e.etype,
                                    ppath: window.location.pathname,
                                    uuid: i,
                                    usid: r,
                                    payload: {
                                        knownUser: null != e && e.knownUser ? "true" : "false",
                                        user_id: null !== (a = null == e ? void 0 : e.user_id) && void 0 !== a ? a : "null"
                                    }
                                });
                                const t = new Date((new Date).setHours(23, 59, 59, 999));
                                o.setCookie("fastrrUserIdEventTriggered", "1", t)
                            }
                        } catch (e) {}
                    })(null == p || null === (v = p.data) || void 0 === v ? void 0 : v.eventData)
            }
        },
        W = e => {
            let t = e.data;
            null != t && t.actions ? (e => {
                if (e && e.length > 0)
                    for (let t of e) "function" == typeof M[t.action] && M[t.action](t.data)
            })(null == t ? void 0 : t.actions) : H(e)
        },
        j = e => {
            let t = e.getAttribute("data-type"),
                o = document.createElement("button");
            o.type = "button", o.className = "sr-headless-checkout", o.innerHTML = (() => {
                try {
                    var e, t, o, n;
                    let l = {
                            template: "all",
                            discount: {
                                type: "",
                                value: "0"
                            }
                        },
                        a = "BUY NOW",
                        i = "";
                    if (l.discount.type = null === (e = document.getElementById("discountType")) || void 0 === e ? void 0 : e.value, l.discount.value = null === (t = document.getElementById("discValue")) || void 0 === t ? void 0 : t.value, l.template = null === (o = document.getElementById("template")) || void 0 === o ? void 0 : o.value, l.customText = null === (n = document.getElementById("customText")) || void 0 === n ? void 0 : n.value, l.discount && parseInt(l.discount.value)) {
                        switch (l.discount.type) {
                            case "flat":
                                i = "&#8377;" + l.discount.value;
                                break;
                            case "percent":
                                i = l.discount.value + "%"
                        }
                        i = "Extra ".concat(i, " Off on")
                    }
                    switch (l.template) {
                        case "cod":
                            a += " with COD", i = "";
                            break;
                        case "upi":
                            a += " with UPI", i = i ? i + " UPI" : "";
                            break;
                        case "cod-upi":
                            a += " with UPI / COD", i = i ? i + " UPI" : "";
                            break;
                        case "all":
                        case "rz":
                            i = i ? i + " Prepaid Orders" : "";
                            break;
                        case "cash-on-delivery":
                            a += " with Cash On Delivery";
                            break;
                        case "custom-text":
                            a = l.customText;
                            break;
                        default:
                            a += " with UPI / COD"
                    }
                    return '<div class="sr-d-flex flex-center"><div class="sr-d-flex full-width flex-center">' + (l.template, "") + '<span class="sr-checkout-visible2">'.concat(a, "</span> ").concat("cash-on-delivery" !== l.template ? '<img src="'.concat(checkoutBuyer, 'assets/images/boost_button/upi_options.svg" alt="Google Pay | Phone Pay | UPI" class="sr-pl-15 sr-checkout-visible" /><div class ="loader5"></div><img src="').concat(checkoutBuyer, 'assets/images/boost_button/right_arrow.svg" class="sr-pl-15 sr-checkout-visible1" alt="right_arrow" />') : "", "</div><div>") + (i ? '<span class="sr-discount-label"> '.concat(i, " </span>") : "") + '<span class="sr-powered-by"><img src="'.concat(checkoutBuyer, 'assets/images/boost_button/powered_by.svg " alt="" /></span></div></div>')
                } catch (e) {}
            })(), 0 == e.childElementCount && ("product" == t ? o.setAttribute("onclick", "shiprocketCheckoutEvents.buyProduct(event)") : o.setAttribute("onclick", "shiprocketCheckoutEvents.buyCart(event)"), e.appendChild(o))
        },
        z = e => {
            e.forEach((e => {
                "childList" === e.type && e.addedNodes.forEach((e => {
                    if ("FORM" == e.nodeName.toUpperCase() || "DIV" == e.nodeName.toUpperCase())
                        if (e.classList.contains("shiprocket-headless")) j(e);
                        else {
                            let t = e.getElementsByClassName("shiprocket-headless");
                            for (let e of t) j(e)
                        }
                }))
            }))
        },
        J = e => {
            var t, n, l, a, i, r, d, u, s, c;
            return {
                platform: window.shiprocketCheckoutChannel,
                fbp: null !== (t = null == o ? void 0 : o.getCookie("_fbp")) && void 0 !== t ? t : null,
                fbc: null !== (n = null == o ? void 0 : o.getCookie("_fbc")) && void 0 !== n ? n : null,
                userDeviceId: null !== (l = o.getCookie("fastrr_uuid")) && void 0 !== l ? l : null,
                userSessionId: null !== (a = o.getCookie("fastrr_usid")) && void 0 !== a ? a : null,
                cart: window.btoa(encodeURIComponent(JSON.stringify(null == e ? void 0 : e.products))),
                ipAddress: null !== (i = k) && void 0 !== i ? i : null,
                utm_params: null != e && e.utmParams ? window.btoa(unescape(null == e ? void 0 : e.utmParams)) : null,
                uuid: null !== (r = null == e ? void 0 : e.uuid) && void 0 !== r ? r : null,
                couponCodeCookie: null != e && e.couponCode ? null == e ? void 0 : e.couponCode : null !== (d = null == o ? void 0 : o.getCookie("discount_code")) && void 0 !== d ? d : null,
                cartAttributes: null != e && e.cartAttributes ? window.btoa(encodeURIComponent(JSON.stringify(null == e ? void 0 : e.cartAttributes))) : null,
                ga4Details: E && S ? window.btoa(encodeURIComponent(JSON.stringify({
                    sessionId: E,
                    clientId: S
                }))) : null,
                channel: window.btoa(encodeURIComponent(JSON.stringify({
                    shop_name: "company-logo",
                    shop_url: null !== (u = document.getElementById("sellerDomain")) && void 0 !== u && u.value ? null === (s = document.getElementById("sellerDomain")) || void 0 === s ? void 0 : s.value : window.location.host,
                    redirectUrl: null == e ? void 0 : e.fallbackUrl,
                    credInstalled: f
                }))),
                showCustomText: null == P ? void 0 : P[null === (c = document.getElementById("sellerDomain")) || void 0 === c ? void 0 : c.value]
            }
        },
        G = e => {
            var t, o, n, l, a;
            switch (null == e ? void 0 : e.type) {
                case "product":
                    return { ...J(e),
                        type: "product"
                    };
                case "cart":
                    return { ...J(e),
                        type: "cart"
                    };
                case "paymentFailure":
                    return {
                        fastrr_status: 1
                    };
                case "paymentVerify":
                    return {
                        fastrr_transaction_id: c.get("fastrr_transaction_id"),
                        seller: c.get("seller"),
                        seller_id: c.get("seller_id")
                    };
                case "abandonedCart":
                    return {
                        type: c.get("type"),
                        "cart-resume-id": c.get("cart-resume-id"),
                        "seller-domain": c.get("seller-domain"),
                        cartAttributes: null != e && e.cartAttributes ? window.btoa(encodeURIComponent(JSON.stringify(null == e ? void 0 : e.cartAttributes))) : null,
                        type: c.get("type"),
                        utm_params: null != e && e.utmParams ? window.btoa(unescape(null == e ? void 0 : e.utmParams)) : null,
                        ...!c.get("seller-domain") && {
                            channel: window.btoa(encodeURIComponent(JSON.stringify({
                                shop_url: null !== (t = document.getElementById("sellerDomain")) && void 0 !== t && t.value ? null === (o = document.getElementById("sellerDomain")) || void 0 === o ? void 0 : o.value : window.location.host
                            })))
                        }
                    };
                case "productPage":
                    return {
                        type: "product",
                        isFastrrProduct: I,
                        "seller-domain": c.get("seller-domain"),
                        cart: window.btoa(encodeURIComponent(JSON.stringify(null == e ? void 0 : e.products))),
                        channel: window.btoa(encodeURIComponent(JSON.stringify({
                            redirectUrl: null == e ? void 0 : e.fallbackUrl,
                            credInstalled: f,
                            shop_url: c.get("seller-domain")
                        }))),
                        platform: window.shiprocketCheckoutChannel
                    };
                case "upsell":
                    return { ...J(e),
                        isUpsell: !0,
                        afterSellCoupon: null !== (n = null == e ? void 0 : e.couponCode) && void 0 !== n ? n : null,
                        couponCodeCookie: null,
                        type: "cart"
                    };
                case "appmaker":
                    return { ...J(e),
                        type: "cart",
                        application: "appmaker",
                        channel: window.btoa(encodeURIComponent(JSON.stringify({
                            shop_name: "company-logo",
                            shop_url: null == e ? void 0 : e.domain,
                            redirectUrl: null == e ? void 0 : e.fallbackUrl,
                            credInstalled: f
                        }))),
                        couponCodeCookie: null !== (l = null == e ? void 0 : e.couponCode) && void 0 !== l ? l : null
                    };
                case "custom":
                    return { ...J(e),
                        customCheckoutToken: null == e ? void 0 : e.token,
                        type: "cart",
                        platform: "CUSTOM",
                        utm_params_custom: v(),
                        cart: window.btoa(encodeURIComponent(JSON.stringify([])))
                    };
                case "mason":
                    return { ...J(e),
                        type: "cart",
                        couponCodeCookie: null !== (a = null == e ? void 0 : e.couponCode) && void 0 !== a ? a : null,
                        masonPayload: window.btoa(encodeURIComponent(JSON.stringify(null == e ? void 0 : e.masonPayload)))
                    }
            }
        },
        K = e => {
            try {
                if (null != e && e.appendPreloader && !document.getElementById("fastrr-pre-loader")) {
                    var t, o, n;
                    let l = document.createElement("div");
                    l.id = "fastrr-pre-loader", l.classList = "fastrr-pre-loader-container", l.innerHTML = '<div class="fastrr-pre-loader"> \n        <div class="animation-container">\n          <div class="animation-loader">\n        </div>\n          <div class="animation-image-div"></div>      \n          <img\n            src="\n            https://fastrr-boost-ui.pickrr.com/assets/images/shiprocket_logo_1.png"\n            class="animation-image"\n          />\n        </div>\n        <div class="splash__text">Initiating Checkout</div>\n        <div id="redirect-text-fastrr" class="redirect-button-fastrr" style="visibility:hidden;">Hmm..🤔 having to wait? <br/><a href='.concat(null == e ? void 0 : e.fallbackUrl, ' style="color:blue;">Click here</a> to speed things up ⚡️</div>\n        <div class="redirect-button-fastrr" style="position: absolute; bottom:0; font-size: 10px; color: #9e9e9e; padding: 20px! important;">').concat("string" == typeof(null == e ? void 0 : e.uuid) ? null == e ? void 0 : e.uuid : "", "</div>\n      </div>"), null === (t = document.getElementById("fastrr-main-container")) || void 0 === t || t.appendChild(l);
                    const a = null == O ? void 0 : O[null === (o = document.getElementById("sellerDomain")) || void 0 === o ? void 0 : o.value],
                        i = null == P ? void 0 : P[null === (n = document.getElementById("sellerDomain")) || void 0 === n ? void 0 : n.value];
                    if (a && i) {
                        const e = document.querySelector(".splash__text");
                        (null == a ? void 0 : a.length) > 1 ? e.classList.add("animate-flicker") : 1 == (null == a ? void 0 : a.length) && e.classList.add("static-text"), e.textContent = null == a ? void 0 : a[0], (null == a ? void 0 : a.length) > 1 && setInterval((() => {
                            ((e, t) => {
                                try {
                                    e && (e.textContent = null == t ? void 0 : t[(B + 1) % (null == t ? void 0 : t.length)], B = (B + 1) % (null == t ? void 0 : t.length))
                                } catch (e) {}
                            })(e, a)
                        }), 2e3)
                    }
                    c.get("cart-resume-id") || (g = setTimeout((() => {
                        document.getElementById("redirect-text-fastrr").style.visibility = ""
                    }), 1e4))
                }
                return R(), e
            } catch (t) {
                return e
            }
        },
        Y = e => {
            var t;
            if (null === (t = document) || void 0 === t || !t.getElementById("fastrr-main-container")) {
                let t = document.createElement("div");
                return t.id = "fastrr-main-container", document.body.appendChild(t), e
            }
        },
        V = t => {
            try {
                var o;
                return null != C && C.includes(null === (o = document.getElementById("sellerDomain")) || void 0 === o ? void 0 : o.value) && !_ ? (null == e || e.set("fastrrCart", window.btoa(encodeURIComponent(JSON.stringify(null == t ? void 0 : t.products)))), { ...t,
                    iterableDataForWidgetUrl: { ...G(t),
                        cart: null
                    }
                }) : { ...t,
                    iterableDataForWidgetUrl: G(t)
                }
            } catch (e) {}
        },
        Q = e => {
            const t = "".concat(checkoutBuyer, "?"),
                o = Object.entries((null == e ? void 0 : e.iterableDataForWidgetUrl) || {}).filter((e => {
                    let [t, o] = e;
                    return null != o && "" !== o
                })).map((e => {
                    let [t, o] = e;
                    return "".concat(t, "=").concat(o)
                })).join("&");
            return { ...e,
                widgetUrl: "".concat(t).concat(o)
            }
        },
        $ = e => {
            try {
                if (document.body.style.overflow = "hidden", document.getElementById("headless-container")) {
                    const t = null == e ? void 0 : e.widgetUrl;
                    document.getElementById("headless-iframe").src = t
                } else {
                    var t;
                    let o = document.createElement("div");
                    const n = null == e ? void 0 : e.widgetUrl;
                    o.id = "headless-container", o.innerHTML = '<div class="headless-modal">\n          <div class="headless-modal-content">\n            <div class="headless-modal-body">\n              <iframe id="headless-iframe" src="'.concat(n, '"></iframe>\n            </div>\n          </div>\n      </div>'), "appmaker" === _ ? document.body.append(o) : null === (t = document.getElementById("fastrr-main-container")) || void 0 === t || t.prepend(o)
                }
                "function" == typeof(null == e ? void 0 : e.onInitiationSuccess) && (null == e || e.onInitiationSuccess()), l({
                    name: "CHECKOUT_LOADED",
                    category: null == e ? void 0 : e.type
                })
            } catch (e) {}
        },
        X = e => {
            try {
                if (document.getElementById("fastrr-prefetch-container") && document.getElementById("fastrr-prefetch-container").remove(), null != e && e.pass) {
                    var t;
                    const o = null === (t = a()) || void 0 === t ? void 0 : t.slice(0, 8);
                    s($, Q, V, K, Y)({ ...e,
                        uuid: o
                    })
                } else {
                    var o, n, i;
                    null != e && e.error && l({
                        name: null == e || null === (o = e.error) || void 0 === o ? void 0 : o.message,
                        category: null == e ? void 0 : e.type,
                        ...(null == e || null === (n = e.error) || void 0 === n ? void 0 : n.value) && {
                            payload: {
                                error: null == e || null === (i = e.error) || void 0 === i ? void 0 : i.value
                            }
                        }
                    }), "function" == typeof(null == e ? void 0 : e.onInitiationFailure) && (null == e || e.onInitiationFailure())
                }
            } catch (t) {
                l({
                    name: "CHECKOUT_INITIATION_FAILED",
                    category: null == e ? void 0 : e.type,
                    payload: {
                        error: null == t ? void 0 : t.message
                    }
                }), "function" == typeof(null == e ? void 0 : e.onInitiationFailure) && (null == e || e.onInitiationFailure())
            }
        },
        Z = t => {
            try {
                n("https://uptime.fastrr.com/fe2", "GET", (function(e) {
                    w = 0 === Number(e.status) || 1 === Number(e.status) ? Number(e.status) : 1, e.ip && (k = e.ip)
                }), (function(e) {
                    w = 1
                })), (e => {
                    null != e && e.initializeCheckoutButton && window.addEventListener("DOMContentLoaded", (function() {
                        (() => {
                            let e = document.getElementsByClassName("shiprocket-headless");
                            if (e)
                                for (let t of e) j(t);
                            else console.error("Shiprocket Checkout not configured correctly")
                        })(), new MutationObserver(z).observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        })
                    })), "SHOPIFY" === window.shiprocketCheckoutChannel && N && window.addEventListener("DOMContentLoaded", (function() {
                        window.removeNativeButton(), new MutationObserver(window.removeNativeButtonObserverHandler).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    })), window.addEventListener("message", W, !1), window.addEventListener("load", (function() {
                        const e = c.get("fastrr_status"),
                            t = c.get("fastrr_transaction_id");
                        e ? X({
                            pass: !0,
                            type: "paymentFailure",
                            appendPreloader: !1
                        }) : t && X({
                            pass: !0,
                            type: "paymentVerify",
                            appendPreloader: !1
                        })
                    })), window.addEventListener("load", (function() {
                        c.get("cart-resume-id") && shiprocketCheckoutAbandonedCartHandler()
                    })), I && window.addEventListener("load", (function() {
                        const e = (() => {
                            var e;
                            let t = c.get("products");
                            t = null === (e = t) || void 0 === e ? void 0 : e.split(",");
                            let o = [];
                            for (let e = 0; e < (null === (n = t) || void 0 === n ? void 0 : n.length); e++) {
                                var n;
                                o.push({
                                    variantId: t[e].split(":")[0],
                                    quantity: t[e].split(":")[1]
                                })
                            }
                            return o
                        })();
                        I && (null == e ? void 0 : e.length) > 0 && window.shiprocketCheckoutProductPageHandler({
                            products: e,
                            domain: c.get("seller-domain")
                        })
                    }))
                })(t), (t => {
                    for (let o = 0; o < t.length; o++) c.get(t[o]) && e.set(t[o], c.get(t[o]))
                })(["fastrrCouponCode"]), (() => {
                    try {
                        new PaymentRequest([{
                            supportedMethods: ["https://cred.club/checkout/pay"]
                        }], {
                            total: {
                                label: "dummy data",
                                amount: {
                                    currency: "INR",
                                    value: "10.00"
                                }
                            }
                        }).canMakePayment().then((e => {
                            f = !!e
                        })).catch((e => {}))
                    } catch (e) {}
                })(), (() => {
                    try {
                        var e, t;
                        const n = null !== (e = o.getCookie("fastrr_uuid")) && void 0 !== e ? e : null,
                            l = null !== (t = o.getCookie("fastrr_usid")) && void 0 !== t ? t : null,
                            r = new Date;
                        r.setFullYear(r.getFullYear() + 10);
                        const d = new Date;
                        d.setTime(d.getTime() + 18e5);
                        const u = (e, t) => {
                            o.setCookie("fastrr_uuid", e, r), o.setCookie("fastrr_usid", t, d)
                        };
                        if (n) n && !l ? u(n, i(n)) : n && l && u(n, l);
                        else {
                            const e = a();
                            u(e, i(e))
                        }
                    } catch (e) {}
                })(), A || (() => {
                    try {
                        window.addEventListener("load", (() => {
                            r("https://sr-cdn.shiprocket.in/sr-promise/static/uc.js?channel_id=16").then((() => {
                                (() => {
                                    try {
                                        -1 !== window.location.pathname.indexOf("/products/") && n("".concat(window.location.pathname, ".js"), "GET", (function(e) {
                                            if (e) {
                                                var t, o, n;
                                                const l = e,
                                                    a = {
                                                        name: null !== (t = null == l ? void 0 : l.title) && void 0 !== t ? t : "",
                                                        mrp: "",
                                                        selling_price: String((null == l ? void 0 : l.price) / 100),
                                                        product_id: String(null == l ? void 0 : l.id),
                                                        variant_id: "",
                                                        qty: "",
                                                        category: "",
                                                        out_of_stock: "",
                                                        image: null !== (o = null == l ? void 0 : l.featured_image) && void 0 !== o ? o : "",
                                                        description: null !== (n = null == l ? void 0 : l.description) && void 0 !== n ? n : "",
                                                        referrer: ""
                                                    };
                                                p({
                                                    eventName: "pdp_view",
                                                    payload: a
                                                })
                                            }
                                        }))
                                    } catch (e) {}
                                })()
                            }))
                        }))
                    } catch (e) {}
                })()
            } catch (e) {}
        };
    (async () => {
        try {
            var a;
            window.shiprocketCheckoutChannel = "SHOPIFY";
            var i = null,
                r = [];
            const v = null === (a = document.getElementById("isFlits")) || void 0 === a ? void 0 : a.value,
                p = ["apkamart.com"]; - 1 !== window.location.pathname.indexOf("/products/") && n("".concat(window.location.pathname, ".js"), "GET", (function(e) {
                i = e
            })), window.removeNativeButton = () => {
                try {
                    const e = document.createElement("div");
                    e.classList.add("shiprocket-headless"), e.setAttribute("data-type", "mini-cart");
                    const t = document.createElement("div");
                    t.classList.add("shiprocket-headless"), t.setAttribute("data-type", "product");
                    const o = document.createElement("div");
                    t.classList.add("shiprocket-headless"), t.setAttribute("data-type", "cart");
                    const n = document.querySelector('#cart-notification-form button[name="checkout"]');
                    n && n.replaceWith(e);
                    const l = document.querySelector('.drawer__footer .cart__ctas button[name="checkout"]');
                    l && l.replaceWith(e);
                    const a = document.querySelector(".shopify-payment-button");
                    a && a.replaceWith(t);
                    const i = document.querySelector('.cart__footer .cart__ctas button[name="checkout"]');
                    i && i.replaceWith(o)
                } catch (e) {}
            }, window.removeNativeButtonObserverHandler = e => {
                try {
                    let t = !1;
                    for (const o of e) "childList" !== o.type && "subtree" !== o.type || (document.querySelector('#cart-notification-form button[name="checkout"]') && (t = !0), document.querySelector('.cart__ctas button[name="checkout"]') && (t = !0));
                    t && window.removeNativeButton()
                } catch (e) {}
            };
            const m = t => {
                    e.remove("shopifyCart"), e.set("shopifyCart", JSON.stringify(t))
                },
                y = () => {
                    let e = o.getCookie("_shopify_sa_p");
                    const t = o.getCookie("_shopify_sa_t");
                    return t && (e ? e += "%26time_visited%3D" + t : e = "time_visited%3D" + t), e
                },
                h = e => {
                    try {
                        var t, o, n;
                        const r = null == e ? void 0 : e.toString(),
                            d = /phone=([^&]+)/,
                            u = /order_number=([^&]+)/,
                            s = r.match(d),
                            c = r.match(u),
                            v = s ? s[1] : null,
                            p = c ? c[1] : null;
                        var l = document.createElement("form");
                        l.setAttribute("method", "POST"), l.setAttribute("action", e), l.setAttribute("target", "_parent");
                        var a = document.createElement("input");
                        a.type = "hidden", a.name = "phone", a.value = v, l.appendChild(a);
                        var i = document.createElement("input");
                        i.type = "hidden", i.name = "order_number", i.value = p, l.appendChild(i), null === (t = (o = document).querySelector) || void 0 === t || null === (n = t.call(o, "body")) || void 0 === n || n.appendChild(l), l.submit()
                    } catch (e) {}
                },
                g = async e => {
                    try {
                        for (let I = 0; I < (null == e || null === (t = e.products) || void 0 === t ? void 0 : t.length); I++) {
                            var t, o, l, a, i;
                            const C = await n("https://".concat(null == e ? void 0 : e.seller_domain, "/api/2021-07/graphql.json"), "POST", null, null, {
                                query: "query getProductById($id: ID!) {\n  product(id: $id) {\n    id\n    collections(first: 50) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n  }\n}",
                                variables: {
                                    id: "gid://shopify/Product/".concat(null == e || null === (o = e.products[I]) || void 0 === o ? void 0 : o.product_id)
                                }
                            }, {
                                "X-Shopify-Storefront-Access-Token": null == e ? void 0 : e.token,
                                "Content-Type": "application/json"
                            });
                            if (null != C && null !== (l = C.data) && void 0 !== l && null !== (a = l.product) && void 0 !== a && null !== (i = a.collections) && void 0 !== i && i.edges) {
                                let t = null == e ? void 0 : e.products[I],
                                    o = [];
                                for (let e = 0; e < (null == C || null === (d = C.data) || void 0 === d || null === (u = d.product) || void 0 === u || null === (s = u.collections) || void 0 === s || null === (c = s.edges) || void 0 === c ? void 0 : c.length); e++) {
                                    var d, u, s, c, v, p, m, y, h, g, f, w;
                                    let n = null == C || null === (v = C.data) || void 0 === v || null === (p = v.product) || void 0 === p || null === (m = p.collections) || void 0 === m || null === (y = m.edges) || void 0 === y || null === (h = y[e]) || void 0 === h || null === (g = h.node) || void 0 === g || null === (f = g.id) || void 0 === f ? void 0 : f.replace("gid://shopify/Collection/", "");
                                    null != t && null !== (w = t.collection_id) && void 0 !== w && w.includes(n) || o.push(n)
                                }
                                var k, _, b;
                                (null == o ? void 0 : o.length) > 0 && r.push({
                                    productId: null == C || null === (k = C.data) || void 0 === k || null === (_ = k.product) || void 0 === _ || null === (b = _.id) || void 0 === b ? void 0 : b.replace("gid://shopify/Product/", ""),
                                    collectionId: o
                                })
                            }
                        }
                        if ((null == r ? void 0 : r.length) > 0) {
                            const t = {
                                sellerId: null == e ? void 0 : e.seller_id,
                                channel: null == e ? void 0 : e.channel,
                                itemDetails: r
                            };
                            document.getElementById("headless-iframe").contentWindow.postMessage({
                                trigger: "sync-catalogue",
                                data: t
                            }, checkoutBuyer)
                        }
                    } catch (e) {}
                },
                f = function(e) {
                    var t, o;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    const l = null !== (t = document.getElementById("sellerDomain")) && void 0 !== t && t.value ? null === (o = document.getElementById("sellerDomain")) || void 0 === o ? void 0 : o.value : window.location.host;
                    let a = "https://".concat(n || l, "/cart/");
                    for (let t of e) a += "".concat(null == t ? void 0 : t.variantId, ":").concat(null == t ? void 0 : t.quantity, ",");
                    return a.slice(0, -1)
                },
                k = e => {
                    let t = f(null == e ? void 0 : e.products, null == e ? void 0 : e.domain);
                    window.location.href = t
                },
                _ = e => {
                    var t, o;
                    const l = null !== (t = null === (o = document.getElementById("sellerDomain")) || void 0 === o ? void 0 : o.value) && void 0 !== t ? t : null;
                    n("https://" + window.location.host + "/cart/add.js" + (null != p && p.includes(l) ? "?mm=false" : ""), "POST", null, null, {
                        items: [{
                            id: e.variantId,
                            quantity: e.quantity
                        }]
                    })
                },
                b = e => {
                    _(null == e ? void 0 : e.product)
                },
                I = e => {
                    try {
                        var t, o;
                        let n = null == e || null === (t = e.items) || void 0 === t ? void 0 : t.map((e => ({
                                variantId: e.id,
                                quantity: e.quantity
                            }))),
                            l = null === (o = e.discounts[0]) || void 0 === o ? void 0 : o.code;
                        return w ? {
                            pass: !0,
                            type: "mason",
                            products: n,
                            onInitiationFailure: () => k({
                                products: n
                            }),
                            onInitiationSuccess: () => b({
                                product: n
                            }),
                            fallbackUrl: f(n),
                            appendPreloader: !0,
                            utmParams: y(),
                            couponCode: l,
                            masonPayload: e
                        } : {
                            pass: !1,
                            type: "mason",
                            onInitiationFailure: () => k({
                                products: n
                            }),
                            error: {
                                message: "FASTRR_DOWN_MASON"
                            }
                        }
                    } catch (e) {
                        return {
                            pass: !1,
                            type: "mason",
                            onInitiationFailure: () => k({
                                products: cart
                            }),
                            error: {
                                message: "MASON_VERIFICATION_FAILURE"
                            }
                        }
                    }
                },
                C = e => {
                    try {
                        var t;
                        const e = c.get("couponCode"),
                            n = c.get("isBaseEncode"),
                            l = c.get("cartAttributes"),
                            a = c.get("webUrl"),
                            i = c.get("sellerDomain");
                        let r, s = c.get("cart"),
                            v = {};
                        var o;
                        r = n ? JSON.parse(window.atob(l)) : JSON.parse(l), s = n ? JSON.parse(window.atob(s)) : JSON.parse(s), r && (null === (o = r) || void 0 === o || o.forEach((e => {
                            v[e.key] = e.value
                        })));
                        let p = {
                            cartAttributes: r ? v : ""
                        };
                        const m = null === (t = s) || void 0 === t ? void 0 : t.map((e => {
                                var t, o, n, l, a, i, r, s, c, v, p, m, y, h, g, f, w, k, _, b;
                                return {
                                    productId: d(null == e || null === (t = e.node) || void 0 === t || null === (o = t.variant) || void 0 === o || null === (n = o.product) || void 0 === n || null === (l = n.id) || void 0 === l ? void 0 : l.toString()),
                                    shop_url: u(null == e || null === (a = e.node) || void 0 === a || null === (i = a.variant) || void 0 === i || null === (r = i.product) || void 0 === r ? void 0 : r.onlineStoreUrl),
                                    quantity: null == e || null === (s = e.node) || void 0 === s ? void 0 : s.quantity,
                                    title: null == e || null === (c = e.node) || void 0 === c || null === (v = c.variant) || void 0 === v || null === (p = v.product) || void 0 === p ? void 0 : p.title,
                                    variantId: d(null == e || null === (m = e.node) || void 0 === m || null === (y = m.variant) || void 0 === y || null === (h = y.id) || void 0 === h ? void 0 : h.toString()),
                                    variantTitle: "",
                                    price: null == e || null === (g = e.node) || void 0 === g || null === (f = g.variant) || void 0 === f || null === (w = f.price) || void 0 === w ? void 0 : w.amount,
                                    image: null == e || null === (k = e.node) || void 0 === k || null === (_ = k.variant) || void 0 === _ || null === (b = _.image) || void 0 === b ? void 0 : b.url
                                }
                            })),
                            h = n ? s : m;
                        return w ? {
                            pass: !0,
                            type: "appmaker",
                            products: h,
                            onInitiationFailure: () => k({
                                products: h,
                                domain: i
                            }),
                            onInitiationSuccess: () => b({
                                product: h
                            }),
                            fallbackUrl: a,
                            appendPreloader: !0,
                            utmParams: y(),
                            cartAttributes: p,
                            domain: i || "www.gharsoaps.shop",
                            couponCode: e
                        } : {
                            pass: !1,
                            type: "appmaker",
                            onInitiationFailure: () => k({
                                products: h,
                                domain: i
                            }),
                            error: {
                                message: "FASTRR_DOWN_APPMAKER"
                            }
                        }
                    } catch (e) {
                        return {
                            pass: !1,
                            type: "cart",
                            onInitiationFailure: () => k({
                                products: finalCart
                            }),
                            error: {
                                message: "APPMAKER_VERIFICATION_FAILURE"
                            }
                        }
                    }
                },
                E = (e, t) => {
                    try {
                        var o, n, l, a, i, r, d;
                        let u;
                        for (let o of e.variants)
                            if (o.id == (null == t ? void 0 : t.variantIdSelected)) {
                                u = o;
                                break
                            }
                        if (!e.available || !u || !u.available) return {
                            pass: !1,
                            type: "product",
                            error: {
                                message: "PRODUCT_NOT_AVAILABLE"
                            },
                            onInitiationFailure: () => {
                                R()
                            }
                        };
                        let s = {};
                        null != t && t.giftWrap && (s = { ...s,
                            _giftWrap: "yes",
                            gift_note: null == t ? void 0 : t.giftWrap
                        });
                        let c = {
                            productId: e.id,
                            title: null !== (o = u) && void 0 !== o && o.name ? null === (n = u) || void 0 === n ? void 0 : n.name : null == e ? void 0 : e.title,
                            variantId: u.id,
                            variantTitle: u.public_title ? u.title : "",
                            price: parseFloat((u.price / 100).toFixed(2)),
                            quantity: isNaN(null == t ? void 0 : t.qty) || 0 === (null == t ? void 0 : t.qty) ? 1 : null == t ? void 0 : t.qty,
                            image: null !== (l = u) && void 0 !== l && l.featured_image ? null === (a = u) || void 0 === a || null === (i = a.featured_image) || void 0 === i ? void 0 : i.src : null === (r = e.media) || void 0 === r || null === (d = r[0]) || void 0 === d ? void 0 : d.src,
                            item_meta_data: {
                                properties: u.properties
                            },
                            customAttributes: s,
                            vendor: null == e ? void 0 : e.vendor,
                            product_type: null == e ? void 0 : e.type
                        };
                        return w ? {
                            pass: !0,
                            type: "product",
                            products: [c],
                            onInitiationFailure: () => k({
                                products: [c]
                            }),
                            onInitiationSuccess: () => b({
                                product: c
                            }),
                            fallbackUrl: f([c]),
                            appendPreloader: !0,
                            utmParams: y()
                        } : {
                            pass: !1,
                            type: "product",
                            onInitiationFailure: () => k({
                                products: [c]
                            }),
                            error: {
                                message: "FASTRR_DOWN_PRODUCT_PAGE"
                            }
                        }
                    } catch (e) {
                        return {
                            pass: !1,
                            type: "product",
                            error: {
                                message: "PRODUCT_VERIFICATION_FAILIURE",
                                value: null != e && e.message ? null == e ? void 0 : e.message : e
                            }
                        }
                    }
                },
                S = e => {
                    try {
                        var t;
                        v && m(e);
                        let n = [];
                        for (let t of e.items) {
                            var o;
                            let e = {
                                productId: t.product_id,
                                title: null != t && t.title ? null == t ? void 0 : t.title : null == t ? void 0 : t.product_title,
                                variantId: t.variant_id,
                                variantTitle: t.product_has_only_default_variant ? "" : t.variant_title,
                                price: parseFloat((t.price / 100).toFixed(2)),
                                quantity: null != t && t.has_components ? 1 : t.quantity,
                                image: "myxtur.com" === window.location.host && null != t && null !== (o = t.properties) && void 0 !== o && o.image ? t.properties.image : t.image,
                                optionsArr: t.product_has_only_default_variant ? [] : t.options_with_values,
                                item_meta_data: {
                                    properties: t.properties
                                },
                                customAttributes: t.properties,
                                vendor: null == t ? void 0 : t.vendor,
                                product_type: null == t ? void 0 : t.type,
                                ...(null == t ? void 0 : t.has_components) && {
                                    isBundleProduct: null == t ? void 0 : t.has_components
                                },
                                ...(null == t ? void 0 : t.has_components) && {
                                    bundleQty: null == t ? void 0 : t.quantity
                                }
                            };
                            const l = null != t && t.has_components && (null == t ? void 0 : t.quantity) > 1 ? t.quantity : 1;
                            n = n.concat(Array(l).fill(e))
                        }
                        let l = {
                            cartAttributes: { ...null == e ? void 0 : e.attributes,
                                shopifyCartToken: null == e ? void 0 : e.token
                            }
                        };
                        if ("www.bluenectar.co.in" === window.location.hostname) {
                            const e = window.currentCart.items;
                            (null == e ? void 0 : e.length) > 0 && e.filter((e => !n.some((t => t.productId === e.product_id && t.variantId === e.variant_id)))).forEach((e => {
                                n.push({
                                    productId: null == e ? void 0 : e.product_id,
                                    title: "",
                                    variantId: null == e ? void 0 : e.variant_id,
                                    variantTitle: "",
                                    price: "",
                                    quantity: null == e ? void 0 : e.quantity,
                                    image: "",
                                    optionsArr: [],
                                    item_meta_data: {
                                        properties: ""
                                    },
                                    customAttributes: ""
                                })
                            }))
                        }
                        return 0 === (null === (t = n) || void 0 === t ? void 0 : t.length) ? {
                            pass: !1,
                            type: "cart",
                            error: {
                                message: "CART_LENGTH_ZERO"
                            }
                        } : w ? {
                            pass: !0,
                            type: "cart",
                            products: n,
                            onInitiationFailure: () => k({
                                products: n
                            }),
                            fallbackUrl: f(n),
                            appendPreloader: !0,
                            utmParams: y(),
                            cartAttributes: l
                        } : {
                            pass: !1,
                            type: "cart",
                            onInitiationFailure: () => k({
                                products: n
                            }),
                            error: {
                                message: "CHECKOUT_DOWN_CART_PAGE"
                            }
                        }
                    } catch (e) {
                        return {
                            pass: !1,
                            type: "cart",
                            error: {
                                message: "CART_VERIFICATION_FAILIURE",
                                value: null == e ? void 0 : e.message
                            }
                        }
                    }
                };
            M = { ...M,
                clearCart: function(e) {
                    n("https://" + window.location.host + "/cart/clear.js", "POST", (function() {
                        e.redirectTo && (window.location.href = e.redirectTo)
                    }))
                }
            }, window.shiprocketCheckoutBuyProductHandler = e => {
                try {
                    e.stopPropagation();
                    var t = null,
                        o = null,
                        a = window.location.pathname,
                        r = null;
                    if (N) {
                        var d, u, c;
                        t = null === (d = document.querySelector('form[action="/cart/add"] input[name="id"]')) || void 0 === d ? void 0 : d.value, o = parseInt(null !== (u = null === (c = document.querySelector('form[action="/cart/add"] input[name="quantity"]')) || void 0 === c ? void 0 : c.value) && void 0 !== u ? u : 1)
                    } else {
                        var v;
                        let n;
                        const l = e.currentTarget.closest("form");
                        l.getAttribute("action").includes("/cart/add") && (n = l);
                        let i = new FormData(n);
                        if (t = i.get("id"), o = parseInt(i.get("quantity")), r = i.get("attributes[gift-message-note]"), "/" != a && "true" !== (null === (v = document.getElementById("fastrrCollectionPage")) || void 0 === v ? void 0 : v.value) || (a = i.get("productUrl")), "/" == a) try {
                            a = n.parentElement.querySelector("a").href.split(/[?#]/)[0]
                        } catch (e) {
                            return
                        }
                    }
                    i ? s(X, E)(i, {
                        variantIdSelected: t,
                        qty: o,
                        giftWrap: r
                    }) : n("".concat(a, ".js"), "GET", (function(e) {
                        s(X, E)(e, {
                            variantIdSelected: t,
                            qty: o,
                            giftWrap: r
                        })
                    }), (function(e) {
                        l({
                            name: "PRODUCT_CALL_FAILED",
                            category: "product",
                            payload: {
                                url: "".concat(a, ".js"),
                                error: e
                            }
                        })
                    }))
                } catch (e) {
                    l({
                        name: null == e ? void 0 : e.message,
                        category: "product"
                    })
                }
            }, window.shiprocketCheckoutBuyCartHandler = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                try {
                    null == e || e.stopPropagation(), n("/cart.js", "GET", (function(e) {
                        s(X, S)(e)
                    }), (function(e) {
                        l({
                            name: "CART_CALL_FAILED",
                            category: "cart",
                            payload: {
                                error: e
                            }
                        })
                    }))
                } catch (e) {
                    l({
                        name: null == e ? void 0 : e.message,
                        category: "cart"
                    })
                }
            }, window.shiprocketCheckoutProductPageHandler = e => {
                try {
                    X(w ? {
                        pass: !0,
                        type: "productPage",
                        products: null == e ? void 0 : e.products,
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products,
                            domain: null == e ? void 0 : e.domain
                        }),
                        fallbackUrl: f(null == e ? void 0 : e.products, null == e ? void 0 : e.domain),
                        appendPreloader: !0,
                        utmParams: y()
                    } : {
                        pass: !1,
                        type: "productPage",
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products,
                            domain: null == e ? void 0 : e.domain
                        }),
                        error: {
                            message: "CHECKOUT_DOWN_HEADLESS_PRODUCT_PAGE"
                        }
                    })
                } catch (t) {
                    X({
                        pass: !1,
                        type: "productPage",
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products
                        }),
                        error: {
                            message: "PRODUCT_PAGE_VERIFICATION_FAILURE",
                            value: null == t ? void 0 : t.message
                        }
                    })
                }
            }, window.shirocketCheckoutUpsellHandler = e => {
                try {
                    X(w ? {
                        pass: !0,
                        type: "upsell",
                        products: null == e ? void 0 : e.cart,
                        fallbackUrl: f(null == e ? void 0 : e.cart),
                        appendPreloader: !0,
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.cart
                        }),
                        couponCode: null == e ? void 0 : e.couponCode
                    } : {
                        pass: !1,
                        type: "upsell",
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.cart
                        }),
                        error: {
                            message: "CHECKOUT_DOWN_HEADLESS_PRODUCT_PAGE"
                        }
                    })
                } catch (t) {
                    X({
                        pass: !1,
                        type: "upsell",
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products
                        }),
                        error: {
                            message: "UPSELL_VERIFICATION_FAILURE",
                            value: null == t ? void 0 : t.message
                        }
                    })
                }
            }, window.shiprocketCheckoutDirectHandler = e => {
                try {
                    var t, o;
                    X(w ? {
                        pass: !0,
                        type: null == e ? void 0 : e.type,
                        products: null == e ? void 0 : e.products,
                        fallbackUrl: f(null == e ? void 0 : e.products),
                        appendPreloader: !0,
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.cart
                        }),
                        couponCode: null !== (t = null == e ? void 0 : e.couponCode) && void 0 !== t ? t : null,
                        cartAttributes: null != e && e.cartAttributes ? {
                            cartAttributes: null == e ? void 0 : e.cartAttributes
                        } : null,
                        utmParams: null !== (o = null == e ? void 0 : e.utmParams) && void 0 !== o ? o : null
                    } : {
                        pass: !1,
                        type: null == e ? void 0 : e.type,
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products
                        }),
                        error: {
                            message: "CHECKOUT_DOWN_MANUAL_INTEG"
                        }
                    })
                } catch (t) {
                    X({
                        pass: !1,
                        type: null == e ? void 0 : e.type,
                        onInitiationFailure: () => k({
                            products: null == e ? void 0 : e.products
                        }),
                        error: {
                            message: "MANUAL_INTEG_INITIATION_FAILURE",
                            value: null == t ? void 0 : t.message
                        }
                    })
                }
            }, window.shiprocketCheckoutAppMakerHandler = () => {
                s(X, C)({})
            }, window.shiprocketCheckoutMasonHandler = e => {
                s(X, I)(e)
            }, window.shiprocketCheckoutAbandonedCartHandler = () => {
                X({
                    pass: !0,
                    type: "abandonedCart",
                    appendPreloader: !0,
                    cartAttributes: null != c && c.get("notes") ? {
                        cartAttributes: createObjectFromString({
                            string: null == c ? void 0 : c.get("notes"),
                            splitBy: ":"
                        })
                    } : null,
                    utmParams: y()
                })
            };
            const A = e => {
                    let t = e.data;
                    if ("headless-redirect-post" === t.trigger) h(t.data);
                    else {
                        if ("fetch-collection-id" !== t.trigger) return;
                        g(null == t ? void 0 : t.data)
                    }
                },
                U = () => {
                    window.addEventListener("message", A, !1)
                },
                B = () => {
                    window.addEventListener("load", (function() {
                        "appmaker" === c.get("application") && shiprocketCheckoutAppMakerHandler()
                    }))
                };
            Z({
                initializeCheckoutButton: !0
            }), U(), B(), (() => {
                try {
                    if ("iphone" === (() => {
                            const e = navigator.userAgent.toLowerCase();
                            return /iphone/.test(e) ? "iphone" : /applewebkit/.test(e) ? "appleDevice" : void 0
                        })() || t.get("fastrrPrefetchTriggered") || T) return;
                    t.set("fastrrPrefetchTriggered", "1"), o.setCookie("fastrrPrefetchTriggered", "1");
                    const e = "".concat(window.checkoutBuyer, "?prefetch=true");
                    if (document.getElementById("fastrr-prefetch-container")) document.getElementById("prefetch-iframe").src = e;
                    else {
                        let t = document.createElement("div");
                        t.id = "fastrr-prefetch-container", t.innerHTML = '<div class="headless-prefetch">\n       <iframe id="prefetch-iframe" src="'.concat(e, '"></iframe>\n      </div>'), document.body.appendChild(t)
                    }
                } catch (e) {}
            })(), l({
                name: "SCRIPT_PARSED_SUCCESSFULLY",
                category: "SCRIPT_INIT"
            })
        } catch (e) {
            l({
                name: "SCRIPT_FAILURE",
                category: "SCRIPT_INIT",
                payload: {
                    error: null != e && e.message ? null == e ? void 0 : e.message : e
                }
            })
        }
    })()
})();