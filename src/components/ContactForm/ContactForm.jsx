import css from "./ContactFrom.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The "Name" is too Short!')
    .max(50, 'The "Name" is too Long!')
    .required('The "Name" is Required field!'),
  number: Yup.string()
    .min(3, 'The "Number" is too Short!')
    .max(50, 'The "Number" is too Long!')
    .required('The "Number" is Required field!'),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactFrom = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    onAdd(newContact);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.formContact}>
          <div className={css.formGroup}>
            <label className={css.formLabel} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.formInput}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={css.formError}
              name="name"
              component="div"
            />
          </div>

          <div className={css.formGroup}>
            <label className={css.formLabel} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.formInput}
              type="tel"
              inputMode="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.formError}
              name="number"
              component="div"
            />
          </div>

          <button
            className={css.formButton}
            type="submit"
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFrom;
