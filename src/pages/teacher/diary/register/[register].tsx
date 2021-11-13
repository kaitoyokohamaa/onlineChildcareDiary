import {NextPage} from 'next'

import {Pages} from '@/components/diary/register/Pages'
export async function getServerSideProps(context) {
  const id = context.query.register

  return {
    props: {id}
  }
}
type ProjectID = {
  id: string
}
const School: NextPage<ProjectID> = ({id}) => {
  return <Pages projectID={id} />
}
export default School
