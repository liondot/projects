import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
import '../style/project.scss'
import ProjectCon from '../component/ProjectCon'

function Project() {
  const {data} = useParams()
    console.log(data)

  const projectList = dummy.projects.filter(project => 
    project.data === data
  )


  return (
      <div className='projectBox'>
        <h2>{data === data ? data : ""}</h2>
        <div className='project'>
        {projectList.map((item)=>{
          return (
            <ProjectCon key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            image = {item.image}
            github = {item.github}
            server = {item.server}
            skills = {item.skills}
            detailMain = {item.detailMain}
            fullImg = {item.detailFull}
            period = {item.period}
            state = {item.state}
            toDo = {item.toDo}
            preview = {item.preview}
            pointColor = {item.pointColor}
            />
          )
          })}
        </div>
          </div>
  )
}

export default Project
