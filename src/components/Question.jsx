import React from "react";
import Option from "./Option";

const Question = ({ index, text, options, selectedOption, onSelect }) => {
  return (
    <div className="mx-10 my-5">
      <div className="flex">
        <p className="text-white text-4xl">Q.{index}&nbsp;</p>
        <p className="text-white text-4xl mb-10">{text}</p>
      </div>
      {options.map((option, i) => (
        <Option
          key={i}
          index={i}
          text={option}
          isSelected={selectedOption === i}
          onSelect={() => onSelect(i)}
        />
      ))}
    </div>
  );
};

export default Question;
