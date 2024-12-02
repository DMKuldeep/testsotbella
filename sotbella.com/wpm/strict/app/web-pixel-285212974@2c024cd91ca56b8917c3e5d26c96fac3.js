(() => {
    var G = Object.defineProperty;
    var D = Object.getOwnPropertySymbols;
    var B = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable;
    var I = (i, e, t) => e in i ? G(i, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : i[e] = t,
        k = (i, e) => {
            for (var t in e || (e = {})) B.call(e, t) && I(i, t, e[t]);
            if (D)
                for (var t of D(e)) H.call(e, t) && I(i, t, e[t]);
            return i
        };
    var s = (i, e, t) => (I(i, typeof e != "symbol" ? e + "" : e, t), t);
    var r = (i, e, t) => new Promise((n, a) => {
        var u = m => {
                try {
                    l(t.next(m))
                } catch (c) {
                    a(c)
                }
            },
            x = m => {
                try {
                    l(t.throw(m))
                } catch (c) {
                    a(c)
                }
            },
            l = m => m.done ? n(m.value) : Promise.resolve(m.value).then(u, x);
        l((t = t.apply(i, e)).next())
    });
    var b = "WebPixel::Render";
    var S = i => shopify.extend(b, i);
    var R = (c => (c.AFFILIATE_ID = "up_uppromote_aid", c.AFFILIATE_HASH_CODE = "up_uppromote_hs", c.SOURCE = "up_uppromote_source", c.LAST_CLICK = "up_uppromote_lc", c.RECEIVED = "up_uppromote_received", c.SUB_ID = "up_uppromote_sub_id", c.OLD_AFFILIATE_ID = "scaaf_aid", c.OLD_SOURCE = "scaaf_sca_source_secomus", c.OLD_LAST_CLICK = "scaaf_c_c", c))(R || {}),
        o = R;
    var v = class {
            constructor(e, t) {
                s(this, "search");
                s(this, "extApi");
                this.search = new URLSearchParams(e), this.extApi = t
            }
            getAffiliateId() {
                let e = this.search.get("sca_ref");
                return Number(e.split(".")[0])
            }
            getHashCode() {
                return this.search.get("sca_ref").split(".")[1]
            }
            getMyshopifyDomain() {
                return this.extApi.init.data.shop.myshopifyDomain
            }
            getSource() {
                return this.search.get("sca_source")
            }
            getSubId(e) {
                return this.search.get(`sub_id${e}`)
            }
            __toObject() {
                return {
                    affiliate_id: this.getAffiliateId(),
                    hash_code: this.getHashCode(),
                    shopify_domain: this.getMyshopifyDomain(),
                    source: this.getSource(),
                    sub_id1: this.getSubId(1),
                    sub_id2: this.getSubId(2),
                    sub_id3: this.getSubId(3),
                    sub_id4: this.getSubId(4),
                    sub_id5: this.getSubId(5)
                }
            }
            __fromCookie() {
                return r(this, null, function*() {
                    let e = this.extApi.browser.cookie;
                    return {
                        cookie_from: (yield e.get(o.AFFILIATE_ID)) ? "Pixel" : "ScriptTag",
                        affiliate_id: (yield e.get(o.AFFILIATE_ID)) || (yield e.get(o.OLD_AFFILIATE_ID)),
                        hash_code: yield e.get(o.AFFILIATE_HASH_CODE), shopify_domain: this.getMyshopifyDomain(), source: (yield e.get(o.SOURCE)) || (yield e.get(o.OLD_SOURCE)), last_click: (yield e.get(o.LAST_CLICK)) || (yield e.get(o.OLD_LAST_CLICK)), sub_id1: yield e.get(o.SUB_ID + "1"), sub_id2: yield e.get(o.SUB_ID + "2"), sub_id3: yield e.get(o.SUB_ID + "3"), sub_id4: yield e.get(o.SUB_ID + "4"), sub_id5: yield e.get(o.SUB_ID + "5")
                    }
                })
            }
        },
        E = v;

    function d(i, e, t = "GET") {
        return r(this, null, function*() {
            if (["GET", "HEAD"].includes(t)) {
                let a = new URL(i),
                    u = new URLSearchParams(e),
                    x = a.searchParams,
                    l = new URLSearchParams(k(k({}, Object.fromEntries(u)), Object.fromEntries(x))),
                    m = `${a.origin}${a.pathname}?${l.toString()}`;
                return (yield(yield fetch(m, {
                    keepalive: !0
                })).json()) || null
            }
            return (yield(yield fetch(i, {
                method: t,
                headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify(e),
                keepalive: !0
            })).json()) || null
        })
    }
    var j = {
            LOCAL: {
                API_ENDPOINT: "https://secomapp-affiliate.test",
                TRACKING_API: "https://uppromote-tracking.test"
            },
            TEST: {
                API_ENDPOINT: "https://af-test.uppromote.com",
                TRACKING_API: "https://pixel-test.uppromote.com"
            },
            PRODUCTION: {
                API_ENDPOINT: "https://track.uppromote.com",
                TRACKING_API: "https://pixel.uppromote.com"
            }
        },
        O = j;
    var K = "PRODUCTION",
        M = O[K];
    var C = M;
    var q = {
            LOGS: C.TRACKING_API + "/api/logs"
        },
        A = q;

    function $(i, e, t = 360) {
        let n = new Date;
        n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
        let a = "expires=" + n.toUTCString();
        return i + "=" + e + ";" + a + ";path=/"
    }
    var p = $;
    var T = class {
            constructor() {
                s(this, "_event")
            }
            handle(e) {
                return r(this, null, function*() {
                    if (this._event = e, !this.isReferralLink() || !(yield this.mustRePostClickTracking())) return;
                    let n = {
                        identifier: this.getIdentifier().__toObject(),
                        shopify_domain: this._event.getExtensionApi().init.data.shop.myshopifyDomain,
                        event: this._event.getEvent()
                    };
                    this.storeLocalTrackingVars(this.getIdentifier()).then(() => {
                        d(A.LOGS, n, "POST").then(a => {
                            a.code == "SUCCESS" && this.storeServerTrackingVars(a).then()
                        })
                    })
                })
            }
            isReferralLink() {
                return !!this.getSearchParams().get("sca_ref")
            }
            getIdentifier() {
                return new E(this._event.getEvent().context.document.location.search, this._event.getExtensionApi())
            }
            getSearchParams() {
                return new URLSearchParams(this._event.getEvent().context.document.location.search)
            }
            mustRePostClickTracking() {
                return r(this, null, function*() {
                    let e = yield this._event.getExtensionApi().browser.cookie.get(o.RECEIVED);
                    if (!e || e === "0") return !0;
                    let t = yield this._event.getExtensionApi().browser.cookie.get(o.LAST_CLICK);
                    if (!t) return !0;
                    let n = new Date().getTime(),
                        a = Number(t);
                    return n - a > 60 * 1e3
                })
            }
            storeLocalTrackingVars(e) {
                return r(this, null, function*() {
                    let t = this._event.getExtensionApi().browser.cookie;
                    yield t.set(p(o.AFFILIATE_ID, String(e.getAffiliateId()))), yield t.set(p(o.AFFILIATE_HASH_CODE, e.getHashCode())), yield t.set(p(o.LAST_CLICK, String(new Date().getTime()))), yield t.set(p(o.SOURCE, e.getSource(), e.getSource() ? 360 : -1));
                    for (let n of [1, 2, 3, 4, 5]) yield t.set(p(o.SUB_ID + n, e.getSubId(n), e.getSubId(n) ? 360 : -1));
                    yield t.set(p(o.RECEIVED, "0"))
                })
            }
            storeServerTrackingVars(e) {
                return r(this, null, function*() {
                    if (!e.data) return;
                    let t = this._event.getExtensionApi().browser.cookie,
                        n = e.data.cookie_serialize;
                    t.set(p(o.AFFILIATE_ID, String(e.data.id), n)), t.set(p(o.AFFILIATE_HASH_CODE, String(e.data.hash_code), n));
                    let a = yield t.get(o.LAST_CLICK);
                    t.set(p(o.LAST_CLICK, String(a), n)), t.set(p(o.RECEIVED, "1", n));
                    let u = yield t.get(o.SOURCE);
                    u && t.set(p(o.SOURCE, u, n))
                })
            }
        },
        N = T;
    var P = class {
            constructor() {
                s(this, "event");
                s(this, "extensionApi")
            }
            handle(e) {
                this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postCheckoutToken()
            }
            postCheckoutToken() {
                return r(this, null, function*() {
                    if (!(yield this.needPostCheckoutToken())) return;
                    let e = yield this.getTrackingBody(), t = C.API_ENDPOINT;
                    d(`${t}/api/ct_tk`, e, "POST").then().catch()
                })
            }
            getTrackingBody() {
                return r(this, null, function*() {
                    let e = {
                            aid: yield this.getAffiliateId(), ct_tk: this.getCheckoutToken(), hc: yield this.getAffiliateHashCode(), order_id: this.getOrderId(), s: this.getShopName(), shopify_domain: this.getMyshopifyDomain()
                        },
                        t = yield this.getSource();
                    return t && (e.sca_source = t), e
                })
            }
            needPostCheckoutToken() {
                return r(this, null, function*() {
                    let e = yield this.getAffiliateId(), t = yield this.getExpireTime();
                    return !e || !t ? !1 : t > new Date().getTime()
                })
            }
            getLocalStorageData(e) {
                return r(this, null, function*() {
                    let t = yield this.extensionApi.browser.localStorage.getItem(e);
                    return t || null
                })
            }
            getAffiliateId() {
                return r(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_aid");
                    return e ? +e : null
                })
            }
            getExpireTime() {
                return r(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_ep");
                    return e ? +e : null
                })
            }
            getAffiliateHashCode() {
                return r(this, null, function*() {
                    return yield this.getLocalStorageData("scaaf_hc")
                })
            }
            getSource() {
                return r(this, null, function*() {
                    return yield this.getLocalStorageData("scaaf_sca_source_secomus")
                })
            }
            getCheckoutToken() {
                return this.event.data.checkout.token
            }
            getOrderId() {
                return +this.event.data.checkout.order.id
            }
            getShopName() {
                return this.getMyshopifyDomain().replace(".myshopify.com", "")
            }
            getMyshopifyDomain() {
                return this.extensionApi.init.data.shop.myshopifyDomain
            }
        },
        F = P;
    var U = (e => (e.OLD_RECEIVED = "scaaf_received", e))(U || {}),
        V = U;
    var g = class {
        constructor() {
            s(this, "event");
            s(this, "extensionApi")
        }
        handle(e) {
            this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postOrderTracking()
        }
        postOrderTracking() {
            return r(this, null, function*() {
                let t = yield new E(this.event.context.document.location.search, this.extensionApi).__fromCookie();
                if (!t.affiliate_id || !this.event.data.checkout.order || !(yield this.acceptedFromServer())) return;
                let a = {
                    identifier: t,
                    shopify_domain: t.shopify_domain,
                    event: this.event
                };
                d(A.LOGS, a, "POST").then()
            })
        }
        acceptedFromServer() {
            return r(this, null, function*() {
                return (yield this.extensionApi.browser.cookie.get(o.RECEIVED)) === "1" ? !0 : (yield this.extensionApi.browser.localStorage.getItem(V.OLD_RECEIVED)) === "true"
            })
        }
    };
    var w = {
        page_viewed: [new N],
        checkout_completed: [new g, new F]
    };
    var h = class {
        findListeners(e) {
            let t = Object.keys(w).find(n => n === e);
            return t ? w[t] : []
        }
    };
    var W = i => {
            let t = new h().findListeners(i.eventId);
            for (let n of t) n.handle(i)
        },
        y = W;
    var f = class {
        constructor(e, t) {
            s(this, "eventId");
            s(this, "_event");
            s(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventId = "page_viewed"
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };

    function L(i) {
        console.log(`%c \u25BA UpPromote Affiliate Marketing [WebPixel] - ${i}`, "background-color: #092C4C; color: #fff; padding: 5px;")
    }
    var _ = class {
        constructor(e, t) {
            s(this, "eventId");
            s(this, "_event");
            s(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventId = "checkout_completed"
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };
    L("Running...");
    S(i => {
        i.analytics.subscribe("page_viewed", e => {
            y(new f(e, i))
        }), i.analytics.subscribe("checkout_completed", e => {
            y(new _(e, i))
        })
    });
})();