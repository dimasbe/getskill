import React from "react";
import logo from "../../assets/img/logo/get-skill/logo.png";

interface SpinnerProps {
  animateOut?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ animateOut }) => {
  return (
    <div
      id="preloader"
      className={animateOut ? "fade-out" : ""}
    >
      <div id="loader" className="loader">
        <div className="loader-container">
          <div className="loader-icon">
            <img src={logo} alt="Preloader" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;