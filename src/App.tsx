import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './app/pages/login-page/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Layout from './app/pages/layout/Layout';
import HomePage from './app/pages/home-page/HomePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="layout" element={<Layout />}>
            <Route path='dashboard' element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
