import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import { Dialog, DialogContent } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { selectedContact } from 'pages/AllPeople'
import type { ReactElement } from 'react'
import { useState } from 'react'
import type ITag from 'types/ITag'
import AddContact, { contact } from './AddContact'
import AffectTags from './affectTags'

interface ContactInfosBoxProperties {
	id: string
	fullName: string
	phoneNumber: string
	email: string
	address: string
	imageContact: string
	tags: ITag[]
	favorite: boolean
}

export default function ContactInfosBox({
	id,
	fullName,
	phoneNumber,
	email,
	address,
	imageContact,
	tags,
	favorite
}: ContactInfosBoxProperties): ReactElement {
	const headers = { 'Content-Type': 'application/json' }
	const queryClient = useQueryClient()
	const { mutate, isLoading: deleteContact } = useMutation({
		mutationFn: async () =>
			axios.delete(`/api/contact/deleteContactById/${id}`, {
				headers
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			return true
		},
		onError: error => false
	})
	const { mutate: addToFavorite, isLoading: favoriteContact } = useMutation({
		mutationFn: async () =>
			axios.post(`/api/contact/favorite/${id}`, {
				headers
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			return true
		},
		onError: error => false
	})

	const onDeleteContact = () => {
		if (confirm('Are you sure ?')) {
			mutate()
		}
		window.location.reload()
	}
	const onFavoriteContact = () => {
		addToFavorite()
		window.location.reload()
	}
	const [open, setOpen] = useState(false)
	const [openUpdate, setOpenUpdate] = useState(false)

	const handleClickOpenUpdate = () => {
		contact.value = {
			...contact.value,
			id,
			fullName,
			phoneNumber,
			email,
			address,
			imagePath: imageContact
		}
		setOpenUpdate(true)
	}
	const handleCloseUpdate = () => {
		setOpenUpdate(false)
	}
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

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
				<Box className='flex h-[335px] w-full flex-col items-center justify-center gap-3 rounded-[50px] bg-[#214789] shadow-[0px_4px_4px_#00000040]'>
					<Avatar
						sx={{
							width: '186px',
							height: '186px',
							objectFit: 'cover'
						}}
						className='shadow-md'
						alt='Ellipse'
						src={imageContact}
					/>
					<Box className='flex flex-col items-center justify-center text-center'>
						<Box className='text-[19px] font-medium tracking-[1.52px] text-white'>
							{fullName}
						</Box>
						<Box
							className='flex flex-row gap-3 text-[10px] text-white'
							key='tags'
						>
							<Box
								className='flex h-[17px] w-[17px] cursor-pointer items-center justify-center rounded-[5px] bg-[#00000061] text-[15px]'
								onClick={handleClickOpen}
								key='+'
							>
								+
							</Box>
							<Dialog
								open={open}
								onClose={handleClickOpen}
								sx={{
									'& .MuiDialog-paper': {
										width: '376px',
										height: '200px',
										background: '#1b3a70',
										borderRadius: '40px'
									}
								}}
							>
								<DialogContent
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<AffectTags contactId={{ id }} handleClose={handleClose} />
								</DialogContent>
							</Dialog>
							{tags.map(tag => (
								<Box
									key={tag.id}
									className='flex items-center justify-center rounded-[5px] bg-[#00000061] px-1'
								>
									{tag.name}
								</Box>
							))}
						</Box>
					</Box>
					<Box className='mt-3 flex flex-row items-center gap-16'>
						<Box className='flex h-[32px] w-[33px] items-center justify-center rounded-[11px] bg-[#3b66b1]'>
							<LocalPhoneOutlinedIcon className='h-[21px] w-[21px] text-white' />
						</Box>
						<Box className='flex h-[32px] w-[33px] items-center justify-center rounded-[11px] bg-[#3b66b1]'>
							<VideocamOutlinedIcon className='h-[22px] w-[17px] text-white' />
						</Box>
						<Box className='flex h-[32px] w-[33px] items-center justify-center rounded-[11px] bg-[#3b66b1]'>
							<ChatOutlinedIcon className='h-[21px] w-[21px] text-white' />
						</Box>
					</Box>
				</Box>
				<Box className='mt-16 flex w-full flex-col items-center justify-center gap-11 text-white'>
					<Box
						className='flex h-[32px] w-[283px] flex-row items-center gap-5 rounded-[11px] bg-[#3b66b1]'
						key='phone'
					>
						<LocalPhoneOutlinedIcon className='ml-3 h-[21px] w-[21px] text-white' />
						<Box className='text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'>
							{phoneNumber}
						</Box>
					</Box>
					<Box
						className='flex h-[32px] w-[283px] flex-row items-center gap-5 rounded-[11px] bg-[#3b66b1]'
						key='email'
					>
						<ChatOutlinedIcon className='ml-3 h-[21px] w-[21px] text-white' />
						<Box className='text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'>
							{email}
						</Box>
					</Box>
					<Box
						className='flex h-[32px] w-[283px] flex-row items-center gap-5 rounded-[11px] bg-[#3b66b1]'
						key='address'
					>
						<FmdGoodOutlinedIcon className='ml-3 h-[22px] w-[17px] text-white' />
						<Box className='text-[13px] font-medium leading-[normal] tracking-[1.04px] text-white'>
							{address}
						</Box>
					</Box>
				</Box>
				<Box className='mt-[5.9rem] flex h-[89px] w-full flex-row items-center justify-center gap-24 rounded-[0px_0px_50px_50px] bg-[#214789] shadow-[0px_4px_4px_#00000040]'>
					<Box>
						{favorite ? (
							<StarIcon
								className='cursor-pointer text-orange-400'
								sx={{ fontSize: '2.3em' }}
								onClick={onFavoriteContact}
							/>
						) : (
							<StarBorderPurple500OutlinedIcon
								className=' cursor-pointer text-white'
								sx={{ fontSize: '2.3em' }}
								onClick={onFavoriteContact}
							/>
						)}
					</Box>
					<Box>
						<button
							onClick={handleClickOpenUpdate}
							disabled={!selectedContact.value.active}
						>
							<EditOutlinedIcon
								className='text-white'
								sx={{ fontSize: '2.3em' }}
							/>
						</button>
					</Box>
					<Dialog
						open={openUpdate}
						onClose={handleCloseUpdate}
						sx={{
							'& .MuiDialog-paper': {
								width: '387px',
								height: '720px',
								background: '#1b3a70',
								borderRadius: '50px'
							}
						}}
					>
						<DialogContent
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<AddContact handleClose={handleCloseUpdate} type='Update' />
						</DialogContent>
					</Dialog>
					<Box>
						<button
							onClick={onDeleteContact}
							disabled={!selectedContact.value.active}
						>
							<DeleteOutlineOutlinedIcon
								className='text-white'
								sx={{ fontSize: '2.3em' }}
							/>
						</button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
