import React from "react";
import "./review.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RxAvatar } from "react-icons/rx";

const Review = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 970 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 969, min: 551 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="app__review section__padding" id="review">
      <h2>Avis de nos clients</h2>
      <div className="app-caroussel">
        <Carousel responsive={responsive}>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>nom prenom</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit enim ab corporis voluptatum eligendi quibusdam
              fugiat omnis iure porro dolorum?<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>nom prenom</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit enim ab corporis voluptatum eligendi quibusdam
              fugiat omnis iure porro dolorum?<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>nom prenom</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit enim ab corporis voluptatum eligendi quibusdam
              fugiat omnis iure porro dolorum?<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>nom prenom</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit enim ab corporis voluptatum eligendi quibusdam
              fugiat omnis iure porro dolorum?<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>nom prenom</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Reprehenderit enim ab corporis voluptatum eligendi quibusdam
              fugiat omnis iure porro dolorum?<span>” </span>
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
