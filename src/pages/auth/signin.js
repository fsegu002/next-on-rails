import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import http from '../../components/http';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().min(
    8,
    'Password must be at least ${min} characters long'
  )
});
const signinForm = ({ errors, touched }) => {
  return (
    <div>
      <Form noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </Form>
    </div>
  );
};

const signin = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validationSchema: SignInSchema,
  handleSubmit: async values => {
    const signinData = {
      auth: { ...values }
    };

    const response = await http(
      'http://localhost:5000/api/user_token',
      'POST',
      signinData
    );

    const data = await response;
  }
})(signinForm);

export default signin;
