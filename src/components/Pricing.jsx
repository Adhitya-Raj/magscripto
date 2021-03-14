function Pricing() {
    return(
        <div className="main">
        <div className="container text-center">
            <h1 className="display-1 pb-5">Pricing</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
                <div className="col">
                    <div className="card text-center h-100">
                        <div className="card-header"><h3>Custom Content</h3></div>
                        <div className="card-body">
                            <h4 className="card-title">Rs. 0.5/ word</h4>
                            <h5 className="card-text">Product descriptions</h5><h5>Service descriptions</h5>
                        </div>
                        <div className="card-footer">
                            <a href="/contactus" className="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center h-100">
                        <div className="card-header">Web Content</div>
                        <div className="card-body">
                            <h5 className="card-title">Rs. 1/ word</h5>
                            <p className="card-text">Content websites, blog posts and articles</p>
                        </div>
                        <div className="card-footer">
                            <a href="/contactus" className="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center h-100">
                        <div className="card-header">Social Media Content</div>
                        <div className="card-body">
                            <h5 className="card-title">Rs. 0.5 - 1/ word</h5>
                            <p className="card-text">Social media posts, feature articles and many more!</p>
                        </div>
                        <div className="card-footer">
                            <a href="/contactus" className="btn btn-primary">Get Proposal</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
    );    
}

export default Pricing;