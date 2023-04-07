import Main from '../../components/Main/Main'
import Right from '../../components/Right/Right'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>    
      <Sidebar/>
      <Main/>
      <Right/>
    </div>
  )
}

export default Home