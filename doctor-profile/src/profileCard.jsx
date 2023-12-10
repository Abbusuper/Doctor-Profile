import React from "react";

const ProfileCard = () => {
  return (
    <>
      <div className="profileCard">
        <div className="profileImg"></div>
        <div className="profileDetails">
          <h4 className="docName">Dr Name</h4>
          <span className="rating">5 stars</span>
          <h4 className="docSpecialty">Dr Specialty</h4>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
