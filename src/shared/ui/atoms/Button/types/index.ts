import { ComponentPropsWithoutRef } from "react";

export enum ButtonType {
  default = "default",
  submit = "submit",
}
export type ButtonProps = {
  variant?: `${ButtonType}`;
  active?: boolean;
} & ComponentPropsWithoutRef<"button">;
