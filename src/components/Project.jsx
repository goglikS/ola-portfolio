import React from 'react'

const Project = ({project}) => {
  return (
    <div className="card col" style={{ height:300,width: 300 }}>
  <div className="card-body">
    <h5 className="card-title">{project.title}</h5>
    <p className="card-text">{project.description}</p>
    <a href={project.url} className="bi bi-arrow-up-right-square-fill"> See Full Project</a>
    
  </div>
</div>
  )
}

export default Project