# Epicodus | Week 03 | Cryptosquare

> A classic method for composing secret messages is called a square code.
>
> The spaces and punctuation are removed from the English text and the characters are written into a square (or rectangle) and the entire message is downcased. For example, the sentence "don't compare yourself to others, compare yourself to the person you were yesterday" is 69 characters long, so it is written into a rectangle with 8 rows and 9 columns.
>
> The coded message is obtained by reading down the columns going left to right, outputting encoded text in groups of five letters. For example, the message above is coded as:
>
> "daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput"
>
> Write a program that outputs the encoded version of a given block of text. Again, identify each individual behavior this application should demonstrate, and write a test for each. Tackle writing code for one behavior at a time and manually test each spec before moving onto the next one. All tests should be included in the project README.
>
> The size of the square (number of columns) should be decided by the length of the message. If the message is a length that creates a perfect square (e.g. 4, 9, 16, 25, 36, etc), use that number of columns. If the message doesn't fit neatly into a square, choose the number of columns that corresponds to the smallest square that is larger than the number of characters in the message.

## Live Site
[https://alyxmoon.github.io/epicodus-week03-cryptosquare/](https://alyxmoon.github.io/epicodus-week03-cryptosquare/)

## Tests

### Describe: formatString();

```
Test: 'returns the characters of a string'
Code: cryptosquare('hello')
Expected: 'hello'
```

```
Test: 'returns the characters and numbers of a string'
Code: cryptosquare('world42')
Expected: 'world42'
```

```
Test: 'removes whitespace from a string'
Code: cryptosquare('  something 16  ')
Expected: 'something16'
```

```
Test: 'removes non-alphanumeric characters from a string'
Code: cryptosquare('string!@#$%^&*(),.\';:time0')
Expected: 'stringtime0'
```
