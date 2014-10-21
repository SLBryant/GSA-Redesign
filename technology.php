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
            <div id="shopper" class="overview-page item"></div>
            <div id="supplier" class="overview-page item"></div>
            <div id="technology" class="overview-page item active">
                <div class="container">
                    <!-- HERO AND SUB SECTION -->
                    <div class="jumbotron col-md-8">
                        <h1>Technology</h1>
                        <p>Excellence in building design is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tincidunt tristique.</p>
                        <ul class="list-unstyled">
                            <li><a class="jump-link" href="#">Citizen Services & Innovative Technologies <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Fedramp (Cloud Products & Services) <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">IT Acquisition Assistance <span class="icon-arrow-right"></span></a></li>
                            <li><a class="jump-link" href="#">Technology & Telecommunications <span class="icon-arrow-right"></span></a></li>
                        </ul>
                    </div>
                    <!-- sub section -->
                    <?php include('partials/sub-section-travel.php'); ?>
                </div>
            </div>
            <div id="about-us" class="overview-page item"></div>
        </div>
        <!-- Controls -->
        <a id="left-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="prev">
            <span class="icon-arrow-left"></span><strong>Supplier</strong>
        </a>
        <a id="right-arrow" class="overview-page-control" href="#overview-page-wrapper" role="button" data-slide="next">
            <strong>About Us</strong><span class="icon-arrow-right"></span>
        </a>
    </section>
<?php include ('partials/footer.php');?>

