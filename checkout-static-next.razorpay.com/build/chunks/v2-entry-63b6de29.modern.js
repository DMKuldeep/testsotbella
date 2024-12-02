"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [1171], {
        51171: (e, t, a) => {
            a.r(t), a.d(t, {
                get: () => c,
                setCookieDeprecationLabel: () => i,
                unset: () => o
            });
            var n = a(48422);

            function o(e) {
                try {
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
                } catch {}
            }

            function c(e) {
                try {
                    for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                        for (var o = a[n];
                            " " === o.charAt(0);) o = o.substring(1, o.length);
                        if (0 === o.indexOf(t)) return o.substring(t.length, o.length)
                    }
                } catch {}
            }
            const i = () => {
                "cookieDeprecationLabel" in navigator && navigator.cookieDeprecationLabel.getValue().then((e => {
                    (0, n.cl)({
                        event: "cookie_label_set",
                        data: {
                            label: e
                        }
                    })
                })).catch((() => {
                    (0, n.cl)({
                        event: "cookie_label_set",
                        data: {
                            label: ""
                        }
                    })
                }))
            }
        }
    }
]);