import React from 'react'
import {Layout} from '@/components/common/layout'

import {Pages} from '@/components/diary/detail/Pages'
export default function detail() {
	return (
		<Layout isHeader>
			<Pages />
		</Layout>
	)
}
