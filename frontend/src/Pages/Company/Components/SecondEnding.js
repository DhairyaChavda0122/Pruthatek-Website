import React from 'react';
// import Pic from "./../requireImages/qulty_mngmnt_ending.jfif"

function SecondEnding(props) {
    return (
        <>
            <p className="flexibility">{props.data.mainTitle}</p>
            <div className="pruthatek-FTM">
                <div className="img-cont">
                    <img src={props.data.imgPath} alt="pic" />
                </div>
                <div className="FTM-flex">
                    {props.data.features.map((it, ind) => (
                        <div>
                            <h1>{it.title}</h1>
                            <p>{it.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SecondEnding;