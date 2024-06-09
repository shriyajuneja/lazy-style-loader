import React, { useLayoutEffect } from "react";
import { useFrame } from "react-frame-component";

import styles from "./Button.module.scss";

const Button = () => {
  const { document } = useFrame();
  useLayoutEffect(() => {
    styles.use({ target: document.head });
    return () => {
      styles.unuse();
    };
  }, []);
  return <button className={styles.locals.button}>Submit</button>;
};

export default Button;
