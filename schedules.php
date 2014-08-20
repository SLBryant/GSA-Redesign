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
                <section class="col-sm-6" id="main-column">
                    <h1>GSA Schedules</h1>
                    <p>GSA establishes long-term governmentwide contracts with commercial firms to provide access to millions of commercial products and services at volume discount pricing.</p>

                    <!-- rfb -->
                    <?php include('partials/rfb.php');?>

                    <div class="sub-topic">
                        <h4>For Federal Agency Customers</h4>
                        <p>I work for a federal agency and would like to learn more about ordering procedures and guidelines</p>
                    </div>
                    <div class="sub-topic">
                        <h4>For State and Local Government Customers</h4>
                        <p>I work for a state or local government agency and would like to learn more about GSA programs authorized for my use.</p>
                    </div>
                    <div class="sub-topic">
                        <h4>For Vendors</h4>
                        <p>I would like to learn how to get on a GSA Schedule to sell my commercial product and/or service</p>
                    </div>
                    <div class="sub-topic">
                        <h4>Connect with the GSA Schedules Team</h4>
                        <ul class="list-unstyled">
                            <li><a href="#">GSA Schedules Blog</a></li>
                            <li><a href="#">GSA Schedules Team on Facebook</a></li>
                            <li><a href="#">Visit our YouTube Channel</a></li>
                            <li><a href="#">GSA Schedules Team on Twitter</a></li>
                        </ul>
                    </div>
                </section>

                <!-- RIGHT COLUMN -->
                <?php include('partials/sidebar.php');?>
            </div>
        </div>

<?php include ('partials/footer.php');?>