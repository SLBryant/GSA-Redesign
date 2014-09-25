<div class="clearfix"></div>
<section id="sub-section" class="row tabs-section">
    <!-- Nav tabs -->
    <nav class="col-md-3 tab-navigation">
        <ul class="nav" role="tablist">
            <li class="active"><a href="#searchAdvantage" role="tab" data-toggle="tab">GSAAdvantage!</a></li>
            <li><a href="#perDiemCalculator" role="tab" data-toggle="tab">Per Diem Calculator</a></li>
            <li><a href="#tab-C" role="tab" data-toggle="tab">CityPairs Search</a></li>
            <li><a href="#tab-D" role="tab" data-toggle="tab">Common Acquisition Portal</a></li>
        </ul>
    </nav>
    <div class="col-md-9 tab-content">
        <div class="tab-pane active" id="searchAdvantage">
            <form class="form-inline" role="form">
                <div class="form-group">
                    <label class="sr-only" for="form-control">Search GSA Advantage</label>
                    <input type="text" id="searchAdvantage" class="form-control col-sm-12" placeholder="Search GSA Advantage">
                </div>
                <button type="submit" class="btn gsa-btn"><span class="glyphicon glyphicon-search"></span></button>
                <p>The online marketplace for Federal Procurement. Now also available to State and Local Employees.</p>
            </form>
        </div>
        <div class="tab-pane" id="perDiemCalculator">
            <form class="form-horizontal row" role="form">
                <div class="col-sm-6 content-column">
                    <div class="form-group">
                        <label class="sr-only" for="form-control">City</label>
                        <input type="text" class="form-control" placeholder="City">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="form-control">Select a State</label>
                        <select class="form-control" placeholder="Select a State">
                            <option>State</option>
                            <option>State</option>
                            <option>State</option>
                            <option>State</option>
                            <option>State</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="form-control">Zip</label>
                        <input type="text" class="form-control" placeholder="Zip">
                    </div>
                </div>
                <div class="col-sm-3 content-column">
                    <div class="form-group">
                        <label class="sr-only" for="form-control">Start Date</label>
                        <input type="text" class="form-control" placeholder="Start Date">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="form-control">End Date</label>
                        <input type="text" class="form-control" placeholder="End Date">
                    </div>
                    <button type="submit" class="btn gsa-btn btn-block">Calculate</button>
                </div>
                <div class="col-sm-3 content-column">
                    <button class="btn gsa-btn btn-block">Today's rate for my location</button>
                </div>
            </form>
        </div>
        <div class="tab-pane" id="tab-C">Lorem ipsum</div>
        <div class="tab-pane" id="tab-D">Lorem ipsum</div>
    </div>
</section>
