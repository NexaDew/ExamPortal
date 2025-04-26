
const Button = ({handler,icon}) =>{


   const data = ()=>{

    const selected = document.getElementsByName("color");
      selected.forEach(s=>{
        s.classList.remove('bg-green-600');
        s.classList.add('bg-black');
      })
      selected[icon-1].classList.remove('bg-black')
      selected[icon-1].classList.add('bg-green-600')
    
      handler(icon);
    }

    return <>

        <button type="radio" name="color" id={icon+"color"} className='bg-black w-10 h-10 grid-cols-4 place-content-around gap-1 text-white rounded-sm'
         onClick={data}>{icon}</button>

    </>
  
}

export default Button;