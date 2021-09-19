import React from "react";
import cn from "clsx";
import { css, colors } from "../config/theme.config";

const buttonColors = {
  defaultBorderColor: colors.global.black.value(),
  defaultFG: colors.global.white.value(),
  defaultBG: colors.global.black.value(),
  defaultBorderHoverColor: colors.global.gray9.value(),
  defaultHoverFG: colors.global.white.value(),
  defaultHoverBG: colors.global.gray9.value(),

  primaryBorderColor: colors.global.blue5.value(),
  primaryFG: colors.global.white.value(),
  primaryBG: colors.global.blue5.value(),
  primaryBorderHoverColor: colors.global.blue4.value(),
  primaryHoverFG: colors.global.white.value(),
  primaryHoverBG: colors.global.blue4.value(),

  secondaryBorderColor: colors.global.gray7.value(),
  secondaryFG: colors.global.white.value(),
  secondaryBG: colors.global.gray7.value(),
  secondaryBorderHoverColor: colors.global.gray6.value(),
  secondaryHoverFG: colors.global.white.value(),
  secondaryHoverBG: colors.global.gray6.value(),

  dangerBorderColor: colors.global.red7.value(),
  dangerFG: colors.global.white.value(),
  dangerBG: colors.global.red7.value(),
  dangerBorderHoverColor: colors.global.red5.value(),
  dangerHoverFG: colors.global.white.value(),
  dangerHoverBG: colors.global.red5.value(),
};

const buttonStyle = css`
  background: ${buttonColors.defaultBG};
  color: ${buttonColors.defaultFG};
  border: 2px solid ${buttonColors.defaultBorderColor};
  border-radius: 4px;
  height: 32px;
  padding: 0 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    outline: #000;
    border-color: ${buttonColors.defaultBorderHoverColor};
    color: ${buttonColors.defaultHoverFG};
    background: ${buttonColors.defaultHoverBG};
  }

  &.primary {
    background: ${buttonColors.primaryBG};
    color: ${buttonColors.primaryFG};
    border: 2px solid ${buttonColors.primaryBorderColor};
  }

  &.primary:hover {
    border-color: ${buttonColors.primaryBorderHoverColor};
    color: ${buttonColors.defaultHoverFG};
    background: ${buttonColors.primaryHoverBG};
  }

  &.secondary {
    background: ${buttonColors.secondaryBG};
    color: ${buttonColors.secondaryFG};
    border: 2px solid ${buttonColors.secondaryBorderColor};
  }

  &.secondary:hover {
    border-color: ${buttonColors.secondaryBorderHoverColor};
    color: ${buttonColors.secondaryHoverFG};
    background: ${buttonColors.secondaryHoverBG};
  }

  &.danger {
    background: ${buttonColors.dangerBG};
    color: ${buttonColors.dangerFG};
    border: 2px solid ${buttonColors.dangerBorderColor};
  }

  &.danger:hover {
    border-color: ${buttonColors.dangerBorderHoverColor};
    color: ${buttonColors.dangerHoverFG};
    background: ${buttonColors.dangerHoverBG};
  }
`;

export const Button = ({
  className,
  primary,
  secondary,
  danger,
  children,
  ...props
}) => {
  const classList = cn(buttonStyle, className, {
    primary,
    secondary,
    danger,
  });

  return (
    <>
      <button className={classList} {...props}>
        {children}
      </button>
    </>
  );
};
