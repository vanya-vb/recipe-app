import { Route, Routes } from 'react-router'

import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import LoginPage from './components/LoginPage/LoginPage'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import RecipesPage from './components/RecipesPage/RecipesPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'
import RecipeEdit from './components/RecipeEdit/RecipeEdit'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HeroSection />} />
					<Route path='/recipes' element={<RecipesPage />} />
					<Route path='/recipes/create' element={<RecipeCreate />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/recipes/:recipeId/details' element={<RecipeDetails />} />
					<Route path='/recipes/:recipeId/edit' element={<RecipeEdit />} />
				</Routes>
			</main>
		</>
	)
}

export default App
