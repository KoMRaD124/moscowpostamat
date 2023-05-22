import React from "react";
import styles from "./MyButton.module.scss";
import classNames from "classnames";

export const MyButton = ({ whiteButton,redButton, onClick, disabled, children }) => {
  return (
    <button
      className={(classNames(styles.button, {[styles.whiteButton]:whiteButton,[styles.redButton]:redButton}))}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
