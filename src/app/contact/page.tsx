"use client";

import React, { useState } from "react";
import "./contact.scss";
import Image from "next/image";

import contactEmail from "../../assets/images/email-icon.svg";
import contactName from "../../assets/images/username-icon.svg";
import contactText from "../../assets/images/text-icon.svg";

function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="contact-form">
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
              required
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
              required
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
          <textarea required onChange={(e) => setText(e.target.value)} />
        </div>
        <button>Trimite !</button>
      </div>
    </div>
  );
}

export default Page;
