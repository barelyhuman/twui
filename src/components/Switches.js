import cn from 'clsx'
import React from 'react'
import { alias, css } from '../config/theme.config'

const checkboxColors = {
  defaultBG: alias.default.lighter(25).value(),
  defaultFG: alias.default.darker(20).value(),

  primaryBG: alias.primary.lighter(25).value(),
  primaryFG: alias.primary.darker(20).value(),

  successBG: alias.success.lighter(25).value(),
  successFG: alias.success.darker(20).value(),

  dangerBG: alias.danger.lighter(25).value(),
  dangerFG: alias.danger.darker(20).value()
}

const switchContainer = css`
  display: flex;
  position: relative;
`

const switchControl = css`
  background: ${checkboxColors.defaultBG};
  color: ${checkboxColors.defaultFG};
  position: absolute;
  left: 0;
  height: 1em;
  width: 1em;
  border: 2px solid ${checkboxColors.defaultBG};
  border-radius: 4px;

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }

  &.primary {
    border-color: ${checkboxColors.primaryBG};
    background: ${checkboxColors.primaryBG};
    color: ${checkboxColors.primaryFG};
  }

  &.success {
    border-color: ${checkboxColors.successBG};
    background: ${checkboxColors.successBG};
    color: ${checkboxColors.successFG};
  }

  &.danger {
    border-color: ${checkboxColors.dangerBG};
    background: ${checkboxColors.dangerBG};
    color: ${checkboxColors.dangerFG};
  }
`

const switchInput = css`
  opacity: 0;
  height: 1em;
  width: 1em;

  &:checked + .${switchControl} svg {
    transform: scale(1);
  }

  &:disabled + .${switchControl} {
    border-color: ${(theme) => theme.alias.disabled.value()};
    background: ${(theme) => theme.alias.disabled.value()};
    color: ${(theme) => theme.alias.disabled.value()};
    cursor: not-allowed;
  }
`

const switchLabel = css``

export const Checkbox = ({
  primary,
  danger,
  success,
  label,
  className,
  ...props
}) => {
  const classList = cn(switchControl, className, { primary, success, danger })

  return (
    <>
      {/* <Element {...props} /> */}
      <label>
        <span className={switchContainer}>
          <input type='checkbox' className={switchInput} {...props} />
          <span className={classList}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              aria-hidden='true'
              focusable='false'
            >
              <path
                fill='none'
                stroke='currentColor'
                stroke-width='3'
                d='M1.73 12.91l6.37 6.37L22.79 4.59'
              />
            </svg>
          </span>
        </span>
        <span className={switchLabel}>{label}</span>
      </label>
    </>
  )
}
