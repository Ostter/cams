import React from "react";
import Icon from "../Icon";
import styles from "./index.module.css";

// Must be put inside <label>.
export default function Checkbox({ checked, half, onChange, tabIndex }) {
  return (
    <span className={styles.container}>
      <input
        type="checkbox"
        // checked={half || checked}
        checked={checked}
        onChange={onChange}
        tabIndex={tabIndex}
        className={styles.input}
      />
      <div className={styles.checkbox}>
        {half ? (
          <Icon
            name="okay-checkbox"
            size={19}
            className={styles.halfColorIcon}
          />
        ) : (
          <Icon name="okay-checkbox" size={19} className={styles.colorIcon} />
        )}
      </div>
    </span>
  );
}
