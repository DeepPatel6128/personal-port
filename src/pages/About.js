import React from "react";
import Card from "../components/Card";
import Personalinfo from "../components/Personalinfo";
import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="about-container">
      <div className="overlay"></div>
      <div className="top-block">
        <div className="resume-title top-title">resume</div>
        <div className="about-head top-head">about me</div>
      </div>
      <div className="per-info-container">
        <div className="sections">
          <div className="section-1">
            <Personalinfo />
            <Card />
          </div>
          <div className="section-2">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}
