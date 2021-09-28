import React from 'react'
import { colors, css, alias } from '../config/theme.config'
import cn from 'clsx'

const inputColors = {
  defaultBorderColor: alias.default.lighter(25).value(),
  defaultBG: alias.default.lighter(25).value(),
  defaultFG: colors.global.black.lighter(10).value(),

  defaultBorderHoverColor: alias.default.lighter(20).value(),
  defaultHoverBG: alias.default.lighter(20).value(),
  defaultHoverFG: colors.global.black.lighter(10).value(),

  dangerBorderColor: alias.danger.value(),
  dangerBG: alias.danger.value(),
  dangerFG: colors.global.white.value(),

  dangerBorderHoverColor: alias.danger.value(),
  dangerHoverBG: alias.danger.value(),
  dangerHoverFG: colors.global.white.value(),

  successBorderColor: alias.success.value(),
  successBG: alias.success.value(),
  successFG: colors.global.white.value(),

  successBorderHoverColor: alias.success.value(),
  successHoverBG: alias.success.value(),
  successHoverFG: colors.global.white.value()
}

const selectors = [
  'input[type="text"]',
  'input[type="password"]',
  'input[type="email"]'
]

const inputWrapperStyle = css`
  ${selectors.map((item) => `& > ${item}`).join(',')} {
    background: ${inputColors.defaultBG};
    color: ${inputColors.defaultFG};
    border: 2px solid ${inputColors.defaultBorderColor};
    border-radius: 4px;
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: #000;
    transition: all 0.2s ease;
  }

  // on input:focus
  ${selectors.map((item) => `& > ${item}:focus`).join(',')} {
    border-color: ${inputColors.defaultBorderHoverColor};
    background: ${inputColors.defaultHoverBG};
    color: ${inputColors.defaultHoverFG};
  }

  // on input.danger
  ${selectors.map((item) => `& > ${item}.danger`).join(',')} {
    border-color: ${inputColors.dangerBorderColor};
    // background: ${inputColors.dangerBG};
    // color: ${inputColors.dangerFG};
  }

  // on input.danger:hover
  ${selectors.map((item) => `& > ${item}.danger:hover`).join(',')} {
    border-color: ${inputColors.dangerBorderHoverColor};
    // background: ${inputColors.dangerHoverBG};
    // color: ${inputColors.dangerHoverFG};
  }

  // on input.success
  ${selectors.map((item) => `& > ${item}.success`).join(',')} {
    border-color: ${inputColors.successBorderColor};
    // background: ${inputColors.successBG};
    // color: ${inputColors.successFG};
  }

  // on input.success:hover
  ${selectors.map((item) => `& > ${item}.success:hover`).join(',')} {
    border-color: ${inputColors.successBorderHoverColor};
    // background: ${inputColors.successHoverBG};
    // color: ${inputColors.successHoverFG};
  }
`

const inputStyle = css``

const unsupportedTypes = ['radio', 'checkbox', 'date', 'time']

export const Input = ({
  className,
  primary,
  secondary,
  success,
  danger,
  type = 'text',
  ...props
}) => {
  if (unsupportedTypes.indexOf(type) > -1) {
    throw new Error(
      `TWUI: <Input /> doesn't support the following types: ${unsupportedTypes.join(
        ','
      )}`
    )
  }

  const classList = cn(inputStyle, className, {
    primary,
    secondary,
    success,
    danger
  })
  return (
    <>
      <div className={inputWrapperStyle}>
        <input className={classList} type={type} {...props} />
      </div>
    </>
  )
}
