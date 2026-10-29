import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";

// Focuses the first [data-autofocus] element inside, or the dialog itself.
export const Modal = ({ onClose, labelledBy, label, className, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const onKey = (event) => event.key === "Escape" && onClose();
    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    (dialogRef.current?.querySelector("[data-autofocus]") ?? dialogRef.current)?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [onClose]);

  // Portal into the page root so it sits above every section and keeps the v2 styles.
  return createPortal(
    <div
      className="modal-backdrop"
      style={{ position: "fixed", inset: 0, zIndex: 50 }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-label={label}
        tabIndex={-1}
        className={cn("modal-dialog", className)}
      >
        {children}
      </div>
    </div>,
    document.querySelector(".v2") ?? document.body
  );
};

export default Modal;
