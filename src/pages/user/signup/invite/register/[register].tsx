import {NextPage} from 'next'
import {Pages} from '@/components/user/signup/invite/register/Pages'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {invitedUserRef} from '@/lib/nodedb'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const inviteKey = context.params.register
  const teacherInfo = await invitedUserRef(String(inviteKey)).get()
  const teacherId = teacherInfo.docs.map((res) => res.id)[0]
  const teacherUid = teacherInfo.docs.map((res) => res.data().uid)[0]
  return {
    props: {inviteKey, teacherId, teacherUid},
    revalidate: 20,
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Login: NextPage<{
  inviteKey: string
  teacherId: string
  teacherUid: string
}> = ({inviteKey, teacherId, teacherUid}) => {
  return (
    <Pages
      inviteKey={inviteKey}
      teacherId={teacherId}
      teacherUid={teacherUid}
    />
  )
}
export default Login
