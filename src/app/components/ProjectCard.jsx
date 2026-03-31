import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack = [] }) => {
  return (
    <div className="group relative bg-gradient-to-br from-black via-zinc-900 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden min-h-[500px] flex flex-col">
      {/* Image Section */}
      <div className="relative mb-4 overflow-hidden rounded-2xl">
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 flex-grow">
        <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Badges */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            href={gitUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group/btn"
          >
            <CodeBracketIcon className="h-4 w-4 group-hover/btn:text-blue-400 transition-colors" />
            <span className="text-sm font-medium">Code</span>
          </Link>
          <Link
            href={previewUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group/btn"
          >
            <EyeIcon className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
            <span className="text-sm font-medium">Live Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
