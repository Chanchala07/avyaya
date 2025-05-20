import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Frame 1000003750.png'

const Login = () => {
  return (
    <>
      <div className="login-container">
         <img src={logo} alt="VeggieGo Logo" className="login-logo" />
        <div className="login-outer-box">
          <h1 className="outer-heading">Welcome to Avyaya</h1>
          <p className="outer-subtext">Avyaya is a fast, simple and secure way to avyaya data.  </p>

          <div className="login-right">
            <form className="login-form">
              <h2 className='text-start'>Log In</h2>
              <input type="text" placeholder="Employee Id" />
              <input type="password" placeholder="Password" />

              <div className='d-flex justify-content-end align-items-center'>
                <Link to='/' className='text-color'>Forgot password</Link>
              </div>

              <Link to="/layout/dashboard">
                <button type="submit" className='mt-4 '>Login</button>
              </Link>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
