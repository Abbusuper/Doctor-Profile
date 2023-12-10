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
        <div className="contactNumber">
          <div className="icon">{/* <img src="icon-phone.png" /> */}</div>
          <div className="phoneNumber">
            <h3 className="titleContact">Our Phone</h3>
            <span>7470999508</span>
          </div>
        </div>
        <div className="contactNumber">
          <div className="icon"></div>
          <div className="phoneNumber">
            <h3 className="titleContact">Our Phone</h3>
            <span>7470999508</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
