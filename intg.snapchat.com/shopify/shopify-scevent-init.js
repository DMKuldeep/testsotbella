(() => {
    var t = {
            86185: t => {
                var e = function(t) {
                    "use strict";
                    var e, r = Object.prototype,
                        n = r.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        i = o.iterator || "@@iterator",
                        a = o.asyncIterator || "@@asyncIterator",
                        c = o.toStringTag || "@@toStringTag";

                    function u(t, e, r) {
                        return Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), t[e]
                    }
                    try {
                        u({}, "")
                    } catch (t) {
                        u = function(t, e, r) {
                            return t[e] = r
                        }
                    }

                    function s(t, e, r, n) {
                        var o = e && e.prototype instanceof y ? e : y,
                            i = Object.create(o.prototype),
                            a = new k(n || []);
                        return i._invoke = function(t, e, r) {
                            var n = l;
                            return function(o, i) {
                                if (n === p) throw new Error("Generator is already running");
                                if (n === d) {
                                    if ("throw" === o) throw i;
                                    return N()
                                }
                                for (r.method = o, r.arg = i;;) {
                                    var a = r.delegate;
                                    if (a) {
                                        var c = S(a, r);
                                        if (c) {
                                            if (c === v) continue;
                                            return c
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if (n === l) throw n = d, r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    n = p;
                                    var u = h(t, e, r);
                                    if ("normal" === u.type) {
                                        if (n = r.done ? d : f, u.arg === v) continue;
                                        return {
                                            value: u.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === u.type && (n = d, r.method = "throw", r.arg = u.arg)
                                }
                            }
                        }(t, r, a), i
                    }

                    function h(t, e, r) {
                        try {
                            return {
                                type: "normal",
                                arg: t.call(e, r)
                            }
                        } catch (t) {
                            return {
                                type: "throw",
                                arg: t
                            }
                        }
                    }
                    t.wrap = s;
                    var l = "suspendedStart",
                        f = "suspendedYield",
                        p = "executing",
                        d = "completed",
                        v = {};

                    function y() {}

                    function g() {}

                    function m() {}
                    var w = {};
                    u(w, i, function() {
                        return this
                    });
                    var x = Object.getPrototypeOf,
                        _ = x && x(x(P([])));
                    _ && _ !== r && n.call(_, i) && (w = _);
                    var b = m.prototype = y.prototype = Object.create(w);

                    function E(t) {
                        ["next", "throw", "return"].forEach(function(e) {
                            u(t, e, function(t) {
                                return this._invoke(e, t)
                            })
                        })
                    }

                    function L(t, e) {
                        var r;
                        this._invoke = function(o, i) {
                            function a() {
                                return new e(function(r, a) {
                                    ! function r(o, i, a, c) {
                                        var u = h(t[o], t, i);
                                        if ("throw" !== u.type) {
                                            var s = u.arg,
                                                l = s.value;
                                            return l && "object" == typeof l && n.call(l, "__await") ? e.resolve(l.__await).then(function(t) {
                                                r("next", t, a, c)
                                            }, function(t) {
                                                r("throw", t, a, c)
                                            }) : e.resolve(l).then(function(t) {
                                                s.value = t, a(s)
                                            }, function(t) {
                                                return r("throw", t, a, c)
                                            })
                                        }
                                        c(u.arg)
                                    }(o, i, r, a)
                                })
                            }
                            return r = r ? r.then(a, a) : a()
                        }
                    }

                    function S(t, r) {
                        var n = t.iterator[r.method];
                        if (n === e) {
                            if (r.delegate = null, "throw" === r.method) {
                                if (t.iterator.return && (r.method = "return", r.arg = e, S(t, r), "throw" === r.method)) return v;
                                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return v
                        }
                        var o = h(n, t.iterator, r.arg);
                        if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
                        var i = o.arg;
                        return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                    }

                    function O(t) {
                        var e = {
                            tryLoc: t[0]
                        };
                        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                    }

                    function j(t) {
                        var e = t.completion || {};
                        e.type = "normal", delete e.arg, t.completion = e
                    }

                    function k(t) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], t.forEach(O, this), this.reset(!0)
                    }

                    function P(t) {
                        if (t) {
                            var r = t[i];
                            if (r) return r.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var o = -1,
                                    a = function r() {
                                        for (; ++o < t.length;)
                                            if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                                        return r.value = e, r.done = !0, r
                                    };
                                return a.next = a
                            }
                        }
                        return {
                            next: N
                        }
                    }

                    function N() {
                        return {
                            value: e,
                            done: !0
                        }
                    }
                    return g.prototype = m, u(b, "constructor", m), u(m, "constructor", g), g.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                    }, t.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t
                    }, t.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, E(L.prototype), u(L.prototype, a, function() {
                        return this
                    }), t.AsyncIterator = L, t.async = function(e, r, n, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new L(s(e, r, n, o), i);
                        return t.isGeneratorFunction(r) ? a : a.next().then(function(t) {
                            return t.done ? t.value : a.next()
                        })
                    }, E(b), u(b, c, "Generator"), u(b, i, function() {
                        return this
                    }), u(b, "toString", function() {
                        return "[object Generator]"
                    }), t.keys = function(t) {
                        var e = [];
                        for (var r in t) e.push(r);
                        return e.reverse(),
                            function r() {
                                for (; e.length;) {
                                    var n = e.pop();
                                    if (n in t) return r.value = n, r.done = !1, r
                                }
                                return r.done = !0, r
                            }
                    }, t.values = P, k.prototype = {
                        constructor: k,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t)
                                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var r = this;

                            function o(n, o) {
                                return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var a = this.tryEntries[i],
                                    c = a.completion;
                                if ("root" === a.tryLoc) return o("end");
                                if (a.tryLoc <= this.prev) {
                                    var u = n.call(a, "catchLoc"),
                                        s = n.call(a, "finallyLoc");
                                    if (u && s) {
                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                    } else if (u) {
                                        if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                    } else {
                                        if (!s) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, e) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var i = o;
                                    break
                                }
                            }
                            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                            var a = i ? i.completion : {};
                            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                        },
                        complete: function(t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                        },
                        finish: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                            }
                        },
                        catch: function(t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var r = this.tryEntries[e];
                                if (r.tryLoc === t) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        j(r)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, r, n) {
                            return this.delegate = {
                                iterator: P(t),
                                resultName: r,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = e), v
                        }
                    }, t
                }(t.exports);
                try {
                    regeneratorRuntime = e
                } catch (t) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
                }
            },
            92207: (t, e, r) => {
                t.exports = r(86185)
            }
        },
        e = {};

    function r(n) {
        var o = e[n];
        if (void 0 !== o) return o.exports;
        var i = e[n] = {
            exports: {}
        };
        return t[n](i, i.exports, r), i.exports
    }
    r.n = (t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }), e
    }), r.d = ((t, e) => {
        for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }), r.o = ((t, e) => Object.prototype.hasOwnProperty.call(t, e)), (() => {
        "use strict";
        var t = r(92207),
            e = r.n(t);

        function n(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }! function() {
            if (!window.__SnapPixel) {
                window.__SnapPixel = {};
                var t = {
                    read1stPartyCookie: function(t) {
                        for (var e = t + "=", r = document.cookie.split(";"), n = r.length - 1; n >= 0; --n) {
                            for (var o = r[n];
                                " " === o.charAt(0);) o = o.substring(1, o.length);
                            if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
                        }
                        return null
                    },
                    hashHandler: function(t) {
                        t((new scpixel.Hashes.SHA256).hex)
                    },
                    loadSha256Script: function() {
                        var t = this;
                        return new Promise(function(e) {
                            var r = !("addEventListener" in document),
                                n = document.createElement("script");
                            n.async = !0, n.src = "https://sc-static.net/js-sha256-v1.min.js", "integrity" in n && "crossOrigin" in n && (n.integrity = "sha384-W4RqaNUbvBdTRc41QQAWDcd2aX9wGruak2WnlXwyjVAlhi56zatCk4e/RSqwrAg6", n.crossOrigin = "anonymous");
                            var o = document.getElementsByTagName("script")[0];
                            o && o.parentNode.insertBefore(n, o), r ? n.attachEvent("load", function() {
                                return t.hashHandler(e)
                            }) : n.addEventListener("load", function() {
                                return t.hashHandler(e)
                            }, !1)
                        })
                    },
                    initialize: function() {
                        if (!window.snaptr) {
                            var t = window.snaptr = function() {
                                t.handleRequest ? t.handleRequest.apply(t, arguments) : t.queue.push(arguments)
                            };
                            t.queue = [];
                            var e = "script",
                                r = document.createElement(e);
                            r.async = !0, r.src = "https://sc-static.net/scevent.min.js";
                            var n = document.getElementsByTagName(e)[0];
                            n.parentNode.insertBefore(r, n)
                        }
                    },
                    getCurrentScript: function() {
                        var t = document.currentScript;
                        if (!t)
                            for (var e = document.getElementsByTagName("script"), r = 0; r < e.length; r++)
                                if (e[r].src && 0 === e[r].src.indexOf("https://intg.snapchat.com/shopify/shopify-scevent-init.js?id=")) return e[r];
                        return t
                    },
                    getUrlParameters: function(t) {
                        var e = {};
                        return t.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, r, n) {
                            e[r] = n
                        }), e
                    },
                    scrapeInitMeta: function() {
                        var t = {};
                        try {
                            var e = window.Shopify.checkout,
                                r = e.phone || e.shipping_address && e.shipping_address.phone || e.billing_address && e.billing_address.phone,
                                n = !!r && r.replace(/[^0-9]/g, ""),
                                o = e.email;
                            o && (t.user_email = o), n && (t.user_phone_number = n)
                        } catch (t) {}
                        return t
                    },
                    trackStoreSession: function() {
                        var r, o = (r = e().mark(function r() {
                            var n, o, i, a, c, u, s;
                            return e().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.scrapeInitMeta(), e.prev = 1, e.next = 4, this.loadSha256Script();
                                    case 4:
                                        o = e.sent, i = t.getCurrentScript(), a = t.getUrlParameters(i.src).id, c = n.user_email ? o(n.user_email) : "", u = n.user_phone_number ? o(n.user_phone_number) : "", s = t.read1stPartyCookie("_scid"), window.snaptr("init", a, n), fetch("https://tr.snapchat.com/scs/shopify", {
                                            method: "POST",
                                            body: "pid=".concat(a, "&u_hem=").concat(c, "&u_hpn=").concat(u, "&u_c1=").concat(s),
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded"
                                            }
                                        }), e.next = 16;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }, r, this, [
                                [1, 14]
                            ])
                        }), function() {
                            var t = this,
                                e = arguments;
                            return new Promise(function(o, i) {
                                var a = r.apply(t, e);

                                function c(t) {
                                    n(a, o, i, c, u, "next", t)
                                }

                                function u(t) {
                                    n(a, o, i, c, u, "throw", t)
                                }
                                c(void 0)
                            })
                        });
                        return function() {
                            return o.apply(this, arguments)
                        }
                    }()
                };
                t.initialize(), t.trackStoreSession()
            }
        }()
    })()
})();