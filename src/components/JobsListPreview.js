import React from 'react';
import {ImLocation2} from "react-icons/im";
import {useNavigate} from "react-router-dom";

const JobsListPreview = ({allJobs, fnSelect}) => {

    const navigate = useNavigate();

    function navigateToOneJob(num, title) {
        {navigate(`/one-job/${title}`)};
        fnSelect(num);
    }

    function getDate(num) {
        const postDate = new Date(num);
        const todaysDate = new Date()
        const daysDifference = Math.floor((todaysDate - postDate) / (1000*60*60*24))
        return daysDifference;
    }

    return (
        <div className="jobsListDiv">
            <h1>Hundreds of Jobs From All Over the Globe</h1>

            <div>
                {allJobs.map(x => <div key={x.jobId}
                                       className="oneJobMiniView"
                                       onClick={() => navigateToOneJob(x.jobId, x.jobTitle)}>
                    <div className="grow1 d-flex">
                        <img src={x.featuredImage.length === 0 ? "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg" : x.featuredImage} alt=""/>
                        <div className="jobTitles">
                            <p>{x.jobTitle}</p>
                            <span>{x.jobTitle}</span>
                        </div>
                    </div>

                    <div className="grow1 d-flex regionAndType">
                        <div className="region">
                            <ImLocation2/>
                            <h4>{x.region}</h4>
                        </div>

                        <div>
                            <div className="type" style={{
                                ...(x.type === "Freelance" && {backgroundColor: "rgb(255,90,95)"}),
                                ...(x.type === "Temporary" && {backgroundColor: "rgb(91,188,46)"}),
                                ...(x.type === "Full Time" && {backgroundColor: "rgb(91,188,46)"}),
                                ...(x.type === "Part Time" && {backgroundColor: "rgb(115,95,238)"}),
                                ...(x.type === "Internship" && {backgroundColor: "rgb(0,178,169)"})
                            }}>
                                {x.type.toUpperCase()}
                            </div>
                            <div style={{width: "100%", textAlign: "center", fontSize: 14, marginTop: 3}}>Posted {getDate(x.postDate)} day(s) ago</div>

                        </div>
                    </div>
                </div>)}
            </div>

            <button>LOAD MORE LISTINGS</button>
        </div>
    );
};

export default JobsListPreview;