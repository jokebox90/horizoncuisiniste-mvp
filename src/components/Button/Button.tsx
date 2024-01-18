// src/components/Button/Button.tsx

import styles from "@/components/Button/Button.module.css";
import { ComponentPropsWithRef, MouseEventHandler, ReactNode, RefObject } from "react";

interface ButtonProps extends ComponentPropsWithRef<any> {
  className?: string;
  children: ReactNode[] | ReactNode;
  ref?: RefObject<HTMLButtonElement>;
  onClick: MouseEventHandler;
}

export default function Button({ children, className, ref, onClick }: ButtonProps) {
  const classes = [className || "", styles.component].join(" ");
  return (
    <button ref={ref} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
