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
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione
          ipsum voluptatem?
        </p>
      </div>
    </section>
  );
};

export default Header;
