import type { Zone } from 'luxon'
import { DateTime } from 'luxon'

export function shortname(zone: Zone, time = DateTime.utc()): string {
  switch (zone.name) {
    case 'Asia/Hong_Kong':
      return 'HKT'
    case 'Australia/Sydney':
      return time.isInDST ? 'AEDT' : 'AEST'
    case 'Europe/Amsterdam':
      return time.isInDST ? 'CEDT' : 'CEST'
    case 'Europe/London':
      return time.isInDST ? 'BST' : 'GMT'
    case 'Europe/Paris':
      return time.isInDST ? 'CEDT' : 'CEST'
    case 'Pacific/Auckland':
      return time.isInDST ? 'NZDT' : 'NZST'
    default:
      return zone.offsetName(time.toMillis(), { format: 'short' })
  }
}
