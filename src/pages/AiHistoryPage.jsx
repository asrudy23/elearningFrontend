import React from 'react';

// NOTE: Dans une application React :
// 1. Le lien <link> pour la police (Work Sans) serait dans public/index.html.
// 2. Les variables CSS (:root) seraient dans un fichier CSS global (ex: src/index.css).

// --- Données pour l'historique des interactions ---
const historyData = [
  { id: 1, question: 'What is the difference between a variable and a constant?', course: 'Introduction to Programming' },
  { id: 2, question: 'Explain the concept of recursion with an example.', course: 'Data Structures and Algorithms' },
  { id: 3, question: 'What are the different types of SQL joins?', course: 'Database Management Systems' },
  { id: 4, question: 'Describe the client-server architecture.', course: 'Web Development Fundamentals' },
  { id: 5, question: 'What are the four pillars of OOP?', course: 'Object-Oriented Programming' },
];

// --- Icônes en tant que composants (pour la propreté) ---
const HomeIcon = () => <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>;
const CoursesIcon = () => <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path></svg>;
const AiAssistantIcon = () => <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M248,152a8,8,0,0,1-8,8H224v16a8,8,0,0,1-16,0V160H192a8,8,0,0,1,0-16h16V128a8,8,0,0,1,16,0v16h16A8,8,0,0,1,248,152ZM56,72H72V88a8,8,0,0,0,16,0V72h16a8,8,0,0,0,0-16H88V40a8,8,0,0,0-16,0V56H56a8,8,0,0,0,0,16ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80ZM208,68.69,187.31,48l-32,32L176,100.69Z"></path></svg>;
const BookmarksIcon = () => <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path></svg>;
const NotesIcon = () => <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path></svg>;
const QuestionIcon = () => <svg className="text-[var(--brand-primary)]" fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>;

// --- Composants ---

const Sidebar = () => (
  <aside className="w-64 bg-[var(--background-primary)] p-6 flex flex-col justify-between shadow-sm">
    <div>
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl font-bold text-[var(--brand-primary)]">EPG</span>
      </div>
      <nav className="flex flex-col gap-2">
        <a className="flex items-center gap-3 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-light)] rounded-full transition-colors" href="#"><HomeIcon /><span className="text-sm font-medium">Home</span></a>
        <a className="flex items-center gap-3 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-light)] rounded-full transition-colors" href="#"><CoursesIcon /><span className="text-sm font-medium">Courses</span></a>
        <a className="flex items-center gap-3 px-4 py-2 text-[var(--text-primary)] bg-[var(--brand-secondary)] rounded-full transition-colors font-semibold" href="#"><AiAssistantIcon /><span className="text-sm">AI Assistant</span></a>
        <a className="flex items-center gap-3 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-light)] rounded-full transition-colors" href="#"><BookmarksIcon /><span className="text-sm font-medium">Bookmarks</span></a>
        <a className="flex items-center gap-3 px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-light)] rounded-full transition-colors" href="#"><NotesIcon /><span className="text-sm font-medium">Notes</span></a>
      </nav>
    </div>
    <div className="flex items-center gap-3 p-3 bg-[var(--accent-light)] rounded-full">
      <img alt="User avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMrfdmFmpmeovL1rY2sZp3na8C6LdGv5V04_65xmwWR-0ANwe_tG2q7f_Fha9iTRSEy0hbRdGaQTv9UWPPoovPsKZXp_iYz2YMc9_-Vc491B4_7RThr-1jJ5exi4fVyiXscIXis5ciLbDH0h-t3WJqcpoDgOWB5LgvsnLyUtqTkmRZSaukSbWSL9ejQsOoVgEnJBV4wq9Hipqnge2QlhiX9DHwgMhFoU8V_s9QIaBzBpx8KDpzLz6zDYXWI9I-MdOO8TN_SdT4p4o" />
      <div>
        <p className="text-sm font-semibold">Alexandre</p>
        <p className="text-xs text-[var(--text-secondary)]">alex.epg@email.com</p>
      </div>
    </div>
  </aside>
);

const HistoryItem = ({ item }) => (
  <div className="p-6 hover:bg-[var(--background-secondary)] transition-colors duration-200 flex items-center justify-between group">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-[var(--brand-secondary)] shrink-0 size-12">
        <QuestionIcon />
      </div>
      <div>
        <p className="text-base font-medium text-[var(--text-primary)]">{item.question}</p>
        <p className="text-sm text-[var(--text-secondary)]">{item.course}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="p-2 rounded-full hover:bg-[var(--accent-light)] text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
        <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M221.38,98.62l-32-32a8,8,0,0,0-11.32,11.32L196.69,96H128a8,8,0,0,0-8,8v68.69l-18.63-18.63a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32L144,172.69V112h52.69l-18.63,18.62a8,8,0,0,0,11.32,11.32l32-32A8,8,0,0,0,221.38,98.62ZM96,59.31,77.37,40.69a8,8,0,0,0-11.32,11.32L84.69,70.62,66.05,89.27A8,8,0,0,0,77.37,100.6l18.62-18.63V59.31Z M40,84.69,58.62,66.05,40,47.43A8,8,0,0,1,51.31,36.12l32,32a8,8,0,0,1,0,11.32l-32,32A8,8,0,0,1,40,100.05V84.69Z"></path></svg>
      </button>
      <button className="p-2 rounded-full hover:bg-[var(--accent-light)] text-[var(--text-secondary)] hover:text-[var(--brand-primary)]">
        <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
      </button>
    </div>
  </div>
);

const HistoryList = ({ items }) => (
  <div className="bg-[var(--background-primary)] rounded-2xl shadow-sm">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-[var(--text-primary)]">History</h2>
    </div>
    <div className="divide-y divide-gray-200">
      {items.map(item => <HistoryItem key={item.id} item={item} />)}
    </div>
  </div>
);

const AiHistoryPage = () => {
  return (
    <div className="bg-[var(--background-secondary)] text-[var(--text-primary)]">
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <header className="mb-10">
              <h1 className="text-4xl font-bold text-[var(--text-primary)]">AI Assistant</h1>
              <p className="text-lg text-[var(--text-secondary)] mt-1">Review and manage your past interactions.</p>
            </header>
            <HistoryList items={historyData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiHistoryPage;