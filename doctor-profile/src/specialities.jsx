import React from "react";

const Specialities = () => {
  const list = [{ specialty: "Ortho" }];
  return (
    <div className="listCon">
      {list.map((item) => (
        <li className="list">
          <span className="specialtyList">{item.specialty}</span>
        </li>
      ))}
    </div>
  );
};

export default Specialities;
