import React from 'react'
import { Spacer, Checkbox, Padding, Text } from 'twui'

export const CheckboxScene = () => {
  return (
    <>
      <Text label>Checkbox</Text>
      <Padding y={2} className='flex'>
        <Checkbox checkbox />
        <Spacer x={1} inline />
        <Checkbox checkbox primary checked />
        <Spacer x={1} inline />
        <Checkbox checkbox success />
        <Spacer x={1} inline />
        <Checkbox checkbox danger />
        <Spacer x={1} inline />
        <Checkbox checkbox danger disabled />
      </Padding>
      <Padding all={1}>
        <pre>
          <code className='language-javascript'>
            {`import { Checkbox } from "twui";
              
function Checkbox() {
  return (
    <>
      <Checkbox checkbox />

      <Checkbox checkbox primary checked />

      <Checkbox checkbox success />

      <Checkbox checkbox danger />

      <Checkbox checkbox danger disabled />
    </>
  );
}`}
          </code>
        </pre>
      </Padding>
    </>
  )
}
