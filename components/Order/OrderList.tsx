'use client'

import { Card } from '@/components';
import React from 'react';
import { useCart } from '@/providers/CartProvider';

interface OrderListProps {
  title: string;
}

const OrderList = async ({title}: OrderListProps) => {
  const {state} = useCart();

  return (
    <Card
      mainTitle={title}
      description={state}
    />
  );
};

export default OrderList;
