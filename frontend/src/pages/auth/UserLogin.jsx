// import React from 'react';
// import '../../styles/auth-shared.css';
// import axios from 'axios';
// import Button from '../../components/Button';
// import { useNavigate } from 'react-router-dom';
// const API = import.meta.env.VITE_API_URL;
// const UserLogin = () => {

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const response = await axios.post(
//       "http://localhost:3000/api/auth/user/login",
//       // `${API}/api/auth/user/login`,
//        {
//       email,
//       password
//     }, { withCredentials: true });

//     console.log(response.data);

//     navigate("/home"); // Redirect to home after login

//   };

//   return (
//     <>
//      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
//       <Button />
//     </div>
//     <div className="auth-page-wrapper">
//           {/* <div style={{ textAlign: 'center', marginBottom: '12px' }}>
//       <Button />
//     </div> */}
//       <div className="auth-card" role="region" aria-labelledby="user-login-title">
//         <header>
//           <h1 id="user-login-title" className="auth-title">Welcome back</h1>
//           <p className="auth-subtitle">Sign in to continue your food journey.</p>
//         </header>
//         <form className="auth-form" onSubmit={handleSubmit} noValidate>
//           <div className="field-group">
//             <label htmlFor="email">Email</label>
//             <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
//           </div>
//           <div className="field-group">
//             <label htmlFor="password">Password</label>
//             <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
//           </div>
//           <button className="auth-submit" type="submit">Sign In</button>
//         </form>
//         <div className="auth-alt-action">
//           New here? <a href="/user/register">Create account</a>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default UserLogin;
import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import Button from '../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = import.meta.env.VITE_API_URL;

const UserLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // Validation
    if (!email || !password) {
      toast.error('Please fill all fields!');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error('Email must be a valid @gmail.com address!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters!');
      return;
    }

    try {
      const response = await axios.post(
        `${API}/api/auth/user/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      toast.success('Login successful!');

      setTimeout(() => {
        navigate('/home');
      }, 1000);

    } catch (error) {
      console.error(
        'Login Error:',
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message ||
        'Login failed. Please try again!'
      );
    }
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
        <Button />
      </div>

      <div className="auth-page-wrapper">
        <div className="auth-card" role="region" aria-labelledby="user-login-title">
          <header>
            <h1 id="user-login-title" className="auth-title">
              Welcome Back
            </h1>

            <p className="auth-subtitle">
              Sign in to continue your food journey.
            </p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@gmail.com"
                autoComplete="email"
              />
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Minimum 6 characters"
                autoComplete="current-password"
              />
            </div>

            <button className="auth-submit" type="submit">
              Sign In
            </button>
          </form>

          <div className="auth-alt-action">
            New here? <Link to="/user/register">Create account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;