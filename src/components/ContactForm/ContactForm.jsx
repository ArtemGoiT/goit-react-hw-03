import css from "./ContactFrom.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Имя слишком короткое, должно быть не менее 3 символов")
    .max(50, "Имя слишком длинное, должно быть не более 50 символов")
    .required('Поле "Имя" обязательно для заполнения'),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Номер должен состоять только из цифр")
    .min(10, "Номер телефона должен содержать не менее 10 цифр")
    .max(15, "Номер телефона должен содержать не более 15 цифр")
    .required('Поле "Номер" обязательно для заполнения'),
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
