import React from "react";

interface AtmButtonProps {
  value: string;
  onClick: (value: string) => void;
}

const AtmButton: React.FC<AtmButtonProps> = ({ value, onClick }) => {
  return (
    <button
      className="bg-yellow-500 p-3 rounded-lg"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default AtmButton;
