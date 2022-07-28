import React from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import './webappdev.css'

// import leptop from '/Pictures/WebApp/Image.jpg'
// import leptop from '../assets/webappdevimages/Image.jpg'
// import image10 from '../assets/webappdevimages/image 10.png'
// import image11 from '../assets/webappdevimages/image 11.png'
// import image12 from '../assets/webappdevimages/image 12.png'
// import image13 from '../assets/webappdevimages/image 12-1.png'
// import image14 from '../assets/webappdevimages/image 12-2.png'
// import image15 from '../assets/webappdevimages/image 12-3.png'
import vector from './assets/Vector.jpg'
// import vector2 from '../assets/webappdevimages/Vector-1.jpg'
// import"Pictures/WebApp/Vector-2.jpg"from '../assets/webappdevimages/Vector-2.jpg'
// import vector4 from '../assets/webappdevimages/Vector-3.jpg'
// import vector5 from '../assets/webappdevimages/Vector-4.jpg'
// import arrow from '../assets/webappdevimages/Vector.png'
// import frame5 from '../assets/webappdevimages/Frame-5.png'
// import frame1 from '../assets/webappdevimages/Frame-1.png'
// import frame2 from '../assets/webappdevimages/Frame-2.png'
// import frame3 from '../assets/webappdevimages/Frame-3.png'
// import frame4 from '../assets/webappdevimages/Frame-4.png'
// import frame from '../assets/webappdevimages/Frame.png'

const WebAppDev = () => {
    return (
        <div className='WebAppDev' >


            <div className='TitleWebApp my-3' >
                <h2 className='WebAppDev_Title'> Web Application Development  </h2>

            </div>

            <div className='WebAppDevParagraph'>
                <p>Transfer your business with our future-driven approach to get the web app solution as per business requirements.</p>

            </div>

            {/*================================Web Application Development========================== */}
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <img src="Pictures/WebApp/Image.jpg" alt='Leftside' className='WebAppImage ' />
                    </div>

                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className="expertise-intro">For B2B and B2C compatible web solutions, we focus on meeting business challenges. Our developers will create
                            web applications that suit your business and help get the best of the investment.
                            We are experienced in developing from single-page applications to customized and complex web applications along with unique features. Get the benefits of 360-degree support in developing web application solutions.</div>
                    </div>

                </div>

            </div>

            {/*========================================Web application development services============= */}

            <div className='TitleWebAppservice my-3'>
                <h2 className="WebAppdevService">Web Application Development Services</h2>
            </div>
            <div className='ParagraphServices'>
                <p className='servicesPara'>Our skilled full-stack web app developers have taken the development services to excellent quality.</p>

            </div>

            <OwlCarousel className='owl-theme' loop margin={4} nav>
                <div className='item'>
                    <div className="card webappdevser_card_size " >
                        <img src="Pictures/WebApp/image 10.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Front-end web Development</h5>
                            <span className='underlinedigitaldigital01'></span>
                            <p className="card-text WebText my-3">Full-stack front end web development expert services to deliver applications that are responsive and meet your business requirements. We implement end-to-end AngularJS development services to design apps for all business demands. Our experienced team focuses on business best practices to guarantee compliance with JS standards & easy adaptability.</p>

                        </div>
                    </div>
                </div>
                <div className='item'>

                    <div className="card webappdevser_card_size" >
                        <img src="Pictures/WebApp/image 11.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Back-end Development</h5>
                            <span className='underlinedigitaldigital02'></span>
                            <p className="card-text WebText my-3">Benefit from our backend development services and get a robust and secure backend for your mobile app solution. As an experienced mobile app backend development company, we support mobile app solutions with unique server-side technologies, fast authentication tools, and communication between the application, server, and database.</p>

                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card webappdevser_card_size">
                        <img src="Pictures/WebApp/image 12.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Mobile Application  Development</h5>
                            <span className='underlinedigitaldigital03'></span>
                            <p className="card-text WebText my-4">PruthaTek offers a vast range of customized web application development that includes website solutions, Game Development, AR-VR Development, Blockchain Development, and much more. Our dedicated team & 
                            skilled engineers provide the best solution for growth to your business</p>

                        </div>
                    </div>
                </div>
                <div className='item'>
                <div className="card webappdevser_card_size"  >
                        <img src="Pictures/WebApp/image 12-1.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Progressive Web Apps</h5>
                            <span className='underlinedigitaldigital03'></span>
                            <p className="card-text WebText my-3">At PruthaTek, we focus on optimizing and maximize user engagement and develop mobile app solutions readily accessible across all platforms. For streamlining your business functions, our Progressive web applications help to render a native alike experience. Our Progressive web app solutions are integrated with unique features and easy channels of distribution.</p>

                        </div>
                    </div>
                </div>
                <div className='item'>
                <div className="card webappdevser_card_size"  >
                        <img src="Pictures/WebApp/image 12-2.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Digital Transformation</h5>
                            <span className='underlinedigitaldigital03'></span>
                            <p className="card-text WebText my-3">Leverage our E-commerce web application development to bring more customers and sales. Combine your business with a web application that witnesses sales growth and intensifies customer experience within a short period. Combining Progressive web app technology with our wide Mobile and Web App development services, we deliver a feature-rich solution.</p>

                        </div>
                    </div>
                </div>
                <div className='item' >
                <div className="card webappdevser_card_size" >
                        <img src="Pictures/WebApp/image 12-3.png" className="card-img-digital rounded mx-auto d-block" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title WebAppdevser_Title my-2">Custom Web Application Development Services</h5>
                            <span className='underlinedigitaldigital03'></span>
                            <p className="card-text WebText my-4" >Our understanding and research process for any web solution helps to get our customers' best web applications. With the latest technology, we have carved out a niche in Web App Development for delivering different project requirements.</p>

                        </div>
                    </div>
                </div>

            </OwlCarousel>;

            {/* 
    <div className='WebAppDevSer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12'>
                    
                <div className="card webappdevser_card_size">
                                <img src={digitalimage1} className="card-img-digital rounded mx-auto d-block" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title WebAppdevser_Title my-2">Front-end web Development</h5>
                                    <span className='underlinedigitaldigital01'></span>
                                    <p className="card-text WebText my-3">Full-stack front end web development expert services to deliver applications that are responsive and meet your business requirements. We implement end-to-end AngularJS development services to design apps for all business demands. Our experienced team focuses on business best practices to guarantee compliance with JS standards & easy adaptability.</p>

                                </div>
                            </div>

                </div>

                <div className='col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12'>
                    
                <div className="card webappdevser_card_size">
                                <img src={digitalimage1} className="card-img-digital rounded mx-auto d-block" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title WebAppdevser_Title my-2">Back-end Development</h5>
                                    <span className='underlinedigitaldigital02'></span>
                                    <p className="card-text WebText my-3">Benefit from our backend development services and get a robust and secure backend for your mobile app solution. As an experienced mobile app backend development company, we support mobile app solutions with unique server-side technologies, fast authentication tools, and communication between the application, server, and database.</p>

                                </div>
                            </div>

                </div>
                <div className='col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12'>
                    
                <div className="card webappdevser_card_size">
                                <img src={digitalimage1} className="card-img-digital rounded mx-auto d-block" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title WebAppdevser_Title my-2">Mobile Application  Development</h5>
                                    <span className='underlinedigitaldigital03'></span>
                                    <p className="card-text WebText my-3">PruthaTek offers a vast range of customized web application development that includes website solutions, Game Development, AR-VR Development, Blockchain Development, and much more. Our dedicated team & skilled engineers provide the best solution for growth to your business.</p>

                                </div>
                            </div>

                </div>

                <div className='col-lg-3 col-sm-3 col-md-3 col-xl-3 col-xs-12'>
                    
                    <div className="card webappdevser_card_size">
                                    <img src={digitalimage1} className="card-img-digital rounded mx-auto d-block" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title WebAppdevser_Title my-2">Mobile Application  Development</h5>
                                        <span className='underlinedigitaldigital04'></span>
                                        <p className="card-text WebText my-3">PruthaTek offers a vast range of customized web application development that includes website solutions, Game Development, AR-VR Development, Blockchain Development, and much more. Our dedicated team & skilled engineers provide the best solution for growth to your business.</p>
    
                                    </div>
                                </div>
    
                    </div>

            </div>

        </div>

    </div>

*/}

{/*======================================================Carousel sidebar===================================== */}

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-item active BackgroundImageDigital1">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-5 col-md-5 col-xl-4 col-xs-12'>
                        <div className='carouselDigitalImage'>
                        <img src={vector} className="ImageDigitalCarousel rounded mx-auto d-block" alt="..." />

                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='carouselTitle'>
                            <h4 className='headingTitle'>Web Application Development Services</h4>
                            <div className="expertise-subtopic">Being technology know-how and as an experienced mobile app development company in India, we offer services that enhance your business growth with our ideal development solutions. Here are some of the projects we did.</div>

                            <div className="portfolio-pcontent">
                                                            <div className="portfolio-post" style={{color:"#186CAA"}}>Ecommerce Website</div>
                                                            <div className="portfolio-type">
                                                                Retail & E-commerce
                                                                
                                                            </div>
                                                        </div>
                        </div>

                      

                    </div>

                </div>

            </div>
    </div>
    <div class="carousel-item BackgroundImageDigital2">
    <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-5 col-md-5 col-xl-4 col-xs-12'>
                        <div className='carouselDigitalImage'>
                        <img src="Pictures/WebApp/Vector-1.jpg" className="ImageDigitalCarousel rounded mx-auto d-block" alt="..." />

                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='carouselTitle'>
                            <h4 className='headingTitle'>Web Application Development Services</h4>
                            <div className="expertise-subtopic">Being technology know-how and as an experienced mobile app development company in India, we offer services that enhance your business growth with our ideal development solutions. Here are some of the projects we did.</div>

                            <div className="portfolio-pcontent">
                                                            <div className="portfolio-post" style={{color:"#8fc320"}}>Human Health Protection Website</div>
                                                            <div className="portfolio-type">
                                                            Health & Insurance
                                                                
                                                            </div>
                                                        </div>
                        </div>

                      

                    </div>

                </div>

            </div>
    
    </div>
    <div class="carousel-item BackgroundImageDigital3">
    <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-5 col-md-5 col-xl-4 col-xs-12'>
                        <div className='carouselDigitalImage'>
                        <img src="Pictures/WebApp/Vector-2.jpg" className="ImageDigitalCarousel rounded mx-auto d-block" alt="..." />

                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='carouselTitle'>
                            <h4 className='headingTitle'>Web Application Development Services</h4>
                            <div className="expertise-subtopic">Being technology know-how and as an experienced mobile app development company in India, we offer services that enhance your business growth with our ideal development solutions. Here are some of the projects we did.</div>

                            <div className="portfolio-pcontent">
                                                            <div className="portfolio-post"style={{color:"#EFA702"}}>School Management System</div>
                                                            <div className="portfolio-type">
                                                               Education
                                                                
                                                            </div>
                                                        </div>
                        </div>

                      

                    </div>

                </div>

            </div>
    
    </div>
    <div class="carousel-item BackgroundImageDigital4">
    <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-5 col-md-5 col-xl-4 col-xs-12'>
                        <div className='carouselDigitalImage'>
                        <img src="Pictures/WebApp/Vector-4.jpg" className="ImageDigitalCarousel rounded mx-auto d-block" alt="..." />

                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='carouselTitle'>
                            <h4 className='headingTitle'>Web Application Development Services</h4>
                            <div className="expertise-subtopic">Being technology know-how and as an experienced mobile app development company in India, we offer services that enhance your business growth with our ideal development solutions. Here are some of the projects we did.</div>

                            <div className="portfolio-pcontent">
                                                            <div className="portfolio-post"style={{color:"#F25022"}}>Lawyer Work Management</div>
                                                            <div className="portfolio-type">
                                                            Government & Public Safety
                                                                
                                                            </div>
                                                        </div>
                        </div>

                      

                    </div>

                </div>

            </div>
    
    </div>
    <div class="carousel-item BackgroundImageDigital5">
    <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-sm-5 col-md-5 col-xl-4 col-xs-12'>
                        <div className='carouselDigitalImage'>
                        <img src="Pictures/WebApp/Vector-3.jpg" className="ImageDigitalCarousel rounded mx-auto d-block" alt="..." />

                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='carouselTitle'>
                            <h4 className='headingTitle'>Web Application Development Services</h4>
                            <div className="expertise-subtopic">Being technology know-how and as an experienced mobile app development company in India, we offer services that enhance your business growth with our ideal development solutions. Here are some of the projects we did.</div>

                            <div className="portfolio-pcontent">
                                                            <div className="portfolio-post" style={{color:"#186CAA"}}>Hospital Management System</div>
                                                            <div className="portfolio-type">
                                                            Health & Insurance
                                                                
                                                            </div>
                                                        </div>
                        </div>

                      

                    </div>

                </div>

            </div>
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{/*=============================================Technology============================================== */}

<div className=" expertise-contact">
                        <div className="expertise-contact-content">Looking for a web development </div>
                        <div className=" expertise-contactCompnay">company for your next project ?
                        </div>
                        
                        <img src="Pictures/WebApp/Vector.png" className="arrowimage rounded mx-auto d-block" alt="..." />
                        
                            <div className='text-center'>
                              
                            <button type="button" class="btn btn-link">Contatc Us</button>

                            </div>
                        
        </div>

        <div className='technology BackgroundImage'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12'>
                        <div className='technologyTitle '>
                            <h3>Technology Stack </h3>

                        </div>
                        <div className='technologybutton1 my-5'>
                        <button class="btn btn-primary m-2">
                            <img src="Pictures/WebApp/Frame-5.png" alt='frontend' style={{width:"20px", height:"20px", margin:"0.5rem"}}/>
                            Frontend</button>
                        <button class="btn btn-success">
                        <img src="Pictures/WebApp/Frame.png" alt='frontend' style={{width:"20px", height:"20px", margin:"0.5rem"}}/>
                            Backend</button>
                        </div>
                        <div className='technologybutton2 my-5'>
                        <button class="btn btn-primary m-2">
                        <img src="Pictures/WebApp/Frame-1.png" alt='frontend' style={{width:"20px", height:"20px", margin:"0.5rem"}}/>
                            Database</button>
                        <button class="btn btn-danger">
                        <img src="Pictures/WebApp/Frame-2.png" alt='frontend' style={{width:"20px", height:"20px", margin:"0.5rem"}}/>
                            Mobility</button>
                        </div>

                        <div className='technologybutton3 '>
                        <button class="btn btn-warning m-2" style={{fontSize:"12px"}}>
                        <img src="Pictures/WebApp/Frame-3.png" alt='frontend' style={{width:"15px", height:"15px", margin:"0.5rem"}}/>
                            Cloud&DevOps</button>
                        <button class="btn btn-success">
                        <img src="Pictures/WebApp/Frame4.png" alt='frontend' style={{width:"20px", height:"20px", margin:"0.5rem"}}/>
                            Testing</button>
                        </div>

                    </div>
                    <div className='col-lg-6 col-sm-6 col-md-6 col-xl-6 col-xs-12 my-5' >
                        <div className='technologybox my-5'>
                            <div className='react my-5'>
                                <h3 className='reacttechnology'> 
                                React</h3>

                            </div>

                           
                            <div className='Angular my-5'>
                                <h3 className='Angulartechnology'>
                               
                                    Angular</h3>

                            </div>

                            <div className='Vue my-5'>
                                <h3 className='Vuetechnology'>
                               
                                    Vue</h3>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}

export default WebAppDev