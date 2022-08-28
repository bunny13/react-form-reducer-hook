export const validateInput = ({ type, value }) => {
  let hasError = false;
  let error = "";
  switch (type) {
    case "text":
      if (value.trim() === "") {
        hasError = true;
        error = "Name cannot be empty";
      } else if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        error = "Invalid Name. Avoid Special characters";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "email":
      if (value.trim() === "") {
        hasError = true;
        error = "Email cannot be empty";
      } else if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          value
        )
      ) {
        hasError = true;
        error = "Invalid Email";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (value.trim() === "") {
        hasError = true;
        error = "Password cannot be empty";
      } else if (value.trim().length < 8) {
        hasError = true;
        error = "Password must have at least 8 characters";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "tel":
      if (value.trim() === "") {
        hasError = true;
        error = "Mobile cannot be empty";
      } else if (!/^[0-9]{10}$/.test(value)) {
        hasError = true;
        error = "Invalid Mobile Number. Use 10 digits only";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "checkbox":
      if (!value) {
        hasError = true;
        error = "You must accept terms and conditions";
      } else {
        hasError = false;
        error = "";
      }
      break;
    default:
      throw new Error("Invalid Type");
  }
  return {
    hasError,
    error,
  };
};
