/* global tw */
import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { width as twWidth } from "../../tailwind";

const Wrapper = styled.svg`
  ${tw("stroke-current absolute")};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const icons = {
  triangle: {
    shape: (
      <polygon
        strokeWidth="1px"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="14.921,2.27 28.667,25.5 1.175,25.5 "
      />
    ),
    viewBox: "0 0 30 30"
  },
  circle: {
    shape: (
      <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
    ),
    viewBox: "0 0 30 30"
  },
  arrowUp: {
    shape: (
      <React.Fragment>
        <path d="M990,204.2l-21.6,32.4c0,0-54-61.1-152.8-50.4C716.7,197,542.3,297.7,515.3,518.9C488.3,740,594.4,981,594.4,981H116.1c0,0-12.6-79.1,18-230.2c30.6-151,75.5-251.7,152.8-395.6C364.2,211.4,488.3,92.7,668.1,76.5C847.9,60.4,990,204.2,990,204.2z M20.8,740.1L10,830l88.1,10.8l16.2-93.5L20.8,740.1z M193.4,472.1l-82.7-32.4l-27,75.5l84.5,27L193.4,472.1z M333.7,243.8l-62.9-41.4l-50.3,55.7l64.7,43.2L333.7,243.8z M515.3,96.3l-43.2-48.6l-59.3,30.6l43.2,52.1L515.3,96.3z M707.7,69.3l-7.2-46.8L623.2,19L634,71.2L707.7,69.3z M932.5,117.9l-59.3-43.2l-1.8,32.4l50.3,27L932.5,117.9z M862.3,240.2l48.6,5.4V224l-48.6-10.8V240.2z M707.7,236.6l23.4,43.1l34.2-27L758,224L707.7,236.6z M669.9,346.3l-36-53.9l-37.8,34.2l52.1,57.5L669.9,346.3z M538.7,488.3l61.1,52.2l14.4-59.3L562,441.6L538.7,488.3z M533.3,668.1l75.5,32.4l-3.6-59.3l-68.3-36L533.3,668.1z M671.7,898.3l-34.2-70.1h-79.1l18,64.7L671.7,898.3z" />
      </React.Fragment>
    ),
    viewBox: "0 0 30 42"
  },
  upDown: {
    shape: (
      <React.Fragment>
        <path d="M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z" />
        <path d="M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z" />
      </React.Fragment>
    ),
    viewBox: "0 0 30 44.58"
  },
  box: {
    shape: (
      <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
    ),
    viewBox: "0 0 30 30"
  },
  hexa: {
    shape: (
      <polygon
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
      />
    ),
    viewBox: "0 0 30 30"
  }
};

const SVG = ({ stroke, fill, width, icon, left, top, className }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    className={className}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf([
    "triangle",
    "circle",
    "arrowUp",
    "upDown",
    "box",
    "hexa"
  ]).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string
};

SVG.defaultProps = {
  stroke: "transparent",
  width: 8,
  fill: "none",
  left: "0%",
  top: "0%",
  className: "fancy-icon"
};
