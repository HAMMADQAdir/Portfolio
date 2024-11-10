'use client'
import React from "react";
import { projects } from "../data";
import { HoverEffect } from "./ui/hover-card-effect";
import { HyperText } from "./ui/hyper-text";

function RecentProject() {
  return (
    <>
      <div className="py-20 lg:w-[90%] " id="projects">
       <div className="flex flex-col justify-center items-center">
       <HyperText text={'Some Selection of'} className="text-3xl font-bold"/>
       <HyperText className=" text-purple-400 text-3xl font-bold" text={'recent projects'}/>
       </div>
       {/* card display */}
       {/* <div className="flex flex-wrap justify-center items-center  mt-5  w-[100%]"> */}
          {/* {projects.map((project) => (
            <div key={project.id} className="text-center">
            
            </div>
          ))} */}
           <HoverEffect items={projects}/>
        
      </div>
    </>
  );
}

export default RecentProject;
