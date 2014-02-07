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
});