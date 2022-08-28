import classes from "./Input.module.css";

const Input = (props) => {
  const {
    className,
    label,
    name,
    type,
    max,
    value,
    onChangeHandler,
    onBlurHandler,
    isTouched,
    hasError,
    error,
  } = props;
  return (
    <>
      <div
        className={`${type !== "checkbox" ? classes.input : classes.checkbox} `}
      >
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          type={type}
          max={max}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          className={className}
        />
      </div>
      <span className={classes.error}>{isTouched && hasError && error}</span>
    </>
  );
};

export default Input;
