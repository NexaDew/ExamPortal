import React from 'react'
import Button from './Button';
import QuestionsData from '../assets/QuestionsData';
 const QuestionList = ({getQuestion}) => {

  const numbers = Array.from({ length: QuestionsData.length }, (_, index) => index + 1);
  

  return (
    <div className='bg-amber-300 mt-5 w-100 m-10 ml-5 rounded-xl shadow-xl'>
      <div className='w-full px-30 p-3 bg-white my-5 items-center   rounded-full'>Time Left : 3:00:00</div>
      <div className='grid grid-cols-2 ml-5 sm:grid-cols-3 md:grid-cols-5 gap-4'>
      {numbers.map(number=><Button key={number}  handler={getQuestion} icon={number} />)}
      </div>
    </div>
  )
}

export default QuestionList
