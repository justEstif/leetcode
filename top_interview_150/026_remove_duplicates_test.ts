import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { removeDuplicates } from "./026_remove_duplicates.ts";

Deno.test("removeDuplicates - Test 1", () => {
  const got = removeDuplicates([1, 1, 2]);
  const expected = 2;

  assertEquals(got, expected);
});

Deno.test("removeDuplicates - Test 2", () => {
  const got = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  const expected = 5;

  assertEquals(got, expected);
});
