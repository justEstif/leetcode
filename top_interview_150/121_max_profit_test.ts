import { assertEquals } from "https://deno.land/std@0.203.0/assert/mod.ts";
import { maxProfit } from "./121_max_profit.ts";

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day
 * You want to maximize your profit by choosing a single day to buy one stockand choosing a different day in the future to sell that stock
 * return the max profit you can achive from this transaction
 * if you cannot achive any profit return 0
 */
Deno.test("max profit 1", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const got = maxProfit(prices);
  const expected = 5;
  assertEquals(got, expected);
});
