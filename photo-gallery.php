<?php include('partials/header.php');?>

<!-- Navigation -->
<?php include('partials/inner-main-navigation.php'); ?>
<?php include('partials/mobile-primary-navigation.php');?>
<?php include('partials/breadcrumb.php');?>

<div class="container page-content">
    <div class="row">
        <!-- SIDEBAR LEFT -->
        <?php include('partials/sidebar-accordion-nav.php');?>
        <!-- MAIN COLUMN -->
        <section class="col-sm-9 col-sm-offset-3" id="main-column">
            <h1>Galleries</h1>


            <script id="index-gallery-template" type="text/html">

                <div id="gallery-index">
                    <ul class="list-unstyled">
                        {{#.}}
                        <li class="row">
                            <a href="{{id}}">
                                <figure class="col-md-2">
                                    <img src="http://staging.gsa.gov{{previewThumb}}" class="img-responsive">
                                </figure>
                                <div class="col-md-9">
                                    <h2>{{title}}</h2>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        {{/.}}
                    </ul>
                </div>

            </script>


            <script id="gallery-template" type="text/html">
                {{#.}}
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 hidden-xs" id="slider-thumbs">
                            <ul class="list-inline">
                                {{#slides}}
                                <li>
                                    <a id="carousel-selector-{{slideIndex}}">
                                        <img src="http://staging.gsa.gov{{slideThumb}}" class="img-responsive">
                                    </a>
                                </li>
                                {{/slides}}
                            </ul>
                        </div>

                        <!-- main slider carousel -->
                        <div class="col-md-8" id="slider">
                            <div class="col-md-12" id="carousel-bounding-box">
                                <div id="photo-gallery" class="carousel slide">
                                    <!-- main slider carousel items -->
                                    <div class="carousel-inner">
                                        {{#slides}}
                                        <div class="item {{active}}" data-slide-number="{{slideIndex}}">
                                            <img src="http://staging.gsa.gov{{slideDisplay}}" class="img-responsive">
                                            <div class="carousel-caption row">
                                                <h4>{{slideCaption}}</h4>
                                                <p><a href="http://staging.gsa.gov{{slideFull}}" target="_blank">View/Download High Resolution Image</a><span class="icon-arrow-right"></span></p>
                                            </div>
                                        </div>
                                        {{/slides}}
                                    </div>
                                    <!-- main slider carousel nav controls -->
                                    <a class="carousel-control left" href="#photo-gallery" data-slide="prev"><span class="icon-arrow-left"></span></a>
                                    <a class="carousel-control right" href="#photo-gallery" data-slide="next"><span class="icon-arrow-right"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /container -->
                {{/.}}
            </script>

        </section>

    </div>
</div>

<?php include ('partials/footer.php');?>