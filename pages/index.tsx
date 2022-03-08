import type { NextPage } from "next";

import { Quiz } from "src/Quiz";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Quiz />
    </div>
  );
};

export default Home;
