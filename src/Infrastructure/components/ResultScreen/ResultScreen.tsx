import { useRouter } from "next/router";
import React, { ChangeEventHandler, FC, useState } from "react";
import { useCreateRank } from "src/Infrastructure/hooks/useCreateRank";

import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";

import styles from "./ResultScreen.module.scss";

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
    <>
      <h1>Ranking Screen</h1>

      <h1>Puntuacion: {score.value}</h1>

      <label htmlFor="name">Introduce un nombre</label>
      <input
        onChange={handleOnChange}
        type="text"
        name="name"
        id="name"
        value={name}
      />
      <button
        onClick={() => {
          createRankRun({ name, score });
          router.push("/ranking");
        }}
        type="button"
      >
        Guardar
      </button>
    </>
  );
};
