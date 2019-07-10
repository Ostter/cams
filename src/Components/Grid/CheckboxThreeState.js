import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CommonCheckbox from "../Checkbox";
import styles from "./index.module.css";

// To be used with grid. Grid may check instanceof this class in case of user-
// redefined checkboxes.
class CheckboxThreeState extends PureComponent {
  render() {
    const { checked: threeStateChecked, onChange } = this.props;
    const checked = threeStateChecked === true;
    const half = typeof threeStateChecked !== "boolean";
    return (
      <label className={styles.checkbox}>
        <CommonCheckbox
          checked={checked}
          half={half}
          onChange={onChange}
          tabIndex="-1"
        />
      </label>
    );
  }
}

CheckboxThreeState.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]).isRequired, // Either boolean or anything else, for 'partial' style.
  onChange: PropTypes.func.isRequired
};

CheckboxThreeState.defaultProps = {};

export default CheckboxThreeState;
