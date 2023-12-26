import { Box, FormControl, MenuItem, Select } from '@mui/material'
import { signal } from '@preact/signals-react'
import { useQuery } from '@tanstack/react-query'
import getFavorites from 'api/getFavorites'
import ContactInfosBox from 'components/ContactInfosBox'
import ContactRowBox from 'components/ContactRowBox'
import { searchTerm } from 'components/SideBar'
import type { ReactElement } from 'react'
import { selectedContact } from './AllPeople'

export default function FavoritesPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery(
		['contacts'],
		getFavorites
	)
	function sortContacts(a, b) {
		if (a.fullName < b.fullName) {
			return -1
		}
		if (a.fullName > b.fullName) {
			return 1
		}
		return 0
	}
	const contacts = signal(data)
	const groupedContacts = (contacts.value || []).reduce(
		(accumulator, contact) => {
			const firstLetter = contact.fullName.charAt(0).toUpperCase()
			accumulator[firstLetter] = accumulator[firstLetter] || []
			accumulator[firstLetter].push(contact)
			return accumulator
		},
		{}
	)
	return (
		<Box className='ml-8 w-full'>
			<Box>
				<p className='text-[12px] font-bold leading-[normal] tracking-[0.96px] text-[#817070d4]'>
					{contacts.value?.length || 0} TOTAL
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
				<Box
					className='mr-9 w-[65%]'
					sx={{ overflowY: 'auto', overflowX: 'hidden', height: '84vh' }}
				>
					{Object.keys(groupedContacts ?? [])
						.sort()
						.map(letter => {
							const contactsForLetter = groupedContacts[letter] ?? []
							const filteredContactsForLetter = searchTerm.value
								? contactsForLetter
										.sort(sortContacts)
										.filter(
											contact =>
												contact.fullName
													.toLowerCase()
													.includes(searchTerm.value.toLowerCase()) ||
												contact.phoneNumber
													.toLowerCase()
													.includes(searchTerm.value.toLowerCase()) ||
												contact.email
													.toLowerCase()
													.includes(searchTerm.value.toLowerCase()) ||
												contact.address
													.toLowerCase()
													.includes(searchTerm.value.toLowerCase())
										)
								: contactsForLetter

							if (filteredContactsForLetter.length === 0) {
								return null
							}

							return (
								<div key={letter}>
									<Box className='my-10 text-[16px] font-bold leading-[normal] tracking-[1.28px] text-[#817070d4]'>
										{letter}
									</Box>
									<Box>
										{filteredContactsForLetter.map((c, index) => (
											<ContactRowBox
												key={index}
												imageContact={c.imagePath}
												fullName={c.fullName}
												email={c.email}
												phoneNumber={c.phoneNumber}
												address={c.address}
												id={c.id}
												tags={c.tags}
												favorite={c.favorite}
											/>
										))}
									</Box>
								</div>
							)
						})}
				</Box>
				<Box>
					<ContactInfosBox
						id={selectedContact.value.id}
						fullName={selectedContact.value.fullName}
						email={selectedContact.value.email}
						address={selectedContact.value.address}
						phoneNumber={selectedContact.value.phoneNumber}
						imageContact={selectedContact.value.imageContact}
						tags={selectedContact.value.tags}
						favorite={selectedContact.value.favorite}
					/>
				</Box>
			</Box>
		</Box>
	)
}
