import { search } from './search'

test('Major US cities', () => {
  // major US cities
  expect(search('LA').name).toBe('America/Los_Angeles')
  expect(search('NY').name).toBe('America/New_York')
  expect(search('SF').name).toBe('America/Los_Angeles')
})

test('US short timezones', () => {
  // super short US TZs
  expect(search('ET').name).toBe('America/New_York')
  expect(search('CT').name).toBe('America/Chicago')
  expect(search('MT').name).toBe('America/Denver')
  expect(search('PT').name).toBe('America/Los_Angeles')
})
