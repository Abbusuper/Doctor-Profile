import React from "react";
import ProfileCard from "./profileCard";
import DocOverview from "./docOverview";

const DoctorProfile = () => {
  return (
    <div className="profileCon">
      <div className="docProfile">
        <ProfileCard />
        <DocOverview />
      </div>
      <div className="contactCard">
        <div className="contactHead">
          <h1>Contact</h1>
        </div>
      <div className="formName">
        <input type="text" className="inp inpName" placeholder="First Name" ></input>
      </div>
      <div className="formEmail">
        <input type="email" className="inp inpEmail" placeholder="Email" ></input>
      </div>
      <div className="formName">
        <textarea type="text" name="" id="" placeholder="Message" className="inp inpMessage"/>
      </div>
      <div className="formName">
        <button className="button-4 contactBtn"> Send Message →</button>
      </div>
     
       
      </div>
    </div>
  );
};

export default DoctorProfile;
