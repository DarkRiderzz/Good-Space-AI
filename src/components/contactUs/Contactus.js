import React from "react";
import "./contactus.scss";
import { Form } from "./../common/Form";

export const ContactUs = () => {
  return (
    <div id="contact-form">
      <h2 className="text-gradient">
        Manage your travel and expenses the smart way!
      </h2>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
};
