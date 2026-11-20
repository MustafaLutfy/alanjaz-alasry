// Self-check: node src/utils.check.mjs
import assert from 'node:assert/strict'
import { normalizePhone } from './utils.js'

assert.equal(normalizePhone('0770 123 4567'), '07701234567')
assert.equal(normalizePhone('+964 770-123-4567'), '07701234567')
assert.equal(normalizePhone('00964 7701234567'), '07701234567')
assert.equal(normalizePhone('٠٧٧٠١٢٣٤٥٦٧'), '07701234567')
assert.equal(normalizePhone('0612345678'), '')
assert.equal(normalizePhone('077012345'), '')
assert.equal(normalizePhone(''), '')
console.log('utils ok')
