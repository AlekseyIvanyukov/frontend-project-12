import { Link } from "react-router-dom";
import routes from "../routes";
import notFound from "../assets/notFound.svg";
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div class="text-center mt-5">
      <img
        src={notFound}
        alt="{t('notFoundPage.logoAlt')}"
        className="img-fluid h-25 rounded-circle"
      />
      <h1 className="h4 text-muted">{t('notFoundPage.title')}</h1>
      <p>
        {t('notFoundPage.text')}
        <Link to={routes.mainPagePath()}>{t('notFoundPage.link')}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;