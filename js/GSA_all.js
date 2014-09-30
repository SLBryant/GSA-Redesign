if(!GSA){
    var GSA = {}
}

GSA.navigations = new function(){
    var navigation = $('.primary-nav');
    var searchButton = $('#main-nav-search-button');
    var form = $('#main-nav-search-field');
    var logoHeight = $('.navbar-brand').height();
    var firstLevelNav = $('#main-nav > li');
    var $docsMenu = $('.sidebar-accordion-nav');
    var mobileSidebarNavButton = $('#sidebar-pulldown');

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
        setTimeout(function() {
            $('.primary-nav ul#main-nav > li > a').verticalAlign();
        },1);
    };

    this.accordionNav = function() {
        $docsMenu.smartmenus({
            collapsibleShowFunction: function($ul, complete) { $ul.slideDown(200, complete); },
            collapsibleHideFunction: function($ul, complete) { $ul.slideUp(200, complete); },
            hideOnClick: false
        });
        $docsMenu.bind('select.smapi', function(e, item) {
            if ($(item).parent().parent()[0] === this && (!$(item).parent().dataSM('sub') || !$(item).parent().dataSM('sub').is(':visible')))
                $(this).smartmenus('menuHideAll');
        });
    };

    this.accordionNavMobile = function() {
        mobileSidebarNavButton.click(function()  {
            $docsMenu.children('li').not( ":first-child" ).slideToggle(400);
            $(this).children('span').toggleClass('icon-arrow-down icon-arrow-up')
        })
    }


};

GSA.homepage = new function() {
    this.fullScreenRotator = function() {
        $('#home').backstretch([
            "images/home-bg.jpg",
            "images/home_1.jpg",
            "images/home_2.jpg"
        ], {duration: 6000, fade: 750});

        $(window).on("backstretch.before", function (e, instance, index) {
            $('#home-pagination li').removeClass('active').eq(index).addClass('active');
        });

        $('#home-pagination').find('li').click(function (x) {
            x.preventDefault();
            $('#home-pagination li').removeClass('active');
            $(this).addClass('active');
            $('#home').data('backstretch').show(this.value);
        });
    };
    this.heightOrientation = function() {
        $('.overview-page').animate({'min-height' : $(window).height()-50},1);
    }
};

GSA.rotatingFeatureBlock = new function(){
    var rfbElement = $('.rotating-feature-block');
    var homePageElement = $('#rotator');

    this.slideJS = function() {
        rfbElement.each(function() {
            $(this).slidesjs({
                width: $(this).width(),
                height: 190,
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
    };
};
GSA.tabs = new function(){
    this.subSectionTabs = function() {
        var heightOfNav = $('.tab-navigation').height();
        $('.tab-content').css({'max-height': heightOfNav});
    }
};

GSA.prettyTables = new function(){
    this.operator = function() {
        $('table.scrollTable,table.stripedTable,table.scrollTable_search,table.sortTable').each(function() {
            $(this).find('tr').eq(0).removeClass('odd even');

            if ($(this).not(':has(thead)').has('th')) {
                //silly chrome, inserting tbodys:
                if ($(this).has('tbody')) {
                    $(this).prepend('<thead></thead>');
                    $(this).find('thead').append($(this).find('tbody tr').eq(0).clone());
                    $(this).find('tbody tr').eq(0).remove();
                }
                //silly every other browser not caring:
                else {
                    $(this).find('tr').eq(0).unwrap().wrap('<thead></thead>');
                    $(this).find('tr').not('thead tr').wrapAll('<tbody></tbody>');
                }
            }
        });

        $('table.scrollTable').dataTable({
            "sScrollY": "400px",
            "bPaginate": false,
            "bScrollCollapse": true,
            "aaSorting": [],
            "bInfo": false,
            "bFilter": false
        });
        $('table.scrollTable_search').dataTable({
            "sScrollY": "400px",
            "bPaginate": false,
            "bScrollCollapse": true,
            "aaSorting": [],
            "sSearch": "Search this table:"
        });
        $('table.stripedTable').dataTable({
            "bPaginate": false,
            "bInfo": false,
            "bFilter": false,
            "bSort": false
        });
        $('table.sortTable').dataTable({
            "bPaginate": false,
            "aaSorting": [],
            "bInfo": false,
            "bFilter": false
        });
    }
};

GSA.imageCaching = new function(){
    this.cache = function() {
        $.fn.preload = function() {
            this.each(function(){
                $('<img/>')[0].src = this;
            });
        }

        $(["images/home-bg.jpg", "images/home_1.jpg", "images/real-estate.jpg", "images/technology.jpg", "images/travel-bg.jpg", "images/shop-bg.jpg", "images/transportation-bg.jpg"]).preload();
    }

};
GSA.tabs = new function(){
    var subSectionHeight = $('#sub-section').height();
    var numOfItems = $('.tab-navigation ul li').length;
    this.navAlign = function() {
        setTimeout(function() {
            $('.tab-navigation ul li').height(subSectionHeight / numOfItems);
            $('.tab-navigation ul li a').verticalAlign();
        },1);
    };
    this.activateFirstTab = function() {
        $('.tab-navigation ul li').eq(0).addClass('active');
    };

    this.faqTabs = function() {
        $( '.menuheader .toggle-switch' ).on( "click", function() {
            $(this).toggleClass('icon-arrow-right icon-arrow-down');
        });
    }
};

// Doc Ready -------
$(function() {

    GSA.rotatingFeatureBlock.slideJS();
    GSA.navigations.searchToggle();
    GSA.navigations.navGraphic();
    GSA.navigations.accordionNav();
    GSA.prettyTables.operator();
    GSA.imageCaching.cache();
    GSA.tabs.faqTabs();
    GSA.homepage.fullScreenRotator();


    if($(window).width() > 768) {
        GSA.tabs.navAlign();
        GSA.tabs.activateFirstTab();
    }
    if($(window).width() <= 768) {
        GSA.navigations.accordionNavMobile();
    }

    $(window).resize(function() {
        GSA.homepage.heightOrientation();
    })

});


// vertical alignment plugin
jQuery.fn.verticalAlign = function () {
    return this
        .css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px').css("padding-bottom", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};




