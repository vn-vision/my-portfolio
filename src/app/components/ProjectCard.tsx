import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
    languages: string[]
    image: string
}
function ProjectCard({title, languages, image}: ProjectCardProps) {
    return (
        <div className='flex flex-col gap-5 p-10 bg-gray-900' >
            <span className='flex justify-between'>
                <h2>{title}</h2>
                {languages.length > 0 &&
                <ul>{languages.map(item => (
                    <li key={item}>{item}</li>
                ))}</ul>
                }
                </span>
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className='rounded-lg shadow-md'
            />
        </div>
    )
}

export default ProjectCard