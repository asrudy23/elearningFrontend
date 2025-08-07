import React, { useState } from 'react';

/*
  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> (polices, variables CSS, etc.) doit être géré
  dans les fichiers appropriés de votre projet React.
  - Les polices et le script Tailwind iraient dans `public/index.html`.
  - Les variables CSS (:root) et les styles personnalisés (@apply) iraient dans votre fichier CSS principal (ex: `src/index.css`).
*/

// --- Composant pour l'en-tête ---
const Header = () => (
  <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-[var(--primary-color)] text-2xl">
            <svg className="lucide lucide-graduation-cap" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[var(--primary-accent)]">EPG École</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors" href="#">Home</a>
          <a className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors" href="#">Courses</a>
          <a className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors" href="#">Dashboard</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2">
            <span className="sr-only">View notifications</span>
            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </button>
          <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_GDIC3ujeJ0mnuYRGiNPVrAA2vxjS8hzi835ahmRQa90Vfgs4OwZ0IvdndHuLWaP0GJ5vnJDbsDUWPv-cWHfgLdK6-DqnrNq8Z4iS5vkjbNJTm6RFcJzXL7mdbRDzCiiBvIOBihQmgLf15_DGGWmgACcjfQ0fBi_1t1h4XoncRilMusIiORhGO_R261gDHg0XOefQM4Wra4Z6IkLVfYR4BvivvJoQMQCWd_zKq4D8-KPn1PBaGruU9LiiexIhrCOTekPAazgKn-0")' }}></div>
        </div>
      </div>
    </div>
  </header>
);

// --- Composant pour le pied de page ---
const Footer = () => (
    <footer className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-[var(--text-secondary)] text-sm">
            © 2024 EPG École. All Rights Reserved.
        </div>
    </footer>
);

// --- Composant pour une étape du stepper ---
const StepperItem = ({ stepNumber, label, isActive }) => (
    <div className={`stepper-item flex-1 relative flex flex-col items-center gap-2 ${isActive ? 'active' : ''}`}>
        <div className="stepper-circle flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold">{stepNumber}</div>
        <p className="stepper-label text-sm text-center">{label}</p>
    </div>
);

// --- Composant pour le stepper complet ---
const Stepper = ({ steps, currentStep }) => (
    <div className="grid grid-cols-6 gap-4 md:gap-8">
        {steps.map((step, index) => (
            <StepperItem 
                key={index} 
                stepNumber={index + 1} 
                label={step} 
                isActive={index + 1 <= currentStep} 
            />
        ))}
    </div>
);

// --- Composant principal de la page ---
const CourseCreationPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const stepsData = ["Title", "Description", "Video", "Files", "Lesson", "Quiz"];

    const handleNext = (e) => {
        e.preventDefault();
        setCurrentStep(prev => Math.min(prev + 1, stepsData.length));
        // Ici, vous ajouteriez la logique pour afficher le formulaire de l'étape suivante
    };

    return (
        <div className="flex min-h-screen flex-col antialiased">
            <Header />
            <main className="flex-1">
                <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-bold tracking-tight text-[var(--primary-accent)]">Create a New Course</h2>
                    <p className="mt-2 text-lg text-[var(--text-secondary)]">Follow the steps below to create your course.</p>
                    
                    <div className="mt-12">
                        <Stepper steps={stepsData} currentStep={currentStep} />
                    </div>

                    <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-[var(--border-color)]">
                        <div className="max-w-xl mx-auto">
                            {/* Le contenu du formulaire changerait en fonction de `currentStep` */}
                            {currentStep === 1 && (
                                <form onSubmit={handleNext}>
                                    <div className="space-y-8">
                                        <div>
                                            <label className="block text-sm font-medium leading-6 text-[var(--primary-accent)]" htmlFor="course-title">Course Title</label>
                                            <div className="mt-2">
                                                <input className="block w-full rounded-lg border-0 py-3 px-4 bg-[var(--secondary-color)] text-[var(--text-primary)] ring-1 ring-inset ring-[var(--border-color)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 transition-shadow" id="course-title" name="course-title" placeholder="e.g., Introduction to Web Design" type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium leading-6 text-[var(--primary-accent)]" htmlFor="course-description">Course Description</label>
                                            <div className="mt-2">
                                                <textarea className="block w-full rounded-lg border-0 py-3 px-4 bg-[var(--secondary-color)] text-[var(--text-primary)] ring-1 ring-inset ring-[var(--border-color)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)] sm:text-sm sm:leading-6 transition-shadow" id="course-description" name="course-description" placeholder="Provide a detailed description of your course..." rows="4"></textarea>
                                            </div>
                                            <p className="mt-2 text-sm text-[var(--text-secondary)]">A good description helps learners understand what the course is about.</p>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex justify-end gap-x-4">
                                        <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-[var(--border-color)] hover:bg-gray-50 transition-colors" type="button">
                                            Save Draft
                                        </button>
                                        <button className="rounded-full bg-[var(--primary-color)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)] transition-colors" type="submit">
                                            Next: Description
                                        </button>
                                    </div>
                                </form>
                            )}
                             {/* Exemple: {currentStep === 2 && <DescriptionForm />} */}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CourseCreationPage;