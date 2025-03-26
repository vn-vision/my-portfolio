import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col justify-evenly items-center shadow-sm shadow-red-300  w-[100%] p-4 rounded-md'>
        <h1 className="text-xl font-bold">
            Victor Ng'ang'a | vn-vision
        </h1>
        <nav className='flex w-full justify-between gap-5 items-center'>
            <ul className="flex gap-6 justify-evenly items-center text-lg overflow-x-auto rounded-md p-2">
              <li><a href="/" className="hover:text-blue-400 shadow-sm">Home</a></li>
              <li><a href="/projects" className="hover:text-blue-400 shadow-sm">Projects</a></li>
              <li><a href="/about" className="hover:text-blue-400 shadow-sm">About</a></li>
              <li><a href="/contact" className="hover:text-blue-400 shadow-sm">Contact</a></li>
            </ul>
            <span className="flex gap-4 shadow-lg">
              <a href="https://github.com/vn-vision" className="hover:text-blue-400 shadow-md">G</a>
              <a href="https://twitter.com/vn_vision" className="hover:text-blue-400 shadow-md">T</a>
            </span>
          </nav>
    </div>
  )
}

export default Navbar