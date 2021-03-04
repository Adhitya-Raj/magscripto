function Pricing() {
    return(
        <div class="main">
        <div class="container text-center">
            <h1 class="display-1 pb-5">Pricing</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 pb-3">
                <div class="col">
                    <div class="card text-center h-100">
                        <div class="card-header">Custom Content</div>
                        <div class="card-body">
                            <h5 class="card-title">Rs. 0.5/ word</h5>
                            <p class="card-text">Product descriptions, Service descriptions and many more</p>
                        </div>
                        <div class="card-footer">
                            <a href="/contactus" class="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center h-100">
                        <div class="card-header">Web Content</div>
                        <div class="card-body">
                            <h5 class="card-title">Rs. 1/ word</h5>
                            <p class="card-text">Content websites, blog posts and articles</p>
                        </div>
                        <div class="card-footer">
                            <a href="/contactus" class="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center h-100">
                        <div class="card-header">Social Media Content</div>
                        <div class="card-body">
                            <h5 class="card-title">Rs. 0.5 - 1/ word</h5>
                            <p class="card-text">Social media posts, feature articles and many more!</p>
                        </div>
                        <div class="card-footer">
                            <a href="/contactus" class="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
    );    
}

export default Pricing;