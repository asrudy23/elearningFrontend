// src/components/LoginPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

// Composant pour l'icône du logo (pour la clarté)
const LogoIcon = () => (
  <svg
    className="h-8 w-8 text-[var(--brand-dark-blue)]"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L1 9L12 16L23 9L12 2ZM12 17.5L3 11.5V15L12 22L21 15V11.5L12 17.5Z"></path>
  </svg>
);

// Composant pour l'icône Google (pour la clarté)
const GoogleIcon = () => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M22.006 12.004c0-.736-.063-1.446-.183-2.136H12v4.038h5.613a4.783 4.783 0 01-2.074 3.146v2.58h3.313c1.944-1.788 3.065-4.42 3.065-7.628z"
      fillRule="evenodd"
    ></path>
    <path
      clipRule="evenodd"
      d="M12 22.004c2.834 0 5.21-.944 6.947-2.558l-3.313-2.58c-.94.63-2.14.998-3.634.998-2.784 0-5.14-1.87-5.982-4.37H2.98v2.662C4.743 19.992 8.09 22.004 12 22.004z"
      fillRule="evenodd"
    ></path>
    <path
      clipRule="evenodd"
      d="M6.018 13.634A5.96 5.96 0 015.65 12a5.96 5.96 0 01.368-1.634V8.32H2.98C2.36 9.54 2 10.73 2 12s.36 2.46.98 3.68l3.038-2.046z"
      fillRule="evenodd"
    ></path>
    <path
      clipRule="evenodd"
      d="M12 5.966c1.54 0 2.92.528 3.996 1.54l2.94-2.94C17.206 2.59 14.832 1.996 12 1.996c-3.91 0-7.257 2.012-9.02 5.01L6.018 9.27c.842-2.5 3.198-4.37 5.982-4.37z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const LoginPage = () => {
  // États pour les champs du formulaire
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Gestionnaire pour la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    // Ici, vous ajouteriez votre logique de connexion
    console.log("Tentative de connexion avec:", { email, password });
    alert(`Connexion avec : ${email}`);
    alert(`Connexion réussie ! Redirection vers le tableau de bord.`);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background-light)] p-4 text-gray-900">
      <div className="w-full max-w-md space-y-8">
        <header className="text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3"
          >
            <LogoIcon />
            <h1 className="text-2xl font-bold text-[var(--brand-dark-blue)]">
              EPG École PolyTechnique des Génies
            </h1>
          </Link>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Connectez-vous à votre compte
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Pas encore de compte ?{" "}
            <Link
              to="/register"
              className="font-medium text-[var(--brand-dark-blue)] hover:text-[var(--brand-orange)]"
            >
              Inscrivez-vous gratuitement
            </Link>
          </p>
        </header>

        <div className="rounded-lg bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Adresse e-mail
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[var(--brand-orange)] focus:outline-none focus:ring-[var(--brand-orange)] sm:text-sm h-12"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[var(--brand-orange)] focus:outline-none focus:ring-[var(--brand-orange)] sm:text-sm h-12"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[var(--brand-dark-blue)] hover:text-[var(--brand-orange)]"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-[var(--brand-dark-blue)] py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:ring-offset-2"
              >
                Connexion
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                <GoogleIcon />
                <span className="ml-3">Connexion avec Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
