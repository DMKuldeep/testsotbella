/*!
 * tabbable 5.2.1
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
! function(e, t) {
    var n, o;
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (n = (e = "undefined" != typeof globalThis ? globalThis : e || self).tabbable, t(o = e.tabbable = {}), o.noConflict = function() {
        return e.tabbable = n, o
    })
}(this, function(e) {
    "use strict";
    var t = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
        n = t.join(","),
        o = "undefined" == typeof Element ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        r = function e(t, r, a) {
            var i = Array.prototype.slice.apply(t.querySelectorAll(n));
            return r && o.call(t, n) && i.unshift(t), i = i.filter(a)
        },
        a = function e(t) {
            var n, o = parseInt(t.getAttribute("tabindex"), 10);
            return isNaN(o) ? "true" === (n = t).contentEditable || ("AUDIO" === t.nodeName || "VIDEO" === t.nodeName || "DETAILS" === t.nodeName) && null === t.getAttribute("tabindex") ? 0 : t.tabIndex : o
        },
        i = function e(t, n) {
            return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
        },
        u = function e(t) {
            return "INPUT" === t.tagName
        },
        c = function e(t, n) {
            for (var o = 0; o < t.length; o++)
                if (t[o].checked && t[o].form === n) return t[o]
        },
        l = function e(t) {
            if (!t.name) return !0;
            var n, o = t.form || t.ownerDocument,
                r = function e(t) {
                    return o.querySelectorAll('input[type="radio"][name="' + t + '"]')
                };
            if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) n = r(window.CSS.escape(t.name));
            else try {
                n = r(t.name)
            } catch (a) {
                return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1
            }
            var i = c(n, t.form);
            return !i || i === t
        },
        s = function e(t) {
            var n;
            return u(n = t) && "radio" === n.type && !l(t)
        },
        f = function e(t, n) {
            if ("hidden" === getComputedStyle(t).visibility) return !0;
            var r = o.call(t, "details>summary:first-of-type") ? t.parentElement : t;
            if (o.call(r, "details:not([open]) *")) return !0;
            if (n && "full" !== n) {
                if ("non-zero-area" === n) {
                    var a = t.getBoundingClientRect(),
                        i = a.width,
                        u = a.height;
                    return 0 === i && 0 === u
                }
            } else
                for (; t;) {
                    if ("none" === getComputedStyle(t).display) return !0;
                    t = t.parentElement
                }
            return !1
        },
        d = function e(t) {
            if (u(t) || "SELECT" === t.tagName || "TEXTAREA" === t.tagName || "BUTTON" === t.tagName)
                for (var n = t.parentElement; n;) {
                    if ("FIELDSET" === n.tagName && n.disabled) {
                        for (var o = 0; o < n.children.length; o++) {
                            var r = n.children.item(o);
                            if ("LEGEND" === r.tagName) {
                                if (r.contains(t)) return !1;
                                break
                            }
                        }
                        return !0
                    }
                    n = n.parentElement
                }
            return !1
        },
        b = function e(t, n) {
            var o, r;
            return !(n.disabled || u(o = n) && "hidden" === o.type || f(n, t.displayCheck) || "DETAILS" === (r = n).tagName && Array.prototype.slice.apply(r.children).some(function(e) {
                return "SUMMARY" === e.tagName
            }) || d(n))
        },
        p = function e(t, n) {
            return !(!b(t, n) || s(n) || 0 > a(n))
        },
        v = function e(t, n) {
            var o = [],
                u = [];
            return r(t, (n = n || {}).includeContainer, p.bind(null, n)).forEach(function(e, t) {
                var n = a(e);
                0 === n ? o.push(e) : u.push({
                    documentOrder: t,
                    tabIndex: n,
                    node: e
                })
            }), u.sort(i).map(function(e) {
                return e.node
            }).concat(o)
        },
        y = function e(t, n) {
            return r(t, (n = n || {}).includeContainer, b.bind(null, n))
        },
        m = function e(t, r) {
            if (r = r || {}, !t) throw Error("No node provided");
            return !1 !== o.call(t, n) && p(r, t)
        },
        h = t.concat("iframe").join(","),
        $ = function e(t, n) {
            if (n = n || {}, !t) throw Error("No node provided");
            return !1 !== o.call(t, h) && b(n, t)
        };
    e.focusable = y, e.isFocusable = $, e.isTabbable = m, e.tabbable = v, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
/*!
 * focus-trap 6.7.3
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
function(e, t) {
    var n, o;
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("tabbable")) : "function" == typeof define && define.amd ? define(["exports", "tabbable"], t) : (n = (e = "undefined" != typeof globalThis ? globalThis : e || self).focusTrap, t(o = e.focusTrap = {}, e.tabbable), o.noConflict = function() {
        return e.focusTrap = n, o
    })
}(this, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var r, a = (r = [], {
            activateTrap: function e(t) {
                if (r.length > 0) {
                    var n = r[r.length - 1];
                    n !== t && n.pause()
                }
                var o = r.indexOf(t); - 1 === o || r.splice(o, 1), r.push(t)
            },
            deactivateTrap: function e(t) {
                var n = r.indexOf(t); - 1 !== n && r.splice(n, 1), r.length > 0 && r[r.length - 1].unpause()
            }
        }),
        i = function e(t) {
            return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
        },
        u = function e(t) {
            return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
        },
        c = function e(t) {
            return "Tab" === t.key || 9 === t.keyCode
        },
        l = function e(t) {
            return setTimeout(t, 0)
        },
        s = function e(t, n) {
            var o = -1;
            return t.every(function(e, t) {
                return !n(e) || (o = t, !1)
            }), o
        },
        f = function e(t) {
            for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
            return "function" == typeof t ? t.apply(void 0, o) : t
        },
        d = function e(t) {
            return t.target.shadowRoot && "function" == typeof t.composedPath ? t.composedPath()[0] : t.target
        },
        b = function e(r, b) {
            var p, v = (null == b ? void 0 : b.document) || document,
                y = function e(t) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? n(Object(a), !0).forEach(function(e) {
                            o(t, e, a[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                        })
                    }
                    return t
                }({
                    returnFocusOnDeactivate: !0,
                    escapeDeactivates: !0,
                    delayInitialFocus: !0
                }, b),
                m = {
                    containers: [],
                    tabbableGroups: [],
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: !1,
                    paused: !1,
                    delayInitialFocusTimer: void 0
                },
                h = function e(t, n, o) {
                    return t && void 0 !== t[n] ? t[n] : y[o || n]
                },
                $ = function e(t) {
                    return !!(t && m.containers.some(function(e) {
                        return e.contains(t)
                    }))
                },
                g = function e(t) {
                    var n = y[t];
                    if ("function" == typeof n) {
                        for (var o = arguments.length, r = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) r[a - 1] = arguments[a];
                        n = n.apply(void 0, r)
                    }
                    if (!n) {
                        if (void 0 === n || !1 === n) return n;
                        throw Error("`".concat(t, "` was specified but was not a node, or did not return a node"))
                    }
                    var i = n;
                    if ("string" == typeof n && !(i = v.querySelector(n))) throw Error("`".concat(t, "` as selector refers to no known node"));
                    return i
                },
                _ = function e() {
                    var t = g("initialFocus");
                    if (!1 === t) return !1;
                    if (void 0 === t) {
                        if ($(v.activeElement)) t = v.activeElement;
                        else {
                            var n = m.tabbableGroups[0];
                            t = n && n.firstTabbableNode || g("fallbackFocus")
                        }
                    }
                    if (!t) throw Error("Your focus-trap needs to have at least one focusable element");
                    return t
                },
                E = function e() {
                    if (m.tabbableGroups = m.containers.map(function(e) {
                            var n = t.tabbable(e),
                                o = t.focusable(e);
                            if (n.length > 0) return {
                                container: e,
                                firstTabbableNode: n[0],
                                lastTabbableNode: n[n.length - 1],
                                nextTabbableNode: function e(n) {
                                    var r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                        a = o.findIndex(function(e) {
                                            return e === n
                                        });
                                    return r ? o.slice(a + 1).find(function(e) {
                                        return t.isTabbable(e)
                                    }) : o.slice(0, a).reverse().find(function(e) {
                                        return t.isTabbable(e)
                                    })
                                }
                            }
                        }).filter(function(e) {
                            return !!e
                        }), m.tabbableGroups.length <= 0 && !g("fallbackFocus")) throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
                },
                T = function e(t) {
                    if (!1 !== t && t !== v.activeElement) {
                        if (!t || !t.focus) {
                            e(_());
                            return
                        }
                        t.focus({
                            preventScroll: !!y.preventScroll
                        }), m.mostRecentlyFocusedNode = t, i(t) && t.select()
                    }
                },
                w = function e(t) {
                    var n = g("setReturnFocus", t);
                    return n || !1 !== n && t
                },
                S = function e(n) {
                    var o = d(n);
                    if (!$(o)) {
                        if (f(y.clickOutsideDeactivates, n)) {
                            p.deactivate({
                                returnFocus: y.returnFocusOnDeactivate && !t.isFocusable(o)
                            });
                            return
                        }
                        f(y.allowOutsideClick, n) || n.preventDefault()
                    }
                },
                F = function e(t) {
                    var n = d(t),
                        o = $(n);
                    o || n instanceof Document ? o && (m.mostRecentlyFocusedNode = n) : (t.stopImmediatePropagation(), T(m.mostRecentlyFocusedNode || _()))
                },
                N = function e(n) {
                    var o = d(n);
                    E();
                    var r = null;
                    if (m.tabbableGroups.length > 0) {
                        var a = s(m.tabbableGroups, function(e) {
                                return e.container.contains(o)
                            }),
                            i = a >= 0 ? m.tabbableGroups[a] : void 0;
                        if (a < 0) r = n.shiftKey ? m.tabbableGroups[m.tabbableGroups.length - 1].lastTabbableNode : m.tabbableGroups[0].firstTabbableNode;
                        else if (n.shiftKey) {
                            var u = s(m.tabbableGroups, function(e) {
                                return o === e.firstTabbableNode
                            });
                            if (u < 0 && (i.container === o || t.isFocusable(o) && !t.isTabbable(o) && !i.nextTabbableNode(o, !1)) && (u = a), u >= 0) {
                                var c = 0 === u ? m.tabbableGroups.length - 1 : u - 1;
                                r = m.tabbableGroups[c].lastTabbableNode
                            }
                        } else {
                            var l = s(m.tabbableGroups, function(e) {
                                return o === e.lastTabbableNode
                            });
                            if (l < 0 && (i.container === o || t.isFocusable(o) && !t.isTabbable(o) && !i.nextTabbableNode(o)) && (l = a), l >= 0) {
                                var f = l === m.tabbableGroups.length - 1 ? 0 : l + 1;
                                r = m.tabbableGroups[f].firstTabbableNode
                            }
                        }
                    } else r = g("fallbackFocus");
                    r && (n.preventDefault(), T(r))
                },
                k = function e(t) {
                    if (u(t) && !1 !== f(y.escapeDeactivates, t)) {
                        t.preventDefault(), p.deactivate();
                        return
                    }
                    if (c(t)) {
                        N(t);
                        return
                    }
                },
                x = function e(t) {
                    if (!f(y.clickOutsideDeactivates, t)) {
                        var n = d(t);
                        $(n) || f(y.allowOutsideClick, t) || (t.preventDefault(), t.stopImmediatePropagation())
                    }
                },
                D = function e() {
                    if (m.active) return a.activateTrap(p), m.delayInitialFocusTimer = y.delayInitialFocus ? l(function() {
                        T(_())
                    }) : T(_()), v.addEventListener("focusin", F, !0), v.addEventListener("mousedown", S, {
                        capture: !0,
                        passive: !1
                    }), v.addEventListener("touchstart", S, {
                        capture: !0,
                        passive: !1
                    }), v.addEventListener("click", x, {
                        capture: !0,
                        passive: !1
                    }), v.addEventListener("keydown", k, {
                        capture: !0,
                        passive: !1
                    }), p
                },
                I = function e() {
                    if (m.active) return v.removeEventListener("focusin", F, !0), v.removeEventListener("mousedown", S, !0), v.removeEventListener("touchstart", S, !0), v.removeEventListener("click", x, !0), v.removeEventListener("keydown", k, !0), p
                };
            return (p = {
                activate: function e(t) {
                    if (m.active) return this;
                    var n = h(t, "onActivate"),
                        o = h(t, "onPostActivate"),
                        r = h(t, "checkCanFocusTrap");
                    r || E(), m.active = !0, m.paused = !1, m.nodeFocusedBeforeActivation = v.activeElement, n && n();
                    var a = function e() {
                        r && E(), D(), o && o()
                    };
                    return r ? (r(m.containers.concat()).then(a, a), this) : (a(), this)
                },
                deactivate: function e(t) {
                    if (!m.active) return this;
                    clearTimeout(m.delayInitialFocusTimer), m.delayInitialFocusTimer = void 0, I(), m.active = !1, m.paused = !1, a.deactivateTrap(p);
                    var n = h(t, "onDeactivate"),
                        o = h(t, "onPostDeactivate"),
                        r = h(t, "checkCanReturnFocus");
                    n && n();
                    var i = h(t, "returnFocus", "returnFocusOnDeactivate"),
                        u = function e() {
                            l(function() {
                                i && T(w(m.nodeFocusedBeforeActivation)), o && o()
                            })
                        };
                    return i && r ? (r(w(m.nodeFocusedBeforeActivation)).then(u, u), this) : (u(), this)
                },
                pause: function e() {
                    return m.paused || !m.active || (m.paused = !0, I()), this
                },
                unpause: function e() {
                    return m.paused && m.active && (m.paused = !1, E(), D()), this
                },
                updateContainerElements: function e(t) {
                    var n = [].concat(t).filter(Boolean);
                    return m.containers = n.map(function(e) {
                        return "string" == typeof e ? v.querySelector(e) : e
                    }), m.active && E(), this
                }
            }).updateContainerElements(r), p
        };
    e.createFocusTrap = b, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    if ("function" == typeof define && define.amd) define(["exports"], t);
    else if ("undefined" != typeof exports) t(exports);
    else {
        var n = {
            exports: {}
        };
        t(n.exports), e.bodyScrollLock = n.exports
    }
}(this, function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var t = !1;
    if ("undefined" != typeof window) {
        var n = {
            get passive() {
                t = !0;
                return
            }
        };
        window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n)
    }
    var o = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
        r = [],
        a = void 0,
        i = void 0,
        u = void 0,
        c = function e(t) {
            if (void 0 === u) {
                var n = !!t && !0 === t.reserveScrollBarGap,
                    o = window.innerWidth - document.documentElement.clientWidth;
                if (n && o > 0) {
                    var r = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
                    u = document.body.style.paddingRight, document.body.style.paddingRight = r + o + "px"
                }
            }
            void 0 === a && (a = document.body.style.overflow, document.body.style.overflow = "hidden")
        },
        l = function e() {
            void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== a && (document.body.style.overflow = a, a = void 0)
        },
        s = function e() {
            if (void 0 !== i) {
                var t = -parseInt(document.body.style.top, 10),
                    n = -parseInt(document.body.style.left, 10);
                document.body.style.position = i.position, document.body.style.top = i.top, document.body.style.left = i.left, window.scrollTo(n, t), i = void 0
            }
        };
    e.disableBodyScroll = function e(t, n) {
        if (!t) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }!r.some(function(e) {
            return e.targetElement === t
        }) && (r = [].concat(function e(t) {
            if (!Array.isArray(t)) return Array.from(t);
            for (var n = 0, o = Array(t.length); n < t.length; n++) o[n] = t[n];
            return o
        }(r), [{
            targetElement: t,
            options: n || {}
        }]), o ? window.requestAnimationFrame(function() {
            if (void 0 === i) {
                i = {
                    position: document.body.style.position,
                    top: document.body.style.top,
                    left: document.body.style.left
                };
                var e = window,
                    t = e.scrollY,
                    n = e.scrollX,
                    o = e.innerHeight;
                document.body.style.position = "fixed", document.body.style.top = -t + "px", document.body.style.left = -n + "px", setTimeout(function() {
                    return window.requestAnimationFrame(function() {
                        var e = o - window.innerHeight;
                        e && t >= o && (document.body.style.top = -(t + e))
                    })
                }, 300)
            }
        }) : c(n), o && (document.body.style.overflow = "hidden"))
    }, e.clearAllBodyScrollLocks = function e() {
        o && (document.body.style.overflow = "auto"), o ? s() : l(), r = []
    }, e.enableBodyScroll = function e(t) {
        if (!t) {
            console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
            return
        }
        r = r.filter(function(e) {
            return e.targetElement !== t
        }), o && (document.body.style.overflow = "auto"), o ? s() : l()
    }
});