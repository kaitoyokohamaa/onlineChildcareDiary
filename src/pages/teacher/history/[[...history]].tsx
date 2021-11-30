import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';
import {Pages} from '@/components/teacher/history/Pages';
import {teacherRef} from '@/lib/nodedb';
import {History} from '@/models/diary/history';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const historyKey = context.params.history[1];
  const userKey = context.params.history[2];

  const history = await teacherRef()
    .doc(String(historyKey))
    .collection('history')
    .get();

  const data = history.docs.map((res) =>
    JSON.parse(JSON.stringify(res.data())),
  );

  return {
    props: {data, userKey},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Chat: NextPage<History> = ({data, userKey}) => {
  return <Pages data={data} userKey={userKey} />;
};
export default Chat;
