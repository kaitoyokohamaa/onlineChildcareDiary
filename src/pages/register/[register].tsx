import {NextPage} from 'next'
import {Layout} from '@/components/common/layout'
import {Pages} from '@/components/register/Pages'
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
	return (
		<Layout isHeader>
			<Pages projectID={id} />
		</Layout>
	)
}
export default School
