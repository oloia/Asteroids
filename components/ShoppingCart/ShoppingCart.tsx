'use client'
import styles from '@/components/ShoppingCart/ShoppingCart.module.css';
import {  Htag } from '@/components';
import { ShoppingCartProps } from '@/components/ShoppingCart/ShoppingCart.props';
import Link from 'next/link';

const ShoppingCart = ({count, className, ...props}: ShoppingCartProps) => {
  return (
    <div className={styles.box} {...props}>
      <div>
        <Htag tag="h3">Корзина</Htag>
        <Htag tag="h4">{count} астероида</Htag>
      </div>
      <Link href={'/order'} className={styles.btn}>Отправить</Link>
    </div>
  );
};

export default ShoppingCart;
