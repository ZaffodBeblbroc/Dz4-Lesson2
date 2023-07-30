/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  return str.trim().toUpperCase();
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  if (isNaN(...array)) {
    return NaN;
  } else {
    let maxNumber = Math.max(...array);
    return maxNumber;
  }
};
/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  let newArr = [];
  newArr = str.split(', ');
  for (let i = 0; i < newArr.length; i++) {
    if (str.length === 0) {
      newArr = []; 
    } else {
      newArr[i] = newArr[i].length;
    }
  }
  return newArr;
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = Math.pow(numArray[i], degree);
  }
  return numArray;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  let newArr = [];
  newArr = text.split ('. ');
  for (let i = 0; i < newArr.length; i++) {
    newArr [i] = newArr [i][0].toUpperCase() + newArr [i].slice(1);
  }
  return text = newArr.join('. ');
  // let str = '';
  // let i = 0;
  // while (i < 1) {
  //   if (str.length === text.length) {
  //     i++;
  //   } else {
  //     str = str + text[str.length].toUpperCase() + text.slice(str.length + 1, text.indexOf('.', str.length) + 2);
  //   }
  // }
  // return str;
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  let newArr = array.filter(function(value) {
    return value % 1 == 0 && value > 0 && typeof(value) === 'number';
  });
  return newArr;
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  return array.indexOf (value, 0);
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  let result = array.find(function (item) {
    if (item === value) {
      return true;
    }
  });
  return result;
};
 
/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  let result = 0;
  array.forEach(function(item) {
    if (item.includes(word)) {
      result++;
    }
  }) 

  if (result === array.length && result !== 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  let result = array.some(function(item) {
    return item < 0;
  });
  return result;
}
/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  return array.slice([startPosition], [endPosition + 1]);
};


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
