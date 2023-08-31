import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ShoppingCartProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
count?: number
}
