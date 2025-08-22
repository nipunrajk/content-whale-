import { getBaseUrl } from '@/lib/base-url';
import Awards from '../components/Awards';

export default async function MentionsSection({
  heading,
  subhead,
}: {
  heading?: string;
  subhead?: string;
}) {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/mentions`, { cache: 'no-store' });
  if (!res.ok)
    return (
      <div className='mt-8 text-center text-sm text-red-600'>
        Failed to load mentions.
      </div>
    );
  const items: Array<{ name: string; logo: string; url?: string }> =
    await res.json();
  const mapped = {
    heading: heading ?? 'Featured Mentions & Publications',
    subhead: subhead ?? '',
    logos: items.map((m) => ({ alt: m.name, src: m.logo, href: m.url })),
  };
  return <Awards data={mapped} />;
}
