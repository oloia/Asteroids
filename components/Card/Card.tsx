'use client';
import { CardProps } from '@/components/Card/Card.props';
import styles from '@/components/Card/Card.module.css';
import { Htag } from '@/components';
import BigAsteroidIcon from './bigAsteroid.svg';
import SmallAsteroidIcon from './smallAsteroid.svg';
import ArrowIcon from './arrow.svg';
import React, { useState } from 'react';
import Link from 'next/link';
import { IAsteroid } from '@/interfaces/asteroid.interface';
import { useCart } from '@/providers/CartProvider';

const Card = ({ addProduct, description, mainTitle, className, hasBtn, ...props }: CardProps) => {
  const [isToggled, setIsToggled] = useState<string>('option1');
  const { alreadyInCart, dispatch } = useCart();

  const onClickOrder = (item: IAsteroid) => () => {
    if(!alreadyInCart(item.id)){
      dispatch({ type: 'ADD_ITEM', item });
        window.location.reload();
    }
  };

  const handleToggle = (option: string) => {
    setIsToggled(option);
  };

  return (
    <>
      {hasBtn && <div className={styles.filter}>
        <span onClick={() => handleToggle('option1')}
              className={isToggled === 'option1' ? styles.isActive : styles.toogleBtn}>
          в километрах
        </span> |{' '}
        <span
          className={isToggled === 'option2' ? styles.isActive : styles.toogleBtn}
          onClick={() => handleToggle('option2')}>
          в лунных орбитах
        </span>
      </div>}
      {description.map(item => (
        <div key={item.id}>
          <div className={hasBtn ? styles.description : styles.descriptionDetail} {...props} >
            <div className={styles.title}>
              <Htag tag="h2"><span style={{ color: 'white' }}>{mainTitle}</span></Htag>
            </div>
            <div
              className={styles.size}>{isToggled === 'option1' ?
              `${item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(6)} км` :
              `${item.estimated_diameter.feet.estimated_diameter_max.toFixed(0)} лунных орбит`}
              <div><ArrowIcon/></div>
            </div>
            {item.estimated_diameter.kilometers.estimated_diameter_max > 1 ? <BigAsteroidIcon className={styles.icon}/> :
              <SmallAsteroidIcon className={styles.icon}/>}
            <div className={styles.name}>
              <Htag tag="h4"><span style={{ borderBottom: '1px solid white', color: 'white' }}>{item.name}</span></Htag>
              <div style={{ color: 'white' }}> Ø {Math.floor(item.estimated_diameter.meters.estimated_diameter_max)} м
              </div>
            </div>
            {hasBtn && <button
              className={`${styles.btn} ${alreadyInCart(item.id) && styles.btnInactive}`}
              onClick={onClickOrder(item)}
              disabled={alreadyInCart(item.id)}
            >
              ЗАКАЗАТЬ
            </button>
            }
            {item.is_potentially_hazardous_asteroid && <div className={styles.danger}>⚠ Опасен</div>}
            {hasBtn && <Link href={`/${item.id}`} className={styles.detail}>Об астероиде</Link>}
          </div>
        </div>
      ))}
    </>
  );

};

export default Card;
