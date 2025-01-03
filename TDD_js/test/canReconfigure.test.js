import { describe, it, expect } from "vitest";

const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error();
  if (typeof to !== "string") throw new Error();

  const isSameLenght = from.length === to.length;
  if (isSameLenght) return false;

  const hasSameUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameUniqueLetters) return false;

  const transformation = {};

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetters = transformation[fromLetter];
    if (storedLetters && storedLetters !== toLetter) return false;
    transformation[fromLetter] = toLetter;
  }

  return true;
};

describe("canreconfigure", () => {
  it("canreconfigure should be a function", () => {
    expect(canReconfigure).toBeTypeOf("function");
  });

  it("should throw error if first parameter is missing", () => {
    expect(() => canReconfigure()).toThrow();
  });

  it("should throw error if first parameter is not a string", () => {
    expect(() => canReconfigure(1)).toThrow();
  });

  it("should throw error if second parameter is not a string", () => {
    expect(() => canReconfigure("b")).toThrow();
  });

  it("should return a boolean", () => {
    expect(canReconfigure("a", "b")).toBeTypeOf("boolean");
  });

  it("should return false if string provided have different lenght even with same unique letters", () => {
    expect(canReconfigure("aab", "ab")).toBe(false);
  });

  it("should return false if string provided have different number of unique letters", () => {
    expect(canReconfigure("abc", "ddd")).toBe(false);
  });

  it("should return false if string has different order of transformation", () => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
