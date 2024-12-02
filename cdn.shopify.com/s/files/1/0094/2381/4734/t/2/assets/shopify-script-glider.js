if (typeof(igServerpath) != 'undefined') {
    insta_local = 1;
}

//Some variable sets
var igServerpath = "https://eshopcrm.com/instagram-story/";
var igSettings;
var pageURL = window.location.href;
var stories_arr = [];
var igSettings_g;
var igSettings;
var igFeed;
var custom_username_g;

function loadZuck($igSetting) {
    //To load zuck js
    var isIE = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        isIE = true;
    }

    if (isIE) {
        return;
    }

    if (Shopify.shop == "if-she-loves.myshopify.com" || Shopify.shop == "deddimaag.myshopify.com" || Shopify.shop == "mamapraia.myshopify.com") {
        loadInstaCss('zuckCss', 'https://eshopcrm.com/instagram-story/zuckjs/zuck-she.min.css?v=1.7');
    } else {
        loadInstaCss('zuckCss', 'https://cdn.shopify.com/s/files/1/0094/2381/4734/files/zuck.min.css?v=1675344290');
    }
    loadInstaCss('instagramCss', 'https://cdn.shopify.com/s/files/1/0094/2381/4734/files/snapgram.min.css?v=1675345644');

    if (typeof(ZuckJS) == "undefined") {
        (function() {
            // Load jquery script if doesn't exist
            var script = document.createElement("SCRIPT");
            script.src = 'https://cdn.shopify.com/s/files/1/0094/2381/4734/files/zuck.js?v=1675344153';
            script.type = 'text/javascript';
            script.onload = function() {
                setTimeout(function() {
                    createInstagramStoryPopupIcon(igSettings_g);
                    loadIgFeed(igSettings);
                }, 200);
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        })();
    } else {
        setTimeout(function() {
            createInstagramStoryPopupIcon(igSettings_g);
            loadIgFeed(igSettings);
        }, 200);
    }
}
var $iSjQ;
var ig_delay = 200;
if (typeof($iSjQ) == 'undefined') {
    if (typeof(window.jQuery) == 'undefined') {
        (function() {
            // Load jquery script if doesn't exist
            var script = document.createElement("SCRIPT");
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
            script.type = 'text/javascript';
            script.onload = function() {
                $iSjQ = window.jQuery; // $iSjQ is our jQuery
                //$ = window.jQuery;  // $iSjQ is our jQuery
                setTimeout(function() {
                    createInstagramStoryPanel();
                }, 100)
            };
            document.getElementsByTagName("head")[0].appendChild(script);
        })();
    } else {
        if (typeof(window.jQuery.ajax) == 'undefined') {
            (function() {
                // Load jquery script if doesn't exist
                var script = document.createElement("SCRIPT");
                script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
                script.type = 'text/javascript';
                script.onload = function() {
                    $iSjQ = window.jQuery; // $iSjQ is our jQuery
                    //$ = window.jQuery;  // $iSjQ is our jQuery
                    setTimeout(function() {
                        createInstagramStoryPanel();
                    }, 100)
                };
                document.getElementsByTagName("head")[0].appendChild(script);
            })();
        } else {
            $iSjQ = window.jQuery; // $iSjQ is our jQuery
            //$ = window.jQuery;  // $iSjQ is our jQuery
            setTimeout(function() {
                createInstagramStoryPanel();
            }, 100)
        }
    }
}


function loadInstaCss(cssId, cssUrl) {
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssUrl;
        link.media = 'all';
        link.defer = 'true';
        link.async = true;
        head.appendChild(link);
    }
}


var feed_url = "https://eshopcrm.com/instagram-story/feed.php?username=";

function createInstagramStoryPanel() {
    // To load required Css File

    if (typeof(insta_local) != "undefined" && $iSjQ("#instafeed").length > 0) {
        return;
    }

    /*if (typeof($igFS) != "undefined") {
         igPostAjax($igFS);
         return;
    }*/
    if (typeof($iSjQ) == "undefined") {
        $iSjQ = window.jQuery;
    }
    if ($iSjQ.ajaxSettings && $iSjQ.ajaxSettings.headers) {
        delete $iSjQ.ajaxSettings.headers.Authentication;
    }

    var custom_username = $iSjQ("#instagram-feed-box").attr("data-username");
    var custom_layout = $iSjQ("#instagram-feed-box").attr("data-layout");
    custom_username_g = custom_username;
    $iSjQ.ajax({
        url: igServerpath + 'ajax.php',
        dataType: "json",
        type: 'POST',
        async: true,
        beforeSend: function() {},
        data: {
            'domain': Shopify.shop,
            'theme_id': Shopify.theme.id,
            'username': custom_username,
            'layout': custom_layout,
            'glider': 1,
            'theme_store_id': Shopify.theme.theme_store_id
        },
        error: function(data) {
            console.log(data);
        },
        success: function(igSettings) {
            igPostAjax(igSettings);
        }
    });

    $iSjQ(window).resize(function() {
        resizeGridIG();
    });
}

function igPostAjax(igSettings) {
    //loadTiktok(igSettings.tiktok_setting);
    if (igSettings.powered_by == 1) {
        setTimeout(function() {
            //$("#stories").hide();
            //$("#instafeed").hide();
            $("#instafeed").after("<p style='text-align: center;padding: 5px;font-size: 12px;font-weight:bold;'>Powered By <a href='https://apps.shopify.com/instagram-stories-for-website' target='_blanks' style='text-decoration: underline;'>Instagram Feed + Stories</a>.</p>");
        }, 1000);
    }
    if (igSettings.powered_by == 2) {
        setTimeout(function() {
            //$("#stories").hide();
            $("#instafeed").hide();
            $("#instafeed").after("<p style='text-align: center;padding: 5px;font-size: 12px;font-weight:bold;'>Visit InstaFeedStory app dashboard to enable app.</p>");
        }, 3000);
    }
    igCustomCSS(igSettings);
    igSettings = igSettings;
    if (igSettings != null) {
        igSettings_g = igSettings;
        if (igSettings.instagram_stories != null || igSettings.instagram_hightlights != null) {
            loadZuck(igSettings);
        } else {
            loadIgFeed(igSettings);
        }
    }



}

function loadIgFeed(igSettings) {
    if (igSettings_g == []) {
        return;
    }
    igSettings = igSettings_g;
    if (igSettings.hashtag != "" && typeof(custom_username_g) == "undefined") {
        loadInstaCss('instafeed-css', 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css');
        loadInstaCss('instafeed-css-slick', 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.theme.min.css');
        var splide = '<div class="glide">  <div class="glide__track" data-glide-el="track"><ul class="glide__slides"></ul><div data-glide-el="controls">\
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>\
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>\
        </div>';
        if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").append('<div id="instafeed"  ></div>');
        } else if (igSettings.only_where_div == 1) {

        } else if (igSettings.after_class_feed != "" && $iSjQ("" + igSettings.after_class_feed).length > 0) {
            $iSjQ("" + igSettings.after_class_feed).after('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if (igSettings.before_class_feed != "" && $iSjQ("" + igSettings.before_class_feed).length > 0) {
            $iSjQ("" + igSettings.before_class_feed).before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ(".content-for-layout").length > 0) {
            $iSjQ(".content-for-layout").append('<div id="instafeed"  ></div>');
        } else if ($iSjQ("footer").length > 0) {
            $iSjQ("footer").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ("#shopify-section-footer").length > 0) {
            $iSjQ("#shopify-section-footer").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ(".footer-section").length > 0) {
            $iSjQ(".footer-section").before('<div id="instafeed"  ></div>');
        } else {
            $iSjQ("body").append('<div id="instafeed"  ></div>');
        }
        $iSjQ("#instafeed").html(splide);
        if ($iSjQ.ajaxSettings && $iSjQ.ajaxSettings.headers) {
            delete $iSjQ.ajaxSettings.headers.Authentication;
        }
        var feedItems = JSON.parse(igSettings.instagram_feed_json);

        for (var i = 0; i < feedItems.length; i++) {
            var slide_item = '<li class="glide__slide" style="box-shadow: 0px 3px 8px 0px #c7c7c7;margin: 20px;"><a target="_blank" href="https://www.instagram.com/explore/tags/' + igSettings.hashtag + '"><img alt="Instagram ' + igSettings.hashtag + '" alt="Instagram ' + igSettings.hashtag + '" loading="lazy" alt="Instagram ' + igSettings.hashtag + '" src="' + feedItems[i]['node'].thumbnail_src + '" class="splide-img" style="max-width: 100%"></a></li>';
            $iSjQ(".glide__slides").append(slide_item);
        }

        setTimeout(function() {
            callSlickSlider();
        }, 100)

    } else if (igSettings.instagram_feed == 0 && (igSettings.instagram_token != "" || igSettings.grid == 1)) {
        if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").append('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if (igSettings.only_where_div == 1) {
            if (window.location.href.indexOf("shop-our-instagram") > 0 && Shopify.shop == "mesh-shoes.myshopify.com") {
                $iSjQ(".CollectionList--grid").before("<div id='stories' style='display:flex;'></div>");
                $iSjQ(".CollectionList--grid").before('<div id="instafeed"  class="masonry masonry--h"></div>');
            }
        } else if (igSettings.after_class_feed != "" && $iSjQ("" + igSettings.after_class_feed).length > 0) {
            $iSjQ("" + igSettings.after_class_feed).after('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if (igSettings.before_class_feed != "" && $iSjQ("" + igSettings.before_class_feed).length > 0) {
            $iSjQ("" + igSettings.before_class_feed).before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ(".content-for-layout").length > 0) {
            $iSjQ(".content-for-layout").append('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ("footer").length > 0) {
            $iSjQ("footer").before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ("#shopify-section-footer").length > 0) {
            $iSjQ("#shopify-section-footer").before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else if ($iSjQ(".footer-section").length > 0) {
            $iSjQ(".footer-section").before('<div id="instafeed"  class="masonry masonry--h"></div>');
        } else {
            $iSjQ("body").append('<div id="instafeed"  class="masonry masonry--h"></div>');
        }
        //$iSjQ("#instafeed").prepend('<section style="width: 100%; margin: 10px;"><h2 class="section-title desktop-12 tablet-6 mobile-3"><a href="https://www.instagram.com/'+igSettings.instagram_username+'">FOLLOW US ON INSTAGRAM</a></h2></section>')

        /*if ($iSjQ("#instafeed").length > 0) {
            var feed = new Instafeed({
                get: 'user',
                userId: igSettings.instagram_page_id,
                accessToken: igSettings.instagram_token,
                limit: igSettings.image_count
            });
            feed.run(); 
        }*/

        var feedItems = JSON.parse(igSettings.instagram_feed_json);
        $iSjQ("#instafeed").html("<div class='instagram-grid-container' style='display: grid;'></div>");
        for (var i = 0; i < feedItems.length && i < igSettings.image_count; i++) {
            var slide_item = '<li class="ingtagram-grid-item" style="display: inline-block"><a target="_blank" href="https://www.instagram.com/' + igSettings.username + '"><img alt="Instagram ' + igSettings.username + '" loading="lazy" src="' + feedItems[i]['node'].thumbnail_src + '" class="splide-img" style="max-width: 100%"></a></li>';
            $iSjQ(".instagram-grid-container").append(slide_item);
        }

        $iSjQ(".splide-img").each(function() {
            $iSjQ(this).attr("src", $iSjQ(this).attr("data-src"));
        });
        resizeGridIG();
        setTimeout(function() {
            resizeGridIG();
        }, 500);
        setTimeout(function() {
            resizeGridIG();
        }, 2000);
        setTimeout(function() {
            resizeGridIG();
        }, 3000);
    } else if (igSettings.instagram_feed == 0) {
        loadInstaCss('instafeed-css', 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.core.min.css');
        loadInstaCss('instafeed-css-slick', 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/css/glide.theme.min.css');
        var splide = '<div class="glide">  <div class="glide__track" data-glide-el="track"><ul class="glide__slides"></ul><div data-glide-el="controls">\
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><</button>\
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">></button>\
        </div>';
        if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").append('<div id="instafeed"  ></div>');
        } else if (igSettings.only_where_div == 1) {

        } else if (igSettings.after_class_feed != "" && $iSjQ("" + igSettings.after_class_feed).length > 0) {
            $iSjQ("" + igSettings.after_class_feed).after('<div id="instafeed"  ></div>');
        } else if (igSettings.before_class_feed != "" && $iSjQ("" + igSettings.before_class_feed).length > 0) {
            $iSjQ("" + igSettings.before_class_feed).before('<div id="instafeed"  ></div>');
        } else if ($iSjQ(".content-for-layout").length > 0) {
            $iSjQ(".content-for-layout").append('<div id="instafeed"  ></div>');
        } else if ($iSjQ("footer").length > 0) {
            $iSjQ("footer").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ("#instagram-feed-box").length > 0) {
            $iSjQ("#instagram-feed-box").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ("#shopify-section-footer").length > 0) {
            $iSjQ("#shopify-section-footer").before('<div id="instafeed"  ></div>');
        } else if ($iSjQ(".footer-section").length > 0) {
            $iSjQ(".footer-section").before('<div id="instafeed"  ></div>');
        } else {
            $iSjQ("body").append('<div id="instafeed"  ></div>');
        }
        $iSjQ("#instafeed").html(splide);
        if ($iSjQ.ajaxSettings && $iSjQ.ajaxSettings.headers) {
            delete $iSjQ.ajaxSettings.headers.Authentication;
        }
        //direct request
        var feedItems = JSON.parse(igSettings.instagram_feed_json);
        for (var i = 0; i < feedItems.length && i < igSettings.image_count; i++) {
            var slide_item = '<li class="glide__slide" style="box-shadow: 0px 3px 8px 0px #c7c7c7;"><a target="_blank" href="https://www.instagram.com/' + igSettings.username + '"><img loading="lazy" alt="Instagram ' + igSettings.username + '" alt="Instagram ' + igSettings.username + '" src="' + feedItems[i]['node'].thumbnail_src + '" class="splide-img" style="max-width: 100%"></a></li>';
            $iSjQ(".glide__slides").append(slide_item);
        }

        setTimeout(function() {
            callSlickSlider();
        }, 100)

        $iSjQ(".splide-img").each(function() {
            $iSjQ(this).attr("src", $iSjQ(this).attr("data-src"));
        });

    }



    if (window.location.pathname != '/' && igSettings.only_homepage == 1 && $iSjQ("#instagram-feed-box").length == 0) {
        $iSjQ("#instafeed").remove();
        return;
    }


    if (igSettings.feed_title != null && igSettings.feed_title != "" && $iSjQ("#instafeed").length > 0) {
        $iSjQ('' + igSettings.feed_title_class).before("<h2 style='text-align:center; widht: 100%;' class='instastory-title'>" + igSettings.feed_title + "</h2>");
    }

    if (window.location.href.indexOf("/checkout") > 0 || window.location.href.indexOf("/thank") > 0) {
        $iSjQ("#stories").remove();
        $iSjQ("#instafeed").remove();
        return;
    }
}

function resizeGridIG() {
    if (typeof(igSettings_g) == "undefined") {
        return;
    }
    var iWidth = $iSjQ("#instafeed").width();
    var iCount = igSettings_g.image_count;
    if (iCount == 0 || iCount == null) {
        iCount = $iSjQ(".ingtagram-grid-item").length;
    }
    if (Shopify.shop == "shopmcfly.myshopify.com") {
        var iGridWidth = (iWidth) / 6;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 0px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    } else if (iCount % 9 == 0 || iCount % 15 == 0) {
        var iGridWidth = (iWidth - 35) / 3;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 10px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    } else if (iCount % 6 == 0 && iWidth > 600) {
        var iGridWidth = (iWidth - 70) / 6;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 10px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    } else if (iCount % 7 == 0 && iWidth > 600) {
        var iGridWidth = (iWidth - 5) / 7;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 0px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    } else if (iCount % 4 == 0 && iWidth > 600) {
        var iGridWidth = (iWidth - 100) / 4;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin: 10px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    } else if (iCount % 5 == 0 && iWidth > 600) {
        var iGridWidth = (iWidth - 60) / 5;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 10px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    }
    if (iCount % 2 == 0 && iWidth <= 600) {
        var iGridWidth = (iWidth - 12) / 2;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin-left: 5px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    }
    if (iCount % 7 == 0 && iWidth <= 600) {
        var iGridWidth = (iWidth - 5) / 2;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin: 0px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    }
    if (iCount % 5 == 0 && iWidth <= 600) {
        var iGridWidth = (iWidth - 35) / 2;
        $iSjQ(".ingtagram-grid-item").attr('style', "margin: 5px; width:" + iGridWidth + "px; height:" + iGridWidth + "px;max-width:" + iGridWidth + "px;min-width:" + iGridWidth + "px");
    }

}

function createInstagramStoryPopupIcon($igSettings) {
    igSettings = igSettings_g;

    $iSjQ("#stories").remove();
    if ($iSjQ("#instagram-stories-box").length > 0) {
        $iSjQ("#instagram-stories-box").append("<div id='stories' style=' display:flex;'></div>");
    } else if (igSettings.only_where_div == 1) {
        // do nothing
    } else if (igSettings.after_class != "" && $iSjQ("" + igSettings.after_class).length > 0) {
        $iSjQ("" + igSettings.after_class).after("<div id='stories' style=' display:flex;'></div>");
    } else if (igSettings.before_class == "#shopify-section-footer" && $iSjQ("#instafeed").length > 0) {
        $iSjQ("#instafeed").before("<div id='stories' style='display:flex;'></div>");
    } else if (igSettings.before_class != "" && $iSjQ("" + igSettings.before_class).length > 0) {
        $iSjQ("" + igSettings.before_class).before("<div id='stories' style=' display:flex;'></div>");
    } else if ($iSjQ("#instafeed").length > 0) {
        $iSjQ("#instafeed").before("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ("#shopify-section-action-bar").length > 0) {
        $iSjQ("#shopify-section-action-bar").after("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ(".slideshow--adapt").length > 0) {
        $iSjQ(".slideshow--adapt").after("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ("index-section--hero").length > 0) {
        $iSjQ(".index-section--hero").after("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ(".index-slideshow-section").length > 0) {
        $iSjQ(".index-slideshow-section").after("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ(".shopify-section--slideshow").length > 0) {
        $iSjQ(".shopify-section--slideshow").after("<div id='stories' style='display:flex;'></div>");
    } else if ($iSjQ("#shopify-section-header").length > 0) {
        $iSjQ("#shopify-section-header").after("<div id='stories' style='display:flex;'></div>");
    } else {
        $iSjQ("body").prepend("<div id='stories' style='display:flex;'></div>");
    }

    if (window.location.pathname != '/' && igSettings.only_homepage == 1 && $iSjQ("#instagram-stories-box").length == 0) {
        $iSjQ("#stories").remove();
    }
    if (window.location.href.indexOf("products") < 0 && igSettings.only_productpage == 1 && $iSjQ("#instagram-stories-box").length == 0) {
        $iSjQ("#stories").remove();
    }
    if (Shopify.shop == "if-she-loves.myshopify.com") {
        $iSjQ(".story-viewer").find(".close").on("click", function() {
            $iSjQ([document.documentElement, document.body]).animate({
                scrollTop: $iSjQ("#stories").offset().top
            });
        })
    }
    if (Shopify.shop == "tony-bianco.myshopify.com" || Shopify.shop == "tony-bianco-stage.myshopify.com") {
        if ($iSjQ(window).width() > 760) {
            $iSjQ("#stories").remove();
        }
    }

    var timeIndex = 0;

    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

    var timestamp = function() {
        var now = new Date();
        var shift = shifts[timeIndex++] || 0;
        var date = new Date(now - shift * 1000);

        //return date.getTime() / 1000;
        return "";
    };

    var defaultStory = '\
          <div class="story-circle-gradient" style="margin:6px;">\
            <div class="story-circle" style="cursor: pointer;">\
              <p class="add-story" style="font-size: 28px;line-height: 0px;margin-top: 50%;">+</p>\
              <p class="story-promo-tag">' + igSettings.promotion.promo_value + '</p>\
            </div>\
          </div>\
    ';
    if (igSettings.promotion != null && igSettings.promotion.enable_promo == 1) {
        $iSjQ("#stories").append(defaultStory);
        $iSjQ(".story-circle-gradient").click(function() {
            $iSjQ("#instagram-promo-instructions").css("display", "table");
            $iSjQ("#instagram-promo-instructions").css("width", "100%");
            /*setTimeout(function(){
                $iSjQ("#instagram-promo-instructions").fadeOut();
            },25000);*/
        })
        $iSjQ("body").append("<div id='instagram-promo-instructions'><p id='instagram-promo-instructions-close' style='cursor: pointer;font-family: cursive;color: white;position: absolute;top: 15px;right: 25px;font-size: 36px;'>x</p><p style='font-size: 28px;line-height: 36px;word-break: break-word;'>" + igSettings.promotion.instruction + "</p></div>");
        $iSjQ("#instagram-promo-instructions-close").click(function() {
            $iSjQ("#instagram-promo-instructions").fadeOut();
        });
    }

    //if (igSettings.promotion == null || igSettings.promotion.enable_promo == 1) {
    var hide = 0;
    if (window.location.href.indexOf("pinkpewter.com/cart") > 0) {
        hide = 1;
    }
    if (window.location.pathname != '/' && Shopify.shop == "natural-girl-wigs.myshopify.com") {
        hide = 1;
    }
    var items = [];
    var lastHighlight;
    if (igSettings.highlight_active == 1 || window.location.href.indexOf("vishwesh") > 0 || Shopify.shop == "smile-kit.myshopify.com1" || Shopify.shop == "tacoolathelabel.myshopify.com" || Shopify.shop == "david-james-kerr-ltd.myshopify.com" || Shopify.shop == "allsaysave.myshopify.com" || Shopify.shop == "222222222222222222222222jared-jamin-2.myshopify.com" || Shopify.shop == "natalie-michelle-watson.myshopify.com" || Shopify.shop == "room-primp.myshopify.com" || Shopify.shop == "sociorush.myshopify.com" || Shopify.shop == "maskologist.myshopify.com" || Shopify.shop == "laticoleathers.myshopify.com" || Shopify.shop == "donate-daily.myshopify.com") {
        setTimeout(function() {
            var currentHighlight = "";
            var currentHighlightItems = [];
            var totalHighlights = igSettings.instagram_hightlights.length;
            highlightCount = -1;
            perHighlightCount = 0;
            var first = 0;
            igSettings.instagram_hightlights.forEach(function(highlight, index) {
                highlightCount++;
                if (highlight.title != "Test") {
                    //if (currentHighlight != highlight.highlight_id && currentHighlight != "" || totalHighlights == highlightCount) {
                    if (currentHighlight != highlight.highlight_id && first != 0) {
                        currentHighlight = highlight.highlight_id;
                        var stories_single = {
                            id: "story_" + index,
                            photo: lastHighlight.thumbnail_url,
                            name: lastHighlight.title.replace("?", ""),
                            link: "https://www.instagram.com/" + igSettings.username,
                            lastUpdated: timestamp(),
                            items: currentHighlightItems
                        }
                        stories_arr.push(stories_single);
                        currentHighlightItems = [];
                        perHighlightCount = 0;
                        if (perHighlightCount < 70) {
                            perHighlightCount++;
                            currentHighlight = highlight.highlight_id;
                            var mediaType = "";
                            var time = 0;
                            if (highlight.video_url.length < 5) {
                                mediaType = "photo";
                                time = 3;
                                media_url = highlight.image_url;
                            } else {
                                mediaType = "video";
                                time = 8;
                                media_url = highlight.video_url;
                            }
                            highlightItem = Zuck.buildItem(highlight.title, mediaType, time, media_url, highlight.image_url, "https://www.instagram.com/" + igSettings.username, igSettings.h_button_text, false, timestamp());
                            //highlightItem = Zuck.buildItem(highlight.title, mediaType, time,  media_url, highlight.image_url,  "", false, false, timestamp());
                            currentHighlightItems.push(highlightItem);
                            lastHighlight = highlight;
                        }
                    } else {
                        first = 1;
                        if (perHighlightCount < 70) {
                            perHighlightCount++;
                            currentHighlight = highlight.highlight_id;
                            var mediaType = "";
                            var time = 0;
                            if (highlight.video_url == "") {
                                mediaType = "photo";
                                time = 3;
                                media_url = highlight.image_url;
                            } else {
                                mediaType = "video";
                                time = 8;
                                media_url = highlight.video_url;
                            }
                            highlightItem = Zuck.buildItem(highlight.title, mediaType, time, media_url, highlight.image_url, "https://www.instagram.com/" + igSettings.username, igSettings.h_button_text, false, timestamp());
                            //highlightItem = Zuck.buildItem(highlight.title, mediaType, time,  media_url, highlight.image_url,  "", false, false, timestamp());
                            currentHighlightItems.push(highlightItem);
                            lastHighlight = highlight;
                        }
                    }
                    if (totalHighlights == (highlightCount + 1)) {
                        currentHighlight = highlight.highlight_id;
                        var stories_single = {
                            id: "story_" + index,
                            photo: lastHighlight.thumbnail_url,
                            name: lastHighlight.title.replace("?", ""),
                            link: "https://www.instagram.com/" + igSettings.username,
                            lastUpdated: timestamp(),
                            items: currentHighlightItems
                        }
                        stories_arr.push(stories_single);

                    }
                }


            });
            if ($iSjQ("#stories").length > 0) {
                var stories = new Zuck('stories', {
                    backNative: false,
                    previousTap: false,
                    autoFullScreen: false,
                    backButton: true,
                    skin: 'snapgram',
                    avatars: true,
                    list: true,
                    cubeEffect: false,
                    localStorage: false,
                    stories: stories_arr,
                    callbacks: {}
                });
            }
        }, ig_delay);
        setTimeout(function() {
            if (Shopify.shop != "if-she-loves.myshopify.com" && Shopify.shop != "allsaysave.myshopify.com" && Shopify.shop != "avenue-attire.myshopify.com" && Shopify.shop != "natural-girl-wigs.myshopify.com" && Shopify.shop != "bollyglow-com.myshopify.com") {
                $iSjQ(".story-circle-gradient").width($iSjQ(".story").find("span.img").width());
                $iSjQ(".story-circle-gradient").height($iSjQ(".story-circle-gradient").width());
                $iSjQ(".story-circle").width($iSjQ(".story-circle-gradient").width() - 6);
                $iSjQ(".story-circle").height($iSjQ(".story-circle-gradient").width() - 6);
            }
            if ($iSjQ(".story").length == 0) {} else {
                $iSjQ("#stories").fadeIn()
            }
        }, ig_delay)
    } else {
        if (hide == 0) {
            if (Shopify.shop == "tony-bianco-stage.myshopify.com") {
                ig_delay = 0;
            }
            if (Shopify.shop == "rockers-workshop.myshopify.com") {
                ig_delay = 200;
            }
            setTimeout(function() {
                if (igSettings.instagram_stories != null) {
                    igSettings.instagram_stories.forEach(function(item, index) {
                        var mediaType = "";
                        var time = 0;

                        if (item.media_type === "IMAGE") {
                            mediaType = "photo";
                            time = 3;
                        } else {
                            mediaType = "video";
                            time = 15;
                        }
                        if (item.link != null) {
                            var zuckItem = Zuck.buildItem(item.username, mediaType, time, item.media_url, item.thumbnail_url, item.link, igSettings.button_text, false, timestamp());
                        } else {
                            var zuckItem = Zuck.buildItem(item.username, mediaType, time, item.media_url, item.thumbnail_url, '', false, false, timestamp());
                        }

                        var stories_single = {
                            id: "story_" + index,
                            photo: item.thumbnail_url,
                            name: "",
                            link: "",
                            lastUpdated: timestamp(),
                            items: [
                                zuckItem
                            ]
                        }

                        stories_arr.push(stories_single);

                    });
                    if ($iSjQ("#stories").length > 0) {
                        var stories = new Zuck('stories', {
                            backNative: false,
                            previousTap: true,
                            autoFullScreen: false,
                            backButton: true,
                            skin: 'snapgram',
                            avatars: true,
                            list: true,
                            cubeEffect: false,
                            localStorage: false,
                            stories: stories_arr,
                        });
                    }
                }

            }, ig_delay);
            setTimeout(function() {
                if (Shopify.shop != "if-she-loves.myshopify.com" && Shopify.shop != "cold-cosmetics.myshopify.com" && Shopify.shop != "1ppun.myshopify.com" && Shopify.shop != "rockers-workshop.myshopify.com" && Shopify.shop != "avenue-attire.myshopify.com" && Shopify.shop != "natural-girl-wigs.myshopify.com" && Shopify.shop != "bollyglow-com.myshopify.com") {
                    $iSjQ(".story-circle-gradient").width($iSjQ(".story").find("span.img").width());
                    $iSjQ(".story-circle-gradient").height($iSjQ(".story-circle-gradient").width());
                    $iSjQ(".story-circle").width($iSjQ(".story-circle-gradient").width() - 6);
                    $iSjQ(".story-circle").height($iSjQ(".story-circle-gradient").width() - 6);
                }
                if ($iSjQ(".story").length == 0) {
                    // $iSjQ("#stories").hide();
                } else {
                    $iSjQ("#stories").fadeIn()
                }
            }, ig_delay)
        } else {
            $iSjQ("#stories").remove();
        }
    }
    //}
    if (window.location.pathname != '/' && igSettings.only_homepage == 1 && $iSjQ("#instagram-stories-box").length == 0) {
        $iSjQ("#stories").remove();
    }

}

function igCustomCSS(igSettings) {
    var css = "";
    css += "a.close{text-decoration: none;}  .stories.snapgram .story>a{padding: 2px;} .story-viewer > .head .time{display: none !important;}.story-promo-tag{margin-top: 0px !important;} .stories.snapgram .story.seen {    opacity: .95;} #zuck-modal-content .story-viewer .slides .item>.media{max-height: 100vh;} #zuck-modal{ position: fixed !important; z-index: 9999999999;} #instafeed .hidden, #stories .hidden{display: none;} .mobile-nav-wrapper.js-menu--is-open{z-index:99999} ";
    if (Shopify.shop == "rockers-workshop.myshopify.com") {
        css += "#stories{background: black;}";
    }
    if (Shopify.shop == "glamour-supply.myshopify.com" && $iSjQ(window).width() < 760) {
        css += " .template-product header .previous-next .columns {padding-top: 0px; padding-bottom: 0px; height: 20px;} .main-content{padding-top: 10px;}";
    }
    css += igSettings.custom_css;
    $iSjQ("body").append("<style>" + css + "</style>");
}


function callSlickSlider() {
    if ($iSjQ('.glide').length == 0) {
        return;
    }
    var script = document.createElement("SCRIPT");
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.2.0/glide.min.js';
    script.type = 'text/javascript';
    script.async = 'true';
    script.onload = function() {
        setTimeout(function() {
            new Glide('.glide', {
                type: 'carousel',
                autoplay: 5000,
                gap: 0,
                animationTimingFunc: 'linear',
                hoverpause: true,
                perView: 8,
                breakpoints: {
                    2500: {
                        perView: 7,
                    },
                    2000: {
                        perView: 6,
                    },
                    1600: {
                        perView: 5,
                    },
                    1024: {
                        perView: 4,
                    },
                    600: {
                        perView: 3,
                    },
                },
            }).mount()
        }, 300);
        setTimeout(function() {
            var cw = $iSjQ('#instafeed .glide__slide').width();
            cw = cw + 10;
            $iSjQ('#instafeed .glide__slide').parent().css({
                'max-height': cw + 'px'
            });
        }, 1000)
        setTimeout(function() {
            $("#instafeed li.glide__slide img").css("height", $("#instafeed li.glide__slide").width());
            $("#instafeed li.glide__slide .splide-img").css("object-fit", "contain");
        }, 500);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
}

function loadTiktok(tiktok_setting) {
    if (tiktok_setting != null) {
        if (tiktok_setting.videos != null && tiktok_setting.videos != '' && tiktok_setting.enabletiktok == 1 && window.location.pathname == '/') {
            if ($("#shopify-section-footer").length == 1) {
                $("#shopify-section-footer").before("<iframe id='tiktok_iframe' src='https://eshopcrm.com/instagram-story/embed_tiktok.php?domain=" + Shopify.shop + "' style='width:100%;border: 0px;'></iframe>");
            } else {
                $("footer").before("<iframe id='tiktok_iframe' src='https://eshopcrm.com/instagram-story/embed_tiktok.php?domain=" + Shopify.shop + "' style='width:100%;border: 0px;'></iframe>");
            }
            window.addEventListener("message", function(event) {
                if (typeof event.data === 'string' && event.data.startsWith("tiktok_resize_")) {
                    //console.log("Its string and onetap");
                    $("#tiktok_iframe").css("height", event.data.replace("tiktok_resize_", ""));
                }
            });
        }
    }
}