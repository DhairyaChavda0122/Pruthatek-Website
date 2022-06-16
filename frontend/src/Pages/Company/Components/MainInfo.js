import React from 'react';
// import companyPeople from './../requireImages/company_people.jfif'

function MainInfo(props) {
    return (
        <div className="flex-container margin">
            <div className="company_people-img-cont" data-aos="fade-up"  data-aos-delay="400" >
                <div className="shadow"></div>
                <div className="company_people-img">
                    <img src={props.data.imgPath} alt="company_people" />
                </div>
            </div>
            <div className="QMA-tasks" data-aos="fade-up" data-aos-delay="700" >
                {props.data.title && <h2>{props.data.title}</h2>}
                {props.data.Desc.map((item,index) => (
                    <p className="details" key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default MainInfo;