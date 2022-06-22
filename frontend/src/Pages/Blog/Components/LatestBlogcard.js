import React from 'react';
import { Link } from 'react-router-dom';
import Hzline from '../../Company/Components/Hzline';
import './../Styles/blogCard.css'

function LatestBlogcard(props) {
    console.log(props.data)
    const blogTitle = props.data.title.replace(/ /g,"-");
    return (
        <div className="latest-blog-card">
            <Link to={`/blogs/${blogTitle}`} state={props.data} >
                <img src={props.data.imgPath} alt="blog-img" />
                <div className="blog-data">
                    <p className="blog-title">{props.data.title}</p>
                    <Hzline />
                    <p className="blog-date">{props.data.date}</p>
                    <p className="blog-short-desc">{props.data.shortdesc}</p>
                </div>
            </Link>
        </div>
    );
}

export default LatestBlogcard;