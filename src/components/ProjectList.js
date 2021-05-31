import React, {useState} from 'react'

export const ProjectList = ({img,title,desc,link}) => {
    const [show, setshow] = useState(false);
    return (
       <a href={link}>
         <div className="project" 
           onMouseEnter={() => setshow(true)}
           onMouseLeave={() => setshow(false)}
           > 
           {show ? (
            <div className="project-content">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
           ):(
               <img src={img}/>
           )}

           </div>
       </a>
    )
}
