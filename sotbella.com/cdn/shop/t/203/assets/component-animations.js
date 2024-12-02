! function e(t) {
    let i = Shopify || !0 === Shopify.designMode ? 0 : .15,
        s = new IntersectionObserver(e => {
            e.forEach(e => {
                e.isIntersecting ? (e.target.classList.add("section-anim-in"), e.target.classList.add("section-in-view"), e.target.dispatchEvent(new CustomEvent("section:in-viewport"))) : e.target.classList.remove("section-in-view")
            })
        }, {
            root: null,
            rootMargin: "0px",
            threshold: [i, 1]
        });
    t.forEach(e => {
        s.observe(e)
    })
}(document.querySelectorAll(".shopify-section"));