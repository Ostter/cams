import React, { PureComponent, Fragment } from "react";
import classnames from "classnames";

import Checkbox from "./Checkbox";

import styles from "./index.module.css";

// Used together with grids
class FlexRow extends PureComponent {
  render() {
    const {
      checkbox,
      tabIndex,
      selected,
      onChange,
      checked,
      children,
      _scaleRef,
      ...otherProps
    } = this.props;

    const className = classnames(this.props.className, {
      [styles.row]: true,
      [styles.rowWithCheckbox]: true,
      [styles.rowChecked]: checked
    });
    return (
      <div {...otherProps} className={className} ref={_scaleRef} tabIndex={0}>
        <Fragment>
          {checkbox ? (
            <Fragment>
              <Checkbox checked={checked} onChange={onChange} />
              {children}
            </Fragment>
          ) : (
            children
          )}
        </Fragment>
      </div>
    );
  }
}

FlexRow.defaultProps = {
  className: styles.defaultDimensions
};

export default FlexRow;
