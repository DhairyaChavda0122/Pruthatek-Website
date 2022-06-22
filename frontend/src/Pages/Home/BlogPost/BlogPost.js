import '../vars.css';
import '../BlogPost/BlogPostCSS.css';
import { blogsData } from '../../Blog/JSON/blogsData';
import LatestBlogcard from '../../Blog/Components/LatestBlogcard';

function BlogPost(){
    // const blogCardInfo = [
    //     {
    //         type: 'Android App Developement',
    //         title: 'Which are the Top 20 Android App Development Trends in 2021?',
    //         img: 'Pictures/client.png',
    //         name: 'Jessica Parker',
    //         dt: 'May, 2020 · 5 min ago',
    //         likes: 34,
    //         views: 203,
    //     },
    //     {
    //         type: 'Retails Apps',
    //         title: 'The Need for Retail Apps To Stay On Track Post COVID-19',
    //         img: 'Pictures/client.png',
    //         name: 'Jason Bourne',
    //         dt: 'April, 2020 · 10 min ago',
    //         likes: 39,
    //         views: 604,
    //     },
    //     {
    //         type: 'UI / UX',
    //         title: 'Top 10 Common UX Design Mistakes To Avoid When Developing an App',
    //         img: 'Pictures/client.png',
    //         name: 'Wanda Maximoff',
    //         dt: 'March, 2020 · 7 min ago',
    //         likes: 26,
    //         views: 436,
    //     }
    // ];

    // const blogCard = blogCardInfo.map((card, index) => {
    //     return(
    //         <div className='card' key={index}>
    //             <div className='card-header'>
    //                 <p>{card.type}</p>
    //             </div>
    //             <hr />
    //             <h4>{card.title}</h4>
    //             <div className='profile dfsb'>
    //                 <img src={card.img} alt="blogcard" />
    //                 <div className='profile-info'>
    //                     <p>{card.name}</p>
    //                     <p className='dt'>{card.dt}</p>
    //                 </div>
    //             </div>
    //             <div className='card-footer df'>
    //                 <p><i className="bi bi-hand-thumbs-up" /> {card.likes}</p>
    //                 <p><i className="bi bi-eye-fill" /> {card.views}</p>
    //             </div>
    //         </div>
    //     )
    // });

    return(
        <section className='blog-post'>
            <div className="information dfc">
                <h2>Blog Post</h2>
                <p>Blogs are great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.</p>
            </div>
            {/* <div className='blog-cards df'>
                {blogCard}
            </div> */}
            <div className="latest-blogs homepage-blog-posts ">
                <div className="latest-blogs-container">
                    {blogsData.slice(0,3).map((blog, index) => (
                        <LatestBlogcard data={blog} key={index} />
                    ))}
                </div>
            </div>
            {/* <div className='df'>
                <button className='learnMore'>Learn More</button>
            </div> */}
        </section>
    )
}

export default BlogPost;