import type { ReactElement } from 'react'

export default function Header(): ReactElement {
	return (
		<div className='w-full bg-white shadow-md'>
			<div className='flex items-center justify-between p-4'>
				<a
					href='/'
					className='font-inter text-4xl font-bold leading-normal tracking-wider text-transparent'
				>
					<span className='text-black'>CON</span>
					<span className='text-[#0054e5]'>TIFY</span>
				</a>

				<div className='flex space-x-4'>
					<a href='/signup'>
						<div className='flex h-10 w-20 items-center justify-center rounded-full bg-[#1b3a6f] md:h-14 md:w-28'>
							<div className='font-inter text-sm font-bold leading-normal tracking-wider text-white md:text-lg'>
								SignUp
							</div>
						</div>
					</a>
					<a href='/login'>
						<div className='flex h-10 w-20 items-center justify-center rounded-full bg-[#2e74ed] md:h-14 md:w-28'>
							<div className='font-inter text-sm font-bold leading-normal tracking-wider text-white md:text-lg'>
								Login
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
