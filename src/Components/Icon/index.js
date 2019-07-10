import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import icons from "../../Styleguide/icons.module.css";
import typography from "../../Styleguide/typography.module.css";

// Examples:
// <Icon name='im/sort_up_down' /> Icon Moon icons

class Icon extends PureComponent {
  render() {
    const { className, name, size, ...otherProps } = this.props;

    return (
      <i
        className={classnames(
          icons.icomoon,
          icons[`icon-${name}`],
          className,
          typography[`fs${size}`]
        )}
        {...otherProps}
      />
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

Icon.defaultProps = {
  size: 16
};

export default Icon;
