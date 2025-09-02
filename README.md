# Recipe App
I built this web application to help users plan their daily meals and discover new recipes. Users can browse predefined meals, create and save their own recipes, and interact with others through comments. The app provides both **public** and **private** sections with authentication and role-based permissions.

## 🚀 Features
### 1) **Public Part** (for guests)
 - guests can browse the catalog of predefined meals
 - guests can view detailed recipe information
 - guests cannot access private pages

### 2) **Private Part** (for users)
 - users can **create**, **edit** and **delete** only their own records
 - users can view and add comments on recipes
 - users can access route-guarded private pages

## 🛠️ Tech Stack
- Vite - fast build tool
- React 19 - front-end libraray
- React Router 7 - client-side routing
- TailwindCSS - styling
- React Toastify - notifications
- React Icons - icons
- SoftUni Practice Server – back-end with REST API

## Deployment
- Server: GCP Cloud Run, Docker, Artifact Registry
- Client: Firebase Hosting
- CI/CD: Github Actions

