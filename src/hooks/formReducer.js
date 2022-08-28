const formReducer = (state, action) => {
  const { name, type, value, hasError, error, isTouched, isFormValid } = action;
  switch (type) {
    case "handle_input_change":
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          isTouched
        },
        isFormValid
      };
    default:
      return state;
  }
};

export default formReducer;
