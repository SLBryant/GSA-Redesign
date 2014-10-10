<?php include('partials/header.php');?>

    <!-- Navigations -->
    <?php include('partials/primary-navigation.php'); ?>
    <?php include('partials/mobile-primary-navigation.php');?>



            <section id="home" class="overview-page">
                <div class="container">
                    <!-- HERO AND SUB SECTION -->
                    <div class="jumbotron col-md-7">
                        <div id="hero-message">
                            <h1>GSA delivers the best value in real estate, acquisition, and technology services.</h1>
                            <p>Excellence in building design is a lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus tincidunt tristique.</p>
                            <ul class="list-unstyled">
                                <li><a class="jump-link" href="#">Explore GSA’s Innovation in Real Estate <span class="icon-arrow-right"></span></a></li>
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
            </section>


<?php include ('partials/footer.php');?>

