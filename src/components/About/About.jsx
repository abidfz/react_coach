import React from "react";
import "./about.css";
import {
  MdOutlineFitnessCenter,
  MdSportsGymnastics,
  MdOutlineEditCalendar,
} from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="app__about section__padding" id="about">
      <h2>À propos de moi</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At veritatis
        quis autem pariatur reiciendis, facere, aliquid laudantium cum modi
        necessitatibus sunt odio corporis? Quis sunt officiis ratione fuga
        recusandae sed a quae iure corrupti ea repellendus aliquid impedit
        nesciunt, dolore incidunt velit, mollitia quas! Laborum tempore fugit
        laudantium expedita temporibus.
      </p>
      <ul className="app__about-cards">
        <li className="app__about-card">
          <div className="app__about-card-img">
            <LiaChalkboardTeacherSolid />
          </div>
          <div className="app__about-card-content">
            <h3>Programme</h3>
            <p>
              Programme d’entraînement sur-mesure et suivi personnalisé à
              distance
            </p>
          </div>
        </li>
        <li className="app__about-card">
          <div className="app__about-card-img">
            <MdOutlineFitnessCenter />
          </div>
          <div className="app__about-card-content">
            <h3>Coaching</h3>
            <p>
              Entraînement personnalisé, en solo, en duo ou en petit groupe pour
              atteindre vos objectifs
            </p>
          </div>
        </li>
        <li className="app__about-card">
          <div className="app__about-card-img">
            <MdOutlineEditCalendar />
          </div>
          <div className="app__about-card-content">
            <h3>Bilan et suivi</h3>
            <p>
              Accompagnement et suivi régulier pour une pratique sportive
              optimale et efficace
            </p>
          </div>
        </li>
        <li className="app__about-card">
          <div className="app__about-card-img">
            <MdSportsGymnastics />
          </div>
          <div className="app__about-card-content">
            <h3>Séances</h3>
            <p>
              Séances ciblées à réaliser en toute liberté chez vous ou dans
              votre club de gym
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
