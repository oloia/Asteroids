import { Card, Htag } from '@/components';
import React from 'react';
import { getMenu } from '@/api/asteroids';

const Page = async () => {
  const page = await getMenu('2023-08-31' ||
    '2023-09-06' ||
    '2023-09-07' ||
    '2023-09-04' ||
    '2023-09-05' ||
    '2023-09-02' ||
    '2023-09-03' ||
    '2023-09-01');
  return (
    <>
      <Htag tag="h2">Заказ отправлен!</Htag>
      <Card mainTitle={'31 авг 2023'} description={page.near_earth_objects['2023-08-31']}/>
    </>
  );
};

export default Page;
