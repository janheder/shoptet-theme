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

/* add hamburger menu on mobile */
$(".header-top").prepend('<div class="nav-menu-toggle" id="js-menuToggle"><span></span></div>');

/* toggle control of responsive menu */
$("#js-menuToggle, .menu-helper").click(function(){
    $("body").toggleClass("--menuActive");
});

$(".admin-bar").click(function(){
    $(".admin-bar").toggleClass("--active");
});