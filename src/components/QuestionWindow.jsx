import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuestionList from "./QuestionList";
import QuestionsData from "../assets/QuestionsData";
import NextButton from "./NextButton";

const QuestionWindow = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // start from index 0
  const [answers, setAnswers] = useState({}); // Stores selected options by question ID
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); // 3 hours
  const [timerStarted, setTimerStarted] = useState(false);

  const currentQuestion = QuestionsData[currentQuestionIndex];

  useEffect(() => {
    let timer;
    if (timerStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [timerStarted, timeLeft]);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const goToQuestion = (index) => {
    if (index >= 0 && index < QuestionsData.length) {
      setCurrentQuestionIndex(index);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <span className="bg-white p-4 text-center mx-20 my-10 w-80 h-20 text-3xl">
          Section1:Maths
        </span>
        <div className="bg-amber-300 h-25 text-3xl mt-5 w-100 mr-10 text-center p-4">
          MCQ
        </div>
      </div>

      {!timerStarted ? (
        <div className="text-center mt-10">
          <button
            onClick={() => setTimerStarted(true)}
            className="bg-amber-300 text-black font-bold py-3 px-10 rounded-[20px]"
          >
            Start Exam
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <Question
              index={currentQuestion.id}
              text={currentQuestion.text}
              options={currentQuestion.options}
              selectedOption={answers[currentQuestion.id]}
              onSelect={(optionIndex) =>
                handleAnswerSelect(currentQuestion.id, optionIndex)
              }
            />
            <QuestionList
              getQuestion={(index) => goToQuestion(index)}
              timeLeft={formatTime(timeLeft)}
              timerStarted={timerStarted}
            />
          </div>

          <NextButton
            getQuestion={(index) => goToQuestion(index)}
            index={currentQuestionIndex}
          />
        </>
      )}
    </>
  );
};

export default QuestionWindow;
