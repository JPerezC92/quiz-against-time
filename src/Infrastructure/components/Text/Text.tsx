import React, { FC } from "react";

import styles from "./Text.module.scss";

type TextProps = {};

export const Text: FC<TextProps> = ({ children }) => {
  return <p className={styles.Text}>{children}</p>;
};
