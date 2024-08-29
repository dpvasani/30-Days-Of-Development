import React from 'react'
import dpvasaniImage from '../assets/Dpvasani.jpg';

function card(props, props.btnText="Default Value") {
    // console.log("props",props)
    console.log(props.username)
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
  src={dpvasaniImage}
  alt="Darshan Vasani"
  className="z-0 h-full w-full rounded-md object-cover"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.username || "Dp The Legend"}</h1>
        <p className="mt-2 text-sm text-gray-300">
            Its Very Personal<br />
          Come Back Is <span className='text-violet-800'>Bloody Personal</span>
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {props.btnText};
        </button>
      </div>
    </div> 
  )
}

export default card
