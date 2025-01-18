import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';

const Login = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    login: yup.string().required().min(3, 'minimum 3 characters').max(20, 'maximum 20 characters'),
    password: yup.string().required().max(20, 'maximum 20 characters'),
    
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        login: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form class="col-12 col-md-6 mt-3 mt-md-0" noValidate onSubmit={handleSubmit}>
          <h1 className="text-center mb-4">Войти</h1>
            <Form.Group className="form-floating mb-3" as={Col} md="4" controlId="validationFormik01">
              <Form.Control
                name="login"
                id='username'
                type="text"
                placeholder='Ваш ник'
                value={values.login}
                onChange={handleChange}
                isValid={touched.login && !errors.login}
              />
              <Form.Label htmlFor='username'>Ваш ник</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-4" as={Col} md="4" controlId="validationFormik02">
              <Form.Control
                name="password"
                id='password'
                type="text"
                placeholder='Пароль'
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Label htmlFor='password'>Пароль</Form.Label>
              <Form.Control.Feedback type="invalid">feedback</Form.Control.Feedback>
            </Form.Group>
          <Button 
            class="w-100 mb-3"
            variant="outline-primary"
            type="submit"
          >
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;