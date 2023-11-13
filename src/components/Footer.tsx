import type { ReactElement } from 'react'

export default function Footer(): ReactElement {
	return (
		<div className='w-full bg-[#2d3752] px-8 py-4 shadow-md'>
			<p className='text-lg font-normal leading-normal tracking-wider text-white'>
				CONTIFY © 2023 . All rights reserved.
			</p>
		</div>
	)
}
