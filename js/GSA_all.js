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


// Doc Ready -------
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
    GSA.prettyTables.operator();
});






