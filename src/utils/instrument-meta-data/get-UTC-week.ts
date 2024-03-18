/**
 * Calculates the UTC week number for a given date.
 * The week number is based on the ISO 8601 standard, where week 1 is the week with the first Thursday of the year.
 * @param date - The date for which to calculate the week number.
 * @returns The UTC week number.
 */
export function getUTCWeek(date: Date): number {
  // Create a new date object for the target date
  let target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

  // ISO week date weeks start on monday
  // so correct the day number
  let dayNr = (target.getUTCDay() + 6) % 7;

  // ISO 8601 states that week 1 is the week
  // with the first Thursday of that year.
  // Set the target to the first Thursday of the year
  // First set the target to January 1st
  let januaryFirst = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));

  // Not a Thursday? Correct the date to the next Thursday
  let dayDiff = (4 - januaryFirst.getUTCDay() + 7) % 7;
  januaryFirst.setUTCDate(januaryFirst.getUTCDate() + dayDiff);

  // Adjust the target date back to the Monday of the same week
  target.setUTCDate(target.getUTCDate() - dayNr + 3);

  // The week number is the number of weeks between the
  // first Thursday of the year and the Thursday in the target week
  // 604800000 is the number of milliseconds in a week
  return Math.ceil((target.getTime() - januaryFirst.getTime()) / 604800000);
}
