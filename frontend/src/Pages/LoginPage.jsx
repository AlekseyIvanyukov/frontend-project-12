/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import Image from '../Components/Image';
import login from '../assets/login.jpg';
import routes from '../routes';
import Container from '../Components/Container';
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <Container>
      <div className="card-body row p-5">
        <Image image={login} />
        <LoginForm />
      </div>
      <div className="card-footer p-4">
        <div className="text-center">
          <span>Нет аккаунта? </span>
          <Link to={routes.signupPagePath()}>Регистрация</Link>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;