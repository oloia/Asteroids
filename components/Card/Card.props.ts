import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IAsteroid } from '@/interfaces/asteroid.interface';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mainTitle: string;
  description: IAsteroid[];
  hasBtn?: boolean;
  addProduct?: (IAsteroid) => void;
}
