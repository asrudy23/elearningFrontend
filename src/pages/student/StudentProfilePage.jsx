import React from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> (polices, variables CSS, etc.) doit être géré
  dans les fichiers appropriés de votre projet React.
  - Les polices et le script Tailwind iraient dans `public/index.html`.
  - Les variables CSS (:root) et les styles personnalisés iraient dans votre fichier CSS principal (ex: `src/index.css`).
*/

// --- Composant pour l'en-tête ---
const Header = () => (
  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 shadow-sm bg-white">
    <div className="flex items-center gap-4 text-gray-800">
      <svg className="h-8 w-8 text-[var(--primary)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
      </svg>
      <h2 className="text-gray-900 text-xl font-bold tracking-tight">EPG</h2>
    </div>
    <nav className="flex flex-1 justify-center gap-8">
      <div className="flex items-center gap-10">
        <a className="text-gray-600 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Accueil</a>
        <a className="text-gray-600 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Catalogue</a>
        <a className="text-gray-600 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Mes cours</a>
        <a className="text-gray-600 hover:text-[var(--primary)] text-sm font-medium transition-colors" href="#">Communauté</a>
      </div>
    </nav>
    <div className="flex items-center gap-4">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPt9oOh8VmFBCFtgu_o-JNHPXv0APesRo0DAzs1IvIz4g8_kET8m7Jn4CclYdRg41YWPvgh5QKpBOLmMkt2Uz_v1ow9ZVq1BtqCktr_TB6S9b3kgR4eXlxGKK9esYvzjkxd3mr1s2JsujWIHDDHgVfgouVJyXHkYjZMotWnmohfCb_GNrYkzAzwFmYoMqTJTOgIUNCJrHfQhAYe88u1K4j8hFGUOkOcMfNEbMbm9cxj9s3VSzLnd15JXN6L0KLIY8hvhlfq7GkmT8")' }}
      ></div>
    </div>
  </header>
);

// --- Composant pour une ligne de progression de cours ---
const CourseProgressRow = ({ courseName, progress }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{courseName}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <div className="flex items-center gap-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-[var(--primary)] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-700">{progress}%</span>
      </div>
    </td>
  </tr>
);

// --- Composant principal de la page de profil ---
const StudentProfilePage = () => {
  const coursesData = [
    { name: 'Introduction à la programmation', progress: 50 },
    { name: 'Marketing digital', progress: 75 },
    { name: 'Gestion de projet', progress: 25 },
  ];

  const globalProgress = 50;

  return (
    <div className="bg-gray-50">
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <main className="flex-1 bg-gray-50/50">
            <div className="mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex-shrink-0 size-40 border-4 border-white shadow-md"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1m2KQPqytwLSARohisCNC-KVNAKuJ1VDFt-mwT77CGRauyvxYnUSbV1urrlmrHFrhGQ9gEvFvSOiA-LZlFCJvXuFoBtjt_gVUsFfhzwR01TbQw-_PwmxZ1NZNmTmL-Uc_bEtX5Bz_MM8aOro9_L3XZ0hLzOGneV05AbF37tUFbUxI3-Pvx984KXGsIzPcaSEYJCGvggPKscnmaHQb1YgDmddHFv9QYm6gEOc4CFjj69gMgTfynyu_Eese-DmN9pGHb0yxCNnCS0w")' }}
                  ></div>
                  <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900">Sophie Dubois</h1>
                    <p className="text-lg text-gray-500 mt-1">sophie.dubois@email.com</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-gray-600 px-3 py-1 bg-indigo-100 text-[var(--primary)] rounded-full text-sm font-semibold">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd"></path>
                      </svg>
                      Étudiant
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Mes cours</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Cours</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Progrès</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {coursesData.map((course, index) => (
                            <CourseProgressRow key={index} courseName={course.name} progress={course.progress} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Progrès global</h2>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="bg-[var(--primary)] text-xs font-medium text-indigo-100 text-center p-1.5 leading-none rounded-full"
                        style={{ width: `${globalProgress}%` }}
                      >
                        {globalProgress}%
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button className="flex min-w-[84px] items-center justify-center rounded-full h-10 px-6 bg-gray-800 text-white text-sm font-bold leading-normal tracking-wide shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-all duration-200">
                      <span className="truncate">Modifier mot de passe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;