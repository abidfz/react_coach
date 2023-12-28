import React from "react";
import "./header.css";
import coach from "../../assets/coach.png";
const Header = () => {
  return (
    <section className="app__header section__padding" id="home">
      <div className="app__header-img">
        <img src={coach} alt="" />
      </div>
      <div className="app__header-content">
        <h1>Coach</h1>
        <p>
          Je suis un coach sportif certifié, passionné par la transformation
          physique et mentale de mes clients. Fort d'une expérience de 4 années
          dans le domaine du fitness, j'ai aidé de nombreuses personnes à
          repousser leurs limites, à adopter un mode de vie sain et à retrouver
          confiance en elles.
        </p>
      </div>
    </section>
  );
};

export default Header;
