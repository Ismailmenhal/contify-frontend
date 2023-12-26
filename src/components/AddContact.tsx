import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import { Avatar, Box, Button, Grid, TextField } from '@mui/material'
import { signal } from '@preact/signals-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Form, Formik } from 'formik'
import type { ReactElement } from 'react'
import type IContact from 'types/IContact'

import * as yup from 'yup'

export const contact = signal({
	id: '',
	fullName: '',
	email: '',
	phoneNumber: '',
	address: '',
	imagePath: ''
} as IContact)

export default function AddContact({ handleClose, type }): ReactElement {
	const validateInput = yup.object().shape({
		fullName: yup.string().required('Required field'),
		phoneNumber: yup.string().required('Required field'),
		email: yup.string().required('Required field'),
		address: yup.string().required('Required field')
	})
	const headers = {
		'Content-Type': 'application/json'
	}
	console.log(headers)
	const queryClient = useQueryClient()
	const { mutate, isLoading: addContactLoading } = useMutation({
		mutationFn: async newContact =>
			axios.post(`/api/contact/addContact`, newContact, {
				headers
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			return true
		},
		onError: error => false
	})
	const { mutate: updateContact, isLoading: updateContactLoading } =
		useMutation({
			mutationFn: async newContact =>
				axios.put(
					`/api/contact/updateContactById/${contact.value.id as number}`,
					newContact,
					{
						headers
					}
				),
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: ['contacts'] })
				return true
			},
			onError: error => false
		})
	const handleFormSubmit = (values: IContact, { resetForm }: any) => {
		contact.value = {
			...values,
			imagePath: contact.value.imagePath
		}
		if (type === 'Add') {
			mutate(contact.value)
		} else {
			console.log('updated')
			updateContact(contact.value)
		}
		resetForm()
		handleClose()
	}
	const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0]
			console.log(file.name)
			contact.value = {
				...contact.value,
				imagePath: `images/${file.name}`
			}
		}
	}
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Box sx={{ textAlign: 'center', position: 'relative' }}>
				<Formik
					onSubmit={handleFormSubmit}
					initialValues={contact.value}
					validationSchema={validateInput}
				>
					{({
						values,
						errors,
						touched,
						handleBlur,
						handleChange,
						handleSubmit
					}) => (
						<Form onSubmit={handleSubmit}>
							<Box className='mb-14 flex items-center justify-center'>
								<label htmlFor='imagePath'>
									<Avatar
										alt='Profile Image'
										src={contact.value.imagePath}
										sx={{
											width: '141px',
											height: '141px',
											cursor: 'pointer'
										}}
									>
										<VideocamOutlinedIcon
											sx={{
												width: '50%',
												height: '50%',
												cursor: 'pointer'
											}}
										/>
									</Avatar>
								</label>
								<input
									type='file'
									accept='image/*'
									id='imagePath'
									name='imagePath'
									style={{
										display: 'none'
									}}
									onChange={handleChangeFile}
								/>
							</Box>
							<Grid container spacing={5}>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant='outlined'
										type='text'
										className='rounded-[11px] bg-[#3b66b1]'
										value={values.fullName}
										onBlur={handleBlur}
										onChange={handleChange}
										label='Full Name'
										name='fullName'
										error={!!touched.fullName && !!errors.fullName}
										helperText={touched.fullName ? errors.fullName : null}
										sx={{
											gridColumn: 'span 4',
											'& label': { color: 'white' },
											'& .MuiInputBase-input': { color: 'white' },
											'& .MuiOutlinedInput-root': {
												'& fieldset': { borderColor: 'transparent' }
											},
											'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus':
												{
													'--tw-ring-color': 'transparent'
												}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant='outlined'
										type='tel'
										className='rounded-[11px] bg-[#3b66b1]'
										label='Phone Number'
										name='phoneNumber'
										value={values.phoneNumber}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.phoneNumber && !!errors.phoneNumber}
										helperText={touched.phoneNumber ? errors.phoneNumber : null}
										sx={{
											gridColumn: 'span 4',
											'& label': { color: 'white' },
											'& .MuiInputBase-input': { color: 'white' },
											'& .MuiOutlinedInput-root': {
												'& fieldset': { borderColor: 'transparent' }
											},
											'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus':
												{
													'--tw-ring-color': 'transparent'
												}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant='outlined'
										className='rounded-[11px] bg-[#3b66b1]'
										type='email'
										label='Email'
										name='email'
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.email && !!errors.email}
										helperText={touched.email ? errors.email : null}
										sx={{
											gridColumn: 'span 4',
											'& label': { color: 'white' },
											'& .MuiInputBase-input': { color: 'white' },
											'& .MuiOutlinedInput-root': {
												'& fieldset': { borderColor: 'transparent' }
											},
											'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus':
												{
													'--tw-ring-color': 'transparent'
												}
										}}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant='outlined'
										type='text'
										label='Address'
										className='rounded-[11px] bg-[#3b66b1]'
										name='address'
										value={values.address}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.address && !!errors.address}
										helperText={touched.address ? errors.address : null}
										sx={{
											gridColumn: 'span 4',
											'& label': { color: 'white' },
											'& .MuiInputBase-input': { color: 'white' },
											'& .MuiOutlinedInput-root': {
												'& fieldset': { borderColor: 'transparent' }
											},
											'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus':
												{
													'--tw-ring-color': 'transparent'
												}
										}}
									/>
								</Grid>
							</Grid>
							<Box className='mt-16 flex flex-row justify-around'>
								<Button
									variant='text'
									className='text-[13px] font-bold tracking-[1.04px]'
									sx={{
										color: 'white'
									}}
									onClick={handleClose}
								>
									Cancel
								</Button>
								<Button
									type='submit'
									variant='text'
									className='text-[13px] font-bold tracking-[1.04px]'
									sx={{
										color: 'white'
									}}
								>
									Save
								</Button>
							</Box>
						</Form>
					)}
				</Formik>
			</Box>
		</Box>
	)
}
