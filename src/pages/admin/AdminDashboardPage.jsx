import React from 'react';

// NOTE: Dans une application React typique :
// 1. Le contenu de <head> (meta, title, link pour les polices) serait dans le fichier public/index.html.
// 2. Le script CDN de Tailwind est remplacé par une installation via npm/yarn et une configuration dans `tailwind.config.js`.
// 3. Les variables CSS globales (:root) seraient définies dans votre fichier CSS principal (par exemple, `index.css`).

const AdminDashboardPage = () => {
  // Le style du <body> est appliqué ici à la div racine du composant.
  // Idéalement, ce serait un style global.
  const bodyStyle = {
    fontFamily: '"Work Sans", "Noto Sans", sans-serif',
  };

  return (
    <div className="bg-background" style={bodyStyle}>
      <div className="relative flex size-full min-h-screen flex-col group/design-root">
        <div className="flex flex-1">
          <aside className="flex flex-col w-64 bg-white border-r border-muted">
            <div className="p-6">
              <h1 className="text-xl font-bold text-foreground">EPG Admin</h1>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[var(--primary-color)] text-[var(--primary-foreground)] font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
                </svg>
                <span>Dashboard</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                </svg>
                <span>Users</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
                </svg>
                <span>Courses</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                </svg>
                <span>Settings</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
                <span>Help</span>
              </a>
            </nav>
            <div className="mt-auto p-4">
              <a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-secondary text-foreground font-medium" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
                </svg>
                <span>View Site</span>
              </a>
            </div>
          </aside>
          <main className="flex-1 p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-muted-foreground font-medium">Total Students</p>
                <p className="text-3xl font-bold text-foreground mt-2">1,234</p>
                <p className="text-success font-medium mt-1">+12%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-muted-foreground font-medium">Total Teachers</p>
                <p className="text-3xl font-bold text-foreground mt-2">123</p>
                <p className="text-success font-medium mt-1">+5%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-muted-foreground font-medium">Total Courses</p>
                <p className="text-3xl font-bold text-foreground mt-2">456</p>
                <p className="text-success font-medium mt-1">+8%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-muted-foreground font-medium">Recent Registrations</p>
                <p className="text-3xl font-bold text-foreground mt-2">78</p>
                <p className="text-success font-medium mt-1">+15%</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full bg-[var(--primary-color)] text-[var(--primary-foreground)] font-bold">
                  Manage Users
                </button>
                <button className="px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-bold">
                  Manage Courses
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-6 py-4 text-sm font-bold text-foreground uppercase tracking-wider">User</th>
                        <th className="px-6 py-4 text-sm font-bold text-foreground uppercase tracking-wider">Role</th>
                        <th className="px-6 py-4 text-sm font-bold text-foreground uppercase tracking-wider">Course</th>
                        <th className="px-6 py-4 text-sm font-bold text-foreground uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-muted">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-foreground">Ethan Harper</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Student</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Introduction to Programming</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">2024-07-26</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-foreground">Olivia Bennett</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Teacher</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Advanced Mathematics</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">2024-07-25</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-foreground">Noah Carter</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Student</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Digital Marketing Fundamentals</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">2024-07-24</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-foreground">Ava Mitchell</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Teacher</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Creative Writing Workshop</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">2024-07-23</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-foreground">Liam Foster</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Student</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">Data Science Essentials</td>
                        <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">2024-07-22</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;