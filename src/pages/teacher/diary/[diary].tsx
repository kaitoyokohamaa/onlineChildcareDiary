import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'
import {Pages} from '@/components/diary/Pages'
import {adminRegisterRef} from '@/lib/nodedb'
import {Register} from '@/models/diary/register'

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const Key = context.params.diary

  const diaryRef = await adminRegisterRef(String(Key)).get()
  const diary = diaryRef.docs.map((res) => {
    const data = {diaryData: res.data(), id: res.id}
    return data
  })
  const parsedDiary = JSON.parse(JSON.stringify(diary))

  return {
    props: {diary: parsedDiary},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const Diary: NextPage<{diary: Register}> = ({diary}) => {
  return <Pages diary={diary} />
}
export default Diary
