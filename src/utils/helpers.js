export function truncateText(text, maxLength = 120) {
  if (typeof text !== "string") return text;
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

export function mergeClassNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
