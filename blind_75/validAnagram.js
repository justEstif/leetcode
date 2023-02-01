// given two string s and t, return true if t is an anagram of s and false otherwise

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const sArr = s.split("").sort().join("");
  const tArr = t.split("").sort().join("");
  return sArr === tArr;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false;

  const hashMap = {};

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

const example1 = isAnagram2("nagaram", "anagram");
const example2 = isAnagram2("rat", "car");

console.log({
  example1,
  example2,
});
