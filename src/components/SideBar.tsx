import {
	AccountCircle,
	Add,
	ArrowForward,
	ExitToApp,
	Settings,
	StarOutline
} from '@mui/icons-material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Dialog, DialogContent } from '@mui/material'
import { signal } from '@preact/signals-react'
import { useQuery } from '@tanstack/react-query'
import getTags from 'api/getTags'
import { selectedContact } from 'pages/AllPeople'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import AddContact from './AddContact'
import AddTag from './AddTag'

interface SideBarProperties {
	children: ReactElement
	path: string
	showDrawer: boolean
}
export const searchTerm = signal('')
export const selectedTag = signal(null)
export default function SideBar({
	children,
	path,
	showDrawer
}: SideBarProperties): ReactElement {
	const [isSmall, setIsSmall] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const { isLoading, isError, error, data } = useQuery(['tags'], getTags)
	const tags = signal(data)

	useEffect(() => {
		const handleResize = () => {
			setIsSmall(window.innerWidth < 768)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}
	const handleSearchChange = e => {
		searchTerm.value = e.target.value
	}
	const [isOpen1, setIsOpen1] = useState(false)
	const animation = useSpring({
		transform: isOpen1 ? `translateY(0)` : `translateY(-100%)`,
		opacity: isOpen1 ? 1 : 0
	})
	const [open, setOpen] = useState(false)
	const [openTag, setOpenTag] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	const handleClickOpenTag = () => {
		setOpenTag(true)
	}
	const handleCloseTag = () => {
		setOpenTag(false)
	}
	return (
		<Box className='flex h-[100vh] overflow-hidden'>
			{showDrawer ? (
				<Box className='flex-shrink-0'>
					<div
						className={`z-50 h-full overflow-hidden  ${
							isSmall ? (isOpen ? 'w-96' : 'w-16') : 'w-96'
						} flex-shrink-0 transition-all duration-300`}
					>
						<div className='flex h-full flex-col justify-between rounded-[0px_50px_50px_0px] bg-[#1b3a70] text-white'>
							<div
								className={`flex h-16 w-16 items-center justify-center ${
									isSmall ? 'block' : 'hidden'
								}`}
							>
								<MenuIcon
									className='h-8 w-8 text-white'
									onClick={handleToggle}
								/>
							</div>
							<div className='flex flex-col items-center justify-center '>
								<div
									className={`flex h-16 items-center justify-center text-2xl font-bold tracking-[6.90px] ${
										isSmall && !isOpen ? 'hidden' : 'block'
									}`}
								>
									CONTIFY
								</div>
								<div
									className={`mx-2 my-2 mb-9 flex h-11 w-[75%] items-center ${
										isSmall && !isOpen ? 'hidden' : 'block'
									}`}
								>
									<input
										type='text'
										className='w-full rounded-md border-l border-solid border-[#1b3a70] bg-[#3b66b182]'
										placeholder='Search'
										onChange={handleSearchChange}
									/>
								</div>

								<a
									href='/allPeople'
									className={`mx-2 my-2 flex h-11 w-[75%] items-center rounded-md border-l border-solid border-[#1b3a70] ${
										path === '/allPeople' ? 'bg-[#7991b9]' : 'bg-transparent'
									}`}
								>
									<AccountCircle className='ml-1 h-5 w-5' />
									<div
										className={`ml-2  text-[18px] font-normal tracking-[0.72px] text-white ${
											isSmall && !isOpen ? 'hidden' : 'block'
										}`}
									>
										All People
									</div>
								</a>
								<a
									href='/favorites'
									className={`mx-2 my-2 flex h-11 w-[75%] items-center rounded-md border-l border-solid border-[#1b3a70] ${
										path === '/favorites' ? 'bg-[#7991b9]' : 'bg-transparent'
									}`}
								>
									<StarOutline className='ml-1 h-5 w-5' />
									<div
										className={`ml-2  text-[18px] font-normal tracking-[0.72px] text-white ${
											isSmall && !isOpen ? 'hidden' : 'block'
										}`}
									>
										Favorites
									</div>
								</a>
								<Box
									className={`mx-2 my-2 flex h-11 w-[75%] cursor-pointer items-center justify-between rounded-md border-l border-solid border-[#1b3a70] ${
										path === '/tag' ? 'bg-[#7991b9]' : 'bg-transparent'
									}`}
									onClick={() => {
										setIsOpen1(!isOpen1)
									}}
								>
									<div className='flex flex-row'>
										<BookmarkIcon className='ml-1 h-5 w-4' />
										<div
											className={`ml-2 text-[18px] font-normal tracking-[0.72px] text-white ${
												isSmall && !isOpen ? 'hidden' : 'block'
											}`}
										>
											Tags
										</div>
									</div>
									<div className={`${isSmall && !isOpen ? 'hidden' : 'block'}`}>
										<ArrowForward
											className={`mt-1 h-3 w-2 ${
												isOpen1 ? 'rotate-90' : 'rotate-0'
											}`}
										/>
									</div>
								</Box>
								{isOpen1 ? (
									<animated.div
										style={animation}
										className='mr-[140px] text-[18px] font-normal leading-[normal] tracking-[0.72px] text-[#ffffff66]'
									>
										<div
											role='menu'
											aria-orientation='vertical'
											aria-labelledby='options-menu'
										>
											{tags.value?.map((tag, index) => (
												<Box key={tag.id} className='my-4 cursor-pointer'>
													<Link
														key={tag.id}
														to='/tag'
														onClick={() => {
															selectedTag.value = { id: tag.id, name: tag.name }
														}}
													>
														{tag.name}
													</Link>
												</Box>
											))}
											<Box
												className='my-4 cursor-pointer'
												onClick={handleClickOpenTag}
											>
												+ Add Tag
											</Box>
											<Dialog
												open={openTag}
												onClose={handleCloseTag}
												sx={{
													'& .MuiDialog-paper': {
														width: isSmall ? '60%' : '376px',
														height: '148px',
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
													<AddTag handleCloseTag={handleCloseTag} />
												</DialogContent>
											</Dialog>
										</div>
									</animated.div>
								) : null}

								<div
									className={`mx-2 my-2 flex h-14 w-[75%] cursor-pointer items-center justify-center rounded-lg bg-white ${
										isSmall && !isOpen ? 'hidden' : 'block'
									}`}
									onClick={handleClickOpen}
								>
									<div className='ml-4 text-[16px] font-extrabold tracking-[1.28px] text-[#1b3a70] '>
										Add Contact
									</div>
									<Add className='h-6 w-6 text-[16px] font-extrabold text-[#1b3a70]' />
								</div>
								<Dialog
									open={open}
									onClose={handleClose}
									sx={{
										'& .MuiDialog-paper': {
											width: isSmall ? '60%' : '387px',
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
										<AddContact handleClose={handleClose} type='Add' />
									</DialogContent>
								</Dialog>
							</div>
							<div>
								<div className='mx-2 my-2 mt-auto flex h-16 items-center rounded-b-3xl bg-[#1b3a70]'>
									<AccountCircle className='ml-1 h-14 w-14' />
									<div
										className={`text-md ml-4 font-medium text-white ${
											isSmall && !isOpen ? 'hidden' : 'block'
										}`}
									>
										{JSON.parse(localStorage.getItem('userInfos'))?.fullName}
									</div>
									<button
										onClick={() => {
											selectedContact.value = {
												...selectedContact.value,
												id: JSON.parse(localStorage.getItem('userInfos')).id,
												fullName: JSON.parse(localStorage.getItem('userInfos'))
													.fullName,
												phoneNumber: JSON.parse(
													localStorage.getItem('userInfos')
												).phoneNumber,
												email: JSON.parse(localStorage.getItem('userInfos'))
													.email,
												address: JSON.parse(localStorage.getItem('userInfos'))
													.address,
												imageContact: '',
												tags: [{ name: 'Me' }],
												active: false,
												favorite: false
											}
										}}
									>
										<Settings
											className={`ml-44 mr-2 h-8 w-8 text-white ${
												isSmall && !isOpen ? 'invisible' : 'visible'
											}`}
										/>
									</button>
									<a href='/'>
										<ExitToApp
											className={`mr-2 h-8 w-6 ${
												isSmall && !isOpen ? 'invisible' : 'visible'
											}`}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</Box>
			) : null}
			{['/', '/login', '/signup'].includes(path) ? (
				<Box component='main' className='w-screen'>
					{children}
				</Box>
			) : (
				<Box
					component='main'
					sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
					className='mt-5 flex justify-center'
				>
					{children}
				</Box>
			)}
		</Box>
	)
}
