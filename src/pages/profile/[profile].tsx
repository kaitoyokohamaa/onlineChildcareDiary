import {Pages} from '@/components/profile/Pages'
import {Layout} from '@/components/common/layout'
import {adminUsersRef} from '@/lib/nodedb'
import {GetStaticProps, GetStaticPropsContext} from 'next'
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const users = await adminUsersRef(String(context.params.profile)).get()

	return {
		props: {
			users: users.data()
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
export default function index({users}) {
	return (
		<Layout isHeader>
			<Pages users={users} />
		</Layout>
	)
}
