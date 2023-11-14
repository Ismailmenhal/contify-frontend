import LoadingOrError from 'components/LoadingOrError'
import SideBar from 'components/SideBar'
import AllPeople from 'pages/AllPeople'
import LandingPage from 'pages/HomePage'
import LoginPage from 'pages/LoginPage.'

import SignUpPage from 'pages/SignUp'
import type { ReactElement } from 'react'
import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	const pages = new Set(['/allPeople'])
	const [showDrawer, setshowDrawer] = useState(false)
	useEffect(() => {
		if (pages.has(location.pathname)) {
			setshowDrawer(true)
		} else {
			setshowDrawer(false)
		}
	}, [location.pathname])
	return (
		<BrowserRouter>
			<SideBar path={location.pathname} showDrawer={showDrawer}>
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
