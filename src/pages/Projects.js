import projectsData from "../data/projects.json";
import Project from '../components/Project';

function Projects() {
  
    return (
      <>
        <h1 className="project-label">Projects</h1>
        <div className = "projects">
          {projectsData.map( (prObj, index) => {
            return (
              <Project prObj={prObj} index={index} />
            )

          })}
        </div>
      </>
    )
  }
  
  export default Projects;