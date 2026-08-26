import { useEffect, useRef } from "react";
import "./dialog.style.css";
export function Dialog({ isOpen, onClose }) {
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
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        <p>Eu sou um coloridinho</p>
      </dialog>
    </>
  );
}
