class Uppromote {
    constructor(e = "production", t = !0) {
        this.env = e, this.host = ({
            dev: "https://secomapp-affiliate.test",
            test: "https://af-test.uppromote.com",
            production: "https://track.uppromote.com"
        })[e] || "https://track.uppromote.com", this.cdnHost = ({
            dev: "https://secomapp-affiliate.test",
            test: "https://af-test.uppromote.com",
            production: "https://d1639lhkj5l89m.cloudfront.net"
        })[e] || "https://d1639lhkj5l89m.cloudfront.net", this.cdnS3Host = ({
            dev: "https://secomapp-affiliate.test",
            test: "https://af-test.uppromote.com",
            production: "https://cdn.uppromote.com"
        })[e] || "https://cdn.uppromote.com", this.cache = t, this.postPurchasePopup = {
            ui: {
                sca_title: null
            }
        }
    }
    init() {
        this.dispatchLoadedEvent(), this.processOnLoadPage(), this.uppromoteLog("Running...")
    }
    assetS3(e = "") {
        let t = this.cdnS3Host;
        return e.startsWith("http") ? e : ("production" !== this.env && (t = `${t}/storage`), `${t}/${e=(e=e.replace("//","/")).startsWith("/")?e.slice(1,e.length):e}`)
    }
    renderElm(e = "div", t, o = {}, i) {
        let a = document.createElement(e);
        return t && (Array.isArray(t) ? t.map(e => a.classList.add(e)) : t && 0 !== t.length && a.classList.add(t)), Object.keys(o).forEach(e => a.setAttribute(e, o[e])), i && (a.innerHTML = i), a
    }
    async fetchAndGetContent(e = "", t = "GET", o = {}) {
        if (o.shopify_domain = this.getShopDomain(), ["GET", "HEAD"].includes(t)) {
            e = new URL(e);
            let i = new URLSearchParams(o),
                a = e.searchParams,
                s = new URLSearchParams({ ...Object.fromEntries(i),
                    ...Object.fromEntries(a)
                });
            e = `${e.origin}${e.pathname}?${s.toString()}`;
            let n = await fetch(e);
            return await n.json() || null
        } {
            let r = new FormData;
            Object.keys(o).forEach(e => r.append(e, o[e]));
            let c = await fetch(e, {
                method: t,
                headers: {},
                body: r
            });
            return await c.json() || null
        }
    }
    setCookie(e, t, o) {
        let i = new Date;
        i.setTime(i.getTime() + 864e5 * o);
        let a = "expires=" + i.toUTCString();
        document.cookie = e + "=" + t + ";" + a + ";path=/"
    }
    getCookie(e) {
        let t = e + "=",
            o = decodeURIComponent(document.cookie).split(";");
        for (let i = 0; i < o.length; i++) {
            let a = o[i];
            for (;
                " " === a.charAt(0);) a = a.substring(1);
            if (0 === a.indexOf(t)) return a.substring(t.length, a.length)
        }
        return ""
    }
    mustPostClickTracking(e) {
        if (!e) return !0;
        let t = new Date().getTime();
        return t - e > 6e4
    }
    checkResponseFromServer() {
        if ("false" === localStorage.getItem("scaaf_received")) {
            let e = this.getCookie("scaaf_aid") || localStorage.getItem("scaaf_aid");
            e && this.postClickTracking({
                aid: e,
                tid: localStorage.getItem("scaaf_tid"),
                hc: localStorage.getItem("scaaf_hc"),
                s: this.getShopName(),
                ug: navigator.userAgent
            }, null, () => {
                uppromote.uppromoteLog("ReTracking success!")
            })
        }
    }
    parseQueryStringToObject(e = "") {
        try {
            let t = new URLSearchParams(e),
                o = t.entries(),
                i = {};
            for (let [a, s] of o) i[a] = s;
            return i
        } catch (n) {
            return {}
        }
    }
    getShopDomain() {
        try {
            if (Shopify) return Shopify.shop;
            return ""
        } catch (e) {
            return console.error("Uppromote: getShopName() - Error when get shopify domain"), ""
        }
    }
    getShopName() {
        return this.getShopDomain().replace(".myshopify.com", "")
    }
    getShopifyCheckoutObject() {
        return Shopify && Shopify.checkout ? Shopify.checkout : null
    }
    getShopifyCheckoutInformationObject() {
        return Shopify && Shopify.Checkout ? Shopify.Checkout : null
    }
    copyToClipboard(e, t) {
        e.focus(), e.select(), navigator.clipboard.writeText(e.value).then(t)
    }
    applyDiscountCode(e) {
        let t = this.renderElm("iframe", "sca_d-none", {
            src: `/discount/${encodeURIComponent(e)}`
        });
        t.style.display = "none", document.body.append(t)
    }
    initFbPixel() {
        if ("undefined" != typeof disableUppromoteFacebookPixel) return;
        let e = this.renderElm("script", "sca_aff_fb_pixel_init");
        e.textContent = '!function(a,c,b,d,e,f,g){a.fbq||(e=a.fbq=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments)},!a._fbq&&(a._fbq=e),e.push=e,e.loaded=!0,e.version="2.0",e.queue=[],f=c.createElement(b),f.async=!0,f.src=d,g=c.getElementsByTagName(b)[0],g.parentNode.insertBefore(f,g))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");', document.head.append(e)
    }
    getCouponCode(e, t) {
        let o = `${this.host}/api/get_coupon`,
            i = e || this.getCookie("scaaf_aid");
        i && this.fetchAndGetContent(o, "GET", {
            aid: i
        }).then(e => {
            "ok" === e.status ? (uppromote.applyDiscountCode(e.coupon), setTimeout(() => {
                t && (window.location.href = `${t}&discount=${e.coupon}`)
            }, window.wattingForApplyDiscountCode || 200)) : t && (window.location.href = t)
        }).catch(() => {
            t && (window.location.href = t)
        })
    }
    trackFbPixel(e) {
        if ("undefined" != typeof disableUppromoteFacebookPixel) return;
        let t = `${this.host}/api/get_fb_pixel`,
            o = {
                aff_id: e || this.getCookie("scaaf_aid") || localStorage.getItem("scaaf_aid"),
                shop: `${this.getShopDomain()}`
            },
            i = function(e) {
                let t = uppromote.getShopifyCheckoutObject(),
                    o = uppromote.getShopifyCheckoutInformationObject();
                fbq("init", e), fbq("trackSingle", e, "PageView"), t && fbq("trackSingle", e, "Purchase", {
                    value: t.total_price,
                    currency: t.currency
                }), o && "contact_information" === o.step && fbq("trackSingle", e, "InitiateCheckout", {
                    currency: t.currency,
                    value: t.estimatedPrice
                }), document.location.pathname.startsWith("/cart") && fbq("trackSingle", e, "AddToCart")
            };
        o.aff_id && this.fetchAndGetContent(t, "GET", o).then(e => {
            "ok" === e.status && i(e.pixel)
        }).catch(e => {
            console.error("Uppromote: trackFbPixel() - Error when fetch Fb pixel"), console.error(e)
        })
    }
    appendAffiliateIdToRegisterForm(e = null) {
        if (!this.getCookie("scaaf_ass_dl")) return;
        let t = window.location.pathname.split("/")[2] || "";
        if ("register" !== t || !(e = e || this.getCookie("scaaf_aid") || localStorage.getItem("scaaf_aid"))) return;
        let o = document.querySelector('form[method="post"][action*="account"]');
        if (!o) return;
        let i = this.renderElm("input", null, {
            type: "hidden",
            name: "customer[note][affiliate_id]",
            value: e
        });
        o.append(i)
    }
    getPostPurchasePopupSetting() {
        let e = `${this.host}/api/purchase_popup/setting`,
            t = this.getShopifyCheckoutObject();
        if (!t || !t.email) return;
        let o = {
            email: t.email,
            shop: this.getShopDomain()
        };
        this.fetchAndGetContent(e, "GET", o).then(e => {
            "ok" === e.status && uppromote.renderPostPurchasePopup(e)
        })
    }
    renderPostPurchasePopup(e) {
        if (this.getCookie("sca_p_p_show_once") && 1 === e.settings.show_only_once) return;
        1 === e.settings.show_only_once && this.setCookie("sca_p_p_show_once", 1, 360);
        let t = e.settings,
            o = e.nonActiveAffiliate,
            i = t.design,
            a = t.promotion_method,
            s = t.custom_css,
            n = e.customize,
            r = `${this.cdnHost}/css/script_tag/script_affiliate.css`,
            c = this.renderElm("link", null, {
                href: `${r}${this.cache?"":`?v=${new Date().getTime()}`}`,
                rel: "stylesheet"
            }),
            p = this.renderElm("style", null, {}, s);
        document.head.append(c, p);
        let l = this.renderElm("div", "sca_purchase_popup_modal_container"),
            d = this.renderElm("div", ["sml", "is-open"], {
                id: "modal-1",
                "aria-hidden": "false"
            }),
            u = this.renderElm("div", "sca_modal_overlay", {
                id: "sca_modal_overlay",
                tabindex: "-1",
                "data-micromodal-close": ""
            }),
            h = this.renderElm("div", "sca_modal_container", {
                id: "modal_container",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-1-title"
            }),
            m = this.renderElm("button", ["sca_modal_close", "x-btn"], {
                "aria-label": "Close modal",
                "data-micromodal-close": "",
                id: "sca_post_purchase_popup_close_button"
            }, "x"),
            f = this.renderElm("div", null, {
                id: "sca_popup"
            }),
            g = this.renderElm("div", "sca_modal_image", {
                alt: "Post purchase popup"
            }),
            k = "none" === i.header_image ? this.cdnHost + "/img/default_popup.jpg" : this.assetS3(i.header_image);
        "/img/default_popup.jpg" === i.header_image && (k = this.cdnHost + "/img/default_popup.jpg"), g.style.backgroundImage = `url(${k})`, g.style.height = `${i.image_height}px`;
        let b = this.renderElm("div", null, {
                id: "sca_main"
            }),
            C = this.renderElm("div", null, {
                id: "sca_content"
            }),
            y = this.renderElm("div", null, {
                id: "sca_title"
            }, i.title);
        y.style.color = i.title_color;
        let v = this.renderElm("div", null, {
            id: "sca_subtitle"
        }, 2 === a ? i.sub_title_coupon : i.sub_title);
        v.style.color = i.subtitle_color, this.postPurchasePopup.ui.sca_title = v;
        let E, w;
        if (n) {
            E = this.renderElm("div", "scaaff_require_term"), w = this.renderElm("input", null, {
                type: "checkbox",
                id: "confirm-term",
                name: "confirm-term"
            });
            let T = this.renderElm("label", null, {
                for: "confirm-term"
            }, `I agree with <a href='${n.term}' target='_blank'>Terms and Conditions</a>`);
            E.append(w, T)
        }
        let P = this.renderElm("div", "sca_result_wrapper", {
                id: "sca_result_wrapper"
            }),
            I = "Active my account";
        (void 0 !== i.button_text_non_auto_active || null != i.button_text_non_auto_active) && (I = i.button_text_non_auto_active);
        let S = o ? I : 2 === a ? i.button_text_coupon : i.button_text,
            $ = this.renderElm("button", null, {
                id: "sca_reg_mode_manual_btn",
                "data-origin-text": S
            }, S);
        $.style.cursor = n ? "not-allowed" : "pointer", $.style.backgroundColor = i.button_background, $.style.color = i.button_text_color, $.style.borderRadius = `${i.button_border_radius}px`;
        let x = this.renderElm("div", "sca_share_container", {
                id: "sca_share"
            }),
            A = function() {
                d.setAttribute("aria-hidden", "true"), setTimeout(() => {
                    l.style.display = "none"
                }, 300)
            },
            _ = function() {
                n && ($.style.cursor = w.checked ? "pointer" : "not-allowed", $.disabled = !w.checked)
            },
            L = function() {
                if (n) {
                    w.checked && uppromote.postRegisterAffiliatePostPurchasePopup();
                    return
                }
                uppromote.postRegisterAffiliatePostPurchasePopup()
            };
        $.append(x), P.append($), C.append(y, v), E && C.append(E), C.append(P), b.append(C), f.append(g, b, x), h.append(m, f), u.append(h), d.append(u), l.append(d), document.body.append(l), m.addEventListener("click", A), 1 === t.close_background_click && document.addEventListener("click", function(e) {
            e.target === u && A()
        }), E && w && w.addEventListener("change", _), $.addEventListener("click", L)
    }
    postRegisterAffiliatePostPurchasePopup() {
        let e = document.getElementById("sca_reg_mode_manual_btn"),
            t = document.getElementById("sca_result_wrapper");
        if (!e && !t) return;
        let o = function(t = !0) {
                e.disabled = t, e.style.cursor = t ? "not-allowed" : "pointer", e.textContent = t ? "Loading..." : e.dataset.originText
            },
            i = this.getShopifyCheckoutObject();
        if (!i || !i.email) return;
        let a = function(e) {
                console.log(e);
                let o = uppromote.renderElm("div", null, {
                    id: "sca_thank_you"
                }, e.nonActiveAffiliate ? 2 === e.promotion_method ? e.p.thank_you_content_coupon_non_active : e.p.thank_you_content_non_active : 2 === e.promotion_method ? e.p.thank_you_content_coupon : e.p.thank_you_content);
                o.style.color = e.p.subtitle_color;
                let i = uppromote.renderElm("div", "result_wrapper"),
                    a = uppromote.renderElm("div", "input-link-wrapper"),
                    s = uppromote.renderElm("input", "sca_ip", {
                        id: "sca_referral_link_ip",
                        type: "text",
                        value: e.coupon_code || e.referral_link
                    }),
                    n = e.coupon_code ? "Copy coupon" : "Copy link",
                    r = uppromote.renderElm("button", ["sca_bt", "sca_btn_copy"], {
                        id: "sca_popup_copy_btn"
                    }, n);
                if (uppromote.postPurchasePopup.ui.sca_title.innerHTML = "", uppromote.postPurchasePopup.ui.sca_title.append(o), e.nonActiveAffiliate) {
                    (() => {
                        if (1 === e.promotion_method) {
                            let o = uppromote.renderElm("div", null, {
                                id: "sca_div_link"
                            }, e.thankYou);
                            o.style.color = e.p.subtitle_color, i.append(o)
                        } else {
                            let a = uppromote.renderElm("div", null, {
                                id: "sca_div_coupon"
                            }, e.thankYou);
                            a.style.color = e.p.subtitle_color, i.append(a)
                        }
                        t.innerHTML = "", t.append(i), uppromote.postPurchasePopup.ui.sca_title && uppromote.postPurchasePopup.ui.sca_title.remove()
                    })();
                    return
                }
                a.append(s), i.append(a, r), t.innerHTML = "", t.append(i), r.addEventListener("click", () => {
                    uppromote.copyToClipboard(s, () => {
                        r.textContent = "Copied!", setTimeout(() => {
                            r.textContent = n
                        }, 1e3)
                    })
                });
                let c = {
                        facebook: {
                            title: "Share on Facebook",
                            img: `${uppromote.cdnHost}/img/facebook.svg`,
                            shareUrl: "https://www.facebook.com/sharer.php?u="
                        },
                        twitter: {
                            title: "Share on Twitter",
                            img: "https://cdn.uppromote.com/storage/uploads/icons/twitter.svg",
                            shareUrl: "https://twitter.com/intent/tweet?url="
                        },
                        pinterest: {
                            title: "Share on Pinterest",
                            img: `${uppromote.cdnHost}/img/pinterest.svg`,
                            shareUrl: "https://pinterest.com/pin/create/link/?url="
                        },
                        linkedin: {
                            title: "Share on LinkedIn",
                            img: `${uppromote.cdnHost}/img/linkedin.svg`,
                            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url="
                        }
                    },
                    p = document.getElementById("sca_share");
                for (let l in c) {
                    let d = uppromote.renderElm("a", null, {
                            target: "_blank",
                            title: c[l].title,
                            href: `${c[l].shareUrl}${e.referral_link}`
                        }),
                        u = uppromote.renderElm("img", null, {
                            alt: c[l].title,
                            src: c[l].img
                        });
                    d.append(u), p.append(d)
                }
                p.style.display = "block"
            },
            s = function(e) {
                let t = e.message,
                    i = document.querySelector("#sca_popup #sca_content"),
                    a = i.querySelector("#sca_subtitle"),
                    s = i.querySelector("#sca_post_purchase_error");
                s && s.remove(), s = uppromote.renderElm("p", "sca_post_purchase_error", {
                    id: "sca_post_purchase_error"
                }, t), t && i && a.after(s), o(!1)
            },
            n = {
                email: i.email,
                first_name: i.billing_address.first_name,
                last_name: i.billing_address.last_name,
                shop: this.getShopDomain()
            },
            r = this.getCookie("scaaf_aid") || localStorage.getItem("scaaf_aid"),
            c = i.discount ? i.discount.code : null;
        r && (n.affiliate_id = r), c && (n.coupon = c), o(), this.fetchAndGetContent(`${this.host}/api/post_affiliate_purchase`, "POST", n).then(e => {
            "ok" === e.status ? a(e) : s(e)
        })
    }
    postClickTracking(e, t, o) {
        localStorage.getItem("scaaf_sca_source_secomus") && (e.sca_source = localStorage.getItem("scaaf_sca_source_secomus")), this.fetchAndGetContent(`${this.host}/api/click_tracking`, "POST", e).then(i => {
            if ("ok" === i.status) {
                this.uppromoteLog(`Tracking affiliate id ${e.aid}`), this.setLocalTrackingReceivedVariables(i), this.getCouponCode(), this.dispatchTrackingAffiliateEvent(!0, i), o && o(i), this.runCustomizePostClickTrackingCallback(i);
                return
            }
            t && clearInterval(t), this.dispatchTrackingAffiliateEvent(!1, i), o && o(i)
        }).catch(e => {
            t && clearInterval(t), this.dispatchTrackingAffiliateEvent(!1, response), o && o(e), console.warn(e)
        })
    }
    dispatchLoadedEvent() {
        let e = new CustomEvent("uppromote:loaded"),
            t = () => window.dispatchEvent(e);
        this.waitCustomerReferralExtension(t), this.waitMessageBarExtension(t)
    }
    dispatchTrackingAffiliateEvent(e = !1, t = {}) {
        let o = new CustomEvent("uppromote:tracked-affiliate", {
                detail: {
                    available: e,
                    info: t
                }
            }),
            i = () => window.dispatchEvent(o);
        this.waitCustomerReferralExtension(i), this.waitMessageBarExtension(i)
    }
    waitCustomerReferralExtension(e, t) {
        let o = setInterval(() => {
            "undefined" != typeof UppromoteCustomerReferral && (clearInterval(o), e())
        }, 500);
        setTimeout(() => {
            clearInterval(o), t && t()
        }, 1e4)
    }
    waitMessageBarExtension(e, t) {
        let o = setInterval(() => {
            "undefined" != typeof UppromoteMessageBar && (clearInterval(o), e())
        }, 500);
        setTimeout(() => {
            clearInterval(o), t && t()
        }, 1e4)
    }
    postCheckoutToken() {
        let e = this.getShopifyCheckoutObject(),
            t = this.getShopifyCheckoutInformationObject();
        if (t && t.token && e && null != localStorage.getItem("scaaf_aid") && localStorage.getItem("scaaf_ep") > new Date().getTime()) {
            let o = {
                aid: localStorage.getItem("scaaf_aid"),
                ct_tk: t.token,
                s: this.getShopName(),
                hc: localStorage.getItem("scaaf_hc"),
                order_id: e.order_id
            };
            localStorage.getItem("scaaf_sca_source_secomus") && (o.sca_source = localStorage.getItem("scaaf_sca_source_secomus")), this.fetchAndGetContent(`${this.host}/api/ct_tk`, "POST", o).then(() => {}).catch(e => {
                console.error(e)
            })
        }
    }
    postCartToken(e, t) {
        e.ug = navigator.userAgent, localStorage.getItem("scaaf_sca_source_secomus") && (e.sca_source = localStorage.getItem("scaaf_sca_source_secomus")), this.fetchAndGetContent(`${this.host}/api/ctk`, "POST", e).then(o => {
            "ok" === o.status && (this.setCookie("scaaf_tid", o.tid, 360), localStorage.setItem("scaaf_tid", o.tid), localStorage.setItem("scaaf_ctk", e.ctk), this.setCookie("scaaf_ctk", e.ctk, 360), localStorage.setItem("scaaf_received", "true")), clearInterval(t)
        }).catch(e => {
            clearInterval(t), console.error(e)
        })
    }
    processOnLoadPage() {
        let e = this.parseQueryStringToObject(window.location.search.substring(1));
        if (e.sca_ref) {
            let t = e.sca_ref.split("."),
                o = {
                    aid: t[0],
                    hc: t[1],
                    s: this.getShopName(),
                    tid: localStorage.getItem("scaaf_tid"),
                    ug: navigator.userAgent
                },
                i = localStorage.getItem("scaaf_c_c"),
                a = new Date().getTime(),
                s = this.mustPostClickTracking(i);
            s && (this.setLocalTrackingVariables(o.aid, !1, o.hc, a, e.sca_source), this.postClickTracking(o, null)), e.sca_rib && (this.getCookie("scaaf_aid") ? this.getCouponCode(o.aid, e.sca_rib) : window.location.href = e.sca_rib)
        } else this.checkResponseFromServer(), this.getCouponCode();
        this.intervalCheckCartToken(), this.postCheckoutToken(), this.appendAffiliateIdToRegisterForm(), this.getPostPurchasePopupSetting(), this.initFbPixel(), setTimeout(() => uppromote.trackFbPixel(), 200)
    }
    setLocalTrackingVariables(e, t = !1, o, i, a) {
        localStorage.setItem("scaaf_aid", e), localStorage.setItem("scaaf_received", t ? "true" : "false"), localStorage.setItem("scaaf_hc", o), localStorage.setItem("scaaf_c_c", i), this.setCookie("scaaf_aid", e, 360), this.setCookie("scaaf_c_c", i, 360), a && (localStorage.setItem("scaaf_sca_source_secomus", a || ""), this.setCookie("scaaf_sca_source_secomus", a || "", 360))
    }
    setLocalTrackingReceivedVariables(e = {}) {
        localStorage.setItem("scaaf_received", "true"), localStorage.setItem("scaaf_tid", e.tid), localStorage.setItem("scaaf_ep", (1e3 * e.ep).toString()), this.setCookie("scaaf_tid", e.tid, 360), this.setCookie("scaaf_ep", 1e3 * e.ep, 360), this.setCookie("scaaf_afn", encodeURIComponent(e.afd.affiliate_name) || "", e.afcookie), this.setCookie("scaaf_afc", encodeURIComponent(e.afd.company) || "", e.afcookie), this.setCookie("scaaf_affn", encodeURIComponent(e.afd.affiliate_firstname) || "", e.afcookie), this.setCookie("scaaf_pd", encodeURIComponent(e.afd.personal_detail) || "", e.afcookie), e.enable_assign_down_line && this.setCookie("scaaf_ass_dl", 1, e.afcookie)
    }
    intervalCheckCartToken() {
        let e = () => {
                let e = localStorage.getItem("scaaf_ctk"),
                    o = this.getCookie("cart");
                if (!o) return;
                let i = localStorage.getItem("scaaf_tid"),
                    a = localStorage.getItem("scaaf_aid");
                if (i && a) {
                    let s = localStorage.getItem("scaaf_ep");
                    if (s && s < new Date().getTime()) {
                        clearInterval(t);
                        return
                    }
                    if (e !== o) {
                        let n = this.getShopifyCheckoutObject();
                        if (n) {
                            clearInterval(t);
                            return
                        }
                        this.postCartToken({
                            aid: localStorage.getItem("scaaf_aid"),
                            tid: localStorage.getItem("scaaf_tid"),
                            ctk: o,
                            s: this.getShopName()
                        }, t)
                    }
                }
                "false" === localStorage.getItem("scaaf_received") && this.postClickTracking({
                    aid: localStorage.getItem("scaaf_aid"),
                    tid: localStorage.getItem("scaaf_tid"),
                    hc: localStorage.getItem("scaaf_hc"),
                    s: this.getShopName(),
                    ug: navigator.userAgent
                }, t)
            },
            t = setInterval(e, 1e3)
    }
    runCustomizePostClickTrackingCallback(e) {
        if ("function" == typeof scaAffClickTrackingCallback) try {
            scaAffClickTrackingCallback(e)
        } catch (t) {
            console.log(t)
        }
    }
    uppromoteLog(e) {
        "undefined" != typeof scaDisableUppromoteLog && scaDisableUppromoteLog || console.log(`%c ► UpPromote Affiliate Marketing [Application] - ${e}`, "background-color: #092C4C; color: #fff; padding: 5px;")
    }
}
const uppromote = new Uppromote("production");
uppromote.init();