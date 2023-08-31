import { DetailPage } from '@/components';
import { getDetailPage } from '@/api/detailPage';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPropsContext } from 'next';

const Page = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const page = await getDetailPage(params.alias);

  return (
    <>
      <DetailPage description={page}/>
    </>
  );
};

export default Page;
