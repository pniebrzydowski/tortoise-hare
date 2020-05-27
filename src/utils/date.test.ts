import {
  formatTime,
  getDateString,
  getFutureDate,
  isDateInFuture,
  sortByDate,
  timeStringToSeconds
} from './date';

describe("Time Utilities", () => {
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

  it("Converts a time string into seconds", () => {
    expect(timeStringToSeconds("00:05")).toBe(5);
    expect(timeStringToSeconds("00:15")).toBe(15);
    expect(timeStringToSeconds("01:05")).toBe(65);
    expect(timeStringToSeconds("10:05")).toBe(605);
    expect(timeStringToSeconds("01:00:00")).toBe(3600);
    expect(timeStringToSeconds("01:00:05")).toBe(3605);
    expect(timeStringToSeconds("01:01:05")).toBe(3665);
    expect(timeStringToSeconds("24:00:05")).toBe(86405);
  });
});

describe("Date Utilities", () => {
  it("Checks if a date is in the future", () => {
    expect(isDateInFuture("2000-01-01")).toBeFalsy();
    expect(isDateInFuture(getDateString(new Date()))).toBeFalsy();
    expect(isDateInFuture(getFutureDate())).toBeTruthy();
  });

  it("Sorts dates", () => {
    const date1 = "2000-01-01";
    const date2 = "2010-01-01";
    const date3 = "2020-01-01";
    const dateArray = [date3, date1, date2];
    const sortedDateArray = dateArray.sort(sortByDate);
    expect(sortedDateArray[0]).toBe(date1);
    expect(sortedDateArray[1]).toBe(date2);
    expect(sortedDateArray[2]).toBe(date3);
  });
});
