import React from "react";

function Navigation(){
   return  <div className="nav-container" >
    <nav  className="main-nav">

        <ul className="Navbar">
            <div className="logo">
                <img src="https://internshala.com//favicon.ico?v=5" className="icons"></img>
            </div>
                <li className="nav-opt">Internship</li>
                <div className="training">
                    <li  className="nav-opt">Online Training
                <span className="contest">    CONTEST</span>
                </li>
                </div>
                <li  className="nav-opt">Fresher job</li>
                <li  ><img src="/Image/bookmark.png" className="icons"/></li>
                <li  ><img src="/Image/chat.png" className="icons"/></li>
                <li  ><img  src="/Image/user.png" className="icons"/></li>
        
        </ul>
    </nav>
</div>
}

export default Navigation;