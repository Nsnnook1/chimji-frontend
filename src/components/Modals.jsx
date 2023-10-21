import "../styles/modal.scss";
import Button from "./Button";
import InputForm from "./InputForm";

export default function Modal({
  title,
  children,
  // maxWidth = 27,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <div className="modal-box">
          <header>{title}</header>
          <div className="modal-content">
            <div className="close" onClick={onClose}>
              x
            </div>
            <div className="children">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
