import React from "react";
import Specialities from "./specialities";

const DocOverview = () => {
  return (
    <div className="Overview">
      <div className="cardOverview">
        <h4 className="headingOverview">OverView</h4>
        <h4 className="headingOverview opacity">OverView</h4>
        <h4 className="headingOverview noBrd opacity">OverView</h4>
      </div>
      <div className="textOverview">
        <h2 className="titleOverview">Overview Of Dr Name</h2>
        <p className="contentOverview">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          officiis, ipsum excepturi, laboriosam ex hic accusamus fugiat sed
          perferendis cupiditate quasi animi ab suscipit nisi exercitationem
          temporibus minus quo molestias.
          <h2 className="titleOverview">Subspecialities</h2>
          <ul>
            <Specialities />
          </ul>
        </p>
      </div>
    </div>
  );
};

export default DocOverview;
