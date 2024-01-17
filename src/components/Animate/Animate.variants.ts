// @/components/Animate/Animate.variants.ts

import { Variants } from "framer-motion";

export const variants: Variants = {
  revealInitial: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
  slideInRightInitial: {
    opacity: 0,
    x: "300%",
  },
  slideInRight: {
    x: "0%",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      type: "spring",
      bounce: 0.25,
    },
  },
  slideInRightEarly: {
    x: "0%",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      bounce: 0.25,
    },
  },
  slideInRightLater: {
    x: "0%",
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
      type: "spring",
      bounce: 0.25,
    },
  },
  slideInDownInitial: {
    opacity: 0,
    y: "-300%",
  },
  slideInDownEarly: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
  slideInDown: {
    y: "0%",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
    },
  },
};
