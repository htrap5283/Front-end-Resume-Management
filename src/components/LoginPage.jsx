import React, { useState } from 'react';
import axios from 'axios';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';



const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [validInputs, setValidInputs] = useState({});
  const [loginError, setLoginError] = useState(false);



  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://18.116.50.68:8080/login', {
          username: username,
          password: password,
        });

        if (response.data.message === 'Login successful') {
          handleLogin(username, password);
        } else {
          setLoginError('Invalid username or password');
        }
      } catch (error) {

        setLoginError('An error occurred during login');
      }
    }
  };



  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'password') {
      setPassword(value);
    }
    const newValidInputs = { ...validInputs };
    if (value.trim()) {
      newValidInputs[id] = true;
      const newErrors = { ...errors };
      delete newErrors[id];
      setErrors(newErrors);
    } else {
      delete newValidInputs[id];
    }
    setValidInputs(newValidInputs);
  };



  return (
    <div className="container">
      <section className="emp_details_form LoginPage">
        <div className="form-heading-block">
          <h2 className="my-3 form-heading">HR Login</h2>
        </div>
        <div className="form-container">
          <form onSubmit={handleLoginFormSubmit} className="p-5 form_block">
            <div
              className={`form-group row my-5 d-flex align-items-center justify-content-center ${errors.username ? 'has-error' : ''
                } ${validInputs.username ? 'has-success' : ''}`}
            >
              <label htmlFor="username" className="col-md-4 col-form-label text-start">
                <AccountCircleIcon className="mr-2" />
                Username
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  id="username"
                  className={`form-control ${errors.username ? 'is-invalid' : ''
                    } ${validInputs.username ? 'is-valid' : ''}`}
                  value={username}
                  placeholder="Enter Username"
                  onChange={handleInputChange}
                />
                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
              </div>
            </div>
            <div
              className={`form-group row my-5 d-flex align-items-center justify-content-center ${errors.password ? 'has-error' : ''
                } ${validInputs.password ? 'has-success' : ''}`}
            >
              <label htmlFor="password" className="col-md-4 col-form-label text-start">
                <LockIcon className="mr-2" />
                Password
              </label>
              <div className="col-md-8">
                <input
                  type="password"
                  id="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''
                    } ${validInputs.password ? 'is-valid' : ''}`}
                  value={password}
                  placeholder="Enter Password"
                  onChange={handleInputChange}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
            </div>
            {loginError && (
              <div className="alert alert-danger">
                Username and password do not match. Please try again.
              </div>
            )}
            <div className="form-group row my-5 d-flex align-items-center justify-content-center text-center">
              <button type="submit" className="btn btn-primary">
                <LoginIcon /> Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};



export default LoginPage;
