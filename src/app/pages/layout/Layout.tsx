import SideBar from '../side-bar/SideBar';
import Header from '../header/Header';
import './layout.css';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };
 
    return (
        <>
            <div className="app-container">
                {sidebarVisible && <SideBar />}
                <div className={`main-panel ${sidebarVisible ? '' : 'full-width'}`}>
                    <Header onMenuClick={toggleSidebar} />
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
