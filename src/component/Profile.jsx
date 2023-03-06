import { Link } from 'react-router-dom'
import '../style/profile.scss'
// import profile from '../../public/myprofile.png'



function Profile() {

  return (
    <div className="profile">
        <Link to='./'>
        <div className="my_image">
          <img src="./image/myprofile.png" alt="" />
        </div>
        
        <div className="desc">
            <span className='myName'>윤선화</span>
            <span className='myJob'>프론트엔드</span>
            
        </div>
        </Link>
    </div>
  )
}

export default Profile