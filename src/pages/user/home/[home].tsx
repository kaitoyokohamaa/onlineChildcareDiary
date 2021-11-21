import {NextPage} from 'next';
import {GetStaticProps, GetStaticPropsContext} from 'next';
import {Pages} from '@/components/user/home/Pages';
import {summaryRef, introspectionRef} from '@/lib/nodedb';
import {Home} from '@/models/user/home';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const homeKey = context.params.home;

  const isSummary = await summaryRef(String(homeKey))
    .get()
    .then((res) => {
      if (res.size) {
        return true;
      } else {
        return false;
      }
    });
  const isIntrospection = await introspectionRef(String(homeKey))
    .get()
    .then((res) => {
      if (res.size) {
        return true;
      } else {
        return false;
      }
    });
  return {
    props: {homeKey, isSummary, isIntrospection},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const HomePage: NextPage<Home> = ({homeKey, isSummary, isIntrospection}) => {
  return (
    <Pages
      homeKey={homeKey}
      isSummary={isSummary}
      isIntrospection={isIntrospection}
    />
  );
};
export default HomePage;
