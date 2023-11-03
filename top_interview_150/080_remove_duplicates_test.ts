import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { removeDuplicates } from "./080_remove_duplicates.ts";

// Deno.test("removeDuplicates - Test 1", () => {
//   const got = removeDuplicates([1, 1, 1, 2]);
//   const expected = 3;
//
//   assertEquals(got, expected);
// });

Deno.test("removeDuplicates - Test 2", () => {
  const got = removeDuplicates([1, 1, 1, 2, 2]);
  const expected = 4;

  assertEquals(got, expected);
});

// Deno.test("removeDuplicates - Test 1", () => {
//   const got = removeDuplicates([1, 1, 1, 2, 2, 3]);
//   const expected = 5;
//
//   assertEquals(got, expected);
// });
//
// Deno.test("removeDuplicates - Test 2", () => {
//   const got = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
//   const expected = 7;
//
//   assertEquals(got, expected);
// });
//
