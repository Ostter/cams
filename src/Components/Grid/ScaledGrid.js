import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// TODO handle case for no children.
// TODO handle case when available height changes without window.resize event.

// This grid calculates necessary amount of rows needed to render into available
// vertical space.
// Must be used with <Row> component to work:
//
//  <ScaledGrid onRenderMismatch={function(itemsNeeded, itemsGiven)}>
//    <Row>
//      ...any content
//    </Row>
//    <Row>...
//    ...
//  </ScaledGrid>

class ScaledGrid extends PureComponent {
  componentDidMount() {
    window.addEventListener("resize", this.recalculateDimensions, false);
    this.recalculateDimensions();
  }

  componentDidUpdate() {
    this.recalculateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.recalculateDimensions, false);
  }

  recalculateDimensions = () => {
    if (React.Children.count(this.props.children) === 0) {
      console.warn("Must have at least one child");
      return;
    }

    const count0 = React.Children.count(this.props.children) - 1;
    const containerEl = this.props.containerEl || this.refs[count0].parentNode;
    const containerDimensions = containerEl.getBoundingClientRect();

    let i, childDimensions, distance;

    for (i = count0; i >= 0; i--) {
      const childEl = this.refs[i];
      childDimensions = childEl.getBoundingClientRect();
      distance = containerDimensions.bottom - childDimensions.bottom;

      if (distance >= 0) {
        // This i-th child finally fits to container.
        break;
      }
    }

    if (i < count0) {
      // Not all children fit to screen
      const itemsNeeded = i + 1;
      this.props.onRenderMismatch(itemsNeeded, count0 + 1);
    } else if (distance >= childDimensions.height) {
      // All children fit to screen, but too much space is left - can fit more
      const itemsNeeded = i + 1 + Math.floor(distance / childDimensions.height);
      this.props.onRenderMismatch(itemsNeeded, count0 + 1);
    } else {
      // Everything fits perfectly; do nothing
    }
  };

  render() {
    this.refs = [];

    return React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        _scaleRef: node => {
          this.refs[i] = node;
        }
      });
    });
  }
}

ScaledGrid.propTypes = {
  containerEl: PropTypes.instanceOf(Element),
  onRenderMismatch: PropTypes.func // onRenderMismatch(itemsNeeded, itemsGiven)
};

ScaledGrid.defaultProps = {};

export default ScaledGrid;
