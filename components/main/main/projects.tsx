import React from "react";
import ProjectCard from "../sub/projectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Localtransportproject.png"
          title="Local Transport Managment System"
          description="As a SLIIT student our 2nd year ITP project we do that project. it based on java. "
        />
        <ProjectCard
          src="/Figmawebproject.png"
          title="UI/UX in Figma "
          description="its our project on figma"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Its my portfolio based in react app.."
        />
         <ProjectCard
          src="/hotelproject.png"
          title="Hotel reservation system"
          description="This website for Ceylon Hotel provides a visually appealing and responsive 
          online presence for the hotel, allowing potential guests to explore amenities, rooms, and services. 
          Built using HTML for the structure, CSS for styling, and JavaScript for interactivity,
           the site offers a smooth and engaging user experience."
        />
        <ProjectCard
          src="/Bookingproject.png"
          title="Hotel reservation system"
          description="This website for Ceylon Hotel provides a visually appealing and responsive 
          online presence for the hotel, allowing potential guests to explore amenities, rooms, and services. 
          Built using HTML for the structure, CSS for styling, and JavaScript for interactivity,
           the site offers a smooth and engaging user experience."
           />
        
      </div>
    </div>
  );
};

export default Projects;