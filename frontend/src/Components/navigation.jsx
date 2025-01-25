import {Link} from "react-router-dom";
import routes from '../routes';
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const { loggedIn, logOut } = useAuth();
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hexlet Chat
        </Link>
        {loggedIn && (
          <Link
            onClick={logOut}
            to={routes.loginPagePath()}
            type="button "
            className="btn btn-primary"
          >
            LogOut
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;