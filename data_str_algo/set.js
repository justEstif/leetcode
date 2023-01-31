/**
 * no duplicate items
 * items are not in particular order
 */
const my_set_1 = new Set([1, 2, 3, 4, 5]);
const my_set_2 = new Set([4, 4, 5, 11, 13]);

const get_union_set = (set_1, set_2) => new Set([...set_1, ...set_2]);
const get_intersection_set = (set_1, set_2) =>
  new Set(Array.from(set_1).filter((val) => set_2.has(val)));
const get_difference = (set_1, set_2) =>
  new Set(Array.from(set_1).filter((val) => !set_2.has(val)));
const get_mapped = (set_1, map_val) =>
  new Set(Array.from(set_1).map((val) => val * map_val));
const get_filter = (set_1, filter_val) =>
  new Set(Array.from(set_1).filter((val) => val % filter_val === 0));
const get_subset = (set_1, set_2) =>
  Array.from(set_1).every((val) => Array.from(set_2).includes(val));
