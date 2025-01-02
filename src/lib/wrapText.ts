export function wrapText(text: string, screenWidth: number): string[] {
  const maxLineWidth = screenWidth - 20
  let remainingText = text
  const lines: string[] = []

  while (remainingText.length > maxLineWidth) {
    let lineBreakIndex = remainingText.lastIndexOf(' ', maxLineWidth)

    if (lineBreakIndex === -1) {
      lineBreakIndex = maxLineWidth
    }

    lines.push(remainingText.substring(0, lineBreakIndex).trim())
    remainingText = remainingText.substring(lineBreakIndex).trim()
  }

  if (remainingText) {
    lines.push(remainingText)
  }

  return lines
}
