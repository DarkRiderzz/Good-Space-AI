import React from "react";
import "./integrations.scss";
import arrow from "../../assets/images/divide-arrow.svg";
// import cardImg from "../assets/card-img1.svg";
import { IntegrationCard } from "./IntegrationCard";
import integration1 from "../../assets/images/integration1.svg";
import integration2 from "../../assets/images/integration2.svg";
import integration3 from "../../assets/images/integration3.svg";

const integrations = [
  {
    icon: integration1,
    title: "HRMS Systems",
    desc1:
      "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.",
    desc2:
      "We are already deeply integrated with PeopleStrong and others are coming up.",
    card: "card-1",
  },
  {
    icon: integration2,
    title: "Finance Systems",
    desc1:
      "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.",
    desc2: "Open APIs available to connect.",
    card: "card-2",
  },
  {
    icon: integration3,
    title: "Single Sign-on Systems",
    desc1:
      "We can integrate to ensure that your users don’t have to log in multiple times into different logins.",
    desc2: "SSO is possible with any system that offers it.",
    card: "card-3",
  },
];

export const Integrations = () => {
  return (
    <div id="integrations">
      <h2 className="text-gradient">Integrations</h2>
      <img src={arrow} className="arrow-img" />
      <div className="cards-cnt">
        {integrations.map((integration) => (
          <IntegrationCard integration={integration} card={integration.card} />
        ))}
      </div>
    </div>
  );
};
