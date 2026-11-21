// Self-check: node src/utils.check.mjs
import assert from 'node:assert/strict'
import { normalizePhone, todayStatus } from './utils.js'

assert.equal(normalizePhone('0770 123 4567'), '07701234567')
assert.equal(normalizePhone('+964 770-123-4567'), '07701234567')
assert.equal(normalizePhone('00964 7701234567'), '07701234567')
assert.equal(normalizePhone('٠٧٧٠١٢٣٤٥٦٧'), '07701234567')
assert.equal(normalizePhone('0612345678'), '')
assert.equal(normalizePhone('077012345'), '')
assert.equal(normalizePhone(''), '')

assert.equal(todayStatus(new Date('2026-11-20T10:00:00Z')).open, false) // Friday in Baghdad
assert.equal(todayStatus(new Date('2026-11-21T10:00:00Z')).open, true) // Saturday 13:00 Baghdad
assert.equal(todayStatus(new Date('2026-11-21T04:00:00Z')).open, true) // Sat 07:00 opens
assert.equal(todayStatus(new Date('2026-11-21T03:59:00Z')).open, false) // Sat 06:59 not yet
assert.equal(todayStatus(new Date('2026-11-21T12:00:00Z')).open, false) // Sat 15:00 closed
assert.equal(todayStatus(new Date('2026-11-19T22:30:00Z')).open, false) // Thu 22:30 UTC = Fri 01:30 Baghdad
console.log('utils ok')
