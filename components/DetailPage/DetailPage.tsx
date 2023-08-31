import styles from '@/components/DetailPage/DetailPage.module.css';
import { DetailPageProps } from '@/components/DetailPage/DetailPage.props';
import { Htag } from '@/components';


const DetailPage = ({description, ...props}: DetailPageProps) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.velocity} {...props} >
        <Htag tag="h3">Скорость относительно Земли</Htag>
        <div className={styles.velocityItem}>{description && description?.close_approach_data[0]?.relative_velocity?.kilometers_per_hour} км/ч </div>
      </div>
      <div className={styles.epochDate} {...props} >
        <Htag tag="h3">Время максимального сближения</Htag>
        <div className={styles.velocityItem}>{description && new Date(description.close_approach_data[0].epoch_date_close_approach).toDateString()}</div>
      </div>
      <div className={styles.distance} {...props} >
        <Htag tag="h3">Расстояние до Земли</Htag>
        <div className={styles.velocityItem}>
        {description && description?.close_approach_data[0]?.miss_distance.kilometers} км
        </div>
      </div>
      <div className={styles.orbiting} {...props} >
        <Htag tag="h3">Орбита</Htag>
        <div className={styles.velocityItem}>
        {description && description?.close_approach_data[0]?.orbiting_body}
        </div>
      </div>
    </div>

  );
};

export default DetailPage;
