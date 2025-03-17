1. Instalare react: `npm create vite@latest . -- --template react`
2. Inizializzare il progetto ripulendo le cartelle
   eliminare i file foto all'interno della cartella - 📁public e assets - eliminare file 📃app.css - ripulire file 📃index.css e app.jsx
3. Installiamo Bootstrap (opzionale): `npm i bootstrap`

   - Modificare il file 📃main.jsx:

   ```jsx
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   //bootstrap css
   import 'bootstrap/dist/css/bootstrap.min.css' 👈

   import './index.css'
   import App from './App.jsx'

   createRoot(document.getElementById('root')).render(
   <StrictMode>
       <App />
   </StrictMode>,
   )

   ```

4. Installare React router: `npm i react-router-dom`
5. Creare le cartelle di lavoro in src:
   -📁components
   -📁pages
   -📁layouts
6. Gestire il layouts del progetto, creando un file 📃DefaultLayout.jsx nella cartella 📁layouts gestendo il componente Outlet di react dom per inserire il contenuto dinamico al cambio pagina

   ```jsx
   import Header from '../components/Header';
   import { Outlet } from 'react-router-dom';

   export default function DefaultLayout() {
     return (
       <>
         <Header />
         <main className="container">
           <Outlet />
         </main>
       </>
     );
   }
   ```

   6.1 Creiamo il componente 📃Header.jsx nella cartella 📁components

   ```jsx
   import { NavLink } from 'react-router-dom';

   export default function Header() {
     return (
       <header>
         <nav className="navbar navbar-expand navbar-light bg-light">
           <div className="nav navbar-nav">
             <NavLink className="nav-item nav-link" to="/">
               Home
             </NavLink>
           </div>
         </nav>
       </header>
     );
   }
   ```

   6.2 Creare le pagine del progetto nella cartella 📁pages - HomePage.jsx - BookPage.jsx
   6.3 Solo Dopo modifico 📃app.jsx con Il routing

   ```jsx
   import DefaultLayout from './layouts/DefaultLayout';
   import { Routes, Route, BrowserRouter } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import BookPage from './pages/BookPage';

   function App() {
     return (
       <>
         <BrowserRouter>
           <Routes>
             <Route Component={DefaultLayout}>
               {/* qui vanno le pagine */}
               <Route path="/" Component={HomePage} />
               <Route path="/books/:id" Component={BookPage} />
             </Route>
           </Routes>
         </BrowserRouter>
       </>
     );
   }

   export default App;
   ```

7. Creiamo il file 📃.env e .emv-example nella cartella progettoe poi lo aggiungiamo al file 📃.gitignore:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.env 👈

```
