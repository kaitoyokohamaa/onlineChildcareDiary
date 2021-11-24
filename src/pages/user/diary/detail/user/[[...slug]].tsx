import React from 'react';

import {Pages} from '@/components/diary/detail/user/Pages';
import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';

import {DocKeyId} from '@/models/diary/register';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const detailKey = context.params.slug[0];
  const userKey = context.params.slug[1];

  return {
    props: {detailKey, userKey},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Detail: NextPage<DocKeyId> = ({detailKey, userKey}) => {
  return <Pages detailKey={detailKey} userKey={userKey} />;
};
export default Detail;
