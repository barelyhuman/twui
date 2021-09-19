import { Padding, Spacer, Loader } from "twui";
import { Text } from "twui";

export function LoaderScene() {
  return (
    <>
      <Text label>Loaders</Text>
      <Padding y={2} className="flex">
        <Spacer x={1} inline />
        <Loader />
        <Spacer x={1} inline />
        <Loader primary />
        <Spacer x={1} inline />
        <Loader secondary />
        <Spacer x={1} inline />
        <Loader danger />
        <Spacer x={1} inline />
      </Padding>
      <Padding all={1}>
        <pre>
          <code className="language-javascript">
            {`import { Loader } from "twui";
              
function Loaders() {
  return (
    <>
      <Loader />
      <Loader primary />
      <Loader secondary />
      <Loader danger />
    </>
  );
}`}
          </code>
        </pre>
      </Padding>
    </>
  );
}
