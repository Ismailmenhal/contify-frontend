import AddIcon from '@mui/icons-material/Add'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import type React from 'react'

export default function ContactInfosBox(): React.ReactNode {
	return (
		<Box className='hidden h-[80vh] flex-col items-center md:w-[10vw] lg:w-[25vw] xl:flex'>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					backgroundColor: '#1b3a70',
					borderRadius: '50px',
					position: 'relative'
				}}
			>
				<Box
					sx={{
						height: '335px',
						borderRadius: '50px',
						width: '100%',
						backgroundColor: '#214789',
						boxShadow: '0px 4px 4px #00000040',
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Avatar
						sx={{
							width: '186px',
							height: '186px',
							objectFit: 'cover'
						}}
						alt='Ellipse'
						src='ellipse-8.png'
					/>
				</Box>
			</Box>
		</Box>
	)
}

function ContactInfosBox1(): React.ReactNode {
	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<Box
				sx={{
					position: 'fixed',
					width: '21%',
					height: '75%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%',
						backgroundColor: '#1b3a70',
						borderRadius: '50px'
					}}
				>
					<Box
						sx={{
							height: '335px',
							borderRadius: '50px',
							position: 'absolute',
							width: '100%',
							backgroundColor: '#214789',
							boxShadow: '0px 4px 4px #00000040'
						}}
					/>
					<Box
						sx={{
							height: '79px',
							top: '642px',
							borderRadius: '0px 0px 50px 50px',
							position: 'absolute',
							width: '100%',
							backgroundColor: '#214789',
							boxShadow: '0px 4px 4px #00000040'
						}}
					/>
					<Avatar
						sx={{
							width: '186px',
							height: '186px',
							top: '41px',
							left: '101px',
							position: 'absolute',
							objectFit: 'cover'
						}}
						alt='Ellipse'
						src='ellipse-8.png'
					/>
					<div
						className='absolute left-[134px] top-[229px] text-[19px] font-medium leading-[normal] tracking-[1.52px] text-white'
						style={{ fontFamily: 'Inter-Medium,Helvetica' }}
					>
						FULL NAME
					</div>
					<div className='absolute left-[164px] top-[253px] h-[17px] w-[40px]'>
						<div className='relative h-[17px] w-[38px] rounded-[5px] bg-[#00000061]'>
							<div
								className='absolute left-[4px] top-[3px] text-[8px] font-bold leading-[normal] tracking-[0.64px] text-[#ffffffd6]'
								style={{ fontFamily: 'Inter-Bold,Helvetica' }}
							>
								Family
							</div>
						</div>
					</div>
					<div className='absolute left-[215px] top-[253px] h-[17px] w-[40px]'>
						<div className='relative h-[17px] w-[38px] rounded-[5px] bg-[#00000061]'>
							<div
								className='absolute left-[11px] top-[3px] text-[8px] font-bold leading-[normal] tracking-[0.64px] text-[#ffffffd6]'
								style={{ fontFamily: 'Inter-Bold,Helvetica' }}
							>
								Job
							</div>
						</div>
					</div>
					<StarBorderPurple500OutlinedIcon className='h-[25px] w-[26px] text-white' />
					<div className='absolute left-[92px] top-[285px] h-[32px] w-[33px] rounded-[11px] bg-[#3b66b1]'>
						<LocalPhoneOutlinedIcon className='h-[21px] w-[21px] text-white' />
					</div>
					<div className='absolute left-[182px] top-[285px] h-[32px] w-[33px] rounded-[11px] bg-[#3b66b1]'>
						<VideocamOutlinedIcon className='h-[22px] w-[17px] text-white' />
					</div>
					<div className='absolute left-[272px] top-[285px] h-[32px] w-[33px] rounded-[11px] bg-[#3b66b1]'>
						<ChatOutlinedIcon className='h-[21px] w-[21px] text-white' />
					</div>
					<div className='absolute left-[134px] top-[253px] h-[17px] w-[17px] rounded-[8px] bg-[#00000061]'>
						<AddIcon className='h-[9px] w-[9px] text-white' />
					</div>
					<div className='absolute left-[52px] top-[385px] h-[32px] w-[285px]'>
						<div className='relative h-[32px] w-[283px] rounded-[11px] bg-[#3b66b1]'>
							<LocalPhoneOutlinedIcon className='h-[21px] w-[21px] text-white' />
							<div
								className='absolute left-[39px] top-[8px] text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'
								style={{ fontFamily: 'Inter-Medium,Helvetica' }}
							>
								+212606060606
							</div>
						</div>
					</div>
					<div className='absolute left-[52px] top-[525px] h-[32px] w-[285px]'>
						<div className='relative h-[32px] w-[283px] rounded-[11px] bg-[#3b66b1]'>
							<FmdGoodOutlinedIcon className='h-[22px] w-[17px] text-white' />
							<div
								className='absolute left-[40px] top-[8px] text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'
								style={{ fontFamily: 'Inter-Medium,Helvetica' }}
							>
								Marrakech , Maroc ....
							</div>
						</div>
					</div>
					<div className='absolute left-[52px] top-[455px] h-[32px] w-[285px]'>
						<div className='relative h-[32px] w-[283px] rounded-[11px] bg-[#3b66b1]'>
							<ChatOutlinedIcon className='h-[21px] w-[21px] text-white' />
							<a
								className='absolute left-[39px] top-[8px] text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'
								href='mailto:email@email.com'
								rel='noopener noreferrer'
								target='_blank'
							>
								email@email.com
							</a>
						</div>
					</div>
					<EditOutlinedIcon className='h-[25px] w-[25px] text-white' />
					<DeleteOutlineOutlinedIcon className='h-[25px] w-[25px] text-white' />
				</Box>
			</Box>
		</Box>
	)
}
