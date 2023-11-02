import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { merge } from "./088_merge.ts";

Deno.test("merge test 1", () => {
  const expected = [1, 2, 2, 3, 5, 6];
  const nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  const got = nums1;
  assertEquals(expected, got);
});

Deno.test("merge test 2", () => {
  const expected = [1];
  const nums1 = [0];
  merge(nums1, 0, [1], 1);
  const got = nums1;
  assertEquals(expected, got);
});

Deno.test("merge test 3", () => {
  const expected = [1];
  const nums1 = [0];
  merge(nums1, 0, [1], 1);
  const got = nums1;
  assertEquals(expected, got);
});
