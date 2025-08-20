import React from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> (polices, script Tailwind, etc.) doit être géré
  dans le fichier `public/index.html` ou avec des outils comme React Helmet.
  Les styles CSS (variables, .progress-bar-inner) iraient dans votre fichier CSS principal.
*/

// --- Composants d'icônes ---
const PlayCircleIcon = (props) => (
  <svg className="lucide lucide-play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);

const CircleIcon = (props) => (
  <svg className="lucide lucide-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const FlagIcon = (props) => (
  <svg className="lucide lucide-flag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
    <line x1="4" x2="4" y1="22" y2="15"></line>
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line x1="5" x2="19" y1="12" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChatIcon = (props) => (
  <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"></path>
  </svg>
);

// --- Composant pour un élément de la navigation ---
const NavItem = ({ icon, text, isActive = false }) => {
  const activeClasses = "bg-[var(--secondary-color)] text-[var(--primary-color)] font-semibold";
  const defaultClasses = "hover:bg-gray-100 text-[var(--text-primary)] font-medium";
  
  return (
    <a
      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? activeClasses : defaultClasses}`}
      href="#"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};


// --- Composant principal de la page ---
const CoursePlayerPage = () => {
  const navItems = [
    { text: "Introduction", icon: <PlayCircleIcon />, isActive: true },
    { text: "Chapitre 1", icon: <CircleIcon /> },
    { text: "Chapitre 2", icon: <CircleIcon /> },
    { text: "Chapitre 3", icon: <CircleIcon /> },
    { text: "Conclusion", icon: <FlagIcon /> },
  ];
  
  const courseProgress = "20%";

  return (
    <div className="bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="flex min-h-screen">
        <aside className="w-80 bg-white shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Introduction à la programmation</h1>
              <p className="text-sm text-[var(--text-secondary)]">EPG</p>
            </div>
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <NavItem key={index} icon={item.icon} text={item.text} isActive={item.isActive} />
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-[var(--text-secondary)]">Progression du cours</p>
                <p className="text-sm font-bold text-[var(--primary-color)]">{courseProgress}</p>
              </div>
              <div className="w-full bg-[var(--secondary-color)] rounded-full h-2.5">
                <div className="bg-[var(--primary-color)] h-2.5 rounded-full" style={{ width: courseProgress }}></div>
              </div>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg">
              <div 
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlFWvSMh-qKSkeu6KVQ0USKKN6zIT5g4Pg3dwfhDGNu_2p4ca9FmOEJnV062tSpsl93kIOoJu1U3w2pO229e3jpbC7bx2KK90QcJmdyOkYCddFoW77pQdvU5EmtDfA0OMkD1QWcuRrDUiFzp9U15ynaqZiY9LUiQYVatH9tQAfhv3lwJnAmHWj5Ccx1PXfng8JSWdcY2uZ6XnQ-7koLZ0R1RKRHIIozzTTo46sdDdkb3ZT0UsuB9ZWZm-G5HzehPr1FwZgUiwKxhU")' }}
              >
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="flex items-center justify-center size-20 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <svg fill="currentColor" height="48" viewBox="0 0 256 256" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-[var(--primary-color)] text-white text-base font-semibold hover:bg-opacity-90 transition-all">
                <span>Passer au quiz</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </main>

        <div className="fixed bottom-8 right-8">
          <button className="flex items-center justify-center size-16 rounded-full bg-[var(--primary-color)] text-white shadow-lg hover:scale-105 transition-transform">
            <ChatIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayerPage;