import React from 'react'
import { IconType } from 'react-icons'

type FieldCardProps = {
    title: string;
    description: string;
    projects: number;
    icon: IconType;
}
function FieldCard({title, description, projects, icon: Icon}: FieldCardProps) {
  return (
    <div className='w-full h-fit rounded flex flex-col gap-5 shadow-md bg-gray-900 p-5 hover:bg-gray-600'>
    <span className='text-lg text-green-400 flex justify-between'>
        <h2>{title}</h2>
        <Icon />
        </span>
    <p>{description}</p>
    <p><u>{projects} projects</u></p>
  </div>
  )
}

export default FieldCard