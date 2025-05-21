import { useState } from 'react';
import Logo from '../../assets/Images/logo.png';
import './sideBar.css';
import { Link } from 'react-router-dom';
import chartImg from '../../assets/Images/Chart1.png';
import logoutImg from '../../assets/Images/logout.png';
import settingImg from '../../assets/Images/setting-2.png';
import helpImg from '../../assets/Images/noun-89103 1.png';
import usersImg from '../../assets/Images/Users.png';
import document from '../../assets/Images/Document.png';
import vector from '../../assets/Images/Vector2.png';
import activity from '../../assets/Images/Activity2.png';
import sequenceImg from '../../assets/Images/Group 2898481.png';
import chartsvg from '../../assets/Images/Chartsvg.svg';
import bagsvg from '../../assets/Images/Bag.svg'

type MenuKey = 'instruments' | 'chromeleon';

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState({
    instruments: false,
    chromeleon: false,
  });
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
    setActiveItem(menu);
  };

  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className='sidebar-wrapper'>
        <ul className="sidebar-menu">
          <li>
            <div
              className={`d-flex justify-content-start align-items-center gap-3 menu-list menu-toggle ${activeItem === 'instruments' ? 'active' : ''}`}
              onClick={() => toggleMenu('instruments')}
            >
              <img src={chartsvg} alt="icon" />
              <span>All Instruments</span>
            </div>
            {openMenu.instruments && (
              <ul className="submenu">
                <li>
                  <div onClick={() => toggleMenu('chromeleon')}
                    className={`d-flex justify-content-start align-items-center gap-3 menu-list menu-toggle ${activeItem === "chromeleon" ? 'active': ''}`}>
                    <img src={bagsvg} />
                    <span>Chromeleon</span>
                  </div>
                  {openMenu.chromeleon && (
                    <ul className="submenu">
                      <li>
                        <Link to="/chromeleon/link1"
                          className="d-flex justify-content-start align-items-center gap-3 menu-list"
                        >
                          <img src={sequenceImg} />
                          <span>Sequence...</span>
                        </Link>

                      </li>
                      <li>
                        <Link
                          to="/chromeleon/link2"
                          className="d-flex justify-content-start align-items-center gap-3 menu-list"
                        >
                          <img src={vector} alt="Injection" />
                          <span>Injection</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/chromeleon/link2"
                          className="d-flex justify-content-start align-items-center gap-3 menu-list"
                        >
                          <img src={activity} />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div className='d-flex justify-content-start align-items-center gap-3'>
                    <img src={chartImg} />
                    <span>Lab Solutions</span>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-start align-items-center gap-3'>
                    <img src={usersImg} />
                    <span>ICDAS ins</span>
                  </div>
                </li>
                <li>
                  <div className='d-flex justify-content-start align-items-center gap-3'>
                    <img src={document} />
                    <span>LIMS ins</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div className='d-flex justify-content-start align-items-center gap-3'>
              <img src={helpImg} alt="icon" />
              <span>Help</span>
            </div>
          </li>
          <li>
            <div className='d-flex justify-content-start align-items-center gap-3'>
              <img src={settingImg} alt="icon" />
              <span>Settings</span>
            </div>
          </li>
          <li>
            <div className='d-flex justify-content-start align-items-center gap-3'>
              <img src={logoutImg} alt="icon" />
              <span>Log out</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
