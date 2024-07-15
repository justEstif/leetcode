import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { canJump } from "./055_jump_game.ts";

Deno.test("can jump test 1", () => {
  const nums = [2, 3, 1, 1, 4];
  const got = canJump(nums);
  const expected = true;
  assertEquals(got, expected);
});

Deno.test("can jump test 2", () => {
  const nums = [3, 2, 1, 0, 4];
  const got = canJump(nums);
  const expected = false;
  assertEquals(got, expected);
});
