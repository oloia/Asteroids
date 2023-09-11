'use client'

import { Card } from '@/components';
import React from 'react';
import { useCart } from '@/providers/CartProvider';

const OrderList = async () => {
  const {state} = useCart();

  return (
    <Card
      mainTitle={`11 сент 2023`}
      description={state}
    />
  );
};

export default OrderList;
