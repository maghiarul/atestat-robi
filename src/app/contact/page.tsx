"use client";

import React, { useState, useRef } from "react";
import "./contact.scss";
import Image from "next/image";
import emailjs, { send } from "@emailjs/browser";

import contactEmail from "../../assets/images/email-icon.svg";
import contactName from "../../assets/images/username-icon.svg";
import contactText from "../../assets/images/text-icon.svg";

function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function sendEmail() {
    emailjs.send("service_wi62jzl", "template_2vsf42b", {
      message: `${text}`,
      name: `${name}`,
      email: `${email}`,
    });
  }

  return (
    <div className="container">
      <form
        className="contact-form"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="030423bf-d0a7-4b9e-ac27-ea44f7ca52c2"
        />
        <h1>Contacteaz&#259;-ne</h1>
        <div className="lmao">
          <div className="email can">
            <label>E-mail</label>
            <Image
              src={contactEmail}
              width={24}
              height={24}
              alt="lol"
              className="icon"
            />
            <input
              id="email"
              name="email"
              required
              type="email"
              maxLength={100}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="name can">
            <label>Nume</label>
            <Image
              src={contactName}
              width={24}
              height={24}
              alt="lol"
              className="icon"
            />
            <input
              id="name"
              required
              name="name"
              type="text"
              maxLength={100}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="text can">
          <label>Text</label>
          <Image
            src={contactText}
            width={24}
            height={24}
            alt="lol"
            className="icon"
          />
          <textarea
            required
            name="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">Trimite !</button>
      </form>
    </div>
  );
}

export default Page;
