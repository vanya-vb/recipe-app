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

