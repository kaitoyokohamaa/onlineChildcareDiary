import {NextPage} from 'next'
import {Pages} from '@/components/profile/edit/Pages'
import {Layout} from '@/components/common/layout'
import {adminUsersRef} from '@/lib/nodedb'
import {GetStaticProps, GetStaticPropsContext} from 'next'
import {EditUser} from '@/models/user'
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const user = await adminUsersRef(String(context.params.edit)).get()
	return {
		props: {
			user: user.data(),
			id: context.params.edit
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

const Edit: NextPage<EditUser> = ({user, id}) => {
	return (
		<Layout isHeader>
			<Pages user={user} id={id} />
		</Layout>
	)
}

export default Edit