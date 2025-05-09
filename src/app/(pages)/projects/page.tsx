import React from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import {projects} from '@/app/data/MyProjects';

function MyProjects() {
  return (
    <div className="flex flex-col gap-10 w-full lg:w-[80%] m-auto my-[10%] h-fit overflow-y-auto p-5">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Latest Missions</h1>
        <p className="text-lg text-gray-400">From automation to insights — code built for impact.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>
          Some missions are classified. To unlock access,
          <a href="mailto:vctrngang@gmail.com" className="text-teal-400 underline ml-1">
            start briefing
          </a>.
        </p>
      </div>
    </div>
  );
}

export default MyProjects;
