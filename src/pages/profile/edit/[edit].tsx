import {Pages} from '@/components/profile/edit/Pages'
import {Layout} from '@/components/common/layout'
import {adminUsersRef} from '@/lib/nodedb'
import {GetStaticProps, GetStaticPropsContext} from 'next'
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
export default function index({user, id}) {
	return (
		<Layout isHeader>
			<Pages user={user} id={id} />
		</Layout>
	)
}
