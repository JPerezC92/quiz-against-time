import React, { FC } from "react";

import styles from "./MainLayout.module.scss";

type MainLayoutProps = {};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={`${styles.MainLayout}`}>
        <div className={`${styles.Container}`}>
          <main className={styles.MainContent}>{children}</main>
        </div>
      </div>
    </>
  );
};
