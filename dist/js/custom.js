if($("#carousel").length){const e=new Siema({selector:".carousel-inner",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});$(".left").length&&(document.querySelector(".left").addEventListener("click",()=>e.prev()),document.querySelector(".right").addEventListener("click",()=>e.next())),$((function(){var e=!1;$(".item a").mousedown((function(){e=!1})).mousemove((function(){e=!0})).mouseup((function(){var a=e;e=!1,a?$(".item").one("click",!1):$(".item").click()}))}))}function startDictation(){if(window.hasOwnProperty("webkitSpeechRecognition")){var e=new webkitSpeechRecognition;e.continuous=!1,e.interimResults=!1,e.lang="cs-CZ",e.start(),e.onresult=function(a){document.getElementById("searchbox").value=a.results[0][0].transcript,e.stop(),document.getElementById("formSearchForm").submit()},e.onerror=function(a){e.stop()}}}if($('<section class="hp-blog"><div class="container"><h1>Na našem blogu</h1><div class="news-wrapper"></div><div class="hp-blog-bottom"><a href="/blog" class="btn">Více článků</a></div></div></section>').insertBefore(".in-index #footer"),$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)"),$("#footer").length&&new InstagramFeed({username:"instagram",container:document.getElementById("instagramSectionContent"),display_profile:!1,display_biography:!1,display_gallery:!0,display_captions:!1,max_tries:4,callback:null,styling:!0,items:8,items_per_row:8,image_size:150,margin:.5,lazy_load:!0,on_error:!1}),$(".admin-bar").click((function(){$(".admin-bar").toggleClass("--active")})),$(".header-top").prepend('<div class="nav-menu-toggle" id="js-menuToggle"><span></span></div>'),$("#js-menuToggle, .navigation-close").click((function(){$("body").toggleClass("--menuActive")})),$(".navigation-buttons").prepend('<div class="nav-search" id="js-searchToggle"></div><div class="nav-user" id="js-userToggle"></div>'),$("#js-userToggle").click((function(){$("body").toggleClass("--navUserActive")})),$(".user-action-login").on("click",(function(e){e.target===this&&$("body").toggleClass("--navUserActive")})),$(".user-action .login-widget .popup-widget-inner").append("<span class='login-close'></span>"),$(".login-close").click((function(){$("body").removeClass("--navUserActive")})),$("#js-searchToggle").click((function(){$("body").toggleClass("--searchActive"),$(".header-top .search .form-control").focus()})),$(".cart-count").on("touchstart",(function(){$("body").toggleClass("--cartActive")})),$(".menu-helper").click((function(){$("body").removeClass("--menuActive --navUserActive --searchActive --cartActive --advancedModal")})),$("#formSearchForm .query-input").attr("id","searchbox"),$("<div id='speechToggle' onclick='startDictation()'></div>").insertBefore(".search-form .btn"),$(".type-detail").length){if($("body").append('<div class="advancedModal"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/kosik" class="btn">Přejít do košíku</a></div></div>'),$(".products-related").length){var related=$(".products-related").html();$(".advancedModal").append('<h3 class="advancedModal__relatedTitle">Související produkty</h3><div class="products-block">'+related+"</div>")}function advanceOrderCustom(){$("body").addClass("--advancedModal"),$(".advancedModal__content").html("");var e=$(".p-detail-inner .p-image-wrapper a").html(),a=$(".p-detail-inner .p-detail-inner-header h1").html();if($(".p-detail-inner .parameter-dependent").length)var t=$(".p-detail-inner .availability-value .parameter-dependent:not(.noDisplay) span").html();else t=$(".p-detail-inner .availability-value").html();var n=parseFloat($(".p-detail-inner .add-to-cart .amount").val()),i=$(".p-detail-inner .p-final-price-wrapper .price-final-holder").html(),o=parseFloat(i)*n;$(".advancedModal__content").prepend('<div class="extras-product"><div class="extras-product-img">'+e+'</div><div class="extras-product-name">'+a+'</div><div class="extras-product-stock">'+t+'</div><div class="extras-product-amount">'+n+'x</div><div class="extras-product-priceTotal">'+o+" Kč</div></div>")}document.addEventListener("ShoptetCartUpdated",(function(){advanceOrderCustom()}))}if($(".p-detail-inner-header").insertBefore(".p-final-price-wrapper"),$(".p-thumbnails-inner").length){$('<div class="p-thumbnails-indicators"></div>').insertAfter(".p-thumbnails-inner");var x=0;function printSlideIndex(){var e=this.currentSlide;$(".p-thumbnails-indicator").removeClass("active"),$(".p-thumbnails-indicator."+e).addClass("active")}$(".p-thumbnail img").each((function(){$(".p-thumbnails-indicators").append('<div class="p-thumbnails-indicator '+x+'"></div>'),x++})),$(".p-thumbnails-indicator.0").addClass("active"),$(".cbox-gal").remove(),new Siema({selector:".p-thumbnails-inner>div",duration:200,easing:"ease-out",perPage:{0:1,500:4,991:6},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:()=>{$("img").unveil()},onChange:printSlideIndex}),$((function(){var e=!1;$(".p-thumbnail").mousedown((function(){e=!1})).mousemove((function(){e=!0})).mouseup((function(){var a=e;e=!1,a?$(".p-thumbnail").one("click",!1):$(".p-thumbnail").click()}))})),$(".p-image").addClass("--noDisplay")}else $(".p-image").addClass("--noPointerEvents");$(".mobile").length&&$(".p-thumbnail img").each((function(){var e=$(this).attr("data-src").replace("related","big");$(this).attr("data-src",e)})),$("#productsTop .product").length>5&&($(".button-wrapper").remove(),new Siema({selector:"#productsTop",duration:200,easing:"ease-out",perPage:{0:2,500:3,991:5},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1}),$((function(){var e=!1;$("a").mousedown((function(){e=!1})).mousemove((function(){e=!0})).mouseup((function(){var a=e;e=!1,a?$(".p").one("click",!1):$(".p").click()}))}))),$(".mobile").length&&$(".menu-level-1>li.ext>a").click((function(){return $(this).parent(".ext").toggleClass("--active"),!1}));