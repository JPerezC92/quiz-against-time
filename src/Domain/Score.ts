import { Countdown } from "./Countdown";
import { ScorePlain } from "./ScorePlain";

export class Score {
  private readonly _value: number;

  public get value(): number {
    return this._value;
  }

  constructor({ value }: { value: number }) {
    this._value = value;
  }

  public static init(): Score {
    return new Score({ value: 0 });
  }

  public static fromPlain(plain: ScorePlain): Score {
    return new Score({ value: plain.value });
  }

  public toPlain(): ScorePlain {
    return { value: this.value };
  }

  public addPoints(countdown: Countdown): Score {
    const { remaining } = countdown;
    return new Score({ value: this.value + remaining });
  }
}
