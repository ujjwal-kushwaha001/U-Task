import React from 'react'
import react from '../assets/1611079.png'
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png'
import '../App.css'

const footer = () => {
  return (
    <>
      <div className="footer w-full py-3 bg-black min-h-[40vh] flex flex-col justify-center items-center">
        <h1 className=' text-amber-50 text-4xl'>Build with</h1>
        <div className="flex m-[20px] gap-4">

          <div className="react-js-div flex flex-col justify-center items-center">
        <img src={react} className='w-[10rem]' alt="" />
        <p className='text-amber-50 text-2xl'>React.js</p>
          </div>

          <div className="tailwind-div flex flex-col justify-center items-center gap-2">
        <img src={tailwind} className='w-[10rem]' alt="" />
        <p className='text-amber-50 text-2xl'>Tailwind CSS</p>
          </div>
        <p></p>
        </div>
      </div>
    </>
  )
}

export default footer
