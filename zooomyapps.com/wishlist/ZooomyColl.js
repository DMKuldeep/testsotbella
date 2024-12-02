var zooomyColl = function(o) {
    window.$ = o;
    var t = document.querySelectorAll(".zoomywishid"),
        e = t.length,
        l = e,
        a = document.location.href,
        o = a.includes("login");
    0 == o && (o = a.includes("register")), 0 == o && (o = a.includes("challenge")), 0 == o && (o = a.includes("account")), 0 == o && (o = a.includes("cart")), 0 == o && (o = a.includes("pages")), 0 == o && (o = a.includes("blog")), 0 == o && (o = a.includes("policies")), $("#zooomy-wishlist-counter").length && (e = 1), o && (e = 1);
    var n = "";
    if (0 != e) {
        let a = 1;

        function i(h) {
            var o, t = [],
                r = $(".zoomywishid");
            $(r).each(function() {
                "" == $(this).html().trim() && (o = $(this).attr("data-product-id"), t.push(o))
            });
            for (var e = "", p = "", a = document.getElementsByTagName("script"), i = 0, s = a.length; i < s; i++) null != a[i].getAttribute("data-shop-id") && (e = a[i].getAttribute("data-shop-id"), p = a[i].getAttribute("data-cus-id"), customername = a[i].getAttribute("data-cus-name"), customer_email = a[i].getAttribute("data-cus-email"));
            n = "" == p ? "https://zooomyapps.com/wishlist/Coll.php?WishIdsArray=&customerid=" + p + "&shop=" + e + "&ifruncode=" + l : "https://zooomyapps.com/wishlist/Coll.php?WishIdsArray=" + t + "&customerid=" + p + "&shop=" + e + "&ifruncode=" + l, $.ajax({
                url: n,
                data: {},
                dataType: "jsonp",
                jsonp: "jsonCode",
                async: "true",
                success: function(e) {
                    var o = e.custom_css,
                        t = e.user_added_css,
                        a = (e.empty, e.itemadded, e.coll_f_color),
                        i = e.coll_e_color,
                        s = e.login_text,
                        n = e.shop,
                        l = e.totalv,
                        c = e.wish_icon;
                    null == e.l_f_color && (e.l_f_color = "#000", e.l_b_color = "#a4dfc7", e.l_br_color = "#277f4e"), $("#zooomy-wishlist-counter span").length ? $("#zooomy-wishlist-counter span").replaceWith("<span>" + l + "</span>") : $("#zooomy-wishlist-counter").append("<span>" + l + "</span>"), $(".zooomyIconval").length && 0 < l && $(".zooomyIconval i.fa").addClass("fa-heart").removeClass("fa-heart-o"), $('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">').appendTo("body"), "yes" == e.w_login && ($("body").append('<a class="zooomy__hhrt" href="/pages/' + e.p_link + '" style="position:fixed;bottom:100px;right:10px;width:48px; height:48px; line-height: 52px; border-radius: 100px; text-align: center; font-size: 20px;"><i class="fa fa-' + c + '"></i></a>'), $("<style>.zooomy__hhrt{z-index:9999;background:" + a + "!important;color:" + e.add_font_color + "!important;}</style>").appendTo("body")), $("<style>body{position:relative;}.zoomywishid { width:100%;float: left;  padding: 0; }.zoomywishidheart { float: left; width: 100%; }.zooomywishmsg:hover .collnoitem {  }.zooomywishmsg .fa{margin-right:3px;}.zoomywishid .fa { font-size: 18px; }.zoomycheck{position:absolute;visibility:hidden;}p.zooomywishmsg .fa{margin:0; padding:2px 10px;margin:0;}p.collnoitem { float: left; width: 100%; padding: 10px 0; margin:0; }p.zooomywishmsg.zrmvbg{color:" + i + "}p.zooomywishmsg.zadbg{color:" + a + "}.zwishoverlay { z-index:99999;position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); transition: opacity 500ms; display: none; opacity: 0; } .zwishoverlay:target { display: block; opacity: 1; } .zwishlistmodal {  padding: 20px; border-radius: 5px; width: 30%; position: relative; transition: all 5s ease-in-out; } .zwishlistmodal h2 { margin-top: 0; color: #333; font-family: Tahoma, Arial, sans-serif; } .zwishlistmodal .close { position: absolute; top: 20px; right: 30px; transition: all 200ms; font-size: 30px; font-weight: bold; text-decoration: none; color: #333; } .zwishlistmodal .close:hover { color: #06D85F; } .zwishlistmodal .content { max-height: 30%; overflow: auto; } @media screen and (max-width: 700px){ .zwishlistmodal{ width: 70%; } }</style>").appendTo("body"), $("<style>" + o + "</style>").appendTo("body"), $("<style>" + t + "</style>").appendTo("body");
                    var d;
                    if ("free" != e.app_plan && (0 == r.length || $(r).each(function() {
                            var o = $(this).attr("data-product-id"),
                                t = "yes" == e.itemadded[o] ? "<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" + o + "' class='zoomycheck checkbox-" + o + "'   id='checkbox-" + o + "'/><label for ='checkbox-" + o + "'><p class='zooomywishmsg zooomywishmsg-" + o + "'><i class='fa fa-" + c + "' style='color: " + a + ";'></i></p></label</div>" : "<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" + o + "' class='zoomycheck checkbox-" + o + "' id='checkbox-" + o + "'/><label for ='checkbox-" + o + "'><p class='zooomywishmsg zooomywishmsg-" + o + "'><i class='fa  fa-" + c + "-o' style='color: " + i + ";'></i></p></label</div>";
                            $(".zoomywishid-" + o).html(t)
                        })), "" == p)
                        if ("yes" == e.w_login) {
                            var m;
                            let r = [];
                            1 == h && $("body").on("click", ".zoomycheck", function() {
                                console.log("....");
                                var t = $(this).attr("data-id"),
                                    o = $(".zoomywishid-" + t).attr("data-handle"),
                                    e = $(".zoomywishid-" + t).attr("data-variant"),
                                    a = $(".zoomywishid-" + t).attr("data-variantname"),
                                    i = $(".zoomywishid-" + t).attr("data-price"),
                                    s = $(".zoomywishid-" + t).attr("data-title"),
                                    l = $(".zoomywishid-" + t).attr("data-image");
                                d = {
                                    product_id: t,
                                    product_handle: o,
                                    vid: e,
                                    vname: a,
                                    proprice: i,
                                    protitle: s,
                                    proimage: l
                                }, null == localStorage.getItem("myzooomy__wishlist") || (e = localStorage.getItem("myzooomy__wishlist"), r = JSON.parse(e)), 1 == $(".checkbox-" + t).prop("checked") ? ($(".zooomywishmsg-" + t).replaceWith('<p class="zooomywishmsg zadbg zooomywishmsg-' + t + '" style="cursor:pointer;"><i class="fa  fa-' + c + '" aria-hidden="true"  ></i></p>'), 0 == r.filter(function(o) {
                                    return o.product_id == t
                                }).length && r.push(d), $(".zwishfixed").append("<div class='" + t + "' style='width:25%;float:left;padding:10px;box-sizing:border-box;'><a class='rfw' data-id='" + t + "'>x</a><div class='' style=''><a href='https://" + n + "/products/" + o + "' target='_blank'><img src='" + l + "' width='100'/</a><div class='zall_details'><p><a href='https://" + n + "/products/" + o + "' target='_blank'>" + s + "</a></p><span class='wish_price money' >" + i + "</span><div class='zbtn'><a href='https://" + n + "/products/" + o + "' target='_blank'>View Product</a></div></div></div></div>"), "happily-ever-a.myshopify.com" != n && $.ajax({
                                    url: "https://zooomyapps.com/wishlist/ZooomyGuestWishlist.php",
                                    data: {
                                        shop: n,
                                        productid: t,
                                        title: s,
                                        handle: o,
                                        proimage: l,
                                        price: i,
                                        vname: a
                                    },
                                    dataType: "jsonp",
                                    jsonp: "guestdatacode",
                                    async: "true",
                                    success: function(o) {}
                                })) : 0 == $(".checkbox-" + t).prop("checked") && ($(".zooomywishmsg-" + t).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + t + '" style="cursor:pointer;"><i class="fa  fa-' + c + '-o" aria-hidden="true"  ></i></p>'), r = r.filter(o => o.product_id != t), $("." + t).remove());
                                a = JSON.stringify(r);
                                localStorage.setItem("myzooomy__wishlist", a), $("#zooomy-wishlist-counter").length && (document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>" + r.length + "</span>"), $(".zooomyIconval").length && (0 < r.length ? $(".zooomyIconval i.fa").addClass("fa-heart").removeClass("fa-heart-o") : $(".zooomyIconval i.fa").addClass("fa-heart-o").removeClass("fa-heart"))
                            }), null == localStorage.getItem("myzooomy__wishlist") || (t = localStorage.getItem("myzooomy__wishlist"), t = JSON.parse(t), $.each(t, function(o, t) {
                                var e = t.product_id;
                                hearticon = "<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" + e + "' class='zoomycheck checkbox-" + e + "'   id='checkbox-" + e + "' checked='true'/><label for ='checkbox-" + e + "'><p class='zooomywishmsg zadbg zooomywishmsg-" + e + "'><i class='fa fa-" + c + "' style='color: " + a + ";'></i></p></label</div>", $(".zoomywishid-" + e).html(hearticon), $(".zwishfixed").append("<div class='" + e + "' style='width:25%;float:left;padding:10px;box-sizing:border-box;'><a class='rfw' data-id='" + e + "'>x</a><div class='' style=''><a href='https://" + n + "/products/" + t.product_handle + "' target='_blank'><img src='" + t.proimage + "' width='100'/</a><div class='zall_details'><p><a href='https://" + n + "/products/" + t.product_handle + "' target='_blank'>" + t.protitle + "</a></p><span class='wish_price money' >" + t.proprice + "</span><div class='zbtn'><a href='https://" + n + "/products/" + t.product_handle + "' target='_blank'>View Product</a></div></div></div></div>")
                            })), $("#zooomy-wishlist-counter").length && (null === localStorage.getItem("myzooomy__wishlist") && null == localStorage.getItem("myzooomy__wishlist") && null == localStorage.getItem("myzooomy__wishlist") || (m = JSON.parse(localStorage.getItem("myzooomy__wishlist")).length, document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>" + m + "</span>")), $(".zooomyIconval").length && (0 < (m = JSON.parse(localStorage.getItem("myzooomy__wishlist")).length) ? $(".zooomyIconval i.fa").addClass("fa-heart").removeClass("fa-heart-o") : $(".zooomyIconval i.fa").addClass("fa-heart-o").removeClass("fa-heart"))
                        } else $("body").append("<div class='zooomyloginrequest' id='zooomyloginrequestonce'><a href='https://" + n + "/account/login'>" + s + "</a> <span id='zloginrequestclose'><i class='fa fa-close'></i></span> </div>"), $("#zooomyloginrequestonce").each(function() {
                            $('[id="' + this.id + '"]:gt(0)').remove()
                        }), $("body").on("click", ".zoomywishid", function(o) {
                            $(this).attr("data-product-id");
                            $(".zooomyloginrequest").show("100"), $("<style>.zooomyloginrequest a{color:" + e.l_f_color + ";text-decoration:none;}#zloginrequestclose .fa{color:#fff;}#zloginrequestclose{cursor: pointer; background: #000; color: #fff; border-radius: 62px; width: 20px; height: 20px; line-height: 20px; text-align: center; float: right; padding: 0; margin-left: 10px;}body{position:relative;}.zooomyloginrequest{z-index:99999;display:none;position: fixed; top: 0; right: 0; background: " + e.l_b_color + "; border: 1px solid " + e.l_br_color + "; padding: 17px;}</style>").appendTo("body"), $("#zloginrequestclose").click(function() {
                                $(".zooomyloginrequest").hide("100")
                            }), $(document).ready(function() {
                                setTimeout(function() {
                                    $(".zooomyloginrequest").fadeOut(1500)
                                }, 5e3)
                            })
                        });
                    "" != p ? (null !== localStorage.getItem("myzooomy__wishlist") && (null == localStorage.getItem("myzooomy__wishlist") || (s = localStorage.getItem("myzooomy__wishlist"), s = JSON.parse(s), $.each(s, function(o, t) {
                        $.ajax({
                            url: "https://zooomyapps.com/wishlist/SaveData.php",
                            data: {
                                shop: Shopify.shop,
                                productid: t.product_id,
                                title: t.protitle,
                                handle: t.product_handle,
                                img: t.proimage,
                                price: t.proprice,
                                customerid: p,
                                customername: customername,
                                customer_email: customer_email
                            },
                            dataType: "jsonp",
                            jsonp: "savedatacode",
                            async: "true",
                            success: function(t) {
                                data = data.filter(o => o.product_id != t.productid)
                            }
                        })
                    }), localStorage.removeItem("myzooomy__wishlist"))), 1 == h && $("body").on("click", ".zoomywishid", function(o) {
                        var t = $(this).attr("data-product-id");
                        return $(".zooomywishmsg-" + t + " i").is(".fa-" + c) && $(".zooomywishmsg-" + t).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + t + '" style="cursor:pointer;"><i class="fa fa-' + c + '-o" aria-hidden="true"  ></i></p>'), $(".zooomywishmsg-" + t + " i").is(".fa-" + c + "-o") && $(".zooomywishmsg-" + t).replaceWith('<p class="zooomywishmsg  zooomywishmsg-' + t + '" style="cursor:pointer;"><i class="fa fa-' + c + '" aria-hidden="true"  ></i></p>'), $.ajax({
                            url: "https://zooomyapps.com/wishlist/CollCheck2.php",
                            data: {
                                shop: Shopify.shop,
                                productid: t,
                                customerid: p
                            },
                            dataType: "jsonp",
                            jsonp: "mylinkprocode",
                            async: "true",
                            success: function(o) {
                                var t = o.done,
                                    e = o.productid;
                                "done" == t && ($(".checkbox-" + e).prop("checked", !0), $(".zooomywishmsg-" + e).replaceWith('<p class="zooomywishmsg zadbg zooomywishmsg-' + e + '" style="cursor:pointer;"><i class="fa  fa-' + c + '" aria-hidden="true"  ></i></p>'), $("#zooomy-wishlist-counter").length && (o = document.getElementById("zooomy-wishlist-counter"), o = parseInt(o.innerText), o += 1, document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>" + o + "</span>")), "ndone" == t && ($(".checkbox-" + e).prop("checked", !1), $(".zooomywishmsg-" + e).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + e + '" ><i class="fa  fa-' + c + '-o" aria-hidden="true" ></i> </p>'), $("#zooomy-wishlist-counter").length && (e = document.getElementById("zooomy-wishlist-counter"), e = parseInt(e.innerText), --e, document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>" + e + "</span>")), $(".zooomyIconval").length && (0 < newtotalval ? $(".zooomyIconval i.fa").addClass("fa-heart").removeClass("fa-heart-o") : $(".zooomyIconval i.fa").addClass("fa-heart-o").removeClass("fa-heart"))
                            }
                        }), o.stopPropagation(), !1
                    })) : $("body").on("click", ".zoomywishid", function(o) {
                        $(this).attr("data-product-id")
                    })
                }
            })
        }
        i(a), $("#zooomy-wishlist-counter").length && setTimeout(function() {
            var o = document.getElementById("zooomy-wishlist-counter").innerHTML;
            "00" != o && "" != o || (document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>0</span>")
        }, 300), $(window).scroll(function() {
            0 < t.length && (clearTimeout($.data(this, "scrollTimer")), $.data(this, "scrollTimer", setTimeout(function() {
                let o = [];
                var t, e = $(".zoomywishid");
                $(e).each(function() {
                    "" == $(this).html().trim() && (t = $(this).attr("data-product-id"), o.push(t))
                }), 0 < o.length && (a++, i(a))
            }, 300)))
        })
    }
};

function reqJquery() {
    var o, t;
    "undefined" == typeof jQuery || !jQuery || 1 === parseInt(jQuery.fn.jquery) && parseFloat(jQuery.fn.jquery.replace(/^1\./, "")) < 11 ? (o = document.getElementsByTagName("head")[0], (t = document.createElement("script")).src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", t.type = "text/javascript", t.onload = t.onreadystatechange = function() {
        t.readyState ? "complete" !== t.readyState && "loaded" !== t.readyState || (t.onreadystatechange = null, zooomyColl(jQuery.noConflict(!0))) : zooomyColl(jQuery.noConflict(!0))
    }, o.appendChild(t)) : zooomyColl(jQuery)
}
"product" == meta.page.pageType ? setTimeout(reqJquery, 2e3) : reqJquery();