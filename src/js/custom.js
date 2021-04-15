// =============================================================================
// INIT HOMEPAGE CAROUSEL
// =============================================================================
if ($("#carousel").length){
    const mySiema = new Siema({
        selector: '.carousel-inner',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
        });
        if ($(".left").length){
        document.querySelector('.left').addEventListener('click', () => mySiema.prev());
        document.querySelector('.right').addEventListener('click', () => mySiema.next());
        }
    $(function(){
        var isDragging = false;
        $(".item a")
        .mousedown(function () {
            isDragging = false;
        })
        .mousemove(function () {
            isDragging = true;
        })
        .mouseup(function () {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $(".item").click();
            } else {
                $(".item").one("click", false);
            }
        });
    });
}


// =============================================================================
// HOMEPAGE NEWS
// =============================================================================

$('<section class="hp-blog"><div class="container"><h1>Na našem blogu</h1><div class="news-wrapper"></div><div class="hp-blog-bottom"><a href="/blog" class="btn">Více článků</a></div></div></section>').insertBefore(".in-index #footer");
$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)");

// =============================================================================
// LOAD INSTAGRAM FEED
// =============================================================================

if ($("#footer").length){
    (function(){
        new InstagramFeed({
            'username': 'instagram',
            'container': document.getElementById("instagramSectionContent"),
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'display_captions': false,
            'max_tries': 4,
            'callback': null,
            'styling': true,
            'items': 8,
            'items_per_row': 8,
            'image_size': 150,
            'margin': 0.5,
            'lazy_load': true,
            'on_error': false
        });
    })();
}

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

}

// -----------------------------------------------------------------------------
// PRODUCT PAGE
// -----------------------------------------------------------------------------

/* relocate product title */
$(".p-detail-inner-header").insertBefore(".p-final-price-wrapper");


/* init thumbnail carousel */
if ($(".p-thumbnails-inner").length){

    $('<div class="p-thumbnails-indicators"></div>').insertAfter(".p-thumbnails-inner");
    var x=0;
    $('.p-thumbnail img').each(function() {
        $(".p-thumbnails-indicators").append('<div class="p-thumbnails-indicator ' + x + '"></div>');
        x++;
    });
    $(".p-thumbnails-indicator.0").addClass("active");

    $(".cbox-gal").remove();

    function printSlideIndex() {
        var x = this.currentSlide;
        $(".p-thumbnails-indicator").removeClass("active");
        $(".p-thumbnails-indicator."+x).addClass("active");
    }

    new Siema({
        selector: '.p-thumbnails-inner>div',
        duration: 200,
        easing: 'ease-out',
        perPage: {
            0: 1,
            500: 4,
            991: 6,
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false, 
        onInit: () => { $("img").unveil(), printSlideIndex },
        onChange: printSlideIndex,
    });
    $(function(){
        var isDragging = false;
        $(".p-thumbnail")
        .mousedown(function () {
            isDragging = false;
        })
        .mousemove(function () {
            isDragging = true;
        })
        .mouseup(function () {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $(".p-thumbnail").click();
            } else {
                $(".p-thumbnail").one("click", false);
            }
        });
    });

    $(".p-image").addClass("--noDisplay");

}else{
    $(".p-image").addClass("--noPointerEvents");
}



if ($(".mobile").length){
    $('.p-thumbnail img').each(function() {
        var src = $(this).attr('data-src').replace('related','big');
        $(this).attr('data-src', src);   
    });
}

// -----------------------------------------------------------------------------
// CATEGORY CAROUSEL INIT
// -----------------------------------------------------------------------------

if ($("#productsTop .product").length > 5){
    $(".button-wrapper").remove();

    new Siema({
        selector: '#productsTop',
        duration: 200,
        easing: 'ease-out',
        perPage: {
            0: 2,
            500: 3,
            991: 5,
        },
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false
    });
    $(function(){
        var isDragging = false;
        $("a")
        .mousedown(function () {
            isDragging = false;
        })
        .mousemove(function () {
            isDragging = true;
        })
        .mouseup(function () {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $(".p").click();
            } else {
                $(".p").one("click", false);
            }
        });
    });
}

// =============================================================================
// RESPONSIVE MENU TOGGLE
// =============================================================================

if ($(".mobile").length){
    $('.menu-level-1>li.ext>a').click(function() {
        $(this).parent(".ext").toggleClass("--active");
        return false;
    });

}

// =============================================================================
// CART
// =============================================================================

/* relocate contact widget to header */
if ($(".contact-box").length){
    $(".contact-box").insertBefore("#js-userToggle");
}