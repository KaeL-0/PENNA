import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import Homepage from './pages/Homepage.tsx'
import SignIn from './pages/SignIn.tsx'
import SignUp from './pages/SignUp.tsx'
import NewArticle from './pages/NewArticle.tsx'
import Settings from './pages/Settings.tsx'
import Profile from './pages/Profile.tsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/login' element={<SignIn />}/>
				<Route path='/register' element={<SignUp />}/>
				<Route path='/editor' element={<NewArticle />}/>
				<Route path='/settings' element={<Settings />}/>
				<Route path='/profile' element={<Profile />}/>
			</Routes>
			<Footer />
		</>
		
	)
}