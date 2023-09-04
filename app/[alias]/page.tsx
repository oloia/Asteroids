import { DetailPage } from '@/components';
import { getDetailPage } from '@/api/detailPage';

interface IPageProps {
  params: {
    alias: string;
  };
}

const Page = async ({params}: IPageProps) => {
  const page = await getDetailPage(params.alias);

  return (
    <>
      <DetailPage description={page}/>
    </>
  );
};

export default Page;
