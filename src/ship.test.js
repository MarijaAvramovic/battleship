import { Ship } from "./ship.js";

test('ship takes hits and sinks correctly', () => {
  const carrier = new Ship(5);
  expect(carrier.length).toBe(5);
  expect(carrier.hits).toBe(0);

  carrier.hit();
  carrier.hit();
  expect(carrier.hits).toBe(2);
  expect(carrier.isSunk()).toBe(false);

  carrier.hit(); carrier.hit(); carrier.hit();
  expect(carrier.isSunk()).toBe(true);
});