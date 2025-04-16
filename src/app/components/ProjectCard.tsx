import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFolder2Open } from 'react-icons/bs';

interface ProjectCardProps {
  title: string;
  languages: string[];
  image: string;
  description?: string;
  link?: string;
  isPrivate?: boolean;
  missionCode?: string;
}

function ProjectCard({
  title,
  languages,
  image,
  description,
  link,
  isPrivate = false,
  missionCode = 'OP-' + Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 p-5 rounded-lg border border-green-500/30 bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] text-green-300 shadow-[0_0_12px_#00ffbf15] relative transition-all duration-300 hover:scale-[1.01] ${
        isPrivate ? 'opacity-60 blur-[1px] hover:blur-0 hover:opacity-100 cursor-not-allowed' : ''
      }`}
    >
      {/* Top: Mission Code + Icon */}
      <div className="flex justify-between items-center text-sm font-mono uppercase">
        <span className="tracking-widest text-green-500">Mission: {missionCode}</span>
        <BsFolder2Open className="text-green-400" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold tracking-wide text-white">{title}</h2>

      {/* Languages */}
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <span
            key={lang}
            className="bg-[#00ffbf22] text-xs px-2 py-1 rounded-full border border-green-600 font-mono tracking-tight"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-green-200 font-light">{description}</p>
      )}

      {/* Call to Action */}
      {!isPrivate && link && (
        <Link href={link}>
          <span className="mt-2 inline-block text-xs text-green-400 hover:text-white hover:underline transition">
            Open Mission File →
          </span>
        </Link>
      )}

      {/* Classified Flag */}
      {isPrivate && (
        <p className="text-xs text-yellow-500 italic font-mono">[ CLASSIFIED MISSION FILE ]</p>
      )}
    </div>
  );
}

export default ProjectCard;
