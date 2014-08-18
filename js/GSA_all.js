if(!GSA){
    var GSA = {}
}

GSA.mainNavigation = new function(){
    var navigation = $('.primary-nav');
    var searchButton = $('#main-nav-search-button');
    var form = $('#main-nav-search-field');
    var logoHeight = $('.navbar-brand').height();
    var firstLevelNav = $('#main-nav > li');

    this.searchToggle = function(){
       searchButton.click(function(e) {
           e.preventDefault();
           form.toggleClass("hidden")
       })
    }

    this.navGraphic = function() {
        navigation.delegate( "*", "focus blur", function() {
            var elem = $( this );
            setTimeout(function() {
                var id = elem.parent('li').attr('data-nav-id');
            }, 0 );
        });
    }


    this.navAlign = function() {
        firstLevelNav.height(logoHeight);
        jQuery.fn.verticalAlign = function ()
        {
            return this
                .css("padding-top",($(this).parent().height() - $(this).height())/2 + 'px').css("padding-bottom",($(this).parent().height() - $(this).height())/2 + 'px' )
        };
        $('.primary-nav ul#main-nav > li > a').verticalAlign();
    }

};

GSA.rotatingFeatureBlock = new function(){
    var rfbElement = $('.rotating-feature-block');

    this.slideJS = function() {
        rfbElement.each(function() {
            $(this).slidesjs({
                width: $(this).width(),
                height: 230,
                play: {
                    active: false,
                    effect: "fade",
                    interval: 4000,
                    auto: false,
                    pauseOnHover: true,
                    restartDelay: 2500
                },
                navigation: {
                    active: false
                },
                auto : 4000
            });
        });
    }
};

$(function() {

    // Accordion Menu
    var $docsMenu = $('.sidebar-accordion-nav');
    $docsMenu.smartmenus({
        collapsibleShowFunction: function($ul, complete) { $ul.slideDown(200, complete); },
        collapsibleHideFunction: function($ul, complete) { $ul.slideUp(200, complete); },
        hideOnClick: false
    });
    $docsMenu.bind('select.smapi', function(e, item) {
        if ($(item).parent().parent()[0] === this && (!$(item).parent().dataSM('sub') || !$(item).parent().dataSM('sub').is(':visible')))
            $(this).smartmenus('menuHideAll');
    });



    GSA.rotatingFeatureBlock.slideJS();
    GSA.mainNavigation.searchToggle();
    GSA.mainNavigation.navGraphic();
    if($(window).width() > 768) {
        GSA.mainNavigation.navAlign();
    }
});






