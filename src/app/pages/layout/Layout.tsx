import SideBar from '../side-bar/SideBar';
import Header from '../header/Header';
import './layout.css';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="app-container">
                <SideBar />
                <div className="main-panel">
                    <Header />
                    <div className='content-wrapper'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
