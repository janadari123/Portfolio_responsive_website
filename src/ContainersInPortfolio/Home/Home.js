import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import AboutMe from './../AboutMe/AboutMe';
import ContactMe from "../ContactMe/ContactMe";
import Courses from "../Courses/Courses";
import Projects from "../Projects/Projects";
import './Home.css'
import Education from "../Education/Education";
import Reference from "../Reference/Reference";
import Languages from "../Languages/Languages";
import Technical_skill from "../TECHNICAL_SKILL/Technical_skill";
import Skill_and_Abilities from "../Skill&Abilities/Skill_and_Abilities";

export default function Home() {
  return (
    <div className="home-container">
        <Profile />
        <AboutMe />
        <Education />
        <Projects />
        <Courses />
        <Technical_skill />
        <Skill_and_Abilities />
        <Languages />
        <ContactMe />
        <Reference />
        <Footer />

    </div>
  )
}
