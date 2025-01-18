import { NavLink } from "react-router";
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           {title}
//         </Link>
//         <Link
//           to={'/login'}
//           type="button"
//           className="btn btn-primary"
//         >
//         </Link>
//       </div>
//     </nav>
//   );
// };


const Navigation = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <NavLink className="navbar-brand" to="/" end>
      Home
    </NavLink>
    <NavLink to="/login" end>
      Login
    </NavLink>
    <NavLink to="/concerts">All Concerts</NavLink>
    <NavLink to="/account">Account</NavLink>
  </nav>
  );

export default Navigation;