"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [1142], {
        1717: (e, t, a) => {
            a.r(t), a.d(t, {
                getEvents: () => q
            });
            var n = a(76884);

            function r(e, t) {
                const a = {};
                for (const n of e) {
                    const e = t(n);
                    a[e] || (a[e] = []), a[e].push(n)
                }
                return a
            }
            var _ = a(37044),
                o = a(76128),
                d = a(28993),
                i = a(61867),
                c = a(77629),
                l = a(68777),
                s = a(24707),
                u = a(32551),
                m = a(52373),
                p = a(4413),
                h = a(70959),
                v = a(92408),
                f = a(15896),
                b = a(8564),
                g = a(81781),
                y = a(81215),
                k = a(83415),
                w = a(37892),
                S = a(65829),
                D = a(81086),
                C = a(20212);
            const L = {
                    addNewCard: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:add_new_card_page",
                            data: { ...t,
                                saved_card_details: B(),
                                from_section: O.section
                            }
                        }
                    },
                    app: function() {
                        const e = (0, c.$j)();
                        return O.renderTimestamp = e, [new Promise((t => {
                            (0, d.Sb)(), (0, d.cF)(), (0, d.T7)();
                            const a = (0, c.gi)(),
                                n = (0, c.qO)(),
                                r = (0, k.hA)() ? 1 : (0, k.Rr)() ? 2 : 0;
                            let _ = null,
                                o = null;
                            a && e && (_ = e - a, _ > 12e4 && (_ = null)), e && (0, c.qO)() && (o = e - n);
                            const i = {
                                checkout_prefill_redirection: (0, C.u)()
                            };
                            (0, D.Oe)(i), setTimeout((() => t({
                                name: "render:complete",
                                data: { ...O.prefillData,
                                    timeSinceOpen: _,
                                    timeSinceRedirect: o,
                                    resume_journey: r,
                                    isTPVOrder: (0, b.m)(),
                                    isPartialPayment: (0, p.AN)(),
                                    globalEdgeToken: Boolean(window.session_token),
                                    ...(0, D.jW)(i)
                                }
                            })), 1e3)
                        })), {
                            name: "add_meta",
                            data: {
                                isTPVOrder: (0, b.m)(),
                                isPartialPayment: (0, p.AN)(),
                                section: (0, l.Rl)("prefill.method") ? "prefill" : (0, g.QJ)() ? "custom" : "generic"
                            }
                        }]
                    },
                    confirm_checkout_exit: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = [];
                        if ((0, y.X)()) {
                            var n, r, _;
                            const e = {
                                coupon_applied: !(null == t || null === (n = t.message) || void 0 === n || !n.data),
                                coupon_savings: (null == t || null === (r = t.message) || void 0 === r || null === (_ = r.data) || void 0 === _ ? void 0 : _.amount) || ""
                            };
                            a.push({
                                name: "render:1cc_exit_checkout_bottom_sheet_shown",
                                data: e
                            })
                        }
                        return "back" === (null == t ? void 0 : t.from) && a.push("render:contact_page_back_modal"), a
                    },
                    contactDetailsBottomSheet: "behav:home_screen_change_contact_modal_rendered",
                    order_summary_widget: function(e) {
                        return [{
                            name: "render:1cc_summary_screen_loading_initiated",
                            data: {
                                isBrandedButtonClicked: "branded" === (0, k.ID)()[0],
                                timeSinceBrandedButtonClicked: (0, k.ID)()[1] || !1
                            }
                        }, F.summaryLoadComplete(e).catch((() => {}))]
                    },
                    summary_address_block: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.summaryAddressId = t.address_id
                    },
                    order_summary: e => {
                        let {
                            detail: t
                        } = e;
                        return [{
                            name: "behav:view_details_clicked",
                            data: t
                        }, "render:1cc_order_summary_shown"]
                    },
                    magic_redirect: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:1cc_inventory_error_shown",
                            data: {
                                page_shown: t.page_shown
                            }
                        }
                    },
                    verify_otp: function(e) {
                        let {
                            detail: t
                        } = e;
                        return new Promise((e => {
                            setTimeout((() => e({
                                name: "render:1cc_rzp_otp_screen_loaded",
                                data: { ...O.statusCheckData,
                                    previous_page: O.previous_page,
                                    ...t || {}
                                }
                            })), 500)
                        }))
                    },
                    coupons_list: function() {
                        return new Promise((e => {
                            setTimeout((() => {
                                e({
                                    name: "render:1cc_coupons_screen_loaded",
                                    data: O.couponsListData
                                })
                            }))
                        }))
                    },
                    coupon_celebration_sheet: function() {
                        return {
                            name: "render:coupon_celebration_bottom_sheet_appears"
                        }
                    },
                    delivery_options: function() {
                        return new Promise((e => {
                            setTimeout((() => {
                                e({
                                    name: "render:1cc_delivery_screen_loaded",
                                    data: O.deliveryOptionsListData
                                })
                            }))
                        }))
                    },
                    new_shipping_address: "render:1cc_add_new_address_screen_loaded_completed",
                    select_shipping_address: "render:1cc_saved_shipping_address_screen_loaded",
                    cod_l1: function() {
                        const e = {
                            payment_method: "cod",
                            method_name: "cod",
                            isDesktop: (0, i.hY)(),
                            source: "cod_l1"
                        };
                        return ["render:1cc_payment_cod_L1_screen_loads", {
                            name: "method:selected",
                            data: e
                        }, {
                            name: "behav:1cc_payment_home_screen_method_selected",
                            data: e
                        }]
                    },
                    payment_methods: function(e) {
                        var t;
                        let {
                            detail: a
                        } = e;
                        const n = O.screen;
                        O.screen = "L0";
                        const _ = a.blocks.reduce(((e, t) => {
                                const a = t.instruments,
                                    n = [];
                                return a.forEach((e => {
                                    n.push({
                                        name: e.module.name,
                                        custom: Boolean(t.custom),
                                        critical: e.critical
                                    })
                                })), e.push(...n), e
                            }), []),
                            o = _.map((e => e.name));
                        let d = {};
                        const c = _.find((e => e.name === u.G7));
                        c && (d = {
                            name: "render:netbanking_shown_L0",
                            data: {
                                is_method_level_downtime: c.critical,
                                section: O.section
                            }
                        });
                        const s = [{
                                name: "add_meta",
                                data: {
                                    from_screen: n,
                                    screen: O.screen
                                }
                            }, {
                                name: "render:1cc_payment_home_screen_loaded",
                                data: {
                                    timeSinceRender: Date.now() - O.renderTimestamp,
                                    methods_shown: o,
                                    user_contact: a.user_contact,
                                    user_email: a.user_email
                                }
                            }, new Promise((e => {
                                setTimeout((() => {
                                    const t = O.methodsSectionsShown || new Map;
                                    e({
                                        name: "add_meta",
                                        data: {
                                            is_p13n_shown: t.has("recommended") ? "yes" : "no"
                                        }
                                    })
                                }), 4e3)
                            })), {
                                name: "render:home_screen_shown",
                                data: {
                                    generic_section_method_open: (0, i.hY)() ? a.initialTab : (0, l.Rl)("prefill.method"),
                                    methods_with_offers: r((0, p.Rg)() || [], (e => e.payment_method)),
                                    timeSinceRender: Date.now() - O.renderTimestamp,
                                    methods_shown: o,
                                    instrument_shown: O.defaultShownInstruments,
                                    user_contact: a.user_contact,
                                    user_email: a.user_email
                                }
                            }, d, !(0, i.hY)() && new Promise((e => {
                                setTimeout((() => {
                                    const t = O.prefillMethod,
                                        a = O.methodsSectionsShown || new Map,
                                        n = {
                                            is_p13n_shown: a.has("recommended") ? "yes" : "no",
                                            p13n_methods_shown: a.get("recommended"),
                                            is_generic_shown: a.has("generic") || !(0, g.QJ)() ? "yes" : "no",
                                            generic_methods_shown: a.get("generic"),
                                            is_custom_shown: a.has("custom") ? "yes" : "no",
                                            custom_methods_shown: a.get("custom"),
                                            is_redirected_to_prefill_method: t ? "yes" : "no",
                                            prefill_methods_shown: t
                                        };
                                    e({
                                        name: "section:shown",
                                        data: n
                                    })
                                }), 4e3)
                            }))],
                            m = _.filter((e => e.critical));
                        if (m.length && s.push({
                                name: "render:sr_method_issue",
                                data: {
                                    methods: m.map((e => e.name))
                                }
                            }, {
                                name: "add_meta",
                                data: {
                                    methods: m.map((e => e.name))
                                }
                            }), null !== (t = a.offers) && void 0 !== t && t.length && (O.offers = a.offers || []), o.includes(u.In)) {
                            var h;
                            let e = [];
                            const t = {
                                section: "generic",
                                screen: "L0",
                                is_method_level_downtime: a.card_down,
                                cfb: a.cfb
                            };
                            if (null !== (h = a.offers) && void 0 !== h && h.length) {
                                var v;
                                e = O.offers.filter((e => e.payment_method === u.In)), null !== (v = e) && void 0 !== v && v.length && (t.offers = e)
                            }
                            s.push({
                                name: "render:cards_method_shown",
                                data: t
                            })
                        }
                        return o.includes(u.bU) && s.push({
                            name: "render:upi_shown",
                            data: {
                                from_section: "generic",
                                from_screen: "L0"
                            }
                        }), s
                    },
                    method_l1: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = O.screen;
                        O.screen = "L1";
                        const n = { ...t,
                                source: "method_l1",
                                section: O.section,
                                from: O.last_method,
                                screen: O.screen
                            },
                            r = [{
                                name: "render:1cc_payment_L1_screen_loaded",
                                data: n
                            }, {
                                name: "render:payment_L1_screen_loaded",
                                data: n
                            }, {
                                name: "add_meta",
                                data: {
                                    from_screen: a,
                                    screen: O.screen
                                }
                            }];
                        var _;
                        t.isDesktop && (r.push({
                            name: "method:selected",
                            data: n
                        }), r.push({
                            name: "behav:1cc_payment_home_screen_method_selected",
                            data: n
                        }), t.payment_method === u.bU && r.push({
                            name: "behav:upi_selected",
                            data: { ...n,
                                from_screen: "L0"
                            }
                        }), t.payment_method === u.In && r.push({
                            name: "behav:card_selected",
                            data: { ...n,
                                saved_card_count: (null === (_ = t.savedcards) || void 0 === _ ? void 0 : _.length) || 0
                            }
                        }));
                        return O.last_method = t.payment_method, r
                    },
                    method_dropdown: function(e) {
                        var t;
                        let {
                            detail: a
                        } = e;
                        O.defaultSelectedMethod || (O.defaultSelectedMethod = a.method_selected), O.defaultShownInstruments || (O.defaultShownInstruments = a.shown), delete a.shown;
                        const n = (0, h.z)();
                        return [{
                            name: "render:payment_home_screen_method_dropdown_renders",
                            data: { ...a,
                                method_selected: a.method_selected,
                                num_saved_cards: (0, v.U2)(n).length,
                                saved_card_details: B(),
                                upi_intent_available: (0, f.Qb)().length,
                                upi_collect_prefilled: Boolean((0, l.Rl)("prefill.vpa")),
                                upi_app_details: (0, f.Qb)(S.w1),
                                wallet_details: a.wallet_details || [],
                                paylater_shown_drop_down_details: a.paylater || [],
                                num_paylater_options: (null === (t = a.paylater) || void 0 === t ? void 0 : t.length) || 0,
                                number_of_UPI_apps_shown: (0, f.Qb)(S.w1).length || 0,
                                card_type_details: r(B(), (e => e.type))
                            }
                        }, {
                            name: "render:1cc_payment_home_screen_method_dropdown_renders",
                            data: a
                        }]
                    },
                    contactForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        return new Promise((e => {
                            setTimeout((() => e({
                                name: "render:contact_page",
                                data: {
                                    edit: null == t ? void 0 : t.edit,
                                    offers_available: (0, p.Rg)(),
                                    ...O.prefillData,
                                    ...O.emailShownData
                                }
                            })), 1e3)
                        }))
                    },
                    collectForm: function() {
                        return ["render:add_upi_id_screen_rendered_event"]
                    },
                    retry_modal: function(e) {
                        var t;
                        let {
                            detail: a
                        } = e;
                        return [{
                            name: "add_meta",
                            data: {
                                payment_fail_reason_main: null == a || null === (t = a.error) || void 0 === t ? void 0 : t.description
                            }
                        }, new Promise((e => {
                            setTimeout((() => {
                                var t, n, r;
                                const _ = O.errorMethod;
                                let o = 0;
                                const d = [],
                                    i = null === (t = O.retryInstruments) || void 0 === t ? void 0 : t.map((e => {
                                        var t, a, n;
                                        const r = e;
                                        var _;
                                        (null == r || null === (t = r.config) || void 0 === t ? void 0 : t.method) === u.In && null != r && null !== (a = r.config) && void 0 !== a && a.token && (o++, d.push(...B(null == r || null === (_ = r.config) || void 0 === _ ? void 0 : _.token) || []));
                                        return null === (n = r.module) || void 0 === n ? void 0 : n.name
                                    })),
                                    c = [...new Set(i)];
                                return delete O.errorMethod, delete O.retryInstruments, e({
                                    name: "render:retry_modal",
                                    data: {
                                        instruments_shown_on_retry: O.retryInstruments,
                                        payment_fail_reason_main: null == a || null === (n = a.error) || void 0 === n ? void 0 : n.description,
                                        is_others_rendered: c.length > 0,
                                        is_saved_cards_rendered: o > 0,
                                        saved_card_count: o,
                                        saved_card_details: d,
                                        is_upi_renderd: c.includes("upi"),
                                        is_qr_renderd: c.includes("qr"),
                                        upi_count: null === (r = c.filter((e => "upi" === e))) || void 0 === r ? void 0 : r.length,
                                        method_failed: _,
                                        methods_shown_on_retry: c,
                                        method_offer: (0, p.Rg)().filter((e => c.includes(e.payment_method)))
                                    }
                                })
                            }), 2e3)
                        }))]
                    },
                    instrument_list: function(e) {
                        let {
                            detail: t,
                            matchParent: a
                        } = e;
                        if (a("payment_methods") && t.section) {
                            O.methodsSectionsShown || (O.methodsSectionsShown = new Map);
                            const e = t.section;
                            if (O.methodsSectionsShown.has(e)) return;
                            const a = t.instruments.map((e => {
                                let {
                                    module: t
                                } = e;
                                return t.name
                            }));
                            O.methodsSectionsShown.set(e, a)
                        }
                    },
                    top_offer_section: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:top_offer_section",
                            data: t
                        }
                    },
                    offer_container: "render:offer_container",
                    offer_detail_card: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_detail_card",
                            data: t
                        }
                    },
                    offer_list_dialog: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_list_dialog",
                            data: t
                        }
                    },
                    offer_dialog: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_dialog",
                            data: t
                        }
                    },
                    offer_widget: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_widget",
                            data: t
                        }
                    },
                    terms_and_policies_screen: "render:1cc_terms_policies_bottom_sheet_shown",
                    rtb: "render:1cc_RTB_bottomsheet_loaded",
                    inventory_error_go_to_cart_clicked: "behav:1cc_inventory_error_go_to_cart_clicked",
                    order_instructions: "render:1cc_order_instructions_field_shown",
                    gstin_field: "behav:1cc_gstin_field_shown",
                    language_screen: "render:1cc_language_options_shown",
                    account_screen: "behav:1cc_contact_details_bottom_sheet_shown",
                    account_popover: "render:1cc_account_screen_bottom_sheet_loaded",
                    third_party_address_consent_screen: "1cc_load_saved_address_bottom_sheet_shown",
                    third_party_address_consent_error_screen: "1cc_load_saved_address_bottom_error_sheet_shown",
                    upi_qr: "render:1cc_upi_qr_generated",
                    cod_l0: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:1cc_cod_block",
                            data: t
                        }
                    },
                    partial_payment_payment_type_screen: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:payment_type_screen",
                            data: t
                        }
                    },
                    truecaller_verification_screen_loads: "render:truecaller_verification_screen_loads",
                    checkout_failure_screen_loaded: "render:checkout_failure_screen_loaded",
                    buyer_protect: function(e) {
                        let {
                            detail: t
                        } = e;
                        return "banner" === (null == t ? void 0 : t.type) ? {
                            name: "render:protect_tagline",
                            data: {
                                page: t.page
                            }
                        } : "badge" === (null == t ? void 0 : t.type) ? {
                            name: "render:protect_logo_near_amount",
                            data: {
                                page: t.page
                            }
                        } : "order-summary" === (null == t ? void 0 : t.type) ? {
                            name: "render:protect_order_summary",
                            data: {
                                page: t.page
                            }
                        } : void 0
                    }
                },
                P = {
                    back_button: e => {
                        let {
                            detail: t
                        } = e;
                        const a = [];
                        return "contact" === (null == t ? void 0 : t.screen_name) && a.push("behav:contact_page_back_clicked"), a.push("behav:1cc_back_button_clicked"), a
                    },
                    contactDetailsBottomSheet: e => {
                        let {
                            detail: t
                        } = e;
                        return "success" === (null == t ? void 0 : t.target) ? "behav:default_l0_screen_change_contact_modal_continue_clicked" : "close" === (null == t ? void 0 : t.target) ? "behav:home_screen_change_contact_modal_close_clicked" : void 0
                    },
                    order_summary_widget: "behav:1cc_order_summary_clicked",
                    offer_dialog: function(e) {
                        let {
                            detail: t
                        } = e;
                        return "tnc" === (null == t ? void 0 : t.action) ? "behav:offer_modal_t_c_clicked_event" : "close" === (null == t ? void 0 : t.action) ? "behav:offer_modal_close_clicked_event" : "apply" === (null == t ? void 0 : t.action) ? {
                            name: "behav:offer_modal_apply_clicked_event",
                            data: {
                                offer: t.offer
                            }
                        } : "remove" === (null == t ? void 0 : t.action) ? {
                            name: "behav:offer_modal_remove_clicked_event",
                            data: {
                                offer: t.offer
                            }
                        } : void 0
                    },
                    addNewCard: function(e) {
                        let {
                            detail: t
                        } = e;
                        switch (t.action) {
                            case "continue":
                                return "behav:add_new_card_continue_clicked";
                            case "emi-plans":
                                return "behav:add_new_card_emi_plans_clicked";
                            case "show-consent":
                                return "render:add_new_card_save_card_modal_rendered";
                            case "consent-given":
                                return "behav:add_new_card_save_card_modal_saved_clicked";
                            case "consent-given-checkbox":
                                return {
                                    name: "behav:newcard_consent_given",
                                    data: {
                                        consent: t.data
                                    }
                                };
                            case "save-card-otp":
                                return {
                                    name: "api:internal_cards_otp_sent",
                                    data: t.data || {}
                                }
                        }
                    },
                    pay_without_saving_card: "behav:add_new_card_save_card_modal_non_saved_clicked",
                    allow_3p_address: "behav:1cc_use_saved_address_consent_allowed",
                    shipping_3p_address: "behav:1cc_saved_shipping_address_allowusingsavedaddress_clicked",
                    pay_with_cod: "behav:1cc_payment_cod_pay_on_delivery_confirmed",
                    select_shipping_address: function(e) {
                        return O.topShownAddrSelected = e.detail.top_shown_address, {
                            name: "behav:1cc_saved_shipping_address_selected",
                            data: e.detail
                        }
                    },
                    confirm: function(e) {
                        let {
                            detail: t,
                            matchParent: a
                        } = e;
                        return "yes" === t.target && a("confirm_checkout_exit") ? [{
                            name: "behav:contact_page_back_modal_exit_clicked"
                        }, {
                            name: "behav:1cc_exit_checkout_yes_exit_clicked"
                        }] : "no" === t.target && a("confirm_checkout_exit") ? [{
                            name: "behav:contact_page_back_modal_continue_clicked"
                        }, {
                            name: "behav:1cc_exit_checkout_continue_shopping_clicked"
                        }] : void 0
                    },
                    collectForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        return "collectField" === t.target ? {
                            name: "behav:add_upi_id_screen_upi_id_fill"
                        } : "saveField" !== t.target || t.value ? void 0 : {
                            name: "behav:add_upi_id_screen_upi_id_save_unchecked_event"
                        }
                    },
                    netbankingForm: function() {
                        return ["behav:netbanking_selected"]
                    },
                    retry_modal: function(e) {
                        let {
                            detail: t
                        } = e;
                        if ("try-again" === t.target) return {
                            name: "behav:retry_modal_try_again_clicked"
                        };
                        if ("show-all-options" === t.target) return "behav:retry_modal_show_all_options_clicked";
                        if (t.data) {
                            var a, n;
                            const e = (null == t ? void 0 : t.data.config) || {};
                            return [{
                                name: "retry:selected",
                                data: {
                                    retry_methods_selected: (null == t || null === (a = t.data) || void 0 === a || null === (n = a.module) || void 0 === n ? void 0 : n.name) || "" || (null == e ? void 0 : e.method),
                                    retry_instrument_selected: null != e && e.token ? `saved-${null==e?void 0:e.method}` : (null == e ? void 0 : e.vpa) || e
                                }
                            }, {
                                name: "behav:retry_modal_method_selected"
                            }]
                        }
                        return []
                    },
                    instrument_list: function(e) {
                        let {
                            detail: t,
                            matchParent: a
                        } = e;
                        const n = {
                                source: "instrument_list",
                                method_name: t.method,
                                section_of_method: t.section,
                                section: t.section,
                                timeSinceRender: Date.now() - O.renderTimestamp,
                                screen: "L0"
                            },
                            r = [];
                        if (t.config) {
                            const e = { ...t.config
                            };
                            return !e || t.section && !t.isCustomBlock || r.push({
                                name: "behav:lo_custom_section_method_clicked",
                                custom_method_details: e.method
                            }, {
                                name: "add_meta",
                                data: {
                                    custom_method_details: e.method
                                }
                            }), delete e.method, Object.assign(n, e), r.push({
                                name: "instrument:selected",
                                data: n
                            }), r
                        }
                        if (a("payment_methods")) {
                            const e = [{
                                name: "method:selected",
                                data: n
                            }, {
                                name: "behav:1cc_payment_home_screen_method_selected",
                                data: n
                            }];
                            return n.method_name === u.bU && e.push({
                                name: "behav:upi_selected",
                                data: n
                            }), n.method_name === u.In && e.push({
                                name: "behav:card_dropdown_clicked",
                                data: n
                            }), e
                        }
                    },
                    method_dropdown: function(e) {
                        let {
                            detail: t,
                            matchParent: a
                        } = e;
                        const n = [{
                            name: "instrument:selected",
                            data: {
                                timeSinceRender: Date.now() - O.renderTimestamp,
                                screen: a("payment_methods") ? "L0" : "L1",
                                ...t
                            }
                        }];
                        return t.method === u.G7 && n.push({
                            name: "behav:netbanking_selected",
                            data: t
                        }, {
                            name: "add_meta",
                            data: {
                                bank_detail: null == t ? void 0 : t.bank,
                                service_type: null == t ? void 0 : t.type
                            }
                        }), t.method === u.In && "new_card" === t.type && n.push({
                            name: "behav:add_new_card_clicked",
                            data: {
                                screen: O.screen || "L1"
                            }
                        }), t.method === u.bU && "intent" === t.flow && n.push({
                            name: "behav:upi_app_intent_app_open_clicked_event",
                            data: {
                                screen: a("payment_methods") ? "L0" : "L1",
                                ...t
                            }
                        }), t.method === u.In && "saved_card" === t.type && a("payment_methods") && n.push({
                            name: "behav:saved_card_selected",
                            data: { ...t,
                                from_screen: "L0",
                                section: O.section
                            }
                        }), n
                    },
                    coupons_list: function(e) {
                        const t = [];
                        return "coupons_list_dismiss" === e.detail.action_name && t.push({
                            name: "behav:1cc_coupons_screen_back_button_clicked"
                        }), "coupons_tab_clicked" === e.detail.action_name && t.push({
                            name: "behav:coupon_screen_coupons_tab_clicked",
                            data: {
                                num_coupons_available: e.detail.count
                            }
                        }), "offers_tab_clicked" === e.detail.action_name && t.push({
                            name: "behav:coupon_screen_payment_offers_tab_clicked",
                            data: {
                                num_payment_offers_available: e.detail.count
                            }
                        }), t
                    },
                    add_order_instructions: "behav:1cc_add_order_instructions_clicked",
                    add_gstIn: "behav:1cc_add_gstin_clicked",
                    change_language_clicked: "behav:1cc_account_screen_change_language_clicked",
                    logout_clicked: "behav:1cc_account_screen_logout_clicked",
                    change_contact_clicked: "behav:1cc_clicked_change_contact",
                    account_cta_clicked: "behav:1cc_account_cta_clicked",
                    RTB_badge: "behav:1cc_RTB_badge_clicked",
                    language_screen: "behav:1cc_language_options_back_clicked",
                    magic_redirect: "behav:1cc_inventory_error_go_to_cart_clicked",
                    checkout_failure_screen_cta_clicked: "behav:checkout_failure_screen_cta_clicked",
                    terms_and_policies_screen: function(e) {
                        let {
                            detail: t
                        } = e;
                        return [{
                            name: t.action_name
                        }]
                    },
                    upi_qr: ["behav:1cc_upi_qr_option_generate_clicked", "behav:qr_cta_click"],
                    partial_payment_amount_change_clicked: "behav:change_partial_payment_amount_clicked",
                    partial_payment_pay_in_partial_clicked: "behav:payment_type_partial_clicked",
                    partial_payment_pay_in_full_clicked: function(e) {
                        let {
                            detail: t
                        } = e;
                        return [{
                            name: "add_meta",
                            data: {
                                pay_in_full_amount: t.amount
                            }
                        }, {
                            name: "behav:payment_type_full_clicked",
                            data: {
                                pay_in_full_amount: t.amount
                            }
                        }]
                    },
                    buyer_protect: "behav:buyer_protect_clicked",
                    cod_l1: e => {
                        let {
                            detail: t
                        } = e;
                        return "full_amount" === t.partial_cod_cta ? {
                            name: "behav:1cc_pay_full_amount_clicked"
                        } : "continue" === t.partial_cod_cta ? {
                            name: "behav:1cc_continue_with_partial_cod",
                            data: {
                                initial_amount: t.partial_cod_amount,
                                method: "partial cod"
                            }
                        } : void 0
                    },
                    partial_cod_strip: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behave: 1cc_remove_cod_on_L1_screen",
                            data: {
                                initial_amount: t.partial_cod_amount,
                                method: "partial cod"
                            }
                        }
                    },
                    partial_cod_banner: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behave: 1cc_remove_cod_on_L1_screen",
                            data: {
                                initial_amount: t.partial_cod_amount,
                                method: "partial cod"
                            }
                        }
                    }
                },
                T = {
                    magic_home: function() {
                        return {
                            name: "behav:1cc_summary_screen_continue_cta_clicked"
                        }
                    },
                    new_shipping_address: function() {
                        return new Promise((e => {
                            setTimeout((() => {
                                e({
                                    name: "behav:1cc_add_new_address_screen_continue_CTA_clicked",
                                    data: { ...O.newAddrSubmitData
                                    }
                                }), delete O.newAddrSubmitData
                            }), 1e3)
                        }))
                    },
                    select_shipping_address: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = t.selectedShippingAddress;
                        return {
                            name: "behav:1cc_saved_address_screen_continue_CTA_clicked",
                            data: {
                                address_id: null == a ? void 0 : a.id,
                                address_source: null == a ? void 0 : a.source_type,
                                top_shown_address_selected: O.topShownAddrSelected
                            }
                        }
                    },
                    delivery_options: function() {
                        let e = {};
                        return O.deliveryOptionsListData && (e.top_shown_option = O.deliveryOptionsListData.top_shown_option), O.selectDeliveryOptionData && (e = { ...e,
                            ...O.selectDeliveryOptionData
                        }), delete O.deliveryOptionsListData, delete O.selectDeliveryOptionData, {
                            name: "behav:1cc_delivery_screen_cta_clicked",
                            data: e
                        }
                    },
                    otp: function(e) {
                        let {
                            matchParent: t
                        } = e;
                        var a;
                        if (t("verify_otp")) return {
                            name: "behav:1cc_rzp_otp_submitted",
                            data: {
                                otp_reason: null === (a = O.statusCheckData) || void 0 === a ? void 0 : a.otp_reason
                            }
                        }
                    },
                    contactForm: function(e) {
                        var t;
                        let {
                            detail: a,
                            log: n
                        } = e;
                        const {
                            contact: r,
                            email: _
                        } = a.data, o = {
                            user_contact: r,
                            user_email: _,
                            edit: (null == n || null === (t = n.trackDetail) || void 0 === t ? void 0 : t.edit) || !1
                        };
                        return [{
                            name: "behav:continue_clicked",
                            data: o
                        }, {
                            name: "add_meta",
                            data: o
                        }, {
                            name: "render:1cc_contact_details_continue_clicked"
                        }]
                    },
                    partialPaymentForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            selectedPaymentType: a
                        } = t.data;
                        return {
                            name: "behav:payment_type_continue_clicked",
                            data: {
                                paymentType: a.value,
                                errors: t.errors
                            }
                        }
                    },
                    collectForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            vpa: a,
                            ...n
                        } = t.data;
                        return [{
                            name: "behav:add_upi_id_screen_continue_clicked_event",
                            data: n,
                            upi_id_entered: a
                        }, {
                            name: "add_meta",
                            data: {
                                upi_id_entered: a
                            }
                        }]
                    },
                    savedCardCvv: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:card_cvv_modal_continue_clicked",
                            data: { ...t.data || {},
                                screen: O.screen || "L0",
                                section: O.section
                            }
                        }
                    },
                    coupons_manual_application: function(e) {
                        return {
                            name: "behav:1cc_coupons_screen_custom_coupon_entered",
                            data: { ...e.detail,
                                page: e.log.parent.name || "app"
                            }
                        }
                    }
                },
                I = {
                    contactForm: function(e) {
                        var t;
                        let {
                            detail: a,
                            log: n
                        } = e;
                        const r = [],
                            _ = (null == n || null === (t = n.trackDetail) || void 0 === t ? void 0 : t.edit) || !1;
                        return "input" !== a.reason || "contact" !== a.name || O.contactStarted || (O.contactStarted = !0, r.push({
                            name: "behav:contact:init",
                            data: {
                                value: a.data.contact,
                                edit: _
                            }
                        })), "blur" === a.reason && "contact" === a.name && O.contactStarted && (O.contactStarted = !1, a.errors.contact ? (r.push({
                            name: "behav:contact_number_error",
                            data: {
                                error_description: a.errors.contact,
                                edit: _
                            }
                        }), r.push({
                            name: "render:1cc_summary_screen_contact_invalid_error_shown"
                        })) : (r.push({
                            name: "add_meta",
                            data: {
                                contact_number_entered: a.data.contact
                            }
                        }), r.push({
                            name: "behav:contact:filled",
                            data: {
                                value: a.data.contact,
                                edit: _
                            }
                        }), (0, y.X)() && r.push({
                            name: "behav:1cc_summary_screen_contact_number_entered",
                            data: {
                                contact_number_entered: a.data.contact,
                                edit: _
                            }
                        }))), "input" !== a.reason || "email" !== a.name || O.emailStarted || (O.emailStarted = !0, r.push({
                            name: "behav:email:init",
                            data: {
                                email_entered: a.data.email,
                                edit: _
                            }
                        })), "blur" === a.reason && "email" === a.name && O.emailStarted && (O.emailStarted = !1, a.errors.email ? r.push({
                            name: "behav:contact_email_error",
                            data: {
                                error_description: a.errors.email,
                                edit: _
                            }
                        }) : (r.push({
                            name: "add_meta",
                            data: {
                                email_entered: a.data.email,
                                edit: _
                            }
                        }), r.push({
                            name: "behav:email:filled",
                            data: {
                                email_entered: a.data.email,
                                edit: _
                            }
                        }), (0, y.X)() && r.push({
                            name: "behav:1cc_summary_screen_contact_email_entered",
                            data: {
                                contact_number_entered: a.data.email,
                                edit: _
                            }
                        }))), r
                    },
                    "add-new-card": function(e) {
                        let {
                            detail: t
                        } = e;
                        return "blur" === t.reason && Object.keys((null == t ? void 0 : t.errors) || {}).length ? {
                            name: "behav:add_new_card_input_error",
                            data: {
                                count: Object.keys((null == t ? void 0 : t.errors) || {}).length,
                                error_description: null == t ? void 0 : t.errors
                            }
                        } : "blur" === t.reason && 0 === Object.keys((null == t ? void 0 : t.errors) || {}).length ? {
                            name: "behav:add_new_card_details_filled"
                        } : void 0
                    },
                    new_shipping_address: function(e) {
                        let {
                            detail: t
                        } = e;
                        if ("input" === t.reason) return;
                        void 0 === t.data.landmark && (t.data.landmark = ""), O.new_shipping_address_changes || (O.new_shipping_address_changes = Object.fromEntries(Object.keys(t.data).map((e => [e, ""]))));
                        const a = Object.keys(t.data).filter((e => {
                            const a = ["country", "zipcode", "state", "city", "name", "line1", "line2", "landmark"].includes(e),
                                n = O.new_shipping_address_changes[e] !== t.data[e];
                            return a && n
                        }));
                        return O.new_shipping_address_changes = t.data, a.map((e => {
                            const a = "zipcode" === e ? "pincode" : e;
                            return {
                                name: `behav:1cc_add_new_address_${a}_entered`,
                                data: {
                                    [a]: t.data[e]
                                }
                            }
                        }))
                    },
                    gstInForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        if ("blur" === t.reason && t.errors.gstIn) return {
                            name: "render:1cc_gstin_number_invalid"
                        }
                    },
                    orderNotesForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        if ("blur" === t.reason) return t.errors.orderInstruction ? {
                            name: "behav:1cc_order_instructions_invalid"
                        } : {
                            name: "behav:1cc_order_instructions_entered"
                        }
                    },
                    partialPaymentForm: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = [];
                        return "blur" === t.reason && "partialAmount" === t.name && (t.errors.partialAmount ? a.push({
                            name: "behav:payment_type_partial_fill_error",
                            data: {
                                error_description: t.errors.partialAmount
                            }
                        }) : (a.push({
                            name: "add_meta",
                            data: {
                                pay_in_partial_amount: t.data.partialAmount
                            }
                        }), a.push({
                            name: "behav:payment_type_partial_fill",
                            data: {
                                pay_in_partial_amount: t.data.partialAmount
                            }
                        }))), a
                    }
                },
                F = {
                    sectionClick: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = O.section;
                        return O.section = null == t ? void 0 : t.section, {
                            name: "add_meta",
                            data: {
                                from_section: a,
                                section: O.section
                            }
                        }
                    },
                    "1cc_summary_screen_have_coupon_clicked": "behav:1cc_summary_screen_have_coupon_clicked",
                    cod_pay_online_click: "behav:1cc_payment_cod_prepaid_selected",
                    bank_transfer_challan_print: "behav:bank_transfer_challan_print",
                    bank_transfer_pdf_failure: "bank_transfer_pdf_failure",
                    show_bank_transfer_fee_breakup: "behav:show_bank_transfer_fee_breakup",
                    bank_transfer_copy_clicked: "behav:bank_transfer_copy_clicked",
                    bank_transfer_print_click: "behav:bank_transfer_print_click",
                    cred_upi_inline_offer: "render:cred_upi_inline_offer",
                    continueButtonClickedFromMobileHome: "behav:home_screen_continue_clicked",
                    trackingError: "error:tracking",
                    preferences_diff: "preferences_diff",
                    contactWidgetClicked: "behav:home_screen_change_contact_clicked",
                    retryModalDismiss: "behav:retry_modal_close_clicked",
                    renderSavedCardCheckbox: "render:consent_box_shown",
                    login_from_truecaller_clicked: "behav:login_from_truecaller_clicked",
                    checkout_tti: "checkout_tti",
                    checkout_assets_loading: "checkout_assets_loading",
                    redirected_to_normal_flow: "redirected_to_normal_flow",
                    pay_clicked: "behav:pay_clicked",
                    quickbuy_instrument_change: "behav:quickbuy_instrument_change",
                    change_method_clicked: "change_method_clicked",
                    permalinks_redirection_init: "permalinks_redirection_init",
                    extensions_redirection_init: "extensions_redirection_init",
                    quickbuy_instrument_rendered: "render:quickbuy_instrument",
                    quickbuy_cod_rendered: "render:quickbuy_cod",
                    maestroCheckboxRender: e => {
                        let {
                            detail: t
                        } = e;
                        return [{
                            name: "render:add_new_card_maestro_checkbox_rendered",
                            data: t
                        }, {
                            name: "add_meta",
                            data: {
                                maestro: t
                            }
                        }]
                    },
                    renderSavedCardView: "behav:saved_card_expanded_on_L1",
                    MaestroCheckboxClicked: "behav:add_new_card_maestro_checkbox_clicked",
                    offerRenderOnL0: e => {
                        let {
                            detail: t
                        } = e;
                        return [{
                            name: "render:offer_l0_event",
                            data: t
                        }, {
                            name: "add_meta",
                            data: {
                                offer_section_shown: t.offer_section_shown
                            }
                        }]
                    },
                    viewAllOfferClick: "behav:offer_view_all_clicked_event",
                    offerClickFromL0: "behav:offer_l0_clicked_event",
                    offerRenderOnL1: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_l1_screen_event",
                            data: t
                        }
                    },
                    offerClickFromL1: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:offer_l1_clicked_screen_event",
                            data: t
                        }
                    },
                    renderOfferModal: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:offer_modal_event",
                            data: t
                        }
                    },
                    accountStripClick: e => {
                        let {
                            detail: t
                        } = e;
                        if ("contact" === (null == t ? void 0 : t.screen)) return {
                            name: "behav:contact_page_account_clicked"
                        }
                    },
                    thirdPartyAddressConsentUpdateStart: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:1cc_partner_address_list_start",
                            data: t
                        }
                    },
                    thirdPartyAddressConsentUpdateEnd: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:1cc_partner_address_list_end",
                            data: t
                        }
                    },
                    thirdPartyGetAddressCountStart: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:1cc_partner_address_count_start",
                            data: t
                        }
                    },
                    thirdPartyGetAddressCountEnd: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:1cc_partner_address_count_end",
                            data: t
                        }
                    },
                    thirdPartyAddressConsentToggle: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:1cc_address_consent_modal_toggle",
                            data: t
                        }
                    },
                    magicEntrySubmit: function() {
                        return {
                            name: "behav:1cc_summary_screen_continue_cta_clicked"
                        }
                    },
                    serviceability_fetch: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            input: a,
                            promise: n
                        } = t, r = a.data.addresses[0], _ = function() {
                            const e = Date.now();
                            return () => Date.now() - e
                        }();
                        return O.getServiceability || (O.getServiceabilityPromise = n), [{
                            name: "metric:checkoutshippinginfoapicallinitiated",
                            data: {
                                zipcode: r.zipcode,
                                country: r.country,
                                state: r.state
                            }
                        }, n.then((e => {
                            const t = e.data.addresses[0];
                            return {
                                name: "metric:checkoutshippinginfoapicallcompleted",
                                data: {
                                    serviceable: t.serviceable,
                                    city: t.city,
                                    country: t.country,
                                    state: t.state,
                                    zipcode: t.zipcode,
                                    response_time: _()
                                }
                            }
                        })).catch((e => {}))]
                    },
                    coupons_fetch: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            promise: a
                        } = t;
                        return O.getCoupons || (O.getCoupons = {
                            promise: a
                        }), a.then((e => {
                            var t, a;
                            const n = (null === (t = e.data) || void 0 === t ? void 0 : t.promotions) || [],
                                r = (null === (a = e.data) || void 0 === a ? void 0 : a.unavailable) || [];
                            var _, o, d;
                            O.couponsListData || (O.couponsListData = {
                                best_value_coupon_available: Boolean(null === (_ = n[0]) || void 0 === _ ? void 0 : _.bestValue) || !1,
                                best_value_coupon_code: null !== (o = n[0]) && void 0 !== o && o.bestValue ? n[0].code : "",
                                best_value_coupon_value: (null === (d = n[0]) || void 0 === d ? void 0 : d.value) || 0,
                                num_eligible_coupons: (null == n ? void 0 : n.length) || 0,
                                num_ineligible_coupons: null == r ? void 0 : r.length
                            });
                            return {
                                name: "add_meta",
                                data: {
                                    count_coupons_available: ((null == n ? void 0 : n.length) || 0) + ((0, l.Rl)("prefill.coupon_code") ? 1 : 0),
                                    count_coupon_ineligible: null == r ? void 0 : r.length
                                }
                            }
                        })).catch((() => {}))
                    },
                    summaryLoadComplete: function(e) {
                        let {
                            detail: t
                        } = e;
                        return new Promise((e => setTimeout((() => {
                            var a;
                            const n = null === (a = O.getCoupons) || void 0 === a ? void 0 : a.promise,
                                r = O.getServiceabilityPromise,
                                _ = O.summaryAddressId || "";
                            Promise.allSettled([n, r]).then((() => {
                                var a, n, r;
                                delete O.getServiceability, delete O.summaryAddressId;
                                const o = O.previous_page || "";
                                return e({
                                    name: "render:1cc_summary_screen_loaded_completed",
                                    data: {
                                        address_id: _,
                                        prefill_contact_number: t.user_contact,
                                        prefill_email: t.user_email,
                                        previous_page: o,
                                        flow: "v2",
                                        count_coupons_available: ((null === (a = O.couponsListData) || void 0 === a ? void 0 : a.num_eligible_coupons) || 0) + ((null === (n = O.couponsListData) || void 0 === n ? void 0 : n.num_ineligible_coupons) || 0),
                                        count_coupon_ineligible: (null === (r = O.couponsListData) || void 0 === r ? void 0 : r.num_ineligible_coupons) || 0,
                                        ...(0, D.jW)({
                                            checkout_prefill_redirection: (0, C.u)()
                                        })
                                    }
                                })
                            })).catch((() => {}))
                        }), 2e3)))
                    },
                    applyCoupon: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = [];
                        return a.push({
                            name: "behav:coupon_applied",
                            data: { ...t,
                                page: O.previous_page
                            }
                        }), "coupon" === t.page && a.push({
                            name: "behav:1cc_coupons_screen_coupon_applied",
                            data: {
                                coupon_source: t.input_source,
                                coupon_code: t.coupon_code
                            }
                        }), a
                    },
                    applyCouponCode: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "metric:1cc_coupons_screen_coupon_validation_completed",
                            data: {
                                coupon_code: t.code,
                                is_coupon_valid: t.valid
                            }
                        }
                    },
                    removeCoupon: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:1cc_remove_coupon_clicked",
                            data: t
                        }
                    },
                    delivery_options_list_data: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.deliveryOptionsListData = { ...t
                        }
                    },
                    select_delivery_option: function(e) {
                        let {
                            detail: t
                        } = e;
                        return O.selectDeliveryOptionData = { ...t
                        }, {
                            name: "behav:1cc_delivery_option_selected",
                            data: t
                        }
                    },
                    "clicked:edit_saved_address": function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:1cc_clicked:edit_saved_address",
                            data: {
                                address_source: t.address.source_type
                            }
                        }
                    },
                    "clicked:add_new_address": function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "checkoutAddNewAddressCTAClicked",
                            data: t
                        }
                    },
                    trigger_third_party_otp_data: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.statusCheckData = { ...t
                        }
                    },
                    trigger_otp_data: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.statusCheckData = { ...t
                        }
                    },
                    new_addr_submit_data: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.newAddrSubmitData = { ...t
                        }
                    },
                    prefill_data: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.prefillData = { ...O.prefillData,
                            ...t
                        }
                    },
                    cookie_prefill_fallback: function() {
                        return {
                            name: "cookie_prefill_fallback"
                        }
                    },
                    contact_prefill_debug: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.prefillData = { ...O.prefillData,
                            contact_prefill_debug: t
                        }
                    },
                    savedCardCvv: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            step: a,
                            ...n
                        } = t, r = {
                            screen: O.screen || "L0",
                            section: O.section,
                            ...n
                        };
                        return "render" === a ? {
                            name: "render:card_cvv_modal",
                            data: r
                        } : "focus" === a ? {
                            name: "behav:sc_cvv_fill",
                            data: r
                        } : "completed" === a ? {
                            name: "behav:sc_cvv_filled",
                            data: r
                        } : "close" === a ? {
                            name: "behav:sc_cvv_closed",
                            data: r
                        } : void 0
                    },
                    email_shown: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.emailShownData = { ...O.emailShownData,
                            ...t
                        }
                    },
                    collectForm: function() {
                        return {
                            name: "behav:L1_page_add_upi_id_numbers_selected_event"
                        }
                    },
                    retry_modal: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.retryInstruments = [...t.instruments], null != t && t.qrRendered && O.retryInstruments.push("qr")
                    },
                    prefillTabSwitch: function(e) {
                        let {
                            detail: t
                        } = e;
                        O.prefillMethod = t.method
                    },
                    upiAppInstalled: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "metric:intentAppsDetected",
                            data: t
                        }
                    },
                    upiAppShown: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:upi_apps_shown",
                            data: t
                        }
                    },
                    customBlockRender: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = t.map((e => {
                                var t;
                                return null == e || null === (t = e.instruments) || void 0 === t ? void 0 : t.map((e => {
                                    var t;
                                    return null == e || null === (t = e.module) || void 0 === t ? void 0 : t.name
                                })).join("| ")
                            })).join(", "),
                            n = [{
                                name: "render:lo_custom_section",
                                data: {
                                    custom_section_name: t.map((e => e.name)).join(", "),
                                    custom_method_shown: a
                                }
                            }, {
                                name: "add_meta",
                                data: {
                                    custom_section_name: t.map((e => e.name)).join(", ")
                                }
                            }];
                        return a.includes(u.bU) && n.push({
                            name: "render:upi_shown",
                            data: {
                                from_section: "custom",
                                from_screen: "L0",
                                intent_shown: t.some((e => {
                                    var t;
                                    return null === (t = e.instruments) || void 0 === t ? void 0 : t.some((e => {
                                        var t, a;
                                        return null == e || null === (t = e.config) || void 0 === t || null === (a = t.flows) || void 0 === a ? void 0 : a.includes("intent")
                                    }))
                                })),
                                collect_shown: t.some((e => {
                                    var t;
                                    return null === (t = e.instruments) || void 0 === t ? void 0 : t.some((e => {
                                        var t, a;
                                        return null == e || null === (t = e.config) || void 0 === t || null === (a = t.flows) || void 0 === a ? void 0 : a.includes("collect")
                                    }))
                                }))
                            }
                        }), a.includes(u.In) && n.push({
                            name: "render:cards_method_shown",
                            data: {
                                section: "custom",
                                screen: "L0",
                                count: 0
                            }
                        }), n
                    },
                    p13nBlockRender: function(e) {
                        let {
                            detail: t
                        } = e;
                        const a = t.map((e => {
                                var t;
                                return null === (t = e.config) || void 0 === t ? void 0 : t.method
                            })).join(","),
                            n = t.filter((e => {
                                var t, a;
                                return (null === (t = e.config) || void 0 === t ? void 0 : t.token) && (null === (a = e.config) || void 0 === a ? void 0 : a.method) === u.In
                            }));
                        O.p13n_method_shown = a;
                        const r = [{
                            name: "render:l0_p13n_section",
                            data: {
                                p13n_method_shown: a
                            }
                        }];
                        return n.length && (r.push({
                            name: "render:cards_method_shown",
                            data: {
                                section: "p13n",
                                count: n.length,
                                savedCards: n,
                                screen: "L0"
                            }
                        }), r.push({
                            name: "render:saved_cards_shown",
                            data: {
                                section: "p13n",
                                count: n.length,
                                savedCards: n,
                                screen: "L0"
                            }
                        })), r
                    },
                    paymentInitiate: function(e) {
                        var t, a, n, r, _, o, d;
                        let {
                            detail: i
                        } = e;
                        const c = i.options.payload || {};
                        return O.paymentInitTime = Date.now(), O.paymentPayload = {
                            payload: i.options.payload,
                            method: c.method,
                            instrument_name: i.instrument,
                            type: i.type,
                            flow: (null === (t = i.options.payload) || void 0 === t ? void 0 : t["upi[flow]"]) || (null === (a = i.options.payload) || void 0 === a ? void 0 : a["_[flow]"]),
                            payment_type: i.payment_type
                        }, [{
                            name: "payment:initiated",
                            data: {
                                PaymentInitTimestamp: O.paymentInitTime,
                                instrument_name: i.instrument,
                                type: i.type,
                                method: null == c ? void 0 : c.method,
                                payload: c,
                                ...i.options.payload,
                                flow: null === (n = O.paymentPayload) || void 0 === n ? void 0 : n.flow,
                                section: O.section,
                                timeSinceRender: Date.now() - O.renderTimestamp,
                                is_qr: 1 === (null === (r = O.paymentPayload) || void 0 === r || null === (_ = r.payload) || void 0 === _ ? void 0 : _["_[upiqr]"]),
                                screen: O.screen,
                                payment_type: i.payment_type
                            }
                        }, {
                            name: "add_meta",
                            data: {
                                is_qr: 1 === (null === (o = O.paymentPayload) || void 0 === o || null === (d = o.payload) || void 0 === d ? void 0 : d["_[upiqr]"])
                            }
                        }]
                    },
                    renderUpiShown: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:upi_shown",
                            data: t
                        }
                    },
                    upiIntentSelected: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:upi_app_intent_app_open_clicked_event",
                            data: t
                        }
                    },
                    renderQRShown: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:qr_shown",
                            data: t
                        }
                    },
                    renderUpiL1Page: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:upi_L1_page",
                            data: t
                        }
                    },
                    upiIntentOther: function(e) {
                        let {
                            detail: t
                        } = e;
                        if ("L0" === t.screen) return {
                            name: "behav:upi_more_selected",
                            data: t
                        };
                        const {
                            render: a = !1,
                            submit: n = !1
                        } = t;
                        return a ? {
                            name: "render:upi_L1_page_other_apps"
                        } : n ? {
                            name: "behav:upi_L1_page_other_apps_clicked"
                        } : void 0
                    },
                    upiSavedVpaPayment: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:upi_app_collect_vpa_clicked_event",
                            data: t
                        }
                    },
                    collectValidation: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            step: a,
                            ...n
                        } = t;
                        if ("validationStart" === a) return [{
                            name: "api:saved_upi_id_validation_event",
                            data: n
                        }, {
                            name: "behav:upi_app_collect_vpa_clicked_event",
                            data: { ...n,
                                screen: "L1",
                                from_section: "generic"
                            }
                        }];
                        if ("validationEnd" === a) {
                            const e = [{
                                name: "behav:upi_id_upi_number_validation_status",
                                data: n
                            }];
                            return n.success ? e.push({
                                name: "behav:add_upi_id_screen_upi_fill_complete",
                                data: n
                            }) : e.push({
                                name: "behav:upi_id_fill_error",
                                data: n
                            }), e
                        }
                        return "modalRender" === a ? {
                            name: "render:add_upi_id_screen_number_upi_id_link_modal_rendered_event",
                            data: n
                        } : "modalClose" === a ? {
                            name: "behav:add_upi_id_screen_number_upi_id_link_modal_close_clicked_event",
                            data: n
                        } : void 0
                    },
                    paymentSubmit: function(e) {
                        var t, a, n;
                        let {
                            detail: r,
                            matchParent: _
                        } = e;
                        const o = r.options.payload || {},
                            d = {
                                instrument_name: r.instrument,
                                section: O.section,
                                flow: (null === (t = r.options.payload) || void 0 === t ? void 0 : t["upi[flow]"]) || (null === (a = r.options.payload) || void 0 === a ? void 0 : a["_[flow]"]),
                                type: r.type,
                                screen: (0, i.hY)() ? _("payment_methods") ? "L0" : "L1" : O.screen || "L0"
                            };
                        return [{
                            name: "method:selected",
                            data: {
                                instrument_name: r.instrument,
                                method_name: o.method,
                                section: O.section,
                                selection_type: "click"
                            }
                        }, {
                            name: "add_meta",
                            data: {
                                selection_type: "click",
                                method: null === (n = r.options.payload) || void 0 === n ? void 0 : n.method,
                                ...d
                            }
                        }, {
                            name: "submit",
                            data: { ...r.options.payload,
                                timeSinceRender: Date.now() - O.renderTimestamp,
                                ...d
                            }
                        }]
                    },
                    paymentComplete: function(e) {
                        let {
                            detail: t
                        } = e;
                        const {
                            options: a,
                            response: n,
                            offer: r
                        } = t, _ = a.payload, o = _.method, d = [];
                        var i, c, s, u;
                        n.error ? (O.errorMethod = o, d.push({
                            name: "render:1cc_payment_error",
                            data: {
                                payment_method: o,
                                request: _,
                                response: n
                            }
                        }), d.push({
                            name: "error",
                            data: {
                                timeSincePaymentInit: Date.now() - O.paymentInitTime,
                                instrument_name: (null === (i = O.paymentPayload) || void 0 === i ? void 0 : i.instrument_name) || "",
                                flow: null === (c = O.paymentPayload) || void 0 === c ? void 0 : c.flow,
                                payment_method: o,
                                request: _,
                                response: n,
                                is_retry_enabled: !!(0, l.Rl)("retry")
                            }
                        })) : (d.push({
                            name: "oncomplete",
                            data: {
                                timeSincePaymentInit: Date.now() - O.paymentInitTime,
                                instrument_name: (null === (s = O.paymentPayload) || void 0 === s ? void 0 : s.instrument_name) || "",
                                method: o,
                                flow: null === (u = O.paymentPayload) || void 0 === u ? void 0 : u.flow,
                                request: _,
                                response: n,
                                submit_screen: O.screen,
                                section: O.section,
                                is_QR: 1 === (null == _ ? void 0 : _["_[upiqr]"])
                            }
                        }), "upi" === o && d.push({
                            name: "behav:1cc_upi_payment_successful"
                        }));
                        const p = (null == r ? void 0 : r.type) === m.Nh.INSTANT ? (null == r ? void 0 : r.original_amount) - (null == r ? void 0 : r.amount) : Number((null == r ? void 0 : r.cashback_amount) || 0);
                        return d.push({
                            name: "render:payment_finished_modal",
                            data: {
                                is_payment_success: !n.error,
                                is_payment_failure: Boolean(n.error),
                                amount: _.amount,
                                timestamp: (new Date).getTime(),
                                amount_saved: p || 0,
                                method_selected: _.method,
                                method_details: _.wallet || _.bank || _.provider || _.vpa,
                                is_offer_applied: Boolean(a.payload.offer_id),
                                offer_method: r
                            }
                        }), d
                    },
                    otp: function(e) {
                        var t;
                        let {
                            detail: a
                        } = e;
                        const {
                            action: n,
                            ...r
                        } = a, _ = { ...r,
                            from_screen: O.screen || "L0",
                            from_section: O.section
                        };
                        switch (n) {
                            case "render":
                                return {
                                    name: "render:otp_modal",
                                    data: _
                                };
                            case "autoread_applicable":
                                var o;
                                if ((0, y.X)()) return {
                                    name: "behav:1cc_rzp_otp_auto_read",
                                    data: {
                                        auto_read_valid: !0,
                                        otp_reason: null === (o = O.statusCheckData) || void 0 === o ? void 0 : o.otp_reason
                                    }
                                };
                                break;
                            case "skip":
                                return [{
                                    name: "behav:1cc_rzp_otp_skip_clicked",
                                    data: {
                                        otp_reason: null === (t = O.statusCheckData) || void 0 === t ? void 0 : t.otp_reason
                                    }
                                }, {
                                    name: "behav:otp_skipped",
                                    data: _
                                }];
                            case "dismiss":
                                return {
                                    name: "behav:otp_closed",
                                    data: _
                                };
                            case "otp_submitted":
                                return {
                                    name: "behav:otp_submit",
                                    data: _
                                };
                            case "otp_submit_attempt":
                                return {
                                    name: "behav:otp_submit_attempt",
                                    data: _
                                };
                            case "otp_form_validation":
                                return {
                                    name: "behav:otp_form_validation",
                                    data: _
                                };
                            case "goto_bank_page":
                                return {
                                    name: "behav:otp_pay_on_bank",
                                    data: _
                                };
                            case "resend":
                                var d;
                                return (0, y.X)() ? {
                                    name: "behav:1cc_rzp_otp_resend_clicked",
                                    data: {
                                        otp_reason: null === (d = O.statusCheckData) || void 0 === d ? void 0 : d.otp_reason
                                    }
                                } : {
                                    name: "behav:otp_resend",
                                    data: _
                                };
                            case "error":
                                return {
                                    name: "behav:otp_error",
                                    data: _
                                };
                            case "autoread_not_applicable":
                                if ((0, y.X)()) return {
                                    name: "render:1cc_rzp_otp_screen_manual"
                                };
                                break;
                            case "otp_filled":
                                var i;
                                return (0, y.X)() ? {
                                    name: "behav:1cc_rzp_otp_entered",
                                    data: {
                                        otp_reason: null === (i = O.statusCheckData) || void 0 === i ? void 0 : i.otp_reason,
                                        otp_source: _.otp_source || "manual"
                                    }
                                } : {
                                    name: "behav:otp_filled",
                                    data: _
                                }
                        }
                    },
                    paymentCancel: function() {
                        return {
                            name: "cancel",
                            data: {
                                timeSincePaymentInit: Date.now() - O.paymentInitTime,
                                ...O.paymentPayload || {}
                            }
                        }
                    },
                    critical_resource_performance: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "critical_resource_performance",
                            data: t
                        }
                    },
                    buyer_protect_widget_visibility: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "buyer_protect_widget_visibility",
                            data: {
                                rtb_fingerprint_id: t.rtbFingerprintId,
                                eligible: t.eligible,
                                buyer_protection_widget_experiment: t.buyerProtectionWidgetExperiment,
                                show_buyer_protect: t.showBuyerProtect
                            }
                        }
                    },
                    sr_method_issue_modal: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:sr_method_issue_modal",
                            data: t
                        }
                    },
                    search_bank: function() {
                        return {
                            name: "behav:netbanking_search_for_bank_clicked"
                        }
                    },
                    netbanking_more_banks_click: function() {
                        return {
                            name: "behav:netbanking_more_banks_clicked"
                        }
                    },
                    netbanking_l1_screen: function() {
                        return {
                            name: "render:netbanking_l1_screen"
                        }
                    },
                    sr_method_issue_modal_pay_other_options_clicked: function() {
                        return {
                            name: "behav:sr_method_issue_modal_pay_other_options_clicked"
                        }
                    },
                    sr_method_issue_modal_close_clicked: function() {
                        return {
                            name: "behav:sr_method_issue_modal_close_clicked"
                        }
                    },
                    sr_method_issue_clicked: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:sr_method_issue_clicked",
                            data: t
                        }
                    },
                    [s.a.CRED_MANUAL_OFFER_SELECT]: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: s.a.CRED_MANUAL_OFFER_SELECT,
                            data: t
                        }
                    },
                    [s.a.CRED_OFFERS_SHOWN_SUBTEXT]: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: s.a.CRED_OFFERS_SHOWN_SUBTEXT,
                            data: t
                        }
                    },
                    [s.a.CRED_APPLIED_OFFERS_LIST]: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: s.a.CRED_APPLIED_OFFERS_LIST,
                            data: t
                        }
                    },
                    saved_cards_shown: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "render:saved_cards_shown",
                            data: {
                                screen: O.screen || "L0",
                                section: O.section,
                                ...t
                            }
                        }
                    },
                    saved_cards_click: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:saved_card_selected",
                            data: {
                                from_screen: O.screen || "L0",
                                section: O.section,
                                ...t
                            }
                        }
                    },
                    all_save_card_click: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "behav:all_saved_cards_clicked",
                            data: {
                                screen: "L0",
                                section: O.section,
                                ...t
                            }
                        }
                    },
                    suggestion_line2: function(e) {
                        var t;
                        let {
                            detail: a
                        } = e;
                        return ["metric:1cc_checkout_suggestions_api_initiated", null === (t = a.promise.then((() => ({
                            name: "metric:1cc_checkout_suggestions_api_completed"
                        })), (() => {}))) || void 0 === t ? void 0 : t.catch((() => {}))]
                    },
                    new_shipping_address_suggestion_selected: "behav:1cc_checkout_suggestions_selected",
                    orderNotesForm_submit_failed: "behav:1cc_order_instructions_save_failed",
                    orderNotesForm_submit_successful: "behav:1cc_order_instructions_saved",
                    gstInForm_submit: "behav:1cc_change_gstin_clicked",
                    gstInForm_submit_failed: "render:1cc_gstin_update_failed",
                    gstInForm_submit_successful: "render:1cc_gstin_number_successfully_added",
                    order_summary_dismissed: "behav:1cc_order_summary_dismissed",
                    network_error: "network_error",
                    network_request_initiated: "network_request_initiated",
                    network_request_success: "network_request_success",
                    network_request_failed: "network_request_failed",
                    network_request_aborted: "network_request_aborted",
                    no_coproto_response_type: "no_coproto_response_type",
                    coproto_response: "coproto_response",
                    quickbuy_possible: "quickbuy_possible",
                    shopify_redirect_to_native_checkout: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "debug:shopify:redirect_to_native",
                            data: { ...t,
                                flow: "v2",
                                source: "frame"
                            }
                        }
                    },
                    cod_eligibility: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "1cc_cod_eligibility",
                            data: t
                        }
                    },
                    truecaller_deeplink_trigger_attempted: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "metric:truecaller_deeplink_trigger_attempted",
                            data: t
                        }
                    },
                    truecaller_installed: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:truecaller_installed",
                            data: t
                        }
                    },
                    truecaller_verification: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:truecaller_verification",
                            data: t
                        }
                    },
                    truecaller_use_another_number_clicked: "behav:truecaller_use_another_number_clicked",
                    truecaller_client_unresponsive: "metric:truecaller_client_unresponsive",
                    truecaller_timeout_exceeded: "metric:truecaller_timeout_exceeded",
                    truecaller_polling_verification_status: function(e) {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "api:truecaller_polling_verification_status",
                            data: t
                        }
                    },
                    exitIntent: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "metric:exit_intent",
                            data: t
                        }
                    },
                    lrs_travel_more_info_clicked: "lrs_travel_more_info_clicked",
                    lrs_travel_billing_address: "lrs_travel_billing_address",
                    lrs_travel_ba_state_selected: "lrs_travel_ba_state_selected",
                    lrs_travel_ba_continue_clicked: "lrs_travel_ba_continue_clicked",
                    lrs_travel_ba_details_check: "lrs_travel_ba_details_check",
                    lrs_travel_ba_page_landed: "lrs_travel_ba_page_landed",
                    lrs_travel_ba_address1_entered: "lrs_travel_ba_address1_entered",
                    lrs_travel_ba_address2_entered: "lrs_travel_ba_address2_entered",
                    lrs_travel_ba_pincode_entered: "lrs_travel_ba_pincode_entered",
                    lrs_travel_ba_city_entered: "lrs_travel_ba_city_entered",
                    lrs_travel_login_continue_clicked: "lrs_travel_login_continue_clicked",
                    lrs_travel_login_otp_verified: "lrs_travel_login_otp_verified",
                    lrs_travel_login_page_loaded: "lrs_travel_login_page_loaded",
                    lrs_travel_pan_continue_clicked: "lrs_travel_pan_continue_clicked",
                    lrs_travel_pan_details_check: "lrs_travel_pan_details_check",
                    lrs_travel_pan_page_landed: "lrs_travel_pan_page_landed",
                    lrs_travel_pan_num_entered: "lrs_travel_pan_num_entered",
                    lrs_travel_pan_name_entered: "lrs_travel_pan_name_entered",
                    lrs_travel_pan_dob_entered: "lrs_travel_pan_dob_entered",
                    lrs_travel_existing_user_billing_address_added: "lrs_travel_existing_user_billing_address_added",
                    lrs_travel_existing_user_billing_address_edited: "lrs_travel_existing_user_billing_address_edited",
                    lrs_travel_existing_user_pan_details_edited: "lrs_travel_existing_user_pan_details_edited",
                    lrs_travel_existing_user_continue_payment: "lrs_travel_existing_user_continue_payment",
                    lrs_travel_existing_user_review_screen_loaded: "lrs_travel_existing_user_review_screen_loaded",
                    lrs_travel_existing_user_card_details_changed: "lrs_travel_existing_user_card_details_changed",
                    lrs_travel_existing_user_pay_now_clicked: "lrs_travel_existing_user_pay_now_clicked",
                    lrs_travel_link_clicked: "lrs_travel_link_clicked",
                    lrs_travel_ba_city_populated: "lrs_travel_ba_city_populated",
                    trackCouponWidgetClickInQuickBuy: "behav:1cc_change_coupon_clicked",
                    trackAddressWidgetClickInQuickBuy: "behav:1cc_change_address_clicked",
                    experiment_eligibility: e => {
                        let {
                            detail: t
                        } = e;
                        return {
                            name: "experiment_eligibility",
                            data: t
                        }
                    }
                },
                R = {
                    verify_otp: function() {
                        O.statusCheckData && delete O.statusCheckData
                    },
                    coupons_list: function() {
                        O.couponsListData && delete O.couponsListData
                    },
                    payment_methods: function() {
                        delete O.defaultSelectedMethod, delete O.defaultShownInstruments, delete O.methodsSectionsShown
                    },
                    order_summary: "behav:1cc_order_summary_dismissed",
                    rtb: "render:1cc_RTB_bottomsheet_dismissed",
                    order_instructions: "behav:1cc_order_instructions_dismissed",
                    language_screen: "behav:1cc_language_options_dismissed",
                    account_popover: ["behav:1cc_account_screen_dismissed", "behav:1cc_account_screen_back_clicked"],
                    third_party_address_consent_screen: "1cc_dismissed_load_saved_address_bottom_sheet",
                    third_party_address_consent_error_screen: "1cc_dismissed_load_saved_address_bottom_error_sheet",
                    terms_and_policies_screen: "render:1cc_terms_policies_bottom_sheet_dismissed",
                    coupon_celebration_sheet: "render:coupon_celebration_bottom_sheet_disappears"
                };

            function A(e) {
                var t;
                if (e.type === o.FP.MOUNT && "main_screen" === (null === (t = e.log.parent) || void 0 === t ? void 0 : t.name)) {
                    const t = e.log.name;
                    if (t) {
                        const a = O.previous_page || "";
                        return O.previous_page = t, [{
                            name: "main_page_change",
                            data: {
                                page: e.log.name,
                                previous_page: a
                            }
                        }]
                    }
                }
            }
            const x = new Map([
                    [o.FP.MOUNT, (0, n.V0)(L)],
                    [o.FP.SUBMIT, (0, n.V0)(T)],
                    [o.FP.CLICK, (0, n.V0)(P)],
                    [o.FP.VALIDATE, (0, n.V0)(I)],
                    [o.FP.CHANGE, (0, n.V0)({
                        country_code: function(e) {
                            let {
                                detail: t
                            } = e;
                            return {
                                name: "behav:1cc_summary_screen_contact_country_code_changed",
                                data: {
                                    country_code_selected: t.country_code_selected
                                }
                            }
                        },
                        language_screen: function(e) {
                            let {
                                detail: t
                            } = e;
                            return {
                                name: "behav:1cc_summary_screen_language_changed",
                                data: {
                                    language_selected: t.language_selected
                                }
                            }
                        },
                        save_my_address: function(e) {
                            let {
                                detail: t
                            } = e;
                            if (!t.value) return {
                                name: "behav:1cc_save_my_address_unchecked"
                            }
                        }
                    })],
                    [o.FP.CUSTOM, (0, n.V0)(F)],
                    [o.FP.DESTROY, (0, n.V0)(R)],
                    [o.FP.ERROR, (0, n.V0)({
                        js_error: "js_error",
                        amount_flip_error: "amount_flip_error",
                        ChunkLoadError: "chunk_load_error",
                        "preference-failure": "preference-failure",
                        form_validation_err: "form_validation_err",
                        "app-mount-failure": "app-mount-failure",
                        "emi-plans-otp-failure": "emi-plans-otp-failure",
                        "state-country-fetch-failure": "state-country-fetch-failure",
                        "shipping-overview-mount-error": "shipping-overview-mount-error"
                    })]
                ]),
                O = {
                    screen: "L0",
                    section: "generic"
                };

            function q(e) {
                var t;
                const a = A(e) || [],
                    n = null === (t = x.get(e.type)) || void 0 === t ? void 0 : t.get(e.log.name);
                return n && a.push(...E(e, n)), a
            }

            function E(e, t) {
                return (0, _.Z)(t) ? (0, w.Z)(t, (t => E(e, t))) : "function" == typeof t ? E(e, function(e, t) {
                    return t({
                        log: e.log,
                        detail: e.log.detail,
                        matchParent: t => {
                            let a = e.log.parent;
                            for (; a;) {
                                if (a.name === t) return !0;
                                a = a.parent
                            }
                        }
                    })
                }(e, t)) : "string" == typeof t ? [{
                    name: t,
                    data: e.log.detail
                }] : [t]
            }

            function B(e) {
                const t = (0, h.z)();
                let a = (0, v.U2)(t);
                return e && (a = a.filter((t => t.token === e || t.id === e))), a.map((e => {
                    const t = e.card;
                    return {
                        country: t.country,
                        emi: t.emi,
                        flows: t.flows,
                        international: t.international,
                        issuer: t.issuer,
                        last4: t.last4,
                        name: t.name,
                        network: t.network,
                        type: t.type
                    }
                }))
            }
        }
    }
]);