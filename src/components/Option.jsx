import React from "react";

const Option = ({ index, text, isSelected, onSelect }) => {
  return (
    <div
      className={`flex w-100 items-center p-3 my-5 rounded-full cursor-pointer ${
        isSelected ? "bg-amber-300" : "bg-white"
      }`}
      onClick={onSelect}
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-amber-300 text-xl">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="ml-10">{text}</span>
    </div>
  );
};

export default Option;
