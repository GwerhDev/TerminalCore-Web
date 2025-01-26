import s from "./DialogModal.module.css";
import { useEffect, useRef } from "react";

export const DialogModal = (props) => {
  const { isOpen, onClose, children, reset } = props || {};
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
      if(onClose) onClose();
      if(reset) reset();
    }
  }, [isOpen, reset, onClose]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog ref={dialogRef} className={s.container}>
      <div className={s.innerContainer}>
        <span className={s.closeButtonContainer}>
          <button className={s.closeButton} onClick={handleClose}>×</button>
        </span>
        {children}
      </div>
    </dialog>
  );
};
