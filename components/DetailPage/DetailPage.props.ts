import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Root } from '@/interfaces/detailPage.interface';

export interface DetailPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  description: Root;
}
