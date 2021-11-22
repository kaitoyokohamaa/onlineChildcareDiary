import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';
import {Pages} from '@/components/diary/summary/correct/Pages';
import {summaryRef} from '@/lib/nodedb';
import {Summary} from '@/models/diary/summary';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const summaryDocKey = context.params.correct;

  return {
    props: {summaryDocKey},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Collect: NextPage<{summaryDocKey: string}> = ({summaryDocKey}) => {
  return <Pages summaryDocKey={summaryDocKey} />;
};
export default Collect;
