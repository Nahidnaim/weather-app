export function formatDate(datetimeStr) {
  const [datePart] = datetimeStr.split(" ")
  const date = new Date(datePart)

  const options = { day: "2-digit", month: "short", year: "numeric" }
  const formatted = date.toLocaleDateString("en-GB", options)

  // Format to "12 May, 2025"
  return formatted.replace(/(\d{2}) (\w{3}) (\d{4})/, "$1 $2, $3")
}

// Example usage
const input = "2025-05-12 17:43"
console.log(formatDate(input)) // Output: "12 May, 2025"
