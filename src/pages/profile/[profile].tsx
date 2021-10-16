import {NextPage} from 'next'
import {Pages} from '@/components/profile/Pages'

import {adminUsersRef} from '@/lib/nodedb'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {User} from '@/models/user'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const user = await adminUsersRef(String(context.params.profile)).get()

  return {
    props: {
      user: user.data()
    },
    revalidate: 20
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const Profile: NextPage<{user: User}> = ({user}) => {
  return <Pages user={user} />
}
export default Profile
