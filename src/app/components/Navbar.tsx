import React from 'react'
import { FaLinkedinIn, FaSquareGithub } from 'react-icons/fa6'
import Link from 'next/link'


function Navbar() {
  return (
    <div className='flex flex-col justify-evenly items-center w-full p-3 rounded-md shadow-md shadow-orange-400'>
      <h1 className="text-xl font-bold text-green-400 ">
        Victor Ng'ang'a | vn-vision
      </h1>
      <nav className='flex w-full justify-between gap-5 items-center shadow-lg'>
        <ul className="flex gap-6 justify-evenly items-center text-lg overflow-x-auto rounded-md p-2 border-r-2 border-orange-300">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="#projects" className="hover:text-blue-400 ">Projects</Link></li>
          <li><Link href="#about" className="hover:text-blue-400 ">About</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400 ">Contact</Link></li>
        </ul>
        <span className="flex gap-4">
          <Link href="https://www.linkedin.com/in/victor-nganga-s-3-d"><FaLinkedinIn className='text-orange-400' /></Link>
          <Link href="https://github.com/vn-vision"><FaSquareGithub className="text-orange-400" /></Link>
        </span>
      </nav>
    </div>
  )
}

export default Navbar