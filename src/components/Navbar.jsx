import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Magscripto</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" exact>Home</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/blog" exact>Blog</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/aboutus" className="nav-link" exact>About Us</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/whyus" className="nav-link" exact>Why Hire Us</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/pricing" className="nav-link" exact>Pricing</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/contactus" className="nav-link" exact>Get in touch</NavLink>
						</li>
					</ul>
				</div>
			</div>
	    </nav>
    );
}

export default Navbar;