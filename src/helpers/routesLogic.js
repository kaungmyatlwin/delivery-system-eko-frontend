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
    // Having `undefined` value in costs means there's no routes at that point
    if (!cost) return 'No such route.';
    costs.push(cost);
  }

  return costs.reduce((total, currentCost) => total + currentCost, 0);
}

/**
 * Gets all the possible deliver routes between 2 towns.
 * @param {String} t1 Town 1
 * @param {String} t2 Town 2
 * @param {Number} maxStops Maximum stops for each route
 * @returns {Number}
 */
export function getPossibleDeliveryRoutes(t1, t2, maxStops) {
  if (!t1 || !t2) return;

  let totalPossibleRoutes = 0;

  function dfsRecursive(start, currentRoute = '') {
    if (!start) return;

    const edges = Object.keys(routes[start]);
    // edges are towns interconnected from starting point
    currentRoute += start;

    // Exclude start point
    if (maxStops) {
      if (currentRoute.length - 1 > maxStops) return;
    }

    for (let i = 0; i < edges.length; i++) {
      const town = edges[i];

      if (town === t2) {
        return totalPossibleRoutes++;
      }

      // Big problem about this case is the handling of infinite loop
      // EAEBEA... can result in infinite loop
      // Have to find if this has circular structure around the string
      const alreadyVisited = currentRoute.indexOf(
        `${currentRoute[currentRoute.length - 1]}${town}`
      ) > -1;

      if (!alreadyVisited) {
        dfsRecursive(town, currentRoute);
      }
    }
  }

  dfsRecursive(t1);

  return totalPossibleRoutes;
}
