import { effect, signal } from '@preact/signals-react'
import LoadingOrError from 'components/LoadingOrError'
import SideBar from 'components/SideBar'
import AllPeople from 'pages/AllPeople'
import LandingPage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage.'
import SignUpPage from 'pages/SignUp'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const pages = new Set(['/allPeople'])
const showDrawer = signal(false)

effect(() => {
	showDrawer.value = !!pages.has(window.location.pathname)
})

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<SideBar path={window.location.pathname} showDrawer={showDrawer.value}>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/allPeople' element={<AllPeople />} />
						<Route path='/' element={<LandingPage />} />
					</Routes>
				</Suspense>
			</SideBar>
		</BrowserRouter>
	)
}
