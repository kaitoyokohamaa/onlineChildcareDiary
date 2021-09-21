import React from 'react'
import {Layout} from '@/components/common/layout'

import dynamic from 'next/dynamic'
const Pages = dynamic(() => import('@/components/diary/detail/Pages').then((mod) => mod.ClientDetails), {
	ssr: false
})
export default function detail() {
	return (
		<Layout isHeader>
			<Pages />
		</Layout>
	)
}
