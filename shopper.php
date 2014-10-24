<?php include('partials/header.php');?>
	<?php include('partials/header.php');?>

    <!-- Navigations -->
    <?php include('partials/primary-navigation.php'); ?>
    <?php include('partials/mobile-primary-navigation.php');?>

    <section id="overview-page-wrapper" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <!-- start slides -->
            <div id="home" class="overview-page item"></div>
            <div id="travel" class="overview-page item"></div>
            <div id="real-estate" class="overview-page item"></div>
            <div id="shopper" class="overview-page item active">
                <div class="container">
                    <div class="jumbotron col-md-7">
                        <h1>Shop</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum diam sed fringilla iaculis. Fusce ornare tempus luctus. Interdum et malesuada fames ac ante ipsum primis.</p>
                        <ul class="list-unstyled">
                            <li><a class="jump-link" href="#">GSA Advantage <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Federal Agencies & Military <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Auctions <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">State & Local agencies, Public Organizations <span class="icon-arrow-right"></span></a></li>
                        </ul>
                    </div>

                    <!-- sub section -->
                    <?php include('partials/sub-section-shopper.php'); ?>
                </div>
            </div>
            <div id="supplier" class="overview-page item"></div>
            <div id="technology" class="overview-page item"></div>
            <div id="about-us" class="overview-page item"></div>
        </div>
        <!-- Controls -->
        <a id="left-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="prev">
            <span class="icon-arrow-left"></span><strong>Real Estate</strong>
        </a>
        <a id="right-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="next">
            <span class="icon-arrow-right"></span><strong>Supplier</strong>
        </a>
    </section>



<?php include ('partials/footer.php');?>