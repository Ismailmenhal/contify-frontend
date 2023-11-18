import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import type { ReactElement } from 'react'

interface ContactRowBoxProperties {
	fullName: string
	phoneNumber: string
	email: string
	imageContact: string
}

export default function ContactRowBox({
	fullName,
	phoneNumber,
	email,
	imageContact
}: ContactRowBoxProperties): ReactElement {
	return (
		<Box
			sx={{
				position: 'relative',
				width: '100%',
				height: '60px',
				marginLeft: '30px',
				marginTop: '40px'
			}}
		>
			<Box className='fixed flex h-[60px] w-[45%] items-center border-b-2 border-solid border-gray-300 pb-8'>
				<Avatar
					className='mr-[10px] rounded-md'
					sx={{
						width: '60px',
						height: '60px'
					}}
					alt={fullName[0]}
					src={imageContact}
				/>
				<Box className='flex flex-1 flex-col justify-evenly text-[13px] leading-[normal] tracking-[1.04px] md:flex-row'>
					<div className='font-bold text-[#343434]'>{fullName}</div>
					<div className='font-medium text-[#9d9d9d]'>{phoneNumber}</div>
					<div className=' font-medium text-[#9d9d9d]'>{email}</div>
				</Box>
				<IconButton sx={{ marginLeft: 'auto' }} color='inherit'>
					<MoreVertIcon />
				</IconButton>
			</Box>
		</Box>
	)
}
