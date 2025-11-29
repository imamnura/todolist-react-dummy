import "./Button.css";

export const Button = ({
  children,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
