import { RankPlain } from "./RankPlain";
import { Score } from "./Score";

export class Rank {
  public readonly name: string;
  public readonly score: Score;

  constructor(props: { name: string; score: Score }) {
    this.name = props.name;
    this.score = props.score;
  }

  public static new(props: { name: string; score: Score }): Rank {
    return new Rank({
      name: props.name,
      score: props.score,
    });
  }

  public static fromPlain(props: RankPlain): Rank {
    return new Rank({
      name: props.name,
      score: Score.fromPlain(props.score),
    });
  }

  public toPlain(): RankPlain {
    return {
      name: this.name,
      score: this.score.toPlain(),
    };
  }
}
