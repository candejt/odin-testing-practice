export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        const code = char.charCodeAt(0);
        const start = code >= 65 && code <= 90 ? 65 : 97;

        return String.fromCharCode(((code - start + shift) % 26) + start);
      }
      return char;
    })
    .join("");
}

export function analyzeArray(array) {
  const sum = array.reduce((prev, curr) => prev + curr, 0);
  const average = sum / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}
