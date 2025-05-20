import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './font.css'
import Login from './app/pages/login-page/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from './app/pages/layout/Layout';
import HomePage from './app/pages/home-page/HomePage';
import Chromeleon from './app/pages/chromeleon/Chromeleon';
import SequenceDetail from './app/pages/sequence-detail/SequenceDetail';
import Splash from './app/pages/splash/splash';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='splash' element={<Splash />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="layout" element={<Layout />}>
            <Route path='dashboard' element={<HomePage />}></Route>
            <Route path='chromeleon' element={<Chromeleon />}></Route>
            <Route path='sequence-detail' element={<SequenceDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
