import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

const Stars = ({ stars }) => {
  const renderedStars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < stars) renderedStars.push(<BsStarFill />);
    else renderedStars.push(<BsStar />);
  }
  return <div className="stars">{renderedStars}</div>;
};

export default Stars;
