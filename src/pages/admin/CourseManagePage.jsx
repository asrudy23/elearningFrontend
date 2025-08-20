import React from 'react';

// NOTE: Dans une application React :
// 1. Les liens <link> pour les polices (Work Sans, Material Icons) seraient dans public/index.html.
// 2. Les variables CSS (:root) et les classes @apply iraient dans un fichier CSS global (ex: src/index.css) et seraient traitées par Tailwind.

// --- Données des cours ---
const coursesData = [
  { id: 1, title: 'Mathématiques Avancées', professor: 'M. Dubois', status: 'Validé' },
  { id: 2, title: 'Histoire Contemporaine', professor: 'Mme. Martin', status: 'En attente' },
  { id: 3, title: 'Physique Quantique', professor: 'Dr. Lemaire', status: 'Validé' },
  { id: 4, title: 'Littérature Française', professor: 'Mme. Dupont', status: 'En attente' },
  { id: 5, title: 'Biologie Moléculaire', professor: 'Pr. Girard', status: 'Validé' },
];

// --- Sous-composants ---

const Header = () => (
  <header className="flex-shrink-0 bg-white shadow-sm">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/*
            <svg className="h-8 w-auto text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            */}
          </div>
          <h1 className="ml-3 text-xl font-bold text-[var(--text-primary-color)]">EPG</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="text-sm font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)]" href="#">Accueil</a>
          <a className="text-sm font-medium text-[var(--primary-color)] border-b-2 border-[var(--primary-color)]" href="#">Cours</a>
          <a className="text-sm font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)]" href="#">Formations</a>
          <a className="text-sm font-medium text-[var(--text-secondary-color)] hover:text-[var(--text-primary-color)]" href="#">Mon compte</a>
        </nav>
        <div className="flex items-center">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJnu325CuOKxra4hirPRjE7Pkabt4UuUJyBHMrzVfuLu3HZVANv67L9_anlDjl7OhF7XtEzNWi4nH2kndfda8YRk3JEuJ4KdIUiN0oETnATscmXZvL-zVoNMZV6UDACzpkJtmXW2hhKpkcy4CTcse4H71-HmmGJZ81WVUbmWEo3e-6Y8YFnCDQQ3VGUEsBZhBBONAcsMyW50gD5db2gqE5y7d8i5qp0PSr8s1JlipoH7a4-jjhC7F0hUm-2ZYJ7YbaQr0HGbCjqyc")` }}></div>
        </div>
      </div>
    </div>
  </header>
);

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Validé': {
      bg: 'bg-[var(--success-bg)]',
      text: 'text-[var(--success-text)]',
      dot: 'text-[var(--success-text)]'
    },
    'En attente': {
      bg: 'bg-[var(--pending-bg)]',
      text: 'text-[var(--pending-text)]',
      dot: 'text-[var(--pending-text)]'
    }
  };

  const style = statusStyles[status] || {};

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}>
      <svg className={`-ml-0.5 mr-1.5 h-2 w-2 ${style.dot}`} fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3"></circle>
      </svg>
      {status}
    </span>
  );
};

const ActionButtons = ({ status }) => (
    <div className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 space-x-2">
        {status === 'En attente' && (
            <button className="text-[var(--primary-color)] hover:text-blue-800 font-semibold">
                Valider
            </button>
        )}
        <button className="btn-danger p-2 rounded-full hover:bg-red-200 text-[var(--danger-text)]">
            <span className="material-icons-outlined text-base">delete</span>
        </button>
    </div>
);


const CourseTableRow = ({ course }) => (
  <tr>
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[var(--text-primary-color)] sm:pl-6">
      {course.title}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-secondary-color)]">
      {course.professor}
    </td>
    <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
      <StatusBadge status={course.status} />
    </td>
    <td>
      <ActionButtons status={course.status}/>
    </td>
  </tr>
);

const CourseTable = ({ courses }) => (
    <div className="overflow-hidden rounded-lg border border-[var(--border-color)] bg-white shadow-sm">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[var(--border-color)]">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[var(--text-primary-color)] sm:pl-6" scope="col">Cours</th>
                        <th className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-primary-color)]" scope="col">Professeur</th>
                        <th className="px-3 py-3.5 text-center text-sm font-semibold text-[var(--text-primary-color)]" scope="col">Statut</th>
                        <th className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-semibold text-[var(--text-primary-color)]" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-color)] bg-white">
                    {courses.map(course => <CourseTableRow key={course.id} course={course} />)}
                </tbody>
            </table>
        </div>
    </div>
);


// --- Composant principal ---

const CourseManagePage = () => {
  return (
    <div className="bg-[var(--background-color)] text-[var(--text-primary-color)]">
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary-color)]">
                Gestion des Cours
              </h2>
              <button className="btn btn-primary mt-4 sm:mt-0">
                <span className="material-icons-outlined mr-2 -ml-1">add</span>
                Ajouter un cours
              </button>
            </div>
            <CourseTable courses={coursesData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseManagePage;