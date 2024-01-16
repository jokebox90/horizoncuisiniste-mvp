// src/components/Button/Button.tsx

import styles from "@/components/Button/Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode[] | ReactNode;
}

export default function Button({ children, className }: ButtonProps) {
  const classes = [className || "", styles.component].join(" ");
  return <button className={classes}>{children}</button>;
}
