import React, { PureComponent, Fragment } from "react";
import classnames from "classnames";
import {
  SmartGrid,
  FlexRow as Row,
  FlexHeader as Header
} from "../../Components/Grid";
import styles from "./List.module.css";

import Icon from "../../Components/Icon";

import cams from "./mockData";

import "../../Styleguide/fonts/fonts.css";

import attention from "../../Styleguide/Svg/attention.svg";

let aaa = (color, size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width=${size} height=${size} viewBox="0 0 ${size} ${size}">
    <g fill="none" fill-rule="evenodd">
      <circle cx=${size / 2} cy=${size / 2} r=${size / 2} fill=${color}/>
      <path stroke="#FFF" stroke-width="2" d="M6 4.536a4 4 0 1 0 4.034.02"/>
      <path stroke="#FFF" d="M7.833 3.833h1V7.5h-1z"/>
    </g>
  </svg>`;

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
            <span className={styles.camText}>{code}</span>
            <span className={styles.camIP}>192.165.1.1</span>
          </div>
        </div>
        <div className={classnames(styles.columnValue, styles.row)}>
          <span className={classnames(styles.marginBottom4, styles.vendor)}>
            {vendor[Math.floor(Math.random() * vendor.length)]}
          </span>
          <span className={styles.vendor}>
            {model[Math.floor(Math.random() * model.length)]}
          </span>
        </div>
        <span className={styles.columnValue}>
          <img
            alt=""
            src={attention}
            className={classnames(
              styles.icon,
              styles.marginRightIcon,
              styles.imageIcon
            )}
          />
          <span className={styles.vendor}>
            {Math.floor(Math.random() * 2) === 0 ? "Активна" : "Отключена"}
          </span>
        </span>
        <span className={styles.columnValue}>
          <img
            alt=""
            src={attention}
            className={classnames(
              styles.icon,
              styles.marginRightIcon,
              styles.imageIcon
            )}
          />
          {fraction[Math.floor(Math.random() * fraction.length)]}
        </span>
        <span className={styles.columnValue}>
          <img
            alt=""
            src={attention}
            className={classnames(
              styles.icon,
              styles.marginRightIcon,
              styles.imageIcon
            )}
          />
          {fraction[Math.floor(Math.random() * fraction.length)]}
        </span>
        <span className={styles.columnValue}>
          {Math.floor(Math.random() * 2) === 0 ? (
            <Icon name="okay-list" size={16} className={styles.iconBlue} />
          ) : (
            ""
          )}
        </span>
        <span className={styles.columnValue}>
          {Math.floor(Math.random() * 2) === 0 ? (
            <Icon name="okay-list" size={16} className={styles.iconBlue} />
          ) : (
            <Icon name="clock-list" size={16} className={styles.iconBlue} />
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
      <div className={styles.container}>
        <SmartGrid className={styles.smartGrid}>
          <Header checkbox={true}>
            <div className={styles.columnName}>
              Camera
              <Icon
                name="arrow-active"
                size={16}
                className={classnames(
                  styles.icon,
                  styles.iconBlue2,
                  styles.marginLeftIcon
                )}
              />
            </div>
            <div className={styles.columnName}>
              Vendor / Model
              <Icon
                name="arrow-passive-down"
                size={16}
                className={classnames(
                  styles.icon,
                  styles.iconBlue,
                  styles.marginLeftIcon
                )}
              />
              <Icon
                name="filter"
                size={16}
                className={classnames(
                  styles.icon,
                  styles.iconBlue,
                  styles.marginLeftIcon
                )}
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
