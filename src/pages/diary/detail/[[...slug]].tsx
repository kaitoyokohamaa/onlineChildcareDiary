import React from 'react'

import {Pages} from '@/components/diary/detail/Pages'
import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'
import {adminRegisterDetailRef} from '@/lib/nodedb'
import {DetailDiary} from '@/models/diary/register'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const detailKey = context.params.slug[0]
  const userKey = context.params.slug[1]
  const diaryRef = await adminRegisterDetailRef(
    String(userKey),
    String(detailKey)
  ).get()
  const detailDiary = JSON.parse(JSON.stringify(diaryRef.data()))

  return {
    props: {detailDiary},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
const Detail: NextPage<{detailDiary: DetailDiary}> = ({detailDiary}) => {
  return <Pages detailDiary={detailDiary} />
}
export default Detail
