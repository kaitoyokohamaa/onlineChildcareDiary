import {NextPage} from 'next';
import {Pages} from '@/components/teacher/profile/edit/Pages';

import {adminUsersRef} from '@/lib/nodedb';
import {GetStaticProps, GetStaticPropsContext} from 'next';
import {EditUser} from '@/models/user';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  return {
    props: {
      id: context.params.edit,
    },
    revalidate: 20,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

const Edit: NextPage<EditUser> = ({id}) => {
  return <Pages id={id} />;
};

export default Edit;
