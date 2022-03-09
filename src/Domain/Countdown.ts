import { CountdownPlain } from "./CountdownPlain";

export class Countdown {
  readonly remaining: number;
  readonly minValue: number = 0;

  private readonly _value: number;

  public get countdown(): number {
    return this._value;
  }

  constructor({ remaining, value }: { remaining: number; value: number }) {
    this._value = value;
    this.remaining = remaining;
  }

  public static new({ value }: { value: number }): Countdown {
    return new Countdown({ value: value, remaining: value });
  }

  public static fromPlain(plain: CountdownPlain): Countdown {
    return new Countdown({ value: plain.value, remaining: plain.remaining });
  }

  public timeIsOver(): boolean {
    return this.remaining <= this.minValue;
  }

  public tick(): Countdown {
    return new Countdown({ value: this._value, remaining: this.remaining - 1 });
  }

  public toPlain(): CountdownPlain {
    return {
      value: this._value,
      remaining: this.remaining,
      timeIsOver: this.timeIsOver(),
    };
  }
}
