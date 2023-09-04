import { IAsteroid, IRoot } from '@/interfaces/asteroid.interface';
import { Root } from '@/interfaces/detailPage.interface';

export async function getDetailPage(id: string): Promise<Root> {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${process.env.MY_KEY}`, {
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
