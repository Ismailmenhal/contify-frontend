import LoadingOrError from 'components/LoadingOrError'
import AllPeople from 'pages/AllPeople'
import LandingPage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage.'

import SignUpPage from 'pages/SignUp'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/signup' element={<SignUpPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/allPeople' element={<AllPeople />} />
					<Route path='/' element={<LandingPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
