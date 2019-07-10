import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CommonCheckbox from "../Checkbox";
import styles from "./index.module.css";

// To be used with grid. Grid may check instanceof this class in case of user-
// redefined checkboxes.
class Checkbox extends PureComponent {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label className={styles.checkbox}>
        <CommonCheckbox checked={checked} onChange={onChange} tabIndex="-1" />
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {};

export default Checkbox;
