import React, { useLayoutEffect } from "react";
import { useFrame } from "react-frame-component";

import styles from "./Button.module.scss";

const Button = () => {
  const { document } = useFrame();
  useLayoutEffect(() => {
    // document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];
    // const node = document.createElement("div");
    // const shadow = node.attachShadow({ mode: "open" });

    //Adopt the same sheet into the shadow DOM
    // shadow.adoptedStyleSheets = [styles];

    // const iframeHead = document.head;
    // const styleElement = document.createElement("style");
    // styleElement.textContent = styles.toString();
    // iframeHead.appendChild(styleElement);
    styles.use({ target: document.head });
    // console.log("jd--", styles.locals["button"], styles.toString());
    return () => {
      styles.unuse();
    };
  }, []);
  return <button className={styles.locals.button}>Submit</button>;
};

export default Button;
