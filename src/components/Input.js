import React from "react";
import { colors, css } from "../config/theme.config";
import cn from "clsx";

const inputColors = {
  defaultBorderColor: colors.global.black.value(),
  defaultFG: colors.global.black.value(),
  defaultBG: "transparent",
  defaultBorderHoverColor: colors.global.gray9.value(),
  defaultHoverFG: colors.global.white.value(),
  defaultHoverBG: colors.global.gray9.value(),

  dangerBorderColor: colors.global.red7.value(),
  dangerFG: colors.global.black.value(),
  dangerBG: "transparent",
  dangerBorderHoverColor: colors.global.red5.value(),
  dangerHoverFG: colors.global.white.value(),
  dangerHoverBG: colors.global.red5.value(),
};

const selectors = [
  'input[type="text"]',
  'input[type="password"]',
  'input[type="email"]',
];

const inputWrapperStyle = css`
  ${selectors.map((item) => `& > ${item}`).join(",")} {
    background: ${inputColors.defaultBG};
    color: ${inputColors.defaultFG};
    border: 2px solid ${inputColors.defaultBorderColor};
    border-radius: 4px;
    height: 32px;
    padding: 0 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
  }

  ${selectors.map((item) => `& > ${item}:hover,& > ${item}:focus,`).join(",")} {
    border-color: ${inputColors.defaultBorderHoverColor};
    outline: #000;
  }

  ${selectors.map((item) => `& > ${item}.danger`).join(",")} {
    border-color: ${inputColors.dangerBorderColor};
    background: ${inputColors.dangerBG};
    color: ${inputColors.dangerFG};
  }
`;

const inputStyle = css``;

export const Input = ({
  className,
  primary,
  secondary,
  danger,
  type = "text",
  ...props
}) => {
  const classList = cn(inputStyle, className, { primary, secondary, danger });
  return (
    <>
      <div className={inputWrapperStyle}>
        <input className={classList} type={type} {...props} />
      </div>
    </>
  );
};
