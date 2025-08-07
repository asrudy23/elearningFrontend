import React from 'react';

// NOTE: Dans une application React :
// 1. Les liens <link> pour la police (Work Sans) seraient dans public/index.html.
// 2. Les variables CSS (:root) seraient dans un fichier CSS global (ex: src/index.css).

// --- Données pour les résultats du quiz (pour rendre le composant dynamique) ---
const resultsData = {
  name: 'Marie',
  score: 85,
  correct: 17,
  incorrect: 3,
};

// --- Icônes en tant que composants pour la propreté ---
const CheckIcon = () => <svg className="h-6 w-6 text-success-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>;
const XIcon = () => <svg className="h-6 w-6 text-error-main" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>;

// --- Composants ---

const Header = () => (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-brand-secondary bg-surface-main/80 px-10 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <a className="flex items-center gap-3 text-text-primary" href="#">
          <svg className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path></svg>
          <h1 className="text-xl font-bold">EPG École</h1>
        </a>
      </div>
      <nav className="hidden items-center gap-8 md:flex">
        <a className="text-sm font-medium text-text-primary hover:text-brand-primary" href="#">Catalogue</a>
        <a className="text-sm font-medium text-text-primary hover:text-brand-primary" href="#">My courses</a>
        <a className="text-sm font-medium text-text-primary hover:text-brand-primary" href="#">My learning path</a>
        <a className="text-sm font-medium text-text-primary hover:text-brand-primary" href="#">My groups</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-brand-secondary text-text-primary transition-colors hover:bg-brand-primary/10">
          <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>
        </button>
        <div className="h-10 w-10 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsHwXDZH9DIVIkFUUm_fEAxlnF1Z8we2AmBk6Pr7HVheW_ssJAzTXsgFEMqnEw_2XZ6QxvjkmWEKHUYQixYgWlzVJ4r6UhVDm0UxGupVaEaDfkv8brrESnFC8hytJgxz8Y7va-oIxKS3SfoDrkEzKT3AfbhvlXOR2pJMn-vuBomj7mpcDhkdvLNjtn_Dfa_99wm4lplMIefZsq5BaDHarfM7HHGEYsd8CF_IA4ZOqXUTYoWs-vlpWNYEYX0jB4L6LVAzxeKIc4rME")` }}></div>
      </div>
    </header>
);

const ScoreCircle = ({ score }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative">
      <svg className="h-48 w-48 -rotate-90 transform" viewBox="0 0 120 120">
        <circle cx="60" cy="60" fill="none" r={radius} stroke="var(--brand-secondary)" strokeWidth="12"></circle>
        <circle
          cx="60"
          cy="60"
          fill="none"
          r={radius}
          stroke="var(--success-main)"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth="12"
        ></circle>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-extrabold text-brand-primary">{score}%</span>
        <span className="text-sm font-medium text-text-secondary">Score</span>
      </div>
    </div>
  );
};

const StatBox = ({ label, value, icon }) => (
    <div className="flex items-center gap-4 rounded-xl bg-surface-main p-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${label.includes('Correct') ? 'bg-success-main/10' : 'bg-error-main/10'}`}>
            {icon}
        </div>
        <div>
            <p className="text-base font-medium text-text-secondary">{label}</p>
            <p className="text-2xl font-bold text-text-primary">{value}</p>
        </div>
    </div>
);


const ResultsCard = ({ results }) => (
    <div className="rounded-2xl bg-surface-card p-8 shadow-lg">
        <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-green-100 p-3">
                <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-text-primary">Félicitations, {results.name}!</h2>
            <p className="mt-2 text-lg text-text-secondary">Vous avez brillamment réussi le quiz.</p>
        </div>
        <div className="my-12 flex justify-center">
            <ScoreCircle score={results.score} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <StatBox label="Correct Answers" value={results.correct} icon={<CheckIcon />} />
            <StatBox label="Incorrect Answers" value={results.incorrect} icon={<XIcon />} />
        </div>
        <div className="mt-10 rounded-lg bg-surface-main p-6">
            <h3 className="text-lg font-bold text-text-primary">Performance Summary</h3>
            <p className="mt-2 text-text-secondary">
                Excellent effort! You've demonstrated a strong understanding of the material. Keep up the fantastic work and continue building on this success.
            </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="flex w-full items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105 sm:w-auto">
                Review Answers
            </button>
            <button className="flex w-full items-center justify-center rounded-full bg-brand-secondary px-8 py-3 text-sm font-bold text-brand-primary transition-transform hover:scale-105 sm:w-auto">
                Return to Course
            </button>
        </div>
    </div>
);

const QuizResultPage = () => {
    return (
        <div className="bg-surface-main text-text-primary">
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-grow py-12">
                    <div className="container mx-auto max-w-4xl px-4">
                        <ResultsCard results={resultsData} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default QuizResultPage;