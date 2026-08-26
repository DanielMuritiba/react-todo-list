import "./dialog.style.css";
import { useEffect, useRef } from "react";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    isOpen ? openDialog() : closeDialog();
  }, [isOpen]);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button className="btn-close" autoFocus onClick={onClose}>
            <IconClose />
          </button>
        </div>
        <div className="body">{children}</div>
      </dialog>
    </>
  );
}
