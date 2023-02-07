function Project(props) {
    console.log(props.index);
    return (
        <div key = {props.index} className = "project-card">
            <h3>{props.prObj.title}</h3>
            <p>{props.prObj.description}</p>
            <a href={props.prObj.link_github} target="_blank" rel="noreferrer">GitHub link</a>
            <img src={props.prObj.media} alt={props.prObj.title}></img>
        </div>
    )
  }
  
export default Project;

// "link_prod": "https://ikamen.github.io/best_youtube_channels/",
// "link_github": "https://github.com/ikamen/best_youtube_channels",
// "media": 