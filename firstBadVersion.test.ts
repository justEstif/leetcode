import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { add } from "./main.ts";
import { solution } from "./firstBadVersion.ts";

Deno.test("is bad version", () => {
  const got = solution(5);
  const expected = 4;
  assertEquals(got, expected);
});
