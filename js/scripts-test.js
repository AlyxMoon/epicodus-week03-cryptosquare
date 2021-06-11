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

function addSpacer () {
  $('#output-tests li:last-child').addClass('py-3 bg-dark')
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

  addSpacer,

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 1')

    const actual = getSmallestSquareLengthForArea(1)
    const expected = 1

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 2')

    const actual = getSmallestSquareLengthForArea(2)
    const expected = 2

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 3')

    const actual = getSmallestSquareLengthForArea(3)
    const expected = 2

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 4')

    const actual = getSmallestSquareLengthForArea(4)
    const expected = 2

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 8')

    const actual = getSmallestSquareLengthForArea(8)
    const expected = 3

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 9')

    const actual = getSmallestSquareLengthForArea(9)
    const expected = 3

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 16')

    const actual = getSmallestSquareLengthForArea(16)
    const expected = 4

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 17')

    const actual = getSmallestSquareLengthForArea(17)
    const expected = 5

    logResult(actual, expected)
  },

  function () {
    logDescription('getSmallestSquareLengthForArea(): returns correctly for 64')

    const actual = getSmallestSquareLengthForArea(64)
    const expected = 8

    logResult(actual, expected)
  },

  function () {
    logDescription('cryptosquare(): returns the character with a single-character string')

    const actual = cryptosquare('a')
    const expected = 'a'

    logResult(actual, expected)
  },

  function () {
    logDescription('cryptosquare(): returns correctly with 2 characters')

    const actual = cryptosquare('ab')
    const expected = 'ab'

    logResult(actual, expected)
  },

  function () {
    logDescription('cryptosquare(): returns correctly with 3 characters')

    const actual = cryptosquare('abc')
    const expected = 'acb'

    logResult(actual, expected)
  },

  function () {
    logDescription('cryptosquare(): returns correctly with 4 characters')

    const actual = cryptosquare('abcd')
    const expected = 'acbd'

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