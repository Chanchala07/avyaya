import './header.css';
import notification from '../../assets/Images/notification.png';
import message from '../../assets/Images/message.png';
import menu from '../../assets/Images/menu.png';
import avatar from '../../assets/Images/Avatar.png'

const Header = ({onMenuClick}: {onMenuClick: () => void}) => {
  return (
    <>
      <div className='header'>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center gap-5">

            <div className='menu' onClick={onMenuClick}>
              <img src={menu} />
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control custom-input"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="menu">
              <img src={message} />
            </div>
            <div className="menu">
              <img src={notification} />
            </div>
            <div className="vertical-line"></div>
            <div className="d-flex align-items-center gap-2">
              <img
                src={avatar}
                alt="User"
                className="user-image"
              />
              <div className="d-flex flex-column text-start">
                <span className="user-name">John Doe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
