import { capitalize, reverseString, calculator, analyzeArray, caesarCipher } from "./practice";

test("capitalize: returns string with first character capitalized", () => {
  const result = capitalize("javascript");
  expect(result).toBe("Javascript");
});

test("reverseString: returns a string reversed", () => {
  const result = reverseString("hello");
  expect(result).toBe("olleh");
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test("subtract two numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test("multiply two numbers", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });
  test("divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe("Caesar Cipher", ()=>{
  test('move letter correctly', ()=>{
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });
  test('keep z to a move', ()=>{
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('keep uppercase', ()=>{
    expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
  });
  test('ignore punctuation', ()=>{
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  })
})

test("analyzeArray: returns correct properties", ()=>{
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})