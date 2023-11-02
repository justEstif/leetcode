/**
 * You are given two integers nums1 and nums2 sorted in non-decreasing order
 * and two integers m and n, representing the num of elements in nums1 and nums2
 * merge nums1 and nums2 into a single array sorted in non-decreasing order
 */
function merge_1(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  // get the last index nums1
  let last = m + n - 1;

  // merge in reverse order
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[last] = nums2[n - 1];
      n -= 1;
    }
    last -= 1;
  }

  // fill nums1 with leftover num2 elements
  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n -= 1;
    last -= 1;
  }
}

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  let i_m = m - 1;
  let i_n = n - 1;
  let i_r = m + n - 1;

  for (; i_r >= 0; i_r--) {
    if (i_m < 0 || nums1[i_m] <= nums2[i_n]) {
      nums1[i_r] = nums2[i_n--];
    } else {
      nums1[i_r] = nums1[i_m--];
    }
  }
}
