import { useState } from 'react';
import Logo from '../../assets/Images/logo.png';
import './sideBar.css';

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubMenu = (menuName:any) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className='sidebar'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className='sidebar-wrapper'>
        {/* <ul className="sidebar-menu">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <div className="menu-item" onClick={() => toggleSubMenu('projects')}>
              Projects
              <span className="arrow">{openMenu === 'projects' ? '▲' : '▼'}</span>
            </div>
            {openMenu === 'projects' && (
              <ul className="submenu">
                <li><a href="#active-projects">Active Projects</a></li>
                <li><a href="#archived-projects">Archived Projects</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default SideBar;
