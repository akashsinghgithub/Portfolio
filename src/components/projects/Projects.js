import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Upcoming...."
          src={projectOne}
          link="#" // Add an actual link if available
        />
        <ProjectsCard
          title="Study Notion"
          des="An e-learning platform to enhance education and learning experiences."
          src={projectTwo}
          link="https://study-notionakashsingh-da2ngc2a9-akashsinghgithubs-projects.vercel.app/"
        />
        <ProjectsCard
          title="Chat App"
          des="A real-time chatting application with user authentication and messaging."
          src={projectThree}
          link="https://chat-app-lxj5.onrender.com/"
        />
      </div>
    </section>
  );
}

export default Projects;
