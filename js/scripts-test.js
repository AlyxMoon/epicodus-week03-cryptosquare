function logDescription (description) {
  console.log(`%c ${description}`, 'font-weight: bold;')

  $('#output-tests li:last-child')
    .addClass('text-light')
    .append(`
    <h6 class="font-bold">${description}</h6>
  `)
}

function logResult (actual, expected) {
  if (actual !== expected) {
    console.log(
      `%c -- Incorrect | actual: ${actual} | expected: ${expected}`,
      'background-color: #290000',
    )

    $('#output-tests li:last-child')
      .addClass('bg-danger')
      .append(`
      <p>Incorrect | actual: ${actual} | expected: ${expected}</p>
    `)
  } else {
    console.log('%c -- passed!', 'background-color: green')

    $('#output-tests li:last-child').addClass('bg-success')
  }
}

const tests = [
  function () {
    logDescription('formatString(): returns the characters of a string')

    const actual = formatString('hello')
    const expected = 'hello'

    logResult(actual, expected)
  },

  function () {
    logDescription('formatString(): returns the characters and numbers of a string')

    const actual = formatString('world42')
    const expected = 'world42'

    logResult(actual, expected)
  },

  function () {
    logDescription('formatString(): removes whitespace from a string')

    const actual = formatString('  something 16  ')
    const expected = 'something16'

    logResult(actual, expected)
  },

  function () {
    logDescription('formatString(): removes non-alphanumeric characters from a string')

    const actual = formatString('string!@#$%^&*(),.\';:time0')
    const expected = 'stringtime0'

    logResult(actual, expected)
  },
]

function runTests () {
  tests.forEach(test => {
    $('#output-tests').append(`
      <li class="list-group-item" />
    `)

    test()
  })
}

runTests()