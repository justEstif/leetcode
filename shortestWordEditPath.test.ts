import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { shortestWordEditPath } from "./shortestWordEditPath.ts";

Deno.test("shortest word path", function () {
  const got = shortestWordEditPath("bit", "dog", [
    "but",
    "put",
    "big",
    "pot",
    "pog",
    "dog",
    "lot",
  ]);
  const expected = 5;
  assertEquals(got, expected);
});

Deno.test("shortest word path", function () {
  const got = shortestWordEditPath("no", "go", ["to"]);
  const expected = -1;
  assertEquals(got, expected);
});

/**
 * Given two words source and target, and a list of words words, 
 * find the length of the shortest series of edits that transforms source to target.
 * Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.
 * If the task is impossible, return -1.
 */
