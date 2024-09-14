import React from "react";
import "./reviews.scss";
import { ReviewCard } from "./ReviewCard";

import review1 from "../../assets/images/review1.svg";
import review2 from "../../assets/images/review2.svg";
import review3 from "../../assets/images/review3.svg";

const reviews = [
  {
    name: "Rohit Mehra",
    desc: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    position: "CFO, XYZ",
    image: review1,
    background: "first-card",
  },
  {
    name: "Alan Turing",
    desc: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    position: "CFO, XYZ",
    image: review2,
    background: "second-card",
  },
  {
    name: "Mark Jacob",
    desc: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
    position: "CEO, XYZ",
    image: review3,
    background: "third-card",
  },
];

export const Reviews = () => {
  return (
    <div id="reviews">
      <h2 className="text-gradient">Our customers love us</h2>
      <div className="reviews-cnt">
        {reviews.map((review, index) => (
          <ReviewCard
            review={review}
            key={index}
            background={review.background}
          />
        ))}
      </div>
    </div>
  );
};
