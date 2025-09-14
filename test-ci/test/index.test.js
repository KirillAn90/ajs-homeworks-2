import { checkHealthStatus } from '../src/index';

test('Проверяем здоровое состояние', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('Проверяем раненное состояние', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('Проверяем критическое состояние', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});

test('Граничные значения', () => {
  expect(checkHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
  expect(checkHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});
