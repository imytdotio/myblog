import React from "react";
import { ProjectBlock } from "./ProjectBlock";

/**
 * @author
 * @function Projects
 **/

const Projects = (props) => {
  return (
    <div>
      <h1>Projects Schedule</h1>

      <ProjectBlock title="My Page" desc="Hi, I'm YT." />
      <ProjectBlock
        title="Calculator"
        desc="Originally an assignment, ⬤ may add more feature to it like api fetching -> currency. ⬤ and different convertion."
      />
      <ProjectBlock
        title="Basic TodoList"
        desc="⬤ A simple todo list connecting firebase allow me to add / delete task. ⬤ With desc, time feature."
      />
      <ProjectBlock
        title="LinkTree Clone"
        desc="⬤ Authentication, ⬤ Storage, ⬤ 1 user = 1 linktree.com/[username]"
      />
      <ProjectBlock title="JoyFusion Clone" desc="Try my skill and portfolio" />
      <ProjectBlock
        title="Visualizer automation"
        desc="Occupy audiences' lock screen using live wallpaper. Creator upload, Audiences setup schedule & sees visualizations"
      />
      <ProjectBlock
        title="Todo List"
        desc="Verticap app, upper 3/4 = google calendar style dragging planner & Todo list (swipe), lower 1/4 = pomodoro"
      />
      <ProjectBlock
        title="Room Booking System"
        desc="An easy setup room booking app for small organizations. This project is for practising my skill"
      />
    </div>
  );
};
export default Projects;
