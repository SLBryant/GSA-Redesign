<?php include('partials/header.php');?>
    <!-- Navigations -->
<?php include('partials/primary-navigation.php'); ?>
<?php include('partials/mobile-primary-navigation.php');?>

    <!-- page rotation wrap -->
    <section id="overview-page-wrapper" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <!-- start slides -->
            <div id="home" class="overview-page item"></div>
            <div id="travel" class="overview-page item"></div>
            <div id="real-estate" class="overview-page item"></div>
            <div id="shopper" class="overview-page item"></div>
            <div id="supplier" class="overview-page item active">
                <div class="container">
                    <div class="jumbotron col-md-7">
                        <h1>Suppliers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo faucibus mi sit amet sodales. Vivamus fermentum nisl vitae metus scelerisque</p>
                        <ul class="list-unstyled">
                            <li><a class="jump-link" href="#">Lorem ipsum dolar sit <span class="icon-arrow-right"></span></a></li>
                        </ul>
                    </div>

                    <!-- sub section -->
                    <?php include('partials/sub-section-tabs.php'); ?>
                </div>
            </div>
            <div id="technology" class="overview-page item"></div>
            <div id="about-us" class="overview-page item"></div>
        </div>
        <!-- Controls -->
        <a id="left-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="prev">
            <span class="icon-arrow-left"></span><strong>Shopper</strong>
        </a>
        <a id="right-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="next">
            <strong>Technology</strong><span class="icon-arrow-right"></span>
        </a>
    </section>
<?php include ('partials/footer.php');?>