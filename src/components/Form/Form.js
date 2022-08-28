import { useReducer, useState } from "react";
import formReducer from "../../hooks/formReducer";
import { validateInput } from "../../utils/form";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Input from "../Input/Input";
import classes from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {
    userName: { value: "", hasError: true, isTouched: false, error: "" },
    userEmail: { value: "", hasError: true, isTouched: false, error: "" },
    userPassword: { value: "", hasError: true, isTouched: false, error: "" },
    userMobile: { value: "", hasError: true, isTouched: false, error: "" },
    userTerms: { value: "", hasError: true, isTouched: false, error: "" },
    isFormValid: false,
  });
  const [showError, setShowError] = useState(false);

  const inputChangeHandler = (event, type) => {
    let isFormValid = true;
    const { name, value, checked } = event?.target;
    const { hasError, error } = validateInput({
      type,
      value: type === "checkbox" ? checked : value,
    });
    for (let key in formData) {
      if (formData[key]) {
        const { hasError } = formData[key];
        if (hasError && formData.hasOwnProperty(key)) {
          isFormValid = false;
        }
      }
    }
    setFormData({
      type: "handle_input_change",
      name,
      value,
      hasError,
      error,
      isFormValid,
    });
  };

  const onBlurHandler = (event, type) => {
    let isFormValid = true;
    const { name, value } = event?.target;
    const { hasError, error } = validateInput({ type, value });
    for (let key in formData) {
      if (formData[key]) {
        const { hasError } = formData[key];
        if (hasError && formData.hasOwnProperty(key)) {
          isFormValid = false;
        }
      }
    }
    setFormData({
      type: "handle_input_change",
      name,
      value,
      hasError,
      error,
      isTouched: true,
      isFormValid,
    });
  };

  const submitForm = () => {
    let isFormValid = true;
    for (let key in formData) {
      if (formData[key]) {
        const { hasError, value, isTouched, error } = formData[key];
        if (hasError) {
          isFormValid = false;
        }
        setFormData({
          type: "handle_input_change",
          key,
          value,
          hasError,
          error,
          isTouched,
          isFormValid,
        });
      }
    }
    if (!isFormValid) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <Card className={classes.signup}>
      <div className={classes.signup_header}>
        <header>Sign Up</header>
        {showError &&
          !formData.isFormValid &&
          <div>Please fill all the fields correctly</div>}
      </div>
      <form className={classes.form}>
        <Input
          label="Name"
          name="userName"
          type="text"
          value={formData["userName"].value}
          isTouched={formData["userName"].isTouched}
          hasError={formData["userName"].hasError}
          error={formData["userName"].error}
          onChangeHandler={(event) => inputChangeHandler(event, "text")}
          onBlurHandler={(event) => onBlurHandler(event, "text")}
        />
        <Input
          label="Email"
          name="userEmail"
          type="email"
          value={formData["userEmail"].value}
          isTouched={formData["userEmail"].isTouched}
          hasError={formData["userEmail"].hasError}
          error={formData["userEmail"].error}
          onChangeHandler={(event) => inputChangeHandler(event, "email")}
          onBlurHandler={(event) => onBlurHandler(event, "email")}
        />
        <Input
          label="Password"
          name="userPassword"
          type="password"
          value={formData["userPassword"].value}
          isTouched={formData["userPassword"].isTouched}
          hasError={formData["userPassword"].hasError}
          error={formData["userPassword"].error}
          onChangeHandler={(event) => inputChangeHandler(event, "password")}
          onBlurHandler={(event) => onBlurHandler(event, "password")}
        />
        <Input
          label="Mobile"
          name="userMobile"
          type="tel"
          value={formData["userMobile"].value}
          isTouched={formData["userMobile"].isTouched}
          hasError={formData["userMobile"].hasError}
          error={formData["userMobile"].error}
          onChangeHandler={(event) => inputChangeHandler(event, "tel")}
          onBlurHandler={(event) => onBlurHandler(event, "tel")}
        />
        <Input
          className={classes.checkbox}
          label="Accept Terms and Conditions"
          name="userTerms"
          type="checkbox"
          checked={formData["userTerms"].value}
          isTouched={true}
          hasError={formData["userTerms"].hasError}
          error={formData["userTerms"].error}
          onChangeHandler={(event) => inputChangeHandler(event, "checkbox")}
        />
      </form>
      <Button onClickHandler={submitForm} label="Register" name="register" />
    </Card>
  );
};

export default Form;
