import { getRunnerResultForRace } from './utils';

describe("Race Utilities", () => {
  it("Gets a result for a runner for a specific race", () => {
    expect(getRunnerResultForRace("1", "1")).toBeTruthy();
    expect(getRunnerResultForRace("1", "3")).toBeFalsy();
  });
});
