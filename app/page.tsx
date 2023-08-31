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
      {/*{page.near_earth_objects["2023-09-06"].map(p => (*/}
      {/*  <Card mainTitle={'6 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}
      {/*{page.near_earth_objects["2023-09-07"].map(p => (*/}
      {/*  <Card mainTitle={'7 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}
      {/*{page.near_earth_objects["2023-09-05"].map(p => (*/}
      {/*  <Card mainTitle={'5 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}
      {/*{page.near_earth_objects["2023-09-02"].map(p => (*/}
      {/*  <Card mainTitle={'2 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}
      {/*{page.near_earth_objects["2023-09-03"].map(p => (*/}
      {/*  <Card mainTitle={'3 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}
      {/*{page.near_earth_objects["2023-09-01"].map(p => (*/}
      {/*  <Card mainTitle={'1 сент 2023'} description={p} key={p.id}/>*/}
      {/*))}*/}

    </div>
  );
};

export default Page;
