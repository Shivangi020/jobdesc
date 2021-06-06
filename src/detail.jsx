import React from "react";

function Detail(){
 return <div  className="more-info">
     <h3>About Internshala</h3>
                <div className="website" ><a className="website-link" href="#">Website</a><span><img class="icon-size"src="Image/link.png"/></span></div>
                <p>
                Internshala is a dot com business with the heart of dot org
                </p>
                <p>
                We are a technology company on a mission to equip students with relevant skills & practical exposure through internships and online training. 
                Imagine a world full of freedom and possibilities. A world where you can discover your passion and turn it into your career. 
                A world where your practical skills matter more than your university degree. 
                A world where you do not have to wait till 21 to taste your first work experience (and get a rude shock that it is nothing like you had to imagine it to be). 
                A world where you graduate fully assured, fully confident, and fully prepared to stake a claim on your place in the world.
                </p>
                <p>
                At Internshala, we are making this dream a reality. Join us!
                </p>
                {/* Detail 2 */}
                <h3>About the work from home job/internship</h3>
                <p>
                In this internship, your primary responsibility would be to provide training support for the 
                Python trainings offered on Internshala Trainings <a href="https://trainings.internshala.com"></a>. In specific, you would work on following:
                <ol>
                    <li>Evaluate students' assignments and project and provide feedback</li>
                    <li>Solve technical queries and doubts of the students enrolled in the training programs through live chat, forum queries, emails and calls</li>
                </ol>
                </p>

                {/* Detail 3 */}
                <h3>Who can apply</h3>
                <ol>
               
                <li>are available for the work from home job/internship.</li>
                <li>can start the work from home job/internship between 7th May'21 and 11th Jun'21</li>
                <li>are available for duration of 3 month</li>
                <li>have relevant skills and interests</li>
                </ol>

                {/* Detail 4 */}
                <h3>Other requirements</h3>
                <ol>
                <li>Must have knowledge of Python GUI</li>
                <li>Must have knowledge of Object Oriented Programming</li>
                </ol>

                {/* Detail 5 */}
                <h3>Perks</h3>
                <div className="tab">
                <span className="round-tab">Certificate</span>
                </div>
                {/* Detail 6 */}
                <h3>Number of openings</h3>
                <p>2</p>
                <div className="btn">
                <button>Apply now</button>
                </div>
        </div>

};

export default Detail;