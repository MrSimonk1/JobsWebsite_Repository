import React, {useRef, useState} from 'react';

const PostAJobPage = ({fnPost}) => {

    const email = useRef();
    const company = useRef();
    const jobTitle = useRef();
    const location = useRef();
    const applicationEmail = useRef();
    const region = useRef();
    const type = useRef();
    const category = useRef();
    const featuredImage = useRef();
    const description = useRef();
    const logo = useRef();
    const companyDescription = useRef();
    const facebook = useRef();
    const linkedin = useRef();
    const [getErrorVisibility, setErrorVisibility] = useState("hidden");

    function postJob() {

        if (company.current.value.length > 0
        && applicationEmail.current.value.length > 0
        && category.current.value.length > 0
        && description.current.value.length > 0
            && jobTitle.current.value.length > 0) {
                const postDate = Math.floor(Date.now())
                fnPost(email, company, jobTitle, location, applicationEmail, region, type, category, featuredImage, description, logo, companyDescription, facebook, linkedin, postDate);
        }
        else {
            setErrorVisibility("visible")
        }

    }

    return (
        <div className="postAJobDiv">

            <div className="d-flex f-column">
                <p>HAVE AN ACCOUNT?</p>
                <div className="haveAnAccountDiv">
                    <p>If you don't have an account you can create one below by entering your email address/username.</p>
                    <button className="postSignInBtn">SIGN IN</button>
                </div>
            </div>

            <div className="d-flex f-column">
                <p>YOUR EMAIL</p>
                <input ref={email} type="text" placeholder="you@yourdomain.com"/>
            </div>

            <div className="d-flex f-column">
                <p>PASSWORD</p>
                <input type="password"/>
                <p className="aboutPass">Passwords must be at least 8 characters long.</p>
            </div>

            <div className="d-flex f-column">
                <p>VERIFY PASSWORD</p>
                <input type="password"/>
            </div>

            <div className="d-flex f-column">
                <p>COMPANY</p>
                <input ref={company} type="text"/>
            </div>

            <div className="d-flex f-column">
                <p>JOB TITLE</p>
                <input ref={jobTitle} type="text"/>
            </div>

            <div className="d-flex f-column">
                <p>LOCATION <span className="postOptional">(OPTIONAL)</span></p>
                <input ref={location} type="text" placeholder='e.g. "London"'/>
                <p className="aboutPass">Leave this blank if the location is not important.</p>
            </div>

            <div className="d-flex f-column">
                <p>APPLICATION EMAIL/URL</p>
                <input ref={applicationEmail} type="text" placeholder="Enter an email address or website URL"/>
            </div>

            <div className="d-flex f-column">
                <p>JOB REGION</p>
                <input ref={region} type="text" placeholder="Choose a region..."/>
            </div>

            <div className="d-flex f-column">
                <p>JOB TYPE</p>
                <select ref={type}>
                    <option value="Freelance">Freelance</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Temporary">Temporary</option>
                </select>
            </div>

            <div className="d-flex f-column">
                <p>JOB CATEGORY</p>
                <input ref={category} type="text" placeholder="Choose a category..."/>
            </div>

            <div className="d-flex f-column">
                <p>FEATURED IMAGE <span className="postOptional">(OPTIONAL)</span></p>
                <input ref={featuredImage} type="text"/>
                <p className="aboutPass">Used for the Job Spotlight display</p>
            </div>

            <div className="d-flex f-column">
                <p>DESCRIPTION</p>
                <div className="styleTextarea">
                    asdads
                </div>
                <textarea ref={description}>

                </textarea>
            </div>

            <div className="d-flex f-column">
                <p>LOGO <span className="postOptional">(OPTIONAL)</span></p>
                <input ref={logo} type="text"/>
                <p className="aboutPass">Maximum file size: 2 MB.</p>
            </div>

            <h3>Company Details</h3>

            <div className="d-flex f-column">
                <p>DESCRIPTION <span className="postOptional">(OPTIONAL)</span></p>
                <div className="styleTextarea">
                    asdads
                </div>
                <textarea ref={companyDescription}>

                </textarea>
            </div>

            <div className="d-flex f-column">
                <p>FACEBOOK USERNAME <span className="postOptional">(OPTIONAL)</span></p>
                <input ref={facebook} type="text" placeholder="yourcompany"/>
            </div>

            <div className="d-flex f-column">
                <p>LINKEDIN USERNAME <span className="postOptional">(OPTIONAL)</span></p>
                <input ref={linkedin} type="text" placeholder="yourcompany"/>
            </div>

            <div>
                <button>PREVIEW</button>
                <button onClick={postJob}>SAVE DRAFT</button>
            </div>

            <h2 style={{visibility: `${getErrorVisibility}`}}>Validation Error - please fill all required fields.</h2>

        </div>
    );
};

export default PostAJobPage;