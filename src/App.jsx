// src/App.jsx
import { Outlet } from "react-router-dom"; // On utilisera React Router pour gérer les pages
import { Toaster } from "@/components/ui/toaster";

function App() {
  // Les classes `font-sans` et `antialiased` sont généralement appliquées
  // au body ou html directement via CSS, ce qui est déjà fait dans votre index.css.
  return (
    <>
      {/* 
        <Outlet /> est l'endroit où React Router affichera le composant 
        de la page actuelle (par exemple, notre HomePage).
        C'est l'équivalent de {children} dans le RootLayout de Next.js.
      */}
      <Outlet />
      
      {/* Le Toaster est ici pour être disponible sur toutes les pages */}
      <Toaster />
    </>
  );
}

export default App;