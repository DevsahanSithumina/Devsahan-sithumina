import React from "react";
import EducationCard from "../sub/EducationCard";

const Education = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Education"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Educations
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <EducationCard
          src="/sliit-logo.png"
          title="Srilanka Information Institute"
          description="As a SLIIT student our 2nd year ITP project we do that project. it based on java. "
        />
        
    
        
      </div>
    </div>
  );
};

export default Education;