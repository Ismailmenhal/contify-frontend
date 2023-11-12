import Header from 'components/Header'
import type { ReactElement } from 'react'

export default function SignUpPage(): ReactElement {
	return (
		<div className='flex w-full flex-row justify-center bg-white'>
			<div className='h-[1024px] w-[1440px] overflow-hidden bg-white'>
				<Header />
				<div className='relative left-[-203px] h-[1024px] w-[1893px]'>
					<div className='absolute left-0 top-0 h-[1024px] w-[1893px]'>
						<div className='relative left-[203px] h-[1024px] w-[1440px]'>
							<img
								className='absolute left-0 top-0 h-[1024px] w-[821px] object-cover'
								alt='right side'
								src='/assets/image2.png'
							/>
							<img
								className='absolute left-[666px] top-0 h-[1024px] w-[774px] object-cover mix-blend-darken'
								alt='left side'
								src='/assets/image1.png'
							/>
						</div>
					</div>
					<div className='absolute left-[203px] top-[963px] h-[61px] w-[1442px]'>
						<div className='relative h-[61px] w-[1440px] bg-[#2d3752] shadow-[0px_4px_4px_#00000052]'>
							<p className="absolute left-[46px] top-[23px] w-[1156px] text-[16px] font-normal leading-[normal] tracking-[3.20px] text-white [font-family:'Inter-Regular',Helvetica]">
								CONTIFY © 2023 . All rights reserved.
							</p>
						</div>
					</div>
					<div className='absolute left-[635px] top-[225px] h-[655px] w-[581px]'>
						<div className='relative h-[655px] w-[575px] rounded-[69px] border-[3px] border-solid border-[#2d3752] bg-white'>
							<p className="absolute left-[107px] top-[69px] w-[352px] whitespace-nowrap text-[25px] font-medium leading-[normal] tracking-[3.75px] text-black [font-family:'Inter-Medium',Helvetica]">
								Sign up &amp; Get started !
							</p>
							<p className="absolute left-[151px] top-[577px] w-[268px] text-[15px] font-normal leading-[normal] tracking-[2.25px] text-black [font-family:'Inter-Regular',Helvetica]">
								<span className="text-[15px] font-normal tracking-[2.25px] text-black [font-family:'Inter-Regular',Helvetica]">
									You have an account ?{' '}
								</span>
								<span className="font-bold [font-family:'Inter-Bold',Helvetica]">
									Login
								</span>
							</p>
							<p className="absolute left-[166px] top-[25px] text-[36px] font-bold leading-[normal] tracking-[12.42px] text-transparent [font-family:'Inter-Bold',Helvetica]">
								<span className='text-black'>CON</span>
								<span className='text-[#0054e5]'>TIFY</span>
							</p>
							<div className='absolute left-[36px] top-[166px] h-[41px] w-[499px]'>
								<div className='relative h-[41px] w-[497px] rounded-[32px] border border-solid border-black bg-white'>
									<div className="absolute left-[22px] top-[11px] text-[13px] font-normal leading-[normal] tracking-[3.71px] text-[#494949] [font-family:'Inter-Regular',Helvetica]">
										Full Name
									</div>
								</div>
							</div>
							<div className='absolute left-[36px] top-[256px] h-[41px] w-[499px]'>
								<div className='relative h-[41px] w-[497px] rounded-[32px] border border-solid border-black bg-white'>
									<div className="absolute left-[22px] top-[11px] text-[13px] font-normal leading-[normal] tracking-[3.71px] text-[#494949] [font-family:'Inter-Regular',Helvetica]">
										Email
									</div>
								</div>
							</div>
							<div className='absolute left-[34px] top-[346px] h-[41px] w-[499px]'>
								<div className='relative h-[41px] w-[497px] rounded-[32px] border border-solid border-black bg-white'>
									<div className="absolute left-[24px] top-[11px] text-[13px] font-normal leading-[normal] tracking-[3.71px] text-[#494949] [font-family:'Inter-Regular',Helvetica]">
										Password
									</div>
								</div>
							</div>
							<div className='absolute left-[34px] top-[426px] h-[41px] w-[499px]'>
								<div className='relative h-[41px] w-[497px] rounded-[32px] border border-solid border-black bg-white'>
									<div className="absolute left-[24px] top-[11px] text-[13px] font-normal leading-[normal] tracking-[3.71px] text-[#494949] [font-family:'Inter-Regular',Helvetica]">
										Phone Number
									</div>
								</div>
							</div>
							<div className='absolute left-[102px] top-[513px] h-[51px] w-[367px]'>
								<div className='relative h-[51px] w-[365px] rounded-[48px] bg-[#1b3a6f]'>
									<div className="absolute left-0 top-[17px] w-[363px] text-center text-[14px] font-bold leading-[normal] tracking-[2.10px] text-white [font-family:'Inter-Bold',Helvetica]">
										SignUp
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
