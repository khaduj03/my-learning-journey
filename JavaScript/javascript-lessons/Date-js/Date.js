// -------------------------------- Create Date object
const now = new Date(); // Current date and time

// -------------------------------- Create date with specific date and time
const birthday = new Date("2000-05-23"); // YYYY-MM-DD
const custom = new Date(2023, 4, 23, 14, 30); // Year, Month(0-based), Day, Hour, Min

// -------------------------------- Date formats
new Date("2023"); // Jan 1, 2023
new Date("2023-05-23"); // May 23, 2023 (ISO format preferred)
new Date("05/23/2023"); // May 23, 2023 (MM/DD/YYYY - US format)

// -------------------------------- Timestamps
const ms = Date.now(); // Milliseconds since Jan 1, 1970
const dateFromMs = new Date(ms); // Convert ms to date

// -------------------------------- get methods
now.getFullYear(); // 2025
now.getMonth(); // 0–11 (0 = January)
now.getDate(); // 1–31
now.getDay(); // 0–6 (0 = Sunday)
now.getHours(); // 0–23
now.getMinutes(); // 0–59
now.getSeconds(); // 0–59
now.getMilliseconds(); // 0–999
now.getTime(); // Get time in milliseconds (timestamp)

// -------------------------------- set methods
now.setFullYear(2030);
now.setMonth(6); // July (0-based)
now.setDate(15);
now.setHours(10);
now.setMinutes(30);

// -------------------------------- to methods (string conversion)
now.toString(); // Full date string
now.toDateString(); // Only date
now.toTimeString(); // Only time
now.toUTCString(); // UTC time string
now.toISOString(); // ISO 8601 format
now.toLocaleDateString(); // Local date only
now.toLocaleTimeString(); // Local time only

// -------------------------------- Comparing Dates
const d1 = new Date("2024-01-01");
const d2 = new Date("2025-01-01");
console.log(d1 < d2); // true
console.log(d1.getTime() === d2.getTime()); // false

// -------------------------------- Date difference (in days)
const diffMs = d2 - d1; // Difference in milliseconds
const diffDays = diffMs / (1000 * 60 * 60 * 24); // Convert ms to days

// -------------------------------- Get today's date in custom format
const today = new Date();
const formatted = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;

// -------------------------------- Useful date tricks
// Get last day of a month
const lastDay = new Date(2025, 5, 0); // June 0 = last day of May
lastDay.getDate(); // 31

// Add 7 days to current date
const future = new Date();
future.setDate(future.getDate() + 7);

// -------------------------------- Parse date string to timestamp
Date.parse("2025-05-23"); // returns timestamp
