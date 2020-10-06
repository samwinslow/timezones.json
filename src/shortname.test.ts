import { DateTime } from 'luxon'

import { shortname } from './shortname'

test('Los Angeles is PST/PDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'America/Los_Angeles' })
  expect(shortname(winter.zone, winter)).toBe('PST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'America/Los_Angeles' })
  expect(shortname(summer.zone, summer)).toBe('PDT')
})

test('Denver is MST', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'America/Denver' })
  expect(shortname(winter.zone, winter)).toBe('MST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'America/Denver' })
  expect(shortname(summer.zone, summer)).toBe('MDT')
})

test('Chicago is CST/CDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'America/Chicago' })
  expect(shortname(winter.zone, winter)).toBe('CST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'America/Chicago' })
  expect(shortname(summer.zone, summer)).toBe('CDT')
})

test('New York is EST/EDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'America/New_York' })
  expect(shortname(winter.zone, winter)).toBe('EST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'America/New_York' })
  expect(shortname(summer.zone, summer)).toBe('EDT')
})

test('Paris is CEST/CEDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Europe/Paris' })
  expect(shortname(winter.zone, winter)).toBe('CEST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Europe/Paris' })
  expect(shortname(summer.zone, summer)).toBe('CEDT')
})

test('January in Amsterdam is CEST/CEDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Europe/Amsterdam' })
  expect(shortname(winter.zone, winter)).toBe('CEST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Europe/Amsterdam' })
  expect(shortname(summer.zone, summer)).toBe('CEDT')
})

test('London is GMT/BST', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Europe/London' })
  expect(shortname(winter.zone, winter)).toBe('GMT')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Europe/London' })
  expect(shortname(summer.zone, summer)).toBe('BST')
})

test('Sydney is AEST/AEDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Australia/Sydney' })
  expect(shortname(winter.zone, winter)).toBe('AEST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Australia/Sydney' })
  expect(shortname(summer.zone, summer)).toBe('AEDT')
})

test('Auckland is NZST/NZDT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Pacific/Auckland' })
  expect(shortname(winter.zone, winter)).toBe('NZST')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Pacific/Auckland' })
  expect(shortname(summer.zone, summer)).toBe('NZDT')
})

test('Hong Kong is HKT', () => {
  const winter = DateTime.fromObject({ month: 1, day: 1, zone: 'Asia/Hong_Kong' })
  expect(shortname(winter.zone, winter)).toBe('HKT')
  const summer = DateTime.fromObject({ month: 7, day: 1, zone: 'Asia/Hong_Kong' })
  expect(shortname(summer.zone, summer)).toBe('HKT')
})
