import React, { useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    setShowPopup(false);
    // Store user's acceptance of cookies in local storage or make an API request
  };

  if (!showPopup) {
    return null; // Render nothing if the pop-up is not shown
  }
  return (
    <>
      <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-gray-600 mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <div className="text-gray-800 text-sm flex-grow">
        <p>Hi there!</p>
        <p>
          Our website is still under development, so you may find some things missing or unfinished. We're working hard to improve it every day, and we appreciate your patience.
        </p>
        <p>
          In the meantime, we hope you enjoy what we have to offer. If you have any feedback or suggestions, please let us know.
        </p>
        <p>Thanks for visiting!</p>
      </div>
      <button
        className="bg-green-500 text-white rounded px-4 py-2 text-sm"
        onClick={handleAccept}
      >
        Accept
      </button>
    </div>
    </>
  );
};

export default Popup;
