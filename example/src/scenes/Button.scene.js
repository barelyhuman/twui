import { Button, Padding, Text } from 'twui'

export const ButtonScene = () => {
  return (
    <>
      <Text label>Buttons</Text>
      <Padding y={2} className='flex flex-wrap'>
        <Button className='m-1'>Default</Button>
        <Button className='m-1' primary>
          Primary
        </Button>
        <Button className='m-1' danger>
          Danger
        </Button>
        <Button className='m-1' pill>
          Default
        </Button>
        <Button className='m-1' primary pill>
          Primary
        </Button>
        <Button className='m-1' danger pill>
          Danger
        </Button>
        <Button className='m-1' ghost>
          Default
        </Button>
        <Button className='m-1' primary ghost>
          Primary
        </Button>
        <Button className='m-1' danger ghost>
          Danger
        </Button>
      </Padding>
      <Padding all={1}>
        <pre>
          <code className='language-javascript'>
            {`import { Button } from "twui";
              
function Buttons() {
  return (
    <>
      <Button>Default</Button>

      <Button primary>Primary</Button>

      <Button danger>Danger</Button>

      <Button pill>Default</Button>

      <Button primary pill>Primary</Button>

      <Button danger pill>Danger</Button>

      <Button ghost>Default</Button>

      <Button primary ghost>Primary</Button>
      
      <Button danger ghost>Danger</Button>
      
    </>
  );
}`}
          </code>
        </pre>
      </Padding>
    </>
  )
}
