import React from 'react';
import {AiOutlinePlus} from "react-icons/ai"

const RecentArticlesPreview = () => {
    return (
        <div className="recentArticlesPreview">
            <h1>Recent News Articles</h1>
            <h4>Fresh job related news content posted each day.</h4>
            <div className="allArticles">
                <div className="oneArticle grow1">
                    <div className="overlay">
                        <div>
                            <AiOutlinePlus/>
                        </div>
                        <img src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-327.jpg" alt=""/>
                    </div>
                    <h3 className="articleHeadline">The Best (and Worst) Canadian Merchant Account Providers</h3>
                    <h4 className="articleDate">March 29, 2012 <span className="comments">0 comments</span></h4>
                    <h4 className="aboutArticle">A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is</h4>
                    <button>CONTINUE READING</button>
                </div>

                <div className="oneArticle grow1">
                    <div className="overlay">
                        <div>
                            <AiOutlinePlus/>
                        </div>
                        <img src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-432.jpg" alt=""/>
                    </div>
                    <h3 className="articleHeadline">Do you have a job that the average person doesn’t even know exists?</h3>
                    <h4 className="articleDate">March 22, 2016 <span className="comments">0 comments</span></h4>
                    <h4 className="aboutArticle">A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is</h4>
                    <button>CONTINUE READING</button>
                </div>

                <div className="oneArticle grow1">
                    <div className="overlay">
                        <div>
                            <AiOutlinePlus/>
                        </div>
                        <img src="https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-345.jpg" alt=""/>
                    </div>
                    <h3 className="articleHeadline">DigitalOcean launches first Canadian data centre in Toronto</h3>
                    <h4 className="articleDate">February 29, 2016 <span className="comments">0 comments</span></h4>
                    <h4 className="aboutArticle">A job is a regular activity performed in exchange for payment. A person usually begins a job by becoming an employee, volunteering, or starting a business. The duration of a job may range from an hour (in the case of odd jobs) to a lifetime (in the case of some judges). If a person is</h4>
                    <button>CONTINUE READING</button>
                </div>
            </div>
        </div>
    );
};

export default RecentArticlesPreview;