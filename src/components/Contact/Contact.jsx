import React, { useRef, useState } from "react";
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
  const [messageSuccess, setMessageSuccess] = useState("");

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yrhcoua",
        "template_sti3oqf",
        form.current,
        "user_ubaDpIefjiK4kDSp5tRvA"
      )
      .then(
        (result) => {
          setMessageSuccess(
            "Message envoyé ! Je vous recontacterai dès que possible."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="app__contact section__padding" id="contact">
      <div className="app__contact-info">
        <section>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            sequi
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
          <h3>Suivez-nous</h3>
          <div className="app__contact-info-social">
            <div>
              <a href="facebook.com">
                <FaFacebookF />
              </a>
            </div>
            <div>
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </section>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          ref={nameRef}
          name="user_name"
          placeholder="Votre Nom"
          required
        />
        <input
          type="email"
          className="email"
          name="user_email"
          ref={emailRef}
          placeholder="Votre Email"
          required
        />
        <textarea
          name="message"
          className="message"
          ref={messageRef}
          cols="30"
          rows="10"
          placeholder="Votre Message"
          required
        />

        <input className="form-btn" type="submit" value="Envoyer" />
        {messageSuccess && <div className="success">{messageSuccess}</div>}
      </form>
    </div>
  );
};

export default Contact;
