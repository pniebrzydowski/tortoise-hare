import { formatTime } from './date';

describe("Date Utilities", () => {
  it("Formats a time from seconds to string", () => {
    expect(formatTime(5)).toBe("00:05");
    expect(formatTime(15)).toBe("00:15");
    expect(formatTime(65)).toBe("01:05");
    expect(formatTime(605)).toBe("10:05");
    expect(formatTime(3600)).toBe("01:00:00");
    expect(formatTime(3605)).toBe("01:00:05");
    expect(formatTime(3665)).toBe("01:01:05");
    expect(formatTime(86405)).toBe("24:00:05");
  });
});
