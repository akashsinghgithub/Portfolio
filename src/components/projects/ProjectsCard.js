import React from "react";

const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="w-full p-4 border rounded-lg shadow-md hover:shadow-lg">
        <img src={src} alt={title} className="w-full h-48 object-cover rounded-md" />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{des}</p>
      </div>
    </a>
  );
};

export default ProjectsCard;
