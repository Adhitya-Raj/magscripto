import './app.css';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <div className="main">
            <section id="header" className="full-body">
                <h1 className="display-1">Content Writer</h1>
                <h2 className="display-4 text-center">Specialising in short and long form contents.</h2>
                <p className="display-5 mt-5">Give words to your thoughts!</p>
                <div>
                    <Link to="/contactus" className="btn btn-lg btn-primary me-2">Hire Me</Link>
                    <Link to="/aboutus" className="btn btn-lg btn-secondary">Know Me</Link>
                </div>
            </section>
            <section id="services" className="full-body">
                <h2 className="display-2">My Services</h2>
                <p className="display-5">
                Here's what I can do for you!<br/>
                Click in for more information
                </p>
                <div className="container mt-3">
                    <div className="row g-3 justify-content-center">
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://via.placeholder.com/300" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Web Content</h5>
                                    <p className="card-text">Transform your audience to customers using my web content</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://via.placeholder.com/300" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Social Media Content</h5>
                                    <p className="card-text">Create a brand exposure through social media</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://via.placeholder.com/300" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Articles</h5>
                                    <p className="card-text">Communicate through this medium for information</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://via.placeholder.com/300" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Long-form Contents</h5>
                                    <p className="card-text">Create a great interest for your readers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://via.placeholder.com/300" alt="" className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">Custom Content</h5>
                                    <p className="card-text">Bring insights to your audience through your content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="full-body">
                <h2 className="display-2">Testimonials</h2>
                <p className="display-5 mb-5">Hear my clients out!</p>
                <div className="container">
                    <div className="row g-3 justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex">
                                        <img src="https://via.placeholder.com/100" alt="" className="img-fluid m-auto"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Web Content</h5>
                                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quam voluptas fugiat aperiam, repellendus earum sint officia dolore quod atque ad esse ducimus, aspernatur excepturi vel quisquam. Animi, expedita voluptas.</p>
                                            <p className="card-text"><small className="text-muted">-Anonymous</small></p>
                                        </div>		
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex">
                                        <img src="https://via.placeholder.com/100" alt="" className="img-fluid m-auto"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Web Content</h5>
                                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quam voluptas fugiat aperiam, repellendus earum sint officia dolore quod atque ad esse ducimus, aspernatur excepturi vel quisquam. Animi, expedita voluptas.</p>
                                            <p className="card-text"><small className="text-muted">-Anonymous</small></p>
                                        </div>		
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center">
                            <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex">
                                        <img src="https://via.placeholder.com/100" alt="" className="img-fluid m-auto"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Web Content</h5>
                                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quam voluptas fugiat aperiam, repellendus earum sint officia dolore quod atque ad esse ducimus, aspernatur excepturi vel quisquam. Animi, expedita voluptas.</p>
                                            <p className="card-text"><small className="text-muted">-Anonymous</small></p>
                                        </div>		
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;