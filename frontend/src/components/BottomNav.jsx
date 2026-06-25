
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/bottom-nav.css';

// const BottomNav = () => {
//   return (
//     <nav
//       className="bottom-nav"
//       role="navigation"
//       aria-label="Bottom"
//     >
//       <div className="bottom-nav__inner">

//         <NavLink
//           to="/home"
//           end
//           className={({ isActive }) =>
//             `bottom-nav__item ${
//               isActive ? 'is-active' : ''
//             }`
//           }
//         >
//           <span
//             className="bottom-nav__icon"
//             aria-hidden="true"
//           >
//             <svg
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M3 10.5 12 3l9 7.5" />
//               <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
//             </svg>
//           </span>

//           <span className="bottom-nav__label">
//             Home
//           </span>
//         </NavLink>

//       </div>
//     </nav>
//   );
// };

// export default BottomNav;
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/bottom-nav.css';

const BottomNav = () => {
  return (
    <nav
      className="bottom-nav"
      role="navigation"
      aria-label="Bottom"
    >
      <div className="bottom-nav__inner">

        <NavLink
          to="/home"
          end
          className={({ isActive }) =>
            `bottom-nav__item ${
              isActive ? 'is-active' : ''
            }`
          }
        >
          <span
            className="bottom-nav__icon"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" />
            </svg>
          </span>

          <span className="bottom-nav__label">
            Home
          </span>
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `bottom-nav__item ${
              isActive ? 'is-active' : ''
            }`
          }
        >
          <span
            className="bottom-nav__icon"
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </span>

          <span className="bottom-nav__label">
            Saved
          </span>
        </NavLink>

      </div>
    </nav>
  );
};

export default BottomNav;