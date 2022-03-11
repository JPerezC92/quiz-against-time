import React, { FC } from "react";
import Link from "next/link";

import { MainLayout } from "../MainLayout";

import styles from "./HomeScreen.module.scss";

type HomeScreenProps = {};

export const HomeScreen: FC<HomeScreenProps> = () => {
  return (
    <>
      <MainLayout>
        <h1 className={styles.Title}>Lord of the Rings Quiz</h1>

        <div className={styles.ButtonsContainer}>
          <Link href="/quiz">
            <a className={styles.Button}>Comenzar</a>
          </Link>

          <Link href="/ranking">
            <a className={styles.Button}>Ranking</a>
          </Link>
        </div>
      </MainLayout>
    </>
  );
};
