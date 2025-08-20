import React from "react";
import logo from "../../assets/img/logo/get-skill/logo.png";

interface SpinnerProps {
    animateOut?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ animateOut }) => {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div
                className={`relative w-16 h-16 transform transition-transform duration-500 ${
                    animateOut ? "scale-125 opacity-0" : "scale-100 opacity-100"
                }`}
            >
                <div className="absolute inset-0 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin" />
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Spinner;