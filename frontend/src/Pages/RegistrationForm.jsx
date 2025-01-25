import axios from 'axios';
import { useFormik } from 'formik';
import { useRef, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import validateYupSchema from '../validate';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const RegistrationForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema: validateYupSchema(),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(routes.signupApiPath(), values);
        auth.logIn(response.data.token, values.username);
        navigate(routes.mainPagePath());
        setIsError(false)
      } catch (err) {
        formik.setSubmitting(false);
        if (err.isAxiosError && err.response.status === 401) {
          inputRef.current.select();
          toast.error('Ошибка регистрации');
          return;
        } if (err.response.status === 409) {
          inputRef.current.select();
          setIsError(true);
        }
        throw err;
      }
    },
  });

 return (
  <Form className='w-50' onSubmit={formik.handleSubmit}>
    <fieldset>
    <h1 className='text-center mb-4'>Регистрация</h1>
    <Form.Group className='form-floating mb-3'>
     <Form.Control
      name='username'
      autoComplete='username'
      required
      placeholder='Ваш ник'
      id='username'
      ref={inputRef}
      isInvalid={isError || formik.touched.username && formik.errors.username}
      onChange={formik.handleChange}
      value={formik.values.username}
     />
     <Form.Label htmlFor='username'>Имя пользователя</Form.Label>
     <Form.Control.Feedback type='invalid' tooltip>
      {isError ? 'Такой пользователь уже существует' : formik.errors.username }
     </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='form-floating mb-3'>
     <Form.Control
      name='password'
      autoComplete='current-password'
      required
      placeholder='Ваш пароль'
      type='password'
      id='password'
      isInvalid={formik.touched.password && formik.errors.password}
      onChange={formik.handleChange}
      value={formik.values.password}
     />
     <Form.Label htmlFor='password'>Пароль</Form.Label>
     <Form.Control.Feedback type='invalid' tooltip>
      {formik.errors.password}
     </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='form-floating mb-4'>
     <Form.Control
      name='confirmPassword'
      autoComplete='new-password'
      required
      placeholder='Ваш пароль'
      type='password'
      id='confirmPassword'
      onChange={formik.handleChange}
      isInvalid={
       formik.touched.confirmPassword && formik.errors.confirmPassword
      }
      value={formik.values.confirmPassword}
     />
     <Form.Label htmlFor='ConfirmPassword'>Подтвердите пароль</Form.Label>
     <Form.Control.Feedback type='invalid' tooltip>
      {formik.errors.confirmPassword}
     </Form.Control.Feedback>
    </Form.Group>
    <Button type='submit' variant='outline-primary' className='w-100 mb-3'>
     Зарегестрироваться
    </Button>
   </fieldset>
  </Form>
 );
};

export default RegistrationForm;