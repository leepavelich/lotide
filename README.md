# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @leepavelich/lotide`

**Require it:**

`const _ = require('@leepavelich/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: returns the count of each letter in a string
* `countOnly`: returns the count of the items in an array specified by another array
* `eqArrays`: compares two arrays for equality, including subarrays
* `eqObjects`: compares two objects for equality, including subobjects
* `findKey`: returns the first instance of a key in an object specified by some callback function
* `findKeyByValue`: returns the first instance of a key in an object specified by some value
* `flatten`: flattens an array of depth 1
* `head`: returns the first element of an array
* `letterPositions`: returns an object containing the positions of letters in a string, ignoring spaces
* `map`: a custom map function
* `middle`: returns the middle elements of an array (length 2 if even)
* `tail`: returns all the non-first elements of an array
* `takeUntil`: takes in an array and returns another array of the first n elements up until some callback function becomes true
* `without`: takes in an array and returns another array with some specified element filtered out