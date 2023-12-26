import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { selectedContact } from 'pages/AllPeople'
import type { ReactElement } from 'react'
import type ITag from 'types/ITag'

interface ContactRowBoxProperties {
	id: string
	fullName: string
	phoneNumber: string
	email: string
	imageContact: string
	address: string
	tags: ITag[]
	favorite: boolean
}

export default function ContactRowBox({
	id,
	fullName,
	phoneNumber,
	email,
	imageContact,
	address,
	tags,
	favorite
}: ContactRowBoxProperties): ReactElement {
	return (
		<div className='ml-8 mt-10 h-16 w-full'>
			<div className='flex h-16 w-[95%] items-center border-b-2 border-solid border-gray-300 pb-8'>
				<Avatar
					className='mr-3 rounded-md'
					style={{
						width: '60px',
						height: '60px'
					}}
					alt={fullName[0]}
					src={imageContact}
				/>
				<div className='flex flex-1 flex-col justify-evenly text-sm leading-normal tracking-wider md:flex-row'>
					<div className='font-bold text-[#343434]'>{fullName}</div>
					<div className='font-medium text-[#9d9d9d]'>{phoneNumber}</div>
					<div className='font-medium text-[#9d9d9d]'>{email}</div>
				</div>
				<IconButton
					className='ml-auto'
					color='inherit'
					onClick={() => {
						selectedContact.value = {
							...selectedContact.value,
							id,
							fullName,
							phoneNumber,
							email,
							address,
							imageContact,
							tags,
							favorite,
							active: true
						}
					}}
				>
					<MoreVertIcon />
				</IconButton>
			</div>
		</div>
	)
}
