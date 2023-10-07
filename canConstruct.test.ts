import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { canConstruct } from "./canConstruct.ts";

Deno.test("can construct", () => {
  const got = canConstruct("a", "b");
  const expected = false;
  assertEquals(got, expected);
});

Deno.test("can construct", () => {
  const got = canConstruct("aa", "ab");
  const expected = false;
  assertEquals(got, expected);
});

Deno.test("can construct", () => {
  const got = canConstruct("aa", "aab");
  const expected = true;
  assertEquals(got, expected);
});
