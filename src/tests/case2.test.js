import { getPossibleDeliveryRoutes } from '../helpers/routesLogic';

describe('Case 2', () => {
  it('E-D delivery maximum possible routes with 4 stops should return 4', () => {
    expect(getPossibleDeliveryRoutes('E', 'D', 4)).toBe(4);
  });

  it('E-E delivery maximum possible routes should return 5', () => {
    expect(getPossibleDeliveryRoutes('E', 'E', null, true)).toBe(5);
  });
});
