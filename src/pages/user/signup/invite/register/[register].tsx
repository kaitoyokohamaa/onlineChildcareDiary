import {NextPage} from 'next'
import {Pages} from '@/components/user/signup/invite/register/Pages'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {teacherRef} from '@/lib/nodedb'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const inviteKey = context.params.register

  const teacherInfo = await teacherRef()
    .where('chatKey', 'array-contains', inviteKey)
    .get()
    .then((res) =>
      res.docs.map((item) => {
        return {teacherInfo: item.data(), id: item.id}
      }),
    )

  const teacherUid = teacherInfo[0].teacherInfo.uid
  const teacherId = teacherInfo[0].id

  return {
    props: {inviteKey, teacherUid, teacherId},
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
