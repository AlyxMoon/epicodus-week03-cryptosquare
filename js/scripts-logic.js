function formatString (string) {
  return string.replace(/[^a-zA-Z0-9]/g, '')
}

function getSmallestSquareLengthForArea (area) {
  const bound = Math.sqrt(Number.MAX_SAFE_INTEGER)

  for (let i = 1; i < bound; i++) {
    if (i * i >= area) return i
  }

  return 0
}

function cryptosquare (sentence) {
  const formattedString = formatString(sentence)
  const charCount = formattedString.length
  const gridLength = getSmallestSquareLengthForArea(charCount)

  const grid = []

  for (
    let row = 0, index = 0; 
    row < gridLength; 
    row++
  ) {
    grid.push([])

    for (let col = 0; col < gridLength; col++) {
      const char = index < charCount
        ? formattedString[index++]
        : ''

        grid[row].push(char)
    }
  }

  let stringResult = ''

  for (
    let col = 0, index = 0; 
    col < gridLength; 
    col++
  ) {
    for (let row = 0; row < gridLength; row++) {
      if (!grid[row][col]) break

      stringResult += grid[row][col]
      if (index && ++index % 5) {
        stringResult += ' '
      }
    }
  }

  return stringResult
}