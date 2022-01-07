import React from 'react';
import FindAJobPreview from "../components/FindAJobPreview";
import CompaniesWeHelpedPreview from "../components/CompaniesWeHelpedPreview";
import GetStartedPreview from "../components/GetStartedPreview";
import JobsListPreview from "../components/JobsListPreview";
import GetStartedSecondPreview from "../components/GetStartedSecondPreview";
import StatsPreview from "../components/StatsPreview";
import KindWordsPreview from "../components/KindWordsPreview";
import RecentArticlesPreview from "../components/RecentArticlesPreview";
import {useContext} from "react";
import {JobsContext} from "../contexts/allJobsContext";


const PreviewPage = ({fnSelectOneJob}) => {

    const ContextItem = useContext(JobsContext);

    return (
        <div>
            <FindAJobPreview/>
            <CompaniesWeHelpedPreview/>
            <GetStartedPreview/>
            <JobsListPreview allJobs={ContextItem} fnSelect={fnSelectOneJob}/>
            <GetStartedSecondPreview/>
            <StatsPreview/>
            <KindWordsPreview/>
            <RecentArticlesPreview/>
        </div>
    );
};

export default PreviewPage;