import RegistrationForm from "../Pages/RegistrationForm";
import Image from "../Components/Image";
import signup from "../assets/signup.jpg";
import Container from "../Components/Container";

const SignUpPage = () => (
  <Container>
    <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
      <Image image={signup}/>
      <RegistrationForm/>
    </div>
  </Container>
);

export default SignUpPage;