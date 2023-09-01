'use client';
import styles from '@/components/ShoppingCart/ShoppingCart.module.css';
import { Htag } from '@/components';
import { ShoppingCartProps } from '@/components/ShoppingCart/ShoppingCart.props';
import Link from 'next/link';
import { useCart } from '@/providers/CartProvider';

const ShoppingCart = ({ count, className, ...props }: ShoppingCartProps) => {
  const { state } = useCart();

  return (
    <div className={styles.box} {...props}>
      <div>
        <Htag tag="h3">Корзина</Htag>
        <Htag tag="h4">{state.length} астероида</Htag>
      </div>
      {state.length ?
        <Link href={'/order'} className={styles.btn}>Отправить</Link> :
        <div className={styles.btn}>Отправить</div>
      }
    </div>
  );
};

export default ShoppingCart;
