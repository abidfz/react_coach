import React from "react";
import "./review.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RxAvatar } from "react-icons/rx";

const Review = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1230 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1229, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
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
              <h3>Sarah L.</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Je suis ravie d'avoir choisi Coach Sportif pour me
              remettre en forme après ma grossesse. Le coach a conçu un
              programme d'entraînement qui correspondait exactement à mes
              besoins post-partum. Les résultats sont incroyables, et je me sens
              plus énergique que jamais. Merci pour votre soutien et votre
              professionnalisme exceptionnels !<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>Thomas B.</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Coach Sportif a changé ma vie ! J'ai perdu 10 kilos
              en trois mois grâce à un programme d'entraînement et de nutrition
              sur mesure. Le coach est incroyablement professionnel et dévoué.
              Les séances sont toujours variées et adaptées à mes besoins. Si
              vous cherchez un coach qui vous pousse à atteindre vos objectifs,
              ne cherchez pas plus loin.<span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>Pierre G.</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>Le coach est bien plus qu'un coach sportif, c'est
              un véritable mentor. Son approche personnalisée m'a permis de
              dépasser mes limites physiques et mentales. Les résultats parlent
              d'eux-mêmes, et je recommande CoachFit à quiconque cherche à
              atteindre ses objectifs de remise en forme de manière durable.
              <span>” </span>
            </p>
          </div>
          <div className="app-caroussel-card">
            <div className="app-caroussel-info">
              <div className="app-caroussel-info-img">
                <RxAvatar />
              </div>
              <h3>Marie D.</h3>
            </div>
            <p className="app-caroussel-container">
              <span>“ </span>J'ai commencé à m'entraîner avec coach sportif il y
              a six mois, et je ne pourrais pas être plus satisfaite des
              résultats. Le coaching personnalisé a vraiment fait la différence
              pour moi. Les séances sont difficiles mais motivantes, et je me
              suis rendu compte que je suis capable de bien plus que je ne le
              pensais. Merci Coach pour m'avoir aidée à retrouver confiance en
              moi !<span>” </span>
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
