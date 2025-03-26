import React from 'react'

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 p-5 justify-evenly w-full h-screen">
      <div className='flex flex-col gap-5 text-justify w-full md:w-[45%]'>
        <>
        <p>Who am I ...</p>
        <h2 className="text-gray-200 font-bold text-4xl">
          Hello! I'm Victor Ng'ang'a.
        </h2>
        </>
        <p className='text-gray-300 text-xl'>
          Every great software begins with an even better story.
        </p>
        <p><i>
          Since beginning my journey as a freelance developer nearly 5 years ago, I've done remote work for agencies, startup consoltations and collaborated with talent.
          I'm quietly confident, naturally curious, and perpetually working on improving my chops one project at a time.
          </i></p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[45%]">
      <div className='w-full h-fit rounded flex flex-col gap-5 shadow-md bg-gray-900 hover:bg-gray-600 p-5'>
          <span className='text-lg text-green-400 flex justify-between'>Development</span>
          <p>Create digital products in React/Django/Node.js</p>
          <p><u>3 projects</u></p>
        </div>
        <div className='w-full h-fit rounded flex flex-col gap-5 shadow-md bg-gray-900 p-5 hover:bg-gray-600'>
          <span className='text-lg text-green-400 flex justify-between'>Development</span>
          <p>Create digital products in React/Django/Node.js</p>
          <p><u>3 projects</u></p>
        </div>
        <div className='w-full h-fit rounded flex flex-col gap-5 shadow-md bg-gray-900 p-5 hover:bg-gray-600'>
          <span className='text-lg text-green-400 flex justify-between'>Development</span>
          <p>Create digital products in React/Django/Node.js</p>
          <p><u>3 projects</u></p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;