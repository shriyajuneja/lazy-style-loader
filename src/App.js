import React, { useState } from "react";
import Frame from "react-frame-component";

import Button from "./Button";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Style-loader</h1>
      <button onClick={() => setShow((prevValue) => !prevValue)}>Toggle</button>
      <br />
      <Frame>
        <>
          <div>iframe 1</div>
          {show && <Button />}
          <Button />
        </>
      </Frame>
      <br />
      <Frame>
        <>
          <div>iframe 2</div>
          <Button />
        </>
      </Frame>
    </div>
  );
}
