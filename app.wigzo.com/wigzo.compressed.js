if (typeof window.wigzo !== "function") {
    var wigzo_x = window.wigzo;
    window.wigzo = function() {
        (window.wigzo.q = window.wigzo.q || []).push(arguments);
    };
    for (var wigzo_k in wigzo_x) {
        window.wigzo[wigzo_k] = wigzo_x[k];
    }
}
window.wigzo = (function(a) {
    a.html = {};
    a.html.POST_HTML_PERMISSION_MODAL = '<div style="position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(0, 0, 0, 0.32); z-index: 9999999">             <div style="text-align: center;display:table-cell;vertical-align:middle;">                 <div style="position:absolute;top:50%;left:50%;max-width: 400px;transform:translate(-50%,-50%);text-align: center;display:inline-block;width: 100%;box-shadow: none !important;outline: none !important;border: 0 !important;">                     <center>                         <div style="color: #000;padding: 15px 15px 0 15px !important;background: #fff;border-radius: 6px 6px 0 0;border: 0 !important;outline: none !important;box-shadow: none !important;">                             <div style="font-size: 25px;line-height: normal;border: 0 !important;text-decoration: none !important;color: #263238 !important;margin: 0 !important;padding: 0 !important;outline: none !important;box-shadow: none !important;">__THANKS_FOR_SUB__</div>                         </div>                                                 <div style="text-align: right !important;display: block !important;position: relative !important;width: auto !important;background: #fff;border: 0 !important;box-shadow: none !important;padding: 5px;margin-top: -1px;">                                     <a href="javascript:;" class="wigzologoclickable" target="_blank" style="display: block !important; text-decoration: none !important;cursor: pointer !important;color: #95A5A6 !important;font-size: 8px !important;line-height: normal;padding: 6px;font-weight: 100 !important;font-family: sans-serif;text-transform: uppercase !important;letter-spacing: 1px;"> Powered by #POWEREDBY#                                         <img src="#POWEREDBYLOGO#" style="display: inline-block !important; height: 18px !important;vertical-align: middle !important;padding-right: 0 !important;width: 18px !important;margin-top: -1px;">                                     </a>                                 </div>                                                  <a href="javascript:void(0);" class="wig-autoremove" style="color: #fff;text-decoration: none;font-size: 20px;border: 0;box-shadow: none;outline: none;">                             <div style="background: #263238;padding: 20px;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;">__CLOSE_NOW_SUB__</div>                         </a>                     </center>                 </div>             </div>         </div>';
    a.getMarkup = function(b) {
        b = b.replace("#HOST#", a.APP);
        b = a.__(b);
        b = b.replace("#POWEREDBYLOGO#", a.ENTITY_FAV_ICON_DARK);
        b = b.replace("#POWEREDBY#", a.ENTITY_NAME);
        return b;
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.l10n = {};
    a._ = function(c) {
        var e = "en";
        var d = a.$("html").attr("lang");
        if (!!d) {
            e = d.substr(0, 2);
        }
        e = e.toLowerCase();
        a.consoleDebug("Using Language: " + e);
        var b = {};
        if (a.l10n.hasOwnProperty(e)) {
            b = a.l10n[e];
        }
        if (b.hasOwnProperty(c)) {
            return b[c];
        }
        if (e == "en") {
            a.consoleDebug("No translation for - " + c + " - in " + e + ", Giving up!");
            return "";
        }
        a.consoleDebug("No translation for - " + c + " - in " + e + ", trying English");
        if (a.l10n.hasOwnProperty("en")) {
            b = a.l10n.en;
        }
        if (b.hasOwnProperty(c)) {
            return b[c];
        }
        a.consoleDebug("No translation for - " + c + " - in English, returning empty");
        return "";
    };
    a.__ = function(f) {
        var d = /__[A-Z_]+__/g;
        var b;
        var e = {};
        while (b = d.exec(f)) {
            e[b[0]] = true;
        }
        for (var c in e) {
            f = f.replace(new RegExp(c, "g"), a._(c));
        }
        return f;
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    window.addEventListener("message", function(b) {
        if (b.data.type === "HTTPS" && b.data.registrationData.iframe) {
            var c = b.data;
            a.mapBrowserPushRegistrationId(c.registrationData.registrationId, c.registrationData.browserType, true, "");
            window.removeEventListener("message", function() {
                console.log("Removed iframe message listener after registeration of the browser");
            }, false);
        }
    }, false);
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.l10n.en = {
        "__LOGIN.EnterValidEmailAddress__": "Enter valid Email Address",
        "__LOGIN.EnteryourPassword__": "Enter Your password",
        "__LOGIN.EnterEmailAddress__": "Enter your email address",
        "__FORGETPASSWORD.EnterEmailinproperformat__": "Enter email in proper format",
        "__FORGETPASSWORD.EnterYourEmailId__": "Enter Your Email id",
        "__REGISTRATION.Enterfirstname__": "Enter your first name",
        "__REGISTRATION.Entermobilenumber__": "Enter your mobile number",
        "__REGISTRATION.Entercorrectmobilenumber__": "Enter correct mobile number",
        __THANKS_FOR_SUB__: "Thank you for subscribing to push notification",
        __INCOMPLETE_SUB__: "You have not completed the subscription for notification",
        __CLOSE_NOW_SUB__: "Close Now",
        __RESUME_SUB__: "Resume Subscription",
        __NOT_NOW_SUB__: "Not Now",
        __EXITINTENT_ENTEREMAILADRESS__: "Enter Email Address Here",
        __EXITINTENT_INVALIDEMAIL__: "Enter valid Email Address",
        __EXITINTENT_ENTERPHONENO__: "Enter Phone Here",
        __EXITINTENT_INVALIDPHONE__: "Enter correct mobile number",
        __SEGMENTATION_ENTERSEGMENTNAME__: "Enter Segment Name Here",
        __SEGMENTATION_ENTERSEGMENTDESCRIPTION__: "Enter Segment Description"
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.l10n.pt = {
        "__LOGIN.EnterValidEmailAddress__": "Digite um endereço de e-mail válido",
        "__LOGIN.EnteryourPassword__": "Coloque sua senha",
        "__LOGIN.EnterEmailAddress__": "Insira o seu endereço de email",
        "__FORGETPASSWORD.EnterEmailinproperformat__": "Insira o e-mail no formato apropriado",
        "__FORGETPASSWORD.EnterYourEmailId__": "Digite seu ID de e-mail",
        "__REGISTRATION.Enterfirstname__": "Digite seu primeiro nome",
        "__REGISTRATION.Entermobilenumber__": "Introduza o seu número de telemóvel",
        "__REGISTRATION.Entercorrectmobilenumber__": "Introduza o número de telemóvel correcto",
        __THANKS_FOR_SUB__: "Obrigado por subscrever nossas notificações push!",
        __INCOMPLETE_SUB__: "Você não concluiu ainda a subscrição das notificações",
        __CLOSE_NOW_SUB__: "Fechar",
        __RESUME_SUB__: "Resuma subscrição",
        __NOT_NOW_SUB__: "Agora não",
        __EXITINTENT_ENTEREMAILADRESS__: "Digite o endereço de e-mail aqui",
        __EXITINTENT_INVALIDEMAIL__: "Digite um endereço de e-mail válido",
        __EXITINTENT_ENTERPHONENO__: "Digite o telefone aqui",
        __EXITINTENT_INVALIDPHONE__: "Introduza o número de telemóvel correcto",
        __SEGMENTATION_ENTERSEGMENTNAME__: "Digite o nome do segmento aqui",
        __SEGMENTATION_ENTERSEGMENTDESCRIPTION__: "Digite a Descrição do Segmento"
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.l10n.ur = {
        "__LOGIN.EnterValidEmailAddress__": "درست ای میل ایڈریس درج کریں",
        "__LOGIN.EnteryourPassword__": "اپنا پاس ورڈ درج کریں",
        "__LOGIN.EnterEmailAddress__": "ای میل ایڈریس درج کریں",
        "__FORGETPASSWORD.EnterEmailinproperformat__": "مناسب شکل میں ای میل داخل کریں",
        "__FORGETPASSWORD.EnterYourEmailId__": "اپنا ای میل آئی ڈی درج کریں",
        "__REGISTRATION.Enterfirstname__": "اپنا پہلا نام درج کریں",
        "__REGISTRATION.Entermobilenumber__": "اپنا موبائل نمبر درج کیجئے",
        "__REGISTRATION.Entercorrectmobilenumber__": "صحیح موبائل نمبر درج کریں",
        __THANKS_FOR_SUB__: "پش نوٹیفکیشن کو سبسکرائب کرنے کے لئے آپ کا شکریہ",
        __INCOMPLETE_SUB__: "آپ نے نوٹفیکشن کے لئے سبسکرائب نہیں کی ہے",
        __CLOSE_NOW_SUB__: "بند کریں",
        __RESUME_SUB__: "سبسکرپشن جاری رکھیں",
        __NOT_NOW_SUB__: "ابھی نہیں",
        __EXITINTENT_ENTEREMAILADRESS__: "یہاں ای میل پتہ درج کریں",
        __EXITINTENT_INVALIDEMAIL__: "درست ای میل ایڈریس درج کریں",
        __EXITINTENT_ENTERPHONENO__: "یہاں فون درج کریں",
        __EXITINTENT_INVALIDPHONE__: "صحیح موبائل نمبر درج کریں",
        __SEGMENTATION_ENTERSEGMENTNAME__: "یہاں سیکشن کا نام درج کریں",
        __SEGMENTATION_ENTERSEGMENTDESCRIPTION__: "سیکشن تفصیل درج کریں"
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    /*!
     * jQuery JavaScript Library v1.10.2
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-07-03T13:48Z
     */
    (function(a4, aH) {
        var aj, z, aD = typeof aH,
            aM = a4.location,
            o = a4.document,
            bY = o.documentElement,
            bk = a4.jQuery,
            J = a4.$,
            ab = {},
            a8 = [],
            v = "1.10.2",
            aJ = a8.concat,
            ap = a8.push,
            a6 = a8.slice,
            aN = a8.indexOf,
            B = ab.toString,
            W = ab.hasOwnProperty,
            aR = v.trim,
            bL = function(e, b6) {
                return new bL.fn.init(e, b6, z);
            },
            bC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ad = /\S+/g,
            E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            bj = /^[\],:{}\s]*$/,
            bm = /(?:^|:|,)(?:\s*\[)+/g,
            bI = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            a0 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            bU = /^-ms-/,
            aW = /-([\da-z])/gi,
            N = function(e, b6) {
                return b6.toUpperCase();
            },
            bZ = function(e) {
                if (o.addEventListener || e.type === "load" || o.readyState === "complete") {
                    bn();
                    bL.ready();
                }
            },
            bn = function() {
                if (o.addEventListener) {
                    o.removeEventListener("DOMContentLoaded", bZ, false);
                    a4.removeEventListener("load", bZ, false);
                } else {
                    o.detachEvent("onreadystatechange", bZ);
                    a4.detachEvent("onload", bZ);
                }
            };
        bL.fn = bL.prototype = {
            jquery: v,
            constructor: bL,
            init: function(e, b8, b7) {
                var b6, b9;
                if (!e) {
                    return this;
                }
                if (typeof e === "string") {
                    if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                        b6 = [null, e, null];
                    } else {
                        b6 = bt.exec(e);
                    }
                    if (b6 && (b6[1] || !b8)) {
                        if (b6[1]) {
                            b8 = b8 instanceof bL ? b8[0] : b8;
                            bL.merge(this, bL.parseHTML(b6[1], b8 && b8.nodeType ? b8.ownerDocument || b8 : o, true));
                            if (b.test(b6[1]) && bL.isPlainObject(b8)) {
                                for (b6 in b8) {
                                    if (bL.isFunction(this[b6])) {
                                        this[b6](b8[b6]);
                                    } else {
                                        this.attr(b6, b8[b6]);
                                    }
                                }
                            }
                            return this;
                        } else {
                            b9 = o.getElementById(b6[2]);
                            if (b9 && b9.parentNode) {
                                if (b9.id !== b6[2]) {
                                    return b7.find(e);
                                }
                                this.length = 1;
                                this[0] = b9;
                            }
                            this.context = o;
                            this.selector = e;
                            return this;
                        }
                    } else {
                        if (!b8 || b8.jquery) {
                            return (b8 || b7).find(e);
                        } else {
                            return this.constructor(b8).find(e);
                        }
                    }
                } else {
                    if (e.nodeType) {
                        this.context = this[0] = e;
                        this.length = 1;
                        return this;
                    } else {
                        if (bL.isFunction(e)) {
                            return b7.ready(e);
                        }
                    }
                }
                if (e.selector !== aH) {
                    this.selector = e.selector;
                    this.context = e.context;
                }
                return bL.makeArray(e, this);
            },
            selector: "",
            length: 0,
            toArray: function() {
                return a6.call(this);
            },
            get: function(e) {
                return e == null ? this.toArray() : (e < 0 ? this[this.length + e] : this[e]);
            },
            pushStack: function(e) {
                var b6 = bL.merge(this.constructor(), e);
                b6.prevObject = this;
                b6.context = this.context;
                return b6;
            },
            each: function(b6, e) {
                return bL.each(this, b6, e);
            },
            ready: function(e) {
                bL.ready.promise().done(e);
                return this;
            },
            slice: function() {
                return this.pushStack(a6.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(b7) {
                var e = this.length,
                    b6 = +b7 + (b7 < 0 ? e : 0);
                return this.pushStack(b6 >= 0 && b6 < e ? [this[b6]] : []);
            },
            map: function(e) {
                return this.pushStack(bL.map(this, function(b7, b6) {
                    return e.call(b7, b6, b7);
                }));
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: ap,
            sort: [].sort,
            splice: [].splice
        };
        bL.fn.init.prototype = bL.fn;
        bL.extend = bL.fn.extend = function() {
            var e, cb, b6, b7, ce, cc, ca = arguments[0] || {},
                b9 = 1,
                b8 = arguments.length,
                cd = false;
            if (typeof ca === "boolean") {
                cd = ca;
                ca = arguments[1] || {};
                b9 = 2;
            }
            if (typeof ca !== "object" && !bL.isFunction(ca)) {
                ca = {};
            }
            if (b8 === b9) {
                ca = this;
                --b9;
            }
            for (; b9 < b8; b9++) {
                if ((ce = arguments[b9]) != null) {
                    for (b7 in ce) {
                        e = ca[b7];
                        b6 = ce[b7];
                        if (ca === b6) {
                            continue;
                        }
                        if (cd && b6 && (bL.isPlainObject(b6) || (cb = bL.isArray(b6)))) {
                            if (cb) {
                                cb = false;
                                cc = e && bL.isArray(e) ? e : [];
                            } else {
                                cc = e && bL.isPlainObject(e) ? e : {};
                            }
                            ca[b7] = bL.extend(cd, cc, b6);
                        } else {
                            if (b6 !== aH) {
                                ca[b7] = b6;
                            }
                        }
                    }
                }
            }
            return ca;
        };
        bL.extend({
            expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
            noConflict: function(e) {
                if (a4.$ === bL) {
                    a4.$ = J;
                }
                if (e && a4.jQuery === bL) {
                    a4.jQuery = bk;
                }
                return bL;
            },
            isReady: false,
            readyWait: 1,
            holdReady: function(e) {
                if (e) {
                    bL.readyWait++;
                } else {
                    bL.ready(true);
                }
            },
            ready: function(e) {
                if (e === true ? --bL.readyWait : bL.isReady) {
                    return;
                }
                if (!o.body) {
                    return setTimeout(bL.ready);
                }
                bL.isReady = true;
                if (e !== true && --bL.readyWait > 0) {
                    return;
                }
                aj.resolveWith(o, [bL]);
                if (bL.fn.trigger) {
                    bL(o).trigger("ready").off("ready");
                }
            },
            isFunction: function(e) {
                return bL.type(e) === "function";
            },
            isArray: Array.isArray || function(e) {
                return bL.type(e) === "array";
            },
            isWindow: function(e) {
                return e != null && e == e.window;
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            },
            type: function(e) {
                if (e == null) {
                    return String(e);
                }
                return typeof e === "object" || typeof e === "function" ? ab[B.call(e)] || "object" : typeof e;
            },
            isPlainObject: function(b8) {
                var b6;
                if (!b8 || bL.type(b8) !== "object" || b8.nodeType || bL.isWindow(b8)) {
                    return false;
                }
                try {
                    if (b8.constructor && !W.call(b8, "constructor") && !W.call(b8.constructor.prototype, "isPrototypeOf")) {
                        return false;
                    }
                } catch (b7) {
                    return false;
                }
                if (bL.support.ownLast) {
                    for (b6 in b8) {
                        return W.call(b8, b6);
                    }
                }
                for (b6 in b8) {}
                return b6 === aH || W.call(b8, b6);
            },
            isEmptyObject: function(b6) {
                var e;
                for (e in b6) {
                    return false;
                }
                return true;
            },
            error: function(e) {
                throw new Error(e);
            },
            parseHTML: function(b9, b7, b8) {
                if (!b9 || typeof b9 !== "string") {
                    return null;
                }
                if (typeof b7 === "boolean") {
                    b8 = b7;
                    b7 = false;
                }
                b7 = b7 || o;
                var b6 = b.exec(b9),
                    e = !b8 && [];
                if (b6) {
                    return [b7.createElement(b6[1])];
                }
                b6 = bL.buildFragment([b9], b7, e);
                if (e) {
                    bL(e).remove();
                }
                return bL.merge([], b6.childNodes);
            },
            parseJSON: function(e) {
                if (a4.JSON && a4.JSON.parse) {
                    return a4.JSON.parse(e);
                }
                if (e === null) {
                    return e;
                }
                if (typeof e === "string") {
                    e = bL.trim(e);
                    if (e) {
                        if (bj.test(e.replace(bI, "@").replace(a0, "]").replace(bm, ""))) {
                            return (new Function("return " + e))();
                        }
                    }
                }
                bL.error("Invalid JSON: " + e);
            },
            parseXML: function(b8) {
                var b6, b7;
                if (!b8 || typeof b8 !== "string") {
                    return null;
                }
                try {
                    if (a4.DOMParser) {
                        b7 = new DOMParser();
                        b6 = b7.parseFromString(b8, "text/xml");
                    } else {
                        b6 = new ActiveXObject("Microsoft.XMLDOM");
                        b6.async = "false";
                        b6.loadXML(b8);
                    }
                } catch (b9) {
                    b6 = aH;
                }
                if (!b6 || !b6.documentElement || b6.getElementsByTagName("parsererror").length) {
                    bL.error("Invalid XML: " + b8);
                }
                return b6;
            },
            noop: function() {},
            globalEval: function(e) {
                if (e && bL.trim(e)) {
                    (a4.execScript || function(b6) {
                        a4["eval"].call(a4, b6);
                    })(e);
                }
            },
            camelCase: function(e) {
                return e.replace(bU, "ms-").replace(aW, N);
            },
            nodeName: function(b6, e) {
                return b6.nodeName && b6.nodeName.toLowerCase() === e.toLowerCase();
            },
            each: function(ca, cb, b6) {
                var b9, b7 = 0,
                    b8 = ca.length,
                    e = ac(ca);
                if (b6) {
                    if (e) {
                        for (; b7 < b8; b7++) {
                            b9 = cb.apply(ca[b7], b6);
                            if (b9 === false) {
                                break;
                            }
                        }
                    } else {
                        for (b7 in ca) {
                            b9 = cb.apply(ca[b7], b6);
                            if (b9 === false) {
                                break;
                            }
                        }
                    }
                } else {
                    if (e) {
                        for (; b7 < b8; b7++) {
                            b9 = cb.call(ca[b7], b7, ca[b7]);
                            if (b9 === false) {
                                break;
                            }
                        }
                    } else {
                        for (b7 in ca) {
                            b9 = cb.call(ca[b7], b7, ca[b7]);
                            if (b9 === false) {
                                break;
                            }
                        }
                    }
                }
                return ca;
            },
            trim: aR && !aR.call("\uFEFF\xA0") ? function(e) {
                return e == null ? "" : aR.call(e);
            } : function(e) {
                return e == null ? "" : (e + "").replace(E, "");
            },
            makeArray: function(e, b7) {
                var b6 = b7 || [];
                if (e != null) {
                    if (ac(Object(e))) {
                        bL.merge(b6, typeof e === "string" ? [e] : e);
                    } else {
                        ap.call(b6, e);
                    }
                }
                return b6;
            },
            inArray: function(b8, b6, b7) {
                var e;
                if (b6) {
                    if (aN) {
                        return aN.call(b6, b8, b7);
                    }
                    e = b6.length;
                    b7 = b7 ? b7 < 0 ? Math.max(0, e + b7) : b7 : 0;
                    for (; b7 < e; b7++) {
                        if (b7 in b6 && b6[b7] === b8) {
                            return b7;
                        }
                    }
                }
                return -1;
            },
            merge: function(b9, b7) {
                var e = b7.length,
                    b8 = b9.length,
                    b6 = 0;
                if (typeof e === "number") {
                    for (; b6 < e; b6++) {
                        b9[b8++] = b7[b6];
                    }
                } else {
                    while (b7[b6] !== aH) {
                        b9[b8++] = b7[b6++];
                    }
                }
                b9.length = b8;
                return b9;
            },
            grep: function(b6, cb, e) {
                var ca, b7 = [],
                    b8 = 0,
                    b9 = b6.length;
                e = !!e;
                for (; b8 < b9; b8++) {
                    ca = !!cb(b6[b8], b8);
                    if (e !== ca) {
                        b7.push(b6[b8]);
                    }
                }
                return b7;
            },
            map: function(b7, cc, e) {
                var cb, b9 = 0,
                    ca = b7.length,
                    b6 = ac(b7),
                    b8 = [];
                if (b6) {
                    for (; b9 < ca; b9++) {
                        cb = cc(b7[b9], b9, e);
                        if (cb != null) {
                            b8[b8.length] = cb;
                        }
                    }
                } else {
                    for (b9 in b7) {
                        cb = cc(b7[b9], b9, e);
                        if (cb != null) {
                            b8[b8.length] = cb;
                        }
                    }
                }
                return aJ.apply([], b8);
            },
            guid: 1,
            proxy: function(b9, b8) {
                var e, b7, b6;
                if (typeof b8 === "string") {
                    b6 = b9[b8];
                    b8 = b9;
                    b9 = b6;
                }
                if (!bL.isFunction(b9)) {
                    return aH;
                }
                e = a6.call(arguments, 2);
                b7 = function() {
                    return b9.apply(b8 || this, e.concat(a6.call(arguments)));
                };
                b7.guid = b9.guid = b9.guid || bL.guid++;
                return b7;
            },
            access: function(e, ca, cc, cb, b8, ce, cd) {
                var b7 = 0,
                    b6 = e.length,
                    b9 = cc == null;
                if (bL.type(cc) === "object") {
                    b8 = true;
                    for (b7 in cc) {
                        bL.access(e, ca, b7, cc[b7], true, ce, cd);
                    }
                } else {
                    if (cb !== aH) {
                        b8 = true;
                        if (!bL.isFunction(cb)) {
                            cd = true;
                        }
                        if (b9) {
                            if (cd) {
                                ca.call(e, cb);
                                ca = null;
                            } else {
                                b9 = ca;
                                ca = function(cg, cf, ch) {
                                    return b9.call(bL(cg), ch);
                                };
                            }
                        }
                        if (ca) {
                            for (; b7 < b6; b7++) {
                                ca(e[b7], cc, cd ? cb : cb.call(e[b7], b7, ca(e[b7], cc)));
                            }
                        }
                    }
                }
                return b8 ? e : b9 ? ca.call(e) : b6 ? ca(e[0], cc) : ce;
            },
            now: function() {
                return (new Date()).getTime();
            },
            swap: function(ca, b9, cb, b8) {
                var b7, b6, e = {};
                for (b6 in b9) {
                    e[b6] = ca.style[b6];
                    ca.style[b6] = b9[b6];
                }
                b7 = cb.apply(ca, b8 || []);
                for (b6 in b9) {
                    ca.style[b6] = e[b6];
                }
                return b7;
            }
        });
        bL.ready.promise = function(b9) {
            if (!aj) {
                aj = bL.Deferred();
                if (o.readyState === "complete") {
                    setTimeout(bL.ready);
                } else {
                    if (o.addEventListener) {
                        o.addEventListener("DOMContentLoaded", bZ, false);
                        a4.addEventListener("load", bZ, false);
                    } else {
                        o.attachEvent("onreadystatechange", bZ);
                        a4.attachEvent("onload", bZ);
                        var b8 = false;
                        try {
                            b8 = a4.frameElement == null && o.documentElement;
                        } catch (b7) {}
                        if (b8 && b8.doScroll) {
                            (function b6() {
                                if (!bL.isReady) {
                                    try {
                                        b8.doScroll("left");
                                    } catch (ca) {
                                        return setTimeout(b6, 50);
                                    }
                                    bn();
                                    bL.ready();
                                }
                            })();
                        }
                    }
                }
            }
            return aj.promise(b9);
        };
        bL.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b6, e) {
            ab["[object " + e + "]"] = e.toLowerCase();
        });

        function ac(b7) {
            var b6 = b7.length,
                e = bL.type(b7);
            if (bL.isWindow(b7)) {
                return false;
            }
            if (b7.nodeType === 1 && b6) {
                return true;
            }
            return e === "array" || e !== "function" && (b6 === 0 || typeof b6 === "number" && b6 > 0 && (b6 - 1) in b7);
        }
        z = bL(o);
        /*!
         * Sizzle CSS Selector Engine v1.10.2
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2013-07-03
         */
        (function(df, ck) {
            var cz, di, cf, cp, cI, cL, cW, dm, cJ, cZ, cD, cq, c8, c3, dg, ce, cG, da = "sizzle" + -(new Date()),
                cK = df.document,
                dj = 0,
                c4 = 0,
                b9 = cB(),
                c9 = cB(),
                cH = cB(),
                cX = false,
                cF = function(dn, e) {
                    if (dn === e) {
                        cX = true;
                        return 0;
                    }
                    return 0;
                },
                de = typeof ck,
                cR = 1 << 31,
                cP = ({}).hasOwnProperty,
                dc = [],
                dd = dc.pop,
                cN = dc.push,
                b7 = dc.push,
                co = dc.slice,
                cd = dc.indexOf || function(dp) {
                    var dn = 0,
                        e = this.length;
                    for (; dn < e; dn++) {
                        if (this[dn] === dp) {
                            return dn;
                        }
                    }
                    return -1;
                },
                b8 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                cr = "[\\x20\\t\\r\\n\\f]",
                b6 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                cM = b6.replace("w", "w#"),
                c6 = "\\[" + cr + "*(" + b6 + ")" + cr + "*(?:([*^$|!~]?=)" + cr + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cM + ")|)|)" + cr + "*\\]",
                cm = ":(" + b6 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c6.replace(3, 8) + ")*)|.*)\\)|)",
                ct = new RegExp("^" + cr + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cr + "+$", "g"),
                cw = new RegExp("^" + cr + "*," + cr + "*"),
                cC = new RegExp("^" + cr + "*([>+~]|" + cr + ")" + cr + "*"),
                c1 = new RegExp(cr + "*[+~]"),
                cv = new RegExp("=" + cr + "*([^\\]'\"]*)" + cr + "*\\]", "g"),
                cT = new RegExp(cm),
                cU = new RegExp("^" + cM + "$"),
                c2 = {
                    ID: new RegExp("^#(" + b6 + ")"),
                    CLASS: new RegExp("^\\.(" + b6 + ")"),
                    TAG: new RegExp("^(" + b6.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + c6),
                    PSEUDO: new RegExp("^" + cm),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cr + "*(even|odd|(([+-]|)(\\d*)n|)" + cr + "*(?:([+-]|)" + cr + "*(\\d+)|))" + cr + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + b8 + ")$", "i"),
                    needsContext: new RegExp("^" + cr + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cr + "*((?:-\\d)?\\d*)" + cr + "*\\)|)(?=[^-]|$)", "i")
                },
                cQ = /^[^{]+\{\s*\[native \w/,
                cS = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                cc = /^(?:input|select|textarea|button)$/i,
                cn = /^h\d$/i,
                cO = /'|\\/g,
                cu = new RegExp("\\\\([\\da-f]{1,6}" + cr + "?|(" + cr + ")|.)", "ig"),
                c5 = function(e, dq, dn) {
                    var dp = "0x" + dq - 65536;
                    return dp !== dp || dn ? dq : dp < 0 ? String.fromCharCode(dp + 65536) : String.fromCharCode(dp >> 10 | 55296, dp & 1023 | 56320);
                };
            try {
                b7.apply((dc = co.call(cK.childNodes)), cK.childNodes);
                dc[cK.childNodes.length].nodeType;
            } catch (cE) {
                b7 = {
                    apply: dc.length ? function(dn, e) {
                        cN.apply(dn, co.call(e));
                    } : function(dq, dp) {
                        var e = dq.length,
                            dn = 0;
                        while ((dq[e++] = dp[dn++])) {}
                        dq.length = e - 1;
                    }
                };
            }

            function cx(dv, dn, dz, dB) {
                var dA, ds, dt, dx, dy, dr, dq, e, dp, dw;
                if ((dn ? dn.ownerDocument || dn : cK) !== cD) {
                    cZ(dn);
                }
                dn = dn || cD;
                dz = dz || [];
                if (!dv || typeof dv !== "string") {
                    return dz;
                }
                if ((dx = dn.nodeType) !== 1 && dx !== 9) {
                    return [];
                }
                if (c8 && !dB) {
                    if ((dA = cS.exec(dv))) {
                        if ((dt = dA[1])) {
                            if (dx === 9) {
                                ds = dn.getElementById(dt);
                                if (ds && ds.parentNode) {
                                    if (ds.id === dt) {
                                        dz.push(ds);
                                        return dz;
                                    }
                                } else {
                                    return dz;
                                }
                            } else {
                                if (dn.ownerDocument && (ds = dn.ownerDocument.getElementById(dt)) && cG(dn, ds) && ds.id === dt) {
                                    dz.push(ds);
                                    return dz;
                                }
                            }
                        } else {
                            if (dA[2]) {
                                b7.apply(dz, dn.getElementsByTagName(dv));
                                return dz;
                            } else {
                                if ((dt = dA[3]) && di.getElementsByClassName && dn.getElementsByClassName) {
                                    b7.apply(dz, dn.getElementsByClassName(dt));
                                    return dz;
                                }
                            }
                        }
                    }
                    if (di.qsa && (!c3 || !c3.test(dv))) {
                        e = dq = da;
                        dp = dn;
                        dw = dx === 9 && dv;
                        if (dx === 1 && dn.nodeName.toLowerCase() !== "object") {
                            dr = ci(dv);
                            if ((dq = dn.getAttribute("id"))) {
                                e = dq.replace(cO, "\\$&");
                            } else {
                                dn.setAttribute("id", e);
                            }
                            e = "[id='" + e + "'] ";
                            dy = dr.length;
                            while (dy--) {
                                dr[dy] = e + cj(dr[dy]);
                            }
                            dp = c1.test(dv) && dn.parentNode || dn;
                            dw = dr.join(",");
                        }
                        if (dw) {
                            try {
                                b7.apply(dz, dp.querySelectorAll(dw));
                                return dz;
                            } catch (du) {} finally {
                                if (!dq) {
                                    dn.removeAttribute("id");
                                }
                            }
                        }
                    }
                }
                return dh(dv.replace(ct, "$1"), dn, dz, dB);
            }

            function cB() {
                var dn = [];

                function e(dp, dq) {
                    if (dn.push(dp += " ") > cp.cacheLength) {
                        delete e[dn.shift()];
                    }
                    return (e[dp] = dq);
                }
                return e;
            }

            function cl(e) {
                e[da] = true;
                return e;
            }

            function cg(dn) {
                var dq = cD.createElement("div");
                try {
                    return !!dn(dq);
                } catch (dp) {
                    return false;
                } finally {
                    if (dq.parentNode) {
                        dq.parentNode.removeChild(dq);
                    }
                    dq = null;
                }
            }

            function dk(dn, dq) {
                var e = dn.split("|"),
                    dp = dn.length;
                while (dp--) {
                    cp.attrHandle[e[dp]] = dq;
                }
            }

            function ca(dn, e) {
                var dq = e && dn,
                    dp = dq && dn.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cR) - (~dn.sourceIndex || cR);
                if (dp) {
                    return dp;
                }
                if (dq) {
                    while ((dq = dq.nextSibling)) {
                        if (dq === e) {
                            return -1;
                        }
                    }
                }
                return dn ? 1 : -1;
            }

            function cy(e) {
                return function(dp) {
                    var dn = dp.nodeName.toLowerCase();
                    return dn === "input" && dp.type === e;
                };
            }

            function cb(e) {
                return function(dp) {
                    var dn = dp.nodeName.toLowerCase();
                    return (dn === "input" || dn === "button") && dp.type === e;
                };
            }

            function c7(e) {
                return cl(function(dn) {
                    dn = +dn;
                    return cl(function(dp, dt) {
                        var dr, dq = e([], dp.length, dn),
                            ds = dq.length;
                        while (ds--) {
                            if (dp[(dr = dq[ds])]) {
                                dp[dr] = !(dt[dr] = dp[dr]);
                            }
                        }
                    });
                });
            }
            cL = cx.isXML = function(e) {
                var dn = e && (e.ownerDocument || e).documentElement;
                return dn ? dn.nodeName !== "HTML" : false;
            };
            di = cx.support = {};
            cZ = cx.setDocument = function(dn) {
                var dp = dn ? dn.ownerDocument || dn : cK,
                    e = dp.defaultView;
                if (dp === cD || dp.nodeType !== 9 || !dp.documentElement) {
                    return cD;
                }
                cD = dp;
                cq = dp.documentElement;
                c8 = !cL(dp);
                if (e && e.attachEvent && e !== e.top) {
                    e.attachEvent("onbeforeunload", function() {
                        cZ();
                    });
                }
                di.attributes = cg(function(dq) {
                    dq.className = "i";
                    return !dq.getAttribute("className");
                });
                di.getElementsByTagName = cg(function(dq) {
                    dq.appendChild(dp.createComment(""));
                    return !dq.getElementsByTagName("*").length;
                });
                di.getElementsByClassName = cg(function(dq) {
                    dq.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    dq.firstChild.className = "i";
                    return dq.getElementsByClassName("i").length === 2;
                });
                di.getById = cg(function(dq) {
                    cq.appendChild(dq).id = da;
                    return !dp.getElementsByName || !dp.getElementsByName(da).length;
                });
                if (di.getById) {
                    cp.find.ID = function(ds, dr) {
                        if (typeof dr.getElementById !== de && c8) {
                            var dq = dr.getElementById(ds);
                            return dq && dq.parentNode ? [dq] : [];
                        }
                    };
                    cp.filter.ID = function(dr) {
                        var dq = dr.replace(cu, c5);
                        return function(ds) {
                            return ds.getAttribute("id") === dq;
                        };
                    };
                } else {
                    delete cp.find.ID;
                    cp.filter.ID = function(dr) {
                        var dq = dr.replace(cu, c5);
                        return function(dt) {
                            var ds = typeof dt.getAttributeNode !== de && dt.getAttributeNode("id");
                            return ds && ds.value === dq;
                        };
                    };
                }
                cp.find.TAG = di.getElementsByTagName ? function(dq, dr) {
                    if (typeof dr.getElementsByTagName !== de) {
                        return dr.getElementsByTagName(dq);
                    }
                } : function(dq, du) {
                    var dv, dt = [],
                        ds = 0,
                        dr = du.getElementsByTagName(dq);
                    if (dq === "*") {
                        while ((dv = dr[ds++])) {
                            if (dv.nodeType === 1) {
                                dt.push(dv);
                            }
                        }
                        return dt;
                    }
                    return dr;
                };
                cp.find.CLASS = di.getElementsByClassName && function(dr, dq) {
                    if (typeof dq.getElementsByClassName !== de && c8) {
                        return dq.getElementsByClassName(dr);
                    }
                };
                dg = [];
                c3 = [];
                if ((di.qsa = cQ.test(dp.querySelectorAll))) {
                    cg(function(dq) {
                        dq.innerHTML = "<select><option selected=''></option></select>";
                        if (!dq.querySelectorAll("[selected]").length) {
                            c3.push("\\[" + cr + "*(?:value|" + b8 + ")");
                        }
                        if (!dq.querySelectorAll(":checked").length) {
                            c3.push(":checked");
                        }
                    });
                    cg(function(dr) {
                        var dq = dp.createElement("input");
                        dq.setAttribute("type", "hidden");
                        dr.appendChild(dq).setAttribute("t", "");
                        if (dr.querySelectorAll("[t^='']").length) {
                            c3.push("[*^$]=" + cr + "*(?:''|\"\")");
                        }
                        if (!dr.querySelectorAll(":enabled").length) {
                            c3.push(":enabled", ":disabled");
                        }
                        dr.querySelectorAll("*,:x");
                        c3.push(",.*:");
                    });
                }
                if ((di.matchesSelector = cQ.test((ce = cq.webkitMatchesSelector || cq.mozMatchesSelector || cq.oMatchesSelector || cq.msMatchesSelector)))) {
                    cg(function(dq) {
                        di.disconnectedMatch = ce.call(dq, "div");
                        ce.call(dq, "[s!='']:x");
                        dg.push("!=", cm);
                    });
                }
                c3 = c3.length && new RegExp(c3.join("|"));
                dg = dg.length && new RegExp(dg.join("|"));
                cG = cQ.test(cq.contains) || cq.compareDocumentPosition ? function(dr, dq) {
                    var dt = dr.nodeType === 9 ? dr.documentElement : dr,
                        ds = dq && dq.parentNode;
                    return dr === ds || !!(ds && ds.nodeType === 1 && (dt.contains ? dt.contains(ds) : dr.compareDocumentPosition && dr.compareDocumentPosition(ds) & 16));
                } : function(dr, dq) {
                    if (dq) {
                        while ((dq = dq.parentNode)) {
                            if (dq === dr) {
                                return true;
                            }
                        }
                    }
                    return false;
                };
                cF = cq.compareDocumentPosition ? function(dr, dq) {
                    if (dr === dq) {
                        cX = true;
                        return 0;
                    }
                    var ds = dq.compareDocumentPosition && dr.compareDocumentPosition && dr.compareDocumentPosition(dq);
                    if (ds) {
                        if (ds & 1 || (!di.sortDetached && dq.compareDocumentPosition(dr) === ds)) {
                            if (dr === dp || cG(cK, dr)) {
                                return -1;
                            }
                            if (dq === dp || cG(cK, dq)) {
                                return 1;
                            }
                            return cJ ? (cd.call(cJ, dr) - cd.call(cJ, dq)) : 0;
                        }
                        return ds & 4 ? -1 : 1;
                    }
                    return dr.compareDocumentPosition ? -1 : 1;
                } : function(dr, dq) {
                    var dx, du = 0,
                        dw = dr.parentNode,
                        dt = dq.parentNode,
                        ds = [dr],
                        dv = [dq];
                    if (dr === dq) {
                        cX = true;
                        return 0;
                    } else {
                        if (!dw || !dt) {
                            return dr === dp ? -1 : dq === dp ? 1 : dw ? -1 : dt ? 1 : cJ ? (cd.call(cJ, dr) - cd.call(cJ, dq)) : 0;
                        } else {
                            if (dw === dt) {
                                return ca(dr, dq);
                            }
                        }
                    }
                    dx = dr;
                    while ((dx = dx.parentNode)) {
                        ds.unshift(dx);
                    }
                    dx = dq;
                    while ((dx = dx.parentNode)) {
                        dv.unshift(dx);
                    }
                    while (ds[du] === dv[du]) {
                        du++;
                    }
                    return du ? ca(ds[du], dv[du]) : ds[du] === cK ? -1 : dv[du] === cK ? 1 : 0;
                };
                return dp;
            };
            cx.matches = function(dn, e) {
                return cx(dn, null, null, e);
            };
            cx.matchesSelector = function(dp, dr) {
                if ((dp.ownerDocument || dp) !== cD) {
                    cZ(dp);
                }
                dr = dr.replace(cv, "='$1']");
                if (di.matchesSelector && c8 && (!dg || !dg.test(dr)) && (!c3 || !c3.test(dr))) {
                    try {
                        var dn = ce.call(dp, dr);
                        if (dn || di.disconnectedMatch || dp.document && dp.document.nodeType !== 11) {
                            return dn;
                        }
                    } catch (dq) {}
                }
                return cx(dr, cD, null, [dp]).length > 0;
            };
            cx.contains = function(e, dn) {
                if ((e.ownerDocument || e) !== cD) {
                    cZ(e);
                }
                return cG(e, dn);
            };
            cx.attr = function(dp, e) {
                if ((dp.ownerDocument || dp) !== cD) {
                    cZ(dp);
                }
                var dn = cp.attrHandle[e.toLowerCase()],
                    dq = dn && cP.call(cp.attrHandle, e.toLowerCase()) ? dn(dp, e, !c8) : ck;
                return dq === ck ? di.attributes || !c8 ? dp.getAttribute(e) : (dq = dp.getAttributeNode(e)) && dq.specified ? dq.value : null : dq;
            };
            cx.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            };
            cx.uniqueSort = function(dp) {
                var dq, dr = [],
                    e = 0,
                    dn = 0;
                cX = !di.detectDuplicates;
                cJ = !di.sortStable && dp.slice(0);
                dp.sort(cF);
                if (cX) {
                    while ((dq = dp[dn++])) {
                        if (dq === dp[dn]) {
                            e = dr.push(dn);
                        }
                    }
                    while (e--) {
                        dp.splice(dr[e], 1);
                    }
                }
                return dp;
            };
            cI = cx.getText = function(dr) {
                var dq, dn = "",
                    dp = 0,
                    e = dr.nodeType;
                if (!e) {
                    for (;
                        (dq = dr[dp]); dp++) {
                        dn += cI(dq);
                    }
                } else {
                    if (e === 1 || e === 9 || e === 11) {
                        if (typeof dr.textContent === "string") {
                            return dr.textContent;
                        } else {
                            for (dr = dr.firstChild; dr; dr = dr.nextSibling) {
                                dn += cI(dr);
                            }
                        }
                    } else {
                        if (e === 3 || e === 4) {
                            return dr.nodeValue;
                        }
                    }
                }
                return dn;
            };
            cp = cx.selectors = {
                cacheLength: 50,
                createPseudo: cl,
                match: c2,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(cu, c5);
                        e[3] = (e[4] || e[5] || "").replace(cu, c5);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " ";
                        }
                        return e.slice(0, 4);
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                cx.error(e[0]);
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +((e[7] + e[8]) || e[3] === "odd");
                        } else {
                            if (e[3]) {
                                cx.error(e[0]);
                            }
                        }
                        return e;
                    },
                    PSEUDO: function(dn) {
                        var e, dp = !dn[5] && dn[2];
                        if (c2.CHILD.test(dn[0])) {
                            return null;
                        }
                        if (dn[3] && dn[4] !== ck) {
                            dn[2] = dn[4];
                        } else {
                            if (dp && cT.test(dp) && (e = ci(dp, true)) && (e = dp.indexOf(")", dp.length - e) - dp.length)) {
                                dn[0] = dn[0].slice(0, e);
                                dn[2] = dp.slice(0, e);
                            }
                        }
                        return dn.slice(0, 3);
                    }
                },
                filter: {
                    TAG: function(dn) {
                        var e = dn.replace(cu, c5).toLowerCase();
                        return dn === "*" ? function() {
                            return true;
                        } : function(dp) {
                            return dp.nodeName && dp.nodeName.toLowerCase() === e;
                        };
                    },
                    CLASS: function(e) {
                        var dn = b9[e + " "];
                        return dn || (dn = new RegExp("(^|" + cr + ")" + e + "(" + cr + "|$)")) && b9(e, function(dp) {
                            return dn.test(typeof dp.className === "string" && dp.className || typeof dp.getAttribute !== de && dp.getAttribute("class") || "");
                        });
                    },
                    ATTR: function(dp, dn, e) {
                        return function(dr) {
                            var dq = cx.attr(dr, dp);
                            if (dq == null) {
                                return dn === "!=";
                            }
                            if (!dn) {
                                return true;
                            }
                            dq += "";
                            return dn === "=" ? dq === e : dn === "!=" ? dq !== e : dn === "^=" ? e && dq.indexOf(e) === 0 : dn === "*=" ? e && dq.indexOf(e) > -1 : dn === "$=" ? e && dq.slice(-e.length) === e : dn === "~=" ? (" " + dq + " ").indexOf(e) > -1 : dn === "|=" ? dq === e || dq.slice(0, e.length + 1) === e + "-" : false;
                        };
                    },
                    CHILD: function(dn, dr, dq, ds, dp) {
                        var du = dn.slice(0, 3) !== "nth",
                            e = dn.slice(-4) !== "last",
                            dt = dr === "of-type";
                        return ds === 1 && dp === 0 ? function(dv) {
                            return !!dv.parentNode;
                        } : function(dB, dz, dE) {
                            var dv, dH, dC, dG, dD, dy, dA = du !== e ? "nextSibling" : "previousSibling",
                                dF = dB.parentNode,
                                dx = dt && dB.nodeName.toLowerCase(),
                                dw = !dE && !dt;
                            if (dF) {
                                if (du) {
                                    while (dA) {
                                        dC = dB;
                                        while ((dC = dC[dA])) {
                                            if (dt ? dC.nodeName.toLowerCase() === dx : dC.nodeType === 1) {
                                                return false;
                                            }
                                        }
                                        dy = dA = dn === "only" && !dy && "nextSibling";
                                    }
                                    return true;
                                }
                                dy = [e ? dF.firstChild : dF.lastChild];
                                if (e && dw) {
                                    dH = dF[da] || (dF[da] = {});
                                    dv = dH[dn] || [];
                                    dD = dv[0] === dj && dv[1];
                                    dG = dv[0] === dj && dv[2];
                                    dC = dD && dF.childNodes[dD];
                                    while ((dC = ++dD && dC && dC[dA] || (dG = dD = 0) || dy.pop())) {
                                        if (dC.nodeType === 1 && ++dG && dC === dB) {
                                            dH[dn] = [dj, dD, dG];
                                            break;
                                        }
                                    }
                                } else {
                                    if (dw && (dv = (dB[da] || (dB[da] = {}))[dn]) && dv[0] === dj) {
                                        dG = dv[1];
                                    } else {
                                        while ((dC = ++dD && dC && dC[dA] || (dG = dD = 0) || dy.pop())) {
                                            if ((dt ? dC.nodeName.toLowerCase() === dx : dC.nodeType === 1) && ++dG) {
                                                if (dw) {
                                                    (dC[da] || (dC[da] = {}))[dn] = [dj, dG];
                                                }
                                                if (dC === dB) {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                                dG -= dp;
                                return dG === ds || (dG % ds === 0 && dG / ds >= 0);
                            }
                        };
                    },
                    PSEUDO: function(dq, dp) {
                        var e, dn = cp.pseudos[dq] || cp.setFilters[dq.toLowerCase()] || cx.error("unsupported pseudo: " + dq);
                        if (dn[da]) {
                            return dn(dp);
                        }
                        if (dn.length > 1) {
                            e = [dq, dq, "", dp];
                            return cp.setFilters.hasOwnProperty(dq.toLowerCase()) ? cl(function(dt, dv) {
                                var ds, dr = dn(dt, dp),
                                    du = dr.length;
                                while (du--) {
                                    ds = cd.call(dt, dr[du]);
                                    dt[ds] = !(dv[ds] = dr[du]);
                                }
                            }) : function(dr) {
                                return dn(dr, 0, e);
                            };
                        }
                        return dn;
                    }
                },
                pseudos: {
                    not: cl(function(e) {
                        var dn = [],
                            dp = [],
                            dq = cW(e.replace(ct, "$1"));
                        return dq[da] ? cl(function(ds, dx, dv, dt) {
                            var dw, dr = dq(ds, null, dt, []),
                                du = ds.length;
                            while (du--) {
                                if ((dw = dr[du])) {
                                    ds[du] = !(dx[du] = dw);
                                }
                            }
                        }) : function(dt, ds, dr) {
                            dn[0] = dt;
                            dq(dn, null, dr, dp);
                            return !dp.pop();
                        };
                    }),
                    has: cl(function(e) {
                        return function(dn) {
                            return cx(e, dn).length > 0;
                        };
                    }),
                    contains: cl(function(e) {
                        return function(dn) {
                            return (dn.textContent || dn.innerText || cI(dn)).indexOf(e) > -1;
                        };
                    }),
                    lang: cl(function(e) {
                        if (!cU.test(e || "")) {
                            cx.error("unsupported lang: " + e);
                        }
                        e = e.replace(cu, c5).toLowerCase();
                        return function(dp) {
                            var dn;
                            do {
                                if ((dn = c8 ? dp.lang : dp.getAttribute("xml:lang") || dp.getAttribute("lang"))) {
                                    dn = dn.toLowerCase();
                                    return dn === e || dn.indexOf(e + "-") === 0;
                                }
                            } while ((dp = dp.parentNode) && dp.nodeType === 1);
                            return false;
                        };
                    }),
                    target: function(e) {
                        var dn = df.location && df.location.hash;
                        return dn && dn.slice(1) === e.id;
                    },
                    root: function(e) {
                        return e === cq;
                    },
                    focus: function(e) {
                        return e === cD.activeElement && (!cD.hasFocus || cD.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: function(e) {
                        return e.disabled === false;
                    },
                    disabled: function(e) {
                        return e.disabled === true;
                    },
                    checked: function(e) {
                        var dn = e.nodeName.toLowerCase();
                        return (dn === "input" && !!e.checked) || (dn === "option" && !!e.selected);
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex;
                        }
                        return e.selected === true;
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                                return false;
                            }
                        }
                        return true;
                    },
                    parent: function(e) {
                        return !cp.pseudos.empty(e);
                    },
                    header: function(e) {
                        return cn.test(e.nodeName);
                    },
                    input: function(e) {
                        return cc.test(e.nodeName);
                    },
                    button: function(dn) {
                        var e = dn.nodeName.toLowerCase();
                        return e === "input" && dn.type === "button" || e === "button";
                    },
                    text: function(dn) {
                        var e;
                        return dn.nodeName.toLowerCase() === "input" && dn.type === "text" && ((e = dn.getAttribute("type")) == null || e.toLowerCase() === dn.type);
                    },
                    first: c7(function() {
                        return [0];
                    }),
                    last: c7(function(e, dn) {
                        return [dn - 1];
                    }),
                    eq: c7(function(e, dp, dn) {
                        return [dn < 0 ? dn + dp : dn];
                    }),
                    even: c7(function(e, dp) {
                        var dn = 0;
                        for (; dn < dp; dn += 2) {
                            e.push(dn);
                        }
                        return e;
                    }),
                    odd: c7(function(e, dp) {
                        var dn = 1;
                        for (; dn < dp; dn += 2) {
                            e.push(dn);
                        }
                        return e;
                    }),
                    lt: c7(function(e, dq, dp) {
                        var dn = dp < 0 ? dp + dq : dp;
                        for (; --dn >= 0;) {
                            e.push(dn);
                        }
                        return e;
                    }),
                    gt: c7(function(e, dq, dp) {
                        var dn = dp < 0 ? dp + dq : dp;
                        for (; ++dn < dq;) {
                            e.push(dn);
                        }
                        return e;
                    })
                }
            };
            cp.pseudos.nth = cp.pseudos.eq;
            for (cz in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                cp.pseudos[cz] = cy(cz);
            }
            for (cz in {
                    submit: true,
                    reset: true
                }) {
                cp.pseudos[cz] = cb(cz);
            }

            function cV() {}
            cV.prototype = cp.filters = cp.pseudos;
            cp.setFilters = new cV();

            function ci(dr, dw) {
                var dn, ds, du, dv, dt, dp, e, dq = c9[dr + " "];
                if (dq) {
                    return dw ? 0 : dq.slice(0);
                }
                dt = dr;
                dp = [];
                e = cp.preFilter;
                while (dt) {
                    if (!dn || (ds = cw.exec(dt))) {
                        if (ds) {
                            dt = dt.slice(ds[0].length) || dt;
                        }
                        dp.push(du = []);
                    }
                    dn = false;
                    if ((ds = cC.exec(dt))) {
                        dn = ds.shift();
                        du.push({
                            value: dn,
                            type: ds[0].replace(ct, " ")
                        });
                        dt = dt.slice(dn.length);
                    }
                    for (dv in cp.filter) {
                        if ((ds = c2[dv].exec(dt)) && (!e[dv] || (ds = e[dv](ds)))) {
                            dn = ds.shift();
                            du.push({
                                value: dn,
                                type: dv,
                                matches: ds
                            });
                            dt = dt.slice(dn.length);
                        }
                    }
                    if (!dn) {
                        break;
                    }
                }
                return dw ? dt.length : dt ? cx.error(dr) : c9(dr, dp).slice(0);
            }

            function cj(dq) {
                var dp = 0,
                    dn = dq.length,
                    e = "";
                for (; dp < dn; dp++) {
                    e += dq[dp].value;
                }
                return e;
            }

            function cs(dr, dp, dq) {
                var e = dp.dir,
                    ds = dq && e === "parentNode",
                    dn = c4++;
                return dp.first ? function(dv, du, dt) {
                    while ((dv = dv[e])) {
                        if (dv.nodeType === 1 || ds) {
                            return dr(dv, du, dt);
                        }
                    }
                } : function(dx, dv, du) {
                    var dz, dt, dw, dy = dj + " " + dn;
                    if (du) {
                        while ((dx = dx[e])) {
                            if (dx.nodeType === 1 || ds) {
                                if (dr(dx, dv, du)) {
                                    return true;
                                }
                            }
                        }
                    } else {
                        while ((dx = dx[e])) {
                            if (dx.nodeType === 1 || ds) {
                                dw = dx[da] || (dx[da] = {});
                                if ((dt = dw[e]) && dt[0] === dy) {
                                    if ((dz = dt[1]) === true || dz === cf) {
                                        return dz === true;
                                    }
                                } else {
                                    dt = dw[e] = [dy];
                                    dt[1] = dr(dx, dv, du) || cf;
                                    if (dt[1] === true) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                };
            }

            function dl(e) {
                return e.length > 1 ? function(dr, dq, dn) {
                    var dp = e.length;
                    while (dp--) {
                        if (!e[dp](dr, dq, dn)) {
                            return false;
                        }
                    }
                    return true;
                } : e[0];
            }

            function c0(e, dn, dp, dq, dt) {
                var dr, dw = [],
                    ds = 0,
                    du = e.length,
                    dv = dn != null;
                for (; ds < du; ds++) {
                    if ((dr = e[ds])) {
                        if (!dp || dp(dr, dq, dt)) {
                            dw.push(dr);
                            if (dv) {
                                dn.push(ds);
                            }
                        }
                    }
                }
                return dw;
            }

            function ch(dp, dn, dr, dq, ds, e) {
                if (dq && !dq[da]) {
                    dq = ch(dq);
                }
                if (ds && !ds[da]) {
                    ds = ch(ds, e);
                }
                return cl(function(dD, dA, dv, dC) {
                    var dF, dB, dx, dw = [],
                        dE = [],
                        du = dA.length,
                        dt = dD || cA(dn || "*", dv.nodeType ? [dv] : dv, []),
                        dy = dp && (dD || !dn) ? c0(dt, dw, dp, dv, dC) : dt,
                        dz = dr ? ds || (dD ? dp : du || dq) ? [] : dA : dy;
                    if (dr) {
                        dr(dy, dz, dv, dC);
                    }
                    if (dq) {
                        dF = c0(dz, dE);
                        dq(dF, [], dv, dC);
                        dB = dF.length;
                        while (dB--) {
                            if ((dx = dF[dB])) {
                                dz[dE[dB]] = !(dy[dE[dB]] = dx);
                            }
                        }
                    }
                    if (dD) {
                        if (ds || dp) {
                            if (ds) {
                                dF = [];
                                dB = dz.length;
                                while (dB--) {
                                    if ((dx = dz[dB])) {
                                        dF.push((dy[dB] = dx));
                                    }
                                }
                                ds(null, (dz = []), dF, dC);
                            }
                            dB = dz.length;
                            while (dB--) {
                                if ((dx = dz[dB]) && (dF = ds ? cd.call(dD, dx) : dw[dB]) > -1) {
                                    dD[dF] = !(dA[dF] = dx);
                                }
                            }
                        }
                    } else {
                        dz = c0(dz === dA ? dz.splice(du, dz.length) : dz);
                        if (ds) {
                            ds(null, dA, dz, dC);
                        } else {
                            b7.apply(dA, dz);
                        }
                    }
                });
            }

            function db(dt) {
                var dn, dr, dp, ds = dt.length,
                    dw = cp.relative[dt[0].type],
                    dx = dw || cp.relative[" "],
                    dq = dw ? 1 : 0,
                    du = cs(function(dy) {
                        return dy === dn;
                    }, dx, true),
                    dv = cs(function(dy) {
                        return cd.call(dn, dy) > -1;
                    }, dx, true),
                    e = [function(dA, dz, dy) {
                        return (!dw && (dy || dz !== dm)) || ((dn = dz).nodeType ? du(dA, dz, dy) : dv(dA, dz, dy));
                    }];
                for (; dq < ds; dq++) {
                    if ((dr = cp.relative[dt[dq].type])) {
                        e = [cs(dl(e), dr)];
                    } else {
                        dr = cp.filter[dt[dq].type].apply(null, dt[dq].matches);
                        if (dr[da]) {
                            dp = ++dq;
                            for (; dp < ds; dp++) {
                                if (cp.relative[dt[dp].type]) {
                                    break;
                                }
                            }
                            return ch(dq > 1 && dl(e), dq > 1 && cj(dt.slice(0, dq - 1).concat({
                                value: dt[dq - 2].type === " " ? "*" : ""
                            })).replace(ct, "$1"), dr, dq < dp && db(dt.slice(dq, dp)), dp < ds && db((dt = dt.slice(dp))), dp < ds && cj(dt));
                        }
                        e.push(dr);
                    }
                }
                return dl(e);
            }

            function cY(dq, dp) {
                var ds = 0,
                    e = dp.length > 0,
                    dr = dq.length > 0,
                    dn = function(dC, dw, dB, dA, dI) {
                        var dx, dy, dD, dH = [],
                            dG = 0,
                            dz = "0",
                            dt = dC && [],
                            dE = dI != null,
                            dF = dm,
                            dv = dC || dr && cp.find.TAG("*", dI && dw.parentNode || dw),
                            du = (dj += dF == null ? 1 : Math.random() || 0.1);
                        if (dE) {
                            dm = dw !== cD && dw;
                            cf = ds;
                        }
                        for (;
                            (dx = dv[dz]) != null; dz++) {
                            if (dr && dx) {
                                dy = 0;
                                while ((dD = dq[dy++])) {
                                    if (dD(dx, dw, dB)) {
                                        dA.push(dx);
                                        break;
                                    }
                                }
                                if (dE) {
                                    dj = du;
                                    cf = ++ds;
                                }
                            }
                            if (e) {
                                if ((dx = !dD && dx)) {
                                    dG--;
                                }
                                if (dC) {
                                    dt.push(dx);
                                }
                            }
                        }
                        dG += dz;
                        if (e && dz !== dG) {
                            dy = 0;
                            while ((dD = dp[dy++])) {
                                dD(dt, dH, dw, dB);
                            }
                            if (dC) {
                                if (dG > 0) {
                                    while (dz--) {
                                        if (!(dt[dz] || dH[dz])) {
                                            dH[dz] = dd.call(dA);
                                        }
                                    }
                                }
                                dH = c0(dH);
                            }
                            b7.apply(dA, dH);
                            if (dE && !dC && dH.length > 0 && (dG + dp.length) > 1) {
                                cx.uniqueSort(dA);
                            }
                        }
                        if (dE) {
                            dj = du;
                            dm = dF;
                        }
                        return dt;
                    };
                return e ? cl(dn) : dn;
            }
            cW = cx.compile = function(e, ds) {
                var dp, dn = [],
                    dr = [],
                    dq = cH[e + " "];
                if (!dq) {
                    if (!ds) {
                        ds = ci(e);
                    }
                    dp = ds.length;
                    while (dp--) {
                        dq = db(ds[dp]);
                        if (dq[da]) {
                            dn.push(dq);
                        } else {
                            dr.push(dq);
                        }
                    }
                    dq = cH(e, cY(dr, dn));
                }
                return dq;
            };

            function cA(dn, dr, dq) {
                var dp = 0,
                    e = dr.length;
                for (; dp < e; dp++) {
                    cx(dn, dr[dp], dq);
                }
                return dq;
            }

            function dh(dp, e, dq, dt) {
                var dr, dv, dn, dw, du, ds = ci(dp);
                if (!dt) {
                    if (ds.length === 1) {
                        dv = ds[0] = ds[0].slice(0);
                        if (dv.length > 2 && (dn = dv[0]).type === "ID" && di.getById && e.nodeType === 9 && c8 && cp.relative[dv[1].type]) {
                            e = (cp.find.ID(dn.matches[0].replace(cu, c5), e) || [])[0];
                            if (!e) {
                                return dq;
                            }
                            dp = dp.slice(dv.shift().value.length);
                        }
                        dr = c2.needsContext.test(dp) ? 0 : dv.length;
                        while (dr--) {
                            dn = dv[dr];
                            if (cp.relative[(dw = dn.type)]) {
                                break;
                            }
                            if ((du = cp.find[dw])) {
                                if ((dt = du(dn.matches[0].replace(cu, c5), c1.test(dv[0].type) && e.parentNode || e))) {
                                    dv.splice(dr, 1);
                                    dp = dt.length && cj(dv);
                                    if (!dp) {
                                        b7.apply(dq, dt);
                                        return dq;
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
                cW(dp, ds)(dt, e, !c8, dq, c1.test(dp));
                return dq;
            }
            di.sortStable = da.split("").sort(cF).join("") === da;
            di.detectDuplicates = cX;
            cZ();
            di.sortDetached = cg(function(e) {
                return e.compareDocumentPosition(cD.createElement("div")) & 1;
            });
            if (!cg(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#";
                })) {
                dk("type|href|height|width", function(dn, e, dp) {
                    if (!dp) {
                        return dn.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }
            if (!di.attributes || !cg(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === "";
                })) {
                dk("value", function(dn, e, dp) {
                    if (!dp && dn.nodeName.toLowerCase() === "input") {
                        return dn.defaultValue;
                    }
                });
            }
            if (!cg(function(e) {
                    return e.getAttribute("disabled") == null;
                })) {
                dk(b8, function(dn, e, dq) {
                    var dp;
                    if (!dq) {
                        return (dp = dn.getAttributeNode(e)) && dp.specified ? dp.value : dn[e] === true ? e.toLowerCase() : null;
                    }
                });
            }
            bL.find = cx;
            bL.expr = cx.selectors;
            bL.expr[":"] = bL.expr.pseudos;
            bL.unique = cx.uniqueSort;
            bL.text = cx.getText;
            bL.isXMLDoc = cx.isXML;
            bL.contains = cx.contains;
        })(a4);
        var b1 = {};

        function af(b6) {
            var e = b1[b6] = {};
            bL.each(b6.match(ad) || [], function(b8, b7) {
                e[b7] = true;
            });
            return e;
        }
        bL.Callbacks = function(cf) {
            cf = typeof cf === "string" ? (b1[cf] || af(cf)) : bL.extend({}, cf);
            var b9, b8, e, ca, cb, b7, cc = [],
                cd = !cf.once && [],
                b6 = function(cg) {
                    b8 = cf.memory && cg;
                    e = true;
                    cb = b7 || 0;
                    b7 = 0;
                    ca = cc.length;
                    b9 = true;
                    for (; cc && cb < ca; cb++) {
                        if (cc[cb].apply(cg[0], cg[1]) === false && cf.stopOnFalse) {
                            b8 = false;
                            break;
                        }
                    }
                    b9 = false;
                    if (cc) {
                        if (cd) {
                            if (cd.length) {
                                b6(cd.shift());
                            }
                        } else {
                            if (b8) {
                                cc = [];
                            } else {
                                ce.disable();
                            }
                        }
                    }
                },
                ce = {
                    add: function() {
                        if (cc) {
                            var ch = cc.length;
                            (function cg(ci) {
                                bL.each(ci, function(ck, cj) {
                                    var cl = bL.type(cj);
                                    if (cl === "function") {
                                        if (!cf.unique || !ce.has(cj)) {
                                            cc.push(cj);
                                        }
                                    } else {
                                        if (cj && cj.length && cl !== "string") {
                                            cg(cj);
                                        }
                                    }
                                });
                            })(arguments);
                            if (b9) {
                                ca = cc.length;
                            } else {
                                if (b8) {
                                    b7 = ch;
                                    b6(b8);
                                }
                            }
                        }
                        return this;
                    },
                    remove: function() {
                        if (cc) {
                            bL.each(arguments, function(ci, cg) {
                                var ch;
                                while ((ch = bL.inArray(cg, cc, ch)) > -1) {
                                    cc.splice(ch, 1);
                                    if (b9) {
                                        if (ch <= ca) {
                                            ca--;
                                        }
                                        if (ch <= cb) {
                                            cb--;
                                        }
                                    }
                                }
                            });
                        }
                        return this;
                    },
                    has: function(cg) {
                        return cg ? bL.inArray(cg, cc) > -1 : !!(cc && cc.length);
                    },
                    empty: function() {
                        cc = [];
                        ca = 0;
                        return this;
                    },
                    disable: function() {
                        cc = cd = b8 = aH;
                        return this;
                    },
                    disabled: function() {
                        return !cc;
                    },
                    lock: function() {
                        cd = aH;
                        if (!b8) {
                            ce.disable();
                        }
                        return this;
                    },
                    locked: function() {
                        return !cd;
                    },
                    fireWith: function(ch, cg) {
                        if (cc && (!e || cd)) {
                            cg = cg || [];
                            cg = [ch, cg.slice ? cg.slice() : cg];
                            if (b9) {
                                cd.push(cg);
                            } else {
                                b6(cg);
                            }
                        }
                        return this;
                    },
                    fire: function() {
                        ce.fireWith(this, arguments);
                        return this;
                    },
                    fired: function() {
                        return !!e;
                    }
                };
            return ce;
        };
        bL.extend({
            Deferred: function(b7) {
                var b6 = [
                        ["resolve", "done", bL.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", bL.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", bL.Callbacks("memory")]
                    ],
                    b8 = "pending",
                    b9 = {
                        state: function() {
                            return b8;
                        },
                        always: function() {
                            e.done(arguments).fail(arguments);
                            return this;
                        },
                        then: function() {
                            var ca = arguments;
                            return bL.Deferred(function(cb) {
                                bL.each(b6, function(cd, cc) {
                                    var cf = cc[0],
                                        ce = bL.isFunction(ca[cd]) && ca[cd];
                                    e[cc[1]](function() {
                                        var cg = ce && ce.apply(this, arguments);
                                        if (cg && bL.isFunction(cg.promise)) {
                                            cg.promise().done(cb.resolve).fail(cb.reject).progress(cb.notify);
                                        } else {
                                            cb[cf + "With"](this === b9 ? cb.promise() : this, ce ? [cg] : arguments);
                                        }
                                    });
                                });
                                ca = null;
                            }).promise();
                        },
                        promise: function(ca) {
                            return ca != null ? bL.extend(ca, b9) : b9;
                        }
                    },
                    e = {};
                b9.pipe = b9.then;
                bL.each(b6, function(cb, ca) {
                    var cd = ca[2],
                        cc = ca[3];
                    b9[ca[1]] = cd.add;
                    if (cc) {
                        cd.add(function() {
                            b8 = cc;
                        }, b6[cb ^ 1][2].disable, b6[2][2].lock);
                    }
                    e[ca[0]] = function() {
                        e[ca[0] + "With"](this === e ? b9 : this, arguments);
                        return this;
                    };
                    e[ca[0] + "With"] = cd.fireWith;
                });
                b9.promise(e);
                if (b7) {
                    b7.call(e, e);
                }
                return e;
            },
            when: function(b9) {
                var b7 = 0,
                    cb = a6.call(arguments),
                    e = cb.length,
                    b6 = e !== 1 || (b9 && bL.isFunction(b9.promise)) ? e : 0,
                    ce = b6 === 1 ? b9 : bL.Deferred(),
                    b8 = function(cg, ch, cf) {
                        return function(ci) {
                            ch[cg] = this;
                            cf[cg] = arguments.length > 1 ? a6.call(arguments) : ci;
                            if (cf === cd) {
                                ce.notifyWith(ch, cf);
                            } else {
                                if (!(--b6)) {
                                    ce.resolveWith(ch, cf);
                                }
                            }
                        };
                    },
                    cd, ca, cc;
                if (e > 1) {
                    cd = new Array(e);
                    ca = new Array(e);
                    cc = new Array(e);
                    for (; b7 < e; b7++) {
                        if (cb[b7] && bL.isFunction(cb[b7].promise)) {
                            cb[b7].promise().done(b8(b7, cc, cb)).fail(ce.reject).progress(b8(b7, ca, cd));
                        } else {
                            --b6;
                        }
                    }
                }
                if (!b6) {
                    ce.resolveWith(cc, cb);
                }
                return ce.promise();
            }
        });
        bL.support = (function(ch) {
            var cg, ce, cd, cf, cc, b8, ca, b7, b9, b6 = o.createElement("div");
            b6.setAttribute("className", "t");
            b6.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
            cg = b6.getElementsByTagName("*") || [];
            ce = b6.getElementsByTagName("a")[0];
            if (!ce || !ce.style || !cg.length) {
                return ch;
            }
            cf = o.createElement("select");
            b8 = cf.appendChild(o.createElement("option"));
            cd = b6.getElementsByTagName("input")[0];
            ce.style.cssText = "top:1px;float:left;opacity:.5";
            ch.getSetAttribute = b6.className !== "t";
            ch.leadingWhitespace = b6.firstChild.nodeType === 3;
            ch.tbody = !b6.getElementsByTagName("tbody").length;
            ch.htmlSerialize = !!b6.getElementsByTagName("link").length;
            ch.style = /top/.test(ce.getAttribute("style"));
            ch.hrefNormalized = ce.getAttribute("href") === "/a";
            ch.opacity = /^0.5/.test(ce.style.opacity);
            ch.cssFloat = !!ce.style.cssFloat;
            ch.checkOn = !!cd.value;
            ch.optSelected = b8.selected;
            ch.enctype = !!o.createElement("form").enctype;
            ch.html5Clone = o.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
            ch.inlineBlockNeedsLayout = false;
            ch.shrinkWrapBlocks = false;
            ch.pixelPosition = false;
            ch.deleteExpando = true;
            ch.noCloneEvent = true;
            ch.reliableMarginRight = true;
            ch.boxSizingReliable = true;
            cd.checked = true;
            ch.noCloneChecked = cd.cloneNode(true).checked;
            cf.disabled = true;
            ch.optDisabled = !b8.disabled;
            try {
                delete b6.test;
            } catch (cb) {
                ch.deleteExpando = false;
            }
            cd = o.createElement("input");
            cd.setAttribute("value", "");
            ch.input = cd.getAttribute("value") === "";
            cd.value = "t";
            cd.setAttribute("type", "radio");
            ch.radioValue = cd.value === "t";
            cd.setAttribute("checked", "t");
            cd.setAttribute("name", "t");
            cc = o.createDocumentFragment();
            cc.appendChild(cd);
            ch.appendChecked = cd.checked;
            ch.checkClone = cc.cloneNode(true).cloneNode(true).lastChild.checked;
            if (b6.attachEvent) {
                b6.attachEvent("onclick", function() {
                    ch.noCloneEvent = false;
                });
                b6.cloneNode(true).click();
            }
            for (b9 in {
                    submit: true,
                    change: true,
                    focusin: true
                }) {
                b6.setAttribute(ca = "on" + b9, "t");
                ch[b9 + "Bubbles"] = ca in a4 || b6.attributes[ca].expando === false;
            }
            b6.style.backgroundClip = "content-box";
            b6.cloneNode(true).style.backgroundClip = "";
            ch.clearCloneStyle = b6.style.backgroundClip === "content-box";
            for (b9 in bL(ch)) {
                break;
            }
            ch.ownLast = b9 !== "0";
            bL(function() {
                var ci, cl, ck, cj = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    e = o.getElementsByTagName("body")[0];
                if (!e) {
                    return;
                }
                ci = o.createElement("div");
                ci.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                e.appendChild(ci).appendChild(b6);
                b6.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                ck = b6.getElementsByTagName("td");
                ck[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                b7 = (ck[0].offsetHeight === 0);
                ck[0].style.display = "";
                ck[1].style.display = "none";
                ch.reliableHiddenOffsets = b7 && (ck[0].offsetHeight === 0);
                b6.innerHTML = "";
                b6.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                bL.swap(e, e.style.zoom != null ? {
                    zoom: 1
                } : {}, function() {
                    ch.boxSizing = b6.offsetWidth === 4;
                });
                if (a4.getComputedStyle) {
                    ch.pixelPosition = (a4.getComputedStyle(b6, null) || {}).top !== "1%";
                    ch.boxSizingReliable = (a4.getComputedStyle(b6, null) || {
                        width: "4px"
                    }).width === "4px";
                    cl = b6.appendChild(o.createElement("div"));
                    cl.style.cssText = b6.style.cssText = cj;
                    cl.style.marginRight = cl.style.width = "0";
                    b6.style.width = "1px";
                    ch.reliableMarginRight = !parseFloat((a4.getComputedStyle(cl, null) || {}).marginRight);
                }
                if (typeof b6.style.zoom !== aD) {
                    b6.innerHTML = "";
                    b6.style.cssText = cj + "width:1px;padding:1px;display:inline;zoom:1";
                    ch.inlineBlockNeedsLayout = (b6.offsetWidth === 3);
                    b6.style.display = "block";
                    b6.innerHTML = "<div></div>";
                    b6.firstChild.style.width = "5px";
                    ch.shrinkWrapBlocks = (b6.offsetWidth !== 3);
                    if (ch.inlineBlockNeedsLayout) {
                        e.style.zoom = 1;
                    }
                }
                e.removeChild(ci);
                ci = b6 = ck = cl = null;
            });
            cg = cf = cc = b8 = ce = cd = null;
            return ch;
        })({});
        var by = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            aO = /([A-Z])/g;

        function bc(b8, b6, ca, b9) {
            if (!bL.acceptData(b8)) {
                return;
            }
            var cc, cb, cd = bL.expando,
                ce = b8.nodeType,
                e = ce ? bL.cache : b8,
                b7 = ce ? b8[cd] : b8[cd] && cd;
            if ((!b7 || !e[b7] || (!b9 && !e[b7].data)) && ca === aH && typeof b6 === "string") {
                return;
            }
            if (!b7) {
                if (ce) {
                    b7 = b8[cd] = a8.pop() || bL.guid++;
                } else {
                    b7 = cd;
                }
            }
            if (!e[b7]) {
                e[b7] = ce ? {} : {
                    toJSON: bL.noop
                };
            }
            if (typeof b6 === "object" || typeof b6 === "function") {
                if (b9) {
                    e[b7] = bL.extend(e[b7], b6);
                } else {
                    e[b7].data = bL.extend(e[b7].data, b6);
                }
            }
            cb = e[b7];
            if (!b9) {
                if (!cb.data) {
                    cb.data = {};
                }
                cb = cb.data;
            }
            if (ca !== aH) {
                cb[bL.camelCase(b6)] = ca;
            }
            if (typeof b6 === "string") {
                cc = cb[b6];
                if (cc == null) {
                    cc = cb[bL.camelCase(b6)];
                }
            } else {
                cc = cb;
            }
            return cc;
        }

        function aa(b9, b7, e) {
            if (!bL.acceptData(b9)) {
                return;
            }
            var cb, b8, ca = b9.nodeType,
                b6 = ca ? bL.cache : b9,
                cc = ca ? b9[bL.expando] : bL.expando;
            if (!b6[cc]) {
                return;
            }
            if (b7) {
                cb = e ? b6[cc] : b6[cc].data;
                if (cb) {
                    if (!bL.isArray(b7)) {
                        if (b7 in cb) {
                            b7 = [b7];
                        } else {
                            b7 = bL.camelCase(b7);
                            if (b7 in cb) {
                                b7 = [b7];
                            } else {
                                b7 = b7.split(" ");
                            }
                        }
                    } else {
                        b7 = b7.concat(bL.map(b7, bL.camelCase));
                    }
                    b8 = b7.length;
                    while (b8--) {
                        delete cb[b7[b8]];
                    }
                    if (e ? !O(cb) : !bL.isEmptyObject(cb)) {
                        return;
                    }
                }
            }
            if (!e) {
                delete b6[cc].data;
                if (!O(b6[cc])) {
                    return;
                }
            }
            if (ca) {
                bL.cleanData([b9], true);
            } else {
                if (bL.support.deleteExpando || b6 != b6.window) {
                    delete b6[cc];
                } else {
                    b6[cc] = null;
                }
            }
        }
        bL.extend({
            cache: {},
            noData: {
                applet: true,
                embed: true,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                e = e.nodeType ? bL.cache[e[bL.expando]] : e[bL.expando];
                return !!e && !O(e);
            },
            data: function(b6, e, b7) {
                return bc(b6, e, b7);
            },
            removeData: function(b6, e) {
                return aa(b6, e);
            },
            _data: function(b6, e, b7) {
                return bc(b6, e, b7, true);
            },
            _removeData: function(b6, e) {
                return aa(b6, e, true);
            },
            acceptData: function(b6) {
                if (b6.nodeType && b6.nodeType !== 1 && b6.nodeType !== 9) {
                    return false;
                }
                var e = b6.nodeName && bL.noData[b6.nodeName.toLowerCase()];
                return !e || e !== true && b6.getAttribute("classid") === e;
            }
        });
        bL.fn.extend({
            data: function(b8, cb) {
                var b6, e, ca = null,
                    b7 = 0,
                    b9 = this[0];
                if (b8 === aH) {
                    if (this.length) {
                        ca = bL.data(b9);
                        if (b9.nodeType === 1 && !bL._data(b9, "parsedAttrs")) {
                            b6 = b9.attributes;
                            for (; b7 < b6.length; b7++) {
                                e = b6[b7].name;
                                if (e.indexOf("data-") === 0) {
                                    e = bL.camelCase(e.slice(5));
                                    bA(b9, e, ca[e]);
                                }
                            }
                            bL._data(b9, "parsedAttrs", true);
                        }
                    }
                    return ca;
                }
                if (typeof b8 === "object") {
                    return this.each(function() {
                        bL.data(this, b8);
                    });
                }
                return arguments.length > 1 ? this.each(function() {
                    bL.data(this, b8, cb);
                }) : b9 ? bA(b9, b8, bL.data(b9, b8)) : null;
            },
            removeData: function(e) {
                return this.each(function() {
                    bL.removeData(this, e);
                });
            }
        });

        function bA(b8, b7, b9) {
            if (b9 === aH && b8.nodeType === 1) {
                var b6 = "data-" + b7.replace(aO, "-$1").toLowerCase();
                b9 = b8.getAttribute(b6);
                if (typeof b9 === "string") {
                    try {
                        b9 = b9 === "true" ? true : b9 === "false" ? false : b9 === "null" ? null : +b9 + "" === b9 ? +b9 : by.test(b9) ? bL.parseJSON(b9) : b9;
                    } catch (ca) {}
                    bL.data(b8, b7, b9);
                } else {
                    b9 = aH;
                }
            }
            return b9;
        }

        function O(b6) {
            var e;
            for (e in b6) {
                if (e === "data" && bL.isEmptyObject(b6[e])) {
                    continue;
                }
                if (e !== "toJSON") {
                    return false;
                }
            }
            return true;
        }
        bL.extend({
            queue: function(b7, b6, b8) {
                var e;
                if (b7) {
                    b6 = (b6 || "fx") + "queue";
                    e = bL._data(b7, b6);
                    if (b8) {
                        if (!e || bL.isArray(b8)) {
                            e = bL._data(b7, b6, bL.makeArray(b8));
                        } else {
                            e.push(b8);
                        }
                    }
                    return e || [];
                }
            },
            dequeue: function(ca, b9) {
                b9 = b9 || "fx";
                var b6 = bL.queue(ca, b9),
                    cb = b6.length,
                    b8 = b6.shift(),
                    e = bL._queueHooks(ca, b9),
                    b7 = function() {
                        bL.dequeue(ca, b9);
                    };
                if (b8 === "inprogress") {
                    b8 = b6.shift();
                    cb--;
                }
                if (b8) {
                    if (b9 === "fx") {
                        b6.unshift("inprogress");
                    }
                    delete e.stop;
                    b8.call(ca, b7, e);
                }
                if (!cb && e) {
                    e.empty.fire();
                }
            },
            _queueHooks: function(b7, b6) {
                var e = b6 + "queueHooks";
                return bL._data(b7, e) || bL._data(b7, e, {
                    empty: bL.Callbacks("once memory").add(function() {
                        bL._removeData(b7, b6 + "queue");
                        bL._removeData(b7, e);
                    })
                });
            }
        });
        bL.fn.extend({
            queue: function(e, b6) {
                var b7 = 2;
                if (typeof e !== "string") {
                    b6 = e;
                    e = "fx";
                    b7--;
                }
                if (arguments.length < b7) {
                    return bL.queue(this[0], e);
                }
                return b6 === aH ? this : this.each(function() {
                    var b8 = bL.queue(this, e, b6);
                    bL._queueHooks(this, e);
                    if (e === "fx" && b8[0] !== "inprogress") {
                        bL.dequeue(this, e);
                    }
                });
            },
            dequeue: function(e) {
                return this.each(function() {
                    bL.dequeue(this, e);
                });
            },
            delay: function(b6, e) {
                b6 = bL.fx ? bL.fx.speeds[b6] || b6 : b6;
                e = e || "fx";
                return this.queue(e, function(b8, b7) {
                    var b9 = setTimeout(b8, b6);
                    b7.stop = function() {
                        clearTimeout(b9);
                    };
                });
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", []);
            },
            promise: function(b7, cb) {
                var b6, b8 = 1,
                    cc = bL.Deferred(),
                    ca = this,
                    e = this.length,
                    b9 = function() {
                        if (!(--b8)) {
                            cc.resolveWith(ca, [ca]);
                        }
                    };
                if (typeof b7 !== "string") {
                    cb = b7;
                    b7 = aH;
                }
                b7 = b7 || "fx";
                while (e--) {
                    b6 = bL._data(ca[e], b7 + "queueHooks");
                    if (b6 && b6.empty) {
                        b8++;
                        b6.empty.add(b9);
                    }
                }
                b9();
                return cc.promise(cb);
            }
        });
        var ba, b2, bO = /[\t\r\n\f]/g,
            ak = /\r/g,
            aG = /^(?:input|select|textarea|button|object)$/i,
            F = /^(?:a|area)$/i,
            ar = /^(?:checked|selected)$/i,
            bR = bL.support.getSetAttribute,
            bH = bL.support.input;
        bL.fn.extend({
            attr: function(e, b6) {
                return bL.access(this, bL.attr, e, b6, arguments.length > 1);
            },
            removeAttr: function(e) {
                return this.each(function() {
                    bL.removeAttr(this, e);
                });
            },
            prop: function(e, b6) {
                return bL.access(this, bL.prop, e, b6, arguments.length > 1);
            },
            removeProp: function(e) {
                e = bL.propFix[e] || e;
                return this.each(function() {
                    try {
                        this[e] = aH;
                        delete this[e];
                    } catch (b6) {}
                });
            },
            addClass: function(cc) {
                var b6, e, cd, b9, b7, b8 = 0,
                    ca = this.length,
                    cb = typeof cc === "string" && cc;
                if (bL.isFunction(cc)) {
                    return this.each(function(ce) {
                        bL(this).addClass(cc.call(this, ce, this.className));
                    });
                }
                if (cb) {
                    b6 = (cc || "").match(ad) || [];
                    for (; b8 < ca; b8++) {
                        e = this[b8];
                        cd = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bO, " ") : " ");
                        if (cd) {
                            b7 = 0;
                            while ((b9 = b6[b7++])) {
                                if (cd.indexOf(" " + b9 + " ") < 0) {
                                    cd += b9 + " ";
                                }
                            }
                            e.className = bL.trim(cd);
                        }
                    }
                }
                return this;
            },
            removeClass: function(cc) {
                var b6, e, cd, b9, b7, b8 = 0,
                    ca = this.length,
                    cb = arguments.length === 0 || typeof cc === "string" && cc;
                if (bL.isFunction(cc)) {
                    return this.each(function(ce) {
                        bL(this).removeClass(cc.call(this, ce, this.className));
                    });
                }
                if (cb) {
                    b6 = (cc || "").match(ad) || [];
                    for (; b8 < ca; b8++) {
                        e = this[b8];
                        cd = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bO, " ") : "");
                        if (cd) {
                            b7 = 0;
                            while ((b9 = b6[b7++])) {
                                while (cd.indexOf(" " + b9 + " ") >= 0) {
                                    cd = cd.replace(" " + b9 + " ", " ");
                                }
                            }
                            e.className = cc ? bL.trim(cd) : "";
                        }
                    }
                }
                return this;
            },
            toggleClass: function(b7, e) {
                var b6 = typeof b7;
                if (typeof e === "boolean" && b6 === "string") {
                    return e ? this.addClass(b7) : this.removeClass(b7);
                }
                if (bL.isFunction(b7)) {
                    return this.each(function(b8) {
                        bL(this).toggleClass(b7.call(this, b8, this.className, e), e);
                    });
                }
                return this.each(function() {
                    if (b6 === "string") {
                        var ca, b9 = 0,
                            b8 = bL(this),
                            cb = b7.match(ad) || [];
                        while ((ca = cb[b9++])) {
                            if (b8.hasClass(ca)) {
                                b8.removeClass(ca);
                            } else {
                                b8.addClass(ca);
                            }
                        }
                    } else {
                        if (b6 === aD || b6 === "boolean") {
                            if (this.className) {
                                bL._data(this, "__className__", this.className);
                            }
                            this.className = this.className || b7 === false ? "" : bL._data(this, "__className__") || "";
                        }
                    }
                });
            },
            hasClass: function(e) {
                var b8 = " " + e + " ",
                    b7 = 0,
                    b6 = this.length;
                for (; b7 < b6; b7++) {
                    if (this[b7].nodeType === 1 && (" " + this[b7].className + " ").replace(bO, " ").indexOf(b8) >= 0) {
                        return true;
                    }
                }
                return false;
            },
            val: function(b8) {
                var b6, e, b9, b7 = this[0];
                if (!arguments.length) {
                    if (b7) {
                        e = bL.valHooks[b7.type] || bL.valHooks[b7.nodeName.toLowerCase()];
                        if (e && "get" in e && (b6 = e.get(b7, "value")) !== aH) {
                            return b6;
                        }
                        b6 = b7.value;
                        return typeof b6 === "string" ? b6.replace(ak, "") : b6 == null ? "" : b6;
                    }
                    return;
                }
                b9 = bL.isFunction(b8);
                return this.each(function(ca) {
                    var cb;
                    if (this.nodeType !== 1) {
                        return;
                    }
                    if (b9) {
                        cb = b8.call(this, ca, bL(this).val());
                    } else {
                        cb = b8;
                    }
                    if (cb == null) {
                        cb = "";
                    } else {
                        if (typeof cb === "number") {
                            cb += "";
                        } else {
                            if (bL.isArray(cb)) {
                                cb = bL.map(cb, function(cc) {
                                    return cc == null ? "" : cc + "";
                                });
                            }
                        }
                    }
                    e = bL.valHooks[this.type] || bL.valHooks[this.nodeName.toLowerCase()];
                    if (!e || !("set" in e) || e.set(this, cb, "value") === aH) {
                        this.value = cb;
                    }
                });
            }
        });
        bL.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var b6 = bL.find.attr(e, "value");
                        return b6 != null ? b6 : e.text;
                    }
                },
                select: {
                    get: function(e) {
                        var cb, b7, cd = e.options,
                            b9 = e.selectedIndex,
                            b8 = e.type === "select-one" || b9 < 0,
                            cc = b8 ? null : [],
                            ca = b8 ? b9 + 1 : cd.length,
                            b6 = b9 < 0 ? ca : b8 ? b9 : 0;
                        for (; b6 < ca; b6++) {
                            b7 = cd[b6];
                            if ((b7.selected || b6 === b9) && (bL.support.optDisabled ? !b7.disabled : b7.getAttribute("disabled") === null) && (!b7.parentNode.disabled || !bL.nodeName(b7.parentNode, "optgroup"))) {
                                cb = bL(b7).val();
                                if (b8) {
                                    return cb;
                                }
                                cc.push(cb);
                            }
                        }
                        return cc;
                    },
                    set: function(b9, ca) {
                        var cb, b8, b6 = b9.options,
                            e = bL.makeArray(ca),
                            b7 = b6.length;
                        while (b7--) {
                            b8 = b6[b7];
                            if ((b8.selected = bL.inArray(bL(b8).val(), e) >= 0)) {
                                cb = true;
                            }
                        }
                        if (!cb) {
                            b9.selectedIndex = -1;
                        }
                        return e;
                    }
                }
            },
            attr: function(b9, b8, ca) {
                var e, b7, b6 = b9.nodeType;
                if (!b9 || b6 === 3 || b6 === 8 || b6 === 2) {
                    return;
                }
                if (typeof b9.getAttribute === aD) {
                    return bL.prop(b9, b8, ca);
                }
                if (b6 !== 1 || !bL.isXMLDoc(b9)) {
                    b8 = b8.toLowerCase();
                    e = bL.attrHooks[b8] || (bL.expr.match.bool.test(b8) ? b2 : ba);
                }
                if (ca !== aH) {
                    if (ca === null) {
                        bL.removeAttr(b9, b8);
                    } else {
                        if (e && "set" in e && (b7 = e.set(b9, ca, b8)) !== aH) {
                            return b7;
                        } else {
                            b9.setAttribute(b8, ca + "");
                            return ca;
                        }
                    }
                } else {
                    if (e && "get" in e && (b7 = e.get(b9, b8)) !== null) {
                        return b7;
                    } else {
                        b7 = bL.find.attr(b9, b8);
                        return b7 == null ? aH : b7;
                    }
                }
            },
            removeAttr: function(b7, b9) {
                var e, b8, b6 = 0,
                    ca = b9 && b9.match(ad);
                if (ca && b7.nodeType === 1) {
                    while ((e = ca[b6++])) {
                        b8 = bL.propFix[e] || e;
                        if (bL.expr.match.bool.test(e)) {
                            if (bH && bR || !ar.test(e)) {
                                b7[b8] = false;
                            } else {
                                b7[bL.camelCase("default-" + e)] = b7[b8] = false;
                            }
                        } else {
                            bL.attr(b7, e, "");
                        }
                        b7.removeAttribute(bR ? e : b8);
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(e, b6) {
                        if (!bL.support.radioValue && b6 === "radio" && bL.nodeName(e, "input")) {
                            var b7 = e.value;
                            e.setAttribute("type", b6);
                            if (b7) {
                                e.value = b7;
                            }
                            return b6;
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(ca, b8, cb) {
                var b7, e, b9, b6 = ca.nodeType;
                if (!ca || b6 === 3 || b6 === 8 || b6 === 2) {
                    return;
                }
                b9 = b6 !== 1 || !bL.isXMLDoc(ca);
                if (b9) {
                    b8 = bL.propFix[b8] || b8;
                    e = bL.propHooks[b8];
                }
                if (cb !== aH) {
                    return e && "set" in e && (b7 = e.set(ca, cb, b8)) !== aH ? b7 : (ca[b8] = cb);
                } else {
                    return e && "get" in e && (b7 = e.get(ca, b8)) !== null ? b7 : ca[b8];
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(b6) {
                        var e = bL.find.attr(b6, "tabindex");
                        return e ? parseInt(e, 10) : aG.test(b6.nodeName) || F.test(b6.nodeName) && b6.href ? 0 : -1;
                    }
                }
            }
        });
        b2 = {
            set: function(b6, b7, e) {
                if (b7 === false) {
                    bL.removeAttr(b6, e);
                } else {
                    if (bH && bR || !ar.test(e)) {
                        b6.setAttribute(!bR && bL.propFix[e] || e, e);
                    } else {
                        b6[bL.camelCase("default-" + e)] = b6[e] = true;
                    }
                }
                return e;
            }
        };
        bL.each(bL.expr.match.bool.source.match(/\w+/g), function(b7, b6) {
            var e = bL.expr.attrHandle[b6] || bL.find.attr;
            bL.expr.attrHandle[b6] = bH && bR || !ar.test(b6) ? function(cb, b9, cc) {
                var ca = bL.expr.attrHandle[b9],
                    b8 = cc ? aH : (bL.expr.attrHandle[b9] = aH) != e(cb, b9, cc) ? b9.toLowerCase() : null;
                bL.expr.attrHandle[b9] = ca;
                return b8;
            } : function(b9, b8, ca) {
                return ca ? aH : b9[bL.camelCase("default-" + b8)] ? b8.toLowerCase() : null;
            };
        });
        if (!bH || !bR) {
            bL.attrHooks.value = {
                set: function(b6, b7, e) {
                    if (bL.nodeName(b6, "input")) {
                        b6.defaultValue = b7;
                    } else {
                        return ba && ba.set(b6, b7, e);
                    }
                }
            };
        }
        if (!bR) {
            ba = {
                set: function(b7, b8, b6) {
                    var e = b7.getAttributeNode(b6);
                    if (!e) {
                        b7.setAttributeNode((e = b7.ownerDocument.createAttribute(b6)));
                    }
                    e.value = b8 += "";
                    return b6 === "value" || b8 === b7.getAttribute(b6) ? b8 : aH;
                }
            };
            bL.expr.attrHandle.id = bL.expr.attrHandle.name = bL.expr.attrHandle.coords = function(b7, b6, b8) {
                var e;
                return b8 ? aH : (e = b7.getAttributeNode(b6)) && e.value !== "" ? e.value : null;
            };
            bL.valHooks.button = {
                get: function(b7, b6) {
                    var e = b7.getAttributeNode(b6);
                    return e && e.specified ? e.value : aH;
                },
                set: ba.set
            };
            bL.attrHooks.contenteditable = {
                set: function(b6, b7, e) {
                    ba.set(b6, b7 === "" ? false : b7, e);
                }
            };
            bL.each(["width", "height"], function(b6, e) {
                bL.attrHooks[e] = {
                    set: function(b7, b8) {
                        if (b8 === "") {
                            b7.setAttribute(e, "auto");
                            return b8;
                        }
                    }
                };
            });
        }
        if (!bL.support.hrefNormalized) {
            bL.each(["href", "src"], function(b6, e) {
                bL.propHooks[e] = {
                    get: function(b7) {
                        return b7.getAttribute(e, 4);
                    }
                };
            });
        }
        if (!bL.support.style) {
            bL.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || aH;
                },
                set: function(e, b6) {
                    return (e.style.cssText = b6 + "");
                }
            };
        }
        if (!bL.support.optSelected) {
            bL.propHooks.selected = {
                get: function(b6) {
                    var e = b6.parentNode;
                    if (e) {
                        e.selectedIndex;
                        if (e.parentNode) {
                            e.parentNode.selectedIndex;
                        }
                    }
                    return null;
                }
            };
        }
        bL.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            bL.propFix[this.toLowerCase()] = this;
        });
        if (!bL.support.enctype) {
            bL.propFix.enctype = "encoding";
        }
        bL.each(["radio", "checkbox"], function() {
            bL.valHooks[this] = {
                set: function(e, b6) {
                    if (bL.isArray(b6)) {
                        return (e.checked = bL.inArray(bL(e).val(), b6) >= 0);
                    }
                }
            };
            if (!bL.support.checkOn) {
                bL.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value;
                };
            }
        });
        var bJ = /^(?:input|select|textarea)$/i,
            a5 = /^key/,
            bP = /^(?:mouse|contextmenu)|click/,
            bD = /^(?:focusinfocus|focusoutblur)$/,
            bw = /^([^.]*)(?:\.(.+)|)$/;

        function S() {
            return true;
        }

        function Y() {
            return false;
        }

        function al() {
            try {
                return o.activeElement;
            } catch (e) {}
        }
        bL.event = {
            global: {},
            add: function(b9, ce, cj, cb, ca) {
                var cc, ck, cl, b7, cg, cd, ci, b8, ch, e, b6, cf = bL._data(b9);
                if (!cf) {
                    return;
                }
                if (cj.handler) {
                    b7 = cj;
                    cj = b7.handler;
                    ca = b7.selector;
                }
                if (!cj.guid) {
                    cj.guid = bL.guid++;
                }
                if (!(ck = cf.events)) {
                    ck = cf.events = {};
                }
                if (!(cd = cf.handle)) {
                    cd = cf.handle = function(cm) {
                        return typeof bL !== aD && (!cm || bL.event.triggered !== cm.type) ? bL.event.dispatch.apply(cd.elem, arguments) : aH;
                    };
                    cd.elem = b9;
                }
                ce = (ce || "").match(ad) || [""];
                cl = ce.length;
                while (cl--) {
                    cc = bw.exec(ce[cl]) || [];
                    ch = b6 = cc[1];
                    e = (cc[2] || "").split(".").sort();
                    if (!ch) {
                        continue;
                    }
                    cg = bL.event.special[ch] || {};
                    ch = (ca ? cg.delegateType : cg.bindType) || ch;
                    cg = bL.event.special[ch] || {};
                    ci = bL.extend({
                        type: ch,
                        origType: b6,
                        data: cb,
                        handler: cj,
                        guid: cj.guid,
                        selector: ca,
                        needsContext: ca && bL.expr.match.needsContext.test(ca),
                        namespace: e.join(".")
                    }, b7);
                    if (!(b8 = ck[ch])) {
                        b8 = ck[ch] = [];
                        b8.delegateCount = 0;
                        if (!cg.setup || cg.setup.call(b9, cb, e, cd) === false) {
                            if (b9.addEventListener) {
                                b9.addEventListener(ch, cd, false);
                            } else {
                                if (b9.attachEvent) {
                                    b9.attachEvent("on" + ch, cd);
                                }
                            }
                        }
                    }
                    if (cg.add) {
                        cg.add.call(b9, ci);
                        if (!ci.handler.guid) {
                            ci.handler.guid = cj.guid;
                        }
                    }
                    if (ca) {
                        b8.splice(b8.delegateCount++, 0, ci);
                    } else {
                        b8.push(ci);
                    }
                    bL.event.global[ch] = true;
                }
                b9 = null;
            },
            remove: function(b8, ce, cl, b9, cd) {
                var cb, ci, cc, ca, ck, cj, cg, b7, ch, e, b6, cf = bL.hasData(b8) && bL._data(b8);
                if (!cf || !(cj = cf.events)) {
                    return;
                }
                ce = (ce || "").match(ad) || [""];
                ck = ce.length;
                while (ck--) {
                    cc = bw.exec(ce[ck]) || [];
                    ch = b6 = cc[1];
                    e = (cc[2] || "").split(".").sort();
                    if (!ch) {
                        for (ch in cj) {
                            bL.event.remove(b8, ch + ce[ck], cl, b9, true);
                        }
                        continue;
                    }
                    cg = bL.event.special[ch] || {};
                    ch = (b9 ? cg.delegateType : cg.bindType) || ch;
                    b7 = cj[ch] || [];
                    cc = cc[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    ca = cb = b7.length;
                    while (cb--) {
                        ci = b7[cb];
                        if ((cd || b6 === ci.origType) && (!cl || cl.guid === ci.guid) && (!cc || cc.test(ci.namespace)) && (!b9 || b9 === ci.selector || b9 === "**" && ci.selector)) {
                            b7.splice(cb, 1);
                            if (ci.selector) {
                                b7.delegateCount--;
                            }
                            if (cg.remove) {
                                cg.remove.call(b8, ci);
                            }
                        }
                    }
                    if (ca && !b7.length) {
                        if (!cg.teardown || cg.teardown.call(b8, e, cf.handle) === false) {
                            bL.removeEvent(b8, ch, cf.handle);
                        }
                        delete cj[ch];
                    }
                }
                if (bL.isEmptyObject(cj)) {
                    delete cf.handle;
                    bL._removeData(b8, "events");
                }
            },
            trigger: function(b6, cd, b9, ck) {
                var ce, b8, ci, cj, cg, cc, cb, ca = [b9 || o],
                    ch = W.call(b6, "type") ? b6.type : b6,
                    b7 = W.call(b6, "namespace") ? b6.namespace.split(".") : [];
                ci = cc = b9 = b9 || o;
                if (b9.nodeType === 3 || b9.nodeType === 8) {
                    return;
                }
                if (bD.test(ch + bL.event.triggered)) {
                    return;
                }
                if (ch.indexOf(".") >= 0) {
                    b7 = ch.split(".");
                    ch = b7.shift();
                    b7.sort();
                }
                b8 = ch.indexOf(":") < 0 && "on" + ch;
                b6 = b6[bL.expando] ? b6 : new bL.Event(ch, typeof b6 === "object" && b6);
                b6.isTrigger = ck ? 2 : 3;
                b6.namespace = b7.join(".");
                b6.namespace_re = b6.namespace ? new RegExp("(^|\\.)" + b7.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                b6.result = aH;
                if (!b6.target) {
                    b6.target = b9;
                }
                cd = cd == null ? [b6] : bL.makeArray(cd, [b6]);
                cg = bL.event.special[ch] || {};
                if (!ck && cg.trigger && cg.trigger.apply(b9, cd) === false) {
                    return;
                }
                if (!ck && !cg.noBubble && !bL.isWindow(b9)) {
                    cj = cg.delegateType || ch;
                    if (!bD.test(cj + ch)) {
                        ci = ci.parentNode;
                    }
                    for (; ci; ci = ci.parentNode) {
                        ca.push(ci);
                        cc = ci;
                    }
                    if (cc === (b9.ownerDocument || o)) {
                        ca.push(cc.defaultView || cc.parentWindow || a4);
                    }
                }
                cb = 0;
                while ((ci = ca[cb++]) && !b6.isPropagationStopped()) {
                    b6.type = cb > 1 ? cj : cg.bindType || ch;
                    ce = (bL._data(ci, "events") || {})[b6.type] && bL._data(ci, "handle");
                    if (ce) {
                        ce.apply(ci, cd);
                    }
                    ce = b8 && ci[b8];
                    if (ce && bL.acceptData(ci) && ce.apply && ce.apply(ci, cd) === false) {
                        b6.preventDefault();
                    }
                }
                b6.type = ch;
                if (!ck && !b6.isDefaultPrevented()) {
                    if ((!cg._default || cg._default.apply(ca.pop(), cd) === false) && bL.acceptData(b9)) {
                        if (b8 && b9[ch] && !bL.isWindow(b9)) {
                            cc = b9[b8];
                            if (cc) {
                                b9[b8] = null;
                            }
                            bL.event.triggered = ch;
                            try {
                                b9[ch]();
                            } catch (cf) {}
                            bL.event.triggered = aH;
                            if (cc) {
                                b9[b8] = cc;
                            }
                        }
                    }
                }
                return b6.result;
            },
            dispatch: function(e) {
                e = bL.event.fix(e);
                var b9, ca, ce, b6, b8, cd = [],
                    cc = a6.call(arguments),
                    b7 = (bL._data(this, "events") || {})[e.type] || [],
                    cb = bL.event.special[e.type] || {};
                cc[0] = e;
                e.delegateTarget = this;
                if (cb.preDispatch && cb.preDispatch.call(this, e) === false) {
                    return;
                }
                cd = bL.event.handlers.call(this, e, b7);
                b9 = 0;
                while ((b6 = cd[b9++]) && !e.isPropagationStopped()) {
                    e.currentTarget = b6.elem;
                    b8 = 0;
                    while ((ce = b6.handlers[b8++]) && !e.isImmediatePropagationStopped()) {
                        if (!e.namespace_re || e.namespace_re.test(ce.namespace)) {
                            e.handleObj = ce;
                            e.data = ce.data;
                            ca = ((bL.event.special[ce.origType] || {}).handle || ce.handler).apply(b6.elem, cc);
                            if (ca !== aH) {
                                if ((e.result = ca) === false) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (cb.postDispatch) {
                    cb.postDispatch.call(this, e);
                }
                return e.result;
            },
            handlers: function(e, b7) {
                var b6, cc, ca, b9, cb = [],
                    b8 = b7.delegateCount,
                    cd = e.target;
                if (b8 && cd.nodeType && (!e.button || e.type !== "click")) {
                    for (; cd != this; cd = cd.parentNode || this) {
                        if (cd.nodeType === 1 && (cd.disabled !== true || e.type !== "click")) {
                            ca = [];
                            for (b9 = 0; b9 < b8; b9++) {
                                cc = b7[b9];
                                b6 = cc.selector + " ";
                                if (ca[b6] === aH) {
                                    ca[b6] = cc.needsContext ? bL(b6, this).index(cd) >= 0 : bL.find(b6, this, null, [cd]).length;
                                }
                                if (ca[b6]) {
                                    ca.push(cc);
                                }
                            }
                            if (ca.length) {
                                cb.push({
                                    elem: cd,
                                    handlers: ca
                                });
                            }
                        }
                    }
                }
                if (b8 < b7.length) {
                    cb.push({
                        elem: this,
                        handlers: b7.slice(b8)
                    });
                }
                return cb;
            },
            fix: function(b8) {
                if (b8[bL.expando]) {
                    return b8;
                }
                var b6, cb, ca, b7 = b8.type,
                    e = b8,
                    b9 = this.fixHooks[b7];
                if (!b9) {
                    this.fixHooks[b7] = b9 = bP.test(b7) ? this.mouseHooks : a5.test(b7) ? this.keyHooks : {};
                }
                ca = b9.props ? this.props.concat(b9.props) : this.props;
                b8 = new bL.Event(e);
                b6 = ca.length;
                while (b6--) {
                    cb = ca[b6];
                    b8[cb] = e[cb];
                }
                if (!b8.target) {
                    b8.target = e.srcElement || o;
                }
                if (b8.target.nodeType === 3) {
                    b8.target = b8.target.parentNode;
                }
                b8.metaKey = !!b8.metaKey;
                return b9.filter ? b9.filter(b8, e) : b8;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(b6, e) {
                    if (b6.which == null) {
                        b6.which = e.charCode != null ? e.charCode : e.keyCode;
                    }
                    return b6;
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(b8, b7) {
                    var e, b9, ca, b6 = b7.button,
                        cb = b7.fromElement;
                    if (b8.pageX == null && b7.clientX != null) {
                        b9 = b8.target.ownerDocument || o;
                        ca = b9.documentElement;
                        e = b9.body;
                        b8.pageX = b7.clientX + (ca && ca.scrollLeft || e && e.scrollLeft || 0) - (ca && ca.clientLeft || e && e.clientLeft || 0);
                        b8.pageY = b7.clientY + (ca && ca.scrollTop || e && e.scrollTop || 0) - (ca && ca.clientTop || e && e.clientTop || 0);
                    }
                    if (!b8.relatedTarget && cb) {
                        b8.relatedTarget = cb === b8.target ? b7.toElement : cb;
                    }
                    if (!b8.which && b6 !== aH) {
                        b8.which = (b6 & 1 ? 1 : (b6 & 2 ? 3 : (b6 & 4 ? 2 : 0)));
                    }
                    return b8;
                }
            },
            special: {
                load: {
                    noBubble: true
                },
                focus: {
                    trigger: function() {
                        if (this !== al() && this.focus) {
                            try {
                                this.focus();
                                return false;
                            } catch (b6) {}
                        }
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === al() && this.blur) {
                            this.blur();
                            return false;
                        }
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (bL.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                            this.click();
                            return false;
                        }
                    },
                    _default: function(e) {
                        return bL.nodeName(e.target, "a");
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        if (e.result !== aH) {
                            e.originalEvent.returnValue = e.result;
                        }
                    }
                }
            },
            simulate: function(b7, b9, b8, b6) {
                var ca = bL.extend(new bL.Event(), b8, {
                    type: b7,
                    isSimulated: true,
                    originalEvent: {}
                });
                if (b6) {
                    bL.event.trigger(ca, null, b9);
                } else {
                    bL.event.dispatch.call(b9, ca);
                }
                if (ca.isDefaultPrevented()) {
                    b8.preventDefault();
                }
            }
        };
        bL.removeEvent = o.removeEventListener ? function(b6, e, b7) {
            if (b6.removeEventListener) {
                b6.removeEventListener(e, b7, false);
            }
        } : function(b7, b6, b8) {
            var e = "on" + b6;
            if (b7.detachEvent) {
                if (typeof b7[e] === aD) {
                    b7[e] = null;
                }
                b7.detachEvent(e, b8);
            }
        };
        bL.Event = function(b6, e) {
            if (!(this instanceof bL.Event)) {
                return new bL.Event(b6, e);
            }
            if (b6 && b6.type) {
                this.originalEvent = b6;
                this.type = b6.type;
                this.isDefaultPrevented = (b6.defaultPrevented || b6.returnValue === false || b6.getPreventDefault && b6.getPreventDefault()) ? S : Y;
            } else {
                this.type = b6;
            }
            if (e) {
                bL.extend(this, e);
            }
            this.timeStamp = b6 && b6.timeStamp || bL.now();
            this[bL.expando] = true;
        };
        bL.Event.prototype = {
            isDefaultPrevented: Y,
            isPropagationStopped: Y,
            isImmediatePropagationStopped: Y,
            preventDefault: function() {
                var b6 = this.originalEvent;
                this.isDefaultPrevented = S;
                if (!b6) {
                    return;
                }
                if (b6.preventDefault) {
                    b6.preventDefault();
                } else {
                    b6.returnValue = false;
                }
            },
            stopPropagation: function() {
                var b6 = this.originalEvent;
                this.isPropagationStopped = S;
                if (!b6) {
                    return;
                }
                if (b6.stopPropagation) {
                    b6.stopPropagation();
                }
                b6.cancelBubble = true;
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = S;
                this.stopPropagation();
            }
        };
        bL.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(b6, e) {
            bL.event.special[b6] = {
                delegateType: e,
                bindType: e,
                handle: function(b9) {
                    var b7, cb = this,
                        ca = b9.relatedTarget,
                        b8 = b9.handleObj;
                    if (!ca || (ca !== cb && !bL.contains(cb, ca))) {
                        b9.type = b8.origType;
                        b7 = b8.handler.apply(this, arguments);
                        b9.type = e;
                    }
                    return b7;
                }
            };
        });
        if (!bL.support.submitBubbles) {
            bL.event.special.submit = {
                setup: function() {
                    if (bL.nodeName(this, "form")) {
                        return false;
                    }
                    bL.event.add(this, "click._submit keypress._submit", function(b8) {
                        var b7 = b8.target,
                            b6 = bL.nodeName(b7, "input") || bL.nodeName(b7, "button") ? b7.form : aH;
                        if (b6 && !bL._data(b6, "submitBubbles")) {
                            bL.event.add(b6, "submit._submit", function(e) {
                                e._submit_bubble = true;
                            });
                            bL._data(b6, "submitBubbles", true);
                        }
                    });
                },
                postDispatch: function(e) {
                    if (e._submit_bubble) {
                        delete e._submit_bubble;
                        if (this.parentNode && !e.isTrigger) {
                            bL.event.simulate("submit", this.parentNode, e, true);
                        }
                    }
                },
                teardown: function() {
                    if (bL.nodeName(this, "form")) {
                        return false;
                    }
                    bL.event.remove(this, "._submit");
                }
            };
        }
        if (!bL.support.changeBubbles) {
            bL.event.special.change = {
                setup: function() {
                    if (bJ.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") {
                            bL.event.add(this, "propertychange._change", function(e) {
                                if (e.originalEvent.propertyName === "checked") {
                                    this._just_changed = true;
                                }
                            });
                            bL.event.add(this, "click._change", function(e) {
                                if (this._just_changed && !e.isTrigger) {
                                    this._just_changed = false;
                                }
                                bL.event.simulate("change", this, e, true);
                            });
                        }
                        return false;
                    }
                    bL.event.add(this, "beforeactivate._change", function(b7) {
                        var b6 = b7.target;
                        if (bJ.test(b6.nodeName) && !bL._data(b6, "changeBubbles")) {
                            bL.event.add(b6, "change._change", function(e) {
                                if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                    bL.event.simulate("change", this.parentNode, e, true);
                                }
                            });
                            bL._data(b6, "changeBubbles", true);
                        }
                    });
                },
                handle: function(b6) {
                    var e = b6.target;
                    if (this !== e || b6.isSimulated || b6.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                        return b6.handleObj.handler.apply(this, arguments);
                    }
                },
                teardown: function() {
                    bL.event.remove(this, "._change");
                    return !bJ.test(this.nodeName);
                }
            };
        }
        if (!bL.support.focusinBubbles) {
            bL.each({
                focus: "focusin",
                blur: "focusout"
            }, function(b8, e) {
                var b6 = 0,
                    b7 = function(b9) {
                        bL.event.simulate(e, b9.target, bL.event.fix(b9), true);
                    };
                bL.event.special[e] = {
                    setup: function() {
                        if (b6++ === 0) {
                            o.addEventListener(b8, b7, true);
                        }
                    },
                    teardown: function() {
                        if (--b6 === 0) {
                            o.removeEventListener(b8, b7, true);
                        }
                    }
                };
            });
        }
        bL.fn.extend({
            on: function(b7, e, ca, b9, b6) {
                var b8, cb;
                if (typeof b7 === "object") {
                    if (typeof e !== "string") {
                        ca = ca || e;
                        e = aH;
                    }
                    for (b8 in b7) {
                        this.on(b8, e, ca, b7[b8], b6);
                    }
                    return this;
                }
                if (ca == null && b9 == null) {
                    b9 = e;
                    ca = e = aH;
                } else {
                    if (b9 == null) {
                        if (typeof e === "string") {
                            b9 = ca;
                            ca = aH;
                        } else {
                            b9 = ca;
                            ca = e;
                            e = aH;
                        }
                    }
                }
                if (b9 === false) {
                    b9 = Y;
                } else {
                    if (!b9) {
                        return this;
                    }
                }
                if (b6 === 1) {
                    cb = b9;
                    b9 = function(cc) {
                        bL().off(cc);
                        return cb.apply(this, arguments);
                    };
                    b9.guid = cb.guid || (cb.guid = bL.guid++);
                }
                return this.each(function() {
                    bL.event.add(this, b7, b9, ca, e);
                });
            },
            one: function(b6, e, b8, b7) {
                return this.on(b6, e, b8, b7, 1);
            },
            off: function(b7, e, b9) {
                var b6, b8;
                if (b7 && b7.preventDefault && b7.handleObj) {
                    b6 = b7.handleObj;
                    bL(b7.delegateTarget).off(b6.namespace ? b6.origType + "." + b6.namespace : b6.origType, b6.selector, b6.handler);
                    return this;
                }
                if (typeof b7 === "object") {
                    for (b8 in b7) {
                        this.off(b8, e, b7[b8]);
                    }
                    return this;
                }
                if (e === false || typeof e === "function") {
                    b9 = e;
                    e = aH;
                }
                if (b9 === false) {
                    b9 = Y;
                }
                return this.each(function() {
                    bL.event.remove(this, b7, b9, e);
                });
            },
            trigger: function(e, b6) {
                return this.each(function() {
                    bL.event.trigger(e, b6, this);
                });
            },
            triggerHandler: function(e, b7) {
                var b6 = this[0];
                if (b6) {
                    return bL.event.trigger(e, b7, b6, true);
                }
            }
        });
        var ao = /^.[^:#\[\.,]*$/,
            bv = /^(?:parents|prev(?:Until|All))/,
            A = bL.expr.match.needsContext,
            bz = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
        bL.fn.extend({
            find: function(b6) {
                var b9, b8 = [],
                    b7 = this,
                    e = b7.length;
                if (typeof b6 !== "string") {
                    return this.pushStack(bL(b6).filter(function() {
                        for (b9 = 0; b9 < e; b9++) {
                            if (bL.contains(b7[b9], this)) {
                                return true;
                            }
                        }
                    }));
                }
                for (b9 = 0; b9 < e; b9++) {
                    bL.find(b6, b7[b9], b8);
                }
                b8 = this.pushStack(e > 1 ? bL.unique(b8) : b8);
                b8.selector = this.selector ? this.selector + " " + b6 : b6;
                return b8;
            },
            has: function(b8) {
                var b7, b6 = bL(b8, this),
                    e = b6.length;
                return this.filter(function() {
                    for (b7 = 0; b7 < e; b7++) {
                        if (bL.contains(this, b6[b7])) {
                            return true;
                        }
                    }
                });
            },
            not: function(e) {
                return this.pushStack(aP(this, e || [], true));
            },
            filter: function(e) {
                return this.pushStack(aP(this, e || [], false));
            },
            is: function(e) {
                return !!aP(this, typeof e === "string" && A.test(e) ? bL(e) : e || [], false).length;
            },
            closest: function(b9, b8) {
                var ca, b7 = 0,
                    e = this.length,
                    b6 = [],
                    cb = A.test(b9) || typeof b9 !== "string" ? bL(b9, b8 || this.context) : 0;
                for (; b7 < e; b7++) {
                    for (ca = this[b7]; ca && ca !== b8; ca = ca.parentNode) {
                        if (ca.nodeType < 11 && (cb ? cb.index(ca) > -1 : ca.nodeType === 1 && bL.find.matchesSelector(ca, b9))) {
                            ca = b6.push(ca);
                            break;
                        }
                    }
                }
                return this.pushStack(b6.length > 1 ? bL.unique(b6) : b6);
            },
            index: function(e) {
                if (!e) {
                    return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
                }
                if (typeof e === "string") {
                    return bL.inArray(this[0], bL(e));
                }
                return bL.inArray(e.jquery ? e[0] : e, this);
            },
            add: function(e, b6) {
                var b8 = typeof e === "string" ? bL(e, b6) : bL.makeArray(e && e.nodeType ? [e] : e),
                    b7 = bL.merge(this.get(), b8);
                return this.pushStack(bL.unique(b7));
            },
            addBack: function(e) {
                return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
            }
        });

        function aY(b6, e) {
            do {
                b6 = b6[e];
            } while (b6 && b6.nodeType !== 1);
            return b6;
        }
        bL.each({
            parent: function(b6) {
                var e = b6.parentNode;
                return e && e.nodeType !== 11 ? e : null;
            },
            parents: function(e) {
                return bL.dir(e, "parentNode");
            },
            parentsUntil: function(b6, e, b7) {
                return bL.dir(b6, "parentNode", b7);
            },
            next: function(e) {
                return aY(e, "nextSibling");
            },
            prev: function(e) {
                return aY(e, "previousSibling");
            },
            nextAll: function(e) {
                return bL.dir(e, "nextSibling");
            },
            prevAll: function(e) {
                return bL.dir(e, "previousSibling");
            },
            nextUntil: function(b6, e, b7) {
                return bL.dir(b6, "nextSibling", b7);
            },
            prevUntil: function(b6, e, b7) {
                return bL.dir(b6, "previousSibling", b7);
            },
            siblings: function(e) {
                return bL.sibling((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
                return bL.sibling(e.firstChild);
            },
            contents: function(e) {
                return bL.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bL.merge([], e.childNodes);
            }
        }, function(e, b6) {
            bL.fn[e] = function(b9, b7) {
                var b8 = bL.map(this, b6, b9);
                if (e.slice(-5) !== "Until") {
                    b7 = b9;
                }
                if (b7 && typeof b7 === "string") {
                    b8 = bL.filter(b7, b8);
                }
                if (this.length > 1) {
                    if (!bz[e]) {
                        b8 = bL.unique(b8);
                    }
                    if (bv.test(e)) {
                        b8 = b8.reverse();
                    }
                }
                return this.pushStack(b8);
            };
        });
        bL.extend({
            filter: function(b8, e, b7) {
                var b6 = e[0];
                if (b7) {
                    b8 = ":not(" + b8 + ")";
                }
                return e.length === 1 && b6.nodeType === 1 ? bL.find.matchesSelector(b6, b8) ? [b6] : [] : bL.find.matches(b8, bL.grep(e, function(b9) {
                    return b9.nodeType === 1;
                }));
            },
            dir: function(b7, b6, b9) {
                var e = [],
                    b8 = b7[b6];
                while (b8 && b8.nodeType !== 9 && (b9 === aH || b8.nodeType !== 1 || !bL(b8).is(b9))) {
                    if (b8.nodeType === 1) {
                        e.push(b8);
                    }
                    b8 = b8[b6];
                }
                return e;
            },
            sibling: function(b7, b6) {
                var e = [];
                for (; b7; b7 = b7.nextSibling) {
                    if (b7.nodeType === 1 && b7 !== b6) {
                        e.push(b7);
                    }
                }
                return e;
            }
        });

        function aP(b7, e, b6) {
            if (bL.isFunction(e)) {
                return bL.grep(b7, function(b9, b8) {
                    return !!e.call(b9, b8, b9) !== b6;
                });
            }
            if (e.nodeType) {
                return bL.grep(b7, function(b8) {
                    return (b8 === e) !== b6;
                });
            }
            if (typeof e === "string") {
                if (ao.test(e)) {
                    return bL.filter(e, b7, b6);
                }
                e = bL.filter(e, b7);
            }
            return bL.grep(b7, function(b8) {
                return (bL.inArray(b8, e) >= 0) !== b6;
            });
        }

        function C(e) {
            var b7 = f.split("|"),
                b6 = e.createDocumentFragment();
            if (b6.createElement) {
                while (b7.length) {
                    b6.createElement(b7.pop());
                }
            }
            return b6;
        }
        var f = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            aB = / jQuery\d+="(?:null|\d+)"/g,
            L = new RegExp("<(?:" + f + ")[\\s/>]", "i"),
            b5 = /^\s+/,
            aE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            p = /<([\w:]+)/,
            b0 = /<tbody/i,
            K = /<|&#?\w+;/,
            am = /<(?:script|style|link)/i,
            t = /^(?:checkbox|radio)$/i,
            bW = /checked\s*(?:[^=]|=\s*.checked.)/i,
            bB = /^$|\/(?:java|ecma)script/i,
            at = /^true\/(.*)/,
            aL = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            U = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: bL.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            aT = C(o),
            m = aT.appendChild(o.createElement("div"));
        U.optgroup = U.option;
        U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
        U.th = U.td;
        bL.fn.extend({
            text: function(e) {
                return bL.access(this, function(b6) {
                    return b6 === aH ? bL.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(b6));
                }, null, e, arguments.length);
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var b6 = a2(this, e);
                        b6.appendChild(e);
                    }
                });
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var b6 = a2(this, e);
                        b6.insertBefore(e, b6.firstChild);
                    }
                });
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this);
                    }
                });
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    if (this.parentNode) {
                        this.parentNode.insertBefore(e, this.nextSibling);
                    }
                });
            },
            remove: function(e, b9) {
                var b8, b6 = e ? bL.filter(e, this) : this,
                    b7 = 0;
                for (;
                    (b8 = b6[b7]) != null; b7++) {
                    if (!b9 && b8.nodeType === 1) {
                        bL.cleanData(n(b8));
                    }
                    if (b8.parentNode) {
                        if (b9 && bL.contains(b8.ownerDocument, b8)) {
                            bu(n(b8, "script"));
                        }
                        b8.parentNode.removeChild(b8);
                    }
                }
                return this;
            },
            empty: function() {
                var b6, e = 0;
                for (;
                    (b6 = this[e]) != null; e++) {
                    if (b6.nodeType === 1) {
                        bL.cleanData(n(b6, false));
                    }
                    while (b6.firstChild) {
                        b6.removeChild(b6.firstChild);
                    }
                    if (b6.options && bL.nodeName(b6, "select")) {
                        b6.options.length = 0;
                    }
                }
                return this;
            },
            clone: function(b6, e) {
                b6 = b6 == null ? false : b6;
                e = e == null ? b6 : e;
                return this.map(function() {
                    return bL.clone(this, b6, e);
                });
            },
            html: function(e) {
                return bL.access(this, function(b9) {
                    var b8 = this[0] || {},
                        b7 = 0,
                        b6 = this.length;
                    if (b9 === aH) {
                        return b8.nodeType === 1 ? b8.innerHTML.replace(aB, "") : aH;
                    }
                    if (typeof b9 === "string" && !am.test(b9) && (bL.support.htmlSerialize || !L.test(b9)) && (bL.support.leadingWhitespace || !b5.test(b9)) && !U[(p.exec(b9) || ["", ""])[1].toLowerCase()]) {
                        b9 = b9.replace(aE, "<$1></$2>");
                        try {
                            for (; b7 < b6; b7++) {
                                b8 = this[b7] || {};
                                if (b8.nodeType === 1) {
                                    bL.cleanData(n(b8, false));
                                    b8.innerHTML = b9;
                                }
                            }
                            b8 = 0;
                        } catch (ca) {}
                    }
                    if (b8) {
                        this.empty().append(b9);
                    }
                }, null, e, arguments.length);
            },
            replaceWith: function() {
                var e = bL.map(this, function(b7) {
                        return [b7.nextSibling, b7.parentNode];
                    }),
                    b6 = 0;
                this.domManip(arguments, function(b9) {
                    var b8 = e[b6++],
                        b7 = e[b6++];
                    if (b7) {
                        if (b8 && b8.parentNode !== b7) {
                            b8 = this.nextSibling;
                        }
                        bL(this).remove();
                        b7.insertBefore(b9, b8);
                    }
                }, true);
                return b6 ? this : this.remove();
            },
            detach: function(e) {
                return this.remove(e, true);
            },
            domManip: function(ce, cj, b7) {
                ce = aJ.apply([], ce);
                var cc, b8, e, ca, ch, cd, cb = 0,
                    b9 = this.length,
                    cg = this,
                    ci = b9 - 1,
                    cf = ce[0],
                    b6 = bL.isFunction(cf);
                if (b6 || !(b9 <= 1 || typeof cf !== "string" || bL.support.checkClone || !bW.test(cf))) {
                    return this.each(function(cl) {
                        var ck = cg.eq(cl);
                        if (b6) {
                            ce[0] = cf.call(this, cl, ck.html());
                        }
                        ck.domManip(ce, cj, b7);
                    });
                }
                if (b9) {
                    cd = bL.buildFragment(ce, this[0].ownerDocument, false, !b7 && this);
                    cc = cd.firstChild;
                    if (cd.childNodes.length === 1) {
                        cd = cc;
                    }
                    if (cc) {
                        ca = bL.map(n(cd, "script"), w);
                        e = ca.length;
                        for (; cb < b9; cb++) {
                            b8 = cd;
                            if (cb !== ci) {
                                b8 = bL.clone(b8, true, true);
                                if (e) {
                                    bL.merge(ca, n(b8, "script"));
                                }
                            }
                            cj.call(this[cb], b8, cb);
                        }
                        if (e) {
                            ch = ca[ca.length - 1].ownerDocument;
                            bL.map(ca, bf);
                            for (cb = 0; cb < e; cb++) {
                                b8 = ca[cb];
                                if (bB.test(b8.type || "") && !bL._data(b8, "globalEval") && bL.contains(ch, b8)) {
                                    if (b8.src) {
                                        bL._evalUrl(b8.src);
                                    } else {
                                        bL.globalEval((b8.text || b8.textContent || b8.innerHTML || "").replace(aL, ""));
                                    }
                                }
                            }
                        }
                        cd = cc = null;
                    }
                }
                return this;
            }
        });

        function a2(b6, e) {
            return bL.nodeName(b6, "table") && bL.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b6.getElementsByTagName("tbody")[0] || b6.appendChild(b6.ownerDocument.createElement("tbody")) : b6;
        }

        function w(e) {
            e.type = (bL.find.attr(e, "type") !== null) + "/" + e.type;
            return e;
        }

        function bf(b6) {
            var e = at.exec(b6.type);
            if (e) {
                b6.type = e[1];
            } else {
                b6.removeAttribute("type");
            }
            return b6;
        }

        function bu(e, b7) {
            var b8, b6 = 0;
            for (;
                (b8 = e[b6]) != null; b6++) {
                bL._data(b8, "globalEval", !b7 || bL._data(b7[b6], "globalEval"));
            }
        }

        function au(cc, b6) {
            if (b6.nodeType !== 1 || !bL.hasData(cc)) {
                return;
            }
            var b9, b8, e, cb = bL._data(cc),
                ca = bL._data(b6, cb),
                b7 = cb.events;
            if (b7) {
                delete ca.handle;
                ca.events = {};
                for (b9 in b7) {
                    for (b8 = 0, e = b7[b9].length; b8 < e; b8++) {
                        bL.event.add(b6, b9, b7[b9][b8]);
                    }
                }
            }
            if (ca.data) {
                ca.data = bL.extend({}, ca.data);
            }
        }

        function R(b9, b6) {
            var ca, b8, b7;
            if (b6.nodeType !== 1) {
                return;
            }
            ca = b6.nodeName.toLowerCase();
            if (!bL.support.noCloneEvent && b6[bL.expando]) {
                b7 = bL._data(b6);
                for (b8 in b7.events) {
                    bL.removeEvent(b6, b8, b7.handle);
                }
                b6.removeAttribute(bL.expando);
            }
            if (ca === "script" && b6.text !== b9.text) {
                w(b6).text = b9.text;
                bf(b6);
            } else {
                if (ca === "object") {
                    if (b6.parentNode) {
                        b6.outerHTML = b9.outerHTML;
                    }
                    if (bL.support.html5Clone && (b9.innerHTML && !bL.trim(b6.innerHTML))) {
                        b6.innerHTML = b9.innerHTML;
                    }
                } else {
                    if (ca === "input" && t.test(b9.type)) {
                        b6.defaultChecked = b6.checked = b9.checked;
                        if (b6.value !== b9.value) {
                            b6.value = b9.value;
                        }
                    } else {
                        if (ca === "option") {
                            b6.defaultSelected = b6.selected = b9.defaultSelected;
                        } else {
                            if (ca === "input" || ca === "textarea") {
                                b6.defaultValue = b9.defaultValue;
                            }
                        }
                    }
                }
            }
        }
        bL.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, b6) {
            bL.fn[e] = function(b7) {
                var b8, ca = 0,
                    b9 = [],
                    cc = bL(b7),
                    cb = cc.length - 1;
                for (; ca <= cb; ca++) {
                    b8 = ca === cb ? this : this.clone(true);
                    bL(cc[ca])[b6](b8);
                    ap.apply(b9, b8.get());
                }
                return this.pushStack(b9);
            };
        });

        function n(b8, e) {
            var b6, b9, b7 = 0,
                ca = typeof b8.getElementsByTagName !== aD ? b8.getElementsByTagName(e || "*") : typeof b8.querySelectorAll !== aD ? b8.querySelectorAll(e || "*") : aH;
            if (!ca) {
                for (ca = [], b6 = b8.childNodes || b8;
                    (b9 = b6[b7]) != null; b7++) {
                    if (!e || bL.nodeName(b9, e)) {
                        ca.push(b9);
                    } else {
                        bL.merge(ca, n(b9, e));
                    }
                }
            }
            return e === aH || e && bL.nodeName(b8, e) ? bL.merge([b8], ca) : ca;
        }

        function bX(e) {
            if (t.test(e.type)) {
                e.defaultChecked = e.checked;
            }
        }
        bL.extend({
            clone: function(b6, b8, e) {
                var ca, b7, cd, b9, cb, cc = bL.contains(b6.ownerDocument, b6);
                if (bL.support.html5Clone || bL.isXMLDoc(b6) || !L.test("<" + b6.nodeName + ">")) {
                    cd = b6.cloneNode(true);
                } else {
                    m.innerHTML = b6.outerHTML;
                    m.removeChild(cd = m.firstChild);
                }
                if ((!bL.support.noCloneEvent || !bL.support.noCloneChecked) && (b6.nodeType === 1 || b6.nodeType === 11) && !bL.isXMLDoc(b6)) {
                    ca = n(cd);
                    cb = n(b6);
                    for (b9 = 0;
                        (b7 = cb[b9]) != null; ++b9) {
                        if (ca[b9]) {
                            R(b7, ca[b9]);
                        }
                    }
                }
                if (b8) {
                    if (e) {
                        cb = cb || n(b6);
                        ca = ca || n(cd);
                        for (b9 = 0;
                            (b7 = cb[b9]) != null; b9++) {
                            au(b7, ca[b9]);
                        }
                    } else {
                        au(b6, cd);
                    }
                }
                ca = n(cd, "script");
                if (ca.length > 0) {
                    bu(ca, !cc && n(b6, "script"));
                }
                ca = cb = b7 = null;
                return cd;
            },
            buildFragment: function(b6, b8, cd, ci) {
                var ce, ca, cc, ch, cj, cg, b7, cb = b6.length,
                    b9 = C(b8),
                    e = [],
                    cf = 0;
                for (; cf < cb; cf++) {
                    ca = b6[cf];
                    if (ca || ca === 0) {
                        if (bL.type(ca) === "object") {
                            bL.merge(e, ca.nodeType ? [ca] : ca);
                        } else {
                            if (!K.test(ca)) {
                                e.push(b8.createTextNode(ca));
                            } else {
                                ch = ch || b9.appendChild(b8.createElement("div"));
                                cj = (p.exec(ca) || ["", ""])[1].toLowerCase();
                                b7 = U[cj] || U._default;
                                ch.innerHTML = b7[1] + ca.replace(aE, "<$1></$2>") + b7[2];
                                ce = b7[0];
                                while (ce--) {
                                    ch = ch.lastChild;
                                }
                                if (!bL.support.leadingWhitespace && b5.test(ca)) {
                                    e.push(b8.createTextNode(b5.exec(ca)[0]));
                                }
                                if (!bL.support.tbody) {
                                    ca = cj === "table" && !b0.test(ca) ? ch.firstChild : b7[1] === "<table>" && !b0.test(ca) ? ch : 0;
                                    ce = ca && ca.childNodes.length;
                                    while (ce--) {
                                        if (bL.nodeName((cg = ca.childNodes[ce]), "tbody") && !cg.childNodes.length) {
                                            ca.removeChild(cg);
                                        }
                                    }
                                }
                                bL.merge(e, ch.childNodes);
                                ch.textContent = "";
                                while (ch.firstChild) {
                                    ch.removeChild(ch.firstChild);
                                }
                                ch = b9.lastChild;
                            }
                        }
                    }
                }
                if (ch) {
                    b9.removeChild(ch);
                }
                if (!bL.support.appendChecked) {
                    bL.grep(n(e, "input"), bX);
                }
                cf = 0;
                while ((ca = e[cf++])) {
                    if (ci && bL.inArray(ca, ci) !== -1) {
                        continue;
                    }
                    cc = bL.contains(ca.ownerDocument, ca);
                    ch = n(b9.appendChild(ca), "script");
                    if (cc) {
                        bu(ch);
                    }
                    if (cd) {
                        ce = 0;
                        while ((ca = ch[ce++])) {
                            if (bB.test(ca.type || "")) {
                                cd.push(ca);
                            }
                        }
                    }
                }
                ch = null;
                return b9;
            },
            cleanData: function(b6, ce) {
                var b8, cd, b7, b9, ca = 0,
                    cf = bL.expando,
                    e = bL.cache,
                    cb = bL.support.deleteExpando,
                    cc = bL.event.special;
                for (;
                    (b8 = b6[ca]) != null; ca++) {
                    if (ce || bL.acceptData(b8)) {
                        b7 = b8[cf];
                        b9 = b7 && e[b7];
                        if (b9) {
                            if (b9.events) {
                                for (cd in b9.events) {
                                    if (cc[cd]) {
                                        bL.event.remove(b8, cd);
                                    } else {
                                        bL.removeEvent(b8, cd, b9.handle);
                                    }
                                }
                            }
                            if (e[b7]) {
                                delete e[b7];
                                if (cb) {
                                    delete b8[cf];
                                } else {
                                    if (typeof b8.removeAttribute !== aD) {
                                        b8.removeAttribute(cf);
                                    } else {
                                        b8[cf] = null;
                                    }
                                }
                                a8.push(b7);
                            }
                        }
                    }
                }
            },
            _evalUrl: function(e) {
                return bL.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: false,
                    global: false,
                    "throws": true
                });
            }
        });
        bL.fn.extend({
            wrapAll: function(e) {
                if (bL.isFunction(e)) {
                    return this.each(function(b7) {
                        bL(this).wrapAll(e.call(this, b7));
                    });
                }
                if (this[0]) {
                    var b6 = bL(e, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) {
                        b6.insertBefore(this[0]);
                    }
                    b6.map(function() {
                        var b7 = this;
                        while (b7.firstChild && b7.firstChild.nodeType === 1) {
                            b7 = b7.firstChild;
                        }
                        return b7;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(e) {
                if (bL.isFunction(e)) {
                    return this.each(function(b6) {
                        bL(this).wrapInner(e.call(this, b6));
                    });
                }
                return this.each(function() {
                    var b6 = bL(this),
                        b7 = b6.contents();
                    if (b7.length) {
                        b7.wrapAll(e);
                    } else {
                        b6.append(e);
                    }
                });
            },
            wrap: function(e) {
                var b6 = bL.isFunction(e);
                return this.each(function(b7) {
                    bL(this).wrapAll(b6 ? e.call(this, b7) : e);
                });
            },
            unwrap: function() {
                return this.parent().each(function() {
                    if (!bL.nodeName(this, "body")) {
                        bL(this).replaceWith(this.childNodes);
                    }
                }).end();
            }
        });
        var aF, bq, G, bi = /alpha\([^)]*\)/i,
            aU = /opacity\s*=\s*([^)]*)/,
            bp = /^(top|right|bottom|left)$/,
            H = /^(none|table(?!-c[ea]).+)/,
            aZ = /^margin/,
            bb = new RegExp("^(" + bC + ")(.*)$", "i"),
            X = new RegExp("^(" + bC + ")(?!px)[a-z%]+$", "i"),
            T = new RegExp("^([+-])=(" + bC + ")", "i"),
            bl = {
                BODY: "block"
            },
            be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            bE = {
                letterSpacing: 0,
                fontWeight: 400
            },
            bV = ["Top", "Right", "Bottom", "Left"],
            aw = ["Webkit", "O", "Moz", "ms"];

        function c(b8, b6) {
            if (b6 in b8) {
                return b6;
            }
            var b9 = b6.charAt(0).toUpperCase() + b6.slice(1),
                e = b6,
                b7 = aw.length;
            while (b7--) {
                b6 = aw[b7] + b9;
                if (b6 in b8) {
                    return b6;
                }
            }
            return e;
        }

        function Q(b6, e) {
            b6 = e || b6;
            return bL.css(b6, "display") === "none" || !bL.contains(b6.ownerDocument, b6);
        }

        function s(cb, e) {
            var cc, b9, ca, b6 = [],
                b7 = 0,
                b8 = cb.length;
            for (; b7 < b8; b7++) {
                b9 = cb[b7];
                if (!b9.style) {
                    continue;
                }
                b6[b7] = bL._data(b9, "olddisplay");
                cc = b9.style.display;
                if (e) {
                    if (!b6[b7] && cc === "none") {
                        b9.style.display = "";
                    }
                    if (b9.style.display === "" && Q(b9)) {
                        b6[b7] = bL._data(b9, "olddisplay", bG(b9.nodeName));
                    }
                } else {
                    if (!b6[b7]) {
                        ca = Q(b9);
                        if (cc && cc !== "none" || !ca) {
                            bL._data(b9, "olddisplay", ca ? cc : bL.css(b9, "display"));
                        }
                    }
                }
            }
            for (b7 = 0; b7 < b8; b7++) {
                b9 = cb[b7];
                if (!b9.style) {
                    continue;
                }
                if (!e || b9.style.display === "none" || b9.style.display === "") {
                    b9.style.display = e ? b6[b7] || "" : "none";
                }
            }
            return cb;
        }
        bL.fn.extend({
            css: function(e, b6) {
                return bL.access(this, function(cb, b8, cc) {
                    var b7, ca, cd = {},
                        b9 = 0;
                    if (bL.isArray(b8)) {
                        ca = bq(cb);
                        b7 = b8.length;
                        for (; b9 < b7; b9++) {
                            cd[b8[b9]] = bL.css(cb, b8[b9], false, ca);
                        }
                        return cd;
                    }
                    return cc !== aH ? bL.style(cb, b8, cc) : bL.css(cb, b8);
                }, e, b6, arguments.length > 1);
            },
            show: function() {
                return s(this, true);
            },
            hide: function() {
                return s(this);
            },
            toggle: function(e) {
                if (typeof e === "boolean") {
                    return e ? this.show() : this.hide();
                }
                return this.each(function() {
                    if (Q(this)) {
                        bL(this).show();
                    } else {
                        bL(this).hide();
                    }
                });
            }
        });
        bL.extend({
            cssHooks: {
                opacity: {
                    get: function(b7, b6) {
                        if (b6) {
                            var e = G(b7, "opacity");
                            return e === "" ? "1" : e;
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: true,
                fillOpacity: true,
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                widows: true,
                zIndex: true,
                zoom: true
            },
            cssProps: {
                "float": bL.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(b8, b7, ce, b9) {
                if (!b8 || b8.nodeType === 3 || b8.nodeType === 8 || !b8.style) {
                    return;
                }
                var cc, cd, cf, ca = bL.camelCase(b7),
                    b6 = b8.style;
                b7 = bL.cssProps[ca] || (bL.cssProps[ca] = c(b6, ca));
                cf = bL.cssHooks[b7] || bL.cssHooks[ca];
                if (ce !== aH) {
                    cd = typeof ce;
                    if (cd === "string" && (cc = T.exec(ce))) {
                        ce = (cc[1] + 1) * cc[2] + parseFloat(bL.css(b8, b7));
                        cd = "number";
                    }
                    if (ce == null || cd === "number" && isNaN(ce)) {
                        return;
                    }
                    if (cd === "number" && !bL.cssNumber[ca]) {
                        ce += "px";
                    }
                    if (!bL.support.clearCloneStyle && ce === "" && b7.indexOf("background") === 0) {
                        b6[b7] = "inherit";
                    }
                    if (!cf || !("set" in cf) || (ce = cf.set(b8, ce, b9)) !== aH) {
                        try {
                            b6[b7] = ce;
                        } catch (cb) {}
                    }
                } else {
                    if (cf && "get" in cf && (cc = cf.get(b8, false, b9)) !== aH) {
                        return cc;
                    }
                    return b6[b7];
                }
            },
            css: function(cb, b9, b6, ca) {
                var b8, cc, e, b7 = bL.camelCase(b9);
                b9 = bL.cssProps[b7] || (bL.cssProps[b7] = c(cb.style, b7));
                e = bL.cssHooks[b9] || bL.cssHooks[b7];
                if (e && "get" in e) {
                    cc = e.get(cb, true, b6);
                }
                if (cc === aH) {
                    cc = G(cb, b9, ca);
                }
                if (cc === "normal" && b9 in bE) {
                    cc = bE[b9];
                }
                if (b6 === "" || b6) {
                    b8 = parseFloat(cc);
                    return b6 === true || bL.isNumeric(b8) ? b8 || 0 : cc;
                }
                return cc;
            }
        });
        if (a4.getComputedStyle) {
            bq = function(e) {
                return a4.getComputedStyle(e, null);
            };
            G = function(b9, b7, cb) {
                var b8, b6, cd, ca = cb || bq(b9),
                    cc = ca ? ca.getPropertyValue(b7) || ca[b7] : aH,
                    e = b9.style;
                if (ca) {
                    if (cc === "" && !bL.contains(b9.ownerDocument, b9)) {
                        cc = bL.style(b9, b7);
                    }
                    if (X.test(cc) && aZ.test(b7)) {
                        b8 = e.width;
                        b6 = e.minWidth;
                        cd = e.maxWidth;
                        e.minWidth = e.maxWidth = e.width = cc;
                        cc = ca.width;
                        e.width = b8;
                        e.minWidth = b6;
                        e.maxWidth = cd;
                    }
                }
                return cc;
            };
        } else {
            if (o.documentElement.currentStyle) {
                bq = function(e) {
                    return e.currentStyle;
                };
                G = function(b8, b6, cb) {
                    var b7, ca, cc, b9 = cb || bq(b8),
                        cd = b9 ? b9[b6] : aH,
                        e = b8.style;
                    if (cd == null && e && e[b6]) {
                        cd = e[b6];
                    }
                    if (X.test(cd) && !bp.test(b6)) {
                        b7 = e.left;
                        ca = b8.runtimeStyle;
                        cc = ca && ca.left;
                        if (cc) {
                            ca.left = b8.currentStyle.left;
                        }
                        e.left = b6 === "fontSize" ? "1em" : cd;
                        cd = e.pixelLeft + "px";
                        e.left = b7;
                        if (cc) {
                            ca.left = cc;
                        }
                    }
                    return cd === "" ? "auto" : cd;
                };
            }
        }

        function aK(e, b7, b8) {
            var b6 = bb.exec(b7);
            return b6 ? Math.max(0, b6[1] - (b8 || 0)) + (b6[2] || "px") : b7;
        }

        function ax(b9, b6, e, cb, b8) {
            var b7 = e === (cb ? "border" : "content") ? 4 : b6 === "width" ? 1 : 0,
                ca = 0;
            for (; b7 < 4; b7 += 2) {
                if (e === "margin") {
                    ca += bL.css(b9, e + bV[b7], true, b8);
                }
                if (cb) {
                    if (e === "content") {
                        ca -= bL.css(b9, "padding" + bV[b7], true, b8);
                    }
                    if (e !== "margin") {
                        ca -= bL.css(b9, "border" + bV[b7] + "Width", true, b8);
                    }
                } else {
                    ca += bL.css(b9, "padding" + bV[b7], true, b8);
                    if (e !== "padding") {
                        ca += bL.css(b9, "border" + bV[b7] + "Width", true, b8);
                    }
                }
            }
            return ca;
        }

        function x(b9, b6, e) {
            var b8 = true,
                ca = b6 === "width" ? b9.offsetWidth : b9.offsetHeight,
                b7 = bq(b9),
                cb = bL.support.boxSizing && bL.css(b9, "boxSizing", false, b7) === "border-box";
            if (ca <= 0 || ca == null) {
                ca = G(b9, b6, b7);
                if (ca < 0 || ca == null) {
                    ca = b9.style[b6];
                }
                if (X.test(ca)) {
                    return ca;
                }
                b8 = cb && (bL.support.boxSizingReliable || ca === b9.style[b6]);
                ca = parseFloat(ca) || 0;
            }
            return (ca + ax(b9, b6, e || (cb ? "border" : "content"), b8, b7)) + "px";
        }

        function bG(b7) {
            var b6 = o,
                e = bl[b7];
            if (!e) {
                e = a3(b7, b6);
                if (e === "none" || !e) {
                    aF = (aF || bL("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b6.documentElement);
                    b6 = (aF[0].contentWindow || aF[0].contentDocument).document;
                    b6.write("<!doctype html><html><body>");
                    b6.close();
                    e = a3(b7, b6);
                    aF.detach();
                }
                bl[b7] = e;
            }
            return e;
        }

        function a3(e, b8) {
            var b6 = bL(b8.createElement(e)).appendTo(b8.body),
                b7 = bL.css(b6[0], "display");
            b6.remove();
            return b7;
        }
        bL.each(["height", "width"], function(b6, e) {
            bL.cssHooks[e] = {
                get: function(b9, b8, b7) {
                    if (b8) {
                        return b9.offsetWidth === 0 && H.test(bL.css(b9, "display")) ? bL.swap(b9, be, function() {
                            return x(b9, e, b7);
                        }) : x(b9, e, b7);
                    }
                },
                set: function(b9, ca, b7) {
                    var b8 = b7 && bq(b9);
                    return aK(b9, ca, b7 ? ax(b9, e, b7, bL.support.boxSizing && bL.css(b9, "boxSizing", false, b8) === "border-box", b8) : 0);
                }
            };
        });
        if (!bL.support.opacity) {
            bL.cssHooks.opacity = {
                get: function(b6, e) {
                    return aU.test((e && b6.currentStyle ? b6.currentStyle.filter : b6.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : "";
                },
                set: function(b9, ca) {
                    var b8 = b9.style,
                        b6 = b9.currentStyle,
                        e = bL.isNumeric(ca) ? "alpha(opacity=" + ca * 100 + ")" : "",
                        b7 = b6 && b6.filter || b8.filter || "";
                    b8.zoom = 1;
                    if ((ca >= 1 || ca === "") && bL.trim(b7.replace(bi, "")) === "" && b8.removeAttribute) {
                        b8.removeAttribute("filter");
                        if (ca === "" || b6 && !b6.filter) {
                            return;
                        }
                    }
                    b8.filter = bi.test(b7) ? b7.replace(bi, e) : b7 + " " + e;
                }
            };
        }
        bL(function() {
            if (!bL.support.reliableMarginRight) {
                bL.cssHooks.marginRight = {
                    get: function(b6, e) {
                        if (e) {
                            return bL.swap(b6, {
                                display: "inline-block"
                            }, G, [b6, "marginRight"]);
                        }
                    }
                };
            }
            if (!bL.support.pixelPosition && bL.fn.position) {
                bL.each(["top", "left"], function(e, b6) {
                    bL.cssHooks[b6] = {
                        get: function(b8, b7) {
                            if (b7) {
                                b7 = G(b8, b6);
                                return X.test(b7) ? bL(b8).position()[b6] + "px" : b7;
                            }
                        }
                    };
                });
            }
        });
        if (bL.expr && bL.expr.filters) {
            bL.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bL.support.reliableHiddenOffsets && ((e.style && e.style.display) || bL.css(e, "display")) === "none");
            };
            bL.expr.filters.visible = function(e) {
                return !bL.expr.filters.hidden(e);
            };
        }
        bL.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, b6) {
            bL.cssHooks[e + b6] = {
                expand: function(b9) {
                    var b8 = 0,
                        b7 = {},
                        ca = typeof b9 === "string" ? b9.split(" ") : [b9];
                    for (; b8 < 4; b8++) {
                        b7[e + bV[b8] + b6] = ca[b8] || ca[b8 - 2] || ca[0];
                    }
                    return b7;
                }
            };
            if (!aZ.test(e)) {
                bL.cssHooks[e + b6].set = aK;
            }
        });
        var bx = /%20/g,
            aS = /\[\]$/,
            V = /\r?\n/g,
            d = /^(?:submit|button|image|reset|file)$/i,
            av = /^(?:input|select|textarea|keygen)/i;
        bL.fn.extend({
            serialize: function() {
                return bL.param(this.serializeArray());
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = bL.prop(this, "elements");
                    return e ? bL.makeArray(e) : this;
                }).filter(function() {
                    var e = this.type;
                    return this.name && !bL(this).is(":disabled") && av.test(this.nodeName) && !d.test(e) && (this.checked || !t.test(e));
                }).map(function(e, b6) {
                    var b7 = bL(this).val();
                    return b7 == null ? null : bL.isArray(b7) ? bL.map(b7, function(b8) {
                        return {
                            name: b6.name,
                            value: b8.replace(V, "\r\n")
                        };
                    }) : {
                        name: b6.name,
                        value: b7.replace(V, "\r\n")
                    };
                }).get();
            }
        });
        bL.param = function(e, b7) {
            var b8, b6 = [],
                b9 = function(ca, cb) {
                    cb = bL.isFunction(cb) ? cb() : (cb == null ? "" : cb);
                    b6[b6.length] = encodeURIComponent(ca) + "=" + encodeURIComponent(cb);
                };
            if (b7 === aH) {
                b7 = bL.ajaxSettings && bL.ajaxSettings.traditional;
            }
            if (bL.isArray(e) || (e.jquery && !bL.isPlainObject(e))) {
                bL.each(e, function() {
                    b9(this.name, this.value);
                });
            } else {
                for (b8 in e) {
                    l(b8, e[b8], b7, b9);
                }
            }
            return b6.join("&").replace(bx, "+");
        };

        function l(b7, b9, b6, b8) {
            var e;
            if (bL.isArray(b9)) {
                bL.each(b9, function(cb, ca) {
                    if (b6 || aS.test(b7)) {
                        b8(b7, ca);
                    } else {
                        l(b7 + "[" + (typeof ca === "object" ? cb : "") + "]", ca, b6, b8);
                    }
                });
            } else {
                if (!b6 && bL.type(b9) === "object") {
                    for (e in b9) {
                        l(b7 + "[" + e + "]", b9[e], b6, b8);
                    }
                } else {
                    b8(b7, b9);
                }
            }
        }
        bL.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b6, e) {
            bL.fn[e] = function(b8, b7) {
                return arguments.length > 0 ? this.on(e, null, b8, b7) : this.trigger(e);
            };
        });
        bL.fn.extend({
            hover: function(e, b6) {
                return this.mouseenter(e).mouseleave(b6 || e);
            },
            bind: function(e, b7, b6) {
                return this.on(e, null, b7, b6);
            },
            unbind: function(e, b6) {
                return this.off(e, null, b6);
            },
            delegate: function(e, b6, b8, b7) {
                return this.on(b6, e, b8, b7);
            },
            undelegate: function(e, b6, b7) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(b6, e || "**", b7);
            }
        });
        var b4, Z, bQ = bL.now(),
            aA = /\?/,
            aq = /#.*$/,
            P = /([?&])_=[^&]*/,
            ah = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            D = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            r = /^(?:GET|HEAD)$/,
            aI = /^\/\//,
            aV = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            b3 = bL.fn.load,
            y = {},
            a9 = {},
            aX = "*/".concat("*");
        try {
            Z = aM.href;
        } catch (bh) {
            Z = o.createElement("a");
            Z.href = "";
            Z = Z.href;
        }
        b4 = aV.exec(Z.toLowerCase()) || [];

        function bN(e) {
            return function(b9, ca) {
                if (typeof b9 !== "string") {
                    ca = b9;
                    b9 = "*";
                }
                var b6, b7 = 0,
                    b8 = b9.toLowerCase().match(ad) || [];
                if (bL.isFunction(ca)) {
                    while ((b6 = b8[b7++])) {
                        if (b6[0] === "+") {
                            b6 = b6.slice(1) || "*";
                            (e[b6] = e[b6] || []).unshift(ca);
                        } else {
                            (e[b6] = e[b6] || []).push(ca);
                        }
                    }
                }
            };
        }

        function q(e, b7, cb, b8) {
            var b6 = {},
                b9 = (e === a9);

            function ca(cc) {
                var cd;
                b6[cc] = true;
                bL.each(e[cc] || [], function(cf, ce) {
                    var cg = ce(b7, cb, b8);
                    if (typeof cg === "string" && !b9 && !b6[cg]) {
                        b7.dataTypes.unshift(cg);
                        ca(cg);
                        return false;
                    } else {
                        if (b9) {
                            return !(cd = cg);
                        }
                    }
                });
                return cd;
            }
            return ca(b7.dataTypes[0]) || !b6["*"] && ca("*");
        }

        function u(b7, b8) {
            var e, b6, b9 = bL.ajaxSettings.flatOptions || {};
            for (b6 in b8) {
                if (b8[b6] !== aH) {
                    (b9[b6] ? b7 : (e || (e = {})))[b6] = b8[b6];
                }
            }
            if (e) {
                bL.extend(true, b7, e);
            }
            return b7;
        }
        bL.fn.load = function(b8, cb, cc) {
            if (typeof b8 !== "string" && b3) {
                return b3.apply(this, arguments);
            }
            var e, b7, b9, b6 = this,
                ca = b8.indexOf(" ");
            if (ca >= 0) {
                e = b8.slice(ca, b8.length);
                b8 = b8.slice(0, ca);
            }
            if (bL.isFunction(cb)) {
                cc = cb;
                cb = aH;
            } else {
                if (cb && typeof cb === "object") {
                    b9 = "POST";
                }
            }
            if (b6.length > 0) {
                bL.ajax({
                    url: b8,
                    type: b9,
                    dataType: "html",
                    data: cb
                }).done(function(cd) {
                    b7 = arguments;
                    b6.html(e ? bL("<div>").append(bL.parseHTML(cd)).find(e) : cd);
                }).complete(cc && function(ce, cd) {
                    b6.each(cc, b7 || [ce.responseText, cd, ce]);
                });
            }
            return this;
        };
        bL.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b6) {
            bL.fn[b6] = function(b7) {
                return this.on(b6, b7);
            };
        });
        bL.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Z,
                type: "GET",
                isLocal: D.test(b4[1]),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": aX,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": true,
                    "text json": bL.parseJSON,
                    "text xml": bL.parseXML
                },
                flatOptions: {
                    url: true,
                    context: true
                }
            },
            ajaxSetup: function(b6, e) {
                return e ? u(u(b6, bL.ajaxSettings), e) : u(bL.ajaxSettings, b6);
            },
            ajaxPrefilter: bN(y),
            ajaxTransport: bN(a9),
            ajax: function(ca, b7) {
                if (typeof ca === "object") {
                    b7 = ca;
                    ca = aH;
                }
                b7 = b7 || {};
                var cj, cl, cb, cq, cf, b6, cm, b8, ce = bL.ajaxSetup({}, b7),
                    cs = ce.context || ce,
                    ch = ce.context && (cs.nodeType || cs.jquery) ? bL(cs) : bL.event,
                    cr = bL.Deferred(),
                    co = bL.Callbacks("once memory"),
                    cc = ce.statusCode || {},
                    ci = {},
                    cp = {},
                    b9 = 0,
                    cd = "canceled",
                    ck = {
                        readyState: 0,
                        getResponseHeader: function(ct) {
                            var e;
                            if (b9 === 2) {
                                if (!b8) {
                                    b8 = {};
                                    while ((e = ah.exec(cq))) {
                                        b8[e[1].toLowerCase()] = e[2];
                                    }
                                }
                                e = b8[ct.toLowerCase()];
                            }
                            return e == null ? null : e;
                        },
                        getAllResponseHeaders: function() {
                            return b9 === 2 ? cq : null;
                        },
                        setRequestHeader: function(ct, cu) {
                            var e = ct.toLowerCase();
                            if (!b9) {
                                ct = cp[e] = cp[e] || ct;
                                ci[ct] = cu;
                            }
                            return this;
                        },
                        overrideMimeType: function(e) {
                            if (!b9) {
                                ce.mimeType = e;
                            }
                            return this;
                        },
                        statusCode: function(ct) {
                            var e;
                            if (ct) {
                                if (b9 < 2) {
                                    for (e in ct) {
                                        cc[e] = [cc[e], ct[e]];
                                    }
                                } else {
                                    ck.always(ct[ck.status]);
                                }
                            }
                            return this;
                        },
                        abort: function(ct) {
                            var e = ct || cd;
                            if (cm) {
                                cm.abort(e);
                            }
                            cg(0, e);
                            return this;
                        }
                    };
                cr.promise(ck).complete = co.add;
                ck.success = ck.done;
                ck.error = ck.fail;
                ce.url = ((ca || ce.url || Z) + "").replace(aq, "").replace(aI, b4[1] + "//");
                ce.type = b7.method || b7.type || ce.method || ce.type;
                ce.dataTypes = bL.trim(ce.dataType || "*").toLowerCase().match(ad) || [""];
                if (ce.crossDomain == null) {
                    cj = aV.exec(ce.url.toLowerCase());
                    ce.crossDomain = !!(cj && (cj[1] !== b4[1] || cj[2] !== b4[2] || (cj[3] || (cj[1] === "http:" ? "80" : "443")) !== (b4[3] || (b4[1] === "http:" ? "80" : "443"))));
                }
                if (ce.data && ce.processData && typeof ce.data !== "string") {
                    ce.data = bL.param(ce.data, ce.traditional);
                }
                q(y, ce, b7, ck);
                if (b9 === 2) {
                    return ck;
                }
                b6 = ce.global;
                if (b6 && bL.active++ === 0) {
                    bL.event.trigger("ajaxStart");
                }
                ce.type = ce.type.toUpperCase();
                ce.hasContent = !r.test(ce.type);
                cb = ce.url;
                if (!ce.hasContent) {
                    if (ce.data) {
                        cb = (ce.url += (aA.test(cb) ? "&" : "?") + ce.data);
                        delete ce.data;
                    }
                    if (ce.cache === false) {
                        ce.url = P.test(cb) ? cb.replace(P, "$1_=" + bQ++) : cb + (aA.test(cb) ? "&" : "?") + "_=" + bQ++;
                    }
                }
                if (ce.ifModified) {
                    if (bL.lastModified[cb]) {
                        ck.setRequestHeader("If-Modified-Since", bL.lastModified[cb]);
                    }
                    if (bL.etag[cb]) {
                        ck.setRequestHeader("If-None-Match", bL.etag[cb]);
                    }
                }
                if (ce.data && ce.hasContent && ce.contentType !== false || b7.contentType) {
                    ck.setRequestHeader("Content-Type", ce.contentType);
                }
                ck.setRequestHeader("Accept", ce.dataTypes[0] && ce.accepts[ce.dataTypes[0]] ? ce.accepts[ce.dataTypes[0]] + (ce.dataTypes[0] !== "*" ? ", " + aX + "; q=0.01" : "") : ce.accepts["*"]);
                for (cl in ce.headers) {
                    ck.setRequestHeader(cl, ce.headers[cl]);
                }
                if (ce.beforeSend && (ce.beforeSend.call(cs, ck, ce) === false || b9 === 2)) {
                    return ck.abort();
                }
                cd = "abort";
                for (cl in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) {
                    ck[cl](ce[cl]);
                }
                cm = q(a9, ce, b7, ck);
                if (!cm) {
                    cg(-1, "No Transport");
                } else {
                    ck.readyState = 1;
                    if (b6) {
                        ch.trigger("ajaxSend", [ck, ce]);
                    }
                    if (ce.async && ce.timeout > 0) {
                        cf = setTimeout(function() {
                            ck.abort("timeout");
                        }, ce.timeout);
                    }
                    try {
                        b9 = 1;
                        cm.send(ci, cg);
                    } catch (cn) {
                        if (b9 < 2) {
                            cg(-1, cn);
                        } else {
                            throw cn;
                        }
                    }
                }

                function cg(cx, ct, cy, cv) {
                    var e, cB, cz, cw, cA, cu = ct;
                    if (b9 === 2) {
                        return;
                    }
                    b9 = 2;
                    if (cf) {
                        clearTimeout(cf);
                    }
                    cm = aH;
                    cq = cv || "";
                    ck.readyState = cx > 0 ? 4 : 0;
                    e = cx >= 200 && cx < 300 || cx === 304;
                    if (cy) {
                        cw = h(ce, ck, cy);
                    }
                    cw = ag(ce, cw, ck, e);
                    if (e) {
                        if (ce.ifModified) {
                            cA = ck.getResponseHeader("Last-Modified");
                            if (cA) {
                                bL.lastModified[cb] = cA;
                            }
                            cA = ck.getResponseHeader("etag");
                            if (cA) {
                                bL.etag[cb] = cA;
                            }
                        }
                        if (cx === 204 || ce.type === "HEAD") {
                            cu = "nocontent";
                        } else {
                            if (cx === 304) {
                                cu = "notmodified";
                            } else {
                                cu = cw.state;
                                cB = cw.data;
                                cz = cw.error;
                                e = !cz;
                            }
                        }
                    } else {
                        cz = cu;
                        if (cx || !cu) {
                            cu = "error";
                            if (cx < 0) {
                                cx = 0;
                            }
                        }
                    }
                    ck.status = cx;
                    ck.statusText = (ct || cu) + "";
                    if (e) {
                        cr.resolveWith(cs, [cB, cu, ck]);
                    } else {
                        cr.rejectWith(cs, [ck, cu, cz]);
                    }
                    ck.statusCode(cc);
                    cc = aH;
                    if (b6) {
                        ch.trigger(e ? "ajaxSuccess" : "ajaxError", [ck, ce, e ? cB : cz]);
                    }
                    co.fireWith(cs, [ck, cu]);
                    if (b6) {
                        ch.trigger("ajaxComplete", [ck, ce]);
                        if (!(--bL.active)) {
                            bL.event.trigger("ajaxStop");
                        }
                    }
                }
                return ck;
            },
            getJSON: function(e, b6, b7) {
                return bL.get(e, b6, b7, "json");
            },
            getScript: function(e, b6) {
                return bL.get(e, aH, b6, "script");
            }
        });
        bL.each(["get", "post"], function(e, b6) {
            bL[b6] = function(b7, b9, ca, b8) {
                if (bL.isFunction(b9)) {
                    b8 = b8 || ca;
                    ca = b9;
                    b9 = aH;
                }
                return bL.ajax({
                    url: b7,
                    type: b6,
                    dataType: b8,
                    data: b9,
                    success: ca
                });
            };
        });

        function h(cd, cc, b9) {
            var e, b8, b7, ca, b6 = cd.contents,
                cb = cd.dataTypes;
            while (cb[0] === "*") {
                cb.shift();
                if (b8 === aH) {
                    b8 = cd.mimeType || cc.getResponseHeader("Content-Type");
                }
            }
            if (b8) {
                for (ca in b6) {
                    if (b6[ca] && b6[ca].test(b8)) {
                        cb.unshift(ca);
                        break;
                    }
                }
            }
            if (cb[0] in b9) {
                b7 = cb[0];
            } else {
                for (ca in b9) {
                    if (!cb[0] || cd.converters[ca + " " + cb[0]]) {
                        b7 = ca;
                        break;
                    }
                    if (!e) {
                        e = ca;
                    }
                }
                b7 = b7 || e;
            }
            if (b7) {
                if (b7 !== cb[0]) {
                    cb.unshift(b7);
                }
                return b9[b7];
            }
        }

        function ag(ch, b9, ce, b7) {
            var b6, cc, cf, ca, b8, cg = {},
                cd = ch.dataTypes.slice();
            if (cd[1]) {
                for (cf in ch.converters) {
                    cg[cf.toLowerCase()] = ch.converters[cf];
                }
            }
            cc = cd.shift();
            while (cc) {
                if (ch.responseFields[cc]) {
                    ce[ch.responseFields[cc]] = b9;
                }
                if (!b8 && b7 && ch.dataFilter) {
                    b9 = ch.dataFilter(b9, ch.dataType);
                }
                b8 = cc;
                cc = cd.shift();
                if (cc) {
                    if (cc === "*") {
                        cc = b8;
                    } else {
                        if (b8 !== "*" && b8 !== cc) {
                            cf = cg[b8 + " " + cc] || cg["* " + cc];
                            if (!cf) {
                                for (b6 in cg) {
                                    ca = b6.split(" ");
                                    if (ca[1] === cc) {
                                        cf = cg[b8 + " " + ca[0]] || cg["* " + ca[0]];
                                        if (cf) {
                                            if (cf === true) {
                                                cf = cg[b6];
                                            } else {
                                                if (cg[b6] !== true) {
                                                    cc = ca[0];
                                                    cd.unshift(ca[1]);
                                                }
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                            if (cf !== true) {
                                if (cf && ch["throws"]) {
                                    b9 = cf(b9);
                                } else {
                                    try {
                                        b9 = cf(b9);
                                    } catch (cb) {
                                        return {
                                            state: "parsererror",
                                            error: cf ? cb : "No conversion from " + b8 + " to " + cc
                                        };
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return {
                state: "success",
                data: b9
            };
        }
        bL.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    bL.globalEval(e);
                    return e;
                }
            }
        });
        bL.ajaxPrefilter("script", function(e) {
            if (e.cache === aH) {
                e.cache = false;
            }
            if (e.crossDomain) {
                e.type = "GET";
                e.global = false;
            }
        });
        bL.ajaxTransport("script", function(b7) {
            if (b7.crossDomain) {
                var e, b6 = o.head || bL("head")[0] || o.documentElement;
                return {
                    send: function(b8, b9) {
                        e = o.createElement("script");
                        e.async = true;
                        if (b7.scriptCharset) {
                            e.charset = b7.scriptCharset;
                        }
                        e.src = b7.url;
                        e.onload = e.onreadystatechange = function(cb, ca) {
                            if (ca || !e.readyState || /loaded|complete/.test(e.readyState)) {
                                e.onload = e.onreadystatechange = null;
                                if (e.parentNode) {
                                    e.parentNode.removeChild(e);
                                }
                                e = null;
                                if (!ca) {
                                    b9(200, "success");
                                }
                            }
                        };
                        b6.insertBefore(e, b6.firstChild);
                    },
                    abort: function() {
                        if (e) {
                            e.onload(aH, true);
                        }
                    }
                };
            }
        });
        var bs = [],
            a7 = /(=)\?(?=&|$)|\?\?/;
        bL.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = bs.pop() || (bL.expando + "_" + (bQ++));
                this[e] = true;
                return e;
            }
        });
        bL.ajaxPrefilter("json jsonp", function(b8, e, b9) {
            var cb, b6, b7, ca = b8.jsonp !== false && (a7.test(b8.url) ? "url" : typeof b8.data === "string" && !(b8.contentType || "").indexOf("application/x-www-form-urlencoded") && a7.test(b8.data) && "data");
            if (ca || b8.dataTypes[0] === "jsonp") {
                cb = b8.jsonpCallback = bL.isFunction(b8.jsonpCallback) ? b8.jsonpCallback() : b8.jsonpCallback;
                if (ca) {
                    b8[ca] = b8[ca].replace(a7, "$1" + cb);
                } else {
                    if (b8.jsonp !== false) {
                        b8.url += (aA.test(b8.url) ? "&" : "?") + b8.jsonp + "=" + cb;
                    }
                }
                b8.converters["script json"] = function() {
                    if (!b7) {
                        bL.error(cb + " was not called");
                    }
                    return b7[0];
                };
                b8.dataTypes[0] = "json";
                b6 = a4[cb];
                a4[cb] = function() {
                    b7 = arguments;
                };
                b9.always(function() {
                    a4[cb] = b6;
                    if (b8[cb]) {
                        b8.jsonpCallback = e.jsonpCallback;
                        bs.push(cb);
                    }
                    if (b7 && bL.isFunction(b6)) {
                        b6(b7[0]);
                    }
                    b7 = b6 = aH;
                });
                return "script";
            }
        });
        var ai, ay, az = 0,
            aQ = a4.ActiveXObject && function() {
                var e;
                for (e in ai) {
                    ai[e](aH, true);
                }
            };

        function bF() {
            try {
                return new a4.XMLHttpRequest();
            } catch (b6) {}
        }

        function bg() {
            try {
                return new a4.ActiveXObject("Microsoft.XMLHTTP");
            } catch (b6) {}
        }
        bL.ajaxSettings.xhr = a4.ActiveXObject ? function() {
            return !this.isLocal && bF() || bg();
        } : bF;
        ay = bL.ajaxSettings.xhr();
        bL.support.cors = !!ay && ("withCredentials" in ay);
        ay = bL.support.ajax = !!ay;
        if (ay) {
            bL.ajaxTransport(function(e) {
                if (!e.crossDomain || bL.support.cors) {
                    var b6;
                    return {
                        send: function(cc, b7) {
                            var ca, b8, cb = e.xhr();
                            if (e.username) {
                                cb.open(e.type, e.url, e.async, e.username, e.password);
                            } else {
                                cb.open(e.type, e.url, e.async);
                            }
                            if (e.xhrFields) {
                                for (b8 in e.xhrFields) {
                                    cb[b8] = e.xhrFields[b8];
                                }
                            }
                            if (e.mimeType && cb.overrideMimeType) {
                                cb.overrideMimeType(e.mimeType);
                            }
                            if (!e.crossDomain && !cc["X-Requested-With"]) {
                                cc["X-Requested-With"] = "XMLHttpRequest";
                            }
                            try {
                                for (b8 in cc) {
                                    cb.setRequestHeader(b8, cc[b8]);
                                }
                            } catch (b9) {}
                            cb.send((e.hasContent && e.data) || null);
                            b6 = function(cf, ce) {
                                var cd, cg, cj, ch;
                                try {
                                    if (b6 && (ce || cb.readyState === 4)) {
                                        b6 = aH;
                                        if (ca) {
                                            cb.onreadystatechange = bL.noop;
                                            if (aQ) {
                                                delete ai[ca];
                                            }
                                        }
                                        if (ce) {
                                            if (cb.readyState !== 4) {
                                                cb.abort();
                                            }
                                        } else {
                                            ch = {};
                                            cd = cb.status;
                                            cg = cb.getAllResponseHeaders();
                                            if (typeof cb.responseText === "string") {
                                                ch.text = cb.responseText;
                                            }
                                            try {
                                                cj = cb.statusText;
                                            } catch (ci) {
                                                cj = "";
                                            }
                                            if (!cd && e.isLocal && !e.crossDomain) {
                                                cd = ch.text ? 200 : 404;
                                            } else {
                                                if (cd === 1223) {
                                                    cd = 204;
                                                }
                                            }
                                        }
                                    }
                                } catch (ck) {
                                    if (!ce) {
                                        b7(-1, ck);
                                    }
                                }
                                if (ch) {
                                    b7(cd, cj, ch, cg);
                                }
                            };
                            if (!e.async) {
                                b6();
                            } else {
                                if (cb.readyState === 4) {
                                    setTimeout(b6);
                                } else {
                                    ca = ++az;
                                    if (aQ) {
                                        if (!ai) {
                                            ai = {};
                                            bL(a4).unload(aQ);
                                        }
                                        ai[ca] = b6;
                                    }
                                    cb.onreadystatechange = b6;
                                }
                            }
                        },
                        abort: function() {
                            if (b6) {
                                b6(aH, true);
                            }
                        }
                    };
                }
            });
        }
        var M, ae, bT = /^(?:toggle|show|hide)$/,
            bM = new RegExp("^(?:([+-])=|)(" + bC + ")([a-z%]*)$", "i"),
            bS = /queueHooks$/,
            aC = [j],
            a1 = {
                "*": [function(e, cb) {
                    var cd = this.createTween(e, cb),
                        b9 = cd.cur(),
                        b8 = bM.exec(cb),
                        cc = b8 && b8[3] || (bL.cssNumber[e] ? "" : "px"),
                        b6 = (bL.cssNumber[e] || cc !== "px" && +b9) && bM.exec(bL.css(cd.elem, e)),
                        b7 = 1,
                        ca = 20;
                    if (b6 && b6[3] !== cc) {
                        cc = cc || b6[3];
                        b8 = b8 || [];
                        b6 = +b9 || 1;
                        do {
                            b7 = b7 || ".5";
                            b6 = b6 / b7;
                            bL.style(cd.elem, e, b6 + cc);
                        } while (b7 !== (b7 = cd.cur() / b9) && b7 !== 1 && --ca);
                    }
                    if (b8) {
                        b6 = cd.start = +b6 || +b9 || 0;
                        cd.unit = cc;
                        cd.end = b8[1] ? b6 + (b8[1] + 1) * b8[2] : +b8[2];
                    }
                    return cd;
                }]
            };

        function bo() {
            setTimeout(function() {
                M = aH;
            });
            return (M = bL.now());
        }

        function bd(b9, cb, b8) {
            var b6, ca = (a1[cb] || []).concat(a1["*"]),
                e = 0,
                b7 = ca.length;
            for (; e < b7; e++) {
                if ((b6 = ca[e].call(b8, cb, b9))) {
                    return b6;
                }
            }
        }

        function g(b7, cb, ce) {
            var cf, e, ca = 0,
                b6 = aC.length,
                cd = bL.Deferred().always(function() {
                    delete b9.elem;
                }),
                b9 = function() {
                    if (e) {
                        return false;
                    }
                    var cl = M || bo(),
                        ci = Math.max(0, b8.startTime + b8.duration - cl),
                        cg = ci / b8.duration || 0,
                        ck = 1 - cg,
                        ch = 0,
                        cj = b8.tweens.length;
                    for (; ch < cj; ch++) {
                        b8.tweens[ch].run(ck);
                    }
                    cd.notifyWith(b7, [b8, ck, ci]);
                    if (ck < 1 && cj) {
                        return ci;
                    } else {
                        cd.resolveWith(b7, [b8]);
                        return false;
                    }
                },
                b8 = cd.promise({
                    elem: b7,
                    props: bL.extend({}, cb),
                    opts: bL.extend(true, {
                        specialEasing: {}
                    }, ce),
                    originalProperties: cb,
                    originalOptions: ce,
                    startTime: M || bo(),
                    duration: ce.duration,
                    tweens: [],
                    createTween: function(ci, cg) {
                        var ch = bL.Tween(b7, b8.opts, ci, cg, b8.opts.specialEasing[ci] || b8.opts.easing);
                        b8.tweens.push(ch);
                        return ch;
                    },
                    stop: function(ch) {
                        var cg = 0,
                            ci = ch ? b8.tweens.length : 0;
                        if (e) {
                            return this;
                        }
                        e = true;
                        for (; cg < ci; cg++) {
                            b8.tweens[cg].run(1);
                        }
                        if (ch) {
                            cd.resolveWith(b7, [b8, ch]);
                        } else {
                            cd.rejectWith(b7, [b8, ch]);
                        }
                        return this;
                    }
                }),
                cc = b8.props;
            an(cc, b8.opts.specialEasing);
            for (; ca < b6; ca++) {
                cf = aC[ca].call(b8, b7, cc, b8.opts);
                if (cf) {
                    return cf;
                }
            }
            bL.map(cc, bd, b8);
            if (bL.isFunction(b8.opts.start)) {
                b8.opts.start.call(b7, b8);
            }
            bL.fx.timer(bL.extend(b9, {
                elem: b7,
                anim: b8,
                queue: b8.opts.queue
            }));
            return b8.progress(b8.opts.progress).done(b8.opts.done, b8.opts.complete).fail(b8.opts.fail).always(b8.opts.always);
        }

        function an(b8, ca) {
            var b7, b6, cb, b9, e;
            for (b7 in b8) {
                b6 = bL.camelCase(b7);
                cb = ca[b6];
                b9 = b8[b7];
                if (bL.isArray(b9)) {
                    cb = b9[1];
                    b9 = b8[b7] = b9[0];
                }
                if (b7 !== b6) {
                    b8[b6] = b9;
                    delete b8[b7];
                }
                e = bL.cssHooks[b6];
                if (e && "expand" in e) {
                    b9 = e.expand(b9);
                    delete b8[b6];
                    for (b7 in b9) {
                        if (!(b7 in b8)) {
                            b8[b7] = b9[b7];
                            ca[b7] = cb;
                        }
                    }
                } else {
                    ca[b6] = cb;
                }
            }
        }
        bL.Animation = bL.extend(g, {
            tweener: function(b6, b9) {
                if (bL.isFunction(b6)) {
                    b9 = b6;
                    b6 = ["*"];
                } else {
                    b6 = b6.split(" ");
                }
                var b8, e = 0,
                    b7 = b6.length;
                for (; e < b7; e++) {
                    b8 = b6[e];
                    a1[b8] = a1[b8] || [];
                    a1[b8].unshift(b9);
                }
            },
            prefilter: function(b6, e) {
                if (e) {
                    aC.unshift(b6);
                } else {
                    aC.push(b6);
                }
            }
        });

        function j(b8, cc, e) {
            var b7, ce, ca, ch, ci, cf, b9 = this,
                cd = {},
                b6 = b8.style,
                cb = b8.nodeType && Q(b8),
                cg = bL._data(b8, "fxshow");
            if (!e.queue) {
                ci = bL._queueHooks(b8, "fx");
                if (ci.unqueued == null) {
                    ci.unqueued = 0;
                    cf = ci.empty.fire;
                    ci.empty.fire = function() {
                        if (!ci.unqueued) {
                            cf();
                        }
                    };
                }
                ci.unqueued++;
                b9.always(function() {
                    b9.always(function() {
                        ci.unqueued--;
                        if (!bL.queue(b8, "fx").length) {
                            ci.empty.fire();
                        }
                    });
                });
            }
            if (b8.nodeType === 1 && ("height" in cc || "width" in cc)) {
                e.overflow = [b6.overflow, b6.overflowX, b6.overflowY];
                if (bL.css(b8, "display") === "inline" && bL.css(b8, "float") === "none") {
                    if (!bL.support.inlineBlockNeedsLayout || bG(b8.nodeName) === "inline") {
                        b6.display = "inline-block";
                    } else {
                        b6.zoom = 1;
                    }
                }
            }
            if (e.overflow) {
                b6.overflow = "hidden";
                if (!bL.support.shrinkWrapBlocks) {
                    b9.always(function() {
                        b6.overflow = e.overflow[0];
                        b6.overflowX = e.overflow[1];
                        b6.overflowY = e.overflow[2];
                    });
                }
            }
            for (b7 in cc) {
                ce = cc[b7];
                if (bT.exec(ce)) {
                    delete cc[b7];
                    ca = ca || ce === "toggle";
                    if (ce === (cb ? "hide" : "show")) {
                        continue;
                    }
                    cd[b7] = cg && cg[b7] || bL.style(b8, b7);
                }
            }
            if (!bL.isEmptyObject(cd)) {
                if (cg) {
                    if ("hidden" in cg) {
                        cb = cg.hidden;
                    }
                } else {
                    cg = bL._data(b8, "fxshow", {});
                }
                if (ca) {
                    cg.hidden = !cb;
                }
                if (cb) {
                    bL(b8).show();
                } else {
                    b9.done(function() {
                        bL(b8).hide();
                    });
                }
                b9.done(function() {
                    var cj;
                    bL._removeData(b8, "fxshow");
                    for (cj in cd) {
                        bL.style(b8, cj, cd[cj]);
                    }
                });
                for (b7 in cd) {
                    ch = bd(cb ? cg[b7] : 0, b7, b9);
                    if (!(b7 in cg)) {
                        cg[b7] = ch.start;
                        if (cb) {
                            ch.end = ch.start;
                            ch.start = b7 === "width" || b7 === "height" ? 1 : 0;
                        }
                    }
                }
            }
        }

        function I(b7, b6, b9, e, b8) {
            return new I.prototype.init(b7, b6, b9, e, b8);
        }
        bL.Tween = I;
        I.prototype = {
            constructor: I,
            init: function(b8, b6, ca, e, b9, b7) {
                this.elem = b8;
                this.prop = ca;
                this.easing = b9 || "swing";
                this.options = b6;
                this.start = this.now = this.cur();
                this.end = e;
                this.unit = b7 || (bL.cssNumber[ca] ? "" : "px");
            },
            cur: function() {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this);
            },
            run: function(b7) {
                var b6, e = I.propHooks[this.prop];
                if (this.options.duration) {
                    this.pos = b6 = bL.easing[this.easing](b7, this.options.duration * b7, 0, 1, this.options.duration);
                } else {
                    this.pos = b6 = b7;
                }
                this.now = (this.end - this.start) * b6 + this.start;
                if (this.options.step) {
                    this.options.step.call(this.elem, this.now, this);
                }
                if (e && e.set) {
                    e.set(this);
                } else {
                    I.propHooks._default.set(this);
                }
                return this;
            }
        };
        I.prototype.init.prototype = I.prototype;
        I.propHooks = {
            _default: {
                get: function(b6) {
                    var e;
                    if (b6.elem[b6.prop] != null && (!b6.elem.style || b6.elem.style[b6.prop] == null)) {
                        return b6.elem[b6.prop];
                    }
                    e = bL.css(b6.elem, b6.prop, "");
                    return !e || e === "auto" ? 0 : e;
                },
                set: function(e) {
                    if (bL.fx.step[e.prop]) {
                        bL.fx.step[e.prop](e);
                    } else {
                        if (e.elem.style && (e.elem.style[bL.cssProps[e.prop]] != null || bL.cssHooks[e.prop])) {
                            bL.style(e.elem, e.prop, e.now + e.unit);
                        } else {
                            e.elem[e.prop] = e.now;
                        }
                    }
                }
            }
        };
        I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(e) {
                if (e.elem.nodeType && e.elem.parentNode) {
                    e.elem[e.prop] = e.now;
                }
            }
        };
        bL.each(["toggle", "show", "hide"], function(b6, e) {
            var b7 = bL.fn[e];
            bL.fn[e] = function(b8, ca, b9) {
                return b8 == null || typeof b8 === "boolean" ? b7.apply(this, arguments) : this.animate(bK(e, true), b8, ca, b9);
            };
        });
        bL.fn.extend({
            fadeTo: function(e, b8, b7, b6) {
                return this.filter(Q).css("opacity", 0).show().end().animate({
                    opacity: b8
                }, e, b7, b6);
            },
            animate: function(cb, b8, ca, b9) {
                var b7 = bL.isEmptyObject(cb),
                    e = bL.speed(b8, ca, b9),
                    b6 = function() {
                        var cc = g(this, bL.extend({}, cb), e);
                        if (b7 || bL._data(this, "finish")) {
                            cc.stop(true);
                        }
                    };
                b6.finish = b6;
                return b7 || e.queue === false ? this.each(b6) : this.queue(e.queue, b6);
            },
            stop: function(b7, b6, e) {
                var b8 = function(b9) {
                    var ca = b9.stop;
                    delete b9.stop;
                    ca(e);
                };
                if (typeof b7 !== "string") {
                    e = b6;
                    b6 = b7;
                    b7 = aH;
                }
                if (b6 && b7 !== false) {
                    this.queue(b7 || "fx", []);
                }
                return this.each(function() {
                    var cc = true,
                        b9 = b7 != null && b7 + "queueHooks",
                        cb = bL.timers,
                        ca = bL._data(this);
                    if (b9) {
                        if (ca[b9] && ca[b9].stop) {
                            b8(ca[b9]);
                        }
                    } else {
                        for (b9 in ca) {
                            if (ca[b9] && ca[b9].stop && bS.test(b9)) {
                                b8(ca[b9]);
                            }
                        }
                    }
                    for (b9 = cb.length; b9--;) {
                        if (cb[b9].elem === this && (b7 == null || cb[b9].queue === b7)) {
                            cb[b9].anim.stop(e);
                            cc = false;
                            cb.splice(b9, 1);
                        }
                    }
                    if (cc || !e) {
                        bL.dequeue(this, b7);
                    }
                });
            },
            finish: function(e) {
                if (e !== false) {
                    e = e || "fx";
                }
                return this.each(function() {
                    var b8, cb = bL._data(this),
                        b7 = cb[e + "queue"],
                        b6 = cb[e + "queueHooks"],
                        ca = bL.timers,
                        b9 = b7 ? b7.length : 0;
                    cb.finish = true;
                    bL.queue(this, e, []);
                    if (b6 && b6.stop) {
                        b6.stop.call(this, true);
                    }
                    for (b8 = ca.length; b8--;) {
                        if (ca[b8].elem === this && ca[b8].queue === e) {
                            ca[b8].anim.stop(true);
                            ca.splice(b8, 1);
                        }
                    }
                    for (b8 = 0; b8 < b9; b8++) {
                        if (b7[b8] && b7[b8].finish) {
                            b7[b8].finish.call(this);
                        }
                    }
                    delete cb.finish;
                });
            }
        });

        function bK(b7, b9) {
            var b8, e = {
                    height: b7
                },
                b6 = 0;
            b9 = b9 ? 1 : 0;
            for (; b6 < 4; b6 += 2 - b9) {
                b8 = bV[b6];
                e["margin" + b8] = e["padding" + b8] = b7;
            }
            if (b9) {
                e.opacity = e.width = b7;
            }
            return e;
        }
        bL.each({
            slideDown: bK("show"),
            slideUp: bK("hide"),
            slideToggle: bK("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, b6) {
            bL.fn[e] = function(b7, b9, b8) {
                return this.animate(b6, b7, b9, b8);
            };
        });
        bL.speed = function(b7, b8, b6) {
            var e = b7 && typeof b7 === "object" ? bL.extend({}, b7) : {
                complete: b6 || !b6 && b8 || bL.isFunction(b7) && b7,
                duration: b7,
                easing: b6 && b8 || b8 && !bL.isFunction(b8) && b8
            };
            e.duration = bL.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bL.fx.speeds ? bL.fx.speeds[e.duration] : bL.fx.speeds._default;
            if (e.queue == null || e.queue === true) {
                e.queue = "fx";
            }
            e.old = e.complete;
            e.complete = function() {
                if (bL.isFunction(e.old)) {
                    e.old.call(this);
                }
                if (e.queue) {
                    bL.dequeue(this, e.queue);
                }
            };
            return e;
        };
        bL.easing = {
            linear: function(e) {
                return e;
            },
            swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            }
        };
        bL.timers = [];
        bL.fx = I.prototype.init;
        bL.fx.tick = function() {
            var b7, b6 = bL.timers,
                e = 0;
            M = bL.now();
            for (; e < b6.length; e++) {
                b7 = b6[e];
                if (!b7() && b6[e] === b7) {
                    b6.splice(e--, 1);
                }
            }
            if (!b6.length) {
                bL.fx.stop();
            }
            M = aH;
        };
        bL.fx.timer = function(e) {
            if (e() && bL.timers.push(e)) {
                bL.fx.start();
            }
        };
        bL.fx.interval = 13;
        bL.fx.start = function() {
            if (!ae) {
                ae = setInterval(bL.fx.tick, bL.fx.interval);
            }
        };
        bL.fx.stop = function() {
            clearInterval(ae);
            ae = null;
        };
        bL.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        bL.fx.step = {};
        if (bL.expr && bL.expr.filters) {
            bL.expr.filters.animated = function(e) {
                return bL.grep(bL.timers, function(b6) {
                    return e === b6.elem;
                }).length;
            };
        }
        bL.fn.offset = function(b6) {
            if (arguments.length) {
                return b6 === aH ? this : this.each(function(cb) {
                    bL.offset.setOffset(this, b6, cb);
                });
            }
            var e, ca, b8 = {
                    top: 0,
                    left: 0
                },
                b7 = this[0],
                b9 = b7 && b7.ownerDocument;
            if (!b9) {
                return;
            }
            e = b9.documentElement;
            if (!bL.contains(e, b7)) {
                return b8;
            }
            if (typeof b7.getBoundingClientRect !== aD) {
                b8 = b7.getBoundingClientRect();
            }
            ca = br(b9);
            return {
                top: b8.top + (ca.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: b8.left + (ca.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            };
        };
        bL.offset = {
            setOffset: function(b8, ch, cb) {
                var cc = bL.css(b8, "position");
                if (cc === "static") {
                    b8.style.position = "relative";
                }
                var ca = bL(b8),
                    b6 = ca.offset(),
                    e = bL.css(b8, "top"),
                    cf = bL.css(b8, "left"),
                    cg = (cc === "absolute" || cc === "fixed") && bL.inArray("auto", [e, cf]) > -1,
                    ce = {},
                    cd = {},
                    b7, b9;
                if (cg) {
                    cd = ca.position();
                    b7 = cd.top;
                    b9 = cd.left;
                } else {
                    b7 = parseFloat(e) || 0;
                    b9 = parseFloat(cf) || 0;
                }
                if (bL.isFunction(ch)) {
                    ch = ch.call(b8, cb, b6);
                }
                if (ch.top != null) {
                    ce.top = (ch.top - b6.top) + b7;
                }
                if (ch.left != null) {
                    ce.left = (ch.left - b6.left) + b9;
                }
                if ("using" in ch) {
                    ch.using.call(b8, ce);
                } else {
                    ca.css(ce);
                }
            }
        };
        bL.fn.extend({
            position: function() {
                if (!this[0]) {
                    return;
                }
                var b7, b8, e = {
                        top: 0,
                        left: 0
                    },
                    b6 = this[0];
                if (bL.css(b6, "position") === "fixed") {
                    b8 = b6.getBoundingClientRect();
                } else {
                    b7 = this.offsetParent();
                    b8 = this.offset();
                    if (!bL.nodeName(b7[0], "html")) {
                        e = b7.offset();
                    }
                    e.top += bL.css(b7[0], "borderTopWidth", true);
                    e.left += bL.css(b7[0], "borderLeftWidth", true);
                }
                return {
                    top: b8.top - e.top - bL.css(b6, "marginTop", true),
                    left: b8.left - e.left - bL.css(b6, "marginLeft", true)
                };
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent || bY;
                    while (e && (!bL.nodeName(e, "html") && bL.css(e, "position") === "static")) {
                        e = e.offsetParent;
                    }
                    return e || bY;
                });
            }
        });
        bL.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b7, b6) {
            var e = /Y/.test(b6);
            bL.fn[b7] = function(b8) {
                return bL.access(this, function(b9, cc, cb) {
                    var ca = br(b9);
                    if (cb === aH) {
                        return ca ? (b6 in ca) ? ca[b6] : ca.document.documentElement[cc] : b9[cc];
                    }
                    if (ca) {
                        ca.scrollTo(!e ? cb : bL(ca).scrollLeft(), e ? cb : bL(ca).scrollTop());
                    } else {
                        b9[cc] = cb;
                    }
                }, b7, b8, arguments.length, null);
            };
        });

        function br(e) {
            return bL.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
        }
        bL.each({
            Height: "height",
            Width: "width"
        }, function(e, b6) {
            bL.each({
                padding: "inner" + e,
                content: b6,
                "": "outer" + e
            }, function(b7, b8) {
                bL.fn[b8] = function(cc, cb) {
                    var ca = arguments.length && (b7 || typeof cc !== "boolean"),
                        b9 = b7 || (cc === true || cb === true ? "margin" : "border");
                    return bL.access(this, function(ce, cd, cf) {
                        var cg;
                        if (bL.isWindow(ce)) {
                            return ce.document.documentElement["client" + e];
                        }
                        if (ce.nodeType === 9) {
                            cg = ce.documentElement;
                            return Math.max(ce.body["scroll" + e], cg["scroll" + e], ce.body["offset" + e], cg["offset" + e], cg["client" + e]);
                        }
                        return cf === aH ? bL.css(ce, cd, b9) : bL.style(ce, cd, cf, b9);
                    }, b6, ca ? cc : aH, ca, null);
                };
            });
        });
        bL.fn.size = function() {
            return this.length;
        };
        bL.fn.andSelf = bL.fn.addBack;
        if (typeof module === "object" && module && typeof module.exports === "object") {
            module.exports = bL;
        } else {
            a.$ = bL;
            a.$.noConflict();
        }
    })(window);
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    (function(b) {
        b(wigzo.$);
    }(function(g) {
        var b = /\+/g;

        function e(l) {
            return c.raw ? l : encodeURIComponent(l);
        }

        function h(l) {
            return c.raw ? l : decodeURIComponent(l);
        }

        function j(l) {
            return e(c.json ? JSON.stringify(l) : String(l));
        }

        function d(l) {
            if (l.indexOf('"') === 0) {
                l = l.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
            }
            try {
                l = decodeURIComponent(l.replace(b, " "));
                return c.json ? JSON.parse(l) : l;
            } catch (m) {}
        }

        function f(m, l) {
            var n = c.raw ? m : d(m);
            return g.isFunction(l) ? l(n) : n;
        }
        var c = g.cookie = function(s, r, x) {
            if (r !== undefined && !g.isFunction(r)) {
                x = g.extend({}, c.defaults, x);
                if (typeof x.expires === "number") {
                    var u = x.expires,
                        w = x.expires = new Date();
                    w.setTime(+w + u * 86400000);
                }
                return (document.cookie = [e(s), "=", j(r), x.expires ? "; expires=" + x.expires.toUTCString() : "", x.path ? "; path=" + x.path : "", x.domain ? "; domain=" + x.domain : "", x.secure ? "; secure" : ""].join(""));
            }
            var y = s ? undefined : {};
            var v = document.cookie ? document.cookie.split("; ") : [];
            for (var q = 0, o = v.length; q < o; q++) {
                var p = v[q].split("=");
                var m = h(p.shift());
                var n = p.join("=");
                if (s && s === m) {
                    y = f(n, r);
                    break;
                }
                if (!s && (n = f(n)) !== undefined) {
                    y[m] = n;
                }
            }
            return y;
        };
        c.defaults = {};
        g.removeCookie = function(m, l) {
            if (g.cookie(m) === undefined) {
                return false;
            }
            g.cookie(m, "", g.extend({}, l, {
                expires: -1
            }));
            return !g.cookie(m);
        };
    }));
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.onsitePush = (function(b) {
        b.init = function(h, l, g, f, j, m) {
            if ("WebSocket" in window || "MozWebSocket" in window) {
                if (typeof(a.io) === "undefined") {
                    console.log("Node is down... Please check!!");
                    return;
                }
                var e = a.io(h, {
                    transports: ["websocket"],
                    upgrade: false
                });
                var n;
                e.on("notify", function(o) {
                    if (!o) {
                        console.log("No pending message found!");
                        return;
                    }
                    o.cookie_id = g;
                    if (f) {
                        f(o);
                    }
                    e.emit("acknowledge", o);
                });
                e.on("connect", function(o) {
                    e.emit("join", {
                        cookie_id: g,
                        org_token: l
                    });
                    if (j) {
                        j(e);
                    }
                });
                e.on("disconnect", function() {
                    console.log("Disconnedted from: " + h);
                    if (m) {
                        m(e);
                    }
                });
            } else {
                console.info("This library requires WebSocket support.");
            }
        };
        b.getProfileBlocking = function d(l, m, j, h) {
            var e = null;
            var g = null;
            var f = JSON.parse(h).u_mid;
            ua.profileCallback(f, function(n) {
                e = n;
                var o = encodeURIComponent(JSON.stringify(n.data));
                m += "&ucSessionData=" + o;
                c(l, m, j);
            }, function(n) {
                c(l, m, j);
            });
        };

        function c(h, j, g) {
            if (wigzo.$("#wigzo-onsite-notif-iframe-div").length > 0) {
                wigzo.$("#wigzo-onsite-notif-iframe-div").remove();
            }
            var e = document.createElement("div");
            e.setAttribute("id", "wigzo-onsite-notif-iframe-div");
            e.setAttribute("style", "opacity: 0; position: fixed; outline: 0 !important; border: 0 !important; z-index: 2147483000!important; margin: 0 !important; padding: 0 !important; width: 100%; height: 100%; max-width: 0px; max-height: 0px");
            document.body.appendChild(e);
            var f = document.createElement("iframe");
            f.setAttribute("src", j);
            f.setAttribute("id", h.layoutId);
            f.setAttribute("class", "WigzoOnsiteNotificationIframe");
            f.setAttribute("style", "position: absolute; top:0; left:0; right:0; bottom:0; width: 100% !important; height: 100% !important; outline: 0 !important; border: 0 !important; z-index: 2147483000!important; margin: 0 !important; padding: 0 !important;");
            f.setAttribute("scrolling", "no");
            e.appendChild(f);
            b.globalData = h;
            b.globalDeviceType = g;
            b.initialiseListener(h, g);
        }
        b.showNotification = function(j) {
            if (j.hasOwnProperty("org_token") && j.org_token === wigzo.ORGANIZATIONID) {
                if (j.hasOwnProperty("message") && j.message.type === "InAppNotification") {
                    if (!j.settings) {
                        return;
                    }
                    if (!(typeof(j.settings.showToMappedUsers) === "undefined")) {
                        if (!j.settings.showToMappedUsers && (a.isMapped("USER") || a.isMapped("PHONE"))) {
                            a.consoleDebug("User is mapped.");
                            return;
                        }
                    }
                    var e = true;
                    if (j.settings.hasOwnProperty("locationAndDeviceTargeting") && !!j.settings.locationAndDeviceTargeting && j.settings.locationAndDeviceTargeting.status) {
                        e = a.exitIntent.evaluateAgainstCriteria(j.settings.locationAndDeviceTargeting.criteria, j.settings.locationAndDeviceTargeting.globalOperator);
                    }
                    var l = a.helpers.checkAgainstUrlCriteria(j.settings.urlSettings.urlTargeting);
                    var h = a.helpers.getDeviceType();
                    var f = (h == "desktop" && j.settings.device.screen.desktop.show) || (h == "mobile" && j.settings.device.screen.mobile.show) || (h == "tablet" && j.settings.device.screen.tablet.show);
                    if (l && f && e) {
                        j.langAlign = wigzo.getAlignmentByLang();
                        var m = "";
                        var g = localStorage.getItem("_uc_session_v1");
                        wigzo.getOrCreateCookie(function(o) {
                            var r = wigzo.isMapped("BROWSER");
                            var n = wigzo.isMapped("USER");
                            var p = wigzo.isMapped("PHONE");
                            m = wigzo.APP + "/onsitepush/campaign/render/" + j.message.category + "/" + j.campaign_id + "/" + o + "?_=" + new Date().getTime() + "&_siteid=" + wigzo.ORGANIZATIONID + "&bm=" + r + "&um=" + n + "&pm=" + p + "&cu=" + j.canonicalUrl + "&cookieid=" + o + "&t=" + j.uuid + "&r" + Math.floor(Math.random() * 1000);
                            if (g && typeof ua !== "undefined") {
                                try {
                                    wigzo.onsitePush.getProfileBlocking(j, m, h, g);
                                } catch (q) {
                                    console.error(q);
                                    c(j, m, h);
                                }
                            } else {
                                c(j, m, h);
                            }
                        });
                    } else {
                        a.consoleDebug("Invalid campaign - " + j);
                    }
                } else {
                    a.consoleDebug("Not a InAppNotification notification.");
                }
            }
        };
        b.initialiseListener = function(f, e) {
            if (b.hasGlobalMessageListener) {
                if (window.removeEventListener) {
                    window.removeEventListener("message", b.listenerReference);
                } else {
                    if (window.detachEvent) {
                        window.detachEvent("message", b.listenerReference);
                    }
                }
            }
            window.addEventListener("message", b.listenerReference, false);
        };
        b.listenerReference = function(e) {
            var j = localStorage.getItem("_uc_session_v1");
            var o;
            if ("wigzo-onsite-notif-close-popup" == e.data.type) {
                wigzo.$("#wigzo-onsite-notif-iframe-div").fadeOut(500, function() {
                    wigzo.$(this).remove();
                });
            } else {
                if ("wigzo-onsite-notif-track-open" === e.data.type) {
                    if (b.globalData.settings.urlSettings.redirect.enabled && !!b.globalData.message.track_open_url && b.globalData.message.track_open_url != "") {
                        wigzo.getOrCreateCookie(function(p) {
                            var r = "";
                            var q = "";
                            if (typeof b.globalData.settings.urlSettings.redirect.target == undefined || b.globalData.settings.urlSettings.redirect.target == "") {
                                q = "_blank";
                            } else {
                                q = b.globalData.settings.urlSettings.redirect.target;
                            }
                            if (b.globalData.message.track_open_url.indexOf("?") < 0) {
                                r = b.globalData.message.track_open_url + "?deviceType=" + b.globalDeviceType + "&u=" + p + "&uuid=" + b.globalData.uuid;
                            } else {
                                r = b.globalData.message.track_open_url + "&deviceType=" + b.globalDeviceType + "&u=" + p + "&uuid=" + b.globalData.uuid;
                            }
                            wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                            a.get(r, function(s) {
                                if (s.hasOwnProperty("redirectEnabled") && s.redirectEnabled == "true" && s.hasOwnProperty("redirectUrl") && s.redirectUrl) {
                                    try {
                                        var u = window.open(s.redirectUrl, q);
                                        u.focus();
                                    } catch (t) {
                                        a.$("<a href='" + s.redirectUrl + "' target=" + q + "></a>")[0].click();
                                    }
                                }
                            });
                        });
                    }
                    if (b.globalData.message.track_open_url == "" || typeof(b.globalData.message.track_open_url) === "undefined") {
                        wigzo.getOrCreateCookie(function(q) {
                            var p = b.globalData.campaign_id;
                            var r = wigzo.APP + "/onsitepush/track/open/campaign/" + p + "/" + b.globalData.actionUuid + "?deviceType=" + b.globalDeviceType + "&u=" + q + "&uuid=" + b.globalData.uuid;
                            wigzo.$.get(r, function(s) {});
                        });
                    }
                } else {
                    if ("wigzo-onsite-notif-track-slider" === e.data.type) {
                        if (e.data.url && e.data.url != "") {
                            wigzo.getOrCreateCookie(function(p) {
                                var r = "";
                                var q = "";
                                q = e.data.target;
                                if (e.data.url.indexOf("?") < 0) {
                                    r = e.data.url + "?deviceType=" + b.globalDeviceType + "&u=" + p + "&uuid=" + b.globalData.uuid;
                                } else {
                                    r = e.data.url + "&deviceType=" + b.globalDeviceType + "&u=" + p + "&uuid=" + b.globalData.uuid;
                                }
                                var s = window.open(r, q);
                                s.focus();
                            });
                        }
                        if (e.data.url == "" || typeof(e.data.url) === "undefined") {
                            wigzo.getOrCreateCookie(function(q) {
                                var p = b.globalData.campaign_id;
                                var r = wigzo.APP + "/onsitepush/track/open/campaign/" + p + "/" + b.globalData.actionUuid + "?deviceType=" + b.globalDeviceType + "&u=" + q + "&uuid=" + b.globalData.uuid;
                                wigzo.$.get(r, function(s) {});
                            });
                        }
                    } else {
                        if ("wigzo-onsite-submit" === e.data.type) {
                            var h = e.data.data;
                            h.onsite_uuid = b.globalData.uuid;
                            a.identify(h, ["email", "phone", "full_name"], function(p) {
                                a.consoleDebug(p);
                                if (p.status === "success") {
                                    wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                }
                            }, "ONSITENOTIFICATION");
                            var f = {
                                email: h.email,
                                emailServiceProviders: b.globalData.settings.emailServiceProviders
                            };
                            if (!!h.phone) {
                                f.phone = h.phone;
                            }
                            if (!!h.full_name) {
                                f.full_name = h.full_name;
                            }
                            if (!!h.date_of_birth) {
                                f.date_of_birth = h.date_of_birth;
                            }
                            if (!!h.gender) {
                                f.gender = h.gender;
                            }
                            if (!!h.question) {
                                f.question = h.question;
                            }
                            if (!!h.answer) {
                                f.answer = h.answer;
                            }
                            wigzo.getOrCreateCookie(function(p) {
                                var r = a.APP + "/api/onsite/data/save/" + a.ORGANIZATIONID;
                                f.cookieId = p;
                                f.template_name = b.globalData.uuid;

                                function q() {
                                    a.post(r, f, function(s) {
                                        a.log("[SUCCESS] Response from client endpoint: " + s);
                                    }, function(s) {
                                        a.log("[ERROR] Response from client endpoint: " + s);
                                    });
                                }
                                if (j && typeof ua !== "undefined") {
                                    ua.profileCallback(JSON.parse(j).u_mid, function(s) {
                                        f.ucSessionData = s.data;
                                        q();
                                    }, function(s) {
                                        console.log("ua could not get profile");
                                        q();
                                    });
                                } else {
                                    q();
                                }
                            });
                            a.post(a.APP + "/api/email/provider/onsite/" + a.ORGANIZATIONID, f, function(p) {
                                a.log(p);
                            });
                            a.post(a.APP + "/api/email/provider/subscribe/" + a.ORGANIZATIONID, f, function(p) {
                                a.log(p);
                            });
                        } else {
                            if ("wigzo-onsite-notif-email-phone" === e.data.type) {
                                if (!!e.data.email) {
                                    a.identify({
                                        email: e.data.email,
                                        date_of_birth: e.data.date_of_birth,
                                        gender: e.data.gender,
                                        onsite_uuid: b.globalData.uuid
                                    }, ["email"], function(p) {
                                        a.consoleDebug(p);
                                        if (p.status === "success") {
                                            wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                        }
                                    }, "ONSITENOTIFICATION");
                                    if (e.data.hasOwnProperty("dataEndPoint") && e.data.dataEndPoint) {
                                        var n = a.APP + "/exitintent/customtemplate/endpointhandler";
                                        f = {
                                            endpoint: e.data.dataEndPoint,
                                            data: e.data
                                        };
                                        a.post(n, f, function(p) {
                                            a.log("[SUCCESS] Response from client endpoint: " + p);
                                        }, function(p) {
                                            a.log("[ERROR] Response from client endpoint: " + p);
                                        });
                                    }
                                }
                                if (!!e.data.phone) {
                                    a.identify({
                                        phone: e.data.phone,
                                        date_of_birth: e.data.date_of_birth,
                                        gender: e.data.gender,
                                        onsiteUuid: b.globalData.uuid
                                    }, ["phone"], function(p) {
                                        a.consoleDebug(p);
                                        if (p.status === "success") {
                                            wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                        }
                                    }, "ONSITENOTIFICATION");
                                }
                                if (!!e.data.full_name) {
                                    a.identify({
                                        full_name: e.data.full_name,
                                        date_of_birth: e.data.date_of_birth,
                                        gender: e.data.gender,
                                        onsiteUuid: b.globalData.uuid
                                    }, ["full_name"], function(p) {
                                        a.consoleDebug(p);
                                        if (p.status === "success") {
                                            wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                        }
                                    }, "ONSITENOTIFICATION");
                                }
                                var f = {};
                                if (!!e.data.email) {
                                    f.email = e.data.email;
                                }
                                if (!!e.data.phone) {
                                    f.phone = e.data.phone;
                                }
                                if (!!e.data.full_name) {
                                    f.full_name = e.data.full_name;
                                }
                                if (!!e.data.question) {
                                    f.question = e.data.question;
                                }
                                if (!!e.data.answer) {
                                    f.answer = e.data.answer;
                                }
                                wigzo.getOrCreateCookie(function(p) {
                                    var r = a.APP + "/api/onsite/data/save/" + a.ORGANIZATIONID;
                                    f.cookieId = p;
                                    f.template_name = b.globalData.uuid;

                                    function q() {
                                        a.post(r, f, function(s) {
                                            a.log("[SUCCESS] Response from client endpoint: " + s);
                                        }, function(s) {
                                            a.log("[ERROR] Response from client endpoint: " + s);
                                        });
                                    }
                                    if (j && typeof ua !== "undefined") {
                                        ua.profileCallback(JSON.parse(j).u_mid, function(s) {
                                            f.ucSessionData = s.data;
                                            q();
                                        }, function(s) {
                                            console.log("ua could not get profile");
                                            q();
                                        });
                                    } else {
                                        q();
                                    }
                                });
                            } else {
                                if ("wigzo-onsite-notif-email" === e.data.type) {
                                    a.identify({
                                        email: e.data.email,
                                        date_of_birth: e.data.date_of_birth,
                                        gender: e.data.gender,
                                        onsite_uuid: b.globalData.uuid
                                    }, ["email"], function(p) {
                                        a.consoleDebug(p);
                                        if (p.status === "success") {
                                            wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                        }
                                    }, "ONSITENOTIFICATION");
                                    if (e.data.hasOwnProperty("dataEndPoint") && e.data.dataEndPoint) {
                                        var n = a.APP + "/exitintent/customtemplate/endpointhandler";
                                        f = {
                                            endpoint: e.data.dataEndPoint,
                                            data: e.data
                                        };
                                        a.post(n, f, function(p) {
                                            a.log("[SUCCESS] Response from client endpoint: " + p);
                                        }, function(p) {
                                            a.log("[ERROR] Response from client endpoint: " + p);
                                        });
                                    }
                                    var f = {};
                                    if (!!e.data.email) {
                                        f.email = e.data.email;
                                    }
                                    if (!!e.data.phone) {
                                        f.phone = e.data.phone;
                                    }
                                    if (!!e.data.full_name) {
                                        f.full_name = e.data.full_name;
                                    }
                                    if (!!e.data.question) {
                                        f.question = e.data.question;
                                    }
                                    if (!!e.data.answer) {
                                        f.answer = e.data.answer;
                                    }
                                    wigzo.getOrCreateCookie(function(p) {
                                        var r = a.APP + "/api/onsite/data/save/" + a.ORGANIZATIONID;
                                        f.cookieId = p;
                                        f.template_name = b.globalData.uuid;

                                        function q() {
                                            a.post(r, f, function(s) {
                                                a.log("[SUCCESS] Response from client endpoint: " + s);
                                            }, function(s) {
                                                a.log("[ERROR] Response from client endpoint: " + s);
                                            });
                                        }
                                        if (j && typeof ua !== "undefined") {
                                            ua.profileCallback(JSON.parse(j).u_mid, function(s) {
                                                f.ucSessionData = s.data;
                                                q();
                                            }, function(s) {
                                                console.log("ua could not get profile");
                                                q();
                                            });
                                        } else {
                                            q();
                                        }
                                    });
                                } else {
                                    if ("wigzo-onsite-notif-phone" === e.data.type) {
                                        if (!!e.data.phone) {
                                            a.identify({
                                                phone: e.data.phone,
                                                date_of_birth: e.data.date_of_birth,
                                                gender: e.data.gender,
                                                onsiteUuid: b.globalData.uuid
                                            }, ["phone"], function(p) {
                                                a.consoleDebug(p);
                                                if (p.status === "success") {
                                                    wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                                }
                                            }, "ONSITENOTIFICATION");
                                        }
                                        var f = {};
                                        if (!!e.data.email) {
                                            f.email = e.data.email;
                                        }
                                        if (!!e.data.phone) {
                                            f.phone = e.data.phone;
                                        }
                                        if (!!e.data.question) {
                                            f.question = e.data.question;
                                        }
                                        if (!!e.data.answer) {
                                            f.answer = e.data.answer;
                                        }
                                        wigzo.getOrCreateCookie(function(p) {
                                            var r = a.APP + "/api/onsite/data/save/" + a.ORGANIZATIONID;
                                            f.cookieId = p;
                                            f.template_name = b.globalData.uuid;

                                            function q() {
                                                a.post(r, f, function(s) {
                                                    a.log("[SUCCESS] Response from client endpoint: " + s);
                                                }, function(s) {
                                                    a.log("[ERROR] Response from client endpoint: " + s);
                                                });
                                            }
                                            if (j && typeof ua !== "undefined") {
                                                ua.profileCallback(JSON.parse(j).u_mid, function(s) {
                                                    f.ucSessionData = s.data;
                                                    q();
                                                }, function(s) {
                                                    console.log("ua could not get profile");
                                                    q();
                                                });
                                            } else {
                                                q();
                                            }
                                        });
                                    } else {
                                        if ("wigzo-onsite-notif-name" === e.data.type) {
                                            if (!!e.data.name) {
                                                a.identify({
                                                    name: e.data.name,
                                                    date_of_birth: e.data.date_of_birth,
                                                    gender: e.data.gender,
                                                    onsiteUuid: b.globalData.uuid
                                                }, ["name"], function(p) {
                                                    a.consoleDebug(p);
                                                    if (p.status === "success") {
                                                        wigzo("track", "onsitenotificationclicked", b.globalData.uuid);
                                                    }
                                                }, "ONSITENOTIFICATION");
                                            }
                                            var f = {};
                                            if (!!e.data.email) {
                                                f.email = e.data.email;
                                            }
                                            if (!!e.data.phone) {
                                                f.phone = e.data.phone;
                                            }
                                            if (!!e.data.name) {
                                                f.name = e.data.name;
                                            }
                                            if (!!e.data.question) {
                                                f.question = e.data.question;
                                            }
                                            if (!!e.data.answer) {
                                                f.answer = e.data.answer;
                                            }
                                            wigzo.getOrCreateCookie(function(p) {
                                                var r = a.APP + "/api/onsite/data/save/" + a.ORGANIZATIONID;
                                                f.cookieId = p;
                                                f.template_name = b.globalData.uuid;

                                                function q() {
                                                    a.post(r, f, function(s) {
                                                        a.log("[SUCCESS] Response from client endpoint: " + s);
                                                    }, function(s) {
                                                        a.log("[ERROR] Response from client endpoint: " + s);
                                                    });
                                                }
                                                if (j && typeof ua !== "undefined") {
                                                    ua.profileCallback(JSON.parse(j).u_mid, function(s) {
                                                        f.ucSessionData = s.data;
                                                        q();
                                                    }, function(s) {
                                                        console.log("ua could not get profile");
                                                        q();
                                                    });
                                                } else {
                                                    q();
                                                }
                                            });
                                        } else {
                                            if ("wigzo-onsite-notif-dimensions" === e.data.type) {
                                                wigzo.$("#wigzo-onsite-notif-iframe-div").css("max-height", e.data.wigzoHolder.height);
                                                if (window.outerWidth >= 420) {
                                                    wigzo.$("#wigzo-onsite-notif-iframe-div").css("max-width", e.data.wigzoHolder.width);
                                                } else {
                                                    if (window.outerWidth <= 660 && !!e.data.wigzoHolder.isRibbon) {
                                                        wigzo.$("#wigzo-onsite-notif-iframe-div").css("max-width", "150px");
                                                    } else {
                                                        wigzo.$("#wigzo-onsite-notif-iframe-div").css("max-width", "100%");
                                                    }
                                                }
                                                if (e.data.wigzoHolder.hasOwnProperty("top")) {
                                                    wigzo.$("#wigzo-onsite-notif-iframe-div").css("top", e.data.wigzoHolder.top);
                                                }
                                                if (e.data.wigzoHolder.hasOwnProperty("right")) {
                                                    wigzo.$("#wigzo-onsite-notif-iframe-div").css("right", e.data.wigzoHolder.right);
                                                }
                                                if (e.data.wigzoHolder.hasOwnProperty("bottom")) {
                                                    wigzo.$("#wigzo-onsite-notif-iframe-div").css("bottom", e.data.wigzoHolder.bottom);
                                                }
                                                if (e.data.wigzoHolder.hasOwnProperty("left")) {
                                                    wigzo.$("#wigzo-onsite-notif-iframe-div").css("left", e.data.wigzoHolder.left);
                                                }
                                                wigzo.$("#wigzo-onsite-notif-iframe-div").css("opacity", "1");
                                            } else {
                                                if ("wigzo-onsite-addToCart" === e.data.type) {
                                                    if (!!e.data.addToCartFormData) {
                                                        var g = e.data.addToCartFormData;
                                                        a.$.ajax("/cart/add.js", {
                                                            method: "POST",
                                                            data: JSON.stringify(g),
                                                            dataType: "json",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                            success: function(q) {
                                                                var p = document.getElementById("wigzo_onsite_temp019");
                                                                setTimeout(function() {
                                                                    p.contentWindow.postMessage({
                                                                        type: "add-to-cart-response",
                                                                        responseData: "success"
                                                                    }, "*");
                                                                }, 100);
                                                                return q;
                                                            },
                                                            error: function(p) {
                                                                console.log(p);
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    if ("wigzo-onsite-is-mobile" === e.data.type) {
                                                        var m = document.getElementById("wigzo_onsite_temp019");
                                                        if (window.innerWidth > 450) {
                                                            setTimeout(function() {
                                                                m.contentWindow.postMessage({
                                                                    type: "isMobileDevice",
                                                                    isMobile: false
                                                                }, "*");
                                                            }, 100);
                                                        } else {
                                                            setTimeout(function() {
                                                                m.contentWindow.postMessage({
                                                                    type: "isMobileDevice",
                                                                    isMobile: true
                                                                }, "*");
                                                            }, 100);
                                                        }
                                                    } else {
                                                        if ("wigzo-go-to-cart-page" === e.data.type) {
                                                            wigzo.$("#wigzo-onsite-notif-iframe-div").fadeOut(500, function() {
                                                                wigzo.$(this).remove();
                                                            });
                                                            location.href = "/cart";
                                                        } else {
                                                            if ("wigzo-onsite-coupon-code" == e.data.type) {
                                                                var l = "";
                                                                if (e.data.hasOwnProperty("coupon") && navigator.hasOwnProperty("clipboard")) {
                                                                    navigator.clipboard.writeText(e.data.coupon);
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            b.hasGlobalMessageListener = true;
        };
        return b;
    })(a.onsitePush || {});
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    ! function(b) {
        a.io = b();
    }(function() {
        var b;
        return function c(e, j, g) {
            function h(n, l) {
                if (!j[n]) {
                    if (!e[n]) {
                        var q = "function" == typeof require && require;
                        if (!l && q) {
                            return q(n, !0);
                        }
                        if (d) {
                            return d(n, !0);
                        }
                        var o = new Error("Cannot find module '" + n + "'");
                        throw o.code = "MODULE_NOT_FOUND", o;
                    }
                    var m = j[n] = {
                        exports: {}
                    };
                    e[n][0].call(m.exports, function(p) {
                        var r = e[n][1][p];
                        return h(r ? r : p);
                    }, m, m.exports, c, e, j, g);
                }
                return j[n].exports;
            }
            for (var d = "function" == typeof require && require, f = 0; f < g.length; f++) {
                h(g[f]);
            }
            return h;
        }({
            1: [function(d, f, g) {
                f.exports = d("./lib/");
            }, {
                "./lib/": 2
            }],
            2: [function(d, f, g) {
                f.exports = d("./socket"), f.exports.parser = d("engine.io-parser");
            }, {
                "./socket": 3,
                "engine.io-parser": 19
            }],
            3: [function(d, f, g) {
                (function(m) {
                    function e(h, n) {
                        if (!(this instanceof e)) {
                            return new e(h, n);
                        }
                        n = n || {}, h && "object" == typeof h && (n = h, h = null), h ? (h = y(h), n.hostname = h.host, n.secure = "https" == h.protocol || "wss" == h.protocol, n.port = h.port, h.query && (n.query = h.query)) : n.host && (n.hostname = y(n.host).host), this.secure = null != n.secure ? n.secure : m.location && "https:" == location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (m.location ? location.hostname : "localhost"), this.port = n.port || (m.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = t.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate ? n.perMessageDeflate || {} : !1, !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized ? null : n.rejectUnauthorized;
                        var p = "object" == typeof m && m;
                        p.global === p && n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), this.open();
                    }

                    function l(h) {
                        var o = {};
                        for (var p in h) {
                            h.hasOwnProperty(p) && (o[p] = h[p]);
                        }
                        return o;
                    }
                    var q = d("./transports"),
                        z = d("component-emitter"),
                        x = d("debug")("engine.io-client:socket"),
                        w = d("indexof"),
                        j = d("engine.io-parser"),
                        y = d("parseuri"),
                        v = d("parsejson"),
                        t = d("parseqs");
                    f.exports = e, e.priorWebsocketSuccess = !1, z(e.prototype), e.protocol = j.protocol, e.Socket = e, e.Transport = d("./transport"), e.transports = d("./transports"), e.parser = d("engine.io-parser"), e.prototype.createTransport = function(h) {
                        x('creating transport "%s"', h);
                        var o = l(this.query);
                        o.EIO = j.protocol, o.transport = h, this.id && (o.sid = this.id);
                        var p = new q[h]({
                            agent: this.agent,
                            hostname: this.hostname,
                            port: this.port,
                            secure: this.secure,
                            path: this.path,
                            query: o,
                            forceJSONP: this.forceJSONP,
                            jsonp: this.jsonp,
                            forceBase64: this.forceBase64,
                            enablesXDR: this.enablesXDR,
                            timestampRequests: this.timestampRequests,
                            timestampParam: this.timestampParam,
                            policyPort: this.policyPort,
                            socket: this,
                            pfx: this.pfx,
                            key: this.key,
                            passphrase: this.passphrase,
                            cert: this.cert,
                            ca: this.ca,
                            ciphers: this.ciphers,
                            rejectUnauthorized: this.rejectUnauthorized,
                            perMessageDeflate: this.perMessageDeflate,
                            extraHeaders: this.extraHeaders
                        });
                        return p;
                    }, e.prototype.open = function() {
                        var h;
                        if (this.rememberUpgrade && e.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) {
                            h = "websocket";
                        } else {
                            if (0 === this.transports.length) {
                                var o = this;
                                return void setTimeout(function() {
                                    o.emit("error", "No transports available");
                                }, 0);
                            }
                            h = this.transports[0];
                        }
                        this.readyState = "opening";
                        try {
                            h = this.createTransport(h);
                        } catch (p) {
                            return this.transports.shift(), void this.open();
                        }
                        h.open(), this.setTransport(h);
                    }, e.prototype.setTransport = function(h) {
                        x("setting transport %s", h.name);
                        var n = this;
                        this.transport && (x("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = h, h.on("drain", function() {
                            n.onDrain();
                        }).on("packet", function(o) {
                            n.onPacket(o);
                        }).on("error", function(o) {
                            n.onError(o);
                        }).on("close", function() {
                            n.onClose("transport close");
                        });
                    }, e.prototype.probe = function(I) {
                        function F() {
                            if (D.onlyBinaryUpgrades) {
                                var h = !this.supportsBinary && D.transport.supportsBinary;
                                E = E || h;
                            }
                            E || (x('probe transport "%s" opened', I), H.send([{
                                type: "ping",
                                data: "probe"
                            }]), H.once("packet", function(o) {
                                if (!E) {
                                    if ("pong" == o.type && "probe" == o.data) {
                                        if (x('probe transport "%s" pong', I), D.upgrading = !0, D.emit("upgrading", H), !H) {
                                            return;
                                        }
                                        e.priorWebsocketSuccess = "websocket" == H.name, x('pausing current transport "%s"', D.transport.name), D.transport.pause(function() {
                                            E || "closed" != D.readyState && (x("changing transport and sending upgrade packet"), r(), D.setTransport(H), H.send([{
                                                type: "upgrade"
                                            }]), D.emit("upgrade", H), H = null, D.upgrading = !1, D.flush());
                                        });
                                    } else {
                                        x('probe transport "%s" failed', I);
                                        var p = new Error("probe error");
                                        p.transport = H.name, D.emit("upgradeError", p);
                                    }
                                }
                            }));
                        }

                        function B() {
                            E || (E = !0, r(), H.close(), H = null);
                        }

                        function A(n) {
                            var h = new Error("probe error: " + n);
                            h.transport = H.name, B(), x('probe transport "%s" failed because of error: %s', I, n), D.emit("upgradeError", h);
                        }

                        function C() {
                            A("transport closed");
                        }

                        function J() {
                            A("socket closed");
                        }

                        function G(h) {
                            H && h.name != H.name && (x('"%s" works - aborting "%s"', h.name, H.name), B());
                        }

                        function r() {
                            H.removeListener("open", F), H.removeListener("error", A), H.removeListener("close", C), D.removeListener("close", J), D.removeListener("upgrading", G);
                        }
                        x('probing transport "%s"', I);
                        var H = this.createTransport(I, {
                                probe: 1
                            }),
                            E = !1,
                            D = this;
                        e.priorWebsocketSuccess = !1, H.once("open", F), H.once("error", A), H.once("close", C), this.once("close", J), this.once("upgrading", G), H.open();
                    }, e.prototype.onOpen = function() {
                        if (x("socket open"), this.readyState = "open", e.priorWebsocketSuccess = "websocket" == this.transport.name, this.emit("open"), this.flush(), "open" == this.readyState && this.upgrade && this.transport.pause) {
                            x("starting upgrade probes");
                            for (var h = 0, n = this.upgrades.length; n > h; h++) {
                                this.probe(this.upgrades[h]);
                            }
                        }
                    }, e.prototype.onPacket = function(h) {
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            switch (x('socket receive: type "%s", data "%s"', h.type, h.data), this.emit("packet", h), this.emit("heartbeat"), h.type) {
                                case "open":
                                    this.onHandshake(v(h.data));
                                    break;
                                case "pong":
                                    this.setPing(), this.emit("pong");
                                    break;
                                case "error":
                                    var n = new Error("server error");
                                    n.code = h.data, this.onError(n);
                                    break;
                                case "message":
                                    this.emit("data", h.data), this.emit("message", h.data);
                            }
                        } else {
                            x('packet received with socket readyState "%s"', this.readyState);
                        }
                    }, e.prototype.onHandshake = function(h) {
                        this.emit("handshake", h), this.id = h.sid, this.transport.query.sid = h.sid, this.upgrades = this.filterUpgrades(h.upgrades), this.pingInterval = h.pingInterval, this.pingTimeout = h.pingTimeout, this.onOpen(), "closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));
                    }, e.prototype.onHeartbeat = function(h) {
                        clearTimeout(this.pingTimeoutTimer);
                        var n = this;
                        n.pingTimeoutTimer = setTimeout(function() {
                            "closed" != n.readyState && n.onClose("ping timeout");
                        }, h || n.pingInterval + n.pingTimeout);
                    }, e.prototype.setPing = function() {
                        var h = this;
                        clearTimeout(h.pingIntervalTimer), h.pingIntervalTimer = setTimeout(function() {
                            x("writing ping packet - expecting pong within %sms", h.pingTimeout), h.ping(), h.onHeartbeat(h.pingTimeout);
                        }, h.pingInterval);
                    }, e.prototype.ping = function() {
                        var h = this;
                        this.sendPacket("ping", function() {
                            h.emit("ping");
                        });
                    }, e.prototype.onDrain = function() {
                        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
                    }, e.prototype.flush = function() {
                        "closed" != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (x("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));
                    }, e.prototype.write = e.prototype.send = function(h, o, p) {
                        return this.sendPacket("message", h, o, p), this;
                    }, e.prototype.sendPacket = function(h, s, A, p) {
                        if ("function" == typeof s && (p = s, s = void 0), "function" == typeof A && (p = A, A = null), "closing" != this.readyState && "closed" != this.readyState) {
                            A = A || {}, A.compress = !1 !== A.compress;
                            var u = {
                                type: h,
                                data: s,
                                options: A
                            };
                            this.emit("packetCreate", u), this.writeBuffer.push(u), p && this.once("flush", p), this.flush();
                        }
                    }, e.prototype.close = function() {
                        function h() {
                            o.onClose("forced close"), x("socket closing - telling transport to close"), o.transport.close();
                        }

                        function p() {
                            o.removeListener("upgrade", p), o.removeListener("upgradeError", p), h();
                        }

                        function s() {
                            o.once("upgrade", p), o.once("upgradeError", p);
                        }
                        if ("opening" == this.readyState || "open" == this.readyState) {
                            this.readyState = "closing";
                            var o = this;
                            this.writeBuffer.length ? this.once("drain", function() {
                                this.upgrading ? s() : h();
                            }) : this.upgrading ? s() : h();
                        }
                        return this;
                    }, e.prototype.onError = function(h) {
                        x("socket error %j", h), e.priorWebsocketSuccess = !1, this.emit("error", h), this.onClose("transport error", h);
                    }, e.prototype.onClose = function(h, o) {
                        if ("opening" == this.readyState || "open" == this.readyState || "closing" == this.readyState) {
                            x('socket close with reason: "%s"', h);
                            var p = this;
                            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", h, o), p.writeBuffer = [], p.prevBufferLen = 0;
                        }
                    }, e.prototype.filterUpgrades = function(h) {
                        for (var p = [], s = 0, o = h.length; o > s; s++) {
                            ~w(this.transports, h[s]) && p.push(h[s]);
                        }
                        return p;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./transport": 4,
                "./transports": 5,
                "component-emitter": 15,
                debug: 17,
                "engine.io-parser": 19,
                indexof: 23,
                parsejson: 26,
                parseqs: 27,
                parseuri: 28
            }],
            4: [function(f, h, l) {
                function g(e) {
                    this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders;
                }
                var j = f("engine.io-parser"),
                    d = f("component-emitter");
                h.exports = g, d(g.prototype), g.prototype.onError = function(m, o) {
                    var p = new Error(m);
                    return p.type = "TransportError", p.description = o, this.emit("error", p), this;
                }, g.prototype.open = function() {
                    return ("closed" == this.readyState || "" == this.readyState) && (this.readyState = "opening", this.doOpen()), this;
                }, g.prototype.close = function() {
                    return ("opening" == this.readyState || "open" == this.readyState) && (this.doClose(), this.onClose()), this;
                }, g.prototype.send = function(e) {
                    if ("open" != this.readyState) {
                        throw new Error("Transport not open");
                    }
                    this.write(e);
                }, g.prototype.onOpen = function() {
                    this.readyState = "open", this.writable = !0, this.emit("open");
                }, g.prototype.onData = function(m) {
                    var n = j.decodePacket(m, this.socket.binaryType);
                    this.onPacket(n);
                }, g.prototype.onPacket = function(e) {
                    this.emit("packet", e);
                }, g.prototype.onClose = function() {
                    this.readyState = "closed", this.emit("close");
                };
            }, {
                "component-emitter": 15,
                "engine.io-parser": 19
            }],
            5: [function(d, f, g) {
                (function(n) {
                    function m(q) {
                        var x, s = !1,
                            e = !1,
                            w = !1 !== q.jsonp;
                        if (n.location) {
                            var v = "https:" == location.protocol,
                                o = location.port;
                            o || (o = v ? 443 : 80), s = q.hostname != location.hostname || o != q.port, e = q.secure != v;
                        }
                        if (q.xdomain = s, q.xscheme = e, x = new p(q), "open" in x && !q.forceJSONP) {
                            return new j(q);
                        }
                        if (!w) {
                            throw new Error("JSONP disabled");
                        }
                        return new l(q);
                    }
                    var p = d("xmlhttprequest-ssl"),
                        j = d("./polling-xhr"),
                        l = d("./polling-jsonp"),
                        h = d("./websocket");
                    g.polling = m, g.websocket = h;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling-jsonp": 6,
                "./polling-xhr": 7,
                "./websocket": 9,
                "xmlhttprequest-ssl": 10
            }],
            6: [function(d, f, g) {
                (function(u) {
                    function l() {}

                    function q(n) {
                        h.call(this, n), this.query = this.query || {}, e || (u.___eio || (u.___eio = []), e = u.___eio), this.index = e.length;
                        var o = this;
                        e.push(function(p) {
                            o.onData(p);
                        }), this.query.j = this.index, u.document && u.addEventListener && u.addEventListener("beforeunload", function() {
                            o.script && (o.script.onerror = l);
                        }, !1);
                    }
                    var h = d("./polling"),
                        j = d("component-inherit");
                    f.exports = q;
                    var e, t = /\n/g,
                        m = /\\n/g;
                    j(q, h), q.prototype.supportsBinary = !1, q.prototype.doClose = function() {
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), h.prototype.doClose.call(this);
                    }, q.prototype.doPoll = function() {
                        var o = this,
                            s = document.createElement("script");
                        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), s.async = !0, s.src = this.uri(), s.onerror = function(n) {
                            o.onError("jsonp poll error", n);
                        };
                        var v = document.getElementsByTagName("script")[0];
                        v ? v.parentNode.insertBefore(s, v) : (document.head || document.body).appendChild(s), this.script = s;
                        var p = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                        p && setTimeout(function() {
                            var n = document.createElement("iframe");
                            document.body.appendChild(n), document.body.removeChild(n);
                        }, 100);
                    }, q.prototype.doWrite = function(C, z) {
                        function w() {
                            p(), z();
                        }

                        function p() {
                            if (v.iframe) {
                                try {
                                    v.form.removeChild(v.iframe);
                                } catch (n) {
                                    v.onError("jsonp polling iframe removal error", n);
                                }
                            }
                            try {
                                var o = '<iframe src="javascript:0" name="' + v.iframeId + '">';
                                x = document.createElement(o);
                            } catch (n) {
                                x = document.createElement("iframe"), x.name = v.iframeId, x.src = "javascript:0";
                            }
                            x.id = v.iframeId, v.form.appendChild(x), v.iframe = x;
                        }
                        var v = this;
                        if (!this.form) {
                            var x, D = document.createElement("form"),
                                A = document.createElement("textarea"),
                                B = this.iframeId = "eio_iframe_" + this.index;
                            D.className = "socketio", D.style.position = "absolute", D.style.top = "-1000px", D.style.left = "-1000px", D.target = B, D.method = "POST", D.setAttribute("accept-charset", "utf-8"), A.name = "d", D.appendChild(A), document.body.appendChild(D), this.form = D, this.area = A;
                        }
                        this.form.action = this.uri(), p(), C = C.replace(m, "\\\n"), this.area.value = C.replace(t, "\\n");
                        try {
                            this.form.submit();
                        } catch (y) {}
                        this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                            "complete" == v.iframe.readyState && w();
                        } : this.iframe.onload = w;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling": 8,
                "component-inherit": 16
            }],
            7: [function(d, f, g) {
                (function(l) {
                    function e() {}

                    function j(n) {
                        if (t.call(this, n), l.location) {
                            var p = "https:" == location.protocol,
                                o = location.port;
                            o || (o = p ? 443 : 80), this.xd = n.hostname != l.location.hostname || o != n.port, this.xs = n.secure != p;
                        } else {
                            this.extraHeaders = n.extraHeaders;
                        }
                    }

                    function m(n) {
                        this.method = n.method || "GET", this.uri = n.uri, this.xd = !!n.xd, this.xs = !!n.xs, this.async = !1 !== n.async, this.data = void 0 != n.data ? n.data : null, this.agent = n.agent, this.isBinary = n.isBinary, this.supportsBinary = n.supportsBinary, this.enablesXDR = n.enablesXDR, this.pfx = n.pfx, this.key = n.key, this.passphrase = n.passphrase, this.cert = n.cert, this.ca = n.ca, this.ciphers = n.ciphers, this.rejectUnauthorized = n.rejectUnauthorized, this.extraHeaders = n.extraHeaders, this.create();
                    }

                    function x() {
                        for (var n in m.requests) {
                            m.requests.hasOwnProperty(n) && m.requests[n].abort();
                        }
                    }
                    var v = d("xmlhttprequest-ssl"),
                        t = d("./polling"),
                        h = d("component-emitter"),
                        w = d("component-inherit"),
                        q = d("debug")("engine.io-client:polling-xhr");
                    f.exports = j, f.exports.Request = m, w(j, t), j.prototype.supportsBinary = !0, j.prototype.request = function(n) {
                        return n = n || {}, n.uri = this.uri(), n.xd = this.xd, n.xs = this.xs, n.agent = this.agent || !1, n.supportsBinary = this.supportsBinary, n.enablesXDR = this.enablesXDR, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, n.extraHeaders = this.extraHeaders, new m(n);
                    }, j.prototype.doWrite = function(p, u) {
                        var z = "string" != typeof p && void 0 !== p,
                            s = this.request({
                                method: "POST",
                                data: p,
                                isBinary: z
                            }),
                            y = this;
                        s.on("success", u), s.on("error", function(n) {
                            y.onError("xhr post error", n);
                        }), this.sendXhr = s;
                    }, j.prototype.doPoll = function() {
                        q("xhr poll");
                        var n = this.request(),
                            o = this;
                        n.on("data", function(p) {
                            o.onData(p);
                        }), n.on("error", function(p) {
                            o.onError("xhr poll error", p);
                        }), this.pollXhr = n;
                    }, h(m.prototype), m.prototype.create = function() {
                        var n = {
                            agent: this.agent,
                            xdomain: this.xd,
                            xscheme: this.xs,
                            enablesXDR: this.enablesXDR
                        };
                        n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized;
                        var y = this.xhr = new v(n),
                            u = this;
                        try {
                            q("xhr open %s: %s", this.method, this.uri), y.open(this.method, this.uri, this.async);
                            try {
                                if (this.extraHeaders) {
                                    y.setDisableHeaderCheck(!0);
                                    for (var z in this.extraHeaders) {
                                        this.extraHeaders.hasOwnProperty(z) && y.setRequestHeader(z, this.extraHeaders[z]);
                                    }
                                }
                            } catch (p) {}
                            if (this.supportsBinary && (y.responseType = "arraybuffer"), "POST" == this.method) {
                                try {
                                    this.isBinary ? y.setRequestHeader("Content-type", "application/octet-stream") : y.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                                } catch (p) {}
                            }
                            "withCredentials" in y && (y.withCredentials = !0), this.hasXDR() ? (y.onload = function() {
                                u.onLoad();
                            }, y.onerror = function() {
                                u.onError(y.responseText);
                            }) : y.onreadystatechange = function() {
                                4 == y.readyState && (200 == y.status || 1223 == y.status ? u.onLoad() : setTimeout(function() {
                                    u.onError(y.status);
                                }, 0));
                            }, q("xhr data %s", this.data), y.send(this.data);
                        } catch (p) {
                            return void setTimeout(function() {
                                u.onError(p);
                            }, 0);
                        }
                        l.document && (this.index = m.requestsCount++, m.requests[this.index] = this);
                    }, m.prototype.onSuccess = function() {
                        this.emit("success"), this.cleanup();
                    }, m.prototype.onData = function(n) {
                        this.emit("data", n), this.onSuccess();
                    }, m.prototype.onError = function(n) {
                        this.emit("error", n), this.cleanup(!0);
                    }, m.prototype.cleanup = function(n) {
                        if ("undefined" != typeof this.xhr && null !== this.xhr) {
                            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e, n) {
                                try {
                                    this.xhr.abort();
                                } catch (o) {}
                            }
                            l.document && delete m.requests[this.index], this.xhr = null;
                        }
                    }, m.prototype.onLoad = function() {
                        var u;
                        try {
                            var A;
                            try {
                                A = this.xhr.getResponseHeader("Content-Type").split(";")[0];
                            } catch (C) {}
                            if ("application/octet-stream" === A) {
                                u = this.xhr.response;
                            } else {
                                if (this.supportsBinary) {
                                    try {
                                        u = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                                    } catch (C) {
                                        for (var z = new Uint8Array(this.xhr.response), B = [], p = 0, y = z.length; y > p; p++) {
                                            B.push(z[p]);
                                        }
                                        u = String.fromCharCode.apply(null, B);
                                    }
                                } else {
                                    u = this.xhr.responseText;
                                }
                            }
                        } catch (C) {
                            this.onError(C);
                        }
                        null != u && this.onData(u);
                    }, m.prototype.hasXDR = function() {
                        return "undefined" != typeof l.XDomainRequest && !this.xs && this.enablesXDR;
                    }, m.prototype.abort = function() {
                        this.cleanup();
                    }, l.document && (m.requestsCount = 0, m.requests = {}, l.attachEvent ? l.attachEvent("onunload", x) : l.addEventListener && l.addEventListener("beforeunload", x, !1));
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./polling": 8,
                "component-emitter": 15,
                "component-inherit": 16,
                debug: 17,
                "xmlhttprequest-ssl": 10
            }],
            8: [function(w, l, h) {
                function d(n) {
                    var o = n && n.forceBase64;
                    (!v || o) && (this.supportsBinary = !1), g.call(this, n);
                }
                var g = w("../transport"),
                    j = w("parseqs"),
                    x = w("engine.io-parser"),
                    q = w("component-inherit"),
                    m = w("yeast"),
                    f = w("debug")("engine.io-client:polling");
                l.exports = d;
                var v = function() {
                    var o = w("xmlhttprequest-ssl"),
                        p = new o({
                            xdomain: !1
                        });
                    return null != p.responseType;
                }();
                q(d, g), d.prototype.name = "polling", d.prototype.doOpen = function() {
                    this.poll();
                }, d.prototype.pause = function(o) {
                    function s() {
                        f("paused"), u.readyState = "paused", o();
                    }
                    var u = this;
                    if (this.readyState = "pausing", this.polling || !this.writable) {
                        var p = 0;
                        this.polling && (f("we are currently polling - waiting to pause"), p++, this.once("pollComplete", function() {
                            f("pre-pause polling complete"), --p || s();
                        })), this.writable || (f("we are currently writing - waiting to pause"), p++, this.once("drain", function() {
                            f("pre-pause writing complete"), --p || s();
                        }));
                    } else {
                        s();
                    }
                }, d.prototype.poll = function() {
                    f("polling"), this.polling = !0, this.doPoll(), this.emit("poll");
                }, d.prototype.onData = function(o) {
                    var p = this;
                    f("polling got data %s", o);
                    var r = function(e, u, s) {
                        return "opening" == p.readyState && p.onOpen(), "close" == e.type ? (p.onClose(), !1) : void p.onPacket(e);
                    };
                    x.decodePayload(o, this.socket.binaryType, r), "closed" != this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : f('ignoring poll - transport state "%s"', this.readyState));
                }, d.prototype.doClose = function() {
                    function n() {
                        f("writing close packet"), o.write([{
                            type: "close"
                        }]);
                    }
                    var o = this;
                    "open" == this.readyState ? (f("transport open - closing"), n()) : (f("transport not open - deferring close"), this.once("open", n));
                }, d.prototype.write = function(o) {
                    var p = this;
                    this.writable = !1;
                    var r = function() {
                            p.writable = !0, p.emit("drain");
                        },
                        p = this;
                    x.encodePayload(o, this.supportsBinary, function(e) {
                        p.doWrite(e, r);
                    });
                }, d.prototype.uri = function() {
                    var o = this.query || {},
                        s = this.secure ? "https" : "http",
                        u = "";
                    !1 !== this.timestampRequests && (o[this.timestampParam] = m()), this.supportsBinary || o.sid || (o.b64 = 1), o = j.encode(o), this.port && ("https" == s && 443 != this.port || "http" == s && 80 != this.port) && (u = ":" + this.port), o.length && (o = "?" + o);
                    var p = -1 !== this.hostname.indexOf(":");
                    return s + "://" + (p ? "[" + this.hostname + "]" : this.hostname) + u + this.path + o;
                };
            }, {
                "../transport": 4,
                "component-inherit": 16,
                debug: 17,
                "engine.io-parser": 19,
                parseqs: 27,
                "xmlhttprequest-ssl": 10,
                yeast: 30
            }],
            9: [function(d, f, g) {
                (function(m) {
                    function e(h) {
                        var n = h && h.forceBase64;
                        n && (this.supportsBinary = !1), this.perMessageDeflate = h.perMessageDeflate, l.call(this, h);
                    }
                    var l = d("../transport"),
                        q = d("engine.io-parser"),
                        z = d("parseqs"),
                        x = d("component-inherit"),
                        w = d("yeast"),
                        j = d("debug")("engine.io-client:websocket"),
                        y = m.WebSocket || m.MozWebSocket,
                        v = y;
                    if (!v && "undefined" == typeof window) {
                        try {
                            v = d("ws");
                        } catch (t) {}
                    }
                    f.exports = e, x(e, l), e.prototype.name = "websocket", e.prototype.supportsBinary = !0, e.prototype.doOpen = function() {
                        if (this.check()) {
                            var h = this.uri(),
                                o = void 0,
                                p = {
                                    agent: this.agent,
                                    perMessageDeflate: this.perMessageDeflate
                                };
                            p.pfx = this.pfx, p.key = this.key, p.passphrase = this.passphrase, p.cert = this.cert, p.ca = this.ca, p.ciphers = this.ciphers, p.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (p.headers = this.extraHeaders), this.ws = y ? new v(h) : new v(h, o, p), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();
                        }
                    }, e.prototype.addEventListeners = function() {
                        var h = this;
                        this.ws.onopen = function() {
                            h.onOpen();
                        }, this.ws.onclose = function() {
                            h.onClose();
                        }, this.ws.onmessage = function(n) {
                            h.onData(n.data);
                        }, this.ws.onerror = function(n) {
                            h.onError("websocket error", n);
                        };
                    }, "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (e.prototype.onData = function(h) {
                        var n = this;
                        setTimeout(function() {
                            l.prototype.onData.call(n, h);
                        }, 0);
                    }), e.prototype.write = function(n) {
                        function A() {
                            u.emit("flush"), setTimeout(function() {
                                u.writable = !0, u.emit("drain");
                            }, 0);
                        }
                        var u = this;
                        this.writable = !1;
                        for (var B = n.length, p = 0, h = B; h > p; p++) {
                            ! function(o) {
                                q.encodePacket(o, u.supportsBinary, function(C) {
                                    if (!y) {
                                        var D = {};
                                        if (o.options && (D.compress = o.options.compress), u.perMessageDeflate) {
                                            var r = "string" == typeof C ? m.Buffer.byteLength(C) : C.length;
                                            r < u.perMessageDeflate.threshold && (D.compress = !1);
                                        }
                                    }
                                    try {
                                        y ? u.ws.send(C) : u.ws.send(C, D);
                                    } catch (E) {
                                        j("websocket closed before onclose event");
                                    }--B || A();
                                });
                            }(n[p]);
                        }
                    }, e.prototype.onClose = function() {
                        l.prototype.onClose.call(this);
                    }, e.prototype.doClose = function() {
                        "undefined" != typeof this.ws && this.ws.close();
                    }, e.prototype.uri = function() {
                        var h = this.query || {},
                            p = this.secure ? "wss" : "ws",
                            s = "";
                        this.port && ("wss" == p && 443 != this.port || "ws" == p && 80 != this.port) && (s = ":" + this.port), this.timestampRequests && (h[this.timestampParam] = w()), this.supportsBinary || (h.b64 = 1), h = z.encode(h), h.length && (h = "?" + h);
                        var o = -1 !== this.hostname.indexOf(":");
                        return p + "://" + (o ? "[" + this.hostname + "]" : this.hostname) + s + this.path + h;
                    }, e.prototype.check = function() {
                        return !(!v || "__initialize" in v && this.name === e.prototype.name);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "../transport": 4,
                "component-inherit": 16,
                debug: 17,
                "engine.io-parser": 19,
                parseqs: 27,
                ws: void 0,
                yeast: 30
            }],
            10: [function(d, g, h) {
                var f = d("has-cors");
                g.exports = function(l) {
                    var m = l.xdomain,
                        q = l.xscheme,
                        p = l.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!m || f)) {
                            return new XMLHttpRequest;
                        }
                    } catch (j) {}
                    try {
                        if ("undefined" != typeof XDomainRequest && !q && p) {
                            return new XDomainRequest;
                        }
                    } catch (j) {}
                    if (!m) {
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (j) {}
                    }
                };
            }, {
                "has-cors": 22
            }],
            11: [function(d, g, j) {
                function f(m, p, q) {
                    function o(e, n) {
                        if (o.count <= 0) {
                            throw new Error("after called too many times");
                        }--o.count, e ? (l = !0, p(e), p = q) : 0 !== o.count || l || p(null, n);
                    }
                    var l = !1;
                    return q = q || h, o.count = m, 0 === m ? p() : o;
                }

                function h() {}
                g.exports = f;
            }, {}],
            12: [function(d, f, g) {
                f.exports = function(l, q, v) {
                    var p = l.byteLength;
                    if (q = q || 0, v = v || p, l.slice) {
                        return l.slice(q, v);
                    }
                    if (0 > q && (q += p), 0 > v && (v += p), v > p && (v = p), q >= p || q >= v || 0 === p) {
                        return new ArrayBuffer(0);
                    }
                    for (var u = new Uint8Array(l), j = new Uint8Array(v - q), m = q, h = 0; v > m; m++, h++) {
                        j[h] = u[m];
                    }
                    return j.buffer;
                };
            }, {}],
            13: [function(d, f, g) {
                ! function(e) {
                    g.encode = function(l) {
                        var p, j = new Uint8Array(l),
                            m = j.length,
                            h = "";
                        for (p = 0; m > p; p += 3) {
                            h += e[j[p] >> 2], h += e[(3 & j[p]) << 4 | j[p + 1] >> 4], h += e[(15 & j[p + 1]) << 2 | j[p + 2] >> 6], h += e[63 & j[p + 2]];
                        }
                        return m % 3 === 2 ? h = h.substring(0, h.length - 1) + "=" : m % 3 === 1 && (h = h.substring(0, h.length - 2) + "=="), h;
                    }, g.decode = function(v) {
                        var m, h, l, q, z, x = 0.75 * v.length,
                            w = v.length,
                            j = 0;
                        "=" === v[v.length - 1] && (x--, "=" === v[v.length - 2] && x--);
                        var y = new ArrayBuffer(x),
                            t = new Uint8Array(y);
                        for (m = 0; w > m; m += 4) {
                            h = e.indexOf(v[m]), l = e.indexOf(v[m + 1]), q = e.indexOf(v[m + 2]), z = e.indexOf(v[m + 3]), t[j++] = h << 2 | l >> 4, t[j++] = (15 & l) << 4 | q >> 2, t[j++] = (3 & q) << 6 | 63 & z;
                        }
                        return y;
                    };
                }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
            }, {}],
            14: [function(d, f, g) {
                (function(j) {
                    function u(s) {
                        for (var w = 0; w < s.length; w++) {
                            var y = s[w];
                            if (y.buffer instanceof ArrayBuffer) {
                                var v = y.buffer;
                                if (y.byteLength !== v.byteLength) {
                                    var x = new Uint8Array(y.byteLength);
                                    x.set(new Uint8Array(v, y.byteOffset, y.byteLength)), v = x.buffer;
                                }
                                s[w] = v;
                            }
                        }
                    }

                    function m(n, v) {
                        v = v || {};
                        var s = new h;
                        u(n);
                        for (var w = 0; w < n.length; w++) {
                            s.append(n[w]);
                        }
                        return v.type ? s.getBlob(v.type) : s.getBlob();
                    }

                    function p(n, o) {
                        return u(n), new Blob(n, o || {});
                    }
                    var h = j.BlobBuilder || j.WebKitBlobBuilder || j.MSBlobBuilder || j.MozBlobBuilder,
                        l = function() {
                            try {
                                var n = new Blob(["hi"]);
                                return 2 === n.size;
                            } catch (o) {
                                return !1;
                            }
                        }(),
                        e = l && function() {
                            try {
                                var n = new Blob([new Uint8Array([1, 2])]);
                                return 2 === n.size;
                            } catch (o) {
                                return !1;
                            }
                        }(),
                        q = h && h.prototype.append && h.prototype.getBlob;
                    f.exports = function() {
                        return l ? e ? j.Blob : p : q ? m : void 0;
                    }();
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {}],
            15: [function(d, g, j) {
                function f(e) {
                    return e ? h(e) : void 0;
                }

                function h(l) {
                    for (var m in f.prototype) {
                        l[m] = f.prototype[m];
                    }
                    return l;
                }
                g.exports = f, f.prototype.on = f.prototype.addEventListener = function(l, m) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks[l] = this._callbacks[l] || []).push(m), this;
                }, f.prototype.once = function(l, o) {
                    function p() {
                        m.off(l, p), o.apply(this, arguments);
                    }
                    var m = this;
                    return this._callbacks = this._callbacks || {}, p.fn = o, this.on(l, p), this;
                }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(l, p) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) {
                        return this._callbacks = {}, this;
                    }
                    var s = this._callbacks[l];
                    if (!s) {
                        return this;
                    }
                    if (1 == arguments.length) {
                        return delete this._callbacks[l], this;
                    }
                    for (var m, q = 0; q < s.length; q++) {
                        if (m = s[q], m === p || m.fn === p) {
                            s.splice(q, 1);
                            break;
                        }
                    }
                    return this;
                }, f.prototype.emit = function(l) {
                    this._callbacks = this._callbacks || {};
                    var p = [].slice.call(arguments, 1),
                        s = this._callbacks[l];
                    if (s) {
                        s = s.slice(0);
                        for (var m = 0, q = s.length; q > m; ++m) {
                            s[m].apply(this, p);
                        }
                    }
                    return this;
                }, f.prototype.listeners = function(e) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[e] || [];
                }, f.prototype.hasListeners = function(e) {
                    return !!this.listeners(e).length;
                };
            }, {}],
            16: [function(d, f, g) {
                f.exports = function(h, j) {
                    var l = function() {};
                    l.prototype = j.prototype, h.prototype = new l, h.prototype.constructor = h;
                };
            }, {}],
            17: [function(p, j, g) {
                function d() {
                    return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
                }

                function f() {
                    var s = arguments,
                        v = this.useColors;
                    if (s[0] = (v ? "%c" : "") + this.namespace + (v ? " %c" : " ") + s[0] + (v ? "%c " : " ") + "+" + g.humanize(this.diff), !v) {
                        return s;
                    }
                    var u = "color: " + this.color;
                    s = [s[0], u, "color: inherit"].concat(Array.prototype.slice.call(s, 1));
                    var w = 0,
                        n = 0;
                    return s[0].replace(/%[a-z%]/g, function(e) {
                        "%%" !== e && (w++, "%c" === e && (n = w));
                    }), s.splice(n, 0, u), s;
                }

                function h() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
                }

                function q(n) {
                    try {
                        null == n ? g.storage.removeItem("debug") : g.storage.debug = n;
                    } catch (o) {}
                }

                function m() {
                    var n;
                    try {
                        n = g.storage.debug;
                    } catch (o) {}
                    return n;
                }

                function l() {
                    try {
                        return window.localStorage;
                    } catch (e) {}
                }
                g = j.exports = p("./debug"), g.log = h, g.formatArgs = f, g.save = q, g.load = m, g.useColors = d, g.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : l(), g.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], g.formatters.j = function(e) {
                    return JSON.stringify(e);
                }, g.enable(m());
            }, {
                "./debug": 18
            }],
            18: [function(w, l, h) {
                function d() {
                    return h.colors[v++ % h.colors.length];
                }

                function g(p) {
                    function r() {}

                    function s() {
                        var y = s,
                            A = +new Date,
                            u = A - (f || A);
                        y.diff = u, y.prev = f, y.curr = A, f = A, null == y.useColors && (y.useColors = h.useColors()), null == y.color && y.useColors && (y.color = d());
                        var z = Array.prototype.slice.call(arguments);
                        z[0] = h.coerce(z[0]), "string" != typeof z[0] && (z = ["%o"].concat(z));
                        var o = 0;
                        z[0] = z[0].replace(/%([a-z%])/g, function(D, C) {
                            if ("%%" === D) {
                                return D;
                            }
                            o++;
                            var E = h.formatters[C];
                            if ("function" == typeof E) {
                                var t = z[o];
                                D = E.call(y, t), z.splice(o, 1), o--;
                            }
                            return D;
                        }), "function" == typeof h.formatArgs && (z = h.formatArgs.apply(y, z));
                        var B = s.log || h.log || console.log.bind(console);
                        B.apply(y, z);
                    }
                    r.enabled = !1, s.enabled = !0;
                    var n = h.enabled(p) ? s : r;
                    return n.namespace = p, n;
                }

                function j(n) {
                    h.save(n);
                    for (var s = (n || "").split(/[\s,]+/), p = s.length, u = 0; p > u; u++) {
                        s[u] && (n = s[u].replace(/\*/g, ".*?"), "-" === n[0] ? h.skips.push(new RegExp("^" + n.substr(1) + "$")) : h.names.push(new RegExp("^" + n + "$")));
                    }
                }

                function x() {
                    h.enable("");
                }

                function q(n) {
                    var p, o;
                    for (p = 0, o = h.skips.length; o > p; p++) {
                        if (h.skips[p].test(n)) {
                            return !1;
                        }
                    }
                    for (p = 0, o = h.names.length; o > p; p++) {
                        if (h.names[p].test(n)) {
                            return !0;
                        }
                    }
                    return !1;
                }

                function m(e) {
                    return e instanceof Error ? e.stack || e.message : e;
                }
                h = l.exports = g, h.coerce = m, h.disable = x, h.enable = j, h.enabled = q, h.humanize = w("ms"), h.names = [], h.skips = [], h.formatters = {};
                var f, v = 0;
            }, {
                ms: 25
            }],
            19: [function(d, f, g) {
                (function(I) {
                    function z(h, m) {
                        var l = "b" + g.packets[h.type] + h.data.data;
                        return m(l);
                    }

                    function B(m, v, u) {
                        if (!v) {
                            return g.encodeBase64Packet(m, u);
                        }
                        var w = m.data,
                            l = new Uint8Array(w),
                            p = new Uint8Array(1 + w.byteLength);
                        p[0] = C[m.type];
                        for (var h = 0; h < l.length; h++) {
                            p[h + 1] = l[h];
                        }
                        return u(p.buffer);
                    }

                    function E(h, m, l) {
                        if (!m) {
                            return g.encodeBase64Packet(h, l);
                        }
                        var p = new FileReader;
                        return p.onload = function() {
                            h.data = p.result, g.encodePacket(h, m, !0, l);
                        }, p.readAsArrayBuffer(h.data);
                    }

                    function x(h, p, m) {
                        if (!p) {
                            return g.encodeBase64Packet(h, m);
                        }
                        if (G) {
                            return E(h, p, m);
                        }
                        var u = new Uint8Array(1);
                        u[0] = C[h.type];
                        var l = new n([u.buffer, h.data]);
                        return m(l);
                    }

                    function M(l, u, w) {
                        for (var p = new Array(l.length), v = F(l.length, w), h = function(e, s, r) {
                                u(s, function(o, y) {
                                    p[e] = y, r(o, p);
                                });
                            }, m = 0; m < l.length; m++) {
                            h(m, l[m], v);
                        }
                    }
                    var K = d("./keys"),
                        A = d("has-binary"),
                        t = d("arraybuffer.slice"),
                        H = d("base64-arraybuffer"),
                        F = d("after"),
                        D = d("utf8"),
                        J = navigator.userAgent.match(/Android/i),
                        j = /PhantomJS/i.test(navigator.userAgent),
                        G = J || j;
                    g.protocol = 3;
                    var C = g.packets = {
                            open: 0,
                            close: 1,
                            ping: 2,
                            pong: 3,
                            message: 4,
                            upgrade: 5,
                            noop: 6
                        },
                        L = K(C),
                        q = {
                            type: "error",
                            data: "parser error"
                        },
                        n = d("blob");
                    g.encodePacket = function(l, r, h, e) {
                        "function" == typeof r && (e = r, r = !1), "function" == typeof h && (e = h, h = null);
                        var o = void 0 === l.data ? void 0 : l.data.buffer || l.data;
                        if (I.ArrayBuffer && o instanceof ArrayBuffer) {
                            return B(l, r, e);
                        }
                        if (n && o instanceof I.Blob) {
                            return x(l, r, e);
                        }
                        if (o && o.base64) {
                            return z(l, e);
                        }
                        var m = C[l.type];
                        return void 0 !== l.data && (m += h ? D.encode(String(l.data)) : String(l.data)), e("" + m);
                    }, g.encodeBase64Packet = function(N, e) {
                        var l = "b" + g.packets[N.type];
                        if (n && N.data instanceof I.Blob) {
                            var m = new FileReader;
                            return m.onload = function() {
                                var o = m.result.split(",")[1];
                                e(l + o);
                            }, m.readAsDataURL(N.data);
                        }
                        var O;
                        try {
                            O = String.fromCharCode.apply(null, new Uint8Array(N.data));
                        } catch (w) {
                            for (var v = new Uint8Array(N.data), h = new Array(v.length), y = 0; y < v.length; y++) {
                                h[y] = v[y];
                            }
                            O = String.fromCharCode.apply(null, h);
                        }
                        return l += I.btoa(O), e(l);
                    }, g.decodePacket = function(m, v, u) {
                        if ("string" == typeof m || void 0 === m) {
                            if ("b" == m.charAt(0)) {
                                return g.decodeBase64Packet(m.substr(1), v);
                            }
                            if (u) {
                                try {
                                    m = D.decode(m);
                                } catch (w) {
                                    return q;
                                }
                            }
                            var l = m.charAt(0);
                            return Number(l) == l && L[l] ? m.length > 1 ? {
                                type: L[l],
                                data: m.substring(1)
                            } : {
                                type: L[l]
                            } : q;
                        }
                        var p = new Uint8Array(m),
                            l = p[0],
                            h = t(m, 1);
                        return n && "blob" === v && (h = new n([h])), {
                            type: L[l],
                            data: h
                        };
                    }, g.decodeBase64Packet = function(e, m) {
                        var h = L[e.charAt(0)];
                        if (!I.ArrayBuffer) {
                            return {
                                type: h,
                                data: {
                                    base64: !0,
                                    data: e.substr(1)
                                }
                            };
                        }
                        var l = H.decode(e.substr(1));
                        return "blob" === m && n && (l = new n([l])), {
                            type: h,
                            data: l
                        };
                    }, g.encodePayload = function(l, u, p) {
                        function v(e) {
                            return e.length + ":" + e;
                        }

                        function h(e, o) {
                            g.encodePacket(e, m ? u : !1, !0, function(r) {
                                o(null, v(r));
                            });
                        }
                        "function" == typeof u && (p = u, u = null);
                        var m = A(l);
                        return u && m ? n && !G ? g.encodePayloadAsBlob(l, p) : g.encodePayloadAsArrayBuffer(l, p) : l.length ? void M(l, h, function(o, r) {
                            return p(r.join(""));
                        }) : p("0:");
                    }, g.decodePayload = function(Q, y, h) {
                        if ("string" != typeof Q) {
                            return g.decodePayloadAsBinary(Q, y, h);
                        }
                        "function" == typeof y && (h = y, y = null);
                        var m;
                        if ("" == Q) {
                            return h(q, 0, 1);
                        }
                        for (var v, R, O = "", N = 0, l = Q.length; l > N; N++) {
                            var P = Q.charAt(N);
                            if (":" != P) {
                                O += P;
                            } else {
                                if ("" == O || O != (v = Number(O))) {
                                    return h(q, 0, 1);
                                }
                                if (R = Q.substr(N + 1, v), O != R.length) {
                                    return h(q, 0, 1);
                                }
                                if (R.length) {
                                    if (m = g.decodePacket(R, y, !0), q.type == m.type && q.data == m.data) {
                                        return h(q, 0, 1);
                                    }
                                    var w = h(m, N + v, l);
                                    if (!1 === w) {
                                        return;
                                    }
                                }
                                N += v, O = "";
                            }
                        }
                        return "" != O ? h(q, 0, 1) : void 0;
                    }, g.encodePayloadAsArrayBuffer = function(h, m) {
                        function l(o, p) {
                            g.encodePacket(o, !0, !0, function(e) {
                                return p(null, e);
                            });
                        }
                        return h.length ? void M(h, l, function(p, v) {
                            var s = v.reduce(function(o, r) {
                                    var w;
                                    return w = "string" == typeof r ? r.length : r.byteLength, o + w.toString().length + w + 2;
                                }, 0),
                                u = new Uint8Array(s),
                                e = 0;
                            return v.forEach(function(w) {
                                var O = "string" == typeof w,
                                    P = w;
                                if (O) {
                                    for (var N = new Uint8Array(w.length), y = 0; y < w.length; y++) {
                                        N[y] = w.charCodeAt(y);
                                    }
                                    P = N.buffer;
                                }
                                O ? u[e++] = 0 : u[e++] = 1;
                                for (var o = P.byteLength.toString(), y = 0; y < o.length; y++) {
                                    u[e++] = parseInt(o[y]);
                                }
                                u[e++] = 255;
                                for (var N = new Uint8Array(P), y = 0; y < N.length; y++) {
                                    u[e++] = N[y];
                                }
                            }), m(u.buffer);
                        }) : m(new ArrayBuffer(0));
                    }, g.encodePayloadAsBlob = function(h, m) {
                        function l(o, p) {
                            g.encodePacket(o, !0, !0, function(v) {
                                var P = new Uint8Array(1);
                                if (P[0] = 1, "string" == typeof v) {
                                    for (var y = new Uint8Array(v.length), N = 0; N < v.length; N++) {
                                        y[N] = v.charCodeAt(N);
                                    }
                                    v = y.buffer, P[0] = 0;
                                }
                                for (var u = v instanceof ArrayBuffer ? v.byteLength : v.size, w = u.toString(), e = new Uint8Array(w.length + 1), N = 0; N < w.length; N++) {
                                    e[N] = parseInt(w[N]);
                                }
                                if (e[w.length] = 255, n) {
                                    var O = new n([P.buffer, e.buffer, v]);
                                    p(null, O);
                                }
                            });
                        }
                        M(h, l, function(e, o) {
                            return m(new n(o));
                        });
                    }, g.decodePayloadAsBinary = function(V, Q, m) {
                        "function" == typeof Q && (m = Q, Q = null);
                        for (var v = V, N = [], W = !1; v.byteLength > 0;) {
                            for (var U = new Uint8Array(v), S = 0 === U[0], u = "", P = 1; 255 != U[P]; P++) {
                                if (u.length > 310) {
                                    W = !0;
                                    break;
                                }
                                u += U[P];
                            }
                            if (W) {
                                return m(q, 0, 1);
                            }
                            v = t(v, 2 + u.length), u = parseInt(u);
                            var O = t(v, 0, u);
                            if (S) {
                                try {
                                    O = String.fromCharCode.apply(null, new Uint8Array(O));
                                } catch (w) {
                                    var R = new Uint8Array(O);
                                    O = "";
                                    for (var P = 0; P < R.length; P++) {
                                        O += String.fromCharCode(R[P]);
                                    }
                                }
                            }
                            N.push(O), v = t(v, u);
                        }
                        var T = N.length;
                        N.forEach(function(e, h) {
                            m(g.decodePacket(e, Q, !0), h, T);
                        });
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./keys": 20,
                after: 11,
                "arraybuffer.slice": 12,
                "base64-arraybuffer": 13,
                blob: 14,
                "has-binary": 21,
                utf8: 29
            }],
            20: [function(d, f, g) {
                f.exports = Object.keys || function(h) {
                    var l = [],
                        m = Object.prototype.hasOwnProperty;
                    for (var j in h) {
                        m.call(h, j) && l.push(j);
                    }
                    return l;
                };
            }, {}],
            21: [function(d, f, g) {
                (function(j) {
                    function e(l) {
                        function m(o) {
                            if (!o) {
                                return !1;
                            }
                            if (j.Buffer && j.Buffer.isBuffer(o) || j.ArrayBuffer && o instanceof ArrayBuffer || j.Blob && o instanceof Blob || j.File && o instanceof File) {
                                return !0;
                            }
                            if (h(o)) {
                                for (var p = 0; p < o.length; p++) {
                                    if (m(o[p])) {
                                        return !0;
                                    }
                                }
                            } else {
                                if (o && "object" == typeof o) {
                                    o.toJSON && (o = o.toJSON());
                                    for (var n in o) {
                                        if (Object.prototype.hasOwnProperty.call(o, n) && m(o[n])) {
                                            return !0;
                                        }
                                    }
                                }
                            }
                            return !1;
                        }
                        return m(l);
                    }
                    var h = d("isarray");
                    f.exports = e;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                isarray: 24
            }],
            22: [function(d, g, h) {
                try {
                    g.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                } catch (f) {
                    g.exports = !1;
                }
            }, {}],
            23: [function(d, g, h) {
                var f = [].indexOf;
                g.exports = function(j, l) {
                    if (f) {
                        return j.indexOf(l);
                    }
                    for (var m = 0; m < j.length; ++m) {
                        if (j[m] === l) {
                            return m;
                        }
                    }
                    return -1;
                };
            }, {}],
            24: [function(d, f, g) {
                f.exports = Array.isArray || function(e) {
                    return "[object Array]" == Object.prototype.toString.call(e);
                };
            }, {}],
            25: [function(y, q, j) {
                function d(f) {
                    if (f = "" + f, !(f.length > 10000)) {
                        var p = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(f);
                        if (p) {
                            var s = parseFloat(p[1]),
                                o = (p[2] || "ms").toLowerCase();
                            switch (o) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return s * m;
                                case "days":
                                case "day":
                                case "d":
                                    return s * x;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return s * g;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return s * v;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return s * w;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return s;
                            }
                        }
                    }
                }

                function h(e) {
                    return e >= x ? Math.round(e / x) + "d" : e >= g ? Math.round(e / g) + "h" : e >= v ? Math.round(e / v) + "m" : e >= w ? Math.round(e / w) + "s" : e + "ms";
                }

                function l(e) {
                    return z(e, x, "day") || z(e, g, "hour") || z(e, v, "minute") || z(e, w, "second") || e + " ms";
                }

                function z(f, o, p) {
                    return o > f ? void 0 : 1.5 * o > f ? Math.floor(f / o) + " " + p : Math.ceil(f / o) + " " + p + "s";
                }
                var w = 1000,
                    v = 60 * w,
                    g = 60 * v,
                    x = 24 * g,
                    m = 365.25 * x;
                q.exports = function(f, n) {
                    return n = n || {}, "string" == typeof f ? d(f) : n["long"] ? l(f) : h(f);
                };
            }, {}],
            26: [function(d, f, g) {
                (function(j) {
                    var q = /^[\],:{}\s]*$/,
                        m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        h = /(?:^|:|,)(?:\s*\[)+/g,
                        l = /^\s+/,
                        e = /\s+$/;
                    f.exports = function(n) {
                        return "string" == typeof n && n ? (n = n.replace(l, "").replace(e, ""), j.JSON && JSON.parse ? JSON.parse(n) : q.test(n.replace(m, "@").replace(p, "]").replace(h, "")) ? new Function("return " + n)() : void 0) : null;
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {}],
            27: [function(d, f, g) {
                g.encode = function(h) {
                    var j = "";
                    for (var l in h) {
                        h.hasOwnProperty(l) && (j.length && (j += "&"), j += encodeURIComponent(l) + "=" + encodeURIComponent(h[l]));
                    }
                    return j;
                }, g.decode = function(j) {
                    for (var m = {}, q = j.split("&"), l = 0, p = q.length; p > l; l++) {
                        var h = q[l].split("=");
                        m[decodeURIComponent(h[0])] = decodeURIComponent(h[1]);
                    }
                    return m;
                };
            }, {}],
            28: [function(d, g, j) {
                var f = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    h = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                g.exports = function(o) {
                    var q = o,
                        u = o.indexOf("["),
                        m = o.indexOf("]"); - 1 != u && -1 != m && (o = o.substring(0, u) + o.substring(u, m).replace(/:/g, ";") + o.substring(m, o.length));
                    for (var p = f.exec(o || ""), l = {}, r = 14; r--;) {
                        l[h[r]] = p[r] || "";
                    }
                    return -1 != u && -1 != m && (l.source = q, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l;
                };
            }, {}],
            29: [function(f, g, d) {
                (function(h) {
                    ! function(E) {
                        function I(m) {
                            for (var s, v, p = [], u = 0, l = m.length; l > u;) {
                                s = m.charCodeAt(u++), s >= 55296 && 56319 >= s && l > u ? (v = m.charCodeAt(u++), 56320 == (64512 & v) ? p.push(((1023 & s) << 10) + (1023 & v) + 65536) : (p.push(s), u--)) : p.push(s);
                            }
                            return p;
                        }

                        function t(l) {
                            for (var p, u = l.length, m = -1, s = ""; ++m < u;) {
                                p = l[m], p > 65535 && (p -= 65536, s += n(p >>> 10 & 1023 | 55296), p = 56320 | 1023 & p), s += n(p);
                            }
                            return s;
                        }

                        function P(l) {
                            if (l >= 55296 && 57343 >= l) {
                                throw Error("Lone surrogate U+" + l.toString(16).toUpperCase() + " is not a scalar value");
                            }
                        }

                        function N(l, m) {
                            return n(l >> m & 63 | 128);
                        }

                        function D(l) {
                            if (0 == (4294967168 & l)) {
                                return n(l);
                            }
                            var m = "";
                            return 0 == (4294965248 & l) ? m = n(l >> 6 & 31 | 192) : 0 == (4294901760 & l) ? (P(l), m = n(l >> 12 & 15 | 224), m += N(l, 6)) : 0 == (4292870144 & l) && (m = n(l >> 18 & 7 | 240), m += N(l, 12), m += N(l, 6)), m += n(63 & l | 128);
                        }

                        function r(l) {
                            for (var u, w = I(l), p = w.length, v = -1, m = ""; ++v < p;) {
                                u = w[v], m += D(u);
                            }
                            return m;
                        }

                        function L() {
                            if (q >= O) {
                                throw Error("Invalid byte index");
                            }
                            var l = 255 & F[q];
                            if (q++, 128 == (192 & l)) {
                                return 63 & l;
                            }
                            throw Error("Invalid continuation byte");
                        }

                        function J() {
                            var l, p, u, m, s;
                            if (q > O) {
                                throw Error("Invalid byte index");
                            }
                            if (q == O) {
                                return !1;
                            }
                            if (l = 255 & F[q], q++, 0 == (128 & l)) {
                                return l;
                            }
                            if (192 == (224 & l)) {
                                var p = L();
                                if (s = (31 & l) << 6 | p, s >= 128) {
                                    return s;
                                }
                                throw Error("Invalid continuation byte");
                            }
                            if (224 == (240 & l)) {
                                if (p = L(), u = L(), s = (15 & l) << 12 | p << 6 | u, s >= 2048) {
                                    return P(s), s;
                                }
                                throw Error("Invalid continuation byte");
                            }
                            if (240 == (248 & l) && (p = L(), u = L(), m = L(), s = (15 & l) << 18 | p << 12 | u << 6 | m, s >= 65536 && 1114111 >= s)) {
                                return s;
                            }
                            throw Error("Invalid UTF-8 detected");
                        }

                        function G(l) {
                            F = I(l), O = F.length, q = 0;
                            for (var m, o = [];
                                (m = J()) !== !1;) {
                                o.push(m);
                            }
                            return t(o);
                        }
                        var M = "object" == typeof d && d,
                            e = "object" == typeof g && g && g.exports == M && g,
                            K = "object" == typeof h && h;
                        (K.global === K || K.window === K) && (E = K);
                        var F, O, q, n = String.fromCharCode,
                            H = {
                                version: "2.0.0",
                                encode: r,
                                decode: G
                            };
                        if ("function" == typeof b && "object" == typeof b.amd && b.amd) {
                            b(function() {
                                return H;
                            });
                        } else {
                            if (M && !M.nodeType) {
                                if (e) {
                                    e.exports = H;
                                } else {
                                    var j = {},
                                        C = j.hasOwnProperty;
                                    for (var z in H) {
                                        C.call(H, z) && (M[z] = H[z]);
                                    }
                                }
                            } else {
                                E.utf8 = H;
                            }
                        }
                    }(this);
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {}],
            30: [function(y, q, j) {
                function d(f) {
                    var n = "";
                    do {
                        n = w[f % v] + n, f = Math.floor(f / v);
                    } while (f > 0);
                    return n;
                }

                function h(f) {
                    var n = 0;
                    for (m = 0; m < f.length; m++) {
                        n = n * v + g[f.charAt(m)];
                    }
                    return n;
                }

                function l() {
                    var e = d(+new Date);
                    return e !== z ? (x = 0, z = e) : e + "." + d(x++);
                }
                for (var z, w = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), v = 64, g = {}, x = 0, m = 0; v > m; m++) {
                    g[w[m]] = m;
                }
                l.encode = d, l.decode = h, q.exports = l;
            }, {}],
            31: [function(p, j, g) {
                function d(B, z) {
                    "object" == typeof B && (z = B, B = void 0), z = z || {};
                    var v, o = f(B),
                        w = o.source,
                        s = o.id,
                        A = o.path,
                        y = l[s] && A in l[s].nsps,
                        x = z.forceNew || z["force new connection"] || !1 === z.multiplex || y;
                    return x ? (m("ignoring socket cache for %s", w), v = q(w, z)) : (l[s] || (m("new io instance for %s", w), l[s] = q(w, z)), v = l[s]), v.socket(o.path);
                }
                var f = p("./url"),
                    h = p("socket.io-parser"),
                    q = p("./manager"),
                    m = p("debug")("socket.io-client");
                j.exports = g = d;
                var l = g.managers = {};
                g.protocol = h.protocol, g.connect = d, g.Manager = p("./manager"), g.Socket = p("./socket");
            }, {
                "./manager": 32,
                "./socket": 34,
                "./url": 35,
                debug: 39,
                "socket.io-parser": 47
            }],
            32: [function(C, y, m) {
                function d(f, h) {
                    return this instanceof d ? (f && "object" == typeof f && (h = f, f = void 0), h = h || {}, h.path = h.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = h, this.reconnection(h.reconnection !== !1), this.reconnectionAttempts(h.reconnectionAttempts || 1 / 0), this.reconnectionDelay(h.reconnectionDelay || 1000), this.reconnectionDelayMax(h.reconnectionDelayMax || 5000), this.randomizationFactor(h.randomizationFactor || 0.5), this.backoff = new w({
                        min: this.reconnectionDelay(),
                        max: this.reconnectionDelayMax(),
                        jitter: this.randomizationFactor()
                    }), this.timeout(null == h.timeout ? 20000 : h.timeout), this.readyState = "closed", this.uri = f, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new A.Encoder, this.decoder = new A.Decoder, this.autoConnect = h.autoConnect !== !1, void(this.autoConnect && this.open())) : new d(f, h);
                }
                var j = C("engine.io-client"),
                    v = C("./socket"),
                    D = C("component-emitter"),
                    A = C("socket.io-parser"),
                    z = C("./on"),
                    g = C("component-bind"),
                    B = C("debug")("socket.io-client:manager"),
                    x = C("indexof"),
                    w = C("backo2"),
                    q = Object.prototype.hasOwnProperty;
                y.exports = d, d.prototype.emitAll = function() {
                    this.emit.apply(this, arguments);
                    for (var e in this.nsps) {
                        q.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments);
                    }
                }, d.prototype.updateSocketIds = function() {
                    for (var e in this.nsps) {
                        q.call(this.nsps, e) && (this.nsps[e].id = this.engine.id);
                    }
                }, D(d.prototype), d.prototype.reconnection = function(e) {
                    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection;
                }, d.prototype.reconnectionAttempts = function(e) {
                    return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts;
                }, d.prototype.reconnectionDelay = function(e) {
                    return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay;
                }, d.prototype.randomizationFactor = function(e) {
                    return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor;
                }, d.prototype.reconnectionDelayMax = function(e) {
                    return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax;
                }, d.prototype.timeout = function(e) {
                    return arguments.length ? (this._timeout = e, this) : this._timeout;
                }, d.prototype.maybeReconnectOnOpen = function() {
                    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
                }, d.prototype.open = d.prototype.connect = function(l) {
                    if (B("readyState %s", this.readyState), ~this.readyState.indexOf("open")) {
                        return this;
                    }
                    B("opening %s", this.uri), this.engine = j(this.uri, this.opts);
                    var u = this.engine,
                        E = this;
                    this.readyState = "opening", this.skipReconnect = !1;
                    var p = z(u, "open", function() {
                            E.onopen(), l && l();
                        }),
                        h = z(u, "error", function(s) {
                            if (B("connect_error"), E.cleanup(), E.readyState = "closed", E.emitAll("connect_error", s), l) {
                                var n = new Error("Connection error");
                                n.data = s, l(n);
                            } else {
                                E.maybeReconnectOnOpen();
                            }
                        });
                    if (!1 !== this._timeout) {
                        var o = this._timeout;
                        B("connect attempt will timeout after %d", o);
                        var f = setTimeout(function() {
                            B("connect attempt timed out after %d", o), p.destroy(), u.close(), u.emit("error", "timeout"), E.emitAll("connect_timeout", o);
                        }, o);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(f);
                            }
                        });
                    }
                    return this.subs.push(p), this.subs.push(h), this;
                }, d.prototype.onopen = function() {
                    B("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                    var e = this.engine;
                    this.subs.push(z(e, "data", g(this, "ondata"))), this.subs.push(z(e, "ping", g(this, "onping"))), this.subs.push(z(e, "pong", g(this, "onpong"))), this.subs.push(z(e, "error", g(this, "onerror"))), this.subs.push(z(e, "close", g(this, "onclose"))), this.subs.push(z(this.decoder, "decoded", g(this, "ondecoded")));
                }, d.prototype.onping = function() {
                    this.lastPing = new Date, this.emitAll("ping");
                }, d.prototype.onpong = function() {
                    this.emitAll("pong", new Date - this.lastPing);
                }, d.prototype.ondata = function(e) {
                    this.decoder.add(e);
                }, d.prototype.ondecoded = function(e) {
                    this.emit("packet", e);
                }, d.prototype.onerror = function(e) {
                    B("error", e), this.emitAll("error", e);
                }, d.prototype.socket = function(f) {
                    function l() {
                        ~x(h.connecting, o) || h.connecting.push(o);
                    }
                    var o = this.nsps[f];
                    if (!o) {
                        o = new v(this, f), this.nsps[f] = o;
                        var h = this;
                        o.on("connecting", l), o.on("connect", function() {
                            o.id = h.engine.id;
                        }), this.autoConnect && l();
                    }
                    return o;
                }, d.prototype.destroy = function(f) {
                    var h = x(this.connecting, f);
                    ~h && this.connecting.splice(h, 1), this.connecting.length || this.close();
                }, d.prototype.packet = function(f) {
                    B("writing packet %j", f);
                    var h = this;
                    h.encoding ? h.packetBuffer.push(f) : (h.encoding = !0, this.encoder.encode(f, function(l) {
                        for (var e = 0; e < l.length; e++) {
                            h.engine.write(l[e], f.options);
                        }
                        h.encoding = !1, h.processPacketQueue();
                    }));
                }, d.prototype.processPacketQueue = function() {
                    if (this.packetBuffer.length > 0 && !this.encoding) {
                        var e = this.packetBuffer.shift();
                        this.packet(e);
                    }
                }, d.prototype.cleanup = function() {
                    B("cleanup");
                    for (var e; e = this.subs.shift();) {
                        e.destroy();
                    }
                    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
                }, d.prototype.close = d.prototype.disconnect = function() {
                    B("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" == this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();
                }, d.prototype.onclose = function(e) {
                    B("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect();
                }, d.prototype.reconnect = function() {
                    if (this.reconnecting || this.skipReconnect) {
                        return this;
                    }
                    var f = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) {
                        B("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                    } else {
                        var h = this.backoff.duration();
                        B("will wait %dms before reconnect attempt", h), this.reconnecting = !0;
                        var l = setTimeout(function() {
                            f.skipReconnect || (B("attempting reconnect"), f.emitAll("reconnect_attempt", f.backoff.attempts), f.emitAll("reconnecting", f.backoff.attempts), f.skipReconnect || f.open(function(n) {
                                n ? (B("reconnect attempt error"), f.reconnecting = !1, f.reconnect(), f.emitAll("reconnect_error", n.data)) : (B("reconnect success"), f.onreconnect());
                            }));
                        }, h);
                        this.subs.push({
                            destroy: function() {
                                clearTimeout(l);
                            }
                        });
                    }
                }, d.prototype.onreconnect = function() {
                    var e = this.backoff.attempts;
                    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e);
                };
            }, {
                "./on": 33,
                "./socket": 34,
                backo2: 36,
                "component-bind": 37,
                "component-emitter": 38,
                debug: 39,
                "engine.io-client": 1,
                indexof: 42,
                "socket.io-parser": 47
            }],
            33: [function(d, g, h) {
                function f(j, l, m) {
                    return j.on(l, m), {
                        destroy: function() {
                            j.removeListener(l, m);
                        }
                    };
                }
                g.exports = f;
            }, {}],
            34: [function(A, w, l) {
                function d(f, h) {
                    this.io = f, this.nsp = h, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.io.autoConnect && this.open();
                }
                var j = A("socket.io-parser"),
                    m = A("component-emitter"),
                    B = A("to-array"),
                    y = A("./on"),
                    x = A("component-bind"),
                    g = A("debug")("socket.io-client:socket"),
                    z = A("has-binary");
                w.exports = l = d;
                var v = {
                        connect: 1,
                        connect_error: 1,
                        connect_timeout: 1,
                        connecting: 1,
                        disconnect: 1,
                        error: 1,
                        reconnect: 1,
                        reconnect_attempt: 1,
                        reconnect_failed: 1,
                        reconnect_error: 1,
                        reconnecting: 1,
                        ping: 1,
                        pong: 1
                    },
                    q = m.prototype.emit;
                m(d.prototype), d.prototype.subEvents = function() {
                    if (!this.subs) {
                        var e = this.io;
                        this.subs = [y(e, "open", x(this, "onopen")), y(e, "packet", x(this, "onpacket")), y(e, "close", x(this, "onclose"))];
                    }
                }, d.prototype.open = d.prototype.connect = function() {
                    return this.connected ? this : (this.subEvents(), this.io.open(), "open" == this.io.readyState && this.onopen(), this.emit("connecting"), this);
                }, d.prototype.send = function() {
                    var e = B(arguments);
                    return e.unshift("message"), this.emit.apply(this, e), this;
                }, d.prototype.emit = function(f) {
                    if (v.hasOwnProperty(f)) {
                        return q.apply(this, arguments), this;
                    }
                    var o = B(arguments),
                        p = j.EVENT;
                    z(o) && (p = j.BINARY_EVENT);
                    var h = {
                        type: p,
                        data: o
                    };
                    return h.options = {}, h.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof o[o.length - 1] && (g("emitting packet with ack id %d", this.ids), this.acks[this.ids] = o.pop(), h.id = this.ids++), this.connected ? this.packet(h) : this.sendBuffer.push(h), delete this.flags, this;
                }, d.prototype.packet = function(e) {
                    e.nsp = this.nsp, this.io.packet(e);
                }, d.prototype.onopen = function() {
                    g("transport is open - connecting"), "/" != this.nsp && this.packet({
                        type: j.CONNECT
                    });
                }, d.prototype.onclose = function(e) {
                    g("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e);
                }, d.prototype.onpacket = function(e) {
                    if (e.nsp == this.nsp) {
                        switch (e.type) {
                            case j.CONNECT:
                                this.onconnect();
                                break;
                            case j.EVENT:
                                this.onevent(e);
                                break;
                            case j.BINARY_EVENT:
                                this.onevent(e);
                                break;
                            case j.ACK:
                                this.onack(e);
                                break;
                            case j.BINARY_ACK:
                                this.onack(e);
                                break;
                            case j.DISCONNECT:
                                this.ondisconnect();
                                break;
                            case j.ERROR:
                                this.emit("error", e.data);
                        }
                    }
                }, d.prototype.onevent = function(f) {
                    var h = f.data || [];
                    g("emitting event %j", h), null != f.id && (g("attaching ack callback to event"), h.push(this.ack(f.id))), this.connected ? q.apply(this, h) : this.receiveBuffer.push(h);
                }, d.prototype.ack = function(f) {
                    var h = this,
                        o = !1;
                    return function() {
                        if (!o) {
                            o = !0;
                            var n = B(arguments);
                            g("sending ack %j", n);
                            var e = z(n) ? j.BINARY_ACK : j.ACK;
                            h.packet({
                                type: e,
                                id: f,
                                data: n
                            });
                        }
                    };
                }, d.prototype.onack = function(f) {
                    var h = this.acks[f.id];
                    "function" == typeof h ? (g("calling ack %s with %j", f.id, f.data), h.apply(this, f.data), delete this.acks[f.id]) : g("bad ack %s", f.id);
                }, d.prototype.onconnect = function() {
                    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();
                }, d.prototype.emitBuffered = function() {
                    var e;
                    for (e = 0; e < this.receiveBuffer.length; e++) {
                        q.apply(this, this.receiveBuffer[e]);
                    }
                    for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) {
                        this.packet(this.sendBuffer[e]);
                    }
                    this.sendBuffer = [];
                }, d.prototype.ondisconnect = function() {
                    g("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");
                }, d.prototype.destroy = function() {
                    if (this.subs) {
                        for (var e = 0; e < this.subs.length; e++) {
                            this.subs[e].destroy();
                        }
                        this.subs = null;
                    }
                    this.io.destroy(this);
                }, d.prototype.close = d.prototype.disconnect = function() {
                    return this.connected && (g("performing disconnect (%s)", this.nsp), this.packet({
                        type: j.DISCONNECT
                    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
                }, d.prototype.compress = function(e) {
                    return this.flags = this.flags || {}, this.flags.compress = e, this;
                };
            }, {
                "./on": 33,
                "component-bind": 37,
                "component-emitter": 38,
                debug: 39,
                "has-binary": 41,
                "socket.io-parser": 47,
                "to-array": 51
            }],
            35: [function(d, f, g) {
                (function(l) {
                    function h(n, q) {
                        var p = n,
                            q = q || l.location;
                        null == n && (n = q.protocol + "//" + q.host), "string" == typeof n && ("/" == n.charAt(0) && (n = "/" == n.charAt(1) ? q.protocol + n : q.host + n), /^(https?|wss?):\/\//.test(n) || (e("protocol-less url %s", n), n = "undefined" != typeof q ? q.protocol + "//" + n : "https://" + n), e("parse %s", n), p = j(n)), p.port || (/^(http|ws)$/.test(p.protocol) ? p.port = "80" : /^(http|ws)s$/.test(p.protocol) && (p.port = "443")), p.path = p.path || "/";
                        var o = -1 !== p.host.indexOf(":"),
                            m = o ? "[" + p.host + "]" : p.host;
                        return p.id = p.protocol + "://" + m + ":" + p.port, p.href = p.protocol + "://" + m + (q && q.port == p.port ? "" : ":" + p.port), p;
                    }
                    var j = d("parseuri"),
                        e = d("debug")("socket.io-client:url");
                    f.exports = h;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                debug: 39,
                parseuri: 45
            }],
            36: [function(d, g, h) {
                function f(e) {
                    e = e || {}, this.ms = e.min || 100, this.max = e.max || 10000, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
                }
                g.exports = f, f.prototype.duration = function() {
                    var j = this.ms * Math.pow(this.factor, this.attempts++);
                    if (this.jitter) {
                        var l = Math.random(),
                            m = Math.floor(l * this.jitter * j);
                        j = 0 == (1 & Math.floor(10 * l)) ? j - m : j + m;
                    }
                    return 0 | Math.min(j, this.max);
                }, f.prototype.reset = function() {
                    this.attempts = 0;
                }, f.prototype.setMin = function(e) {
                    this.ms = e;
                }, f.prototype.setMax = function(e) {
                    this.max = e;
                }, f.prototype.setJitter = function(e) {
                    this.jitter = e;
                };
            }, {}],
            37: [function(d, g, h) {
                var f = [].slice;
                g.exports = function(j, l) {
                    if ("string" == typeof l && (l = j[l]), "function" != typeof l) {
                        throw new Error("bind() requires a function");
                    }
                    var m = f.call(arguments, 2);
                    return function() {
                        return l.apply(j, m.concat(f.call(arguments)));
                    };
                };
            }, {}],
            38: [function(d, g, j) {
                function f(e) {
                    return e ? h(e) : void 0;
                }

                function h(l) {
                    for (var m in f.prototype) {
                        l[m] = f.prototype[m];
                    }
                    return l;
                }
                g.exports = f, f.prototype.on = f.prototype.addEventListener = function(l, m) {
                    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + l] = this._callbacks["$" + l] || []).push(m), this;
                }, f.prototype.once = function(l, m) {
                    function o() {
                        this.off(l, o), m.apply(this, arguments);
                    }
                    return o.fn = m, this.on(l, o), this;
                }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(l, p) {
                    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) {
                        return this._callbacks = {}, this;
                    }
                    var s = this._callbacks["$" + l];
                    if (!s) {
                        return this;
                    }
                    if (1 == arguments.length) {
                        return delete this._callbacks["$" + l], this;
                    }
                    for (var m, q = 0; q < s.length; q++) {
                        if (m = s[q], m === p || m.fn === p) {
                            s.splice(q, 1);
                            break;
                        }
                    }
                    return this;
                }, f.prototype.emit = function(l) {
                    this._callbacks = this._callbacks || {};
                    var p = [].slice.call(arguments, 1),
                        s = this._callbacks["$" + l];
                    if (s) {
                        s = s.slice(0);
                        for (var m = 0, q = s.length; q > m; ++m) {
                            s[m].apply(this, p);
                        }
                    }
                    return this;
                }, f.prototype.listeners = function(e) {
                    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
                }, f.prototype.hasListeners = function(e) {
                    return !!this.listeners(e).length;
                };
            }, {}],
            39: [function(d, f, g) {
                arguments[4][17][0].apply(g, arguments);
            }, {
                "./debug": 40,
                dup: 17
            }],
            40: [function(d, f, g) {
                arguments[4][18][0].apply(g, arguments);
            }, {
                dup: 18,
                ms: 44
            }],
            41: [function(d, f, g) {
                (function(j) {
                    function e(l) {
                        function m(o) {
                            if (!o) {
                                return !1;
                            }
                            if (j.Buffer && j.Buffer.isBuffer && j.Buffer.isBuffer(o) || j.ArrayBuffer && o instanceof ArrayBuffer || j.Blob && o instanceof Blob || j.File && o instanceof File) {
                                return !0;
                            }
                            if (h(o)) {
                                for (var p = 0; p < o.length; p++) {
                                    if (m(o[p])) {
                                        return !0;
                                    }
                                }
                            } else {
                                if (o && "object" == typeof o) {
                                    o.toJSON && "function" == typeof o.toJSON && (o = o.toJSON());
                                    for (var n in o) {
                                        if (Object.prototype.hasOwnProperty.call(o, n) && m(o[n])) {
                                            return !0;
                                        }
                                    }
                                }
                            }
                            return !1;
                        }
                        return m(l);
                    }
                    var h = d("isarray");
                    f.exports = e;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                isarray: 43
            }],
            42: [function(d, f, g) {
                arguments[4][23][0].apply(g, arguments);
            }, {
                dup: 23
            }],
            43: [function(d, f, g) {
                arguments[4][24][0].apply(g, arguments);
            }, {
                dup: 24
            }],
            44: [function(d, f, g) {
                arguments[4][25][0].apply(g, arguments);
            }, {
                dup: 25
            }],
            45: [function(d, f, g) {
                arguments[4][28][0].apply(g, arguments);
            }, {
                dup: 28
            }],
            46: [function(d, f, g) {
                (function(j) {
                    var h = d("isarray"),
                        l = d("./is-buffer");
                    g.deconstructPacket = function(o) {
                        function q(u) {
                            if (!u) {
                                return u;
                            }
                            if (l(u)) {
                                var n = {
                                    _placeholder: !0,
                                    num: r.length
                                };
                                return r.push(u), n;
                            }
                            if (h(u)) {
                                for (var v = new Array(u.length), e = 0; e < u.length; e++) {
                                    v[e] = q(u[e]);
                                }
                                return v;
                            }
                            if ("object" == typeof u && !(u instanceof Date)) {
                                var v = {};
                                for (var w in u) {
                                    v[w] = q(u[w]);
                                }
                                return v;
                            }
                            return u;
                        }
                        var r = [],
                            m = o.data,
                            p = o;
                        return p.data = q(m), p.attachments = r.length, {
                            packet: p,
                            buffers: r
                        };
                    }, g.reconstructPacket = function(m, o) {
                        function p(n) {
                            if (n && n._placeholder) {
                                var r = o[n.num];
                                return r;
                            }
                            if (h(n)) {
                                for (var e = 0; e < n.length; e++) {
                                    n[e] = p(n[e]);
                                }
                                return n;
                            }
                            if (n && "object" == typeof n) {
                                for (var q in n) {
                                    n[q] = p(n[q]);
                                }
                                return n;
                            }
                            return n;
                        }
                        return m.data = p(m.data), m.attachments = void 0, m;
                    }, g.removeBlobs = function(o, q) {
                        function m(r, x, w) {
                            if (!r) {
                                return r;
                            }
                            if (j.Blob && r instanceof Blob || j.File && r instanceof File) {
                                p++;
                                var n = new FileReader;
                                n.onload = function() {
                                    w ? w[x] = this.result : e = this.result, --p || q(e);
                                }, n.readAsArrayBuffer(r);
                            } else {
                                if (h(r)) {
                                    for (var v = 0; v < r.length; v++) {
                                        m(r[v], v, r);
                                    }
                                } else {
                                    if (r && "object" == typeof r && !l(r)) {
                                        for (var s in r) {
                                            m(r[s], s, r);
                                        }
                                    }
                                }
                            }
                        }
                        var p = 0,
                            e = o;
                        m(e), p || q(e);
                    };
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {
                "./is-buffer": 48,
                isarray: 43
            }],
            47: [function(E, z, q) {
                function g() {}

                function m(d) {
                    var h = "",
                        f = !1;
                    return h += d.type, (q.BINARY_EVENT == d.type || q.BINARY_ACK == d.type) && (h += d.attachments, h += "-"), d.nsp && "/" != d.nsp && (f = !0, h += d.nsp), null != d.id && (f && (h += ",", f = !1), h += d.id), null != d.data && (f && (h += ","), h += y.stringify(d.data)), D("encoded %j as %s", d, h), h;
                }

                function w(d, f) {
                    function h(l) {
                        var p = v.deconstructPacket(l),
                            o = m(p.packet),
                            e = p.buffers;
                        e.unshift(o), f(e);
                    }
                    v.removeBlobs(d, h);
                }

                function F() {
                    this.reconstructor = null;
                }

                function C(h) {
                    var p = {},
                        n = 0;
                    if (p.type = Number(h.charAt(0)), null == q.types[p.type]) {
                        return j();
                    }
                    if (q.BINARY_EVENT == p.type || q.BINARY_ACK == p.type) {
                        for (var u = "";
                            "-" != h.charAt(++n) && (u += h.charAt(n), n != h.length);) {}
                        if (u != Number(u) || "-" != h.charAt(n)) {
                            throw new Error("Illegal attachments");
                        }
                        p.attachments = Number(u);
                    }
                    if ("/" == h.charAt(n + 1)) {
                        for (p.nsp = ""; ++n;) {
                            var f = h.charAt(n);
                            if ("," == f) {
                                break;
                            }
                            if (p.nsp += f, n == h.length) {
                                break;
                            }
                        }
                    } else {
                        p.nsp = "/";
                    }
                    var l = h.charAt(n + 1);
                    if ("" !== l && Number(l) == l) {
                        for (p.id = ""; ++n;) {
                            var f = h.charAt(n);
                            if (null == f || Number(f) != f) {
                                --n;
                                break;
                            }
                            if (p.id += h.charAt(n), n == h.length) {
                                break;
                            }
                        }
                        p.id = Number(p.id);
                    }
                    if (h.charAt(++n)) {
                        try {
                            p.data = y.parse(h.substr(n));
                        } catch (d) {
                            return j();
                        }
                    }
                    return D("decoded %s as %j", h, p), p;
                }

                function B(d) {
                    this.reconPack = d, this.buffers = [];
                }

                function j(d) {
                    return {
                        type: q.ERROR,
                        data: "parser error"
                    };
                }
                var D = E("debug")("socket.io-parser"),
                    y = E("json3"),
                    x = (E("isarray"), E("component-emitter")),
                    v = E("./binary"),
                    A = E("./is-buffer");
                q.protocol = 4, q.types = ["CONNECT", "DISCONNECT", "EVENT", "BINARY_EVENT", "ACK", "BINARY_ACK", "ERROR"], q.CONNECT = 0, q.DISCONNECT = 1, q.EVENT = 2, q.ACK = 3, q.ERROR = 4, q.BINARY_EVENT = 5, q.BINARY_ACK = 6, q.Encoder = g, q.Decoder = F, g.prototype.encode = function(d, h) {
                    if (D("encoding packet %j", d), q.BINARY_EVENT == d.type || q.BINARY_ACK == d.type) {
                        w(d, h);
                    } else {
                        var f = m(d);
                        h([f]);
                    }
                }, x(F.prototype), F.prototype.add = function(d) {
                    var f;
                    if ("string" == typeof d) {
                        f = C(d), q.BINARY_EVENT == f.type || q.BINARY_ACK == f.type ? (this.reconstructor = new B(f), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", f)) : this.emit("decoded", f);
                    } else {
                        if (!A(d) && !d.base64) {
                            throw new Error("Unknown type: " + d);
                        }
                        if (!this.reconstructor) {
                            throw new Error("got binary data when not reconstructing a packet");
                        }
                        f = this.reconstructor.takeBinaryData(d), f && (this.reconstructor = null, this.emit("decoded", f));
                    }
                }, F.prototype.destroy = function() {
                    this.reconstructor && this.reconstructor.finishedReconstruction();
                }, B.prototype.takeBinaryData = function(d) {
                    if (this.buffers.push(d), this.buffers.length == this.reconPack.attachments) {
                        var f = v.reconstructPacket(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), f;
                    }
                    return null;
                }, B.prototype.finishedReconstruction = function() {
                    this.reconPack = null, this.buffers = [];
                };
            }, {
                "./binary": 46,
                "./is-buffer": 48,
                "component-emitter": 49,
                debug: 39,
                isarray: 43,
                json3: 50
            }],
            48: [function(d, f, g) {
                (function(e) {
                    function h(j) {
                        return e.Buffer && e.Buffer.isBuffer(j) || e.ArrayBuffer && j instanceof ArrayBuffer;
                    }
                    f.exports = h;
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {}],
            49: [function(d, f, g) {
                arguments[4][15][0].apply(g, arguments);
            }, {
                dup: 15
            }],
            50: [function(f, g, d) {
                (function(h) {
                    (function() {
                        function j(aq, aE) {
                            function av(E) {
                                if (av[E] !== aC) {
                                    return av[E];
                                }
                                var p;
                                if ("bug-string-char-index" == E) {
                                    p = "a" != "a" [0];
                                } else {
                                    if ("json" == E) {
                                        p = av("json-stringify") && av("json-parse");
                                    } else {
                                        var F, C = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if ("json-stringify" == E) {
                                            var B = aE.stringify,
                                                D = "function" == typeof B && ao;
                                            if (D) {
                                                (F = function() {
                                                    return 1;
                                                }).toJSON = F;
                                                try {
                                                    D = "0" === B(0) && "0" === B(new ar) && '""' == B(new aA) && B(aG) === aC && B(aC) === aC && B() === aC && "1" === B(F) && "[1]" == B([F]) && "[null]" == B([aC]) && "null" == B(null) && "[null,null,null]" == B([aC, aG, null]) && B({
                                                        a: [F, !0, !1, null, "\x00\b\n\f\r	"]
                                                    }) == C && "1" === B(null, F) && "[\n 1,\n 2\n]" == B([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == B(new au(-8640000000000000)) && '"+275760-09-13T00:00:00.000Z"' == B(new au(8640000000000000)) && '"-000001-01-01T00:00:00.000Z"' == B(new au(-62198755200000)) && '"1969-12-31T23:59:59.999Z"' == B(new au(-1));
                                                } catch (A) {
                                                    D = !1;
                                                }
                                            }
                                            p = D;
                                        }
                                        if ("json-parse" == E) {
                                            var z = aE.parse;
                                            if ("function" == typeof z) {
                                                try {
                                                    if (0 === z("0") && !z(!1)) {
                                                        F = z(C);
                                                        var y = 5 == F.a.length && 1 === F.a[0];
                                                        if (y) {
                                                            try {
                                                                y = !z('"	"');
                                                            } catch (A) {}
                                                            if (y) {
                                                                try {
                                                                    y = 1 !== z("01");
                                                                } catch (A) {}
                                                            }
                                                            if (y) {
                                                                try {
                                                                    y = 1 !== z("1.");
                                                                } catch (A) {}
                                                            }
                                                        }
                                                    }
                                                } catch (A) {
                                                    y = !1;
                                                }
                                            }
                                            p = y;
                                        }
                                    }
                                }
                                return av[E] = !!p;
                            }
                            aq || (aq = t.Object()), aE || (aE = t.Object());
                            var ar = aq.Number || t.Number,
                                aA = aq.String || t.String,
                                aH = aq.Object || t.Object,
                                au = aq.Date || t.Date,
                                ap = aq.SyntaxError || t.SyntaxError,
                                aD = aq.TypeError || t.TypeError,
                                aB = aq.Math || t.Math,
                                ax = aq.JSON || t.JSON;
                            "object" == typeof ax && ax && (aE.stringify = ax.stringify, aE.parse = ax.parse);
                            var aF, al, aC, aw = aH.prototype,
                                aG = aw.toString,
                                ao = new au(-3509827334573292);
                            try {
                                ao = -109252 == ao.getUTCFullYear() && 0 === ao.getUTCMonth() && 1 === ao.getUTCDate() && 10 == ao.getUTCHours() && 37 == ao.getUTCMinutes() && 6 == ao.getUTCSeconds() && 708 == ao.getUTCMilliseconds();
                            } catch (an) {}
                            if (!av("json")) {
                                var ay = "[object Function]",
                                    am = "[object Date]",
                                    aj = "[object Number]",
                                    ai = "[object String]",
                                    ah = "[object Array]",
                                    K = "[object Boolean]",
                                    af = av("bug-string-char-index");
                                if (!ao) {
                                    var aI = aB.floor,
                                        G = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        W = function(l, p) {
                                            return G[p] + 365 * (l - 1970) + aI((l - 1969 + (p = +(p > 1))) / 4) - aI((l - 1901 + p) / 100) + aI((l - 1601 + p) / 400);
                                        };
                                }
                                if ((aF = aw.hasOwnProperty) || (aF = function(l) {
                                        var p, u = {};
                                        return (u.__proto__ = null, u.__proto__ = {
                                            toString: 1
                                        }, u).toString != aG ? aF = function(y) {
                                            var z = this.__proto__,
                                                A = y in (this.__proto__ = null, this);
                                            return this.__proto__ = z, A;
                                        } : (p = u.constructor, aF = function(y) {
                                            var z = (this.constructor || p).prototype;
                                            return y in this && !(y in z && this[y] === z[y]);
                                        }), u = null, aF.call(this, l);
                                    }), al = function(p, y) {
                                        var A, u, z, l = 0;
                                        (A = function() {
                                            this.valueOf = 0;
                                        }).prototype.valueOf = 0, u = new A;
                                        for (z in u) {
                                            aF.call(u, z) && l++;
                                        }
                                        return A = u = null, l ? al = 2 == l ? function(B, D) {
                                            var F, C = {},
                                                E = aG.call(B) == ay;
                                            for (F in B) {
                                                E && "prototype" == F || aF.call(C, F) || !(C[F] = 1) || !aF.call(B, F) || D(F);
                                            }
                                        } : function(B, D) {
                                            var F, C, E = aG.call(B) == ay;
                                            for (F in B) {
                                                E && "prototype" == F || !aF.call(B, F) || (C = "constructor" === F) || D(F);
                                            }(C || aF.call(B, F = "constructor")) && D(F);
                                        } : (u = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], al = function(D, E) {
                                            var H, F, C = aG.call(D) == ay,
                                                B = !C && "function" != typeof D.constructor && x[typeof D.hasOwnProperty] && D.hasOwnProperty || aF;
                                            for (H in D) {
                                                C && "prototype" == H || !B.call(D, H) || E(H);
                                            }
                                            for (F = u.length; H = u[--F]; B.call(D, H) && E(H)) {}
                                        }), al(p, y);
                                    }, !av("json-stringify")) {
                                    var az = {
                                            92: "\\\\",
                                            34: '\\"',
                                            8: "\\b",
                                            12: "\\f",
                                            10: "\\n",
                                            13: "\\r",
                                            9: "\\t"
                                        },
                                        V = "000000",
                                        Y = function(l, p) {
                                            return (V + (p || 0)).slice(-l);
                                        },
                                        Q = "\\u00",
                                        ag = function(p) {
                                            for (var z = '"', B = 0, y = p.length, A = !af || y > 10, l = A && (af ? p.split("") : p); y > B; B++) {
                                                var u = p.charCodeAt(B);
                                                switch (u) {
                                                    case 8:
                                                    case 9:
                                                    case 10:
                                                    case 12:
                                                    case 13:
                                                    case 34:
                                                    case 92:
                                                        z += az[u];
                                                        break;
                                                    default:
                                                        if (32 > u) {
                                                            z += Q + Y(2, u.toString(16));
                                                            break;
                                                        }
                                                        z += A ? l[B] : p.charAt(B);
                                                }
                                            }
                                            return z + '"';
                                        },
                                        s = function(I, aO, U, M, S, aM, J) {
                                            var aQ, aP, O, F, aN, aJ, X, D, C, aK, H, y, aL, A, z, N;
                                            try {
                                                aQ = aO[I];
                                            } catch (B) {}
                                            if ("object" == typeof aQ && aQ) {
                                                if (aP = aG.call(aQ), aP != am || aF.call(aQ, "toJSON")) {
                                                    "function" == typeof aQ.toJSON && (aP != aj && aP != ai && aP != ah || aF.call(aQ, "toJSON")) && (aQ = aQ.toJSON(I));
                                                } else {
                                                    if (aQ > -1 / 0 && 1 / 0 > aQ) {
                                                        if (W) {
                                                            for (aN = aI(aQ / 86400000), O = aI(aN / 365.2425) + 1970 - 1; W(O + 1, 0) <= aN; O++) {}
                                                            for (F = aI((aN - W(O, 0)) / 30.42); W(O, F + 1) <= aN; F++) {}
                                                            aN = 1 + aN - W(O, F), aJ = (aQ % 86400000 + 86400000) % 86400000, X = aI(aJ / 3600000) % 24, D = aI(aJ / 60000) % 60, C = aI(aJ / 1000) % 60, aK = aJ % 1000;
                                                        } else {
                                                            O = aQ.getUTCFullYear(), F = aQ.getUTCMonth(), aN = aQ.getUTCDate(), X = aQ.getUTCHours(), D = aQ.getUTCMinutes(), C = aQ.getUTCSeconds(), aK = aQ.getUTCMilliseconds();
                                                        }
                                                        aQ = (0 >= O || O >= 10000 ? (0 > O ? "-" : "+") + Y(6, 0 > O ? -O : O) : Y(4, O)) + "-" + Y(2, F + 1) + "-" + Y(2, aN) + "T" + Y(2, X) + ":" + Y(2, D) + ":" + Y(2, C) + "." + Y(3, aK) + "Z";
                                                    } else {
                                                        aQ = null;
                                                    }
                                                }
                                            }
                                            if (U && (aQ = U.call(aO, I, aQ)), null === aQ) {
                                                return "null";
                                            }
                                            if (aP = aG.call(aQ), aP == K) {
                                                return "" + aQ;
                                            }
                                            if (aP == aj) {
                                                return aQ > -1 / 0 && 1 / 0 > aQ ? "" + aQ : "null";
                                            }
                                            if (aP == ai) {
                                                return ag("" + aQ);
                                            }
                                            if ("object" == typeof aQ) {
                                                for (A = J.length; A--;) {
                                                    if (J[A] === aQ) {
                                                        throw aD();
                                                    }
                                                }
                                                if (J.push(aQ), H = [], z = aM, aM += S, aP == ah) {
                                                    for (aL = 0, A = aQ.length; A > aL; aL++) {
                                                        y = s(aL, aQ, U, M, S, aM, J), H.push(y === aC ? "null" : y);
                                                    }
                                                    N = H.length ? S ? "[\n" + aM + H.join(",\n" + aM) + "\n" + z + "]" : "[" + H.join(",") + "]" : "[]";
                                                } else {
                                                    al(M || aQ, function(l) {
                                                        var p = s(l, aQ, U, M, S, aM, J);
                                                        p !== aC && H.push(ag(l) + ":" + (S ? " " : "") + p);
                                                    }), N = H.length ? S ? "{\n" + aM + H.join(",\n" + aM) + "\n" + z + "}" : "{" + H.join(",") + "}" : "{}";
                                                }
                                                return J.pop(), N;
                                            }
                                        };
                                    aE.stringify = function(H, C, A) {
                                        var l, z, B, E;
                                        if (x[typeof C] && C) {
                                            if ((E = aG.call(C)) == ay) {
                                                z = C;
                                            } else {
                                                if (E == ah) {
                                                    B = {};
                                                    for (var D, y = 0, F = C.length; F > y; D = C[y++], E = aG.call(D), (E == ai || E == aj) && (B[D] = 1)) {}
                                                }
                                            }
                                        }
                                        if (A) {
                                            if ((E = aG.call(A)) == aj) {
                                                if ((A -= A % 1) > 0) {
                                                    for (l = "", A > 10 && (A = 10); l.length < A; l += " ") {}
                                                }
                                            } else {
                                                E == ai && (l = A.length <= 10 ? A : A.slice(0, 10));
                                            }
                                        }
                                        return s("", (D = {}, D[""] = H, D), z, B, l, "", []);
                                    };
                                }
                                if (!av("json-parse")) {
                                    var at, aa, Z = aA.fromCharCode,
                                        ac = {
                                            92: "\\",
                                            34: '"',
                                            47: "/",
                                            98: "\b",
                                            116: "	",
                                            110: "\n",
                                            102: "\f",
                                            114: "\r"
                                        },
                                        ad = function() {
                                            throw at = aa = null, ap();
                                        },
                                        ak = function() {
                                            for (var p, z, B, y, A, l = aa, u = l.length; u > at;) {
                                                switch (A = l.charCodeAt(at)) {
                                                    case 9:
                                                    case 10:
                                                    case 13:
                                                    case 32:
                                                        at++;
                                                        break;
                                                    case 123:
                                                    case 125:
                                                    case 91:
                                                    case 93:
                                                    case 58:
                                                    case 44:
                                                        return p = af ? l.charAt(at) : l[at], at++, p;
                                                    case 34:
                                                        for (p = "@", at++; u > at;) {
                                                            if (A = l.charCodeAt(at), 32 > A) {
                                                                ad();
                                                            } else {
                                                                if (92 == A) {
                                                                    switch (A = l.charCodeAt(++at)) {
                                                                        case 92:
                                                                        case 34:
                                                                        case 47:
                                                                        case 98:
                                                                        case 116:
                                                                        case 110:
                                                                        case 102:
                                                                        case 114:
                                                                            p += ac[A], at++;
                                                                            break;
                                                                        case 117:
                                                                            for (z = ++at, B = at + 4; B > at; at++) {
                                                                                A = l.charCodeAt(at), A >= 48 && 57 >= A || A >= 97 && 102 >= A || A >= 65 && 70 >= A || ad();
                                                                            }
                                                                            p += Z("0x" + l.slice(z, at));
                                                                            break;
                                                                        default:
                                                                            ad();
                                                                    }
                                                                } else {
                                                                    if (34 == A) {
                                                                        break;
                                                                    }
                                                                    for (A = l.charCodeAt(at), z = at; A >= 32 && 92 != A && 34 != A;) {
                                                                        A = l.charCodeAt(++at);
                                                                    }
                                                                    p += l.slice(z, at);
                                                                }
                                                            }
                                                        }
                                                        if (34 == l.charCodeAt(at)) {
                                                            return at++, p;
                                                        }
                                                        ad();
                                                    default:
                                                        if (z = at, 45 == A && (y = !0, A = l.charCodeAt(++at)), A >= 48 && 57 >= A) {
                                                            for (48 == A && (A = l.charCodeAt(at + 1), A >= 48 && 57 >= A) && ad(), y = !1; u > at && (A = l.charCodeAt(at), A >= 48 && 57 >= A); at++) {}
                                                            if (46 == l.charCodeAt(at)) {
                                                                for (B = ++at; u > B && (A = l.charCodeAt(B), A >= 48 && 57 >= A); B++) {}
                                                                B == at && ad(), at = B;
                                                            }
                                                            if (A = l.charCodeAt(at), 101 == A || 69 == A) {
                                                                for (A = l.charCodeAt(++at), (43 == A || 45 == A) && at++, B = at; u > B && (A = l.charCodeAt(B), A >= 48 && 57 >= A); B++) {}
                                                                B == at && ad(), at = B;
                                                            }
                                                            return +l.slice(z, at);
                                                        }
                                                        if (y && ad(), "true" == l.slice(at, at + 4)) {
                                                            return at += 4, !0;
                                                        }
                                                        if ("false" == l.slice(at, at + 5)) {
                                                            return at += 5, !1;
                                                        }
                                                        if ("null" == l.slice(at, at + 4)) {
                                                            return at += 4, null;
                                                        }
                                                        ad();
                                                }
                                            }
                                            return "$";
                                        },
                                        ab = function(l) {
                                            var p, u;
                                            if ("$" == l && ad(), "string" == typeof l) {
                                                if ("@" == (af ? l.charAt(0) : l[0])) {
                                                    return l.slice(1);
                                                }
                                                if ("[" == l) {
                                                    for (p = []; l = ak(), "]" != l; u || (u = !0)) {
                                                        u && ("," == l ? (l = ak(), "]" == l && ad()) : ad()), "," == l && ad(), p.push(ab(l));
                                                    }
                                                    return p;
                                                }
                                                if ("{" == l) {
                                                    for (p = {}; l = ak(), "}" != l; u || (u = !0)) {
                                                        u && ("," == l ? (l = ak(), "}" == l && ad()) : ad()), ("," == l || "string" != typeof l || "@" != (af ? l.charAt(0) : l[0]) || ":" != ak()) && ad(), p[l.slice(1)] = ab(ak());
                                                    }
                                                    return p;
                                                }
                                                ad();
                                            }
                                            return l;
                                        },
                                        o = function(l, u, y) {
                                            var p = ae(l, u, y);
                                            p === aC ? delete l[u] : l[u] = p;
                                        },
                                        ae = function(l, u, z) {
                                            var p, y = l[u];
                                            if ("object" == typeof y && y) {
                                                if (aG.call(y) == ah) {
                                                    for (p = y.length; p--;) {
                                                        o(y, p, z);
                                                    }
                                                } else {
                                                    al(y, function(A) {
                                                        o(y, A, z);
                                                    });
                                                }
                                            }
                                            return z.call(l, u, y);
                                        };
                                    aE.parse = function(l, u) {
                                        var y, p;
                                        return at = 0, aa = "" + l, y = ab(ak()), "$" != ak() && ad(), at = aa = null, u && aG.call(u) == ay ? ae((p = {}, p[""] = y, p), "", u) : y;
                                    };
                                }
                            }
                            return aE.runInContext = j, aE;
                        }
                        var n = "function" == typeof b && b.amd,
                            x = {
                                "function": !0,
                                object: !0
                            },
                            v = x[typeof d] && d && !d.nodeType && d,
                            t = x[typeof window] && window || this,
                            e = v && x[typeof g] && g && !g.nodeType && "object" == typeof h && h;
                        if (!e || e.global !== e && e.window !== e && e.self !== e || (t = e), v && !n) {
                            j(t, v);
                        } else {
                            var w = t.JSON,
                                r = t.JSON3,
                                q = !1,
                                m = j(t, t.JSON3 = {
                                    noConflict: function() {
                                        return q || (q = !0, t.JSON = w, t.JSON3 = r, w = r = null), m;
                                    }
                                });
                            t.JSON = {
                                parse: m.parse,
                                stringify: m.stringify
                            };
                        }
                        n && b(function() {
                            return m;
                        });
                    }).call(this);
                }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
            }, {}],
            51: [function(d, g, h) {
                function f(j, m) {
                    var o = [];
                    m = m || 0;
                    for (var l = m || 0; l < j.length; l++) {
                        o[l - m] = j[l];
                    }
                    return o;
                }
                g.exports = f;
            }, {}]
        }, {}, [31])(31);
    });
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    var b = {};
    (function(f, e) {
        f.VERSION = "1.0.0";
        f.COMPILER_REVISION = 4;
        f.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        f.helpers = {};
        f.partials = {};
        var q = Object.prototype.toString,
            d = "[object Function]",
            m = "[object Object]";
        f.registerHelper = function(x, y, l) {
            if (q.call(x) === m) {
                if (l || y) {
                    throw new f.Exception("Arg not supported with multiple helpers");
                }
                f.Utils.extend(this.helpers, x);
            } else {
                if (l) {
                    y.not = l;
                }
                this.helpers[x] = y;
            }
        };
        f.registerPartial = function(l, x) {
            if (q.call(l) === m) {
                f.Utils.extend(this.partials, l);
            } else {
                this.partials[l] = x;
            }
        };
        f.registerHelper("helperMissing", function(l) {
            if (arguments.length === 2) {
                return e;
            } else {
                throw new Error("Missing helper: '" + l + "'");
            }
        });
        f.registerHelper("blockHelperMissing", function(y, x) {
            var l = x.inverse || function() {},
                A = x.fn;
            var z = q.call(y);
            if (z === d) {
                y = y.call(this);
            }
            if (y === true) {
                return A(this);
            } else {
                if (y === false || y == null) {
                    return l(this);
                } else {
                    if (z === "[object Array]") {
                        if (y.length > 0) {
                            return f.helpers.each(y, x);
                        } else {
                            return l(this);
                        }
                    } else {
                        return A(y);
                    }
                }
            }
        });
        f.K = function() {};
        f.createFrame = Object.create || function(l) {
            f.K.prototype = l;
            var x = new f.K();
            f.K.prototype = null;
            return x;
        };
        f.logger = {
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            log: function(y, l) {
                if (f.logger.level <= y) {
                    var x = f.logger.methodMap[y];
                    if (typeof console !== "undefined" && console[x]) {
                        console[x].call(console, l);
                    }
                }
            }
        };
        f.log = function(x, l) {
            f.logger.log(x, l);
        };
        f.registerHelper("each", function(l, F) {
            var D = F.fn,
                y = F.inverse;
            var A = 0,
                B = "",
                z;
            var C = q.call(l);
            if (C === d) {
                l = l.call(this);
            }
            if (F.data) {
                z = f.createFrame(F.data);
            }
            if (l && typeof l === "object") {
                if (l instanceof Array) {
                    for (var x = l.length; A < x; A++) {
                        if (z) {
                            z.index = A;
                        }
                        B = B + D(l[A], {
                            data: z
                        });
                    }
                } else {
                    for (var E in l) {
                        if (l.hasOwnProperty(E)) {
                            if (z) {
                                z.key = E;
                            }
                            B = B + D(l[E], {
                                data: z
                            });
                            A++;
                        }
                    }
                }
            }
            if (A === 0) {
                B = y(this);
            }
            return B;
        });
        f.registerHelper("if", function(x, l) {
            var y = q.call(x);
            if (y === d) {
                x = x.call(this);
            }
            if (!x || f.Utils.isEmpty(x)) {
                return l.inverse(this);
            } else {
                return l.fn(this);
            }
        });
        f.registerHelper("unless", function(x, l) {
            return f.helpers["if"].call(this, x, {
                fn: l.inverse,
                inverse: l.fn
            });
        });
        f.registerHelper("with", function(x, l) {
            var y = q.call(x);
            if (y === d) {
                x = x.call(this);
            }
            if (!f.Utils.isEmpty(x)) {
                return l.fn(x);
            }
        });
        f.registerHelper("log", function(x, l) {
            var y = l.data && l.data.level != null ? parseInt(l.data.level, 10) : 1;
            f.log(y, x);
        });
        var u = (function() {
            var C = {
                trace: function y() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    simpleInverse: 6,
                    statements: 7,
                    statement: 8,
                    openInverse: 9,
                    closeBlock: 10,
                    openBlock: 11,
                    mustache: 12,
                    partial: 13,
                    CONTENT: 14,
                    COMMENT: 15,
                    OPEN_BLOCK: 16,
                    inMustache: 17,
                    CLOSE: 18,
                    OPEN_INVERSE: 19,
                    OPEN_ENDBLOCK: 20,
                    path: 21,
                    OPEN: 22,
                    OPEN_UNESCAPED: 23,
                    CLOSE_UNESCAPED: 24,
                    OPEN_PARTIAL: 25,
                    partialName: 26,
                    params: 27,
                    hash: 28,
                    dataName: 29,
                    param: 30,
                    STRING: 31,
                    INTEGER: 32,
                    BOOLEAN: 33,
                    hashSegments: 34,
                    hashSegment: 35,
                    ID: 36,
                    EQUALS: 37,
                    DATA: 38,
                    pathSegments: 39,
                    SEP: 40,
                    "$accept": 0,
                    "$end": 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "CONTENT",
                    15: "COMMENT",
                    16: "OPEN_BLOCK",
                    18: "CLOSE",
                    19: "OPEN_INVERSE",
                    20: "OPEN_ENDBLOCK",
                    22: "OPEN",
                    23: "OPEN_UNESCAPED",
                    24: "CLOSE_UNESCAPED",
                    25: "OPEN_PARTIAL",
                    31: "STRING",
                    32: "INTEGER",
                    33: "BOOLEAN",
                    36: "ID",
                    37: "EQUALS",
                    38: "DATA",
                    40: "SEP"
                },
                productions_: [0, [3, 2],
                    [4, 2],
                    [4, 3],
                    [4, 2],
                    [4, 1],
                    [4, 1],
                    [4, 0],
                    [7, 1],
                    [7, 2],
                    [8, 3],
                    [8, 3],
                    [8, 1],
                    [8, 1],
                    [8, 1],
                    [8, 1],
                    [11, 3],
                    [9, 3],
                    [10, 3],
                    [12, 3],
                    [12, 3],
                    [13, 3],
                    [13, 4],
                    [6, 2],
                    [17, 3],
                    [17, 2],
                    [17, 2],
                    [17, 1],
                    [17, 1],
                    [27, 2],
                    [27, 1],
                    [30, 1],
                    [30, 1],
                    [30, 1],
                    [30, 1],
                    [30, 1],
                    [28, 1],
                    [34, 2],
                    [34, 1],
                    [35, 3],
                    [35, 3],
                    [35, 3],
                    [35, 3],
                    [35, 3],
                    [26, 1],
                    [26, 1],
                    [26, 1],
                    [29, 2],
                    [21, 1],
                    [39, 3],
                    [39, 1]
                ],
                performAction: function x(D, G, H, K, J, F, I) {
                    var E = F.length - 1;
                    switch (J) {
                        case 1:
                            return F[E - 1];
                            break;
                        case 2:
                            this.$ = new K.ProgramNode([], F[E]);
                            break;
                        case 3:
                            this.$ = new K.ProgramNode(F[E - 2], F[E]);
                            break;
                        case 4:
                            this.$ = new K.ProgramNode(F[E - 1], []);
                            break;
                        case 5:
                            this.$ = new K.ProgramNode(F[E]);
                            break;
                        case 6:
                            this.$ = new K.ProgramNode([], []);
                            break;
                        case 7:
                            this.$ = new K.ProgramNode([]);
                            break;
                        case 8:
                            this.$ = [F[E]];
                            break;
                        case 9:
                            F[E - 1].push(F[E]);
                            this.$ = F[E - 1];
                            break;
                        case 10:
                            this.$ = new K.BlockNode(F[E - 2], F[E - 1].inverse, F[E - 1], F[E]);
                            break;
                        case 11:
                            this.$ = new K.BlockNode(F[E - 2], F[E - 1], F[E - 1].inverse, F[E]);
                            break;
                        case 12:
                            this.$ = F[E];
                            break;
                        case 13:
                            this.$ = F[E];
                            break;
                        case 14:
                            this.$ = new K.ContentNode(F[E]);
                            break;
                        case 15:
                            this.$ = new K.CommentNode(F[E]);
                            break;
                        case 16:
                            this.$ = new K.MustacheNode(F[E - 1][0], F[E - 1][1]);
                            break;
                        case 17:
                            this.$ = new K.MustacheNode(F[E - 1][0], F[E - 1][1]);
                            break;
                        case 18:
                            this.$ = F[E - 1];
                            break;
                        case 19:
                            this.$ = new K.MustacheNode(F[E - 1][0], F[E - 1][1], F[E - 2][2] === "&");
                            break;
                        case 20:
                            this.$ = new K.MustacheNode(F[E - 1][0], F[E - 1][1], true);
                            break;
                        case 21:
                            this.$ = new K.PartialNode(F[E - 1]);
                            break;
                        case 22:
                            this.$ = new K.PartialNode(F[E - 2], F[E - 1]);
                            break;
                        case 23:
                            break;
                        case 24:
                            this.$ = [
                                [F[E - 2]].concat(F[E - 1]), F[E]
                            ];
                            break;
                        case 25:
                            this.$ = [
                                [F[E - 1]].concat(F[E]), null
                            ];
                            break;
                        case 26:
                            this.$ = [
                                [F[E - 1]], F[E]
                            ];
                            break;
                        case 27:
                            this.$ = [
                                [F[E]], null
                            ];
                            break;
                        case 28:
                            this.$ = [
                                [F[E]], null
                            ];
                            break;
                        case 29:
                            F[E - 1].push(F[E]);
                            this.$ = F[E - 1];
                            break;
                        case 30:
                            this.$ = [F[E]];
                            break;
                        case 31:
                            this.$ = F[E];
                            break;
                        case 32:
                            this.$ = new K.StringNode(F[E]);
                            break;
                        case 33:
                            this.$ = new K.IntegerNode(F[E]);
                            break;
                        case 34:
                            this.$ = new K.BooleanNode(F[E]);
                            break;
                        case 35:
                            this.$ = F[E];
                            break;
                        case 36:
                            this.$ = new K.HashNode(F[E]);
                            break;
                        case 37:
                            F[E - 1].push(F[E]);
                            this.$ = F[E - 1];
                            break;
                        case 38:
                            this.$ = [F[E]];
                            break;
                        case 39:
                            this.$ = [F[E - 2], F[E]];
                            break;
                        case 40:
                            this.$ = [F[E - 2], new K.StringNode(F[E])];
                            break;
                        case 41:
                            this.$ = [F[E - 2], new K.IntegerNode(F[E])];
                            break;
                        case 42:
                            this.$ = [F[E - 2], new K.BooleanNode(F[E])];
                            break;
                        case 43:
                            this.$ = [F[E - 2], F[E]];
                            break;
                        case 44:
                            this.$ = new K.PartialNameNode(F[E]);
                            break;
                        case 45:
                            this.$ = new K.PartialNameNode(new K.StringNode(F[E]));
                            break;
                        case 46:
                            this.$ = new K.PartialNameNode(new K.IntegerNode(F[E]));
                            break;
                        case 47:
                            this.$ = new K.DataNode(F[E]);
                            break;
                        case 48:
                            this.$ = new K.IdNode(F[E]);
                            break;
                        case 49:
                            F[E - 2].push({
                                part: F[E],
                                separator: F[E - 1]
                            });
                            this.$ = F[E - 2];
                            break;
                        case 50:
                            this.$ = [{
                                part: F[E]
                            }];
                            break;
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 7],
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    1: [3]
                }, {
                    5: [1, 17]
                }, {
                    5: [2, 6],
                    7: 18,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 6],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    5: [2, 5],
                    6: 20,
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 5],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    17: 23,
                    18: [1, 22],
                    21: 24,
                    29: 25,
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    5: [2, 8],
                    14: [2, 8],
                    15: [2, 8],
                    16: [2, 8],
                    19: [2, 8],
                    20: [2, 8],
                    22: [2, 8],
                    23: [2, 8],
                    25: [2, 8]
                }, {
                    4: 29,
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 7],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    4: 30,
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 7],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    5: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    19: [2, 12],
                    20: [2, 12],
                    22: [2, 12],
                    23: [2, 12],
                    25: [2, 12]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    19: [2, 13],
                    20: [2, 13],
                    22: [2, 13],
                    23: [2, 13],
                    25: [2, 13]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    19: [2, 14],
                    20: [2, 14],
                    22: [2, 14],
                    23: [2, 14],
                    25: [2, 14]
                }, {
                    5: [2, 15],
                    14: [2, 15],
                    15: [2, 15],
                    16: [2, 15],
                    19: [2, 15],
                    20: [2, 15],
                    22: [2, 15],
                    23: [2, 15],
                    25: [2, 15]
                }, {
                    17: 31,
                    21: 24,
                    29: 25,
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    17: 32,
                    21: 24,
                    29: 25,
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    17: 33,
                    21: 24,
                    29: 25,
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    21: 35,
                    26: 34,
                    31: [1, 36],
                    32: [1, 37],
                    36: [1, 28],
                    39: 26
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 2],
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 2],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    17: 23,
                    21: 24,
                    29: 25,
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    5: [2, 4],
                    7: 38,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 4],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [2, 9],
                    19: [2, 9],
                    20: [2, 9],
                    22: [2, 9],
                    23: [2, 9],
                    25: [2, 9]
                }, {
                    5: [2, 23],
                    14: [2, 23],
                    15: [2, 23],
                    16: [2, 23],
                    19: [2, 23],
                    20: [2, 23],
                    22: [2, 23],
                    23: [2, 23],
                    25: [2, 23]
                }, {
                    18: [1, 39]
                }, {
                    18: [2, 27],
                    21: 44,
                    24: [2, 27],
                    27: 40,
                    28: 41,
                    29: 48,
                    30: 42,
                    31: [1, 45],
                    32: [1, 46],
                    33: [1, 47],
                    34: 43,
                    35: 49,
                    36: [1, 50],
                    38: [1, 27],
                    39: 26
                }, {
                    18: [2, 28],
                    24: [2, 28]
                }, {
                    18: [2, 48],
                    24: [2, 48],
                    31: [2, 48],
                    32: [2, 48],
                    33: [2, 48],
                    36: [2, 48],
                    38: [2, 48],
                    40: [1, 51]
                }, {
                    21: 52,
                    36: [1, 28],
                    39: 26
                }, {
                    18: [2, 50],
                    24: [2, 50],
                    31: [2, 50],
                    32: [2, 50],
                    33: [2, 50],
                    36: [2, 50],
                    38: [2, 50],
                    40: [2, 50]
                }, {
                    10: 53,
                    20: [1, 54]
                }, {
                    10: 55,
                    20: [1, 54]
                }, {
                    18: [1, 56]
                }, {
                    18: [1, 57]
                }, {
                    24: [1, 58]
                }, {
                    18: [1, 59],
                    21: 60,
                    36: [1, 28],
                    39: 26
                }, {
                    18: [2, 44],
                    36: [2, 44]
                }, {
                    18: [2, 45],
                    36: [2, 45]
                }, {
                    18: [2, 46],
                    36: [2, 46]
                }, {
                    5: [2, 3],
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 3],
                    22: [1, 14],
                    23: [1, 15],
                    25: [1, 16]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    16: [2, 17],
                    19: [2, 17],
                    20: [2, 17],
                    22: [2, 17],
                    23: [2, 17],
                    25: [2, 17]
                }, {
                    18: [2, 25],
                    21: 44,
                    24: [2, 25],
                    28: 61,
                    29: 48,
                    30: 62,
                    31: [1, 45],
                    32: [1, 46],
                    33: [1, 47],
                    34: 43,
                    35: 49,
                    36: [1, 50],
                    38: [1, 27],
                    39: 26
                }, {
                    18: [2, 26],
                    24: [2, 26]
                }, {
                    18: [2, 30],
                    24: [2, 30],
                    31: [2, 30],
                    32: [2, 30],
                    33: [2, 30],
                    36: [2, 30],
                    38: [2, 30]
                }, {
                    18: [2, 36],
                    24: [2, 36],
                    35: 63,
                    36: [1, 64]
                }, {
                    18: [2, 31],
                    24: [2, 31],
                    31: [2, 31],
                    32: [2, 31],
                    33: [2, 31],
                    36: [2, 31],
                    38: [2, 31]
                }, {
                    18: [2, 32],
                    24: [2, 32],
                    31: [2, 32],
                    32: [2, 32],
                    33: [2, 32],
                    36: [2, 32],
                    38: [2, 32]
                }, {
                    18: [2, 33],
                    24: [2, 33],
                    31: [2, 33],
                    32: [2, 33],
                    33: [2, 33],
                    36: [2, 33],
                    38: [2, 33]
                }, {
                    18: [2, 34],
                    24: [2, 34],
                    31: [2, 34],
                    32: [2, 34],
                    33: [2, 34],
                    36: [2, 34],
                    38: [2, 34]
                }, {
                    18: [2, 35],
                    24: [2, 35],
                    31: [2, 35],
                    32: [2, 35],
                    33: [2, 35],
                    36: [2, 35],
                    38: [2, 35]
                }, {
                    18: [2, 38],
                    24: [2, 38],
                    36: [2, 38]
                }, {
                    18: [2, 50],
                    24: [2, 50],
                    31: [2, 50],
                    32: [2, 50],
                    33: [2, 50],
                    36: [2, 50],
                    37: [1, 65],
                    38: [2, 50],
                    40: [2, 50]
                }, {
                    36: [1, 66]
                }, {
                    18: [2, 47],
                    24: [2, 47],
                    31: [2, 47],
                    32: [2, 47],
                    33: [2, 47],
                    36: [2, 47],
                    38: [2, 47]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [2, 10],
                    19: [2, 10],
                    20: [2, 10],
                    22: [2, 10],
                    23: [2, 10],
                    25: [2, 10]
                }, {
                    21: 67,
                    36: [1, 28],
                    39: 26
                }, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    19: [2, 11],
                    20: [2, 11],
                    22: [2, 11],
                    23: [2, 11],
                    25: [2, 11]
                }, {
                    14: [2, 16],
                    15: [2, 16],
                    16: [2, 16],
                    19: [2, 16],
                    20: [2, 16],
                    22: [2, 16],
                    23: [2, 16],
                    25: [2, 16]
                }, {
                    5: [2, 19],
                    14: [2, 19],
                    15: [2, 19],
                    16: [2, 19],
                    19: [2, 19],
                    20: [2, 19],
                    22: [2, 19],
                    23: [2, 19],
                    25: [2, 19]
                }, {
                    5: [2, 20],
                    14: [2, 20],
                    15: [2, 20],
                    16: [2, 20],
                    19: [2, 20],
                    20: [2, 20],
                    22: [2, 20],
                    23: [2, 20],
                    25: [2, 20]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    16: [2, 21],
                    19: [2, 21],
                    20: [2, 21],
                    22: [2, 21],
                    23: [2, 21],
                    25: [2, 21]
                }, {
                    18: [1, 68]
                }, {
                    18: [2, 24],
                    24: [2, 24]
                }, {
                    18: [2, 29],
                    24: [2, 29],
                    31: [2, 29],
                    32: [2, 29],
                    33: [2, 29],
                    36: [2, 29],
                    38: [2, 29]
                }, {
                    18: [2, 37],
                    24: [2, 37],
                    36: [2, 37]
                }, {
                    37: [1, 65]
                }, {
                    21: 69,
                    29: 73,
                    31: [1, 70],
                    32: [1, 71],
                    33: [1, 72],
                    36: [1, 28],
                    38: [1, 27],
                    39: 26
                }, {
                    18: [2, 49],
                    24: [2, 49],
                    31: [2, 49],
                    32: [2, 49],
                    33: [2, 49],
                    36: [2, 49],
                    38: [2, 49],
                    40: [2, 49]
                }, {
                    18: [1, 74]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    16: [2, 22],
                    19: [2, 22],
                    20: [2, 22],
                    22: [2, 22],
                    23: [2, 22],
                    25: [2, 22]
                }, {
                    18: [2, 39],
                    24: [2, 39],
                    36: [2, 39]
                }, {
                    18: [2, 40],
                    24: [2, 40],
                    36: [2, 40]
                }, {
                    18: [2, 41],
                    24: [2, 41],
                    36: [2, 41]
                }, {
                    18: [2, 42],
                    24: [2, 42],
                    36: [2, 42]
                }, {
                    18: [2, 43],
                    24: [2, 43],
                    36: [2, 43]
                }, {
                    5: [2, 18],
                    14: [2, 18],
                    15: [2, 18],
                    16: [2, 18],
                    19: [2, 18],
                    20: [2, 18],
                    22: [2, 18],
                    23: [2, 18],
                    25: [2, 18]
                }],
                defaultActions: {
                    17: [2, 1]
                },
                parseError: function z(E, D) {
                    throw new Error(E);
                },
                parse: function B(M) {
                    var T = this,
                        J = [0],
                        ac = [null],
                        O = [],
                        ad = this.table,
                        E = "",
                        N = 0,
                        aa = 0,
                        G = 0,
                        L = 2,
                        Q = 1;
                    this.lexer.setInput(M);
                    this.lexer.yy = this.yy;
                    this.yy.lexer = this.lexer;
                    this.yy.parser = this;
                    if (typeof this.lexer.yylloc == "undefined") {
                        this.lexer.yylloc = {};
                    }
                    var F = this.lexer.yylloc;
                    O.push(F);
                    var H = this.lexer.options && this.lexer.options.ranges;
                    if (typeof this.yy.parseError === "function") {
                        this.parseError = this.yy.parseError;
                    }

                    function S(af) {
                        J.length = J.length - 2 * af;
                        ac.length = ac.length - af;
                        O.length = O.length - af;
                    }

                    function R() {
                        var af;
                        af = T.lexer.lex() || 1;
                        if (typeof af !== "number") {
                            af = T.symbols_[af] || af;
                        }
                        return af;
                    }
                    var Z, V, I, Y, ae, P, X = {},
                        U, ab, D, K;
                    while (true) {
                        I = J[J.length - 1];
                        if (this.defaultActions[I]) {
                            Y = this.defaultActions[I];
                        } else {
                            if (Z === null || typeof Z == "undefined") {
                                Z = R();
                            }
                            Y = ad[I] && ad[I][Z];
                        }
                        if (typeof Y === "undefined" || !Y.length || !Y[0]) {
                            var W = "";
                            if (!G) {
                                K = [];
                                for (U in ad[I]) {
                                    if (this.terminals_[U] && U > 2) {
                                        K.push("'" + this.terminals_[U] + "'");
                                    }
                                }
                                if (this.lexer.showPosition) {
                                    W = "Parse error on line " + (N + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + K.join(", ") + ", got '" + (this.terminals_[Z] || Z) + "'";
                                } else {
                                    W = "Parse error on line " + (N + 1) + ": Unexpected " + (Z == 1 ? "end of input" : "'" + (this.terminals_[Z] || Z) + "'");
                                }
                                this.parseError(W, {
                                    text: this.lexer.match,
                                    token: this.terminals_[Z] || Z,
                                    line: this.lexer.yylineno,
                                    loc: F,
                                    expected: K
                                });
                            }
                        }
                        if (Y[0] instanceof Array && Y.length > 1) {
                            throw new Error("Parse Error: multiple actions possible at state: " + I + ", token: " + Z);
                        }
                        switch (Y[0]) {
                            case 1:
                                J.push(Z);
                                ac.push(this.lexer.yytext);
                                O.push(this.lexer.yylloc);
                                J.push(Y[1]);
                                Z = null;
                                if (!V) {
                                    aa = this.lexer.yyleng;
                                    E = this.lexer.yytext;
                                    N = this.lexer.yylineno;
                                    F = this.lexer.yylloc;
                                    if (G > 0) {
                                        G--;
                                    }
                                } else {
                                    Z = V;
                                    V = null;
                                }
                                break;
                            case 2:
                                ab = this.productions_[Y[1]][1];
                                X.$ = ac[ac.length - ab];
                                X._$ = {
                                    first_line: O[O.length - (ab || 1)].first_line,
                                    last_line: O[O.length - 1].last_line,
                                    first_column: O[O.length - (ab || 1)].first_column,
                                    last_column: O[O.length - 1].last_column
                                };
                                if (H) {
                                    X._$.range = [O[O.length - (ab || 1)].range[0], O[O.length - 1].range[1]];
                                }
                                P = this.performAction.call(X, E, aa, N, this.yy, Y[1], ac, O);
                                if (typeof P !== "undefined") {
                                    return P;
                                }
                                if (ab) {
                                    J = J.slice(0, -1 * ab * 2);
                                    ac = ac.slice(0, -1 * ab);
                                    O = O.slice(0, -1 * ab);
                                }
                                J.push(this.productions_[Y[1]][0]);
                                ac.push(X.$);
                                O.push(X._$);
                                D = ad[J[J.length - 2]][J[J.length - 1]];
                                J.push(D);
                                break;
                            case 3:
                                return true;
                        }
                    }
                    return true;
                }
            };
            var l = (function() {
                var G = ({
                    EOF: 1,
                    parseError: function I(L, K) {
                        if (this.yy.parser) {
                            this.yy.parser.parseError(L, K);
                        } else {
                            throw new Error(L);
                        }
                    },
                    setInput: function(K) {
                        this._input = K;
                        this._more = this._less = this.done = false;
                        this.yylineno = this.yyleng = 0;
                        this.yytext = this.matched = this.match = "";
                        this.conditionStack = ["INITIAL"];
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        };
                        if (this.options.ranges) {
                            this.yylloc.range = [0, 0];
                        }
                        this.offset = 0;
                        return this;
                    },
                    input: function() {
                        var L = this._input[0];
                        this.yytext += L;
                        this.yyleng++;
                        this.offset++;
                        this.match += L;
                        this.matched += L;
                        var K = L.match(/(?:\r\n?|\n).*/g);
                        if (K) {
                            this.yylineno++;
                            this.yylloc.last_line++;
                        } else {
                            this.yylloc.last_column++;
                        }
                        if (this.options.ranges) {
                            this.yylloc.range[1]++;
                        }
                        this._input = this._input.slice(1);
                        return L;
                    },
                    unput: function(M) {
                        var K = M.length;
                        var L = M.split(/(?:\r\n?|\n)/g);
                        this._input = M + this._input;
                        this.yytext = this.yytext.substr(0, this.yytext.length - K - 1);
                        this.offset -= K;
                        var O = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1);
                        this.matched = this.matched.substr(0, this.matched.length - 1);
                        if (L.length - 1) {
                            this.yylineno -= L.length - 1;
                        }
                        var N = this.yylloc.range;
                        this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: L ? (L.length === O.length ? this.yylloc.first_column : 0) + O[O.length - L.length].length - L[0].length : this.yylloc.first_column - K
                        };
                        if (this.options.ranges) {
                            this.yylloc.range = [N[0], N[0] + this.yyleng - K];
                        }
                        return this;
                    },
                    more: function() {
                        this._more = true;
                        return this;
                    },
                    less: function(K) {
                        this.unput(this.match.slice(K));
                    },
                    pastInput: function() {
                        var K = this.matched.substr(0, this.matched.length - this.match.length);
                        return (K.length > 20 ? "..." : "") + K.substr(-20).replace(/\n/g, "");
                    },
                    upcomingInput: function() {
                        var K = this.match;
                        if (K.length < 20) {
                            K += this._input.substr(0, 20 - K.length);
                        }
                        return (K.substr(0, 20) + (K.length > 20 ? "..." : "")).replace(/\n/g, "");
                    },
                    showPosition: function() {
                        var K = this.pastInput();
                        var L = new Array(K.length + 1).join("-");
                        return K + this.upcomingInput() + "\n" + L + "^";
                    },
                    next: function() {
                        if (this.done) {
                            return this.EOF;
                        }
                        if (!this._input) {
                            this.done = true;
                        }
                        var Q, O, L, N, M, K;
                        if (!this._more) {
                            this.yytext = "";
                            this.match = "";
                        }
                        var R = this._currentRules();
                        for (var P = 0; P < R.length; P++) {
                            L = this._input.match(this.rules[R[P]]);
                            if (L && (!O || L[0].length > O[0].length)) {
                                O = L;
                                N = P;
                                if (!this.options.flex) {
                                    break;
                                }
                            }
                        }
                        if (O) {
                            K = O[0].match(/(?:\r\n?|\n).*/g);
                            if (K) {
                                this.yylineno += K.length;
                            }
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: K ? K[K.length - 1].length - K[K.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + O[0].length
                            };
                            this.yytext += O[0];
                            this.match += O[0];
                            this.matches = O;
                            this.yyleng = this.yytext.length;
                            if (this.options.ranges) {
                                this.yylloc.range = [this.offset, this.offset += this.yyleng];
                            }
                            this._more = false;
                            this._input = this._input.slice(O[0].length);
                            this.matched += O[0];
                            Q = this.performAction.call(this, this.yy, this, R[N], this.conditionStack[this.conditionStack.length - 1]);
                            if (this.done && this._input) {
                                this.done = false;
                            }
                            if (Q) {
                                return Q;
                            } else {
                                return;
                            }
                        }
                        if (this._input === "") {
                            return this.EOF;
                        } else {
                            return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            });
                        }
                    },
                    lex: function D() {
                        var K = this.next();
                        if (typeof K !== "undefined") {
                            return K;
                        } else {
                            return this.lex();
                        }
                    },
                    begin: function E(K) {
                        this.conditionStack.push(K);
                    },
                    popState: function J() {
                        return this.conditionStack.pop();
                    },
                    _currentRules: function H() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2];
                    },
                    pushState: function E(K) {
                        this.begin(K);
                    }
                });
                G.options = {};
                G.performAction = function F(O, L, N, K) {
                    var M = K;
                    switch (N) {
                        case 0:
                            L.yytext = "\\";
                            return 14;
                            break;
                        case 1:
                            if (L.yytext.slice(-1) !== "\\") {
                                this.begin("mu");
                            }
                            if (L.yytext.slice(-1) === "\\") {
                                L.yytext = L.yytext.substr(0, L.yyleng - 1), this.begin("emu");
                            }
                            if (L.yytext) {
                                return 14;
                            }
                            break;
                        case 2:
                            return 14;
                            break;
                        case 3:
                            if (L.yytext.slice(-1) !== "\\") {
                                this.popState();
                            }
                            if (L.yytext.slice(-1) === "\\") {
                                L.yytext = L.yytext.substr(0, L.yyleng - 1);
                            }
                            return 14;
                            break;
                        case 4:
                            L.yytext = L.yytext.substr(0, L.yyleng - 4);
                            this.popState();
                            return 15;
                            break;
                        case 5:
                            return 25;
                            break;
                        case 6:
                            return 16;
                            break;
                        case 7:
                            return 20;
                            break;
                        case 8:
                            return 19;
                            break;
                        case 9:
                            return 19;
                            break;
                        case 10:
                            return 23;
                            break;
                        case 11:
                            return 22;
                            break;
                        case 12:
                            this.popState();
                            this.begin("com");
                            break;
                        case 13:
                            L.yytext = L.yytext.substr(3, L.yyleng - 5);
                            this.popState();
                            return 15;
                            break;
                        case 14:
                            return 22;
                            break;
                        case 15:
                            return 37;
                            break;
                        case 16:
                            return 36;
                            break;
                        case 17:
                            return 36;
                            break;
                        case 18:
                            return 40;
                            break;
                        case 19:
                            break;
                        case 20:
                            this.popState();
                            return 24;
                            break;
                        case 21:
                            this.popState();
                            return 18;
                            break;
                        case 22:
                            L.yytext = L.yytext.substr(1, L.yyleng - 2).replace(/\\"/g, '"');
                            return 31;
                            break;
                        case 23:
                            L.yytext = L.yytext.substr(1, L.yyleng - 2).replace(/\\'/g, "'");
                            return 31;
                            break;
                        case 24:
                            return 38;
                            break;
                        case 25:
                            return 33;
                            break;
                        case 26:
                            return 33;
                            break;
                        case 27:
                            return 32;
                            break;
                        case 28:
                            return 36;
                            break;
                        case 29:
                            L.yytext = L.yytext.substr(1, L.yyleng - 2);
                            return 36;
                            break;
                        case 30:
                            return "INVALID";
                            break;
                        case 31:
                            return 5;
                            break;
                    }
                };
                G.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/];
                G.conditions = {
                    mu: {
                        rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                        inclusive: false
                    },
                    emu: {
                        rules: [3],
                        inclusive: false
                    },
                    com: {
                        rules: [4],
                        inclusive: false
                    },
                    INITIAL: {
                        rules: [0, 1, 2, 31],
                        inclusive: true
                    }
                };
                return G;
            })();
            C.lexer = l;

            function A() {
                this.yy = {};
            }
            A.prototype = C;
            C.Parser = A;
            return new A;
        })();
        f.Parser = u;
        f.parse = function(l) {
            if (l.constructor === f.AST.ProgramNode) {
                return l;
            }
            f.Parser.yy = f.AST;
            return f.Parser.parse(l);
        };
        f.AST = {};
        f.AST.ProgramNode = function(x, l) {
            this.type = "program";
            this.statements = x;
            if (l) {
                this.inverse = new f.AST.ProgramNode(l);
            }
        };
        f.AST.MustacheNode = function(B, y, x) {
            this.type = "mustache";
            this.escaped = !x;
            this.hash = y;
            var A = this.id = B[0];
            var z = this.params = B.slice(1);
            var l = this.eligibleHelper = A.isSimple;
            this.isHelper = l && (z.length || y);
        };
        f.AST.PartialNode = function(l, x) {
            this.type = "partial";
            this.partialName = l;
            this.context = x;
        };
        f.AST.BlockNode = function(y, x, l, A) {
            var z = function(B, C) {
                if (B.original !== C.original) {
                    throw new f.Exception(B.original + " doesn't match " + C.original);
                }
            };
            z(y.id, A);
            this.type = "block";
            this.mustache = y;
            this.program = x;
            this.inverse = l;
            if (this.inverse && !this.program) {
                this.isInverse = true;
            }
        };
        f.AST.ContentNode = function(l) {
            this.type = "content";
            this.string = l;
        };
        f.AST.HashNode = function(l) {
            this.type = "hash";
            this.pairs = l;
        };
        f.AST.IdNode = function(C) {
            this.type = "ID";
            var B = "",
                z = [],
                D = 0;
            for (var A = 0, x = C.length; A < x; A++) {
                var y = C[A].part;
                B += (C[A].separator || "") + y;
                if (y === ".." || y === "." || y === "this") {
                    if (z.length > 0) {
                        throw new f.Exception("Invalid path: " + B);
                    } else {
                        if (y === "..") {
                            D++;
                        } else {
                            this.isScoped = true;
                        }
                    }
                } else {
                    z.push(y);
                }
            }
            this.original = B;
            this.parts = z;
            this.string = z.join(".");
            this.depth = D;
            this.isSimple = C.length === 1 && !this.isScoped && D === 0;
            this.stringModeValue = this.string;
        };
        f.AST.PartialNameNode = function(l) {
            this.type = "PARTIAL_NAME";
            this.name = l.original;
        };
        f.AST.DataNode = function(l) {
            this.type = "DATA";
            this.id = l;
        };
        f.AST.StringNode = function(l) {
            this.type = "STRING";
            this.original = this.string = this.stringModeValue = l;
        };
        f.AST.IntegerNode = function(l) {
            this.type = "INTEGER";
            this.original = this.integer = l;
            this.stringModeValue = Number(l);
        };
        f.AST.BooleanNode = function(l) {
            this.type = "BOOLEAN";
            this.bool = l;
            this.stringModeValue = l === "true";
        };
        f.AST.CommentNode = function(l) {
            this.type = "comment";
            this.comment = l;
        };
        var t = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        f.Exception = function(y) {
            var x = Error.prototype.constructor.apply(this, arguments);
            for (var l = 0; l < t.length; l++) {
                this[t[l]] = x[t[l]];
            }
        };
        f.Exception.prototype = new Error();
        f.SafeString = function(l) {
            this.string = l;
        };
        f.SafeString.prototype.toString = function() {
            return this.string.toString();
        };
        var o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        var g = /[&<>"'`]/g;
        var s = /[&<>"'`]/;
        var w = function(l) {
            return o[l] || "&amp;";
        };
        f.Utils = {
            extend: function(y, x) {
                for (var l in x) {
                    if (x.hasOwnProperty(l)) {
                        y[l] = x[l];
                    }
                }
            },
            escapeExpression: function(l) {
                if (l instanceof f.SafeString) {
                    return l.toString();
                } else {
                    if (l == null || l === false) {
                        return "";
                    }
                }
                l = l.toString();
                if (!s.test(l)) {
                    return l;
                }
                return l.replace(g, w);
            },
            isEmpty: function(l) {
                if (!l && l !== 0) {
                    return true;
                } else {
                    if (q.call(l) === "[object Array]" && l.length === 0) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        };
        var n = f.Compiler = function() {};
        var j = f.JavaScriptCompiler = function() {};
        n.prototype = {
            compiler: n,
            disassemble: function() {
                var C = this.opcodes,
                    B, z = [],
                    E, D;
                for (var A = 0, x = C.length; A < x; A++) {
                    B = C[A];
                    if (B.opcode === "DECLARE") {
                        z.push("DECLARE " + B.name + "=" + B.value);
                    } else {
                        E = [];
                        for (var y = 0; y < B.args.length; y++) {
                            D = B.args[y];
                            if (typeof D === "string") {
                                D = '"' + D.replace("\n", "\\n") + '"';
                            }
                            E.push(D);
                        }
                        z.push(B.opcode + " " + E.join(" "));
                    }
                }
                return z.join("\n");
            },
            equals: function(x) {
                var l = this.opcodes.length;
                if (x.opcodes.length !== l) {
                    return false;
                }
                for (var A = 0; A < l; A++) {
                    var B = this.opcodes[A],
                        y = x.opcodes[A];
                    if (B.opcode !== y.opcode || B.args.length !== y.args.length) {
                        return false;
                    }
                    for (var z = 0; z < B.args.length; z++) {
                        if (B.args[z] !== y.args[z]) {
                            return false;
                        }
                    }
                }
                l = this.children.length;
                if (x.children.length !== l) {
                    return false;
                }
                for (A = 0; A < l; A++) {
                    if (!this.children[A].equals(x.children[A])) {
                        return false;
                    }
                }
                return true;
            },
            guid: 0,
            compile: function(l, y) {
                this.children = [];
                this.depths = {
                    list: []
                };
                this.options = y;
                var z = this.options.knownHelpers;
                this.options.knownHelpers = {
                    helperMissing: true,
                    blockHelperMissing: true,
                    each: true,
                    "if": true,
                    unless: true,
                    "with": true,
                    log: true
                };
                if (z) {
                    for (var x in z) {
                        this.options.knownHelpers[x] = z[x];
                    }
                }
                return this.program(l);
            },
            accept: function(l) {
                return this[l.type](l);
            },
            program: function(z) {
                var y = z.statements,
                    B;
                this.opcodes = [];
                for (var A = 0, x = y.length; A < x; A++) {
                    B = y[A];
                    this[B.type](B);
                }
                this.isSimple = x === 1;
                this.depths.list = this.depths.list.sort(function(C, l) {
                    return C - l;
                });
                return this;
            },
            compileProgram: function(z) {
                var x = new this.compiler().compile(z, this.options);
                var A = this.guid++,
                    C;
                this.usePartial = this.usePartial || x.usePartial;
                this.children[A] = x;
                for (var B = 0, y = x.depths.list.length; B < y; B++) {
                    C = x.depths.list[B];
                    if (C < 2) {
                        continue;
                    } else {
                        this.addDepth(C - 1);
                    }
                }
                return A;
            },
            block: function(A) {
                var z = A.mustache,
                    x = A.program,
                    l = A.inverse;
                if (x) {
                    x = this.compileProgram(x);
                }
                if (l) {
                    l = this.compileProgram(l);
                }
                var y = this.classifyMustache(z);
                if (y === "helper") {
                    this.helperMustache(z, x, l);
                } else {
                    if (y === "simple") {
                        this.simpleMustache(z);
                        this.opcode("pushProgram", x);
                        this.opcode("pushProgram", l);
                        this.opcode("emptyHash");
                        this.opcode("blockValue");
                    } else {
                        this.ambiguousMustache(z, x, l);
                        this.opcode("pushProgram", x);
                        this.opcode("pushProgram", l);
                        this.opcode("emptyHash");
                        this.opcode("ambiguousBlockValue");
                    }
                }
                this.opcode("append");
            },
            hash: function(A) {
                var z = A.pairs,
                    C, B;
                this.opcode("pushHash");
                for (var y = 0, x = z.length; y < x; y++) {
                    C = z[y];
                    B = C[1];
                    if (this.options.stringParams) {
                        if (B.depth) {
                            this.addDepth(B.depth);
                        }
                        this.opcode("getContext", B.depth || 0);
                        this.opcode("pushStringParam", B.stringModeValue, B.type);
                    } else {
                        this.accept(B);
                    }
                    this.opcode("assignToHash", C[0]);
                }
                this.opcode("popHash");
            },
            partial: function(l) {
                var x = l.partialName;
                this.usePartial = true;
                if (l.context) {
                    this.ID(l.context);
                } else {
                    this.opcode("push", "depth0");
                }
                this.opcode("invokePartial", x.name);
                this.opcode("append");
            },
            content: function(l) {
                this.opcode("appendContent", l.string);
            },
            mustache: function(y) {
                var l = this.options;
                var x = this.classifyMustache(y);
                if (x === "simple") {
                    this.simpleMustache(y);
                } else {
                    if (x === "helper") {
                        this.helperMustache(y);
                    } else {
                        this.ambiguousMustache(y);
                    }
                }
                if (y.escaped && !l.noEscape) {
                    this.opcode("appendEscaped");
                } else {
                    this.opcode("append");
                }
            },
            ambiguousMustache: function(A, y, x) {
                var B = A.id,
                    z = B.parts[0],
                    l = y != null || x != null;
                this.opcode("getContext", B.depth);
                this.opcode("pushProgram", y);
                this.opcode("pushProgram", x);
                this.opcode("invokeAmbiguous", z, l);
            },
            simpleMustache: function(l) {
                var x = l.id;
                if (x.type === "DATA") {
                    this.DATA(x);
                } else {
                    if (x.parts.length) {
                        this.ID(x);
                    } else {
                        this.addDepth(x.depth);
                        this.opcode("getContext", x.depth);
                        this.opcode("pushContext");
                    }
                }
                this.opcode("resolvePossibleLambda");
            },
            helperMustache: function(z, x, l) {
                var A = this.setupFullMustacheParams(z, x, l),
                    y = z.id.parts[0];
                if (this.options.knownHelpers[y]) {
                    this.opcode("invokeKnownHelper", A.length, y);
                } else {
                    if (this.options.knownHelpersOnly) {
                        throw new Error("You specified knownHelpersOnly, but used the unknown helper " + y);
                    } else {
                        this.opcode("invokeHelper", A.length, y);
                    }
                }
            },
            ID: function(A) {
                this.addDepth(A.depth);
                this.opcode("getContext", A.depth);
                var y = A.parts[0];
                if (!y) {
                    this.opcode("pushContext");
                } else {
                    this.opcode("lookupOnContext", A.parts[0]);
                }
                for (var z = 1, x = A.parts.length; z < x; z++) {
                    this.opcode("lookup", A.parts[z]);
                }
            },
            DATA: function(z) {
                this.options.data = true;
                if (z.id.isScoped || z.id.depth) {
                    throw new f.Exception("Scoped data references are not supported: " + z.original);
                }
                this.opcode("lookupData");
                var A = z.id.parts;
                for (var y = 0, x = A.length; y < x; y++) {
                    this.opcode("lookup", A[y]);
                }
            },
            STRING: function(l) {
                this.opcode("pushString", l.string);
            },
            INTEGER: function(l) {
                this.opcode("pushLiteral", l.integer);
            },
            BOOLEAN: function(l) {
                this.opcode("pushLiteral", l.bool);
            },
            comment: function() {},
            opcode: function(l) {
                this.opcodes.push({
                    opcode: l,
                    args: [].slice.call(arguments, 1)
                });
            },
            declare: function(l, x) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: l,
                    value: x
                });
            },
            addDepth: function(l) {
                if (isNaN(l)) {
                    throw new Error("EWOT");
                }
                if (l === 0) {
                    return;
                }
                if (!this.depths[l]) {
                    this.depths[l] = true;
                    this.depths.list.push(l);
                }
            },
            classifyMustache: function(z) {
                var y = z.isHelper;
                var A = z.eligibleHelper;
                var x = this.options;
                if (A && !y) {
                    var l = z.id.parts[0];
                    if (x.knownHelpers[l]) {
                        y = true;
                    } else {
                        if (x.knownHelpersOnly) {
                            A = false;
                        }
                    }
                }
                if (y) {
                    return "helper";
                } else {
                    if (A) {
                        return "ambiguous";
                    } else {
                        return "simple";
                    }
                }
            },
            pushParams: function(y) {
                var l = y.length,
                    x;
                while (l--) {
                    x = y[l];
                    if (this.options.stringParams) {
                        if (x.depth) {
                            this.addDepth(x.depth);
                        }
                        this.opcode("getContext", x.depth || 0);
                        this.opcode("pushStringParam", x.stringModeValue, x.type);
                    } else {
                        this[x.type](x);
                    }
                }
            },
            setupMustacheParams: function(l) {
                var x = l.params;
                this.pushParams(x);
                if (l.hash) {
                    this.hash(l.hash);
                } else {
                    this.opcode("emptyHash");
                }
                return x;
            },
            setupFullMustacheParams: function(y, x, l) {
                var z = y.params;
                this.pushParams(z);
                this.opcode("pushProgram", x);
                this.opcode("pushProgram", l);
                if (y.hash) {
                    this.hash(y.hash);
                } else {
                    this.opcode("emptyHash");
                }
                return z;
            }
        };
        var v = function(l) {
            this.value = l;
        };
        j.prototype = {
            nameLookup: function(x, l) {
                if (/^[0-9]+$/.test(l)) {
                    return x + "[" + l + "]";
                } else {
                    if (j.isValidJavaScriptVariableName(l)) {
                        return x + "." + l;
                    } else {
                        return x + "['" + l + "']";
                    }
                }
            },
            appendToBuffer: function(l) {
                if (this.environment.isSimple) {
                    return "return " + l + ";";
                } else {
                    return {
                        appendToBuffer: true,
                        content: l,
                        toString: function() {
                            return "buffer += " + l + ";";
                        }
                    };
                }
            },
            initializeBuffer: function() {
                return this.quotedString("");
            },
            namespace: "Handlebars",
            compile: function(l, x, z, y) {
                this.environment = l;
                this.options = x || {};
                f.log(f.logger.DEBUG, this.environment.disassemble() + "\n\n");
                this.name = this.environment.name;
                this.isChild = !!z;
                this.context = z || {
                    programs: [],
                    environments: [],
                    aliases: {}
                };
                this.preamble();
                this.stackSlot = 0;
                this.stackVars = [];
                this.registers = {
                    list: []
                };
                this.compileStack = [];
                this.inlineStack = [];
                this.compileChildren(l, x);
                var B = l.opcodes,
                    A;
                this.i = 0;
                for (p = B.length; this.i < p; this.i++) {
                    A = B[this.i];
                    if (A.opcode === "DECLARE") {
                        this[A.name] = A.value;
                    } else {
                        this[A.opcode].apply(this, A.args);
                    }
                }
                return this.createFunctionContext(y);
            },
            nextOpcode: function() {
                var l = this.environment.opcodes;
                return l[this.i + 1];
            },
            eat: function() {
                this.i = this.i + 1;
            },
            preamble: function() {
                var l = [];
                if (!this.isChild) {
                    var x = this.namespace;
                    var y = "helpers = this.merge(helpers, " + x + ".helpers);";
                    if (this.environment.usePartial) {
                        y = y + " partials = this.merge(partials, " + x + ".partials);";
                    }
                    if (this.options.data) {
                        y = y + " data = data || {};";
                    }
                    l.push(y);
                } else {
                    l.push("");
                }
                if (!this.environment.isSimple) {
                    l.push(", buffer = " + this.initializeBuffer());
                } else {
                    l.push("");
                }
                this.lastContext = 0;
                this.source = l;
            },
            createFunctionContext: function(E) {
                var z = this.stackVars.concat(this.registers.list);
                if (z.length > 0) {
                    this.source[1] = this.source[1] + ", " + z.join(", ");
                }
                if (!this.isChild) {
                    for (var D in this.context.aliases) {
                        if (this.context.aliases.hasOwnProperty(D)) {
                            this.source[1] = this.source[1] + ", " + D + "=" + this.context.aliases[D];
                        }
                    }
                }
                if (this.source[1]) {
                    this.source[1] = "var " + this.source[1].substring(2) + ";";
                }
                if (!this.isChild) {
                    this.source[1] += "\n" + this.context.programs.join("\n") + "\n";
                }
                if (!this.environment.isSimple) {
                    this.source.push("return buffer;");
                }
                var B = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];
                for (var C = 0, A = this.environment.depths.list.length; C < A; C++) {
                    B.push("depth" + this.environment.depths.list[C]);
                }
                var x = this.mergeSource();
                if (!this.isChild) {
                    var F = f.COMPILER_REVISION,
                        y = f.REVISION_CHANGES[F];
                    x = "this.compilerInfo = [" + F + ",'" + y + "'];\n" + x;
                }
                if (E) {
                    B.push(x);
                    return Function.apply(this, B);
                } else {
                    var G = "function " + (this.name || "") + "(" + B.join(",") + ") {\n  " + x + "}";
                    f.log(f.logger.DEBUG, G + "\n\n");
                    return G;
                }
            },
            mergeSource: function() {
                var A = "",
                    y;
                for (var z = 0, l = this.source.length; z < l; z++) {
                    var x = this.source[z];
                    if (x.appendToBuffer) {
                        if (y) {
                            y = y + "\n    + " + x.content;
                        } else {
                            y = x.content;
                        }
                    } else {
                        if (y) {
                            A += "buffer += " + y + ";\n  ";
                            y = e;
                        }
                        A += x + "\n  ";
                    }
                }
                return A;
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var l = ["depth0"];
                this.setupParams(0, l);
                this.replaceStack(function(x) {
                    l.splice(1, 0, x);
                    return "blockHelperMissing.call(" + l.join(", ") + ")";
                });
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var x = ["depth0"];
                this.setupParams(0, x);
                var l = this.topStack();
                x.splice(1, 0, l);
                x[x.length - 1] = "options";
                this.source.push("if (!" + this.lastHelper + ") { " + l + " = blockHelperMissing.call(" + x.join(", ") + "); }");
            },
            appendContent: function(l) {
                this.source.push(this.appendToBuffer(this.quotedString(l)));
            },
            append: function() {
                this.flushInline();
                var l = this.popStack();
                this.source.push("if(" + l + " || " + l + " === 0) { " + this.appendToBuffer(l) + " }");
                if (this.environment.isSimple) {
                    this.source.push("else { " + this.appendToBuffer("''") + " }");
                }
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = "this.escapeExpression";
                this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
            },
            getContext: function(l) {
                if (this.lastContext !== l) {
                    this.lastContext = l;
                }
            },
            lookupOnContext: function(l) {
                this.push(this.nameLookup("depth" + this.lastContext, l, "context"));
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext);
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"';
                this.replaceStack(function(l) {
                    return "typeof " + l + " === functionType ? " + l + ".apply(depth0) : " + l;
                });
            },
            lookup: function(l) {
                this.replaceStack(function(x) {
                    return x + " == null || " + x + " === false ? " + x + " : " + this.nameLookup(x, l, "context");
                });
            },
            lookupData: function(l) {
                this.push("data");
            },
            pushStringParam: function(l, x) {
                this.pushStackLiteral("depth" + this.lastContext);
                this.pushString(x);
                if (typeof l === "string") {
                    this.pushString(l);
                } else {
                    this.pushStackLiteral(l);
                }
            },
            emptyHash: function() {
                this.pushStackLiteral("{}");
                if (this.options.stringParams) {
                    this.register("hashTypes", "{}");
                    this.register("hashContexts", "{}");
                }
            },
            pushHash: function() {
                this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                };
            },
            popHash: function() {
                var l = this.hash;
                this.hash = e;
                if (this.options.stringParams) {
                    this.register("hashContexts", "{" + l.contexts.join(",") + "}");
                    this.register("hashTypes", "{" + l.types.join(",") + "}");
                }
                this.push("{\n    " + l.values.join(",\n    ") + "\n  }");
            },
            pushString: function(l) {
                this.pushStackLiteral(this.quotedString(l));
            },
            push: function(l) {
                this.inlineStack.push(l);
                return l;
            },
            pushLiteral: function(l) {
                this.pushStackLiteral(l);
            },
            pushProgram: function(l) {
                if (l != null) {
                    this.pushStackLiteral(this.programExpression(l));
                } else {
                    this.pushStackLiteral(null);
                }
            },
            invokeHelper: function(y, l) {
                this.context.aliases.helperMissing = "helpers.helperMissing";
                var x = this.lastHelper = this.setupHelper(y, l, true);
                var z = this.nameLookup("depth" + this.lastContext, l, "context");
                this.push(x.name + " || " + z);
                this.replaceStack(function(A) {
                    return A + " ? " + A + ".call(" + x.callParams + ") : helperMissing.call(" + x.helperMissingParams + ")";
                });
            },
            invokeKnownHelper: function(y, l) {
                var x = this.setupHelper(y, l);
                this.push(x.name + ".call(" + x.callParams + ")");
            },
            invokeAmbiguous: function(l, A) {
                this.context.aliases.functionType = '"function"';
                this.pushStackLiteral("{}");
                var x = this.setupHelper(0, l, A);
                var y = this.lastHelper = this.nameLookup("helpers", l, "helper");
                var B = this.nameLookup("depth" + this.lastContext, l, "context");
                var z = this.nextStack();
                this.source.push("if (" + z + " = " + y + ") { " + z + " = " + z + ".call(" + x.callParams + "); }");
                this.source.push("else { " + z + " = " + B + "; " + z + " = typeof " + z + " === functionType ? " + z + ".apply(depth0) : " + z + "; }");
            },
            invokePartial: function(l) {
                var x = [this.nameLookup("partials", l, "partial"), "'" + l + "'", this.popStack(), "helpers", "partials"];
                if (this.options.data) {
                    x.push("data");
                }
                this.context.aliases.self = "this";
                this.push("self.invokePartial(" + x.join(", ") + ")");
            },
            assignToHash: function(x) {
                var z = this.popStack(),
                    l, y;
                if (this.options.stringParams) {
                    y = this.popStack();
                    l = this.popStack();
                }
                var A = this.hash;
                if (l) {
                    A.contexts.push("'" + x + "': " + l);
                }
                if (y) {
                    A.types.push("'" + x + "': " + y);
                }
                A.values.push("'" + x + "': (" + z + ")");
            },
            compiler: j,
            compileChildren: function(x, A) {
                var C = x.children,
                    E, D;
                for (var B = 0, y = C.length; B < y; B++) {
                    E = C[B];
                    D = new this.compiler();
                    var z = this.matchExistingProgram(E);
                    if (z == null) {
                        this.context.programs.push("");
                        z = this.context.programs.length;
                        E.index = z;
                        E.name = "program" + z;
                        this.context.programs[z] = D.compile(E, A, this.context);
                        this.context.environments[z] = E;
                    } else {
                        E.index = z;
                        E.name = "program" + z;
                    }
                }
            },
            matchExistingProgram: function(z) {
                for (var y = 0, x = this.context.environments.length; y < x; y++) {
                    var l = this.context.environments[y];
                    if (l && l.equals(z)) {
                        return y;
                    }
                }
            },
            programExpression: function(y) {
                this.context.aliases.self = "this";
                if (y == null) {
                    return "self.noop";
                }
                var D = this.environment.children[y],
                    C = D.depths.list,
                    B;
                var A = [D.index, D.name, "data"];
                for (var z = 0, x = C.length; z < x; z++) {
                    B = C[z];
                    if (B === 1) {
                        A.push("depth0");
                    } else {
                        A.push("depth" + (B - 1));
                    }
                }
                return (C.length === 0 ? "self.program(" : "self.programWithDepth(") + A.join(", ") + ")";
            },
            register: function(l, x) {
                this.useRegister(l);
                this.source.push(l + " = " + x + ";");
            },
            useRegister: function(l) {
                if (!this.registers[l]) {
                    this.registers[l] = true;
                    this.registers.list.push(l);
                }
            },
            pushStackLiteral: function(l) {
                return this.push(new v(l));
            },
            pushStack: function(x) {
                this.flushInline();
                var l = this.incrStack();
                if (x) {
                    this.source.push(l + " = " + x + ";");
                }
                this.compileStack.push(l);
                return l;
            },
            replaceStack: function(C) {
                var z = "",
                    B = this.isInline(),
                    l;
                if (B) {
                    var A = this.popStack(true);
                    if (A instanceof v) {
                        l = A.value;
                    } else {
                        var x = this.stackSlot ? this.topStackName() : this.incrStack();
                        z = "(" + this.push(x) + " = " + A + "),";
                        l = this.topStack();
                    }
                } else {
                    l = this.topStack();
                }
                var y = C.call(this, l);
                if (B) {
                    if (this.inlineStack.length || this.compileStack.length) {
                        this.popStack();
                    }
                    this.push("(" + z + y + ")");
                } else {
                    if (!/^stack/.test(l)) {
                        l = this.nextStack();
                    }
                    this.source.push(l + " = (" + z + y + ");");
                }
                return l;
            },
            nextStack: function() {
                return this.pushStack();
            },
            incrStack: function() {
                this.stackSlot++;
                if (this.stackSlot > this.stackVars.length) {
                    this.stackVars.push("stack" + this.stackSlot);
                }
                return this.topStackName();
            },
            topStackName: function() {
                return "stack" + this.stackSlot;
            },
            flushInline: function() {
                var y = this.inlineStack;
                if (y.length) {
                    this.inlineStack = [];
                    for (var x = 0, l = y.length; x < l; x++) {
                        var z = y[x];
                        if (z instanceof v) {
                            this.compileStack.push(z);
                        } else {
                            this.pushStack(z);
                        }
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length;
            },
            popStack: function(l) {
                var y = this.isInline(),
                    x = (y ? this.inlineStack : this.compileStack).pop();
                if (!l && (x instanceof v)) {
                    return x.value;
                } else {
                    if (!y) {
                        this.stackSlot--;
                    }
                    return x;
                }
            },
            topStack: function(x) {
                var l = (this.isInline() ? this.inlineStack : this.compileStack),
                    y = l[l.length - 1];
                if (!x && (y instanceof v)) {
                    return y.value;
                } else {
                    return y;
                }
            },
            quotedString: function(l) {
                return '"' + l.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
            },
            setupHelper: function(A, y, x) {
                var z = [];
                this.setupParams(A, z, x);
                var l = this.nameLookup("helpers", y, "helper");
                return {
                    params: z,
                    name: l,
                    callParams: ["depth0"].concat(z).join(", "),
                    helperMissingParams: x && ["depth0", this.quotedString(y)].concat(z).join(", ")
                };
            },
            setupParams: function(z, y, l) {
                var F = [],
                    D = [],
                    E = [],
                    x, A, C;
                F.push("hash:" + this.popStack());
                A = this.popStack();
                C = this.popStack();
                if (C || A) {
                    if (!C) {
                        this.context.aliases.self = "this";
                        C = "self.noop";
                    }
                    if (!A) {
                        this.context.aliases.self = "this";
                        A = "self.noop";
                    }
                    F.push("inverse:" + A);
                    F.push("fn:" + C);
                }
                for (var B = 0; B < z; B++) {
                    x = this.popStack();
                    y.push(x);
                    if (this.options.stringParams) {
                        E.push(this.popStack());
                        D.push(this.popStack());
                    }
                }
                if (this.options.stringParams) {
                    F.push("contexts:[" + D.join(",") + "]");
                    F.push("types:[" + E.join(",") + "]");
                    F.push("hashContexts:hashContexts");
                    F.push("hashTypes:hashTypes");
                }
                if (this.options.data) {
                    F.push("data:data");
                }
                F = "{" + F.join(",") + "}";
                if (l) {
                    this.register("options", F);
                    y.push("options");
                } else {
                    y.push(F);
                }
                return y.join(", ");
            }
        };
        var h = ("break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield").split(" ");
        var c = j.RESERVED_WORDS = {};
        for (var r = 0, p = h.length; r < p; r++) {
            c[h[r]] = true;
        }
        j.isValidJavaScriptVariableName = function(l) {
            if (!j.RESERVED_WORDS[l] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(l)) {
                return true;
            }
            return false;
        };
        f.precompile = function(y, z) {
            if (y == null || (typeof y !== "string" && y.constructor !== f.AST.ProgramNode)) {
                throw new f.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
            }
            z = z || {};
            if (!("data" in z)) {
                z.data = true;
            }
            var x = f.parse(y);
            var l = new n().compile(x, z);
            return new j().compile(l, z);
        };
        f.compile = function(l, x) {
            if (l == null || (typeof l !== "string" && l.constructor !== f.AST.ProgramNode)) {
                throw new f.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + l);
            }
            x = x || {};
            if (!("data" in x)) {
                x.data = true;
            }
            var z;

            function y() {
                var C = f.parse(l);
                var B = new n().compile(C, x);
                var A = new j().compile(B, x, e, true);
                return f.template(A);
            }
            return function(B, A) {
                if (!z) {
                    z = y();
                }
                return z.call(this, B, A);
            };
        };
        f.VM = {
            template: function(l) {
                var x = {
                    escapeExpression: f.Utils.escapeExpression,
                    invokePartial: f.VM.invokePartial,
                    programs: [],
                    program: function(z, A, B) {
                        var y = this.programs[z];
                        if (B) {
                            y = f.VM.program(z, A, B);
                        } else {
                            if (!y) {
                                y = this.programs[z] = f.VM.program(z, A);
                            }
                        }
                        return y;
                    },
                    merge: function(A, z) {
                        var y = A || z;
                        if (A && z) {
                            y = {};
                            f.Utils.extend(y, z);
                            f.Utils.extend(y, A);
                        }
                        return y;
                    },
                    programWithDepth: f.VM.programWithDepth,
                    noop: f.VM.noop,
                    compilerInfo: null
                };
                return function(C, B) {
                    B = B || {};
                    var z = l.call(x, f, C, B.helpers, B.partials, B.data);
                    var D = x.compilerInfo || [],
                        A = D[0] || 1,
                        F = f.COMPILER_REVISION;
                    if (A !== F) {
                        if (A < F) {
                            var y = f.REVISION_CHANGES[F],
                                E = f.REVISION_CHANGES[A];
                            throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + y + ") or downgrade your runtime to an older version (" + E + ").";
                        } else {
                            throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + D[1] + ").";
                        }
                    }
                    return z;
                };
            },
            programWithDepth: function(y, z, A) {
                var x = Array.prototype.slice.call(arguments, 3);
                var l = function(C, B) {
                    B = B || {};
                    return z.apply(this, [C, B.data || A].concat(x));
                };
                l.program = y;
                l.depth = x.length;
                return l;
            },
            program: function(x, y, z) {
                var l = function(B, A) {
                    A = A || {};
                    return y(B, A.data || z);
                };
                l.program = x;
                l.depth = 0;
                return l;
            },
            noop: function() {
                return "";
            },
            invokePartial: function(l, y, A, B, z, C) {
                var x = {
                    helpers: B,
                    partials: z,
                    data: C
                };
                if (l === e) {
                    throw new f.Exception("The partial " + y + " could not be found");
                } else {
                    if (l instanceof Function) {
                        return l(A, x);
                    } else {
                        if (!f.compile) {
                            throw new f.Exception("The partial " + y + " could not be compiled when running in runtime-only mode");
                        } else {
                            z[y] = f.compile(l, {
                                data: C !== e
                            });
                            return z[y](A, x);
                        }
                    }
                }
            }
        };
        f.template = f.VM.template;
    })(b);
    a.Handlebars = b;
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.showNotification = function(h) {
        if (!!h.utmParameters) {
            var d = JSON.parse(h.utmParameters);
            if (d.enabled) {
                delete d.enabled;
                var c = Object.keys(d);
                for (var f = 0; f < c.length; f++) {
                    var e = a.getQueryStringParams(c[f]);
                    if (!e || e !== d[c[f]]) {
                        wigzo.consoleDebug("UTM params mismatched...");
                        return;
                    }
                }
            }
        }
        h.langAlign = wigzo.getAlignmentByLang();
        var b = document.createElement("iframe");
        b.setAttribute("src", wigzo.APP + "/onsitepush/campaign/render/" + h.campaign_id + "?_" + new Date().getTime());
        b.setAttribute("id", h.layoutId);
        b.setAttribute("style", "position: fixed; width: 100%; display: block; height: 100vh !important; top: 0; left: 0; right: 0;	bottom: 0; z-index: 93462627999;");
        b.setAttribute("scrolling", "no");
        document.body.appendChild(b);
        var g = h.message.track_open_url;
        if (h.id) {
            wigzo.$("#" + h.id).prop("href", g);
        }
        if (h.actionUuid) {
            g = wigzo.addQueryParam(g, "actionUuid", h.actionUuid);
            wigzo.$(".wigzo-cta").prop("href", g);
        }
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.notificationtemplates = {};
    a.notificationtemplates["WIGZOWEBPUSHTEMP0"] = '<div id="wigzonotify-top-right">                                                    <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                    <div class="wigzonotify wigzo-removeable" role="alert">                                                     <a id="toastButton" class="wigzo-close-button" role="button"></a>                                                       <div class="wigzo-notifylogo"><img src="{{message.icon}}"></div>                                                         <div class="wigzo-notifystart">                                                             <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                             <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                         </div>                                                         <a class="testLink wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">                                                            <div class="wigzo-notifyurl"><span>{{message.call_to_action_text}}</span></div>                                                         </a>                                                       </div>                                                    </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP1"] = '<div id="wigzonotify-top-right">                                                    <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                    <div class="wigzonotify wigzo-removeable" role="alert">                                                     <a id="toastButton" class="wigzo-close-button" role="button"></a>                                                        <div class="wigzo-notifystart" style="margin-left: 10px;">                                                           <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                           <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                        </div>                                                        <a class="testLink wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">                                                             <div class="wigzo-notifyurl"><span>{{message.call_to_action_text}}</span></div>                                                        </a>                                                      </div>                                                    </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP2"] = '<div id="wigzonotify-bottom-right">                                                                <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify wigzo-removeable" role="alert">                                                                 <a id="toastButton" class="wigzo-close-button" role="button"></a>                                                                   <div class="wigzo-notifylogo"><img src="{{message.icon}}"></div>                                                                       <div class="wigzo-notifystart">                                                                           <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                                           <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                                       </div>                                                                       <a class="testLink wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">                                                                             <div class="wigzo-notifyurl"><span>{{message.call_to_action_text}}</span></div>                                                                       </a>                                                                   </div>                                                                 </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP3"] = '<div id="wigzonotify-bottom-right">                                                                 <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify wigzo-removeable" role="alert">                                                                     <a id="toastButton" class="wigzo-close-button" role="button"></a>                                                                       <div class="wigzo-notifystart" style="margin-left: 10px;">                                                                         <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                                         <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                                       </div>                                                                       <a class="testLink wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">                                                                             <div class="wigzo-notifyurl"><span>{{message.call_to_action_text}}</span></div>                                                                       </a>                                                                 </div>                                                               </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP4"] = '<div id="wigzonotify-center-block">                                                                 <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify-center-block-notify wigzo-removeable" role="alert">                                                                     <a id="toastButton" class="wigzo-close-button" role="button"/></a>                                                                     <div class="wigzo-notifystart">                                                                         <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                                         <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                                         <a class="wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">{{message.call_to_action_text}}</a>                                                                     </div>                                                                 </div>                                                             </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP5"] = '<div id="wigzonotify-center-block-withimg">                                                                 <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify-center-block-notify wigzo-removeable" role="alert">                                                                     <a id="toastButton" class="wigzo-close-button" role="button"/></a>                                                                     <div class="wigzo-notifystart">                                                                         <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                                     </div>                                                                     <div class="wigzo-notifylogo"><img src="{{message.icon}}"></div>                                                                     <div class="wigzo-notifystart">                                                                         <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                                         <a class="wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">{{message.call_to_action_text}}</a>                                                                     </div>                                                                 </div>                                                             </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP6"] = '<div id="wigzonotify-center-block-withlogo">                                                                 <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify-center-block-notify wigzo-removeable" role="alert">                                                                     <a id="toastButton" class="wigzo-close-button" role="button"/></a>                                                                     <div class="wigzo-notifylogo"><img src="{{message.icon}}"></div>                                                                     <div class="wigzo-notifystart">                                                                         <div class="wigzo-notifytitle" style="text-align: {{langAlign}}">{{message.title}}</div>                                                                         <div class="wigzo-notifydesc" style="text-align: {{langAlign}}">{{message.body}}</div>                                                                         <a class="wigzo-cta wigzo-cta-ui {{actionUuid}}" target="_blank">{{message.call_to_action_text}}</a>                                                                     </div>                                                                 </div>                                                             </div>';
    a.notificationtemplates["WIGZOWEBPUSHTEMP7"] = '<div id="wigzonotify-center-block-withimg">                                                                 <span style="display: none" id="wigzo-action-uuid">{{actionUuid}}</span>                                                                <div class="wigzonotify-center-block-notify wigzo-removeable" role="alert">                                                                     <a id="toastButton" class="wigzo-close-button" role="button"/></a>                                                                     <div class="wigzo-notifylogo">                                                                        <a class="wigzo-cta {{actionUuid}}" target="_blank"><img src="{{message.icon}}"></a>                                                                    </div>                                                                 </div>                                                             </div>';
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.log = function() {
        var d = false;
        if (!!localStorage && !!localStorage.debug && (localStorage.debug === "*" || localStorage.debug == "wigzo")) {
            d = true;
        }
        if (a.DEBUG || d) {
            var b = ["wigzo.js"];
            for (var c in arguments) {
                b[b.length] = arguments[c];
            }
            console.debug.apply(console, b);
        }
    };
    a.consoleDebug = a.log;
    a.error = function() {
        var b = ["wigzo.js"];
        for (var c in arguments) {
            b[b.length] = arguments[c];
        }
        console.error.apply(this, b);
    };
    a.isOpera = function() {
        return !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    };
    a.isFirefox = function() {
        return typeof InstallTrigger !== "undefined";
    };
    a.isSafari = function() {
        return (navigator.vendor != null && navigator.vendor.indexOf("Apple") > -1) && (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1);
    };
    a.isChrome = function() {
        return !!window.chrome && !a.isOpera();
    };
    a.isIE = function() {
        return false || !!document.documentMode;
    };
    a.validateEmail = function(b) {
        var c = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return c.test(b);
    };
    a.maskPhone = function(c) {
        switch (wigzo.checkLang()) {
            case "pt-br":
                var b = c.target.value.replace(/\D/g, "").match(/(\d{0,2})(\d{0,9})/);
                c.target.value = !b[2] ? b[1] : b[1] + " " + b[2];
                break;
            case "ar":
                var b = c.target.value.replace(/\D/g, "").match(/(\d{0,4})(\d{0,1})(\d{0,4})/);
                c.target.value = !b[2] ? b[1] : b[1] + " " + b[2] + (b[3] ? " " + b[3] : "");
                break;
            default:
                var b = c.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                c.target.value = !b[2] ? b[1] : b[1] + " " + b[2] + (b[3] ? " " + b[3] : "");
                break;
        }
        return c.target.value;
    };
    a.validatePhone = function(c) {
        var b = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
        return b.test(c);
    };
    a.getAlignmentByLang = function() {
        var b = ["ar", "ur", "fa", "he"];
        var c = a.checkLang();
        if (b.indexOf(c) >= 0) {
            return "right";
        }
        return "left";
    };
    a.checkLang = function() {
        var b = "en-US";
        if (!!document.documentElement.lang) {
            b = document.documentElement.lang;
        }
        return b;
    };
    a.isWigzoScriptDisabled = function() {
        if (!window.hasOwnProperty("WIGZO_ENABLED")) {
            window.WIGZO_ENABLED = true;
        }
        return !window.WIGZO_ENABLED;
    };
    a.getQueryStringParams = function(b, c) {
        if (!c) {
            c = window.location.search.substring(1);
        }
        var e = c.split("&");
        for (var d = 0; d < e.length; d++) {
            var f = e[d].split("=");
            if (f[0] == b) {
                return f[1];
            }
        }
    };
    a.hasQueryParam = function(b, c) {
        if (!c) {
            c = window.location.search.substring(1);
        }
        var e = c.split("&");
        for (var d = 0; d < e.length; d++) {
            var f = e[d].split("=");
            if (f[0] == b) {
                return true;
            }
        }
        return false;
    };
    a.addQueryParam = function(b, c, d) {
        var g = b;
        var f = g.indexOf("?") < 0 ? "?" : "&";
        var e = b + f + c + "=" + d;
        return e;
    };
    a.uuid4 = function() {
        var b = a.getKey("WIGZO_PERSIST_COOKIE");
        if (!!b) {
            return b;
        }
        b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(f) {
            var e = Math.random() * 16 | 0,
                d = f == "x" ? e : (e & 3 | 8);
            return d.toString(16);
        });
        a.setKey("WIGZO_PERSIST_COOKIE", b);
        return b;
    };
    a.xhr = function(j, d, b, h, c, f, g) {
        d = a.addQueryParam(d, "_siteid", a.ORGANIZATIONID);
        var e = {
            cache: false,
            context: a,
            success: b,
            contentType: "application/json",
            error: h,
            method: j,
            timeout: 5000,
            dataType: c
        };
        if (c === "jsonp") {
            e.jsonp = "wigzo_callback";
        }
        if (!!f) {
            e.data = JSON.stringify(f);
        }
        if (!!g) {
            e.headers = g;
        }
        a.$.ajax(d, e);
        return null;
    };
    a.get = function(d, b, f, c, e) {
        c = c || "json";
        a.xhr("GET", d, b, f, c, null, e);
    };
    a.post = function(d, e, b, g, c, f) {
        c = c || "json";
        a.xhr("POST", d, b, g, c, e, f);
    };
    a.jsonp = function(c, b, e, d) {
        a.xhr("GET", c, b, e, "jsonp", null, d);
    };
    a.popupwindow = function(c, g, b, d) {
        var f = (screen.width - b) / 2;
        var e = (screen.height - d) / 2;
        return window.open(c, g, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + b + ", height=" + d + ", top=" + e + ", left=" + f);
    };
    a.openPopUp = function(b) {
        var c = a.popupwindow(b, "Subscribe to notifications", 600, 400);
        window.addEventListener("message", function(f) {
            if (f.data && f.data.type === "HTTP_WILDCARD") {
                var d = f.data;
                c.close();
            }
        });
        return c;
    };
    a.setKey = function(e, f, d) {
        var c = new Date() / 1000;
        localStorage.setItem(e, f);
        localStorage.removeItem(e + ":expiry");
        if (!!d) {
            var b = parseInt(c + d);
            localStorage.setItem(e + ":expiry", b);
        }
    };
    a.getKey = function(d) {
        var e = localStorage.getItem(d);
        var b = parseInt(new Date() / 1000);
        if (!e) {
            return null;
        }
        var c = parseInt(localStorage.getItem(d + ":expiry"));
        if (!c) {
            return e;
        }
        if (b > c) {
            localStorage.removeItem(d);
            localStorage.removeItem(d + ":expiry");
            return null;
        }
        return e;
    };
    a.saveRegistrationId = function(e, b, d, f, c) {
        a.post(a.APP + e, d, function(g) {
            if (!!g.status && g.status === "success") {
                a.subscribed(true);
                a.log("Successfully saved Registration ID!");
                if (g.create) {
                    a("send", "pushallowed", d);
                }
                if (!!f) {
                    f.call(a, g.create);
                }
            }
        }, function() {
            a.log("Error in Saving Registration ID!");
            if (!!c) {
                c.call(a);
            }
        });
    };
    a.exception = function(d, c) {
        var b = {
            code: d,
            reason: c
        };
        if (typeof wigzo === "function") {
            wigzo("send", "exception", b);
        } else {
            a.send("exception", b);
        }
    };
    a.detectHost = function(b) {
        b = typeof("encode") === "undefined" ? true : false;
        if (b) {
            return encodeURIComponent(window.location.toString());
        } else {
            return window.location.toString();
        }
    };
    a.loadjscssfile = function(c, d, b) {
        a.loadedFiles = a.loadedFiles || new Set();
        if (a.loadedFiles.has(c)) {
            return;
        }
        a.loadedFiles.add(c);
        if (d == "js") {
            var e = document.createElement("script");
            e.setAttribute("type", "text/javascript");
            e.setAttribute("src", c);
        } else {
            if (d == "css") {
                var e = document.createElement("link");
                e.setAttribute("rel", "stylesheet");
                if (null != b) {
                    e.setAttribute("media", b);
                }
                e.setAttribute("type", "text/css");
                e.setAttribute("href", c);
            }
        }
        if (typeof e != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(e);
        }
    };
    a.getEcommercePlatform = function() {
        var d = document.querySelector('link[rel="shortcut icon"]');
        var c = "";
        if (window.hasOwnProperty("Shopify")) {
            c = "shopify";
        }
        if (!!a.$("meta[name=generator]").attr("content") && a.$("meta[name=generator]").attr("content") === "PrestaShop") {
            c = "prestashop";
        }
        if (typeof d !== "undefined" && d !== null && d !== "") {
            var e = "";
            var b = document.createElement("a");
            b.href = d.href;
            e = b.hostname.split(".")[1];
            if (e !== null && typeof e !== "undefined" && e !== "" && e === "bigcommerce") {
                c = "custom";
            }
        }
        if (window.hasOwnProperty("ms_store")) {
            c = "storehippo";
        }
        return c;
    };
    a.loadScript = function(c, e, d) {
        var b = document.createElement("script");
        b.src = c;
        b.id = e;
        b.type = "module";
        b.onload = function(f) {
            if (d) {
                d(null, b);
            }
        };
        b.onerror = function() {
            if (d) {
                d(new Error("Failed to load script " + c));
            }
        };
        document.head.appendChild(b);
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.registerWebPushHelper = function(d, e) {
        a.log("Registering for WEBPUSH: " + d.endpoint);
        var b = "/rest/v1/push/register-subscription";
        var c = {
            subscription: d,
            orgtoken: a.ORGANIZATIONID,
            method: e,
            cookie: a.IDENTIFIER
        };
        a.saveRegistrationId(b, "CHROME", c, function(f) {
            a.setKey("WIGZO_PUSH_VERSION", "v3", 7 * 24 * 3600);
            a.mapBrowser(a.IDENTIFIER, d.endpoint, "GCM");
            a.log("WEBPUSH Registration Done!");
        }, function(f) {
            a.log("WEBPUSH Registration Failed!", f);
        });
        a.subscribed("true");
    };
    a.WebPushHttpsManager = function() {
        this.getPermissionState = function() {
            return Notification.permission;
        };
        this.needSubscription = function() {
            if (window.location.protocol === "https:") {
                a.log("HTTPs permission state is default, asking for subscription.");
                return true;
            }
            return false;
        };
        this.pushSubscribe = function(c) {
            var b = this;
            c.pushManager.permissionState(a.subscribeOptions).then(function(e) {
                a.log("Present permissions: " + Notification.permission);
                if (!c.showNotification) {
                    a.subscribed("block");
                    a.log("Notifications aren't supported.", null);
                } else {
                    if (Notification.permission === "denied") {
                        a.subscribed("block");
                        a.log("The user has blocked notifications.", null);
                    } else {
                        if (!("PushManager" in window)) {
                            a.subscribed("block");
                            a.error("Push messaging isn't supported.", null);
                        } else {
                            a.log("Asking for Permission.");
                            var f = a.$("link[rel=manifest]").attr("href");
                            if (!!f) {
                                a.$("link[rel=manifest]").attr("href", a.MANIFEST_PATH);
                            } else {
                                var d = a.$('<link rel="manifest" href="' + a.MANIFEST_PATH + '" /></head>');
                            }
                            a.$("head").prepend(d);
                            if (Notification.permission !== "granted") {
                                a.showOverlayIfNeeded();
                            }
                            Notification.requestPermission().then(function(g) {
                                if ("default" == g) {
                                    return;
                                }
                                c.pushManager.subscribe(a.subscribeOptions).then(function(h) {
                                    a.log("Got permission, getting registration Id");
                                    a.hideOverlay();
                                    a.registerWebPushHelper(h.toJSON(), "HTTPS");
                                    a.exception("ManifestOK", a.detectHost(false));
                                })["catch"](function(h) {
                                    a.hideOverlay();
                                    if (h.name === "InvalidStateError" && h.message.indexOf("resubscribe")) {
                                        c.pushManager.getSubscription().then(function(j) {
                                            j.unsubscribe().then(function(l) {
                                                if (l) {
                                                    b.pushSubscribe(c);
                                                }
                                            });
                                        });
                                        return;
                                    }
                                    if (h.name === "NotAllowedError") {
                                        a.log("User blocked the notification prompt.");
                                        a.subscribed("block");
                                        return;
                                    }
                                });
                            });
                        }
                    }
                }
            });
        };
        this.onServiceWorkerRegistered = function() {
            a.log("Waiting for Service Worker to be ready...");
            var b = this;
            navigator.serviceWorker.ready.then(function(c) {
                a.log("WEBPUSH: Service Worker Ready..");
                c.update();
                b.pushSubscribe(c);
            })["catch"](function(c) {
                a.error(c.toString());
            });
        };
        this.registerServiceWorker = function() {
            a.log("WEBPUSH: Service Worker Registering.");
            var c = this;
            var b = !!a.SERVICE_WORKER_SCOPE ? {
                scope: a.SERVICE_WORKER_SCOPE
            } : {};
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register(a.SERVICE_WORKER_PATH, b).then(function(d) {
                    a.log("WEBPUSH: Service Worker Registered!");
                    c.pushSubscribe(d);
                    a.exception("ServiceWorkerOK", a.detectHost(false));
                })["catch"](function(d) {
                    a.error("serviceWorker.register failed: ", d);
                    a.exception("ServiceWorker404Exception", a.detectHost(false));
                });
            } else {
                a.error("Service workers aren't supported in this browser.");
            }
        };
        this.initialize = function(b) {
            a.log("WebPushHttp(s)Manager initalizing.");
            b();
        };
        this.subscribe = function() {
            var b = this;
            if (this.getPermissionState() == "default") {
                a.invokeSubscriptionDialog(function(c) {
                    if (c) {
                        b.registerServiceWorker();
                    } else {
                        a.setPushDelayed();
                        a.log("User postponed subscription..");
                    }
                });
            } else {
                if (this.getPermissionState() == "granted") {
                    b.registerServiceWorker();
                }
            }
        };
    };
    a.WebPushHttpManager = function(b) {
        this.invokedFromHttps = b;
        this.permissionState = false;
        this.getPermissionState = function() {
            return this.permissionState;
        };
        this.needSubscription = function() {
            if (this.permissionState === "default") {
                a.log("HTTPs permission state is default, asking for subscription.");
                return true;
            }
            return false;
        };
        this.askToCloseModal = function() {
            var e = a.getMarkup(a.html.POST_HTML_PERMISSION_MODAL);
            var d = document.getElementsByTagName("body")[0];
            var c = document.createElement("div");
            c.className = "http_force_open_dialog";
            c.innerHTML = e;
            d.appendChild(c);
            a.$(".wig-autoremove").click(function() {
                a.log("Opening Popup for HTTP Post Permission Subscribe.");
                a.$(".http_force_open_dialog").remove();
                a.popout = a.openPopUp(a.HTTP_PARTIAL + "/jserver/v1/push/popup/" + a.ORGANIZATIONID + "/" + a.IDENTIFIER + "?via=WebPush");
                a.subscribed("true");
                a.log("Done!");
            });
            a.$(".wigzologoclickable").click(function(g) {
                var f = a.ENTITY_SITE_URL;
                a.$(this).attr("href", f);
            });
        };
        this.listenToIFrameEvents = function() {
            a.log("Listening to IFrame Events..");
            var c = this;
            window.addEventListener("message", function(e) {
                message = e.data;
                console.log(message);
                if (!message) {
                    a.error("Invalid Message Recived by listenToIFrameEvents.");
                    return;
                }
                if (message.type === "CONSOLE_LOG") {
                    a.log.apply(this, message.arguments);
                    return;
                } else {
                    if (message.type == "SHOW_OVERLAY") {
                        var d = message.status;
                        if (d) {
                            a.showOverlayIfNeeded();
                        } else {
                            a.hideOverlay();
                        }
                    } else {
                        if (message.type == "STATE_INFO") {
                            a.log("Current Permissions: " + message.status);
                            c.permissionState = message.status;
                            if (!!c.successFn) {
                                c.successFn();
                            } else {
                                c.subscribe();
                            }
                        } else {
                            if (message.type === "HTTP_WILDCARD") {
                                if (message.status === "granted") {
                                    a.log("Permissions aquired! One more step to finish. Let user close the modal first.");
                                } else {
                                    if (message.status == "save") {
                                        a.registerWebPushHelper(message.registrationData, "HTTP_WILDCARD");
                                    } else {
                                        a.error("Permission denied! Aborting...");
                                        a.subscribed("block");
                                    }
                                }
                            } else {
                                a.log("Unknown message: ", message);
                            }
                        }
                    }
                }
            });
        };
        this.initialize = function(c) {
            this.successFn = c;
            a.log("WebPushHttpManager initalizing.");
            this.listenToIFrameEvents();
            var d = a.getKey("WIGZO_PUSH_ENABLED");
            a.log("WIGZO_PUSH_ENABLED:", d);
            if (d === "true" || d === "block") {
                return false;
            }
            if (!!this.successFn) {
                this.successFn();
            } else {
                this.subscribe();
            }
        };
        this.subscribe = function() {
            var c = this;
            if (this.invokedFromHttps === true) {
                a.askPopout = a.openPopUp(a.HTTP_PARTIAL + "/jserver/v1/push/popup/" + a.ORGANIZATIONID + "/" + a.IDENTIFIER + "?via=WebPush&action=askfirst&v=2");
            } else {
                a.invokeSubscriptionDialog(function(d) {
                    if (d) {
                        a.askPopout = a.openPopUp(a.HTTP_PARTIAL + "/jserver/v1/push/popup/" + a.ORGANIZATIONID + "/" + a.IDENTIFIER + "?via=WebPush&action=askfirst&v=2");
                    } else {
                        a.setPushDelayed();
                        a.log("User postponed subscription..");
                    }
                }, "HTTP");
            }
        };
    };
    a.WebPushManager = function(e, d) {
        e = e || function() {};
        d = d || function() {};
        this.manager = null;
        var c = window.location.protocol.toString();
        if (c.substr(0, 5) === "http:" || a.HTTP_COHOST != "" || a.FORCE_HTTP) {
            this.manager = new a.WebPushHttpManager(false);
        } else {
            if (c.substr(0, 5) === "https") {
                this.manager = new a.WebPushHttpsManager();
            } else {
                a.error("Strange Protocol! Cannot subscribe over: " + c);
                return;
            }
        }
        this.needSubscription = function() {
            if (!"ServiceWorker" in window) {
                a.log("ServiceWorker is not Supported in this browser");
                return false;
            }
            if (this.manager.getPermissionState() === "denied") {
                a.log("Notification permission is denied for this browser instance");
                return false;
            }
            if (a.isPushDelayed() || a.isPushBlocked()) {
                a.log("Notification permission is delayed/ blocked for a day");
                return false;
            }
            if (a.getKey("WIGZO_PUSH_VERSION") === "v3") {
                return false;
            }
            if (this.manager.needSubscription()) {
                return true;
            }
            var f = a.getKey("WIGZO_PUSH_ENABLED");
            a.log("WIGZO_PUSH_ENABLED:", f);
            if (f === "true" || f === "block") {
                return false;
            }
            return true;
        };
        this.subscribe = function() {
            return this.manager.subscribe();
        };
        a.log("Subscribing using Web Push Notifications Sub-System");
        var b = this;
        this.manager.initialize(function() {
            e.call(b, b);
        });
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.SafariManager = function(b) {
        this.successFn = b;
        this.subscribe = function() {
            a.log("Subscribing using Safari Notifications Sub-System");
            if ("safari" in window && "pushNotification" in window.safari) {
                var c = this;
                a.invokeSubscriptionDialog(function(d) {
                    if (d) {
                        var e = window.safari.pushNotification.permission(a.SAFARI_WEBPUSH_ID);
                        c.safariCheckOrSubscribe(e);
                    } else {
                        a.setPushDelayedSafari();
                        a.log("User postponed subscription..");
                    }
                }, "HTTPS", "safari");
            } else {
                a.log("Sorry, Your browser can not receive Safari Push Notifications.");
            }
        };
        this.safariCheckOrSubscribe = function(c) {
            if (c.permission === "default") {
                this.performNewSafariSubscription(c);
            } else {
                if (c.permission === "denied") {
                    a.log("Safari push subscription denied.");
                } else {
                    if (c.permission === "granted") {
                        a.log("Safari push subscription granted.");
                        this.registerDeviceToken(c);
                    }
                }
            }
        };
        this.performNewSafariSubscription = function(e) {
            var d = window.location.protocol + "//" + window.location.host;
            var c = this;
            window.safari.pushNotification.requestPermission(a.APP, a.SAFARI_WEBPUSH_ID, {
                orgtoken: a.ORGANIZATIONID,
                domain: d
            }, function(f) {
                a.hideOverlay();
                c.safariCheckOrSubscribe(f);
            });
        };
        this.registerDeviceToken = function(e) {
            if (e.permission === "granted" && e.deviceToken) {
                var d = {
                    deviceToken: e.deviceToken,
                    orgtoken: a.ORGANIZATIONID,
                    cookie: a.IDENTIFIER,
                    websitePushID: a.SAFARI_WEBPUSH_ID,
                    protocol: "HTTPS"
                };
                var c = "/rest/v1/push/register-devicetoken";
                a.saveRegistrationId(c, "SAFARI", d, function() {
                    a.mapBrowser(a.IDENTIFIER, e.deviceToken, "SAFARI");
                    a.log("SAFARI Registration Done!");
                }, function(f) {
                    a.log("SAFARI Registration Failed!" + f);
                });
            }
        };
        this.needSubscription = function() {
            if (Notification.permission === "denied") {
                a.log("Notification permission is denied for this browser instance.");
                return false;
            }
            if (a.isPushDelayed()) {
                a.log("Notification permission is delayed for a day");
                return false;
            }
            var c = a.getKey("WIGZO_PUSH_ENABLED");
            a.log("WIGZO_PUSH_ENABLED:", c);
            if (c === "true" || c === "block") {
                return false;
            }
            if (a.isMapped("BROWSER")) {
                a.log("Browser is already Mapped!");
                a.subscribed("true");
                return false;
            }
            return true;
        };
        this.successFn.call(this, this);
    };
    return a;
}(window.wigzo || {}));
window.wigzo = (function(b) {
    b.subscribed = function(c) {
        if (c === "block") {
            b.log("Disable wigzo to hop for next 3 days");
            b.setKey("WIGZO_PUSH_ENABLED", c, 3 * 24 * 3600);
            b.track("pushblocked");
        } else {
            b.setKey("WIGZO_PUSH_ENABLED", c, 60 * 24 * 3600);
        }
    };
    b.setPushDelayed = function() {
        if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("optin") && b.PUSH_SETTINGS.optin.type === "DIALOG") {
            if (b.PUSH_SETTINGS.optin.hasOwnProperty("popupInterval") && b.PUSH_SETTINGS.optin.popupInterval) {
                duration = b.PUSH_SETTINGS.optin.popupInterval.duration;
                durationType = b.PUSH_SETTINGS.optin.popupInterval.durationType;
                if (durationType == "MINUTES") {
                    duration = duration * 60;
                } else {
                    if (durationType == "HOURS") {
                        duration = duration * 3600;
                    } else {
                        if (durationType == "DAYS") {
                            duration = duration * 3600 * 24;
                        } else {
                            if (durationType == "WEEKS") {
                                duration = duration * 3600 * 24 * 7;
                            }
                        }
                    }
                }
                b.setKey("WIGZO_PUSH_STATUS", "delayed", duration);
            }
        } else {
            if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("optin") && b.PUSH_SETTINGS.optin.type === "BELL") {} else {
                b.setKey("WIGZO_PUSH_STATUS", "delayed", 24 * 3600);
            }
        }
    };
    b.setPushDelayedSafari = function() {
        b.setKey("WIGZO_PUSH_STATUS", "delayed", 90 * 86400);
    };
    b.isPushDelayed = function() {
        return b.getKey("WIGZO_PUSH_STATUS") === "delayed";
    };
    b.isPushBlocked = function() {
        return b.getKey("WIGZO_PUSH_ENABLED") === "block";
    };
    b.setOverlayDisplayed = function() {
        if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("optin") && b.PUSH_SETTINGS.optin.hasOwnProperty("popupInterval") && b.PUSH_SETTINGS.optin.popupInterval) {
            duration = b.PUSH_SETTINGS.optin.popupInterval.duration;
            durationType = b.PUSH_SETTINGS.optin.popupInterval.durationType;
            if (durationType == "MINUTES") {
                duration = duration * 60;
            } else {
                if (durationType == "HOURS") {
                    duration = duration * 3600;
                } else {
                    if (durationType == "DAYS") {
                        duration = duration * 3600 * 24;
                    } else {
                        if (durationType == "WEEKS") {
                            duration = duration * 3600 * 24 * 7;
                        }
                    }
                }
            }
            b.setKey("WIGZO_PUSH_OVERLAY", "true", duration);
        } else {
            b.setKey("WIGZO_PUSH_OVERLAY", "true", 3 * 24 * 3600);
        }
    };
    b.isOverlayAlreadyShown = function() {
        return b.getKey("WIGZO_PUSH_OVERLAY") === "true";
    };
    b.needSubscription = function() {
        if (!b.FEATURES.BrowserPushNotification) {
            b.log("Skipping Notification Sub-System, because its not enabled in the Features.");
            return false;
        }
        if (!("Notification" in window)) {
            b.log("This browser does not support desktop notification");
            return false;
        }
        if (b.isPushDelayed()) {
            b.log("Browser push is delayed for a day.");
            return false;
        }
        b.helpers.detectPrivateMode(function(c) {
            if (c) {
                return false;
            }
        });
        return true;
    };
    b.invokeSubscriptionDialog = function(c, f, e) {
        e = e || "other";
        if (e == "safari") {
            b.setPushDelayedSafari();
        } else {
            b.setPushDelayed();
        }
        f = f || "HTTPS";
        var d = 0;
        if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("optin") && b.PUSH_SETTINGS.optin.timeDelay) {
            d = b.PUSH_SETTINGS.optin.timeDelay;
        }
        setTimeout(function() {
            a(c, f);
        }, d * 1000);
    };
    b.showOverlayIfNeeded = function() {
        if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("overlay") && b.PUSH_SETTINGS.overlay.isEnabled && !b.isOverlayAlreadyShown() && !navigator.platform.includes("iPhone")) {
            b.setOverlayDisplayed();
            b.helpers.detectPrivateMode(function(g) {
                if (!g) {
                    var f = b.helpers.getDeviceType();
                    var e = "https://www.shiprocket.in/engage360/?utm_source=powered&utm_medium=optin_dialog&utm_campaign=app&utm_term=" + b.ORGANIZATIONID;
                    var l = b.pushoverlaymarkup;
                    l = l.replace("$PUSH_TITLE$", b.PUSH_SETTINGS.overlay.title || "Click on Allow to receive notifications");
                    l = l.replace("$PUSH_SUBTITLE$", b.PUSH_SETTINGS.overlay.subtitle || "Stay updated with the latest happenings on our site");
                    l = l.replace("$PUSH_BRANDING_URL$", b.ENTITY_BRANDING_URL);
                    l = l.replace("$POWEREDBYLOGO$", b.ENTITY_FAV_ICON_LIGHT);
                    var h = document.getElementsByTagName("body")[0];
                    var j = document.createElement("div");
                    j.id = "wigzo-push-overlay-iframe-div";
                    j.innerHTML = l;
                    h.appendChild(j);
                    if (b.isSafari()) {
                        var c = document.getElementById("connectDesktop");
                        if (c !== null) {
                            c.style.display = "none";
                        }
                        var d = document.getElementById("connectSafari");
                        if (d !== null) {
                            d.style.display = "block";
                        }
                    }
                    if (b.PUSH_SETTINGS.hideBranding) {
                        if (document.getElementById("wigzo-push-branding")) {
                            document.getElementById("wigzo-push-branding").style.display = "none";
                        }
                    }
                    if (f === "mobile") {
                        window.addEventListener("scroll", function() {
                            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                                document.getElementById("wigzo-push-overlay-iframe-div").setAttribute("style", "display: none;");
                            } else {
                                document.getElementById("wigzo-push-overlay-iframe-div").setAttribute("style", "display: block;");
                            }
                        });
                    }
                } else {
                    b.consoleDebug("Overlay disabled - private browsing");
                }
            });
        } else {
            b.consoleDebug("Overlay is disabled");
        }
    };
    b.hideOverlay = function() {
        if (wigzo.$("#wigzo-push-overlay-iframe-div").length > 0) {
            wigzo.$("#wigzo-push-overlay-iframe-div").remove();
        }
    };
    b.notificationSystemStart = function() {
        if (!b.needSubscription()) {
            b.log("No need to prompt for Notification. Returning.");
            return;
        }
        var c = b.getEcommercePlatform();
        if (c == "bigcommerce") {
            var d = document.createElement("iframe");
            d.setAttribute("src", "/content/index.html");
            d.setAttribute("id", "wigzo-push-notif-iframe-div");
            d.style.display = "none";
            document.body.appendChild(d);
            return;
        }
        b.log("Initializing Notification Sub-System");
        var f;
        var e = function(g) {
            if (!g.needSubscription()) {
                b.log("Manager doesn't require subscription. Returning..");
                return;
            }
            g.subscribe();
        };
        b.subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: b.urlBase64ToUint8Array("BHYBAuK3-iy30de4qIoNC0dE4Rew7NbPaTrMnEHjYjc7EkphaqJlhWFUbPXg5Nr4-_9cyml6c77hx5JRWv3vHGk")
        };
        if (b.ORGANIZATIONID == "X4FMIYLJRbqMgGB2E6kkOQ") {
            b.subscribeOptions.applicationServerKey = b.urlBase64ToUint8Array("BGDy-d_jQo6a-Ju4scmfMeCzoTVtjEI41p7_ZmmrO3JnGs73r_ghVhYEeiCh2wVv6zCJsnL7fpxV27c5RuzjWGE");
        }
        if (b.isChrome()) {
            f = new b.WebPushManager(e);
        } else {
            if (b.isSafari()) {
                f = new b.SafariManager(e);
            } else {
                if (b.isFirefox()) {
                    f = new b.WebPushManager(e);
                }
            }
        }
        if (!f) {
            b.error("This browser is not supported!");
        }
    };
    b.urlBase64ToUint8Array = function(g) {
        const e = "=".repeat((4 - g.length % 4) % 4);
        const c = (g + e).replace(/\-/g, "+").replace(/_/g, "/");
        const f = window.atob(c);
        const d = new Uint8Array(f.length);
        for (let i = 0; i < f.length; ++i) {
            d[i] = f.charCodeAt(i);
        }
        return d;
    };

    function a(c, d) {
        if (b.PUSH_SETTINGS && b.PUSH_SETTINGS.hasOwnProperty("optin") && (b.PUSH_SETTINGS.optin.type === "DIALOG" || b.PUSH_SETTINGS.optin.type === "BELL" || d == "HTTP")) {
            b.helpers.detectPrivateMode(function(e) {
                if (!e) {
                    var h = b.PUSH_SETTINGS.optin.markup;
                    var f = document.getElementsByTagName("body")[0];
                    var g = document.createElement("div");
                    g.id = "wigzo-push-dialog-iframe-div";
                    g.innerHTML = h;
                    f.appendChild(g);
                    b.$(".wig-btn-later").click(function() {
                        c(false);
                        if (wigzo.$("#wigzo-push-dialog-iframe-div").length > 0) {
                            wigzo.$("#wigzo-push-dialog-iframe-div").remove();
                        }
                    });
                    b.$(".wig-btn-allow").click(function() {
                        b.log("Opening native opt-in for subscription.");
                        wigzo("track", "httppushallowed");
                        if (wigzo.$("#wigzo-push-dialog-iframe-div").length > 0) {
                            wigzo.$("#wigzo-push-dialog-iframe-div").remove();
                        }
                        c(true);
                    });
                }
            });
        } else {
            c(true);
        }
    }
    return b;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.pushoverlaymarkup = '<div class="wigzo-push-overlay"><style>#wigzo-push-overlay {font-family: Arial,"Helvetica Neue",Helvetica,sans-serif !important;overflow-y: auto !important;background: rgba(0, 0, 0, 0.9);position: fixed;top: 0px;left: 0px;right: 0px;bottom: 0px;width: 100% !important;height: 100% !important;outline: 0px !important;border: 0px !important;z-index: 2147483000 !important;margin: 0px !important;padding: 0px !important;}#wigzo-push-overlay.wigzoHidden{display: none;}#wigzo-push-overlay .wigzo-push-info {position: absolute;text-align: center;display: inline-block;width:50%;min-width: 300px;padding: 20px;line-height: normal;}#wigzo-push-overlay .wigzo-push-title{position: relative;color: #fff;text-align: center;font-size: 26px;font-weight: 600;}#wigzo-push-overlay .wigzo-push-desc{position: relative;color: #fff;opacity: 0.7;text-align: center;font-size: 18px;padding-top: 20px;margin-bottom:20px}#wigzo-push-overlay .wigzo-push-branding-text{font-size: 11px;opacity: 0.5;position: relative;color: #fff;padding-top: 20px;text-decoration: none}#wigzo-push-overlay .wigzo-push-branding-text img{display: inline-block;vertical-align: middle;width: auto;height: auto;}#connectDesktop{top: 200px;left: 200px;position: absolute;}#connectMobile{	position: absolute;bottom: 220px;height:100px;width: 100%;}#connectSafari{	position: absolute;top: 200px;height:100px;width: 100%;display: none;}#connectDesktop .connector, #connectMobile .connector, #connectSafari .connector{fill: #ffffff}@media only screen and (min-width: 426px){#wigzo-push-overlay .wigzo-push-info {top: 300px;left: calc(50% / 2);}#connectMobile{display: none;}}@media only screen and (max-width: 425px){#wigzo-push-overlay .wigzo-push-info {width: 100%;bottom: 350px;padding: 0 50px;}#connectDesktop, #connectSafari{display: none;}}</style><div id="wigzo-push-overlay"><div id="connectSafari"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="100%" height="100%" viewBox="0 0 390 270" enable-background="new 0 0 390 270" xml:space="preserve"><g>	<path class="connector" d="M192.743,30.101c0-0.797,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.649,2.171,1.446v7.658		c0,0.798-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.648-2.171-1.446V30.101z"/>	<path class="connector" d="M192.743,3.614c0-1.429,0.963-2.595,2.171-2.595l0,0c1.205,0,2.171,1.166,2.171,2.595v13.761		c0,1.429-0.967,2.595-2.171,2.595l0,0c-1.208,0-2.171-1.166-2.171-2.595V3.614z"/>	<path class="connector" d="M192.743,49.336c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446v7.658		c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V49.336z"/>	<path class="connector" d="M192.743,68.571c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446v7.658		c0,0.797-0.967,1.445-2.171,1.445l0,0c-1.208,0-2.171-0.648-2.171-1.445V68.571z"/>	<path class="connector" d="M192.743,87.806c0-0.797,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.649,2.171,1.446v7.658		c0,0.798-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.648-2.171-1.446V87.806z"/>	<path class="connector" d="M192.743,107.041c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446v7.658		c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V107.041z"/>	<path class="connector" d="M192.743,126.275c0-0.797,0.963-1.445,2.171-1.445l0,0c1.205,0,2.171,0.648,2.171,1.445v7.659		c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V126.275z"/>	<path class="connector" d="M192.743,145.511c0-0.797,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.649,2.171,1.446v7.658		c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V145.511z"/>	<path class="connector" d="M192.743,164.746c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446v7.658		c0,0.797-0.967,1.445-2.171,1.445l0,0c-1.208,0-2.171-0.648-2.171-1.445V164.746z"/>	<path class="connector" id="XMLID_1_" d="M192.743,183.98c0-0.797,0.963-1.445,2.171-1.445l0,0c1.205,0,2.171,0.648,2.171,1.445v7.658		c0,0.798-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.648-2.171-1.446V183.98z"/>	<path class="connector" id="XMLID_2_" d="M192.743,203.216c0-0.797,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.649,2.171,1.446		v7.658c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V203.216z"/>	<path class="connector" id="XMLID_3_" d="M192.743,222.451c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446		v7.658c0,0.797-0.967,1.445-2.171,1.445l0,0c-1.208,0-2.171-0.648-2.171-1.445V222.451z"/>	<path class="connector" id="XMLID_4_" d="M192.743,241.686c0-0.797,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.649,2.171,1.446		v7.658c0,0.798-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.648-2.171-1.446V241.686z"/>	<path class="connector" id="XMLID_5_" d="M192.743,260.921c0-0.798,0.963-1.446,2.171-1.446l0,0c1.205,0,2.171,0.648,2.171,1.446		v7.658c0,0.797-0.967,1.446-2.171,1.446l0,0c-1.208,0-2.171-0.649-2.171-1.446V260.921z"/>	<path class="connector" d="M193.715,1.358c0.674-0.674,1.904-0.538,2.761,0.313l0,0c0.848,0.853,0.988,2.087,0.313,2.761l-6.454,6.454		c-0.674,0.67-1.908,0.534-2.761-0.31l0,0c-0.853-0.86-0.988-2.09-0.313-2.765L193.715,1.358z"/>	<path class="connector" d="M193.248,4.433c-0.67-0.674-0.538-1.903,0.314-2.761l0,0c0.852-0.848,2.086-0.983,2.76-0.313l6.48,6.483		c0.674,0.671,0.534,1.904-0.314,2.757l0,0c-0.856,0.853-2.086,0.983-2.761,0.313L193.248,4.433z"/>	<path class="connector" d="M181.701,13.329c0.564-0.563,1.705-0.339,2.562,0.514l0,0c0.848,0.853,1.077,1.997,0.513,2.562		l-5.415,5.415c-0.563,0.56-1.709,0.335-2.562-0.514l0,0c-0.853-0.856-1.077-1.997-0.513-2.561L181.701,13.329z"/>	<path class="connector" d="M171.57,23.702c0.564-0.564,1.705-0.34,2.562,0.513l0,0c0.848,0.853,1.077,1.997,0.513,2.562l-5.415,5.415		c-0.563,0.56-1.709,0.335-2.561-0.513l0,0c-0.853-0.857-1.077-1.998-0.514-2.562L171.57,23.702z"/>	<path class="connector" d="M207.454,12.062c-0.564-0.564-1.705-0.339-2.562,0.513l0,0c-0.848,0.853-1.077,1.998-0.513,2.562		l5.415,5.415c0.563,0.56,1.709,0.335,2.562-0.513l0,0c0.853-0.856,1.077-1.997,0.513-2.562L207.454,12.062z"/>	<path class="connector" d="M217.585,22.434c-0.564-0.563-1.705-0.339-2.562,0.514l0,0c-0.848,0.853-1.077,1.997-0.513,2.561		l5.415,5.416c0.563,0.56,1.709,0.335,2.561-0.514l0,0c0.853-0.856,1.077-1.997,0.514-2.562L217.585,22.434z"/></g></svg></div><div id="connectDesktop"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="390px" height="270px" viewBox="0 0 390 270" enable-background="new 0 0 390 270" xml:space="preserve"><g><g><g><path class="connector" d="M151.066,70.255c0.132-0.412,0.572-0.64,0.984-0.508l0,0c0.411,0.131,0.639,0.571,0.509,0.983l-1.256,3.934c-0.13,0.412-0.57,0.64-0.982,0.509l0,0c-0.412-0.132-0.64-0.573-0.508-0.984L151.066,70.255z"/><path class="connector" d="M148.76,77.365c0.131-0.411,0.571-0.64,0.983-0.508l0,0c0.41,0.132,0.639,0.572,0.509,0.984l-1.254,3.933c-0.131,0.412-0.571,0.639-0.984,0.509l0,0c-0.412-0.132-0.638-0.572-0.508-0.984L148.76,77.365z"/><path class="connector" d="M146.378,85.005c0.131-0.411,0.571-0.638,0.983-0.507l0,0c0.411,0.131,0.64,0.571,0.508,0.983l-1.253,3.934c-0.131,0.411-0.572,0.638-0.985,0.508l0,0c-0.411-0.132-0.637-0.573-0.507-0.984L146.378,85.005z"/></g><g><path class="connector" d="M152.121,69.465c-0.41-0.132-0.851,0.096-0.98,0.508l0,0c-0.133,0.412,0.097,0.852,0.508,0.983l3.933,1.254c0.411,0.131,0.852-0.097,0.982-0.508l0,0c0.132-0.412-0.097-0.852-0.509-0.983L152.121,69.465z"/><path class="connector" d="M159.254,71.699c-0.411-0.13-0.853,0.097-0.983,0.509l0,0c-0.13,0.411,0.096,0.852,0.509,0.984l3.934,1.253c0.411,0.131,0.851-0.096,0.982-0.508l0,0c0.131-0.412-0.097-0.852-0.508-0.983L159.254,71.699z"/><path class="connector" d="M166.864,74.179c-0.411-0.13-0.851,0.096-0.984,0.509l0,0c-0.131,0.412,0.097,0.852,0.509,0.983l3.934,1.255c0.411,0.13,0.852-0.097,0.984-0.509l0,0c0.13-0.412-0.097-0.853-0.509-0.983L166.864,74.179z"/></g></g><path class="connector" d="M244.293,132.355c0.423,0.09,0.692,0.505,0.602,0.929l0,0c-0.089,0.422-0.505,0.691-0.929,0.602l-4.036-0.862c-0.424-0.09-0.693-0.505-0.603-0.928l0,0c0.09-0.423,0.507-0.693,0.927-0.602L244.293,132.355z"/><path class="connector" d="M235.744,130.559c0.42,0.106,0.672,0.533,0.564,0.952l0,0c-0.108,0.418-0.533,0.672-0.952,0.564l-4-1.022c-0.42-0.107-0.672-0.533-0.564-0.952l0,0c0.105-0.419,0.534-0.673,0.952-0.565L235.744,130.559z"/><path class="connector" d="M227.292,128.285c0.418,0.112,0.665,0.541,0.552,0.959l0,0c-0.11,0.418-0.538,0.666-0.956,0.555l-3.989-1.067c-0.417-0.112-0.666-0.54-0.555-0.958l0,0c0.11-0.417,0.542-0.666,0.96-0.554L227.292,128.285z"/><path class="connector" d="M218.709,125.866c0.41,0.134,0.633,0.576,0.499,0.988l0,0c-0.135,0.411-0.578,0.634-0.989,0.5l-3.922-1.288c-0.411-0.135-0.634-0.577-0.5-0.987l0,0c0.137-0.411,0.578-0.635,0.988-0.5L218.709,125.866z"/><path class="connector" d="M210.402,122.663c0.394,0.178,0.567,0.641,0.391,1.036l0,0c-0.177,0.394-0.642,0.569-1.034,0.391l-3.764-1.699c-0.395-0.178-0.569-0.642-0.392-1.036l0,0c0.179-0.395,0.643-0.569,1.035-0.391L210.402,122.663z"/><path class="connector" d="M202.252,118.653c0.383,0.202,0.53,0.675,0.329,1.058l0,0c-0.2,0.382-0.675,0.529-1.058,0.328l-3.654-1.922c-0.382-0.2-0.529-0.673-0.328-1.056l0,0c0.201-0.384,0.676-0.53,1.058-0.329L202.252,118.653z"/><path class="connector" d="M193.958,114.049c0.36,0.241,0.455,0.727,0.214,1.086l0,0c-0.239,0.36-0.725,0.456-1.085,0.216l-3.431-2.296c-0.358-0.24-0.456-0.726-0.217-1.085l0,0c0.241-0.36,0.728-0.457,1.087-0.216L193.958,114.049z"/><path class="connector" d="M186.417,108.435c0.352,0.25,0.436,0.738,0.184,1.092l0,0c-0.25,0.353-0.738,0.436-1.092,0.186l-3.366-2.389c-0.355-0.25-0.437-0.737-0.186-1.091l0,0c0.248-0.354,0.738-0.436,1.092-0.186L186.417,108.435z"/><path class="connector" d="M179.056,102.776c0.314,0.295,0.329,0.79,0.033,1.106l0,0c-0.294,0.315-0.791,0.331-1.105,0.036l-3.011-2.827c-0.314-0.295-0.331-0.791-0.035-1.106l0,0c0.296-0.315,0.792-0.331,1.105-0.035L179.056,102.776z"/><path class="connector" d="M171.865,96.037c0.285,0.325,0.249,0.82-0.076,1.103l0,0c-0.326,0.286-0.819,0.251-1.103-0.076l-2.714-3.113c-0.283-0.326-0.251-0.82,0.076-1.104l0,0c0.326-0.285,0.821-0.25,1.104,0.076L171.865,96.037z"/><path class="connector" d="M165.865,89.295c0.257,0.348,0.185,0.837-0.163,1.096l0,0c-0.345,0.259-0.836,0.187-1.095-0.161l-2.464-3.312c-0.259-0.347-0.187-0.837,0.16-1.095l0,0c0.346-0.259,0.838-0.187,1.095,0.161L165.865,89.295z"/><path class="connector" d="M160.588,82.634c0.258,0.348,0.183,0.837-0.166,1.094l0,0c-0.347,0.256-0.837,0.181-1.094-0.167l-2.447-3.326c-0.256-0.348-0.182-0.838,0.166-1.094l0,0c0.349-0.257,0.839-0.183,1.095,0.167L160.588,82.634z"/><path class="connector" d="M156.029,75.792c0.241,0.358,0.145,0.844-0.216,1.085l0,0c-0.356,0.242-0.845,0.146-1.084-0.213l-2.302-3.428c-0.242-0.359-0.146-0.845,0.213-1.085l0,0c0.357-0.243,0.845-0.146,1.085,0.213L156.029,75.792z"/></g></svg></div><div class="wigzo-push-info"><div class="wigzo-push-title">$PUSH_TITLE$</div><div class="wigzo-push-desc">$PUSH_SUBTITLE$</div>		<a id="wigzo-push-branding" href=$PUSH_BRANDING_URL$ target="_blank" class="wigzo-push-branding-text">Powered by <img src="$POWEREDBYLOGO$"></a></div><div id="connectMobile"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="100%" height="100%" viewBox="0 0 390 270" enable-background="new 0 0 390 270" xml:space="preserve"><g>	<path class="connector" d="M196.412,240.855c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446v-7.658		c0-0.798,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.648,2.171,1.446V240.855z"/>	<path class="connector" d="M196.412,267.342c0,1.429-0.963,2.595-2.171,2.595l0,0c-1.205,0-2.171-1.166-2.171-2.595v-13.761		c0-1.429,0.967-2.595,2.171-2.595l0,0c1.208,0,2.171,1.166,2.171,2.595V267.342z"/>	<path class="connector" d="M196.412,221.62c0,0.798-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.648-2.171-1.446v-7.658		c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V221.62z"/>	<path class="connector" d="M196.412,202.385c0,0.798-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.648-2.171-1.446v-7.658		c0-0.797,0.967-1.445,2.171-1.445l0,0c1.208,0,2.171,0.648,2.171,1.445V202.385z"/>	<path class="connector" d="M196.412,183.15c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446v-7.658		c0-0.798,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.648,2.171,1.446V183.15z"/>	<path class="connector" d="M196.412,163.915c0,0.798-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.648-2.171-1.446v-7.658		c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V163.915z"/>	<path class="connector" d="M196.412,144.681c0,0.797-0.963,1.445-2.171,1.445l0,0c-1.205,0-2.171-0.648-2.171-1.445v-7.659		c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V144.681z"/>	<path class="connector" d="M196.412,125.445c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446v-7.659		c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V125.445z"/>	<path class="connector" d="M196.412,106.21c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446v-7.658		c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.648,2.171,1.446V106.21z"/>	<path class="connector" id="XMLID_1_" d="M196.412,86.975c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.648-2.171-1.446		v-7.658c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V86.975z"/>	<path class="connector" id="XMLID_2_" d="M196.412,67.74c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446		v-7.659c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V67.74z"/>	<path class="connector" id="XMLID_3_" d="M196.412,48.505c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446		v-7.658c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.648,2.171,1.446V48.505z"/>	<path class="connector" id="XMLID_4_" d="M196.412,29.27c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.649-2.171-1.446		v-7.658c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V29.27z"/>	<path class="connector" id="XMLID_5_" d="M196.412,10.035c0,0.797-0.963,1.446-2.171,1.446l0,0c-1.205,0-2.171-0.648-2.171-1.446		V2.376c0-0.797,0.967-1.446,2.171-1.446l0,0c1.208,0,2.171,0.649,2.171,1.446V10.035z"/>	<path class="connector" d="M195.44,269.598c-0.674,0.674-1.904,0.538-2.76-0.313l0,0c-0.848-0.853-0.988-2.087-0.314-2.761		l6.454-6.454c0.674-0.67,1.908-0.534,2.761,0.31l0,0c0.853,0.86,0.988,2.09,0.313,2.765L195.44,269.598z"/>	<path class="connector" d="M195.907,266.523c0.67,0.674,0.538,1.903-0.314,2.761l0,0c-0.852,0.848-2.086,0.983-2.76,0.313l-6.48-6.483		c-0.674-0.671-0.534-1.904,0.314-2.757l0,0c0.856-0.853,2.086-0.983,2.761-0.313L195.907,266.523z"/>	<path class="connector" d="M207.454,257.627c-0.564,0.563-1.705,0.339-2.562-0.514l0,0c-0.848-0.853-1.077-1.997-0.513-2.562		l5.415-5.415c0.563-0.56,1.709-0.335,2.562,0.514l0,0c0.853,0.856,1.077,1.997,0.513,2.561L207.454,257.627z"/>	<path class="connector" d="M217.585,247.254c-0.564,0.564-1.705,0.34-2.562-0.513l0,0c-0.848-0.853-1.077-1.997-0.513-2.562		l5.415-5.415c0.563-0.56,1.709-0.335,2.561,0.513l0,0c0.853,0.857,1.077,1.998,0.514,2.562L217.585,247.254z"/>	<path class="connector" d="M181.701,258.895c0.564,0.564,1.705,0.339,2.562-0.513l0,0c0.848-0.853,1.077-1.998,0.513-2.562		l-5.416-5.415c-0.563-0.56-1.708-0.335-2.561,0.513l0,0c-0.853,0.856-1.077,1.997-0.513,2.562L181.701,258.895z"/>	<path class="connector" d="M171.571,248.522c0.564,0.563,1.705,0.339,2.561-0.514l0,0c0.848-0.853,1.077-1.997,0.513-2.561		l-5.415-5.416c-0.564-0.56-1.709-0.335-2.561,0.514l0,0c-0.853,0.856-1.077,1.997-0.513,2.562L171.571,248.522z"/></g></svg></div></div></div>';
    return a;
}(window.wigzo || {}));
window.wigzo = (function(d) {
    d.initLiveChat = function() {
        console.log("Initialising Live Chat", d.IDENTIFIER);
        b();
    };

    function b() {
        var e = document.createElement("div");
        e.setAttribute("id", "live-chat-iframe-container");
        e.setAttribute("style", "position: fixed; outline: 0 !important; border: 0 !important; z-index: 2147483000!important; margin: 0 !important; padding: 0 !important; width: 100%; height: 100%;right:0;bottom:0;max-width:0;max-height:0");
        document.body.appendChild(e);
        c(e);
    }

    function c(f) {
        let iframeSrc = d.APP + "/conversation/widgetmarkup/" + d.IDENTIFIER + "/" + d.ORGANIZATIONID;
        var e = document.createElement("iframe");
        e.setAttribute("src", iframeSrc);
        e.setAttribute("id", "live-chat-iframe");
        e.setAttribute("class", "WigzoOnsiteNotificationIframe");
        e.setAttribute("style", "position: absolute; top:0; left:0; right:0; bottom:0; width: 100% !important; height: 100% !important; outline: 0 !important; border: 0 !important; z-index: 2147483000!important; margin: 0 !important; padding: 0 !important;");
        e.setAttribute("scrolling", "no");
        f.appendChild(e);
        d.initialiseListener();
    }

    function a(e) {
        if (e.position === "left") {
            d.$("#live-chat-iframe-container").css({
                left: "0",
                right: "unset"
            });
        } else {
            d.$("#live-chat-iframe-container").css({
                right: "0",
                left: "unset"
            });
        }
        if (!!e.isChatWindowOpen && window.innerWidth <= 430) {
            d.$("#live-chat-iframe-container").css({
                "max-height": "100%",
                "max-width": "100%"
            });
        } else {
            d.$("#live-chat-iframe-container").css({
                "max-height": e.height,
                "max-width": e.width
            });
        }
    }
    d.listenerReference = function(e) {
        console.log(e);
        !!(e.data.type === "wl-chat-notif-dimensions") && (a(e.data.holderDimension));
        d.hasGlobalMessageListener = true;
    };
    d.initialiseListener = function(f, e) {
        if (d.hasGlobalMessageListener) {
            if (window.removeEventListener) {
                window.removeEventListener("message", d.listenerReference);
            } else {
                if (window.detachEvent) {
                    window.detachEvent("message", d.listenerReference);
                }
            }
        }
        window.addEventListener("message", d.listenerReference, false);
    };
    return d;
}(window.wigzo || {}));
window.wigzo = (function(a) {
    a.loadFirebaseDependenciesAndSetup = function() {
        const b = "https://dixithasija.github.io/engageLink/dist/engage-link.js";
        a.loadScript(b, "engage-link", function(d, c) {
            if (d) {
                console.error(d);
            } else {
                window.wigzo_en.setupFirebase();
            }
        });
    };
    return a;
})(window.wigzo || {});
window.wigzo = (function(g) {
    function d(l, n, m) {
        var j = document.createElement("script");
        j.src = l;
        j.id = n;
        j.onload = function() {
            if (m) {
                m(null, j);
            }
        };
        j.onerror = function() {
            if (m) {
                m(new Error("Failed to load script " + l));
            }
        };
        document.head.appendChild(j);
    }
    var f = false;
    if (g.ORGANIZATIONID != "y1S5oflcTkuFIdOrVGkPSw") {
        d("https://sr-cdn.shiprocket.in/sr-promise/static/uc.js?channel_id=1", "uc_shiprocket", function(l, j) {
            if (l) {
                console.error(l);
                f = false;
            } else {
                console.log("Script " + j.id + " loaded successfully.");
                f = true;
            }
        });
    }
    var h = navigator.userAgent.toLowerCase();
    var c = (h.indexOf("msie") != -1) ? parseInt(h.split("msie")[1]) : false;
    if ((c && c < 10) || g.isWigzoScriptDisabled()) {
        console.info("Wigzo is Disabled or IE<10 - Aborting.");
        var e = function() {};
        var b = {};
        b.track = b.identify = b.index = e;
        return b;
    }
    var a = document.documentElement.lang;
    if (document.documentElement.lang === "" || document.documentElement.lang === "zxx" || document.documentElement.lang === "null") {
        a = "en";
    }
    g.COOKIE_NAME = "WIGZO_LEARNER_ID";
    g.LAST_USER_COOKIENAME = "WIGZO_USERID";
    g.DAILY_ACTIVE_COOKIENAME = "WIGZO_DAILYACTIVE";
    g.CART_UPDATED = false;
    g.IDENTIFIER = null;
    g._USER_TYPE = "returning";
    if (!g.hasOwnProperty("FEATURES")) {
        g.FEATURES = {
            OnsitePushNotification: false,
            PRODUCTINDEXING: true,
            SITEINDEXING: true
        };
    }
    if (!g.FEATURES.hasOwnProperty("OnsitePushNotification")) {
        g.FEATURES["OnsitePushNotification"] = false;
    }
    if (!g.FEATURES.hasOwnProperty("BrowserPushNotification")) {
        g.FEATURES["BrowserPushNotification"] = true;
    }
    if (!g.FEATURES.hasOwnProperty("ExitIntent")) {
        g.FEATURES["ExitIntent"] = false;
    }
    if (!g.FEATURES.hasOwnProperty("EventsTracking")) {
        g.FEATURES["EventsTracking"] = false;
    }
    if (!g.FEATURES.hasOwnProperty("SmartBlock")) {
        g.FEATURES["SmartBlock"] = false;
    }
    if (!g.FEATURES.hasOwnProperty("PRODUCTINDEXING")) {
        g.FEATURES["PRODUCTINDEXING"] = true;
    }
    if (!g.FEATURES.hasOwnProperty("SITEINDEXING")) {
        g.FEATURES["SITEINDEXING"] = true;
    }
    if (!g.hasOwnProperty("OPTIONS")) {
        g.OPTIONS = {
            PANELFREE: true,
            NOTIFBELL: false
        };
    }
    if (!g.hasOwnProperty("SERVICES")) {
        g.SERVICES = "https://services.wigzopush.com";
    }
    if (!g.hasOwnProperty("RAY")) {
        g.RAY = "https://ray.wigzopush.com";
    }
    if (!g.hasOwnProperty("APP")) {
        g.APP = "https://tracker.wigzopush.com";
    }
    if (!g.hasOwnProperty("CLOUDFLARE")) {
        g.CLOUDFLARE = "https://app.wigzo.com";
    }
    if (!g.hasOwnProperty("FORCE_CANONICAL_URL")) {
        g.FORCE_CANONICAL_URL = true;
    }
    g.helpers = {
        hashchange: function(j) {
            g.consoleDebug("hash has changed");
            if (g.helpers.getSPA() == "true") {
                if (wigzo.$("#wigzo-onsite-notif-iframe-div").length > 0) {
                    wigzo.$("#wigzo-onsite-notif-iframe-div").remove();
                }
                g.exitIntent.initExitIntentMouseHandler(g.IDENTIFIER, "returning");
                g.localStorageEventsGC();
                g.helpers.createEvent("view", {
                    pageuuid: "",
                    eventval: location.href.toString(),
                    source: "web"
                });
            }
        },
        categoryPageHandler: function(j) {
            if (j.includes("collections") && g.isShopifyStore() == true && !j.includes("products")) {
                g.helpers.createEvent("categoryview", {
                    pageuuid: "",
                    eventval: location.href.toString(),
                    source: "web"
                });
            }
        },
        productPageHandler: function(l) {
            if (l.includes("products") && g.isShopifyStore() == true) {
                var j = wigzo.$(document).find("link[rel=canonical]").attr("href");
                if (!j) {
                    j = location.href.toString();
                }
                g.helpers.createEvent("productview", {
                    pageuuid: "",
                    eventval: j,
                    source: "web"
                });
            }
        },
        setCurrentURL: function() {
            localStorage.setItem("WIGZO_CURRENT_URL", location.href);
        },
        handleSpa: function() {
            if (g.IS_SPA && localStorage.hasOwnProperty("WIGZO_CURRENT_URL")) {
                document.body.addEventListener("click", function() {
                    setTimeout(function() {
                        var j = localStorage.getItem("WIGZO_CURRENT_URL");
                        if (j != location.href) {
                            if (g.$("#wigzo-onsite-notif-iframe-div").length > 0) {
                                g.$("#wigzo-onsite-notif-iframe-div").remove();
                            }
                            g.helpers.createEvent("view", {
                                pageuuid: "",
                                eventval: location.href.toString(),
                                source: "web"
                            });
                            g.helpers.setCurrentURL();
                        }
                    }, 1000);
                }, true);
            }
        },
        setPageLoad: function() {
            if (localStorage.hasOwnProperty("PAGE_LOAD")) {
                localStorage.setItem("PAGE_LOAD", 2);
            }
            return;
        },
        forkTemporaryUser: function(m, j, p) {
            var o = {};
            o._ = new Date();
            if (g.trackDailyActiveUser()) {
                o.is_active = "true";
            }
            if (!o.hasOwnProperty("lang")) {
                o.lang = wigzo.$("html").attr("lang") || "en";
            }
            var n = localStorage.getItem("_uc_session_v1");
            o.sc_mid = !!n ? JSON.parse(n).u_mid : null;
            var l = g.APP + "/jserver/v1/user/fork/" + g.ORGANIZATIONID + "/" + m + "?" + wigzo.$.param(o);
            g.jsonp(l, function(q) {
                if (!((!!q.code && q.code == 1200))) {
                    g.error("Error while forking a user, cannot continue, gracefully quitting...");
                    g.consoleDebug(q);
                    return;
                }
                g.$.cookie(g.COOKIE_NAME, m, {
                    expires: 80 * 365,
                    path: "/"
                });
                if (!!j) {
                    j.apply(g);
                }
            }, function(q) {
                g.consoleDebug("Error while forking a user, cannot continue, gracefully quitting...");
                if (!!p) {
                    p.apply(g);
                }
            });
        },
        createEvent: function(q, m, w, s) {
            if (g.IDENTIFIER == null) {
                g.getOrCreateCookie(function(z) {
                    g.IDENTIFIER = z;
                });
            }
            if (!g.FEATURES.EventsTracking) {
                g.log("EventsTracking feature is either not in plan or disabled.");
                return;
            }
            if (g.ORGANIZATIONID != "y1S5oflcTkuFIdOrVGkPSw") {
                if (!!f && q == "productview" && !!window.ShopifyAnalytics && !!window.ShopifyAnalytics.meta.product) {
                    var y = (window.ShopifyAnalytics && window.ShopifyAnalytics.meta) || {};
                    var v = y.product || {};
                    var r = v.variants || [];
                    var n = r[0] || {};
                    var u = {
                        name: v.title || "Unknown Product",
                        mrp: n.price || "0.00",
                        selling_price: n.price || "0.00",
                        product_id: v.id || "",
                        variant_id: n.id || "",
                        qty: 1,
                        category: v.type || "Unknown Category",
                        out_of_stock: 0,
                        image: "https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/10/RailANC_Black_Hero02_R02_Wireless_5.jpg",
                        description: "",
                        referrer: "organic"
                    };
                    !!f && ua.event("pdp_view", u);
                }
                if (!!f && q == "view") {
                    var u = {
                        url: m.eventval,
                        page_type: !!window.ShopifyAnalytics && window.ShopifyAnalytics.meta.page.pageType || "",
                        referrer: "organic"
                    };
                    !!f && ua.event("page_view", u);
                }
            }
            if (!g.CART_UPDATED && !!localStorage.getItem("wigzocartid")) {
                m.cart = localStorage.getItem("wigzocartid");
            }
            m.e = g.IDENTIFIER;
            m._ = new Date();
            m.eventCategory = m.eventCategory || "EXTERNAL";
            m.referrer = !document.referrer ? "organic" : document.referrer;
            if (!m.hasOwnProperty("eventCategory")) {}
            if (!m.hasOwnProperty("eventval") || !m.eventval) {
                m.eventval = location.href.toString();
            }
            if (!!g.getKey("WIGZO_PUSH_REFERRER")) {
                m.pushCampaignId = g.getKey("WIGZO_PUSH_REFERRER");
            }
            if (!!g.getKey("WIGZO_REFERRED_BY")) {
                m.referrer = g.getKey("WIGZO_REFERRED_BY");
            } else {
                m.referrer = !document.referrer ? "organic" : document.referrer;
                g.setKey("WIGZO_REFERRED_BY", !document.referrer ? "organic" : document.referrer, 1800);
            }
            if (!!g.getKey("WIGZO_SALES_SOURCE") && g.getKey("WIGZO_SALES_SOURCE") === "BROWSERPUSH") {
                m.pushreferrerid = g.getKey("WIGZO_SALES_BROWSERPUSH");
            }
            if (!!g.getKey("WIGZO_SALES_SOURCE") && g.getKey("WIGZO_SALES_SOURCE") === "EMAIL") {
                m.emailreferrerid = g.getKey("WIGZO_SALES_EMAIL");
            }
            if (!!g.getKey("WIGZO_SALES_SOURCE") && g.getKey("WIGZO_SALES_SOURCE") === "ONSITEPUSH") {
                m.onsitepushreferrerid = g.getKey("WIGZO_SALES_ONSITEPUSH");
            }
            if (!!g.getKey("WIGZO_SALES_SOURCE") && g.getKey("WIGZO_SALES_SOURCE") === "WIGZOFBM") {
                m.fbmreferrerid = g.getKey("WIGZO_SALES_FBM");
            }
            if (!m.hasOwnProperty("lang")) {
                m.lang = a;
            }
            var j = g.APP + "/learn/" + g.ORGANIZATIONID + "/" + q + "/" + g.IDENTIFIER;
            var o = wigzo.$("meta[name=author]").attr("content");
            var t = wigzo.$('meta[property="og:type"]').attr("content");
            if (o === "donotparse" || t === "category" || t === "object" || t === "website") {
                m.wigzo_home = o;
            }
            if (g.trackDailyActiveUser()) {
                m.is_active = true;
            }
            var l = wigzo.$(document).find("link[rel=canonical]").attr("href");
            if (!!l) {
                m.u = l;
            }
            g.consoleDebug(j);
            g.consoleDebug(m);
            var x = localStorage.hasOwnProperty("WIGZO_EVENTS") ? JSON.parse(localStorage.getItem("WIGZO_EVENTS")) : {};
            x[q] = {
                created: new Date().getTime()
            };
            localStorage.setItem("WIGZO_EVENTS", JSON.stringify(x));
            var p = localStorage.getItem("_uc_session_v1");
            m.sc_mid = !!p ? JSON.parse(p).u_mid : null;
            g.post(j, m, function(z) {
                if (!!z && !!z.update_cart) {
                    g.$.cookie(g.COOKIE_NAME, z.update_cart, {
                        expires: 80 * 365,
                        path: "/"
                    });
                    g.setKey("WIGZO_PERSIST_COOKIE", z.update_cart);
                    g.CART_UPDATED = true;
                }
                if (!!w) {
                    w(z);
                }
            }, function(z) {
                if (!!s) {
                    s(z);
                }
            });
            g.exitIntent.checkAndInitializeExitIntent(g.IDENTIFIER, g._USER_TYPE);
        },
        readShopifyCartId: function(j) {
            if (g.isShopifyStore() == true) {
                var l = g.$.cookie("cart");
                if (!!l && l !== localStorage.getItem("wigzocartid")) {
                    localStorage.setItem("wigzocartid", l, 24 * 60 * 60);
                    var m = j != null ? j : document.querySelector("link[rel='canonical']").getAttribute("href");
                    var o = g.$.cookie("cart");
                    var n = {
                        plugin: "shopify",
                        canonicalUrl: m,
                        cartId: o
                    };
                    wigzo("track", "mapshopifyuser", n);
                }
                return l;
            }
        },
        viewProduct: function(l) {
            var j = wigzo.$.cookie("PAGE_UUID");
            g.helpers.categoryPageHandler(location.href);
            g.helpers.productPageHandler(location.href);
            g.helpers.readShopifyCartId(l);
            g.helpers.createEvent("view", {
                pageuuid: j,
                eventval: l,
                source: "web",
                u: l
            });
        },
        checkAgainstUrlCriteria: function(p) {
            var o = document.location.href;
            var q = false;
            if (p.choice == "ALL") {
                q = true;
            } else {
                if (p.choice === "UTM") {
                    q = true;
                    var j = Object.keys(p.utmParameters);
                    for (var n = 0; n < j.length; n++) {
                        var m = g.getQueryStringParams(j[n]);
                        if (!m || m !== p.utmParameters[j[n]]) {
                            q = false;
                            break;
                        }
                    }
                } else {
                    if (p.choice == "SPECIFIC") {
                        for (var n = 0; n < p.criteria.length; n++) {
                            var r = p.criteria[n];
                            var l = false;
                            if (r.operator === "equals") {
                                l = (r.value === o);
                            } else {
                                if (r.operator === "notequals") {
                                    l = !(r.value === o);
                                } else {
                                    if (r.operator === "contains") {
                                        l = (o.indexOf(r.value) >= 0);
                                    } else {
                                        if (r.operator === "doesnotcontain") {
                                            l = (o.indexOf(r.value) < 0);
                                        }
                                    }
                                }
                            }
                            q = l;
                            if (p.globalOperator === "AND" && !l) {
                                break;
                            } else {
                                if (p.globalOperator === "OR" && l) {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return q;
        },
        checkAgainstLocationCriteria: function(o, p) {
            var m = g.state_code;
            var l = false;
            var n = p.value;
            var j;
            if (p.hasOwnProperty("value2")) {
                j = p.value2;
            }
            if (p.operator === "in") {
                l = (n.indexOf(o) >= 0);
                if (!!j && j.hasOwnProperty(o)) {
                    l = (j[o].indexOf(m) >= 0);
                }
            } else {
                if (p.operator === "notin") {
                    l = (n.indexOf(o) < 0);
                    if (!l && !!j && j.hasOwnProperty(o)) {
                        l = (j[o].indexOf(m) < 0);
                    }
                }
            }
            return l;
        },
        getDeviceType: function() {
            var j = "desktop";
            if (screen.width > 768) {
                j = "desktop";
            }
            if (screen.width <= 425) {
                j = "mobile";
            }
            if (screen.width > 425 && screen.width <= 768) {
                j = "tablet";
            }
            return j;
        },
        detectPrivateMode: function(j) {
            var m, l = j.bind(null, true),
                o = j.bind(null, false);

            function n() {
                try {
                    localStorage.length ? o() : (localStorage.x = 1, localStorage.removeItem("x"), o());
                } catch (p) {
                    navigator.cookieEnabled ? l() : o();
                }
            }
            window.webkitRequestFileSystem ? webkitRequestFileSystem(0, 0, o, l) : "MozAppearance" in document.documentElement.style ? (m = indexedDB.open("test"), m.onerror = l, m.onsuccess = o) : /constructor/i.test(window.HTMLElement) || window.safari ? n() : !window.indexedDB && (window.PointerEvent || window.MSPointerEvent) ? l() : o();
        }
    };
    g.continueBuildIndex = function() {
        g.helpers.handleSpa();
        var o = window.location.href.split("?")[1];
        var l = g.APP + "/sms/track/open?orgtoken=" + g.ORGANIZATIONID + "&";
        if (typeof(o) != "undefined" && (o.includes("w_sms") || o.includes("w_email") || o.includes("w_fb") || o.includes("w_exit") || o.includes("w_push") || o.includes("w_onsite"))) {
            l = l + o;
            g.get(l, function(p) {
                console.log("SMS trackopen");
            });
        }
        if (typeof(o) != "undefined" && (o.includes("sms_campaign"))) {
            var n = new URLSearchParams(o).getAll("campaignid").toString();
            var j = parseInt(new URLSearchParams(o).getAll("p").toString(), 16);
            g.track("smsclicked", n);
            if (null != j || !j.isBlankString(j)) {
                g.identify({
                    phone: j.toString()
                });
            }
        }
        var m = wigzo.$(document).find("link[rel=canonical]").attr("href");
        if (!m) {
            if (g.FORCE_CANONICAL_URL == true) {
                g.consoleDebug("Wigzo: Non canonicalized URL, cannot build index for this page, gracefully quitting...");
                g.track("view", location.href.toString());
                return;
            }
            m = window.location.toString();
        }
        g.helpers.viewProduct(m);
    };
    g.localStorageEventsGC = function() {
        var l = 20 * 60 * 1000;
        if (localStorage.hasOwnProperty("WIGZO_EVENTS")) {
            var p = false;
            var o = JSON.parse(localStorage.WIGZO_EVENTS);
            var r = Object.keys(o);
            for (var n = 0; n < r.length; n++) {
                var j = r[n];
                var q = o[j].created;
                var m = new Date().getTime();
                if ((q + l) <= m) {
                    p = true;
                    delete o[j];
                }
            }
            if (p) {
                localStorage.setItem("WIGZO_EVENTS", JSON.stringify(o));
            }
        }
    };
    g.isShopifyStore = function() {
        return g.PLUGIN == "SHOPIFY" || window.hasOwnProperty("Shopify");
    };
    g.isSallaStore = function() {
        return g.PLUGIN == "SHOPIFY" || window.hasOwnProperty("Salla");
    };
    g.isSallaStoreProductPage = function(j) {
        pageUrlId = j.split("/")[j.split("/").length - 1];
        if (typeof(pageUrlId) != "undefined" && pageUrlId.startsWith("p")) {
            return true;
        } else {
            return false;
        }
    };
    g.isSallaStoreCategoryPage = function(j) {
        pageUrlId = j.split("/")[j.split("/").length - 1];
        if (typeof(pageUrlId) != "undefined" && pageUrlId.startsWith("c")) {
            return true;
        } else {
            return false;
        }
    };
    g.main = function() {
        if (g.IDENTIFIER == null) {
            g.getOrCreateCookie(function(r) {
                g.IDENTIFIER = r;
            });
        }
        g.helpers.setCurrentURL();
        g.localStorageEventsGC();
        if (!!g.FEATURES.PRODUCTINDEXING) {
            g.continueBuildIndex();
            var j = wigzo.$("." + g.ENTITY_VIEW);
            for (var o = 0; o < j.length; o++) {
                g.showBlock(j[o]);
            }
        }
        if (!!g.FEATURES.SITEINDEXING) {
            g.isNewOrReturningUser(g._USER_TYPE, g.IDENTIFIER);
            if (document.webkitVisibilityState == "prerender" || document.visibilityState == "prerender" || document.visibilityState[0] == "prerender") {
                g.consoleDebug("No pre-rendering.......");
            } else {
                g.loadPixel(g.IDENTIFIER, g._USER_TYPE);
                g.mapUserInfo(g.IDENTIFIER);
            }
        }
        if (g.AUTO_LOADNOTIFICATIONS) {
            wigzo.notificationSystemStart();
        } else {
            g.log("Not loading Notification Sub-System because AUTO_LOADNOTIFICATIONS is false");
        }
        if (g.ORGANIZATIONID === "BbHz6rEKQqy0HN6MjZxB7Q" || g.ORGANIZATIONID === "Z5jLTH6IQ_Khdh7JTl3YYg" || g.ORGANIZATIONID === "ixsA_0VyS1GEmAJEW4j3pQ") {
            g.loadFirebaseDependenciesAndSetup();
        }
        if (!!g.FEATURES.OnsitePushNotification) {
            var n = function(r) {
                if (!!g.FEATURES.OnsitePushNotification) {
                    wigzo.onsitePush.showNotification(r);
                }
            };
            var m = function(r) {
                g.consoleDebug("User joined-" + r.id);
            };
            var p = function() {
                g.consoleDebug("User disconnected.");
            };
            var q = wigzo.onsitePush.init(g.RAY, g.ORGANIZATIONID, g.IDENTIFIER, n, m, p);
            g.consoleDebug("Notification Center", q);
        }
        if (g.PLUGIN == "SHOPIFY" || window.hasOwnProperty("Shopify")) {
            if (!localStorage.getItem("wigzocartid")) {
                g.checkCartCookie();
            }
            if (!!window.document.querySelector("form[action='/account/login']")) {
                g.$("form[action='/account/login']").submit(function(t) {
                    var s = g.$("[name='customer[email]']")[0];
                    var r = {};
                    if (s) {
                        r.email = s.value;
                    }
                    if (!!r.email) {
                        g.identify(r, ["email"], function(u) {
                            console.log("User Mapped at login");
                        });
                    }
                });
            }
            if (!!window.document.querySelector("form[action='/account']")) {
                g.$("form[action='/account']").submit(function() {
                    var s = g.$("[name='customer[email]']")[0];
                    var t = g.$("[name='customer[first_name]']")[0] + " " + g.$("[name='customer[last_name]']")[0];
                    var r = {};
                    if (s) {
                        r.email = s.value;
                    }
                    if (t) {
                        r.fullName = t.value;
                    }
                    r.phone = g.$("[name='customer[phone]']")[0];
                    if (!!r.email || !!r.fullName) {
                        g.identify(r, ["email", "fullName"], function(u) {
                            console.log("User Mapped at registration");
                        });
                    }
                });
            }
        }
        if (g.PLUGIN == "Salla" || window.hasOwnProperty("Salla")) {
            let wigzoCurrentPagePath = window.location.pathname;
            if (g.isSallaStoreCategoryPage(wigzoCurrentPagePath)) {
                g.sallaTrackEventCategoryView(wigzoCurrentPagePath);
            }
            if (g.isSallaStoreProductPage(wigzoCurrentPagePath)) {
                g.sallaTrackEventProductView(wigzoCurrentPagePath);
                g.sallaProductindexing();
            }
            if (!!window.document.getElementsByClassName("add-cart-large")) {
                g.$(".add-cart-large").click(function() {
                    wigzoCartProductId = document.getElementsByClassName("add-cart-large")[0].dataset.productId;
                    g.sallaTrackEventAddToCart(wigzoCartProductId);
                });
            }
            if (!!window.document.getElementsByClassName("product-add")) {
                g.$(".product-add").click(function() {
                    wigzoCartProductId = document.getElementsByClassName("product-add")[0].dataset.productId;
                    g.sallaTrackEventAddToCart(wigzoCartProductId);
                });
            }
            if (!!window.document.getElementsByClassName("btn--add-to-cart")) {
                g.$(".product-add").click(function() {
                    wigzoCartProductId = window.document.getElementsByClassName("btn--add-to-cart")[0].dataset.id;
                    g.sallaTrackEventAddToCart(wigzoCartProductId);
                });
            }
        }
        if (g.ready && typeof g.ready === "function") {}
        var l = Array.prototype.push;
        g._exec = function() {
            while ((variables = g.q.shift()) != null) {
                g.dynamicCall.apply(g, variables);
            }
        };
        g.q.push = function() {
            var r = l.apply(this, arguments);
            g._exec();
            return r;
        };
        g._exec();
        return;
    };
    g.dynamicCall = function(j, m, l) {
        if (g.hasOwnProperty(j)) {
            g[j].apply(g, [m, l]);
        } else {
            if (j !== "pass") {
                g.consoleDebug("Wigzo has no method: " + j);
            }
        }
    };
    g.lazyLoader = function() {
        if (!!window.wigzo && window.wigzo.once == true) {
            (console.warn("Wigzo is already loaded, preventing subsequent calls. Did you load wigzo.js twice?"));
            return;
        }
        window.wigzo.once = true;
        if (g.isWigzoScriptDisabled()) {
            g.consoleDebug("Wigzo is Disabled! Returning..");
            return;
        }
        if (!g.hasOwnProperty("h")) {
            var l = g.APP;
            if (g.hasOwnProperty("TRACKER")) {
                l = g.TRACKER;
            }
            g.h = l + "/wigzo.js";
            if (g.h.startsWith("http")) {
                g.h = g.h.substr(g.h.indexOf("://") + 1, g.h.length);
            }
            if (g.integrationSource !== "Segment") {
                g.q = [];
                wigzo("configure", g.ORGANIZATIONID, g.USER_IDENTIFIER);
            }
        }
        if (g.h.indexOf("//app.wigzo") == 0 || g.h.indexOf("//tracker.wigzopush") == 0) {
            g.APP = "https://tracker.wigzopush.com";
            g.CLOUDFLARE = "https://app.wigzo.com";
            g.COMPLETION_PATH = ".wigzopush.com";
        } else {
            var j = g.h.split("/");
            var m = "//tracker.wigzopush.com";
            if (j.length > 1) {
                m = "//" + j[2];
            }
            g.APP = (m.indexOf("localhost") == -1 ? "https:" : "http:") + m;
            g.CLOUDFLARE = (m.indexOf("localhost") == -1 ? "https:" : "http:") + m;
        }
        g.consoleDebug("Loading Wigzo JS.. Starting from: " + g.APP);
        configureFnDef = g.q.shift();
        if (null == configureFnDef) {
            g.error('No configure call, please use wigzo ("configure", "orgtoken") as the first call to initialize. Gracefully quitting.');
            return;
        }
        if (configureFnDef.length < 2) {
            g.error("Invalida parameters in configure call. Need 2 arguments atleast. Gracefully quitting.");
        }
        if (configureFnDef[0] !== "configure") {
            g.error("The first call has to be configure, Gracefully quitting.");
        }
        g.consoleDebug("Configuring Wigzo..");
        g.dynamicCall.apply(g, configureFnDef);
    };
    g.configure = function(n, o) {
        g.consoleDebug("Using ORGID: " + n);
        g.ORGANIZATIONID = n;
        g.USER_IDENTIFIER = o || "";
        var m = window.location.protocol + "//" + window.location.host;
        var l = document.querySelector('link[rel="shortcut icon"]');
        var j = g.getEcommercePlatform();
        g.jsonp(g.APP + "/jserver/v1/org/" + n + "?v=" + j + "&s=" + m, function(q) {
            if (q.code == 1604) {
                g.error("Invalid Organization ID, please check your integration.");
                return;
            }
            if (!!q.features) {
                for (var p in q.features) {
                    g.FEATURES[p] = q.features[p];
                }
            }
            g.FORCE_CANONICAL_URL = q.force_canonical_url;
            g.SLUGGED_DOMAIN = q.slug;
            g.SERVER_VERSION = q.version;
            g.FRESHCHATURL = q.freshchaturl;
            g.SERVICE_WORKER_PATH = g.SERVICE_WORKER_PATH ? g.SERVICE_WORKER_PATH : q.swpath;
            g.SERVICE_WORKER_SCOPE = g.SERVICE_WORKER_SCOPE ? g.SERVICE_WORKER_SCOPE : q.swscope;
            g.MANIFEST_PATH = q.manifestpath;
            g.SAFARI_WEBPUSH_ID = q.safaripushid;
            g.SERVICES = q.services_host;
            g.AUTO_LOADNOTIFICATIONS = q.autoload_notification;
            g.PUSH_SETTINGS = JSON.parse(q.push_settings);
            g.FORCE_HTTP = q.force_http;
            g.ISEXITINTENTCSSENABLED = q.isExitIntentCssEnabled;
            g.HTTP_COHOST = q.http_cohost;
            g.IS_SPA = q.isSpa;
            g.ENTITY_IS_WHITE_LABEL = q.entity_is_white_label;
            g.ENTITY_VIEW = q.entity_view;
            g.ENTITY_NAME = q.entity_name;
            if (g.ENTITY_IS_WHITE_LABEL) {
                g.ENTITY_SITE_URL = q.entity_site_url;
            } else {
                g.ENTITY_SITE_URL = q.entity_site_url + window.location.host;
            }
            g.ENTITY_BRANDING_URL = q.entity_branding_url;
            g.ENTITY_POWERED_BY_LOGO_LIGHT = q.entity_powered_by_logo_light;
            g.ENTITY_POWERED_BY_LOGO_DARK = q.entity_powered_by_logo_dark;
            g.ENTITY_FAV_ICON_LIGHT = q.entity_fav_icon_light;
            g.ENTITY_FAV_ICON_DARK = q.entity_fav_icon_dark;
            g.ENTITY_WILDCARD = q.entity_wildcard;
            g.COMPLETION_PATH = "." + g.ENTITY_WILDCARD;
            g.WIGZO_ENTITY_DATA = q;
            g.HAS_LIVE_CHAT = q.has_live_chat;
            if (g.HTTP_COHOST == "") {
                g.HTTP_PARTIAL = "https://" + g.SLUGGED_DOMAIN + g.COMPLETION_PATH;
            } else {
                g.HTTP_PARTIAL = "https://" + q.http_cohost;
            }
            g.consoleDebug("FeatureSet", g.FEATURES);
            g.userInitializer();
            !!g.HAS_LIVE_CHAT && g.initLiveChat();
        }, function() {
            g.consoleDebug("Cannot get Organization Details! Cannot continue.. Aborting;");
            return;
        });
    };
    g.userInitializer = function() {
        g.consoleDebug("Loading Cookie..");
        g.getOrCreateCookie(function(j) {
            g.IDENTIFIER = j;
            if (window.location.host != "app.wigzo.com" && !!g.FRESHCHATURL) {
                var l = document.createElement("iframe");
                l.src = atob(g.FRESHCHATURL) + "/p/" + g.IDENTIFIER + "/" + g.ORGANIZATIONID + "/" + btoa(window.location.host);
                l.width = "1";
                l.height = "1";
                l.id = "freshchatbox";
                l.style.visibility = "hidden";
                document.body.appendChild(l);
            }
            g.main();
        });
    };
    g.checkCartCookie = function() {
        if (!g.$.cookie("cart")) {
            setTimeout(g.checkCartCookie, 100);
        } else {
            console.log("Cart ID changed");
            g.helpers.readShopifyCartId(g.canonicalUrl);
        }
    };
    g.pass = function() {
        g.consoleDebug("Starting Event Handlers..");
    };
    g.send = function(j) {
        g.consoleDebug("send: " + j);
    };
    if ((g.hasOwnProperty("PLUGIN") && g.PLUGIN == "SHOPIFY") || window.hasOwnProperty("Shopify") || g.integrationSource === "Segment") {
        setTimeout(wigzo.lazyLoader, 10);
    } else {
        window[addEventListener ? "addEventListener" : "attachEvent"](addEventListener ? "load" : "onload", wigzo.lazyLoader);
    }
    g.showBlock = function(m) {
        if (!g.FEATURES.SmartBlock) {
            g.log("SmartBlock feature is either not in plan or disabled.");
            return;
        }
        g.consoleDebug(g.APP);
        var j = wigzo.$(m).attr("data-blockid");
        if (!j) {
            g.consoleDebug("Attribute data-blockid missing on wigzo block");
            return;
        }
        g.consoleDebug("Creating wigzo block within the page..");
        wigzo.$(m).css("display", "none");
        var l = 0;
        var n = 0;
        g.jsonp(g.APP + "/api/v1/getcode/" + j + "?cid=" + g.IDENTIFIER + "&_=" + new Date().getTime(), function(o) {
            if (!o.code) {
                g.consoleDebug("Didn't get code.. cannot continue.");
                return;
            }
            wigzo.$(m).html(o.code);
            l = m.length;
            wigzo.$(m).find("img").load(function(p) {
                if (this.width > 10) {
                    wigzo.$(m).css("display", "block");
                } else {
                    g.consoleDebug("Target is error image");
                    n += 1;
                }
            });
        }, function() {
            g.consoleDebug("Cannot get code, wigzo Error. 1055");
        });
    };
    g.shopifyTrackEventAddToCart = function(o) {
        var l = document.querySelector("link[rel='canonical']").getAttribute("href");
        if (!l && document.querySelector("meta[property='og:url']")) {
            l = document.querySelector("meta[property='og:url']").getAttribute("content");
        }
        if (localStorage.getItem("wigzoStoredUrlOfAddTocart") == null) {
            localStorage.setItem("wigzoStoredUrlOfAddTocart", l);
        } else {
            var j = localStorage.getItem("wigzoStoredUrlOfAddTocart");
            if (!j.split(";").indexOf(l) > -1) {
                j = j + ";" + l;
                localStorage.setItem("wigzoStoredUrlOfAddTocart", j);
            }
        }
        var m = l != null ? l : document.querySelector("link[rel='canonical']").getAttribute("href");
        var o = g.$.cookie("cart");
        var n = {
            plugin: "shopify",
            canonicalUrl: m,
            cartId: o
        };
        wigzo("track", "addtocart", n);
    };
    g.shopifyProductindexing = function() {
        var m = document.querySelector("link[rel='canonical']").getAttribute("href");
        if (!!window.__st && !!__st.p && __st.p == "product" && m != null) {
            var l = "0";
            if (!!meta.product && meta.product.variants.length > 0) {
                l = (meta.product.variants[0].price / 100).toFixed(2);
            }
            var j = g.getKeywordsByCssSelector("meta[property='og:image:secure_url']", "content");
            if (j === undefined || j === null) {
                j = g.getKeywordsByCssSelector("meta[property='og:image']", "content");
                if (j.toLowerCase().startsWith("https")) {
                    j = j;
                } else {
                    if (j.toLowerCase().startsWith("http")) {
                        j = "https://" + j.split("http://")[1];
                    } else {
                        if (j.toLowerCase().startsWith("//")) {
                            j = "https:" + j;
                        }
                    }
                }
            }
            wigzo.index({
                canonicalUrl: m,
                title: g.getKeywordsByCssSelector("meta[property='og:title']", "content"),
                description: g.getKeywordsByCssSelector("meta[property='og:description']", "content"),
                price: l,
                author: window.meta.product.vendor != null ? window.meta.product.vendor : "",
                productId: __st.rid,
                image: j,
                language: a
            });
        }
    };
    g.sallaProductindexing = function() {
        var l = document.querySelector("link[rel='canonical']").getAttribute("href");
        var j = g.getKeywordsByCssSelector("meta[property='og:image']", "content");
        if (j === "undefined" || j === null) {
            j = g.getKeywordsByCssSelector("meta[property='og:image']", "content");
            if (j.toLowerCase().startsWith("https")) {
                j = j;
            } else {
                if (j.toLowerCase().startsWith("http")) {
                    j = "https://" + j.split("http://")[1];
                } else {
                    if (j.toLowerCase().startsWith("//")) {
                        j = "https:" + j;
                    }
                }
            }
        }
        wigzo.index({
            canonicalUrl: l,
            title: g.getKeywordsByCssSelector("meta[property='og:title']", "content"),
            description: g.getKeywordsByCssSelector("meta[property='og:description']", "content"),
            price: g.getKeywordsByCssSelector("meta[property='product:price:amount']", "content"),
            productId: g.getKeywordsByCssSelector("meta[property='product:retailer_item_id']", "content"),
            image: j,
            language: a
        });
    };
    g.sallaTrackEventAddToCart = function(j) {
        var l = {
            plugin: "salla",
            productId: j
        };
        wigzo("track", "addtocart", l);
    };
    g.sallaTrackEventProductView = function() {
        var j = document.querySelector("link[rel='canonical']").getAttribute("href");
        if (!j && document.querySelector("meta[property='og:url']")) {
            j = document.querySelector("meta[property='og:url']").getAttribute("content");
        }
        var l = j != null ? j : document.querySelector("link[rel='canonical']").getAttribute("href");
        var m = {
            plugin: "salla",
            canonicalUrl: l
        };
        wigzo("track", "productview", m);
    };
    g.sallaTrackEventCategoryView = function() {
        var j = document.querySelector("link[rel='canonical']").getAttribute("href");
        if (!j && document.querySelector("meta[property='og:url']")) {
            j = document.querySelector("meta[property='og:url']").getAttribute("content");
        }
        var l = j != null ? j : document.querySelector("link[rel='canonical']").getAttribute("href");
        var m = {
            plugin: "salla",
            canonicalUrl: l
        };
        wigzo("track", "categoryview", m);
    };
    g.getKeywordsByCssSelector = function(j, l) {
        return document.querySelector(j) != null ? document.querySelector(j).getAttribute(l) : "";
    };
    g.shopifyTrackBuyEvent = function(j) {
        var l;
        if (!!localStorage.getItem("wigzoStoredUrlOfAddTocart")) {
            l = localStorage.getItem("wigzoStoredUrlOfAddTocart").split(";");
        }
        if (l == null) {
            return;
        }
        for (var n = 0; n < j.length; n++) {
            var r = j[n].href.split("?")[0];
            if (l.length > 0 && l.indexOf(r) > -1) {
                var p = r.split("?");
                var q = {
                    e: g.IDENTIFIER,
                    _: new Date(),
                    eventCategory: "EXTERNAL",
                    eventval: p[0],
                    u: p[0],
                    lang: a
                };
                var m = g.APP + "/learn/" + g.ORGANIZATIONID + "/buy/" + g.IDENTIFIER;
                l.splice(l.indexOf(r), 1);
                var o = localStorage.getItem("_uc_session_v1");
                q.sc_mid = !!o ? JSON.parse(o).u_mid : null;
                g.post(m, q, function(s) {
                    g.log("Successfully bought - " + s);
                }, function(s) {
                    g.log(s);
                });
            }
        }
        localStorage.removeItem("wigzoStoredUrlOfAddTocart");
    };
    g.durationToMilliSec = function(m) {
        var l = "SECONDS";
        switch (m.actionProps.timeBasedTargeting.durationType) {
            case "MINUTES":
                l = 60 * 1000;
                break;
            case "HOURS":
                l = 3600 * 1000;
                break;
            default:
                l = 1000;
                break;
        }
        var j = m.actionProps.timeBasedTargeting.duration * l || 10 * 60 * 1000;
        return j;
    };
    g.trackDailyActiveUser = function() {
        var j = wigzo.$.cookie(g.DAILY_ACTIVE_COOKIENAME);
        if (!(!!j)) {
            var n = new Date();
            n.setTime(n.getTime() + (24 * 60 * 60 * 1000));
            var l = n.getDate();
            var o = n.getMonth();
            var m = n.getFullYear();
            wigzo.$.cookie(g.DAILY_ACTIVE_COOKIENAME, "Active", {
                expires: new Date(m, o, l, 0, 0, 0, 0),
                path: "/"
            });
            j = wigzo.$.cookie(g.DAILY_ACTIVE_COOKIENAME);
            return true;
        }
        return false;
    };
    g.exitIntent = (function(j) {
        j.fire = function(n, q, r) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            if (!q || !q.hasOwnProperty("actionProps")) {
                g.consoleDebug("[EXITINTENT] api.fire - No valid campaign found!");
                return;
            }
            g.consoleDebug("[EXITINTENT] api.fire - " + q);
            var p = localStorage.hasOwnProperty("WIGZO_BLOCKED_EXIT_INTENT") ? JSON.parse(localStorage.getItem("WIGZO_BLOCKED_EXIT_INTENT")) : {};
            var o = Object.keys(p);
            var l = q.interval;
            var m = new Date();
            m.setTime(m.getTime() + (l));
            if (o.indexOf(q.uuid) < 0 || o.length == 0) {
                setTimeout(function() {
                    g.consoleDebug("[EXITINTENT] api.fire ()setTimeout - " + q);
                    var s = localStorage.hasOwnProperty("WIGZO_BLOCKED_EXIT_INTENT") ? JSON.parse(localStorage.getItem("WIGZO_BLOCKED_EXIT_INTENT")) : {};
                    s[q.uuid] = {
                        expireAt: m.getTime()
                    };
                    localStorage.setItem("WIGZO_BLOCKED_EXIT_INTENT", JSON.stringify(s));
                    j.showExitIntentPopUp(q, n, r);
                }, q.delay);
            }
            return j;
        };
        j.initExitIntentMouseHandler = function(l, m) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            g.exitIntentMouseLeaveHandler = function() {
                g.consoleDebug("Not a valid page...");
            };
            document.documentElement.addEventListener("mouseleave", function(n) {
                if (n.clientY < 0) {
                    g.exitIntentMouseLeaveHandler();
                }
            });
            j.checkAndInitializeExitIntent(l, m);
        };
        j.handleEventBasedExitIntent = function(l, m) {
            j.fireCampaignByPriority(m, function(o) {
                if (o.hasOwnProperty("actionProps") && o.actionProps.hasOwnProperty("events") && o.actionProps.events.enabled) {
                    var n = j.evaluateEventsAgainstCriteria(o);
                    if (n) {
                        j.fire(l, o);
                    }
                    return;
                }
            });
        };
        j.initTimeBasedHandler = function(m, n) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = function(o, p) {
                j.fireCampaignByPriority(p, function(r) {
                    if (r.hasOwnProperty("actionProps") && r.actionProps.hasOwnProperty("timeBasedTargeting") && r.actionProps.timeBasedTargeting.status) {
                        var q = g.durationToMilliSec(r);
                        setTimeout(function() {
                            j.fire(o, r);
                            l(o, p);
                        }, q);
                    }
                });
            };
            l(m, n);
        };
        j.filterValidCampaigns = function(m) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l;
            var n = j.localStorageExitIntentGC();
            if (!!n && n.length) {
                l = m.filter(function(o) {
                    return n.indexOf(o.uuid) < 0;
                });
            } else {
                l = m;
            }
            return l;
        };
        j.checkAndInitializeExitIntent = function(m, n) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            j.migrateLegacyLocalStorageKey("EXIT_INTENT", "WIGZO_BLOCKED_EXIT_INTENT");
            var l = g.APP + "/api/exitintent/" + g.ORGANIZATIONID;
            g.jsonp(l, function(p) {
                var q = p.data;
                if (!!g.loadjscssfile && g.ISEXITINTENTCSSENABLED) {
                    g.loadjscssfile(wigzo.CLOUDFLARE + "/assets/plugins/exitintent/exitintent.css", "css", null);
                }
                var o = j.evaluateAgainstEachExitIntentCampaign(q, n);
                if (o.length) {
                    g.exitIntentMouseLeaveHandler = function() {
                        j.fireCampaignByPriority(o, function(r) {
                            g.consoleDebug("[EXITINTENT] validExitIntentCampaign is ", r);
                            j.fire(m, r);
                        });
                    };
                    j.initTimeBasedHandler(m, o);
                    j.handleEventBasedExitIntent(m, o);
                } else {
                    g.consoleDebug("No valid campaign(s) found for this page...");
                }
                wigzo.$(window).scroll(function(w) {
                    var v = wigzo.$(window).scrollTop();
                    var t = wigzo.$(document).height();
                    var s = wigzo.$(window).height();
                    var r = (v) / (t - s);
                    var u = Math.round(r * 100);
                    j.fireCampaignByPriority(o, function(x) {
                        if (!!x && x.hasOwnProperty("actionProps") && x.actionProps.hasOwnProperty("scroll") && x.actionProps.scroll.status && u >= x.actionProps.scroll.percentage) {
                            j.fire(m, x);
                        }
                    });
                    g.consoleDebug(u);
                });
            }, function(o) {
                g.log("Error occurred ", o);
            }, "json");
        };
        j.evaluateAgainstEachExitIntentCampaign = function(n, m) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = [];
            n.forEach(function(p) {
                p.actionProps.usersTargeting.userType = p.actionProps.hasOwnProperty("usersTargeting") ? p.actionProps.usersTargeting.userType : "all";
                var o = (p.actionProps.usersTargeting.userType === "all" || p.actionProps.usersTargeting.userType === m) && (j.evaluateExitIntentAgainstScreenSize(p)) && (j.evaluateExitIntentUrlTargetingOptions(p)) && (j.evaluateLocationAndSystemAgainstCriteria(p));
                if (o) {
                    l.push(p);
                }
            });
            return l;
        };
        j.evaluateLocationAndSystemAgainstCriteria = function(m) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = m.actionProps.locationAndSystemTargeting;
            if (!!l && l.status) {
                return j.evaluateAgainstCriteria(l.criteria, l.globalOperator);
            }
            return true;
        };
        j.evaluateEventsAgainstCriteria = function(q) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = false;
            if (!!q && Object.keys(q).length) {
                var p = q.actionProps.events.enabled && q.actionProps.events;
                if (!p || !p.enabled) {
                    l = true;
                } else {
                    if (localStorage.hasOwnProperty("WIGZO_EVENTS")) {
                        var m = JSON.parse(localStorage.getItem("WIGZO_EVENTS")),
                            o = p.primaryEvents;
                        if (Object.keys(m).length > 0) {
                            for (var n = 0; n < o.length; n++) {
                                if (m.hasOwnProperty(o[n])) {
                                    l = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return l;
        };
        j.evaluateExitIntentAgainstScreenSize = function(m) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = m.actionProps.device.screen;
            return (screen.width > 768 && l.desktop.show) || (screen.width <= 425 && l.mobile.show) || (screen.width > 425 && screen.width <= 768 && l.tablet.show);
        };
        j.evaluateExitIntentUrlTargetingOptions = function(l) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            return g.helpers.checkAgainstUrlCriteria(l.actionProps.urlTargeting);
        };
        j.evaluateAgainstCriteria = function(r, o) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = false;
            for (var n = 0; n < r.length; n++) {
                var q = r[n];
                var p = g[q.criterion];
                var m = false;
                if (q.criterion === "country") {
                    m = g.helpers.checkAgainstLocationCriteria(p, r[n]);
                } else {
                    if (q.operator === "equals") {
                        if (q.value instanceof Array) {
                            m = (q.value[0] === p);
                        } else {
                            m = (q.value === p);
                        }
                    } else {
                        if (q.operator === "notequals") {
                            if (q.value instanceof Array) {
                                m = (q.value[0] !== p);
                            } else {
                                m = (q.value !== p);
                            }
                        } else {
                            if (q.operator === "contains") {
                                m = (p.indexOf(q.value) >= 0);
                            } else {
                                if (q.operator === "doesnotcontain") {
                                    m = (p.indexOf(q.value) < 0);
                                } else {
                                    if (q.operator === "in") {
                                        m = (q.value.indexOf(p) >= 0);
                                    } else {
                                        if (q.operator === "notin") {
                                            m = (q.value.indexOf(p) < 0);
                                        } else {
                                            if (q.operator === "startswith") {
                                                m = (p.startsWith(q.value[0]));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                l = m;
                if (o === "AND" && !m) {
                    break;
                } else {
                    if (o === "OR" && m) {
                        break;
                    }
                }
            }
            return l;
        };
        j.localStorageExitIntentGC = function() {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            if (localStorage.hasOwnProperty("WIGZO_BLOCKED_EXIT_INTENT")) {
                var m = false;
                var q = localStorage.hasOwnProperty("WIGZO_BLOCKED_EXIT_INTENT") ? JSON.parse(localStorage.getItem("WIGZO_BLOCKED_EXIT_INTENT")) : {};
                var p = Object.keys(q);
                for (var o = 0; o < p.length; o++) {
                    var r = p[o];
                    var l = q[r].expireAt;
                    var n = new Date().getTime();
                    if (l <= n) {
                        m = true;
                        delete q[r];
                    }
                }
                if (m) {
                    localStorage.setItem("WIGZO_BLOCKED_EXIT_INTENT", JSON.stringify(q));
                }
                return Object.keys(q);
            }
        };
        j.migrateLegacyLocalStorageKey = function(m, n) {
            if (localStorage.hasOwnProperty(m)) {
                var l = localStorage.getItem(m);
                localStorage.setItem(n, l);
                localStorage.removeItem(m);
            }
        };
        j.fireCampaignByPriority = function(o, s) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            j.localStorageExitIntentGC();
            var t = [],
                n = [],
                l = [],
                p = [];
            var m = {};
            for (var r = 0; r < o.length; r++) {
                var u = o[r];
                var q = true;
                if (u.actionProps.urlTargeting.choice === "SPECIFIC") {
                    q = q && j.evaluateExitIntentUrlTargetingOptions(u);
                }
                if (!!u.actionProps.events && u.actionProps.events.enabled) {
                    q = q && j.evaluateEventsAgainstCriteria(u);
                }
                if (q) {
                    if (u.actionProps.urlTargeting.choice === "SPECIFIC" && j.evaluateExitIntentUrlTargetingOptions(u)) {
                        t.push(u);
                        break;
                    } else {
                        t.push(u);
                    }
                }
            }
            if (!!s) {
                if (t.length) {
                    s(t[t.length - 1]);
                }
            }
        };
        j.closePopUp = function() {
            var l = new CustomEvent("exit-intent-close-pop-up");
            document.body.dispatchEvent(l);
        };
        j.populateCustomTemplateMarkup = function(p, m, n) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            if (window.location.host === "app.wigzo.com") {
                g.consoleDebug("Do not show template on dashboard");
                return;
            }
            if (wigzo.$("iframe#" + p.actionProps.emailSubscriptionForm.cssTemplateId).length > 0) {
                g.consoleDebug("Same template is already present. So gracefully quitting...");
                return;
            }
            var o = document.createElement("iframe");
            o.setAttribute("src", wigzo.APP + "/exitintent/customtemplate/generate/markup/" + wigzo.ORGANIZATIONID + "/" + p.uuid + "?_" + new Date().getTime() + "&_siteid=" + wigzo.ORGANIZATIONID);
            o.setAttribute("id", p.actionProps.emailSubscriptionForm.cssTemplateId);
            var l;
            if (!!n && ["WIGZOEXITINTENTTEMP31", "WIGZOEXITINTENTTEMP32"].includes(n)) {
                l = "position: fixed; width: 200px; display: block; height: 100px!important;  left: 10px; bottom: 10px; z-index: 93462627999;border: none";
            } else {
                l = "position: fixed; width: 100%; display: block; height: 100vh !important; top: 0; left: 0; right: 0; bottom: 0; z-index: 93462627999;";
            }
            o.setAttribute("style", l);
            o.setAttribute("scrolling", "no");
            document.body.appendChild(o);
            if (!j.hasGlobalMessageListener) {
                window.addEventListener("message", function(q) {
                    j.customTemplatePostMessageHandler(q, p, m);
                }, false);
                document.body.addEventListener("exit-intent-close-pop-up", function(q) {
                    j.customTemplateClosePopUpHandler(q, p);
                }, false);
                j.hasGlobalMessageListener = true;
            }
            return;
        };
        j.customTemplateClosePopUpHandler = function(m, n) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var l = g.isMapped("CONVERTED");
            wigzo.$("iframe#" + n.actionProps.emailSubscriptionForm.cssTemplateId).fadeOut(500, function() {
                $(this).remove();
            });
            if (!l) {
                g.jsonp(g.APP + "/api/exitintent/count/bounced/" + g.ORGANIZATIONID + "/" + n.uuid);
            }
        };
        j.customTemplatePostMessageHandler = function(m, o, u) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var v = g.isMapped("CONVERTED");
            var r = m.data.type || "";
            if (r === "close") {
                j.closePopUp();
            } else {
                if (r === "pixel") {
                    g.jsonp(g.APP + "/api/exitintent/impression/" + g.ORGANIZATIONID + "/" + o.uuid);
                } else {
                    if (r === "couponEvent") {
                        g.track(m.data.eventName, m.data.eventValue);
                    } else {
                        if (r === "dispatchEvent") {
                            if (typeof wigzo.exitIntentEventListner === "function") {
                                var s = {
                                    eventName: m.data.eventName,
                                    eventValue: m.data.eventValue
                                };
                                wigzo.exitIntentEventListner(s);
                            } else {
                                g.consoleDebug("No listner found for event(s)");
                            }
                        } else {
                            if (r === "submit") {
                                var n = g.APP + "/api/exitintent/count/converted/" + g.ORGANIZATIONID + "/" + o.uuid + "?converted=" + v;
                                var q = m.data.hasOwnProperty("email") ? g.validateEmail(m.data.email) : true;
                                var p = m.data.hasOwnProperty("phone") ? g.validatePhone(m.data.phone) : true;
                                if (q && p) {
                                    var t = {};
                                    t.email = m.data.email;
                                    if (m.data.hasOwnProperty("phone") && m.data.phone != "") {
                                        t.phone = m.data.phone;
                                    }
                                    if (m.data.hasOwnProperty("name") && m.data.name != "") {
                                        t.fullName = m.data.name;
                                    }
                                    t.exitIntentUuid = o.uuid;
                                    g.identify(t, ["email", "phone", "exitIntentUuid"], function(y) {
                                        g.consoleDebug("Subscribed successfully : " + y);
                                        var A = wigzo.$.cookie("IS_MAPPED") || "";
                                        if (!!A && A.indexOf("CONVERTED") < 0) {
                                            var w = A.split("~");
                                            w.push("CONVERTED");
                                            wigzo.$.cookie("IS_MAPPED", w.join("~"), {
                                                expires: 80 * 365,
                                                path: "/"
                                            });
                                        }
                                        g.track("exitintent", u);
                                        g.track("exitintentCampaignUuid", o.uuid);
                                        if (y.hasOwnProperty("email")) {
                                            n += "&email";
                                        }
                                        if (y.hasOwnProperty("phone")) {
                                            n += "&phone";
                                        }
                                        g.jsonp(n);
                                        if (o.actionProps.hasOwnProperty("fireEvents") && o.actionProps.fireEvents.enabled) {
                                            var x = o.actionProps.fireEvents.eventName;
                                            var z = o.actionProps.fireEvents.eventValue;
                                            if (!!x && !!z) {
                                                g.track(x, z);
                                            }
                                        }
                                        if (Object.keys(y).length > 0) {
                                            g.consoleDebug("User mapped from exit intent.");
                                        }
                                    }, "EXITINTENT");
                                }
                                var l;
                                if (o.actionProps.customTemplate.hasOwnProperty("redirect") && o.actionProps.customTemplate.redirect.status) {
                                    l = o.actionProps.customTemplate.redirect.url;
                                }
                                m.data.campaignUrl = window.location.href;
                                if (o.actionProps.customTemplate.hasOwnProperty("endpoint") && o.actionProps.customTemplate.endpoint != "") {
                                    postHandlerURL = g.APP + "/exitintent/customtemplate/endpointhandler";
                                    postData = {
                                        endpoint: o.actionProps.customTemplate.endpoint,
                                        data: m.data
                                    };
                                    g.post(postHandlerURL, postData, function(w) {
                                        wigzo.$("iframe#" + o.actionProps.emailSubscriptionForm.cssTemplateId).remove();
                                        g.log("[SUCCESS] Response from client endpoint: " + w);
                                        if (!!l) {
                                            document.location.href = l;
                                        }
                                    }, function(w) {
                                        g.log("[ERROR] Response from client endpoint: " + w);
                                    });
                                } else {
                                    if (o.actionProps.emailSubscriptionForm.cssTemplateId !== "WIGZOEXITINTENTTEMP31" && o.actionProps.emailSubscriptionForm.cssTemplateId !== "WIGZOEXITINTENTTEMP32") {
                                        wigzo.$("iframe#" + o.actionProps.emailSubscriptionForm.cssTemplateId).remove();
                                    }
                                    if (!!l) {
                                        document.location.href = l;
                                    }
                                }
                            } else {
                                if (r === "maximizeWheel") {
                                    if (m.data.hasOwnProperty("templateId") && ["WIGZOEXITINTENTTEMP31", "WIGZOEXITINTENTTEMP32"].includes(m.data.templateId)) {
                                        wigzo.$("iframe#" + m.data.templateId).css({
                                            height: "100vh",
                                            top: "0",
                                            bottom: "0",
                                            left: "0",
                                            right: "0",
                                            width: "100%"
                                        });
                                    }
                                } else {
                                    if (r === "minimizeWheel") {
                                        if (m.data.hasOwnProperty("templateId") && ["WIGZOEXITINTENTTEMP31", "WIGZOEXITINTENTTEMP32"].includes(m.data.templateId)) {
                                            wigzo.$("iframe#" + m.data.templateId).css({
                                                height: "70px",
                                                bottom: "10px",
                                                top: "unset",
                                                right: "unset",
                                                left: "10px",
                                                width: "200px",
                                                border: "none"
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            window.removeEventListener("message", function() {
                g.log("Removed iframe message listener.");
            }, false);
        };
        j.showExitIntentPopUp = function(q, n, s) {
            var m = navigator.userAgent.toLowerCase();
            var p = q.actionProps.emailSubscriptionForm.redirect.url;
            if (!q.actionProps.emailSubscriptionForm.redirect.isURL && p.includes("sms:")) {
                var o = m.indexOf("android") > -1;
                p = o ? p.replace("&body", "?body") : p;
                q.actionProps.emailSubscriptionForm.redirect.url = p;
            }
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            if (window.location.host === "app.wigzo.com") {
                g.log("Do not show template on dashboard");
                return;
            }
            if (wigzo.$("." + q.actionProps.emailSubscriptionForm.cssTemplateId).length > 0) {
                g.log("Same template is already present. So gracefully quitting...");
                return;
            }
            var r = wigzo.$.cookie("IS_MAPPED") || "";
            var l = r.split("~");
            if (q.actionProps.emailSubscriptionForm.cssTemplateId === "WIGZOEXITINTENTCUSTOMTEMP") {
                if (q.actionProps.usersTargeting.showToMappedUsers || (l.indexOf("USER") < 0 && l.indexOf("PHONE") < 0)) {
                    j.populateCustomTemplateMarkup(q, n);
                    return;
                } else {
                    g.consoleDebug("User is mapped.");
                    return;
                }
            }
            if (q.actionProps.emailSubscriptionForm.cssTemplateId === "WIGZOEXITINTENTTEMP31" || q.actionProps.emailSubscriptionForm.cssTemplateId === "WIGZOEXITINTENTTEMP32") {
                j.populateCustomTemplateMarkup(q, n, q.actionProps.emailSubscriptionForm.cssTemplateId);
                return;
            }
            if (q.actionProps.usersTargeting.showToMappedUsers || !(g.isMapped("USER") || g.isMapped("PHONE"))) {
                if (q.actionProps.emailSubscriptionForm.cssTemplateId === "WIGZOEXITINTENTTEMP26") {
                    wigzo.$("body header").append(wigzo.__(q.markup)).find("img#wigzo-exit-intent-empty-image").load(function() {
                        if (wigzo.getAlignmentByLang() == "right") {
                            wigzo.$("body").find("div.exit-intent-tempalte .exit-intent-title").css("text-align", "right");
                            wigzo.$("body").find("div.exit-intent-tempalte .exit-intent-desc").css("text-align", "right");
                            wigzo.$("body").find("div.exit-intent-tempalte input").css("text-align", "right");
                            wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent .wigzo-notifytitle").css("text-align", "right");
                            wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent .wigzo-notifydesc").css("text-align", "right");
                        }
                        wigzo.$("body").find("div.exit-intent-tempalte").removeClass("language-handler");
                        wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent").removeClass("language-handler");
                        g.consoleDebug("Template empty image loaded.");
                        j.calculateHeightAndWidth(window, "#exit-intent-tempalte");
                        wigzo.$(window).on("resize", function() {
                            j.calculateHeightAndWidth(window, "#exit-intent-tempalte");
                        });
                        if (g.isMapped("USER")) {
                            wigzo.$("#wigzoExitIntentEmailField").remove();
                        }
                        if (g.isMapped("PHONE")) {
                            wigzo.$("#wigzoExitIntentPhoneField").remove();
                        }
                        if (!!s) {
                            s();
                        }
                        var t = g.isMapped("CONVERTED");
                        wigzo.$("#wigzo_exit_intent_template_form").children("input").each(function(u) {
                            var v = this;
                            wigzo.$(v).on("change keyup", function(y) {
                                var x = wigzo.$(this).val();
                                var z = false;
                                if (wigzo.$(this).attr("name") == "email") {
                                    z = g.validateEmail(x);
                                } else {
                                    if (wigzo.$(this).attr("name") == "phone") {
                                        var w = g.maskPhone(y);
                                        z = g.validatePhone(w);
                                    } else {
                                        z = true;
                                    }
                                }
                                if (!z) {
                                    wigzo.$(v).addClass("wigzo-exit-intent-template-error");
                                } else {
                                    wigzo.$(v).removeClass("wigzo-exit-intent-template-error");
                                    wigzo.$(v).next(".exitintent-error-block").html("");
                                }
                            });
                        });
                        wigzo.$("#wigzo_exit_intent_template_submit").on("click", function(z) {
                            var F = "#wigzoExitIntentEmailField";
                            var w = "#wigzoExitIntentPhoneField";
                            var D = "#wigzoExitIntentNameField";
                            var x = !!wigzo.$("[name = temp23gender]:checked")[0] ? wigzo.$("[name = temp23gender]:checked")[0].value : "";
                            var G = {};
                            var E = q.hasOwnProperty("step2Fields") && q.step2Fields.enabled;
                            if (!!x) {
                                wigzo("track", x);
                            }
                            var u = wigzo.$("#wigzo_exit_intent_template_form").serializeArray();
                            wigzo.$.each(u, function(H, I) {
                                G[I.name] = I.value;
                            });
                            var C = G.hasOwnProperty("email") ? g.validateEmail(G.email) : true;
                            var B = G.hasOwnProperty("phone") ? g.validatePhone(G.phone) : true;
                            var y = "";
                            if (C && B) {
                                if (E) {
                                    wigzo.$(".wigzo-step2-form").css("display", "block");
                                    wigzo.$(".wigzo-step1-form").css("opacity", "0");
                                } else {
                                    wigzo.$("." + q.actionProps.emailSubscriptionForm.cssTemplateId).parent().remove();
                                }
                                G.exitIntentUuid = q.uuid;
                                var v = g.APP + "/api/exitintent/count/converted/" + g.ORGANIZATIONID + "/" + q.uuid + "?converted=" + t;
                                g.identify(G, ["email", "phone", "exitIntentUuid", "fullName"], function(J) {
                                    g.consoleDebug("Subscribed successfully : " + J);
                                    var L = wigzo.$.cookie("IS_MAPPED") || "";
                                    if (!!L && L.indexOf("CONVERTED") < 0) {
                                        var H = L.split("~");
                                        H.push("CONVERTED");
                                        wigzo.$.cookie("IS_MAPPED", H.join("~"), {
                                            expires: 80 * 365,
                                            path: "/"
                                        });
                                    }
                                    if (J.hasOwnProperty("email")) {
                                        v += "&email";
                                    }
                                    if (J.hasOwnProperty("phone")) {
                                        v += "&phone";
                                    }
                                    g.jsonp(v, function(N) {
                                        g.track("exitintent", n);
                                        g.track("exitintentCampaignUuid", q.uuid);
                                    });
                                    if (q.actionProps.hasOwnProperty("fireEvents") && q.actionProps.fireEvents.enabled) {
                                        var I = q.actionProps.fireEvents.eventName;
                                        var K = q.actionProps.fireEvents.eventValue;
                                        if (!!I && !!K) {
                                            g.track(I, K);
                                        }
                                    }
                                    if (Object.keys(J).length > 0) {
                                        g.consoleDebug("User mapped from exit intent.");
                                        if (Object.keys(q.actionProps.integrations).length > 0) {
                                            var M = {
                                                email: G.email,
                                                phone: G.hasOwnProperty("phone") ? G.phone : "",
                                                emailServiceProviders: q.actionProps.integrations.emailServiceProviders,
                                                exitIntentUuid: q.uuid
                                            };
                                            g.post(g.APP + "/api/email/provider/subscribe/" + g.ORGANIZATIONID, M, function(N) {
                                                g.log(N);
                                            });
                                        }
                                    }
                                }, "EXITINTENT");
                            } else {
                                var A = [];
                                if (!C) {
                                    A.push(F);
                                    wigzo.$(F).next(".exitintent-error-block").html(wigzo.__("__EXITINTENT_INVALIDEMAIL__"));
                                }
                                if (!B) {
                                    A.push(w);
                                    wigzo.$(w).next(".exitintent-error-block").html(wigzo.__("__EXITINTENT_INVALIDPHONE__"));
                                }
                                wigzo.$(A.join(",")).addClass("wigzo-exit-intent-template-error");
                            }
                            if (q.actionProps.emailSubscriptionForm.redirect.status && C && B) {
                                window.open(q.actionProps.emailSubscriptionForm.redirect.url);
                            }
                            z.preventDefault();
                        });
                        wigzo.$(".fullTemplateRedirect").on("click", function(u) {
                            if (q.actionProps.emailSubscriptionForm.redirect.status) {
                                window.location.replace(q.actionProps.emailSubscriptionForm.redirect.url);
                            }
                            u.preventDefault();
                        });
                        wigzo.$(".cancel-button").on("click", function() {
                            if (!t) {
                                g.jsonp(g.APP + "/api/exitintent/count/bounced/" + g.ORGANIZATIONID + "/" + q.uuid);
                            }
                            g.consoleDebug("Bounced user.");
                        });
                        if (q.hasOwnProperty("disappear")) {
                            setTimeout(function() {
                                wigzo.$("." + q.actionProps.emailSubscriptionForm.cssTemplateId).parent().remove();
                                if (!t) {
                                    g.jsonp(g.APP + "/api/exitintent/count/bounced/" + g.ORGANIZATIONID + "/" + q.uuid);
                                }
                            }, q.disappear);
                        }
                        g.jsonp(g.APP + "/api/exitintent/impression/" + g.ORGANIZATIONID + "/" + q.uuid);
                    });
                } else {
                    wigzo.$("body").append(wigzo.__(q.markup)).find("img#wigzo-exit-intent-empty-image").load(function() {
                        if (wigzo.getAlignmentByLang() == "right") {
                            wigzo.$("body").find("div.exit-intent-tempalte .exit-intent-title").css("text-align", "right");
                            wigzo.$("body").find("div.exit-intent-tempalte .exit-intent-desc").css("text-align", "right");
                            wigzo.$("body").find("div.exit-intent-tempalte input").css("text-align", "right");
                            wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent .wigzo-notifytitle").css("text-align", "right");
                            wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent .wigzo-notifydesc").css("text-align", "right");
                        }
                        wigzo.$("body").find("div.exit-intent-tempalte").removeClass("language-handler");
                        wigzo.$("body").find("div#wigzonotify-bottom-right-exitintent").removeClass("language-handler");
                        g.consoleDebug("Template empty image loaded.");
                        j.calculateHeightAndWidth(window, "#exit-intent-tempalte");
                        wigzo.$(window).on("resize", function() {
                            j.calculateHeightAndWidth(window, "#exit-intent-tempalte");
                        });
                        if (g.isMapped("USER")) {
                            wigzo.$("#wigzoExitIntentEmailField").remove();
                        }
                        if (g.isMapped("PHONE")) {
                            wigzo.$("#wigzoExitIntentPhoneField").remove();
                        }
                        if (!!s) {
                            s();
                        }
                        var u = g.isMapped("CONVERTED");
                        wigzo.$("#wigzo_exit_intent_template_form").children("input").each(function(x) {
                            var y = this;
                            wigzo.$(y).on("change keyup", function(B) {
                                var A = wigzo.$(this).val();
                                var C = false;
                                if (wigzo.$(this).attr("name") == "email") {
                                    C = g.validateEmail(A);
                                } else {
                                    if (wigzo.$(this).attr("name") == "phone") {
                                        var z = g.maskPhone(B);
                                        C = g.validatePhone(z);
                                    } else {
                                        C = true;
                                    }
                                }
                                if (!C) {
                                    wigzo.$(y).addClass("wigzo-exit-intent-template-error");
                                } else {
                                    wigzo.$(y).removeClass("wigzo-exit-intent-template-error");
                                    wigzo.$(y).next(".exitintent-error-block").html("");
                                }
                            });
                        });
                        var t;
                        var w;
                        var v = function(x) {
                            if (!x.hasOwnProperty("email") && !x.hasOwnProperty("phone")) {
                                return true;
                            } else {
                                if (x.hasOwnProperty("email") && x.hasOwnProperty("phone")) {
                                    if (!!x.email && !!x.phone) {
                                        return (g.validateEmail(x.email) && g.validatePhone(x.phone));
                                    } else {
                                        if (!x.email && !x.phone) {
                                            return false;
                                        } else {
                                            if (!!x.email && !x.phone) {
                                                return (g.validateEmail(x.email));
                                            } else {
                                                if (!x.email && !!x.phone) {
                                                    return (g.validatePhone(x.phone));
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (!x.hasOwnProperty("email") && x.hasOwnProperty("phone")) {
                                        if (!!x.phone) {
                                            return g.validatePhone(x.phone);
                                        } else {
                                            return false;
                                        }
                                    } else {
                                        if (x.hasOwnProperty("email") && !x.hasOwnProperty("phone")) {
                                            if (!!x.email) {
                                                return g.validateEmail(x.email);
                                            } else {
                                                return false;
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        wigzo.$("#wigzo_exit_intent_template_submit").on("click", function(C) {
                            var G = "#wigzoExitIntentEmailField";
                            var z = "#wigzoExitIntentPhoneField";
                            var E = "#wigzoExitIntentNameField";
                            var A = !!wigzo.$("[name = temp23gender]:checked")[0] ? wigzo.$("[name = temp23gender]:checked")[0].value : "";
                            var H = {};
                            var F = q.hasOwnProperty("step2Fields") && q.step2Fields.enabled;
                            if (!!A) {
                                wigzo("track", A);
                            }
                            var x = wigzo.$("#wigzo_exit_intent_template_form").serializeArray();
                            wigzo.$.each(x, function(I, J) {
                                H[J.name] = J.value;
                            });
                            var B = "";
                            if (v(H)) {
                                if (F) {
                                    wigzo.$(".wigzo-step2-form").css("display", "block");
                                    wigzo.$(".wigzo-step1-form").css("opacity", "0");
                                    wigzo.$(".wigzo-step1-form-29").css("display", "none");
                                } else {
                                    wigzo.$("." + q.actionProps.emailSubscriptionForm.cssTemplateId).parent().remove();
                                }
                                H.exitIntentUuid = q.uuid;
                                var y = g.APP + "/api/exitintent/count/converted/" + g.ORGANIZATIONID + "/" + q.uuid + "?converted=" + u;
                                g.identify(H, ["email", "phone", "exitIntentUuid", "fullName"], function(K) {
                                    g.consoleDebug("Subscribed successfully : " + K);
                                    var M = wigzo.$.cookie("IS_MAPPED") || "";
                                    if (!!M && M.indexOf("CONVERTED") < 0) {
                                        var I = M.split("~");
                                        I.push("CONVERTED");
                                        wigzo.$.cookie("IS_MAPPED", I.join("~"), {
                                            expires: 80 * 365,
                                            path: "/"
                                        });
                                    }
                                    if (K.hasOwnProperty("email")) {
                                        y += "&email";
                                    }
                                    if (K.hasOwnProperty("phone")) {
                                        y += "&phone";
                                    }
                                    g.jsonp(y, function(O) {
                                        g.track("exitintent", n);
                                        g.track("exitintentCampaignUuid", q.uuid);
                                    });
                                    if (q.actionProps.hasOwnProperty("fireEvents") && q.actionProps.fireEvents.enabled) {
                                        var J = q.actionProps.fireEvents.eventName;
                                        var L = q.actionProps.fireEvents.eventValue;
                                        if (!!J && !!L) {
                                            g.track(J, L);
                                        }
                                    }
                                    if (q.actionProps.customTemplate.hasOwnProperty("endpoint") && q.actionProps.customTemplate.endpoint != "") {
                                        postHandlerURL = g.APP + "/exitintent/customtemplate/endpointhandler";
                                        postData = {
                                            endpoint: q.actionProps.customTemplate.endpoint,
                                            data: H
                                        };
                                        g.post(postHandlerURL, postData, function(O) {
                                            wigzo.$("iframe#" + q.actionProps.emailSubscriptionForm.cssTemplateId).remove();
                                            g.log("[SUCCESS] Response from client endpoint: " + O);
                                            if (!!redirectUrl) {
                                                document.location.href = redirectUrl;
                                            }
                                        }, function(O) {
                                            g.log("[ERROR] Response from client endpoint: " + O);
                                        });
                                    }
                                    if (Object.keys(K).length > 0) {
                                        g.consoleDebug("User mapped from exit intent.");
                                        if (Object.keys(q.actionProps.integrations).length > 0) {
                                            var N = {
                                                email: H.email,
                                                phone: H.hasOwnProperty("phone") ? H.phone : "",
                                                emailServiceProviders: q.actionProps.integrations.emailServiceProviders,
                                                exitIntentUuid: q.uuid
                                            };
                                            g.post(g.APP + "/api/email/provider/subscribe/" + g.ORGANIZATIONID, N, function(O) {
                                                g.log(O);
                                            });
                                        }
                                    }
                                }, "EXITINTENT");
                            } else {
                                var D = [];
                                if (!H.email && !H.phone) {
                                    if (H.hasOwnProperty("email")) {
                                        wigzo.$(G).next(".exitintent-error-block").html(wigzo.__("Email or Phone is required!"));
                                    } else {
                                        wigzo.$(z).next(".exitintent-error-block").html(wigzo.__("Email or Phone is required!"));
                                    }
                                }
                                if (!!H.email && !g.validateEmail(H.email)) {
                                    D.push(G);
                                    wigzo.$(G).next(".exitintent-error-block").html(wigzo.__("__EXITINTENT_INVALIDEMAIL__"));
                                }
                                if (!!H.phone && !g.validatePhone(H.phone)) {
                                    D.push(z);
                                    wigzo.$(z).next(".exitintent-error-block").html(wigzo.__("__EXITINTENT_INVALIDPHONE__"));
                                }
                            }
                            if (q.actionProps.emailSubscriptionForm.redirect.status && v(H)) {
                                window.open(q.actionProps.emailSubscriptionForm.redirect.url);
                            }
                            C.preventDefault();
                        });
                        wigzo.$(".fullTemplateRedirect").on("click", function(x) {
                            if (q.actionProps.emailSubscriptionForm.redirect.status) {
                                window.location.replace(q.actionProps.emailSubscriptionForm.redirect.url);
                            }
                            x.preventDefault();
                        });
                        wigzo.$(".cancel-button").on("click", function() {
                            if (!u) {
                                g.jsonp(g.APP + "/api/exitintent/count/bounced/" + g.ORGANIZATIONID + "/" + q.uuid);
                            }
                            g.consoleDebug("Bounced user.");
                        });
                        if (q.hasOwnProperty("disappear")) {
                            setTimeout(function() {
                                wigzo.$("." + q.actionProps.emailSubscriptionForm.cssTemplateId).parent().remove();
                                if (!u) {
                                    g.jsonp(g.APP + "/api/exitintent/count/bounced/" + g.ORGANIZATIONID + "/" + q.uuid);
                                }
                            }, q.disappear);
                        }
                        g.jsonp(g.APP + "/api/exitintent/impression/" + g.ORGANIZATIONID + "/" + q.uuid);
                    });
                }
            }
        };
        j.calculateHeightAndWidth = function(q, o) {
            if (!g.FEATURES.ExitIntent) {
                g.log("EXITINTENT feature is either not in plan or disabled.");
                return;
            }
            var u = wigzo.$(o);
            if (u.data("banner")) {
                wigzo.$(".exit-intent-banner img").one("load", function() {
                    var z = u.height();
                    var y = q.innerHeight;
                    var A = (y - z) / 2;
                    u.css("top", A);
                }).each(function() {
                    if (this.complete) {
                        wigzo.$(this).trigger("load");
                    }
                });
            } else {
                var r = u.height();
                var p = q.innerHeight;
                var s = (p - r) / 2;
                u.css("top", s);
            }
            var t = u.width();
            var v = q.innerWidth;
            var x = (v - t) / 2;
            u.css("left", x);
            var m = navigator.userAgent.toLowerCase();
            var n = m.indexOf("android") > -1;
            if (n) {
                wigzo.$(document).on("focus", "#wigzoExitIntentEmailField", function(z) {
                    var y = wigzo.$(window).height();
                    var A = y - 25;
                    if (wigzo.$("#blankwigzo").length < 1) {
                        wigzo.$("#exit-intent-tempalte").append("<div id='blankwigzo' style='height:" + A + "px;'></div>");
                    }
                    wigzo.$("html, body").animate({
                        scrollTop: wigzo.$("#wigzoExitIntentEmailField").offset().top - 100
                    }, 500);
                });
                wigzo.$(document).on("focusout", "#wigzoExitIntentEmailField", function(y) {
                    wigzo.$("#blankwigzo").remove();
                });
            }
            if (v > 768) {
                var l = (Math.round(p * 0.95) - 100);
                var w = (l / r);
                if (w > 0 && w < 1) {
                    u.css("transform", "scale(" + w + ")");
                    u.css("-webkit-transform", "scale(" + w + ")");
                    u.css("-moz-transform", "scale(" + w + ")");
                    u.css("-o-transform", "scale(" + w + ")");
                }
            }
            u.show();
        };
        return j;
    })(g.exitIntent || {});
    g.takeAction = function(m, l, n) {
        if (!l || !m) {
            console.error("Can't take action, please provide valid actionType and templateUuid. Valid action types are - browserpushaction, onsitepushaction, smsaction, emailaction, httphookaction, tcpipaction");
            return;
        }
        var j = g.APP + "/api/channels/" + g.ORGANIZATIONID + "/" + l.trim() + "/" + g.IDENTIFIER + "?templateUuid=" + m;
        g.get(j, function(o) {
            if (n) {
                n(o);
            }
        });
    };
    g.takeActionVanilla = function(m, l, n) {
        if (!l || !m) {
            console.error("Can't take action, please provide valid actionType and templateUuid. Valid action types are - browserpushaction, onsitepushaction, smsaction, emailaction, httphookaction, tcpipaction");
            return;
        }
        var j = g.APP + "/api/channels/" + g.ORGANIZATIONID + "/" + l.trim() + "/" + g.IDENTIFIER;
        g.post(j, m, function(o) {
            if (n) {
                n(o);
            }
        }, function(o) {
            g.log("Error in posting in takeActionVanilla: " + o);
        });
    };
    g.actions = {
        onsitepushaction: {
            execute: function(j, l) {
                g.takeAction(j, "onsitepushaction", l);
            }
        },
        browserpushaction: {
            execute: function(j, l) {
                g.takeAction(j, "browserpushaction", l);
            },
            executeVanilla: function(j, l) {
                g.takeActionVanilla(j, "browserpushaction", l);
            }
        },
        smsaction: {
            execute: function(j, l) {
                g.takeAction(j, "smsaction", l);
            }
        },
        emailaction: {
            execute: function(j, l) {
                g.takeAction(j, "emailaction", l);
            }
        },
        httphookaction: {
            execute: function(j, l) {
                g.takeAction(j, "httphookaction", l);
            }
        },
        tcpipaction: {
            execute: function(j, l) {
                g.takeAction(j, "tcpipaction", l);
            }
        }
    };
    g.getOrCreateCookie = function(j, m) {
        if (navigator.userAgent.indexOf("Wigzo/1.0") >= 0) {
            g.consoleDebug("Skipping wigzo.js for this page due to customized navigator.");
            return false;
        }
        if (!m) {
            m = false;
        }
        g.consoleDebug("In getOrCreate Cookie. Force: " + m);
        if (m !== true) {
            var l = wigzo.$.cookie(g.COOKIE_NAME);
            if (!!l && l !== "null") {
                g.consoleDebug("Cookie is present, not reissuing");
                g.IDENTIFIER = l;
                if (!!j) {
                    j(l, false);
                }
                return l;
            }
        }
        if (!g.IDENTIFIER) {
            g.consoleDebug("User Identifier not known, Wigzo continuing as guest..");
        }
        g.IDENTIFIER = g.uuid4();
        g.consoleDebug("Issuing cookie to.." + g.IDENTIFIER);
        g.consoleDebug("Fork new user on the server..");
        g.helpers.forkTemporaryUser(g.IDENTIFIER, function() {
            g.consoleDebug("Fork done!");
            wigzo.$.cookie(g.COOKIE_NAME, g.IDENTIFIER, {
                expires: 80 * 365,
                path: "/"
            });
            g._USER_TYPE = "new";
            if (!!j) {
                j(g.IDENTIFIER, true);
            }
        });
        return true;
    };
    g.pushEvent = function(j, l) {
        console.warn("WARNING !! Don't use this method. Use wigzo.track(eventName, eventVal) instead.");
        g.track(j, l);
    };
    g.track = function(l, n) {
        if (g.isWigzoScriptDisabled()) {
            return;
        }
        var m = wigzo.$.cookie("PAGE_UUID");
        var j = wigzo.$(document).find("link[rel=canonical]").attr("href");
        g.helpers.createEvent(l, {
            pageuuid: m,
            eventval: n,
            source: "web",
            u: j
        });
    };
    g.identify = function(j, m, n, l) {
        if (g.isWigzoScriptDisabled()) {
            return;
        }
        if (g.IDENTIFIER == null) {
            g.getOrCreateCookie(function(o) {
                g.IDENTIFIER = o;
            });
        }
        g.mapUserInfo(g.IDENTIFIER, j, m, n, l);
    };
    g.index = function(j) {
        if (g.isWigzoScriptDisabled()) {
            return;
        }
        if (!!j && !(j.hasOwnProperty("canonicalUrl"))) {
            g.consoleDebug("Please provide canonicalUrl as a part of product info.");
            return;
        }
        var l = g.APP + "/learn/" + g.ORGANIZATIONID + "/product/push/" + g.IDENTIFIER + "?e=" + g.IDENTIFIER + "&src=js";
        var m = localStorage.getItem("_uc_session_v1");
        j.sc_mid = !!m ? JSON.parse(m).u_mid : null;
        g.post(l, j, function(n) {
            g.log("Indexed product : " + n);
        }, function(n) {
            g.log("Error in indexing product : " + n);
        });
    };
    g.isMapped = function(j) {
        var l = wigzo.$.cookie("IS_MAPPED") || "";
        return l && l.indexOf(j) >= 0;
    };
    g.mapUserInfo = function(w, q, l, n, x) {
        x = x || "WEB";
        var u = wigzo.$.cookie("IS_MAPPED") || "";
        var j = g.USER_IDENTIFIER;
        var B = false;
        var r = false;
        var s = false;
        var m = "";
        var t = g.APP + "/user/map/" + w + "?orgId=" + g.ORGANIZATIONID + "&source=" + x; + "&userId=" + m + "&_=" + new Date().getTime();
        var o = u.split("~");
        var z = g.hasQueryParam("force");
        if (!q) {
            q = {};
        }
        if (!!u) {
            if (o.indexOf("USER") < 0 || z || (l && l.indexOf("email") >= 0)) {
                r = true;
            }
            if (o.indexOf("PHONE") < 0 || (l && l.indexOf("phone") >= 0)) {
                s = true;
            }
        } else {
            r = true;
            s = true;
        }
        if (r) {
            if (!!j && g.validateEmail(j)) {
                q.email = j;
            } else {
                var C = g.getQueryStringParams("wigzo_e");
                var A = g.getQueryStringParams("e");
                if (C) {
                    if (g.validateEmail(C)) {
                        q.email = C;
                    } else {
                        if (g.validateEmail(atob(C))) {
                            q.email = atob(C);
                        }
                    }
                } else {
                    if (A && g.validateEmail(A)) {
                        if (g.validateEmail(A)) {
                            q.email = A;
                        } else {
                            if (g.validateEmail(btoa(A))) {
                                q.email = atob(A);
                            }
                        }
                    }
                }
            }
            if (!!q && q.hasOwnProperty("email") && g.validateEmail(q.email)) {
                B = true;
                g.consoleDebug("MAPPED USER/EMAIL : " + q.email);
                if (o.indexOf("USER") < 0) {
                    o.push("USER");
                }
            } else {
                g.consoleDebug("EMAIL IS NOT AVAILABLE.");
            }
            if (!!q && q.hasOwnProperty("fullName")) {
                B = true;
                t += "&fullName=" + q.fullName;
                g.consoleDebug("fullName : " + q.fullName);
            }
        }
        if (s) {
            if (!!j && g.validatePhone(j)) {
                q.phone = j;
            } else {
                var y = g.getQueryStringParams("wigzo_p");
                var v = g.getQueryStringParams("p");
                if (y && g.validatePhone(y)) {
                    q.phone = y;
                } else {
                    if (v && g.validatePhone(v)) {
                        q.phone = v;
                    }
                }
            }
            if (!!q && q.hasOwnProperty("phone") && g.validatePhone(q.phone)) {
                B = true;
                g.consoleDebug("MAPPED USER/PHONE : " + q.phone);
                if (o.indexOf("PHONE") < 0) {
                    o.push("PHONE");
                }
            } else {
                g.consoleDebug("PHONE IS NOT AVAILABLE.");
            }
        }
        if (!!q && q.hasOwnProperty("exitIntentUuid")) {
            B = true;
            q.exitIntentUuid = q.exitIntentUuid;
            g.consoleDebug("Uuid : " + q.exitIntentUuid);
        }
        if (!!q && q.hasOwnProperty("userId")) {
            B = true;
            g.consoleDebug("UserId : " + q.userId);
        }
        if (!!q && q.hasOwnProperty("phone")) {
            q.phone = q.phone.indexOf(" ") >= 0 ? q.phone.replace(/\s/g, "") : q.phone;
        }
        if (!!q && q.hasOwnProperty("phone")) {
            !!f && ua.notify("otp_verified", {
                mobile: q.phone,
                channel_id: "1"
            });
        }
        if (!!q && !!q.date_of_birth) {
            q.date_of_birth = q.date_of_birth.indexOf(" ") >= 0 ? q.date_of_birth.replace(/\s/g, "") : q.date_of_birth;
        }
        if (!!q && !!q.gender) {
            q.gender = q.gender.indexOf(" ") >= 0 ? q.gender.replace(/\s/g, "") : q.gender;
        }
        if (B) {
            g.post(t, q, function(p) {
                wigzo.$.cookie("IS_MAPPED", o.join("~"), {
                    expires: 80 * 365,
                    path: "/"
                });
                if (!!q && q.hasOwnProperty("phone")) {
                    g.track("mapphone", q.phone.replace(/\s/g, ""));
                    if (!!document.getElementById("freshchatbox")) {
                        document.getElementById("freshchatbox").contentWindow.postMessage({
                            t: "mapphone",
                            d: q.phone.replace(/\s/g, "")
                        }, "*");
                    }
                }
                if (!!q && q.hasOwnProperty("email")) {
                    g.track("mapemail", q.email);
                    if (!!document.getElementById("freshchatbox")) {
                        document.getElementById("freshchatbox").contentWindow.postMessage({
                            t: "mapemail",
                            d: q.email
                        }, "*");
                    }
                }
                if (!!q && !!q.date_of_birth) {
                    g.track("mapdob", q.date_of_birth);
                }
                if (!!q && !!q.gender) {
                    g.track("mapgender", q.gender);
                }
                g.consoleDebug(p);
                if (n) {
                    n(p);
                }
            }, function(p) {
                g.consoleDebug("ERROR : Phone couldn't be mapped.");
                if (n) {
                    n(p);
                }
            });
        } else {
            if (n) {
                g.consoleDebug("PHONE CAN NOT BE MAPPED.");
                n({});
            }
        }
    };
    g.mapBrowser = function(v, o, s, j, n, u) {
        var m = wigzo.$.cookie("IS_MAPPED") || "";
        var r = false;
        if (!!m) {
            var p = m.split("~");
            if (p.indexOf("BROWSER") >= 0) {}
        }
        if (!r || j) {
            g.consoleDebug("MAPPED Browser details :  REG_ID/DEVICE_TOKEN->" + o + " BROWSER_TYPE->" + s);
            var l = g.ORGANIZATIONID;
            var t = g.APP + "/browser/map/" + v;
            var q = window.location.href;
            g.post(t, {
                _: new Date().getTime(),
                orgId: l,
                browserId: o,
                browserPushType: s
            }, function(x) {
                g.log(x);
                var w = m.split("~");
                if (w.indexOf("BROWSER") < 0) {
                    w.push("BROWSER");
                    wigzo.track("pushallowed", q);
                }
                wigzo.$.cookie("IS_MAPPED", w.join("~"), {
                    expires: 80 * 365,
                    path: "/"
                });
                g.log("SUCCESS : Browser mapped successfully.");
            }, function(w, y, x) {
                g.log("ERROR : Browser couldn't be mapped.");
            });
        } else {
            g.log("Browser is already mapped => Browser details : REG_ID/DEVICE_TOKEN->" + o + " BROWSER_TYPE->" + s);
        }
    };
    g.mapBrowserPushRegistrationId = function(n, m, l, j, o) {
        g.mapBrowser(g.IDENTIFIER, n, m, l, j, o);
        return true;
    };
    g.mapBrowserBeam = function(j, m, q, p, n, r) {
        var l = g.SERVICES + "/push/map/browser";
        var o = {
            orgId: j,
            cookieId: m,
            browserId: q,
            browserPushType: p,
            extraData: n
        };
        g.post(l, o, function(s) {
            g.log("SUCCESS : Browser mapped successfully on BEAM.");
            if (!!r) {
                r();
            }
        }, function(s) {
            g.log("Error in mapping browser token on BEAM: " + s);
        });
    };
    g.isNewOrReturningUser = function(n, m) {
        var j = g.ORGANIZATIONID;
        var l = g.APP + "/user/neworreturning/" + m + "?orgId=" + j + "&type=" + n + "&_=" + new Date().getTime();
        g.jsonp(l, function(o) {
            g.log(o);
        });
    };
    g.loadPixel = function(n, p) {
        var j = g.ORGANIZATIONID;
        var o = "";
        var m = g.APP + "/report/track/web?source=web&orgId=" + j + "&cookieId=" + n + "&userId=" + o + "&_=" + new Date().getTime();
        g.jsonp(m, function(s) {
            g.country = s.country;
            g.state_name = s.stateName;
            g.state_code = s.stateCode;
            g.city = s.city;
            g.browser = s.browser;
            g.os = s.os;
            g.language = wigzo.checkLang();
            g.exitIntent.initExitIntentMouseHandler(n, p);
            wigzo.$(window).on("resize", function() {
                g.consoleDebug("Window resized");
                g.exitIntent.calculateHeightAndWidth(window, "#exit-intent-tempalte");
            });
            wigzo.$.cookie("PAGE_UUID", s.uuid, {
                path: "/"
            });
            if (wigzo.hasQueryParam("utm_wsource") && wigzo.getQueryStringParams("utm_wsource") === "fbm" && wigzo.hasQueryParam("utm_wref")) {
                var t = btoa(wigzo.getQueryStringParams("utm_wref"));
                g.setKey("WIGZO_SALES_FBM", t, 30 * 24 * 3600);
                g.setKey("WIGZO_SALES_SOURCE", "WIGZOFBM", 30 * 24 * 3600);
            }
            if (wigzo.hasQueryParam("utm_wsource") && wigzo.getQueryStringParams("utm_wsource") === "browserpush" && wigzo.hasQueryParam("utm_wref")) {
                var u = btoa(wigzo.getQueryStringParams("utm_wref"));
                g.setKey("WIGZO_SALES_BROWSERPUSH", u, 30 * 24 * 3600);
                g.setKey("WIGZO_PUSH_REFERRER", u, 30 * 24 * 3600);
                g.setKey("WIGZO_SALES_SOURCE", "BROWSERPUSH", 30 * 24 * 3600);
            }
            if (wigzo.hasQueryParam("utm_wsource") && wigzo.getQueryStringParams("utm_wsource") === "emailnotification" && wigzo.hasQueryParam("utm_wref")) {
                var r = btoa(wigzo.getQueryStringParams("utm_wref"));
                g.setKey("WIGZO_SALES_EMAIL", r, 30 * 24 * 3600);
                g.setKey("WIGZO_SALES_SOURCE", "EMAIL", 30 * 24 * 3600);
            }
            if (wigzo.hasQueryParam("utm_wsource") && wigzo.getQueryStringParams("utm_wsource") === "onsitepush" && wigzo.hasQueryParam("utm_wref")) {
                var q = btoa(wigzo.getQueryStringParams("utm_wref"));
                g.setKey("WIGZO_SALES_ONSITEPUSH", q, 30 * 24 * 3600);
                g.setKey("WIGZO_SALES_SOURCE", "ONSITEPUSH", 30 * 24 * 3600);
            }
            if (!!g.FEATURES.EventsTracking) {
                g.jsonp(g.APP + "/user/actions/selectors?cookieId=" + n + "&orgId=" + g.ORGANIZATIONID + "&_=" + new Date().getTime(), function(x) {
                    var v = x.eventPreferences;
                    var w = JSON.parse(v);
                    w.forEach(function(y, z) {
                        if (y.selectors) {
                            if (y.triggerType === "click") {
                                wigzo.$(y.selectors).on("click", function() {
                                    g.helpers.createEvent(y.eventName, {
                                        pageuuid: s.uuid,
                                        source: "web",
                                        lang: g.language
                                    });
                                });
                            } else {
                                if (y.triggerType === "enter") {
                                    wigzo.$(y.selectors).keypress(function() {
                                        var A = (event.keyCode ? event.keyCode : event.which);
                                        if (A == "13") {
                                            g.helpers.createEvent(y.eventName, {
                                                pageuuid: s.uuid,
                                                source: "web",
                                                eventval: wigzo.$(y.selectors).val(),
                                                lang: g.language
                                            });
                                        }
                                    });
                                } else {
                                    if (y.triggerType === "hover") {
                                        wigzo.$(y.selectors).on("hover", function() {
                                            g.helpers.createEvent(y.eventName, {
                                                pageuuid: s.uuid,
                                                source: "web",
                                                lang: g.language
                                            });
                                        });
                                    }
                                }
                            }
                        }
                    });
                }, function() {
                    g.consoleDebug("Cannot get selectors.");
                });
            }
        }, function() {
            g.log("Error occurred.. Recreating cookie.");
        }, "json");
        if (!!g.WIGZO_ENTITY_DATA.ev) {
            var l = '<img height="1" width="1" alt="" src="https://www.facebook.com/tr?id=' + g.WIGZO_ENTITY_DATA.ev + '&ev=PageView&noscript=1" />';
            g.$("body").append(l);
        }
    };
    g.evaluateLocationAndSystemAgainstCriteria = function(l) {
        var j = l.actionProps.locationAndSystemTargeting;
        if (!!j && j.status) {
            return g.evaluateAgainstCriteria(j.criteria, j.globalOperator);
        }
        return true;
    };
    g.initializeZumigoSession = function() {
        var l = g.$("#input-payment-telephone").val();
        if (l.length == 12) {
            g.get(g.APP + "/wz/createsessionapi/" + g.ORGANIZATIONID, function j(m) {
                g.authenticateMdn(m.sessionId, l);
            });
        }
    };
    g.verifyOtp = function() {
        var m = g.$("#input-payment-telephone").val();
        var l = g.$("#input-otp").val();
        g.get(g.APP + "/wz/verifyotp/" + m + "/" + l + "/" + g.ORGANIZATIONID, function j(n) {
            if (n.status === "SUCCESS") {
                document.getElementById("alertSuccess").style.display = "block";
                document.getElementById("alertDanger").style.display = "none";
            } else {
                document.getElementById("alertInvalidOtp").style.display = "block";
                document.getElementById("alertDanger").style.display = "none";
            }
            return n;
        });
    };
    g.authenticateMdn = function(p, o, l) {
        console.log("Image load called....");
        var n = g.APP + "/wz/identifydevice/" + g.ORGANIZATIONID + "?sessionId=" + p + "&mdn=" + o + "&correlationId=09C5";
        var m = true;
        var j = new Image();
        j.onerror = function(t, u, s) {
            console.log("extractMdn complete invoking confirmation");
            console.log("jqXHR : " + s);
            console.log("data : " + t);
            var q = "action=getIdentity&sessionId=" + p;
            if (m) {
                q += "&verify=" + m + "&mdn=" + o;
            }
            console.log("dataStr : " + q);
            var r = g.APP + "/wz/lineidentity/" + o + "/" + p + "/" + g.ORGANIZATIONID + "?verify=" + m + "&status=success";
            g.get(r, function(v) {
                if (v.status === "SUCCESS") {
                    document.getElementById("alertSuccess").style.display = "block";
                } else {
                    document.getElementById("input-payment-telephone").style.display = "none";
                    document.getElementById("input-otp").style.display = "block";
                    document.getElementById("alertDanger").style.display = "block";
                    document.getElementById("verifyOtpBtn").style.display = "block";
                    document.getElementById("button-guest").style.display = "none";
                }
                console.log("identity : " + JSON.stringify(t));
            });
        };
        j.src = n;
    };
    return g;
}(window.wigzo || {}));