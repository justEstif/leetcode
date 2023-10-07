export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;

  const hashMap = new Map<string, number>(); // letter, number

  for (const char of magazine) {
    if (hashMap.has(char)) {
      hashMap.set(char, (hashMap.get(char)!) + 1);
    } else {
      hashMap.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (hashMap.get(char)) {
      hashMap.set(char, hashMap.get(char)! - 1);
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Given two string `ransomNote` `magazine`
 * Return if ransomNote can be constructed by using the letters from `magazine`
 * Check if magazine has all the letters in ransomNote
 */

/**
 * Create hash with letter + count
 * Go through the magazine and subract the count
 * Edge cases:
 **  magazine length is less than ransom note -> return false
 **  its always lowercase letters
 */
