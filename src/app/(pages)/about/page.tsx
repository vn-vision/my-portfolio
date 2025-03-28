import React from 'react'
import FieldCard from '@/app/components/FieldCard';
import { MdOutlineDeveloperMode} from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";


function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5 p-10 justify-evenly w-[90%] h-fit m-auto my-[10%] md:my-[5%]">
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
        <FieldCard title="Frontend Development" description="I like to code things from scratch, and enjoy bringing ideas to life in the browser." projects={10} icon={<FaHtml5/>} />
        <FieldCard title="Backend Development" description="I like to code things from scratch, and enjoy bringing ideas to life in the browser." projects={10} icon={<AiFillDatabase/>} />
        <FieldCard title="Mobile Development" description="I like to code things from scratch, and enjoy bringing ideas to life in the browser." projects={10} icon={<MdOutlineDeveloperMode/>} />
      </div>
    </div>
  )
}

export default AboutMe;