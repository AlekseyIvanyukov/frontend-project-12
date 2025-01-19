import { Link } from "react-router-dom";
import routes from "../routes";
import notFound from "../assets/notFound.svg";

const NotFoundPage = () => {
  return (
    <div class="text-center mt-5">
      <img
        src={notFound}
        alt="Страница не найдена"
        className="img-fluid h-25"
        width={300}
      />
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p>
        "Но вы можете перейти "<Link to={routes.mainPagePath()}>на главную страницу</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;