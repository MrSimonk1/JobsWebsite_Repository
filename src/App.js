import './App.css';
import TopLogo from "./components/TopLogo";
import Toolbar from "./components/Toolbar";
import PreviewPage from "./pages/PreviewPage";
import PostAJobPage from "./pages/PostAJobPage";
import FindAJobPage from "./pages/FindAJobPage";
import GotQuestion from "./components/GotQuestion";
import OneJobPage from "./pages/OneJobPage";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {JobsContext} from "./contexts/allJobsContext";
import {useState} from "react";

// to do list:
// make all jobs appear, when button "load more listings" pressed.
// filter by keywords, region, category inputs.

function App() {

  const jobsTest = [
      {jobId: 1283091823412312309832,
        email: "simonaskrasauskas@gmail.com1111",
        company: "company name1111111",
        jobTitle: "job title1111111",
        location: "location111111",
        applicationEmail: "applicationemail@gmail.com1111111",
        region: "region11111111",
        type: "Full Time",
        category: "category11111111",
        featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
        description: "a very good job, this is description of one job1111111111",
        logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
        companyDescription: "company description lets gooooo1111111",
        facebook: "yes facebook link1111111",
        linkedin: "yes linkedin link111111",
        postDate: 1641470422317
    },
        {jobId: 128309182123123398109832,
        email: "simonaskrasauskas@gmail.com22222222222",
        company: "company name2222222",
        jobTitle: "job title2222222222",
        location: "location22222222222",
        applicationEmail: "applicationemail@gmail.com22222222222",
        region: "region22222222",
        type: "Part Time",
        category: "category222222222222",
        featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
        description: "a very good job, this is description of one job2222222222",
        logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
        companyDescription: "company description lets gooooo2222222222",
        facebook: "yes facebook link222222222",
        linkedin: "yes linkedin link22222222222",
        postDate: 1641470422317
    },
        {jobId: 1283091823983423123109832,
        email: "simonaskrasauskas@gmail.com3333333333",
        company: "company name333333333",
        jobTitle: "job title33333333",
        location: "location3333333333",
        applicationEmail: "applicationemail@gmail.com333333",
        region: "region333333",
        type: "Internship",
        category: "category33",
        featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
        description: "a very good job, this is description of one job33333",
        logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
        companyDescription: "company description lets gooooo33333",
        facebook: "yes facebook link33333",
        linkedin: "yes linkedin link33333",
        postDate: 1641470422317
    },
        {jobId: 12830912312312182398109832,
        email: "simonaskrasauskas@gmail.com4444",
        company: "company name4444",
        jobTitle: "job title4444",
        location: "location4444",
        applicationEmail: "applicationemail@gmail.com4444",
        region: "region44444",
        type: "Freelance",
        category: "category44444",
        featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
        description: "a very good job, this is description of one job44444",
        logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
        companyDescription: "company description lets gooooo4444",
        facebook: "yes facebook link4444",
        linkedin: "yes linkedin link4444",
        postDate: 1641470422317
    },
      {jobId: 12830918282832312309832,
          email: "simonaskrasauskas@gmail.com1111",
          company: "company name1111111",
          jobTitle: "job title1111111",
          location: "location111111",
          applicationEmail: "applicationemail@gmail.com1111111",
          region: "region11111111",
          type: "Full Time",
          category: "category11111111",
          featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
          description: "a very good job, this is description of one job1111111111",
          logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
          companyDescription: "company description lets gooooo1111111",
          facebook: "yes facebook link1111111",
          linkedin: "yes linkedin link111111",
          postDate: 1641470422317
      },
      {jobId: 12889737892382123123398109832,
          email: "simonaskrasauskas@gmail.com22222222222",
          company: "company name2222222",
          jobTitle: "job title2222222222",
          location: "location22222222222",
          applicationEmail: "applicationemail@gmail.com22222222222",
          region: "region22222222",
          type: "Part Time",
          category: "category222222222222",
          featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
          description: "a very good job, this is description of one job2222222222",
          logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
          companyDescription: "company description lets gooooo2222222222",
          facebook: "yes facebook link222222222",
          linkedin: "yes linkedin link22222222222",
          postDate: 1641470422317
      },
      {jobId: 128301982374983423123109832,
          email: "simonaskrasauskas@gmail.com3333333333",
          company: "company name333333333",
          jobTitle: "job title33333333",
          location: "location3333333333",
          applicationEmail: "applicationemail@gmail.com333333",
          region: "region333333",
          type: "Internship",
          category: "category33",
          featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
          description: "a very good job, this is description of one job33333",
          logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
          companyDescription: "company description lets gooooo33333",
          facebook: "yes facebook link33333",
          linkedin: "yes linkedin link33333",
          postDate: 1641470422317
      },
      {jobId: 12830912312398230943209832,
          email: "simonaskrasauskas@gmail.com4444",
          company: "company name4444",
          jobTitle: "job title4444",
          location: "location4444",
          applicationEmail: "applicationemail@gmail.com4444",
          region: "region44444",
          type: "Freelance",
          category: "category44444",
          featuredImage: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg",
          description: "a very good job, this is description of one job44444",
          logo: "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg",
          companyDescription: "company description lets gooooo4444",
          facebook: "yes facebook link4444",
          linkedin: "yes linkedin link4444",
          postDate: 1641470422317
      }
    ]

  const [getAllJobs, setAllJobs] = useState(jobsTest);
  const [getFilteredJobs, setFilteredJobs] = useState([]);
  const [getCheckedFilters, setCheckedFilter] = useState([{type: "Freelance", checked: true}, {type: "Full Time", checked: true}, {type: "Internship", checked: true}, {type: "Part Time", checked: true}, {type: "Temporary", checked: true}]);
  const [getNeedToFilter, setNeedToFilter] = useState(false);
  const [getOneJob, setOneJob] = useState([]);

  function postJob(email, company, jobTitle, location, applicationEmail, region, type, category, featuredImage,
                   description, logo, companyDescription, facebook, linkedin, postDate) {
      const randomId = Math.round(Math.random()*9999999999999999);
      setAllJobs([...getAllJobs, {jobId: randomId,
          email: email.current.value,
          company: company.current.value,
          jobTitle: jobTitle.current.value,
          location: location.current.value,
          applicationEmail: applicationEmail.current.value,
          region: region.current.value,
          type: type.current.value,
          category: category.current.value,
          featuredImage: featuredImage.current.value,
          description: description.current.value,
          logo: logo.current.value,
          companyDescription: companyDescription.current.value,
          facebook: facebook.current.value,
          linkedin: linkedin.current.value,
          postDate: postDate
      }])
  }

  //filters with checkbox work when second check is pressed.
  //on the first one all jobs are not visible.
  function checkBox(num) {
      let newCheckBox = [...getCheckedFilters];
      newCheckBox[num].checked = !newCheckBox[num].checked;
      setCheckedFilter(newCheckBox);

      if (getCheckedFilters[0].checked === false ||
          getCheckedFilters[1].checked === false ||
          getCheckedFilters[2].checked === false ||
          getCheckedFilters[3].checked === false ||
          getCheckedFilters[4].checked === false) {
          setNeedToFilter(true);
      } else {
          setNeedToFilter(false)
      }

      if (getNeedToFilter === true) {
          let filteredJobsArr = [];
          const allJobs = [...getAllJobs];
          if (getCheckedFilters[0].checked === true) {
              allJobs.map(x => {
                  if (x.type === getCheckedFilters[0].type) {
                      filteredJobsArr.push(x);
                  }
              })
          }
          if (getCheckedFilters[1].checked === true) {
              allJobs.map(x => {
                  if (x.type === getCheckedFilters[1].type) {
                      filteredJobsArr.push(x)
                  }
              })
          }
          if (getCheckedFilters[2].checked === true) {
              allJobs.map(x => {
                  if (x.type === getCheckedFilters[2].type) {
                      filteredJobsArr.push(x)
                  }
              })
          }
          if (getCheckedFilters[3].checked === true) {
              allJobs.map(x => {
                  if (x.type === getCheckedFilters[3].type) {
                      filteredJobsArr.push(x)
                  }
              })
          }
          if (getCheckedFilters[4].checked === true) {
              allJobs.map(x => {
                  if (x.type === getCheckedFilters[4].type) {
                      filteredJobsArr.push(x);
                  }
              })
          }

          setFilteredJobs(filteredJobsArr);

      }
  }

  function selectOneJob(num) {
      console.log(num)
      for (let i = 0; i < getAllJobs.length; i++) {
          if (getAllJobs[i].jobId === num) {
              setOneJob(getAllJobs[i])
          }
      }
  }

  //started filters by inputs
  function filterByInputs(keyword, region, category) {
      let filteredArrByInputs = [];
      if (keyword.length !== 0 || region !== "All Regions" || category !== "All Categories") {
          setNeedToFilter(true);
          const allJobs = [...getAllJobs];
          allJobs.map(x => {
              if (region !== "All Regions" && x.region === region) {
                  filteredArrByInputs.push(x)
              }
          })
      }
  }

  return (
    <div className="App">
      <TopLogo/>
        <BrowserRouter>

            <Toolbar/>

            <Routes>
                <Route path="/preview" element={<JobsContext.Provider value={getAllJobs}>
                    <PreviewPage fnSelectOneJob={selectOneJob}/>
                </JobsContext.Provider>}/>
                <Route path="/post-job" element={<PostAJobPage fnPost={postJob}/>}/>
                <Route path="/find-job" element={<FindAJobPage allJobs={getAllJobs} fnSelectOneJob={selectOneJob}/>}/>
                <Route path="/one-job/:title" element={<OneJobPage oneJob={getOneJob}/>}/>
            </Routes>

            <GotQuestion/>
            <Footer/>

        </BrowserRouter>

    </div>
  );
}

export default App;
