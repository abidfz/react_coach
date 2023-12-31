import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMessage, successMessage]);

  const sendEmail = () => {
    emailjs
      .send(
        "service_yrhcoua",
        "template_sti3oqf",
        {
          to_name: name,
          from_name: email,
          message: message,
        },
        "user_ubaDpIefjiK4kDSp5tRvA"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccessMessage(
            "Message envoyé ! Je vous recontacterai dès que possible."
          );
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Email sending failed:", error);
          setErrorMessage("Échec de l'envoi de l'email. Veuillez réessayer.");
        }
      );
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail()) {
      setErrorMessage("Adresse e-mail invalide. Veuillez vérifier.");
      return;
    }

    sendEmail();
  };

  return (
    <div className="app__contact section__padding" id="contact">
      <h2>Contact</h2>
      <div className="app__contact-section">
        <div className="app__contact-info">
          <section>
            <p>
              Nous sommes ravis de pouvoir répondre à vos questions, discuter de
              vos objectifs de remise en forme et vous accompagner tout au long
              de votre parcours vers une vie plus saine et active.
            </p>
            <ul>
              <li>
                <span>
                  <IoIosPhonePortrait />
                </span>
                06 66 66 66 66
              </li>
              <li>
                <span>
                  <MdOutlineEmail />
                </span>
                coach.sportif@gmail.com
              </li>
              <li>
                <span>
                  <FaMapMarkerAlt />
                </span>
                1 rue de la paix Paris 75000
              </li>
            </ul>
          </section>
          <section>
            <p>
              Suivez-nous sur les réseaux sociaux pour rester informé des
              dernières actualités, conseils et inspirations fitness.
            </p>
            <div className="app__contact-info-social">
              <div>
                <a href="facebook.com">
                  <FaFacebookF />
                </a>
              </div>
              <div>
                <a href="instagram.com">
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a href="youtube.com">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </section>
        </div>

        <form onSubmit={onSubmit}>
          <input
            className="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre Nom"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
            placeholder="Votre Email"
            required
          />
          <textarea
            name="message"
            className="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="10"
            placeholder="Votre Message"
            required
          />
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          {successMessage && (
            <div style={{ color: "green" }}>{successMessage}</div>
          )}
          <input className="form-btn" type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
