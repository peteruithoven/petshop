import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TextInput from "../form/TextInput/TextInput.js";
import SubmitButton from "../form/SubmitButton/SubmitButton.js";
import ButtonBar from "../form/ButtonBar/ButtonBar.js";
import FormContainer from "../form/FormContainer/FormContainer.js";
import FormFeedback from "../form/FormFeedback/FormFeedback.js";
import * as actions from "../../actions/index.js";

const schema = Yup.object().shape({
  type: Yup.string()
    .required("Type is required")
    .default(""),
  name: Yup.string()
    .required("Name is required")
    .default(""),
  price: Yup.number()
    .min(1, "Price is required")
    .default(0)
});

function AddPet({ addPet, history }) {
  return (
    <FormContainer title="Add Pet">
      <Formik
        validationSchema={schema}
        onSubmit={async (input, { setSubmitting, setStatus }) => {
          setStatus();
          const { error, payload } = await addPet(input);
          if (error) setStatus(payload.message || payload.response.message);
          else history.push("/");
          setSubmitting(false);
        }}
        displayName="AddPet"
        initialValues={schema.cast()}
      >
        {props => {
          return (
            <Form>
              {props.status && <FormFeedback>{props.status}</FormFeedback>}
              <Field
                name="type"
                label="Type"
                component={TextInput}
              />
              <Field
                name="name"
                label="Name"
                component={TextInput}
              />
              <Field
                name="price"
                label="Price"
                type="number"
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
    addPet: actions.addPet
  }
)(withRouter(AddPet));
