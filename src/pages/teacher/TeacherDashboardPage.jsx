import React from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> (polices, variables CSS, etc.) doit être géré
  dans les fichiers appropriés de votre projet React.
  - Les polices et le script Tailwind iraient dans `public/index.html`.
  - Les variables CSS (:root) et les styles personnalisés iraient dans votre fichier CSS principal (ex: `src/index.css`).
*/

// --- Icônes en tant que composants ---
const HomeIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
);
const CoursesIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.71-6.75l-44-28A8,8,0,0,0,104,84v56a8,8,0,0,0,12.29,6.75l44-28A8,8,0,0,0,164,112Z"></path></svg>
);
const CalendarIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>
);
const MessagesIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"></path></svg>
);
const SettingsIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path></svg>
);


// --- Composant pour un lien de navigation ---
const NavItem = ({ text, icon, isActive = false }) => {
  const activeClass = "text-[var(--primary-color)] bg-[var(--primary-color-light)] font-semibold";
  const defaultClass = "text-gray-700 hover:bg-gray-100";
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? activeClass : defaultClass}`}>
      {icon}
      <span>{text}</span>
    </a>
  );
};

// --- Composant pour la barre latérale ---
const Sidebar = () => {
    const navLinks = [
        { text: "Accueil", icon: <HomeIcon /> },
        { text: "Mes cours", icon: <CoursesIcon />, isActive: true },
        { text: "Calendrier", icon: <CalendarIcon /> },
        { text: "Messages", icon: <MessagesIcon /> },
    ];

    return (
        <aside className="fixed flex flex-col w-64 h-screen bg-white shadow-lg">
            <div className="flex items-center justify-center h-20 border-b">
                <h1 className="text-2xl font-bold text-[var(--primary-color)]">EPG École</h1>
            </div>
            <div className="flex flex-col flex-grow p-4 space-y-4">
                <div className="flex items-center gap-4 p-3">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZBCEqjt4nc6WTL35gnEHG-XUOUsO9zECzEFckupNgrY5NreDhdpMqXqlbluGypyo4lPXVgK7TqjTD3BJcZLKgMOIWROzIasBFOonbbnWdxq21o8qoOrOHA2e3-mEYaa4WQtf_wqVFAuLhK6X2txMYAW0eQOR1_LwJ2Wn5gF3chcA7seWuAUvnYgcKhqTkE_VucN3xjYvI18s5sHnUaLLnt2Ye2fqWhUbEJLplsucox7PgxCk2cuuglZ2LtxcU7MUB-E_ts3z0bg")' }}></div>
                    <div>
                        <h2 className="text-base font-semibold">Sophie Dubois</h2>
                        <p className="text-sm text-gray-500">Enseignante</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                    {navLinks.map((link, index) => (
                        <NavItem key={index} text={link.text} icon={link.icon} isActive={link.isActive} />
                    ))}
                </nav>
                <div className="flex-grow"></div>
                <NavItem text="Paramètres" icon={<SettingsIcon />} />
            </div>
        </aside>
    );
};


// --- Composant pour une ligne du tableau de cours ---
const CourseTableRow = ({ courseName, studentCount }) => (
    <tr>
        <td className="px-6 py-4 whitespace-nowrap">
            <span className="font-medium text-[var(--text-primary)]">{courseName}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            <span className="text-[var(--text-secondary)]">{studentCount}</span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
            <a href="#" className="text-[var(--primary-color)] hover:text-opacity-80 font-medium">Voir les statistiques</a>
            <a href="#" className="text-[var(--primary-color)] hover:text-opacity-80 font-medium">Gérer le contenu</a>
        </td>
    </tr>
);


// --- Composant principal du tableau de bord ---
const TeacherDashboardPage = () => {
    const coursesData = [
        { name: "Mathématiques avancées", students: 25 },
        { name: "Littérature française", students: 30 },
        { name: "Histoire de l'art", students: 20 },
        { name: "Physique Quantique", students: 18 },
        { name: "Programmation Python", students: 42 },
    ];

    return (
        <div className="bg-gray-50 text-[var(--text-primary)]">
            <div className="relative flex min-h-screen">
                <Sidebar />
                <main className="ml-64 flex-1 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Mes cours</h1>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-[var(--primary-color)] rounded-full shadow-md hover:bg-opacity-90 transition-all">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fillRule="evenodd"></path>
                            </svg>
                            <span className="font-semibold">Créer un nouveau cours</span>
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider" scope="col">Cours</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider" scope="col">Étudiants Inscrits</th>
                                    <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-center" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {coursesData.map((course, index) => (
                                    <CourseTableRow key={index} courseName={course.name} studentCount={course.students} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TeacherDashboardPage;