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
        Chez Coach Sportif, nous croyons en l'équilibre entre l'exercice, la
        nutrition et le bien-être mental. Chaque programme que je crée est
        personnalisé en fonction de vos besoins, de vos objectifs et de votre
        emploi du temps. Je m'engage à vous motiver, à vous guider et à vous
        inspirer à chaque étape de votre parcours.
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
      <div className="parallax"></div>
      <div>
        <p>
          N'hésitez pas à explorer notre site pour en savoir plus sur nos
          services, consulter les témoignages de clients et commencer votre
          parcours vers une vie plus saine dès aujourd'hui.
        </p>
        <p>
          Je suis impatient de vous accompagner dans cette aventure
          enrichissante !
        </p>
      </div>
    </div>
  );
};

export default About;
