import { useEffect, useState, RefObject } from 'react'

interface UseTextLinesOptions {
  text: string
  containerRef: RefObject<HTMLElement | null>
}

interface TextLine {
  text: string
  width: number
}

export const useTextLines = ({ text, containerRef }: UseTextLinesOptions) => {
  const [lines, setLines] = useState<TextLine[]>([])

  useEffect(() => {
    const splitTextIntoLines = () => {
      if (!containerRef.current || !text) {
        setLines([])
        return
      }

      // Create temporary span element to measure text
      const span = document.createElement('span')
      const container = containerRef.current

      // Copy relevant styles that affect text measurement
      const containerStyles = window.getComputedStyle(container)
      span.style.font = containerStyles.font
      span.style.fontSize = containerStyles.fontSize
      span.style.letterSpacing = containerStyles.letterSpacing
      span.style.whiteSpace = 'pre'
      span.style.visibility = 'hidden'
      span.style.position = 'absolute'
      span.style.left = '-9999px'

      document.body.appendChild(span)

      const words = text.split(' ')
      const maxWidth = container.offsetWidth - 16 // 16 is the padding
      const newLines: TextLine[] = []
      let currentLine = ''

      words.forEach((word, index) => {
        const testLine = currentLine + word + ' '
        span.textContent = testLine
        const testWidth = span.offsetWidth

        if (testWidth > maxWidth && currentLine) {
          // Remove trailing space from current line
          const trimmedLine = currentLine.trim()
          span.textContent = trimmedLine
          newLines.push({
            text: trimmedLine,
            width: span.offsetWidth,
          })
          currentLine = word + ' '
        } else {
          currentLine = testLine
        }

        // Handle last line
        if (index === words.length - 1 && currentLine) {
          const trimmedLine = currentLine.trim()
          span.textContent = trimmedLine
          newLines.push({
            text: trimmedLine,
            width: span.offsetWidth,
          })
        }
      })

      // Clean up
      document.body.removeChild(span)
      setLines(newLines)
    }

    // Initial split
    splitTextIntoLines()

    // Add resize listener
    const resizeObserver = new ResizeObserver(() => {
      splitTextIntoLines()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect()
    }
  }, [text, containerRef])

  return lines
}
