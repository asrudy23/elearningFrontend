import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique d'inscription simulée
    alert("Compte créé avec succès ! Vous allez être redirigé.");
    navigate("/dashboard");
  };
  return (
    <div className="bg-white text-[var(--epg-dark)]">
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
                <svg
                  className="h-8 w-8 text-[var(--epg-blue)]"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h1 className="text-2xl font-bold tracking-tight">EPG École PolyTechiques des Génies</h1>
              </Link>
              <nav className="hidden items-center gap-8 md:flex">
                <a
                  className="text-base font-medium text-[var(--epg-text-gray)] hover:text-[var(--epg-dark)] transition-colors"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="text-base font-medium text-[var(--epg-text-gray)] hover:text-[var(--epg-dark)] transition-colors"
                  href="#"
                >
                  Cours
                </a>
                <a
                  className="text-base font-medium text-[var(--epg-text-gray)] hover:text-[var(--epg-dark)] transition-colors"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-base font-medium text-[var(--epg-text-gray)] hover:text-[var(--epg-dark)] transition-colors"
                  href="#"
                >
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-base font-semibold text-[var(--epg-dark)] hover:text-[var(--epg-blue)] transition-colors"
                >
                  Se connecter
                </Link>
                <Link
                  to="/register"
                  className="hidden sm:block rounded-lg bg-[var(--epg-orange)] px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--epg-orange)] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-1 items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--epg-dark)] sm:text-4xl">
                  Créer un Compte EPG
                </h2>
                <p className="mt-3 text-lg text-[var(--epg-text-gray)]">
                  Rejoignez notre communauté d'apprenants et accédez à des ressources éducatives de qualité.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--epg-light-gray)] p-8 shadow-lg">
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  className="space-y-6"
                  method="POST"
                >
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-base font-medium leading-6 text-[var(--epg-dark)]"
                      >
                        Nom
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          placeholder="John"
                          className="form-input block w-full rounded-lg border-0 bg-white py-3 px-4 text-[var(--epg-dark)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--epg-blue)] sm:text-base sm:leading-6 transition-shadow"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-base font-medium leading-6 text-[var(--epg-dark)]"
                      >
                        Prenom
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          placeholder="Doe"
                          className="form-input block w-full rounded-lg border-0 bg-white py-3 px-4 text-[var(--epg-dark)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--epg-blue)] sm:text-base sm:leading-6 transition-shadow"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium leading-6 text-[var(--epg-dark)]"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="form-input block w-full rounded-lg border-0 bg-white py-3 px-4 text-[var(--epg-dark)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--epg-blue)] sm:text-base sm:leading-6 transition-shadow"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-base font-medium leading-6 text-[var(--epg-dark)]"
                    >
                      Mot de ¨Passe
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="form-input block w-full rounded-lg border-0 bg-white py-3 px-4 text-[var(--epg-dark)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--epg-blue)] sm:text-base sm:leading-6 transition-shadow"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-base font-medium leading-6 text-[var(--epg-dark)]"
                    >
                      Role
                    </label>
                    <div className="mt-2">
                      <select
                        id="role"
                        name="role"
                        className="form-select block w-full rounded-lg border-0 bg-white py-3 px-4 text-[var(--epg-dark)] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[var(--epg-blue)] sm:text-base sm:leading-6 transition-shadow"
                      >
                        <option>Selectionner le role</option>
                        <option value="student">Elève</option>
                        <option value="teacher">Enseignant</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-medium leading-6 text-[var(--epg-dark)]">
                      Quelles sont vos preférences?
                    </h3>
                    <p className="text-sm text-[var(--epg-text-gray)]">
                      Cela nous aide a vous recommander les cours.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <div className="hobby-tag">
                        <input
                          id="hobby_programming"
                          name="hobbies[]"
                          type="checkbox"
                          value="programming"
                          className="sr-only peer"
                        />
                        <label
                          htmlFor="hobby_programming"
                          className="block rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 peer-checked:bg-[var(--epg-blue)] peer-checked:text-white peer-checked:ring-[var(--epg-blue)] cursor-pointer transition-all"
                        >
                          Programming
                        </label>
                      </div>
                      <div className="hobby-tag">
                        <input
                          id="hobby_music"
                          name="hobbies[]"
                          type="checkbox"
                          value="music"
                          className="sr-only peer"
                        />
                        <label
                          htmlFor="hobby_music"
                          className="block rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 peer-checked:bg-[var(--epg-blue)] peer-checked:text-white peer-checked:ring-[var(--epg-blue)] cursor-pointer transition-all"
                        >
                          Music
                        </label>
                      </div>
                      <div className="hobby-tag">
                        <input
                          id="hobby_design"
                          name="hobbies[]"
                          type="checkbox"
                          value="design"
                          className="sr-only peer"
                        />
                        <label
                          htmlFor="hobby_design"
                          className="block rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 peer-checked:bg-[var(--epg-blue)] peer-checked:text-white peer-checked:ring-[var(--epg-blue)] cursor-pointer transition-all"
                        >
                          Design
                        </label>
                      </div>
                      <div className="hobby-tag">
                        <input
                          id="hobby_gaming"
                          name="hobbies[]"
                          type="checkbox"
                          value="gaming"
                          className="sr-only peer"
                        />
                        <label
                          htmlFor="hobby_gaming"
                          className="block rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 peer-checked:bg-[var(--epg-blue)] peer-checked:text-white peer-checked:ring-[var(--epg-blue)] cursor-pointer transition-all"
                        >
                          Video Games
                        </label>
                      </div>
                      <div className="hobby-tag">
                        <input
                          id="hobby_finance"
                          name="hobbies[]"
                          type="checkbox"
                          value="finance"
                          className="sr-only peer"
                        />
                        <label
                          htmlFor="hobby_finance"
                          className="block rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-inset ring-gray-300 peer-checked:bg-[var(--epg-blue)] peer-checked:text-white peer-checked:ring-[var(--epg-blue)] cursor-pointer transition-all"
                        >
                          Finance
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex justify-center rounded-lg bg-[var(--epg-blue)] px-6 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--epg-blue)] transition-colors"
                    >
                      Creer un Compte
                    </button>
                    <p className="text-center text-sm text-[var(--epg-text-gray)]">
                      Déja un Compte??
                      <Link
                        to="/login"
                        className="font-semibold text-[var(--epg-orange)] hover:text-orange-500 transition-colors"
                      >
                        Se connecter
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
