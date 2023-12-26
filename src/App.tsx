import { effect, signal } from '@preact/signals-react'
import LoadingOrError from 'components/LoadingOrError'
import SideBar from 'components/SideBar'
import AllPeople from 'pages/AllPeople'
import FavoritesPage from 'pages/FavoritesPage'
import LandingPage from 'pages/HomePage'

import LoginPage from 'pages/LoginPage.'
import SignUpPage from 'pages/SignUp'
import TagPage from 'pages/TagPage'
import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const pages = new Set(['/allPeople', '/favorites', '/tag'])
const showDrawer = signal(false)
effect(() => {
	showDrawer.value = !!pages.has(window.location.pathname)
})
export default function App(): ReactElement {
	if (
		!localStorage.getItem('token') &&
		!['/', '/signup', '/login'].includes(window.location.pathname)
	) {
		return <LoginPage />
	}
	return (
		<BrowserRouter>
			<SideBar path={window.location.pathname} showDrawer={showDrawer.value}>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/allPeople' element={<AllPeople />} />
						<Route path='/favorites' element={<FavoritesPage />} />
						<Route path='/tag' element={<TagPage />} />
						<Route path='/' element={<LandingPage />} />
					</Routes>
				</Suspense>
			</SideBar>
		</BrowserRouter>
	)
}
