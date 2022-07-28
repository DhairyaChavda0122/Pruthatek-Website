import React from "react";
// import { ImLocation } from "react-icons/im";
// import { BiPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaGreaterThan,
} from "react-icons/fa";
// import { GrLocation } from 'react-icons/gr'
import "../css/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="container mt-4">
          <img src="/Pictures/logo.png" alt="logo" className="img-fluid pointer company-header-logo" />
          <footer className="pt-3">
            <div className="row justify-content-evenly">
              <div className="col-12 col-sm-3 col-md-3 col-lg-1 col-xl-1 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5 className="mb-3" >About</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Price
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-9 col-md-9 col-lg-4 col-xl-4 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5 className="mb-3">Expertise</h5>
                <ul className="nav row fs-6">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 set-border">
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Web Application Developments
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Mobile Application Developments
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Enterprise Software Developments
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Application Integration
                      </a>
                    </li>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        QA And Testing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Dedicated Development Centers
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Artificial Intelligence
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="/" className="nav-link p-0 text-muted">
                        Machine Learning
                      </a>
                    </li>
                  </div>
                </ul>
              </div>

              {/* <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>Head Office</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted fs-6 ms-4">
                      Visit Us Daily
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <address>
                        <ImLocation className="me-2 fs-5" />
                        G-10 Parasmant Flat, Nr. Karmachari Nagar, Rannapark,
                        Ahmedabad - 380061
                      </address>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <BiPhoneCall className="me-2 fs-5" />
                      Have Any Questions?
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted ms-3">
                      +91 9909 918 930
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="col-12 col-sm-8 col-md-7 col-lg-5 col-xl-4 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start countries">
                <h5 className="mb-3">Our Locations</h5>
                <div className="row">
                  <div className="col-6 col-xl-5 mb-3 set-border">
                    <img src="/Pictures/india.png" className="mb-2" style={{ width: "2rem" }} alt="india" /><br/>
                    <span className="mb-0" >India</span>&nbsp;
                    <span className="text-muted font-size-smaller mb-0" >(Head Office)</span>
                    <p className="text-muted font-size-smaller mb-0" >G-10 Parasmani Flat,<br />Nr. Karmachari Nagar,<br/> Rannapark,Ahmedabad-380061</p>
                    <a href="mailto:info@pruthatek.com" className="country-mail font-size-smaller m-0">info@pruthatek.com</a>
                    <p className="text-muted font-size-smaller mb-0">M.-+91 9909 918 930</p>
                  </div>
                  <div className="col-6 col-xl-6 mb-3 ms-xl-3">
                    <img src="/Pictures/canada.png" className="mb-2" style={{ width: "2rem" }} alt="india" />
                    <p className="mb-0" >Canada</p>
                    <a href="mailto:ca_sales@pruthatek.com" className="country-mail font-size-smaller m-0">ca_sales@pruthatek.com</a>
                    <p className="text-muted font-size-smaller mb-0">M.- +1 (705) 772-2734</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-xl-5 set-border">
                    <img src="/Pictures/singapore.png" className="mb-2" style={{ width: "2rem" }} alt="india" />
                    <p className="mb-0" >SEA</p>
                    <p className="text-muted font-size-smaller mb-0">South East Asia</p>
                    <a href="mailto:ca_sales@pruthatek.com" className="country-mail font-size-smaller m-0">sea_sales@pruthatek.com</a>
                  </div>
                  <div className="col-6 col-xl-6 ms-xl-3">
                    <img src="/Pictures/australia.png" className="mb-2" style={{ width: "2rem" }} alt="india" />
                    <p className="mb-0" >Australia</p>
                    <a href="mailto:ca_sales@pruthatek.com" className="country-mail font-size-smaller m-0">au_sales@pruthatek.com</a>
                  </div>
                </div>
              </div>

              <div className="col-112 col-sm-4 col-md-5 col-lg-2 col-xl-3 my-3 text-start text-sm-start text-md-start text-lg-start text-xl-start">
                <h5 className="mb-3">Follow Us</h5>
                <ul className="list-unstyled d-flex social-media-footer ">
                  <li className="fs-3">
                    <a style={{color : "#4267B2"}} href="https://www.facebook.com/pruthatek/" target="_blank" rel="noreferrer" >
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a style={{color : "violet"}} href="https://www.instagram.com/pruthatek/" target="_blank" rel="noreferrer" >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a href="https://in.linkedin.com/company/pruthatek" target="_blank" rel="noreferrer" style={{color : "#0077b5"}} >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a href="https://twitter.com/pruthatek/status/1179464459758141440" target="_blank" rel="noreferrer" style={{color : "#1DA1F2"}}>
                      <FaTwitterSquare />
                    </a>
                  </li>
                </ul>
                <form>
                  <h5 className="fs-6 fw-bold" >Subscribe to our newsletter</h5>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <button className="btn" type="submit">
                      <FaGreaterThan className="align-middle text-dark fs-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="pt-2 mt-0 border-top text-center fs-7">
              <p>
                <span className="text-secondary">All rights reserved</span>
                &nbsp;&nbsp;
                <span>&copy; Prutha TechnoMarket Pvt. Ltd. 2022</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
