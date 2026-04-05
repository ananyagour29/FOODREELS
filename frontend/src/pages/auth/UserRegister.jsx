// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../styles/auth-shared.css';
// import axios from 'axios';
// import Button from '../../components/Button';
// import { useNavigate } from 'react-router-dom';
// const API = import.meta.env.VITE_API_URL;
// const UserRegister = () => {

//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const firstName = e.target.firstName.value;
//         const lastName = e.target.lastName.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;


//         const response = await axios.post(
//             // "http://localhost:3000/api/auth/user/register",
//             `${API}/api/auth/user/register`,
//              {
//             fullName: firstName + " " + lastName,
//             email,
//             password
//         },
//         {
//             withCredentials: true
//         })

//         console.log(response.data);

//         navigate("/home")

//     };

//     return (
//         <>
//          <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
//       <Button />
//     </div>
//         <div className="auth-page-wrapper">
//                 {/* <div style={{ textAlign: 'center', marginBottom: '12px' }}>
//       <Button />
//     </div> */}
//             <div className="auth-card" role="region" aria-labelledby="user-register-title">
//                 <header>
//                     <h1 id="user-register-title" className="auth-title">Create your account</h1>
//                     <p className="auth-subtitle">Join to explore and enjoy delicious meals.</p>
//                 </header>
//                 <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
//                     <strong style={{ fontWeight: 600 }}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
//                 </nav>
//                 <form className="auth-form" onSubmit={handleSubmit} noValidate>
//                     <div className="two-col">
//                         <div className="field-group">
//                             <label htmlFor="firstName">First Name</label>
//                             <input id="firstName" name="firstName" placeholder="Jane" autoComplete="given-name" />
//                         </div>
//                         <div className="field-group">
//                             <label htmlFor="lastName">Last Name</label>
//                             <input id="lastName" name="lastName" placeholder="Doe" autoComplete="family-name" />
//                         </div>
//                     </div>
//                     <div className="field-group">
//                         <label htmlFor="email">Email</label>
//                         <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
//                     </div>
//                     <div className="field-group">
//                         <label htmlFor="password">Password</label>
//                         <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="new-password" />
//                     </div>
//                     <button className="auth-submit" type="submit">Sign Up</button>
//                 </form>
//                 <div className="auth-alt-action">
//                     Already have an account? <Link to="/user/login">Sign in</Link>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default UserRegister;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = import.meta.env.VITE_API_URL;

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value.trim();
    const lastName = e.target.lastName.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    // 🔹 Validations
    if (!firstName || !lastName || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Email must be a valid @gmail.com address!");
      return;
    }

    const passwordRegex = /^[0-9]{6}$/; // exactly 6-digit number
    if (!passwordRegex.test(password)) {
      toast.error("Password must be exactly 6 numbers!");
      return;
    }

    try {
      const response = await axios.post(
        `${API}/api/auth/user/register`,
        { fullName: `${firstName} ${lastName}`, email, password },
        { withCredentials: true }
      );

      toast.success("Registration successful!");
      navigate("/home"); // ✅ redirect after success
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || "Registration failed!";
      toast.error(msg);
    }
  };

  return (
    <>
      {/* Back button */}
      <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
        <Button />
      </div>

      <div className="auth-page-wrapper">
        <div className="auth-card" role="region" aria-labelledby="user-register-title">
          {/* Header */}
          <header>
            <h1 id="user-register-title" className="auth-title">Create your account</h1>
            <p className="auth-subtitle">Join to explore and enjoy delicious meals.</p>
          </header>

          {/* Switch between User / Partner */}
          <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
            <strong style={{ fontWeight: 600 }}>Switch:</strong> 
            <Link to="/user/register">User</Link> • 
            <Link to="/food-partner/register">Food partner</Link>
          </nav>

          {/* Form */}
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="two-col">
              <div className="field-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" placeholder="Jane" autoComplete="given-name" />
              </div>
              <div className="field-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" placeholder="Doe" autoComplete="family-name" />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@gmail.com" autoComplete="email" />
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="6-digit numbers only" autoComplete="new-password" />
            </div>

            <button className="auth-submit" type="submit">Sign Up</button>
          </form>

          {/* Already registered */}
          <div className="auth-alt-action">
            Already have an account? <Link to="/user/login">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;