import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai'
import InsightsService from './../JSON/InsightsService.json'
import './../Styles/Insights.css'

function InsightsData(props) {
    document.title = "Insights & Data"
    return (
        <div className="methodology" >
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Insights &amp; data</h1>
                <p className="qulty-desc">Information gathering and data analysis tools give you a serious edge to savvy data at a higher speed and scale. </p>
            </div>
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src="Pictures/Insights/Image.jpg" alt="company_people" />
                    </div>
                </div>
                <div className="Insights-data ">
                    <h4 className=" fw-bold" >Data To control,Operate And Improve Your Business</h4>
                    <p className="mt-3" >We use technology to transform raw data into information. With tweaked examination and effectively open revealing devices, for example, dashboards and scorecards, you can see continuous outcomes, spot openings for development, and settle on educated choices.</p>
                    <p className="text-primary fw-bold mt-4" >Leverage the advantages of services by:</p>
                    <p><AiOutlineCheck style={{ color: "blue" }} />&nbsp;&nbsp;&nbsp;Prepare for seasonal fluctuations.</p>
                    <p><AiOutlineCheck style={{ color: "#F25022" }} />&nbsp;&nbsp;&nbsp;Minimize outages and downtime.</p>
                    <p><AiOutlineCheck style={{ color: "#8FC320" }} />&nbsp;&nbsp;&nbsp;Address trends and outliers.</p>
                    <p><AiOutlineCheck style={{ color: "#EFA706" }} />&nbsp;&nbsp;&nbsp;Identify challenges and differentiators.</p>
                </div>
            </div>
            <div className="data-services-offer">
                <h3 className="text-center fw-bold" >Pruthatek Offers data services are:</h3>
                <p className="text-center data-insights-desc " >We collaborate with customers to drive their digital transformation,using texhnology and our profound skill in data,ML,AI and more.we delivere business functions with better data insights.</p>
                <div className="services-provided-data-insights" >
                    <div className="services-img-container" >
                        <img src="Pictures/Insights/Frame.png" alt="frame" />
                    </div>
                    <div className="Services-desc">
                        {InsightsService.map((service, ind) => (
                            <div key={ind} >
                                <p className="fw-bold" style={{ color: service.color }} >{service['service-name']}</p>
                                <p>{service['service-desc']}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Think Ahead Of competition */}
            <div className="think-ahead mt-5" >
                <h3 className="fw-bold text-center mt-5" >Think Ahead of competition</h3>
                <p className="w-75 text-center m-auto" >Data and Al update your business capacity to research, plan, asset capability, and employee Involvement. Besides, it will benefit how your clients, gear, and representatives will act-setting aside your time and cash while expanding item quality and client experience.</p>
                <img src="Pictures/Insights/Frame-2.png" alt="down-arrow" className="arrow mt-4" />
                <h3 className="fw-bold text-center mt-4" >Benefits of Choosing Pruthatek as a data services:</h3>
                <div className="row overflow-hidden gx-0 mt-5 align-items-center" >
                    <div className="col-xl-1" ></div>
                    <div className="col-xl-6" >
                        <img src="Pictures/Insights/Frame-1.png" width="100%" alt="down-arrow" className="mt-4" />
                    </div>
                    <div className="col-xl-1" ></div>
                    <div className="col-xl-3" >
                        <p><AiOutlineCheck style={{ color: "blue" }} />&nbsp;&nbsp;&nbsp;Personalized Consumer experience</p>
                        <p><AiOutlineCheck style={{ color: "#F25022" }} />&nbsp;&nbsp;&nbsp;Business Growth Driven By Targeted Analysis.</p>
                        <p><AiOutlineCheck style={{ color: "#8FC320" }} />&nbsp;&nbsp;&nbsp;Greater Business Agility.</p>
                        <p><AiOutlineCheck style={{ color: "#EFA706" }} />&nbsp;&nbsp;&nbsp;Reduced Business Risk.</p>
                        <p><AiOutlineCheck style={{ color: "#F25022" }} />&nbsp;&nbsp;&nbsp;Elimination of information Silos.</p>
                    </div>
                    <div className="col-xl-1" ></div>
                </div>
            </div>
        </div>
    );
}
export default InsightsData;