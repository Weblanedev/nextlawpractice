export default function convertDate(date) {
  const arrayOfWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const newDate = new Date(date);
  const weekday = newDate.getDay();
  const day = arrayOfWeekdays[weekday];
  const month = newDate.toString().slice(4, 7);
  const dayNum = newDate.getDate();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return `${day}, ${month} ${dayNum}, ${year} - ${
    hours > 12 ? hours - 12 : hours
  }:${minutes} ${hours >= 12 ? "pm" : "am"}`;
}
