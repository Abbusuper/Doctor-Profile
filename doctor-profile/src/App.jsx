import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./form.css";
import BackgroundImg from "./background";
import DoctorProfile from "./doctorProfile";

function App() {
  return (
    <div className="main">
      <BackgroundImg />
      <DoctorProfile />
      {/* <div className="front"></div> */}
    </div>
  );
}

export default App;
