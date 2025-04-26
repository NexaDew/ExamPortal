import React from 'react'
import Option from './Option';

const Question = ({index,text,options}) => {

  return (
    <div className='mx-10 my-5'>
      <div className='flex'>
      <p className='text-white text-4xl'>Q.{index} &nbsp;</p>
      <p className='text-white text-4xl mb-10'>{text}</p>
      </div>
      {options.map((option,index)=><Option key={index} data={index} text={option} />)}
    </div>
  )
}

export default Question;
