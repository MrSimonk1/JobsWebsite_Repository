import React from 'react';
import {useParams} from "react-router-dom";
import {ImLocation2} from "react-icons/im";
import {BsFillHouseDoorFill} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {RiArrowRightUpLine} from "react-icons/ri";

const OneJobPage = ({oneJob}) => {

    let {title} = useParams()

    const date = new Date(oneJob.postDate * 1000);
    const hours = date.getHours();

    function getDate(num) {
        const postDate = new Date(num);
        const todaysDate = new Date()
        const daysDifference = Math.floor((todaysDate - postDate) / (1000*60*60*24))
        return daysDifference;
    }

    return (

        <div className="oneJobPage">
            <div className="oneJobInfoTop">
                <h1>{oneJob.jobTitle}</h1>

                <div className="d-flex">
                    <div>
                        <div className="typeJobInfoTop" style={{
                            ...(oneJob.type === "Freelance" && {backgroundColor: "rgb(255,90,95)"}),
                            ...(oneJob.type === "Temporary" && {backgroundColor: "rgb(91,188,46)"}),
                            ...(oneJob.type === "Full Time" && {backgroundColor: "rgb(91,188,46)"}),
                            ...(oneJob.type === "Part Time" && {backgroundColor: "rgb(115,95,238)"}),
                            ...(oneJob.type === "Internship" && {backgroundColor: "rgb(0,178,169)"})
                        }}>
                            {oneJob.type}
                        </div>
                    </div>


                    <div className="region">
                        <ImLocation2/>
                        <h4 style={{color: "rgb(102,102,102)"}}>{oneJob.region}</h4>
                    </div>

                    <div className="borderBoth paddingBoth20">
                        <div>Posted {getDate(oneJob.postDate)} day(s) ago</div>
                    </div>

                    <div>
                        <BsFillHouseDoorFill/>
                        {oneJob.jobTitle}
                    </div>
                </div>

            </div>
            <div className="oneJobInfoBottom">

                <img src={oneJob.featuredImage.length === 0 ?
                    "https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg" :
                    oneJob.featuredImage} alt=""/>


                <div className="categoriesAndProfiles">

                    <div className="categories">
                        <h3>Job Categories</h3>
                        <div> <RiArrowRightUpLine/> {oneJob.category}</div>
                        <h3>Share Posting</h3>
                    </div>

                    <div className="profiles">
                        <h3>Company Social Profiles</h3>
                        <span className="facebookAndLinkedIn">
                            {oneJob.facebook.length > 0 && <p> <span><FaFacebookF/></span> Facebook</p>}
                            {oneJob.linkedin.length > 0 && <p> <span><FaLinkedinIn/></span> Linkedin</p>}
                        </span>

                        <div>
                            <div>
                                <button className="applyBtn">APPLY FOR JOB</button>
                            </div>
                            <div>
                                <button className="bookmarkBtn">LOGIN TO BOOKMARK THIS JOB</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="overview">
                <h2>Overview</h2>
                <img src={oneJob.logo} alt=""/>
                <h3>Company Description</h3>

                {/*need to add company description from object*/}

                <p>Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.

                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.

                    Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.

                    Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.</p>

                <h3>Job Description</h3>

                {/*need to add job description from object*/}

                <p>As Marketing Graphic Designer, your primary responsibility is to assist the Marketing and Social Media team with a variety of graphic design tasks ranging from email, ads, print, and website design. You will be responsible to take a set of instructions, or a stated problem, and produce clean, modern design assets that are within the brand requirements of our company and our products. As part of the process, this person will collaborate with members of the marketing, design and product teams to gain a clear understanding of the campaign expectations, target audience, and product positioning.

                    The right candidate will possess video production and editing skills. You will work with the marketing and social media team in the video production cycle from pre-production planning through post-production editing (video training available).

                    Design work will be completed in a timely fashion, largely unsupervised short of regular design feedback, and meet the stated requirements of the requestor/stakeholder.

                    For website design, a basic level of coding is required in order to turn designs into live websites.</p>

                <h3>Key objectives</h3>

                <ul>
                    <li>Take a set of instructions or a stated problem and produce clean, modern design assets that are within the brand requirements of our company and our products.</li>
                </ul>

                {/*need to add info from object*/}

                <h3>Primary Areas of Accountability</h3>

                <ul>
                    <li>Collaborate with the Marketing Manager to deliver effective, direct response e-mail designs for marketing campaigns</li>
                    <li>Work with stakeholders from sales and marketing to design print materials, including sales brochures and mailers</li>
                    <li>Work closely with the CMO and in-house design team, taking direction on our new website design for corporate and product sites, including writing HTML and CSS</li>
                    <li>Work closely with the CMO and in-house design team to compile the corporate and product family branding style guides (icons, color palettes, etc)</li>
                    <li>Develop design assets for new product launches, including screenshots and icons for app store listings</li>
                    <li>Design on request for various needs across the company, including graphics for e-books, online stores, social accounts, presentations, ads, collateral, etc.</li>
                </ul>

                {/*need to add info from object*/}

                <h3>Required Knowledge, Skills, and Abilities</h3>

                <ul>
                    <li>Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)</li>
                    <li>Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting tool)</li>
                    <li>Cross-browser and platform testing as standard practice</li>
                    <li>Experience using Invision a plus</li>
                    <li>Experience in video production a plus or, at a minimum, a willingness to learn</li>
                </ul>

                {/*need to add info from object*/}

                <h3>Education + Experience</h3>

                <ul>
                    <li>Advanced degree or equivalent experience in graphic and web design</li>
                    <li>3 or more years of professional design experience</li>
                    <li>Direct response email experience
                    </li>
                    <li>Ecommerce website design experience
                    </li>
                    <li>Familiarity with mobile and web apps preferred
                    </li>
                    <li>Excellent communication skills, most notably a demonstrated ability to solicit and address creative and design feedback
                    </li>
                    <li>Must be able to work under pressure and meet deadlines while maintaining a positive attitude and providing exemplary customer service
                    </li>
                    <li>Ability to work independently and to carry out assignments to completion within parameters of instructions given, prescribed routines, and standard accepted practices
                    </li>
                </ul>

                {/*need to add info from object*/}

                <button className="applyBtn">APPLY FOR A JOB</button>


            </div>
        </div>
    );
};

export default OneJobPage;