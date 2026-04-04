// import React from 'react';
// import '../../styles/auth-shared.css';
// import axios from 'axios';
// import Button from '../../components/Button';
// import { useNavigate } from 'react-router-dom';
// const API = import.meta.env.VITE_API_URL;
// const FoodPartnerLogin = () => {

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const response = await axios.post(
//       // "http://localhost:3000/api/auth/food-partner/login", 
//       `${API}/api/auth/food-partner/login`,
//       {
//       email,
//       password
//     }, { withCredentials: true });

//     console.log(response.data);

//     navigate("/create-food"); // Redirect to create food page after login

//   };

//   return (
//     <>
//      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
//       <Button />
//     </div>
//     <div className="auth-page-wrapper">
//         {/* <Button /> */}
//           {/* <div style={{ textAlign: 'center', marginBottom: '12px' }}>
//       <Button />
//     </div> */}
//       <div className="auth-card" role="region" aria-labelledby="partner-login-title">
//          {/* <Button /> */}
//         <header>
//           <h1 id="partner-login-title" className="auth-title">Partner login</h1>
//           <p className="auth-subtitle">Access your dashboard and manage orders.</p>
//         </header>
//         <form className="auth-form" onSubmit={handleSubmit} noValidate>
//           <div className="field-group">
//             <label htmlFor="email">Email</label>
//             <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
//           </div>
//           <div className="field-group">
//             <label htmlFor="password">Password</label>
//             <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
//           </div>
//           <button className="auth-submit" type="submit">Sign In</button>
//         </form>
//         <div className="auth-alt-action">
//           New partner? <a href="/food-partner/register">Create an account</a>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default FoodPartnerLogin;
import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_API_URL;

const FoodPartnerLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // 🔹 Frontend validations
    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }

    // Email format check (adjust domain if needed)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Password numeric check (remove if not required)
    const passwordRegex = /^[0-9]+$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password should contain numbers only.");
      return;
    }

    try {
      const response = await axios.post(
        `${API}/api/auth/food-partner/login`,
        { email, password },
        { withCredentials: true }
      );

      // ✅ Success
      toast.success("Login successful!");
      navigate("/create-food");
    } catch (error) {
      // 🔹 Backend errors
      const msg = error.response?.data?.message;

      if (msg) {
        // You can map backend messages to toast
        if (msg.includes("password")) {
          toast.error("Incorrect password. Try again.");
        } else if (msg.includes("email")) {
          toast.error("Email not found. Enter a valid email.");
        } else {
          toast.error(msg);
        }
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
        <Button />
      </div>
      <div className="auth-page-wrapper">
        <div className="auth-card" role="region" aria-labelledby="partner-login-title">
          <header>
            <h1 id="partner-login-title" className="auth-title">Partner login</h1>
            <p className="auth-subtitle">Access your dashboard and manage orders.</p>
          </header>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
            </div>
            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
            </div>
            <button className="auth-submit" type="submit">Sign In</button>
          </form>
          <div className="auth-alt-action">
            New partner? <a href="/food-partner/register">Create an account</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPartnerLogin;