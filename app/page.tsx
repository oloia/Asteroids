import React from 'react';
import { getMenu } from '@/api/asteroids';
import { Card, Htag } from '@/components';
import styles from '@/app/page.module.css';
import { day, formattedDate } from '@/utils/FormatData';

const Page = async () => {
  const page = await getMenu(formattedDate(new Date()));
  return (
    <div className={styles.title}>
      <Htag tag="h2">Ближайшие подлёты астероидов</Htag>
      <Card hasBtn mainTitle={`${day} сент 2023`} description={page.near_earth_objects[formattedDate(new Date())]}/>
    </div>
  );
};

export default Page;
