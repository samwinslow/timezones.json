import type { Zone } from 'luxon'
import { DateTime } from 'luxon'

export function shortname(zone: Zone, time = DateTime.utc()): string {
  return zone.offsetName(time.toMillis(), { format: 'short' })
}
