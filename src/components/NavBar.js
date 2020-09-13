import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navbar">
      <NavLink
      to="/">Home</NavLink>
      <NavLink
      to="/movies">Movies</NavLink>
      <NavLink
      to="/directors">Directors</NavLink>
      <NavLink
      to="/actors">Actors</NavLink>
    </div>
  );
};

export default NavBar;

// export default class Navbar extends React.Component {
//   render() {
//     return (
//       <div className=".navbar">
//         <NavLink
//           to="/">Home
//           </NavLink>
//           <NavLink
//       to="/movies">Movies</NavLink>
//       <NavLink
//       to="/actors">Actors</NavLink>
//       <NavLink
//       to="/directors">Directors</NavLink>
      
//           </div>
//     )
//   }
// }

