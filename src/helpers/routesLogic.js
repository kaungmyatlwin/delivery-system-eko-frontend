import { routes } from './constants';

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
