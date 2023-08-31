import { IRoot } from '@/interfaces/asteroid.interface';

export async function getMenu(startDate: string): Promise<IRoot> {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&api_key=${process.env.MY_KEY}`, {
  });
  if (!res.ok) {
    return
  }
  return res.json();
}
