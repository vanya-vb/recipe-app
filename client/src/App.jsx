import { Route, Routes } from 'react-router'

import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import LoginPage from './components/LoginPage/LoginPage'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import RecipesPage from './components/RecipesPage/RecipesPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'
import RecipeEdit from './components/RecipeEdit/RecipeEdit'
import Logout from './components/Logout/Logout'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'

import UserProvider from './providers/UserProvider'
import AuthGuard from './components/guards/AuthGuard'
import GuestGuard from './components/guards/GuestGuard'

function App() {

	return (
		<>
			<UserProvider>
				<Header />

				<main>
					<Routes>
						<Route path='/' element={<HeroSection />} />
						<Route path='/recipes' element={<RecipesPage />} />
						<Route path='/recipes/:recipeId/details' element={<RecipeDetails />} />
						<Route path='*' element={<NotFound />} />

						<Route element={<AuthGuard />} >
							<Route path='/recipes/create' element={<RecipeCreate />} />
							<Route path='/recipes/:recipeId/edit' element={<RecipeEdit />} />
							<Route path='/logout' element={<Logout />} />
						</Route>

						<Route element={<GuestGuard />} >
							<Route path='/login' element={<LoginPage />} />
							<Route path='/register' element={<RegisterPage />} />
						</Route>
					</Routes>
				</main>

				<Footer />
			</UserProvider>
		</>
	)
}

export default App
