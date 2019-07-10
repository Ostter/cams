import React from "react";
import styles from "./index.module.css";

// Must be put inside <label>.
export default function Checkbox({ checked, half, onChange, tabIndex }) {
  return (
    <span className={styles.container}>
      <input
        type="checkbox"
        checked={half || checked}
        onChange={onChange}
        tabIndex={tabIndex}
        className={styles.input}
      />
      <div className={styles.checkbox}></div>
    </span>
  );
}
