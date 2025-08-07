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
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 shadow-sm">
        <div className="flex items-center gap-3 text-[var(--neutral-text)]">
            <div className="size-8 text-[var(--primary-color)]">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                </svg>
            </div>
            <h2 className="text-xl font-bold tracking-[-0.015em] text-[var(--primary-color)]">EPG École</h2>
        </div>
        <nav className="flex flex-1 justify-center">
            <div className="flex items-center gap-8">
                <a className="text-sm font-medium text-[var(--subtle-text)] transition-colors hover:text-[var(--primary-color)]" href="#">Home</a>
                <a className="text-sm font-bold text-[var(--primary-color)]" href="#">Courses</a>
                <a className="text-sm font-medium text-[var(--subtle-text)] transition-colors hover:text-[var(--primary-color)]" href="#">Instructors</a>
                <a className="text-sm font-medium text-[var(--subtle-text)] transition-colors hover:text-[var(--primary-color)]" href="#">Dashboard</a>
            </div>
        </nav>
        <div className="flex items-center gap-4">
            <button className="flex size-10 items-center justify-center rounded-full bg-white text-[var(--subtle-text)] shadow-sm transition-colors hover:bg-gray-100 hover:text-[var(--primary-color)]">
                <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
            </button>
            <div className="aspect-square size-10 overflow-hidden rounded-full bg-cover bg-center bg-no-repeat shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_1QTwouqF2k-dzyyBpURIoSfIXBRhhQOjmkPe53ZSCUmXxKapfOwbBaBBh6O8VeU5_8-YoRrLeT2Jpwp5OLdC-jRQStX5o9yLnLONIoLGcTVJLhixe3uvpy1vQdg0jZ4N5LLhDwrq-VCT-5P2xGLd3JBoNfOVh-UWTNWoQGdHUjk5okLM7XZFWKLGDDGpjDam8bJNNU3b14gYEkybKJn5kotnOPC3UnUlJuXo6guKFVN9DOknkb5jFTNk7NISIl4chwB47LvlP6Q")' }}></div>
        </div>
    </header>
);

// --- Composant pour une carte de statistique ---
const StatCard = ({ title, value, change, changeText }) => {
    const isPositive = change > 0;
    const changeColor = isPositive ? 'text-[var(--success-color)]' : 'text-[var(--danger-color)]';
    const changePrefix = isPositive ? '+' : '';

    return (
        <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
            <p className="text-base font-medium text-[var(--subtle-text)]">{title}</p>
            <p className="text-4xl font-bold text-[var(--primary-color)]">{value}</p>
            <p className={`text-sm font-medium ${changeColor}`}>{`${changePrefix}${change}% ${changeText}`}</p>
        </div>
    );
};

// --- Composant pour le graphique en aires ---
const QuizScoresChart = () => (
    <svg fill="none" height="148" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_area" x1="236" x2="236" y1="1" y2="150">
                <stop stopColor="var(--accent-color)" stopOpacity="0.2"></stop>
                <stop offset="1" stopColor="var(--accent-color)" stopOpacity="0"></stop>
            </linearGradient>
        </defs>
        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V150H0V109Z" fill="url(#paint0_linear_area)"></path>
        <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="var(--accent-color)" strokeLinecap="round" strokeWidth="3"></path>
    </svg>
);


// --- Composant principal du tableau de bord ---
const CourseStatsPage = () => {

    const statsData = [
        { title: "Completion Rate", value: "85%", change: 5, changeText: "from last month" },
        { title: "Average Quiz Score", value: "78%", change: -2, changeText: "from last month" },
        { title: "Participation Rate", value: "92%", change: 3, changeText: "from last month" },
    ];
    
    const completionData = [
      { label: 'Course A', totalHeight: 60, filledHeight: 20 },
      { label: 'Course B', totalHeight: 80, filledHeight: 40 },
      { label: 'Course C', totalHeight: 100, filledHeight: 100 },
      { label: 'Course D', totalHeight: 70, filledHeight: 50 },
      { label: 'Course E', totalHeight: 90, filledHeight: 70 },
    ];

    const participationData = [
        { label: 'Chapter 1', progress: 95 },
        { label: 'Chapter 2', progress: 88 },
        { label: 'Chapter 3', progress: 91 },
        { label: 'Chapter 4', progress: 75 },
        { label: 'Chapter 5', progress: 60 },
    ];


    return (
        <div className="relative flex size-full min-h-screen flex-col bg-[var(--neutral-background)] group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <Header />
                <main className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl">
                        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-[var(--neutral-text)]">Course Statistics</h1>
                                <p className="mt-1 text-base text-[var(--subtle-text)]">Track your progress and performance in each course.</p>
                            </div>
                        </div>

                        <section className="mb-8">
                            <h2 className="mb-4 text-xl font-bold text-[var(--neutral-text)]">Overall Performance</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {statsData.map((stat, index) => (
                                    <StatCard key={index} {...stat} />
                                ))}
                            </div>
                        </section>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-[var(--neutral-text)]">Course Completion</h2>
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <p className="text-base font-medium text-[var(--subtle-text)]">Completion Rates</p>
                                            <p className="text-3xl font-bold text-[var(--neutral-text)]">85%</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium text-[var(--success-color)]">+5%</p>
                                            <p className="text-sm text-[var(--subtle-text)]">Last 30 Days</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid min-h-[200px] grid-flow-col items-end justify-items-center gap-4 px-3">
                                        {completionData.map((item, index) => (
                                            <div key={index} className="flex h-full w-full flex-col items-center justify-end gap-2">
                                                <div className="w-full rounded-full bg-indigo-100" style={{ height: `${item.totalHeight}%` }}>
                                                    <div className="h-full w-full rounded-full bg-[var(--secondary-color)]" style={{ height: `${item.filledHeight}%` }}></div>
                                                </div>
                                                <p className="text-xs font-medium text-[var(--subtle-text)]">{item.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="mb-4 text-xl font-bold text-[var(--neutral-text)]">Quiz Scores</h2>
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <p className="text-base font-medium text-[var(--subtle-text)]">Average Quiz Scores</p>
                                            <p className="text-3xl font-bold text-[var(--neutral-text)]">78%</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium text-[var(--danger-color)]">-2%</p>
                                            <p className="text-sm text-[var(--subtle-text)]">Last 30 Days</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex min-h-[200px] flex-col justify-center">
                                        <QuizScoresChart />
                                        <div className="mt-2 flex justify-around border-t border-gray-200 pt-2">
                                            <p className="text-xs font-medium text-[var(--subtle-text)]">Week 1</p>
                                            <p className="text-xs font-medium text-[var(--subtle-text)]">Week 2</p>
                                            <p className="text-xs font-medium text-[var(--subtle-text)]">Week 3</p>
                                            <p className="text-xs font-medium text-[var(--subtle-text)]">Week 4</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="lg:col-span-2">
                                <h2 className="mb-4 text-xl font-bold text-[var(--neutral-text)]">Chapter Participation</h2>
                                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <p className="text-base font-medium text-[var(--subtle-text)]">Participation Rates per Chapter</p>
                                            <p className="text-3xl font-bold text-[var(--neutral-text)]">92%</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-sm font-medium text-[var(--success-color)]">+3%</p>
                                            <p className="text-sm text-[var(--subtle-text)]">Last 30 Days</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4">
                                      {participationData.map((item, index) => (
                                          <React.Fragment key={index}>
                                              <p className="text-sm font-medium text-[var(--subtle-text)]">{item.label}</p>
                                              <div className="h-4 w-full rounded-full bg-indigo-100">
                                                  <div className="h-full rounded-full bg-[var(--secondary-color)]" style={{ width: `${item.progress}%` }}></div>
                                              </div>
                                          </React.Fragment>
                                      ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CourseStatsPage;