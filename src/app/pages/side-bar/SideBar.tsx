import { useState } from 'react';
import Logo from '../../assets/Images/logo.png';
import './sideBar.css';
import { Link } from 'react-router-dom';
import chartImg from '../../assets/Images/Chart1.png';
import logoutImg from '../../assets/Images/logout.png';
import settingImg from '../../assets/Images/setting-2.png';
import helpImg from '../../assets/Images/noun-89103 1.png';
import bagImg from '../../assets/Images/Bag1.png';
import usersImg from '../../assets/Images/Users.png';
import document from '../../assets/Images/Document.png';
import vector from '../../assets/Images/Vector2.png';
import activity from '../../assets/Images/Activity2.png';
import sequenceImg from '../../assets/Images/Group 2898481.png' 

type MenuKey = 'instruments' | 'chameleon';

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState({
    instruments: false,
    chameleon: false,
  });

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
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
              className='d-flex justify-content-start align-items-center gap-3 menu-toggle'
              onClick={() => toggleMenu('instruments')}
            >
              <img src={chartImg} alt="icon" />
              <span>All Instruments</span>
            </div>
            {openMenu.instruments && (
              <ul className="submenu">
                <li>
                  <div onClick={() => toggleMenu('chameleon')} className="menu-toggle d-flex justify-content-start align-items-center gap-3">
                    <img src={bagImg} />
                    <span>Chromeleon</span>
                  </div>
                  {openMenu.chameleon && (
                    <ul className="submenu">
                      <li>
                        <Link to="/chameleon/link1"
                          className="d-flex justify-content-start align-items-center gap-3"
                        >
                          <img src={sequenceImg} />
                          <span>Sequence...</span>
                        </Link>

                      </li>
                      <li>
                        <Link
                          to="/chameleon/link2"
                          className="d-flex justify-content-start align-items-center gap-3"
                        >
                          <img src={vector} alt="Injection" />
                          <span>Injection</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/chameleon/link2"
                        className="d-flex justify-content-start align-items-center gap-3"
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
