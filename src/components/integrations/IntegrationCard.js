import React from "react";
import "./integrationcard.scss";

export const IntegrationCard = ({ integration, card }) => {
  return (
    <div id="integration-card" className={`${card}`}>
      <div className="card-header">
        <img src={integration.icon} alt="image" className="card-icon" />
        <p>{integration.title}</p>
      </div>
      <div className="content-box">
        <p>{integration.desc1}</p>
        <br />
        <br />
        <p>{integration.desc2}</p>
      </div>
    </div>
  );
};
