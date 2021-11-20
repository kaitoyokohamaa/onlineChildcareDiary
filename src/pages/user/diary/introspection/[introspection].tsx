import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';
import {Pages} from '@/components/diary/introspection/Pages';
import {introspectionRef} from '@/lib/nodedb';
import {Introspection} from '@/models/diary/introspection';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const introspectionyKey = context.params.introspection;
  const data = await introspectionRef(String(introspectionyKey))
    .get()
    .then((res) => {
      if (res.size) {
        return res.docs.map((item) => {
          return item.data();
        })[0];
      } else {
        return null;
      }
    });
  const introspection = JSON.parse(JSON.stringify(data));

  return {
    props: {introspection},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Welcome: NextPage<{introspection: Introspection}> = ({introspection}) => {
  return <Pages introspection={introspection} />;
};
export default Welcome;
