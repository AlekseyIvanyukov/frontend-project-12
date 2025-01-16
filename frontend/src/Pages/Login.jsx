import React from "react";
import { Formik, Form, Field } from 'formik';

const Login = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <Formik
        initialValues={{ username: '', password: ''}}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="username">Имя пользователя</label>
                <Field id="username" name="username" placeholder="Введите имя пользователя" />
              </div>
            </Form>
          )}
        </Formik>
    </div>
  )
};

export default Login;