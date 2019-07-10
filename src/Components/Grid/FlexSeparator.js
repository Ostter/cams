import React, { PureComponent } from "react";

// Used together with grids
class FlexSeparator extends PureComponent {
  render() {
    const { children, _scaleRef, ...otherProps } = this.props;

    return (
      <div {...otherProps} ref={_scaleRef}>
        {children}
      </div>
    );
  }
}

FlexSeparator.defaultProps = {};

export default FlexSeparator;
