import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
