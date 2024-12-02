void 0 === window.Woolman && (window.Woolman = {}), Woolman.bind = function(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}, Woolman.init = function() {
    if (Woolman.ModalsAndDrawers.init(), Woolman.Header.init(), Woolman.DetailsAccordions.init(), !Shopify || !Shopify.designMode) return;
    let e = {
        sectionId: void 0,
        blockId: void 0
    };
    document.addEventListener("shopify:section:load", t => {
        let i = "shopify-section-" + t.detail.sectionId;
        i === Woolman.Header.cache.section.id && (Woolman.ModalsAndDrawers.init(), Woolman.Header.init()), document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`) && Woolman.ModalsAndDrawers.showModalOrDrawer(document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`).id), console.log("shopify:section:load sectionId", t.detail.sectionId), console.log("lastSelection", e)
    }), document.addEventListener("shopify:block:select", t => {
        let i = "shopify-section-" + t.detail.sectionId,
            s = document.getElementById(i).querySelectorAll("[data-shopify-editor-block]"),
            o = [...s].find(e => JSON.parse(e.dataset.shopifyEditorBlock).id === t.detail.blockId);
        if (i === Woolman.Header.cache.section.id) {
            if (o) {
                Woolman.Header.cache.openButton.click();
                let a = o.closest("[data-accordion-item]").querySelector("input"),
                    n = o.closest("[data-accordion-item]").querySelector("label");
                a.checked || n.click()
            }
        } else i.includes("modal") && document.getElementById(i).querySelector("[data-modal]") && o && Woolman.ModalsAndDrawers.showModalOrDrawer(document.getElementById(i).querySelector("[data-modal]").id);
        e.sectionId = t.detail.sectionId, e.blockId = t.detail.blockId, console.log("shopify:block:select", t.detail.sectionId, t.detail.blockId), console.log("lastSelection", e)
    }), document.addEventListener("shopify:section:unload", e => {
        console.log("shopify:section:unload sectionId", e.detail.sectionId)
    }), document.addEventListener("shopify:section:select", t => {
        console.log("shopify:section:select", t.detail.sectionId), e = {
            sectionId: t.detail.sectionId,
            blockId: t.detail.blockId
        }, t.detail.sectionId.includes("modal") && document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`) && Woolman.ModalsAndDrawers.showModalOrDrawer(document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`).id), console.log("lastSelection", e)
    }), document.addEventListener("shopify:section:deselect", t => {
        console.log("shopify:section:deselect", t.detail.sectionId), e = {
            sectionId: void 0,
            blockId: void 0
        }, t.detail.sectionId.includes("modal") && document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`) && Woolman.ModalsAndDrawers.closeModalOrDrawer(document.querySelector(`[data-modal][data-section-id="${t.detail.sectionId}"]`).id), console.log("lastSelection", e)
    })
}, Woolman.Utils = {
    debugMode: !0,
    focusTraps: {},
    checkCanFocusTrap(e) {
        let t = e.map(e => new Promise(t => {
            let i = setInterval(() => {
                "hidden" !== getComputedStyle(e).visibility && (t(), clearInterval(i))
            }, 5)
        }));
        return Promise.all(t)
    },
    onFocusTrapDeactivate(e) {
        e.classList.remove("focus-trap"), document.body.classList.remove("focus-being-trapped")
    },
    onFocusTrapActivate(e) {
        e.classList.add("focus-trap"), document.body.classList.add("focus-being-trapped")
    },
    clearFocusTrap(e) {
        Woolman.Utils.focusTraps[e] && (Woolman.Utils.focusTraps[e].deactivate(), Woolman.Utils.focusTraps[e] = void 0)
    },
    prepareQueryParams() {
        if (Shopify.queryParams = Shopify.queryParams || {}, location.search.length) {
            let e = location.search.substr(1).split("&");
            for (let t = 0; t < e.length; t++) {
                let i = e[t].split("=");
                i.length && (Shopify.queryParams[decodeURIComponent(i[0])] = decodeURIComponent(i[1]))
            }
        }
        return Shopify.queryParams
    },
    formatMoney(e, t) {
        let i = theme.settings.moneyFormat || "€{{amount}}";
        "string" == typeof e && (e = e.replace(".", "")), window ? .Shopify ? .currency ? .rate && (e *= parseFloat(window.Shopify.currency.rate || 1));
        var s = "",
            o = /\{\{\s*(\w+)\s*\}\}/,
            a = t || i;

        function n(e, t) {
            return void 0 === e ? t : e
        }

        function r(e, t, i, s) {
            if (t = n(t, 2), i = n(i, ","), s = n(s, "."), isNaN(e) || null == e) return 0;
            var o, a = (e = (e / 100).toFixed(t)).split(".");
            return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (a[1] ? s + a[1] : "")
        }
        switch (a.match(o)[1]) {
            case "amount":
                s = r(e, 2);
                break;
            case "amount_no_decimals":
                s = r(e, 0);
                break;
            case "amount_with_comma_separator":
                s = r(e, 2, ".", ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                s = r(e, 0, ".", ",")
        }
        return a.replace(o, s)
    }
}, Woolman.Header = {
    selectors: {
        header: "MainHeader",
        cartBlip: ".cart-blip"
    },
    cache: {
        header: void 0,
        cartBlip: void 0,
        section: void 0,
        openButton: void 0
    },
    focusTraps: {},
    init: function() {
        this.cache.header = document.getElementById(this.selectors.header), this.cache.cartBlip = this.cache.header.querySelector(this.selectors.cartBlip), this.cache.section = this.cache.header.closest(".shopify-section"), this.cache.openButton = this.cache.header.querySelector('[href="#drawer-menu"]'), document.addEventListener("ajaxProduct:added", this.updateCartBlip.bind(this)), document.addEventListener("cart:update", this.updateCartBlip.bind(this)), "none" !== this.cache.header.dataset.stickyBehavior && this.initStickyBehavior(this.cache.header.dataset.stickyBehavior)
    },
    initStickyBehavior(e) {
        let t = {
            headerHeight: this.cache.header.clientHeight,
            behavior: e
        };
        if (document.documentElement.classList.add("sticky-header-initialized", `sticky-header-${e}`), document.documentElement.style.setProperty("--sticky-header-margin-top", `${t.headerHeight}px`), "scroll" === e || "fixed" === e) {
            let i = window.scrollY || document.documentElement.scrollTop,
                s, o = 0,
                a = 0,
                n = (e, i) => {
                    1 === e || i < t.headerHeight ? document.documentElement.classList.remove("sticky-header-hide") : 2 === e && i > t.headerHeight && document.documentElement.classList.add("sticky-header-hide"), a = e
                };
            window.addEventListener("scroll", throttle(() => {
                (s = window.scrollY || document.documentElement.scrollTop) >= 300 ? document.documentElement.classList.add("sticky-header-show") : document.documentElement.classList.remove("sticky-header-show"), (o = s > i ? 2 : 1) !== a && "scroll" === e && n(o, s), i = s
            }, 50)), setInterval(() => {
                2 === o && "scroll" === e && s >= 900 && n(o, s), 0 === window.scrollY && document.documentElement.classList.remove("sticky-header-show", "sticky-header-hide")
            }, 200)
        }
    },
    async updateCartBlip(e) {
        let t = e.detail && e.detail.cart && e.detail.cart.item_count || await async function() {
            let e = await fetch("/cart.json"),
                t = await e.json();
            return t
        }();
        this.cache.cartBlip.textContent = t.item_count || 0, t && 0 == t.item_count ? (this.cache.cartBlip.setAttribute("hidden", !0), this.cache.cartBlip.closest(".header-item__link").classList.remove("has-blip-visible")) : (this.cache.cartBlip.removeAttribute("hidden"), this.cache.cartBlip.closest(".header-item__link").classList.add("has-blip-visible"));
        let i = document.querySelector("#cart-notification-link .cart-total");
        i && (i.textContent = t.item_count)
    }
}, Woolman.ModalsAndDrawers = {
    settings: {
        selectors: {
            modalLink: 'a[href*="modal"]:not(.quick-buy_link)',
            drawerLink: 'a[href*="drawer"]'
        }
    },
    focusTraps: {},
    init: function() {
        document.querySelectorAll(this.settings.selectors.modalLink).forEach(e => {
            e.addEventListener("click", e => {
                e.preventDefault();
                let t = e.currentTarget.getAttribute("href").substring(1).split("?")[0],
                    i = e.currentTarget.getAttribute("href").substring(1).split("?page=")[1];
                this.showModalOrDrawer(t, parseInt(i))
            })
        }), document.querySelectorAll(this.settings.selectors.drawerLink).forEach(e => {
            e.addEventListener("click", e => {
                e.preventDefault();
                let t = e.currentTarget.getAttribute("href").substring(1).split("?")[0],
                    i = e.currentTarget.getAttribute("href").substring(1).split("?page=")[1];
                this.showModalOrDrawer(t, parseInt(i))
            })
        });
        let e = document.querySelectorAll("[data-close]");
        e && e.forEach(e => {
            e.addEventListener("click", this.closeModalOrDrawerOrDrawerFromEvent.bind(this))
        });
        let t = document.querySelectorAll("[data-overlay]");
        t && t.forEach(e => {
            e.addEventListener("click", this.closeModalOrDrawerOrDrawerFromEvent.bind(this))
        })
    },
    showModalOrDrawer: function(e, t) {
        let i = document.getElementById(e);
        if (!i && Woolman.Utils.debugMode && console.warn("No modal/drawer element specified"), !i || i.classList.contains("is-open")) return;
        i.classList.add("initialized", "is-open");
        let s = "MODAL-GRIDY-SLIDER-PARENT" === i.nodeName;
        if (!Woolman.Utils.focusTraps[e]) {
            let o = i.querySelector("[data-contents-wrapper]") || i.querySelector("[data-contents]") || i;
            Woolman.Utils.focusTraps[e] = focusTrap.createFocusTrap(o, {
                clickOutsideDeactivates: !s,
                allowOutsideClick: !!s,
                escapeDeactivates: !0,
                onActivate() {
                    Woolman.Utils.onFocusTrapActivate(i), setTimeout(() => {
                        if (t && s) {
                            let e = i.querySelector("gridy-slider");
                            e.scrollToSlide(t - 1)
                        }
                    }, 250), bodyScrollLock.disableBodyScroll(i)
                },
                checkCanFocusTrap: Woolman.Utils.checkCanFocusTrap,
                onDeactivate() {
                    bodyScrollLock.enableBodyScroll(i), Woolman.Utils.onFocusTrapDeactivate(i)
                }
            })
        }
        Woolman.Utils.focusTraps[e].activate()
    },
    closeModalOrDrawer: function(e) {
        Woolman.Utils.focusTraps[e] && (Woolman.Utils.focusTraps[e].deactivate(), Woolman.Utils.focusTraps[e] = void 0)
    },
    closeModalOrDrawerOrDrawerFromEvent: function(e) {
        e.preventDefault();
        let t = e.currentTarget.closest("[data-parent]"),
            i = t.getAttribute("id");
        t.classList.remove("is-open"), Woolman.ModalsAndDrawers.closeModalOrDrawer(i)
    }
};
class Accordion {
    constructor(e) {
        this.el = e, this.summary = e.querySelector("summary"), this.content = e.querySelector(".content"), this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.summary.addEventListener("click", e => this.onClick(e))
    }
    onClick(e) {
        e.preventDefault(), this.el.style.overflow = "hidden", this.isClosing || !this.el.open ? this.open() : (this.isExpanding || this.el.open) && this.shrink()
    }
    shrink() {
        this.isClosing = !0;
        let e = `${this.el.offsetHeight}px`,
            t = `${this.summary.offsetHeight}px`;
        this.animation && this.animation.cancel(), this.animation = this.el.animate({
            height: [e, t]
        }, {
            duration: 400,
            easing: "ease-in-out"
        }), this.animation.onfinish = () => this.onAnimationFinish(!1), this.animation.oncancel = () => this.isClosing = !1
    }
    open() {
        this.el.style.height = `${this.el.offsetHeight}px`, this.el.open = !0, window.requestAnimationFrame(() => this.expand())
    }
    expand() {
        this.isExpanding = !0;
        let e = `${this.el.offsetHeight}px`,
            t = `${this.summary.offsetHeight+this.content.offsetHeight}px`;
        this.animation && this.animation.cancel(), this.animation = this.el.animate({
            height: [e, t]
        }, {
            duration: 400,
            easing: "ease-out"
        }), this.animation.onfinish = () => this.onAnimationFinish(!0), this.animation.oncancel = () => this.isExpanding = !1
    }
    onAnimationFinish(e) {
        this.el.open = e, this.animation = null, this.isClosing = !1, this.isExpanding = !1, this.el.style.height = this.el.style.overflow = ""
    }
}

function debounce(e, t) {
    let i;
    return (...s) => {
        clearTimeout(i), i = setTimeout(() => e.apply(this, s), t)
    }
}

function throttle(e, t) {
    let i = !1;
    return (...s) => {
        i || (e.apply(this, s), i = !0, setTimeout(() => i = !1, t))
    }
}
Woolman.DetailsAccordions = {
    init: function() {
        document.querySelectorAll("details").forEach(e => {
            new Accordion(e)
        })
    }
}, Woolman.init();
let woolman_window_size = window.innerWidth;
window.addEventListener("resize", debounce(() => {
    window.innerWidth != woolman_window_size && (woolman_window_size = window.innerWidth, document.dispatchEvent(new CustomEvent("woolman:resize")))
}), 250);
class LocalizationForm extends HTMLElement {
    constructor() {
        super(), this.elements = {
            input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
            button: this.querySelector("button"),
            panel: this.querySelector(".disclosure__list-wrapper")
        }, this.elements.button && (this.elements.button.addEventListener("click", this.openSelector.bind(this)), this.elements.button.addEventListener("focusout", this.closeSelector.bind(this)), this.addEventListener("keyup", this.onContainerKeyUp.bind(this))), this.querySelectorAll("a").forEach(e => e.addEventListener("click", this.onItemClick.bind(this)))
    }
    hidePanel() {
        this.elements.button.setAttribute("aria-expanded", "false"), this.elements.panel.setAttribute("hidden", !0)
    }
    onContainerKeyUp(e) {
        "ESCAPE" === e.code.toUpperCase() && (this.hidePanel(), this.elements.button.focus())
    }
    onItemClick(e) {
        e.preventDefault();
        let t = this.querySelector("form");
        this.elements.input.value = e.currentTarget.dataset.value, t && t.submit()
    }
    openSelector() {
        this.elements.button.focus(), this.elements.panel.toggleAttribute("hidden"), this.elements.button.setAttribute("aria-expanded", ("false" === this.elements.button.getAttribute("aria-expanded")).toString())
    }
    closeSelector(e) {
        let t = e.relatedTarget && "BUTTON" === e.relatedTarget.nodeName;
        (null === e.relatedTarget || t) && this.hidePanel()
    }
}
customElements.define("localization-form", LocalizationForm);
class SuperPoweredVideo extends HTMLElement {
    constructor() {
        super(), this.video = this.querySelector("video") || this.querySelector("iframe"), this.container = this.closest(".video-container") || null, this.container && this.attachClickListener(this.closest(".video-container")), "IFRAME" === this.video.nodeName && this.video.src && this.video.src.includes("youtube") && !this.container && this.video.addEventListener("load", this.onVideoLoad.bind(this));
        let e = this.dataset.autoplay || !1;
        if (!e || this.container) return;
        let t = "VIDEO" === this.video.nodeName ? "video" : "iframe",
            i = "VIDEO" === this.video.nodeName ? "shopify" : this.video.src.includes("youtube") ? "youtube" : "vimeo",
            s = new IntersectionObserver(e => {
                e.forEach(e => {
                    e.isIntersecting ? "video" == t ? this.video.play() : "youtube" == i ? this.video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : "vimeo" == i && this.video.contentWindow.postMessage('{"method":"play"}', "*") : "video" == t ? this.video.pause() : "youtube" == i ? this.video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") : "vimeo" == i && this.video.contentWindow.postMessage('{"method":"pause"}', "*")
                })
            }, {
                threshold: .5
            });
        s.observe(this.video)
    }
    attachClickListener(e) {
        e && (e.addEventListener("click", e => {
            this.video.paused ? this.video.play() : this.video.pause()
        }), this.video.onplay = () => {
            e.querySelector("button").hidden = !0
        }, this.video.onpause = () => {
            e.querySelector("button").hidden = !1
        })
    }
    onVideoLoad() {
        this.video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
    }
}
customElements.define("superpowered-video", SuperPoweredVideo);
class GridySlider extends HTMLElement {
    constructor() {
        super(), this.track = this.querySelector(".gridy-track"), this.slides = this.querySelectorAll(".gridy-track > *");
        let e = this.track.childElementCount,
            t = parseInt(this.dataset.iprDesktop, 10) || 1,
            i = parseInt(this.dataset.iprTablet, 10) || t,
            s = parseInt(this.dataset.iprMobile, 10) || 1,
            o = this.dataset.initScrollTo,
            a = void 0 != this.dataset.autoplay && JSON.parse(this.dataset.autoplay),
            n = parseInt(this.dataset.autoplayDelay, 10) || 5e3,
            r = void 0 != this.dataset.thumbnailsFor,
            l = void 0 != this.dataset.indicator && JSON.parse(this.dataset.indicator),
            d = document.getElementById(`thumbnail-${this.id}`);
        if (this.config = {
                slide_count: e,
                current_slide: 0,
                active_slide_offset: 0,
                ipr_desktop: t,
                ipr_tablet: i,
                ipr_mobile: s,
                breakpoint_tablet: 768,
                breakpoint_desktop: 1024,
                arrows: !0,
                autoplay: a || !1,
                autoplay_delay: n,
                timer: null,
                is_thumbnails_slider: r,
                thumbnails_for: void 0,
                thumbnail_slider: d,
                indicator: l
            }, void 0 != o && this.scrollToSlideByID(o), this.config.arrows && (this.buttons = this.querySelectorAll("[data-gridy-arrow]"), this.buttons.forEach(e => {
                e.addEventListener("click", this.onArrowClick.bind(this))
            })), this.config.autoplay && (this.autoplayGridy(), this.addEventListener("mouseenter", this.clearAutoplayTimer), this.addEventListener("mouseleave", this.autoplayGridy), this.addEventListener("touchenter", this.clearAutoplayTimer), this.addEventListener("touchleave", this.autoplayGridy)), this.config.is_thumbnails_slider && (this.config.active_slide_offset = 2, this.config.thumbnails_for = document.getElementById(this.dataset.thumbnailsFor), this.thumbnail = this.querySelectorAll("[data-thumbnail-btn]"), this.thumbnail.forEach(e => {
                e.addEventListener("click", this.onThumbnailClick.bind(this))
            })), this.config.indicator && (this.indicator_dots = this.querySelectorAll("[data-indicator-dot]"), this.indicator_current = this.querySelector("[data-indicator-current]")), !this.config.is_thumbnails_slider) {
            let c;
            this.track.addEventListener("scroll", (function() {
                clearTimeout(c), c = setTimeout(this.afterScrollStops.bind(this), 200)
            }).bind(this))
        }
    }
    afterScrollStops() {
        let e = this.firstSlideInView();
        this.config.current_slide = e, this.setActiveSlide(this.slides[e + this.config.active_slide_offset]), this.config.thumbnail_slider && this.config.thumbnail_slider.scrollToSlide(e)
    }
    autoplayGridy() {
        this.config.timer = setInterval(this.scrollByIPR.bind(this), this.config.autoplay_delay, "next")
    }
    clearAutoplayTimer() {
        clearInterval(this.config.timer), this.config.timer = null
    }
    onThumbnailClick(e) {
        e.preventDefault(), this.config.current_slide = Array.from(e.currentTarget.parentNode.children).indexOf(e.currentTarget), this.config.thumbnails_for.scrollToSlideByID(e.currentTarget.dataset.itemId), this.scrollToSlide(this.config.current_slide)
    }
    onArrowClick(e) {
        this.scrollByIPR(e.currentTarget.dataset.direction)
    }
    scrollByIPR(e) {
        let t = this.getCurrentSlideMultiplier(),
            i = this.config.current_slide;
        "next" === e ? i += t : "prev" === e && (i -= t), i + 1 > this.config.slide_count || this.config.current_slide > 0 && i < 0 ? i = 0 : i < 0 && (i = this.config.slide_count - t), this.config.current_slide = i, this.scrollToSlide(i)
    }
    scrollToSlide(e) {
        if (isNaN(e)) return;
        let t = e - this.config.active_slide_offset,
            i = this.slides[t > 0 ? t : 0];
        this.track.scrollTo({
            left: i.offsetLeft,
            top: i.offsetTop,
            behavior: "smooth"
        }), this.slides.forEach(e => {
            e.classList.remove("active")
        }), this.slides[e].classList.add("active")
    }
    scrollToSlideByID(e) {
        let t = document.getElementById(e),
            i = Array.from(t.parentNode.children).indexOf(t);
        this.scrollToSlide(i)
    }
    setActiveSlide(e) {
        this.slides.forEach(e => {
            e.classList.remove("active")
        }), e.classList.add("active"), this.config.indicator && (this.indicator_current.textContent = this.config.current_slide + 1, this.indicator_dots.forEach(e => {
            e.classList.remove("active")
        }), this.indicator_dots[this.config.current_slide].classList.add("active"))
    }
    getCurrentSlideMultiplier() {
        let e = this.config.ipr_mobile;
        return woolman_window_size >= this.config.breakpoint_desktop ? e = this.config.ipr_desktop : woolman_window_size >= this.config.breakpoint_tablet && (e = this.config.ipr_tablet), e
    }
    firstSlideInView() {
        let e = 0;
        for (let t of this.slides) {
            if (this.isSlideInView(t)) return e;
            ++e
        }
        return this.config.current_slide
    }
    isSlideInView(e) {
        let t = this.track.getBoundingClientRect(),
            i = e.getBoundingClientRect(),
            s = Math.round(i.top) >= Math.floor(t.top) && Math.floor(i.bottom) <= Math.round(t.bottom) && Math.round(i.left) >= Math.floor(t.left) && Math.floor(i.right) <= Math.round(t.right);
        return s
    }
}
customElements.define("gridy-slider", GridySlider);
class QuantityInput extends HTMLElement {
    constructor() {
        super(), this.input = this.querySelector("input"), this.changeEvent = new Event("change", {
            bubbles: !0
        }), this.querySelectorAll("button").forEach(e => e.addEventListener("click", this.onButtonClick.bind(this)))
    }
    onButtonClick(e) {
        e.preventDefault();
        let t = this.input.value;
        "plus" === e.target.name ? this.input.stepUp() : this.input.stepDown(), t !== this.input.value && this.input.dispatchEvent(this.changeEvent)
    }
}
customElements.define("quantity-input", QuantityInput);