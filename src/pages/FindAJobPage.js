import React, {useRef} from 'react';
import {ImLocation2} from "react-icons/im"
import {useNavigate} from "react-router-dom";

const FindAJobPage = ({allJobs,
                          checked,
                          fnCheck,
                          fnSelectOneJob,
                          filteredJobs,
                          needToFiler,
                          fnFilterByInputs}) => {

    const navigate = useNavigate();
    const keywordFilter = useRef();
    const regionFilter = useRef();
    const categoryFilter = useRef();

    function navigateToOneJob(num, title) {
        {navigate(`/one-job/${title}`)}
        fnSelectOneJob(num);
    }

    function showAllJobs() {

        function getDate(num) {
            const postDate = new Date(num);
            const todaysDate = new Date();
            const daysDifference = Math.floor((todaysDate - postDate) / (1000*60*60*24));
            return daysDifference;
        }

        return  allJobs.map(x => <div key={x.jobId}
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
            </div>)

    }

    function showFilteredJobs() {
        return filteredJobs.map(x => <div key={x.jobId}
                                      className="oneJobMiniView"
                                      onClick={() => navigateToOneJob(x.jobId, x.jobTitle)}>
            <div className="grow1 d-flex">
                <img src={x.featuredImage} alt=""/>
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
                </div>
            </div>
        </div>)
    }

    return (

        <div className="findAJobDiv">
            <div className="map">

            </div>
            <div className="findAJobList">

                <div className="searchbarJobs">

                    <input className="grow2" type="text" placeholder="Keywords" ref={keywordFilter}/>

                    <select className="grow2" ref={regionFilter}>
                        <option defaultValue="All Regions">All Regions</option>
                        {needToFiler === false && allJobs.map((x, index) => <option key={index} defaultValue={x.region}>{x.region}</option>)}
                        {needToFiler === true && filteredJobs.map((x, index) => <option key={index} defaultValue={x.region}>{x.region}</option>)}

                    </select>
                    <select className="grow2" ref={categoryFilter}>
                        <option defaultValue="All Categories">All Categories</option>
                        {needToFiler === false && allJobs.map((x, index) => <option key={index} defaultValue={x.category}>{x.category}</option>)}
                        {needToFiler === true && filteredJobs.map((x, index) => <option key={index} defaultValue={x.category}>{x.category}</option>)}
                    </select>

                    <button className="grow1" onClick={() => fnFilterByInputs(keywordFilter.current.value,
                                                                                regionFilter.current.value,
                                                                                categoryFilter.current.value)}>Search</button>
                </div>

                <div className="searchbarFilter">
                    <div>
                        <input type="checkbox" id="freelance" defaultChecked={checked[0].checked} onClick={() => fnCheck(0)}/>
                        <label htmlFor="Freelance">FREELANCE</label>
                    </div>
                    <div>
                        <input type="checkbox" id="fullTime" defaultChecked={checked[1].checked} onClick={() => fnCheck(1)}/>
                        <label htmlFor="fullTime">FULL TIME</label>
                    </div>
                    <div>
                        <input type="checkbox" id="internship" defaultChecked={checked[2].checked} onClick={() => fnCheck(2)}/>
                        <label htmlFor="internship">INTERNSHIP</label>
                    </div>
                    <div>
                        <input type="checkbox" id="partTime" defaultChecked={checked[3].checked} onClick={() => fnCheck(3)}/>
                        <label htmlFor="partTime">PART TIME</label>
                    </div>
                    <div>
                        <input type="checkbox" id="temporary" defaultChecked={checked[4].checked} onClick={() => fnCheck(4)}/>
                        <label htmlFor="temporary">TEMPORARY</label>
                    </div>
                </div>

                <div className="allJobsList">
                    {needToFiler === false ? showAllJobs() : showFilteredJobs()}
                </div>
            </div>
        </div>
    );
};

export default FindAJobPage;