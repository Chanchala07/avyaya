import './splash.css'
import logo from '../../assets/Images/shared image.jpg';

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