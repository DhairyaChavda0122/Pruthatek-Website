import '../vars.css';
import '../ClientsReview/ClientsReviewCSS.css';
import img from '../ClientsReview/img.png';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientsReview(){
    /*    Reviews into an array    */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
    const reviewsList = [
        {
            profileImg: img,
            imgPath : "Pictures/pti.png",
            title: 'Well Done!!',
            description: 'I just wanted to drop you a little email to say thank you for all your hark work. I\'m delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.',
            starCode: <i className="bi bi-star-fill"></i>,
            starCnt: 5,
            name: 'PTI Global',
            designation: 'CEO'
        },
        {
            profileImg: img,
            imgPath : "Pictures/hexabyts.png",
            title: 'Outstanding!!',
            description: 'I just wanted to drop you a little email to say thank you for all your hark work. I\'m delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.',
            starCode: <i className="bi bi-star-fill"></i>,
            starCnt: 5,
            name: 'Hexabytes',
            designation: 'CEO'
        }
    ];

    /*  Reviews Div  */
    const reviews = reviewsList.map((rev, index) => {
        return(
            <div className='reviewsList df' key={index}>
                <div className='review-photo'>
                    {/*  Division to create a blurry border  */}
                    <div className='image df'>
                        <img src={rev.imgPath} alt="client" />
                    </div>
                </div>
                <div className='review-info'>
                    <img src="Pictures/Quote Icon.png" alt="quote" />
                    <h2>{rev.title}</h2>
                    <p>{rev.description}</p>
                    <div className='stars'>
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                    </div>
                    <h4 className='df'>{rev.name}, <span>{rev.designation}</span></h4>
                </div>
            </div>   
        )
    });

    /*  Onclick pr reviews slide kravana che. Jenu implementation baki che  */
    // function rotateLeft(){
    //     alert('Button clicked');
    // };
    // function rotateRight(){
    //     alert('Button clicked');
    // };

    return(
        <section className='client-review'>
            <div className="information dfc">
                <h2>What Our Clients Have To Say</h2>
                <p>Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.</p>
            </div>
            <Slider {...settings} >
                {reviews}
            </Slider>
        </section>
    );
}

export default ClientsReview;

