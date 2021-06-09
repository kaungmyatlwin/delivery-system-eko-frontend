import { getTotalCostOfRoute } from '../helpers/routesLogic';

describe('Case 1', () => {
  it('Delivery cost for A-B-E should return 4', () => {
    expect(getTotalCostOfRoute(['A', 'B', 'E'])).toBe(4);
  });

  it('Delivery cost for A-D should return 10', () => {
    expect(getTotalCostOfRoute(['A', 'D'])).toBe(10);
  });

  it('Delivery cost for E-A-C-F should return 8', () => {
    expect(getTotalCostOfRoute(['E', 'A', 'C', 'F'])).toBe(8);
  });

  it('Delivery cost for A-D-F should return "No such route."', () => {
    expect(getTotalCostOfRoute(['A', 'D', 'F'])).toBe('No such route.');
  });
});
