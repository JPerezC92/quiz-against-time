import React, { FC } from "react";
import { useZustandViewRankingStore } from "src/Infrastructure/store/ZustandRankingStore";

import styles from "./RankingScreen.module.scss";

type RankingScreenProps = {};

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  const { rankingList } = useZustandViewRankingStore();

  return (
    <>
      <h1>Ranking Screen</h1>

      <ul>
        {rankingList.map((ranking, index) => (
          <li key={index}>
            {ranking.name} - {ranking.score.value}
          </li>
        ))}
      </ul>
    </>
  );
};
