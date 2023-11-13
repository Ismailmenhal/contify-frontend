import { Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { useState, type ReactElement } from 'react'
import * as yup from 'yup'

export default function SignUpBox(): ReactElement {
	const handleFormSubmit = (values: any, { resetForm }: any) => {}
	const [user, setUser] = useState({
		email: '',
		password: ''
	})
	const validateInput = yup.object().shape({
		email: yup.string().required('Required Input'),
		password: yup.string().required('Required Input')
	})
	return (
		<div className='mx-auto mt-8 flex w-[max-content] max-w-md flex-col items-center justify-center rounded-lg border-4 border-[#2d3752] bg-white p-8'>
			<p className='text-4xl font-bold leading-normal tracking-wider text-transparent'>
				<span className='text-black'>CON</span>
				<span className='text-[#0054e5]'>TIFY</span>
			</p>
			<p className='mb-8 text-2xl font-medium leading-normal tracking-wider text-black'>
				Welcome ! Login
			</p>
			<Formik
				initialValues={user}
				onSubmit={handleFormSubmit}
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
					<Form onSubmit={handleSubmit} className='mt-8 w-full'>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									type='email'
									value={values.email}
									onBlur={handleBlur}
									onChange={handleChange}
									label='Email'
									name='email'
									error={!!touched.email && !!errors.email}
									helperText={touched.email ? errors.email : null}
									className='w-full rounded-lg border border-black bg-white px-4 py-2 text-lg font-normal leading-normal tracking-wider text-[#494949]'
									sx={{
										gridColumn: 'span 4',
										'& label': { color: 'black' },
										'& .MuiInputBase-input': { color: 'black' },
										'& .MuiOutlinedInput-root': {
											'& fieldset': { borderColor: 'black' }
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
									variant='outlined'
									type='password'
									value={values.password}
									onBlur={handleBlur}
									onChange={handleChange}
									label='Password'
									name='password'
									error={!!touched.password && !!errors.password}
									helperText={touched.password ? errors.password : null}
									className='mt-4 w-full rounded-lg border border-black bg-white px-4 py-2 text-lg font-normal leading-normal tracking-wider text-[#494949]'
									sx={{
										gridColumn: 'span 4',
										'& label': { color: 'black' },
										'& .MuiInputBase-input': { color: 'black' },
										'& .MuiOutlinedInput-root': {
											'& fieldset': { borderColor: 'black' }
										},
										'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:focus':
											{
												'--tw-ring-color': 'transparent'
											}
									}}
								/>
							</Grid>
						</Grid>
						<div className='mt-4'>
							<a href='/login' className='w-full'>
								<div className='flex h-16 w-full items-center justify-center rounded-full bg-[#1b3a6f]'>
									<div className='text-lg font-bold leading-normal tracking-wider text-white'>
										Login
									</div>
								</div>
							</a>
						</div>
					</Form>
				)}
			</Formik>
			<p className='text-lg font-normal leading-normal tracking-wider text-black'>
				<span className='text-lg font-normal tracking-wider text-black'>
					You don’t have an account ?{' '}
				</span>
				<a href='/signup' className='font-bold'>
					SignUp
				</a>
			</p>
		</div>
	)
}
