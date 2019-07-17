import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import ScaledGrid from "./ScaledGrid";
import FlexRow from "./FlexRow";
import FlexHeader from "./FlexHeader";
import FlexSeparator from "./FlexSeparator";

import styles from "./index.module.css";

// Smart grid with auto-resize checkboxes and styling.
// Designed to request data to display.
//
// Should be used with <FlexRow> and <FlexHeader> components. Works on
// assumption that rows contents are of equal height.

class SmartGrid extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemsFit: React.Children.count(props.children)
    };
  }

  countRows(children, itemsFit = Infinity) {
    let count = 0;
    React.Children.forEach(children, (child, i) => {
      if (child.type === FlexRow && i < itemsFit) {
        count += 1;
      }
    });
    return count;
  }

  // Headers, separators etc. - items that don't need server data to render.
  countNonRows(children, itemsFit = Infinity) {
    let count = 0;
    React.Children.forEach(children, (child, i) => {
      if (child.type !== FlexRow && i < itemsFit) {
        count += 1;
      }
    });
    return count;
  }

  onRenderMismatch = (itemsNeeded, itemsGiven) => {
    if (!this.props.autoResize) {
      return;
    }

    this.setState({ itemsFit: itemsNeeded });

    const itemsHave = React.Children.count(this.props.children);

    // If itemsNeeded covered by items we have - handle it ourselves!
    if (itemsNeeded <= itemsHave) {
    } else {
      // If not - request data, unless we've reached the end already.
      const rowsGiven = this.countRows(this.props.children, itemsGiven);
      if (this.props.offset + rowsGiven < this.props.total) {
        const rowsNeeded = rowsGiven + (itemsNeeded - itemsHave);
        this.props.requestData(rowsNeeded, this.props.offset);
      } else {
        // Last page reached, we're good.
      }
    }
  };

  renderFlexRow(flexRow) {
    const { focus, checkbox } = this.props;
    const resultRow =
      focus || checkbox
        ? React.cloneElement(flexRow, {
            focus,
            checkbox
          })
        : flexRow;

    return resultRow;
  }

  renderFlexHeader(flexHeader) {
    const { checkbox } = this.props;
    const resultHeader = checkbox
      ? React.cloneElement(flexHeader, {
          checkbox
        })
      : flexHeader;

    return resultHeader;
  }

  renderFlexSeparator(flexSeparator) {
    return flexSeparator;
  }

  renderFlexChild(child) {
    let resultChild;

    switch (child.type) {
      case FlexRow:
        resultChild = this.renderFlexRow(child);
        break;
      case FlexHeader:
        resultChild = this.renderFlexHeader(child);
        break;
      case FlexSeparator:
        resultChild = this.renderFlexSeparator(child);
        break;
      default:
        console.warn(`Unexpected child in grid: ${child.type}`);
        resultChild = child;
    }

    return resultChild;
  }

  render() {
    const { hover, striped, className: userClassName } = this.props;
    const { children } = this.props;

    // We are rendering children up to soft cap, which can be lower than `limit`
    // prop if we resize to smaller height after initial render.
    const { itemsFit } = this.state;
    const renderCap = itemsFit;
    return (
      <Fragment>
        <div
          className={classnames(userClassName, styles.grid, {
            // [styles.gridHoverable]: hover,
            // [styles.gridStriped]: striped
          })}
          ref={node => (this.containerEl = node)}
        >
          <ScaledGrid
            containerEl={this.containerEl}
            onRenderMismatch={this.onRenderMismatch}
          >
            {React.Children.map(children, (child, i) => {
              return i < renderCap ? this.renderFlexChild(child) : null;
            })}
          </ScaledGrid>
        </div>
      </Fragment>
    );
  }
}

SmartGrid.propTypes = {
  // Mandatory
  requestData: PropTypes.func.isRequired, // requestData(limit, offset)

  // Optional behavioral
  autoResize: PropTypes.bool, // Avoid scrollbar (set to false to display all given items on one page).
  checkbox: PropTypes.bool, // Add checkbox to rows, allowing onChange hooks. Also styles for checkboxed rows.

  // Optional stylistic
  hover: PropTypes.bool, // Styles for row hover.
  className: PropTypes.string // User classes for e.g. styling column dimensions
};

SmartGrid.defaultProps = {
  autoResize: true,
  checkbox: true,
  hover: true
};

export default SmartGrid;
