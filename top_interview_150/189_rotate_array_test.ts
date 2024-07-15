import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { rotate } from "./189_rotate_array.ts";

Deno.test("rotate test 1", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotate(nums, k);
  const got = nums;
  const expected = [5, 6, 7, 1, 2, 3, 4];
  assertEquals(expected, got);
});
