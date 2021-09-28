import React from 'react';
import cn from 'clsx';
import { css, alias } from '../config/theme.config';

const buttonColors = {
  defaultBorderColor: 'transparent',
  defaultFG: alias.default.darker(15).value(),
  defaultBG: alias.default.lighter(25).value(),
  defaultBorderHoverColor: alias.default.lighter(25).value(),
  defaultHoverFG: alias.default.darker(15).value(),
  defaultHoverBG: alias.default.lighter(25).value(),

  primaryBorderColor: 'transparent',
  primaryFG: alias.primary.darker(15).value(),
  primaryBG: alias.primary.lighter(25).value(),
  primaryBorderHoverColor: alias.primary.lighter(25).value(),
  primaryHoverFG: alias.primary.darker(15).value(),
  primaryHoverBG: alias.primary.lighter(25).value(),

  dangerBorderColor: 'transparent',
  dangerFG: alias.danger.darker(15).value(),
  dangerBG: alias.danger.lighter(25).value(),
  dangerBorderHoverColor: alias.danger.lighter(25).value(),
  dangerHoverFG: alias.danger.darker(15).value(),
  dangerHoverBG: alias.danger.lighter(25).value(),
};

const buttonStyle = css`
  padding: 0 16px;

  font-size: 14px;
  line-height: 27px;

  background-color: ${buttonColors.defaultBG};
  color: ${buttonColors.defaultFG};

  border: 1px solid ${buttonColors.defaultBorderColor};
  border-radius: 4px;

  &:hover {
    border-color: ${buttonColors.defaultBorderHoverColor};
    color: ${buttonColors.defaultHoverFG};

    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
  }

  &.primary {
    background: ${buttonColors.primaryBG};
    color: ${buttonColors.primaryFG};
    border: 1px solid ${buttonColors.primaryBorderColor};
  }

  &.primary:hover {
    border-color: ${buttonColors.primaryBorderHoverColor};
    color: ${buttonColors.primaryHoverFG};
    background: ${buttonColors.primaryHoverBG};
  }

  &.danger {
    background: ${buttonColors.dangerBG};
    color: ${buttonColors.dangerFG};
    border: 1px solid ${buttonColors.dangerBorderColor};
  }

  &.danger:hover {
    border-color: ${buttonColors.dangerBorderHoverColor};
    color: ${buttonColors.dangerHoverFG};
    background: ${buttonColors.dangerHoverBG};
  }

  &.pill {
    border-radius: 36px;
  }

  &.ghost {
    border-color: transparent;
    background-color: transparent;
  }

  &.ghost:hover {
    border-color: transparent;
    background-color: transparent;
  }
`;

export const Button = ({
  className,
  primary,
  danger,
  pill,
  ghost,
  children,
  ...props
}) => {
  const classList = cn(buttonStyle, className, {
    primary,
    pill,
    ghost,
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
