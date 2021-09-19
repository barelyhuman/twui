import React from "react";
import { Spacer, Input, Padding, Text } from "twui";

export const InputScene = () => {
  return (
    <>
      <Text label>Inputs</Text>
      <Padding y={2} className="flex">
        <Input placeholder="Placeholder" />
        <Spacer x={1} inline />
        <Input danger placeholder="Placeholder" />
        <Spacer x={1} inline />
      </Padding>
      <Padding all={1}>
        <pre>
          <code className="language-javascript">
            {`import { Input } from "twui";
              
function Inputs() {
  return (
    <>
      <Input placeholder="Placeholder" />
      <Input danger placeholder="Placeholder" />
    </>
  );
}`}
          </code>
        </pre>
      </Padding>
    </>
  );
};
