if($("#carousel").length){const mySiema=new Siema({selector:".carousel-inner",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!0,rtl:!1,onInit:()=>{},onChange:()=>{}});$(".left").length&&(document.querySelector(".left").addEventListener("click",(()=>mySiema.prev())),document.querySelector(".right").addEventListener("click",(()=>mySiema.next()))),$((function(){var isDragging=!1;$(".item a").mousedown((function(){isDragging=!1})).mousemove((function(){isDragging=!0})).mouseup((function(){var wasDragging=isDragging;isDragging=!1,wasDragging?$(".item").one("click",!1):$(".item").click()}))}))}function startDictation(){if(window.hasOwnProperty("webkitSpeechRecognition")){var recognition=new webkitSpeechRecognition;recognition.continuous=!1,recognition.interimResults=!1,recognition.lang="cs-CZ",recognition.start(),recognition.onresult=function(e){document.getElementById("searchbox").value=e.results[0][0].transcript,recognition.stop(),document.getElementById("formSearchForm").submit()},recognition.onerror=function(e){recognition.stop()}}}if($('<section class="hp-blog"><div class="container"><h1>Na našem blogu</h1><div class="news-wrapper"></div><div class="hp-blog-bottom"><a href="/blog" class="btn">Více článků</a></div></div></section>').insertBefore(".in-index #footer"),$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)"),$(".admin-bar").click((function(){$(".admin-bar").toggleClass("--active")})),$(".header-top").prepend('<div class="nav-menu-toggle" id="js-menuToggle"><span></span></div>'),$("#js-menuToggle, .navigation-close").click((function(){$("body").toggleClass("--menuActive")})),$(".navigation-buttons").prepend('<div class="nav-search" id="js-searchToggle"></div><div class="nav-user" id="js-userToggle"></div>'),$("#js-userToggle").click((function(){$("body").toggleClass("--navUserActive")})),$(".user-action-login").on("click",(function(e){e.target===this&&$("body").toggleClass("--navUserActive")})),$(".user-action .login-widget .popup-widget-inner").append("<span class='login-close'></span>"),$(".login-close").click((function(){$("body").removeClass("--navUserActive")})),$("#js-searchToggle").click((function(){$("body").toggleClass("--searchActive"),$(".header-top .search .form-control").focus()})),$(".cart-count").on("touchstart",(function(){$("body").toggleClass("--cartActive")})),$(".menu-helper").click((function(){$("body").removeClass("--menuActive --navUserActive --searchActive --cartActive --advancedModal")})),$("#navigation").insertBefore(".header-top .search"),$("#formSearchForm .query-input").attr("id","searchbox"),$("<div id='speechToggle' onclick='startDictation()'></div>").insertBefore(".search-form .btn"),$(".type-detail").length){if($("body").append('<div class="advancedModal"><div class="advancedModal__inner"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/kosik" class="btn">Přejít do košíku</a></div></div></div>'),$(".products-related").length){var related=$(".products-related").html();$(".advancedModal").append('<h3 class="advancedModal__relatedTitle">Související produkty</h3><div class="products-block">'+related+"</div>")}function advanceOrderCustom(){$("body").addClass("--advancedModal"),$(".advancedModal__content").html("");var img=$(".p-detail-inner .p-image-wrapper a").html(),name=$(".p-detail-inner .p-detail-inner-header h1").html();if($(".p-detail-inner .parameter-dependent").length)var stock=$(".p-detail-inner .availability-value .parameter-dependent:not(.noDisplay) span").html();else stock=$(".p-detail-inner .availability-value").html();var amount=parseFloat($(".p-detail-inner .add-to-cart .amount").val()),priceSingle=$(".p-detail-inner .p-final-price-wrapper .price-final-holder").html(),priceTotal=parseFloat(priceSingle)*amount;$(".advancedModal__content").prepend('<div class="extras-product"><div class="extras-product-img">'+img+'</div><div class="extras-product-name">'+name+'</div><div class="extras-product-stock">'+stock+'</div><div class="extras-product-amount">'+amount+'x</div><div class="extras-product-priceTotal">'+priceTotal+" Kč</div></div>")}document.addEventListener("ShoptetCartUpdated",(function(){advanceOrderCustom()})),$(".advancedModal").on("click",(function(e){e.target===this&&$("body").removeClass("--advancedModal")}))}if($(".p-detail-inner-header").insertBefore(".p-final-price-wrapper"),$(".p-thumbnails-inner").length){$('<div class="p-thumbnails-indicators"></div>').insertAfter(".p-thumbnails-inner");var x=0;function printSlideIndex(){var x=this.currentSlide;$(".p-thumbnails-indicator").removeClass("active"),$(".p-thumbnails-indicator."+x).addClass("active")}$(".p-thumbnail img").each((function(){$(".p-thumbnails-indicators").append('<div class="p-thumbnails-indicator '+x+'"></div>'),x++})),$(".p-thumbnails-indicator.0").addClass("active"),$(".cbox-gal").remove(),new Siema({selector:".p-thumbnails-inner>div",duration:200,easing:"ease-out",perPage:{0:1,500:4,991:6},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:()=>{$("img").unveil()},onChange:printSlideIndex}),$((function(){var isDragging=!1;$(".p-thumbnail").mousedown((function(){isDragging=!1})).mousemove((function(){isDragging=!0})).mouseup((function(){var wasDragging=isDragging;isDragging=!1,wasDragging?$(".p-thumbnail").one("click",!1):$(".p-thumbnail").click()}))})),$(".p-image").addClass("--noDisplay")}else $(".p-image").addClass("--noPointerEvents");$(".mobile").length&&$(".p-thumbnail img").each((function(){var src=$(this).attr("data-src").replace("related","big");$(this).attr("data-src",src)})),$("#productsTop .product").length>5&&($(".button-wrapper").remove(),new Siema({selector:"#productsTop",duration:200,easing:"ease-out",perPage:{0:2,500:3,991:5},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1}),$((function(){var isDragging=!1;$("a").mousedown((function(){isDragging=!1})).mousemove((function(){isDragging=!0})).mouseup((function(){var wasDragging=isDragging;isDragging=!1,wasDragging?$(".p").one("click",!1):$(".p").click()}))}))),$(".mobile").length&&$(".menu-level-1>li.ext>a").click((function(){return $(this).parent(".ext").toggleClass("--active"),!1})),$(".contact-box").length&&$(".contact-box").clone().insertBefore("#js-userToggle"),$("#customerLogin").length&&$("#customerLogin .password-helper a:last-child").insertAfter(".input-wrapper.password"),$(".cart-header").length&&$(".cart-header").insertBefore(".content-wrapper-in");
//# sourceMappingURL=maps/custom.js.map
