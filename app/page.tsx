import React from 'react';
import { getMenu } from '@/api/asteroids';
import { Card, Htag } from '@/components';
import styles from '@/app/page.module.css';
import { IAsteroid } from '@/interfaces/asteroid.interface';

const Page = async() => {
  const page = await getMenu("2023-08-31" ||
  "2023-09-06" ||
  "2023-09-07" ||
  "2023-09-04" ||
  "2023-09-05" ||
  "2023-09-02" ||
  "2023-09-03" ||
  "2023-09-01")
  return (
    <div className={styles.title}>
      <Htag tag="h2">Ближайшие подлёты астероидов</Htag>
      <Card hasBtn mainTitle={'31 авг 2023'} description={page.near_earth_objects["2023-08-31"]} />
      <Card hasBtn mainTitle={'1 сент 2023'} description={page.near_earth_objects["2023-09-01"]} />
      <Card hasBtn mainTitle={'2 сент 2023'} description={page.near_earth_objects["2023-09-02"]} />
      <Card hasBtn mainTitle={'4 сент 2023'} description={page.near_earth_objects["2023-09-04"]} />
      <Card hasBtn mainTitle={'5 сент 2023'} description={page.near_earth_objects["2023-09-05"]} />
      <Card hasBtn mainTitle={'6 сент 2023'} description={page.near_earth_objects["2023-09-06"]} />
      <Card hasBtn mainTitle={'7 сент 2023'} description={page.near_earth_objects["2023-09-07"]} />
    </div>
  );
};

export default Page;
