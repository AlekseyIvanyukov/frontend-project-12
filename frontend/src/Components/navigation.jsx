import { NavLink } from "react-router";
import routes from '../routes';

const Navigation = () => (
  <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
    <NavLink className="navbar-brand">
      Hexlet Chat
    </NavLink>
    <NavLink to={routes.loginPagePath()} type="button " className="btn btn-primary" end>
      LogOut
    </NavLink>
  </nav>
  );

export default Navigation;