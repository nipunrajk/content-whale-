import { HomePage } from './sections/HomePage';

export default async function Page() {
  // No need to fetch from API since we're using static data for static sections
  // Dynamic sections fetch their own data from their respective APIs
  return <HomePage />;
}
