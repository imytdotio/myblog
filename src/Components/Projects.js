import React from "react";
import { ProjectBlock } from "./ProjectBlock";

/**
 * @author
 * @function Projects
 **/

const Projects = (props) => {
  return (
    <div>
      <h1>Projects</h1>

      <ProjectBlock title="My Page" desc="bye" />
      <ProjectBlock title="Visualizer automation" desc="bye" />
      <ProjectBlock title="Todo List" desc="bye" />
      <ProjectBlock title="Room Booking System" desc="bye" />
    </div>
  );
};
export default Projects;
