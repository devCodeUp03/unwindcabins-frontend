import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <MdError className="text-[64px]" />
      <h1 className="error-code">404</h1>
      <p className="error-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;