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
    return new Score({ value: plain.score });
  }
}
