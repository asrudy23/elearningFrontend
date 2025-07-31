import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* ======================= Header ======================= */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <svg
                className="h-8 w-8 text-[var(--dark-blue)]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <h1 className="text-2xl font-bold text-[var(--dark-blue)]">
                EPG-Ecole PolyTechnique des Génies
              </h1>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-base font-medium text-[var(--dark-blue)] nav-link"
              href="#"
            >
              Formations
            </a>
            <a
              className="text-base font-medium text-[var(--dark-blue)] nav-link"
              href="#"
            >
              Témoignages
            </a>
            <a
              className="text-base font-medium text-[var(--dark-blue)] nav-link"
              href="#"
            >
              Partenaires
            </a>
            <a
              className="text-base font-medium text-[var(--dark-blue)] nav-link"
              href="#"
            >
              Blog
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-base font-medium text-[var(--dark-blue)] hover:text-[var(--orange)] transition-colors duration-300"
              href="#"
            >
              Connexion
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 rounded-full font-bold btn-primary"
            >
              S'inscrire
            </Link>
          </div>
        </nav>
      </header>

      {/* ======================= Main Content ======================= */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[var(--dark-blue)] text-white py-24 md:py-32 text-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf8FvMVWw6iZhYSCqVfzlzhR1J06VmS7B98-o1JnD1nkUtR-6Jg__Oe6ziCRCFMcIiTmSjJyvR2KrSpmmQzfs3idLO4w1c4j1U5n8kR5Suidyv1LibAJ4u4XumuvyuWL5thSUM3keu-rkDne7aJ-oer3wTWY-jS-_DDrCMCo5nCqEpsHpXaOzXqqzGW3UX3TDtfjAl4vQgzOPl9Jwbhfd97KLkdl3ocOIvuhmjYEyrv3DLyf-1umxyFI24i1l3QlVl0zdPLEvmwDc")',
            }}
          ></div>
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Apprenez à votre rythme <br />
              avec l'intelligence artificielle
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
              Découvrez des cours personnalisés qui s'adaptent à votre niveau et
              à vos objectifs.
            </p>
            <Link
              to="/register"
              className="px-8 py-4 rounded-full text-lg font-bold btn-primary"
            >
              Commencer mon apprentissage
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50" id="how-it-works">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-[var(--dark-blue)]">
                Comment ça marche ?
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Un parcours simple en 3 étapes vers la réussite.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h4 className="text-2xl font-bold mb-2 text-[var(--dark-blue)]">
                  Inscrivez-vous
                </h4>
                <p className="text-gray-600">
                  Créez votre compte en quelques secondes et définissez vos
                  objectifs d'apprentissage.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h4 className="text-2xl font-bold mb-2 text-[var(--dark-blue)]">
                  Apprenez
                </h4>
                <p className="text-gray-600">
                  Accédez à des parcours de formation sur-mesure générés par
                  notre IA.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[var(--orange)] flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <h4 className="text-2xl font-bold mb-2 text-[var(--dark-blue)]">
                  Certifiez-vous
                </h4>
                <p className="text-gray-600">
                  Validez vos compétences avec une certification reconnue à
                  partager.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" id="testimonials">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-[var(--dark-blue)]">
                Ce que nos étudiants disent
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <img
                  alt="Témoignage Sophie Martin"
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTFEScsuWtjdG_jpDPZb2QWr0hLE-IDxjmAhcTRe9QmfRvLZvJGlwQGNnkSn2LKnRmh2TZgnEwXI_TLsWziUplLJFO5gNCaJ1O9JHRT8dCLcqOfcJHVZ7zk-Dp9JQgO473fxiF8Z7tWxjw281ivkyaT3sQHzRael9AYnR6425HVr85Vd9zOClmsksLn2-2cLoVQ7bArzemNn2ROoYyO6BCLFLMYbZo1S-2uISRR5hlc2VVxK7bDb92bOQwpa8ydjtY3-NvE6X5qS8"
                />
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "J'ai adoré la flexibilité des cours et la qualité des
                  contenus. J'ai pu apprendre à mon propre rythme et atteindre
                  mes objectifs."
                </blockquote>
                <cite className="font-bold text-[var(--dark-blue)] not-italic">
                  - Sophie Martin
                </cite>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <img
                  alt="Témoignage Lucas Dubois"
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-1FPCCpvVErzWBFg8njK9p67oUZpxKhzEyT1hdlodsRi4c6vSD0aZXd-tT_t7aPk3iI2d6VKTj31RjyI3zBjT_DvRWoq9Y1prIyDMXd5-A3Z6kXjV60n3GPKThrLBq1d0FD66HecVp_nRe7M_kG6adcpNXXoqJrFRBUPCEwk1v9dXAtTQAjPxvn3l7S39Q9K60ckVaOpkjcAxaT89giIZMXu-nnvreFRmmdTsmW0rC1MJQnl4lIh54hgFpzcLY85o1SHTwaLRjo8"
                />
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "Les cours sont très bien structurés et les exercices sont
                  très utiles pour mettre en pratique ce que j'ai appris."
                </blockquote>
                <cite className="font-bold text-[var(--dark-blue)] not-italic">
                  - Lucas Dubois
                </cite>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <img
                  alt="Témoignage Clara Dupont"
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF838H_AFC3LPAhdc7rnis-ZkF9xD3AXpB8xwlFL5aKlFk-Xn_L0-j2VJAxlk4N9DlECHIjmMk-eHo5FyikHSgBy4yKKQtm27kvD36ggnEwRUih8FnSkeGsQAPmEvgUyd0yBiEsQBdw_keb5kgVp9asGX3vhbSGoDhORmos0wvI5Qbfid9A9pT2g5UqN3oA14Hdikt0CJF9Iji85pRrC9DJ3oJNGQgxgMvZcjPymehLO_YllZAlWx-juT2sKvka0Hu4g0NE0bAz0c"
                />
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "J'ai beaucoup apprécié l'accompagnement des professeurs et la
                  possibilité de poser des questions. J'ai vraiment progressé."
                </blockquote>
                <cite className="font-bold text-[var(--dark-blue)] not-italic">
                  - Clara Dupont
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50" id="partners">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[var(--dark-blue)]">
                Nos partenaires
              </h3>
              <p className="text-lg text-gray-600 mt-2">
                Ils nous font confiance pour former leurs équipes.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <img
                alt="Logo partenaire 1"
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgmSIUvkkhz8TEVDP47jRHUJ1ZlQZ4HEx31V6nyVVKVUyM1Jseo8cwi1WTiH9X14f_CEKg5EROkqzjr5qJ5eYvnkJotnx8xr66WIQJU-ibbE-0vxztNVdosSdG8O0-GVHLZlUGTwO0ndVtCoYozxO_HQYbUjU8D0yw9DufMaeOH3yesck5CxEGBOK6Z8OvdQr9Jem8xwulgpNiACpNRr8c_rJ75XVeTYDy4wIdPstY8I4rYd0cWjihzQYMV2mCrIEk7Ya6nHNOCWE"
              />
              <img
                alt="Logo partenaire 2"
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL8hENyWfvWfDkNrfPq0tEa3jqjm5AgP-rHjtGiNiG0YeOHIqMeJc3LbTuCIemeus9qX0LOViE5lmSG_Gby24nnNGQYe4ClmhQyHKf-Pe2IcRcEslQQxtPMk55IDZkMQPYzoj1NusgibsG0O5go-VK1ITLK1hVN-nLS2MgXksvfuwdYX80d6lZFjXIxQtQgz7gpHqNNcysr-_tROu1eHwVh4LyW16z0pV1ybFAYyWOz2tZER_uR-rvfVy2OAPilwMgrQBN_d4emOU"
              />

              <img
                alt="Logo partenaire 4"
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6S1UMHJj2ig7gWF3Rr7xhleyCj7hEoJKvh2pNLyAQI5mMzv-MW78yFbwL7jUu0DNq4vaIF-TyxNKtMiMffvdNh3ovtgx7LT5uOeXSdMjOXmCG5Abw3IiBhmC266z3W_FlsPAz1hK0Un1OA6S6NB7y87fLpzj_um3CLvjiYi0Gdfw0fpLost5Ir4o-rSK8tvPBQb7QIA7qlpw1qG-q2VxyOv3oJ9gaIogAHOyQtff9JLqrEX_5SP80YIqbH7TjRhBm_9F5LsruPxw"
              />
              <img
                alt="Logo partenaire 5"
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM2SbDVaaj6Zmk0bcKaat2hmdkIwfM5q9LFxlzXtx1of87ndrF7hoEpN9-DZ1THnCesEYNtfK3fCOURguIo1-MKif5JO5iGu_9FKZcsdDgKqzpJ9ZUXXByX9BngMWPrwmJEeK-eLbR7bTbI5MjT2e3jJeSoB_P9BtEVEs0518bzM4jeo7yf69hH4HTtrZcjjtFchVH2tAydEtdK7AGaH2Z-V_-_x_0fL2jAB3oSJsEwgmU9qwCaU9VrkSj4oQBMx5AMCaMmzQBjOw"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ======================= Footer ======================= */}
      <footer className="bg-[var(--dark-blue)] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">EPG– École Polytechnique des Génes</h4>
              <p className="text-gray-400">Apprendre, évoluer, réussir.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Formations
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Catalogue
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Entreprises
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Légal</h4>
              <ul>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Conditions d'utilisation
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-400 hover:text-white" href="#">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.15 2.33,6.94C2.33,8.43 3.1,9.75 4.18,10.53C3.47,10.51 2.82,10.31 2.22,10V10.06C2.22,12.23 3.78,14.05 5.8,14.44C5.45,14.53 5.08,14.58 4.69,14.58C4.42,14.58 4.15,14.56 3.89,14.51C4.45,16.28 6.08,17.56 8.1,17.6C6.55,18.81 4.54,19.56 2.38,19.56C2.05,19.56 1.73,19.54 1.4,19.5C3.45,20.82 5.86,21.66 8.5,21.66C16,21.66 20.22,15.17 20.22,9.65C20.22,9.46 20.22,9.27 20.21,9.08C21.01,8.5 21.8,7.77 22.46,6Z"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.1,3 19,3M18.5,18.5H16.5V13.2A1.26,1.26 0 0,0 15.24,12A1.26,1.26 0 0,0 14,13.2V18.5H12V12H14V13C14.33,12.33 15,11.5 16.5,11.5C18.5,11.5 18.5,13.2 18.5,13.2V18.5M10,18.5H8V12H10V18.5M9,11A1,1 0 0,1 8,10A1,1 0 0,1 9,9A1,1 0 0,1 10,10A1,1 0 0,1 9,11Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            © 2024 EPG–École PolyTechnique des Génies. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
