<?php include('partials/header.php');?>

    <script src="js/snap.svg-min.js"></script>
    <script src="js/snap-plugins.js"></script>
    <script>
        GSA.regionalMap();
    </script>

        <!-- Navigation -->
        <?php include('partials/inner-main-navigation.php'); ?>
        <?php include('partials/mobile-primary-navigation.php');?>
        <?php include('partials/breadcrumb.php');?>

        <div class="container page-content">
            <div class="row">
                <!-- MAIN COLUMN -->
				<div id="state-dropdown" class="well col-sm-3">
					<h4>Select a state,<br> territory or Global Area</h4>
					<form class="form-inline" id="state-selection-form">
						<div class="form-group">
							<label class="sr-only" for="state-selection">Select a state</label>
							<select name="state-selection" class="form-control" id="state-selection">
								<option value="" selected="selected">- Make a Selection</option>
								<option value="/r4">- Alabama</option>
								<option value="/r10">- Alaska</option>
								<option value="/r9">- American Samoa</option>
								<option value="/r9">- Arizona</option>
								<option value="/r7">- Arkansas</option>
								<option value="/r9">- California</option>
								<option value="/r8">- Colorado</option>
								<option value="/r1">- Connecticut</option>
								<option value="/r3">- Delaware</option>
								<option value="/r11">- District of Columbia</option>
								<option value="/r9">- East Asia</option>
								<option value="/r3">- Europe</option>
								<option value="/r4">- Florida</option>
								<option value="/r4">- Georgia</option>
								<option value="/r9">- Guam</option>
								<option value="/r9">- Hawaii</option>
								<option value="/r10">- Idaho</option>
								<option value="/r5">- Illinois</option>
								<option value="/r5">- Indiana</option>
								<option value="/r6">- Iowa</option>
								<option value="/r6">- Kansas</option>
								<option value="/r4">- Kentucky</option>
								<option value="/r7">- Louisiana</option>
								<option value="/r1">- Maine</option>
								<option value="/r1">- Massachusetts</option>
								<option value="/r3">- Maryland</option>
								<option value="/r5">- Michigan</option>
								<option value="/r5">- Minnesota</option>
								<option value="/r4">- Mississippi</option>
								<option value="/r6">- Missouri</option>
								<option value="/r8">- Montana</option>
								<option value="/r6">- Nebraska</option>
								<option value="/r9">- Nevada</option>
								<option value="/r1">- New Hampshire</option>
								<option value="/r2">- New Jersey</option>
								<option value="/r7">- New Mexico</option>
								<option value="/r2">- New York</option>
								<option value="/r4">- North Carolina</option>
								<option value="/r8">- North Dakota</option>
								<option value="/r5">- Ohio</option>
								<option value="/r7">- Oklahoma</option>
								<option value="/r10">- Oregon</option>
								<option value="/r3">- Pennsylvania</option>
								<option value="/r2">- Puerto Rico</option>
								<option value="/r1">- Rhode Island</option>
								<option value="/r4">- South Carolina</option>
								<option value="/r8">- South Dakota</option>
								<option value="/r4">- Tennessee</option>
								<option value="/r7">- Texas</option>
								<option value="/r2">- US Virgin Islands</option>
								<option value="/r8">- Utah</option>
								<option value="/r3">- Virginia</option>
								<option value="/r1">- Vermont</option>
								<option value="/r10">- Washington</option>
								<option value="/r3">- West Virginia</option>
								<option value="/r5">- Wisconsin</option>
								<option value="/r8">- Wyoming</option>
							</select>
							<span id="submit-state"><span class="icon-arrow-right"></span></span>
						</div>
					</form>
				</div>
				<div class="col-sm-9">
					<svg id="map-canvas" width="100%" height="100%" viewBox="60 0 1120 800"></svg>
				</div>

            </div>
        </div>

<?php include ('partials/footer.php');?>