/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Image from '../Components/Image';
import login from '../assets/login.jpg';
import routes from '../routes';
import Container from '../Components/Container';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="card-body row p-5">
        <Image image={login} />
        <LoginForm />
      </div>
      <div className="card-footer p-4">
        <div className="text-center">
          <span>{t('loginPage.question')}</span>
          <Link to={routes.signupPagePath()}>{t('loginPage.registration')}</Link>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
