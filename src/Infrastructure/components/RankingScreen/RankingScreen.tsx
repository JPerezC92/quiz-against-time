import React, { FC, useEffect } from "react";

import { MainLayout } from "../MainLayout";
import { Text } from "src/Infrastructure/components/Text";
import { useFindRankings } from "src/Infrastructure/hooks/useFindRankings";
import { useZustandViewRankingStore } from "src/Infrastructure/store/ZustandRankingStore";

import styles from "./RankingScreen.module.scss";
import Link from "next/link";

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

        <ol className={styles.RankingList}>
          {rankingList.map((ranking, index) => (
            <li key={index}>
              <Text>
                {ranking.name} - {ranking.score.value}
              </Text>
            </li>
          ))}
        </ol>

        <Link href="/">
          <a className={styles.Button}>Principal</a>
        </Link>
      </MainLayout>
    </>
  );
};
