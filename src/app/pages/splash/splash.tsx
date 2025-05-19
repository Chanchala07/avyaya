import './splash.css'
import logo from '../../assets/Images/splash_logo.png';

const splash = () => {
  return (
    <>
        <div className='screen'>
            <img src={logo} className='logo-splash'/>
        </div>
    </>
  )
}

export default splash
