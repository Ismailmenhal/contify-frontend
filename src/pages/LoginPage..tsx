import Footer from 'components/Footer'
import Header from 'components/Header'
import LoginBox from 'components/LoginBox'
import type { ReactElement } from 'react'

export default function LoginPage(): ReactElement {
	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<Header />
			<div className='flex h-[0px] flex-grow justify-center'>
				<div className='flex flex-1 justify-center'>
					<img
						className='h-auto w-full max-w-[1440px]'
						alt='right side'
						src='/assets/image2.png'
					/>
				</div>
				<div className='flex flex-1 justify-center'>
					<img
						className='h-auto w-full max-w-[1440px] mix-blend-darken'
						alt='left side'
						src='/assets/image1.png'
					/>
				</div>
			</div>
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
				<LoginBox />
			</div>
			<Footer />
		</div>
	)
}
