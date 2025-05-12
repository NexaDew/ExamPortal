import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen text-white">
      <div className=" w-1/2 p-10 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-[#f9a825] mb-8">
          Please Click on proceed to start exam
        </h2>
        <input
          className="mb-4 px-4 py-2 text-black rounded-none focus:outline-none bg-white"
          type="text"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="mb-4 px-4 py-2 text-black rounded-none focus:outline-none bg-white"
          placeholder="Enter your Id "
        />

        <button className="bg-[#f9a825] text-black font-bold text-lg px-4 py-2 rounded-md w-fit mb-6">
          Start Exam
        </button>

        <div className="bg-[#f9a825] text-black font-bold text-lg px-4 py-2 rounded-none  mb-4 ">
          Instruction
        </div>

        <ul className="list-disc ml-5 space-y-2 text-white font-bold">
          <li>Read questions Properly</li>
          <li>You can switch between questions </li>
          <li>
            Students can mark questions as{" "}
            <span className="text-[#f9a825]">
              Mark for review, save and next, next{" "}
            </span>
          </li>
        </ul>

        <label className="mt-6 flex items-center space-x-2 text-white ">
          <input type="checkbox" className="w-6 h-6 " />
          <span className="text-lg  font-bold">
            I have read all instructions properly{" "}
          </span>
        </label>
        <button className="bg-[#f9a825] text-black font-bold text-lg px-4 py-2 rounded-md w-fit mb-6 mt-5">
          Proceed
        </button>
      </div>

      {/* right side */}

      <div className="w-1/2">
        <img
          src="src\assets\What-Is-Online-Exam-1024x622.png"
          alt="Exam Illustration"
          className="w-half h-half object-cover mt-10 h-100 w-150 ml-20"
        />
      </div>
    </div>
  );
};

export default Home;
