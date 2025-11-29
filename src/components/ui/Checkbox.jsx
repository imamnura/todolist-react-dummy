import "./Checkbox.css";

export const Checkbox = ({ label, ...props }) => {
  return (
    <label className="checkbox-wrapper">
      <input type="checkbox" className="checkbox-input" {...props} />
      <span className="checkbox-custom"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};
