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
import { Box } from '@mui/material'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

interface SideBarProperties {
	children: ReactElement
	path: string
	showDrawer: boolean
}
export default function SideBar({
	children,
	path,
	showDrawer
}: SideBarProperties): ReactElement {
	const [isSmall, setIsSmall] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setIsSmall(true)
			} else {
				setIsSmall(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const handleToggle = () => {
		setIsOpen(!isOpen)
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
									/>
								</div>

								<a
									href='/allPeople'
									className='mx-2 my-2 flex h-11 w-[75%] items-center rounded-md border-l border-solid border-[#1b3a70]'
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
									href='#favorites'
									className='mx-2 my-2 flex h-11 w-[75%] items-center rounded-md border-l border-solid border-[#1b3a70]'
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
								<div className='mx-2 my-2 flex h-11 w-[75%] items-center justify-between rounded-md border-l border-solid border-[#1b3a70]'>
									<div className='flex flex-row'>
										<BookmarkIcon className='ml-1 h-5 w-4' />
										<div
											className={`ml-2  text-[18px] font-normal tracking-[0.72px] text-white ${
												isSmall && !isOpen ? 'hidden' : 'block'
											}`}
										>
											Tags
										</div>
									</div>
									<div className={`${isSmall && !isOpen ? 'hidden' : 'block'}`}>
										<ArrowForward className=' mt-1 h-3 w-2' />
									</div>
								</div>
								<div
									className={`mx-2 my-2 flex h-14 w-[75%] items-center justify-center rounded-lg bg-white ${
										isSmall && !isOpen ? 'hidden' : 'block'
									}`}
								>
									<div className='ml-4 text-[16px] font-extrabold tracking-[1.28px] text-[#1b3a70] '>
										Add Contact
									</div>
									<Add className='h-6 w-6 text-[16px] font-extrabold text-[#1b3a70]' />
								</div>
							</div>
							<div>
								<div className='mx-2 my-2 mt-auto flex h-16 items-center rounded-b-3xl bg-[#1b3a70]'>
									<AccountCircle className='ml-1 h-14 w-14' />
									<div
										className={`text-md ml-4 font-medium text-white ${
											isSmall && !isOpen ? 'hidden' : 'block'
										}`}
									>
										FULL NAME
									</div>
									<Settings
										className={`ml-auto mr-2 h-8 w-8 ${
											isSmall && !isOpen ? 'invisible' : 'visible'
										}`}
									/>
									<ExitToApp
										className={`mr-2 h-8 w-6 ${
											isSmall && !isOpen ? 'invisible' : 'visible'
										}`}
									/>
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
