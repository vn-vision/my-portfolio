import React from 'react'
import { FaXTwitter, FaSquareGithub, FaLinkedinIn, FaPhoneVolume,  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SayHi() {
  return (
    <div className="h-fit w-[90%] flex flex-col gap-10 p-5 justify-evenly items-center mx-auto my-[10%] md:my-[5%]">
      <div className="flex flex-col md:flex-row justify-between w-full h-fit p-5 gap-5">

        <div className='flex flex-col gap-20 p-5 w-1/2 justify-between'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl'>Let's build that dream together.</h1>
            <p className='text-2xl'>Start by <a href="mailto:vctrngang@gmail.com"><u className='text-green-400 hover:text-green-300'>Saying Hi</u></a></p>
          </div>
          <span className='flex gap-10 p-5'>
              <a href="https://www.linkedin.com/in/victor-nganga-s-3-d"><FaLinkedinIn /></a>
              <a href="https://github.com/vn-vision"><FaSquareGithub /></a>
              <a href=""><FaXTwitter /></a>
              <a href="mailto:vctrngang@gmail.com"><MdEmail /></a>
              <a href="tel:254114122162"><FaPhoneVolume /></a>
            </span>
        </div>


        <div className='flex flex-col gap-5 p-5 w-1/2 justify-between'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl'>Nairobi Kenya 127.</h1>
              <p className='text-xl'><a href="mailto:vctrngang@gmail.com">vctrngang@gmail.com</a></p>
            </div>

          <div className='flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-5'>
              <i>H - Home</i>
              <i>A - About</i>
              <i>P - Projects</i>
            </div>
            <span className='flex gap-10 p-5'>
              <p> Victor Ng'ang'a </p>
              <p> &copy; All Rights Reserved </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SayHi;