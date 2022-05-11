function startDictation(){if(window.hasOwnProperty("webkitSpeechRecognition")){var recognition=new webkitSpeechRecognition;recognition.continuous=!1,recognition.interimResults=!1,recognition.lang="cs-CZ",recognition.start(),recognition.onresult=function(e){document.getElementById("searchbox").value=e.results[0][0].transcript,recognition.stop(),document.getElementById("formSearchForm").submit()},recognition.onerror=function(e){recognition.stop()}}}if($('<div class="swiffy-slider slider-nav-arrow slider-nav-autoplay slider-nav-autopause slider-indicators-round slider-nav-mousedrag" data-slider-nav-autoplay-interval="5000"><ul class="slider-container"></ul><button type="button" class="slider-nav"></button> <button type="button" class="slider-nav slider-nav-next"></button></div>').insertBefore(".in-index #content-wrapper"),$("#carousel .item").each((function(){$(".swiffy-slider .slider-container").append('<li><div class="slide-content"><h1><span>'+$(this).find("img").attr("alt")+'</span></h1><a href="'+$(this).find("a").attr("href")+'" class="btn">Více informací</a></div><div class="slide-img"><img src="'+$(this).find("img").attr("src")+'"></div></li>')})),$(".swiffy-slider .slider-container li:first-child img").addClass("active"),$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)"),$(".p .p-tools form").prepend('<span class="quantity"><input type="text" value="1" name="amount" class="form-control amount" data-min="1" data-max="100" tabindex="0"><span class="increase"></span><span class="decrease"></span></span>'),$("#products-1, #products-2").addClass("swiffy-slider slider-item-show4 slider-nav-arrow slider-nav-autoplay slider-nav-autopause slider-indicators-round"),$("#products-1, #products-2").data("slider-nav-autoplay-interval","5000"),$("#products-1, #products-2").wrapInner("<div class='slider-container'></div>"),$("#products-1, #products-2").append('<button type="button" class="slider-nav"></button> <button type="button" class="slider-nav slider-nav-next"></button>'),$(".admin-bar").click((function(){$(".admin-bar").toggleClass("--active")})),$(".header-top").prepend('<div class="nav-menu-toggle" id="js-menuToggle"><span></span></div>'),$("#js-menuToggle, .navigation-close").click((function(){$("body").toggleClass("--menuActive")})),$(".navigation-buttons").prepend('<div class="nav-search" id="js-searchToggle"></div><div class="nav-user" id="js-userToggle"></div>'),$("#js-userToggle").click((function(){$("body").toggleClass("--navUserActive")})),$(".user-action-login").on("click",(function(e){e.target===this&&$("body").toggleClass("--navUserActive")})),$(".user-action .login-widget .popup-widget-inner").append("<span class='login-close'></span>"),$(".login-close").click((function(){$("body").removeClass("--navUserActive")})),$("#js-searchToggle").click((function(){$("body").toggleClass("--searchActive"),$(".header-top .search .form-control").focus()})),$(".cart-count").on("touchstart",(function(){$("body").toggleClass("--cartActive")})),$(".menu-helper").click((function(){$("body").removeClass("--menuActive --navUserActive --searchActive --cartActive --advancedModal")})),$("#navigation").insertBefore(".header-top .search"),$("#formSearchForm .query-input").attr("id","searchbox"),$("<div id='speechToggle' onclick='startDictation()'></div>").insertBefore(".search-form .btn"),$(".type-detail").length){if($("body").append('<div class="advancedModal"><div class="advancedModal__inner"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/kosik" class="btn">Přejít do košíku</a></div></div></div>'),$(".products-related").length){var related=$(".products-related").html();$(".advancedModal").append('<h3 class="advancedModal__relatedTitle">Související produkty</h3><div class="products-block">'+related+"</div>")}function advanceOrderCustom(){$("body").addClass("--advancedModal"),$(".advancedModal__content").html("");var img=$(".p-detail-inner .p-image-wrapper a").html(),name=$(".p-detail-inner .p-detail-inner-header h1").html();if($(".p-detail-inner .parameter-dependent").length)var stock=$(".p-detail-inner .availability-value .parameter-dependent:not(.noDisplay) span").html();else stock=$(".p-detail-inner .availability-value").html();var amount=parseFloat($(".p-detail-inner .add-to-cart .amount").val()),priceSingle=$(".p-detail-inner .p-final-price-wrapper .price-final-holder").html(),priceTotal=parseFloat(priceSingle)*amount;$(".advancedModal__content").prepend('<div class="extras-product"><div class="extras-product-img">'+img+'</div><div class="extras-product-name">'+name+'</div><div class="extras-product-stock">'+stock+'</div><div class="extras-product-amount">'+amount+'x</div><div class="extras-product-priceTotal">'+priceTotal+" Kč</div></div>")}document.addEventListener("ShoptetCartUpdated",(function(){advanceOrderCustom()})),$(".advancedModal").on("click",(function(e){e.target===this&&$("body").removeClass("--advancedModal")}))}if($(".p-detail-inner-header").insertBefore(".p-final-price-wrapper"),$(".p-thumbnails-inner").length){$('<div class="p-thumbnails-indicators"></div>').insertAfter(".p-thumbnails-inner");var x=0;function printSlideIndex(){var x=this.currentSlide;$(".p-thumbnails-indicator").removeClass("active"),$(".p-thumbnails-indicator."+x).addClass("active")}$(".p-thumbnail img").each((function(){$(".p-thumbnails-indicators").append('<div class="p-thumbnails-indicator '+x+'"></div>'),x++})),$(".p-thumbnails-indicator.0").addClass("active"),$(".cbox-gal").remove(),new Siema({selector:".p-thumbnails-inner>div",duration:200,easing:"ease-out",perPage:{0:1,500:4,991:6},startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,onInit:()=>{$("img").unveil()},onChange:printSlideIndex}),$((function(){var isDragging=!1;$(".p-thumbnail").mousedown((function(){isDragging=!1})).mousemove((function(){isDragging=!0})).mouseup((function(){var wasDragging=isDragging;isDragging=!1,wasDragging?$(".p-thumbnail").one("click",!1):$(".p-thumbnail").click()}))})),$(".p-image").addClass("--noDisplay")}else $(".p-image").addClass("--noPointerEvents");$(".mobile").length&&$(".p-thumbnail img").each((function(){var src=$(this).attr("data-src").replace("related","big");$(this).attr("data-src",src)})),$(".mobile").length&&$(".menu-level-1>li.ext>a").click((function(){return $(this).parent(".ext").toggleClass("--active"),!1})),$(".menu-level-2").each((function(){$(this).prepend('<span class="backSubmenu">Zpět</span>')})),$(".backSubmenu").click((function(){$(this).closest("li").toggleClass("--active")})),$(".contact-box").length&&$(".contact-box").clone().insertBefore("#js-userToggle"),$("#customerLogin").length&&$("#customerLogin .password-helper a:last-child").insertAfter(".input-wrapper.password"),$(".cart-header").length&&$(".cart-header").insertBefore(".content-wrapper-in"),$('<h4>Nejprodávanější</h4><div id="productsTop" class="products products-inline products-top"> <div class="product active"> <div class="p" data-micro="product" data-micro-product-id="240"> <a href="/drobny-nabytek/botnik-brw-nepo-sfb2k2/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/240_botnik.png?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/240_botnik.png?60c36a74" alt="botnik" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <meta id="ogImageProducts" property="og:image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/drobny-nabytek/botnik-brw-nepo-sfb2k2/" class="name" data-micro="url"> <span data-micro="name"> Botník BRW Nepo SFB2K2 <span class="category-appendix"> doplnek + darek boty zdarma + lestidlo na botniky</span> </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">240</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="1700.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 1 700 Kč </strong> </div><div class="price-additional">(1 405 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product active"> <div class="p" data-micro="product" data-micro-product-id="147"> <a href="/lampy-a-svitidla/beta-stojaci-lampa--2-ram--sat-chrom/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/147_lampa.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/147_lampa.jpg?60c36a74" alt="lampa" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/147_lampa.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/147_lampa.jpg?60c36a74"> <div class="extra-flags"> <div class="flags flags-extra"> <span class="flag flag-discount"> <span class="price-standard"><span>1 500 Kč</span></span> <span class="price-save">–14 %</span> </span> </div></div></a> <div class="p-in"> <div class="p-in-in"> <a href="/lampy-a-svitidla/beta-stojaci-lampa--2-ram--sat-chrom/" class="name" data-micro="url"> <span data-micro="name"> Beta stojací lampa, 2 ram, sat.chrom <span class="category-appendix"> + žárovka 6.5W, 700lm + podložka</span> </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">147</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="1290.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper"><span class="price-standard-label">Původně: </span><span class="price-standard"><span>1 500 Kč</span></span></span> <span class="price-save">&nbsp;(–14 %)</span> <div class="price price-final"> <strong> 1 290 Kč </strong> </div><div class="price-additional">(1 066 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product active"> <div class="p" data-micro="product" data-micro-product-id="249"> <a href="/kvetiny-do-interieru-2/brectan-ker-husty-180listu-60cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/249_brectan-1.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/249_brectan-1.jpg?60c36a74" alt="brectan 1" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/249_brectan-1.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/249_brectan-1.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/kvetiny-do-interieru-2/brectan-ker-husty-180listu-60cm/" class="name" data-micro="url"> <span data-micro="name"> Břečťan keř hustý 180 listů 60cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">249</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="69.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 69 Kč </strong> </div><div class="price-additional">(57 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="291"> <a href="/interier-a-bydleni/test/" class="image"> <img src="/cms/img/missing_images/related.png" data-src="/cms/img/missing_images/related.png" alt="" data-micro-image="/cms/img/missing_images/big.png"> <meta itemprop="image" content="/cms/img/missing_images/big.png"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/interier-a-bydleni/test/" class="name" data-micro="url"> <span data-micro="name"> test </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">291</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="242.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 242 Kč </strong> </div><div class="price-additional">(200 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="282"> <a href="/prosteradla/prosteradlo-jersey/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/282_blue.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/282_blue.jpg?60c36a74" alt="blue" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/282_blue.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/282_blue.jpg?60c36a74"> <div class="extra-flags"> <div class="flags flags-extra"> <span class="flag flag-discount"> <span class="price-standard"><span>399 Kč</span></span> <span class="price-save">–25 %</span> </span> </div></div></a> <div class="p-in"> <div class="p-in-in"> <a href="/prosteradla/prosteradlo-jersey/" class="name" data-micro="url"> <span data-micro="name"> Prostěradlo jersey </span></a> <div class="ratings-wrapper"> <div class="availability"> <span style="color:#009901"> Skladem </span> <span class="availability-amount">(<span class="product-stock-amount show-tooltip acronym" title="" data-product-id="282" data-variant-code="282/ZEL" data-variant-unit="&amp;nbsp;ks" data-decimals="0" data-original-title="Čekejte prosím...">100&nbsp;ks</span>)</span> </div><span class="p-code"> Kód: <span data-micro="sku">282/ZEL</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="299.00" data-micro-price-currency="CZK" data-micro-availability="https://schema.org/InStock"> <div class="prices"> <span class="price-standard-wrapper"><span class="price-standard-label">Původně: </span><span class="price-standard"><span>399 Kč</span></span></span> <span class="price-save">&nbsp;(–25 %)</span> <div class="price price-final"> <strong> 299 Kč </strong> </div><div class="price-additional">(247 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="252"> <a href="/kvetiny-do-interieru-2/phoenix-palma-120cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/252_palma.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/252_palma.jpg?60c36a74" alt="palma" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/252_palma.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/252_palma.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/kvetiny-do-interieru-2/phoenix-palma-120cm/" class="name" data-micro="url"> <span data-micro="name"> Phoenix palma 120cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">252</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="580.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 580 Kč </strong> </div><div class="price-additional">(479 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="246"> <a href="/fotoramecky/clip-ram-10x15cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/246_fotoramecek.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/246_fotoramecek.jpg?60c36a74" alt="fotoramecek" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/246_fotoramecek.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/246_fotoramecek.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/fotoramecky/clip-ram-10x15cm/" class="name" data-micro="url"> <span data-micro="name"> CLIP rám 10x15cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">246</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="50.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 25 Kč </strong> </div><div class="price-additional">(21 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="243"> <a href="/vazy-a-nadoby/vaza-artemis-aromat-25cm-svetle-zelena-leskla/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/243_vaza3.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/243_vaza3.jpg?60c36a74" alt="vaza3" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/243_vaza3.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/243_vaza3.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/vazy-a-nadoby/vaza-artemis-aromat-25cm-svetle-zelena-leskla/" class="name" data-micro="url"> <span data-micro="name"> Váza ARTEMIS AROMAT 25cm světle zelená lesklá </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">243/MAL</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="100.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> <small>od</small> 100 Kč </strong> </div><div class="price-additional">(od 83 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="237"> <a href="/boxy-na-potraviny/status-vaku-box-2l-zeleny/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/237_box.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/237_box.jpg?60c36a74" alt="box" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/237_box.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/237_box.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/boxy-na-potraviny/status-vaku-box-2l-zeleny/" class="name" data-micro="url"> <span data-micro="name"> Status Vaku box 2l zelený </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">237</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="399.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 399 Kč </strong> </div><div class="price-additional">(330 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="234"> <a href="/sklenice-a-dzbany/tescoma-sklenice-na-cervene-vino-charlie-450ml--6ks/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/234_sklenicka.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/234_sklenicka.jpg?60c36a74" alt="sklenicka" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/234_sklenicka.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/234_sklenicka.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/sklenice-a-dzbany/tescoma-sklenice-na-cervene-vino-charlie-450ml--6ks/" class="name" data-micro="url"> <span data-micro="name"> TESCOMA Sklenice na červené víno CHARLIE 450ml, 6ks </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">234</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="399.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 399 Kč </strong> </div><div class="price-additional">(330 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="button-wrapper"><a href="#" class="chevron-after chevron-down-after toggle-top-products" data-text="Zobrazit méně produktů">Zobrazit více produktů</a></div></div>').insertBefore("#category-header");
//# sourceMappingURL=maps/custom.js.map
