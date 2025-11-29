import "./Textarea.css";

export const Textarea = ({ label, error, ...props }) => {
  return (
    <div className="textarea-group">
      {label && (
        <label htmlFor={props.id} className="textarea-label">
          {label}
        </label>
      )}
      <textarea className="textarea" {...props} />
      {error && <span className="textarea-error">{error}</span>}
    </div>
  );
};
