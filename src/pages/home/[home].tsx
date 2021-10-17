import {NextPage} from 'next'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {Pages} from '@/components/home/Pages'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const inviteKey = context.params.home

  return {
    props: {inviteKey},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
const Home: NextPage<{inviteKey: string}> = ({inviteKey}) => {
  return <Pages inviteKey={inviteKey} />
}
export default Home
