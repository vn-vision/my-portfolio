import React from 'react'
import Image from 'next/image'

function MyProjects() {
  return (
    <div className="flex flex-col md:flex-row w-[90%] m-auto min-h-screen gap-10 p-10 my-[10%] md:my-[5%]">
      <div className='flex flex-col w-full md:w-1/2 gap-10 justify-evenly h-fit overflow-y-auto'>
      <div className='flex flex-col gap-5 text-center'>
        <h1 className='text-4xl font-bold'>Latest Works</h1>
        <p className='text-lg'>Here are some of the projects I have worked on</p>
      </div>
      <div className='flex flex-col gap-5 p-10 bg-gray-900'>
        <span className='flex justify-between'><h2>Project 1</h2><p><i>Javascript</i> <i>Python</i></p></span>
        <Image
          src='/vercel.svg'
          alt='project1'
          width={200}
          height={200}
          className='rounded-lg shadow-md'
        />
      </div>
      <div className="flex flex-col gap-5 p-5 text-center">
        <h2 className='text-2xl'>ALL PROJECTS</h2>
        <p>Some projects are not public by NDA, if you want to see more <a href="tel:254">contract</a></p>
      </div>
      </div>
      <div className='flex flex-col w-full md:w-1/2 h-screen overflow-y-auto gap-5'>
      <div className='flex flex-col gap-5 p-10 bg-gray-900' >
        <span className='flex justify-between'><h2>Project 1</h2><p><i>Javascript</i> <i>Python</i></p></span>
        <Image
          src='/vercel.svg'
          alt='project1'
          width={200}
          height={200}
          className='rounded-lg shadow-md'
        />
      </div>
      <div className='flex flex-col gap-5 p-10 bg-gray-900' >
        <span className='flex justify-between'><h2>Project 1</h2><p><i>Javascript</i> <i>Python</i></p></span>
        <Image
          src='/vercel.svg'
          alt='project1'
          width={200}
          height={200}
          className='rounded-lg shadow-md'
        />
      </div>
      <div className='flex flex-col gap-5 p-10 bg-gray-900' >
        <span className='flex justify-between'><h2>Project 1</h2><p><i>Javascript</i> <i>Python</i></p></span>
        <Image
          src='/vercel.svg'
          alt='project1'
          width={200}
          height={200}
          className='rounded-lg shadow-md'
        />
      </div>
      </div>
    </div>
  )
}

export default MyProjects;