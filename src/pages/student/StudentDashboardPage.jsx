import React from 'react';
/*

  NOTE SUR L'INTÉGRATION DANS UN PROJET REACT :
  Le contenu de la balise <head> de l'HTML original (ci-dessous) doit généralement
  être placé dans le fichier `public/index.html` de votre projet React,
  ou géré avec des outils spécifiques comme le composant <Head> de Next.js.
  */



const StudentDashboardPage = () => {
  return (
    <div className="bg-[var(--surface-secondary)] text-[var(--text-primary)]">
      <div className="relative flex min-h-screen">
        <aside className="w-64 bg-[var(--surface-primary)] flex-shrink-0 p-6 flex flex-col justify-between border-r border-[var(--border-color)]">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMZeBnK0ay8aRQ0rqDiUfcK5YDMmgIw-IP_CYeYzJ2VA2d7G_KfqoMMC69wiUyaa_IBiH-4ak8CDHWdfU-Q2VMiNFw76hfXRnOATaPAu1-iBW9JZKzxXAxgPBnWpuO54qvBzxS8O2kSSs7oUvRzraKH_SfEahXonJgaB27jsFBx1USw3I8H-2rl3NO1gRVn-55CqYfYHt91RRqf2I_Qc8I9kT0RaOyfaq2-irjdTeVhSCYhO5HJLlBicvrBQeEUwiQlGqgnzowFOY")',
                }}
              ></div>
              <div>
                <h1 className="text-base font-bold text-[var(--text-primary)]">Sophia</h1>
                <p className="text-sm text-[var(--text-secondary)]">Student</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[var(--brand-secondary)] text-[var(--brand-primary)] font-semibold" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                </svg>
                <span>Home</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
                </svg>
                <span>Courses</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                </svg>
                <span>Calendar</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"></path>
                </svg>
                <span>Messages</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium transition-colors" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
                <span>Settings</span>
              </a>
            </nav>
          </div>
          <div></div>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">In Progress</h2>
                <div className="bg-[var(--surface-primary)] rounded-2xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3 h-48 md:h-full">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2XmNtkfr-9G9-jJQhx1sJSMMsFQEsTucyS0yQWKKBIeF6eaR7PE6EtRYHA4zjgsVk49pkYGdIossWC_DJ7LpoHidMOVqmLcK17AKiKXiV_fjVpOS4LGkHMPMvnpF7bXEpXyO0Peki9St7_XgnrAZUbcjE0EjHUVapM1Kd3OfQFhr0PeNNjg8hC1duHvbnqxBov5FYPGyRZBiga8SyEGZ8gBAIe-OoaI4OS4De8cO2Loh72mfUJHOs_GjWaQqVUdBPByxuqyXHVEQ")',
                      }}
                    ></div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Introduction to Programming</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Learn the basics of coding with Python.</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[var(--brand-primary)] h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                      <span>Course Progress</span>
                      <span>60%</span>
                    </div>
                    <button className="w-full md:w-auto px-6 py-2 bg-[var(--brand-primary)] text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Completed Courses</h2>
                <div className="bg-[var(--surface-primary)] rounded-2xl shadow-sm p-6 flex items-center gap-6">
                  <div className="w-1/3 h-40">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA12X6u0Vv-n92iDfbjin7x2F6hZgvlX6U6_q70RbtoUD95GBA2SRdSqvnWtkDkeh7WPWpelK17vEjqmdTpkEd-vYlZ0earNIOz_-ROf8wsYI0oWlYXIOdAsSKhVx8zig-p0wGJd-lRuUrCvbgMAFRYF9G23DAhmGl9SMLXOi633GDFsepIZRuGB1QVrlzxLh2rCyXFYMkSgbuTSl6gyB2pX0pUyvujLH4YBHcj1zX8L9U3rnAW2iCzhMa8NVrQ6aMT-2HNalFo3A")',
                      }}
                    ></div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Digital Marketing Fundamentals</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Master the core concepts of digital marketing.</p>
                    <button className="w-full md:w-auto px-6 py-2 bg-[var(--brand-secondary)] text-[var(--brand-primary)] rounded-full font-semibold hover:bg-gray-200 transition-colors">
                      View Certificate
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Notifications</h2>
                <div className="bg-[var(--surface-primary)] rounded-2xl shadow-sm p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="icon-wrapper">
                      <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Quiz: Module 3 - Programming Logic</p>
                      <p className="text-sm text-[var(--text-secondary)]">Due in 2 days</p>
                    </div>
                  </div>
                  <hr className="border-[var(--border-color)]" />
                  <div className="flex items-start gap-4">
                    <div className="icon-wrapper">
                      <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">Module 4: Data Structures</p>
                      <p className="text-sm text-[var(--text-secondary)]">New content available</p>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="bg-gradient-to-br from-[var(--brand-primary)] to-indigo-800 rounded-2xl shadow-sm p-6 text-white text-center space-y-4">
                  <div className="mx-auto bg-white/20 p-3 rounded-full w-fit">
                    <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Need Help?</h3>
                  <p className="text-sm opacity-80">Our AI chatbot is here to assist you with any questions about your courses.</p>
                  <button className="w-full px-6 py-3 bg-white text-[var(--brand-primary)] rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                    Start Chat
                  </button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboardPage;