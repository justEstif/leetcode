import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { majorityElement } from "./169_majority_element.ts";

Deno.test("majorityElement - Test 1", () => {
  const nums = [3, 2, 3];
  const got = majorityElement(nums);
  const expected = 3;
  assertEquals(expected, got);
});
