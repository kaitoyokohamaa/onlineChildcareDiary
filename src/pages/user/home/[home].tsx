import {NextPage} from 'next';
import {GetStaticProps, GetStaticPropsContext} from 'next';
import {Pages} from '@/components/user/home/Pages';
import {summaryRef, introspectionRef} from '@/lib/nodedb';
import {Home} from '@/models/user/home';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const inviteKey = context.params.home;

  const isSummary = await summaryRef(String(inviteKey))
    .get()
    .then((res) => {
      if (res.size) {
        return true;
      } else {
        return false;
      }
    });
  const isIntrospection = await introspectionRef(String(inviteKey))
    .get()
    .then((res) => {
      if (res.size) {
        return true;
      } else {
        return false;
      }
    });
  return {
    props: {inviteKey, isSummary, isIntrospection},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const HomePage: NextPage<Home> = ({inviteKey, isSummary, isIntrospection}) => {
  return (
    <Pages
      inviteKey={inviteKey}
      isSummary={isSummary}
      isIntrospection={isIntrospection}
    />
  );
};
export default HomePage;
