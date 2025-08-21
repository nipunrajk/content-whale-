import Solutions from '../components/Solutions';
import { getBaseUrl } from '../../lib/base-url';

export default async function ServicesSection() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/services`, { cache: 'no-store' });
  if (!res.ok)
    return (
      <div className='mt-8 text-center text-sm text-red-600'>
        Failed to load services.
      </div>
    );
  const items = await res.json();
  return <Solutions data={items} />;
}
