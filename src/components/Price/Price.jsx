import React from "react";
import "./price.css";
import { IoIosFitness } from "react-icons/io";
const Price = () => {
  return (
    <div className="app__price section__padding" id="price">
      <h3>Nos Tarifs</h3>
      <div className="app__price-cards">
        <div className="app__price-card">
          <h4>Entraînement Personnel</h4>
          <ul>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Séance d'une heure
              </div>
              <div className="price">50€</div>
            </li>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Pack de 10 séances
              </div>
              <div className="price">450€</div>
            </li>
          </ul>
        </div>
        <div className="app__price-card">
          <h4>Coaching en Groupe</h4>
          <ul>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Séance d'une heure
              </div>
              <div className="price">
                30€ <span>/personne</span>
              </div>
            </li>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Pack de 10 séances
              </div>
              <div className="price">
                250€ <span>/personne</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="app__price-card">
          <h4>Programme de Remise en Forme Personnalisé</h4>
          <ul>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Évaluation initiale (1H)
              </div>
              <div className="price">60€</div>
            </li>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Plan d'entraînement personnalisé
              </div>
              <div className="price">80€</div>
            </li>
          </ul>
        </div>
        <div className="app__price-card">
          <h4>Suivi Nutritionnel</h4>
          <ul>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Consultation initiale (1H)
              </div>
              <div className="price">70€</div>
            </li>
            <li className="app__price-card_item">
              <div>
                <span>
                  <IoIosFitness />
                </span>
                Plan nutritionnel personnalisé
              </div>
              <div className="price">50€</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Price;
