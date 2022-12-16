import React from "react";
import ContactFrom from "../components/ContactFrom";
export default function Contact() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="top-block pink">
        <div className="contact-title top-title">contact</div>
        <div className="contact-head top-head">get in touch</div>
      </div>
      <div className="contact-main-container">
        <ContactFrom />
      </div>
    </div>
  );
}
