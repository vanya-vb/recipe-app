
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import LoginPage from './components/LoginPage/LoginPage'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import RecipesPage from './components/RecipesPage/RecipesPage'
import RegisterPage from './components/RegisterPage/RegisterPage'

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<RecipesPage />
			<RecipeDetails />
			{/* <LoginPage />
			<RegisterPage/> */}
		</>
	)
}

export default App
