class DrawerMenu extends HTMLElement {
    constructor() {
        super(), this.el = this, this.mainLevel = this.el.querySelector(".drawer-menu__contents"), this.init()
    }
    init() {
        this.firstLevelItemsWithChildren = this.el.querySelectorAll(".drawer-menu__item__input"), this.firstLevelItemsWithChildren.forEach(e => {
            e.addEventListener("change", this.toggleMenuItem.bind(this))
        }), this.closeButtons = this.el.querySelectorAll("[data-close]"), this.closeButtons.forEach(e => {
            e.addEventListener("click", this.closeAllItems.bind(this))
        }), this.overlay = this.el.querySelector("[data-overlay]"), this.overlay.addEventListener("click", this.closeAllItems.bind(this)), this.secondLevelBackButtons = this.el.querySelectorAll("[data-drawer-submenu-close]"), this.secondLevelBackButtons.forEach(e => {
            e.addEventListener("click", this.toggleSubPanel.bind(this))
        }), this.subitemOpeners = document.querySelectorAll("[data-drawer-submenu-open]"), this.subitemOpeners.forEach(e => {
            e.addEventListener("click", this.toggleMenuItemFromTheme.bind(this))
        })
    }
    closeAllItems(e, t) {
        let s = this.mainLevel.querySelectorAll("input:checked");
        s.forEach(e => {
            if (t && e === t) return;
            e.checked = !1;
            let s = e.closest("[data-accordion-item]");
            if (s && (s.classList.remove("is-open"), screen.width <= 820)) {
                let i = s.closest(".drawer-menu__contents");
                i.classList.remove("pull-left")
            }
        }), t || this.mainLevel.classList.remove("has-open-submenu")
    }
    toggleMenuItem(e) {
        let t = e.currentTarget || e;
        if (!t) return;
        this.closeAllItems(e, t);
        let s = t.closest("[data-accordion-item]");
        if (s) {
            if (screen.width <= 820) {
                let i = s.closest(".drawer-menu__contents");
                i.classList.toggle("pull-left")
            }
            s.classList.toggle("is-open"), s.classList.contains("is-open") ? this.mainLevel.classList.add("has-open-submenu") : this.mainLevel.classList.remove("has-open-submenu")
        }
    }
    toggleMenuItemFromTheme(e) {
        let t = !1,
            s = e.currentTarget || e,
            i = s.getAttribute("data-drawer-submenu-open");
        for (let l of this.firstLevelItemsWithChildren)
            if (l.getAttribute("data-href") === i) {
                t = l;
                break
            }
        if (!t) return;
        Woolman.ModalsAndDrawers.showModalOrDrawer(this.el.getAttribute("id"));
        let r = () => {
            this.el.removeEventListener("transitionend", r);
            let e = new Event("change");
            t.checked = !0, t.dispatchEvent(e)
        };
        this.el.addEventListener("transitionend", r)
    }
    toggleSubPanel(e) {
        this.closeAllItems();
        let t = e.currentTarget,
            s = t.getAttribute("data-drawer-submenu-close");
        if (!s) return;
        let i = document.getElementById(s);
        i && i.focus()
    }
}
void 0 === customElements.get("drawer-menu") && customElements.define("drawer-menu", DrawerMenu);