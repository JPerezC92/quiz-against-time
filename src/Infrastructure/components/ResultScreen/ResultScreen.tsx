import React, { ChangeEventHandler, FC, useState } from "react";
import { useRouter } from "next/router";
import { useCreateRank } from "src/Infrastructure/hooks/useCreateRank";

import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { MainLayout } from "../MainLayout";

import styles from "./ResultScreen.module.scss";
import { Text } from "src/Infrastructure/components/Text";

type ResultScreenProps = {};

export const ResultScreen: FC<ResultScreenProps> = (props) => {
  const router = useRouter();
  const { score } = useZustandViewQuizStore();
  const { createRankRun } = useCreateRank();
  const [name, setName] = useState("");

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(() => e.target.value);
  };

  return (
    <MainLayout>
      <h2 className={styles.Title_2}>Puntuacion: {score.value}</h2>

      <label htmlFor="name" className={styles.Label}>
        <Text>Introduce tu nombre : </Text>
        <input
          className={styles.Input}
          onChange={handleOnChange}
          type="text"
          name="name"
          id="name"
          value={name}
        />
      </label>

      <button
        className={styles.Button}
        onClick={() => {
          createRankRun({ name, score });
          router.push("/ranking");
        }}
        type="button"
      >
        Guardar
      </button>
    </MainLayout>
  );
};
