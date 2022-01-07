import React from 'react';

const FindAJobPreview = () => {
    return (
        <div className="findAJobPreview">
            <h1>The Easiest Way to Get Your New Job</h1>
            <h4>Find jobs, create trackable resumes and enrich your applications.</h4>

            <div>
                <input className="grow2" type="text" placeholder="Keywords"/>
                <select className="grow2">
                    <option value="All">All Regions</option>
                </select>
                <select className="grow2" >
                    <option value="All">All Categories</option>
                </select>
                <button className="grow1">SEARCH JOBS</button>
            </div>

        </div>
    );
};

export default FindAJobPreview;