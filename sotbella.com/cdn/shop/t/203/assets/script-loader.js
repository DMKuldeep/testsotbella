class LazyScriptLoader {
    constructor() {
        this.scripts = [], this.selector = 'script[data-loading="lazy"][data-src]', this.interactionEvents = ["mouseover", "keydown", "touchmove", "touchstart", "click"], this.loadAfterMsIfNoInteraction = 5e3, this.loadTimer = null
    }
    init() {
        this.scripts = document.querySelectorAll(this.selector), 0 !== this.scripts.length && (this.interactionEvents.forEach(t => {
            document.addEventListener(t, this.startLoadingScripts.bind(this), {
                passive: !0
            })
        }), this.loadTimer = setTimeout(this.startLoadingScripts.bind(this), this.loadAfterMsIfNoInteraction))
    }
    startLoadingScripts() {
        clearTimeout(this.loadTimer), this.loadScripts(), this.interactionEvents.forEach(t => {
            document.removeEventListener(t, this.startLoadingScripts.bind(this), {
                capture: !0
            })
        })
    }
    loadScripts() {
        this.scripts.forEach(t => {
            "loaded" !== t.dataset.loading && this.loadScript(t)
        })
    }
    loadScript(t) {
        t.dataset.loading = "loaded", t.src = t.dataset.src, t.removeAttribute("data-src"), console.log("loaded script", t.src)
    }
}
const loader = new LazyScriptLoader;
window.onload = loader.init.bind(loader);