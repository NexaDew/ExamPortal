import React from "react";
import { ArrowBigRightDash, ArrowBigLeftDash, Bookmark } from "lucide-react";

const NextButton = ({ getQuestion, index }) => {
  const mark = () => {
    const selected = document.getElementsByName("color");

    if (selected[index - 1].classList.contains("bg-violet-800")) {
      selected[index - 1].classList.remove("bg-violet-800");
      selected[index - 1].classList.add("bg-green-600");
    } else {
      selected[index - 1].classList.remove("bg-black");
      selected[index - 1].classList.remove("bg-green-600");
      selected[index - 1].classList.add("bg-violet-800");
    }
  };
  const nextQuestion = () => {
    const selected = document.getElementsByName("color");
    selected.forEach((s) => {
      s.classList.remove("bg-green-600");
      s.classList.add("bg-black");
    });
    if (index >= selected.length) {
      index = index % selected.length;
    }
    selected[index].classList.remove("bg-black");
    selected[index].classList.add("bg-green-600");
    getQuestion(parseInt(index) + 1);
  };

  const previousQuestion = () => {
    const selected = document.getElementsByName("color");
    selected.forEach((s) => {
      s.classList.remove("bg-green-600");
      s.classList.add("bg-black");
    });

    let newIndex = index - 2;
    if (newIndex < 0) {
      newIndex = selected.length - 1;
    }

    selected[newIndex].classList.remove("bg-black");
    selected[newIndex].classList.add("bg-green-600");
    getQuestion(newIndex + 1);
  };

  return (
    <div className="flex justify-between mr-20 mb-20">
      <button
        className=" flex bg-white font-bold w-60 h-15 ml-20 rounded-lg items-center pl-7"
        onClick={mark}
      >
        Mark for review
        <Bookmark />
      </button>

      <button
        className=" flex bg-black text-white w-60 h-15 rounded-lg items-center pl-7"
        onClick={previousQuestion}
      >
        Previous Question
        <ArrowBigLeftDash />
      </button>
      <button
        className=" flex bg-black text-white w-60 h-15 rounded-lg items-center pl-7"
        onClick={nextQuestion}
      >
        Next Question
        <ArrowBigRightDash />
      </button>
    </div>
  );
};

export default NextButton;
