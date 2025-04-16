import React from 'react'
import FieldCard from '@/app/components/FieldCard';
import { MdOutlineDeveloperMode} from "react-icons/md";
import { AiFillDatabase } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";


function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-5  justify-evenly w-full lg:w-[80%] h-fit m-auto my-[10%] md:my-[5%]">
      <div className='flex flex-col gap-5 text-justify w-full md:w-[45%]'>
        <>
          <p>Who am I ...</p>
          <h2 className="text-gray-200 font-bold text-4xl">
            <p>Hello!</p>
            <p className='text-left'>I'm Victor Ng'ang'a.</p>
          </h2>
        </>
        <p className='text-gray-300 text-xl'>
          Code is my medium. Real-world impact is my goal. I specialize in bringing structure to ambitious ideas.
        </p>
        <p><i>
        With years of experience solving real-world challenges, I’ve collaborated on retail tools, real estate systems, and automation projects.
        I'm curious by nature, mission-driven by choice, and always on a journey to level up my craft — one project, one breakthrough at a time.
        </i></p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[45%]">
        <FieldCard title="Frontend Development" description="I bring interfaces to life, making ideas clickable, responsive and real." projects={5} icon={<FaHtml5/>} />
        <FieldCard title="Backend Development" description="I architect clean, scalable systems that make real-world operations seamless." projects={5} icon={<AiFillDatabase/>} />
        <FieldCard title="Mobile Development" description="I create experiences that fit in your pocket, powered by resilient backend logic." projects={1} icon={<MdOutlineDeveloperMode/>} />
      </div>
    </div>
  )
}

export default AboutMe;