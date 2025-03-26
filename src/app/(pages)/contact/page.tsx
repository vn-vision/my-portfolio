import React from 'react'

function SayHi() {
  return (
    <div className="h-fit w-[90%] flex flex-col gap-8 justify-evenly items-center mx-auto">
      <div className="flex flex-col md:flex-row justify-evenly w-full h-[80%]">
        <div className='flex flex-col gap-5 p-5'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl'>Let's build that dream together.</h1>
            <p className='text-xl'>Start by <a href="mailto:vctrngang@gmail.com">Saying Hi</a></p>
          </div>
        </div>
        <div className='flex flex-col gap-5 p-5'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl'>Nairobi Kenya 127.</h1>
            <p className='text-xl'><a href="mailto:vctrngang@gmail.com">vctrngang@gmail.com</a></p>
          </div>
          <div className='flex flex-col gap-5'>
            <i>H - Home</i>
            <i>A - About</i>
            <i>P - Projects</i>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse gap-5 p-5'>
        <span className='flex justify-evenly'>
          <p>Victor Ng'ang'a</p>
          <p>&copy; All Rights Reserved</p>
        </span>
        <span className='flex justify-between'>
          <i>X</i>
          <i>G</i>
          <i>F</i>
          <i>X</i>
          <i>I</i>
        </span>
      </div>
    </div>
  )
}

export default SayHi;