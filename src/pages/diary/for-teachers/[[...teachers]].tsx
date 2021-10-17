import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'

import {Pages} from '@/components/diary/for-teachers/Pages'
import {adminRegisterDetailRef} from '@/lib/nodedb'
import {EditType} from '@/models/diary/edit'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const registerDetailDocKey = context.params.teachers[0]
  const userDocKey = context.params.teachers[1]
  const diaryRef = await adminRegisterDetailRef(
    String(userDocKey),
    String(registerDetailDocKey)
  ).get()

  const detailDiary = JSON.parse(JSON.stringify(diaryRef.data()))
  const projectID = diaryRef.data().trainingContent[0].tableData.projectID

  return {
    props: {detailDiary, projectID, registerDetailDocKey},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const ForTeachers: NextPage<EditType> = ({
  detailDiary,
  projectID,
  registerDetailDocKey
}) => {
  return (
    <Pages
      detailDiary={detailDiary}
      projectID={projectID}
      registerDetailDocKey={registerDetailDocKey}
    />
  )
}
export default ForTeachers
