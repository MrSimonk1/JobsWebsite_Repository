import React from 'react';

const StatsPreview = () => {
    return (
        <div className="statsPreview">
            <h1>Jobify Site Stats</h1>
            <h4>Here we list our site stats and how many people we’ve helped find a job and companies have found recruits. It's a pretty awesome stats area!</h4>
            <div className="row">
                <div className="col">
                    <h1>20</h1>
                    <h4>Jobs Posted</h4>
                </div>
                <div className="col borderBoth">
                    <h1>0</h1>
                    <h4>Jobs Filled</h4>
                </div>
                <div className="col borderRight">
                    <h1>20</h1>
                    <h4>Companies</h4>
                </div>
                <div className="col">
                    <h1>5,298</h1>
                    <h4>Members</h4>
                </div>
            </div>
        </div>
    );
};

export default StatsPreview;