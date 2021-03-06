// =============================================================================
// INIT HOMEPAGE CAROUSEL
// =============================================================================



$('<div class="hp-blog"><div class="container"><div class="news-wrapper"></div></div></div>').insertBefore(".in-index #footer");
$(".hp-blog .news-wrapper").load("/blog/ .news-wrapper .news-item:nth-child(-n+3)");

// =============================================================================
// LOAD INSTAGRAM FEED
// =============================================================================

(function($){
    $(window).on('load', function(){
        $.instagramFeed({
            'username': 'jan.heder',
            'container': "#instagramSectionContent",
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'get_data': false,
            'callback': null,
            'styling': true,
            'items': 8,
            'items_per_row': 8,
            'image_size': 150,
            'margin': 0.5,
            'lazy_load': true,
            'on_error': console.error
        });
    });
})(jQuery);


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
$("#js-menuToggle, .menu-helper").click(function(){
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

/* toggle control of responsive search */
$("#js-searchToggle").click(function(){
    $("body").toggleClass("--searchActive");
});
