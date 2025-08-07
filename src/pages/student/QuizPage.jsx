import React, { useState } from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> (polices, variables CSS, etc.) doit être géré
  dans les fichiers appropriés de votre projet React.
  - Les polices et le script Tailwind iraient dans `public/index.html`.
  - Les variables CSS (:root) et les styles personnalisés iraient dans votre fichier CSS principal (ex: `src/index.css`).
*/

// --- Composant pour l'en-tête ---
const Header = () => (
  <header className="sticky top-0 z-10 bg-white shadow-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-[var(--epg-primary)] h-8 w-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-epg-text-primary">EPG École</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-epg-text-secondary hover:text-epg-primary transition-colors" href="#">Accueil</a>
          <a className="text-sm font-medium text-epg-primary font-semibold" href="#">Cours</a>
          <a className="text-sm font-medium text-epg-text-secondary hover:text-epg-primary transition-colors" href="#">Exercices</a>
          <a className="text-sm font-medium text-epg-text-secondary hover:text-epg-primary transition-colors" href="#">Examens</a>
        </nav>
        <div className="flex items-center gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCtC-e7-I3mOwa0TlvFzzLzGoc74ULqpt4B-0TWurgpDRzB5rRW6hUup_KRNWFurZhEEz48JQ2E8Af1hVlpjrjllKi8R161ISFfQ8V2yKis0yPtD4bi80BXvw7pEXOP17OoklO_Rr_wJPK90SW7tmmQmOXQoFmy9JFfAT5sETF490WaLWo1aSiFuv6uSKDXQqy6LyPu0eZ3hD_JXmYIYbGkiiHXTGqwpuTdKxRmTo1DHi5rZqAp7qA-rN63n0Ja7-eP_wgp0hHNQE")' }}
          ></div>
        </div>
      </div>
    </div>
  </header>
);

// --- Composant pour une option du quiz ---
const QuizOption = ({ text, name, value, checked, onChange }) => (
  <label className="group relative flex items-center cursor-pointer">
    <input
      className="sr-only epg-radio peer"
      name={name}
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <div className="flex-1 flex items-center gap-4 rounded-xl border border-epg-border p-4 transition-all duration-200 ease-in-out peer-checked:border-[var(--epg-primary)] peer-checked:bg-[var(--epg-primary-light)] peer-hover:border-[var(--epg-primary)]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-epg-border transition-all duration-200 peer-checked:border-[var(--epg-primary)] peer-checked:bg-[var(--epg-primary)]">
        <span className="h-2 w-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></span>
      </span>
      <span className="text-base font-medium text-epg-text-primary">{text}</span>
    </div>
  </label>
);


// --- Composant principal de la page du Quiz ---
const QuizPage = () => {
  const [selectedOption, setSelectedOption] = useState('Paris');

  const quizOptions = [
    { value: 'Paris', label: 'Paris' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Toulouse', label: 'Toulouse' },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Votre réponse : ${selectedOption}`);
    // Ici, vous ajouteriez la logique pour passer à la question suivante
  };

  const progress = '30%';

  return (
    <div className="relative flex min-h-screen flex-col text-epg-text-primary">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium text-epg-text-secondary mb-2">Question 3/10</p>
              <div className="bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div className="bg-[var(--epg-primary)] h-2.5 rounded-full" style={{ width: progress }}></div>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-epg-text-primary mb-8">
              Quelle est la capitale de la France?
            </h2>

            <form onSubmit={handleSubmit}>
              <fieldset className="space-y-4">
                <legend className="sr-only">Options de réponse</legend>
                {quizOptions.map((option) => (
                  <QuizOption
                    key={option.value}
                    text={option.label}
                    name="quiz-option"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                ))}
              </fieldset>

              <div className="mt-10 flex justify-end">
                <button
                  className="flex items-center justify-center rounded-full bg-[var(--epg-primary)] px-8 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  type="submit"
                >
                  <span>Suivant</span>
                  <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPage;