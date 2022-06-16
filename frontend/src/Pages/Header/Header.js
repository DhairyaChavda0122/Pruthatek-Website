import React, { useState } from "react";
// import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {

  const [demo, setDemo] = useState(true)
  console.log(demo, "demo")

  const handleClick = () => {
    setDemo(false)
    setTimeout(() => {
      setDemo(true)
    }, 1000);
    
  }

  return (



    <>
      <div className="container-fluid header-class ">
        <Link to="/" >
        <img src="/Pictures/logo.png" alt="logo" className="img-fluid pointer company-header-logo" />
        </Link>
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar"><GiHamburgerMenu /></label>
        <nav className="navbar-pt">
          <ul>
            <li><Link to="/" className="text-dec-none">Company</Link></li>
            <li><Link to="/" className="text-dec-none">Expertise</Link>
              <ul className="px-0">
                <div className={`container w-md-100 ${demo ? "" : "d-none"}`}>
                  <div className="row bg-light">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none development-border">Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Enterprise Software Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Web Application Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Mobile Application Development</Link>
                      </li>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none testing-border">Testing</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Application Integration</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Q & A Testing</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Dedicated Development Teams</Link>
                      </li>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none Data-border">Data Analysis</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none" onClick={() => handleClick()}>Machine Learning</Link>
                      </li>
                      <li>
                        <Link to="/Artificial-Intelligence" className="text-dec-none" onClick={() => handleClick()}>Artificial Intelligence</Link>
                      </li>
                    </div>
                  </div>
                </div>

              </ul>
            </li>
            <li><Link to="/" className="text-dec-none" onClick={handleClick} >Services</Link></li>
            <li><Link to="/clients" className="text-dec-none">Clients</Link></li>
            <li><Link to="/" className="text-dec-none">Portfolio</Link></li>
            <li><Link to="/" className="text-dec-none">Career</Link></li>
            <li><Link to="/blogs" className="text-dec-none" onClick={handleClick}>Blog</Link></li>
            <li><Link to="/contact-us" className="text-dec-none">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      {/* <div className="my-5 bg-dark py-5 text-light">
        <div class="btn-group">
          <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Action
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;