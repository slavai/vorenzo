/**
 * Created by vovakm on 2/1/14.
 */
jQuery(document).ready(function () {

    jQuery('.header-search .search-btn').click(function (e) {
        jQuery('.header-search .search-wrapper').addClass('open');
    });

    jQuery(document).mouseup(function (e) {
        var container = jQuery('.header-search .search-wrapper');
        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            jQuery('.header-search .search-wrapper').removeClass('open');
        }
    });

//    menu togle
    jQuery('.menu-item-has-children').each(function(){
        jQuery(this).children('a').append('<i class="fa fa-chevron-right fa-rotate-90 hidden-desktop"></i>')
    });
    jQuery('.nav_button_togle').click(function(e){
        jQuery('.header-navigation').toggle();
        e.preventDefault();

    });

    jQuery('.menu-item-has-children').click(function(e){
        jQuery(this).toggleClass("open").children("ul").toggle()
    });

    jQuery("#toTop").scrollToTop(1000);
});