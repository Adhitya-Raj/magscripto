import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Navbar() {
	const [toggle,setToggle] = useState(true);
	
	function toggleNav(){
		if(window.innerWidth < 992)
			setToggle(!toggle);
	}
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img height="42px" src={process.env.PUBLIC_URL+"/logo/magscripto.jpg"} alt=""/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!toggle} onClick={toggleNav} aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`${toggle?'collapse ':''}navbar-collapse`} id="navbarSupportedContent">
					<ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" onClick={toggleNav} exact>Home</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/blog" onClick={toggleNav} exact>Blog</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/aboutus" className="nav-link" onClick={toggleNav} exact>About Us</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/whyus" className="nav-link" onClick={toggleNav} exact>Why Hire Us</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/pricing" className="nav-link" onClick={toggleNav} exact>Pricing</NavLink>
						</li>
						<li className="nav-item nav-link d-none d-lg-block">|</li>
						<li className="nav-item">
							<NavLink to="/contactus" className="nav-link" onClick={toggleNav} exact>Get in touch</NavLink>
						</li>
					</ul>
				</div>
			</div>
	    </nav>
    );
}

export default Navbar;