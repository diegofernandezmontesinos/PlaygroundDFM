import { describe, it, expect } from "vitest";

const canReconfigure = (from, to) => {
  if (typeof from !== "string") throw new Error();
  if (typeof to !== "string") throw new Error();
  if(from.length !== to.length) return false;

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

  it("should return false if string provided have different lenght", () => {
    expect(canReconfigure("abc", "bd")).toBe(false);
  });
});
