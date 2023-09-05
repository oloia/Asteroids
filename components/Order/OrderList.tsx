'use client'

import { Card } from '@/components';
import React from 'react';
import { useCart } from '@/providers/CartProvider';
import { day } from '@/utils/FormatData';

const OrderList = async () => {
  const {state} = useCart();

  return (
    <Card
      mainTitle={`${day} сент 2023`}
      description={state}
    />
  );
};

export default OrderList;
