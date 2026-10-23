/**
 * formatDateTime - Turn a model date string into a user friendly label.
 *
 * The model stores dates as "2012-08-30 10:44:23". That form has a space
 * instead of the "T" the HTML date parser expects, so it is replaced before
 * parsing. The parts are then laid out by hand as "30/08/2012 10:44" so the
 * label reads day-first, the way dates are usually written in Vietnamese.
 *
 * Values that cannot be parsed are returned unchanged rather than as
 * "Invalid Date".
 *
 * @param {string} value    The date string from the model.
 * @returns {string}        A readable date and time, or "" for empty input.
 */
function pad(number) {
  return String(number).padStart(2, "0");
}

function formatDateTime(value) {
  if (!value) {
    return "";
  }

  const date = new Date(String(value).replace(" ", "T"));

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default formatDateTime;