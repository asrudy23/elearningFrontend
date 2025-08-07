import React from 'react';

// NOTE: Dans une application React :
// 1. Le contenu de <head> (meta, title, link pour les polices) irait dans public/index.html.
// 2. La configuration de Tailwind CSS et les variables CSS (:root, classes @apply) iraient dans les fichiers de configuration et CSS globaux (tailwind.config.js, index.css).

// --- Données des utilisateurs (au lieu de les coder en dur) ---
const usersData = [
  {
    name: 'Sophia Clark',
    email: 'sophia.clark@email.com',
    role: 'Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzif4H8LWdGowvJZqjI1N6XU8Sb-5SnydyIciGS4p1SxERu78uoaMDojWB16U7yZbO0cKdH_n1agBnN8Y7KEi4HgPp0ofXN_jowjPNsLTyqFsmTdHq9wwFrNlpMvC0MCVjpRlaKlIhcB2G7P8HqOuhrDN-qd2dT8b-R_h2Zf3MNdjFzSCzYYw5st580-DlGdLWIV3Ho5ul_iBDE5YJve9lg00vyEgqzVvqpTDryDrr4obDIDJwwmnHAUiEPQWxiLKShPdYRukoLFQ',
  },
  {
    name: 'Ethan Bennett',
    email: 'ethan.bennett@email.com',
    role: 'Instructor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbN9lG6lf5T0IH3m6weCD09FKs2e7LPSDGUfOUPGNTTprluelSaBRum-TIUtLUjOjN6P59shq6Ecp34C-1hDKBVPrZwWsJ-RYMMIcsKBwLRaHUwhLy3BqSIw0JCwLHZGsf7Cr7GG3Fr7UoA7isZLgKCUXD2K1B_2g0cio7JBMt3zROy4KhekGy_0v3hi4iMKn0-GsQ53B2dKmb1XtoyeFL2cpctR0MiPwMlpB8Yl_WOWXgWYU-ntX9I1IFnQpU8-ND3l_lHPO7F3g',
  },
  {
    name: 'Olivia Carter',
    email: 'olivia.carter@email.com',
    role: 'Student',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlFuyZHyNkhm2qg_V468KgQfhZXKPAZJsKZLTULsXbelee62oEIBXeMMs_YX4qWVU9FrMuaQqpdLVVyf9wmIsXYsogTtqcuK2Kz76CIxcCX9x8uRmhAwrfFhcITHSOWx-eWBJH1J5680eYgoI3O6i3QLZhK2zc-nRsQmTOvdypMuZ531vvjZflKcgquBjQPZbHd1lVKHywAiRv7dgLCbKIGVuvS3bJm1OXO9ZI-LeDwM91JA3zrhvO0Upgmz0JosqXGKZs-x-Fypg',
  },
  {
    name: 'Liam Harper',
    email: 'liam.harper@email.com',
    role: 'Student',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHrejS8Ds4ZGrDw0n3JJHfNqB1J8_AvnITnlvqwAzmwmrSUgdbL7VI8sFzgYO5NZefob_310lqo1Riy-z0ZBKz6IL4_hiyqIvHzOsDTOmpsEp3YZQMgOoSWxjLDVsrKA3FKoEUHwT4BlTCd_GcmRE-1MbKFhxFBPjloN9KGDf_f0TxFczcErbpkHwfbKt5IDXqss3ZqUzA2pLn886MzhdHbAYD7swGeNr91vOQldsbgIHYPzKt1Tzi_MOO1s7WzBEqGiuRBgl_1Wg',
  },
  {
    name: 'Ava Foster',
    email: 'ava.foster@email.com',
    role: 'Instructor',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVdc-dxOgfUGrWr6gl5O1leP3vuY2dw2LGUzkxeoBRqZzDVFf77l9iCCbYQ1CZhrTiK8Y4lQlftFRR-UM3sW0YvTg75NKliwRMz8LSLicrBdXKnOzgjqd_769vB0hdOqp47XcNQygIhI0cMChwaj3Jebe-Qt71jyYq7fkZHrQjujWxPgriTk3XDHNYQjPkT6Rot4_1kKeZoYopgHcl2f7qO2SU_nTm9IkDbaICoeQDXTfNKfigdDd3TZWgF_BklWXerhg8xQclbHg',
  },
];


// --- Sous-composants ---

const Header = () => (
  <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-2" href="#">
            <div className="size-8 text-[var(--primary-color)]">
              <svg className="logo-icon" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-[var(--primary-color)]">EPG</h1>
          </a>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Courses</a>
          <a className="nav-link" href="#">Instructors</a>
          <a className="nav-link text-[var(--primary-color)] font-semibold" href="#">Users</a>
          <a className="nav-link" href="#">Settings</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <svg className="h-6 w-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC90r49S4amHtq2rNasO7KeFB8eiZSIYS6z-sDqYMSLitcdU2ex02wz25kCOfc8ScpEXTt6NQCIg8YarJrqFwAb0q29IJ4tOp3XHHNYd_pa_nUyf0WvlsEJejQJ8lKaTMT94pQ2AszNOeuLbtx4ka6gsG5VYi_ERTNwrcgDupdPH8u7cxv8Vt0PrMcVzi_YxMEM_-3AlLfQDtgoFsWuQC9lytdabHDCd5EHHONfUo5eaAb4mgWFsLrPHEx4HedAwRDp7UQxohg5fpU")` }}></div>
        </div>
      </div>
    </div>
  </header>
);

const UserTableRow = ({ user }) => {
  const roleBadgeMap = {
    Admin: 'badge-admin',
    Instructor: 'badge-instructor',
    Student: 'badge-student',
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4">
        <div className="flex items-center gap-3">
          <img alt={`${user.name}'s avatar`} className="h-10 w-10 rounded-full" src={user.avatar} />
          <span className="font-medium text-text-primary">{user.name}</span>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">{user.email}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 ${roleBadgeMap[user.role] || ''}`}>
          {user.role}
        </span>
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
        <div className="flex items-center justify-end gap-4">
          <a className="text-gray-500 hover:text-[var(--primary-color)]" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg></a>
          <a className="text-gray-500 hover:text-yellow-600" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" x2="19.07" y1="4.93" y2="19.07"></line></svg></a>
          <a className="text-gray-500 hover:text-red-600" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg></a>
        </div>
      </td>
    </tr>
  );
};

const UserTable = ({ users }) => (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 p-4">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
          </svg>
          <input className="w-full rounded-full border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:w-64" placeholder="Search users..." type="text" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-text-secondary">Filter by:</span>
          <select className="rounded-full border-gray-300 py-2 pl-3 pr-8 text-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Instructor</option>
            <option>Student</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary" scope="col">Name</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary" scope="col">Email</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary" scope="col">Role</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-text-secondary text-right" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => <UserTableRow key={user.email} user={user} />)}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-text-secondary">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">20</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#"><span className="sr-only">Previous</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" fillRule="evenodd"></path></svg></a>
                <a aria-current="page" className="relative z-10 inline-flex items-center bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-color)]" href="#">1</a>
                <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#">2</a>
                <a className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex" href="#">3</a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" href="#"><span className="sr-only">Next</span><svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" fillRule="evenodd"></path></svg></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
);

// --- Composant Principal ---

const UsersPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background-color">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary">User Management</h2>
              <p className="mt-1 text-base text-text-secondary">Manage users and their roles within the platform.</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary-color)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2">
              <svg className="h-5 w-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add User
            </button>
          </div>
          <UserTable users={usersData} />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;