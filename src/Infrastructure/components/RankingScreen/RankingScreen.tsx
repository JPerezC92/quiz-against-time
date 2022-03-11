import Link from "next/link";
import React, { FC, useEffect } from "react";
import { useFindRankings } from "src/Infrastructure/hooks/useFindRankings";
import { useZustandViewRankingStore } from "src/Infrastructure/store/ZustandRankingStore";
import { MainLayout } from "../MainLayout";

import styles from "./RankingScreen.module.scss";

type RankingScreenProps = {};

export const RankingScreen: FC<RankingScreenProps> = (props) => {
  const { rankingList } = useZustandViewRankingStore();

  const { findRankingsRun } = useFindRankings();

  useEffect(() => {
    findRankingsRun();
  }, [findRankingsRun]);

  return (
    <>
      <MainLayout>
        <h1 className={styles.Title}>Rankings</h1>
        <Link href="/">home</Link>

        <ol>
          {rankingList.map((ranking, index) => (
            <li key={index}>
              {ranking.name} - {ranking.score.value}
            </li>
          ))}
        </ol>
      </MainLayout>
    </>
  );
};
