// [town]:[cost]
// Make sure these routes are not mutable
const routes = Object.freeze({
  A: {
    B: 1,
    C: 4,
    D: 10,
  },
  B: {
    E: 3,
  },
  C: {
    D: 4,
    F: 2,
  },
  D: {
    E: 1,
  },
  E: {
    A: 2,
    B: 3
  },
  F: {
    D: 1,
  },
});

export {
  routes,
};
