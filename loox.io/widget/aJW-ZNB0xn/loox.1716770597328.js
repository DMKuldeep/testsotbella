var LOOX = LOOX || {};
LOOX.root = 'https://loox.io';
LOOX.clientId = 'aJW-ZNB0xn';
LOOX.multilingual = false;
LOOX.weglotCheck = 'false';
LOOX.ugc = {
    reviewForm: {
        enabled: true
    }
};
LOOX.injectStyleTag = function(t) {
    var e = document.createElement("style");
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
}, LOOX.criticalStylesInjected || (LOOX.criticalStylesInjected = !0, LOOX.injectStyleTag('.loox-icon { font-size: inherit; }a[href=\'#looxReviews\'] { text-decoration:none; color: inherit;}.rtl.loox-rating { display: flex; justify-content: flex-start; align-items: center; }.rtl.loox-rating span { padding-right: 5px; }.rtl.loox-rating .loox-icon[data-lx-fill="half"] { transform: rotateY(180deg); }svg.loox-icon { width: 1em; height: 1em; flex-shrink: 0; }.loox-rating .loox-rating-content { display: inline-flex; align-items: center; gap: 2px; vertical-align: middle; }.loox-overlay-is-active { overflow: hidden !important; }.loox-rating[data-alignment="left"]{text-align: left;}.loox-rating[data-alignment="center"]{text-align: center;}.loox-rating[data-alignment="right"]{text-align: right;}.rtl.loox-rating[data-alignment="left"] .loox-rating-content {margin-right: auto;}.rtl.loox-rating[data-alignment="center"] .loox-rating-content {margin: 0 auto}.rtl.loox-rating[data-alignment="right"] .loox-rating-content {margin-left: auto;}.loox-rating[data-floating-product-reviews-enabled="true"] { cursor: pointer; }'));
! function() {
    var r = LOOX.root || "";
    LOOX.showReviewForm = function(e, o) {
        return (e = e || LOOX.productId) ? LOOX && LOOX.ugc && LOOX.ugc.reviewForm && LOOX.ugc.reviewForm.enabled ? (i = e, void LOOX.inject2(r + "/widget/" + LOOX.clientId + "/ugc/review-form?productId=" + i, "loox-review-form-ugc-dialog", {
            hash: "#loox-review"
        })) : (i = e, e = o, o = r + "/widget/" + LOOX.clientId + "/write/" + i, i = [], LOOX.system && i.push("l=" + LOOX.system), e && i.push("language=" + e), i.length && (o += "?" + i.join("&")), LOOX.inject(o, "looxDialog", "600px", {
            overlay: !0,
            title: "Review submission form"
        }), void scrollTo(0, 0)) : console.error("Cannot open write dialog, productId is not defined");
        var i
    }
}();
var __looxLoaded = __looxLoaded || !1,
    LOOX_OVERLAY_PREFIX = "looxOverlay";
! function() {
    var O, m, e;

    function a(e, t, o, i) {
        LOOX.lastActiveEl = document.activeElement, i = i || {};
        var n = document.body,
            r = document.createElement("div");
        r.setAttribute("aria-modal", "true");
        var a = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        e += (e.match(/[\?]/g) ? "&" : "?") + "frame_id=" + t, "object" == typeof Shopify && Shopify.designMode && (e += e.includes("?") ? "&" : "?", e += "shopify_editor_preview=true"), LOOX.multilingual && LOOX.shopifyLocale && !e.includes("language=") && (e += "&language=" + LOOX.shopifyLocale), r.id = LOOX_OVERLAY_PREFIX + "_" + t, r.classList.add("loox-overlay");
        var s = "width: 100%;height:100%; position:fixed; font-family: Arial, Helvetica, sans-serif;top: 0;right: 0;bottom: 0;left: 0;z-index: 2147483646;opacity: 1;-webkit-transition: opacity 400ms ease-in;-moz-transition: opacity 400ms ease-in;transition: opacity 400ms ease-in;overflow-y:scroll;-webkit-overflow-scrolling: touch;";
        i && (i.cssTextModification && (s += i.cssTextModification), i.overlay && (s += "background: " + (i.overlayColor || "rgba(238, 238, 238, 0.9)") + ";")), r.style.cssText = s;
        var l, d = i.marginTop || (600 < window.innerWidth ? "10%" : 0);
        if (r.innerHTML = '<div style="position:relative;min-height:' + (a ? "101%" : "100%") + ";" + (i.width ? "max-width:" + i.width : "max-width:900px") + ";margin: " + d + ' auto 0;">' + (s = e, a = "100%", d = i.title || "", '<iframe id="' + t + '" src="' + s + '" height="' + o + '" width="' + a + '" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:' + o + ";width:1px;min-width:" + a + ";" + ((l = {
                "min-height": "600px",
                overflow: "auto"
            }) ? Object.keys(l).map(function(e) {
                return e + ": " + l[e]
            }).join(";") : "") + '" allowfullscreen="true" title="' + d + '"" allow="web-share; clipboard-read; clipboard-write"></iframe>') + "</div>", i && i.close_btn && ((d = document.createElement("div")).id = "modalclose", d.style.cssText = "color:#424242; line-height:24px; position:absolute; right:20px; text-align:center; top:20px; width:24px; text-decoration:none; font-weight:bold; cursor:pointer; font-size:44px;", d.innerHTML = "&times;", r.children[0].appendChild(d), d.onclick = d = function(e) {
                if (e && e.stopPropagation(), history) try {
                    return history.pushState("", document.title, window.location.pathname + window.location.search)
                } catch (e) {}
                m()
            }, r.onclick = d), !/iPhone\sOS\s14/.test(navigator.userAgent) && window.history && window.history.pushState) {
            try {
                history.pushState({
                    url: e
                }, "", i.hash || "#qv")
            } catch (e) {}
            n.style.overflow = "hidden"
        } else window.location.hash = i && i.hash || "#qv";
        n.appendChild(r);
        const c = document.querySelector("iframe#" + t);
        c && c.contentWindow && c.contentWindow.focus && c.contentWindow.focus()
    }

    function f(e, t, o) {
        var i = document.getElementById(e);
        i && t && Object.keys(t).forEach(function(e) {
            i.style[e] = t[e], o && (i.parentNode.style[e] = t[e])
        })
    }

    function y(e, t) {
        e = document.getElementById(LOOX_OVERLAY_PREFIX + "_" + e);
        e && (e.style.background = t)
    }

    function i(e) {
        if ("https://loox.io" != O || "https://loox.io" == e.origin) {
            var t, o, i, n, r = "string" == typeof e.data && 0 === e.data.indexOf("{") ? JSON.parse(e.data) : e.data;
            if ("resize" != r.type || (t = document.getElementById(r.frame)) && (f(r.frame, r.cssProps, r.applyAlsoToParentNode), y(r.frame, r.overlayColor), o = (r.height + "px").replace("vhpx", "vh").replace("%px", "%"), i = (r.minHeight + "px").replace("vhpx", "vh").replace("%px", "%"), t.height = o, t.style.height = o, t.parentNode.style.height = o, i && (t.minHeight = i, t.style.minHeight = i, t.parentNode.style.minHeight = i)), "consentCheck" === r.type) return LOOX.privacyUtils ? (LOOX.privacyUtils.isListening || LOOX.privacyUtils.listenToConsentApiChanges(), void(LOOX.report && LOOX.report.sendConsentUpdateToChild(e, r))) : void 0;
            if ("report" !== r.type)
                if ("reportPixel" !== r.type) {
                    if ("reportShowOriginalClick" === r.type) {
                        var a = "show-original-clicked-ids",
                            s = sessionStorage.getItem(a);
                        const p = s ? JSON.parse(s) : [];
                        if (!p.includes(r.postId) && LOOX.report && LOOX.report.sendPixel) {
                            LOOX.report.sendPixel(r);
                            const u = new Set(p);
                            u.add(r.postId), sessionStorage.setItem(a, JSON.stringify([...u]))
                        }
                    }
                    if ("reportQuickViewPixel" === r.type) {
                        var l = "see-translated-posts-ids",
                            d = sessionStorage.getItem(l);
                        const h = d ? JSON.parse(d) : [];
                        if (!h.includes(r.postId) && LOOX.report && LOOX.report.sendPixel) {
                            LOOX.report.sendPixel(r);
                            const g = new Set(h);
                            g.add(r.postId), sessionStorage.setItem(l, JSON.stringify([...g]))
                        }
                    }
                    if ("addToSessionStorage" !== r.type) {
                        if ("scroll_to_view" != r.type || (n = document.getElementById("looxReviews")) && window.scrollTo(0, n.offsetTop), "closeModal" == r.type && ("srcdoc" !== window.location.pathname && (LOOX.ignorePopState = !0, history.back()), m(r.frame)), "write" == r.type && LOOX.showReviewForm(r.productId || LOOX.productId, r.language), "setSystem" == r.type && (LOOX.system = r.system), "quickview" === r.type && (s = r.postId, a = r.ref || null, d = r.language || null, l = r.thumbnails, n = r.showOriginal, LOOX.openQV(s, a, d, l, n)), "hc-floater" === r.type && LOOX.openHCFloater(r.productId), "set-ref-interaction" === r.type) {
                            var c = sessionStorage;
                            if (!c || null !== c.getItem("lxsrc")) return;
                            c.setItem("lxsrc", JSON.stringify({
                                ref: r.ref
                            }))
                        }
                        "setStyle" == r.type && (f(r.frame, r.cssProps, r.applyAlsoToParentNode), y(r.frame, r.overlayColor))
                    } else sessionStorage.getItem(r.key) || (c = JSON.stringify(r.data), sessionStorage.setItem(r.key, c))
                } else LOOX.report && LOOX.report.sendPixel && LOOX.report.sendPixel(r);
            else LOOX.report && LOOX.report.sendGa && LOOX.report.sendGa(r.eventCategory, r.eventAction, r.eventLabel)
        }
    }
    __looxLoaded || ("undefined" != typeof LOOX ? (O = LOOX.root || "", __looxLoaded = !0, LOOX.hash = "undefined" != typeof loox_global_hash ? loox_global_hash : 1e3 * Math.floor((new Date).getTime() / 1e3 / 60 / 60) * 60 * 60, LOOX.isRTLDirection = function() {
        return "object" == typeof Shopify && "string" == typeof Shopify.locale && (Shopify.locale.includes("he") || Shopify.locale.includes("ar"))
    }, LOOX.shopifyLocale = "object" == typeof Shopify && Shopify.locale ? Shopify.locale : null, LOOX.inject = a, LOOX.inject2 = function(e, t, o) {
        LOOX.lastActiveEl = document.activeElement;
        var i = (o || {}).overlayAttr || {},
            n = (o || {}).iframeAttr || {},
            o = (o || {}).hash;
        const r = document.createElement("div");
        r.id = LOOX_OVERLAY_PREFIX + "_" + t, r.classList.add("loox-overlay"), Object.assign(r.style, i.style || {}, {
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            padding: "0",
            margin: "0",
            "z-index": "2147483646",
            opacity: "1",
            transition: "opacity 400ms ease-in",
            "background-color": "rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
            "-webkit-overflow-scrolling": "touch"
        });
        const a = new URL(e);
        a.searchParams.set("frame_id", t), LOOX.multilingual && LOOX.shopifyLocale && !a.searchParams.has("language") && a.searchParams.set("language", LOOX.shopifyLocale);
        let s = '<iframe id="{id}" allowfullscreen="allowfullscreen" title="{title}" allow="{allow}" style="{style}"></iframe>';
        const l = Object.assign(n.style || {}, {
                width: "100%",
                height: "100%",
                border: "0",
                padding: "0",
                margin: "0"
            }),
            d = {
                id: t,
                src: a.toString(),
                title: n.title || "",
                allow: (n.allow ? n.allow + ";" : "") + "fullscreen; web-share; clipboard-read; clipboard-write",
                style: Object.keys(l).map(function(e) {
                    return e + ": " + l[e]
                }).join(";")
            };
        if (Object.keys(d).forEach(function(e) {
                s = s.replace(new RegExp("{" + e + "}", "gi"), d[e])
            }), r.innerHTML = s, document.body.appendChild(r), o) try {
            history.pushState({
                url: a.toString()
            }, "", o)
        } catch (e) {
            window.location.hash = o
        }
        window.document.body.classList.add("loox-overlay-is-active"), LOOX.activeFrame = r.id;
        let c = !1;
        setTimeout(function() {
            const e = document.getElementById(t);
            e && (e.addEventListener("load", function(e) {
                c = !0
            }, {
                once: !0
            }), e.src = a.toString())
        }, 0), setTimeout(function() {
            const e = document.getElementById(t);
            e && !c && (a.searchParams.set("retry", "1"), e.src = a.toString())
        }, 2e3)
    }, LOOX.ignorePopState = !(m = function(e) {
        e = document.getElementById(LOOX_OVERLAY_PREFIX + (e ? "_" + e : "")) || document.getElementById(LOOX_OVERLAY_PREFIX + "_quickview") || document.querySelector(`[id^="${LOOX_OVERLAY_PREFIX}"]`);
        LOOX.activeFrame && (e = document.getElementById(LOOX.activeFrame), LOOX.activeFrame = null), e && e.parentNode.removeChild(e), window.document.body.classList.remove("loox-overlay-is-active"), 0 == document.getElementsByClassName("loox-overlay").length && (document.body.style.overflow = "", document.body.style.position = ""), LOOX.lastActiveEl && (LOOX.lastActiveEl.focus && LOOX.lastActiveEl.focus(), LOOX.lastActiveEl = null)
    }), window.addEventListener("popstate", e => {
        LOOX.ignorePopState || m(e), LOOX.ignorePopState = !1
    }), LOOX.closeModal = m, window.looxWrite = function(e) {
        i({
            origin: "https://loox.io",
            data: {
                type: "write",
                productId: e
            }
        })
    }, LOOX.openQV = function(e, t, o, i, n) {
        var r = O + "/post/quickview/" + e;
        r += "?p=" + (LOOX.productId || ""), LOOX.system && (r += "&l=" + LOOX.system), LOOX.version && (r += "&ver=" + LOOX.version), LOOX.hash && (r += "&h=" + LOOX.hash);
        o = o || LOOX.shopifyLocale;
        LOOX.multilingual && o && (r += "&language=" + o), (t = t || LOOX.ref) && (r += "&ref=" + t), i && (r += "&thumbnails=" + i), n && (r += "&showoriginal=true"), a(r, "quickview", "99vh", {
            width: "100%",
            hash: "#qv" + e,
            overlay: !0,
            marginTop: LOOX.fbScrollTop ? LOOX.fbScrollTop + "px" : "0",
            overlayColor: "rgba(0, 0, 0, 0.7)",
            title: "Review quick view"
        }), i = "qv", n = sessionStorage, r = e, n && (-1 < (e = (e = n.getItem(i)) ? e.split(",") : []).indexOf(r) || (e.push(r), n.setItem(i, e.join(","))))
    }, (e = /lx_ver=([0-9A-Za-z_\-|.]+)/gi.exec(decodeURIComponent(window.location.search))) && 0 < e.length && (LOOX.version = e[1]), "undefined" != typeof ShopifyAnalytics && ShopifyAnalytics.meta && ShopifyAnalytics.meta.product && (LOOX.productId = ShopifyAnalytics.meta.product.id), window.addEventListener ? addEventListener("message", i, !1) : attachEvent("onmessage", i), LOOX.domReady = function e(t) {
        return /in/.test(document.readyState) ? setTimeout(e, 9, t) : t()
    }, LOOX.domReady(function() {
        var e = decodeURIComponent(window.location.search),
            t = /^\?lx=([0-9A-Za-z_\-|.]+)/gi.exec(e);
        t && 0 < t.length && (o = O + "/widget/" + LOOX.clientId + "/dialog/" + t[1], LOOX.system && (o += "?l=" + LOOX.system), a(o, "looxDialog", "600px", {
            overlay: !0
        }));
        var o = /^\?lx_ep=([0-9A-Za-z_\-|.]+)/gi.exec(e);
        o && 0 < o.length && a(O + "/widget/" + LOOX.clientId + "/add-photo/" + o[1], "looxEdit", "600px", {
            overlay: !0
        });
        o = /(?:\?|&)qv=([0-9A-Za-z_\-]+)/gi.exec(e);
        o && 0 < o.length && i({
            origin: "https://loox.io",
            data: {
                type: "quickview",
                postId: o[1]
            }
        }), /(?:\?|&)ref=review/gi.test(e) && i({
            origin: "https://loox.io",
            data: {
                type: "write"
            }
        });
        e = "disabled" !== LOOX.client_ga && document.querySelector("a[href='#looxReviews']");
        e && e.addEventListener("click", function(e) {
            i({
                origin: "https://loox.io",
                data: {
                    type: "report",
                    eventCategory: "Loox - Widget Interactions",
                    eventAction: "Loox star rating clicked"
                }
            })
        });
        e = "disabled" !== LOOX.client_ga && document.querySelector(".loox-float-toggler-container");
        e && e.addEventListener("click", function(e) {
            i({
                origin: "https://loox.io",
                data: {
                    type: "report",
                    eventCategory: "Loox - Widget Interactions",
                    eventAction: "Loox Sidebar widget clicked"
                }
            })
        })
    })) : console.error("Loox object is not defined"))
}(), LOOX.ajax = ajax = {}, ajax.x = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        for (var e, t = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], o = 0; o < t.length; o++) try {
            e = new ActiveXObject(t[o]);
            break
        } catch (e) {}
        return e
    }, ajax.send = function(e, t, o, i, n) {
        void 0 === n && (n = !0);
        var r = ajax.x();
        r.open(o, e, n), r.onreadystatechange = function() {
            if (4 == r.readyState) try {
                return t(JSON.parse(r.responseText))
            } catch (e) {
                return t(r.responseText)
            }
        }, "POST" == o && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(i)
    }, ajax.get = function(e, t, o, i) {
        var n, r = [];
        for (n in t) r.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        ajax.send(e + (r.length ? "?" + r.join("&") : ""), o, "GET", null, i)
    }, ajax.post = function(e, t, o, i) {
        var n, r = [];
        for (n in t) r.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
        ajax.send(e, o, "POST", r.join("&"), i)
    },
    function() {
        var e, r = LOOX.root || "";
        LOOX.widgetRunOnce || (LOOX.widgetRunOnce = !0, LOOX.injectStyleTag('#looxReviews, #looxCarousel {float:none;clear:both;}#looxReviews:before, #looxReviews:after, #looxCarousel:before, #looxCarousel:after {content:" ";visibility:hidden;display:block;height:0;clear:both;}'), (e = function() {
            var e = document.getElementById("looxReviews");
            if (e && !e.getAttribute("data-upgraded")) {
                e.setAttribute("data-upgraded", "true");
                var t = e.parentNode.childNodes[0];
                if (t && /columns/gi.test(t.className) && ((n = document.createElement("div")).className = "clearfix", e.parentNode.insertBefore(n, e)), LOOX.productId = e.getAttribute("data-product-id"), "{{product.id}}" == LOOX.productId) return console.error('LOOX reviews - product id is set to "{{ product.id }}" which is not a real product Id, the loox widget cannot be injected using settings or be placed inside a {% raw %} directive');
                var o = r + "/widget/" + LOOX.clientId + "/reviews",
                    i = [],
                    t = null != e.getAttribute("data-loox-aggregate");
                t && LOOX.productId ? i.push("productId=" + LOOX.productId) : LOOX.productId && (o += "/" + LOOX.productId), LOOX.hash && i.push("h=" + LOOX.hash), LOOX.system && i.push("l=" + LOOX.system), LOOX.version && i.push("ver=" + LOOX.version);
                var n = e.getAttribute("data-mode");
                n && i.push("mode=" + n);
                n = e.getAttribute("data-or-productIds");
                n && i.push("productIds=" + n);
                n = e.getAttribute("data-tags");
                n && "" !== n && i.push("tags=" + encodeURIComponent(n));
                n = e.getAttribute("data-limit");
                n && i.push("limit=" + n);
                n = e.getAttribute("data-limit-mobile");
                n && window.innerWidth < 720 && i.push("limit=" + n);
                n = e.getAttribute("data-paging");
                n && i.push("paging=" + n);
                n = e.getAttribute("data-header");
                n && i.push("header=" + n);
                n = e.getAttribute("data-write-btn");
                n && i.push("write_btn=" + n);
                n = e.getAttribute("data-visibility");
                n && i.push("visibility=" + n);
                n = e.getAttribute("data-product-thumbnails");
                n && i.push("thumbnails=" + n);
                n = e.getAttribute("data-view");
                n && i.push("view=" + encodeURIComponent(n));
                n = e.getAttribute("data-disable-filter-review-rating");
                n && i.push("disable_filter_review_rating=" + n);
                n = e.getAttribute("data-variant");
                n && i.push("variant=" + n);
                n = e.getAttribute("data-language") || LOOX.shopifyLocale;
                LOOX.multilingual && n && i.push("language=" + encodeURIComponent(n));
                n = e.getAttribute("data-loox-variant");
                n && i.push("widget_variant=" + n), "object" == typeof Shopify && Shopify.designMode && i.push("shopify_editor_preview=true"), "true" === e.getAttribute("data-is_sample") && i.push("sample=true"), 0 < i.length && (o += "?" + i.join("&"));
                e.style.cssText || (e.style.margin = "0 auto;");
                e.innerHTML = '<iframe id="looxReviewsFrame" title="' + (t ? "All product reviews widget" : "Product reviews widget") + '" src="' + o + '" height="0" width="100%" frameborder="0" scrolling="no" margin="0" style="overflow:hidden;height:0;width:100%; box-shadow:unset; outline:unset;"></iframe>'
            }
        })(), setInterval(e, 1e3))
    }(),
    function(n) {
        n && !n.pop_widget && "undefined" != typeof loox_pop_active && (n.pop_widget = {
            active: loox_pop_active,
            display_filter: "undefined" != typeof loox_pop_display ? loox_pop_display : null
        }, !n.pop_widget.active || function() {
            if (!n.pop_widget.display_filter) return 1;
            var e = window.location.pathname;
            return "/" === e ? n.pop_widget.display_filter.home_page : 0 === e.indexOf("/cart") ? n.pop_widget.display_filter.cart_page : n.productId ? n.pop_widget.display_filter.product_page : n.pop_widget.display_filter.other_pages
        }() && function(o) {
            var i = [];
            if (0 !== window.location.pathname.indexOf("/cart") || !n.ajax) return n.productId && i.push(n.productId), o(i);
            n.ajax.get("//" + window.location.hostname + "/cart.json", {}, function(e) {
                if (e && e.items)
                    for (var t = 0; t < e.items.length; t++) i.push(e.items[t].product_id);
                return o(i)
            })
        }(function(e) {
            var t = n.root + "/widget/" + n.clientId + "/pop-notification.js",
                o = [];
            o.push("h=" + n.hash), 0 < e.length && (o.push("productIds=" + e.join(",")), n.pop_widget.hide_product = !0), "object" == typeof Shopify && Shopify.designMode && o.push("shopify_editor_preview=true"), 0 < o.length && (t += "?" + o.join("&"));
            var i = document.createElement("script");
            if (i.async = 1, i.src = t, document.body) return document.body.appendChild(i);
            n.domReady(function() {
                document.body.appendChild(i)
            })
        }))
    }(LOOX || {}), LOOX.openHCFloater = function(e) {
        var t;
        LOOX.root && LOOX.clientId && (t = [], e && (t.push("productIds=" + e), t.push("thumbnails=false")), t.push("h=" + LOOX.hash), "object" == typeof Shopify && Shopify.designMode && t.push("shopify_editor_preview=true"), e = LOOX.root + "/widget/" + LOOX.clientId + "/reviews", 0 < t.length && (e += "?" + t.join("&")), LOOX.inject(e, "looxModalFrame", "100%", {
            width: "100%",
            overlay: !0,
            marginTop: "0px",
            overlayColor: "rgba(0, 0, 0, 0.6); overflow-y: visible;",
            title: "Happy customers reviews widget"
        }))
    }, LOOX.isMobile = function() {
        return (window.innerWidth || document.documentElement.clientWidth) < 720
    },
    function(a) {
        function e() {
            var e, t, o, i, n, r = document.getElementById("looxCarousel");
            r && 0 != r.length && !r.getAttribute("data-caraousel-loaded") && (r.setAttribute("data-caraousel-loaded", "true"), e = (a.root || "") + "/widget/" + a.clientId + "/carousel", (n = []).push("frame_id=" + (t = "looxCarouselFrame")), n.push("h=" + a.hash), i = r.getAttribute("data-language") || a.shopifyLocale, a.multilingual && i && n.push("language=" + encodeURIComponent(i)), null != (o = r.getAttribute("data-show-more") || null) && n.push("show_more_btn=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-max-width") || null) && n.push("max_width=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-arrows-color") || null) && n.push("arrows_color=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-dots-color") || null) && n.push("dots_color=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-button-color") || null) && n.push("button_color=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-text-color") || null) && n.push("text_color=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-background-color") || null) && n.push("background_color=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-product-ids") || null) && n.push("productIds=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-mode") || null) && n.push("mode=" + encodeURIComponent(o)), null != (o = r.getAttribute("data-use-widget-font") || null) && n.push("use_widget_font=" + encodeURIComponent(o)), i = r.getAttribute("data-language") || null, a.multilingual && null != i && n.push("language=" + encodeURIComponent(i)), "object" == typeof Shopify && Shopify.designMode && n.push("shopify_editor_preview=true"), 0 < n.length && (e += "?" + n.join("&")), (n = document.createElement("iframe")).id = t, n.src = e, n.height = "0", n.width = "100%", n.scrolling = "no", n.setAttribute("style", "display:block;border:0;overflow:hidden;height:0;width:100%;"), n.setAttribute("title", "Carousel reviews widget"), r.appendChild(n))
        }
        e(), setInterval(e, 1e3)
    }(LOOX || {});
var __loox_once = __loox_once || !1;
__loox_once || (__loox_once = !0, LOOX.domReady(function() {
        if ((r = window.location.search) && -1 !== r.indexOf("ref=loox")) {
            var e = sessionStorage;
            if (e && null === e.getItem("lxsrc")) {
                for (var t, o, i, n, r = r.substring(1).split("&"), a = {}, s = 0; s < r.length; s++) {
                    var l, d = r[s].split("=");
                    "ref" === d[0] && (a.ref = d[1]), "ref_source" === d[0] && (a.source = d[1]), "post_id" === d[0] && (a.post_id = d[1]), "lx_ad" === d[0] && (l = "LX" + d[1].toUpperCase(), t = "discount_code", o = l, n = i = void 0, d = "", i && ((n = new Date).setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), d = "; expires=" + n.toUTCString()), document.cookie = t + "=" + (o || "") + d + "; path=/", a.code = l)
                }
                e.setItem("lxsrc", JSON.stringify(a))
            }
        }
    }), LOOX.domReady(function() {
        var e, t, o, i, n, r = sessionStorage;
        r && (t = r.getItem("lxsrc"), e = r.getItem("qv"), o = r.getItem("srpd"), (e || t || o) && (t = t && JSON.parse(t) || {}, o = o && JSON.parse(o) || {}, 0 !== window.location.pathname.indexOf("/cart") ? "object" == typeof Shopify && Shopify.checkout && Shopify.Checkout && ("thank_you" !== Shopify.Checkout.page && "checkout_one_thank_you" !== Shopify.Checkout.page || (i = ["c=" + LOOX.clientId, "o=" + Shopify.checkout.order_id, "t=" + Shopify.checkout.token], e && 0 < e.length && i.push("qv=" + e), t.ref && i.push("ref=" + t.ref), t.source && i.push("ref_source=" + t.source), t.post_id && i.push("post_id=" + t.post_id), !0 === o.active && i.push("ref=" + o.cat, "ref_source=" + o.l), r.removeItem("qv"), r.removeItem("lxsrc"), r.removeItem("srpd"), (n = document.createElement("img")).src = ["//pixel.loox.io", "track", "order"].join("/") + "?" + i.join("&"), n.setAttribute("style", "display:none;border:0;overflow:hidden;height:1px;width:1px;"), document.body.appendChild(n))) : (n = document.querySelector("form[action='/cart']")) && t.code && n.setAttribute("action", "/cart?discount=" + t.code)))
    }), LOOX.domReady(function() {
        var t, e;
        "object" != typeof Weglot || (t = document.getElementById("looxReviewsFrame")) && t.contentWindow && "true" !== (LOOX || {}).weglotCheck && (Weglot.on("switchersReady", e = function(e) {
            t.contentWindow.postMessage(JSON.stringify({
                weglotlangchange: e
            }), "*")
        }), Weglot.on("languageChanged", e))
    })), LOOX.initLooxCarouselV2 = function(e) {
        var t = document.querySelectorAll(".loox-v2-carousel-container"),
            s = LOOX.root + "/widget/" + LOOX.clientId + "/v2/carousel";
        [].forEach.call(t, function(o) {
            var e, t, i, n, r, a = s + "?";
            o && (o.dataset.widgetLoaded = "true", (e = o.getAttribute("id")) ? (o.style.width = "100%", t = (r = function(e, t) {
                return o.getAttribute("data-" + e) || t
            })("preview", "no"), i = (i = o.querySelector("iframe")) || document.createElement("iframe"), n = {
                slideType: r("slide-type"),
                maxWidth: r("max-width"),
                borderRadius: r("border-radius"),
                itemsPerView: r("items-per-view"),
                mobileItemsPerView: r("mobile-items-per-view"),
                imageRatio: r("image-ratio"),
                maxNumberOfCharacters: r("max-number-of-characters"),
                desktopFontSize: r("desktop-font-size"),
                mobileFontSize: r("mobile-font-size"),
                reviewerNameColor: r("reviewer-name-color"),
                textColor: r("text-color"),
                itemBackgroundColor: r("item-background-color"),
                starsColor: r("stars-color"),
                starsBackgroundColor: r("stars-background-color"),
                arrows: {
                    backgroundColor: r("arrows_background-color"),
                    iconColor: r("arrows_icon-color"),
                    hideOnMobile: r("arrows_hide-on-mobile", "yes")
                },
                shadow: r("shadow"),
                border: {
                    active: r("border_active", "no"),
                    width: r("border_width"),
                    color: r("border_color")
                },
                pagination: {
                    active: r("pagination_active", "no"),
                    dotColor: r("pagination_dot-color"),
                    selectedDotColor: r("pagination_selected-dot-color")
                },
                autoplay: {
                    active: r("autoplay_active", "no"),
                    duration: r("autoplay_duration")
                },
                quoteMarkIcon: r("quote-mark-icon"),
                quotesIconColor: r("quotes-icon-color"),
                productIds: r("product-ids"),
                frameId: e,
                h: LOOX.hash,
                preview: t,
                customerLocale: r("customer-locale")
            }, r = {
                card: "Carousel cards reviews widget",
                testimonial: "Carousel testimonials reviews widget",
                gallery: "Carousel gallery reviews widget"
            }, Object.keys(n).forEach(function(o) {
                var i = n[o];
                i && ("object" == typeof i ? Object.keys(i).forEach(function(e) {
                    var t = i[e];
                    t && (a += o + "[" + e + "]=" + encodeURI(t) + "&")
                }) : a += o + "=" + encodeURI(i) + "&")
            }), a = a.slice(0, -1), i.dataset.lastChange !== JSON.stringify(n) && (i.src = a, i.width = "100%", i.height = "100%", i.id = e + "_FRAME", i.dataset.lastChange = JSON.stringify(n), i.setAttribute("style", "display:block;border:0;overflow:hidden;height:100%;width:100%;"), i.setAttribute("title", r[n.slideType] || r.gallery), o.appendChild(i))) : console.log("Loox V2 Carousel- missing container ID"))
        })
    }, LOOX.v2CarouselEventsRegistered || (LOOX.domReady(LOOX.initLooxCarouselV2), LOOX.v2CarouselEventsRegistered = !0),
    function() {
        var e, t;
        LOOX && "object" == typeof Shopify && Shopify.designMode && (Shopify.theme || {}).id && !Shopify.checkout && ((e = document.createElement("script")).type = "text/javascript", e.async = !0, e.src = LOOX.root + "/shopify-editor/" + LOOX.clientId + "/loader?design_theme_id=" + Shopify.theme.id, (t = document.getElementsByTagName("script")[0]).parentNode.insertBefore(e, t))
    }();
! function(n) {
    function t(n = !0) {
        return window.Shopify && window.Shopify.customerPrivacy ? window.Shopify.customerPrivacy.userCanBeTracked() : !!n
    }
    n && !n.privacyUtils && (n.privacyUtils = {
        canTrackUser: t,
        listenToConsentApiChanges: function(e) {
            !0 !== n.privacyUtils.isListening && (["trackingConsentLoaded", "trackingConsentAccepted", "trackingConsentDeclined", "trackingConsentReset"].forEach(o => {
                document.addEventListener(o, n => {
                    var i = t();
                    e && e(o, i)
                })
            }), n.privacyUtils.isListening = !0)
        },
        isListening: !1,
        dev: {
            loadConsentApi: function(i) {
                window.Shopify && window.Shopify.loadFeatures ? window.Shopify.loadFeatures([{
                    name: "consent-tracking-api",
                    version: "0.1"
                }], n => {
                    i && i(n)
                }) : console.warn("[LOOX] Shopify.loadFeatures is not available")
            },
            setConsent: function(n) {
                if (!window.Shopify || !window.Shopify.customerPrivacy) return console.log("[LOOX] Shopify.customerPrivacy is not available");
                window.Shopify.customerPrivacy.setTrackingConsent(n, () => {
                    console.log("[LOOX] consent set to " + n)
                })
            }
        }
    })
}(LOOX || {});
! function() {
    const n = document.head || document.getElementsByTagName("head")[0];

    function i(t) {
        const e = document.createElement("div");
        e.innerHTML = t, n.appendChild(e.querySelector("svg"))
    }! function() {
        if (!document.getElementById("loox-rating-icon-svg-store")) {
            const n = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none\" id=\"loox-rating-icon-svg-store\">\n\t<defs />\n\t<symbol id=\"looxicons-rating-icon-fill\" viewBox=\"0 0 24 24\" fill=\"currentcolor\">\n\t\t<path\n\t\t\td=\"M24 9.425c0 .212-.125.443-.375.693l-5.236 5.105 1.24 7.212c.01.067.015.164.015.289a.85.85 0 0 1-.151.511.51.51 0 0 1-.44.21c-.183 0-.375-.058-.577-.174L12 19.869l-6.476 3.404c-.212.115-.404.173-.577.173-.202 0-.353-.07-.454-.21a.85.85 0 0 1-.152-.511c0-.058.01-.154.03-.289l1.24-7.211-5.25-5.106C.12 9.858 0 9.628 0 9.425c0-.355.27-.577.808-.663l7.24-1.053 3.245-6.562c.183-.395.418-.592.707-.592s.524.197.707.592l3.245 6.562 7.24 1.053c.539.086.808.308.808.663Z\"\n\t\t/>\n\t</symbol>\n\t<symbol id=\"looxicons-rating-icon-line\" viewBox=\"0 0 24 24\" fill=\"currentcolor\">\n\t\t<path\n\t\t\td=\"m16.399 14.574 4.413-4.283-6.086-.894L12 3.887l-2.726 5.51-6.086.894L7.6 14.574l-1.053 6.072L12 17.776l5.438 2.87-1.039-6.072ZM24 9.425c0 .212-.125.443-.375.693l-5.236 5.105 1.24 7.212c.01.067.015.164.015.289 0 .48-.197.72-.591.72-.183 0-.375-.057-.577-.172L12 19.867l-6.476 3.404c-.212.115-.404.173-.577.173-.202 0-.353-.07-.454-.21a.85.85 0 0 1-.152-.511c0-.058.01-.154.03-.289l1.24-7.211-5.25-5.106C.12 9.858 0 9.628 0 9.425c0-.355.27-.577.808-.663l7.24-1.053 3.245-6.562c.183-.395.418-.592.707-.592s.524.197.707.592l3.245 6.562 7.24 1.053c.539.086.808.308.808.663Z\"\n\t\t/>\n\t</symbol>\n\t<defs>\n\t\t<style>\n\t\t\t.lx-icon-fill {\n\t\t\t\t--lx-fill-width: calc(100% - var(--lx-rating-percent, 0%));\n\t\t\t\tclip-path: inset(0 var(--lx-fill-width, 0) 0 0);\n\t\t\t}\n\t\t\t.lx-icon-line {\n\t\t\t\tclip-path: inset(0 0 0 var(--lx-rating-percent, 0%));\n\t\t\t}\n\t\t\t[data-lx-fill='empty'] {\n\t\t\t\t--lx-rating-percent: 0%;\n\t\t\t}\n\t\t\t[data-lx-fill='half'] {\n\t\t\t\t--lx-rating-percent: 50%;\n\t\t\t}\n\t\t\t[data-lx-fill='full'] {\n\t\t\t\t--lx-rating-percent: 100%;\n\t\t\t}\n\t\t</style>\n\n\t\t<g id=\"looxicons-rating-icon\">\n\t\t\t<use href=\"#looxicons-rating-icon-line\" class=\"lx-icon-line\"></use>\n\t\t\t<use href=\"#looxicons-rating-icon-fill\" class=\"lx-icon-fill\"></use>\n\t\t</g>\n\t</defs>\n</svg>\n",
                r = "string" == typeof window.loox_rating_icon_name && window.loox_rating_icon_name;
            if (!r) return i(n);
            LOOX.ajax.get(`${LOOX.root}/widget/${LOOX.clientId}/rating-icon.svg`, {
                iconName: r
            }, function(t) {
                var e = "string" == typeof t && t.startsWith("<svg");
                e || console.warn(`Loox rating icon SVG response is not valid. Falling back to default icon set. Ensure that "${r}" is a valid icon name.`), i(e ? t : n)
            })
        }
    }();
    const e = document.getElementsByClassName("loox-rating"),
        s = {};
    let o = !0;
    const l = "function" == typeof LOOX.isRTLDirection && LOOX.isRTLDirection();

    function c(e, n, r, t) {
        if ("single-icon" !== t)
            for (let t = 1; t <= 5; t++) e.appendChild(function(t, e, n) {
                e = function(t, e) {
                    return t <= e ? "full" : t <= e + .5 ? "half" : "empty"
                }(t, e);
                return a(e, n)
            }(t, n, r));
        else e.appendChild(a("full", r))
    }

    function a(t, e) {
        const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        n.classList.add("loox-icon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("data-lx-fill", t), e && (n.style.color = e);
        const r = document.createElementNS("http://www.w3.org/2000/svg", "use");
        return r.setAttribute("href", "#looxicons-rating-icon"), n.appendChild(r), n
    }

    function d(t, e, n, r) {
        var i = u(t),
            a = Number(t.getAttribute("data-raters")) || 0;
        (a && !isNaN(a) || i) && (i = a, a = n, n = r, r = t.getAttribute("data-pattern"), i = i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), a = a.toFixed(1), a = {
            labelContent: r ? r.replace(/\[count\]/gi, i).replace(/\[rating\]/gi, a) : "single-icon" === n ? a : `(${i})`,
            title: a + ` rating (${i} votes)`
        }, i = t.getAttribute("data-color-text"), e.innerHTML += `<span class="loox-rating-label" ${i?`style="color: ${i};"`:""} aria-hidden="true">&nbsp;${a.labelContent}</span>`, t.setAttribute("title", a.title), t.setAttribute("aria-label", a.title), t.setAttribute("role", "figure"), function(t, e) {
            const [n, ...r] = Array.from(t.querySelectorAll("svg")), i = document.createElementNS("http://www.w3.org/2000/svg", "title");
            i.textContent = e, n.prepend(i), n.setAttribute("role", "presentation"), r.forEach(t => t.setAttribute("aria-hidden", "true"))
        }(e, a.title))
    }

    function u(t) {
        return "true" === t.getAttribute("data-show-empty-stars")
    }
    LOOX.createRatingIconSvg = a;
    const g = ["default", "single-icon"];

    function r(t, e) {
        if (l && e.classList.add("rtl"), !e.getAttribute("data-rating-upgraded")) {
            (function(t) {
                if (!("yes" === t.getAttribute("data-preview"))) return !1;
                if (!("rating" === t.getAttribute("data-widget"))) return !1;
                if (u(t)) return !1;
                if (!("object" == typeof window.loox_inject_settings && window.loox_inject_settings.sampleDataOnEditor)) return !1;
                var e = t.getAttribute("data-rating"),
                    t = t.getAttribute("data-raters");
                return 0 === Number(e) && 0 === Number(t)
            })(e) && (e.setAttribute("data-rating", "5"), e.setAttribute("data-raters", "1234")), (i = (r = e).getAttribute("data-content-size")) && r && (r.style.fontSize = i + "px");
            const a = e.getAttribute("data-id");
            s[a] && (e.setAttribute("data-rating", s[a].rating), e.setAttribute("data-raters", s[a].raters));
            var n = Number(e.getAttribute("data-rating")),
                r = u(e);
            if ((0 === n || isNaN(n)) && !r) a && null != e.getAttribute("data-fetch") && (t[a] || (t[a] = []), t[a].push(e), e.removeAttribute("data-fetch"));
            else {
                var i = Math.ceil(2 * n) / 2;
                const o = document.createElement("div");
                o.classList.add("loox-rating-content"), e.appendChild(o);
                r = e.getAttribute("data-color-star"), t = (t = (t = e).getAttribute("data-layout"), g.includes(t) ? t : "default");
                c(o, i, r, t), d(e, o, n, t);
                var n = "yes" === e.getAttribute("data-preview"),
                    t = "true" === e.getAttribute("data-is-trust-badge");
                n || t || LOOX && LOOX.root && LOOX.clientId && LOOX.hash && (t = `${LOOX.root}/widget/${LOOX.clientId}/rating?h=` + LOOX.hash, fetch(t)), e.setAttribute("data-rating-upgraded", "1"), "true" === e.getAttribute("data-floating-product-reviews-enabled") && e.addEventListener("click", () => {
                    window.LOOX.openHCFloater(a)
                })
            }
        }
    }

    function t() {
        const a = {};
        for (let t = 0; t < e.length; t++) r(a, e[t]);
        const t = Object.keys(a);
        t.length <= 0 || !o || LOOX.ajax.get(`${LOOX.root}/widget/${LOOX.clientId}/ratings`, {
            products_ids: t.join(","),
            h: LOOX.hash
        }, function(e) {
            if (e.success) {
                if (Array.isArray(e.ratings) && !(e.ratings.length <= 0))
                    for (let t = 0; t < e.ratings.length; t++) {
                        var n = e.ratings[t];
                        s[n.pid] = {
                            rating: n.rating,
                            raters: n.raters
                        };
                        var r = a[n.pid] || [];
                        for (let t = 0; t < r.length; t++) {
                            const i = r[t];
                            i.setAttribute("data-rating", n.rating), i.setAttribute("data-raters", n.raters)
                        }
                    }
            } else o = !1
        })
    }
    setInterval(t, 500), t()
}();
! function(i) {
    var e, t;

    function o() {
        var t = window.location.pathname,
            e = null,
            o = document.getElementById("looxReviews"); - 1 !== t.indexOf("/products/") && o && o.dataset && void 0 === o.dataset.looxAggregate && (e = i.productId), i.openHCFloater(e)
    }
    i && !i.floating_widget && "undefined" != typeof loox_floating_widget && (i.floating_widget = loox_floating_widget, i.floating_widget.active && (i.floating_widget.hide_on_mobile && i.isMobile() || ("/" === (t = window.location.pathname) ? i.floating_widget.display_on_home_page : 0 === t.indexOf("/cart") ? i.floating_widget.display_on_cart_page : i.productId ? i.floating_widget.display_on_product_page : i.floating_widget.display_on_other_pages) && (e = document.createElement("div"), t = i.createRatingIconSvg("full"), e.appendChild(t), i.injectStyleTag(`
      .loox-floating-widget-btn { display: flex; justify-content: center; align-items: center; gap: 4px; }
      .loox-floating-widget-btn svg.loox-icon { font-size: 16px }
    `), e.innerHTML += " " + i.floating_widget.button_text, e.classList.add("loox-float-toggler", "loox-floating-widget-btn"), e.setAttribute("tabindex", "0"), e.setAttribute("role", "button"), e.setAttribute("data-orientation", i.floating_widget.orientation), e.style.backgroundColor = "#" + (i.floating_widget.button_bg_color || "333"), e.style.color = "#" + (i.floating_widget.button_text_color || "fff"), e.addEventListener("keypress", function(t) {
        "Enter" !== t.code && "Space" !== t.code || o()
    }), e.addEventListener("click", o), i.domReady(() => setTimeout(() => {
        var t = document.querySelector(".loox-float-toggler-container-" + i.floating_widget.position);
        t && t.appendChild(e)
    }, 1500)))))
}(LOOX || {});
! function(e) {
    var o, t, i;
    e && !e.floating_container && e.clientId && (e.floating_container = !0, i = [], t = e.isRTLDirection(), o = "object" == typeof Shopify && Shopify.locale, "undefined" != typeof loox_floating_widget && (o && t && (loox_floating_widget.rtl = t), i.push(loox_floating_widget)), "undefined" != typeof visitor_level_referral && (o && t && (visitor_level_referral.rtl = t), i.push(visitor_level_referral)), 0 !== (i = i.filter(function(o) {
        var t = window.location.pathname;
        return "/" === t ? o.display_on_home_page : 0 === t.indexOf("/cart") ? o.display_on_cart_page : e.productId ? o.display_on_product_page : o.display_on_other_pages
    })).length && (t = i.some(o => o.rtl), e.injectStyleTag(`
    .loox-float-toggler-container { width: 0; position: fixed; z-index: 9999; top: 50%; display: flex; justify-content: center; transition-duration: 0.4s; transition-timing-function: cubic-bezier(1, 0, 0, 1); }
    .loox-float-toggler-container-right { right: 0; transform: rotate(90deg) translate(50%, 50%); } .loox-float-toggler-container-left { left: 0; transform: rotate(270deg) translate(-50%, 0); transform-origin: top;} .loox-float-toggler-container .loox-float-toggler { padding: 10px 20px 15px 20px; font-size: 18px; line-height: 1; cursor: pointer; position: relative; transition-duration: 0.4s; transition-timing-function: cubic-bezier(1, 0, 0, 1); width: auto; white-space: nowrap; border-radius: 0 0 15px 15px; margin: 0 8px 0px 8px; }
    .loox-float-toggler:hover, .loox-float-toggler:focus { color: initial; }
    ${t?".loox-float-toggler {direction:rtl;}":""}
    .loox-float-toggler[data-orientation="flipped"] { transform: rotate(180deg);border-radius: 15px 15px 0 0 !important;padding: 15px 20px 10px 20px !important; }
  `), i = i.map(o => o.position), new Set(i).forEach(o => {
        var t = document.createElement("div");
        t.classList.add("loox-float-toggler-container"), t.classList.add("loox-float-toggler-container-" + o), e.domReady(() => document.body.appendChild(t))
    })))
}(LOOX || {});
LOOX.openVisitorLevelReferralModal = function() {
        var e, t;
        LOOX.root && LOOX.clientId && ((e = []).push("h=" + LOOX.hash), t = LOOX.root + "/referrals/" + LOOX.clientId + "/visitor", LOOX.multilingual && LOOX.shopifyLocale && e.push("language=" + LOOX.shopifyLocale), 0 < e.length && (t += "?" + e.join("&")), LOOX.inject(t, "looxModalFrame", "99vh", {
            width: "100%",
            overlay: !0,
            marginTop: "0px",
            overlayColor: "rgba(0, 0, 0, 0.7)",
            title: "On site referral registration form",
            cssTextModification: "overflow-y: initial;"
        }))
    }, LOOX.initReferralEntryFormWidget = function(l) {
        l = void 0 !== l && l;
        var e = document.querySelectorAll(".loox-referrals-entry-form"),
            a = LOOX.root + "/referrals/" + LOOX.clientId + "/visitor/page";
        [].forEach.call(e, function(e) {
            var t, r, o, i = a + "?";
            !e || e.dataset.widgetLoaded && !l || (e.dataset.widgetLoaded = "true", (t = e.querySelector("iframe") || document.createElement("iframe")).setAttribute("allow", "web-share"), (r = e.getAttribute("id")) ? (e.style.width = "100%", !(o = {
                layout: e.getAttribute("data-layout"),
                photo: e.getAttribute("data-photo"),
                preview: e.getAttribute("data-preview") || "no",
                max_width: e.getAttribute("data-max-width"),
                primary_color: e.getAttribute("data-primary-color"),
                text_color: e.getAttribute("data-text-color"),
                text_field_border_color: e.getAttribute("data-text-field-border-color"),
                background: e.getAttribute("data-background"),
                container_id: r,
                h: LOOX.hash,
                language: e.getAttribute("data-language")
            }).language && LOOX.multilingual && LOOX.shopifyLocale && (o.language = LOOX.shopifyLocale), Object.keys(o).forEach(function(e) {
                o[e] && (i += e + "=" + encodeURI(o[e]) + "&")
            }), i = i.slice(0, -1), t.src = i, t.width = "100%", t.height = "100%", t.id = r + "_FRAME", t.title = "On site referral embedded registration form", t.setAttribute("style", "display:block;border:0;overflow:hidden;height:100%;width:100%;"), e.appendChild(t)) : console.log("Loox - Referrals entry form missing ID"))
        })
    },
    function(t) {
        var e, r;
        t.domReady(t.initReferralEntryFormWidget), t && !t.visitor_level_referral && "undefined" != typeof visitor_level_referral && (t.visitor_level_referral = visitor_level_referral, e = window.location.pathname, !1 !== t.visitor_level_referral.sidebar_visible && ("/" === e ? t.visitor_level_referral.display_on_home_page : 0 === e.indexOf("/cart") ? t.visitor_level_referral.display_on_cart_page : t.productId ? t.visitor_level_referral.display_on_product_page : t.visitor_level_referral.display_on_other_pages) && (t.visitor_level_referral.hide_on_mobile && t.isMobile() || ((r = document.createElement("div")).innerHTML = t.visitor_level_referral.button_text, r.classList.add("loox-float-toggler"), r.setAttribute("data-testid", "loox-referrals-modal-button"), r.setAttribute("tabindex", "0"), r.setAttribute("role", "button"), r.setAttribute("data-orientation", t.visitor_level_referral.orientation), r.style.backgroundColor = "#" + (t.visitor_level_referral.button_bg_color || "333"), r.style.color = "#" + (t.visitor_level_referral.button_text_color || "fff"), r.addEventListener("keypress", function(e) {
            "Enter" !== e.code && "Space" !== e.code || t.openVisitorLevelReferralModal()
        }), r.addEventListener("click", function() {
            t.openVisitorLevelReferralModal()
        }), t.domReady(function() {
            setTimeout(function() {
                var e = document.querySelector(".loox-float-toggler-container-" + t.visitor_level_referral.position);
                e && (0 === e.childNodes.length ? e.appendChild(r) : e.insertBefore(r, e.childNodes[0]))
            }, 1500)
        }))))
    }(LOOX || {});
"object" == typeof Shopify && Shopify.checkout && Shopify.Checkout && LOOX.domReady(function() {
    var e = document.createElement("script");
    e.type = "text/javascript", e.async = !0;
    var o = "?orderId=" + Shopify.checkout.order_id;
    LOOX.multilingual && (o += "&locale=" + (Shopify.locale || Shopify.checkout.customer_locale || "")), e.src = LOOX.root + "/referrals/" + LOOX.clientId + "/loader" + o;
    o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(e, o)
});
! function(i) {
    function o() {
        return !i || !i.privacyUtils || (i.privacyUtils.isListening || i.privacyUtils.listenToConsentApiChanges(), i.privacyUtils.canTrackUser())
    }
    i && !i.report && (i.report = {
        sendPixel: function(e) {
            const t = (e || {}).url,
                n = (e || {}).data;
            if (t && Array.isArray(n))
                if (o()) {
                    const r = document.createElement("img");
                    r.src = t + "?" + n.join("&"), r.setAttribute("style", "display:none;border:0;overflow:hidden;height:1px;width:1px;"), document.body.appendChild(r)
                } else i.report.waitingReports.push({
                    invoker: i.report.sendPixel,
                    data: [e]
                })
        },
        sendGa: function(e, t, n) {
            if (i.isDev) return console.info("GA", e, t, n);
            e && t && (o() ? "undefined" != typeof ga && ga("send", {
                hitType: "event",
                eventCategory: e,
                eventAction: t,
                eventLabel: n
            }) : i.report.waitingReports.push({
                invoker: i.report.sendGa,
                data: [e, t, n]
            }))
        },
        sendConsentUpdateToChild: function(e, t) {
            var n;
            e && e.source && t && "object" == typeof t && ((n = o()) && (t = {
                type: "reportApproved",
                canTrack: n,
                data: t.data || {}
            }, e.source.postMessage(JSON.stringify(t), "*")))
        },
        waitingReports: [],
        sendWaitingReports: function() {
            i.report.waitingReports.forEach(e => {
                e && e.invoker && e.invoker.apply(null, e.data)
            }), i.report.waitingReports = []
        }
    }, i && i.privacyUtils && i.privacyUtils.listenToConsentApiChanges((e, t) => {
        t && i.report && i.report.waitingReports && i.report.waitingReports.length && i.report.sendWaitingReports()
    }))
}(LOOX || {});
! function() {
    "use strict";
    const c = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 105 15">
<path d="M1.16 12V3.273h2.816c.62 0 1.136.119 1.551.358.418.235.732.557.942.963.213.406.32.863.32 1.372 0 .508-.106.967-.316 1.376-.21.407-.523.729-.937.968-.415.235-.93.353-1.547.353H1.773v-.716h2.194c.458 0 .837-.085 1.138-.255a1.65 1.65 0 0 0 .673-.708 2.23 2.23 0 0 0 .226-1.018c0-.38-.075-.72-.226-1.019a1.617 1.617 0 0 0-.677-.703c-.301-.17-.683-.255-1.146-.255H1.956V12h-.797Zm9.815.136a2.66 2.66 0 0 1-1.5-.43 2.913 2.913 0 0 1-1.014-1.189c-.244-.508-.367-1.095-.367-1.76 0-.67.123-1.26.367-1.768a2.87 2.87 0 0 1 1.014-1.194 2.66 2.66 0 0 1 1.5-.43c.566 0 1.064.144 1.496.43.432.287.77.685 1.014 1.194.247.508.37 1.098.37 1.768 0 .665-.121 1.252-.366 1.76a2.901 2.901 0 0 1-1.018 1.189c-.432.287-.93.43-1.496.43Zm0-.694c.455 0 .84-.122 1.155-.367.315-.244.554-.57.716-.976.165-.406.247-.853.247-1.342 0-.489-.082-.937-.247-1.346-.162-.41-.4-.738-.716-.985-.315-.247-.7-.37-1.155-.37-.452 0-.836.123-1.155.37a2.323 2.323 0 0 0-.72.985 3.621 3.621 0 0 0-.243 1.346c0 .489.081.936.243 1.342.165.407.405.732.72.976.316.245.7.367 1.155.367Zm5.776.558-1.977-6.545h.801l1.551 5.399h.056l1.547-5.4h.805l1.534 5.387h.06l1.551-5.386h.801L21.503 12h-.784l-1.551-5.365h-.081L17.535 12h-.784Zm10.627.136c-.61 0-1.139-.142-1.585-.426a2.855 2.855 0 0 1-1.035-1.189c-.242-.508-.363-1.093-.363-1.755 0-.66.121-1.245.363-1.756.244-.514.58-.916 1.01-1.206.431-.293.93-.439 1.495-.439.355 0 .698.065 1.027.196a2.5 2.5 0 0 1 .887.592 2.8 2.8 0 0 1 .626 1.002c.153.4.23.875.23 1.423v.375h-5.114v-.669h4.338c0-.42-.085-.798-.255-1.133a1.988 1.988 0 0 0-.703-.802 1.843 1.843 0 0 0-1.036-.294c-.415 0-.78.111-1.095.333a2.284 2.284 0 0 0-.741.878 2.744 2.744 0 0 0-.269 1.193v.4c0 .52.09.975.268 1.364.182.386.44.686.772.9.332.212.726.319 1.18.319.31 0 .581-.049.814-.145a1.744 1.744 0 0 0 .959-.93l.72.235c-.1.276-.263.53-.49.763-.224.233-.506.42-.844.563a3.004 3.004 0 0 1-1.159.208ZM31.704 12V5.455h.738V6.46h.055c.13-.33.358-.595.682-.797a2.044 2.044 0 0 1 1.108-.306 5.667 5.667 0 0 1 .4.012v.772a6.442 6.442 0 0 0-.178-.026 2.1 2.1 0 0 0-.278-.017c-.34 0-.644.072-.911.217-.265.142-.473.34-.627.593-.153.253-.23.54-.23.865V12h-.759Zm6.725.136c-.61 0-1.14-.142-1.585-.426a2.856 2.856 0 0 1-1.036-1.189c-.241-.508-.362-1.093-.362-1.755 0-.66.12-1.245.362-1.756a2.94 2.94 0 0 1 1.01-1.206c.432-.293.93-.439 1.496-.439.355 0 .697.065 1.027.196.33.128.625.325.886.592a2.8 2.8 0 0 1 .627 1.002c.153.4.23.875.23 1.423v.375H35.97v-.669h4.338c0-.42-.085-.798-.255-1.133a1.988 1.988 0 0 0-.704-.802 1.842 1.842 0 0 0-1.035-.294c-.415 0-.78.111-1.095.333a2.284 2.284 0 0 0-.742.878 2.741 2.741 0 0 0-.268 1.193v.4c0 .52.09.975.268 1.364.182.386.44.686.772.9.332.212.725.319 1.18.319.31 0 .58-.049.814-.145a1.745 1.745 0 0 0 .959-.93l.72.235c-.1.276-.263.53-.49.763-.225.233-.506.42-.844.563a3.004 3.004 0 0 1-1.159.208Zm6.683 0c-.537 0-1.007-.142-1.41-.426-.404-.284-.72-.68-.947-1.189-.224-.508-.336-1.1-.336-1.777 0-.673.112-1.262.336-1.768.228-.509.544-.904.95-1.185.407-.284.88-.426 1.42-.426.397 0 .728.071.992.213.265.14.476.313.636.52.159.207.282.41.37.605h.068v-3.43h.763V12h-.741v-1.214h-.09a3.014 3.014 0 0 1-.375.613 1.981 1.981 0 0 1-.643.524c-.264.142-.595.213-.993.213Zm.09-.694c.423 0 .783-.115 1.082-.345.298-.233.525-.553.682-.96.159-.408.238-.877.238-1.405 0-.523-.078-.985-.234-1.385-.156-.404-.384-.72-.682-.946-.298-.23-.66-.346-1.087-.346-.437 0-.806.12-1.108.358a2.204 2.204 0 0 0-.681.96 3.8 3.8 0 0 0-.23 1.359c0 .508.078.967.234 1.376.156.409.383.734.682.976.3.238.669.358 1.103.358Zm8.445.558V3.273h.763v3.43h.068c.086-.196.208-.398.367-.605.162-.207.373-.38.635-.52.264-.142.596-.213.997-.213a2.41 2.41 0 0 1 1.415.426c.406.281.723.676.95 1.185.227.506.34 1.095.34 1.768 0 .676-.113 1.269-.34 1.777-.224.509-.54.905-.946 1.19a2.38 2.38 0 0 1-1.406.425c-.398 0-.73-.07-.998-.213a1.995 1.995 0 0 1-.639-.524 3.023 3.023 0 0 1-.375-.613h-.093V12h-.738Zm.75-3.268c0 .528.078.997.235 1.406.159.406.386.726.682.959.298.23.659.345 1.082.345.435 0 .803-.12 1.104-.358.3-.242.53-.567.686-.976.156-.41.234-.868.234-1.376 0-.503-.078-.956-.234-1.36a2.16 2.16 0 0 0-.682-.959c-.301-.238-.67-.358-1.108-.358-.426 0-.788.115-1.087.346-.295.227-.521.542-.677.946-.157.4-.235.862-.235 1.385Zm6.746 5.723a1.985 1.985 0 0 1-.733-.137l.205-.669c.258.08.488.108.69.085.202-.02.38-.11.537-.272.156-.16.295-.404.418-.733l.238-.665-2.407-6.61h.822L62.856 11h.06l1.943-5.544h.823l-2.77 7.58c-.117.316-.26.579-.43.789-.171.213-.369.37-.593.473-.222.105-.47.157-.746.157Z"/>
<path fill-rule="evenodd" d="M92.17 12.421c1.365 0 2.516-.463 3.452-1.391.936-.928 1.403-2.104 1.403-3.53 0-1.426-.467-2.602-1.403-3.53-.936-.927-2.087-1.391-3.452-1.391-1.365 0-2.518.464-3.46 1.39-.236.235-1.207 1.582-1.207 1.582l.903 1.16 1.383-1.72v.01l.013-.014c.004-.005.007-.01.012-.014.607-.636 1.39-.954 2.349-.954.959 0 1.742.318 2.35.954.606.638.91 1.48.91 2.527 0 1.048-.304 1.892-.91 2.533-.608.642-1.391.957-2.35.962-1.481.008-2.353-.93-2.353-.93L85.473 4.68a4.8 4.8 0 0 0-.59-.71c-.937-.927-2.087-1.391-3.452-1.391-1.365 0-2.518.464-3.459 1.391-.94.928-1.41 2.104-1.41 3.53 0 1.426.47 2.602 1.41 3.53.94.928 2.094 1.391 3.459 1.391 1.357 0 2.503-.46 3.436-1.376l.005-.005a.792.792 0 0 0 .003-.003l-.008.008c-.107.099 1.38-1.494 1.38-1.494L85.21 8.304s-1.275 2.691-3.787 2.691c-.959 0-1.742-.32-2.35-.962-.607-.64-.91-1.485-.91-2.533 0-1.048.303-1.89.91-2.527.608-.636 1.391-.954 2.35-.954.958 0 1.741.318 2.349.954a1.45 1.45 0 0 1 .055.06v-.03l1.203 1.41 3.142 3.987c.232.324.441.534.538.63.94.928 2.094 1.391 3.459 1.391ZM71 2.704v9.62h6.078l-.72-1.422h-3.796V2.704H71Zm33.986 9.62-2.959-4.803L105 2.704h-1.753l-2.027 3.502-2.151-3.502h-1.753l2.959 4.817-2.96 4.803h1.754l2.013-3.488 2.151 3.488h1.753Z" clip-rule="evenodd"/>
</svg>`,
        x = [{
            name: "rating-icon",
            default: !1
        }, {
            name: "average-rating",
            default: !1
        }, {
            name: "review-count",
            default: !1
        }, {
            name: "show-border",
            default: !1
        }, {
            name: "open-reviews",
            default: !1
        }, {
            name: "loox-branding",
            default: !0
        }],
        g = x.map(o => o.name),
        u = ["horizontal", "horizontal-slim", "vertical", "horizontal-star", "horizontal-slim-star", "vertical-slim-star", "vertical-star"],
        b = (o, t) => t.includes(o),
        v = ["border-radius", "font-size", "background-color", "secondary-background-color", "logo-color", "text-color", "rating-icon-color", "border-color", "rating", "raters", "layout", "review-title", ...g];
    const p = o => {
            var t;
            if (null == (t = window.LOOX) || !t.createRatingIconSvg) return null;
            const r = o["rating-icon-color"] || null,
                e = null == (o = window.LOOX) ? void 0 : o.createRatingIconSvg("full", r);
            return e ? (e.setAttribute("aria-hidden", "true"), e) : null
        },
        h = (t, o) => {
            const r = [];
            o["secondary-background-color"] && r.push({
                key: "--loox-trust-badge-secondary-background",
                value: o["secondary-background-color"]
            }), o["logo-color"] && r.push({
                key: "--loox-trust-badge-secondary-on-background",
                value: o["logo-color"]
            }), r.forEach(o => {
                t.style.setProperty(o.key, o.value)
            })
        },
        e = `:root,:host{--lxs-font-size-3xl: var(--lxs-u-font-size-3xl, 42px);--lxs-line-height-3xl: var(--lxs-u-line-height-3xl, 1.25);--lxs-font-size-2xl: var(--lxs-u-font-size-2xl, 28px);--lxs-line-height-2xl: var(--lxs-u-line-height-2xl, 1.25);--lxs-font-size-xl: var(--lxs-u-font-size-xl, 20px);--lxs-line-height-xl: var(--lxs-u-line-height-xl, 1.4);--lxs-font-size-l: var(--lxs-u-font-size-l, 18px);--lxs-line-height-l: var(--lxs-u-line-height-l, 1.4);--lxs-font-size-base: var(--lxs-u-font-size-base, 16px);--lxs-line-height-base: var(--lxs-u-line-height-base, 1.5);--lxs-font-size-s: var(--lxs-u-font-size-s, 14px);--lxs-line-height-s: var(--lxs-u-line-height-s, 1.5);--lxs-font-size-xs: var(--lxs-u-font-size-xs, 12px);--lxs-line-height-xs: var(--lxs-u-line-height-xs, 1.5);--lxs-font-weight-regular: var(--lxs-u-font-weight-regular, normal);--lxs-font-weight-bold: var(--lxs-u-font-weight-bold, bold);--lxs-shadow-level-1: var(--lxs-u-shadow-level-1, 0px 3px 14px -2px rgba(0, 0, 0, .12));--lxs-shadow-level-2: var(--lxs-u-shadow-level-2, 0px 3px 15px -4px rgba(0, 0, 0, .22));--lxs-shadow-level-3: var(--lxs-u-shadow-level-3, 0px 0px 35px -10px rgba(0, 0, 0, .25));--lxs-shadow-bottom: var(--lxs-u-shadow-bottom, 0px -4px 11px rgba(0, 0, 0, .04), 0px -3px 6px rgba(0, 0, 0, .03), 0px -1px 3px rgba(0, 0, 0, .03), 0px -.5px 1px rgba(0, 0, 0, .01), 0px -.1px .5px rgba(0, 0, 0, .005));--lxs-shadow-floating: var(--lxs-u-shadow-floating, 0px -2px 12px rgba(0, 0, 0, .08));--lxs-color-primary: var(--lxs-u-color-primary, #00639c);--lxs-color-primary-hover: var(--lxs-u-color-primary-hover, #00639c);--lxs-color-on-primary: var(--lxs-u-color-on-primary, #ffffff);--lxs-color-primary-container: var(--lxs-u-color-primary-container, #cee5ff);--lxs-color-on-primary-container: var(--lxs-u-color-on-primary-container, #001d33);--lxs-color-secondary: var(--lxs-u-color-secondary, #53606e);--lxs-color-on-secondary: var(--lxs-u-color-on-secondary, #ffffff);--lxs-color-secondary-container: var(--lxs-u-color-secondary-container, #d6e4f5);--lxs-color-on-secondary-container: var(--lxs-u-color-on-secondary-container, #0f1d29);--lxs-color-tertiary: var(--lxs-u-color-tertiary, #685878);--lxs-color-on-tertiary: var(--lxs-u-color-on-tertiary, #ffffff);--lxs-color-tertiary-container: var(--lxs-u-color-tertiary-container, #efdbff);--lxs-color-on-tertiary-container: var(--lxs-u-color-on-tertiary-container, #221631);--lxs-color-error: var(--lxs-u-color-error, #bb171b);--lxs-color-on-error: var(--lxs-u-color-on-error, #fff4f4);--lxs-color-error-container: var(--lxs-u-color-error-container, #ffe9e9);--lxs-color-on-error-container: var(--lxs-u-color-on-error-container, #7e0000);--lxs-color-background: var(--lxs-u-color-background, #fcfcff);--lxs-color-on-background: var(--lxs-u-color-on-background, #1a1c1e);--lxs-color-surface: var(--lxs-u-color-surface, #fcfcff);--lxs-color-on-surface: var(--lxs-u-color-on-surface, #1a1c1e);--lxs-color-surface-variant: var(--lxs-u-color-surface-variant, #dfe3ea);--lxs-color-on-surface-variant: var(--lxs-u-color-on-surface-variant, #42474d);--lxs-color-outline: var(--lxs-u-color-outline, #73777e);--lxs-color-outline-variant: var(--lxs-u-color-outline-variant, #c2c7ce);--lxs-color-shadow: var(--lxs-u-color-shadow, #000000);--lxs-color-scrim: var(--lxs-u-color-scrim, #000000);--lxs-color-inverse-surface: var(--lxs-u-color-inverse-surface, #2f3033);--lxs-color-inverse-on-surface: var(--lxs-u-color-inverse-on-surface, #f1f0f3);--lxs-color-inverse-primary: var(--lxs-u-color-inverse-primary, #97cbff);--lxs-color-star-color: var(--lxs-u-color-star-color, #ff8d00);--lxs-border-radius: var(--lxs-u-border-radius, 16px);--lxs-spacing: 4px;--lxs-control-padding: 12px;--lxs-control-icon-size: 1.5em}.lxs-paper{display:block;box-sizing:border-box;padding:0;margin:0;border:var(--lxs-paper-border, 0);border-radius:var(--lxs-paper-border-radius, var(--lxs-border-radius));box-shadow:var(--lxs-paper-shadow, none);background-color:var(--lxs-paper-background-color, var(--lxs-color-background))}.lxs-paper[data-lxs-elevation=level-1]{--lxs-paper-shadow: var(--lxs-shadow-level-1)}.lxs-paper[data-lxs-elevation=level-2]{--lxs-paper-shadow: var(--lxs-shadow-level-2)}.lxs-paper[data-lxs-elevation=level-3]{--lxs-paper-shadow: var(--lxs-shadow-level-3)}.lxs-paper[data-lxs-elevation=bottom]{--lxs-paper-shadow: var(--lxs-shadow-bottom)}.lxs-paper[data-lxs-elevation=floating]{--lxs-paper-shadow: var(--lxs-shadow-floating)}.lxs-paper[data-lxs-variant=fill]{--lxs-paper-background-color: var(--lxs-color-surface-variant)}.lxs-paper[data-lxs-variant=outlined]{--lxs-paper-background-color: var(--lxs-color-background);--lxs-paper-border: 1px solid var(--lxs-color-outline-variant)}.loox-trust-badge-container .loox-trust-badge-widget{width:fit-content;min-width:100px;overflow:hidden;align-items:center;display:flex;flex-direction:column;background-color:var(--lxs-u-color-background, var(--lxs-color-background))}.loox-trust-badge-container .loox-trust-badge-widget .loox-trust-badge-widget-ratings__raters,.loox-trust-badge-container .loox-trust-badge-widget .loox-trust-badge-widget-ratings__average-rating{color:var(--lxs-u-color-on-background, var(--lxs-color-on-background))}.loox-trust-badge-container .loox-trust-badge-widget .loox-icon use{color:var(--loox-trust-badge-star-rating-icon)}.loox-trust-badge-container .loox-trust-badge-widget-content{display:flex;gap:8px;flex-direction:column;padding:8px;font-size:1em}.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings{display:flex;gap:8px;justify-content:center;align-items:center}.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__average-rating,.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__stars{display:flex;justify-content:center;align-items:center;line-height:28px;text-align:center}.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__average-rating{font-weight:var(--lxs-font-weight-bold)}.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__raters{display:flex;gap:4px;line-height:28px;justify-content:center;align-items:center}.loox-trust-badge-container .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__raters .loox-trust-badge-widget-ratings__raters-count{font-weight:var(--lxs-font-weight-bold)}.loox-trust-badge-container .loox-trust-badge-widget__logo{display:flex;justify-content:center;background-color:var(--loox-trust-badge-secondary-background, var(--lxs-color-inverse-surface));color:var(--loox-trust-badge-secondary-on-background, var(--lxs-color-inverse-on-surface));padding:4px 12px;width:100%}.loox-trust-badge-container .loox-trust-badge-widget__logo svg{display:inline-block;width:105px;height:15px}.loox-trust-badge-container{display:none}.loox-trust-badge-container[data-loox-alignment=left]{justify-content:left}.loox-trust-badge-container[data-loox-alignment=right]{justify-content:right}.loox-trust-badge-container[data-loox-alignment=center]{justify-content:center}.loox-trust-badge-container[data-loox-open-reviews=true] .loox-trust-badge-widget.lxs-paper{cursor:pointer}.loox-trust-badge-container[data-loox-alignment=fillContainer] .loox-trust-badge-widget{width:100%}.loox-trust-badge-container[data-loox-layout^=vertical] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings{flex-direction:column}.loox-trust-badge-container[data-loox-layout*=-star] .loox-trust-badge-widget-ratings__stars,.loox-trust-badge-container[data-loox-layout*=-star] .loox-trust-badge-widget-ratings__average-rating{font-size:1.4em}.loox-trust-badge-container[data-loox-layout^=vertical][data-loox-layout*=-star] .loox-trust-badge-widget-ratings__stars{font-size:3em}.loox-trust-badge-container[data-loox-layout^=vertical][data-loox-layout*=-star] .loox-trust-badge-widget-ratings__average-rating{font-size:1.4em}.loox-trust-badge-container .loox-trust-badge-widget-content-container{width:100%;display:flex;align-items:center;justify-content:center}.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content{flex-direction:row;gap:16px}.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings+.loox-trust-badge-widget-ratings__raters{position:relative}.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings+.loox-trust-badge-widget-ratings__raters:before{content:"";height:.8em;width:1px;background:currentColor;position:absolute;left:-8px}.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__stars,.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__average-rating,.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__raters-count,.loox-trust-badge-container[data-loox-layout*=-slim] .loox-trust-badge-widget-content .loox-trust-badge-widget-ratings__raters-title{list-style:100%}.loox-trust-badge-container[data-loox-scheme-type=inverted] .loox-trust-badge-widget{background-color:var(--lxs-color-inverse-surface)}.loox-trust-badge-container[data-loox-scheme-type=inverted] .loox-trust-badge-widget .loox-trust-badge-widget-ratings__raters,.loox-trust-badge-container[data-loox-scheme-type=inverted] .loox-trust-badge-widget .loox-trust-badge-widget-ratings__average-rating{color:var(--lxs-u-color-inverse-on-surface, var(--lxs-color-inverse-on-surface))}.loox-trust-badge-container[data-loox-scheme-type=inverted] .loox-trust-badge-widget__logo{background-color:var(--loox-trust-badge-secondary-background, var(--lxs-u-color-background, var(--lxs-color-background)));color:var(--loox-trust-badge-secondary-on-background, #000000)}.loox-trust-badge-container[data-loox-scheme-type=alternative] .loox-trust-badge-widget{background-color:var(--lxs-u-color-primary-container, var(--lxs-color-primary-container))}.loox-trust-badge-container[data-loox-scheme-type=alternative] .loox-trust-badge-widget .loox-trust-badge-widget-ratings__raters,.loox-trust-badge-container[data-loox-scheme-type=alternative] .loox-trust-badge-widget .loox-trust-badge-widget-ratings__average-rating{color:var(--lxs-u-color-on-primary-container, --lxs-color-on-primary-container)}
`;
    let a = !1;
    const f = o => {
        const t = function(o, t, r) {
            const e = o.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                a = Number(t).toFixed(1),
                l = document.createElement("div");
            l.classList.add("loox-trust-badge-widget-ratings__raters-count");
            const s = document.createElement("div");
            if (l.innerText = "" + e, s.appendChild(l), r) {
                const n = document.createElement("div");
                n.classList.add("loox-trust-badge-widget-ratings__raters-title"), n.innerText = r, s.appendChild(n)
            }
            return s.setAttribute("title", a + ` rating (${e} votes)`), s.setAttribute("aria-label", a + ` rating (${e} votes)`), s
        }(o.raters, o.rating, o["review-title"]);
        return t.classList.add("loox-trust-badge-widget-ratings__raters"), t
    };
    window.LOOX && !window.LOOX.renderTrustBadgeWidget && (window.LOOX.renderTrustBadgeWidget = () => {
        const o = document.querySelectorAll(".loox-trust-badge-container");
        let i = !1,
            d = !1;
        var t, r;
        o.forEach(o => {
            var t = (e => {
                const a = {};
                return v.forEach(t => {
                    var o, r = e.getAttribute("data-loox-" + t);
                    b(t, g) ? (o = x.find(o => o.name === t), a[t] = "true" === r || "false" !== r && o.default) : a[t] = "layout" !== t ? r || "" : b(r, u) ? r : "horizontal"
                }), t = a, ["rating-icon", "average-rating", "review-count"].some(o => !0 === t[o]) || (t["rating-icon"] = !0, t["average-rating"] = !0, t["review-count"] = !0), t.raters = t.raters || "0", t.rating = t.rating || "0", t;
                var t
            })(o);
            "yes" === o.getAttribute("data-preview") || (d = !0);
            var r = "loox-trust-badge-widget-updated";
            if (t.raters || t.rating) {
                const e = document.createElement("div");
                e.classList.add("loox-trust-badge-widget"), ((t, o) => {
                    const r = [];
                    if (t.classList.add("lxs-paper"), o["background-color"]) {
                        const a = o["background-color"];
                        r.push(...["--lxs-u-color-background", "--lxs-u-color-inverse-on-surface", "--lxs-u-color-primary-container"].map(o => ({
                            key: o,
                            value: a
                        })))
                    }
                    if (o["text-color"]) {
                        const l = "" + o["text-color"];
                        r.push(...["--lxs-u-color-on-background", "--lxs-u-color-on-primary-container", "--lxs-u-color-inverse-on-surface"].map(o => ({
                            key: o,
                            value: l
                        })))
                    }
                    var e;
                    o["rating-icon-color"] && (e = "" + o["rating-icon-color"], r.push({
                        key: "--loox-trust-badge-star-rating-icon",
                        value: e
                    })), o["border-color"] && !0 === o["show-border"] && r.push({
                        key: "--lxs-paper-border",
                        value: "1px solid " + o["border-color"]
                    }), o["border-radius"] && r.push({
                        key: "--lxs-paper-border-radius",
                        value: o["border-radius"] + "px"
                    }), !0 === o["show-border"] && t.setAttribute("data-lxs-variant", "outlined"), r.forEach(o => t.style.setProperty(o.key, o.value)), o["font-size"] && (t.style.fontSize = o["font-size"] + "px")
                })(e, t);
                const a = document.createElement("div");
                a.classList.add("loox-trust-badge-widget-content");
                const l = document.createElement("div");
                l.classList.add("loox-trust-badge-widget-content-container");
                const s = (o => {
                    const t = document.createElement("div");
                    if (t.classList.add("loox-trust-badge-widget-ratings"), !0 === o["rating-icon"]) {
                        const a = document.createElement("div");
                        var r;
                        a.classList.add("loox-trust-badge-widget-ratings__stars"), a.classList.add("loox-rating"), a.setAttribute("data-is-trust-badge", "true"), (o.layout || "").includes("-star") ? (r = p(o)) && (a.appendChild(r), a.setAttribute("data-rating-upgraded", "1")) : (r = Number(o.rating) ? o.rating : "-1", a.setAttribute("data-rating", r)), t.appendChild(a)
                    }
                    const e = Number(o.rating);
                    if (!0 === o["average-rating"] && !isNaN(e)) {
                        const l = document.createElement("div");
                        l.classList.add("loox-trust-badge-widget-ratings__average-rating");
                        o = e % 1 != 0 ? 1 : 0;
                        l.innerText = e.toFixed(o) + "/5", t.appendChild(l)
                    }
                    return t
                })(t);
                if (s && s.hasChildNodes() && a.appendChild(s), !0 === t["review-count"] && t.raters) {
                    const n = f(t);
                    n && n.hasChildNodes() && a.append(n)
                }
                l.append(a), e.appendChild(l), !0 === t["loox-branding"] && e.appendChild((o => {
                    const t = document.createElement("a");
                    t.setAttribute("href", "https://apps.shopify.com/loox?utm_source=widget&utm_medium=widget_trust_badge&utm_campaign=client_" + window.LOOX.clientId), t.setAttribute("target", "_blank"), t.setAttribute("rel", "noreferrer"), t.setAttribute("aria-label", "Powered by Loox"), t.classList.add("loox-trust-badge-widget__logo");
                    const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    return h(t, o), r.setAttribute("viewBox", "0 0 105 15"), r.innerHTML = c, o["secondary-background-color"] && t.style.setProperty("--loox-trust-badge-secondary-background", o["secondary-background-color"]), o["logo-color"] && r.style.setProperty("--loox-trust-badge-secondary-on-background", o["logo-color"]), t.appendChild(r), t
                })(t)), o.hasAttribute(r) || (o.setAttribute(r, "true"), o.appendChild(e), !0 === t["open-reviews"] && l.addEventListener("click", () => {
                    window.LOOX.openHCFloater()
                }), setTimeout(() => o.style.display = "flex", 300), i = !0)
            } else o.setAttribute(r, "true")
        }), i && (a || (null == (r = (t = window.LOOX).injectStyleTag) || r.call(t, e), a = !0), !d || (t = null == window ? void 0 : window.LOOX) && t.root && t.clientId && t.hash && (t = `${t.root}/widget/${t.clientId}/trust-badge?h=` + t.hash, fetch(t)))
    }, window.LOOX.renderTrustBadgeWidget())
}();
! function(t) {
    var i;
    const o = globalThis,
        l = o.ShadowRoot && (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        s = Symbol(),
        r = new WeakMap;
    let e = class {
        constructor(t, e, i) {
            if (this._$cssResult$ = !0, i !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t, this.t = e
        }
        get styleSheet() {
            let t = this.o;
            var e, i = this.t;
            return l && void 0 === t && ((e = void 0 !== i && 1 === i.length) && (t = r.get(i)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && r.set(i, t))), t
        }
        toString() {
            return this.cssText
        }
    };
    const n = t => new e("string" == typeof t ? t : t + "", void 0, s),
        a = l ? t => t : i => i instanceof CSSStyleSheet ? (() => {
            let t = "";
            for (const e of i.cssRules) t += e.cssText;
            return n(t)
        })() : i,
        {
            is: h,
            defineProperty: c,
            getOwnPropertyDescriptor: d,
            getOwnPropertyNames: p,
            getOwnPropertySymbols: u,
            getPrototypeOf: v
        } = Object,
        g = globalThis,
        x = g.trustedTypes,
        f = x ? x.emptyScript : "",
        w = g.reactiveElementPolyfillSupport,
        b = {
            toAttribute(t, e) {
                switch (e) {
                    case Boolean:
                        t = t ? f : null;
                        break;
                    case Object:
                    case Array:
                        t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                let i = t;
                switch (e) {
                    case Boolean:
                        i = null !== t;
                        break;
                    case Number:
                        i = null === t ? null : Number(t);
                        break;
                    case Object:
                    case Array:
                        try {
                            i = JSON.parse(t)
                        } catch {
                            i = null
                        }
                }
                return i
            }
        },
        y = (t, e) => !h(t, e),
        m = {
            attribute: !0,
            type: String,
            converter: b,
            reflect: !1,
            hasChanged: y
        };
    null != Symbol.metadata || (Symbol.metadata = Symbol("metadata")), null != g.litPropertyMetadata || (g.litPropertyMetadata = new WeakMap);
    class $ extends HTMLElement {
        static addInitializer(t) {
            var e;
            this._$Ei(), (null != (e = this.l) ? e : this.l = []).push(t)
        }
        static get observedAttributes() {
            return this.finalize(), this._$Eh && [...this._$Eh.keys()]
        }
        static createProperty(t, e = m) {
            var i;
            e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), e.noAccessor || (i = Symbol(), void 0 !== (e = this.getPropertyDescriptor(t, i, e)) && c(this.prototype, t, e))
        }
        static getPropertyDescriptor(i, e, s) {
            var t;
            const {
                get: r,
                set: o
            } = null != (t = d(this.prototype, i)) ? t : {
                get() {
                    return this[e]
                },
                set(t) {
                    this[e] = t
                }
            };
            return {
                get() {
                    return null == r ? void 0 : r.call(this)
                },
                set(t) {
                    var e = null == r ? void 0 : r.call(this);
                    o.call(this, t), this.requestUpdate(i, e, s)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(t) {
            return null != (t = this.elementProperties.get(t)) ? t : m
        }
        static _$Ei() {
            if (!this.hasOwnProperty("elementProperties")) {
                const t = v(this);
                t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties)
            }
        }
        static finalize() {
            if (!this.hasOwnProperty("finalized")) {
                if (this.finalized = !0, this._$Ei(), this.hasOwnProperty("properties")) {
                    var t = this.properties;
                    for (const n of [...p(t), ...u(t)]) this.createProperty(n, t[n])
                }
                var e, i, s = this[Symbol.metadata];
                if (null !== s) {
                    s = litPropertyMetadata.get(s);
                    if (void 0 !== s)
                        for (var [r, o] of s) this.elementProperties.set(r, o)
                }
                this._$Eh = new Map;
                for ([e, i] of this.elementProperties) {
                    var l = this._$Eu(e, i);
                    void 0 !== l && this._$Eh.set(l, e)
                }
                this.elementStyles = this.finalizeStyles(this.styles)
            }
        }
        static finalizeStyles(t) {
            const e = [];
            if (Array.isArray(t))
                for (const i of new Set(t.flat(1 / 0).reverse())) e.unshift(a(i));
            else void 0 !== t && e.push(a(t));
            return e
        }
        static _$Eu(t, e) {
            e = e.attribute;
            return !1 === e ? void 0 : "string" == typeof e ? e : "string" == typeof t ? t.toLowerCase() : void 0
        }
        constructor() {
            super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
        }
        _$Ev() {
            var t;
            this._$Eg = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), null == (t = this.constructor.l) || t.forEach(t => t(this))
        }
        addController(t) {
            var e;
            (null != (e = this._$ES) ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null == (e = t.hostConnected) || e.call(t))
        }
        removeController(t) {
            var e;
            null == (e = this._$ES) || e.splice(this._$ES.indexOf(t) >>> 0, 1)
        }
        _$E_() {
            const t = new Map,
                e = this.constructor.elementProperties;
            for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
            0 < t.size && (this._$Ep = t)
        }
        createRenderRoot() {
            var t = null != (t = this.shadowRoot) ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return ((t, e) => {
                if (l) t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);
                else
                    for (const i of e) {
                        const s = document.createElement("style"),
                            r = o.litNonce;
                        void 0 !== r && s.setAttribute("nonce", r), s.textContent = i.cssText, t.appendChild(s)
                    }
            })(t, this.constructor.elementStyles), t
        }
        connectedCallback() {
            var t;
            null != this.renderRoot || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null == (t = this._$ES) || t.forEach(t => {
                var e;
                return null == (e = t.hostConnected) ? void 0 : e.call(t)
            })
        }
        enableUpdating(t) {}
        disconnectedCallback() {
            var t;
            null == (t = this._$ES) || t.forEach(t => {
                var e;
                return null == (e = t.hostDisconnected) ? void 0 : e.call(t)
            })
        }
        attributeChangedCallback(t, e, i) {
            this._$AK(t, i)
        }
        _$EO(t, e) {
            var i;
            const s = this.constructor.elementProperties.get(t),
                r = this.constructor._$Eu(t, s);
            void 0 !== r && !0 === s.reflect && (e = (void 0 !== (null == (i = s.converter) ? void 0 : i.toAttribute) ? s.converter : b).toAttribute(e, s.type), this._$Em = t, null == e ? this.removeAttribute(r) : this.setAttribute(r, e), this._$Em = null)
        }
        _$AK(t, e) {
            const i = this.constructor,
                s = i._$Eh.get(t);
            if (void 0 !== s && this._$Em !== s) {
                const r = i.getPropertyOptions(s),
                    o = "function" == typeof r.converter ? {
                        fromAttribute: r.converter
                    } : void 0 !== (null == (t = r.converter) ? void 0 : t.fromAttribute) ? r.converter : b;
                this._$Em = s, this[s] = o.fromAttribute(e, r.type), this._$Em = null
            }
        }
        requestUpdate(t, e, i, s = !1, r) {
            var o;
            if (void 0 !== t) {
                if (!(null != (o = (i = null == i ? this.constructor.getPropertyOptions(t) : i).hasChanged) ? o : y)(s ? r : this[t], e)) return;
                this.C(t, e, i)
            }!1 === this.isUpdatePending && (this._$Eg = this._$EP())
        }
        C(t, e, i) {
            this._$AL.has(t) || this._$AL.set(t, e), !0 === i.reflect && this._$Em !== t && (null != (i = this._$Ej) ? i : this._$Ej = new Set).add(t)
        }
        async _$EP() {
            this.isUpdatePending = !0;
            try {
                await this._$Eg
            } catch (t) {
                Promise.reject(t)
            }
            var t = this.scheduleUpdate();
            return null != t && await t, !this.isUpdatePending
        }
        scheduleUpdate() {
            return this.performUpdate()
        }
        performUpdate() {
            var t;
            if (this.isUpdatePending) {
                if (!this.hasUpdated) {
                    if (this._$Ep) {
                        for (var [i, s] of this._$Ep) this[i] = s;
                        this._$Ep = void 0
                    }
                    var r = this.constructor.elementProperties;
                    if (0 < r.size)
                        for (var [o, l] of r) !0 !== l.wrapped || this._$AL.has(o) || void 0 === this[o] || this.C(o, this[o], l)
                }
                let e = !1;
                r = this._$AL;
                try {
                    e = this.shouldUpdate(r), e ? (this.willUpdate(r), null == (t = this._$ES) || t.forEach(t => {
                        var e;
                        return null == (e = t.hostUpdate) ? void 0 : e.call(t)
                    }), this.update(r)) : this._$ET()
                } catch (t) {
                    throw e = !1, this._$ET(), t
                }
                e && this._$AE(r)
            }
        }
        willUpdate(t) {}
        _$AE(t) {
            var e;
            null == (e = this._$ES) || e.forEach(t => {
                var e;
                return null == (e = t.hostUpdated) ? void 0 : e.call(t)
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
        }
        _$ET() {
            this._$AL = new Map, this.isUpdatePending = !1
        }
        get updateComplete() {
            return this.getUpdateComplete()
        }
        getUpdateComplete() {
            return this._$Eg
        }
        shouldUpdate(t) {
            return !0
        }
        update(t) {
            this._$Ej && (this._$Ej = this._$Ej.forEach(t => this._$EO(t, this[t]))), this._$ET()
        }
        updated(t) {}
        firstUpdated(t) {}
    }
    $.elementStyles = [], $.shadowRootOptions = {
        mode: "open"
    }, $.elementProperties = new Map, $.finalized = new Map, null == w || w({
        ReactiveElement: $
    }), (null != (ct = g.reactiveElementVersions) ? ct : g.reactiveElementVersions = []).push("2.0.1");
    const _ = Symbol();
    let A = class {
        get taskComplete() {
            return this.t || (1 === this.status ? this.t = new Promise((t, e) => {
                this.i = t, this.o = e
            }) : 3 === this.status ? this.t = Promise.reject(this.h) : this.t = Promise.resolve(this.l)), this.t
        }
        constructor(t, e, i) {
            this.u = 0, this.status = 0, (this.p = t).addController(this);
            var e = "object" == typeof e ? e : {
                task: e,
                args: i
            };
            this._ = e.task, this.v = e.args, this.j = null != (i = e.argsEqual) ? i : S, this.m = e.onComplete, this.g = e.onError, this.autoRun = null == (i = e.autoRun) || i, "initialValue" in e && (this.l = e.initialValue, this.status = 2, this.k = null == (e = this.A) ? void 0 : e.call(this))
        }
        hostUpdate() {
            !0 === this.autoRun && this.O()
        }
        hostUpdated() {
            "afterUpdate" === this.autoRun && this.O()
        }
        A() {
            if (void 0 !== this.v) {
                var t = this.v();
                if (!Array.isArray(t)) throw Error("The args function must return an array");
                return t
            }
        }
        async O() {
            var t = this.A(),
                e = this.k;
            (this.k = t) === e || void 0 === t || void 0 !== e && this.j(e, t) || await this.run(t)
        }
        async run(t) {
            var e, i;
            let s, r;
            null != t || (t = this.A()), this.k = t, 1 === this.status ? null == (o = this.T) || o.abort() : (this.t = void 0, this.i = void 0, this.o = void 0), this.status = 1, "afterUpdate" === this.autoRun ? queueMicrotask(() => this.p.requestUpdate()) : this.p.requestUpdate();
            var o = ++this.u;
            this.T = new AbortController;
            let l = !1;
            try {
                s = await this._(t, {
                    signal: this.T.signal
                })
            } catch (t) {
                l = !0, r = t
            }
            if (this.u === o) {
                if (s === _) this.status = 0;
                else {
                    if (!1 === l) {
                        try {
                            null == (e = this.m) || e.call(this, s)
                        } catch {}
                        this.status = 2, null == (e = this.i) || e.call(this, s)
                    } else {
                        try {
                            null == (i = this.g) || i.call(this, r)
                        } catch {}
                        this.status = 3, null == (i = this.o) || i.call(this, r)
                    }
                    this.l = s, this.h = r
                }
                this.p.requestUpdate()
            }
        }
        abort(t) {
            var e;
            1 === this.status && (null == (e = this.T) || e.abort(t))
        }
        get value() {
            return this.l
        }
        get error() {
            return this.h
        }
        render(t) {
            var e, i;
            switch (this.status) {
                case 0:
                    return null == (e = t.initial) ? void 0 : e.call(t);
                case 1:
                    return null == (e = t.pending) ? void 0 : e.call(t);
                case 2:
                    return null == (i = t.complete) ? void 0 : i.call(t, this.value);
                case 3:
                    return null == (i = t.error) ? void 0 : i.call(t, this.error);
                default:
                    throw Error("Unexpected status: " + this.status)
            }
        }
    };
    const S = (t, i) => t === i || t.length === i.length && t.every((t, e) => !y(t, i[e])),
        k = globalThis,
        E = k.trustedTypes,
        C = E ? E.createPolicy("lit-html", {
            createHTML: t => t
        }) : void 0,
        P = "$lit$",
        O = `lit$${(Math.random()+"").slice(9)}$`,
        T = "?" + O,
        U = `<${T}>`,
        M = document,
        R = () => M.createComment(""),
        L = t => null === t || "object" != typeof t && "function" != typeof t,
        N = Array.isArray,
        H = t => N(t) || "function" == typeof(null == t ? void 0 : t[Symbol.iterator]),
        z = `[ 	
\r]`,
        I = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        W = /-->/g,
        B = />/g,
        j = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\r"'\`<>=]|("|')|))|$)`, "g"),
        D = /'/g,
        q = /"/g,
        V = /^(?:script|style|textarea|title)$/i,
        G = (i = 1, (t, ...e) => ({
            _$litType$: i,
            strings: t,
            values: e
        })),
        X = Symbol.for("lit-noChange"),
        Z = Symbol.for("lit-nothing"),
        Q = new WeakMap,
        J = M.createTreeWalker(M, 129);

    function K(t, e) {
        if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return void 0 !== C ? C.createHTML(e) : e
    }
    const Y = (o, t) => {
        const e = o.length - 1,
            l = [];
        let n, a = 2 === t ? "<svg>" : "",
            h = I;
        for (let r = 0; r < e; r++) {
            const d = o[r];
            let t, e, i = -1,
                s = 0;
            for (; s < d.length && (h.lastIndex = s, e = h.exec(d), null !== e);) s = h.lastIndex, h === I ? "!--" === e[1] ? h = W : void 0 !== e[1] ? h = B : void 0 !== e[2] ? (V.test(e[2]) && (n = RegExp("</" + e[2], "g")), h = j) : void 0 !== e[3] && (h = j) : h === j ? ">" === e[0] ? (h = null != n ? n : I, i = -1) : void 0 === e[1] ? i = -2 : (i = h.lastIndex - e[2].length, t = e[1], h = void 0 === e[3] ? j : '"' === e[3] ? q : D) : h === q || h === D ? h = j : h === W || h === B ? h = I : (h = j, n = void 0);
            var c = h === j && o[r + 1].startsWith("/>") ? " " : "";
            a += h === I ? d + U : 0 <= i ? (l.push(t), d.slice(0, i) + P + d.slice(i) + O + c) : d + O + (-2 === i ? r : c)
        }
        return [K(o, a + (o[e] || "<?>") + (2 === t ? "</svg>" : "")), l]
    };
    class F {
        constructor({
            strings: t,
            _$litType$: e
        }, i) {
            let s;
            this.parts = [];
            let r = 0,
                o = 0;
            const l = t.length - 1,
                n = this.parts,
                [a, h] = Y(t, e);
            if (this.el = F.createElement(a, i), J.currentNode = this.el.content, 2 === e) {
                const v = this.el.content.firstChild;
                v.replaceWith(...v.childNodes)
            }
            for (; null !== (s = J.nextNode()) && n.length < l;) {
                if (1 === s.nodeType) {
                    if (s.hasAttributes())
                        for (const g of s.getAttributeNames()) {
                            var c, d;
                            g.endsWith(P) ? (d = h[o++], c = s.getAttribute(g).split(O), d = /([.?@])?(.*)/.exec(d), n.push({
                                type: 1,
                                index: r,
                                name: d[2],
                                strings: c,
                                ctor: "." === d[1] ? rt : "?" === d[1] ? ot : "@" === d[1] ? lt : st
                            }), s.removeAttribute(g)) : g.startsWith(O) && (n.push({
                                type: 6,
                                index: r
                            }), s.removeAttribute(g))
                        }
                    if (V.test(s.tagName)) {
                        var p = s.textContent.split(O),
                            u = p.length - 1;
                        if (0 < u) {
                            s.textContent = E ? E.emptyScript : "";
                            for (let t = 0; t < u; t++) s.append(p[t], R()), J.nextNode(), n.push({
                                type: 2,
                                index: ++r
                            });
                            s.append(p[u], R())
                        }
                    }
                } else if (8 === s.nodeType)
                    if (s.data === T) n.push({
                        type: 2,
                        index: r
                    });
                    else {
                        let t = -1;
                        for (; - 1 !== (t = s.data.indexOf(O, t + 1));) n.push({
                            type: 7,
                            index: r
                        }), t += O.length - 1
                    }
                r++
            }
        }
        static createElement(t, e) {
            const i = M.createElement("template");
            return i.innerHTML = t, i
        }
    }

    function tt(t, e, i = t, s) {
        var r;
        if (e === X) return e;
        let o = void 0 !== s ? null == (r = i._$Co) ? void 0 : r[s] : i._$Cl;
        const l = L(e) ? void 0 : e._$litDirective$;
        return (null == o ? void 0 : o.constructor) !== l && (null == (r = null == o ? void 0 : o._$AO) || r.call(o, !1), void 0 === l ? o = void 0 : (o = new l(t), o._$AT(t, i, s)), void 0 !== s ? (null != (r = i._$Co) ? r : i._$Co = [])[s] = o : i._$Cl = o), e = void 0 !== o ? tt(t, o._$AS(t, e.values), o, s) : e
    }
    class et {
        constructor(t, e) {
            this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
        }
        get parentNode() {
            return this._$AM.parentNode
        }
        get _$AU() {
            return this._$AM._$AU
        }
        u(e) {
            var t, {
                    el: {
                        content: i
                    },
                    parts: s
                } = this._$AD,
                i = (null != (t = null == e ? void 0 : e.creationScope) ? t : M).importNode(i, !0);
            J.currentNode = i;
            let r = J.nextNode(),
                o = 0,
                l = 0,
                n = s[0];
            for (; void 0 !== n;) {
                if (o === n.index) {
                    let t;
                    2 === n.type ? t = new it(r, r.nextSibling, this, e) : 1 === n.type ? t = new n.ctor(r, n.name, n.strings, this, e) : 6 === n.type && (t = new nt(r, this, e)), this._$AV.push(t), n = s[++l]
                }
                o !== (null == n ? void 0 : n.index) && (r = J.nextNode(), o++)
            }
            return J.currentNode = M, i
        }
        p(t) {
            let e = 0;
            for (const i of this._$AV) void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++
        }
    }
    class it {
        get _$AU() {
            var t;
            return null != (t = null == (t = this._$AM) ? void 0 : t._$AU) ? t : this._$Cv
        }
        constructor(t, e, i, s) {
            this.type = 2, this._$AH = Z, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = null == (s = null == s ? void 0 : s.isConnected) || s
        }
        get parentNode() {
            let t = this._$AA.parentNode;
            var e = this._$AM;
            return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
        }
        get startNode() {
            return this._$AA
        }
        get endNode() {
            return this._$AB
        }
        _$AI(t, e = this) {
            t = tt(this, t, e), L(t) ? t === Z || null == t || "" === t ? (this._$AH !== Z && this._$AR(), this._$AH = Z) : t !== this._$AH && t !== X && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : H(t) ? this.T(t) : this._(t)
        }
        k(t) {
            return this._$AA.parentNode.insertBefore(t, this._$AB)
        }
        $(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
        }
        _(t) {
            this._$AH !== Z && L(this._$AH) ? this._$AA.nextSibling.data = t : this.$(M.createTextNode(t)), this._$AH = t
        }
        g(t) {
            const {
                values: e,
                _$litType$: i
            } = t, s = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = F.createElement(K(i.h, i.h[0]), this.options)), i);
            if ((null == (t = this._$AH) ? void 0 : t._$AD) === s) this._$AH.p(e);
            else {
                const r = new et(s, this),
                    o = r.u(this.options);
                r.p(e), this.$(o), this._$AH = r
            }
        }
        _$AC(t) {
            let e = Q.get(t.strings);
            return void 0 === e && Q.set(t.strings, e = new F(t)), e
        }
        T(t) {
            N(this._$AH) || (this._$AH = [], this._$AR());
            const e = this._$AH;
            let i, s = 0;
            for (const r of t) s === e.length ? e.push(i = new it(this.k(R()), this.k(R()), this, this.options)) : i = e[s], i._$AI(r), s++;
            s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s)
        }
        _$AR(t = this._$AA.nextSibling, e) {
            var i;
            for (null == (i = this._$AP) || i.call(this, !1, !0, e); t && t !== this._$AB;) {
                var s = t.nextSibling;
                t.remove(), t = s
            }
        }
        setConnected(t) {
            var e;
            void 0 === this._$AM && (this._$Cv = t, null == (e = this._$AP) || e.call(this, t))
        }
    }
    class st {
        get tagName() {
            return this.element.tagName
        }
        get _$AU() {
            return this._$AM._$AU
        }
        constructor(t, e, i, s, r) {
            this.type = 1, this._$AH = Z, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, 2 < i.length || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = Z
        }
        _$AI(i, s = this, r, t) {
            var o = this.strings;
            let l = !1;
            if (void 0 === o) i = tt(this, i, s, 0), l = !L(i) || i !== this._$AH && i !== X, l && (this._$AH = i);
            else {
                var n = i;
                let t, e;
                for (i = o[0], t = 0; t < o.length - 1; t++) e = tt(this, n[r + t], s, t), e === X && (e = this._$AH[t]), l = l || (!L(e) || e !== this._$AH[t]), e === Z ? i = Z : i !== Z && (i += (null != e ? e : "") + o[t + 1]), this._$AH[t] = e
            }
            l && !t && this.O(i)
        }
        O(t) {
            t === Z ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
        }
    }
    class rt extends st {
        constructor() {
            super(...arguments), this.type = 3
        }
        O(t) {
            this.element[this.name] = t === Z ? void 0 : t
        }
    }
    class ot extends st {
        constructor() {
            super(...arguments), this.type = 4
        }
        O(t) {
            this.element.toggleAttribute(this.name, !!t && t !== Z)
        }
    }
    class lt extends st {
        constructor(t, e, i, s, r) {
            super(t, e, i, s, r), this.type = 5
        }
        _$AI(t, e = this) {
            var i, s;
            (t = null != (s = tt(this, t, e, 0)) ? s : Z) !== X && (i = this._$AH, e = t === Z && i !== Z || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, s = t !== Z && (i === Z || e), e && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, t), this._$AH = t)
        }
        handleEvent(t) {
            var e;
            "function" == typeof this._$AH ? this._$AH.call(null != (e = null == (e = this.options) ? void 0 : e.host) ? e : this.element, t) : this._$AH.handleEvent(t)
        }
    }
    class nt {
        constructor(t, e, i) {
            this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(t) {
            tt(this, t)
        }
    }
    const at = {
            j: P,
            P: O,
            A: T,
            C: 1,
            M: Y,
            L: et,
            R: H,
            V: tt,
            D: it,
            I: st,
            H: ot,
            N: lt,
            U: rt,
            B: nt
        },
        ht = k.litHtmlPolyfillSupport;
    null == ht || ht(F, it), (null != ($t = k.litHtmlVersions) ? $t : k.litHtmlVersions = []).push("3.0.2");
    var ct = class extends $ {
        constructor() {
            super(...arguments), this.renderOptions = {
                host: this
            }, this._$Do = void 0
        }
        createRenderRoot() {
            var t, e = super.createRenderRoot();
            return null != (t = this.renderOptions).renderBefore || (t.renderBefore = e.firstChild), e
        }
        update(t) {
            var e = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ((t, e, i) => {
                var s;
                const r = null != (s = null == i ? void 0 : i.renderBefore) ? s : e;
                let o = r._$litPart$;
                return void 0 === o && (s = null != (s = null == i ? void 0 : i.renderBefore) ? s : null, r._$litPart$ = o = new it(e.insertBefore(R(), s), s, void 0, null != i ? i : {})), o._$AI(t), o
            })(e, this.renderRoot, this.renderOptions)
        }
        connectedCallback() {
            var t;
            super.connectedCallback(), null == (t = this._$Do) || t.setConnected(!0)
        }
        disconnectedCallback() {
            var t;
            super.disconnectedCallback(), null == (t = this._$Do) || t.setConnected(!1)
        }
        render() {
            return X
        }
    };
    ct._$litElement$ = !0, ct.finalized = !0, null == ($t = globalThis.litElementHydrateSupport) || $t.call(globalThis, {
        LitElement: ct
    });
    const dt = globalThis.litElementPolyfillSupport;
    null == dt || dt({
        LitElement: ct
    }), (null != ($t = globalThis.litElementVersions) ? $t : globalThis.litElementVersions = []).push("4.0.1");
    const pt = {
        attribute: !0,
        type: String,
        converter: b,
        reflect: !1,
        hasChanged: y
    };

    function ut(i) {
        return (t, e) => ("object" == typeof e ? (i = pt, s, t) => {
            var {
                kind: e,
                metadata: r
            } = t;
            let o = globalThis.litPropertyMetadata.get(r);
            if (void 0 === o && globalThis.litPropertyMetadata.set(r, o = new Map), o.set(t.name, i), "accessor" === e) {
                const l = t["name"];
                return {
                    set(t) {
                        var e = s.get.call(this);
                        s.set.call(this, t), this.requestUpdate(l, e, i)
                    },
                    init(t) {
                        return void 0 !== t && this.C(l, void 0, i), t
                    }
                }
            }
            if ("setter" !== e) throw Error("Unsupported decorator location: " + e); {
                const n = t["name"];
                return function(t) {
                    var e = this[n];
                    s.call(this, t), this.requestUpdate(n, e, i)
                }
            }
        } : (t, e, i) => {
            var s = e.hasOwnProperty(i);
            return e.constructor.createProperty(i, s ? { ...t,
                wrapped: !0
            } : t), s ? Object.getOwnPropertyDescriptor(e, i) : void 0
        })(i, t, e)
    }
    const vt = at["D"],
        gt = () => document.createComment(""),
        xt = (e, i, s) => {
            const r = e._$AA.parentNode,
                o = void 0 === i ? e._$AB : i._$AA;
            if (void 0 === s) {
                var t = r.insertBefore(gt(), o),
                    l = r.insertBefore(gt(), o);
                s = new vt(t, l, e, e.options)
            } else {
                var n = s._$AB.nextSibling,
                    i = s._$AM,
                    t = i !== e;
                if (t) {
                    let t;
                    null == (l = s._$AQ) || l.call(s, e), s._$AM = e, void 0 !== s._$AP && (t = e._$AU) !== i._$AU && s._$AP(t)
                }
                if (n !== o || t) {
                    let t = s._$AA;
                    for (; t !== n;) {
                        var a = t.nextSibling;
                        r.insertBefore(t, o), t = a
                    }
                }
            }
            return s
        },
        ft = (t, e, i = t) => (t._$AI(e, i), t),
        wt = {},
        bt = t => {
            var e;
            null == (e = t._$AP) || e.call(t, !1, !0);
            let i = t._$AA;
            for (var s = t._$AB.nextSibling; i !== s;) {
                var r = i.nextSibling;
                i.remove(), i = r
            }
        },
        yt = {
            ATTRIBUTE: 1,
            CHILD: 2,
            PROPERTY: 3,
            BOOLEAN_ATTRIBUTE: 4,
            EVENT: 5,
            ELEMENT: 6
        },
        mt = e => (...t) => ({
            _$litDirective$: e,
            values: t
        });
    var $t = class {
        constructor(t) {}
        get _$AU() {
            return this._$AM._$AU
        }
        _$AT(t, e, i) {
            this._$Ct = t, this._$AM = e, this._$Ci = i
        }
        _$AS(t, e) {
            return this.update(t, e)
        }
        update(t, e) {
            return this.render(...e)
        }
    };
    const _t = (t, e) => {
            var i, t = t._$AN;
            if (void 0 === t) return !1;
            for (const s of t) null == (i = s._$AO) || i.call(s, e, !1), _t(s, e);
            return !0
        },
        At = t => {
            let e, i;
            for (; void 0 !== (e = t._$AM) && (i = e._$AN, i.delete(t), t = e, 0 === (null == i ? void 0 : i.size)););
        },
        St = i => {
            for (let e; e = i._$AM; i = e) {
                let t = e._$AN;
                if (void 0 === t) e._$AN = t = new Set;
                else if (t.has(i)) break;
                t.add(i), s = e, 0, s.type == yt.CHILD && (null != s._$AP || (s._$AP = Et), null != s._$AQ || (s._$AQ = kt))
            }
            var s
        };

    function kt(t) {
        void 0 !== this._$AN ? (At(this), this._$AM = t, St(this)) : this._$AM = t
    }

    function Et(t, e = !1, i = 0) {
        var s = this._$AH,
            r = this._$AN;
        if (void 0 !== r && 0 !== r.size)
            if (e)
                if (Array.isArray(s))
                    for (let t = i; t < s.length; t++) _t(s[t], !1), At(s[t]);
                else null != s && (_t(s, !1), At(s));
        else _t(this, t)
    }
    class Ct extends $t {
        constructor() {
            super(...arguments), this._$AN = void 0
        }
        _$AT(t, e, i) {
            super._$AT(t, e, i), St(this), this.isConnected = t._$AU
        }
        _$AO(t, e = !0) {
            var i;
            t !== this.isConnected && ((this.isConnected = t) ? null == (i = this.reconnected) || i.call(this) : null == (i = this.disconnected) || i.call(this)), e && (_t(this, t), At(this))
        }
        setValue(t) {
            if (void 0 === this._$Ct.strings) this._$Ct._$AI(t, this);
            else {
                const e = [...this._$Ct._$AH];
                e[this._$Ci] = t, this._$Ct._$AI(e, this, 0)
            }
        }
        disconnected() {}
        reconnected() {}
    }
    const Pt = () => new Ot;
    class Ot {}
    const Tt = new WeakMap,
        Ut = mt(class extends Ct {
            render(t) {
                return Z
            }
            update(t, [e]) {
                var i = e !== this.G;
                return i && void 0 !== this.G && this.ot(void 0), !i && this.rt === this.lt || (this.G = e, this.ct = null == (e = t.options) ? void 0 : e.host, this.ot(this.lt = t.element)), Z
            }
            ot(e) {
                if ("function" == typeof this.G) {
                    var i = null != (i = this.ct) ? i : globalThis;
                    let t = Tt.get(i);
                    void 0 === t && (t = new WeakMap, Tt.set(i, t)), void 0 !== t.get(this.G) && this.G.call(this.ct, void 0), t.set(this.G, e), void 0 !== e && this.G.call(this.ct, e)
                } else this.G.value = e
            }
            get rt() {
                var t;
                return "function" == typeof this.G ? null == (t = Tt.get(null != (t = this.ct) ? t : globalThis)) ? void 0 : t.get(this.G) : null == (t = this.G) ? void 0 : t.value
            }
            disconnected() {
                this.rt === this.lt && this.ot(void 0)
            }
            reconnected() {
                this.ot(this.lt)
            }
        }),
        Mt = (e, i, s) => {
            const r = new Map;
            for (let t = i; t <= s; t++) r.set(e[t], t);
            return r
        },
        Rt = mt(class extends $t {
            constructor(t) {
                if (super(t), t.type !== yt.CHILD) throw Error("repeat() can only be used in text expressions")
            }
            ht(t, e, i) {
                let s;
                void 0 === i ? i = e : void 0 !== e && (s = e);
                const r = [],
                    o = [];
                let l = 0;
                for (const n of t) r[l] = s ? s(n, l) : l, o[l] = i(n, l), l++;
                return {
                    values: o,
                    keys: r
                }
            }
            render(t, e, i) {
                return this.ht(t, e, i).values
            }
            update(t, [e, i, s]) {
                var r, o, l;
                const n = t._$AH,
                    {
                        values: a,
                        keys: h
                    } = this.ht(e, i, s);
                if (!Array.isArray(n)) return this.dt = h, a;
                const c = null != (i = this.dt) ? i : this.dt = [],
                    d = [];
                let p, u, v = 0,
                    g = n.length - 1,
                    x = 0,
                    f = a.length - 1;
                for (; v <= g && x <= f;) null === n[v] ? v++ : null === n[g] ? g-- : c[v] === h[x] ? (d[x] = ft(n[v], a[x]), v++, x++) : c[g] === h[f] ? (d[f] = ft(n[g], a[f]), g--, f--) : c[v] === h[f] ? (d[f] = ft(n[v], a[f]), xt(t, d[f + 1], n[v]), v++, f--) : c[g] === h[x] ? (d[x] = ft(n[g], a[x]), xt(t, n[v], n[g]), g--, x++) : (void 0 === p && (p = Mt(h, x, f), u = Mt(c, v, g)), p.has(c[v]) ? p.has(c[g]) ? (null === (o = void 0 !== (r = u.get(h[x])) ? n[r] : null) ? (l = xt(t, n[v]), ft(l, a[x]), d[x] = l) : (d[x] = ft(o, a[x]), xt(t, n[v], o), n[r] = null), x++) : (bt(n[g]), g--) : (bt(n[v]), v++));
                for (; x <= f;) {
                    var w = xt(t, d[f + 1]);
                    ft(w, a[x]), d[x++] = w
                }
                for (; v <= g;) {
                    var b = n[v++];
                    null !== b && bt(b)
                }
                return this.dt = h, [s, i = wt] = [t, d], s._$AH = i, X
            }
        }),
        Lt = "important",
        Nt = (Lt, mt(class extends $t {
            constructor(t) {
                if (super(t), t.type !== yt.ATTRIBUTE || "style" !== t.name || 2 < (null == (t = t.strings) ? void 0 : t.length)) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")
            }
            render(s) {
                return Object.keys(s).reduce((t, e) => {
                    var i = s[e];
                    return null == i ? t : t + `${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`
                }, "")
            }
            update(t, [e]) {
                const i = t.element["style"];
                if (void 0 === this.ut) return this.ut = new Set(Object.keys(e)), this.render(e);
                for (const r of this.ut) null == e[r] && (this.ut.delete(r), r.includes("-") ? i.removeProperty(r) : i[r] = null);
                for (const o in e) {
                    const l = e[o];
                    var s;
                    null != l && (this.ut.add(o), s = "string" == typeof l && l.endsWith(" !important"), o.includes("-") || s ? i.setProperty(o, s ? l.slice(0, -11) : l, s ? Lt : "") : i[o] = l)
                }
                return X
            }
        }));
    class Ht extends $t {
        constructor(t) {
            if (super(t), this.et = Z, t.type !== yt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
        }
        render(t) {
            if (t === Z || null == t) return this.vt = void 0, this.et = t;
            if (t === X) return t;
            if ("string" != typeof t) throw Error(this.constructor.directiveName + "() called with a non-string value");
            if (t === this.et) return this.vt;
            const e = [this.et = t];
            return e.raw = e, this.vt = {
                _$litType$: this.constructor.resultType,
                strings: e,
                values: []
            }
        }
    }
    Ht.directiveName = "unsafeHTML", Ht.resultType = 1;
    class zt extends Ht {}
    zt.directiveName = "unsafeSVG", zt.resultType = 2;
    const It = mt(zt),
        Wt = It(`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="M11.05 12 16 7.05l-1.414-1.414L8.222 12l6.364 6.364L16 16.95 11.05 12Z"/>
</svg>
`),
        Bt = It(`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
  <path d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414 4.95-4.95Z"/>
</svg>
`);
    var jt, Dt, qt, Vt, Gt, Xt, Zt, Qt, Jt, Kt, Yt, Ft, te, ee, ie, se, re, oe, le, ne = Object.defineProperty,
        ae = Object.getOwnPropertyDescriptor,
        $t = (t, e, i, s) => {
            for (var r, o = 1 < s ? void 0 : s ? ae(e, i) : e, l = t.length - 1; 0 <= l; l--)(r = t[l]) && (o = (s ? r(e, i, o) : r(o)) || o);
            return s && o && ne(e, i, o), o
        },
        he = (t, e, i) => {
            if (!e.has(t)) throw TypeError("Cannot " + i)
        },
        ce = (t, e, i) => (he(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
        de = (t, e, i) => {
            if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
            e instanceof WeakSet ? e.add(t) : e.set(t, i)
        },
        pe = (t, e, i) => (he(t, e, "access private method"), i);
    class ue extends ct {
        constructor() {
            super(...arguments), de(this, Xt), de(this, Qt), de(this, Kt), de(this, Ft), de(this, ee), de(this, se), de(this, oe), this.hideArrowsMobile = "false", this.showBorder = "false", this.showRating = "true", this.fontSize = "14px", this.showImage = "true", this.colorScheme = "default", this.shadow = "none", this.reviewsLimit = 10, this.alignment = "left", this.productId = "", de(this, jt, new URL(`/widget/${window.LOOX.clientId}/snippets/reviews`, window.LOOX.root)), de(this, Dt, new A(this, ([t, e], {
                signal: i
            }) => fetch(t.href, {
                headers: window.LOOX.root.includes("ngrok") ? {
                    "ngrok-skip-browser-warning": "69420"
                } : {},
                signal: i
            }).then(t => {
                if (!t.ok) throw t.status;
                return t.json()
            }).then(({
                reviews: t
            }) => t = this.getAttribute("data-preview") && 0 === t.length ? Array(e).fill({
                id: "",
                rating: 5,
                name: "Example Review",
                text: "This is a preview of how a review will appear in the widget.",
                image: "https://images.loox.io/uploads/assets/widgets/snippets-widget-placeholder-image.webp"
            }) : t).catch(t => {
                throw t
            }), () => [this.reviewsUrl, this.reviewsLimit])), de(this, qt, Pt()), de(this, Vt, Pt()), de(this, Gt, Pt())
        }
        get reviewsUrl() {
            return ce(this, jt).searchParams.set("productId", this.productId), ce(this, jt).searchParams.set("limit", this.reviewsLimit.toString()), ce(this, jt).searchParams.set("h", window.LOOX.hash), this.getAttribute("data-preview") && ce(this, jt).searchParams.set("shopify_editor_preview", "true"), ce(this, jt)
        }
        get reviews() {
            return ce(this, Dt).value
        }
        get isRtl() {
            return "rtl" === this.dir || window.LOOX.isRTLDirection()
        }
        connectedCallback() {
            super.connectedCallback(), pe(this, Xt, Zt).call(this)
        }
        render() {
            const e = {
                "--lxs-u-widget-shadow-color": pe(this, ee, ie).call(this, this.shadowColor),
                "--loox-snippets-u-max-width": this.maxWidth || void 0,
                "--loox-snippets-u-border-radius": this.borderRadius || void 0,
                "--loox-snippets-u-color-background": pe(this, ee, ie).call(this, this.backgroundColor),
                "--loox-snippets-u-border-color": pe(this, ee, ie).call(this, this.borderColor),
                "--loox-snippets-u-color-on-background": pe(this, ee, ie).call(this, this.textColor),
                "--loox-snippets-u-color-name": pe(this, ee, ie).call(this, this.nameColor),
                "--loox-snippets-u-rating-icon-color": pe(this, ee, ie).call(this, this.ratingIconColor),
                "--loox-snippets-u-font-size": this.fontSize || void 0,
                "--loox-snippets-u-show-border": "true" === this.showBorder ? "solid" : "unset",
                "--loox-snippets-u-show-rating": "true" === this.showRating ? "inline-flex" : "none",
                "--loox-snippets-u-shadow": this.shadow && `var(--lxs-widget-shadow-${this.shadow})`,
                "--loox-snippets-u-show-image": "true" === this.showImage ? "flex" : "none",
                "--loox-snippets-u-arrows-mobile-visibility": "true" === this.hideArrowsMobile ? "hidden" : "visible"
            };
            return ce(this, Dt).render({
                pending: () => this.reviewCount ? G `
							<div
								class="container loading"
								dir=${this.isRtl?"rtl":"ltr"}
								style=${Nt(e)}
								data-scheme=${this.colorScheme}
								data-alignment=${this.alignment}
							>
								<div class="wrapper">
									<div
										class="grid"
										dir=${this.isRtl?"rtl":"ltr"}
										${Ut(ce(this,qt))}
										@scroll=${pe(this,Ft,te)}
									>
										<button class="quickview-button">
											<div class="element">
												<div class="image"></div>

												<div dir=${this.isRtl?"rtl":"ltr"} class="content">
													<span class="title">
														<strong class="name skeleton"></strong>
														<span class="rating">
															${Rt(Array(5),()=>window.LOOX.createRatingIconSvg("full"))}
														</span>
													</span>

													<span dir=${this.isRtl?"rtl":"ltr"} class="text">
														<div class="line-height">
															<div class="skeleton"></div>
														</div>
														<div class="line-height">
															<div class="skeleton"></div>
														</div>
													</span>
												</div>
											</div>
										</button>
									</div>
								</div>
							</div>
					  ` : Z,
                complete: t => t.length ? G `
							<div
								class="container"
								dir=${this.isRtl?"rtl":"ltr"}
								style=${Nt(e)}
								data-scheme=${this.colorScheme}
								data-alignment=${this.alignment}
							>
								<div class="wrapper">
									<div
										class="grid"
										dir=${this.isRtl?"rtl":"ltr"}
										${Ut(ce(this,qt))}
										@scroll=${pe(this,Ft,te)}
									>
										${Rt(t,(t,e)=>pe(this,se,re).call(this,{review:t,index:e}))}
									</div>
								</div>

								${1<t.length?pe(this,oe,le).call(this):Z}
							</div>
					  ` : Z,
                error: t => {
                    throw new Error("[LOOX] Failed to fetch reviews", {
                        cause: t
                    })
                }
            })
        }
    }
    jt = new WeakMap, Dt = new WeakMap, qt = new WeakMap, Vt = new WeakMap, Gt = new WeakMap, Xt = new WeakSet, Zt = function() {
        var t, e = document.querySelector("#loox-rating-icon-svg-store").cloneNode(!0);
        null == (t = this.shadowRoot) || t.appendChild(e)
    }, Qt = new WeakSet, Jt = function(t) {
        const e = t.target,
            i = ce(this, qt).value;
        i && (t = i.clientWidth, e.classList.contains("left") ? i.scrollLeft -= t : i.scrollLeft += t)
    }, Kt = new WeakSet, Yt = function(t) {
        if (!this.getAttribute("data-preview") && t.target instanceof HTMLElement) {
            if (!t.target.id) throw new Error(`[LOOX] Missing review id - '${t.target.id}'`);
            window.LOOX.openQV(t.target.id)
        }
    }, Ft = new WeakSet, te = function() {
        const t = ce(this, qt).value,
            e = ce(this, Vt).value,
            i = ce(this, Gt).value;
        if (!t || !e || !i) return console.error("Missing refs", t, e, i);
        var s = t.scrollWidth - t.clientWidth,
            r = "rtl" === t.dir ? t.scrollLeft + s : t.scrollLeft;
        r < 60 ? (e.style.opacity = "0", e.style.setProperty("--loox-snippets-left-arrow-visibility", "hidden")) : (e.style.opacity = "1", e.style.setProperty("--loox-snippets-left-arrow-visibility", "visible")), s - 60 < r ? (i.style.opacity = "0", i.style.setProperty("--loox-snippets-right-arrow-visibility", "hidden")) : (i.style.opacity = "1", i.style.setProperty("--loox-snippets-right-arrow-visibility", "visible"))
    }, ee = new WeakSet, ie = function(t) {
        if (t && "rgba(0,0,0,0)" !== t) return t
    }, se = new WeakSet, re = function({
        review: i,
        index: t
    }) {
        return G `
			<button id=${i.id} class="quickview-button" @click=${pe(this,Kt,Yt)}>
				<div class="element">
					${i.image&&G`<img
						alt=""
						class="image"
						loading=${t<=1?"eager":"lazy"}
						src=${i.image}
					/>`}

					<div dir="auto" class="content">
						<span class="title">
							<strong class="name">${i.name}</strong>
							<span class="rating">
								${Rt(Array(5),(t,e)=>i.rating>e?window.LOOX.createRatingIconSvg("full"):window.LOOX.createRatingIconSvg("empty"))}
							</span>
						</span>

						<span dir="auto" class="text"> ${i.text} </span>
					</div>
				</div>
			</button>
		`
    }, oe = new WeakSet, le = function() {
        return G `
			<button
				aria-label="Scroll left"
				part="arrow arrow-left"
				class="arrow left lxs-icon"
				@click=${pe(this,Qt,Jt)}
				${Ut(ce(this,Vt))}
			>
				${Wt}
			</button>
			<button
				aria-label="Scroll right"
				part="arrow arrow-right"
				class="arrow right lxs-icon"
				@click=${pe(this,Qt,Jt)}
				${Ut(ce(this,Gt))}
			>
				${Bt}
			</button>
		`
    }, ue.styles = [n(`:root,:host{--lxs-font-size-3xl: var(--lxs-u-font-size-3xl, 42px);--lxs-line-height-3xl: var(--lxs-u-line-height-3xl, 1.25);--lxs-font-size-2xl: var(--lxs-u-font-size-2xl, 28px);--lxs-line-height-2xl: var(--lxs-u-line-height-2xl, 1.25);--lxs-font-size-xl: var(--lxs-u-font-size-xl, 20px);--lxs-line-height-xl: var(--lxs-u-line-height-xl, 1.4);--lxs-font-size-l: var(--lxs-u-font-size-l, 18px);--lxs-line-height-l: var(--lxs-u-line-height-l, 1.4);--lxs-font-size-base: var(--lxs-u-font-size-base, 16px);--lxs-line-height-base: var(--lxs-u-line-height-base, 1.5);--lxs-font-size-s: var(--lxs-u-font-size-s, 14px);--lxs-line-height-s: var(--lxs-u-line-height-s, 1.5);--lxs-font-size-xs: var(--lxs-u-font-size-xs, 12px);--lxs-line-height-xs: var(--lxs-u-line-height-xs, 1.5);--lxs-font-weight-regular: var(--lxs-u-font-weight-regular, normal);--lxs-font-weight-bold: var(--lxs-u-font-weight-bold, bold);--lxs-shadow-level-1: var(--lxs-u-shadow-level-1, 0px 3px 14px -2px rgba(0, 0, 0, .12));--lxs-shadow-level-2: var(--lxs-u-shadow-level-2, 0px 3px 15px -4px rgba(0, 0, 0, .22));--lxs-shadow-level-3: var(--lxs-u-shadow-level-3, 0px 0px 35px -10px rgba(0, 0, 0, .25));--lxs-shadow-bottom: var(--lxs-u-shadow-bottom, 0px -4px 11px rgba(0, 0, 0, .04), 0px -3px 6px rgba(0, 0, 0, .03), 0px -1px 3px rgba(0, 0, 0, .03), 0px -.5px 1px rgba(0, 0, 0, .01), 0px -.1px .5px rgba(0, 0, 0, .005));--lxs-shadow-floating: var(--lxs-u-shadow-floating, 0px -2px 12px rgba(0, 0, 0, .08));--lxs-color-primary: var(--lxs-u-color-primary, #00639c);--lxs-color-primary-hover: var(--lxs-u-color-primary-hover, #00639c);--lxs-color-on-primary: var(--lxs-u-color-on-primary, #ffffff);--lxs-color-primary-container: var(--lxs-u-color-primary-container, #cee5ff);--lxs-color-on-primary-container: var(--lxs-u-color-on-primary-container, #001d33);--lxs-color-secondary: var(--lxs-u-color-secondary, #53606e);--lxs-color-on-secondary: var(--lxs-u-color-on-secondary, #ffffff);--lxs-color-secondary-container: var(--lxs-u-color-secondary-container, #d6e4f5);--lxs-color-on-secondary-container: var(--lxs-u-color-on-secondary-container, #0f1d29);--lxs-color-tertiary: var(--lxs-u-color-tertiary, #685878);--lxs-color-on-tertiary: var(--lxs-u-color-on-tertiary, #ffffff);--lxs-color-tertiary-container: var(--lxs-u-color-tertiary-container, #efdbff);--lxs-color-on-tertiary-container: var(--lxs-u-color-on-tertiary-container, #221631);--lxs-color-error: var(--lxs-u-color-error, #bb171b);--lxs-color-on-error: var(--lxs-u-color-on-error, #fff4f4);--lxs-color-error-container: var(--lxs-u-color-error-container, #ffe9e9);--lxs-color-on-error-container: var(--lxs-u-color-on-error-container, #7e0000);--lxs-color-background: var(--lxs-u-color-background, #fcfcff);--lxs-color-on-background: var(--lxs-u-color-on-background, #1a1c1e);--lxs-color-surface: var(--lxs-u-color-surface, #fcfcff);--lxs-color-on-surface: var(--lxs-u-color-on-surface, #1a1c1e);--lxs-color-surface-variant: var(--lxs-u-color-surface-variant, #dfe3ea);--lxs-color-on-surface-variant: var(--lxs-u-color-on-surface-variant, #42474d);--lxs-color-outline: var(--lxs-u-color-outline, #73777e);--lxs-color-outline-variant: var(--lxs-u-color-outline-variant, #c2c7ce);--lxs-color-shadow: var(--lxs-u-color-shadow, #000000);--lxs-color-scrim: var(--lxs-u-color-scrim, #000000);--lxs-color-inverse-surface: var(--lxs-u-color-inverse-surface, #2f3033);--lxs-color-inverse-on-surface: var(--lxs-u-color-inverse-on-surface, #f1f0f3);--lxs-color-inverse-primary: var(--lxs-u-color-inverse-primary, #97cbff);--lxs-color-star-color: var(--lxs-u-color-star-color, #ff8d00);--lxs-border-radius: var(--lxs-u-border-radius, 16px);--lxs-spacing: 4px;--lxs-control-padding: 12px;--lxs-control-icon-size: 1.5em}.lxs-icon{font-size:var(--lxs-icon-size, 1em);display:inline-flex;line-height:0}.lxs-icon:before,.lxs-icon:after{display:none}.lxs-icon svg{display:block;width:1em;height:1em}.quickview-button{border:none;background:none;padding:0;font:inherit;color:inherit;cursor:pointer}.quickview-button *{pointer-events:none}.quickview-button[id=""]{cursor:default}.container{--lxs-widget-shadow-basic: var(--lxs-u-widget-shadow-basic, 0px 0px 8px 0px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .25)));--lxs-widget-shadow-offset-dark: var(--lxs-u-widget-shadow-offset-dark, 0px 6px 14px 0px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .21)));--lxs-widget-shadow-offset-light: var(--lxs-u-widget-shadow-offset-light, 0px 6px 14px -4px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .3)));--lxs-widget-shadow-spread: var(--lxs-u-widget-shadow-spread, 0px 8px 40px 0px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .1)), 0px 2px 7px 0px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .06)));--lxs-widget-shadow-cartoon: var(--lxs-u-widget-shadow-cartoon, 8px 8px 0px 0px var(--lxs-u-widget-shadow-color, rgba(0, 0, 0, .3)));display:var(--loox-snippets-container-display, grid);position:relative;overflow:visible;color:var(--loox-snippets-color-on-background);max-width:var(--loox-snippets-u-max-width, var(--loox-snippets-max-width, auto));margin:var(--loox-snippets-margin, unset);--loox-snippets-color-background: var( --loox-snippets-u-color-background, var(--lxs-color-background) );--loox-snippets-color-on-background: var( --loox-snippets-u-color-on-background, var(--lxs-color-on-background) )}.container[data-scheme=inverted]{--loox-snippets-color-background: var( --loox-snippets-u-color-background, var(--lxs-color-inverse-surface) );--loox-snippets-color-on-background: var( --loox-snippets-u-color-on-background, var(--lxs-color-inverse-on-surface) )}.container[data-scheme=alternative]{--loox-snippets-color-background: var( --loox-snippets-u-color-background, var(--lxs-color-primary-container) );--loox-snippets-color-on-background: var( --loox-snippets-u-color-on-background, var(--lxs-color-on-primary-container) )}.container[data-alignment=left]{--loox-snippets-margin: 0 auto 0 0}.container[data-alignment=right]{--loox-snippets-margin: 0 0 0 auto}.container[data-alignment=center]{--loox-snippets-margin: 0 auto}.wrapper{--loox-snippets-border-radius: var(--loox-snippets-u-border-radius, var(--lxs-border-radius));--loox-snippets-border-color: var( --loox-snippets-u-border-color, var(--lxs-color-outline-variant) );--loox-snippets-show-border: var(--loox-snippets-u-show-border, unset);border-radius:var(--loox-snippets-border-radius);border-color:var(--loox-snippets-border-color);border-width:1px;border-style:var(--loox-snippets-show-border);display:flex;overflow:hidden;background-color:var(--loox-snippets-color-background);box-shadow:var(--loox-snippets-u-shadow, unset)}.grid{flex:1;scroll-behavior:smooth;overflow-x:scroll;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;overflow:scroll;display:grid;grid-auto-flow:column;gap:12px;grid-auto-columns:100%;-ms-overflow-style:none;scrollbar-width:none}.grid::-webkit-scrollbar{display:none}.element{font-size:var(--loox-snippets-u-font-size, var(--lxs-font-size-s));line-height:var(--lxs-line-height-s);font-weight:var(--lxs-font-weight-regular);scroll-snap-align:start;display:flex;align-items:center;justify-content:stretch;padding:12px;gap:12px}.image{--loox-snippets-border-radius: var(--loox-snippets-u-border-radius, var(--lxs-border-radius));--loox-snippets-border-color: var( --loox-snippets-u-border-color, var(--lxs-color-outline-variant) );--loox-snippets-show-border: var(--loox-snippets-u-show-border, unset);border-radius:calc(var(--loox-snippets-border-radius) * .7);display:var(--loox-snippets-u-show-image, flex);aspect-ratio:1;width:60px;background-color:#dadde078;object-fit:cover}.content{min-height:60px;flex:1;display:flex;flex-direction:column;gap:2px;justify-content:center;overflow:hidden}.arrow{border:none;background:none;font:inherit;color:inherit;transition:visibility .3s ease-in-out,opacity .3s ease-in-out;overflow:hidden;font-size:16px;color:currentColor;cursor:pointer;line-height:0;height:min-content;padding:4px;background-color:var(--loox-snippets-color-background);border-radius:16px;position:absolute;inset-block-start:50%;transform:translateY(-50%);box-shadow:var(--lxs-shadow-floating)}.arrow *{pointer-events:none}.arrow:before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background-color:currentColor;opacity:var(--lxs-interaction-opacity, 0)}.arrow:hover{--lxs-interaction-opacity: 8%}.arrow:active{--lxs-interaction-opacity: 12%}@media screen and (max-width: 480px){.arrow{--loox-snippets-arrows-mobile-visibility: var( --loox-snippets-u-arrows-mobile-visibility, visible )}}.arrow.right{right:-12px;visibility:var(--loox-snippets-arrows-mobile-visibility, var(--loox-snippets-right-arrow-visibility, visible))}[dir=rtl] .arrow.right{opacity:0;--loox-snippets-right-arrow-visibility: hidden}.arrow.left{left:-12px;visibility:var(--loox-snippets-arrows-mobile-visibility, var(--loox-snippets-left-arrow-visibility, visible))}[dir=ltr] .arrow.left{opacity:0;--loox-snippets-left-arrow-visibility: hidden}.name{text-align:start;font-weight:var(--lxs-font-weight-bold);color:var(--loox-snippets-u-color-name, var(--loox-snippets-color-on-background))}.text{display:-webkit-inline-box;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-align:start}@supports not (-webkit-line-clamp: 2){.text{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}}.rating{display:var(--loox-snippets-u-show-rating, inline-flex);align-items:center;gap:2px}.title{display:inline-flex;align-items:center;gap:4px}.rating svg{font-size:inherit;height:.9em;width:.9em;color:var(--loox-snippets-u-rating-icon-color, var(--lxs-rating-icon-color))}.loading .rating svg{opacity:.15;--loox-snippets-u-rating-icon-color: currentColor}.skeleton{opacity:.1;width:100%;display:inline-flex;height:1em;background:linear-gradient(89.64deg,currentColor 0%,rgba(218,221,224,.262745098),currentColor 40%,rgba(218,221,224,.262745098),currentColor 40%);background-blend-mode:multiply;border-radius:4px;background-size:200% 100%;animation:2s linear infinite shimmer}.skeleton.name{width:4em}.line-height{display:flex;align-items:flex-end;height:1.7em}@keyframes shimmer{0%{background-position:100%}to{background-position:-100%}}
`)], $t([ut({
        type: String,
        attribute: "border-radius"
    })], ue.prototype, "borderRadius", 2), $t([ut({
        type: String,
        attribute: "background-color"
    })], ue.prototype, "backgroundColor", 2), $t([ut({
        type: String,
        attribute: "border-color"
    })], ue.prototype, "borderColor", 2), $t([ut({
        type: String,
        attribute: "text-color"
    })], ue.prototype, "textColor", 2), $t([ut({
        type: String,
        attribute: "name-color"
    })], ue.prototype, "nameColor", 2), $t([ut({
        type: String,
        attribute: "rating-icon-color"
    })], ue.prototype, "ratingIconColor", 2), $t([ut({
        type: String,
        attribute: "shadow-color"
    })], ue.prototype, "shadowColor", 2), $t([ut({
        type: String,
        attribute: "hide-arrows-mobile"
    })], ue.prototype, "hideArrowsMobile", 2), $t([ut({
        type: String,
        attribute: "show-border"
    })], ue.prototype, "showBorder", 2), $t([ut({
        type: String,
        attribute: "show-rating"
    })], ue.prototype, "showRating", 2), $t([ut({
        type: String,
        attribute: "font-size"
    })], ue.prototype, "fontSize", 2), $t([ut({
        type: String,
        attribute: "show-image"
    })], ue.prototype, "showImage", 2), $t([ut({
        type: String,
        attribute: "color-scheme"
    })], ue.prototype, "colorScheme", 2), $t([ut({
        type: String
    })], ue.prototype, "shadow", 2), $t([ut({
        type: Number,
        attribute: "reviews-limit"
    })], ue.prototype, "reviewsLimit", 2), $t([ut({
        type: String
    })], ue.prototype, "alignment", 2), $t([ut({
        type: String,
        attribute: "max-width"
    })], ue.prototype, "maxWidth", 2), $t([ut({
        type: String,
        attribute: "product-id"
    })], ue.prototype, "productId", 2), $t([ut({
        type: Number,
        attribute: "review-count"
    })], ue.prototype, "reviewCount", 2), window.customElements.get("loox-snippets-widget") || window.customElements.define("loox-snippets-widget", ue), t.LxSnippetsWidget = ue, Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    })
}(this.LOOX = this.LOOX || {});
! function() {
    function e(e, t) {
        if (!LOOX.videoSliderScriptLoaded) {
            const i = document.querySelector("loox-video-slider-widget");
            if (i) {
                t && t.disconnect(), LOOX.videoSliderScriptLoaded = !0;
                var o = i.getAttribute("product-id"),
                    t = null !== i.getAttribute("show-by-tag"),
                    t = o ? "product" : t ? "tag" : "agg";
                const r = document.createElement("script");
                r.type = "text/javascript", r.async = !0;
                const c = new URL(`widget/${LOOX.clientId}/video-slider/${t}${"product"==t?"/"+o:""}.${LOOX.hash}.js`, LOOX.root);
                LOOX.multilingual && c.searchParams.set("locale", LOOX.shopifyLocale), i.getAttribute("data-preview") && c.searchParams.set("shopify_editor_preview", "true"), r.src = c.toString();
                const d = document.getElementsByTagName("script")[0];
                d.parentNode.insertBefore(r, d)
            }
        }
    }
    const t = new MutationObserver(e);
    LOOX.domReady(() => {
        t.observe(document, {
            subtree: !0,
            childList: !0
        }), e(0, t)
    })
}();
! function() {
    var e;
    const s = globalThis,
        i = s.ShadowRoot && (void 0 === s.ShadyCSS || s.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        o = Symbol(),
        n = new WeakMap;
    let r = class {
        constructor(t, e, r) {
            if (this._$cssResult$ = !0, r !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = t, this.t = e
        }
        get styleSheet() {
            let t = this.o;
            var e, r = this.t;
            return i && void 0 === t && ((e = void 0 !== r && 1 === r.length) && (t = n.get(r)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(r, t))), t
        }
        toString() {
            return this.cssText
        }
    };
    const l = t => new r("string" == typeof t ? t : t + "", void 0, o),
        a = i ? t => t : r => r instanceof CSSStyleSheet ? (() => {
            let t = "";
            for (const e of r.cssRules) t += e.cssText;
            return l(t)
        })() : r,
        {
            is: c,
            defineProperty: d,
            getOwnPropertyDescriptor: u,
            getOwnPropertyNames: h,
            getOwnPropertySymbols: x,
            getPrototypeOf: p
        } = Object,
        t = globalThis,
        v = t.trustedTypes,
        f = v ? v.emptyScript : "",
        b = t.reactiveElementPolyfillSupport,
        g = {
            toAttribute(t, e) {
                switch (e) {
                    case Boolean:
                        t = t ? f : null;
                        break;
                    case Object:
                    case Array:
                        t = null == t ? t : JSON.stringify(t)
                }
                return t
            },
            fromAttribute(t, e) {
                let r = t;
                switch (e) {
                    case Boolean:
                        r = null !== t;
                        break;
                    case Number:
                        r = null === t ? null : Number(t);
                        break;
                    case Object:
                    case Array:
                        try {
                            r = JSON.parse(t)
                        } catch (t) {
                            r = null
                        }
                }
                return r
            }
        },
        m = (t, e) => !c(t, e),
        y = {
            attribute: !0,
            type: String,
            converter: g,
            reflect: !1,
            hasChanged: m
        };
    null != Symbol.metadata || (Symbol.metadata = Symbol("metadata")), null != t.litPropertyMetadata || (t.litPropertyMetadata = new WeakMap);
    class $ extends HTMLElement {
        static addInitializer(t) {
            var e;
            this._$Ei(), (null != (e = this.l) ? e : this.l = []).push(t)
        }
        static get observedAttributes() {
            return this.finalize(), this._$Eh && [...this._$Eh.keys()]
        }
        static createProperty(t, e = y) {
            var r;
            e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), e.noAccessor || (r = Symbol(), void 0 !== (e = this.getPropertyDescriptor(t, r, e)) && d(this.prototype, t, e))
        }
        static getPropertyDescriptor(r, e, o) {
            var t;
            const {
                get: s,
                set: i
            } = null != (t = u(this.prototype, r)) ? t : {
                get() {
                    return this[e]
                },
                set(t) {
                    this[e] = t
                }
            };
            return {
                get() {
                    return null == s ? void 0 : s.call(this)
                },
                set(t) {
                    var e = null == s ? void 0 : s.call(this);
                    i.call(this, t), this.requestUpdate(r, e, o)
                },
                configurable: !0,
                enumerable: !0
            }
        }
        static getPropertyOptions(t) {
            return null != (t = this.elementProperties.get(t)) ? t : y
        }
        static _$Ei() {
            if (!this.hasOwnProperty("elementProperties")) {
                const t = p(this);
                t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties)
            }
        }
        static finalize() {
            if (!this.hasOwnProperty("finalized")) {
                if (this.finalized = !0, this._$Ei(), this.hasOwnProperty("properties")) {
                    const o = this.properties,
                        s = [...h(o), ...x(o)];
                    for (const i of s) this.createProperty(i, o[i])
                }
                const o = this[Symbol.metadata];
                if (null !== o) {
                    var t = litPropertyMetadata.get(o);
                    if (void 0 !== t)
                        for (const [o, n] of t) this.elementProperties.set(o, n)
                }
                this._$Eh = new Map;
                for (var [e, r] of this.elementProperties) {
                    const o = this._$Eu(e, r);
                    void 0 !== o && this._$Eh.set(o, e)
                }
                this.elementStyles = this.finalizeStyles(this.styles)
            }
        }
        static finalizeStyles(t) {
            const e = [];
            if (Array.isArray(t)) {
                var r = new Set(t.flat(1 / 0).reverse());
                for (const t of r) e.unshift(a(t))
            } else void 0 !== t && e.push(a(t));
            return e
        }
        static _$Eu(t, e) {
            e = e.attribute;
            return !1 === e ? void 0 : "string" == typeof e ? e : "string" == typeof t ? t.toLowerCase() : void 0
        }
        constructor() {
            super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
        }
        _$Ev() {
            var t;
            this._$Eg = new Promise(t => this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), null == (t = this.constructor.l) || t.forEach(t => t(this))
        }
        addController(t) {
            var e;
            (null != (e = this._$ES) ? e : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null == (e = t.hostConnected) || e.call(t))
        }
        removeController(t) {
            var e;
            null == (e = this._$ES) || e.splice(this._$ES.indexOf(t) >>> 0, 1)
        }
        _$E_() {
            const t = new Map,
                e = this.constructor.elementProperties;
            for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
            0 < t.size && (this._$Ep = t)
        }
        createRenderRoot() {
            var t = null != (t = this.shadowRoot) ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return ((t, e) => {
                if (i) t.adoptedStyleSheets = e.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);
                else
                    for (const r of e) {
                        const e = document.createElement("style"),
                            o = s.litNonce;
                        void 0 !== o && e.setAttribute("nonce", o), e.textContent = r.cssText, t.appendChild(e)
                    }
            })(t, this.constructor.elementStyles), t
        }
        connectedCallback() {
            var t;
            null != this.renderRoot || (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null == (t = this._$ES) || t.forEach(t => {
                var e;
                return null == (e = t.hostConnected) ? void 0 : e.call(t)
            })
        }
        enableUpdating(t) {}
        disconnectedCallback() {
            var t;
            null == (t = this._$ES) || t.forEach(t => {
                var e;
                return null == (e = t.hostDisconnected) ? void 0 : e.call(t)
            })
        }
        attributeChangedCallback(t, e, r) {
            this._$AK(t, r)
        }
        _$EO(t, e) {
            var r;
            const o = this.constructor.elementProperties.get(t),
                s = this.constructor._$Eu(t, o);
            void 0 !== s && !0 === o.reflect && (e = (void 0 !== (null == (r = o.converter) ? void 0 : r.toAttribute) ? o.converter : g).toAttribute(e, o.type), this._$Em = t, null == e ? this.removeAttribute(s) : this.setAttribute(s, e), this._$Em = null)
        }
        _$AK(t, e) {
            const r = this.constructor,
                o = r._$Eh.get(t);
            if (void 0 !== o && this._$Em !== o) {
                const s = r.getPropertyOptions(o),
                    i = "function" == typeof s.converter ? {
                        fromAttribute: s.converter
                    } : void 0 !== (null == (t = s.converter) ? void 0 : t.fromAttribute) ? s.converter : g;
                this._$Em = o, this[o] = i.fromAttribute(e, s.type), this._$Em = null
            }
        }
        requestUpdate(t, e, r, o = !1, s) {
            var i;
            if (void 0 !== t) {
                if (!(null != (i = (r = null == r ? this.constructor.getPropertyOptions(t) : r).hasChanged) ? i : m)(o ? s : this[t], e)) return;
                this.C(t, e, r)
            }!1 === this.isUpdatePending && (this._$Eg = this._$EP())
        }
        C(t, e, r) {
            this._$AL.has(t) || this._$AL.set(t, e), !0 === r.reflect && this._$Em !== t && (null != (r = this._$Ej) ? r : this._$Ej = new Set).add(t)
        }
        async _$EP() {
            this.isUpdatePending = !0;
            try {
                await this._$Eg
            } catch (t) {
                Promise.reject(t)
            }
            var t = this.scheduleUpdate();
            return null != t && await t, !this.isUpdatePending
        }
        scheduleUpdate() {
            return this.performUpdate()
        }
        performUpdate() {
            var r;
            if (this.isUpdatePending) {
                if (!this.hasUpdated) {
                    if (this._$Ep) {
                        for (const [r, t] of this._$Ep) this[r] = t;
                        this._$Ep = void 0
                    }
                    const r = this.constructor.elementProperties;
                    if (0 < r.size)
                        for (const [t, o] of r) !0 !== o.wrapped || this._$AL.has(t) || void 0 === this[t] || this.C(t, this[t], o)
                }
                let e = !1;
                const o = this._$AL;
                try {
                    e = this.shouldUpdate(o), e ? (this.willUpdate(o), null == (r = this._$ES) || r.forEach(t => {
                        var e;
                        return null == (e = t.hostUpdate) ? void 0 : e.call(t)
                    }), this.update(o)) : this._$ET()
                } catch (t) {
                    throw e = !1, this._$ET(), t
                }
                e && this._$AE(o)
            }
        }
        willUpdate(t) {}
        _$AE(t) {
            var e;
            null == (e = this._$ES) || e.forEach(t => {
                var e;
                return null == (e = t.hostUpdated) ? void 0 : e.call(t)
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t)
        }
        _$ET() {
            this._$AL = new Map, this.isUpdatePending = !1
        }
        get updateComplete() {
            return this.getUpdateComplete()
        }
        getUpdateComplete() {
            return this._$Eg
        }
        shouldUpdate(t) {
            return !0
        }
        update(t) {
            this._$Ej && (this._$Ej = this._$Ej.forEach(t => this._$EO(t, this[t]))), this._$ET()
        }
        updated(t) {}
        firstUpdated(t) {}
    }
    $.elementStyles = [], $.shadowRootOptions = {
        mode: "open"
    }, $.elementProperties = new Map, $.finalized = new Map, null == b || b({
        ReactiveElement: $
    }), (null != (bt = t.reactiveElementVersions) ? bt : t.reactiveElementVersions = []).push("2.0.1");
    const _ = globalThis,
        A = _.trustedTypes,
        w = A ? A.createPolicy("lit-html", {
            createHTML: t => t
        }) : void 0,
        E = "$lit$",
        S = `lit$${(Math.random()+"").slice(9)}$`,
        k = "?" + S,
        C = `<${k}>`,
        P = document,
        z = () => P.createComment(""),
        O = t => null === t || "object" != typeof t && "function" != typeof t,
        T = Array.isArray,
        U = "[ \t\n\f\r]",
        N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        H = /-->/g,
        M = />/g,
        L = RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\r"'\`<>=]|("|')|))|$)`, "g"),
        R = /'/g,
        j = /"/g,
        I = /^(?:script|style|textarea|title)$/i,
        D = (t, ...e) => ({
            _$litType$: 1,
            strings: t,
            values: e
        }),
        B = Symbol.for("lit-noChange"),
        W = Symbol.for("lit-nothing"),
        V = new WeakMap,
        q = P.createTreeWalker(P, 129);

    function X(t, e) {
        if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
        return void 0 !== w ? w.createHTML(e) : e
    }
    class J {
        constructor({
            strings: e,
            _$litType$: r
        }, t) {
            let o;
            this.parts = [];
            let s = 0,
                i = 0;
            const n = e.length - 1,
                l = this.parts,
                [a, c] = ((i, n) => {
                    const t = i.length - 1,
                        l = [];
                    let a, c = 2 === n ? "<svg>" : "",
                        d = N;
                    for (let s = 0; s < t; s++) {
                        const n = i[s];
                        let t, e, r = -1,
                            o = 0;
                        for (; o < n.length && (d.lastIndex = o, e = d.exec(n), null !== e);) o = d.lastIndex, d === N ? "!--" === e[1] ? d = H : void 0 !== e[1] ? d = M : void 0 !== e[2] ? (I.test(e[2]) && (a = RegExp("</" + e[2], "g")), d = L) : void 0 !== e[3] && (d = L) : d === L ? ">" === e[0] ? (d = null != a ? a : N, r = -1) : void 0 === e[1] ? r = -2 : (r = d.lastIndex - e[2].length, t = e[1], d = void 0 === e[3] ? L : '"' === e[3] ? j : R) : d === j || d === R ? d = L : d === H || d === M ? d = N : (d = L, a = void 0);
                        var u = d === L && i[s + 1].startsWith("/>") ? " " : "";
                        c += d === N ? n + C : 0 <= r ? (l.push(t), n.slice(0, r) + E + n.slice(r) + S + u) : n + S + (-2 === r ? s : u)
                    }
                    return [X(i, c + (i[t] || "<?>") + (2 === n ? "</svg>" : "")), l]
                })(e, r);
            if (this.el = J.createElement(a, t), q.currentNode = this.el.content, 2 === r) {
                const e = this.el.content.firstChild;
                e.replaceWith(...e.childNodes)
            }
            for (; null !== (o = q.nextNode()) && l.length < n;) {
                if (1 === o.nodeType) {
                    if (o.hasAttributes())
                        for (const e of o.getAttributeNames())
                            if (e.endsWith(E)) {
                                const r = c[i++],
                                    t = o.getAttribute(e).split(S),
                                    n = /([.?@])?(.*)/.exec(r);
                                l.push({
                                    type: 1,
                                    index: s,
                                    name: n[2],
                                    strings: t,
                                    ctor: "." === n[1] ? G : "?" === n[1] ? Q : "@" === n[1] ? tt : Y
                                }), o.removeAttribute(e)
                            } else e.startsWith(S) && (l.push({
                                type: 6,
                                index: s
                            }), o.removeAttribute(e));
                    if (I.test(o.tagName)) {
                        const e = o.textContent.split(S),
                            r = e.length - 1;
                        if (0 < r) {
                            o.textContent = A ? A.emptyScript : "";
                            for (let t = 0; t < r; t++) o.append(e[t], z()), q.nextNode(), l.push({
                                type: 2,
                                index: ++s
                            });
                            o.append(e[r], z())
                        }
                    }
                } else if (8 === o.nodeType)
                    if (o.data === k) l.push({
                        type: 2,
                        index: s
                    });
                    else {
                        let t = -1;
                        for (; - 1 !== (t = o.data.indexOf(S, t + 1));) l.push({
                            type: 7,
                            index: s
                        }), t += S.length - 1
                    }
                s++
            }
        }
        static createElement(t, e) {
            const r = P.createElement("template");
            return r.innerHTML = t, r
        }
    }

    function Z(t, e, r = t, o) {
        var s;
        if (e === B) return e;
        let i = void 0 !== o ? null == (s = r._$Co) ? void 0 : s[o] : r._$Cl;
        const n = O(e) ? void 0 : e._$litDirective$;
        return (null == i ? void 0 : i.constructor) !== n && (null == (s = null == i ? void 0 : i._$AO) || s.call(i, !1), void 0 === n ? i = void 0 : (i = new n(t), i._$AT(t, r, o)), void 0 !== o ? (null != (s = r._$Co) ? s : r._$Co = [])[o] = i : r._$Cl = i), e = void 0 !== i ? Z(t, i._$AS(t, e.values), i, o) : e
    }
    class F {
        constructor(t, e) {
            this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e
        }
        get parentNode() {
            return this._$AM.parentNode
        }
        get _$AU() {
            return this._$AM._$AU
        }
        u(e) {
            var t, {
                    el: {
                        content: r
                    },
                    parts: o
                } = this._$AD,
                r = (null != (t = null == e ? void 0 : e.creationScope) ? t : P).importNode(r, !0);
            q.currentNode = r;
            let s = q.nextNode(),
                i = 0,
                n = 0,
                l = o[0];
            for (; void 0 !== l;) {
                if (i === l.index) {
                    let t;
                    2 === l.type ? t = new K(s, s.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(s, l.name, l.strings, this, e) : 6 === l.type && (t = new et(s, this, e)), this._$AV.push(t), l = o[++n]
                }
                i !== (null == l ? void 0 : l.index) && (s = q.nextNode(), i++)
            }
            return q.currentNode = P, r
        }
        p(t) {
            let e = 0;
            for (const r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++
        }
    }
    class K {
        get _$AU() {
            var t;
            return null != (t = null == (t = this._$AM) ? void 0 : t._$AU) ? t : this._$Cv
        }
        constructor(t, e, r, o) {
            this.type = 2, this._$AH = W, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cv = null == (o = null == o ? void 0 : o.isConnected) || o
        }
        get parentNode() {
            let t = this._$AA.parentNode;
            var e = this._$AM;
            return void 0 !== e && 11 === (null == t ? void 0 : t.nodeType) && (t = e.parentNode), t
        }
        get startNode() {
            return this._$AA
        }
        get endNode() {
            return this._$AB
        }
        _$AI(t, e = this) {
            t = Z(this, t, e), O(t) ? t === W || null == t || "" === t ? (this._$AH !== W && this._$AR(), this._$AH = W) : t !== this._$AH && t !== B && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : (e = t, T(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]) ? this.T(t) : this._(t))
        }
        k(t) {
            return this._$AA.parentNode.insertBefore(t, this._$AB)
        }
        $(t) {
            this._$AH !== t && (this._$AR(), this._$AH = this.k(t))
        }
        _(t) {
            this._$AH !== W && O(this._$AH) ? this._$AA.nextSibling.data = t : this.$(P.createTextNode(t)), this._$AH = t
        }
        g(t) {
            const {
                values: e,
                _$litType$: r
            } = t, o = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = J.createElement(X(r.h, r.h[0]), this.options)), r);
            if ((null == (t = this._$AH) ? void 0 : t._$AD) === o) this._$AH.p(e);
            else {
                const s = new F(o, this),
                    t = s.u(this.options);
                s.p(e), this.$(t), this._$AH = s
            }
        }
        _$AC(t) {
            let e = V.get(t.strings);
            return void 0 === e && V.set(t.strings, e = new J(t)), e
        }
        T(t) {
            T(this._$AH) || (this._$AH = [], this._$AR());
            const e = this._$AH;
            let r, o = 0;
            for (const s of t) o === e.length ? e.push(r = new K(this.k(z()), this.k(z()), this, this.options)) : r = e[o], r._$AI(s), o++;
            o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o)
        }
        _$AR(t = this._$AA.nextSibling, e) {
            var r;
            for (null == (r = this._$AP) || r.call(this, !1, !0, e); t && t !== this._$AB;) {
                const e = t.nextSibling;
                t.remove(), t = e
            }
        }
        setConnected(t) {
            var e;
            void 0 === this._$AM && (this._$Cv = t, null == (e = this._$AP) || e.call(this, t))
        }
    }
    class Y {
        get tagName() {
            return this.element.tagName
        }
        get _$AU() {
            return this._$AM._$AU
        }
        constructor(t, e, r, o, s) {
            this.type = 1, this._$AH = W, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = s, 2 < r.length || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = W
        }
        _$AI(r, o = this, s, i) {
            var n = this.strings;
            let l = !1;
            if (void 0 === n) r = Z(this, r, o, 0), l = !O(r) || r !== this._$AH && r !== B, l && (this._$AH = r);
            else {
                const i = r;
                let t, e;
                for (r = n[0], t = 0; t < n.length - 1; t++) e = Z(this, i[s + t], o, t), e === B && (e = this._$AH[t]), l = l || (!O(e) || e !== this._$AH[t]), e === W ? r = W : r !== W && (r += (null != e ? e : "") + n[t + 1]), this._$AH[t] = e
            }
            l && !i && this.O(r)
        }
        O(t) {
            t === W ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "")
        }
    }
    class G extends Y {
        constructor() {
            super(...arguments), this.type = 3
        }
        O(t) {
            this.element[this.name] = t === W ? void 0 : t
        }
    }
    class Q extends Y {
        constructor() {
            super(...arguments), this.type = 4
        }
        O(t) {
            this.element.toggleAttribute(this.name, !!t && t !== W)
        }
    }
    class tt extends Y {
        constructor(t, e, r, o, s) {
            super(t, e, r, o, s), this.type = 5
        }
        _$AI(t, e = this) {
            var r, o;
            (t = null != (o = Z(this, t, e, 0)) ? o : W) !== B && (r = this._$AH, e = t === W && r !== W || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, o = t !== W && (r === W || e), e && this.element.removeEventListener(this.name, this, r), o && this.element.addEventListener(this.name, this, t), this._$AH = t)
        }
        handleEvent(t) {
            var e;
            "function" == typeof this._$AH ? this._$AH.call(null != (e = null == (e = this.options) ? void 0 : e.host) ? e : this.element, t) : this._$AH.handleEvent(t)
        }
    }
    class et {
        constructor(t, e, r) {
            this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r
        }
        get _$AU() {
            return this._$AM._$AU
        }
        _$AI(t) {
            Z(this, t)
        }
    }
    const rt = _.litHtmlPolyfillSupport;
    null == rt || rt(J, K), (null != (bt = _.litHtmlVersions) ? bt : _.litHtmlVersions = []).push("3.0.2");
    class ot extends $ {
        constructor() {
            super(...arguments), this.renderOptions = {
                host: this
            }, this._$Do = void 0
        }
        createRenderRoot() {
            var t, e = super.createRenderRoot();
            return null != (t = this.renderOptions).renderBefore || (t.renderBefore = e.firstChild), e
        }
        update(t) {
            var e = this.render();
            this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ((t, e, r) => {
                var o;
                const s = null != (o = null == r ? void 0 : r.renderBefore) ? o : e;
                let i = s._$litPart$;
                if (void 0 === i) {
                    const t = null != (o = null == r ? void 0 : r.renderBefore) ? o : null;
                    s._$litPart$ = i = new K(e.insertBefore(z(), t), t, void 0, null != r ? r : {})
                }
                return i._$AI(t), i
            })(e, this.renderRoot, this.renderOptions)
        }
        connectedCallback() {
            var t;
            super.connectedCallback(), null == (t = this._$Do) || t.setConnected(!0)
        }
        disconnectedCallback() {
            var t;
            super.disconnectedCallback(), null == (t = this._$Do) || t.setConnected(!1)
        }
        render() {
            return B
        }
    }
    ot._$litElement$ = !0, ot.finalized = !0, null == (bt = globalThis.litElementHydrateSupport) || bt.call(globalThis, {
        LitElement: ot
    });
    const st = globalThis.litElementPolyfillSupport;
    null == st || st({
        LitElement: ot
    }), (null != (bt = globalThis.litElementVersions) ? bt : globalThis.litElementVersions = []).push("4.0.1");
    const it = {
        attribute: !0,
        type: String,
        converter: g,
        reflect: !1,
        hasChanged: m
    };

    function nt(r) {
        return (t, e) => ("object" == typeof e ? (r = it, o, t) => {
            const {
                kind: s,
                metadata: e
            } = t;
            let i = globalThis.litPropertyMetadata.get(e);
            if (void 0 === i && globalThis.litPropertyMetadata.set(e, i = new Map), i.set(t.name, r), "accessor" === s) {
                const s = t["name"];
                return {
                    set(t) {
                        var e = o.get.call(this);
                        o.set.call(this, t), this.requestUpdate(s, e, r)
                    },
                    init(t) {
                        return void 0 !== t && this.C(s, void 0, r), t
                    }
                }
            }
            if ("setter" !== s) throw Error("Unsupported decorator location: " + s); {
                const s = t["name"];
                return function(t) {
                    var e = this[s];
                    o.call(this, t), this.requestUpdate(s, e, r)
                }
            }
        } : (t, e, r) => {
            var o = e.hasOwnProperty(r);
            return e.constructor.createProperty(r, o ? { ...t,
                wrapped: !0
            } : t), o ? Object.getOwnPropertyDescriptor(e, r) : void 0
        })(r, t, e)
    }
    class lt extends class {
        constructor(t) {}
        get _$AU() {
            return this._$AM._$AU
        }
        _$AT(t, e, r) {
            this._$Ct = t, this._$AM = e, this._$Ci = r
        }
        _$AS(t, e) {
            return this.update(t, e)
        }
        update(t, e) {
            return this.render(...e)
        }
    } {
        constructor(t) {
            if (super(t), this.et = W, 2 !== t.type) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
        }
        render(t) {
            if (t === W || null == t) return this.vt = void 0, this.et = t;
            if (t === B) return t;
            if ("string" != typeof t) throw Error(this.constructor.directiveName + "() called with a non-string value");
            if (t === this.et) return this.vt;
            const e = [this.et = t];
            return e.raw = e, this.vt = {
                _$litType$: this.constructor.resultType,
                strings: e,
                values: []
            }
        }
    }
    lt.directiveName = "unsafeHTML", lt.resultType = 1;
    class at extends lt {}
    at.directiveName = "unsafeSVG", at.resultType = 2;
    const ct = (e = at, (...t) => ({
            _$litDirective$: e,
            values: t
        })),
        dt = ct('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">\n  <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95Z"/>\n</svg>\n');
    var ut, ht, xt, pt, vt = Object.defineProperty,
        ft = Object.getOwnPropertyDescriptor,
        bt = (t, e, r, o) => {
            for (var s, i = 1 < o ? void 0 : o ? ft(e, r) : e, n = t.length - 1; 0 <= n; n--)(s = t[n]) && (i = (o ? s(e, r, i) : s(i)) || i);
            return o && i && vt(e, r, i), i
        },
        gt = (t, e, r) => {
            if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
            e instanceof WeakSet ? e.add(t) : e.set(t, r)
        },
        mt = (t, e, r) => ((() => {
            if (!e.has(t)) throw TypeError("Cannot access private method")
        })(), r);
    class yt extends ot {
        constructor() {
            super(...arguments), gt(this, ut), gt(this, xt)
        }
        get isRtl() {
            var t, e;
            return "rtl" === this.dir || (null == (e = (t = window.LOOX).isRTLDirection) ? void 0 : e.call(t))
        }
        render() {
            return D `
			${this.renderStrip()}
			<img
				src="${this.pixelURL}"
				style="display:none;border:0;overflow:hidden;height:1px;width:1px;"
			/>
		`
        }
        renderStrip() {
            return D `
			<div
				class="container slim lxs-toast lxs-has-action"
				role="status"
				aria-live="polite"
				dir=${this.isRtl?"rtl":"ltr"}
				data-testid="discount-reminder-strip-container"
			>
				<p class="content" data-testid="discount-reminder-strip-text">${this.content}</p>

				<button
					@click=${this.dismiss}
					class="lxs-button lxs-is-icon-only lxs-is-compact"
					data-lxs-variant="text"
					data-testid="discount-reminder-strip-dismiss"
				>
					<span class="lxs-icon">${dt}</span>
				</button>
			</div>
		`
        }
        show() {
            requestAnimationFrame(() => {
                mt(this, ut, ht).call(this)
            })
        }
        dismiss() {
            try {
                var t = new Event("dismissed");
                this.dispatchEvent(t)
            } catch (t) {}
            requestAnimationFrame(() => {
                mt(this, xt, pt).call(this)
            }), this.addEventListener("transitionend", () => {
                this.remove()
            }, {
                once: !0
            })
        }
    }
    ut = new WeakSet, ht = function() {
        this.classList.add("shown")
    }, xt = new WeakSet, pt = function() {
        this.classList.remove("shown")
    }, yt.styles = [l(':root,:host{--lxs-font-size-3xl: var(--lxs-u-font-size-3xl, 42px);--lxs-line-height-3xl: var(--lxs-u-line-height-3xl, 1.25);--lxs-font-size-2xl: var(--lxs-u-font-size-2xl, 28px);--lxs-line-height-2xl: var(--lxs-u-line-height-2xl, 1.25);--lxs-font-size-xl: var(--lxs-u-font-size-xl, 20px);--lxs-line-height-xl: var(--lxs-u-line-height-xl, 1.4);--lxs-font-size-l: var(--lxs-u-font-size-l, 18px);--lxs-line-height-l: var(--lxs-u-line-height-l, 1.4);--lxs-font-size-base: var(--lxs-u-font-size-base, 16px);--lxs-line-height-base: var(--lxs-u-line-height-base, 1.5);--lxs-font-size-s: var(--lxs-u-font-size-s, 14px);--lxs-line-height-s: var(--lxs-u-line-height-s, 1.5);--lxs-font-size-xs: var(--lxs-u-font-size-xs, 12px);--lxs-line-height-xs: var(--lxs-u-line-height-xs, 1.5);--lxs-font-weight-regular: var(--lxs-u-font-weight-regular, normal);--lxs-font-weight-bold: var(--lxs-u-font-weight-bold, bold);--lxs-shadow-level-1: var(--lxs-u-shadow-level-1, 0px 3px 14px -2px rgba(0, 0, 0, .12));--lxs-shadow-level-2: var(--lxs-u-shadow-level-2, 0px 3px 15px -4px rgba(0, 0, 0, .22));--lxs-shadow-level-3: var(--lxs-u-shadow-level-3, 0px 0px 35px -10px rgba(0, 0, 0, .25));--lxs-shadow-bottom: var(--lxs-u-shadow-bottom, 0px -4px 11px rgba(0, 0, 0, .04), 0px -3px 6px rgba(0, 0, 0, .03), 0px -1px 3px rgba(0, 0, 0, .03), 0px -.5px 1px rgba(0, 0, 0, .01), 0px -.1px .5px rgba(0, 0, 0, .005));--lxs-shadow-floating: var(--lxs-u-shadow-floating, 0px -2px 12px rgba(0, 0, 0, .08));--lxs-color-primary: var(--lxs-u-color-primary, #00639c);--lxs-color-primary-hover: var(--lxs-u-color-primary-hover, #00639c);--lxs-color-on-primary: var(--lxs-u-color-on-primary, #ffffff);--lxs-color-primary-container: var(--lxs-u-color-primary-container, #cee5ff);--lxs-color-on-primary-container: var(--lxs-u-color-on-primary-container, #001d33);--lxs-color-secondary: var(--lxs-u-color-secondary, #53606e);--lxs-color-on-secondary: var(--lxs-u-color-on-secondary, #ffffff);--lxs-color-secondary-container: var(--lxs-u-color-secondary-container, #d6e4f5);--lxs-color-on-secondary-container: var(--lxs-u-color-on-secondary-container, #0f1d29);--lxs-color-tertiary: var(--lxs-u-color-tertiary, #685878);--lxs-color-on-tertiary: var(--lxs-u-color-on-tertiary, #ffffff);--lxs-color-tertiary-container: var(--lxs-u-color-tertiary-container, #efdbff);--lxs-color-on-tertiary-container: var(--lxs-u-color-on-tertiary-container, #221631);--lxs-color-error: var(--lxs-u-color-error, #bb171b);--lxs-color-on-error: var(--lxs-u-color-on-error, #fff4f4);--lxs-color-error-container: var(--lxs-u-color-error-container, #ffe9e9);--lxs-color-on-error-container: var(--lxs-u-color-on-error-container, #7e0000);--lxs-color-background: var(--lxs-u-color-background, #fcfcff);--lxs-color-on-background: var(--lxs-u-color-on-background, #1a1c1e);--lxs-color-surface: var(--lxs-u-color-surface, #fcfcff);--lxs-color-on-surface: var(--lxs-u-color-on-surface, #1a1c1e);--lxs-color-surface-variant: var(--lxs-u-color-surface-variant, #dfe3ea);--lxs-color-on-surface-variant: var(--lxs-u-color-on-surface-variant, #42474d);--lxs-color-outline: var(--lxs-u-color-outline, #73777e);--lxs-color-outline-variant: var(--lxs-u-color-outline-variant, #c2c7ce);--lxs-color-shadow: var(--lxs-u-color-shadow, #000000);--lxs-color-scrim: var(--lxs-u-color-scrim, #000000);--lxs-color-inverse-surface: var(--lxs-u-color-inverse-surface, #2f3033);--lxs-color-inverse-on-surface: var(--lxs-u-color-inverse-on-surface, #f1f0f3);--lxs-color-inverse-primary: var(--lxs-u-color-inverse-primary, #97cbff);--lxs-color-star-color: var(--lxs-u-color-star-color, #ff8d00);--lxs-border-radius: var(--lxs-u-border-radius, 16px);--lxs-spacing: 4px;--lxs-control-padding: 12px;--lxs-control-icon-size: 1.5em}.lxs-icon{font-size:var(--lxs-icon-size, 1em);display:inline-flex;line-height:0}.lxs-icon:before,.lxs-icon:after{display:none}.lxs-icon svg{display:block;width:1em;height:1em}.lxs-button{--lxs-icon-size: var(--lxs-button-icon-size, 1.5em);font-weight:var(--lxs-button-font-weight, var(--lxs-font-weight-bold));font-size:var(--lxs-button-font-size, var(--lxs-font-size-base));line-height:var(--lxs-button-line-height, var(--lxs-line-height-base));color:var(--lxs-button-color, var(--lxs-button-base-color));background-color:var(--lxs-button-background-color, var(--lxs-button-base-background-color));border-radius:var(--lxs-button-border-radius, var(--lxs-border-radius));display:inline-flex;box-shadow:inset 0 0 0 2px var(--lxs-button-border-color, transparent);padding:var(--lxs-button-padding, 12px 16px);text-decoration:var(--lxs-button-text-decoration, none);text-underline-offset:2px;transition:color .2s ease-in-out;position:relative;cursor:pointer;overflow:hidden;box-sizing:border-box;align-items:center;justify-content:center;text-align:center;gap:var(--lxs-button-spacing, calc(var(--lxs-spacing) * 2));border:0;font-family:inherit;outline-color:transparent;margin:0;user-select:none;white-space:nowrap;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal}.lxs-button:after{bottom:0;left:0;position:absolute;right:0;top:0;content:"";opacity:0;z-index:0;border-radius:var(--lxs-button-border-radius, var(--lxs-border-radius));transition:opacity .2s ease-in-out}.lxs-button[data-lxs-variant=primary]{--lxs-button-base-background-color: var( --lxs-button-primary-background-color, var(--lxs-color-primary) );--lxs-button-base-color: var(--lxs-button-primary-color, var(--lxs-color-on-primary))}.lxs-button[data-lxs-variant=primary]:after{background-color:var(--lxs-button-primary-hover-background-color, var(--lxs-color-on-primary))}.lxs-button[data-lxs-variant=secondary]{--lxs-button-base-background-color: var( --lxs-button-secondary-background-color, var(--lxs-color-primary-container) );--lxs-button-base-color: var( --lxs-button-secondary-color, var(--lxs-color-on-primary-container) )}.lxs-button[data-lxs-variant=secondary]:after{background-color:var(--lxs-color-on-primary-container)}.lxs-button[data-lxs-variant=outline]{--lxs-button-base-background-color: transparent;--lxs-button-base-color: var(--lxs-button-outline-color, var(--lxs-color-primary));--lxs-button-border-color: var(--lxs-button-outline-border-color, var(--lxs-color-primary))}.lxs-button[data-lxs-variant=outline]:after{background-color:var(--lxs-color-primary)}.lxs-button[data-lxs-variant=inverted]{--lxs-button-base-background-color: var( --lxs-button-inverted-background-color, var(--lxs-color-background) );--lxs-button-base-color: var(--lxs-button-inverted-color, var(--lxs-color-on-background))}.lxs-button[data-lxs-variant=inverted]:after{background-color:var(--lxs-color-on-background)}.lxs-button[data-lxs-variant=text]{--lxs-button-base-background-color: transparent;--lxs-button-base-color: var(--lxs-button-text-color, var(--lxs-color-on-background))}.lxs-button[data-lxs-variant=text]:after{background-color:var(--lxs-button-text-hover-background-color, var(--lxs-color-on-background))}.lxs-button[data-lxs-variant=error]{--lxs-button-base-background-color: var( --lxs-button-error-background-color, var(--lxs-color-error) );--lxs-button-base-color: var(--lxs-button-error-color, var(--lxs-color-on-error))}.lxs-button[data-lxs-variant=error]:after{background-color:var(--lxs-color-on-error)}@media (pointer: fine){.lxs-button:not([aria-disabled=true]):hover:after,.lxs-button:not(:disabled):hover:after{opacity:.08}.lxs-button:not([aria-disabled=true]):focus-visible,.lxs-button:not(:disabled):focus-visible{outline-color:initial}.lxs-button:not([aria-disabled=true]):focus:after,.lxs-button:not([aria-disabled=true]):active:after,.lxs-button:not(:disabled):focus:after,.lxs-button:not(:disabled):active:after{opacity:.12}}.lxs-button[aria-disabled=true],.lxs-button:disabled{--lxs-button-primary-background-color: var( --lxs-button-disabled-background-color, var(--lxs-color-outline-variant) );--lxs-button-secondary-background-color: var( --lxs-button-disabled-background-color, var(--lxs-color-outline-variant) );--lxs-button-error-background-color: var( --lxs-button-disabled-background-color, var(--lxs-color-outline-variant) );--lxs-button-primary-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));--lxs-button-secondary-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));--lxs-button-outline-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));--lxs-button-outline-border-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));--lxs-button-text-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));--lxs-button-error-color: var(--lxs-button-disabled-color, var(--lxs-color-outline));pointer-events:none;cursor:default}.lxs-button.lxs-is-icon-only{padding:var(--lxs-button-padding, 12px)}.lxs-button.lxs-is-compact{padding:var(--lxs-button-padding, 8px 12px);font-size:var(--lxs-font-size-s)}.lxs-button.lxs-is-compact.lxs-is-icon-only{padding:var(--lxs-button-padding, 8px)}.lxs-button:not(.lxs-is-icon-only):not(.lxs-is-compact){min-width:var(--lxs-button-min-width, 96px)}.lxs-button b,.lxs-button strong{color:inherit}.lxs-toast{--lxs-icon-size: 1.5em;--lxs-button-color: var(--lxs-toast-color, var(--lxs-color-inverse-on-surface));--lxs-button-font-size: var(--lxs-font-size-s);--lxs-button-line-height: var(--lxs-line-height-s);--lxs-button-text-decoration: underline;display:grid;grid-auto-flow:column;align-items:center;padding:4px 12px;min-height:44px;font-weight:400;font-size:var(--lxs-font-size-s);line-height:var(--lxs-line-height-s);background-color:var(--lxs-toast-background-color, var(--lxs-color-inverse-surface));color:var(--lxs-toast-color, var(--lxs-color-inverse-on-surface));gap:calc(var(--lxs-spacing) * 3);border-radius:var(--lxs-border-radius);cursor:default}.lxs-toast.lxs-is-error,.lxs-toast[data-lxs-variant=error]{--lxs-toast-color: var(--lxs-toast-error-color, var(--lxs-color-on-error));--lxs-toast-background-color: var(--lxs-toast-error-background-color, var(--lxs-color-error))}[dir=ltr] .lxs-toast.lxs-has-action{padding-right:4px}[dir=rtl] .lxs-toast.lxs-has-action{padding-left:4px}.lxs-toast .lxs-button[data-lxs-variant=text]:after{background-color:var(--lxs-color-background)}:host{z-index:999;position:fixed;bottom:0;display:flex;left:50%;right:50%;align-items:center;justify-content:center;margin-bottom:var(--lxs-control-padding);transition:transform .3s ease-in-out;width:100%;padding-inline:var(--lxs-control-padding);transform:translate(-50%) translateY(100%);filter:drop-shadow(var(--lxs-shadow-floating))}:host .lxs-button{text-decoration:none}@media screen and (min-width: 480px){:host{width:max-content;padding-inline:initial}}:host(.shown){transform:translate(-50%) translateY(0)}.container{width:100%;border-radius:var(--lxm-border-s, 8px);border:1px solid var(--lxs-color-outline)}@media screen and (min-width: 480px){.container{width:auto}}.large{display:flex;flex-direction:column;padding:12px;gap:12px}.large .lxs-button{width:100%}@media screen and (min-width: 480px){.large{margin:0 auto;flex-direction:row;align-items:center;padding:12px 24px;gap:24px}.large .lxs-button{width:auto}}.large .content{display:flex;flex-direction:column;gap:12px;text-align:center}@media screen and (min-width: 480px){.large .content{flex-grow:1;flex-direction:row;font-size:var(--lxs-font-size-s);text-align:start;align-items:center}}.large .content .text{display:flex;flex-direction:column}.slim{display:flex;flex-direction:row;align-items:center;gap:8px}.slim .content{text-align:center;flex:1;padding:0;margin:0}@media screen and (min-width: 480px){.slim .content{text-align:initial}}.no-break{white-space:nowrap;word-break:keep-all}.celebrate-icon{font-size:32px;line-height:32px;display:flex;align-items:center;justify-content:center}.title{font-weight:var(--lxs-font-weight-bold);font-size:var(--lxs-font-size-xl)}@media screen and (min-width: 480px){.title{font-size:var(--lxs-font-size-base)}}.bold{font-weight:var(--lxs-font-weight-bold)}\n')], bt([nt({
        type: String,
        attribute: "pixel-url"
    })], yt.prototype, "pixelURL", 2), bt([nt({
        type: String,
        attribute: "content"
    })], yt.prototype, "content", 2);
    const $t = "lx-discount-reminder";
    let _t = !1;

    function At() {
        try {
            var t = null == sessionStorage ? void 0 : sessionStorage.getItem("lx_discount_reminder");
            return t ? JSON.parse(t) : void 0
        } catch {
            return null
        }
    }
    LOOX.domReady(async () => {
        var t, e;
        if (!(_t || 0 < document.getElementsByTagName($t).length)) try {
            var r = At();
            if (!r || !r.dismissed) {
                _t = !0;
                const i = function() {
                    const t = document.cookie.split(";").find(t => t.includes("discount_code"));
                    return null == t ? void 0 : t.split("=")[1]
                }();
                if (i) {
                    if (i.startsWith("LXZ")) {
                        var o = r && r.locale !== LOOX.shopifyLocale;
                        o && sessionStorage.removeItem("lx_discount_reminder");
                        var s = !r || o ? await async function(t) {
                            const {
                                root: e,
                                clientId: r,
                                shopifyLocale: o
                            } = LOOX, s = e + `/referrals/${r}/discounts/${t}?locale=` + o, i = await fetch(s);
                            return i.json()
                        }(i) : r;
                        if (!r) {
                            const t = {
                                locale: LOOX.shopifyLocale
                            };
                            null != s && s.content && (t.content = s.content), sessionStorage.setItem("lx_discount_reminder", JSON.stringify({ ...t
                            }))
                        }
                        if (s && s.content && !(0 < document.getElementsByTagName($t).length)) {
                            t = $t, e = yt, window.customElements.get(t) || window.customElements.define(t, e);
                            const n = document.createElement($t);
                            n.setAttribute("content", s.content), n.setAttribute("pixel-url", s.pixelURL), document.body.appendChild(n), n.show(), n.addEventListener("dismissed", () => {
                                var t = At();
                                sessionStorage.setItem("lx_discount_reminder", JSON.stringify({ ...t,
                                    dismissed: !0
                                }))
                            })
                        }
                    }
                } else r && sessionStorage.removeItem("lx_discount_reminder")
            }
        } catch (t) {}
    })
}();