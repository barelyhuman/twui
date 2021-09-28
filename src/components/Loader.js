import cn from 'clsx'
import React from 'react'
import { alias, css } from '../config/theme.config'

const loaderColors = {
  default: alias.default.darker(10).value(),
  primary: alias.primary.value(),
  danger: alias.danger.lighter(5).value()
}

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
  border-top-color: ${loaderColors.default};
  border-left-color: ${loaderColors.default};
  border-bottom-color: #efefef;
  border-right-color: #efefef;

  &.primary {
    border-top-color: ${loaderColors.primary};
    border-left-color: ${loaderColors.primary};
  }
  &.danger {
    border-top-color: ${loaderColors.danger};
    border-left-color: ${loaderColors.danger};
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
`

export const Loader = ({ primary, danger, ...props }) => {
  const classList = cn(loader, { primary, danger })
  return <div className={classList} />
}
