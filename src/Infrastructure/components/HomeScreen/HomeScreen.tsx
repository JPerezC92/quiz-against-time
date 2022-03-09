import Link from "next/link";
import React, { FC } from "react";

import styles from "./HomeScreen.module.scss";

type HomeScreenProps = {};

export const HomeScreen: FC<HomeScreenProps> = (props) => {
  return (
    <div>
      <h1>Comprueba cuanto sabes sobre esta fantastica historia</h1>

      <Link href="/quiz">Comenzar</Link>
      <br />
      <Link href="/ranking">Ranking</Link>
    </div>
  );
};
