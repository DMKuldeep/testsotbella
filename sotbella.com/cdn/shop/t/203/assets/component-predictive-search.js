class PredictiveSearch extends HTMLElement {
    constructor() {
        super(), this.cachedResults = {}, this.input = this.querySelector('input[type="search"]'), this.resetButton = this.querySelector('button[type="reset"]'), this.predictiveSearchResults = this.querySelector("[data-predictive-search]"), this.allPredictiveSearchInstances = document.querySelectorAll("predictive-search"), this.isOpen = !1, this.abortController = new AbortController, this.searchTerm = "", this.input && (this.input.form.addEventListener("reset", this.onFormReset.bind(this)), this.input.addEventListener("input", debounce(t => {
            this.onChange(t)
        }, 300).bind(this)), "" != this.input.value && this.onFocus()), this.setupEventListeners()
    }
    setupEventListeners() {
        this.input.form.addEventListener("submit", this.onFormSubmit.bind(this)), this.input.addEventListener("focus", this.onFocus.bind(this)), this.addEventListener("keyup", this.onKeyup.bind(this)), this.addEventListener("keydown", this.onKeydown.bind(this))
    }
    getQuery() {
        return this.input.value.trim()
    }
    onChange() {
        this.toggleResetButton();
        let t = this.getQuery();
        if (this.searchTerm && t.startsWith(this.searchTerm) || this.querySelector("#predictive-search-results-groups-wrapper") ? .remove(), this.updateSearchForTerm(this.searchTerm, t), this.searchTerm = t, !this.searchTerm.length) {
            this.close(!0);
            return
        }
        this.getSearchResults(this.searchTerm)
    }
    onFormSubmit(t) {
        this.getQuery().length || t.preventDefault()
    }
    onFormReset(t) {
        t.preventDefault(), this.input.value = "", this.input.focus(), this.toggleResetButton(), this.searchTerm = "", this.abortController.abort(), this.abortController = new AbortController, this.closeResults(!0)
    }
    onFocus() {
        let t = this.getQuery();
        t.length && (this.searchTerm !== t ? this.onChange() : "true" === this.getAttribute("results") ? this.open() : this.getSearchResults(this.searchTerm))
    }
    onFocusOut() {
        setTimeout(() => {
            this.contains(document.activeElement) || this.close()
        })
    }
    onKeyup(t) {
        switch (this.getQuery().length || this.close(!0), t.preventDefault(), t.code) {
            case "ArrowUp":
                this.switchOption("up");
                break;
            case "ArrowDown":
                this.switchOption("down");
                break;
            case "Enter":
                this.selectOption()
        }
    }
    onKeydown(t) {
        ("ArrowUp" === t.code || "ArrowDown" === t.code) && t.preventDefault()
    }
    updateSearchForTerm(t, e) {
        let s = this.querySelector("[data-predictive-search-search-for-text]"),
            i = s ? .textContent;
        if (i) {
            if (i.match(RegExp(t, "g")).length > 1) return;
            let r = i.replace(t, e);
            s.textContent = r
        }
    }
    switchOption(t) {
        if (!this.getAttribute("open")) return;
        let e = "up" === t,
            s = this.querySelector('[aria-selected="true"]'),
            i = Array.from(this.querySelectorAll("li, button.predictive-search__item")).filter(t => null !== t.offsetParent),
            r = 0;
        if (e && !s) return;
        let h = -1,
            n = 0;
        for (; - 1 === h && n <= i.length;) i[n] === s && (h = n), n++;
        if (this.statusElement.textContent = "", !e && s ? r = h === i.length - 1 ? 0 : h + 1 : e && (r = 0 === h ? i.length - 1 : h - 1), r === h) return;
        let a = i[r];
        a.setAttribute("aria-selected", !0), s && s.setAttribute("aria-selected", !1), this.input.setAttribute("aria-activedescendant", a.id)
    }
    selectOption() {
        let t = this.querySelector('[aria-selected="true"] a, button[aria-selected="true"]');
        t && t.click()
    }
    getSearchResults(t) {
        let e = t.replace(" ", "-").toLowerCase();
        if (this.setLiveRegionLoadingState(), this.cachedResults[e]) {
            this.renderSearchResults(this.cachedResults[e]);
            return
        }
        fetch(`${routes.predictive_search_url}?q=${encodeURIComponent(t)}&section_id=predictive-search`, {
            signal: this.abortController.signal
        }).then(t => {
            if (!t.ok) {
                var e = Error(t.status);
                throw this.close(), e
            }
            return t.text()
        }).then(t => {
            let s = new DOMParser().parseFromString(t, "text/html").querySelector("#shopify-section-predictive-search").innerHTML;
            this.allPredictiveSearchInstances.forEach(t => {
                t.cachedResults[e] = s
            }), this.renderSearchResults(s)
        }).catch(t => {
            if (t ? .code !== 20) throw this.close(), t
        })
    }
    setLiveRegionLoadingState() {
        this.statusElement = this.statusElement || this.querySelector(".predictive-search-status"), this.loadingText = this.loadingText || this.getAttribute("data-loading-text"), this.setLiveRegionText(this.loadingText), this.setAttribute("loading", !0)
    }
    setLiveRegionText(t) {
        this.statusElement.setAttribute("aria-hidden", "false"), this.statusElement.textContent = t, setTimeout(() => {
            this.statusElement.setAttribute("aria-hidden", "true")
        }, 1e3)
    }
    renderSearchResults(t) {
        this.predictiveSearchResults.innerHTML = t, this.setAttribute("results", !0), this.setLiveRegionResults(), this.open()
    }
    setLiveRegionResults() {
        this.removeAttribute("loading"), this.setLiveRegionText(this.querySelector("[data-predictive-search-live-region-count-value]").textContent)
    }
    open() {
        this.setAttribute("open", !0), this.input.setAttribute("aria-expanded", !0), this.isOpen = !0
    }
    close(t = !1) {
        this.closeResults(t), this.isOpen = !1
    }
    closeResults(t = !1) {
        t && (this.input.value = "", this.removeAttribute("results"));
        let e = this.querySelector('[aria-selected="true"]');
        e && e.setAttribute("aria-selected", !1), this.input.setAttribute("aria-activedescendant", ""), this.removeAttribute("loading"), this.removeAttribute("open"), this.input.setAttribute("aria-expanded", !1), this.resultsMaxHeight = !1, this.predictiveSearchResults.removeAttribute("style")
    }
    toggleResetButton() {
        let t = this.resetButton.classList.contains("hidden");
        this.input.value.length > 0 && t ? this.resetButton.classList.remove("hidden") : 0 !== this.input.value.length || t || this.resetButton.classList.add("hidden")
    }
}
customElements.define("predictive-search", PredictiveSearch);