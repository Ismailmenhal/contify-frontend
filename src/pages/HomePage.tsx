import PersonIcon from '@mui/icons-material/Person'
import Footer from 'components/Footer'
import Header from 'components/Header'
import type { ReactElement } from 'react'

export default function LandingPage(): ReactElement {
	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<Header />
			<div className='flex flex-col items-center px-4 md:flex-row'>
				<div className='flex flex-col items-center md:w-1/2'>
					<p className='text-2xl font-bold leading-normal tracking-wider text-black md:text-4xl'>
						The Ultimate Contact <br />
						Management Solution
					</p>
					<p className='text-lg font-normal leading-normal tracking-wider text-black md:text-xl'>
						Sign up now and get started for free!
					</p>
					<a href='/signup'>
						<div className='mt-4 flex h-16 w-64 items-center justify-center rounded-full bg-[#1b3a6f]'>
							<PersonIcon className='ml-2 mr-2 h-6 w-6 text-white' />
							<div className='text-lg font-bold text-white'>
								Get Started Now !
							</div>
						</div>
					</a>
				</div>
				<div className='h-full w-full md:ml-auto md:w-[43%]'>
					<img
						className='h-full w-full object-cover mix-blend-multiply'
						alt='Banner'
						src='/assets/banner.png'
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
