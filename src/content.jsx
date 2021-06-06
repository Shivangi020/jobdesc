import React from "react";
import Alert from "./alert";
import Detail from "./detail";

function Content(){
return <div className="detail">
    
    <div className="title"><h1 className="heading">Python Teaching Assistant (Virtual) 
        work from home job/internship at Internshala 
        </h1><span><button>Apply now</button></span></div>

    <div className="detail-box">
        <h3>Python Teaching Assistant (Virtual)</h3>
        <p className="internshala">Internshala</p>
        
        <div  className="work-from-icon-heading">
            <div className=" icon-size"><img className="home-icon" src="/Image/home.png"/></div><span className="icon-name">Work from home</span>
        </div>
            <div className="info-contain">
               
                <div className="info-icons">
                        <div className="icon-heading">
                            <div className=" icon-size"><img className="start-icon" src="./Image/start.png"/></div><span className="icon-name" >Start Date </span>
                        </div>
                    <div>Immediatly</div>
                    
                </div>
                <div className="info-icons">
                    <div className="icon-heading">
                          <div className=" icon-size"><img src="/Image/duration.png" className="duration-icon"/></div><span  className="icon-name" >Duration</span>
                    </div>   
                    <div> 3 Months</div>
                </div>
                <div className="info-icons">
                    <div  className="icon-heading">
                           <div className="icon-size"><img src="/Image/stipend.png" className="stipend-icon "/></div><span className="icon-name" >Stipend </span>
                    </div>
                    <div>₹3000/month</div>
                </div>
                <div className="info-icons">
                    <div  className="icon-heading">
                           <div className="icon-size"><img src="./Image/apply.png" className="apply-icon "/></div><span  className="icon-name">Apply by</span>
                    </div>
                    <div>20 Jun'21</div>
                </div>

            </div>
        <div class="tab">
            <span className="round-tab" > Internship</span>
            <span className="round-tab" >Part time allowed</span>
        </div>
        <div className="applicants-heading-icons">
        <div className=" icon-size"><img src="./Image/applicants.png" className="applicants-icon"/></div><span  className="icon-name">100 applicants</span>
        </div>
         
        <Detail/>
    </div>
      
    <Alert/>  
 </div>    

 

}


export default Content;