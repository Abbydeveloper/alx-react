import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js';

test('getFullYear function', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy function', () => {
  expect(getFooterCopy(true)).toBe('ALX');
  expect(getFooterCopy(false)).toBe('ALX main dashboard');
});

test('getLatestNotification function', () => {
  expect(getLatestNotification()).tobe(
    "<strong>Urgent Requirement</strong> - complete by EOD"
  );
});