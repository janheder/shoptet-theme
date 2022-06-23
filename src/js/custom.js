// =============================================================================
// INIT HOMEPAGE CAROUSEL
// =============================================================================

$("#carousel").addClass("swiffy-slider slider-item-show1 slider-nav-arrow slider-nav-autoplay slider-nav-autopause slider-indicators-round slider-nav-mousedrag");
$("#carousel").prop("data-interval" , '');
$("#carousel").data("slider-nav-autoplay-interval","5000");
$("#carousel .carousel-inner").removeClass("carousel-inner");
$("#carousel > div").addClass("slider-container");
$("#carousel").append('<button type="button" class="slider-nav"></button> <button type="button" class="slider-nav slider-nav-next"></button>');

$('#carousel .item').each(function(){
    $(this).find(".extended-banner-texts").append('<div href="' + $(this).find("a").attr("href") + '" class="btn">Více informací</div>');
});

// =============================================================================
// LOAD HOMEPAGE NEWS
// =============================================================================

$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)");

// =============================================================================
// LOAD NUMBER INPUT
// =============================================================================

function productAddNumber(){ 
    $(".p .p-tools form").prepend('<span class="quantity"><input type="text" value="1" name="amount" class="form-control amount" data-min="1" data-max="100" tabindex="0"><span class="increase"></span><span class="decrease"></span></span>');
}
productAddNumber();
document.addEventListener('ShoptetDOMPageContentLoaded', function () {
    productAddNumber();
});
// =============================================================================
// HOMEPAGE PRODUCTS
// =============================================================================

$(".in-index .products.products-block").each(function() {
    $(".in-index .products.products-block").attr("data-slider-nav-autoplay-interval","8000");

    if($(this).find('.product').length > 4){
        $(this).addClass("swiffy-slider slider-item-show4 slider-nav-arrow slider-nav-autoplay slider-nav-autopause slider-indicators-round slider-nav-page");
        $(this).wrapInner("<div class='slider-container'></div>");
        $(this).append('<button type="button" class="slider-nav"></button> <button type="button" class="slider-nav slider-nav-next"></button>');
    };
});

// =============================================================================
// MENU TOGGLES
// =============================================================================

/* toggle admin bar */
$(".admin-bar").click(function(){
    $(".admin-bar").toggleClass("--active");
});

/* add hamburger menu icon on mobile */
$(".header-top").prepend('<div class="nav-menu-toggle" id="js-menuToggle"><span></span></div>');

/* toggle control of responsive menu */
$("#js-menuToggle, .navigation-close").click(function(){
    $("body").toggleClass("--menuActive");
});

/* add search and user icons to header area */
$(".navigation-buttons").prepend('<div class="nav-search" id="js-searchToggle"></div><div class="nav-user" id="js-userToggle"></div>');


/* toggle user login modal */
$("#js-userToggle").click(function(){
    $("body").toggleClass("--navUserActive");
});
$('.user-action-login').on('click',function(e){
    if (e.target !== this)
    return;
    $("body").toggleClass("--navUserActive");
});

/* login form close */
$(".user-action .login-widget .popup-widget-inner").append("<span class='login-close'></span>");
$(".login-close").click(function(){
    $("body").removeClass("--navUserActive");
});


/* toggle control of responsive search */
$("#js-searchToggle").click(function(){
    $("body").toggleClass("--searchActive");
    $(".header-top .search .form-control").focus(); 
});


$(".cart-count").on('touchstart', function() {
  $("body").toggleClass("--cartActive");
});
    

$(".menu-helper").click(function(){
    $("body").removeClass("--menuActive --navUserActive --searchActive --cartActive --advancedModal");
});

/* move main navigation */
$("#navigation").insertBefore(".header-top .search");



if(window.pageYOffset <= 300) {
    $('body').addClass('--floatSearchActive');
}
$(window).scroll(function(){
    if ($(this).scrollTop() < 300) {
       $('body').addClass('--floatSearchActive');
    } else {
       $('body').removeClass('--floatSearchActive');
    }
});



// =============================================================================
// VOICE SEARCH
// =============================================================================

$("#formSearchForm .query-input").attr("id","searchbox");
$("<div id='speechToggle' onclick='startDictation()'></div>").insertBefore(".search-form .btn");

function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "cs-CZ";
        recognition.start();

        recognition.onresult = function(e) {
            document.getElementById('searchbox').value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('formSearchForm').submit();
        };

        recognition.onerror = function(e) {
            recognition.stop();
        }
    }
}


// =============================================================================
// ADVANCED ORCDER SUMMARY
// =============================================================================

if ($(".type-detail").length){

    $("body").append('<div class="advancedModal"><div class="advancedModal__inner"><h2 class="advancedModal__title">Zboží bylo přidáno do košíku</h2><div class="advancedModal__content"></div><div class="advancedModal__buttons"><a href="/kosik" class="btn">Přejít do košíku</a></div></div></div>');

    if ($(".products-related").length){
        var related = $(".products-related").html();
        $(".advancedModal").append('<h3 class="advancedModal__relatedTitle">Související produkty</h3><div class="products-block">' + related + '</div>');
    }

    function advanceOrderCustom() {
    
        $("body").addClass("--advancedModal");
        $(".advancedModal__content").html("");
    
        var img = $(".p-detail-inner .p-image-wrapper a").html();
        var name = $(".p-detail-inner .p-detail-inner-header h1").html();
        if($(".p-detail-inner .parameter-dependent").length){
            var stock = $(".p-detail-inner .availability-value .parameter-dependent:not(.noDisplay) span").html();
        }else{
            var stock = $(".p-detail-inner .availability-value").html();
        }
        var amount = parseFloat($(".p-detail-inner .add-to-cart .amount").val());
    
        var priceSingle = $(".p-detail-inner .p-final-price-wrapper .price-final-holder").html();
        var priceTotal = parseFloat(priceSingle)*amount;
    
        $(".advancedModal__content").prepend('<div class="extras-product">' +
        '<div class="extras-product-img">' + img + '</div>' +
        '<div class="extras-product-name">' + name + '</div>' +
        '<div class="extras-product-stock">' + stock + '</div>' +
        '<div class="extras-product-amount">' + amount + 'x</div>' +
        '<div class="extras-product-priceTotal">' + priceTotal + ' Kč</div>' +
        '</div>');
    
    
    }
    
    /* call functions after order modal loaded */
    document.addEventListener('ShoptetCartUpdated', function () {
        advanceOrderCustom();
    });    

    $('.advancedModal').on('click',function(e){
        if (e.target !== this)
        return;
        $("body").removeClass("--advancedModal");
    });

}

// -----------------------------------------------------------------------------
// PRODUCT PAGE
// -----------------------------------------------------------------------------

/* relocate product title */
$(".p-detail-inner-header").insertBefore(".p-final-price-wrapper");


/* floating bar */
if ($(".type-detail").length){
    var pname = $(".p-detail-inner-header h1").text();
    $("body").append('<div class="floating-bar"><div class="floating-product-name">'+ pname +'</div><button type="submit" form="product-detail-form" class="btn">Do košíku</button></div>');


    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
           $('body').addClass('--floatBarActive');
        } else {
           $('body').removeClass('--floatBarActive');
        }
    });

}

$(".shipping-options").insertAfter(".availability-value .availability-label:last-child");





var urlParams = new URLSearchParams(window.location.search);

$(".detail-parameters select").each(function(){

    var qName = $(this).attr("data-parameter-name").replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
    let qPar = urlParams.get(qName);

    $(this).find("option").each(function(){
    var qOption = $(this).text().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if(qOption == qPar) {
        $(this).attr("selected",true);
    }

    });

    
});

$("div.hidden-split-parameter").each(function(){

    var qName = $(this).attr("data-parameter-name").replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); 
    let qPar = urlParams.get(qName);

    $(this).find("input").each(function(){
    var qOption = $(this).closest('.parameter-value').text().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if(qOption == qPar) {
        $(this).attr("checked",true);
    }

    });

    
});



$('.detail-parameters select, div.hidden-split-parameter').on('change', function() {
    var sName = $(this).attr("data-parameter-name").replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    var sPar = $(this).find("option:selected").text().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    var sParAlt = $(this).find("input:checked + .parameter-value").text().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    var currentUrl = window.location.href;
    var url = new URL(currentUrl);

    if(sPar.length){
        url.searchParams.set(sName, sPar);
    }else{
        url.searchParams.set(sName, sParAlt);
    }

    var newUrl = url.href; 
    console.log(newUrl);
    window.history.replaceState("string", "Title", newUrl);
});




// =============================================================================
// RESPONSIVE MENU TOGGLE
// =============================================================================

if ($(".mobile").length){
    $('.menu-level-1>li.ext>a').click(function() {
        $(this).parent(".ext").toggleClass("--active");
        return false;
    });
}


$(".menu-level-2").each(function(){
	$(this).prepend('<span class="backSubmenu">Zpět</span>')
});
$(".backSubmenu").click(function(){
    $(this).closest("li").toggleClass("--active");
});

// =============================================================================
// CART
// =============================================================================

/* relocate contact widget to header */
if ($(".contact-box").length){
    $(".contact-box").clone().insertBefore("#js-userToggle");
}


if ($("#customerLogin").length){
    $("#customerLogin .password-helper a:last-child").insertAfter(".input-wrapper.password");
}

if ($(".cart-header").length){
    $(".cart-header").insertBefore(".content-wrapper-in");
}



// =============================================================================
// FLOATING LABEL FORM
// =============================================================================


$(".form-group input").on("focus",function(){
    $(this).parent().addClass("--activeFocus");
}).blur(function(){
    $(this).parent().removeClass("--activeFocus");
});

$(".form-group input").keyup(function(){
    var input = $(this);
    if(input.val() == "") {
        input.parent().removeClass("--activeFilled");
    }else{
        input.parent().addClass("--activeFilled");
    }
});



// =============================================================================
// Add top products
// =============================================================================
$('<h4>Nejprodávanější</h4><div id="productsTop" class="products products-inline products-top"> <div class="product active"> <div class="p" data-micro="product" data-micro-product-id="240"> <a href="/drobny-nabytek/botnik-brw-nepo-sfb2k2/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/240_botnik.png?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/240_botnik.png?60c36a74" alt="botnik" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <meta id="ogImageProducts" property="og:image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/240_botnik.png?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/drobny-nabytek/botnik-brw-nepo-sfb2k2/" class="name" data-micro="url"> <span data-micro="name"> Botník BRW Nepo SFB2K2 <span class="category-appendix"> doplnek + darek boty zdarma + lestidlo na botniky</span> </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">240</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="1700.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 1 700 Kč </strong> </div><div class="price-additional">(1 405 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product active"> <div class="p" data-micro="product" data-micro-product-id="147"> <a href="/lampy-a-svitidla/beta-stojaci-lampa--2-ram--sat-chrom/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/147_lampa.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/147_lampa.jpg?60c36a74" alt="lampa" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/147_lampa.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/147_lampa.jpg?60c36a74"> <div class="extra-flags"> <div class="flags flags-extra"> <span class="flag flag-discount"> <span class="price-standard"><span>1 500 Kč</span></span> <span class="price-save">–14 %</span> </span> </div></div></a> <div class="p-in"> <div class="p-in-in"> <a href="/lampy-a-svitidla/beta-stojaci-lampa--2-ram--sat-chrom/" class="name" data-micro="url"> <span data-micro="name"> Beta stojací lampa, 2 ram, sat.chrom <span class="category-appendix"> + žárovka 6.5W, 700lm + podložka</span> </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">147</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="1290.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper"><span class="price-standard-label">Původně: </span><span class="price-standard"><span>1 500 Kč</span></span></span> <span class="price-save">&nbsp;(–14 %)</span> <div class="price price-final"> <strong> 1 290 Kč </strong> </div><div class="price-additional">(1 066 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product active"> <div class="p" data-micro="product" data-micro-product-id="249"> <a href="/kvetiny-do-interieru-2/brectan-ker-husty-180listu-60cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/249_brectan-1.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/249_brectan-1.jpg?60c36a74" alt="brectan 1" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/249_brectan-1.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/249_brectan-1.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/kvetiny-do-interieru-2/brectan-ker-husty-180listu-60cm/" class="name" data-micro="url"> <span data-micro="name"> Břečťan keř hustý 180 listů 60cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">249</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="69.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 69 Kč </strong> </div><div class="price-additional">(57 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="291"> <a href="/interier-a-bydleni/test/" class="image"> <img src="/cms/img/missing_images/related.png" data-src="/cms/img/missing_images/related.png" alt="" data-micro-image="/cms/img/missing_images/big.png"> <meta itemprop="image" content="/cms/img/missing_images/big.png"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/interier-a-bydleni/test/" class="name" data-micro="url"> <span data-micro="name"> test </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">291</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="242.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 242 Kč </strong> </div><div class="price-additional">(200 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="282"> <a href="/prosteradla/prosteradlo-jersey/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/282_blue.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/282_blue.jpg?60c36a74" alt="blue" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/282_blue.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/282_blue.jpg?60c36a74"> <div class="extra-flags"> <div class="flags flags-extra"> <span class="flag flag-discount"> <span class="price-standard"><span>399 Kč</span></span> <span class="price-save">–25 %</span> </span> </div></div></a> <div class="p-in"> <div class="p-in-in"> <a href="/prosteradla/prosteradlo-jersey/" class="name" data-micro="url"> <span data-micro="name"> Prostěradlo jersey </span></a> <div class="ratings-wrapper"> <div class="availability"> <span style="color:#009901"> Skladem </span> <span class="availability-amount">(<span class="product-stock-amount show-tooltip acronym" title="" data-product-id="282" data-variant-code="282/ZEL" data-variant-unit="&amp;nbsp;ks" data-decimals="0" data-original-title="Čekejte prosím...">100&nbsp;ks</span>)</span> </div><span class="p-code"> Kód: <span data-micro="sku">282/ZEL</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="299.00" data-micro-price-currency="CZK" data-micro-availability="https://schema.org/InStock"> <div class="prices"> <span class="price-standard-wrapper"><span class="price-standard-label">Původně: </span><span class="price-standard"><span>399 Kč</span></span></span> <span class="price-save">&nbsp;(–25 %)</span> <div class="price price-final"> <strong> 299 Kč </strong> </div><div class="price-additional">(247 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="252"> <a href="/kvetiny-do-interieru-2/phoenix-palma-120cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/252_palma.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/252_palma.jpg?60c36a74" alt="palma" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/252_palma.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/252_palma.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/kvetiny-do-interieru-2/phoenix-palma-120cm/" class="name" data-micro="url"> <span data-micro="name"> Phoenix palma 120cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">252</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="580.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 580 Kč </strong> </div><div class="price-additional">(479 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="246"> <a href="/fotoramecky/clip-ram-10x15cm/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/246_fotoramecek.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/246_fotoramecek.jpg?60c36a74" alt="fotoramecek" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/246_fotoramecek.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/246_fotoramecek.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/fotoramecky/clip-ram-10x15cm/" class="name" data-micro="url"> <span data-micro="name"> CLIP rám 10x15cm </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">246</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="50.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 25 Kč </strong> </div><div class="price-additional">(21 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="243"> <a href="/vazy-a-nadoby/vaza-artemis-aromat-25cm-svetle-zelena-leskla/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/243_vaza3.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/243_vaza3.jpg?60c36a74" alt="vaza3" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/243_vaza3.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/243_vaza3.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/vazy-a-nadoby/vaza-artemis-aromat-25cm-svetle-zelena-leskla/" class="name" data-micro="url"> <span data-micro="name"> Váza ARTEMIS AROMAT 25cm světle zelená lesklá </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">243/MAL</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="100.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> <small>od</small> 100 Kč </strong> </div><div class="price-additional">(od 83 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="237"> <a href="/boxy-na-potraviny/status-vaku-box-2l-zeleny/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/237_box.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/237_box.jpg?60c36a74" alt="box" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/237_box.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/237_box.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/boxy-na-potraviny/status-vaku-box-2l-zeleny/" class="name" data-micro="url"> <span data-micro="name"> Status Vaku box 2l zelený </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">237</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="399.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 399 Kč </strong> </div><div class="price-additional">(330 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="product inactive"> <div class="p" data-micro="product" data-micro-product-id="234"> <a href="/sklenice-a-dzbany/tescoma-sklenice-na-cervene-vino-charlie-450ml--6ks/" class="image"> <img src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/234_sklenicka.jpg?60c36a74" data-src="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/related/234_sklenicka.jpg?60c36a74" alt="sklenicka" data-micro-image="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/234_sklenicka.jpg?60c36a74"> <meta itemprop="image" content="https://cdn.myshoptet.com/usr/classic.shoptet.cz/user/shop/big/234_sklenicka.jpg?60c36a74"> <div class="extra-flags"> </div></a> <div class="p-in"> <div class="p-in-in"> <a href="/sklenice-a-dzbany/tescoma-sklenice-na-cervene-vino-charlie-450ml--6ks/" class="name" data-micro="url"> <span data-micro="name"> TESCOMA Sklenice na červené víno CHARLIE 450ml, 6ks </span></a> <div class="ratings-wrapper"> <div class="availability"> <span> Doručení do 24 hodin </span> </div><span class="p-code"> Kód: <span data-micro="sku">234</span> </span> </div></div><div class="p-bottom no-buttons"> <div class="offers" data-micro="offer" data-micro-price="399.00" data-micro-price-currency="CZK"> <div class="prices"> <span class="price-standard-wrapper price-standard-wrapper-placeholder">&nbsp;</span> <div class="price price-final"> <strong> 399 Kč </strong> </div><div class="price-additional">(330 Kč&nbsp;bez DPH)</div></div></div></div></div></div></div><div class="button-wrapper"><a href="#" class="chevron-after chevron-down-after toggle-top-products" data-text="Zobrazit méně produktů">Zobrazit více produktů</a></div></div>').insertBefore("#category-header");