import { CountdownPlain } from "./CountdownPlain";

export class Countdown {
  private readonly _value: number;

  public get countdown(): number {
    return this._value;
  }

  constructor({ value }: { value: number }) {
    this._value = value;
  }

  public static fromPlain(plain: CountdownPlain): Countdown {
    return new Countdown({ value: plain.value });
  }

  public toPlain(): CountdownPlain {
    return { value: this._value };
  }
}
