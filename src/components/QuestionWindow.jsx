import React from 'react'
import Question from './Question'
import QuestionList from './QuestionList';
import { useState } from 'react';
import QuestionsData from '../assets/QuestionsData'
import NextButton from './NextButton';

const QuestionWindow = () => {

  const [question,setQuestion] = useState({id:'1',text:'Which of the following is correct option, please select it?',options:['Option1','Option2','Option3','Option4']});

  

  let ind=0 ;
 
  const getQuestion = (index)=>{
    index>QuestionsData.length?index=index%QuestionsData.length:index=index;
      ind=index-1;
      setQuestion(QuestionsData[ind]);
  }

  return (<>
    <div className='flex flex-col md:flex-row justify-between'>
      <span className='bg-white p-4 text-center mx-20 my-10 w-80 h-20 text-3xl'>Section1:Maths</span>
      <div className=' bg-amber-300 h-25 text-3xl mt-5 w-100 mr-10 text-center p-4'>MCQ</div>
    </div>
    <div className='flex flex-col md:flex-row justify-between'>
      <Question index={question.id} text={question.text} options={question.options}/>
      <QuestionList getQuestion={getQuestion}  />
    </div>
    <NextButton getQuestion={getQuestion} index={question.id} />
    </>
  )
}

export default QuestionWindow;
