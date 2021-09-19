import { Button, Padding, Spacer, Text } from "twui";

export const ButtonScene = () => {
  return (
    <>
      <Text label>Buttons</Text>
      <Padding y={2} className="flex">
        <Button>Default</Button>
        <Spacer x={1} inline />
        <Button primary>Primary</Button>
        <Spacer x={1} inline />
        <Button secondary>Secondary</Button>
        <Spacer x={1} inline />
        <Button danger>Danger</Button>
      </Padding>
      <Padding all={1}>
        <pre>
          <code className="language-javascript">
            {`import { Button } from "twui";
              
function Buttons() {
  return (
    <>
      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button danger>Danger</Button>
    </>
  );
}`}
          </code>
        </pre>
      </Padding>
    </>
  );
};
