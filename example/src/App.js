import React from "react";
import { Spacer, Text } from "twui";
import "twui/dist/css/stone.css";
import { ButtonScene } from "./scenes/Button.scene";
import { InputScene } from "./scenes/Input.scene";
import { LoaderScene } from "./scenes/Loader.scene";

function App() {
  return (
    <>
      <section className="container-boundaries">
        <Text h1>TWUI</Text>
        <Spacer y={2} />
        <LoaderScene />
        <Spacer y={2} />
        <ButtonScene />
        <Spacer y={2} />
        <InputScene />
        <Spacer y={2} />
      </section>
    </>
  );
}

export default App;
