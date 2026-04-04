// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserRegister from '../pages/auth/UserRegister';
// import ChooseRegister from '../pages/auth/ChooseRegister';
// import UserLogin from '../pages/auth/UserLogin';
// import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
// import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
// import Home from '../pages/general/Home';
// import Saved from '../pages/general/Saved';
// import BottomNav from '../components/BottomNav';
// import CreateFood from '../pages/food-partner/CreateFood';
// import Profile from '../pages/food-partner/Profile';
// import { ToastContainer } from 'react-toastify'; // ✅ import toast container
// import 'react-toastify/dist/ReactToastify.css';
// const AppRoutes = () => {
//     return (
//         <Router>
//              <ToastContainer position="top-right" autoClose={3000} />
//             <Routes>
//                <Route path="/" element={<ChooseRegister />} />
//                <Route path="/register" element={<ChooseRegister />} />
//                <Route path="/user/register" element={<UserRegister />} />
//                <Route path="/user/login" element={<UserLogin />} />
//                <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
//                <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
//                <Route path="/home" element={<><Home /><BottomNav /></>} />
//                <Route path="/saved" element={<><Saved /><BottomNav /></>} />
//                <Route path="/create-food" element={<CreateFood />} />
//                <Route path="/food-partner/:id" element={<Profile />} />
//            </Routes>
//         </Router>
//     )
// }

// export default AppRoutes
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/auth/UserRegister';
import ChooseRegister from '../pages/auth/ChooseRegister';
import UserLogin from '../pages/auth/UserLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import Home from '../pages/general/Home';
import Saved from '../pages/general/Saved';
import BottomNav from '../components/BottomNav';
import CreateFood from '../pages/food-partner/CreateFood';
import Profile from '../pages/food-partner/Profile';
import { ToastContainer } from 'react-toastify'; // ✅ import toast container
import 'react-toastify/dist/ReactToastify.css';   // ✅ toast styles

const AppRoutes = () => {
    return (
        <Router>
            {/* 🔹 Toast notifications container */}
            <ToastContainer 
                position="top-right"
                autoClose={3000}      // auto close after 3s
                hideProgressBar={false}
                newestOnTop={true}   // newest toast on top
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"       // colored theme looks better
            />

            <Routes>
               <Route path="/" element={<ChooseRegister />} />
               <Route path="/register" element={<ChooseRegister />} />
               <Route path="/user/register" element={<UserRegister />} />
               <Route path="/user/login" element={<UserLogin />} />
               <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
               <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
               <Route path="/home" element={<><Home /><BottomNav /></>} />
               <Route path="/saved" element={<><Saved /><BottomNav /></>} />
               <Route path="/create-food" element={<CreateFood />} />
               <Route path="/food-partner/:id" element={<Profile />} />
           </Routes>
        </Router>
    )
}

export default AppRoutes;