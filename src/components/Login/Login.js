import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import TextInput from "../form/TextInput/TextInput.js";
import SubmitButton from "../form/SubmitButton/SubmitButton.js";
import ButtonBar from "../form/ButtonBar/ButtonBar.js";
import FormContainer from "../form/FormContainer/FormContainer.js";
import FormFeedback from "../form/FormFeedback/FormFeedback.js";
import * as actions from "../../actions/index.js";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .default(""),
  password: Yup.string()
    .required("Password is required.")
    .default("")
});

function Login({ login }) {
  return (
    <FormContainer title="Login">
      <Formik
        validationSchema={schema}
        onSubmit={async ({ email, password }, { setSubmitting, setStatus }) => {
          setStatus();
          const { error, payload } = await login(email, password);
          if (error) setStatus(payload.message || payload.response.message);
          setSubmitting(false);
        }}
        displayName="Login"
        initialValues={schema.cast()}
      >
        {props => {
          return (
            <Form>
              {props.status && <FormFeedback>{props.status}</FormFeedback>}
              <Field
                name="email"
                type="email"
                label="Email"
                autoFocus
                component={TextInput}
              />
              <Field
                name="password"
                label="Password"
                type="password"
                component={TextInput}
              />
              <ButtonBar>
                <SubmitButton {...props} />
              </ButtonBar>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
}

export default connect(
  null,
  {
    login: actions.login
  }
)(Login);
