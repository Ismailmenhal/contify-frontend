import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import Header from 'components/Header'
import type { ReactElement } from 'react'

export default function LandingPage(): ReactElement {
	return (
		<div className='flex w-full flex-row justify-center bg-white'>
			<div className='h-[1024px] w-[1440px] overflow-hidden bg-white'>
				<div className='relative h-[1024px] w-[1442px]'>
					<div className='absolute left-0 top-0 h-[1024px] w-[1442px]'>
						<img
							className='absolute left-[582px] top-[106px] h-[884px] w-[858px] object-cover mix-blend-multiply'
							alt='Banner'
							src='/assets/banner.png'
						/>
						<div className='absolute left-0 top-[963px] h-[61px] w-[1442px]'>
							<div className='relative h-[61px] w-[1440px] bg-[#2d3752] shadow-[0px_4px_4px_#00000052]'>
								<p className="absolute left-[46px] top-[23px] w-[1156px] text-[16px] font-normal leading-[normal] tracking-[3.20px] text-white [font-family:'Inter-Regular',Helvetica]">
									CONTIFY © 2023 . All rights reserved.
								</p>
							</div>
						</div>
						<Header />
					</div>
					<div className='absolute left-[101px] top-[559px] h-[69px] w-[375px]'>
						<Button href='/signup'>
							<div className='relative h-[69px] w-[373px] rounded-[48px] bg-[#1b3a6f]'>
								<div className="absolute left-[99px] top-[23px] text-[19px] font-bold leading-[normal] tracking-[2.85px] text-white [font-family:'Inter-Bold',Helvetica]">
									Get Started Now !
								</div>

								<PersonIcon className='absolute left-[67px] top-[22px] h-[22px] w-[22px] text-white' />
							</div>
						</Button>
					</div>
					<p className="absolute left-[59px] top-[469px] whitespace-nowrap text-[20px] font-normal leading-[normal] tracking-[3.00px] text-black [font-family:'Inter-Regular',Helvetica]">
						Sign up now and get started for free!
					</p>
					<p className="absolute left-[59px] top-[379px] text-[34px] font-bold leading-[normal] tracking-[5.10px] text-black [font-family:'Inter-Bold',Helvetica]">
						The Ultimate Contact <br />
						Management Solution
					</p>
				</div>
			</div>
		</div>
	)
}
