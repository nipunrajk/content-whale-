export const __placeholder__ = undefined; // (keeps TS happy in this combined file view)

export function getBaseUrl() {
  // These headers exist in App Router server environment
  // We import inline to avoid ESM import errors in this combined view
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { headers } = require('next/headers');
  const h = headers();
  const host = h.get('x-forwarded-host') ?? h.get('host');
  const proto = (h.get('x-forwarded-proto') ?? 'http').split(',')[0];
  return `${proto}://${host}`;
}
