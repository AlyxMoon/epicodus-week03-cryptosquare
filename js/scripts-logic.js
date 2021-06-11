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
  sentence = formatString(sentence)
}