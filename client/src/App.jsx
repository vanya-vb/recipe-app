import { Route, Routes } from 'react-router'
import { useState } from 'react'

import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import LoginPage from './components/LoginPage/LoginPage'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import RecipesPage from './components/RecipesPage/RecipesPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import RecipeCreate from './components/RecipeCreate/RecipeCreate'
import RecipeEdit from './components/RecipeEdit/RecipeEdit'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {
	const [authData, setAuthData] = useState({});

	const loginHandler = (resultData) => {
		setAuthData(resultData);
	};

	return (
		<>
			<Header />
			
			<main>
				<Routes>
					<Route path='/' element={<HeroSection />} />
					<Route path='/recipes' element={<RecipesPage />} />
					<Route path='/recipes/create' element={<RecipeCreate />} />
					<Route path='/login' element={<LoginPage onLogin={loginHandler} />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/recipes/:recipeId/details' element={<RecipeDetails email={authData.email} />} />
					<Route path='/recipes/:recipeId/edit' element={<RecipeEdit />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>

			<Footer />
		</>
	)
}

export default App
