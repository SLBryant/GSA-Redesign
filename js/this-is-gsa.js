if(!GSA){
    var GSA = {}
}

GSA.images = new function(){

    this.cacheImages = function() {
        $.fn.preload = function() {
            this.each(function(){
                $('<img/>')[0].src = this;
            });
        }

        $(['images/this-is-gsa/Banner-DFC-SolarPanel.jpg', 'images/this-is-gsa/Banner-MoffetHanger.jpg', 'images/this-is-gsa/Banner-Infill-Area.jpg', 'images/this-is-gsa/Banner-SanYsidro.jpg']).preload();
    }

    this.introBackgroundRotator = function() {
        var images = ['images/this-is-gsa/Banner-DFC-SolarPanel.jpg', 'images/this-is-gsa/Banner-MoffetHanger.jpg', 'images/this-is-gsa/Banner-Infill-Area.jpg', 'images/this-is-gsa/Banner-SanYsidro.jpg'];
        var caption = ['Solar panel array at the Denver Federal Center, Denver, Colo.', 'Hangar One at Moffett Federal Airfield, Mountain View, Calif.','Technology in collaborative workspaces at GSA Headquarters, Washington, D.C.', 'San Ysidro Land Port of Entry, San Ysidro, Calif.' ];
        var tags = ['Photo of a solar panel array at the GSA-owned Denver Federal Center in Denver, Colorado', 'Photo of the side view of Hangar One, an airship storage facility in Mountain View, CA, and one of the largest freestanding structures in the world.', 'Photo of the interior of a collaborative office space at GSA Headquarters in Washington, DC', 'Photo of the busy San Ysidro land port of entry in San Ysidro, California'];
        var randomNumber = Math.floor(Math.random() * images.length);
        $('#intro').css({'background-image' : 'url(' + images[randomNumber] + ')'});
        $('#intro footer p').text(caption[randomNumber]);
        setInterval(function() {
            if(randomNumber == images.length -1) {
                randomNumber = 0;
            } else {
                randomNumber ++;
            }
            $('#intro').css({'background-image' : 'url(' + images[randomNumber] + ')'}).attr('alt',tags[randomNumber]);
            $('#intro footer p').text(caption[randomNumber]);
        },8000);
    }


};

GSA.navigation = new function() {
    var lastId,
        topMenu = $('#navigation'),
        topMenuHeight = topMenu.outerHeight(),
        distance = topMenu.offset().top,
        $window = $(window),
        menuItems = topMenu.find('a'),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });
    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });


    this.highlightCurrentNavItem = function () {
        $window.scroll(function() {
            var fromTop = $(this).scrollTop()+topMenuHeight;
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop +100)
                    return this;
            });

            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href=#"+id+"]").parent().addClass("active");
            }
        });
    };

    this.scrollToSection = function() {
        menuItems.click(function(e){
            var href = $(this).attr('href'),
                offsetTop;
                if(href == '#intro') {
                    offsetTop = href === "#" ? 0 : $(href).offset().top;
                } else {
                    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
                }
            $('html, body').stop().animate({
                scrollTop: offsetTop - 100
            }, 1000);
            e.preventDefault();
        });
    }

    this.stickyNav = function() {
        $window.scroll(function() {
            if ( $window.scrollTop() >= distance - 100 && $(window).width() > 768 ) {
                topMenu.addClass('locked');
                $('#mission').css('margin-top','50px');
            } else {
                topMenu.removeClass('locked');
                $('#mission').css('margin-top','0');
            }
        });
    }

    this.scrollorama = function() {
        controller.addTween(
            '#intro',
            (new TimelineLite())
                .append([
                    TweenMax.fromTo($('#GSA-small'),.9,
                        {css: {opacity:0}, immediateRender: true},
                        {css: {opacity : 1}}),
                    TweenMax.fromTo($('#thisIs-small'),.9,
                        {css: {opacity:0}, immediateRender: true},
                        {css: {opacity : 1}})
                ]),
            340);
    }
};

GSA.carouselID = null;
GSA.slideNum = null;

GSA.modals_carousels = new function() {
    var modalTemplate = $('#modalView');
    var button = '';
    modalTemplate.modal({ show: false});


    this.modals = function () {
        modalTemplate.modal({ show: false}); // on load modal is not initiated

        $('.foursquare article').click(function() { // initiate modal on click
            if($(this).attr('id')) {
                $('.modal-content').css('max-height', $(window).height() - 50);
                button = $(this);
                modalTemplate.modal('show');
            }
        });

        $('.foursquare article a').click(function(e) {
            if($(this).parents('.foursquare').attr('id') != 'external-links') {
               e.preventDefault();
            }
        });


        modalTemplate.on('shown.bs.modal', function (event) {
            var CID = button.attr('id');
            var img = button.find('figure').find('img').attr('src');
            var title = button.find('h3').text();
            var intro = button.find('p').html();
            var location = window.location.protocol + "//" + window.location.host + "/";
            if(img != undefined) {
                $('#header-catcher').html('<article class="col-sm-12">' +
                '<figure class="col-xs-2">' +
                '<img class="img-responsive" src="' + img + '" alt="' + title + '">' +
                '</figure>' +
                '<div class="col-xs-10">' +
                '<h2>' + title + '</h2>' +
                '<h4>' + intro + '</h4>' +
                '</div>' +
                '</article>');
            } else {
                $('#header-catcher').html('<article class="col-xs-12">' +
                '<div class="no-pad-left">' +
                '<h2>' + title + '</h2>' +
                '</div>' +
                '</article>');
            };
            $('#content-catcher').load(location + 'portal/content/' + CID + ' #content', function () {
                $('#modal-loading').fadeOut(300);
            });

        });

        modalTemplate.on('hidden.bs.modal', function (event) {
            $('#content-catcher').empty();
            $('#header-catcher').empty();
            $('<img>').attr('id', 'modal-loading').attr('src', 'images/this-is-gsa/loading.gif').appendTo('#content-catcher');
        });
    };

    this.carousels = function(carouselID) {
        $(carouselID).carousel({
            interval : false
        });

        var numberOfItems = $(carouselID).find('.item').length;
        var eqValue = parseInt(numberOfItems) - 1;
        $(carouselID).on('slid.bs.carousel', function () {
            var firstSlide = $(this).find('.item:eq(0)');
            var lastSlide = $(this).find('.item:eq('+eqValue+')');
            // check if it's the first slide
            if(firstSlide.hasClass('active')) {
                $(this).find('.left').css('display','none');
                $(this).find('.icon-navigation').slideUp(400);
            } else {
                $(this).find('.left').css('display','block');
                $(this).find('.icon-navigation').slideDown(400);
            }
            // check if it's the last slide
            if(lastSlide.hasClass('active')) {
                $(this).find('.right').css('display','none');
            } else {
                $(this).find('.right').css('display','block');
            }
            $(carouselID+ ' .active-icon').children('a').focus();
        });

    };

    this.slideFunction = function(carouselID) {
        $(carouselID).on('slide.bs.carousel', function (event) {
            GSA.carouselID = carouselID;
            var button = $(event.relatedTarget);
            var slideNum = button.index();
            GSA.slideNum = slideNum;
            $(carouselID).find('.icon-navigation').find('figure').removeClass('active-icon');
            $(carouselID).find('.icon-navigation').find('figure').eq(slideNum).addClass('active-icon');
            if(carouselID == '#priorities-carousel'){var carouselName = 'priorities'} else { var carouselName = 'gsa-data'}
        });
    };

    this.slideItemHeight = function(carouselID) {
        setTimeout(function() {
            var maxHeight = 0;
            $(carouselID).find('.item').each(function(){
                maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
            });
            $(carouselID).find('.item').height(maxHeight);
        },1)
    }

    this.goToSlide = function(carouselID,buttonEQ) {
        var tabButton = $('#navigation li').eq(buttonEQ).find('a');
        tabButton.click(function() {
            $(carouselID).carousel(0);
        });
    }

    this.iconNavigation = function(carouselID) {
        var icons = $(carouselID).find('.icon-navigation figure');
        icons.click(function() {
            icons.removeClass('active-icon');
            $(this).addClass('active-icon');
        })
    }
};




/* /////////////////////////
    DOCUMENT READY        ///
/////////////////////////*/

$(function(){

    GSA.images.cacheImages();
    GSA.images.introBackgroundRotator();

    GSA.navigation.stickyNav();
    GSA.navigation.scrollorama();
    GSA.navigation.scrollToSection();
    GSA.navigation.highlightCurrentNavItem();
    GSA.navigation.scrollorama();

    GSA.modals_carousels.modals();
    GSA.modals_carousels.carousels('#priorities-carousel');
    GSA.modals_carousels.slideItemHeight('#priorities-carousel');
    GSA.modals_carousels.carousels('#data-carousel');
    GSA.modals_carousels.slideItemHeight('#data-carousel');
    GSA.modals_carousels.slideFunction('#priorities-carousel');
    GSA.modals_carousels.slideFunction('#data-carousel');

    GSA.modals_carousels.goToSlide('#priorities-carousel', 2);
    GSA.modals_carousels.goToSlide('#data-carousel', 4);
    GSA.modals_carousels.iconNavigation('#data-carousel');
    GSA.modals_carousels.iconNavigation('#priorities-carousel');

    GSA.modals_carousels.modalPrint();


    var dataHeight = $('#gsa-data').height(),
        windowHeight = $(window).height(),
        paddingNeeded = windowHeight - dataHeight;
    $('#gsa-data .item').css('min-height',windowHeight);



});