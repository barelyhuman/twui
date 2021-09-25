import React from 'react'
import cn from 'clsx'
import { css, colors } from '../config/theme.config'

const buttonColors = {
  defaultBorderColor: 'transparent',
  defaultFG: colors.alias.default.value(),
  defaultBG: colors.alias.default.lighter(25).value(),
  defaultBorderHoverColor: 'transparent',
  defaultHoverFG: colors.alias.default.value(),
  defaultHoverBG: colors.alias.default.lighter(20).value(),

  primaryBorderColor: 'transparent',
  primaryFG: colors.alias.primary.value(),
  primaryBG: colors.alias.primary.lighter(25).value(),
  primaryBorderHoverColor: 'transparent',
  primaryHoverFG: colors.alias.primary.value(),
  primaryHoverBG: colors.alias.primary.lighter(20).value(),

  dangerBorderColor: 'transparent',
  dangerFG: colors.alias.danger.value(),
  dangerBG: colors.alias.danger.lighter(25).value(),
  dangerBorderHoverColor: 'transparent',
  dangerHoverFG: colors.alias.danger.value(),
  dangerHoverBG: colors.alias.danger.lighter(20).value()
}

const buttonStyle = css`
  background: ${buttonColors.defaultBG};
  color: ${buttonColors.defaultFG};
  border-radius: 6px;
  border: 1px solid ${buttonColors.defaultBorderColor};
  height: 36px;
  padding: 0 24px;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    outline: #000;
    cursor: pointer;
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
    color: ${buttonColors.primaryHoverFG};
    background: ${buttonColors.primaryHoverBG};
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

  &.pill {
    border-radius: 36px;
  }

  &.ghost {
    background-color: transparent;
  }

  &.ghost:hover {
    background-color: transparent;
  }
`

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
    danger
  })

  return (
    <>
      <button className={classList} {...props}>
        {children}
      </button>
    </>
  )
}
