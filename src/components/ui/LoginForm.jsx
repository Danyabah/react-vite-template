import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  const navigate = useNavigate();

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Необходимо указать почту"),

    password: Yup.string()
      .required("Необходимо указать пароль")
      .min(6, "пароль слишком короткий"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer">
            <div className="formWrapper">
              <span className="title">Авторизация</span>
              <Form>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Пароль"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Войти
                </button>
              </Form>
              <p>
                У вас нет аккаунта? <Link to="/register">Регистрация</Link>{" "}
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
