# FoodiePhoria
I built this web application to help users discover new recipes. Users can browse predefined meals, create and save their own recipes, generate recipes with AI model based on given ingredients and interact with others through comments. The app provides both **public** and **private** sections with authentication and role-based permissions.

## 🚀 Features
### 1) **Public Part** (for guests)
 - guests can browse the catalog of predefined meals
 - guests can view detailed recipe information
 - guests cannot access private pages

### 2) **Private Part** (for users)
 - users can **create**, **edit** and **delete** only their own records
 - users can view and add comments on recipes
 - users can access route-guarded private pages
 - AI model integration for generating recipes

## 🛠️ Tech Stack
- Vite
- React 19 
- React Router 7
- TailwindCSS
- React Icons
- React Toastify - notifications
- [REST service](https://github.com/softuni-practice-server/softuni-practice-server?tab=readme-ov-file#collections) (for educational purposes)
- [Claude AI](https://claude.ai/login?returnTo=%2F%3F#)

## Deployment
- Server: GCP Cloud Run, Docker, Artifact Registry
- Client: Firebase Hosting
- CI/CD: Github Actions

## Guest User Screens
![Home Page](/client/public/home-page.jpg)
<br><br>
![Recipes Screen](/client/public/recipes-page.jpg)
<br><br>
![Recipe Details 1](/client/public/recipe-details-1.jpg)
<br><br>
![Recipe Details 2](/client/public/recipe-details-2.jpg)
<br><br>
![Recipe Details 3](/client/public/recipe-details-3.jpg)
<br><br>
![Shopping List](/client/public/shopping-list.jpg)
<br><br>
![Login](/client/public/login.jpg)
<br><br>
![Register](/client/public/register.jpg)

## Authenticated User Screens
![Add Recipe](/client/public/add-recipe.jpg)
<br><br>
![AI Chef 1](/client/public/ai-chef-1.jpg)
<br><br>
![AI Chef 2](/client/public/ai-chef-2.jpg)
<br><br>
![AI Chef 3](/client/public/ai-chef-3.jpg)
<br><br>