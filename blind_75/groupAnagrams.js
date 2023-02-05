// Given an array of strings strs
// group the anagrams together.
// You can return the answer in any order.
const assert = require("assert");

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hashMap = {};
  for (const ch of s) {
    if (!hashMap[ch]) hashMap[ch] = 0;
    hashMap[ch]++;
  }
  for (const ch of t) {
    if (!hashMap[ch]) return false;
    hashMap[ch]--;
  }
  return true;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  let groups = [];
  for (let i = 0; i < strs.length; i++) {
    let group = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        group.push(strs[j]);
        strs.splice(j, 1);
      }
    }
    groups.push(group);
  }
  return groups;
};

// video solution
/**
 * @param {string[]} strs
 * @return {string[][]}
 * O(nwlogw): time complexity
 */
function groupAnagrams2(strs) {
  if (!strs.length) return [];
  let cache = new Map();
  for (let str of strs) {
    let key = createKey(str);
    if (cache.has(key)) {
      cache.get(key).push(str);
    } else {
      cache.set(key, [str]);
    }
  }
  return Array.from(cache.values());

  function createKey(str) {
    const frequency = new Array(26).fill(0);
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    for (const char of str) {
      const code = alphabet.indexOf(char) + 1;
      frequency[code]++;
    }
    return frequency.toString();
  }
}

const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const answer1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

console.log(groupAnagrams2(input1));
