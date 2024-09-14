import React from "react";
import "./reviewcard.scss";

export const ReviewCard = ({ review, background }) => {
  return (
    <div id="review-card" className={`${background}`}>
      <p>{review.desc}</p>
      <div>
        <img src={review.image} alt="review-img" />
        <div className="name-position">
          <p className="name">{review.name}</p>
          <p className="position">{review.position}</p>
        </div>
      </div>
    </div>
  );
};
