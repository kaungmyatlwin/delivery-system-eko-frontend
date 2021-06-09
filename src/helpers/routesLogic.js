import { routes } from './constants';

/**
 * Gets the total costs of route between each towns.
 * @param {array} towns
 * @returns {string|number}
 */
export function getTotalCostOfRoute(towns = []) {
  if (!towns || towns.length === 1) {
    return 'Add more towns to build a route.';
  }

  const costs = [];

  for (let i = 0; i < towns.length; i++) {
    const nextTown = towns[i + 1];
    // Check if we had reached to end of array
    if (!nextTown) break;

    const town = towns[i];
    const cost = routes[town][nextTown];
    costs.push(cost);
  }

  // Having `undefined` value in costs means there's no routes at that point
  const hasInvalidRoute = costs.includes(undefined);

  if (hasInvalidRoute) {
    return 'No such route.';
  }

  return costs.reduce((total, currentCost) => total + currentCost, 0);
}

/**
 * Gets all the possible deliver routes between 2 towns.
 * @param {Number} t1 Town 1
 * @param {Number} t2 Town 2
 * @returns {Number}
 */
export function getPossibleDeliveryRoutes(t1, t2, maxStops, useSameRoute = false) {
  if (!t1 || !t2) return;

  let totalPossibleRoutes = 0;
  const startPoint = routes[t1];
  const allPoints = {};

  Object.entries(routes).forEach(([key, value]) => {
    allPoints[key] = Object.keys(value)
  });

  // Lookup Table
  const startNodes = Object.keys(startPoint);
  traverseNodes(startNodes);

  function traverseNodes(nodes) {
    if (!nodes || nodes.length === 0) {
      return;
    };

    if (nodes.includes(t1)) return;

    for (let i = 0; i < nodes.length; i++) {
      const innerNodes = allPoints[nodes[i]]; // 0 -> B, C, D, B -> E, C -> D, F
      const foundRoute = innerNodes.findIndex((n) => n === t2);
      if (foundRoute > -1) {
        totalPossibleRoutes += 1;
      }
      traverseNodes(innerNodes);
    }
  }

  return totalPossibleRoutes;
}
