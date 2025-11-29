import "./Input.css";

export const Input = ({ label, required, error, ...props }) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={props.id} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input className="input" {...props} />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};
