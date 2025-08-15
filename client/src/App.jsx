import { Route, Routes } from 'react-router'

import { UserContext } from './contexts/UserContext'

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
import usePersistedState from './hooks/usePersistedState'

function App() {
	const [authData, setAuthData] = usePersistedState('auth', {});

	const userLoginHandler = (resultData) => {
		setAuthData(resultData);
	};

	const userLogoutHandler = () => {
		setAuthData({});
	};

	return (
		<>
			<UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
				<Header />

				<main>
					<Routes>
						<Route path='/' element={<HeroSection />} />
						<Route path='/recipes' element={<RecipesPage />} />
						<Route path='/recipes/create' element={<RecipeCreate />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/recipes/:recipeId/details' element={<RecipeDetails />} />
						<Route path='/recipes/:recipeId/edit' element={<RecipeEdit />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>

				<Footer />
			</UserContext.Provider >
		</>
	)
}

export default App
