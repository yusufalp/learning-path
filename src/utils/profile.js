export function getFullName(firstName, middleName, lastName) {
  return [firstName, middleName, lastName]
    .filter(Boolean) // removes undefined, null, empty strings
    .join(" ")
    .replace(/\s+/g, " ") // collapses multiple spaces
    .trim();
}
