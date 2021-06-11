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

  // Rewrite function
  let visited = new Set();

  function depthFirstSearch(startPoint, endPoint) {
    visited.add(startPoint);
    const towns = routes[startPoint];
    for (const town in towns) {
      if (!visited.has(town)) {
        if (Object.keys(towns).includes(endPoint)) {
          totalPossibleRoutes++;
        };
        depthFirstSearch(town, endPoint);
      }
    }
  }

  depthFirstSearch('E', 'D');
  console.log('visited -> ', visited);
  console.log('Total possible routes', totalPossibleRoutes);

  return totalPossibleRoutes;
}
