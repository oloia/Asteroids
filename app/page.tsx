import React from 'react';
import { getMenu } from '@/api/asteroids';
import { Card, Htag } from '@/components';
import styles from '@/app/page.module.css';

const Page = async () => {
  const page = await getMenu('2023-09-11');
  return (
    <div className={styles.title}>
      <Htag tag="h2">Ближайшие подлёты астероидов</Htag>
      <Card hasBtn mainTitle={`11 сент 2023`} description={page.near_earth_objects['2023-09-11']}/>
    </div>
  );
};

export default Page;
