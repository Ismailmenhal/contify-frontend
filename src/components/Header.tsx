import { Button } from '@mui/material'
import type { ReactElement } from 'react'

export default function Header(): ReactElement {
	return (
		<div className='w-full'>
			<div className='top-0 w-full'>
				<div className='relative w-full bg-white shadow-md'>
					<div className='flex items-center justify-between p-4'>
						<div className='font-inter text-[36px] font-bold leading-normal tracking-[12.42px] text-transparent'>
							<span className='text-black'>CON</span>
							<span className='text-[#0054e5]'>TIFY</span>
						</div>

						<div className='flex space-x-4'>
							<Button href='/signup'>
								<div className='relative h-[51px] w-[98px] rounded-[48px] bg-[#1b3a6f]'>
									<div className='font-inter absolute inset-0 flex items-center justify-center text-[14px] font-bold leading-normal tracking-[2.10px] text-white'>
										SignUp
									</div>
								</div>
							</Button>
							<Button href='#login'>
								<div className='relative h-[51px] w-[98px] rounded-[48px] bg-[#2e74ed]'>
									<div className='font-inter absolute inset-0 flex items-center justify-center text-[14px] font-bold leading-normal tracking-[2.10px] text-white'>
										Login
									</div>
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
