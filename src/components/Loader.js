import React from "react";
import { colors, css } from "../config/theme.config";
import cn from "clsx";

const loaderColors = {
  default: colors.global.black,
  primary: colors.global.blue4,
  secondary: colors.global.gray5,
  danger: colors.global.red4,
};

const loader = css`
  display: inline-block;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-radius: 50%;
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 400ms linear infinite;

  // Default colors
  border-top-color: ${loaderColors.default.value()};
  border-left-color: ${loaderColors.default.value()};
  border-bottom-color: #efefef;
  border-right-color: #efefef;

  &.primary {
    border-top-color: ${loaderColors.primary.value()};
    border-left-color: ${loaderColors.primary.value()};
  }
  &.secondary {
    border-top-color: ${loaderColors.secondary.value()};
    border-left-color: ${loaderColors.secondary.value()};
  }
  &.danger {
    border-top-color: ${loaderColors.danger.value()};
    border-left-color: ${loaderColors.danger.value()};
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = ({ primary, secondary, danger, ...props }) => {
  const classList = cn(loader, { primary, secondary, danger });
  return <div className={classList}></div>;
};
