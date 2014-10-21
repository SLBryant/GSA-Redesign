<?php include('partials/header.php');?>
        <!-- Navigations -->
        <?php include('partials/primary-navigation.php'); ?>
        <?php include('partials/mobile-primary-navigation.php');?>


    <!-- page rotation wrap -->
    <section id="overview-page-wrapper" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <!-- start slides -->
            <div id="home" class="overview-page item"></div>
            <div id="travel" class="overview-page item active">
                <div class="container">
                    <!-- HERO  -->
                    <div class="jumbotron col-md-7">
                        <h1>Travel</h1>
                        <p>At the time when every agency is feeling the effect of tightening budgets, GSA is helping our federal partners cut their travel costs through our travel programs.</p>
                        <ul class="list-unstyled">
                            <li><a class="jump-link" href="#">Per diem information <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Travel resources <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Transportation <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Business Opportunities <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Additional Information <span class="icon-arrow-right"></span></a></li>
                        </ul>
                    </div>
                    <!-- sub section -->
                    <?php include('partials/sub-section-travel.php'); ?>
                </div>
            </div>
            <div id="real-estate" class="overview-page item"></div>
            <div id="shopper" class="overview-page item"></div>
            <div id="supplier" class="overview-page item"></div>
            <div id="technology" class="overview-page item"></div>
            <div id="about-us" class="overview-page item"></div>
        </div>
        <!-- Controls -->
        <a id="left-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="prev">
            <span class="icon-arrow-left"></span><strong>Home</strong>
        </a>
        <a id="right-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="next">
            <strong>Shopper</strong><span class="icon-arrow-right"></span>
        </a>
    </section>
<?php include ('partials/footer.php');?>