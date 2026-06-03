export function AlertButton(props) {
  return (
    <button onClick={props.onAction} className="btn-alert">
      {props.label}
    </button>
  );
}