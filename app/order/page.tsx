import { Htag } from '@/components';
import OrderList from '@/components/Order/OrderList';
import { getMenu } from '@/api/asteroids';

const Page = async () => {
  const page = await getMenu("2023-08-31" ||
    "2023-09-06" ||
    "2023-09-07" ||
    "2023-09-04" ||
    "2023-09-05" ||
    "2023-09-02" ||
    "2023-09-03" ||
    "2023-09-01")
  return (
    <>
      <Htag tag="h2">Заказ отправлен!</Htag>
      <OrderList title={
        page.near_earth_objects["2023-08-31"] && '31 авг 2023' ||
        page.near_earth_objects["2023-09-01"] && '1 сент 2023' ||
        page.near_earth_objects["2023-09-02"] && '2 сент 2023' ||
        page.near_earth_objects["2023-09-04"] && '4 сент 2023' ||
        page.near_earth_objects["2023-09-05"] && '5 сент 2023' ||
        page.near_earth_objects["2023-09-06"] && '6 сент 2023' ||
        page.near_earth_objects["2023-09-07"] && '7 сент 2023'
      }/>
    </>
  );
};

export default Page;
