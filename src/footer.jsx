import React from "react";

function Footer(){
    const date = new Date();

return <div className="footer">
   <div className="footer-box">
            <div className="footer-list">
            <h3 className="by-places">Internships by places</h3>
                <div className="list-items">Internship in India</div>
                <div className="list-items">Internship in Delhi </div>
                <div className="list-items">Internship in Banglore</div>
                <div className="list-items">Internship in Hyderabad</div>
                <div className="list-items">Internship in Mumbai</div>
                <div className="list-items">Internship in Chennai</div>
                <div className="list-items">Internship in Gurgaon</div>
                <div className="list-items">Internship in Kolkata</div>
                <div className="list-items">Virtual Internship </div>

            </div>
            <div className="footer-list">
            <h3 className="by stream">Intenship by Stream</h3>
                <div className="list-items">Computer Science Internship</div>
                <div className="list-items">Electronics Internship</div>
                <div className="list-items">Mechanical Internship</div>
                <div className="list-items">Civil Internship</div>
                <div className="list-items">Marketing Internship</div>
                <div className="list-items">Chemical Internship</div>
                <div className="list-items">Finance Internship</div>
                <div className="list-items">Summer REsearch Fellowship</div>
                <div className="list-items">Campus Ambassador Program</div>
            </div>
            <div className="footer-list">
            <h3 className="training">Online Training
            <span className="contest">    CONTEST</span>
            </h3>
                <div className="list-items">Web Development</div>
                <div className="list-items">Android App development</div>
                <div className="list-items">Prograamming with Python</div>
                <div className="list-items">Data Science</div>
                <div className="list-items">Ethical Hacking</div>
                <div className="list-items">Core Java</div>
                <div className="list-items">Digital Marketing</div>
                <div className="list-items">Advanced Excel</div>
                <div className="list-items">Programming with C & C++</div>
            </div>
            <div className="footer-list">
            <h3 className="about">About Internshala</h3>
                <div className="list-items">About us</div>
                <div className="list-items">We're hiring</div>
                <div className="list-items">Hire interns for your company</div>
                <div className="list-items">Team Dairy</div>
                <div className="list-items">Blog</div>
                <div className="list-items">Our Services</div>
                <div className="list-items">Terms & Conditions</div>
                <div className="list-items">Privacy</div>
                <div className="list-items">Contact us</div>
                </div>
    </div>

    <div className="end-credits">
    <div className="social-media-container">
        <div className="android-app"><p>Get Android App</p></div>
        <img src="/Image/instagram.png" className="social-media-icon"/>
        <img src="/Image/linkedn.png" className="social-media-icon"/>
    </div>
        
        <div>© Copyright {date.getFullYear()} Internshala</div>
    </div>
    
</div>
}

export default Footer;