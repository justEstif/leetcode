/**
 * no duplicate items
 * items are not in particular order
 */
const my_set_1 = new Set([1, 2, 3, 4, 5]);
const my_set_2 = new Set([4, 4, 5, 11, 13]);

console.log(my_set_1.has(5));
console.log(my_set_1.add(4));
console.log(my_set_1.size);
console.log(my_set_1.delete(4));
console.log(my_set_1.size);

const get_union_set = (set_1, set_2) => new Set([...set_1, ...set_2]);
const get_intersection_set = (set_1, set_2) = new Set(
  Array.from(set_1).filter(val => set_2.has(val))
)
const get_difference = (set_1, set_2) => new Set(
  Array.from(set_1).filter((val) => !set_2.has(val))
);
const get_mapped = (set_1, map_val) => new Set(Array.from(set_1).map((val) => val * map_val));
const get_filter = (set_1, filter_val) => new Set(Array.from(set_1).filter((val) => val % filter_val === 0));

// const union = new Set([...set_1, ...set_2]);
const intersection = new Set(
  Array.from(set_1).filter((x) => set_2.has(x))
);

const different = new Set(Array.from(set_1).filter((x) => !set_2.has(x)));
const mappedSet = new Set(Array.from(set_1).map((x) => x * 2));
const filterSet = new Set(Array.from(set_1).filter((x) => x % 2 === 0));

const subset = Array.from(set_1).every((val) =>
  Array.from(set_2).includes(val)
);

console.log({
  union,
  intersection,
  different,
  mappedSet,
  filterSet,
  subset,
});
