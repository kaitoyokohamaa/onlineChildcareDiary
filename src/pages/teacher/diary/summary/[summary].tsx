import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'
import {Pages} from '@/components/diary/summary/Pages'
import {summaryRef} from '@/lib/nodedb'
import {Summary} from '@/models/diary/summary'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const summaryKey = context.params.summary
  const data = await summaryRef(String(summaryKey))
    .get()
    .then((res) => {
      return res.docs.map((item) => {
        return item.data()
      })[0]
    })
  const summary = JSON.parse(JSON.stringify(data))

  return {
    props: {summary},
    revalidate: 30,
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
const Welcome: NextPage<{summary: Summary}> = ({summary}) => {
  return <Pages summary={summary} />
}
export default Welcome
