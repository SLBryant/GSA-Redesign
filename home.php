<?php include('partials/header.php');?>

    <!-- Navigations -->
    <?php include('partials/primary-navigation.php'); ?>
    <?php include('partials/mobile-primary-navigation.php');?>


        <!-- page rotation wrap -->
        <section id="overview-page-wrapper" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <!-- start slides -->
                 <div id="home" class="overview-page item active">
                    <div class="container">
                        <!-- HERO AND SUB SECTION -->
                        <div class="jumbotron col-md-7">
                            <div id="hero-message">
                                <h1>GSA delivers the best value in real estate, acquisition, and technology services.</h1>
                                <p>Excellence in building design is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tincidunt tristique.</p>
                                <ul class="list-unstyled">
                                    <li><a class="jump-link" href="#">Explore GSA’s innovation in real estate <span class="icon-arrow-right"></span></a></li>
                                </ul>
                            </div>

                            <div id="home-pagination">
                                <ul class="list-unstyled">
                                    <li class="active" value="0"></li>
                                    <li value="1"></li>
                                    <li value="2"></li>
                                </ul>
                            </div>
                        </div>
                        <!-- sub section -->
                        <?php include('partials/sub-section-buckets.php'); ?>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a id="left-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="prev">
                <span class="icon-arrow-left"></span>
            </a>
            <a id="right-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="next">
                <span class="icon-arrow-right"></span>
            </a>
        </section>


<?php include ('partials/footer.php');?>

