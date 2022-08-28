import classes from './Button.module.css';

const Button = (props) => {
  const { name, label, onClickHandler, ...restProps } = props;
  return (
    <div className={classes.button_container}>
        <button className={classes.button} name={name} onClick={onClickHandler} {...restProps}>
        {label}
        </button>
    </div>
  );
};

export default Button;
