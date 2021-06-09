import { routes } from './constants';

export function getTowns() {
  return Object.keys(routes);
}
