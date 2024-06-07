import React, { useState } from "react";
import Frame from "react-frame-component";

import Button from "./Button";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setShow((prevValue) => !prevValue)}>
        {" "}
        Toggle{" "}
      </button>
      <br />
      <Frame>
        <>
          <div>hello iframe 1</div>
          {show && <Button />}
          <Button />
        </>
      </Frame>
      <br />
      <Frame>
        <>
          <div>hello iframe 2</div>
          <Button />
        </>
      </Frame>
    </div>
  );
}
