function Project(props) {
    
    return (
        <div key = {props.index} className = "project-card">
            <h3>{props.prObj.title}</h3>
            <p>{props.prObj.description}</p>
            <a href={props.prObj.link_github} target="_blank" rel="noreferrer">GitHub repository link</a>
            <a href={props.prObj.link_prod} target="_blank" rel="noreferrer">
                <img src={require(`../assets/${props.prObj.media}`)} alt={props.prObj.title}></img>
            </a>
            
        </div>
    )
  }
  
export default Project;
