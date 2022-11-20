import {useRef} from 'react'


function Card({i}) {
  const cardRef = useRef(null);
  return (
    <div id={` tarjeta ${i}`} ref={cardRef} className="bg-red-300 w-50 p-5 m-3 rounded-full" onClick={()=>{
      console.log(cardRef.current);
      cardRef.current.remove()

    }}><p>tarjeta de presentacion</p></div>
  )
}

export default Card