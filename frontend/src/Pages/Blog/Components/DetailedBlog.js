import React from 'react'
import { ImHome } from 'react-icons/im';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './../Styles/detailedBlog.css'
// import { FaDotCircle } from 'react-icons/fa'

const DetailedBlog = (props) => {
    const location = useLocation()
    console.log(location)
    const { title, introduction, tableOfContent, poster, briefContent, MainContent, conclusion } = location.state
    document.title = title
    console.log(tableOfContent)
    return (
        <div className="detailed-blog">
            <div className="categories" >
                <h2>Categories</h2>
                <ul className="ps-4" >
                    <li>All</li>
                    <li>Big Data &amp; BI</li>
                    <li>Cloud</li>
                    <li>General</li>
                    <li>Java</li>
                    <li>Microsoft Technologies</li>
                    <li>Mobile</li>
                    <li>SharePoint Development</li>
                    <li>Software Development</li>
                    <li>Software Testing</li>
                </ul>
            </div>
            <div className="main-blog-content" >
                <div className="link-path d-flex text-secondary fs-6 align-items-center mb-3" data-aos="fade-up" >
                    <Link to="/" > <ImHome className="text-dark" /> </Link>
                    <Link to="/blogs" className="ms-4 me-2">Blogs</Link>
                    <p className="mb-0" >/&nbsp;{title.slice(0, 20)}.....</p>
                </div>
                <h2 data-aos="fade-up" data-aos-delay="50">{title}</h2>
                <div className="mt-3 mb-5" data-aos="fade-up" data-aos-delay="100" >
                    <p className="mb-1 fs-5" ><span className="fw-bold" id="Intorduciton">Introduction:</span><br /></p>
                    {introduction.map((intro, index) => (
                        <p key={index} >{intro}</p>
                    ))}
                </div>
                {/* Table of Content */}
                <div data-aos="fade-in" data-aos-delay="150">
                    <h5 className="fw-bold" >Table of Content</h5>
                    <ol className="ps-3">
                        {tableOfContent.map((tableCont, index) => (
                            <li key={index} ><AnchorLink href={`#${tableCont.id}`} offset={() => 100} style={{ color: "black" }}>{tableCont.title}</AnchorLink></li>
                        ))}
                    </ol>
                </div>
                {/* Poster */}
                <img src={`/${poster}`} alt="blog" />
                {briefContent.map((brief, index) => (
                    <p className="mb-3" >{brief}</p>
                ))}

                {/* Main Content */}
                {MainContent.map((mainCont, index) => (
                    <div className="mb-3 mt-5" id={mainCont.id} key={index} >
                        <h4 className="fw-bold">{mainCont.title}</h4>
                        {mainCont.content.map((innerCont, ind) => (
                            <p>{innerCont}</p>
                        ))}
                        {mainCont.subTopic ?
                            <div className="my-3" >
                                {mainCont.subTopic.map((subTop, index) => (
                                    <div className="my-5" >
                                        <p className="fw-bold fs-5" >{subTop.subTitle}</p>
                                        {subTop.subContent.map((subCont, index) => (
                                            <p>{subCont}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            : null}
                    </div>
                ))}
                <div className="mt-5" id="Concluison" >
                    <h4 className="fw-bold" >Conclusion</h4>
                    {conclusion.map((concl, index) => (
                        <p>{concl}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailedBlog