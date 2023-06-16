import { calculateNotes } from "./utils";

describe("calculateNotes", () => {
  it("should calculate correct amount of notes for multiple of five", () => {
    const notes = { five: 10, ten: 10, twenty: 10 };
    const amount = 75;
    const result = calculateNotes(amount, notes);
    expect(result).toEqual({
      remaining: 0,
      newNotes: {
        twenty: 7,
        ten: 9,
        five: 9,
      },
      distributedNotes: {
        twenty: 3,
        ten: 1,
        five: 1,
      },
    });
  });

  it("should handle if amount is not multiple of five", () => {
    const notes = { five: 10, ten: 10, twenty: 10 };
    const amount = 73;
    const result = calculateNotes(amount, notes);
    expect(result).toEqual({
      remaining: 3,
      newNotes: {
        twenty: 7,
        ten: 9,
        five: 10,
      },
      distributedNotes: {
        twenty: 3,
        ten: 1,
        five: 0,
      },
    });
  });

  it("should handle if amount is more than available notes", () => {
    const notes = { five: 2, ten: 2, twenty: 2 };
    const amount = 300;
    const result = calculateNotes(amount, notes);
    expect(result).toEqual({
      remaining: 230,
      newNotes: {
        twenty: 0,
        ten: 0,
        five: 0,
      },
      distributedNotes: {
        twenty: 2,
        ten: 2,
        five: 2,
      },
    });
  });
});
