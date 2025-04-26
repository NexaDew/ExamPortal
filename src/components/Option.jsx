import React from 'react'

const Option = ({data,text}) => {

  const changeColorMethod = ()=>{

      // const allData = document.getElementsByName('Option');
      // console.log(data);
      const selected = document.getElementsByName("Option");
      selected.forEach(s=>{s.classList.add('bg-white');
      })
      selected[data].classList.remove('bg-white')
      selected[data].classList.add('bg-amber-300')
      // allData.forEach(d=>console.log(d));

  }

  return (

    <div className=' flex w-100 items-center p-3 bg-white my-5   rounded-full' name="Option" key={data} id={data} onClick={changeColorMethod}>
    <span className='w-12 h-12 flex items-center justify-center rounded-full bg-amber-300  text-xl'>
      {String.fromCharCode(65+data)}
    </span>
      <span className='ml-10' >{text}</span>
    </div>
  )
}
export default Option;
