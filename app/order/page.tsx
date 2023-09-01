import { Htag } from '@/components';
import OrderList from '@/components/Order/OrderList';

const Page = async () => {
  return (
    <>
      <Htag tag="h2"><span style={{ color: 'white' }}>Заказ отправлен!</span></Htag>
      <br />
      <OrderList />
    </>
  );
};

export default Page;
