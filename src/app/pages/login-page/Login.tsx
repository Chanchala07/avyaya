import './login.css';
import avyayaIcon from '../../assets/Images/avyaya-icon.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className='avyaya-text'>
            <img src={avyayaIcon} alt="Logo" className="login-logo" />
            <span className="login-title">AVYAYA</span>
          </div>
          <h2>Welcome to Avyaya Early
            Warning System</h2>
        </div>

        <div className="login-right">
          <form className="login-form">
            <h2 className='text-start'>Log In</h2>
            <input type="text" placeholder="Employee Id" />
            <input type="password" placeholder="Password" />

            <div className='d-flex justify-content-between align-items-center'>
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label">
                  Remember for 30 days
                </label>
              </div>
              <Link to='/' className=''>Forgot password</Link>
            </div>
            <Link to="/layout/dashboard">
              <button type="submit" className='mt-4'>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
