<?php include('partials/header.php');?>

        <!-- Navigation -->
        <?php include('partials/inner-main-navigation.php'); ?>
        <?php include('partials/mobile-primary-navigation.php');?>
        <?php include('partials/breadcrumb.php');?>

        <div class="container page-content">
            <div class="row">
                <!-- SIDEBAR LEFT -->
                <?php include('partials/left-nav.php');?>
                <!-- MAIN COLUMN -->
                <section class="col-sm-7 col-sm-offset-3" id="main-column">
                    <h1>GSA Schedules</h1>
                    <p>GSA establishes long-term governmentwide contracts with commercial firms to provide access to millions of commercial products and services at volume discount pricing.</p>

                    <!-- rfb -->
                    <?php include('partials/rfb.php');?>

                    <div class="sub-topic">
                        <header>
                            <h4>For Federal Agency Customers</h4>
                        </header>
                        <article>
                            <p>I work for a federal agency and would like to learn more about ordering procedures and guidelines</p>
                        </article>
                    </div>
                    <div class="sub-topic">
                        <header>
                            <h4>For State and Local Government Customers</h4>
                        </header>
                        <article>
                            <p>I work for a state or local government agency and would like to learn more about GSA programs authorized for my use.</p>
                        </article>
                    </div>
                    <div class="sub-topic">
                        <header>
                            <h4>For Vendors</h4>
                        </header>
                        <article>
                            <p>I would like to learn how to get on a GSA Schedule to sell my commercial product and/or service</p>
                        </article>
                    </div>
                    <div class="sub-topic">
                        <header>
                            <h4>Connect with the GSA Schedules Team</h4>
                        </header>
                        <article>
                            <ul class="list-unstyled">
                                <li><a href="#">GSA Schedules Blog</a></li>
                                <li><a href="#">GSA Schedules Team on Facebook</a></li>
                                <li><a href="#">Visit our YouTube Channel</a></li>
                                <li><a href="#">GSA Schedules Team on Twitter</a></li>
                            </ul>
                        </article>
                    </div>
                </section>

                <!-- RIGHT COLUMN -->
                <?php include('partials/sidebar.php');?>
            </div>
        </div>

<?php include ('partials/footer.php');?>