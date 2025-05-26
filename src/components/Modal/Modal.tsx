import React, { useState } from "react";
import "./index.css";
interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      // className="fixed inset-0 w-full h-full sm:w-fit sm:h-fit bg-white shadow"
      // className="fixed inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
      className="fixed inset-0 md:bg-gray-600 md:bg-opacity-50 flex justify-center items-center z-50 w-full h-full sm:w-auto sm:h-auto bg-white"
      onClick={handleOverlayClick}
    >
      <div className="w-full h-full  md:h-auto md:w-auto md:bg-white md:p-6 md:rounded-lg relative overflow-auto">
        <button
          className="absolute top-[26px] right-[24px] text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33398 3.33398L16.6673 16.6673"
              stroke="#E93232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33398 16.666L16.6673 3.33268"
              stroke="#E93232"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
