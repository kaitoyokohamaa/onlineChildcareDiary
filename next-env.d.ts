/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />
declare module 'next-fonts'
declare module '*.ttf' {
	const content: any
	export default content
}

declare module '*.otf' {
	const content: any
	export default content
}
