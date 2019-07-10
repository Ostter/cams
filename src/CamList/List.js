import React, { PureComponent, Fragment } from "react";
import classnames from "classnames";
import {
  SmartGrid,
  FlexRow as Row,
  FlexHeader as Header
} from "../Components/Grid";
import styles from "./List.module.css";
import typography from "../Styleguide/typography.module.css";

import Icon from "../Components/Icon";

import cams from "./mockData";

import "../Styleguide/fonts/fonts.css";

class Item extends PureComponent {
  render() {
    const { code } = this.props.cam;
    const vendor = ["Axis", "Optelecom", "Bosch"];
    const model = ["P654373", "NKF 25", "Autodome IP 8000"];
    const fraction = ["1", "2/2", "3/3", "1/2"];
    const color = ["iconGreen", "iconOrange", "iconRed"];
    const styleColor = styles[color[Math.floor(Math.random() * color.length)]];
    return (
      <Fragment>
        <div className={styles.columnValue}>
          <div className={styles.image} />
          <div className={styles.row}>
            <span>{code}</span>
            <span>192.165.1.1</span>
          </div>
        </div>
        <div className={classnames(styles.columnValue, styles.row)}>
          <span>{vendor[Math.floor(Math.random() * vendor.length)]}</span>
          <span>{model[Math.floor(Math.random() * model.length)]}</span>
        </div>
        <span className={styles.columnValue}>
          <Icon
            name="switch"
            size={16}
            className={classnames(styles.icon, styles.marginRightIcon, styleColor)}
          />
          {Math.floor(Math.random() * 2) === 0 ? "Активна" : "Отключена"}
        </span>
        <span className={styles.columnValue}>
          <Icon
            name="switch"
            size={16}
            className={classnames(styles.icon, styles.marginRightIcon, styleColor)}
          />
          {fraction[Math.floor(Math.random() * fraction.length)]}
        </span>
        <span className={styles.columnValue}>
          <Icon
            name="switch"
            size={16}
            className={classnames(styles.icon, styles.marginRightIcon, styleColor)}
          />
          {fraction[Math.floor(Math.random() * fraction.length)]}
        </span>
        <span className={styles.columnValue}>
          {Math.floor(Math.random() * 2) === 0 ? (
            <Icon name="checkmark" size={16} className={styles.iconBlue} />
          ) : (
            ""
          )}
        </span>
        <span className={styles.columnValue}>
          {Math.floor(Math.random() * 2) === 0 ? (
            <Icon name="checkmark" size={16} className={styles.iconBlue} />
          ) : (
            ""
          )}
        </span>
      </Fragment>
    );
  }
}

export default class CamList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cams: []
    };
  }

  componentDidMount() {
    if (cams.length !== 0) {
      this.setState({ cams });
    }
  }

  render() {
    const { cams } = this.state;

    return (
      <div className={classnames(styles.container, typography.futuraPTBook)}>
        <SmartGrid>
          <Header checkbox={true}>
            <div className={styles.columnName}>
                Camera
                <Icon
                  name="arrow-up"
                  size={16}
                  className={classnames(styles.icon, styles.iconBlue2, styles.marginLeftIcon)}
                />
            </div>
            <div className={styles.columnName}>
                Vendor / Model
                <Icon
                  name="shift-down"
                  size={20}
                  className={classnames(styles.icon, styles.iconBlue, styles.marginLeftIcon)}
                />
                <Icon
                  name="filter-1"
                  size={16}
                  className={classnames(styles.icon, styles.iconBlue, styles.marginLeftIcon)}
                />


            </div>
            <div className={styles.columnName}>Availability</div>
            <div className={styles.columnName}>Detectors</div>
            <div className={styles.columnName}>Archive</div>
            <div className={styles.columnName}>PTZ</div>
            <div className={styles.columnName}>License</div>
          </Header>
          {cams.map((cam, idx) => (
            <Row key={idx} checkbox={true}>
              <Item key={idx} cam={cam} />
            </Row>
          ))}
        </SmartGrid>
      </div>
    );
  }
}


