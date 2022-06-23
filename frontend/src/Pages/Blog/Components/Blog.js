import React from 'react';
import './../Styles/Blog.css'
import LatestBlogcard from './LatestBlogcard';
import { blogsData } from '../JSON/blogsData';
// import BlogPost from '../../Home/BlogPost/BlogPost';
// import Hzline from '../../Company/Components/Hzline';

function Blog(props) {
    document.title = "Blogs"
    console.log(blogsData)
    return (
        <div className="pruthatek-blogs">
            {/* <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">software development insights</h1>
                <p className="qulty-desc">Our versatile and industry-driven experience has opened doors of opportunities for global businesses. Untap the true potential of our technology experts who have penned down their viewpoints through these blogs.</p>
            </div>
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src="Pictures/QM_1.png" alt="company_people" />
                    </div>
                </div>
                <div className="QMA-tasks">
                    <p>We have various categories of blogs for you . You can get Daily new updates and knowledge from the blogs.</p>
                </div>
            </div> */}
            <br />
            {/* Latest Blogs */}
            <div className="latest-blogs">
                <h2>Latest Blogs</h2>
                <div className="Category-Blogs-Cont">
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
                    <div className="latest-blogs-container">
                        {blogsData.map((blog, index) => (
                            <LatestBlogcard data={blog} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <BlogPost /> */}
            {/* hover cards */}
            {/* <div className="hover-cards-container">
                {blogsData.slice(0, 3).map((blog, index) => (
                    <div className="hover-cards" key={index} >
                        <img src={blog.tempImg} alt="hover-images" />
                        <div className="hover-card-data">
                            <p>{blog.title}</p>
                            <Hzline />
                            <p>{blog.date}</p>
                            <p>{blog.shortdesc}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Blog;