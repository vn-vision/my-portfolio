import React from 'react'
import { FaXTwitter, FaSquareGithub, FaLinkedinIn, FaPhoneVolume,  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SayHi() {
  return (
    <div className="h-fit w-full lg:w-[80%] flex flex-col gap-10 justify-evenly items-center mx-auto my-[10%] md:my-[5%]">
      <div className="flex flex-col md:flex-row justify-between w-full h-fit p-5 gap-5">

        <div className='flex flex-col gap-20 w-full justify-between'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl'>Let's build that dream together.</h1>
            <p className='text-2xl'>Start by <a href="mailto:vctrngang@gmail.com"><u className='text-green-400 hover:text-green-300'>Saying Hi</u></a></p>
          </div>
          <span className='flex gap-10'>
              <a href="https://www.linkedin.com/in/victor-nganga-s-3-d"><FaLinkedinIn className='text-orange-400' /></a>
              <a href="https://github.com/vn-vision"><FaSquareGithub className='text-orange-400'/></a>
              <a href=""><FaXTwitter className='text-orange-400'/></a>
              <a href="mailto:vctrngang@gmail.com"><MdEmail className='text-orange-400' /></a>
              <a href="tel:254114122162"><FaPhoneVolume className='text-orange-400' /></a>
            </span>
        </div>


        <div className='flex flex-col gap-5 w-full justify-between'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl'>Nairobi Kenya 127.</h1>
              <p className='text-xl'><a href="mailto:vctrngang@gmail.com"><u className='text-green-400 hover:text-green-300'>vctrngang@gmail.com</u></a></p>
            </div>

          <div className='flex flex-col gap-5 justify-between'>
            <div className='flex flex-col gap-5'>
              <a href='/'>H - Home</a>
              <a href='#about'>A - About</a>
              <a href='#projects'>P - Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SayHi;