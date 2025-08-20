import { HomePage } from './sections/HomePage';

export default async function Page() {
  // Fetch from our API route (can be changed to force-cache if desired)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/home`,
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  return <HomePage data={data} />;
}
