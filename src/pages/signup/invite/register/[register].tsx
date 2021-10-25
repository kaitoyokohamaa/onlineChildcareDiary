import {NextPage} from 'next'
import {Pages} from '@/components/signup/invite/register/Pages'
import {GetStaticProps, GetStaticPropsContext} from 'next'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const inviteKey = context.params.register

  return {
    props: {inviteKey},
    revalidate: 20
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
const Login: NextPage<{inviteKey: string}> = ({inviteKey}) => {
  return <Pages inviteKey={inviteKey} />
}
export default Login
