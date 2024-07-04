import { ComponentPropsWithoutRef, forwardRef } from "react";

type ModalProps = ComponentPropsWithoutRef<"dialog">;
export const Modal = forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  return <dialog ref={ref} {...props}></dialog>;
});
