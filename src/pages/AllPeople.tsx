import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import type { ReactElement } from 'react'
import ContactInfosBox from '../components/ContactInfosBox'
import ContactRowBox from '../components/ContactRowBox'

export default function AllPeople(): ReactElement {
	return (
		<Box className='ml-8 w-full'>
			<Box>
				<p className='text-[12px] font-bold leading-[normal] tracking-[0.96px] text-[#817070d4]'>
					XX TOTAL
				</p>
				<p className='my-5 text-[21px] font-bold leading-[normal] tracking-[1.68px] text-black'>
					Contacts
				</p>
			</Box>
			<Box className='flex flex-row gap-2'>
				<Box className='mr-2 flex h-[29px] w-[106px] items-center justify-center rounded-[7px] bg-[#909090]'>
					<Box className='text-[14px] font-bold leading-[normal] tracking-[0.56px] text-white'>
						Filter By
					</Box>
				</Box>
				<Box className='h-[29px]'>
					<FormControl fullWidth>
						<Select
							labelId='filter'
							name='filter'
							className='h-[29px] bg-[#909090]'
							defaultValue='A-Z'
							sx={{ color: 'white', '& .MuiSelect-icon': { color: 'white' } }}
						>
							<MenuItem key='A-Z' value='A-Z'>
								A-Z
							</MenuItem>
							<MenuItem key='Z-A' value='Z-A'>
								Z-A
							</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box className='flex w-full'>
				<Box className='mr-9 w-[65%]'>
					<Box className='my-10 text-[16px] font-bold leading-[normal] tracking-[1.28px] text-[#817070d4]'>
						A
					</Box>
					<ContactRowBox
						imageContact='https://th.bing.com/th/id/R.42f7fd526cc94b557961a7d3f4d41994?rik=hDivNwvfJygXCA&pid=ImgRaw&r=0'
						fullName='Ahmed'
						email='asf@gmail.com'
						phoneNumber='12121'
					/>
					<ContactRowBox
						imageContact='https://th.bing.com/th/id/R.42f7fd526cc94b557961a7d3f4d41994?rik=hDivNwvfJygXCA&pid=ImgRaw&r=0'
						fullName='Ahmed'
						email='asf@gmail.com'
						phoneNumber='12121'
					/>
					<ContactRowBox
						imageContact='https://th.bing.com/th/id/R.42f7fd526cc94b557961a7d3f4d41994?rik=hDivNwvfJygXCA&pid=ImgRaw&r=0'
						fullName='Ahmed'
						email='asf@gmail.com'
						phoneNumber='12121'
					/>
				</Box>
				<Box>
					<ContactInfosBox />
				</Box>
			</Box>
		</Box>
	)
}
