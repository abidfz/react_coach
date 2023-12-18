import React from "react";
import "./price.css";
import { FaCheck } from "react-icons/fa6";
const Price = () => {
  return (
    <div className="app__price section__padding" id="price">
      <h3>Nos Tarifs</h3>
      <div className="app__price-cards">
        <div className="app__price-card">
          <h4>Solo</h4>
          <ul>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
          </ul>
          <div className="app__price-card-footer">
            60€ <span>/personne</span>
          </div>
        </div>
        <div className="app__price-card">
          <h4>Duo</h4>
          <ul>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
          </ul>
          <div className="app__price-card-footer">
            40€ <span>/personne</span>
          </div>
        </div>
        <div className="app__price-card">
          <h4>Trio</h4>
          <ul>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
          </ul>
          <div className="app__price-card-footer">
            30€ <span>/personne</span>
          </div>
        </div>
        <div className="app__price-card">
          <h4>Groupe</h4>
          <ul>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
            <li className="app__price-card_item">
              <span>
                <FaCheck />
              </span>
              list
            </li>
          </ul>
          <div className="app__price-card-footer">
            20€ <span>/personne</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
