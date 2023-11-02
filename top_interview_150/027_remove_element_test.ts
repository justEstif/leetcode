import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { removeElement } from "./027_remove_element.ts";

Deno.test("removeElement - Example 1", () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  const expected = 2;
  const got = removeElement(nums, val);

  assertEquals(expected, got);
});

Deno.test("removeElement - Example 2", () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  const expected = 5;
  const got = removeElement(nums, val);

  assertEquals(expected, got);
});
