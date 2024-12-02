function cffPCScriptLoader() {
    var t = window.cffCustomer && window.cffCustomer.id,
        e = (() => {
            var t = "cff_cart_persistify_storage";
            return !(!(() => {
                var t = new Date;
                try {
                    return localStorage.setItem(t, t), localStorage.getItem(t), localStorage.removeItem(t), localStorage
                } catch (t) {
                    return
                }
            })() || !localStorage.getItem(t)) || -1 < document.cookie.indexOf(t)
        })(),
        o = 0 <= window.location.href.indexOf("/account"),
        r = 0 <= window.location.href.indexOf("/login");
    (t || e || o || r) && ((t = document.createElement("script")).setAttribute("async", ""), t.setAttribute("src", "//customer-first-focus.b-cdn.net/cffPC.production.min.js"), document.head.appendChild(t))
}
cffPCScriptLoader();