import {
	AccountCircle,
	Add,
	ArrowForward,
	ExitToApp,
	Search,
	Settings,
	StarOutline
} from '@mui/icons-material'
import type { ReactElement } from 'react'

export default function SideBar(): ReactElement {
	return (
		<div className='flex h-screen'>
			<div className='fixed left-0 top-0 h-full w-96 flex-shrink-0'>
				<div className='flex h-full flex-col rounded-[0px_50px_50px_0px] bg-[#1b3a70] text-white'>
					<div className='flex h-16 items-center justify-center text-2xl font-bold tracking-[6.90px]'>
						CONTIFY
					</div>
					<div className='relative mx-2 my-2 flex h-12 w-full items-center rounded-md border-l border-solid border-[#1b3a70] bg-[#3b66b182]'>
						<div className='absolute left-2 top-2'>
							<Search className='h-4 w-4 text-[#7693c6]' />
						</div>
						<input
							type='text'
							className='ml-8 w-full bg-transparent text-xs font-normal text-[#7693c6] focus:outline-none'
							placeholder='Search'
						/>
					</div>
					<div className='mx-2 my-2 flex h-12 w-full items-center rounded-md border-l border-solid border-[#1b3a70] bg-[#7991b9]'>
						<div className='ml-2 text-sm font-normal'>All People</div>
						<AccountCircle className='ml-1 h-5 w-5' />
					</div>
					<div className='mx-2 my-2 flex h-12 w-full items-center rounded-md border-l border-solid border-[#1b3a70]'>
						<div className='ml-2 text-sm font-normal'>Favorites</div>
						<StarOutline className='ml-1 h-5 w-5' />
					</div>
					<div className='mx-2 my-2 flex h-12 w-full items-center rounded-md border-l border-solid border-[#1b3a70]'>
						<div className='ml-2 text-sm font-normal'>Tags</div>
						<ArrowForward className='ml-1 h-5 w-4' />
						<ArrowForward className='ml-2 mt-1 h-3 w-2' />
					</div>
					<div className='mx-2 my-2 flex h-16 w-full items-center rounded-md bg-white'>
						<div className='text-md ml-4 font-semibold text-[#1b3a70]'>
							Add Contact
						</div>
						<Add className='ml-8 h-6 w-6' />
					</div>
					<div className='mx-2 my-2 mt-auto flex h-16 w-full items-center rounded-b-3xl bg-[#1b3a70]'>
						<AccountCircle className='ml-1 h-14 w-14' />
						<div className='text-md ml-4 font-medium text-white'>FULL NAME</div>
						<Settings className='ml-auto mr-2 h-8 w-8' />
						<ExitToApp className='mr-2 h-8 w-6' />
					</div>
				</div>
			</div>
		</div>
	)
}
