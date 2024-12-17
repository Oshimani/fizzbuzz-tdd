import { describe, it, expect } from "vitest";
import { fizzBuzz } from "./index";

// function to generate reliable test data
function getInputArray(length: number = 100) {
  return Array.from(Array(length).keys());
}

describe("fizzbuzz", () => {
  it("should output the numbers of the array one by one", () => {
    const input = getInputArray();
    const output = fizzBuzz(input);
    expect(output).toEqual(input);
  });

  it('should replace the number with "Fizz", when it is divisible by 3', () => {
    // replace throw error with propper test
    throw Error;
  });

  it('should replace the number with "Buzz", when it is divisible by 5', () => {
    // replace throw error with propper test
    throw Error;
  });

  it('should replace the number with "FizzBuzz", whenit is divisible by 3 and 5', () => {
    // replace throw error with propper test
    throw Error;
  });
});
