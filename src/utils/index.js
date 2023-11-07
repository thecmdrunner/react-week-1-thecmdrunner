import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * @param {string} givenTimestamp */
export function getRelativeTimePhrase(givenTimestamp) {

  givenTimestamp = Number(givenTimestamp);


  // Get current timestamp
  const currentTimestamp = new Date().getTime();
  // Calculate the difference in milliseconds
  const timeDifference = currentTimestamp - givenTimestamp;

  // Guard clause for future posted dates
  if (timeDifference < 0) {
    return "in the future";
  }

  // Convert time difference to minutes and hours
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  console.log(minutesAgo, hoursAgo, daysAgo);

  // Determine the appropriate relative time phrase
  if (minutesAgo < 1) {
    return "just now";
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else if (daysAgo < 7) {
    return `${daysAgo} days ago`;
  } else {
    // Format the posted date for times over a week ago
    const postedDate = new Date(givenTimestamp);
    const day = postedDate.getDate();
    const month = postedDate.toLocaleString("default", { month: "short" });
    const year = postedDate.getFullYear();

    return `${day} ${month} ${year}`;
  }
}