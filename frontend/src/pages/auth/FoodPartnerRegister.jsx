
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../../styles/auth-shared.css';
// import axios from 'axios';
// import Button from '../../components/Button';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const API = import.meta.env.VITE_API_URL;

// const FoodPartnerRegister = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const businessName = e.target.businessName.value.trim();
//     const phone = e.target.phone.value.trim();
//     const email = e.target.email.value.trim();
//     const password = e.target.password.value.trim();
//     const address = e.target.address.value.trim();

//     // Validation
//     if (!businessName || !phone || !email || !password || !address) {
//       toast.error("Please fill in all fields!");
//       return;
//     }

//     const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Email must be a valid @gmail.com address!");
//       return;
//     }

//     const passwordRegex = /^[0-9]+$/;
//     if (!passwordRegex.test(password)) {
//       toast.error("Password must contain numbers only!");
//       return;
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//       toast.error("Phone number must be exactly 10 digits!");
//       return;
//     }

//     // Submit form
//     axios.post(`${API}/api/auth/food-partner/register`, {
//       name: businessName,
//       phone,
//       email,
//       password,
//       address
//     }, { withCredentials: true })
//       .then(response => {
//         toast.success("Partner registered successfully!");
//         navigate("/create-food"); // Redirect to create food page
//       })
//       .catch(error => {
//         console.error("Registration error:", error);
//         toast.error("Registration failed. Please try again!");
//       });
//   };

//   return (
//     <>
//       <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
//         <Button />
//       </div>

//       <div className="auth-page-wrapper">
//         <div className="auth-card" role="region" aria-labelledby="partner-register-title">
          
//           {/* Header */}
//           <header>
//             <h1 id="partner-register-title" className="auth-title">Partner sign up</h1>
//             <p className="auth-subtitle">Grow your business with our platform.</p>
//           </header>

//           {/* Switch */}
//           <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
//             <strong style={{ fontWeight: 600 }}>Switch:</strong> 
//             <Link to="/user/register">User</Link> • 
//             <Link to="/food-partner/register">Food partner</Link>
//           </nav>

//           {/* Form */}
//           <form className="auth-form" onSubmit={handleSubmit} noValidate>
//             <div className="field-group">
//               <label htmlFor="businessName">Business Name</label>
//               <input id="businessName" name="businessName" placeholder="Tasty Bites" autoComplete="organization" />
//             </div>

//             <div className="two-col">
//               <div className="field-group">
//                 <label htmlFor="phone">Phone</label>
//                 <input id="phone" name="phone" placeholder="1234567890" autoComplete="tel" />
//               </div>
//             </div>

//             <div className="field-group">
//               <label htmlFor="email">Email</label>
//               <input id="email" name="email" type="email" placeholder="business@gmail.com" autoComplete="email" />
//             </div>

//             <div className="field-group">
//               <label htmlFor="password">Password</label>
//               <input id="password" name="password" type="password" placeholder="Numbers only" autoComplete="new-password" />
//             </div>

//             <div className="field-group">
//               <label htmlFor="address">Address</label>
//               <input id="address" name="address" placeholder="123 Market Street" autoComplete="street-address" />
//               <p className="small-note">Full address helps customers find you faster.</p>
//             </div>

//             <button className="auth-submit" type="submit">Create Partner Account</button>
//           </form>

//           {/* Already signed in */}
//           <div className="auth-alt-action">
//             Already a partner? <Link to="/food-partner/login">Sign in</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodPartnerRegister;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API = import.meta.env.VITE_API_URL;

const FoodPartnerRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const address = e.target.address.value.trim();

    // Validation
    if (!businessName || !phone || !email || !password || !address) {
      toast.error('Please fill all fields!');
      return;
    }

    if (businessName.length < 3) {
      toast.error('Business name must be at least 3 characters!');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Phone number must be exactly 10 digits!');
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

    if (address.length < 5) {
      toast.error('Address is too short!');
      return;
    }

    try {
      const response = await axios.post(
        `${API}/api/auth/food-partner/register`,
        {
          name: businessName,
          phone,
          email,
          password,
          address,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      toast.success('Partner registered successfully!');

      setTimeout(() => {
        navigate('/create-food');
      }, 1000);

    } catch (error) {
      console.error('Registration error:', error);

      toast.error(
        error.response?.data?.message ||
        'Registration failed. Please try again!'
      );
    }
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
        }}
      >
        <Button />
      </div>

      <div className="auth-page-wrapper">
        <div
          className="auth-card"
          role="region"
          aria-labelledby="partner-register-title"
        >
          <header>
            <h1
              id="partner-register-title"
              className="auth-title"
            >
              Partner Sign Up
            </h1>

            <p className="auth-subtitle">
              Grow your business with our platform.
            </p>
          </header>

          <nav
            className="auth-alt-action"
            style={{ marginTop: '-4px' }}
          >
            <strong style={{ fontWeight: 600 }}>
              Switch:
            </strong>{' '}
            <Link to="/user/register">User</Link> •{' '}
            <Link to="/food-partner/register">
              Food Partner
            </Link>
          </nav>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="field-group">
              <label htmlFor="businessName">
                Business Name
              </label>

              <input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="Tasty Bites"
                autoComplete="organization"
              />
            </div>

            <div className="field-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="1234567890"
                autoComplete="tel"
              />
            </div>

            <div className="field-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="business@gmail.com"
                autoComplete="email"
              />
            </div>

            <div className="field-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Minimum 6 characters"
                autoComplete="new-password"
              />
            </div>

            <div className="field-group">
              <label htmlFor="address">
                Address
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="123 Market Street"
                autoComplete="street-address"
              />

              <p className="small-note">
                Full address helps customers find you faster.
              </p>
            </div>

            <button
              className="auth-submit"
              type="submit"
            >
              Create Partner Account
            </button>
          </form>

          <div className="auth-alt-action">
            Already a partner?{' '}
            <Link to="/food-partner/login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPartnerRegister;