// Accepts Arabic-Indic/Persian digits, spaces, dashes, +964/00964 prefixes. Returns '07XXXXXXXXX' or '' if not an Iraqi mobile.
export function normalizePhone(raw) {
  const s = String(raw)
    .replace(/[٠-٩]/g, (d) => d.charCodeAt(0) - 0x660)
    .replace(/[۰-۹]/g, (d) => d.charCodeAt(0) - 0x6f0)
    .replace(/[\s\-()]/g, '')
  const m = s.match(/^(?:\+964|00964|0)?(7\d{9})$/)
  return m ? `0${m[1]}` : ''
}
