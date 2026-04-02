// BlueBackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <>
      <style>
        {`
          .blue-back-btn {
            background-color: #2563eb; /* blue-600 */
            color: white;
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.875rem; /* small text */
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .blue-back-btn:hover {
            background-color: #1d4ed8; /* blue-700 */
          }
        `}
      </style>
      <button className="blue-back-btn" onClick={handleBack}>
        Back
      </button>
    </>
  );
};

export default Button;