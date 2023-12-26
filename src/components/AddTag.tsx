import { Box, Button, Grid, TextField } from '@mui/material'
import { signal } from '@preact/signals-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Form, Formik } from 'formik'
import type { ReactElement } from 'react'
import type ITag from 'types/ITag'
import * as yup from 'yup'

const tag = signal({
	id: '',
	name: ''
})
export default function AddTag({ handleCloseTag }): ReactElement {
	const validateInput = yup.object().shape({
		name: yup.string().required('Required field')
	})
	const headers = { 'Content-Type': 'application/json' }
	const queryClient = useQueryClient()
	const { mutate, isLoading: addTagLoading } = useMutation({
		mutationFn: async newTag =>
			axios.post(`/api/tag/addTag`, newTag, {
				headers
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['tags'] })
			return true
		},
		onError: error => false
	})
	const handleFormSubmit = (values: ITag, { resetForm }: any) => {
		mutate(values)
		resetForm()
		handleCloseTag()
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
					initialValues={tag.value}
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
							<Grid container spacing={5}>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant='outlined'
										type='text'
										className='rounded-[11px] bg-[#3b66b1]'
										value={values.name}
										onBlur={handleBlur}
										onChange={handleChange}
										label='Tag Name'
										name='name'
										error={!!touched.name && !!errors.name}
										helperText={touched.name ? errors.name : null}
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
							<Box className='mt-4 flex flex-row justify-around'>
								<Button
									variant='text'
									className='text-[13px] font-bold tracking-[1.04px]'
									sx={{
										color: 'white'
									}}
									onClick={handleCloseTag}
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
