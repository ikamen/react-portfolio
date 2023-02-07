import projectsData from "../data/projects.json";
import Project from '../components/Project';

function Projects() {
  console.log("projects page")
    return (
      <>
        <h1>Projects</h1>
        <div className = "projects">
          {projectsData.map( (prObj, index) => {
            console.log("index: " + index);
            return (
              <Project prObj={prObj} index={index} />
            )

          })}
        </div>
      </>
    )
  }
  
  export default Projects;