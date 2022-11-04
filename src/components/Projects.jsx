import React from "react";
import data from "../helpers/data";
import Project from "./Project";

const Projects = () => {
    return (
        <ul className="row row-cols-4">
          {data.map((project) => {
            return (
              <Project
                key={project.id}
                project={project}
              />
            );
          })}
        </ul>
      );
};

export default Projects;
