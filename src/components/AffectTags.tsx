import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select
} from '@mui/material'
import { signal } from '@preact/signals-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import getTags from 'api/getTags'
import axios from 'axios'
import { Form, Formik } from 'formik'
import type { ReactElement } from 'react'
import type ITag from 'types/ITag'

export default function AffectTags({ contactId, handleClose }): ReactElement {
	const { isLoading, isError, error, data } = useQuery(['tags'], getTags)
	const tags = signal(data)
	const headers = { 'Content-Type': 'application/json' }
	const queryClient = useQueryClient()
	const { mutate, isLoading: addTagLoading } = useMutation({
		mutationFn: async affectedTag =>
			axios.post(
				`/api/contact/affecteTagToContact/${contactId.id}`,
				affectedTag,
				{
					headers
				}
			),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['contacts'] })
			queryClient.invalidateQueries({ queryKey: ['tags'] })
			return true
		},
		onError: error => false
	})
	const handleFormSubmit = (values: ITag[], { resetForm }: any) => {
		mutate(values.tags)
		resetForm()
		handleClose()
		window.location.reload()
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
				<Formik onSubmit={handleFormSubmit} initialValues={{ tags: [] }}>
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
									<FormControl fullWidth>
										<InputLabel id='tags'>Pick Tags</InputLabel>
										<Select
											multiple
											labelId='tags'
											id='tagsSelect'
											label='Tags'
											name='tags'
											value={values.tags}
											onBlur={handleBlur}
											onChange={e => handleChange(e)}
											sx={{
												color: 'black',
												backgroundColor: 'white',
												borderRadius: '20px'
											}}
										>
											{tags.value.map((tag, index) => (
												<MenuItem key={index} value={tag}>
													{tag.name}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
							</Grid>
							<Box className='mt-4 flex flex-row justify-around'>
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
