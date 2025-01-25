import { Link } from "react-router-dom";
import routes from '../routes';
import useAuth from "../hooks/useAuth";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  const { loggedIn, logOut } = useAuth();
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {t('navigation.title')}
        </Link>
        {loggedIn && (
          <Link
          onClick={logOut}
          to={routes.loginPagePath()}
          type="button "
          className="btn btn-primary"
          >
            {t('navigation.exitButton')}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;