//
if(!GSA){
    var GSA = {}
}

GSA.imageCaching = new function(){
    this.cache = function() {
        $.fn.preload = function() {
            this.each(function(){
                $('<img/>')[0].src = this;
            });
        }

        $(["images/home-bg.jpg", "images/home_1.jpg", "images/home_2.jpg", "images/real-estate.jpg", "images/technology.jpg", "images/travel-bg.jpg", "images/shop-bg.jpg", "images/transportation-bg.jpg"]).preload();
    }

};

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
    };

    this.pullQuotes = function() {
        firstLevelNav.find('a').hover(function() {
            var itemText = $(this).attr('data-text');
            $('.pull-quotes').find('h3').text(itemText);
        });
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

    this.mobileNavPlugin = function() {
        new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ) );
    }

    this.hoverTransitions = function() {
        var secondLevel = $('ul#main-nav > li > .dropdown-menu > li > ul');
        var firstLevel = $('ul#main-nav > li > .dropdown-menu');
        var thirdLevel = $('.pull-quotes');
        var thirdLevelText = $('.pull-quotes > h3');

        hoverState(secondLevel, '#fbf9f4', '#efeadf','#fff','#fbf9f4');
        hoverState(firstLevel, '#efeadf', '#d1c8b6','#d1c8b6','#d1c8b6', '#d1c8b6','#efeadf' );


        function hoverState(theLevel, levelThreeHoverBGColor, levelThreeBGColor, levelTwoHoverBorder, levelTwoBorder, fontHoverColor, fontColor) {
            theLevel.hover(function() {
                thirdLevel.css('background',levelThreeHoverBGColor);
                thirdLevelText.css('color',fontHoverColor);
                secondLevel.css('border-right','1px solid '+levelTwoHoverBorder)
            },function() {
                thirdLevel.css('background',levelThreeBGColor)
                thirdLevelText.css('color',fontColor);
                secondLevel.css('border-right','1px solid '+levelTwoBorder)
            })
        }
    }


};

GSA.homepage = new function() {
    var jumbotron = $('.jumbotron');
    var jumbotronHeight = jumbotron.outerHeight();
    var jumbotronWidth = jumbotron.outerWidth();
    jumbotron.css({
        'min-height' : jumbotronHeight,
        'height' : jumbotronHeight,
        'min-width' : jumbotronWidth
    });
    var itemWrappers = $('#home-pagination li');

    this.fullScreenRotator = function() {
        var items = Array('home-bg', 'home_1','home_2');
        var item = items[Math.floor(Math.random()*items.length)];
        $('#home').css('background-image', 'url(images/'+item+'.jpg)');

        if(item == 'home-bg') {
            $('#hero-message').html(
                '<h1>GSA Delivers the Best Value in Real Estate, Acquisition, and Technology Services.</h1>'+
                '<p>Excellence in building design is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tincidunt tristique.</p>'+
                '<ul class="list-unstyled">'+
                    '<li><a class="jump-link" href="#">Explore GSA’s Innovation in Real Estate <span class="icon-arrow-right"></span></a></li>'+
                '</ul>'
            );
        } else if(item == 'home_1') {
            $('#hero-message').html(
                '<h1>GSA Delivers the Best Value in Real Estate, Acquisition, and Technology Services.</h1>'+
                '<p>By leveraging the purchasing power of the government, GSA offers cost-effective solutions to our partner agencies. The Federal Strategic Sourcing Initiative (FSSI) cuts down on bureaucracy and helps agencies pool their purchases.</p>'+
                '<ul class="list-unstyled">'+
                    '<li><a class="jump-link" href="#">Learn How GSA is Transforming Acquisition <span class="icon-arrow-right"></span></a></li>'+
                '</ul>'
            );
        } else if(item == 'home_2') {
            $('#hero-message').html(
                '<h1>GSA Delivers the Best Value in Real Estate, Acquisition, and Technology Services.</h1>' +
                '<p>Meet all federal government IT service needs with a single contract: an ambitious goal. But $16.5 billion and 54 agencies after its inception five years ago, GSA\'s Alliant GWAC provides mission-critical capabilities and great customer service.</p>' +
                '<ul class="list-unstyled">' +
                '<li><a class="jump-link" href="#">Discover GSA\'s Emerging Technology Offerings <span class="icon-arrow-right"></span></a></li>' +
                '</ul>'
            );
        }


    };
    this.heightOrientation = function() {
        if($(window).height() <= 940) {
            $('.overview-page').animate({'min-height': $(window).height() - 15}, 1);
        }
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

GSA.tabs = new function(){
    var subSectionHeight = $('.overview-page.active .sub-section').height();
    var item = $('.overview-page.active .tab-navigation ul li');
    var numOfItems = item.length;
    var toggle = $('.toggle-switch');
    this.navAlign = function() {
        setTimeout(function() {
            item.height(subSectionHeight / numOfItems);
            item.find('a').verticalAlign();
        },1);
    };
    this.activateFirstTab = function() {
        item.eq(0).addClass('active');
    };

    this.faqTabs = function() {
        toggle.on( "click", function() {
            toggle.not($(this)).find('span').removeClass('icon-arrow-down').addClass('icon-arrow-right');
            $(this).find('span').toggleClass('icon-arrow-right icon-arrow-down');
        });
    }
};

GSA.overviewPage = new function() {

    this.footerHeight = function() {
        if($('body').find('.overview-page').length > 0) {
            $('body').addClass('overview-page-body');
        } else {
            $('body').removeClass('overview-page-body');
        };
    };

    this.buildSlider =function() {
        iteratePages();

        function iteratePages() {
            var pages = [
                'home',
                'travel',
                'real-estate',
                'shopper',
                'supplier',
                'technology',
                'about-us'
            ];

            for (var i = 0; i < pages.length; i++) {
                ajaxFunction(pages[i], '.php', i);
            }
            callback();
        }

        function ajaxFunction (page, fileExtension,i) {
            // don't return the page that the user is currently on
            var path = window.location.pathname;
            if(path.indexOf(page) < 0 ) {
                // ajax request
                $.ajax({
                    type: 'POST',
                    dataType: 'html',
                    url: page + fileExtension,
                    success: function (data) {
                        var success = $(data).find('#'+page).html();
                        $('#'+page).html(success);
                    },
                    error: function (xhr) {
                        console.log(xhr.status)
                    }
                });
            }
        }
        function callback() {
            // init height of page
            //GSA.homepage.heightOrientation();
            // init carousel
            var theCarousel = $('#overview-page-wrapper');
            theCarousel.carousel({
                interval: false,
                wrap: false
            });

            // get right & left controls
            var rightControl = theCarousel.find('#right-arrow');
            var leftControl = theCarousel.find('#left-arrow');

            //
            if($('.overview-page.active').attr('id') == 'home') {
                leftControl.fadeOut();
            } else {
                leftControl.fadeIn();
            }

            // callback after slide transition has completed
            theCarousel.on('slid', function () {
                var topLevelNavItem = $('#main-nav > li');
                topLevelNavItem.find('a').removeClass('selected');
                var activeID = $('.overview-page.active').attr('id');
                var subSectionHeight = $('#'+activeID+ ' .sub-section').height();
                var item = $('#'+activeID+ ' .tab-navigation ul li');
                var numOfItems = item.length;
                    item.height(subSectionHeight / numOfItems);
                    item.find('a').verticalAlign();

                if(activeID == 'home'){
                    $('#right-arrow').find('strong').text('Travel');
                    History.pushState(null,'Home','home.php');
                }
                if(activeID == 'travel'){
                    topLevelNavItem.eq(0).find('a').addClass('selected');
                    $('#right-arrow').find('strong').text('Real Estate');
                    $('#left-arrow').find('strong').text('Home');
                    History.pushState(null,'Travel','travel.php');
                }
                else if(activeID == 'real-estate'){
                    topLevelNavItem.eq(1).find('a').addClass('selected');
                    $('#right-arrow').find('strong').text('Shopper');
                    $('#left-arrow').find('strong').text('Travel');
                    History.pushState(null,'Real Estate','real-estate.php');
                }
                else if(activeID == 'shopper'){
                    topLevelNavItem.eq(2).find('a').addClass('selected');
                    $('#right-arrow').find('strong').text('Supplier');
                    $('#left-arrow').find('strong').text('Real Estate');
                    History.pushState(null,'Shopper','shopper.php');
                }
                else if(activeID == 'supplier'){
                    topLevelNavItem.eq(3).find('a').addClass('selected');
                    $('#right-arrow').find('strong').text('Technology');
                    $('#left-arrow').find('strong').text('Shopper');
                    History.pushState(null,'Supplier','supplier.php');
                }
                else if(activeID == 'technology'){
                    topLevelNavItem.eq(4).find('a').addClass('selected') ;
                    $('#right-arrow').find('strong').text('About Us');
                    $('#left-arrow').find('strong').text('Supplier');
                    History.pushState(null,'Technology','technology.php');
                }
                else if(activeID == 'about-us'){
                    topLevelNavItem.eq(5).find('a').addClass('selected') ;
                    $('#left-arrow').find('strong').text('Technology');
                    History.pushState(null,'About Us','about-us.php');
                }
                // get active slide
                var getActive = theCarousel.find(".item.active");
                // if the last slide,
                if (!getActive.next().length) {
                    rightControl.fadeOut();
                } else {
                    rightControl.fadeIn();
                }
                // if the first slide,
                if (!getActive.prev().length) {
                    leftControl.fadeOut();
                } else {
                    leftControl.fadeIn();
                }

            });

            // hover to show next page title
            $('.overview-page-control').hover(function() {
                $(this).find('strong').stop().show(300);
            },function() {
                $(this).find('strong').stop().hide(300);
            });
        }
    };
};

GSA.photoGallery = new function() {
    this.buildGalleryIndex = function() {

        galleryView();
        galleryGenerator('waste.json', '#main-column', 'index-gallery-template');

        function galleryView() {
            $('body').on('click','#gallery-index > ul > li > a',function(e) {
                e.preventDefault();
                var galleryWrapper = 'gallery-display-wrapper';
                var openGallery = 'open-gallery';
                $('.'+galleryWrapper).remove();
                $('#gallery-index li').removeClass(openGallery);

                var item = $(this).parent('li').addClass(openGallery);
                var contentID = $(this).attr('href');

                $('<div></div>').attr('class', galleryWrapper).appendTo('.'+openGallery);
                item.find('.'+galleryWrapper).slideDown(1000, function() {
                    galleryGenerator('gallery.id.'+contentID+'.json', '.'+galleryWrapper, 'gallery-template');
                });
            })
        }

        function galleryGenerator(JSONfile, appendedTo, templateScript) {
            $.getJSON('json/'+JSONfile, function (data) {
                var templateData = [];
                $.each(data, function (i, item) {
                    templateData.push({
                        title: item.title,
                        id: item.id,
                        //datePublished : item.datePublished   <-- would be helpful if we want to index video galleries - order by date //
                        //photoCredit : item.photoCredit  <--- would be helpful for frontend display to avoid having to couple photo credit and title //
                        //galleryIntro : item.galleryIntro <-- for index page
                        slides: [],
                        previewThumb: item.slides[0].thumb
                    });
                    $.each(item.slides, function (index, object) {
                        var active = false;
                        if (object.index == 1) {
                            activeSlide = 'active';
                        } else {
                            activeSlide = false
                        }
                        templateData[i].slides.push({
                            slideIndex: object.index,
                            slideCaption: object.caption,
                            slideThumb: object.thumb,
                            slideDisplay: object.display,
                            slideFull: object.full,
                            active: activeSlide
                        });
                    });
                });
                var galleryTemplate = $('#'+templateScript).html();
                $(appendedTo).append(Mustache.render(galleryTemplate, templateData));
            });

            // THUMBNAIL GALLERY PLUGIN CONFIG
            var photoGallery = $('#photo-gallery');


            photoGallery.carousel({
                interval: false
            });

            // handles the carousel thumbnails
            $("body").on("click", "[id^=carousel-selector-]", function () {
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length - 1);
                id = parseInt(id);
                console.log(id);
                photoGallery.carousel(id);
                $('[id^=carousel-selector-]').removeClass('selected');
                $(this).addClass('selected');
            });

            // when the carousel slides, auto update
            $('body').on('slid', '#photo-gallery', function (e) {
                var id = $('.item.active').data('slide-number');
                id = parseInt(id);
                $('[id^=carousel-selector-]').removeClass('selected');
                $('[id=carousel-selector-' + id + ']').addClass('selected');
            });
        }
    }
};

GSA.regionMap = new function() {

    this.newSignature = function() {
        // map id
        var mapID = $('#regional-map');
        // region arrays
        var region_1 = ['ME', 'NH', 'VT', 'RI', 'MA', 'CT'];
        var region_2 = ['NY', 'NJ', 'PR', 'VI'];
        var region_3 = ['PA', 'WV', 'VA', 'MD', 'DE'];
        var region_4 = ['KY', 'TN', 'MS', 'AL', 'GA', 'FL', 'NC', 'SC'];
        var region_5 = ['MN', 'WI', 'IL', 'MI', 'IN', 'OH'];
        var region_6 = ['KS', 'MO', 'IA', 'NE'];
        var region_7 = ['NM', 'TX', 'OK', 'AR', 'LA'];
        var region_8 = ['MT', 'WY', 'UT', 'CO', 'SD', 'ND'];
        var region_9 = ['HI', 'AZ', 'NV', 'CA', 'AS', 'GU'];
        var region_10 = ['WA', 'OR', 'ID', 'AK'];
        var region_11 = ['DC'];

        mapID.usmap({

            'stateSpecificStyles': {
                // region 11
                'DC': {fill: 'rgba(143, 199, 234, 0.2)'},
                // region 10
                'WA': {fill: 'rgba(143, 199, 234, 0.1)'},
                'OR': {fill: 'rgba(143, 199, 234, 0.1)'},
                'ID': {fill: 'rgba(143, 199, 234, 0.1)'},
                'AK': {fill: 'rgba(143, 199, 234, 0.1)'},
                // region 9
                'HI': {fill: 'rgba(143, 199, 234, 1)'},
                'AZ': {fill: 'rgba(143, 199, 234, 1)'},
                'NV': {fill: 'rgba(143, 199, 234, 1)'},
                'CA': {fill: 'rgba(143, 199, 234, 1)'},
                'AS': {fill: 'rgba(143, 199, 234, 1)'},
                'GU': {fill: 'rgba(143, 199, 234, 1)'},
                // region 8
                'MT': {fill: 'rgba(143, 199, 234, 0.3)'},
                'WY': {fill: 'rgba(143, 199, 234, 0.3)'},
                'UT': {fill: 'rgba(143, 199, 234, 0.3)'},
                'CO': {fill: 'rgba(143, 199, 234, 0.3)'},
                'SD': {fill: 'rgba(143, 199, 234, 0.3)'},
                'ND': {fill: 'rgba(143, 199, 234, 0.3)'},
                // region 7
                'NM': {fill: 'rgba(143, 199, 234, 0.4)'},
                'TX': {fill: 'rgba(143, 199, 234, 0.4)'},
                'OK': {fill: 'rgba(143, 199, 234, 0.4)'},
                'AR': {fill: 'rgba(143, 199, 234, 0.4)'},
                'LA': {fill: 'rgba(143, 199, 234, 0.4)'},
                // region 6
                'NE': {fill: 'rgba(143, 199, 234, 0.7)'},
                'IA': {fill: 'rgba(143, 199, 234, 0.7)'},
                'MO': {fill: 'rgba(143, 199, 234, 0.7)'},
                'KS': {fill: 'rgba(143, 199, 234, 0.7)'},
                // region 5
                'MN': {fill: 'rgba(143, 199, 234, 0.6)'},
                'WI': {fill: 'rgba(143, 199, 234, 0.6)'},
                'IL': {fill: 'rgba(143, 199, 234, 0.6)'},
                'MI': {fill: 'rgba(143, 199, 234, 0.6)'},
                'IN': {fill: 'rgba(143, 199, 234, 0.6)'},
                'OH': {fill: 'rgba(143, 199, 234, 0.6)'},
                // region 4
                'KY': {fill: 'rgba(143, 199, 234, 0.5)'},
                'TN': {fill: 'rgba(143, 199, 234, 0.5)'},
                'MS': {fill: 'rgba(143, 199, 234, 0.5)'},
                'AL': {fill: 'rgba(143, 199, 234, 0.5)'},
                'GA': {fill: 'rgba(143, 199, 234, 0.5)'},
                'FL': {fill: 'rgba(143, 199, 234, 0.5)'},
                'NC': {fill: 'rgba(143, 199, 234, 0.5)'},
                'SC': {fill: 'rgba(143, 199, 234, 0.5)'},
                // region 3
                'DE': {fill: 'rgba(143, 199, 234, 0.8)'},
                'MD': {fill: 'rgba(143, 199, 234, 0.8)'},
                'VA': {fill: 'rgba(143, 199, 234, 0.8)'},
                'WV': {fill: 'rgba(143, 199, 234, 0.8)'},
                'PA': {fill: 'rgba(143, 199, 234, 0.8)'},
                // region 2
                'NY': {fill: 'rgba(143, 199, 234, 0.9)'},
                'NJ': {fill: 'rgba(143, 199, 234, 0.9)'},
                'PR': {fill: 'rgba(143, 199, 234, 0.9)'},
                'VI': {fill: 'rgba(143, 199, 234, 0.9)'},
                // region 1
                'ME': {fill: 'rgba(143, 199, 234, 0.2)'},
                'NH': {fill: 'rgba(143, 199, 234, 0.2)'},
                'VT': {fill: 'rgba(143, 199, 234, 0.2)'},
                'RI': {fill: 'rgba(143, 199, 234, 0.2)'},
                'MA': {fill: 'rgba(143, 199, 234, 0.2)'},
                'CT': {fill: 'rgba(143, 199, 234, 0.2)'}
            },
            'stateHoverStyles': {fill: 'rgba(143, 199, 234, 1)'},
            'stateHoverAnimation': false,
            'showLabels': true,
            'labelBackingStyles': {fill: 'rgba(143, 199, 234, 0.5)'},
            'labelBackingHoverStyles': {fill: 'rgba(143, 199, 234, 1)'},
            'includeTerritories': ['PR', 'VI', 'GU', 'AS'],
            'mouseover': function (event, data) {
                var title = data.name;
                $('<div class="state-info"></div>').text(title).appendTo('#state-info-wrapper').fadeIn(300);

            },
            'mouseout': function (event, data) {
                $('.state-info').remove();
            },

            'click': function (event, data) {
                var selected = data.name;
                if ($.inArray(selected, region_1) !== -1) {
                    window.location.href = "http://gsa.gov/r1";
                } else if ($.inArray(selected, region_2) !== -1) {
                    window.location.href = "http://gsa.gov/r2";
                } else if ($.inArray(selected, region_3) !== -1) {
                    window.location.href = "http://gsa.gov/r3";
                } else if ($.inArray(selected, region_4) !== -1) {
                    window.location.href = "http://gsa.gov/r4";
                } else if ($.inArray(selected, region_5) !== -1) {
                    window.location.href = "http://gsa.gov/r5";
                } else if ($.inArray(selected, region_6) !== -1) {
                    window.location.href = "http://gsa.gov/r6";
                } else if ($.inArray(selected, region_7) !== -1) {
                    window.location.href = "http://gsa.gov/r7";
                } else if ($.inArray(selected, region_8) !== -1) {
                    window.location.href = "http://gsa.gov/r8";
                } else if ($.inArray(selected, region_9) !== -1) {
                    window.location.href = "http://gsa.gov/r9";
                } else if ($.inArray(selected, region_10) !== -1) {
                    window.location.href = "http://gsa.gov/r10";
                }
            }
        }); // end usmap;

        stateSelector();


        function stateSelector() {
            $('#state-selector').change(function (event) {
                var selected = $(this).val();
                if ($.inArray(selected, region_1) !== -1) {
                    window.location.href = "http://gsa.gov/r1";
                } else if ($.inArray(selected, region_2) !== -1) {
                    window.location.href = "http://gsa.gov/r2";
                } else if ($.inArray(selected, region_3) !== -1) {
                    window.location.href = "http://gsa.gov/r3";
                } else if ($.inArray(selected, region_4) !== -1) {
                    window.location.href = "http://gsa.gov/r4";
                } else if ($.inArray(selected, region_5) !== -1) {
                    window.location.href = "http://gsa.gov/r5";
                } else if ($.inArray(selected, region_6) !== -1) {
                    window.location.href = "http://gsa.gov/r6";
                } else if ($.inArray(selected, region_7) !== -1) {
                    window.location.href = "http://gsa.gov/r7";
                } else if ($.inArray(selected, region_8) !== -1) {
                    window.location.href = "http://gsa.gov/r8";
                } else if ($.inArray(selected, region_9) !== -1) {
                    window.location.href = "http://gsa.gov/r9";
                } else if ($.inArray(selected, region_10) !== -1) {
                    window.location.href = "http://gsa.gov/r10";
                }
            });
        };
    };
};




// Doc Ready -------
$(function() {
    Modernizr.load([
        {
            test : !Modernizr.flexbox && !Modernizr.flexboxlegacy,
            yep : ['js/flexie.min.js'],
            complete: function(){
                //move along
            }
        },
        //things to do after
        //'something.js'
    ]);

    GSA.overviewPage.buildSlider();
    GSA.overviewPage.footerHeight();
    //GSA.homepage.heightOrientation();
    GSA.homepage.fullScreenRotator();



    GSA.navigations.searchToggle();
    GSA.navigations.mobileNavPlugin();
    GSA.navigations.navGraphic();
    GSA.navigations.accordionNav();
    GSA.navigations.pullQuotes();
    GSA.navigations.hoverTransitions();


    GSA.prettyTables.operator();
    GSA.imageCaching.cache();
    GSA.tabs.faqTabs();
    GSA.rotatingFeatureBlock.slideJS();


    GSA.photoGallery.buildGalleryIndex();

    GSA.regionMap.newSignature();


    if($(window).width() > 768) {
        GSA.tabs.navAlign();
        GSA.tabs.activateFirstTab();
    }
    if($(window).width() <= 768) {
        GSA.navigations.accordionNavMobile();
    }

    $(window).resize(function() {
    //GSA.homepage.heightOrientation();
    });



    // vertical alignment plugin
    jQuery.fn.verticalAlign = function () {
        return this
            .css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px').css("padding-bottom", ($(this).parent().height() - $(this).height()) / 2 + 'px')
    };
});




