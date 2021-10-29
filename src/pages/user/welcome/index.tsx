import {NextPage} from 'next'
import {Pages} from '@/components/user/welcome/Pages'

import {adminUsersRef} from '@/lib/nodedb'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {User} from '@/models/user'

const Welcome: NextPage = () => {
  return <Pages />
}
export default Welcome
