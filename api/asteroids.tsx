import { IRoot } from '@/interfaces/asteroid.interface';

export async function getMenu(startDate: string): Promise<IRoot> {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${process.env.MY_KEY}`, {
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
