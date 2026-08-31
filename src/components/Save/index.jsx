import "./save.style.css";

export function Save({ children, ...rest }) {
  return (
    <button {...rest} className="SaveButton">
      {children}
    </button>
  );
}
